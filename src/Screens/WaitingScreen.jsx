import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import SocketClass from "../Socket/socketClass";
import { motion } from "framer-motion";
import Button from "../Components/Button";
import Modal from "../Components/Modal";

function WaitingScreen({ open, setWaitingScreen, gameId, setMode }) {
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

    <Modal open={open}
      className="h-65 w-140">

      <div className=" flex flex-col justify-center items-center w-full h-full gap-3 px-3">
        {
          !leavingGame && (
            <>
              <div className="text-3xl font-bold font-cormorant text-[#17384A] mt-5">
                Waiting for Opponent
              </div>
              <div className="text-[#17384A] font-inter text-xs ">
                Share the game ID with your friend
              </div>
              <div className="text-[#17384A] font-inter text-xl font-bold  ">
                {gameId}
              </div>

              <div
                className="w-12 h-12 rounded-full border-4 border-[#ffc79f]
                 border-t-[#ff8127] animate-spin" />
              <div className="flex justify-end w-full">

                <Button
                  text="Leave"
                  variant="sideBarBlue"
                  textSize="small"
                  fontWeight="medium"
                  className="w-20 h-8"
                  onClick={() => {
                    setLeavingGame(true)
                  }} />
              </div>
            </>
          )}
        {
          leavingGame && (
            <>
              <div className="text-3xl font-bold font-cormorant  text-[#17384A] ">
                Leave the waiting room?
              </div>

              <div className="flex w-full justify-center gap-10 items-center mt-5">

                <Button
                  text="Leave"
                  variant="sideBarBlue"
                  textSize="small"
                  fontWeight="medium"
                  className="w-20 h-8"
                  onClick={() => {
                    leaveGame()
                  }} />

                <Button
                  text="Stay"
                  variant="sideBarBlue"
                  textSize="small"
                  fontWeight="medium"
                  className="w-20 h-8"
                  onClick={() => {
                    setLeavingGame(false)
                  }} />
              </div>
            </>
          )}
      </div>

    </Modal>

  )
}
export default WaitingScreen