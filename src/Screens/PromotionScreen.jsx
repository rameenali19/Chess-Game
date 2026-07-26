import { pieceImages } from "../Chess/Constants";
function Promotion({ turn, promote, open }) {

  const pieces = ["Queen", "Rook", "Bishop", "Knight"]
  if (open) {
    return (
      <div className="fixed inset-0  flex justify-center items-center">

        <div className="bg-[#FFF7EA] border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-60 w-120
        shadow-[rgba(23,56,74,0.15)]">
          <div className="text-3xl font-bold mb-7 flex flex-col items-center font-cormorant text-[#4A2F1D]">
            <img src="/crown.png" alt="crown image" className="w-10 h-8 hover:scale-120 duration-150"></img>
            <div>
              Choose Promotion
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">

            {
              pieces.map(piece => (
                <div key={piece}
                  className="border-2 border-[#e4d6bb] w-30 h-30 flex flex-col items-center justify-center
                hover:scale-105 duration-150 rounded-lg cursor-pointer hover:border-[#E67E00] 
                hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] font-cormorant text-[#4A2F1D] text-sm 
                hover:bg-[#ffeace] font-semibold">
                  <img

                    src={pieceImages[turn][piece]}
                    alt={piece}
                    className="w-12 "
                    onClick={() => promote(piece)}
                  />
                  {piece}
                </div>
              ))}
          </div>

        </div>

      </div>
    )
  }

}
export default Promotion;