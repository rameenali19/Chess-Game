import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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