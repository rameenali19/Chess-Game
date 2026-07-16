import { BishopMoves } from "./Bishop";
import { RookMoves } from "./Rook";

export function QueenMoves(selectedPiece, board) {

  const FakeRookMoves = RookMoves(selectedPiece, board);
  const FakeBishopMoves = BishopMoves(selectedPiece, board);

  return [...FakeRookMoves, ...FakeBishopMoves];
}