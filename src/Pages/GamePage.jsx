import ChessBoard from "../Components/ChessBoard";
import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import Info from "../Components/GamePageInfo";
import { staleMate } from "../Chess/Stalemate";
import MainMenu from "../Screens/MainMenu";
import ModeSelection from "../Screens/ModeSelection";
import LoginScreen from "../Screens/LoginScreen";
import { useContext } from "react";
import { userContext } from "../Context/UserContext";

function GamePage() {
  const [turn, setTurn] = useState(null)
  const [checkMate, setCheckMate] = useState(false)
  const [isStaleMate, setIsStaleMate] = useState(false);
  const { id } = useParams();
  const [userColor, setUserColor] = useState()
  const [opponentColor, setOpponentColor] = useState()
  const [mode, setMode] = useState(null);
  const { guestId } = useContext(userContext);

  return (
    <div className="flex justify-around">

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
        !id && mode === null && !guestId && (
          <LoginScreen />
        )
      }
      {
        !id && mode === null && guestId && (
          <ModeSelection
            mode={mode}
            setMode={setMode}
          />
        )
      }

      {
        !id && mode !== null && mode !== "join" && guestId && (
          <MainMenu
            turn={turn}
            setTurn={setTurn}
            userColor={userColor}
            setUserColor={setUserColor}
            opponentColor={opponentColor}
            setOpponentColor={setOpponentColor}
            mode={mode}
          />
        )
      }

    </div>

  )
}
export default GamePage;