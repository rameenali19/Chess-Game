import { useState } from "react";
import LeaderboardHeader from "../components/LeaderboardHeader";
import LeaderboardNavbar from "../components/LeaderboardNavbar";
import MyStats from "../components/MyStats";
import GlobalStats from "../components/GlobalStats";

function LeaderboardPage() {
  const [status, setStatus] = useState(null)
  return (
    <main className="page flex gap-5 flex-col px-8 mb-2">

      <LeaderboardHeader />

      <LeaderboardNavbar
        setStatus={setStatus}
      />

      {
        status === "myStatus" && (
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