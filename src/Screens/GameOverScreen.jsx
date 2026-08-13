import { useNavigate } from "react-router-dom"
import Button from "../Components/Button"

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
              className="w-15 h-6 items-center flex justify-center py-1 gap-1"
              onClick={() => {
                setGameOver(false)
              }}
              image="/white-home.png"
              imageText="white home image"
              imageStyling="object-contain w-8 h-8"
            />

          </div>

        </div>

      </div>
    )
  }
}

export default GameOverScreen;