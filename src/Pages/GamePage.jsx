import ChessBoard from "../Components/ChessBoard";
import { useState, useEffect } from "react";
import Info from "../Components/GamePageInfo";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import socket from "../Socket/socket";
import ReconnectingScreen from "../Screens/ReconnectingScreen";
import DisconnectScreen from "../Screens/DisconnectScreen";
import { useParams } from "react-router-dom";
import SocketClass from "../Socket/socketClass";
import GameOverScreen from "../Screens/GameOverScreen";

function GamePage() {
  const [turn, setTurn] = useState(null)
  const [checkMate, setCheckMate] = useState(false)
  const [isStaleMate, setIsStaleMate] = useState(false);
  const { id } = useParams();
  const [userColor, setUserColor] = useState()
  const [opponentColor, setOpponentColor] = useState()
  const { guestId } = useContext(UserContext);
  const [gameId, setGameId] = useState(null)
  const [disconnectScreen, setDisconnectScreen] = useState(false)
  const [reconnectingScreen, setReconnectingScreen] = useState(false)
  const [mode, setMode] = useState(null)
  const [winner, setWinner] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  useEffect(() => {
    if (!mode || !id) return;
    if (!mode) return

    if (mode === "multiplayer") {
      const socketClass = SocketClass.getObject();
      socketClass.joinGame(id)
    }

    socket.on("opponentDisconnected", () => {
      setDisconnectScreen(true)
    });

    socket.on("opponentReconnected", () => {
      setReconnectingScreen(false)
      setDisconnectScreen(false)
    });

    return () => {
      socket.off("opponentDisconnected");
      socket.off("opponentReconnected");
    };
  }, [mode, id])

  useEffect(() => {
    if (!winner) return
    setGameOver(true)
  }, [winner])

  return (
    <div className="flex justify-center items-center">

      {id && (
        <main className=" flex gap-3 items-center ">

          <Info
            turn={turn}
            checkMate={checkMate}
            staleMate={isStaleMate}
            id={id}
            userColor={userColor}
            opponentColor={opponentColor}
          />


          <div className="ring-2 ring-[#C7A97A] translate-y-10   h-125 w-125 grid grid-cols-8">
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
              mode={mode}
              setMode={setMode}
              winner={winner}
              setWinner={setWinner}
            />
          </div>

          <DisconnectScreen
            open={disconnectScreen}
            setDisconnectScreen={setDisconnectScreen}
            setReconnectingScreen={setReconnectingScreen}
          />

          <ReconnectingScreen
            open={reconnectingScreen}
            setReconnectingScreen={setReconnectingScreen}
            setDisconnectScreen={setDisconnectScreen}
          />

          <GameOverScreen
            open={gameOver}
            winner={winner}
            userColor={userColor}
            setGameOver={setGameOver}
          />
        </main>
      )}

    </div>
  )
}
export default GamePage;