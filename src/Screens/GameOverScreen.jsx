import { useState } from "react"
import { useNavigate } from "react-router-dom"

function GameOverScreen({ winner, userColor, opponentColor }) {
  if (winner) {

    const result = winner === userColor ? "Won" : "Lost"
    const navigate = useNavigate()
    return (
      <div className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">

        <div className="bg-[url('/orangebg.png')] bg-center bg-cover border border-[#E8DCC7] shadow-2xl rounded-xl p-3 h-65 w-125 shadow-[rgba(23,56,74,0.15)] flex flex-col items-center justify-center gap-7">

          <div className=" flex flex-col items-center gap-3 text-[#17384A]">
            <h1 className="text-3xl font-bold font-cormorant">
              {result === "Won" ? "You Won!" : "You Lost"}
            </h1>
            <h1 className="font-inter text-xs">
              {result === "Won" ? " Congratulations! You have won the game." : "BOOOOOO"}</h1>
            <h1 className="font-inter text-xs">
              {result === "Won" ? "Play again or shift to Home" : "Go home loser or try again"}</h1>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button className=" text-[#ff8127] hover:cursor-pointer w-40 rounded-lg  hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] hover:scale-105 duration-150 border-2 border-[#ff8127] py-1 text-lg font-medium flex items-center justify-center gap-1"
              onClick={() => {
                navigate(`/modeselection`)
              }}
            >
              <img className=" object-contain w-5 h-5"
                src="/sand-clock.png" alt="sand clock image"
              >
              </img>
              <div>Play Again</div>
            </button>
            <button className="bg-[#ff8127] text-white hover:cursor-pointer w-40 rounded-lg  hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] hover:scale-105 duration-150 py-1 border-2 border-[#ff8127] text-lg font-medium flex items-center justify-center gap-1"
              onClick={() => {
                navigate(`/`)
              }}
            >
              <img className=" object-contain w-8 h-8"
                src="/white-home.png" alt="white home image"
              >
              </img>
              <div>Home </div>
            </button>
          </div>

        </div>

      </div>
    )
  }
}

export default GameOverScreen;