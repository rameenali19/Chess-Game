import HomePageLogo from "../components/HomePageLogo"
import HomePageCards from "./HomePageCards"
import HomePageStats from "../components/HomePageStats"

function HomePage() {
  return (

    <div className="page flex flex-col px-10 items-center justify-center min-h-screen -translate-y-10">

      <HomePageLogo />

      <HomePageCards />

      <HomePageStats />
    </div>

  )
}
export default HomePage