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

  const statusColor = game.game_status === "finished" ? (game.winner === player?.player_color ? "bg-[#D9E8C8] text-[#3F6B2A]" : "bg-[#FCDFDD] text-[#E64743]") : "bg-[#F9E4A4] text-[#8A5A00]"

  const statusText = game.game_status === "finished" ? (game.winner === player?.player_color ? "Won" : "Lost")
    : "In Progress"

  const statusImage = game.game_status === "finished" ? (game.winner === player?.player_color ? "/green-trophy.png" : "/red-cross.png") : "/pending.png"

  const [hover, setHover] = useState(true)


  return (
    <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7]
        px-6 hover:shadow-md hover:-translate-y-0.5 transition h-25 w-full
          flex items-center text-xl rounded-lg justify-between" >

      <div className="flex items-center gap-2 ">

        <img src={playerImage} alt="mode image"
          className={` w-12 mr-1 object-contain ${game.mode === "singleplayer" ?
            "h-5" : "h-12"
            }`}
        ></img>

        <div className="font-inter text-[#17384A] text-xs ">
          <h1 className="text-xl font-semibold">{text}</h1>
          <h1>Player color :
            <span className={` font-semibold ${textColor}`}>{player?.player_color} </span>
          </h1>
        </div>
      </div>


      <div className="flex gap-5 font-inter text-sm font-semibold items-center">

        <button className={` flex w-37 h-15 rounded-2xl hover:cursor-pointer  hover:-translate-y-0.5 transition 
          ${statusColor} items-center justify-center gap-3`} >
          <img className="object-contain w-9 h-9"
            src={statusImage} alt="status Image">
          </img>
          <div>
            <h1 className="font-bold">{statusText}</h1>
          </div>
        </button>


        <button className={`w-33 h-11 rounded-xl  hover:cursor-pointer hover:-translate-y-0.5 transition
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


        <button className="w-25 h-12 rounded-full  hover:cursor-pointer bg-[#E64743] text-white hover:-translate-y-0.5 transition flex justify-center items-center"
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
    </div >
  )
}
export default HistoryButton