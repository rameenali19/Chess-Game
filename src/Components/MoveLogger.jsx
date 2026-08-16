function MoveLogger({ moveHistory, winner }) {

  return (

    <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7] h-full
      w-45 rounded-lg text-[#17384A] font-inter">

      <div className="flex items-center justify-center text-lg font-semibold m-3">
        <img className="w-8 h-5 object-contain"
          src="/move-log.png" alt="move log image" />
        <h1>Move Log</h1>
      </div>

      <div className="overflow-y-auto text-base h-100 px-6">
        {moveHistory.map((move, index) => {
          return (
            <div key={index} className="flex gap-5 items-center mb-2">
              <div
                className={`w-3 h-2 rounded-full ${move.pieceColor === "White"
                  ? "bg-white border border-gray-400"
                  : "bg-[#17384A]"
                  }`}
              />
              <div className="flex justify-between w-full">
                <h1>{move.source}</h1>
                <h1>{move.destination}</h1>
              </div>
            </div>
          )
        })}

        {winner && (
          <div className="font-medium pl-6">
            {winner === "Draw" ? "Draw!" : `${winner} Wins!`}
          </div>
        )}
      </div>
    </div >

  )
}
export default MoveLogger;