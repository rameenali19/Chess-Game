import StatsOverview from "./StatsOverview";

function MyStats({ games }) {

  return (
    <div className="flex flex-col">

      <StatsOverview
        games={games}
      />

    </div>
  )
}
export default MyStats;