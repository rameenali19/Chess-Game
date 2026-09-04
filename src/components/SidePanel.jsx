import SidePanelHeader from "./SidePanelHeader";
import SidePanelNavigation from "./SidePanelNavigation";
import Icon from "./Icon";

function SidePanel({ open, setOpen }) {
  return (
    <nav className={`fixed left-0 top-0 h-screen bg-[#17384A]
     text-white shadow-xl z-50 ${open ? "w-49" : "w-20"}
      duration-300 ease-in-out`}>
      <Icon
        name="open"
        className={`absolute -right-3 top-5 h-6 
        ${open ? "rotate-180" : ""} hover:cursor-pointer`}
        onClick={() => { setOpen(!open) }}
      />
      <SidePanelHeader
        open={open}
      />
      <SidePanelNavigation
        open={open}
      />
    </nav>
  )
}
export default SidePanel;