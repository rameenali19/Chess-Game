import ModeSelectionCards from "./ModeSelectionCards";

function GameModeSelection({ setMode }) {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center">
        <img className="object-contain w-10 h-8"
          src="/trophy.png" alt="trophy image" >
        </img>
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