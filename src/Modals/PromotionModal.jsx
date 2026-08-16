import Modal from "../Components/Modal";
import PromotionPieces from "../Components/PromotionPieces";

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

      <PromotionPieces
        pieces={pieces}
        promote={promote}
        turn={turn}
      />

    </Modal>
  )


}
export default PromotionModal;