import ApiChess from "../api/apiChess";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { motion } from "framer-motion";

function LoginScreen() {

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
    <div className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-[url('/orangebg.png')] bg-center bg-cover border border-[#E8DCC7] shadow-2xl
         rounded-xl h-65 w-120 shadow-[rgba(23,56,74,0.15)] ">

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

            <button className="bg-[#ff8127] hover:cursor-pointer w-30 py-2 rounded-lg
            hover:opacity-85 hover:scale-105 transition">
              Login
            </button>

            <button className="bg-[#ff8127]  hover:cursor-pointer w-30 py-2 rounded-lg
            hover:opacity-85 hover:scale-105 transition"
              onClick={() => {
                createGuestId();
              }}
            >
              No
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
export default LoginScreen