import { pieceImages } from "../Chess/Constants";
import Modal from "../Components/Modal";
function PromotionModal({ turn, promote, open }) {

  const pieces = ["Queen", "Rook", "Bishop", "Knight"]
  if (!turn) return null;
  return (

    <Modal open={open}
      className="h-60 w-120">

      <div className="text-3xl font-bold p-4 flex flex-col items-center font-cormorant text-[#4A2F1D]">
        <img src="/crown.png" alt="crown image" className="w-10 h-8 hover:scale-120 duration-150"></img>
        <div>
          Choose Promotion
        </div>
      </div>
      <div className="flex justify-around items-center ">

        {
          pieces.map(piece => (
            <div key={piece}
              className="border-2 border-[#e4d6bb] w-25 h-25 flex flex-col items-center justify-center
                hover:scale-105 duration-150 rounded-lg cursor-pointer hover:border-[#E67E00] 
                hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] font-cormorant text-[#4A2F1D] text-sm 
                hover:bg-[#fff4e6] font-semibold"
              onClick={() => promote(piece)}
            >
              <img

                src={pieceImages[turn][piece]}
                alt={piece}
                className="w-12 "
              />
              {piece}
            </div>
          ))}
      </div>
    </Modal>
  )


}
export default PromotionModal;