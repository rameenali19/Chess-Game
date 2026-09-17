import { useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function WinLossRate({ totalGames, totalWin, totalLost }) {
  const winRate = (totalWin / totalGames) * 100 || 0;
  const lostRate = (totalLost / totalGames) * 100 || 0;

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
    <div className="flex justify-around w-full">
      {
        circle.map((rate) => {
          return (
            <div key={rate.text}
              className="flex rounded-lg gap-8 bg-[#FFF8EA] w-100 h-30 justify-start px-5 items-center">

              <div className="w-20 h-20 font-inter font-bold text-2xl">
                <CircularProgressbar
                  value={rate.rate}
                  text={`${rate.rate.toFixed(1)}%`}
                  strokeWidth={7}
                  styles={buildStyles({
                    textColor: rate.color,
                    pathColor: rate.color
                  })}
                  counterClockwise={false}
                />
              </div>

              <div className="flex flex-col gap-3">
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