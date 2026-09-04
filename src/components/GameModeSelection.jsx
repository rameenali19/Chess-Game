import ModeSelectionCards from "./ModeSelectionCards";
import Icon from "./Icon";

function GameModeSelection({ setMode, setDifficultyModal }) {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center">
        <Icon
          name="trophy"
          className="w-10"
        />
        <h1 className="font-playfair text-3xl font-semibold flex text-[#113447] ">
          Choose a Game Mode</h1>
      </div>
      <div className="flex flex-col gap-3 mt-3" >
        <ModeSelectionCards
          setMode={setMode}
          setDifficultyModal={setDifficultyModal}
        />
      </div>
    </div>

  )
}
export default GameModeSelection; 