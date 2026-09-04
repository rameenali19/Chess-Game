import Icon from "../components/Icon";
function HomePageCards() {
  const cards = [
    {
      image: "greenBoard",
      heading: "Play Your Way",
      line1: "Choose from single player,",
      line2: "multiplayer, or challange",
      line3: "our AI bot",
      color: "#35843C"
    },
    {
      image: "orangeButtonBorder",
      heading: "Create & Connect",
      line1: "Create a game and invite",
      line2: "your friends or join others",
      line3: "around the world",
      color: "#ff8127"
    },
    {
      image: "target",
      heading: "Track & Improve",
      line1: "View your game history,",
      line2: "learn from your moves,",
      line3: "and improve everyday",
      color: "#D9413A"
    },
    {
      image: "purpleQueen",
      heading: "Built for Everyone",
      line1: "Whether you are a beginner",
      line2: "or a pro, Checkmate is",
      line3: "for you",
      color: "#443496"
    }
  ]

  return (
    <div className="flex flex-col gap-7 w-full items-center">
      <h1 className="font-cormorant text-[#17384A] text-4xl">Why Play on Checkmate?</h1>
      <div className="flex gap-6">
        {
          cards.map((feature) => {
            return (
              <div key={feature.heading}
                className="flex flex-col bg-[#FFF8EA] border-2 w-55 h-50 px-3 
                font-inter rounded-lg gap-2 py-3 hover:scale-105 transition"
                style={{ borderColor: feature.color }}>
                <Icon
                  name={feature.image}
                  className="w-15 h-15"
                />
                <h1 className="font-semibold"
                  style={{ color: feature.color }}
                >{feature.heading}</h1>
                <div className="text-gray-700 text-xs tracking-wider flex flex-col gap-1">
                  <h1>{feature.line1}</h1>
                  <h1>{feature.line2}</h1>
                  <h1>{feature.line3}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default HomePageCards;