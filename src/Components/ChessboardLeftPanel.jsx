import UserDisplay from "./UserDisplay";
import GameInfoDisplay from "./GameInfoDisplay";
import CurrentTurnDisplay from "./CurrentTurnDisplay";

function ChessboardLeftPanel({ turn, checkMate, staleMate, id, userColor, opponentColor, resign }) {

  const src = turn === "White" ? "/white-queen.png" : "/black-queen.png";
  const opponent = opponentColor === "White" ? "white" : "black"
  const user = userColor === "White" ? "white" : "black"
  const statusColor = {
    onGoing: {
      color: "bg-[#F7D98D] text-[#8A5A00]",
      text: "In Progress"
    },
    complete: {
      color: "bg-[#D9E8C8] text-[#3F6B2A]",
      text: "Completed"
    }
  }
  const gameStatusDiv = statusColor[checkMate || staleMate || resign ? "complete" : "onGoing"]

  return (
    <div className="flex flex-col items-center justify-center gap-3">

      <UserDisplay
        color={opponentColor}
        text="Opponent"
      />

      <CurrentTurnDisplay
        src={src}
        turn={turn}
      />

      <GameInfoDisplay
        statusColor={gameStatusDiv.color}
        status={gameStatusDiv.text}
        id={id}
      />

      <UserDisplay
        color={userColor}
        text="You"
      />

    </div>

  )
}
export default ChessboardLeftPanel;
