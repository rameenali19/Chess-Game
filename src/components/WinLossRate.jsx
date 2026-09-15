import { useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
    <div className="flex gap-10">
      {
        circle.map((rate) => {
          return (
            <div key={rate.text}
              className="flex bg-[#FFF8EA]">

              <div className="w-27 h-27">
                <CircularProgressbar
                  value={rate.rate}
                  text={`${rate.rate}%`}
                  strokeWidth={5}
                  styles={buildStyles({
                    textColor: rate.color,
                    pathColor: rate.color,
                    textSize: "14px"
                  })}
                />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default WinLossRate;