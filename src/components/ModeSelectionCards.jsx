import Button from "./Button"
import Icon from "./Icon"

function ModeSelectionCards({ setMode, setDifficultyModal }) {
  const button = [
    {
      image: "greenButton",
      title: "Single Player",
      line1: "Play on the same device",
      line2: "with your friend",
      variant: "green",
      textColor: "#35843C",
      borderColor: "#35843C",
      mode: "singleplayer",
      buttonText: "Play Now"

    },

    {
      image: "orangeButton",
      title: "Multiplayer",
      line1: "Play with other players",
      line2: "around the world",
      variant: "primary",
      textColor: "#ff8127",
      borderColor: "#ff8127",
      mode: "multiplayer",
      buttonText: "Play Now"
    },

    {
      image: "redButton",
      title: "Join multiplayer",
      line1: "Join a friend or player",
      line2: "using a Game ID",
      variant: "red",
      textColor: "#D9413A",
      borderColor: "#D9413A",
      mode: "join",
      buttonText: "Join Game"
    },
    {
      image: "blueButton",
      title: "AI Bot",
      line1: "Challange AI bot ",
      line2: "and test your skills",
      variant: "aiBlue",
      textColor: "#443496",
      borderColor: "#443496",
      mode: "ai",
      buttonText: "Play Now "
    }
  ]

  return (
    <>
      {
        button.map((game) => {
          return (
            <div key={game.mode}
              className="border-2 flex h-26 w-100 rounded-lg items-center justify-around font-inter hover:-translate-y-1 transition"
              style={{ borderColor: game.borderColor }}>
              <Icon
                name={game.image}
                className="w-18"
              />
              <div >
                <h1 className="font-bold"
                  style={{ color: game.textColor }}>
                  {game.title}</h1>
                <h1 className="text-gray-700 text-xs tracking-wider">{game.line1}<br />
                  {game.line2}</h1>
              </div>

              <Button
                variant={game.variant}
                text={game.buttonText}
                textSize="small"
                fontWeight="medium"
                onClick={() => {
                  setMode(game.mode)
                  if (game.mode === "ai") {
                    setDifficultyModal(true)
                  }
                }}
                className={`w-27 h-9 mr-1`}
              />

            </div >
          )
        })
      }
    </>
  )
}
export default ModeSelectionCards;