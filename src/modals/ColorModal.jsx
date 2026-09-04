import ApiChess from "../api/apiChess"
import { useNavigate } from "react-router-dom";
import { initialBoard } from "../chess/board";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import socketService from "../socket/socketService";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Icon from "../components/Icon";
import ColorSelection from "../components/ColorSelection";

function ColorModal({ open, mode, setWaitingModal, setGameId, setMode, difficultyLevel, setDifficultyLevel }) {

  const { guestId } = useContext(UserContext);
  const navigate = useNavigate();
  const status = mode === "multiplayer" ? "waiting" : "unfinished"
  const [selectedColor, setSelectedColor] = useState(null)

  async function createGame() {
    if (!selectedColor) return
    const game = ApiChess.getAPI();
    const createGameInfo = {
      currentTurn: "White",
      gameBoard: initialBoard,
      gameStatus: status,
      enPassant: null,
      promotion: null,
      mode: mode,
      difficulty: difficultyLevel,
      playerColor: selectedColor,
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
      socketService.joinGame(newGameId)
      setWaitingModal(true)
    }
    else {
      navigate(`/game/${newGameId}`)
    }
  }

  return (
    <Modal open={open}
      className="h-90 w-140">

      <div className="flex flex-col h-full gap-5 items-center px-2 justify-center text-[#17384A]">
        <div className="flex flex-col items-center gap-2 mt-6">
          <h1 className="text-3xl font-bold font-playfair ">
            Choose Your Color
          </h1>
          <h1 className="text-xs font-inter">
            Pick a side and start your Game
          </h1>
        </div>

        <ColorSelection
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />

        <Button
          text="Start Game"
          variant="primary"
          textSize="normal"
          fontWeight="medium"
          onClick={() => createGame()}
          className="w-40 py-2"
        />

        <div className="flex justify-end w-full">
          <Button
            text="Close"
            variant="sideBarBlue"
            textSize="small"
            fontWeight="medium"
            onClick={() => {
              setMode(null)
              setDifficultyLevel(null)
            }}
            className="w-17 h-7"
          />
        </div>

      </div>
    </Modal>
  )
}
export default ColorModal;