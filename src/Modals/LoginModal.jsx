import ApiChess from "../api/apiChess";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Button from "../components/Button";
import Modal from "../components/Modal";

function LoginModal({ open }) {

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
      className="h-65 w-120">

      <div className="flex flex-col h-full justify-center gap-6">

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold font-cormorant text-[#17384A]">
            login
          </h1>
          <h1 className="text-xs font-inter text-[#17384A]">
            Do you want to Login
          </h1>
        </div>

        <div className="flex justify-center gap-10 w-full text-white font-inter font-medium">

          <Button
            text="Login"
            variant="primary"
            textSize="normal"
            fontWeight="medium"
            className="w-22 py-1"
          />

          <Button
            text="No"
            variant="primary"
            textSize="normal"
            fontWeight="medium"
            className="w-22 py-1"
            onClick={() => {
              createGuestId();
            }}
          />
        </div>

      </div>

    </Modal>

  )
}
export default LoginModal