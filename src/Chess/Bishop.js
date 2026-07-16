export function BishopMoves(selectedPiece, board) {
  let moves = [];

  for (let i = 1; i < 8; i++) {
    let row = selectedPiece.row - i;
    let col = selectedPiece.col - i;
    if (row < 0 || col < 0) {
      break;
    }
    if (board[row][col] !== ".") {
      break;
    }
    moves.push({
      row: row,
      col: col
    })
  }


  for (let i = 1; i < 8; i++) {
    let row = selectedPiece.row - i;
    let col = selectedPiece.col + i;
    if (row < 0 || col > 7) {
      break;
    }
    if (board[row][col] !== ".") {
      break;
    }
    moves.push({
      row: row,
      col: col
    })
  }


  for (let i = 1; i < 8; i++) {
    let row = selectedPiece.row + i;
    let col = selectedPiece.col - i
    if (row > 7 || col < 0) {
      break;
    }
    if (board[row][col] !== ".") {
      break;
    }
    moves.push({
      row: row,
      col: col
    })
  }


  for (let i = 1; i < 8; i++) {
    let row = selectedPiece.row + i;
    let col = selectedPiece.col + i
    if (row > 7 || col > 7) {
      break;
    }
    if (board[row][col] !== ".") {
      break;
    }
    moves.push({
      row: row,
      col: col
    })
  }

  return moves;
}