import Icon from "./Icon";

function DifficultyLevel({ setDifficultyLevel }) {

  const levels = [
    {
      image: "greenPawn",
      title: "Easy",
      line1: "Best for beginners",
      line2: "and casual play",
      divColor: "#E8F0E2",
      textColor: "#35843C",
      borderColor: "#35843C",
    },

    {
      image: "yellowKnight",
      title: "Medium",
      line1: "A balanced challange",
      line2: "for improving players",
      divColor: "#FFF1CC",
      textColor: "#D99A00",
      borderColor: "#D99A00",
    },

    {
      image: "orangeRook",
      title: "Hard",
      line1: "For experienced players",
      line2: "looking for a challenge",
      divColor: "#FCE8D4",
      textColor: "#E67E00",
      borderColor: "#E67E00",
    },
    {
      image: "redQueen",
      title: "Expert",
      line1: "For advanced players",
      line2: "seeking the ultimate test",
      divColor: "#FBE0E0",
      textColor: "#D9413A",
      borderColor: "#D9413A",
    }
  ]

  return (
    <>
      {
        levels.map((game) => {
          return (
            <div key={game.text}
              className="border-2 flex h-18 w-70 rounded-lg items-center px-3 gap-7 font-inter hover:-translate-y-1 transition hover:cursor-pointer"
              style={{ borderColor: game.borderColor }}>
              <div className="w-12 h-12 rounded-lg flex justify-center"
                style={{ backgroundColor: game.divColor }}>
                <Icon
                  name={game.image}
                  className="w-6"
                />
              </div>
              <div >
                <h1 className="font-bold"
                  style={{ color: game.textColor }}>
                  {game.title}</h1>
                <h1 className="text-gray-700 text-xs tracking-wider">{game.line1}<br />
                  {game.line2}</h1>
              </div>

            </div >
          )
        })
      }
    </>
  )

}
export default DifficultyLevel;