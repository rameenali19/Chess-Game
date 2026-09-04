import Icon from "./Icon";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function HomePageStats() {
  const navigate = useNavigate()
  return (
    <div className="flex bg-[#FFF8EA] w-200 h-37 justify-around shadow-lg
     rounded-lg items-center m-12">

      <Icon
        name="stats"
        className="h-22  hover:scale-105 transition"
      />

      <div className="flex flex-col gap-3">
        <h1 className="font-cormorant text-[#D9413A] text-2xl font-semibold">
          Curious about your performance?</h1>
        <div className="font-inter text-xs text-gray-700 flex flex-col gap-1 tracking-wider">
          <h1>View your stats, win rate, ranking and more.</h1>
          <h1>Keep track of your chess journey.</h1>
        </div>
      </div>
      <Button
        text="View your stats"
        variant="sideBarBlue"
        textSize="normal"
        fontWeight="normal"
        onClick={() => navigate("/about-me")}
        className="w-42 h-10 flex items-center justify-center gap-2"
        imageName="whiteStats"
        imageClassName="w-5"
      />
    </div>
  )
}
export default HomePageStats;