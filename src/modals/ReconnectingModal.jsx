import { useNavigate, Navigate } from "react-router-dom"
import Modal from "../components/Modal"
import Button from "../components/Button"
import Icon from "../components/Icon"

function ReconnectingModal({ open, setReconnectingModal, setDisconnectModal }) {

  const navigate = useNavigate()
  return (
    <Modal open={open}
      className="h-65 w-140">

      <div className=" flex flex-col items-center gap-4 justify-center h-full mt-5 px-2 ">
        <div className="text-3xl font-bold font-cormorant text-[#17384A]">
          Waiting for Opponent
        </div>
        <div className="text-[#17384A] font-inter ">
          The game will resume automatically when your opponent reconnects
        </div>

        <div
          className="w-10 h-10 rounded-full mb-3
             border-4 border-[#ffc79f]
             border-t-[#ff8127]
             animate-spin"
        />

        <div className="w-full justify-end flex">

          <Button
            text="Leave"
            variant="leave"
            textSize="small"
            fontWeight="medium"
            className="w-20 items-center flex justify-center gap-1 py-1"
            onClick={() => {
              setReconnectingModal(false)
              setDisconnectModal(false)
              navigate(`/mode-selection`)
            }}
            imageName="door"
            imageClassName="w-4 h-4"
          />
        </div>
      </div>
    </Modal>

  )

}
export default ReconnectingModal;