import SidePanel from "../components/SidePanel"
import { Outlet } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { useState } from "react"

function Layout() {
  const [guestId, setGuestId] = useState(
    localStorage.getItem("guestId")
  )
  const [open, setOpen] = useState(true)

  return (
    <div className="bg-[rgb(248,240,225)] min-h-screen ">
      <UserContext.Provider value={{ guestId, setGuestId }}>
        <SidePanel
          open={open}
          setOpen={setOpen}
        />
        <main
          className={`
            transition-all duration-300 ease-in-out
            ${open ? "ml-45" : "ml-20"}
          `}
        >
          <Outlet />
        </main>
      </UserContext.Provider>
    </div>
  )
}

export default Layout