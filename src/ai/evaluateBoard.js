const pieceValue = {
  Pawn: 100,
  Knight: 320,
  Bishop: 330,
  Rook: 500,
  Queen: 900,
  King: 20000
}

export function evaluateBoard(board, aiColor) {
  let score = 0;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece === ".") continue;
      const value = pieceValue[piece.type];
      if (piece.color === aiColor)
        score = score + value;
      else score = score - value;
    }
  }
  return score;
}