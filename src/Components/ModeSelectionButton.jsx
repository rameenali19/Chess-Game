function ModeSelectionButton({ setMode }) {
  const button = [
    {
      image: "/greenbutton.png",
      title: "Single Player",
      line1: "Play on the same device",
      line2: "with your friend",
      buttonColor: "#35843C",
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
      buttonColor: "#E67E00",
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
      buttonColor: "#D9413A",
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
      buttonColor: "#443496",
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

              <button className="hover:scale-105 transition hover:cursor-pointer w-27 h-9 rounded-lg font-medium text-white text-xs mr-1 hover:opacity-80"
                style={{ backgroundColor: game.buttonColor }}
                onClick={() => {
                  setMode(game.mode)
                }}
              >
                {game.buttonText}
              </button>

            </div>
          )
        })
      }
    </>
  )
}
export default ModeSelectionButton