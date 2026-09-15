import Icon from "./Icon";
import NumberFlow from '@number-flow/react'
import { useState, useEffect } from "react";

function StatsOverview({ games }) {
  const [totalGames, setTotalGames] = useState(0);
  const [totalWin, setTotalWin] = useState(0)
  const [totalLost, setTotalLost] = useState(0)
  const [totalDraw, setTotalDraw] = useState(0)

  const statDivs = [
    {
      image: "greenBoard",
      display: totalGames,
      color: "#35843C",
      heading: "Total Games",
      description: "All games you've played"
    },
    {
      image: "gamesWon",
      display: totalWin,
      color: "#FFC107",
      heading: "Won Games",
      description: "Games you've won"
    },
    {
      image: "gamesLost",
      display: totalLost,
      color: "#D9413A",
      heading: "Lost Games",
      description: "Games you've lost"
    },
    {
      image: "gamesDraw",
      display: totalDraw,
      color: "#443496",
      heading: "Draw Games",
      description: "Games that ended in a draw"
    }
  ]
  useEffect(() => {
    setTotalGames(games.length)
    const won = games.filter(
      game => game.winner === game.player_color
    ).length;
    setTotalWin(won);
    const draw = games.filter(
      game => game.winner === "Draw"
    ).length;
    setTotalDraw(draw);

    const lost = games.length - won - draw;
    setTotalLost(lost)
  }, [games])

  return (
    <div className="flex flex-col">
      <div className="font-playfair text-[#17384A] flex justify-around">
        {
          statDivs.map((divs) => {
            return (
              <div key={divs.heading}
                className="flex flex-col bg-[#FFF8EA] w-50 h-35 px-3 border-b-4
                rounded-lg gap-2 py-3 hover:scale-105 transition shadow-md"
                style={{ borderBottomColor: divs.color }}>

                <div className="flex gap-3 mt-2">
                  <Icon
                    name={divs.image}
                    className="w-15 h-15"
                  />

                  <div className="flex flex-col items-center">
                    <h1 className="font-bold font-inter text-3xl"
                      style={{ color: divs.color }}
                    ><NumberFlow value={divs.display}
                      trend={0}
                      />
                    </h1>
                    <h1 className="font-bold font-playfair text-sm"
                      style={{ color: divs.color }}
                    >{divs.heading}</h1>
                  </div>

                </div>
                <div className="text-gray-500 text-xs tracking-wider flex flex-col gap-1 font-inter">
                  <h1>{divs.description}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default StatsOverview;