import ApiChess from "../api/apiChess";
import { createGameInfo } from "../Chess/Board";
import NavBar from "../Components/NavBar";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
      console.log(data)
      setGames(data);
    }
    getAllGames();
  }, [])

  return (
    <>
      <NavBar />
      <button className="bg-amber-500 ring-2 ring-black"
        onClick={() => { createGame() }} >
        Create Game
      </button>
      {
        games.map((game) => {
          return (
            <div key={game.id}
              onClick={() => {
                navigate(`/game/${game.id}`)
              }}
              className="hover:cursor-pointer"
            >
              Game # {game.id}
            </div>
          )
        })
      }

    </>
  )
}
export default HistoryPage;