import ChessBoard from "../Components/ChessBoard";
function GameState() {
  return (
    <div className="flex justify-center">
      <div className="ring-2 ring-black translate-y-7 h-125 w-125 grid grid-cols-8">
        <ChessBoard />
      </div>
    </div>
  )
}
export default GameState;