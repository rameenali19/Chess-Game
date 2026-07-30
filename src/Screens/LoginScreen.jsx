import ApiChess from "../api/apiChess";

function LoginScreen({ guestId, setGuestId }) {

  async function createGuestId() {
    const guestId = crypto.randomUUID();
    localStorage.setItem("guestId", guestId)
    setGuestId(guestId);
    const guest = ApiChess.getAPI();
    const createGuestInfo = {
      guestId: guestId
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