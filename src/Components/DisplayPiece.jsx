import { pieceImages } from "../chess/constants";
function DisplayPiece({ piece }) {
  return (
    <>
      {piece !== "." &&
        <img className="w-full h-full object-contain"
          src={pieceImages[piece.color][piece.type]}
          alt="Piece Image"
        />}
    </>
  )
}
export default DisplayPiece;