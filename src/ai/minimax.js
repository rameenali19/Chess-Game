import { generateAllMoves } from "./generateAllMoves";
import { evaluateBoard } from "./evaluateBoard";
import { movePiece } from "../chess/movePiece";

export function minimax(board, depth, maximizingPlayer, currentColor, aiColor, enPassant) {

  if (depth === 0) {
    return evaluateBoard(board, aiColor)
  }

  const moves = generateAllMoves(board, currentColor, enPassant)
}