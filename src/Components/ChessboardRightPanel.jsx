import MoveLogger from "./MoveLogger";
import CapturedPieces from "./CapturedPieces";
import RightPanelButtons from "./RightPanelButtons";

function ChessboardRightPanel({ setResignModal, moveHistory, winner, userColor, turn, mode }) {

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-15">

      <MoveLogger
        moveHistory={moveHistory}
        winner={winner}
      />

      <CapturedPieces />

      <RightPanelButtons
        setResignModal={setResignModal}
        winner={winner}
        userColor={userColor}
        turn={turn}
        mode={mode}
      />

    </div>
  )
}
export default ChessboardRightPanel;