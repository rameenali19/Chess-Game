import ChessBoard from "../Components/ChessBoard";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Info from "../Components/GamePageInfo";
import { staleMate } from "../Chess/Stalemate";
import MainMenu from "../Screens/MainMenu";
import LoginScreen from "../Screens/LoginScreen";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import JoinScreen from "../Screens/JoinScreen";
import WaitingScreen from "../Screens/WaitingScreen";
import { useLocation } from "react-router-dom";
import socket from "../Socket/socket";
import ReconnectingScreen from "../Screens/ReconnectingScreen";
import DisconnectScreen from "../Screens/DisconnectScreen";

function GamePage() {
  const [turn, setTurn] = useState(null)
  const [checkMate, setCheckMate] = useState(false)
  const [isStaleMate, setIsStaleMate] = useState(false);
  const { id } = useParams();
  const [userColor, setUserColor] = useState()
  const [opponentColor, setOpponentColor] = useState()
  const { guestId } = useContext(UserContext);
  const [waitingScreen, setWaitingScreen] = useState(null)
  const [gameId, setGameId] = useState(null)
  const location = useLocation()
  const [mode, setMode] = useState(location.state?.mode ?? null);
  const navigate = useNavigate()
  const [disconnectScreen, setDisconnectScreen] = useState(false)
  const [reconnectingScreen, setReconnectingScreen] = useState(false)

  useEffect(() => {
    socket.on("waitingScreen", () => {
      setMode("multiplayer")
      setWaitingScreen(true)
    })

    socket.on("playerJoined", (data) => {
      console.log("PLAYER JOINED EVENT:", data);
      setWaitingScreen(false);
      navigate(`/game/${data.gameId}`)
    });

    socket.on("opponentDisconnected", () => {
      setDisconnectScreen(true)
    });

    socket.on("opponentReconnected", () => {
      setReconnectingScreen(false)
      setDisconnectScreen(false)
    });

    return () => {
      socket.off("waitingScreen");
      socket.off("playerJoined");
      socket.off("opponentDisconnected");
      socket.off("opponentReconnected");
    };
  }, [])

  return (
    <div className="flex justify-around">

      {id && (
        <main className=" flex gap-5 items-center">

          <Info
            turn={turn}
            checkMate={checkMate}
            staleMate={isStaleMate}
            id={id}
            userColor={userColor}
            opponentColor={opponentColor}
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
          />

        </main>
      )}
      {
        !id && mode === null && !guestId && (
          <LoginScreen />
        )
      }
      {/* {
        !id && mode === null && guestId && (
          // <ModeSelection
          //   mode={mode}
          //   setMode={setMode}
          // />
        )
      } */}

      {
        !id && mode !== null && mode !== "join" && guestId && !waitingScreen && (
          <MainMenu
            turn={turn}
            setTurn={setTurn}
            userColor={userColor}
            setUserColor={setUserColor}
            opponentColor={opponentColor}
            setOpponentColor={setOpponentColor}
            mode={mode}
            waitingScreen={waitingScreen}
            setWaitingScreen={setWaitingScreen}
            setGameId={setGameId}
          />
        )
      }

      {
        !id && mode !== null && mode === "join" && guestId && (
          <JoinScreen

          />
        )
      }
      {
        !id && mode === "multiplayer" && guestId && waitingScreen && (
          <WaitingScreen
            setWaitingScreen={setWaitingScreen}
            gameId={gameId}
          />
        )
      }

    </div>

  )
}
export default GamePage;