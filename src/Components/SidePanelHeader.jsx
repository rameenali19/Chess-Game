import Icon from "./Icon";
function SidePanelHeader() {
  return (
    <div className="flex items-center py-4 px-2 gap-1">
      <Icon
        name="logoChess"
        className="h-9"
      />
      <div className="font-cormorant text-2xl">
        <h1>Checkmate</h1>
      </div>
    </div>
  )
}
export default SidePanelHeader;