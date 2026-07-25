import ApiChess from "../api/apiChess";
import { createGameInfo } from "../Chess/Board";
import NavBar from "../Components/NavBar";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HistoryButton from "../Components/HistoryButton";

function HistoryPage() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  async function createGame() {
    const game = ApiChess.getAPI();
    const id = await game.createGame(createGameInfo)
    navigate(`/game/${id}`)
  }

  useEffect(() => {
    async function getAllGames() {
      const game = ApiChess.getAPI();
      const data = await game.getAllGames();
      setGames(data);
    }
    getAllGames();
  }, [])

  return (
    <>
      <NavBar />
      <div className="flex">
        Game History
        <button className="bg-amber-500 ring-2 ring-black"
          onClick={() => { createGame() }} >
          Create Game
        </button>
      </div>



      <div className="flex flex-col gap-4 mx-6">
        {
          games.map((game) => {
            return (
              < div key={game.id}>
                <HistoryButton
                  id={game.id} />
              </div>
            )
          })
        }

      </div>


    </>
  )
}
export default HistoryPage;