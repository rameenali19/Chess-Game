import ApiChess from "../api/apiChess";
import { createGameInfo } from "../Chess/Board";
import NavBar from "../Components/NavBar";

function HistoryPage() {
  async function createGame() {
    const game = ApiChess.getAPI();
    const test = await game.createGame(createGameInfo)
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