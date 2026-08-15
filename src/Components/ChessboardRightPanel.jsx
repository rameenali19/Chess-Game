import MoveLogger from "./MoveLogger";
import CapturedPieces from "./CapturedPieces";
import RightPanelButtons from "./RightPanelButtons";

function ChessboardRightPanel({ setResignModal, moveHistory }) {

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-15">

      <MoveLogger
        moveHistory={moveHistory}
      />

      <CapturedPieces />

      <RightPanelButtons
        setResignModal={setResignModal}
      />

    </div>
  )
}
export default ChessboardRightPanel;