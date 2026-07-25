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

  async function deleteGame(id) {
    const api = ApiChess.getAPI();
    const del = await api.deleteGame(id)
    setGames((prev) => prev.filter((game) => game.id !== id))
  }

  return (
    <div className="bg-[rgb(248,240,225)] min-h-screen ">

      <NavBar />

      <main className="ml-52 p-10">

        <div className="flex justify-between items-center mb-10 ">

          <h1 className="text-3xl font-semibold text-[#17384A] font-cormorant">
            Game History
          </h1>

          <button className="bg-amber-600 text-[rgb(248,240,225)] px-5 py-2 rounded-lg 
        hover:cursor-pointer hover:text-amber-600 hover:bg-[rgb(248,240,225)] font-inter 
        transition-all duration-200 hover:ring-2 hover:ring-amber-600 mx-15"

            onClick={() => { createGame() }} >

            + New Game

          </button>
        </div>

        <div className="flex flex-col gap-2">
          {
            games.map((game) => {
              return (
                < div key={game.id}>
                  <HistoryButton
                    game={game}
                    deleteGame={deleteGame}

                  />
                </div>
              )
            })
          }

        </div>

      </main>

    </div>
  )
}
export default HistoryPage;