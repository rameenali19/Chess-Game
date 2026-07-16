export function KnightMoves(selectedPiece, board) {
  let moves = [];

  function addMove(row, col) {
    if (
      row >= 0 &&
      row < 8 &&
      col >= 0 &&
      col < 8 &&
      board[row][col] === "."
    )
      moves.push({
        row: row,
        col: col
      })
  }
  addMove(selectedPiece.row + 2, selectedPiece.col - 1)
  addMove(selectedPiece.row + 2, selectedPiece.col + 1)
  addMove(selectedPiece.row - 2, selectedPiece.col - 1)
  addMove(selectedPiece.row - 2, selectedPiece.col + 1)
  addMove(selectedPiece.row - 1, selectedPiece.col - 2)
  addMove(selectedPiece.row + 1, selectedPiece.col - 2)
  addMove(selectedPiece.row - 1, selectedPiece.col + 2)
  addMove(selectedPiece.row + 1, selectedPiece.col + 2)

  return moves;
} 