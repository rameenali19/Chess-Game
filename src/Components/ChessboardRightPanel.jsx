import MoveLogger from "./MoveLogger";
import CapturedPieces from "./CapturedPieces";

function ChessboardRightPanel() {

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-15">

      <MoveLogger />

      <CapturedPieces />

    </div>
  )
}
export default ChessboardRightPanel;