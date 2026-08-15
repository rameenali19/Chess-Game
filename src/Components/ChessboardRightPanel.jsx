import MoveLogger from "./MoveLogger";
import CapturedPieces from "./CapturedPieces";
import RightPanelButtons from "./RightPanelButtons";

function ChessboardRightPanel({ resign }) {

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-15">

      <MoveLogger />

      <CapturedPieces />

      <RightPanelButtons
        resign={resign}
      />

    </div>
  )
}
export default ChessboardRightPanel;