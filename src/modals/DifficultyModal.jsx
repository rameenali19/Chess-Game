import Modal from "../components/Modal";
import Icon from "../components/Icon";

function DifficultyModal({ open, setDifficultyModal, setMode, setDifficultyLevel }) {


  return (
    <Modal open={open}
      className="h-120 w-100">

      <div className="flex flex-col items-center">
        <h1 className="font-cormorant text-2xl  font-semibold text-[#17384A]">
          Choose AI Difficulty
        </h1>
        <h1 className="text-gray-700 text-xs tracking-wider">
          Select the difficulty level you want to play
        </h1>
      </div>


      <div>

      </div>

    </Modal>
  )
}
export default DifficultyModal;