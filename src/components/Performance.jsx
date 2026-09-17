import Icon from "./Icon";

function Performance({ singlePlayerGames, multiplayerGames, aiGames, singlePlayerWon, multiplayerWon,
  aiWon, singlePlayerLost, multiplayerLost, aiLost
}) {
  const singleplayerWinRate = (singlePlayerWon / singlePlayerGames) * 100 || 0;
  const multiplayerWinRate = (multiplayerWon / multiplayerGames) * 100 || 0;
  const aiWinRate = (aiWon / aiGames) * 100 || 0;

  const stats = [
    {
      mode: "Single Player",
      games: singlePlayerGames,
      wins: singlePlayerWon,
      lost: singlePlayerLost,
      rate: singleplayerWinRate,
      image: "greenButton"
    },
    {
      mode: "Multiplayer",
      games: multiplayerGames,
      wins: multiplayerWon,
      lost: multiplayerLost,
      rate: multiplayerWinRate,
      image: "orangeButton"
    },
    {
      mode: "Ai Bot",
      games: aiWon,
      wins: singlePlayerWon,
      lost: aiLost,
      rate: aiWinRate,
      image: "blueButton"
    }
  ]

  return (
    <div className="bg-[#FFF8EA] w-240 h-75 rounded-lg flex flex-col px-5 py-5 justify-around gap-5">
      <h1 className="font-playfair text-[#17384A] text-xl font-bold">Performance By Game Mode</h1>
      <table className="w-full font-inter">
        <thead>
          <tr>
            <th>Game Type</th>
            <th>Games</th>
            <th>Won</th>
            <th>Lose</th>
            <th>Win Rate</th>
          </tr>
        </thead>
      </table>
      {/* <div className="flex font-inter text-xs text-gray-500 justify-between font-medium mb-4">
        <h1>Game Type</h1>
        <h1>Games</h1>
        <h1>Won</h1>
        <h1>Lose</h1>
        <h1>Win Rate</h1>
      </div>
      {
        stats.map((values) => {
          return (
            <div key={values.mode}
              className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon
                  name={values.image}
                  className="w-10 h-10"
                />
                <h1 className="font-inter text-[#17384A] text-sm font-medium">
                  {values.mode}
                </h1>
              </div>
              <h1>{values.games}</h1>
              <h1>{values.wins}</h1>
              <h1>{values.lost}</h1>
            </div>
          )
        })
      } */}
    </div>
  )
}
export default Performance;