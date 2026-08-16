import SideBar from "../components/SideBar"
import { Outlet } from "react-router-dom"
import { UserContext } from "../Context/UserContext"
import { useState } from "react"

function Layout() {
  const [guestId, setGuestId] = useState(
    localStorage.getItem("guestId")
  )

  return (
    <div className="bg-[rgb(248,240,225)] min-h-screen ">
      <UserContext.Provider value={{ guestId, setGuestId }}>
        <SideBar />
        <main className="ml-45">
          <Outlet />
        </main>
      </UserContext.Provider>
    </div>
  )
}

export default Layout