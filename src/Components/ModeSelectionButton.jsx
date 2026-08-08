function ModeSelectionButton({ setMode }) {
  const button = [
    {
      image: "/greenbutton.png",
      title: "Single Player",
      line1: "Play on the same device",
      line2: "with your friend",
      buttonColor: "#35843C",
      textColor: "#35843C",
      borderColor: "#8CCB99",
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
    }
  ]

  return (
    <>
      {
        button.map((game) => {
          return (
            <div key={game.mode}
              className="border-2 flex  h-27 w-90 rounded-lg items-center justify-around font-inter"
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

              <button className="hover:scale-105 transition hover:cursor-pointer w-27 h-9 rounded-lg font-medium text-white text-xs mr-1"
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