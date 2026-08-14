import UserDisplay from "./UserDisplay";

function Info({ turn, checkMate, staleMate, id, userColor, opponentColor }) {

  const src = turn === "White" ? "/white-queen.png" : "/black-queen.png";
  const opponent = opponentColor === "White" ? "white" : "black"
  const user = userColor === "White" ? "white" : "black"

  return (
    <div className=" w-60 flex flex-col items-center justify-center gap-3 mt-15">

      <UserDisplay
        color={opponentColor}
        text="Opponent"
      />

      <div className=" bg-[#FFF7EA] shadow-lg border border-[#E8DCC7]
        px-2 h-21 w-55 flex flex-col justify-center rounded-lg font-inter text-[#17384A] gap-2">

        <h1 className="font-semibold ">Current Turn</h1>
        <div className="h-8 w-full bg-[#ff8e3d] rounded-lg px-2  flex items-center
           hover:scale-105 duration-150 ">
          <img src={src} alt="piece image " className="w-8 h-7 mr-1 object-contain" />
          {turn}
        </div>

      </div>


      <div className=" bg-[#FFF7EA] shadow-lg border border-[#E8DCC7] text-sm h-60
          w-55 flex flex-col  rounded-lg font-inter text-[#17384A] justify-around px-2 ">

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

      <UserDisplay
        color={userColor}
        text="You"
      />

    </div>

  )
}
export default Info
