import ApiChess from "../api/apiChess";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Button from "../components/Button";
import Modal from "../components/Modal";

function WelcomeModal({ open }) {

  const { guestId } = useContext(UserContext);
  const { setGuestId } = useContext(UserContext)

  async function createGuestId() {

    const id = crypto.randomUUID();

    const guest = ApiChess.getAPI();
    const createGuestInfo = {
      guestId: id
    }

    localStorage.setItem("guestId", id)

    setGuestId(id);

    const data = await guest.createGuest(createGuestInfo)

  }

  return (

    <Modal open={open}
      className="h-58 w-120">

      <div className="flex flex-col h-full justify-center gap-6 items-center">

        <div className="flex flex-col items-center gap-4  text-[#17384A]">
          <h1 className="text-4xl font-bold font-playfair">
            Welcome to Checkmate!
          </h1>
          <h1 className="text-xs font-inter">
            Continue as a guest to start playing.
          </h1>
        </div>

        <Button
          text="Continue"
          variant="primary"
          textSize="normal"
          fontWeight="medium"
          className="w-22 py-1"
          onClick={() => {
            createGuestId();
          }}
        />
      </div>

    </Modal>

  )
}
export default WelcomeModal;