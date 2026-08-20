import Button from "./Button";
import Icon from "./Icon";

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
          imageName="book"
          imageClassName="w-5" />
        <div className="text-gray-700 font-medium">Move the piece to checkmate your opponent</div>
      </div>
      <Icon
        name="chessboard"
        className="p-3 border-2 border-[#C7A97A] rounded-lg w-115"
      />
    </div>
  )
}
export default ChessboardPreview;