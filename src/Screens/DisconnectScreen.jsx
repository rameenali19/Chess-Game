import { Navigate, useNavigate } from "react-router-dom"
import Button from "../Components/Button"
import Modal from "../Components/Modal"

function DisconnectScreen({ open, setDisconnectScreen, setWaitingModal, setReconnectingScreen }) {
  const navigate = useNavigate()

  return (
    <Modal open={open}
      className="h-65 w-125">

      <div className="flex flex-col items-center justify-center h-full gap-8">

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
            textSize="large"
            fontWeight="medium"
            className="w-35 items-center flex justify-center gap-1 py-1"
            onClick={() => {
              setDisconnectScreen(false)
              setReconnectingScreen(true)
            }}
            image="/sand-clock.png"
            imageText="sand clock image"
            imageStyling="object-contain w-5 h-5"
          />

          <Button
            text="Leave"
            variant="leave"
            textSize="large"
            fontWeight="medium"
            className="w-35 items-center flex justify-center gap-1 py-1"
            onClick={() => {
              setDisconnectScreen(false)
              navigate(`/modeselection`)
            }}
            image="/door.png"
            imageText="door image"
            imageStyling="object-contain w-5 h-5"
          />

        </div>
      </div>

    </Modal>

  )


}
export default DisconnectScreen