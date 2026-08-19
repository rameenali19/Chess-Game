import DisplayPiece from "./DisplayPiece";
function Square({ row, col, piece, onClick, selected, possibleMoves, possibleCaptures, kingInCheck, checkingPiece, displayRow, displayCol, userColor }) {

  const whiteBox = (displayRow + displayCol) % 2 === 0;
  const blackBox = (displayRow + displayCol) % 2 !== 0;
  const alphabetarray =
    userColor === "White" ?
      ["a", "b", "c", "d", "e", "f", "g", "h"]
      : ["h", "g", "f", "e", "d", "c", "b", "a"];

  function squareStyles() {
    if (selected) return "bg-sky-300";
    if (checkingPiece) return "bg-yellow-200 ";
    if (possibleCaptures) return "bg-red-300";
    if (kingInCheck) return "bg-red-500";
    return whiteBox ? "bg-[#F5E8D7]" : "bg-[#D8B892]";
  }

  const squareColor = squareStyles();

  return (
    <div className={`w-full h-17.5  relative text-[rgb(85,107,47)]
       ${squareColor}
    `}
      onClick={() => onClick()}
    >
      <DisplayPiece
        piece={piece}
      />

      {displayRow === 7 && (
        <span className="absolute right-0.5 -bottom-0.5">{alphabetarray[displayCol]}</span>
      )}

      {displayCol === 0 && (
        <span className="absolute left-0.5 -top-0.5">
          {userColor === "White"
            ? 8 - displayRow
            : displayRow + 1}
        </span>
      )}

      {possibleMoves && (
        <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-300"></div>
      )}
    </div>
  )
}
export default Square;
