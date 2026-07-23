import ChessBoard from "../Components/ChessBoard";
import { useState } from "react";

function GameState() {
  const [turn, setTurn] = useState("White")
  const [checkMate, setCheckMate] = useState(false)
  const [isStaleMate, setIsStaleMate] = useState(false);

  return (
    <div className="flex justify-center">
      <div>{
        isStaleMate ? "Stalemate!" : (
          checkMate ? (turn === "White" ? "CheckMate! Black Wins"
            : "CheckMate! White Wins")
            : `Current Turn: ${turn}`)
      }</div>
      <div className="ring-2 ring-black translate-y-7 h-125 w-125 grid grid-cols-8">
        <ChessBoard
          turn={turn}
          setTurn={setTurn}
          checkMate={checkMate}
          setCheckMate={setCheckMate}
          isStaleMate={isStaleMate}
          setIsStaleMate={setIsStaleMate}
        />
      </div>
    </div>
  )
}
export default GameState;