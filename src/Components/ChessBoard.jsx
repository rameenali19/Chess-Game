import Square from "./Square";
import PromotionModal from "../Modals/PromotionModal";
import { useChessBoard } from "../Hooks/ChessBoardHook";
function ChessBoard({
  turn,
  setTurn,
  checkMate,
  setCheckMate,
  isStaleMate,
  setIsStaleMate,
  id,
  userColor,
  opponentColor,
  setUserColor,
  setOpponentColor,
  mode,
  setMode,
  winner,
  setWinner,
  resign,
  setResign,
  endReason,
  setEndReason,
  setMoveHistory
}) {
  const {
    board,
    HandleClick,
    selectedPiece,
    moves,
    promotion,
    enPassant,
    kingCheckState,
    promote,


  } = useChessBoard({
    turn,
    setTurn,
    checkMate,
    setCheckMate,
    isStaleMate,
    setIsStaleMate,
    id,
    userColor,
    opponentColor,
    setUserColor,
    setOpponentColor,
    mode,
    setMode,
    winner,
    setWinner,
    resign,
    setResign,
    endReason,
    setEndReason,
    setMoveHistory

  });

  const displayBoard =
    userColor === "White"
      ? board
      : [...board].reverse().map((row) => [...row].reverse());

  return (
    <>
      {displayBoard.map((row, rowIndex) =>
        row.map((piece, colIndex) => {
          const realRow =
            userColor === "White" ? rowIndex : 7 - rowIndex;

          const realCol =
            userColor === "White" ? colIndex : 7 - colIndex;

          return (
            <Square
              key={`${realRow}-${realCol}`}
              row={realRow}
              col={realCol}
              piece={piece}
              onClick={() => HandleClick(realRow, realCol)}
              selected={
                selectedPiece &&
                selectedPiece.row === realRow &&
                selectedPiece.col === realCol
              }
              possibleMoves={moves.some(
                (move) =>
                  move.row === realRow &&
                  move.col === realCol
              )}
              possibleCaptures={moves.some(
                (move) =>
                  move.row === realRow &&
                  move.col === realCol &&
                  piece !== "."
              )}
              kingInCheck={
                kingCheckState.inCheck &&
                realRow === kingCheckState.king?.row &&
                realCol === kingCheckState.king?.col
              }
              checkingPiece={kingCheckState.attackers.some(
                (attacker) =>
                  realRow === attacker.row &&
                  realCol === attacker.col
              )}
              displayRow={rowIndex}
              displayCol={colIndex}
              userColor={userColor}
            />
          );
        })
      )}

      <PromotionModal
        turn={turn}
        promote={promote}
        open={promotion}
      />

    </>
  );
}

export default ChessBoard;