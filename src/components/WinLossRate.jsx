import { useState } from "react";

function WinLossRate({ totalGames, totalWin, totalLost }) {
  const [winRate, setWinRate] = useState(0)
  const [lostRate, setLostRate] = useState(0)
  const win = (totalGames / totalWin) * 100;
  setWinRate(win)
  const lost = (totalGames / totalLost) * 100;
  setLostRate(lost)
  const circle = [
    {
      text: "Win Rate",
      fillerWord: "wins",
      rate: winRate,
      color: "#35843C"
    },
    {
      text: "Loss Rate",
      fillerWord: "losses",
      rate: lostRate,
      color: "#D9413A"
    }
  ]

  return (

  )
}
export default WinLossRate;