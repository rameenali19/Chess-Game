import { IsKingInCheck } from "./IsKingInCheck";
import { MovePiece } from "../Components/MovePiece";
import { generateMoves } from "./generateMoves";
export function stalemateLogic(board, turn, enPassant) {

  let tempBoard;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

      if (board[row][col] === ".") {
        continue;
      }
      if (board[row][col].color !== turn) {
        continue;
      }

      const piece = {
        ...board[row][col],
        row: row,
        col: col
      }
      const moves = generateMoves(piece, board, enPassant);
      for (const move of moves) {
        tempBoard = MovePiece(
          move.row,
          move.col,
          piece,
          board,
          move.castle,
          move.enPassant
        );
        const stillInCheck = IsKingInCheck(tempBoard, turn, enPassant);
        if (!stillInCheck.inCheck) {
          return false;
        }
      }

    }
  }
  return true;
}
