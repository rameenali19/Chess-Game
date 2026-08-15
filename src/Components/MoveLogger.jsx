function MoveLogger({ moveHistory }) {

  return (

    <div className=" bg-[#FFF7EA] shadow-lg border border-[#E8DCC7] h-50
      w-70 rounded-lg text-[#17384A] font-inter">

      <div className="flex items-center justify-center text-lg font-semibold m-3">
        <img className="w-8 h-5 object-contain"
          src="/move-log.png" alt="move log image" />
        <h1>Move Log</h1>
      </div>

      <div className="overflow-y-auto text-base h-35 px-9">
        {
          moveHistory.map((move, index) => {
            return (
              <div key={index}
                className="flex gap-6">
                <h1 className="text-gray-400">{index}.</h1>
                <div className="flex justify-between w-full">
                  <h1>{move.source}</h1>
                  <h1>{move.destination}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >

  )
}
export default MoveLogger;