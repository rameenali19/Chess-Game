function UserDisplay({ color, text }) {

  return (
    <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7]
        h-10 w-45 flex rounded-lg font-inter gap-4 justify-start items-center px-3">
      <div className="flex items-center gap-1">
        <img className="w-5 h-5 object-contain"
          src="/blueplayer.png" alt="red player image"
        ></img>
        <h1 className="font-bold text-[#2d5e79] text-xs">
          {text}</h1>
      </div>
      <div className="  font-medium text-[#ff8e3d]">
        {color}
      </div>

    </div>
  )

}
export default UserDisplay;