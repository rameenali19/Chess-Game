import Icon from "./Icon";
function GameInfoDisplay({ statusColor, status, id }) {

  return (
    <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7] text-sm h-60
          w-45 flex flex-col rounded-lg font-inter text-[#17384A] justify-around px-2 ">

      <div className="font-semibold text-lg justify-center flex items-center ">
        <Icon
          name="bulb"
          className="w-5 h-5"
        />
        Game Info
      </div>

      <div>
        <div className="text-sm flex items-center justify-start ">
          <Icon
            name="gameId"
            className="w-6 h-6"
          />
          Game ID</div>
        <p className="text-lg font-semibold">{id}</p>
      </div>

      <div>
        <div className="text-sm mb-1 flex items-center justify-start">
          <Icon
            name="gameStatus"
            className="w-5 h-6"
          />
          Game Status
        </div>
        <div className={` h-7 w-35 rounded-lg font-semibold 
          py-1 px-2 hover:scale-105 duration-150
          ${statusColor}`}>{status}
        </div>
      </div>

      <div>
        <div className="text-sm flex items-center justify-start ">
          <Icon
            name="calendar"
            className="w-6"
          />
          Date</div>
        <p className="font-semibold">{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}
export default GameInfoDisplay;