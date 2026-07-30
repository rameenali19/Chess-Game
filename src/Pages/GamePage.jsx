import ChessBoard from "../Components/ChessBoard";
import { useState, useEffect, use } from "react";
import NavBar from "../Components/NavBar";
import { useParams } from "react-router-dom";
import Info from "../Components/GamePageInfo";
import { staleMate } from "../Chess/Stalemate";
import MainMenu from "../Screens/MainMenu";
import ModeSelection from "../Screens/ModeSelection";
import LoginScreen from "../Screens/LoginScreen";

function GamePage() {
  const [turn, setTurn] = useState(null)
  const [checkMate, setCheckMate] = useState(false)
  const [isStaleMate, setIsStaleMate] = useState(false);
  const { id } = useParams();
  const [userColor, setUserColor] = useState()
  const [opponentColor, setOpponentColor] = useState()
  const [mode, setMode] = useState(null);
  const [guestId, setGuestId] = useState(null)

  return (
    <div className="bg-[rgb(248,240,225)] min-h-screen flex justify-around">

      <NavBar />
      {id && (
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
              userColor={userColor}
              opponentColor={opponentColor}
              setUserColor={setUserColor}
              setOpponentColor={setOpponentColor}
            />
          </div>

        </main>
      )}
      {
        !id && mode === null && !localStorage.getItem("guestId") && (
          <LoginScreen
            guestId={guestId}
            setGuestId={setGuestId}
          />
        )
      }
      {
        !id && mode === null && localStorage.getItem("guestId") && (
          <ModeSelection
            mode={mode}
            setMode={setMode}
          />
        )
      }

      {
        !id && mode !== null && mode !== "join" && localStorage.getItem("guestId") && (
          <MainMenu
            turn={turn}
            setTurn={setTurn}
            userColor={userColor}
            setUserColor={setUserColor}
            opponentColor={opponentColor}
            setOpponentColor={setOpponentColor}
            mode={mode}
            guestId={guestId}
          />
        )
      }

    </div>
  )
}
export default GamePage;