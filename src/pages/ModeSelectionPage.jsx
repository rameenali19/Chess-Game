import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ColorModal from "../modals/ColorModal";
import WelcomeModal from "../modals/WelcomeModal";
import JoinModal from "../modals/JoinModal";
import WaitingModal from "../modals/WaitingModal";
import { UserContext } from "../context/UserContext";
import GameModeSelection from "../components/GameModeSelection";
import ChessboardPreview from "../components/ChessboardPreview";
import socketService from "../socket/socketService";
import DifficultyModal from "../modals/DifficultyModal";

function ModeSelectionPage() {

  const navigate = useNavigate()
  const [waitingModal, setWaitingModal] = useState(null)
  const [difficultyLevel, setDifficultyLevel] = useState(null)
  const [difficultyModal, setDifficultyModal] = useState(false)
  const location = useLocation()
  const [mode, setMode] = useState(location.state?.mode ?? null);
  const { guestId } = useContext(UserContext);
  const [gameId, setGameId] = useState(null)
  const welcomeCondition = !guestId
  const colorModalCondition = guestId && mode !== "join" && mode !== null && !waitingModal
  const waitingModalCondition = mode === "multiplayer" && mode !== null && guestId && waitingModal
  const joinModalCondition = guestId && mode === "join" && mode !== null
  const difficultyModalCondition = guestId && mode === "ai" && difficultyModal;

  useEffect(() => {
    function playerJoinedHandle(data) {
      setWaitingModal(false);
      navigate(`/game/${data.gameId}`)
    }

    function waitingModalHandle() {
      setMode("multiplayer")
      setWaitingModal(true)
    }

    socketService.onPlayerJoined(playerJoinedHandle);
    socketService.onWaitingModal(waitingModalHandle);

    return () => {
      socketService.offWaitingModal(waitingModalHandle);
      socketService.offPlayerJoined(playerJoinedHandle);
    }
  }, [])

  return (
    <>
      <div className="page flex justify-center gap-8 items-center translate-y-6 ">

        <ChessboardPreview />

        <GameModeSelection
          setMode={setMode}
        />

      </div>

      {welcomeCondition && (
        <WelcomeModal
          open={welcomeCondition}
        />
      )}

      {colorModalCondition && (
        <ColorModal
          open={colorModalCondition}
          mode={mode}
          setDifficultyModal={setDifficultyModal}
          setWaitingModal={setWaitingModal}
          setGameId={setGameId}
          setMode={setMode}
        />
      )}

      {waitingModalCondition && (
        <WaitingModal
          open={waitingModalCondition}
          setWaitingModal={setWaitingModal}
          gameId={gameId}
          setMode={setMode}
        />
      )}

      {joinModalCondition && (
        <JoinModal
          open={joinModalCondition}
          setGameId={setGameId}
          setMode={setMode}
        />
      )}

      {difficultyModalCondition && (
        <DifficultyModal
          open={difficultyModalCondition}
        />
      )

      }
    </>
  )
}
export default ModeSelectionPage;





// useEffect(() => {
//   if (!guestId) return;

//   async function getAllGames() {
//     const game = ApiChess.getAPI();
//     const data = await game.getAllGames(1, 10, guestId);
//     setTotalGames(data.total)
//   }
//   getAllGames();
// }, [])

{/* <div className="bg-[#FFF7EA] border-2 border-[#E8DCC7] w-90 h-42 flex flex-col gap-2 font-inter  rounded-lg px-2 py-2">

            <div className="text-center font-bold text-[#443496]">Your Status</div>

            <div className="flex justify-between items-center px-3 text-[#35843C]">
              <div className="flex items-center gap-2">
                <img className="object-contain w-8 h-8 hover:scale-105 transition"
                  src="/status-controller.png" alt="controller image"
                ></img>
                <h1>Games Played</h1>
              </div>
              <div className="font-bold">{totalGames}</div>
            </div>

            <div className="flex justify-between items-center px-3 text-[#E67E00]">
              <div className="flex items-center gap-2">
                <img className="object-contain w-8 h-8 hover:scale-105 transition"
                  src="/status-win.png" alt="controller image"
                ></img>
                <h1>Wins</h1>
              </div
              <div className="font-bold">2</div>
            </div>

            <div className="flex justify-between items-center px-3 text-[#D9413A]">
              <div className="flex items-center gap-2">
                <img className="object-contain w-8 h-8 hover:scale-105 transition"
                  src="/status-win-rate.png" alt="controller image"
                ></img>
                <h1>Win Status</h1>
              </div>
              <div className="font-bold">2</div>
            </div>

          </div> */}