import { pieceImages } from "../chess/constants";
function PromotionPieces({ pieces, promote, turn }) {
  return (
    <div className="flex justify-around items-center ">
      {
        pieces.map(piece => (
          <div key={piece}
            className="border-2 border-[#e4d6bb] w-25 h-25 flex flex-col items-center justify-center
                hover:scale-105 duration-150 rounded-lg cursor-pointer hover:border-[#E67E00] 
                hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] font-cormorant text-[#4A2F1D] text-sm 
                hover:bg-[#fff4e6] font-semibold"
            onClick={() => promote(piece)}>
            <img
              src={pieceImages[turn][piece]}
              alt={piece}
              className="w-12 "
            />
            {piece}
          </div>
        ))}
    </div>
  )
}
export default PromotionPieces;