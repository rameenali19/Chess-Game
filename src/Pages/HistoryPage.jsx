import ApiChess from "../api/apiChess";
import { createGameInfo } from "../Chess/Board";
import NavBar from "../Components/NavBar";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HistoryButton from "../HistoryPageComponents/HistoryButton";
import HistoryNavBar from "../HistoryPageComponents/HistoryNavBar";


function HistoryPage() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState("all")

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

  const filteredGames = games.filter((game) => {
    if (filter === "all") {
      return true;
    }
    else {
      return game.game_state === filter
    }
  })

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

        <HistoryNavBar
          games={games}
          filter={filter}
          setFilter={setFilter}
        />

        <div className="flex flex-col gap-2">
          {
            filteredGames.map((game) => {
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

        <div className="font-inter text-lg text-[#17384A] bg-[#FFF7EA] shadow-sm border 
        border-[#E8DCC7] px-6 hover:shadow-md hover:-translate-y-0.5 transition rounded-lg
         h-15 w-full max-w-4xl flex items-center justify-center">
          <div>
            Save, continue and delete games
          </div>
        </div>

      </main>

    </div>
  )
}
export default HistoryPage;