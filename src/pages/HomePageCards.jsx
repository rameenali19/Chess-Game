import Icon from "../components/Icon";
function HomePageCards() {
  const cards = [
    {
      image: "greenBoard",
      heading: "Play Your Way",
      line1: "Choose from single player,",
      line2: "multiplayer, or challange",
      line3: "our AI bot",
      textColor: "#35843C"
    },
    {
      image: "orangeButton",
      heading: "Create & Connect",
      line1: "Create a game and invite",
      line2: "your friends or join others",
      line3: "around the world",
      textColor: "#E67E00"
    },
    {
      image: "target",
      heading: "Track & Improve",
      line1: "View your game history,",
      line2: "learn from your moves,",
      line3: "and improve everyday",
      textColor: "#D9413A"
    },
    {
      image: "purpleQueen",
      heading: "Built for Everyone",
      line1: "Whether you are a beginner",
      line2: "or a pro, Checkmate is",
      line3: "for you",
      textColor: "#E67E00"
    }
  ]

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-cormorant text-[#17384A] text-3xl">Features</h1>
      {
        cards.map((feature) => {
          return (
            <div key={feature.heading}
              className="flex felx-col"
            >

            </div>
          )
        })
      }
    </div>
  )
}
export default HomePageCards;