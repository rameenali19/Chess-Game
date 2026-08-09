import ApiChess from "../api/apiChess";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HistoryButton from "../Components/HistoryButton";
import HistoryNavBar from "../Components/HistoryNavBar";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function HistoryPage() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState("all")
  const [page, setPage] = useState(1)
  const { guestId } = useContext(UserContext);


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

    <motion.main className="ml-52 p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >

      <div className="flex justify-between items-center mb-10 ">

        <h1 className="text-3xl font-semibold text-[#17384A] font-cormorant">
          Game History
        </h1>

        <button className="bg-amber-600 text-[rgb(248,240,225)] px-5 py-2 rounded-lg 
        hover:cursor-pointer hover:text-amber-600 hover:bg-[rgb(248,240,225)] font-inter 
        transition-all duration-200 hover:ring-2 hover:ring-amber-600 mx-15"

          onClick={() => { navigate(`/modeSelection`) }} >

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
         h-15 w-full flex items-center justify-center mt-4">
        <div>
          <img className="object-contain w-12 h-8"
            src="/bulb.png" alt="bulb image"
          ></img>
        </div>
        <div>
          Continue unfinished games or review completed matches
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        {
          page > 1 && (

            <button className="text-lg font-inter text-[#17384A] hover:cursor-pointer hover:underline hover:decoration-2 hover:decoration-amber-600 hover:underline-offset-4 hover:text-amber-600"
              onClick={() => {
                setPage(page - 1)
              }}
            >
              Previous Page
            </button>
          )
        }
        {
          games.length === 10 && (
            <button className="text-lg font-inter text-[#17384A] hover:cursor-pointer hover:underline hover:decoration-2 hover:decoration-amber-600 hover:underline-offset-4 hover:text-amber-600"
              onClick={() => {
                setPage(page + 1)
              }}
            >
              Next Page
            </button>
          )
        }
      </div>

    </motion.main>


  )
}
export default HistoryPage;