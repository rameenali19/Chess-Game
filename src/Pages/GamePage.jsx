import ChessBoard from "../Components/ChessBoard";
import { useState, useEffect } from "react";
import ChessboardLeftPanel from "../Components/ChessboardLeftPanel";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import socket from "../Socket/socket";
import ReconnectingModal from "../Modals/ReconnectingModal";
import DisconnectModal from "../Modals/DisconnectModal";
import { useParams } from "react-router-dom";
import SocketClass from "../Socket/socketClass";
import GameOverModal from "../Modals/GameOverModal";
import ChessboardRightPanel from "../Components/ChessboardRightPanel";

function GamePage() {
  const [turn, setTurn] = useState(null)
  const [checkMate, setCheckMate] = useState(false)
  const [isStaleMate, setIsStaleMate] = useState(false);
  const { id } = useParams();
  const [userColor, setUserColor] = useState()
  const [opponentColor, setOpponentColor] = useState()
  const { guestId } = useContext(UserContext);
  const [gameId, setGameId] = useState(null)
  const [disconnectScreen, setDisconnectModal] = useState(false)
  const [reconnectingScreen, setReconnectingModal] = useState(false)
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
      setDisconnectModal(true)
    });

    socket.on("opponentReconnected", () => {
      setReconnectingModal(false)
      setDisconnectModal(false)
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
    <div className="flex justify-center ">

      {id && (
        <main className=" flex gap-3 items-center ">

          <ChessboardLeftPanel
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

          <DisconnectModal
            open={disconnectScreen}
            setDisconnectModal={setDisconnectModal}
            setReconnectingModal={setReconnectingModal}
          />

          <ReconnectingModal
            open={reconnectingScreen}
            setReconnectingModal={setReconnectingModal}
            setDisconnectModal={setDisconnectModal}
          />

          <GameOverModal
            open={gameOver}
            winner={winner}
            userColor={userColor}
            setGameOver={setGameOver}
            mode={mode}
          />
        </main>
      )}

    </div>
  )
}
export default GamePage;