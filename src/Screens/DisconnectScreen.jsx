import { Navigate, useNavigate } from "react-router-dom"
function DisconnectScreen({ open, setDisconnectScreen, setWaitingScreen, setReconnectingScreen }) {
  if (open) {
    const navigate = useNavigate()
    return (
      <div className="fixed inset-0  flex justify-center items-center">

        <div className="bg-[#FFF7EA] border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-60 w-120
        shadow-[rgba(23,56,74,0.15)]">
          <div className="text-3xl font-bold mb-7 flex flex-col items-center font-cormorant text-[#4A2F1D]">
            <h1>
              Opponent left the game
            </h1>
            <h1>
              Leave the game or wait for opponent to join again
            </h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button className="border-2 border-black hover:cursor-pointer"
              onClick={() => {
                setDisconnectScreen(false)
                setReconnectingScreen(true)
              }}
            >
              Wait
            </button>
            <button className="border-2 border-black hover:cursor-pointer"
              onClick={() => {
                setDisconnectScreen(false)
                navigate(`/`)
              }}
            >
              Leave
            </button>
          </div>

        </div>

      </div>
    )
  }

}
export default DisconnectScreen