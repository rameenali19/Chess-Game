import { bishopMoves } from "./bishop";
import { rookMoves } from "./rook";

export function queenMoves(selectedPiece, board) {

  const fakeRookMoves = rookMoves(selectedPiece, board);
  const fakeBishopMoves = bishopMoves(selectedPiece, board);

  return [...fakeRookMoves, ...fakeBishopMoves];
}