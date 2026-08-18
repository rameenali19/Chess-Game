import Button from "./Button";

function ChessboardPreview() {
  return (
    <div>
      <div className="flex items-center gap-3 w-full mb-4">
        <Button
          text="How To Play"
          variant="sideBarBlue"
          textSize="small"
          fontWeight="medium"
          className="px-2 gap-2 justify-center h-8  flex items-center"
          image="/book.png"
          imageText="book image"
          imageStyling="w-5 h-5" />
        <div className="text-gray-700 font-medium">Move the piece to checkmate your opponent</div>
      </div>
      <img className=" mb-1 p-3 border-2 border-[#C7A97A] rounded-lg w-115"
        src="/chessboard.png" alt="chessboard image"
      ></img>
    </div>
  )
}
export default ChessboardPreview;