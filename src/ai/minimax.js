import { generateAllMoves } from "./generateAllMoves";
import { evaluateBoard } from "./evaluateBoard";
import { movePiece } from "../chess/movePiece";

export function minimax(board, depth, maximizingPlayer, currentColor, aiColor, enPassant) {

  if (depth === 0) {
    return {
      score: evaluateBoard(board, aiColor)
    }
  }

  const moves = generateAllMoves(board, currentColor, enPassant)

  if (maximizingPlayer) {
    let bestScore = - Infinity;
    let bestMove = null;

    for (const move of moves) {
      const newBoard = movePiece(move.destination.row,
        move.destination.col,
        move.piece,
        board,
        move.destination.castle,
        move.destination.enPassant)

      const nextColor = currentColor === "White" ? "Black" : "White";

      const result = minimax(newBoard,
        depth - 1,
        false,
        nextColor,
        aiColor,
        enPassant)

      if (result.score > bestScore) {
        bestScore = result.score;
        bestMove = move;
      }
    }
    return {
      score: bestScore,
      move: bestMove
    };
  }

  else {
    let bestScore = Infinity;
    let bestMove = null;

    for (const move of moves) {
      const newBoard = movePiece(move.destination.row,
        move.destination.col,
        move.piece,
        board,
        move.destination.castle,
        move.destination.enPassant)

      const nextColor = currentColor === "White" ? "Black" : "White";

      const result = minimax(newBoard,
        depth - 1,
        true,
        nextColor,
        aiColor,
        enPassant)

      if (result.score < bestScore) {
        bestScore = result.score;
        bestMove = move;
      }
    }
    return {
      score: bestScore,
      move: bestMove
    };
  }
}