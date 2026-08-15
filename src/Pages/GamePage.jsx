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
import ResignModal from "../Modals/ResignModal";

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
  const [resign, setResign] = useState(false)
  const [endReason, setEndReason] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [resignModal, setResignModal] = useState(false)
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

  function resigning() {
    if (mode === "multiplayer" && userColor !== turn) {
      return
    }
    const resignWinner = turn == "White" ? "Black" : "White"
    setResignModal(false)
    setWinner(resignWinner)
    setResign(true)
    setEndReason("resignation")
    console.log("eeeeee", resignWinner)
  }

  return (

    <>
      {id && (
        <div className="flex justify-center gap-7">

          <ChessboardLeftPanel
            turn={turn}
            checkMate={checkMate}
            staleMate={isStaleMate}
            id={id}
            userColor={userColor}
            opponentColor={opponentColor}
            resign={resign}
          />

          <div className="ring-2 ring-[#C7A97A] translate-y-10 h-125 w-125 grid grid-cols-8">
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
              resign={resign}
              setResign={setResign}
              endReason={endReason}
              setEndReason={setEndReason}
            />
          </div>

          <ChessboardRightPanel
            setResignModal={setResignModal}
          />

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

          <ResignModal
            open={resignModal}
            resigning={resigning}
            setResignModal={setResignModal}
          />

        </div>
      )}
    </>
  )
}
export default GamePage;