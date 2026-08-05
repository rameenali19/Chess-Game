function ReconnectingScreen({ open, setReconnectingScreen }) {
  if (open) {

    return (
      <div className="fixed inset-0  flex justify-center items-center">

        <div className="bg-[#FFF7EA] border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-60 w-120
        shadow-[rgba(23,56,74,0.15)]">
          <div className="text-3xl font-bold mb-7 flex flex-col items-center font-cormorant text-[#4A2F1D]">
            <h1>
              Waiting for the opponent to reconnect
            </h1>

          </div>
        </div>
      </div>
    )
  }
}
export default ReconnectingScreen