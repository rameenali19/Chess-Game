import MoveLogger from "./MoveLogger";
import RightPanelButton from "./RightPanelButton";

function ChessboardRightPanel({ setResignModal, moveHistory, winner, userColor, turn, mode }) {

  return (
    <div className="flex flex-col items-center justify-end gap-3 mt-15">

      <MoveLogger
        moveHistory={moveHistory}
        winner={winner}
      />

      <RightPanelButton
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