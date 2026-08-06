import MainMenu from "./MainMenu";
import socket from "../Socket/socket";
import { useEffect } from "react";
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
          setMode("multiplayer")
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