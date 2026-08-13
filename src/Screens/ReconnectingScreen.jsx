import { useNavigate, Navigate } from "react-router-dom"
import Modal from "../Components/Modal"
import Button from "../Components/Button"

function ReconnectingScreen({ open, setReconnectingScreen, setDisconnectScreen }) {
  if (open) {
    const navigate = useNavigate()
    return (

      <Modal className="h-65 w-140">

        <div className=" flex flex-col items-center gap-3 justify-center h-full mt-4">
          <div className="text-3xl font-bold font-cormorant text-[#17384A]">
            Waiting for Opponent
          </div>
          <div className="text-[#17384A] font-inter ">
            The game will resume automatically when your opponent reconnects
          </div>

          <div
            className="w-13 h-13 rounded-full mb-3
             border-4 border-[#ffc79f]
             border-t-[#ff8127]
             animate-spin"
          />

          <div className="w-full justify-end flex">

            <Button
              text="Leave"
              variant="leave"
              textSize="medium"
              fontWeight="medium"
              className="w-25 items-center flex justify-center gap-1 py-1"
              onClick={() => {
                setReconnectingScreen(false)
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
}
export default ReconnectingScreen