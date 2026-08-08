import MainMenu from "./MainMenu";
import socket from "../Socket/socket";
import { useEffect, useState } from "react";
import ModeSelectionButton from "../Components/ModeSelectionButton";
import ApiChess from "../api/apiChess";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function ModeSelection({ mode, setMode }) {
  const { guestId } = useContext(UserContext);
  const [totalGames, setTotalGames] = useState(null)

  useEffect(() => {
    if (!guestId) return;

    async function getAllGames() {
      const game = ApiChess.getAPI();
      const data = await game.getAllGames(1, 10, guestId);
      setTotalGames(data.total)
    }
    getAllGames();
  }, [])

  return (
    <div className="flex  justify-center w-full h-full ml-45 gap-12 p-5">

      <div className=" flex flex-col h-full w-115 justify-center ">

        <div className="flex items-center gap-3 w-full mb-5">

          <button className="bg-[#1F455E] font-inter text-white rounded-lg w-22 h-7 text-xs">
            How to play
          </button>
          <div className="text-gray-700 font-medium">Move the piece to checkmate your opponent</div>
        </div>


        <img className=" w-120 mb-1 p-3 border-2 border-[#C7A97A] rounded-lg"
          src="/chessboard.png" alt="chessboard image"
        ></img>


        <div className=" w-full bg-[#FFF7EA] border-2 border-[#E8DCC7]  py-4 rounded-lg flex items-center justify-center font-inter text-xs">
          control the center bla bla blas asjdneihri
        </div>
      </div>


      <div className="flex flex-col h-full items-center">

        <div className="flex gap-2 items-center justify-center">
          <div >
            <img className="object-contain w-6 h-7"
              src="/trophy.png" alt="trophy image" >
            </img>
          </div>
          <h1 className="font-cormorant text-3xl font-bold flex text-[#113447] ">
            Choose a Game Mode</h1>
        </div>

        <div className="flex flex-col gap-2 mt-3" >
          <ModeSelectionButton
            setMode={setMode}
          />


          <div className="bg-[#FFF7EA] border-2 border-[#E8DCC7] w-90 h-42 flex flex-col gap-2 font-inter  rounded-lg px-2 py-2">

            <div className="text-center font-bold text-[#443496]">Your Status</div>

            <div className="flex justify-between items-center px-3 text-[#35843C]">
              <div className="flex items-center gap-2">
                <img className="object-contain w-8 h-8 hover:scale-105 transition"
                  src="/status-controller.png" alt="controller image"
                ></img>
                <h1>Games Played</h1>
              </div>
              <div className="font-bold">{totalGames}</div>
            </div>

            <div className="flex justify-between items-center px-3 text-[#E67E00]">
              <div className="flex items-center gap-2">
                <img className="object-contain w-8 h-8 hover:scale-105 transition"
                  src="/status-win.png" alt="controller image"
                ></img>
                <h1>Wins</h1>
              </div>
              <div className="font-bold">2</div>
            </div>

            <div className="flex justify-between items-center px-3 text-[#D9413A]">
              <div className="flex items-center gap-2">
                <img className="object-contain w-8 h-8 hover:scale-105 transition"
                  src="/status-win-rate.png" alt="controller image"
                ></img>
                <h1>Win Status</h1>
              </div>
              <div className="font-bold">2</div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
export default ModeSelection; 