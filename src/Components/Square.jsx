import { pieceImages } from "../Chess/Constants";
function Square({ row, col, piece, onClick, selected, possibleMoves, possibleCaptures, kingInCheck, checkingPiece }) {
  const whiteBox = (row + col) % 2 === 0;
  const blackBox = (row + col) % 2 !== 0;
  let alphabetarray = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let squareColor = whiteBox ? "bg-[rgb(143,188,143)]" : "bg-amber-50";
  if (selected) squareColor = "bg-sky-300";
  if (checkingPiece) squareColor = "bg-yellow-200 ";
  if (possibleCaptures) squareColor = "bg-red-300";
  if (kingInCheck) squareColor = "bg-red-500";

  return (
    <div className={`w-full h-[62.5px]  relative text-[rgb(85,107,47)]
       ${squareColor}
    `}
      onClick={onClick}
    >
      {
        piece !== "." &&
        <img className="w-full h-full object-contain"
          src={pieceImages[piece.color][piece.type]}
          alt="Piece Image"
        />
      }
      {
        row === 7 && (
          <span className="absolute right-0.5 -bottom-0.5">{alphabetarray[col]}</span>
        )
      }
      {
        col === 0 && (
          <span className="absolute left-0.5 -top-0.5">{8 - row}</span>
        )
      }
      {
        possibleMoves ? (
          <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-300"></div>
        ) : ""
      }
    </div>
  )
}
export default Square;
