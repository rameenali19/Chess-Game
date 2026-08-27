import Icon from "./Icon";
function SidePanelHeader({ open }) {
  return (
    <div className="flex items-center py-4 px-6 gap-2">
      <Icon
        name="logoChess"
        className="h-9"
      />
      <div className={`font-cormorant text-2xl ${!open && "scale-0"}
       ${open && "  duration-500"}`}>
        <h1>Checkmate</h1>
      </div>
    </div>
  )
}
export default SidePanelHeader;