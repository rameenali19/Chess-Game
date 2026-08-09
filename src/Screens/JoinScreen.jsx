import { UserContext } from "../Context/UserContext"
import { useContext, useState } from "react"
import ApiChess from "../api/apiChess"
import { Navigate, useNavigate } from "react-router-dom";
import SocketClass from "../Socket/socketClass";
import { useLocation } from "react-router-dom";

function JoinScreen({ setGameId }) {
  const navigate = useNavigate();
  const { guestId } = useContext(UserContext)
  const location = useLocation();
  const [input, setInput] = useState(location.state?.gameId || "");
  const [error, setError] = useState(null)

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

      <div className="bg-[#FFF7EA] border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-65 w-140
        shadow-[rgba(23,56,74,0.15)] flex items-center justify-center">

        {!error && (
          <>
            <form className="flex flex-col gap-3 "
              onSubmit={checkingId}>
              <input
                placeholder="Enter ID"
                inputMode="numeric"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button className="hover:cursor-pointer border-2 border-black"
                type="submit">
                Join Game
              </button>
            </form>
          </>
        )}

        {error && (
          <>
            <div>
              Wrong input
            </div>
            <button className="hover:cursor-pointer border-2 border-black"
              onClick={() => {
                setError(false)
                setInput("")
              }}
            >
              Try Again
            </button>
          </>
        )}

      </div>
    </div>

  )

}
export default JoinScreen