import StatsOverview from "./StatsOverview";
import { useEffect, useState, useContext } from "react";
import ApiChess from "../api/apiChess";
import { UserContext } from "../context/UserContext";


function MyStats() {
  const { guestId } = useContext(UserContext);
  const [games, setGames] = useState([])

  useEffect(() => {
    async function getAllFinishedGames() {
      const game = ApiChess.getAPI();
      const data = await game.getAllFinishedGames(guestId);
      setGames(data)
    }
    getAllFinishedGames();
  }, [guestId])

  return (
    <div className="flex flex-col">

      <StatsOverview
        games={games}
      />

    </div>
  )
}
export default MyStats;