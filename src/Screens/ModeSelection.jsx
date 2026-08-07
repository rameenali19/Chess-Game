import MainMenu from "./MainMenu";
import socket from "../Socket/socket";
import { useEffect } from "react";
function ModeSelection({ mode, setMode }) {

  return (
    <div className="flex  justify-center w-full h-full ml-45 gap-7 p-8">

      <div className=" flex flex-col h-full w-115 justify-center ">

        <div className="flex items-center gap-3 w-full mb-7">

          <button className="bg-[#1F455E] font-inter text-white rounded-lg w-22 h-7 text-xs">
            How to play
          </button>
          <div className="text-gray-700 font-medium">Move the piece to checkmate your opponent</div>
        </div>


        <img className=" w-120 mb-3"
          src="/chessboard.png" alt="chessboard image"
        ></img>


        <div className=" w-full bg-[#FFF7EA] py-4 border border-[#E8DCC7] rounded-lg flex items-center justify-center font-inter text-xs">
          control the center bla bla blas asjdneihri
        </div>
      </div>

      <div className="flex flex-col justify-center h-full items-center">

        <div className="flex gap-2 items-center justify-center">
          <div >
            <img className="object-contain w-10 h-10"
              src="/trophy.png" alt="trophy image" >
            </img>
          </div>
          <h1 className="font-cormorant text-3xl font-bold flex text-[#113447] ">
            Choose a Game Mode</h1>
        </div>

        <div className="flex flex-col gap-3 mt-5" >


          <div className="border-2 border-[#8CCB99] flex gap-3 h-27 w-100 rounded-lg items-center justify-around font-inter ">
            <img className="w-18 h-18"
              src="/greenbutton.png" alt="single player icon"
            ></img>
            <div >
              <h1 className="font-bold text-[#35843C]">Single Player</h1>
              <h1 className="text-gray-700 text-xs">Play on the same <br />
                device with your friend</h1>
            </div>
            <button className="bg-[#35843C] hover:scale-105 transition hover:cursor-pointer w-27 h-9 rounded-lg font-medium text-white text-xs"
              onClick={() => {
                setMode("single player")
              }}
            >
              Play Now
            </button>
          </div>


          <div className="border-2 border-[#E67E00] flex gap-3 h-27 w-100 rounded-lg items-center justify-around font-inter ">
            <img className="w-18 h-18"
              src="/orangebutton.png" alt="single player icon"
            ></img>
            <div >
              <h1 className="font-bold text-[#E67E00]">Multiplayer</h1>
              <h1 className="text-gray-700 text-xs">Play with a friend online <br />
                players around the world</h1>
            </div>
            <button className="bg-[#E67E00] hover:scale-105 transition hover:cursor-pointer w-27 h-9 rounded-lg font-medium text-white text-xs"
              onClick={() => {
                setMode("multiplayer")
              }}
            >
              Play Now
            </button>
          </div>


          <div className="border-2 border-[#D9413A] flex gap-3 h-27 w-100 rounded-lg items-center justify-around font-inter ">
            <img className="w-18 h-18"
              src="/redbutton.png" alt="single player icon"
            ></img>
            <div >
              <h1 className="font-bold text-[#D9413A]">Join multiplayer</h1>
              <h1 className="text-gray-700 text-xs">Join a friend or player <br />
                using a Game ID</h1>
            </div>
            <button className="bg-[#D9413A] hover:scale-105 transition hover:cursor-pointer w-27 h-9 rounded-lg font-medium text-white text-xs"
              onClick={() => {
                setMode("join")
              }}
            >
              Join Game
            </button>
          </div>


          <div className="bg-[#FFF7EA] border-2 border-[#E8DCC7] w-100 h-35 flex flex-col gap-2 font-inter text-[#296c2e] rounded-lg">

            <div className="text-center font-bold">Your Status</div>

            <div className="flex justify-between items-center px-3">
              <div >Games Player</div>
              <div className="font-bold">2</div>
            </div>

            <div className="flex justify-between items-center px-3">
              <div>Wins</div>
              <div className="font-bold">2</div>
            </div>

            <div className="flex justify-between items-center px-3">
              <div >Win Rate</div>
              <div className="font-bold">2</div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
export default ModeSelection; 