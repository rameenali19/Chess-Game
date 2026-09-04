import { useState } from "react";
import LeaderboardHeader from "../components/LeaderboardHeader";
import LeaderboardNavbar from "../components/LeaderboardNavbar";
import MyStats from "../components/MyStats";
import GlobalStats from "../components/GlobalStats";

function LeaderboardPage() {
  const [status, setStatus] = useState("myStats")
  return (
    <main className="page flex gap-5 flex-col px-8 mb-2">

      <LeaderboardHeader />

      <LeaderboardNavbar
        setStatus={setStatus}
      />

      {
        status === "myStats" && (
          <MyStats />
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