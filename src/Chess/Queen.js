import { bishopMoves } from "./bishop";
import { RookMoves } from "./Rook";

export function queenMoves(selectedPiece, board) {

  const fakeRookMoves = RookMoves(selectedPiece, board);
  const fakeBishopMoves = bishopMoves(selectedPiece, board);

  return [...fakeRookMoves, ...fakeBishopMoves];
}