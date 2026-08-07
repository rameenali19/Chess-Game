function ModeButton(setMode) {

  const gameModes = [
    {
      title: "Single Player",
      description: ["Play on the same", "device with your friend"],
      color: "#35843C",
      border: "#8CCB99",
      buttonText: "Play Now",
      image: "/greenbutton.png",
      mode: "single player",
    },
    {
      title: "Multiplayer",
      description: ["Play online with other", "players around the world"],
      color: "#E67E00",
      border: "#E67E00",
      buttonText: "Play Now",
      image: "/orangebutton.png",
      mode: "multiplayer",
    },
    {
      title: "Join Multiplayer",
      description: ["Join a friend or player", "using a Game ID"],
      color: "#D9413A",
      border: "#D9413A",
      buttonText: "Join Game",
      image: "/redbutton.png",
      mode: "join",
    },
  ];

  return (
    <>
      {
        gameModes.map((game) => (
          <div
            key={game.mode}
            className="flex gap-3 h-30 w-100 rounded-lg items-center justify-around font-inter border-2"
            style={{ borderColor: game.border }}
          >
            <img
              className="w-18 h-18"
              src={game.image}
              alt={game.title}
            />

            <div>
              <h1
                className="font-bold"
                style={{ color: game.color }}
              >
                {game.title}
              </h1>

              {game.description.map((line, index) => (
                <h1 key={index} className="text-gray-700 text-xs">
                  {line}
                </h1>
              ))}
            </div>

            <button
              className="hover:scale-105 transition hover:cursor-pointer w-30 h-10 rounded-lg font-medium text-white"
              style={{ backgroundColor: game.color }}
              onClick={() => setMode(game.mode)}
            >
              {game.buttonText}
            </button>
          </div>
        ))
      }
    </>
  )
}
export default ModeButton;