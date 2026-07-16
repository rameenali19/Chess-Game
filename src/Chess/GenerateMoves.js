import { PawnMoves } from "./Pawn";
import { RookMoves } from "./Rook";
import { KnightMoves } from "./Knight";
import { BishopMoves } from "./Bishop";
import { QueenMoves } from "./Queen";
import { KingMoves } from "./King";

export function GenerateMoves(selectedPiece, board) {
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
      board
    );
  }
  if (selectedPiece.type === "Bishop") {
    return BishopMoves(
      selectedPiece,
      board
    );
  }
  if (selectedPiece.type === "Pawn") {
    return PawnMoves(
      selectedPiece,
      board
    )
  }
  if (selectedPiece.type === "Knight") {
    return KnightMoves(
      selectedPiece,
      board
    );
  }
}