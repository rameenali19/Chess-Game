function Info({ turn, checkMate, staleMate, id }) {

  const src = turn === "White" ? "/white-queen.png" : "/black-queen.png";

  return (
    <div className=" w-60 flex flex-col items-center justify-center gap-3 mt-10">

      <div className=" bg-[#FFF7EA] shadow-lg border border-[#E8DCC7]
        px-2 h-21 w-55 flex flex-col py-3 rounded-lg font-inter text-[#17384A]">
        <div>
          <h1 className="font-semibold ">Current Turn</h1>
          <div className="h-8 w-full bg-[#ff8e3d] rounded-lg px-2 py-1 flex items-center mt-1
           hover:scale-105 duration-150 ">
            <img src={src} alt="piece image " className="w-8 h-7 mr-1 object-contain" />
            {turn}
          </div>
        </div>
      </div>


      <div className=" bg-[#FFF7EA]  border border-[#E8DCC7] shadow-lg
        px-3 h-30 w-55 flex flex-col py-3 rounded-lg font-inter text-[#17384A]">
      </div>


      <div className=" bg-[#FFF7EA] shadow-lg border border-[#E8DCC7] text-sm h-60
        px-3  w-55 flex flex-col py-2 rounded-lg font-inter text-[#17384A] justify-between  ">

        <div className="font-semibold text-xl justify-center flex items-center ">
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
          <div className={` h-7 w-40 rounded-lg font-semibold py-1 px-2 hover:scale-105 duration-150
          ${checkMate || staleMate ? "bg-[#D9E8C8] text-[#3F6B2A]"
              : "bg-[#F7D98D] text-[#8A5A00]"
            }`}>{checkMate || staleMate ? "Completed" : "In Progress"}</div>
        </div>

        <div>
          <div className="text-sm flex items-center justify-start ">
            <img src="/calendar.png" alt="id image" className="w-6 h-6"></img>
            Date</div>
          <p className="font-semibold">{new Date().toLocaleDateString()}</p>
        </div>

      </div>

    </div>

  )
}
export default Info
