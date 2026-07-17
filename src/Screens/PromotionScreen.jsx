import { pieceImages } from "../Chess/Constants";
function Promotion({ turn, promote }) {

  const pieces = ["Queen", "Rook", "Bishop", "Knight"]
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white rounded-xl p-3">
        <h2 className="text-xl font-bold mb-4">
          Choose Promotion
        </h2>
        <div className="flex gap-3">

          {
            pieces.map(piece => (
              <img
                key={piece}
                src={pieceImages[turn][piece]}
                alt={piece}
                className="w-16 cursor-pointer hover:scale-110 duration-150"
                onClick={() => promote(piece)}
              />
            ))}
        </div>
      </div>

    </div>
  )
}
export default Promotion;