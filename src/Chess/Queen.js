import { bishopMoves } from "./bishop";
import { RookMoves } from "./Rook";

export function QueenMoves(selectedPiece, board) {

  const FakeRookMoves = RookMoves(selectedPiece, board);
  const FakeBishopMoves = bishopMoves(selectedPiece, board);

  return [...FakeRookMoves, ...FakeBishopMoves];
}