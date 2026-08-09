import { Navigate, useNavigate } from "react-router-dom";
import ApiChess from "../api/apiChess";
import { useState } from "react";

function HistoryButton({ game, deleteGame }) {
  const navigate = useNavigate();
  const playerImage = game.mode === "single player" ? "/singleplayer.png" : "/multiplayer.png"
  const text = game.mode === "single player" ? "Single Player Game" : "Multiplayer Game"
  const [hover, setHover] = useState(true)
  return (
    <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7]
        px-6 hover:shadow-md hover:-translate-y-0.5 transition h-20 w-full
          flex items-center text-xl rounded-lg justify-between" >

      <div className="flex items-center gap-2 ">

        <img src={playerImage} alt="mode image"
          className={` w-12 mr-1 object-contain ${game.mode === "singleplayer" ?
            "h-5" : "h-12"
            }`}
        ></img>
        <div className="hover:cursor-pointer  font-inter text-xl
       text-[#17384A] font-semibold">
          {text}
        </div>
      </div>

      <div className="flex gap-5 font-inter text-sm font-semibold">

        <button className={`w-36 px-4  rounded-2xl  hover:cursor-pointer hover:-translate-y-0.5 transition
      ${game.game_status === "unfinished" || game.game_status === "waiting" ? "bg-[#F9E4A4] text-[#8A5A00]"
            : "bg-[#D9E8C8] text-[#3F6B2A]"
          }`}
        >
          {
            game.game_status === "unfinished" || game.game_status === "waiting" ? "In Progress" : "Completed"

          }
        </button>
        <button className={`w-36 px-4 py-3 rounded-xl  hover:cursor-pointer hover:-translate-y-0.5 transition
      ${game.game_status === "unfinished" || game.game_status === "waiting" ? "bg-[#2b6381] text-white"
            : "ring-[#2b6381] ring-2 text-[#2b6381] "
          }`
        } onClick={() => {
          if (game.mode === "multiplayer" &&
            game.game_status !== "finished"
          ) {
            navigate("/modeselection", {
              state: {
                mode: "join",
                gameId: game.id
              }
            })
            return
          }
          navigate(`/game/${game.id}`)
        }}>
          {
            game.game_status === "finished" ? "View" : "Continue"
          }
        </button>
        <button className="px-4 rounded-full  hover:cursor-pointer bg-[#eb1603] text-white hover:-translate-y-0.5 transition flex items-center"
          onClick={() => { deleteGame(game.id) }}
          onMouseEnter={() => { setHover(false) }}
          onMouseLeave={() => { setHover(true) }}
        >
          <img className="w-5 mr-1 object-contain h-5"
            src={hover ? "/dustbin-close.png" : "/dustbin-open.png"}
            alt="dustbin image"></img>
          <div>Delete</div>

        </button>

      </div>
    </div>
  )
}
export default HistoryButton