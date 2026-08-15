import { useNavigate } from "react-router-dom"
import Button from "../Components/Button"
import Modal from "../Components/Modal"

function GameOverModal({ open, winner, userColor, setGameOver, mode, endReason }) {
  const navigate = useNavigate()
  console.log(winner)
  const result = winner === userColor ? "Won" : winner === "Draw" ? "Draw" : "Lost"

  const resultText = {
    Won: {
      resignation: {
        text1: "Opponent Resigned",
        text2: "You Won!",
        text3: "Play again or shift to Home"
      },
      checkmate: {
        text1: "Checkmate",
        text2: "You Won!",
        text3: "Play again or shift to Home"
      }
    },
    Lost: {
      resignation: {
        text1: "You Resigned",
        text2: "You Lost",
        text3: "Play again or shift to Home"
      },
      checkmate: {
        text1: "Checkmate",
        text2: "You Lost",
        text3: "Play again or shift to Home"
      }
    },
    Draw: {
      text1: "Game Draw",
      text2: "The game ended in a draw.",
      text3: "Play again or shift to Home"
    }
  }

  const text = result === "Draw" ? resultText.Draw : resultText[result][endReason];

  return (

    <Modal open={open}
      className=" h-65 w-125 ">

      <div className="flex flex-col items-center justify-center gap-7 h-full px-1 mt-3">
        <div className=" flex flex-col items-center gap-2 text-[#17384A]">
          <h1 className="text-3xl font-bold font-cormorant">
            {text.text1}
          </h1>
          <h1 className="font-inter text-lg">
            {text.text2}</h1>
          <h1 className="font-inter text-xs">
            {text.text3}</h1>
        </div>

        <div className="flex justify-center items-center gap-4">

          <Button
            text="Play Again"
            variant="wait"
            textSize="large"
            fontWeight="medium"
            className="w-40 items-center flex justify-center py-1"
            onClick={() => {
              navigate("/modeselection", {
                state: {
                  mode: mode
                }
              })
            }}
            image="/reload.png"
            imageText="reload image"
            imageStyling="object-contain w-8 h-8"
          />

          <Button
            text="Home"
            variant="leave"
            textSize="large"
            fontWeight="medium"
            className="w-40 items-center flex justify-center py-1 gap-1"
            onClick={() => {
              navigate(`/`)
            }}
            image="/white-home.png"
            imageText="white home image"
            imageStyling="object-contain w-8 h-8"
          />

        </div>

        <div className="flex justify-end w-full">


          <Button
            text="Close"
            variant="sideBarBlue"
            textSize="small"
            fontWeight="medium"
            className="w-15 h-6 items-center flex justify-center"
            onClick={() => {
              setGameOver(false)
            }}

          />

        </div>
      </div>


    </Modal>

  )

}

export default GameOverModal;