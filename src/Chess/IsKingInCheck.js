import { FindingKing } from "./FindingKing";
import { GenerateMoves } from "./GenerateMoves";

export function IsKingInCheck(board, turn) {
  const king = FindingKing(board, turn);
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
        const moves = GenerateMoves(enemyPiece, board);
        console.log(enemyPiece.type, enemyPiece.row, enemyPiece.col, moves);
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