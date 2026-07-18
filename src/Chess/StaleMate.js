import { IsKingInCheck } from "./IsKingInCheck";
import { MovePiece } from "../Components/MovePiece";
import { GenerateMoves } from "./GenerateMoves";
export function staleMate(board, turn, enPassant) {

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
      const moves = GenerateMoves(piece, board, enPassant);
      for (const move of moves) {
        tempBoard = MovePiece(
          move.row,
          move.col,
          piece,
          board,
          move.castle,
          move.enPassant
        );
        const stillInCheck = IsKingInCheck(tempBoard, turn);
        if (!stillInCheck.inCheck) {
          return false;
        }
      }

    }
  }
  return true;
}
