import { Navigate, useNavigate } from "react-router-dom";
import ApiChess from "../api/apiChess";
import { useState, useEffect } from "react";
import Button from "./Button";
import Icon from "./Icon";

function HistoryCard({ game, setDeleteModal, setSelectedGameId, guestId }) {
  const [player, setPlayer] = useState(null)
  const navigate = useNavigate();
  const [hover, setHover] = useState(true)

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
      text: "In Progress",
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
         hover:shadow-md hover:-translate-y-0.5 transition h-25
          flex items-center text-xl rounded-lg justify-between px-5" >

      <div className="flex items-center gap-2">

        <Icon
          name={currentMode.image} s
          className="mr-1 w-15"
        />

        <div className="font-inter text-[#17384A] text-xs ">
          <h1 className="text-xl font-semibold">{currentMode.text}</h1>
          <h1>Player color :
            <span className={` font-semibold ${currentMode.textColor}`}>
              {player?.player_color} </span>
          </h1>
        </div>
      </div>


      <div className="flex gap-5 font-inter text-sm font-semibold items-center">

        <Button
          text={currentStatus.text}
          variant={currentStatus.variant}
          fontWeight="semibold"
          className="flex w-37 h-15  items-center justify-center gap-2"
          imageName={currentStatus.image}
          imageClassName="w-9"
        />

        <Button
          text={continueButton.text}
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
          className="w-33 h-11"
        />

        <Button
          text=""
          variant="delete"
          onClick={() => {
            setDeleteModal(true)
            setSelectedGameId(game.id)
          }}
          onMouseEnter={() => { setHover(false) }}
          onMouseLeave={() => { setHover(true) }}
          className="w-15 h-10 flex justify-center items-center"
          imageName={hover ? "dustbinClose" : "dustbinOpen"}
          imageClassName="w-6 h-5"
        />

      </div>
    </div >
  )
}
export default HistoryCard;