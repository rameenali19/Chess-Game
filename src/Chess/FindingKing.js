export function FindingKing(board, turn) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (
        piece !== "." &&
        piece.type === "King" &&
        piece.color === turn
      ) {
        return { row, col };
      }
    }
  }
}