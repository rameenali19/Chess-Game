import { useState, useContext, useEffect } from "react";
import LeaderboardHeader from "../components/LeaderboardHeader";
import LeaderboardNavbar from "../components/LeaderboardNavbar";
import ApiChess from "../api/apiChess";
import MyStats from "../components/MyStats";
import GlobalStats from "../components/GlobalStats";
import { UserContext } from "../context/UserContext";

function LeaderboardPage() {

  const [status, setStatus] = useState("myStats")
  const { guestId } = useContext(UserContext);
  const [games, setGames] = useState([])

  useEffect(() => {
    async function getAllFinishedGames() {
      const game = ApiChess.getAPI();
      const data = await game.getAllFinishedGames(guestId);
      setGames(data)
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
          <MyStats
            games={games}
          />
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