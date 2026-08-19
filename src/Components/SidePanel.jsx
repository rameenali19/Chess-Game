import SidePanelHeader from "./SidePanelHeader";
import SidePanelNavigation from "./SidePanelNavigation";

function SidePanel() {

  return (
    <nav className=" fixed left-0 top-0 w-45 h-screen bg-[#17384A]
     text-white flex flex-col shadow-xl z-50">
      <SidePanelHeader />
      <SidePanelNavigation />
    </nav>
  )
}
export default SidePanel;