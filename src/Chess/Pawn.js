export function PawnMoves(selectedPiece, board, enPassant) {

  let moves = [];

  const direction = selectedPiece.color === "White" ? -1 : 1;
  const nextRow = selectedPiece.row + direction;

  if (
    nextRow >= 0 &&
    nextRow < 8 &&
    board[nextRow][selectedPiece.col] === ".") {
    moves.push({
      row: nextRow,
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

  function addCapture(row, col) {
    if (
      row >= 0 &&
      row < 8 &&
      col >= 0 &&
      col < 8 &&
      board[row][col] !== "." &&
      board[row][col].color !== selectedPiece.color
    ) {
      moves.push({ row, col });
    }
  }

  addCapture(nextRow, selectedPiece.col - 1);
  addCapture(nextRow, selectedPiece.col + 1);

  if (enPassant) {
    if (
      enPassant.color !== selectedPiece.color &&
      enPassant.row === selectedPiece.row &&
      Math.abs(enPassant.col - selectedPiece.col) === 1
    ) {
      moves.push({
        row: nextRow,
        col: enPassant.col,
        enPassant: true
      });
    }
  }

  return moves;
}