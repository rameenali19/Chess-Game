import Button from "../components/Button"
import { useNavigate } from "react-router-dom";

function HomePageLogo() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="tracking-wider flex-col flex gap-2">
        <div className="flex flex-col font-cormorant text-6xl text-[#17384A]">
          <h1> Welcome to</h1>
          <h1>Checkmate</h1>
        </div>
        <div className="font-inter text-gray-700 text-xs">
          <h1> Challange your mind, sharpen your strategy,</h1>
          <h1>and conqure the board</h1>
        </div>
        <div className="flex gap-3">
          <Button
            text="+ Create Game"
            variant="primary"
            textSize="normal"
            fontWeight="normal"
            onClick={() => navigate("/mode-selection")}
            className="w-34 h-9"
          />
          <Button
            text="+ Join Game"
            variant="viewButton"
            textSize="normal"
            fontWeight="normal"
            onClick={() => navigate("/mode-selection", {
              state: {
                mode: "join"
              }
            })}
            className="w-32 h-9"
          />
        </div>
      </div>
    </div>
  )
}
export default HomePageLogo;