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
      const possibleMoves = generateMoves(piecePosition, board, enpassant)

      for (const move of possibleMoves) {
        const newBoard = movePiece(move.row, move.col, piecePosition, board, move.castle, move.enpassant)
        const kingState = isKingInCheck(newBoard, color, enpassant)
        if (kingState) continue;
        legalMoves.push({
          piece: piecePosition,
          source: {
            row, col
          },
          destination: {
            ...move
          }
        })
      }
    }
  }
  return legalMoves;
}