import { minimax } from "./minimax"

export function bestMove(board, depth, aiColor, enPassant) {
  const alpha = - Infinity;
  const beta = Infinity;
  const bestMove = minimax(
    board,
    depth,
    true,
    aiColor,
    aiColor,
    enPassant,
    alpha,
    beta
  )
  return bestMove;
}