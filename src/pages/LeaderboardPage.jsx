import { useState } from "react";
import LeaderboardHeader from "../components/LeaderboardHeader";
import LeaderboardNavbar from "../components/LeaderboardNavbar";
import MyStats from "../components/MyStats";

function LeaderboardPage() {
  const [status, setStatus] = useState(null)
  return (
    <main className="page flex gap-5 flex-col px-8 mb-2">

      <LeaderboardHeader />

      <LeaderboardNavbar
        setStatus={setStatus}
      />

    </main>
  )
}
export default LeaderboardPage;