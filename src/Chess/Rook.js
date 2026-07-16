export function RookMoves(selectedPiece, board) {
  let moves = [];

  //UPWARDS MOVEMENT
  for (let row = selectedPiece.row - 1; row >= 0; row--) {
    if (board[row][selectedPiece.col] === ".") {
      moves.push({
        row: row,
        col: selectedPiece.col
      })
    }
    else if (board[row][selectedPiece.col].color !== selectedPiece.color) {
      moves.push({
        row: row,
        col: selectedPiece.col
      })
      break;
    }
    else break;

  }

  //DOWNWARDS MOVEMENT 
  for (let row = selectedPiece.row + 1; row < 8; row++) {
    if (board[row][selectedPiece.col] === ".") {
      moves.push({
        row: row,
        col: selectedPiece.col
      })
    }

    else if (board[row][selectedPiece.col].color !== selectedPiece.color) {
      moves.push({
        row: row,
        col: selectedPiece.col
      })
      break;
    }
    else break;
  }

  //LEFT MOVEMENT
  for (let col = selectedPiece.col - 1; col >= 0; col--) {
    if (board[selectedPiece.row][col] === ".") {
      moves.push({
        row: selectedPiece.row,
        col: col
      })
    }

    else if (board[selectedPiece.row][col].color !== selectedPiece.color) {
      moves.push({
        row: selectedPiece.row,
        col: col
      })
      break;
    }
    else break;
  }


  //RIGHT MOVEMENT
  for (let col = selectedPiece.col + 1; col < 8; col++) {
    if (board[selectedPiece.row][col] === ".") {
      moves.push({
        row: selectedPiece.row,
        col: col
      })
    }

    else if (board[selectedPiece.row][col].color !== selectedPiece.color) {
      moves.push({
        row: selectedPiece.row,
        col: col
      })
      break;
    }
    else break;
  }

  return moves;
}