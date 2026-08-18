import Button from "./Button";
import { useNavigate } from "react-router-dom";

function HistoryHeader() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center mt-5 mb-5">
      <h1 className="text-3xl font-semibold text-[#17384A] font-cormorant">
        Game History
      </h1>
      <Button
        text="+ New Game"
        variant="primary"
        textSize="normal"
        fontWeight="normal"
        onClick={() => navigate("/mode-selection")}
        className="w-35 h-10"
      />
    </div>
  )
}
export default HistoryHeader;