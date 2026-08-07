import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import SocketClass from "../Socket/socketClass";

function WaitingScreen({ setWaitingScreen, gameId }) {
  const navigate = useNavigate();

  function leaveGame() {
    const socketClass = SocketClass.getObject();
    socketClass.leavingGame(gameId)
    navigate(`/`)
  }

  return (
    <div className="flex flex-col">
      <div> waiting for the opponent to join game {gameId}</div>
      <button className="hover:cursor-pointer border-2 border-black"
        onClick={() => {
          leaveGame()
        }}
      >
        leave
      </button>
    </div>
  )
}
export default WaitingScreen