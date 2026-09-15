import { useEffect, useState, useContext } from "react";
import ApiChess from "../api/apiChess";
import { UserContext } from "../context/UserContext";
import Icon from "./Icon";

function StatsOverview() {
  const { guestId } = useContext(UserContext);
  const [totalGames, setTotalGames] = useState(null);
  const [totalWin, setTotalWin] = useState(null)
  const [totalLost, setTotalLost] = useState(null)
  const [totalDraw, setTotalDraw] = useState(null)
  const statDivs = [
    {
      image: "greenBoard",
      display: "totalGames",
      color: "#35843C",
      heading: "Total Games",
      description: "All games you've played"
    },
    {
      image: "gamesWon",
      display: "totalWin",
      color: "#FFC107",
      heading: "Won Games",
      description: "Games you won"
    },
    {
      image: "gamesLost",
      display: "totalLost",
      color: "#D9413A",
      heading: "Lost Games",
      description: "Games you Lost"
    },
    {
      image: "gamesDraw",
      display: "totalDraw",
      color: "#443496",
      heading: "Draw Games",
      description: "Games that are draw"
    }
  ]

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
      setTotalWin(draw);

      const lost = totalGames - won - draw;
      setTotalLost(lost)
    }
    getAllFinishedGames();
  }, [guestId])

  return (
    <div className="flex flex-col">
      <div className="font-playfair text-[#17384A] flex">
        {
          statDivs.map((games) => {
            return (
              <div key={games.display}>


              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default StatsOverview;