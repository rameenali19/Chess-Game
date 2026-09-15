import { useEffect, useState, useContext } from "react";
import ApiChess from "../api/apiChess";
import { UserContext } from "../context/UserContext";

function StatsOverview() {
  const { guestId } = useContext(UserContext);

  useEffect(() => {
    async function getAllFinishedGames() {
      const game = ApiChess.getAPI();
      const data = await game.getAllFinishedGames(guestId);
    }
    getAllFinishedGames();
  }, [guestId])

  return (
    <div className="flex flex-col">
      <div className="font-playfair text-[#17384A] font-semibold text-2xl">
        Your Statistics
      </div>
    </div>
  )
}
export default StatsOverview;