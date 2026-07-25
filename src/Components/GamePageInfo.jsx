function Info({ turn }) {

  const src = turn === "White" ? "/white-piece-navbar.png" : "/blue-chess-piece.png";

  return (
    <div className="bg-[#F5E8D7] w-50 px-5 border-[#E8DCC7] border rounded-lg mt-10">

      <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7]
        px-3 h-21 w-40 mt-6 flex flex-col py-3 rounded-lg font-inter text-[#17384A]">
        <div>
          <h1 className="font-semibold">Current Turn</h1>
          <div className="h-8 w-full bg-[#ff8e3d] rounded-lg px-2 py-1 flex items-center ">
            <img src={src} alt="piece image " className="w-8 h-7 mr-1 object-contain" />
            {turn}
          </div>
        </div>
      </div>


      <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7]
        px-3 h-50 w-40 mt-5  flex flex-col py-3 rounded-lg font-inter text-[#17384A]">
      </div>

      <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7]
        px-3 h-18 w-40 mt-5 flex flex-col py-3 rounded-lg font-inter text-[#17384A]">
        <div>
          <h1 className="font-semibold">Date</h1>
          <h1>{new Date().toLocaleDateString()}</h1>
        </div>
      </div>


    </div>
  )
}
export default Info 