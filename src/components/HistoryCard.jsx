import { Navigate, useNavigate } from "react-router-dom";
import ApiChess from "../api/apiChess";
import { useState, useEffect } from "react";
import Button from "./Button";
import Icon from "./Icon";

function HistoryCard({ game, setDeleteModal, setSelectedGameId, guestId }) {
  const [player, setPlayer] = useState(null)
  const navigate = useNavigate();
  const [hoverDelete, setHoverDelete] = useState(false)
  const [hoverStatus, setHoverStatus] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    async function getPlayer() {
      const player = ApiChess.getAPI();
      const data = await player.getPlayer(game.id, guestId);
      setPlayer(data)
    }
    getPlayer()
  }, [])

  const modeData = {
    singleplayer: {
      image: "redPlayer",
      text: "Single Player Game",
      textColor: "text-[#eb1603]"
    },
    multiplayer: {
      image: "orangeButton",
      text: "Multiplayer Game",
      textColor: "text-[#ff8127]"
    },
    ai: {
      image: "blueButton",
      text: "AI Bot",
      textColor: "text-[#443496]"
    }
  }
  const currentMode = modeData[game.mode]
  const statusData = {
    finished: {
      won: {
        variant: "win",
        text: "Won",
        image: "greenTrophy"
      },
      lost: {
        variant: "lose",
        text: "Lost",
        image: "redCross"
      }
    },
    unfinished: {
      variant: "pending",
      text: "Ongoing",
      image: "pending"
    }
  }
  let currentStatus;
  if (game.game_status === "finished") {
    currentStatus =
      game.winner === player?.player_color ?
        statusData.finished.won :
        statusData.finished.lost
  }
  else {
    currentStatus = statusData["unfinished"]
  }

  const continueButtonStyle = {
    finished: {
      variant: "viewButton",
      text: "View"
    },
    unfinished: {
      variant: "continueButton",
      text: "Continue"
    }
  }

  const continueButton = continueButtonStyle[
    game.game_status === "finished" ?
      "finished" : "unfinished"]

  return (
    <div className=" bg-[#FFF7EA] shadow-sm border border-[#E8DCC7]
         hover:shadow-md h-25
          flex items-center text-xl rounded-lg justify-between px-5" >

      <div className="flex items-center gap-2">

        <Icon
          name={currentMode.image}
          className="mr-1 w-14"
        />

        <div className="font-inter text-[#17384A] text-xs">
          <h1 className="text-xl font-semibold">{currentMode.text}</h1>
          <h1 className="tracking-wider">Player color :
            <span className={` font-semibold ${currentMode.textColor}`}>
              {player?.player_color} </span>
          </h1>
        </div>
      </div>


      <div className="flex gap-5 font-inter text-sm font-semibold items-center">

        <Button
          text={showText ? currentStatus.text : ""}
          variant={currentStatus.variant}
          fontWeight="semibold"
          className={` ${hoverStatus ? "w-37" : "w-15"} flex h-12  items-center justify-center gap-2 transition-all duration-300  overflow-hidden`}
          imageName={currentStatus.image}
          imageClassName="w-8"
          onMouseEnter={() => {
            setHoverStatus(true)
            setTimeout(() => {
              setShowText(true)
            }, 100);
          }}
          onMouseLeave={() => {
            setHoverStatus(false)
            setTimeout(() => {
              setShowText(false)
            }, 100);
          }}
        />

        <Button
          text={continueButton.text}
          fontWeight="normal"
          variant={continueButton.variant}
          onClick={() => {
            if (game.mode === "multiplayer" &&
              game.game_status !== "finished"
            ) {
              navigate("/mode-selection", {
                state: {
                  mode: "join",
                  gameId: game.id
                }
              })
              return
            }
            navigate(`/game/${game.id}`)
          }}
          className="w-33 h-11 tracking-wider"
        />

        <Button
          text=""
          variant="delete"
          onClick={() => {
            setDeleteModal(true)
            setSelectedGameId(game.id)
          }}
          onMouseEnter={() => { setHoverDelete(true) }}
          onMouseLeave={() => { setHoverDelete(false) }}
          className="w-15 h-12 flex justify-center items-center"
          imageName={!hoverDelete ? "dustbinClose" : "dustbinOpen"}
          imageClassName="w-6 h-5"
        />

      </div>
    </div >
  )
}
export default HistoryCard;