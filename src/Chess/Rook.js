export function RookMoves(selectedPiece, board) {
  let moves = [];

  //UPWARDS MOVEMENT
  for (let row = selectedPiece.row - 1; row >= 0; row--) {
    if (board[row][selectedPiece.col] !== ".") {
      break;
    }
    else {
      moves.push({
        row: row,
        col: selectedPiece.col
      })
    }
  }

  //DOWNWARDS MOVEMENT 
  for (let row = selectedPiece.row + 1; row < 8; row++) {
    if (board[row][selectedPiece.col] !== ".") {
      break;
    }
    else {
      moves.push({
        row: row,
        col: selectedPiece.col
      })
    }
  }

  //LEFT MOVEMENT
  for (let col = selectedPiece.col - 1; col >= 0; col--) {
    if (board[selectedPiece.row][col] !== ".") {
      break;
    }
    else {
      moves.push({
        row: selectedPiece.row,
        col: col
      })
    }
  }


  //RIGHT MOVEMENT
  for (let col = selectedPiece.col + 1; col < 8; col++) {
    if (board[selectedPiece.row][col] !== ".") {
      break;
    }
    else {
      moves.push({
        row: selectedPiece.row,
        col: col
      })
    }
  }

  return moves;
}