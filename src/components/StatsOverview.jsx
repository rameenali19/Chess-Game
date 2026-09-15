import { useEffect, useState, useContext } from "react";
import ApiChess from "../api/apiChess";
import { UserContext } from "../context/UserContext";

function StatsOverview() {
  const { guestId } = useContext(UserContext);
  const [totalGames, setTotalGames] = useState(null);
  const [totalWin, setTotalWin] = useState(null)
  const [totalLost, setTotalLost] = useState(null)
  const [totalDraw, setTotalDraw] = useState(null)
  const statDivs =[
    {
      
    }
  ]

  useEffect(() => {
    async function getAllFinishedGames() {
      const game = ApiChess.getAPI();
      const data = await game.getAllFinishedGames(guestId);
      setTotalGames(data.length)
      const won = data.filter(
        game => game.winner === game.player_color
      ).length;
      setTotalWin(won);
      const draw = data.filter(
        game => game.winner === "Draw"
      ).length;
      setTotalWin(draw);

      const lost = totalGames - won - draw;
      setTotalLost(lost)
    }
    getAllFinishedGames();
  }, [guestId])

  return (
    <div className="flex flex-col">
      <div className="font-playfair text-[#17384A] flex">
        
      </div>
    </div>
  )
}
export default StatsOverview;