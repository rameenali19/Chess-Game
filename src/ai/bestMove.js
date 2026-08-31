import { minimax } from "./minimax"

export function bestMove(board, aiColor, enPassant) {
  const alpha = - Infinity;
  const beta = Infinity;
  const bestMove = minimax(
    board,
    3,
    true,
    aiColor,
    aiColor,
    enPassant,
    alpha,
    beta
  )
  return bestMove;
}