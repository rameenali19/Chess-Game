export function KingMoves(selectedPiece, board) {
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
  addMove(selectedPiece.row - 1, selectedPiece.col)
  addMove(selectedPiece.row + 1, selectedPiece.col)
  addMove(selectedPiece.row, selectedPiece.col - 1)
  addMove(selectedPiece.row, selectedPiece.col + 1)
  addMove(selectedPiece.row - 1, selectedPiece.col - 1)
  addMove(selectedPiece.row - 1, selectedPiece.col + 1)
  addMove(selectedPiece.row + 1, selectedPiece.col - 1)
  addMove(selectedPiece.row + 1, selectedPiece.col + 1)

  return moves;
}

