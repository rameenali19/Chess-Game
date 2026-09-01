import Modal from "../components/Modal";
import Icon from "../components/Icon";
import Button from "../components/Button";

function DifficultyModal({ open, setDifficultyModal, setMode, setDifficultyLevel }) {


  return (
    <Modal open={open}
      className="h-120 w-100">
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="font-cormorant text-2xl  font-semibold text-[#17384A] tracking-wide">
            Choose AI Difficulty
          </h1>
          <h1 className="text-gray-700 text-xs tracking-wider">
            Select the difficulty level you want to play
          </h1>

          <Button
            variant="sideBarBlue"
            text="Continue"
            textSize="small"
            fontWeight="medium"
            onClick={() => {
            }}
            className={`w-27 h-8 mr-1`}
          />
        </div>

        <Button
          variant="cross"
          text="x"
          textSize="normal"
          fontWeight="medium"
          onClick={() => {
            setMode(null)
            setDifficultyModal(false)
          }}
          className="w-6 h-6 text-center"
        />
      </div>

    </Modal >
  )
}
export default DifficultyModal;