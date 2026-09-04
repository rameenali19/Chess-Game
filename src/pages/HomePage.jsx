import HomePageLogo from "../components/HomePageLogo"
import HomePageCards from "../components/HomePageCards"
import HomePageStats from "../components/HomePageStats"

function HomePage() {
  return (

    <div className="page flex flex-col px-10 items-center justify-center min-h-screen gap-15">

      <HomePageLogo />

      <HomePageCards />

      <HomePageStats />
    </div>

  )
}
export default HomePage