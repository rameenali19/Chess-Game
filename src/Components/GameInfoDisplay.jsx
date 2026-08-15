function GameInfoDisplay({ statusColor, status, id }) {

  return (
    <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7] text-sm h-60
          w-55 flex flex-col  rounded-lg font-inter text-[#17384A] justify-around px-2 ">

      <div className="font-semibold text-lg justify-center flex items-center ">
        <img src="/bulb.png" alt="blub image" className="w-8 h-8 object-contain"></img>
        Game Info
      </div>

      <div>
        <div className="text-sm flex items-center justify-start ">
          <img src="/game-id.png" alt="id image" className="w-6 h-6"></img>
          Game ID</div>
        <p className="text-lg font-semibold">{id}</p>
      </div>

      <div>
        <div className="text-sm mb-1 flex items-center justify-start">
          <img src="/game-status.png" alt="id image" className="w-5 h-6"></img>
          Game Status
        </div>
        <div className={` h-7 w-40 rounded-lg font-semibold 
          py-1 px-2 hover:scale-105 duration-150
          ${statusColor}`}>{status}
        </div>
      </div>

      <div>
        <div className="text-sm flex items-center justify-start ">
          <img src="/calendar.png" alt="id image" className="w-6 h-6"></img>
          Date</div>
        <p className="font-semibold">{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}
export default GameInfoDisplay;