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
    <div className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">

      <div className="bg-[#FFF7EA] border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-65 w-140
        shadow-[rgba(23,56,74,0.15)] flex items-center justify-center">

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
    </div>
  )
}
export default LoginScreen