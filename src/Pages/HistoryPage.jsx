import ApiChess from "../api/apiChess";
import { createGameInfo } from "../Chess/Board";
import NavBar from "../Components/NavBar";
import { Navigate, useNavigate } from "react-router-dom";

function HistoryPage() {
  const navigate = useNavigate();
  async function createGame() {
    const game = ApiChess.getAPI();
    const id = await game.createGame(createGameInfo)
    navigate(`/game/${id}`)
  }

  return (
    <>
      <NavBar />
      <button className="bg-amber-500 ring-2 ring-black"
        onClick={() => { createGame() }} >
        Create Game
      </button>
    </>
  )
}
export default HistoryPage;