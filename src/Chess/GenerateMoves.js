import { pawnMoves } from "./pawn";
import { RookMoves } from "./Rook";
import { KnightMoves } from "./Knight";
import { bishopMoves } from "./bishop";
import { QueenMoves } from "./Queen";
import { KingMoves } from "./King";

export function generateMoves(selectedPiece, board, enPassant, checkOnly = false) {

  if (selectedPiece.type === "Rook") {
    return RookMoves(
      selectedPiece,
      board
    );
  }
  if (selectedPiece.type === "Queen") {
    return QueenMoves(
      selectedPiece,
      board
    );
  }
  if (selectedPiece.type === "King") {
    return KingMoves(
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
    return KnightMoves(
      selectedPiece,
      board
    );
  }

}