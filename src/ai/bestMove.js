import { minimax } from "./minimax"

export function bestMove(board, aiColor, enPassant) {
  const bestMove = minimax(
    board,
    2,
    true,
    aiColor,
    aiColor,
    enPassant
  )
  return bestMove;
}