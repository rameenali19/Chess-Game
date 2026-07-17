const br = "/blackrook-removebg-preview.png";
const bb = "/blackbishop-removebg-preview.png";
const bn = "/blackknight-removebg-preview.png";
const bq = "/blackqueen-removebg-preview.png";
const bk = "/blackking-removebg-preview.png";
const bp = "/blackpawn-removebg-preview.png";
const WR = "/white_rook-removebg-preview.png";
const WB = "/white_bishop-removebg-preview.png";
const WN = "/white_knight-removebg-preview.png";
const WQ = "/white_queen-removebg-preview.png";
const WK = "/white_king-removebg-preview.png";
const WP = "/white_pawn-removebg-preview.png";

export let initialBoard = [
  [
    { color: "Black", type: "Rook", image: br, hasMoved: false }, { color: "Black", type: "Knight", image: bn },
    { color: "Black", type: "Bishop", image: bb }, { color: "Black", type: "Queen", image: bq },
    { color: "Black", type: "King", image: bk, hasMoved: false }, { color: "Black", type: "Bishop", image: bb },
    { color: "Black", type: "Knight", image: bn }, { color: "Black", type: "Rook", image: br, hasMoved: false }
  ],
  [
    { color: "Black", type: "Pawn", image: bp }, { color: "Black", type: "Pawn", image: bp },
    { color: "Black", type: "Pawn", image: bp }, { color: "Black", type: "Pawn", image: bp },
    { color: "Black", type: "Pawn", image: bp }, { color: "Black", type: "Pawn", image: bp },
    { color: "Black", type: "Pawn", image: bp }, { color: "Black", type: "Pawn", image: bp }
  ],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [
    { color: "White", type: "Pawn", image: WP }, { color: "White", type: "Pawn", image: WP },
    { color: "White", type: "Pawn", image: WP }, { color: "White", type: "Pawn", image: WP },
    { color: "White", type: "Pawn", image: WP }, { color: "White", type: "Pawn", image: WP },
    { color: "White", type: "Pawn", image: WP }, { color: "White", type: "Pawn", image: WP }
  ],
  [
    { color: "White", type: "Rook", image: WR, hasMoved: false }, { color: "White", type: "Knight", image: WN },
    { color: "White", type: "Bishop", image: WB }, { color: "White", type: "Queen", image: WQ },
    { color: "White", type: "King", image: WK, hasMoved: false }, { color: "White", type: "Bishop", image: WB },
    { color: "White", type: "Knight", image: WN }, { color: "White", type: "Rook", image: WR, hasMoved: false }
  ]
]
