import Button from "./Button";
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";

function LeaderboardHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center mt-5">
        <div className="text-3xl font-semibold text-[#17384A] font-playfair flex items-center gap-2">
          <Icon
            name="trophy"
            className="w-10"
          />
          <h1>Leaderboard</h1>
        </div>
        <Button
          text="+ New Game"
          variant="primary"
          textSize="normal"
          fontWeight="normal"
          onClick={() => navigate("/mode-selection")}
          className="w-35 h-10"
        />
      </div>

      <h1 className="font-inter text-xs text-gray-700">
        Track your preformance and compare with other players
      </h1>

    </div>
  )
}
export default LeaderboardHeader;