import { Navigate, useNavigate } from "react-router-dom";
import ApiChess from "../api/apiChess";

function HistoryButton({ game, deleteGame }) {
  const navigate = useNavigate();

  return (
    <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7]
        px-6 hover:shadow-md hover:-translate-y-0.5 transition h-20 w-full
          flex items-center text-xl rounded-lg justify-between" >

      <div>
        <span className="hover:cursor-pointer mx-7 font-inter text-xl
       text-[#17384A] font-semibold">Game # {game.id} {game.mode}</span>
      </div>

      <div className="flex gap-5 font-inter text-sm font-semibold">

        <button className={`w-36 px-4 py-3 rounded-full  hover:cursor-pointer
      ${game.game_status === "unfinished" || "waiting" ? "bg-[#F7D98D] text-[#8A5A00]"
            : "bg-[#D9E8C8] text-[#3F6B2A]"
          }`}
        >
          {
            game.game_status === "unfinished" || "waiting" ? "In Progress" : "Completed"

          }
        </button>
        <button className={`w-36 px-4 py-3 rounded-xl  hover:cursor-pointer
      ${game.game_status === "unfinished" || "waiting" ? "bg-[#2b6381] text-white"
            : "ring-[#2b6381] ring-2 text-[#2b6381] "
          }`
        } onClick={() => {
          if (game.mode === "multiplayer" &&
            game.game_status !== "finished"
          ) {
            navigate("/game", {
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
        <button className="px-6 py-3 rounded-full  hover:cursor-pointer bg-[#f44333] text-white"
          onClick={() => { deleteGame(game.id) }}
        >
          Delete
        </button>

      </div>
    </div>
  )
}
export default HistoryButton