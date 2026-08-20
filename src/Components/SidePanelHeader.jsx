import Icon from "./Icon";
function SidePanelHeader() {
  return (
    <div className="flex items-center py-4 ">
      <Icon
        name="logoChess"
        className="w-15"
      />
      <div className="font-cormorant text-2xl">
        <h1>Chess</h1>
        <h1>Mastery</h1>
      </div>
    </div>
  )
}
export default SidePanelHeader;