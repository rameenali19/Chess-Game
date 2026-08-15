function MoveLogger({ moveHistory }) {

  return (

    <div className=" bg-[#FFF7EA] shadow-lg border border-[#E8DCC7] text-sm h-50
      w-70 flex flex-col  rounded-lg font-inter text-[#17384A] justify-around px-2 ">
      {
        moveHistory.map((move, index) => {
          return (
            <div key={index}>
              {move.source} to {move.destination}
            </div>
          )
        })
      }
    </div >

  )
}
export default MoveLogger;