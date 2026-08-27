import { pawnMoves } from "./pawn";
import { rookMoves } from "./rook";
import { knightMoves } from "./knight";
import { bishopMoves } from "./bishop";
import { queenMoves } from "./queen";
import { kingMoves } from "./king";

export function generateMoves(selectedPiece, board, enPassant, checkOnly = false) {

  if (selectedPiece.type === "Rook") {
    return rookMoves(
      selectedPiece,
      board
    );
  }
  if (selectedPiece.type === "Queen") {
    return queenMoves(
      selectedPiece,
      board
    );
  }
  if (selectedPiece.type === "King") {
    return kingMoves(
      selectedPiece,
      board,
      checkOnly,
    );
  }
  if (selectedPiece.type === "Bishop") {
    return bishopMoves(
      selectedPiece,
      board
    );
  }
  if (selectedPiece.type === "Pawn") {
    return pawnMoves(
      selectedPiece,
      board,
      enPassant,

    )
  }
  if (selectedPiece.type === "Knight") {
    return knightMoves(
      selectedPiece,
      board
    );
  }

}
