import { MovePiece } from "../Components/MovePiece";
import { isKingInCheck } from "./isKingInCheck";

export function kingMoves(selectedPiece, board, movesOnly = false) {
  let moves = [];
  const homeRow = selectedPiece.color === "White" ? 7 : 0;
  function canCastle(homeRow, col, color) {
    const testBoard = MovePiece(homeRow, col, selectedPiece, board)
    return !isKingInCheck(testBoard, color).inCheck
  }

  function addMove(row, col) {
    if (
      row >= 0 &&
      row < 8 &&
      col >= 0 &&
      col < 8
    ) {
      if (board[row][col] === ".") {
        moves.push({
          row: row,
          col: col
        })
      }
      else if (board[row][col].color !== selectedPiece.color) {
        moves.push({
          row: row,
          col: col
        })
      }
    }
  }
  addMove(selectedPiece.row - 1, selectedPiece.col)
  addMove(selectedPiece.row + 1, selectedPiece.col)
  addMove(selectedPiece.row, selectedPiece.col - 1)
  addMove(selectedPiece.row, selectedPiece.col + 1)
  addMove(selectedPiece.row - 1, selectedPiece.col - 1)
  addMove(selectedPiece.row - 1, selectedPiece.col + 1)
  addMove(selectedPiece.row + 1, selectedPiece.col - 1)
  addMove(selectedPiece.row + 1, selectedPiece.col + 1)

  if (movesOnly) {
    return moves;
  }

  if (!selectedPiece.hasMoved) {

    //  king side castle

    const kingSideRook = board[homeRow][7];
    if (
      kingSideRook !== "." &&
      kingSideRook.type === "Rook" &&
      !kingSideRook.hasMoved &&
      board[homeRow][5] === "." &&
      board[homeRow][6] === "." &&
      !isKingInCheck(board, selectedPiece.color).inCheck
    ) {
      if (
        canCastle(homeRow, 5, selectedPiece.color) &&
        canCastle(homeRow, 6, selectedPiece.color)
      ) {
        moves.push({
          row: homeRow,
          col: 6,
          castle: "kingSide"
        });
      }
    }



    //white queen side

    const queenSideRook = board[homeRow][0];
    if (
      queenSideRook !== "." &&
      queenSideRook.type === "Rook" &&
      !queenSideRook.hasMoved &&
      board[homeRow][1] === "." &&
      board[homeRow][2] === "." &&
      board[homeRow][3] === "." &&
      !isKingInCheck(board, selectedPiece.color).inCheck
    ) {
      if (
        canCastle(homeRow, 3, selectedPiece.color) &&
        canCastle(homeRow, 2, selectedPiece.color)
      ) {
        moves.push({
          row: homeRow,
          col: 2,
          castle: "queenSide"
        });
      }
    }


  }
  return moves;
}

