import ApiChess from "../api/apiChess";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HistoryButton from "../Components/HistoryButton";
import HistoryNavBar from "../Components/HistoryNavBar";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import DeleteModal from "../Modals/DeleteModal";
import Button from "../Components/Button";

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
      <div className="flex justify-between items-center mt-5 mb-5">

        <h1 className="text-3xl font-semibold text-[#17384A] font-cormorant">
          Game History
        </h1>

        <Button
          text="+ New Game"
          variant="primary"
          textSize="normal"
          fontWeight="normal"
          onClick={() => navigate("/modeSelection")}
          className="w-35 h-10"
        />

      </div>

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
                <HistoryButton
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

      <div className="font-inter text-lg text-[#17384A] bg-[#FFF7EA] shadow-sm border 
        border-[#E8DCC7] px-6 hover:shadow-md hover:-translate-y-0.5 transition rounded-lg
         h-15 w-full flex items-center justify-center">
        <img className="object-contain w-12 h-8"
          src="/bulb.png" alt="bulb image"
        ></img>
        <div>
          Continue unfinished games or review completed matches
        </div>
      </div>
      <div className="flex justify-between">

        {page > 1 && (
          <Button
            text="Previous Page"
            variant="outline"
            textSize="large"
            fontWeight="normal"
            onClick={() => {
              setPage(page - 1)
            }}
          />

        )}
        {games.length >= 10 && (
          <Button
            text="Next Page"
            variant="outline"
            textSize="large"
            fontWeight="normal"
            onClick={() => {
              setPage(page + 1)
            }}
          />
        )}

      </div>

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