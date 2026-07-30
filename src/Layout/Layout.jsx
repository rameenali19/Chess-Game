import SideBar from "../Components/SideBar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="bg-[rgb(248,240,225)] min-h-screen   ">
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Layout