import Button from "../components/Button"

function HomePageLogo() {

  return (
    <div>
      <div className="tracking-wider flex-col flex gap-2">
        <div className="flex flex-col font-cormorant text-6xl text-[#17384A]">
          <h1> Welcome to</h1>
          <h1>Checkmate</h1>
        </div>
        <div className="font-inter text-gray-700 text-xs">
          <h1> Challange your mind, sharpen your strategy,</h1>
          <h1>and conqure the board</h1>
        </div>
      </div>
    </div>
  )
}
export default HomePageLogo;