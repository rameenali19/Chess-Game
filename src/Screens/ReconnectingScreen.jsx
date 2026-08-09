import { useNavigate, Navigate } from "react-router-dom"

function ReconnectingScreen({ open, setReconnectingScreen, setDisconnectScreen }) {
  if (open) {
    const navigate = useNavigate()
    return (
      <div className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">

        <div className="bg-[url('/orangebg.png')] bg-center bg-cover border border-[#E8DCC7] shadow-2xl rounded-xl h-65 w-140 shadow-[rgba(23,56,74,0.15)] px-3">

          <div className=" flex flex-col items-center gap-3 justify-center h-full ">

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
              <button className="bg-[#ff8127] text-white hover:cursor-pointer w-25 rounded-lg  hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] hover:scale-105 duration-150  border-2 border-[#ff8127] text-lg font-medium flex items-center justify-center gap-1"
                onClick={() => {
                  setReconnectingScreen(false)
                  setDisconnectScreen(false)
                  navigate(`/modeselection`)
                }}
              >
                <img className=" object-contain w-5 h-5"
                  src="/door.png" alt="sand clock image"
                >
                </img>
                <div>Leave</div>
              </button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default ReconnectingScreen