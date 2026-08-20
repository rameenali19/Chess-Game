import ModeSelectionCards from "./ModeSelectionCards";
import Icon from "./Icon";

function GameModeSelection({ setMode }) {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center">
        <Icon
          name="trophy"
          height={32}
          width={40}
        />
        <h1 className="font-cormorant text-3xl font-bold flex text-[#113447] ">
          Choose a Game Mode</h1>
      </div>
      <div className="flex flex-col gap-3 mt-3" >
        <ModeSelectionCards
          setMode={setMode} />
      </div>
    </div>

  )
}
export default GameModeSelection; 