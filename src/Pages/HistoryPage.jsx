import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import ApiChess from "../api/apiChess";
import HistoryCard from "../components/HistoryCard";
import HistoryNavbar from "../components/HistoryNavbar";
import DeleteModal from "../modals/DeleteModal";
import Pagination from "../components/Pagination";
import HistoryFooter from "../components/HistoryFooter";
import HistoryHeader from "../components/HistoryHeader";

function HistoryPage() {
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

    <main className="page flex gap-5 flex-col px-8 mb-2">

      <HistoryHeader />

      <HistoryNavbar
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

      <HistoryFooter />

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

    </main>

  )
}
export default HistoryPage;