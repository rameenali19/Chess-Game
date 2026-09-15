import { useState, useContext } from "react";
import LeaderboardHeader from "../components/LeaderboardHeader";
import LeaderboardNavbar from "../components/LeaderboardNavbar";
import ApiChess from "../api/apiChess";
import MyStats from "../components/MyStats";
import GlobalStats from "../components/GlobalStats";
import { UserContext } from "../context/UserContext";

function LeaderboardPage() {

  const [status, setStatus] = useState("myStats")
  const { guestId } = useContext(UserContext);
  const [totalGames, setTotalGames] = useState(0);
  const [totalWin, setTotalWin] = useState(0)
  const [totalLost, setTotalLost] = useState(0)
  const [totalDraw, setTotalDraw] = useState(0)

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
      setTotalDraw(draw);

      const lost = totalGames - won - draw;
      setTotalLost(lost)
    }
    getAllFinishedGames();
  }, [guestId])

  return (
    <main className="page flex gap-5 flex-col px-8 mb-2">

      <LeaderboardHeader />

      <LeaderboardNavbar
        setStatus={setStatus}
      />

      {
        status === "myStats" && (
          <MyStats />
        )
      }

      {
        status === "globalStats" && (
          <GlobalStats />
        )
      }

    </main>
  )
}
export default LeaderboardPage;