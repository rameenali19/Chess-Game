import { pieceImages } from "../chess/constants";
import Icon from "./Icon";
function DisplayPiece({ piece }) {
  return (
    <>
      {piece !== "." &&
        <Icon
          name={pieceImages[piece.color][piece.type]}
          className="w-full h-full"
        />}
    </>
  )
}
export default DisplayPiece;