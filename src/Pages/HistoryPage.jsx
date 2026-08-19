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
  const [page, setPage] = useState(1)
  const { guestId } = useContext(UserContext);
  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedGameId, setSelectedGameId] = useState(null)
  const [status, setStatus] = useState(null)
  const [total, setTotal] = useState(0)
  let unfinishedGames = 0;
  useEffect(() => {
    if (!guestId) return;

    async function getAllGames() {
      const game = ApiChess.getAPI();
      const data = await game.getAllGames(page, 10, guestId, status);
      setGames(data.result);
      setTotal(data.total)
    }
    getAllGames();
  }, [page, guestId, status])

  async function deleteGame(id) {
    const api = ApiChess.getAPI();
    const del = await api.deleteGame(id)
    setGames((prev) => prev.filter((game) => game.id !== id))
  }

  useEffect(() => {
    setPage(1)
  }, [status])

  return (

    <main className="page flex gap-5 flex-col px-8 mb-2">

      <HistoryHeader />

      <HistoryNavbar
        status={status}
        setStatus={setStatus}
      />

      <div className="flex flex-col gap-3">
        {
          games.map((game) => {
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
        total={total}
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