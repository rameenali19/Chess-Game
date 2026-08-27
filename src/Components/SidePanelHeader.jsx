import Icon from "./Icon";
function SidePanelHeader({ setOpen }) {
  return (
    <div className="flex items-center py-4 px-2 gap-1">
      <div onClick={() => { setOpen(false) }}
        className=" hover:cursor-pointer"
      >
        <Icon
          name="logoChess"
          className="h-9"
        />
      </div>
      <div className="font-cormorant text-2xl">
        <h1>Checkmate</h1>
      </div>
    </div>
  )
}
export default SidePanelHeader;