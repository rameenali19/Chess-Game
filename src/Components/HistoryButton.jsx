import { Navigate, useNavigate } from "react-router-dom";
import ApiChess from "../api/apiChess";

function HistoryButton({ game, deleteGame }) {
  const navigate = useNavigate();
  const playerImage = game.mode === "single player" ? "/singleplayer.png" : "/multiplayer.png"
  const text = game.mode === "single player" ? "Single Player Game" : "Multiplayer Game"

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

        <button className={`w-36 px-4  rounded-2xl  hover:cursor-pointer
      ${game.game_status === "unfinished" || "waiting" ? "bg-[#F9E4A4] text-[#8A5A00]"
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
        <button className="px-6 py-3 rounded-full  hover:cursor-pointer bg-[#eb1603] text-white"
          onClick={() => { deleteGame(game.id) }}
        >
          Delete
        </button>

      </div>
    </div>
  )
}
export default HistoryButton