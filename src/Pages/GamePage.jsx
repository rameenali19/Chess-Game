import ChessBoard from "../Components/ChessBoard";
import { useState } from "react";
import NavBar from "../Components/NavBar";
import { useParams } from "react-router-dom";
import Info from "../Components/GamePageInfo";
import { staleMate } from "../Chess/Stalemate";

function GamePage() {
  const [turn, setTurn] = useState("White")
  const [checkMate, setCheckMate] = useState(false)
  const [isStaleMate, setIsStaleMate] = useState(false);
  const { id } = useParams();

  return (
    <div className="bg-[rgb(248,240,225)] min-h-screen flex justify-around">

      <NavBar />

      <main className=" flex gap-5 items-center">

        <Info
          turn={turn}
          checkMate={checkMate}
          staleMate={isStaleMate}
          id={id}
        />

        <div className="ring-2 ring-[#C7A97A] translate-y-7 h-125 w-125 grid grid-cols-8
          ">
          <ChessBoard
            turn={turn}
            setTurn={setTurn}
            checkMate={checkMate}
            setCheckMate={setCheckMate}
            isStaleMate={isStaleMate}
            setIsStaleMate={setIsStaleMate}
            id={id}
          />
        </div>

      </main>

    </div>
  )
}
export default GamePage;