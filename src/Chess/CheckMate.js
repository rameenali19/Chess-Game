import { IsKingInCheck } from "./IsKingInCheck";
import { MovePiece } from "../Components/MovePiece";
import { GenerateMoves } from "./GenerateMoves";
export function CheckMate(board, turn) {
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
      const moves = GenerateMoves(piece, board);
      for (const move of moves) {
        tempBoard = MovePiece(
          move.row,
          move.col,
          piece,
          board
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