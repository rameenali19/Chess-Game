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

      if (
        move.piece.type === "Pawn" &&
        (
          (move.piece.color === "White" && move.destination.row === 0) ||
          (move.piece.color === "Black" && move.destination.row === 7)
        )
      ) {

        newBoard[move.destination.row][move.destination.col] = {
          ...newBoard[move.destination.row][move.destination.col],
          type: "Queen",
        }
      }

      let newEnPassant = null;

      if (
        move.piece.type === "Pawn" &&
        Math.abs(move.piece.row - move.destination.row) === 2
      ) {
        newEnPassant = {
          row: move.destination.row,
          col: move.destination.col,
          color: move.piece.color
        };
      }

      const nextColor = currentColor === "White" ? "Black" : "White";

      const result = minimax(newBoard,
        depth - 1,
        false,
        nextColor,
        aiColor,
        newEnPassant)

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

      if (
        move.piece.type === "Pawn" &&
        (
          (move.piece.color === "White" && move.destination.row === 0) ||
          (move.piece.color === "Black" && move.destination.row === 7)
        )
      ) {

        newBoard[move.destination.row][move.destination.col] = {
          ...newBoard[move.destination.row][move.destination.col],
          type: "Queen",
        }
      }
      let newEnPassant = null;

      if (
        move.piece.type === "Pawn" &&
        Math.abs(move.piece.row - move.destination.row) === 2
      ) {
        newEnPassant = {
          row: move.destination.row,
          col: move.destination.col,
          color: move.piece.color
        };
      }

      const nextColor = currentColor === "White" ? "Black" : "White";

      const result = minimax(newBoard,
        depth - 1,
        true,
        nextColor,
        aiColor,
        newEnPassant)

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