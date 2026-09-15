import Icon from "./Icon";
import NumberFlow from '@number-flow/react'

function StatsOverview() {

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
      description: "Games you won"
    },
    {

      image: "gamesLost",
      display: totalLost,
      color: "#D9413A",
      heading: "Lost Games",
      description: "Games you Lost"
    },
    {

      image: "gamesDraw",
      display: totalDraw,
      color: "#443496",
      heading: "Draw Games",
      description: "Games that are draw"
    }
  ]

  return (
    <div className="flex flex-col">
      <div className="font-playfair text-[#17384A] flex justify-around">
        {
          statDivs.map((games) => {
            return (
              <div key={games.heading}
                className="flex flex-col bg-[#FFF8EA] w-50 h-35 px-3 border-b-4
                rounded-lg gap-2 py-3 hover:scale-105 transition shadow-md"
                style={{ borderBottomColor: games.color }}>

                <div className="flex gap-3 mt-2">
                  <Icon
                    name={games.image}
                    className="w-15 h-15"
                  />

                  <div className="flex flex-col items-center">
                    <h1 className="font-bold font-inter text-3xl"
                      style={{ color: games.color }}
                    ><NumberFlow value={games.display} />
                    </h1>
                    <h1 className="font-bold font-playfair text-sm"
                      style={{ color: games.color }}
                    >{games.heading}</h1>
                  </div>

                </div>
                <div className="text-gray-500 text-xs tracking-wider flex flex-col gap-1 font-inter">
                  <h1>{games.description}</h1>
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