import socket from "../api/socket"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function WaitingScreen({ setWaitingScreen, gameId }) {
  const navigate = useNavigate();


  useEffect(() => {

    function screenOf() {

      setWaitingScreen(false)
      navigate(`/game/${gameId}`)
    }

    socket.on("playerJoined", () => screenOf());
  }, [])


  return (
    <div>
      waiting for the opponent to join game
    </div>
  )
}
export default WaitingScreen