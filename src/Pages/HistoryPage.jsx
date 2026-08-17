import ApiChess from "../api/apiChess";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HistoryCard from "../components/HistoryCard";
import HistoryNavBar from "../components/HistoryNavBar";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import DeleteModal from "../modals/DeleteModal";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import FooterHistoryPage from "../components/FooterHistoryPage";
import HeaderHistoryPage from "../components/HeaderHistoryPage";

function HistoryPage() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState("all")
  const [page, setPage] = useState(1)
  const { guestId } = useContext(UserContext);
  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedGameId, setSelectedGameId] = useState(null)

  useEffect(() => {
    if (!guestId) return;

    async function getAllGames() {
      const game = ApiChess.getAPI();
      const data = await game.getAllGames(page, 10, guestId);
      setGames(data.result);
    }
    getAllGames();
  }, [page, guestId])

  async function deleteGame(id) {
    const api = ApiChess.getAPI();
    const del = await api.deleteGame(id)
    setGames((prev) => prev.filter((game) => game.id !== id))
  }

  const filteredGames = games.filter((game) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "unfinished") {
      return (game.game_status === filter ||
        game.game_status === "waiting"
      )
    }
    return game.game_status === filter
  })

  return (

    <motion.main className="flex gap-5 flex-col px-8 mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >

      <HeaderHistoryPage />

      <HistoryNavBar
        games={games}
        filter={filter}
        setFilter={setFilter}
      />

      <div className="flex flex-col gap-3">
        {
          filteredGames.map((game) => {
            return (
              < div key={game.id}>
                <HistoryCard
                  game={game}
                  setDeleteModal={setDeleteModal}
                  setSelectedGameId={setSelectedGameId}
                  guestId={guestId}
                />
              </div>
            )
          })
        }
      </div>

      <FooterHistoryPage />

      <Pagination
        games={games}
        page={page}
        setPage={setPage}
      />

      <DeleteModal
        id={selectedGameId}
        deleteFunction={deleteGame}
        open={deleteModal}
        setDeleteModal={setDeleteModal}
      />

    </motion.main>


  )
}
export default HistoryPage;