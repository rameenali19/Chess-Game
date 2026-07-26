function MainMenu() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 font-cormorant text-[#4A2F1D]">

      <div className=" font-extrabold text-4xl flex-col items-center flex">
        <img src="/golden-crown.png" alt="crown image" className="w-12 h-12 "></img>
        Play Game
      </div>
      <div className="text-xs font-inter">
        Start a new Chess match
      </div>
      <div className="w-100 h-50 border-2 border-[#e4d6bb] bg-[#FFF7EA] rounded-lg 
    flex flex-col items-center justify-center">
        <h1 className=" text-lg">Choose Your Color</h1>
        <div className="flex  justify-between font-bold text-sm gap-2">
          <div className="h-25 w-45 border-[#e4d6bb] border-2 flex flex-col hover:scale-105 duration-150 cursor-pointer hover:border-[#E67E00] hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] items-center rounded-lg hover:bg-[#fff4e6] hover:text-[#E67E00]">
            <img
              src="/white-king.png"
              alt="white piece"
              className="w-11 h-19"
            ></img>
            <h1> White</h1>
          </div>
          <div className="h-25 w-45 border-[#e4d6bb] border-2 flex flex-col items-center hover:scale-105 duration-150 rounded-lg cursor-pointer hover:border-[#E67E00] hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] hover:bg-[#fff4e6] hover:text-[#E67E00]">
            <img
              src="/black-king.png"
              alt="white piece"
              className="w-11 h-19"
            ></img>
            <h1>Black</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MainMenu