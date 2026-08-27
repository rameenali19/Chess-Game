import { findingKing } from "./findingKing";
import { generateMoves } from "./generateMoves";

export function isKingInCheck(board, turn, enPassant) {
  const king = findingKing(board, turn);
  const attackers = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (board[row][col] === ".") {
        continue;
      }
      else if (board[row][col].color !== turn) {
        const enemyPiece = {
          ...board[row][col],
          row: row,
          col: col
        }
        const moves = generateMoves(enemyPiece, board, enPassant, true);
        const KingInDanger = moves.some(move =>
          move.row === king.row &&
          move.col === king.col
        )
        if (KingInDanger) {
          attackers.push(enemyPiece);

        }
      }
    }
  }

  return {
    inCheck: attackers.length > 0,
    attackers,
    king
  }
}
