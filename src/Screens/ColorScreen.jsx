import ApiChess from "../api/apiChess"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { initialBoard } from "../Chess/Board";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import SocketClass from "../Socket/socketClass";
import Button from "../Components/Button";

function ColorScreen({ mode, waitingScreen, setWaitingScreen, setGameId, setMode }) {

  const { guestId } = useContext(UserContext);
  const navigate = useNavigate();
  const status = mode === "single player" ? "unfinished" : mode === "multiplayer" ? "waiting" : null
  const [turn, setTurn] = useState(null)
  const [userColor, setUserColor] = useState(null)
  const [selectedColor, setSelecctedColor] = useState(null)

  const pieces = [{ image: "/white-king.png", text: "White", }, { image: "/black-king.png", text: "Black", }]

  async function createGame() {
    if (!userColor) return
    const game = ApiChess.getAPI();
    const createGameInfo = {
      currentTurn: "White",
      gameBoard: initialBoard,
      gameStatus: status,
      enPassant: null,
      promotion: null,
      mode: mode,
      playerColor: userColor,
      guestId: guestId
    }
    const response = await game.createGame(createGameInfo)
    const newGameId = response?.id || response;
    if (!newGameId) {
      console.error("Failed to retrieve valid Game ID from backend");
      return;
    }
    setGameId(newGameId);

    if (mode === "multiplayer") {
      const socketClass = SocketClass.getObject();
      socketClass.joinGame(newGameId)
      setWaitingScreen(true)
    }
    else {
      navigate(`/game/${newGameId}`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">
      <div className="bg-[#FFF7EA] border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-90 w-140
        shadow-[rgba(23,56,74,0.15)] bg-[url('/orangebg.png')]
         bg-center bg-cover">


        <div className="flex flex-col h-full gap-5 items-center">

          <div className="flex flex-col items-center gap-2 mt-6">
            <h1 className="text-3xl font-bold font-cormorant text-[#17384A]">
              Choose Your Color
            </h1>
            <h1 className="text-xs font-inter text-[#17384A]">
              Pick a side and start your Game
            </h1>
          </div>

          <div className="flex justify-center gap-10 w-full">

            {
              pieces.map((color) => {
                return (
                  <div key={color.text}
                    className={`border-2 w-35 border-[#ff8127] h-30 rounded-lg flex 
                       items-center justify-center flex-col font-inter font-bold text-[#ff8127] hover:scale-105 transition hover:cursor-pointer ${selectedColor === color.text ? "bg-[#ffebdd]" : ""}`}
                    onClick={() => {
                      setSelecctedColor(color.text)
                      setUserColor(color.text)
                    }}
                  >
                    <img className="w-21 h-22 object-contain"
                      src={color.image}></img>
                    <h1>{color.text}</h1>
                  </div>
                )
              })
            }
          </div>

          <Button
            text="Start Game"
            variant="primary"
            textSize="normal"
            textWeight="normal"
            onClick={() => createGame()}
            className="w-40 py-2"
          />


          <div className="flex justify-end w-full">

            <Button
              text="Close"
              variant="sideBarBlue"
              textSize="small"
              textWeight="medium"
              onClick={() => setMode(null)}
              className="w-17 h-7"
            />
          </div>

        </div>
      </div>
    </motion.div>

  )
}
export default ColorScreen