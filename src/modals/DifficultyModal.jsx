import Modal from "../components/Modal";
import Icon from "../components/Icon";
import Button from "../components/Button";
import DifficultyLevel from "../components/DifficultyLevel";

function DifficultyModal({ open, setDifficultyModal, setMode, setDifficultyLevel }) {


  return (
    <Modal open={open}
      className="h-120 w-100">
      <div className="relative flex justify-center">

        <div className="flex flex-col items-center gap-4">
          <div>
            <h1 className="font-cormorant text-2xl  font-semibold text-[#17384A] tracking-wide mt-4">
              Choose AI Difficulty
            </h1>
            <h1 className="text-gray-700 text-xs tracking-wider">
              Select the difficulty level you want to play
            </h1>
          </div>

          <DifficultyLevel />

          <Button
            variant="sideBarBlue"
            text="Continue"
            textSize="small"
            fontWeight="medium"
            onClick={() => {
              setMode("ai")
              setDifficultyModal(false)
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
          className="w-6 h-6 text-center absolute right-3 top-2"
        />
      </div>

    </Modal >
  )
}
export default DifficultyModal;