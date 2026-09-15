import { useEffect, useState, useContext } from "react";
import ApiChess from "../api/apiChess";
import { UserContext } from "../context/UserContext";

function StatsOverview() {
  const { guestId } = useContext(UserContext);
  const [totalGames, setTotalGames] = useState(null);
  const [totalWin, setTotalWin] = useState(null)
  const [totalLost, setTotalLost] = useState(null)
  const [totalDraw, setTotalDraw] = useState(null)

  useEffect(() => {
    async function getAllFinishedGames() {
      const game = ApiChess.getAPI();
      const data = await game.getAllFinishedGames(guestId);
      setTotalGames(data.length)
      
    }
    getAllFinishedGames();
  }, [guestId])

  return (
    <div className="flex flex-col">
      <div className="font-playfair text-[#17384A] font-semibold text-2xl">
        Your Statistics
      </div>
    </div>
  )
}
export default StatsOverview;