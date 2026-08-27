import Icon from "./Icon";

function OpenSidePanel({ setOpen }) {
  return (
    <div className="py-4 px-2 hover:cursor-pointer"
      onClick={() => { setOpen(true) }}
    >
      <Icon
        name="logoChess"
        className="h-9"
      />
    </div>
  )
}
export default OpenSidePanel;