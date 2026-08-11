import { Navigate, useNavigate } from "react-router-dom";
import ApiChess from "../api/apiChess";
import { useState, useEffect } from "react";

function HistoryButton({ game, setDeleteModal, setSelectedGameId, guestId }) {
  const [player, setPlayer] = useState(null)
  useEffect(() => {
    async function getPlayer() {
      const player = ApiChess.getAPI();
      const data = await player.getPlayer(game.id, guestId);
      setPlayer(data)
    }
    getPlayer()
  }, [])

  const navigate = useNavigate();
  const playerImage = game.mode === "single player" ? "/singleplayer.png" : "/multiplayer.png"
  const text = game.mode === "single player" ? "Single Player Game" : "Multiplayer Game"
  const textColor = game.mode === "single player" ? "text-[#eb1603]" : "text-[#ff8127]"

  const [hover, setHover] = useState(true)
  return (
    <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7]
        px-6 hover:shadow-md hover:-translate-y-0.5 transition h-23 w-full
          flex items-center text-xl rounded-lg justify-between" >

      <div className="flex items-center gap-2 ">

        <img src={playerImage} alt="mode image"
          className={` w-12 mr-1 object-contain ${game.mode === "singleplayer" ?
            "h-5" : "h-12"
            }`}
        ></img>

        <div className="font-inter text-[#17384A]">
          <h1 className="text-xl font-semibold">{text}</h1>
          <div className="flex gap-1">
            <div>
              <h1 className="text-xs ">You : </h1>
              <h1 className="text-xs ">Opponent : </h1>
            </div>
            <div className={`text-xs font-semibold ${textColor}`}>
              <h1>{player?.player_color}</h1>
              <h1> {player?.player_color === "White" ? "Black" : "White"}</h1>
            </div>
          </div>
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
          onClick={() => {
            setDeleteModal(true)
            setSelectedGameId(game.id)
          }}
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