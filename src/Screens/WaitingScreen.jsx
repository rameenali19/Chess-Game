import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import SocketClass from "../Socket/socketClass";
import { motion } from "framer-motion";

function WaitingScreen({ setWaitingScreen, gameId, setMode }) {
  const navigate = useNavigate();
  const [leavingGame, setLeavingGame] = useState(false)

  function leaveGame() {
    const socketClass = SocketClass.getObject();
    socketClass.leavingGame(gameId)
    setWaitingScreen(false)
    setMode(null)
    navigate(`/modeselection`)
  }

  return (
    <div className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">

      < motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className=" border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-65 w-140
        shadow-[rgba(23,56,74,0.15)] flex items-center justify-center bg-[url('/orangebg.png')]
         bg-center bg-cover">

        <div className=" flex flex-col items-center gap-3 w-full">

          {
            !leavingGame && (
              <>
                <div className="text-3xl font-bold font-cormorant text-[#17384A]">
                  Waiting for Opponent
                </div>
                <div className="text-[#17384A] font-inter text-xs ">
                  Share the game ID with your friend
                </div>
                <div className="text-[#17384A] font-inter text-xl font-bold  ">
                  {gameId}
                </div>

                <div
                  className="w-13 h-13 rounded-full
             border-4 border-[#ffc79f]
             border-t-[#ff8127]
             animate-spin"
                />
                <div className="flex justify-end w-full">
                  <button className="px-3 py-1 bg-[#1d4960] rounded-lg font-inter hover:opacity-85
             text-xs text-[white] hover:cursor-pointer"
                    onClick={() => {
                      setLeavingGame(true)
                    }}
                  >
                    Leave
                  </button>
                </div>
              </>
            )}


          {
            leavingGame && (
              <>
                <div className="text-3xl font-bold font-cormorant text-[#17384A] ">
                  Leave the waiting room?
                </div>
                <div className="flex w-full justify-center gap-10 items-center mt-5">
                  <button className="px-4 py-1 bg-[#1d4960] rounded-lg font-inter 
                  hover:opacity-85 text-xs text-[white] hover:cursor-pointer"
                    onClick={() => {
                      leaveGame()
                    }}
                  >
                    Leave
                  </button>

                  <button className="px-5 py-1 bg-[#1d4960] rounded-lg font-inter 
                  hover:opacity-85 text-xs text-[white] hover:cursor-pointer"
                    onClick={() => {
                      setLeavingGame(false)
                    }}
                  >
                    Stay
                  </button>
                </div>
              </>
            )
          }
        </div>
      </motion.div>
    </div >
  )
}
export default WaitingScreen