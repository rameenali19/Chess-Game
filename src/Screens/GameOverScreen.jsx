import { useNavigate } from "react-router-dom"

function GameOverScreen({ open, winner, userColor, setGameOver, mode }) {
  const navigate = useNavigate()
  if (open) {

    const result = winner === userColor ? "Won" : winner === "Draw" ? "Draw" : "Lost"

    return (
      <div className="fixed inset-0  flex justify-center items-center bg-[#3E2C20]/25 z-50">

        <div className="bg-[url('/orangebg.png')] bg-center bg-cover border border-[#E8DCC7] shadow-2xl rounded-xl px-2 h-65 w-125 shadow-[rgba(23,56,74,0.15)] flex flex-col items-center justify-center gap-7">

          <div className=" flex flex-col items-center gap-3 text-[#17384A]">
            <h1 className="text-3xl font-bold font-cormorant">
              {result === "Won" ? "You Won!" : result === "Draw" ? "Game Draw" : "You Lost"}
            </h1>
            <h1 className="font-inter text-xs">
              {result === "Won" ? " Congratulations! You have won the game." : result === "Draw" ? "Game Draw" : "BOOOOOO"}</h1>
            <h1 className="font-inter text-xs">
              {result === "Won" ? "Play again or shift to Home" : result === "Draw" ? "Game Draw" : "Go home loser or try again"}</h1>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button className=" text-[#ff8127] hover:cursor-pointer w-40 rounded-lg  hover:shadow-[0_0_40px_rgba(210,170,90,0.25)] hover:scale-105 duration-150 border-2 border-[#ff8127] py-1 text-lg font-medium flex items-center justify-center "
              onClick={() => {
                navigate("/modeselection", {
                  state: {
                    mode: mode
                  }
                })
              }}
            >
              <img className=" object-contain w-8 h-8"
                src="/reload.png" alt="sand clock image"
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

          <div className="flex justify-end w-full">
            <button className="w-15 h-6 bg-[#1d4960] rounded-lg font-inter hover:opacity-85
                     text-xs text-[white] hover:cursor-pointer font-medium hover:scale-105 transition"
              onClick={() => {
                setGameOver(false)
              }}
            >
              Close
            </button>
          </div>

        </div>

      </div>
    )
  }
}

export default GameOverScreen;