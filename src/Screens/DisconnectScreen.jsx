import { Navigate, useNavigate } from "react-router-dom"
function DisconnectScreen({ open, setDisconnectScreen, setWaitingScreen, setReconnectingScreen }) {
  if (open) {
    const navigate = useNavigate()
    return (
      <div className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">

        <div className="bg-[#FFF7EA] border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-65 w-125
        shadow-[rgba(23,56,74,0.15)] flex flex-col items-center justify-center gap-7">

          <div className=" flex flex-col items-center gap-3 text-[#17384A]">
            <h1 className="text-3xl font-bold font-cormorant">
              Connection Lost
            </h1>
            <h1 className="font-inter">
              Your opponent is currently unavailable</h1>
            <h1 className="font-inter"> You can wait for them to return or leave the game.</h1>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button className=" text-[#ff8127] hover:cursor-pointer w-35 rounded-lg  hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] hover:scale-105 duration-150 border-2 border-[#ff8127] py-1 text-lg font-medium flex items-center justify-center gap-1"
              onClick={() => {
                setDisconnectScreen(false)
                setReconnectingScreen(true)
              }}
            >
              <img className=" object-contain w-5 h-5"
                src="/sand-clock.png" alt="sand clock image"
              >
              </img>
              <div>Wait</div>
            </button>
            <button className="bg-[#ff8127] text-white hover:cursor-pointer w-35 rounded-lg  hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] hover:scale-105 duration-150 py-1 border-2 border-[#ff8127] text-lg font-medium flex items-center justify-center gap-1"
              onClick={() => {
                setDisconnectScreen(false)
                navigate(`/`)
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
    )
  }

}
export default DisconnectScreen