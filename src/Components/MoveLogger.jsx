function MoveLogger({ moveHistory, winner }) {

  return (

    <div className=" bg-[#FFF7EA] shadow-lg border border-[#E8DCC7] h-45
      w-50 rounded-lg text-[#17384A] font-inter">

      <div className="flex items-center justify-center text-lg font-semibold m-3">
        <img className="w-8 h-5 object-contain"
          src="/move-log.png" alt="move log image" />
        <h1>Move Log</h1>
      </div>

      <div className="overflow-y-auto text-base h-28">
        {moveHistory.map((move, index) => {
          return (
            <div key={index + 1}
              className="flex  justify-center gap-10 w-full">
              <h1>{move.source}</h1>
              <h1>{move.destination}</h1>
            </div>
          )
        })}

        {winner && (
          <div className="font-medium text-center">
            {winner === "Draw" ? "Draw!" : `${winner} Wins!`}
          </div>
        )}
      </div>
    </div >

  )
}
export default MoveLogger;