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
      rate: singleplayerWinRate
    },
    {
      mode: "Multiplayer",
      games: multiplayerGames,
      wins: multiplayerWon,
      lost: multiplayerLost,
      rate: multiplayerWinRate
    },
    {
      mode: "Ai Bot",
      games: aiWon,
      wins: singlePlayerWon,
      lost: aiLost,
      rate: aiWinRate
    }
  ]

  return (
    <div className="bg-[#FFF8EA] w-200 h-60 rounded-lg">
      {
        stats.map((values) => {
          return (
            <div></div>
          )
        })
      }
    </div>
  )
}
export default Performance;