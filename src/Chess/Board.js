export let initialBoard = [
  [
    { color: "Black", type: "Rook", hasMoved: false }, { color: "Black", type: "Knight" },
    { color: "Black", type: "Bishop" }, { color: "Black", type: "Queen" },
    { color: "Black", type: "King", hasMoved: false }, { color: "Black", type: "Bishop" },
    { color: "Black", type: "Knight" }, { color: "Black", type: "Rook", hasMoved: false }
  ],
  [
    { color: "Black", type: "Pawn", enPassant: false }, { color: "Black", type: "Pawn", enPassant: false },
    { color: "Black", type: "Pawn", enPassant: false }, { color: "Black", type: "Pawn", enPassant: false },
    { color: "Black", type: "Pawn", enPassant: false }, { color: "Black", type: "Pawn", enPassant: false },
    { color: "Black", type: "Pawn", enPassant: false }, { color: "Black", type: "Pawn", enPassant: false }
  ],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [
    { color: "White", type: "Pawn", enPassant: false }, { color: "White", type: "Pawn", enPassant: false },
    { color: "White", type: "Pawn", enPassant: false }, { color: "White", type: "Pawn", enPassant: false },
    { color: "White", type: "Pawn", enPassant: false }, { color: "White", type: "Pawn", enPassant: false },
    { color: "White", type: "Pawn", enPassant: false }, { color: "White", type: "Pawn", enPassant: false }
  ],
  [
    { color: "White", type: "Rook", hasMoved: false }, { color: "White", type: "Knight" },
    { color: "White", type: "Bishop" }, { color: "White", type: "Queen" },
    { color: "White", type: "King", hasMoved: false }, { color: "White", type: "Bishop" },
    { color: "White", type: "Knight" }, { color: "White", type: "Rook", hasMoved: false }
  ]
]

export const createGameInfo = {
  gameStatus: initialBoard,
  gameState: "unfinished",
  currentTurn: "White"
}
