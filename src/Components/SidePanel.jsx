import { useState } from "react";
import SidePanelHeader from "./SidePanelHeader";
import SidePanelNavigation from "./SidePanelNavigation";
import Icon from "./Icon";

function SidePanel() {
  const [open, setOpen] = useState(true)
  return (
    <>
      {open && (
        <nav className=" fixed left-0 top-0 w-45 h-screen bg-[#17384A]
     text-white flex flex-col shadow-xl z-50">
          <SidePanelHeader
            setOpen={setOpen}
          />
          <SidePanelNavigation />
        </nav>
      )}

      {!open && (
        <nav className=" fixed left-0 top-0 w-15 h-screen bg-[#17384A]
     text-white shadow-xl z-50">
          <div className="py-4 px-2 hover:cursor-pointer"
            onClick={() => { setOpen(true) }}
          >
            <Icon
              name="logoChess"
              className="h-9"
            />
          </div>
        </nav>
      )
      }
    </>
  )
}
export default SidePanel;