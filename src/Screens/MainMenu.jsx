import ApiChess from "../api/apiChess"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { initialBoard } from "../Chess/Board";
import { useState } from "react";
import { initialColor } from "../Chess/Board";

function MainMenu({ turn, setTurn, userColor, setUserColor, opponentColor, setOpponentColor }) {

  const navigate = useNavigate();
  const [hover, setHover] = useState();

  async function createGame() {
    const game = ApiChess.getAPI();
    const createGameInfo = {
      currentTurn: turn,
      gameStatus: initialBoard,
      gameState: "unfinished",
      enPassant: null,
      promotion: null
    }
    const id = await game.createGame(createGameInfo)
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

          <div
            onMouseEnter={() => { setHover("White") }}
            onMouseLeave={() => { setHover(null) }}
            onClick={
              () => {
                setTurn("White")
                setUserColor("White")
                setOpponentColor("Black")
                initialColor("White", "Black")
              }
            }
            className={`h-30 w-30  border-3 flex flex-col hover:scale-105 
            duration-150 cursor-pointer hover:border-[#E67E00] hover:shadow-[0_0_40px_rgba(210,170,90,0.25)]
             items-center rounded-lg  hover:text-[#E67E00] 
            ${turn === "White" ? " text-[#E67E00] scale-105 duration-150 border-[#E67E00]"
                : "border-[#e4d6bb]"
              }
            `}
          >
            <img
              src={
                turn === "White" || hover === "White" ? "/orange-white-king.png"
                  : "/white-king.png"
              }
              alt="black piece"
              className="w-20 h-20 object-contain"
            ></img>
            <h1>
              White
            </h1>
          </div>

          <div
            onMouseEnter={() => { setHover("Black") }}
            onMouseLeave={() => { setHover(null) }}
            onClick={
              () => {
                setTurn("Black")
                setUserColor("Black")
                setOpponentColor("White")
                initialColor("Black", "White")
              }
            }
            className={`h-30 w-30  border-3 flex flex-col hover:scale-105 
            duration-150 cursor-pointer hover:border-[#E67E00] hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] 
            items-center rounded-lg s hover:text-[#E67E00] 
            ${turn === "Black" ? "text-[#E67E00] scale-105 duration-150 border-[#E67E00]"
                : "border-[#e4d6bb] "
              }
            `}
          >
            <img
              src={
                turn === "Black" || hover === "Black" ? "/orange-black-king.png"
                  : "/black-king.png"
              }
              alt="black piece"
              className="w-15 h-20 object-contain"
            ></img>
            <h1>
              Black
            </h1>
          </div>

        </div>
      </div>

      <button className="text-xl bg-[#E67E00] text-white px-15 py-2 rounded-lg hover:bg-[#17384A] hover:text-white hover:cursor-pointer hover:ring-white ring-2 hover:scale-102 duration-150
       active:bg-[#f40000] active:text-white"

        onClick={() => { createGame() }}

      >
        Start Game
      </button>
    </div>

  )
}
export default MainMenu