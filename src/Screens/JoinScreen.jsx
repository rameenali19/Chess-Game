import { UserContext } from "../Context/UserContext"
import { useContext, useState } from "react"
import ApiChess from "../api/apiChess"
import { Navigate, useNavigate } from "react-router-dom";
import socket from "../api/socket";

function JoinScreen() {
  const navigate = useNavigate();
  const { guestId } = useContext(UserContext)
  const [input, setInput] = useState("")
  const [error, setError] = useState(null)

  async function checkingId(e) {
    e.preventDefault();

    const api = ApiChess.getAPI();
    const data = await api.joinGame(input, guestId);
    if (data.message) {
      setError(true)
    }
    else {

      socket.emit("joinGame", {
        gameId: input,
        reconnect: data.reconnect
      })

      navigate(`/game/${input}`)
    }
  }


  return (
    <div>

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

  )
}
export default JoinScreen