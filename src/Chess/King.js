export function KingMoves(selectedPiece, board) {
  let moves = [];

  function addMove(row, col) {
    if (
      row >= 0 &&
      row < 8 &&
      col >= 0 &&
      col < 8
    ) {
      if (board[row][col] === ".") {
        moves.push({
          row: row,
          col: col
        })
      }
      else if (board[row][col].color !== selectedPiece.color) {
        moves.push({
          row: row,
          col: col
        })
      }
    }
  }
  addMove(selectedPiece.row - 1, selectedPiece.col)
  addMove(selectedPiece.row + 1, selectedPiece.col)
  addMove(selectedPiece.row, selectedPiece.col - 1)
  addMove(selectedPiece.row, selectedPiece.col + 1)
  addMove(selectedPiece.row - 1, selectedPiece.col - 1)
  addMove(selectedPiece.row - 1, selectedPiece.col + 1)
  addMove(selectedPiece.row + 1, selectedPiece.col - 1)
  addMove(selectedPiece.row + 1, selectedPiece.col + 1)



  if (!selectedPiece.hasMoved) {

    // White king side castle
    if (selectedPiece.color === "White") { //if king is white
      const rook = board[7][7];

      if (
        rook !== "." &&
        rook.type === "Rook" &&
        !rook.hasMoved &&
        board[7][5] === "." &&
        board[7][6] === "."
      ) {
        moves.push({
          row: 7,
          col: 6,
          castle: "kingSide"
        });
      }
    }

    // Black king side castle
    if (selectedPiece.color === "Black") { //if king is black
      const rook = board[0][7];

      if (
        rook !== "." &&
        rook.type === "Rook" &&
        !rook.hasMoved &&
        board[0][5] === "." &&
        board[0][6] === "."
      ) {
        moves.push({
          row: 0,
          col: 6,
          castle: "kingSide"
        });
      }
    }

    if (selectedPiece.color === "White") { //if king is white
      const rook = board[7][0];

      if (
        rook !== "." &&
        rook.type === "Rook" &&
        !rook.hasMoved &&
        board[7][1] === "." &&
        board[7][2] === "." &&
        board[7][3] === "."
      ) {
        moves.push({
          row: 7,
          col: 2,
          castle: "queenSide"
        });
      }
    }

    // Black queen side castle
    if (selectedPiece.color === "Black") { //if king is black
      const rook = board[0][0];

      if (
        rook !== "." &&
        rook.type === "Rook" &&
        !rook.hasMoved &&
        board[0][1] === "." &&
        board[0][2] === "." &&
        board[0][3] === "."
      ) {
        moves.push({
          row: 0,
          col: 2,
          castle: "queenSide"
        });
      }
    }
  }
  return moves;
}

