import { useState, useContext } from "react";
import LeaderboardHeader from "../components/LeaderboardHeader";
import LeaderboardNavbar from "../components/LeaderboardNavbar";
import MyStats from "../components/MyStats";
import GlobalStats from "../components/GlobalStats";
import { UserContext } from "../context/UserContext";

function LeaderboardPage() {
  const [status, setStatus] = useState("myStats")
  const { guestId } = useContext(UserContext);

  return (
    <main className="page flex gap-5 flex-col px-8 mb-2">

      <LeaderboardHeader />

      <LeaderboardNavbar
        setStatus={setStatus}
      />

      {
        status === "myStats" && guestId && (
          <MyStats />
        )
      }

      {
        status === "globalStats" && guestId && (
          <GlobalStats />
        )
      }

    </main>
  )
}
export default LeaderboardPage;