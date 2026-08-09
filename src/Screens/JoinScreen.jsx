import { UserContext } from "../Context/UserContext"
import { useContext, useState } from "react"
import ApiChess from "../api/apiChess"
import { Navigate, useNavigate } from "react-router-dom";
import SocketClass from "../Socket/socketClass";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function JoinScreen({ setGameId, setMode }) {
  const navigate = useNavigate();
  const { guestId } = useContext(UserContext)
  const location = useLocation();
  const [input, setInput] = useState(location.state?.gameId || "");
  const [error, setError] = useState(null)

  function leaveGame() {
    setMode(null)
  }

  async function checkingId(e) {
    e.preventDefault();

    const api = ApiChess.getAPI();
    const data = await api.joinGame(input, guestId);
    if (data.message) {
      setError(true)
      return
    }

    const socketClass = SocketClass.getObject();
    socketClass.joinGame(input)
    setGameId(input)
  }


  return (
    <div className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-[url('/redbg.png')] bg-center bg-cover border border-[#E8DCC7] shadow-2xl
         rounded-xl h-65 w-140 shadow-[rgba(23,56,74,0.15)] ">

        {!error && (
          <div className="flex flex-col h-full justify-around px-4 w-full">

            <div className="flex flex-col items-center gap-2 mt-6">
              <h1 className="text-3xl font-bold font-cormorant text-[#17384A]">
                Join Game
              </h1>
              <h1 className="text-xs font-inter text-[#17384A]">
                Enter the Game ID to join your friend
              </h1>
            </div>

            <form className="flex flex-col gap-3 items-center"
              onSubmit={checkingId}>

              <input
                className="ring ring-[#D9413A] rounded-lg w-70 py-3 px-4 bg-[#FFF7EA]/70 
              hover:scale-105 transition outline-none  focus:ring-2 hover:ring-2"
                placeholder="Enter Game ID"
                inputMode="numeric"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button className="hover:cursor-pointer border-2 bg-[#D9413A] rounded-lg font-inter
               text-white py-2 hover:opacity-85 w-40 hover:scale-105 transition"
                type="submit">
                Join Game
              </button>
            </form>

            <div className="flex justify-end ">
              <button className="w-17 h-7 bg-[#1d4960] rounded-lg font-inter hover:opacity-85
              text-xs text-[white] hover:cursor-pointer font-medium hover:scale-105 transition"
                onClick={() => {
                  leaveGame()
                }}
              >
                Leave
              </button>
            </div>
          </div>
        )}


        {error && (
          <div className="flex flex-col h-full justify-center items-center gap-8">

            <div className="text-3xl font-bold font-cormorant text-[#17384A]">
              Invalid Game ID
            </div>
            <button className="hover:cursor-pointer border-2 bg-[#D9413A] rounded-lg font-inter
               text-white py-2 hover:opacity-85 w-40 font-medium hover:scale-105"
              onClick={() => {
                setError(false)
                setInput("")
              }}
            >
              Try Again
            </button>
          </div>
        )}


      </motion.div>
    </div >

  )

}
export default JoinScreen