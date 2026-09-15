import StatsOverview from "./StatsOverview";
import { useEffect, useState, useContext } from "react";
import ApiChess from "../api/apiChess";
import { UserContext } from "../context/UserContext";
import WinLossRate from "./WinLossRate";

function MyStats() {
  const { guestId } = useContext(UserContext);
  const [games, setGames] = useState([])
  const [totalGames, setTotalGames] = useState(0);
  const [totalWin, setTotalWin] = useState(0)
  const [totalLost, setTotalLost] = useState(0)
  const [totalDraw, setTotalDraw] = useState(0)

  useEffect(() => {
    async function getAllFinishedGames() {
      const game = ApiChess.getAPI();
      const data = await game.getAllFinishedGames(guestId);
      setGames(data)

      setTotalGames(data.length)
      const won = data.filter(
        game => game.winner === game.player_color
      ).length;
      setTotalWin(won);
      const draw = data.filter(
        game => game.winner === "Draw"
      ).length;
      setTotalDraw(draw);

      const lost = data.length - won - draw;
      setTotalLost(lost)
    }
    getAllFinishedGames();
  }, [guestId])

  return (
    <div className="flex flex-col">

      <StatsOverview
        totalGames={totalGames}
        totalWin={totalWin}
        totalLost={totalLost}
        totalDraw={totalDraw}
      />

      <WinLossRate
        totalGames={totalGames}
        totalWin={totalWin}
        totalLost={totalLost}
      />

    </div>
  )
}
export default MyStats;