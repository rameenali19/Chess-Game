import ApiChess from "../api/apiChess";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";


function LoginScreen() {

  const { guestId } = useContext(UserContext);
  const { setGuestId } = useContext(UserContext)

  async function createGuestId() {

    const id = crypto.randomUUID();

    localStorage.setItem("guestId", id)

    setGuestId(id);

    const guest = ApiChess.getAPI();
    const createGuestInfo = {
      guestId: id
    }

    const data = await guest.createGuest(createGuestInfo)

  }
  return (
    <div>
      <button className="border-2 border-black hover:cursor-pointer px-3 py-2">
        login
      </button>

      <button className="border-2 border-black hover:cursor-pointer px-3 py-2"
        onClick={() => {
          createGuestId();
        }}
      >
        No
      </button>
    </div>
  )
}
export default LoginScreen