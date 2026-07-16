export function PawnMoves(selectedPiece, board) {

  let moves = [];
  const direction = selectedPiece.color === "White" ? -1 : 1;

  if (board[selectedPiece.row + direction][selectedPiece.col] === ".") {
    moves.push({
      row: selectedPiece.row + direction,
      col: selectedPiece.col
    })



    if ((selectedPiece.row === 6 && (selectedPiece.color === "White"))
      || (selectedPiece.row === 1 && (selectedPiece.color === "Black"))) {
      if (board[selectedPiece.row + (direction * 2)][selectedPiece.col] === ".") {
        moves.push({
          row: selectedPiece.row + (direction * 2),
          col: selectedPiece.col
        })
      }
    }
  }
  return moves;
}