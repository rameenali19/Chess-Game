import { generateMoves } from "../chess/generateMoves";
import { movePiece } from "../chess/movePiece";
import { isKingInCheck } from "../chess/isKingInCheck";

export function generateAllMoves(board, color, enpassant) {
  const legalMoves = [];

  for (let row = 0; row < 8; row++) {

    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece === ".") continue;
      if (piece.color !== color) continue;

      const piecePosition = {
        ...piece,
        row,
        col
      }
      
    }
  }
}