import { useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function WinLossRate({ totalGames, totalWin, totalLost }) {
  const winRate = (totalWin / totalGames) * 100;
  const lostRate = (totalLost / totalGames) * 100;

  const circle = [
    {
      text: "Win Rate",
      fillerWord: "wins",
      rate: winRate,
      color: "#35843C",
      value: totalWin
    },
    {
      text: "Loss Rate",
      fillerWord: "losses",
      rate: lostRate,
      color: "#D9413A",
      value: totalLost
    }
  ]

  return (
    <div className="flex gap-10 bg-[#FFF8EA] w-200 h-33 justify-around">
      {
        circle.map((rate) => {
          return (
            <div key={rate.text}
              className="flex items-center rounded-lg gap-8">

              <div className="w-20 h-20 font-inter font-bold">
                <CircularProgressbar
                  value={rate.rate}
                  text={`${rate.rate}%`}
                  strokeWidth={7}
                  styles={buildStyles({
                    textColor: rate.color,
                    pathColor: rate.color,
                    textSize: "25px"
                  })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-playfair text-[#17384A] font-bold text-xl">
                  {rate.text}
                </h1>
                <h1 className="text-xs text-gray-500 font-inter">
                  {`${rate.value} ${rate.fillerWord} out of ${totalGames} games`}
                </h1>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default WinLossRate;