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

  useEffect(() => {

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
  }, [])

  return (
    <div className="flex justify-center items-center">

      {id && (
        <main className=" flex gap-3 items-center -translate-x-18">

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
        </main>
      )}

    </div>
  )
}
export default GamePage;