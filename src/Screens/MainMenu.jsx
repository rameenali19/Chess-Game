import ApiChess from "../api/apiChess"
import { Navigate, useNavigate } from "react-router-dom";
import { createGameInfo } from "../Chess/Board";

function MainMenu({ turn, setTurn }) {

  const navigate = useNavigate();

  async function createGame() {
    const game = ApiChess.getAPI();
    const gameInfo = {
      ...createGameInfo,
      currentTurn: turn,
    }
    console.log(gameInfo);
    const id = await game.createGame(gameInfo)
    navigate(`/game/${id}`)
  }

  return (

    <div className=" flex flex-col items-center justify-center gap-4 font-cormorant text-[#4A2F1D] ml-30">

      <div className=" font-extrabold text-5xl flex-col items-center flex">
        <img
          src="/golden-crown.png"
          alt="crown image"
          className="w-12 h-12 "
        />
        Play Game
      </div>

      <div className="text-xs font-inter">
        Choose your color to start a new game
      </div>

      <div className="w-80 h-65 border-2 border-[#e4d6bb] bg-[#FFF7EA] rounded-lg 
          flex flex-col items-center justify-center">

        <h1 className=" text-xl mb-4 font-bold">
          Choose Your Color
        </h1>

        <div className="flex  justify-between font-bold text-sm gap-4">

          <div className="h-30 w-30 border-[#e4d6bb] border-2 flex flex-col hover:scale-105 duration-150 cursor-pointer hover:border-[#E67E00] hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] items-center rounded-lg hover:bg-[#fff4e6] hover:text-[#E67E00] "

            onClick={
              () => {
                setTurn("White")
              }
            }
          >
            <img
              src="/white-king.png"
              alt="white piece"
              className="w-15 h-20 object-contain"
            ></img>
            <h1>
              White
            </h1>
          </div>

          <div className="h-30 w-30 border-[#e4d6bb] border-2 flex flex-col items-center hover:scale-105 duration-150 rounded-lg cursor-pointer hover:border-[#E67E00] hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] hover:bg-[#fff4e6] hover:text-[#E67E00] "

            onClick={
              () => {
                setTurn("Black")
              }
            }
          >
            <img
              src="/black-king.png"
              alt="white piece"
              className="w-15 h-20 object-contain"
            ></img>
            <h1>
              Black
            </h1>
          </div>

        </div>
      </div>

      <button className="text-xl bg-[#E67E00] text-white px-15 py-2 rounded-lg hover:bg-[#fff4e6] hover:text-[#E67E00] hover:cursor-pointer hover:ring-[#E67E00] hover:ring-2 hover:scale-102 duration-150
       active:bg-[#f40000] active:text-white"

        onClick={() => { createGame() }}

      >
        Start Game
      </button>
    </div>

  )
}
export default MainMenu