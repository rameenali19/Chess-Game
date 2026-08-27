import Button from "../components/Button";
import Modal from "../components/Modal";

function ResignModal({ open, resigning, setResignModal }) {

  return (

    <Modal open={open}
      className="h-65 w-120">

      <div className="flex flex-col h-full justify-center gap-6">

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold font-cormorant text-[#17384A]">
            Resign
          </h1>
          <h1 className="text-xs font-inter text-[#17384A]">
            Do you want to Resign from on going game
          </h1>
        </div>

        <div className="flex justify-center gap-10 w-full text-white font-inter font-medium">

          <Button
            text="yes"
            variant="primary"
            textSize="large"
            fontWeight="medium"
            className="w-27 py-1"
            onClick={resigning}
          />

          <Button
            text="No"
            variant="primary"
            textSize="normal"
            fontWeight="medium"
            className="w-27 py-1"
            onClick={() => {
              setResignModal(false);
            }}
          />
        </div>

      </div>

    </Modal>
  )
}
export default ResignModal;