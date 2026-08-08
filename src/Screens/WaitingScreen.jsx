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

        <div className=" flex flex-col items-center gap-3 ">

          <div className="text-3xl font-bold font-cormorant text-[#17384A]">
            Waiting for Opponent
          </div>
          <div className="text-[#17384A] font-inter ">
            Game Id is {gameId}
          </div>

          <div
            className="w-13 h-13 rounded-full
             border-4 border-[#ffc79f]
             border-t-[#ff8127]
             animate-spin"
          />
        </div>
      </div>
    </div>
  )
}
export default WaitingScreen