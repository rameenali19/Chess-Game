import Button from "./Button"

function ModeSelectionButton({ setMode }) {
  const button = [
    {
      image: "/greenbutton.png",
      title: "Single Player",
      line1: "Play on the same device",
      line2: "with your friend",
      buttonColor: "green",
      textColor: "#35843C",
      borderColor: "#35843C",
      mode: "single player",
      buttonText: "Play Now"

    },

    {
      image: "/orangebutton.png",
      title: "Multiplayer",
      line1: "Play with other players",
      line2: "around the world",
      buttonColor: "primary",
      textColor: "#E67E00",
      borderColor: "#E67E00",
      mode: "multiplayer",
      buttonText: "Play Now"
    },

    {
      image: "/redbutton.png",
      title: "Join multiplayer",
      line1: "Join a friend or player",
      line2: "using a Game ID",
      buttonColor: "red",
      textColor: "#D9413A",
      borderColor: "#D9413A",
      mode: "join",
      buttonText: "Join Game"
    },
    {
      image: "/bluebutton.png",
      title: "AI Bot",
      line1: "Challange AI bot ",
      line2: "and test your skills",
      buttonColor: "blue",
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
              style={{ borderColor: game.borderColor }}
            >

              <img className="w-18 h-18"
                src={game.image} alt={game.mode}
              ></img>

              <div >
                <h1 className="font-bold"
                  style={{ color: game.textColor }}
                >
                  {game.title}</h1>
                <h1 className="text-gray-700 text-xs">{game.line1}<br />
                  {game.line2}</h1>
              </div>

              <Button
                variant={game.buttonColor}
                text={game.buttonText}
                textSize="small"
                textWeight="medium"
                onClick={() => setMode(game.mode)}
                className={`w-27 h-9 mr-1`}
              />

            </div >
          )
        })
      }
    </>
  )
}
export default ModeSelectionButton