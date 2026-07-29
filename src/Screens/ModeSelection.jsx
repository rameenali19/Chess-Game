import MainMenu from "./MainMenu";
function ModeSelection({ mode, setMode }) {
  return (
    <div>
      <button className="border-2 border-black hover:cursor-pointer px-3 py-2"
        onClick={() => {
          setMode("single player")
        }}
      >
        Single Player
      </button>

      <button className="border-2 border-black hover:cursor-pointer px-3 py-2"
        onClick={() => {
          setMode("multi player")
        }}
      >
        Multi-player
      </button>

      <button className="border-2 border-black hover:cursor-pointer px-3 py-2"
        onClick={() => {
          setMode("join")
        }}
      >
        Join multiplayer
      </button>
    </div>
  )
}
export default ModeSelection; 