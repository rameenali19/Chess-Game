import Modal from "../components/Modal";
import PromotionPieces from "../components/PromotionPieces";
import Icon from "../components/Icon";

function PromotionModal({ turn, promote, open }) {

  const pieces = ["Queen", "Rook", "Bishop", "Knight"]
  if (!turn) return null;
  return (
    <Modal open={open}
      className="h-67 w-130">

      <div className="flex flex-col h-full text-[#4A2F1D] font-playfair gap-5 mt-6">

        <div className="flex flex-col items-center">
          <Icon
            name="crown"
            className="w-10 hover:scale-120 duration-150"
          />
          <div className="text-3xl font-bold">
            Choose Promotion
          </div>
        </div>

        <PromotionPieces
          pieces={pieces}
          promote={promote}
          turn={turn}
        />
      </div>
    </Modal>
  )
}
export default PromotionModal;