import { useState } from "react";

function WinLossRate({ totalGames, totalWin, totalLost }) {
  const winRate = (totalGames / totalWin) * 100;
  const lostRate = (totalGames / totalLost) * 100;

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
    <div className="flex bg-[#FFF8EA] ">

    </div>
  )
}
export default WinLossRate;