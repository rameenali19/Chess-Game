import { UserContext } from "../Context/UserContext"
import { useContext, useState } from "react"
import ApiChess from "../api/apiChess"
import SocketClass from "../socket/socketClass";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import Modal from "../components/Modal";

function JoinModal({ open, setGameId, setMode }) {

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

    <Modal open={open}
      className="h-65 w-140">

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
              className="ring ring-[#ff8127] rounded-lg w-70 py-3 px-4 bg-[#FFF7EA]/70 
              hover:scale-105 transition outline-none  focus:ring-2 hover:ring-2"
              placeholder="Enter Game ID"
              inputMode="numeric"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              text="Join Game"
              variant="primary"
              textSize="normal"
              fontWeight="normal"
              className="w-40 py-2"
              type="submit"
            />

          </form>

          <div className="flex justify-end ">

            <Button
              text="Close"
              variant="sideBarBlue"
              textSize="small"
              fontWeight="medium"
              className="w-17 h-7"
              onClick={() => {
                leaveGame()
              }}
            />

          </div>
        </div>
      )}


      {error && (
        <div className="flex flex-col h-full justify-center items-center gap-8">

          <div className="text-3xl font-bold font-cormorant text-[#17384A]">
            Invalid Game ID
          </div>

          <Button
            text="Try Again"
            variant="primary"
            textSize="normal"
            fontWeight="normal"
            className="w-40 py-2"
            onClick={() => {
              setError(false)
              setInput("")
            }}
          />

        </div>
      )}



    </Modal>

  )

}
export default JoinModal