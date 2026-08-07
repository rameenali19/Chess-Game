function ReconnectingScreen({ open, setReconnectingScreen }) {
  if (open) {

    return (
      <div className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">

        <div className="bg-[#FFF7EA] border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-70 w-150
        shadow-[rgba(23,56,74,0.15)] flex items-center justify-center">

          <div className=" flex flex-col items-center gap-3 ">

            <div className="text-3xl font-bold font-cormorant text-[#4A2F1D]">
              Waiting for Opponent
            </div>
            <div className="text-[#4A2F1D] font-inter ">
              The game will resume automatically when your opponent reconnects
            </div>

            <div
              className="w-13 h-13 rounded-full
             border-4 border-[#ffc79f]
             border-t-[#ff8127]
             animate-spin"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default ReconnectingScreen