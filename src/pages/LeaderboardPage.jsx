import { useState } from "react";
import LeaderboardHeader from "../components/LeaderboardHeader";
import ApiChess from "../api/apiChess";
import MyStats from "../components/MyStats";
import GlobalStats from "../components/GlobalStats";

function LeaderboardPage() {

  return (
    <main className="page flex gap-5 flex-col px-8">

      <LeaderboardHeader />

      <MyStats />

    </main>
  )
}
export default LeaderboardPage;