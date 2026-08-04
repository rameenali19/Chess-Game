
const user = "White";
const opponent = "Black"


export const initialBoard = [
  [
    { color: opponent, type: "Rook", hasMoved: false }, { color: opponent, type: "Knight" },
    { color: opponent, type: "Bishop" }, { color: opponent, type: "Queen" },
    { color: opponent, type: "King", hasMoved: false }, { color: opponent, type: "Bishop" },
    { color: opponent, type: "Knight" }, { color: opponent, type: "Rook", hasMoved: false }
  ],
  [
    { color: opponent, type: "Pawn", enPassant: false }, { color: opponent, type: "Pawn", enPassant: false },
    { color: opponent, type: "Pawn", enPassant: false }, { color: opponent, type: "Pawn", enPassant: false },
    { color: opponent, type: "Pawn", enPassant: false }, { color: opponent, type: "Pawn", enPassant: false },
    { color: opponent, type: "Pawn", enPassant: false }, { color: opponent, type: "Pawn", enPassant: false }
  ],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [
    { color: user, type: "Pawn", enPassant: false }, { color: user, type: "Pawn", enPassant: false },
    { color: user, type: "Pawn", enPassant: false }, { color: user, type: "Pawn", enPassant: false },
    { color: user, type: "Pawn", enPassant: false }, { color: user, type: "Pawn", enPassant: false },
    { color: user, type: "Pawn", enPassant: false }, { color: user, type: "Pawn", enPassant: false }
  ],
  [
    { color: user, type: "Rook", hasMoved: false }, { color: user, type: "Knight" },
    { color: user, type: "Bishop" }, { color: user, type: "Queen" },
    { color: user, type: "King", hasMoved: false }, { color: user, type: "Bishop" },
    { color: user, type: "Knight" }, { color: user, type: "Rook", hasMoved: false }
  ]
]


