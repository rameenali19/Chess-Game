import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Modal from "../components/Modal"
import Icon from "../components/Icon"

function DisconnectModal({ open, setDisconnectModal, setWaitingModal, setReconnectingModal }) {
  const navigate = useNavigate()

  return (
    <Modal open={open}
      className="h-65 w-125">

      <div className="flex flex-col items-center justify-center h-full gap-5">

        <div className=" flex flex-col items-center gap-3 text-[#17384A]">
          <h1 className="text-3xl font-bold font-cormorant">
            Connection Lost
          </h1>
          <h1 className="font-inter text-xs">
            Your opponent is currently unavailable</h1>
          <h1 className="font-inter text-xs"> You can wait for them to return or leave the game.</h1>
        </div>

        <div className="flex justify-center items-center gap-4">

          <Button
            text="Wait"
            variant="wait"
            textSize="medium"
            fontWeight="medium"
            className="w-30 items-center flex justify-center gap-1 py-1"
            onClick={() => {
              setDisconnectModal(false)
              setReconnectingModal(true)
            }}
            imageName="sandClock"
            imageClassName="w-5 h-5"
          />

          <Button
            text="Leave"
            variant="leave"
            textSize="medium"
            fontWeight="medium"
            className="w-30 items-center flex justify-center gap-1 py-1"
            onClick={() => {
              setDisconnectModal(false)
              navigate(`/mode-selection`)
            }}
            imageName="door"
            imageClassName="w-5 h-5"
          />

        </div>
      </div>

    </Modal>

  )


}
export default DisconnectModal;