import StatsOverview from "./StatsOverview";
import { useEffect, useState, useContext } from "react";
import ApiChess from "../api/apiChess";
import { UserContext } from "../context/UserContext";
import WinLossRate from "./WinLossRate";
import Performance from "./Performance";

function MyStats() {
  const { guestId } = useContext(UserContext);
  const [games, setGames] = useState([])
  const [totalGames, setTotalGames] = useState(0);
  const [totalWin, setTotalWin] = useState(0);
  const [totalLost, setTotalLost] = useState(0);
  const [totalDraw, setTotalDraw] = useState(0);
  const [singlePlayerGames, setSinglePlayerGames] = useState(0);
  const [multiplayerGames, setMultiplayerGames] = useState(0);
  const [aiGames, setAiGames] = useState(0);
  const [singlePlayerWon, setSinglePlayerWon] = useState(0);
  const [multiplayerWon, setMultiplayerWon] = useState(0);
  const [aiWon, setAiWon] = useState(0);
  const [singlePlayerLost, setSinglePlayerLost] = useState(0);
  const [multiplayerLost, setMultiplayerLost] = useState(0);
  const [aiLost, setAiLost] = useState(0);


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

      const singleplayerCount = data.filter(
        game => game.mode === "singleplayer"
      ).length;
      setSinglePlayerGames(singleplayerCount)

      const multiplayerCount = data.filter(
        game => game.mode === "multiplayer"
      ).length;
      setMultiplayerGames(multiplayerCount)

      const aiCount = data.filter(
        game => game.mode === "ai"
      ).length;
      setAiGames(aiCount)

      const singlePlayerWinCount = data.filter(
        game => game.mode === "singleplayer" && game.winner === game.player_color
      ).length;
      setSinglePlayerWon(singlePlayerWinCount)

      const multiplayerWinCount = data.filter(
        game => game.mode === "multiplayer" && game.winner === game.player_color
      ).length;
      setMultiplayerWon(multiplayerWinCount)


      const aiWinCount = data.filter(
        game => game.mode === "ai" && game.winner === game.player_color
      ).length;
      setaiWon(aiWinCount)

      const singlePlayerLoseCount = singlePlayerGames - singlePlayerWon;
      setSinglePlayerLost(singlePlayerLoseCount)
      const multiplayerLoseCount = multiplayerGames - multiplayerWon;
      setMultiplayerLost(multiplayerLoseCount)
      const aiLoseCount = aiGames - aiWon;
      setAiLost(aiLoseCount)
    }

    getAllFinishedGames();
  }, [guestId])

  return (
    <div className="flex flex-col items-center gap-10">

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

      <Performance />
    </div>
  )
}
export default MyStats;