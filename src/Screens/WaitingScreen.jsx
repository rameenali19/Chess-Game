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
    <div className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">

      <div className="bg-[#FFF7EA] border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-65 w-140
        shadow-[rgba(23,56,74,0.15)] flex items-center justify-center">

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
      </div>
    </div>
  )
}
export default WaitingScreen