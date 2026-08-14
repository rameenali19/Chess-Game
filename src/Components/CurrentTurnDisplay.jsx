function CurrentTurnDisplay({ src, turn }) {

  return (
    <div className=" bg-[#FFF7EA] shadow-lg border border-[#E8DCC7]
        px-2 h-21 w-55 flex flex-col justify-center rounded-lg font-inter text-[#17384A] gap-2">

      <h1 className="font-semibold ">Current Turn</h1>
      <div className="h-8 w-full bg-[#ff8e3d] rounded-lg px-2  flex items-center
           hover:scale-105 duration-150 ">
        <img src={src} alt="piece image " className="w-8 h-7 mr-1 object-contain" />
        {turn}
      </div>

    </div>
  )
}
export default CurrentTurnDisplay;