import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import socket from "../socket/socket";
import ChessBoard from "../components/ChessBoard";
import ChessboardLeftPanel from "../components/ChessboardLeftPanel";
import ReconnectingModal from "../modals/ReconnectingModal";
import DisconnectModal from "../modals/DisconnectModal";
import SocketClass from "../socket/socketClass";
import GameOverModal from "../modals/GameOverModal";
import ChessboardRightPanel from "../components/ChessboardRightPanel";
import ResignModal from "../modals/ResignModal";
import ApiChess from "../api/apiChess";

function GamePage() {
  const [turn, setTurn] = useState(null)
  const [checkmate, setCheckmate] = useState(false)
  const [stalemate, setStalemate] = useState(false);
  const { id } = useParams();
  const [userColor, setUserColor] = useState()
  const [opponentColor, setOpponentColor] = useState()
  const { guestId } = useContext(UserContext);
  const [disconnectScreen, setDisconnectModal] = useState(false)
  const [reconnectingScreen, setReconnectingModal] = useState(false)
  const [mode, setMode] = useState(null)
  const [winner, setWinner] = useState(null)
  const [resign, setResign] = useState(false)
  const [endReason, setEndReason] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const [resignModal, setResignModal] = useState(false)
  const [moveHistory, setMoveHistory] = useState([])

  useEffect(() => {
    if (!mode || !id) return;

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

  useEffect(() => {
    socket.on("moveCreated", (moveData) => {
      setMoveHistory(prev => [...prev, moveData]);
    });
    return () => {
      socket.off("moveCreated");
    };
  }, [])

  function resigning() {
    const resignWinner = turn == "White" ? "Black" : "White"
    setResignModal(false)
    setWinner(resignWinner)
    setResign(true)
    setEndReason("resignation")
  }

  useEffect(() => {
    async function getMoves() {
      const game = ApiChess.getAPI();
      const moves = await game.getMoves(id);
      setMoveHistory(moves);
    }
    if (id) { getMoves(); }
  }, [id]);

  return (
    <>
      {id && (
        <div className="flex justify-center gap-7">

          <ChessboardLeftPanel
            turn={turn}
            checkmate={checkmate}
            staleMate={stalemate}
            id={id}
            userColor={userColor}
            opponentColor={opponentColor}
            resign={resign}
          />

          <div className="ring-2 ring-[#C7A97A] mt-4 h-140 w-150 grid grid-cols-8">
            <ChessBoard
              turn={turn}
              setTurn={setTurn}
              checkmate={checkmate}
              setCheckmate={setCheckmate}
              stalemate={stalemate}
              setStalemate={setStalemate}
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
              setMoveHistory={setMoveHistory}
            />
          </div>

          <ChessboardRightPanel
            setResignModal={setResignModal}
            moveHistory={moveHistory}
            winner={winner}
            userColor={userColor}
            turn={turn}
            mode={mode}
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
            endReason={endReason}
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