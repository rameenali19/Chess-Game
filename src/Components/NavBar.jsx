import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (

    <nav className="w-45 h-screen bg-[#17384A] text-white flex flex-col shadow-xl">

      <div className="flex items-center py-4 ">
        <img src="/logo-chess-piece.png" alt="chess piece"
          className="w-15 h-15"></img>

        <div className="font-cormorant text-2xl">
          <h1>Chess</h1>
          <h1>Mastery</h1>
        </div>
      </div>

      <div className="flex flex-col mt-5 gap-2 px-2 font-inter text-xl">

        <NavLink
          to="/"
          className={({ isActive }) =>

            `flex items-center px-3 py-3 hover:rounded-full  active:bg-white
          transition-all duration-200 active:text-[#D96B1E]
          ${isActive
              ?
              "bg-[#D96B1E] text-white rounded-full"
              : "hover:bg-[#21485C]"
            }
          `}
        >
          <img src="/white-home.png" alt="Clock Image"
          className="w-8 h-8 mx-1"
          ></img>

          Home
        </NavLink>

        <NavLink
          to="/game"
          className={({ isActive }) =>

            `flex items-center px-3 py-3 hover:rounded-full  active:bg-white
          transition-all duration-200 active:text-[#D96B1E]
          ${isActive
              ?
              "bg-[#D96B1E] text-white rounded-full"
              : "hover:bg-[#21485C]"
            }
          `}
        >
           <img src="/white-piece-navbar.png" alt="Clock Image"
          className="w-8 h-8 mx-1"
          ></img>

          Play
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>

            `flex items-center px-3 py-3 hover:rounded-full  active:bg-white
          transition-all duration-200 active:text-[#D96B1E]
          ${isActive
              ?
              "bg-[#D96B1E] text-white rounded-full"
              : "hover:bg-[#21485C]"
            }
          `}
        >
           <img src="/white-clock.png" alt="Clock Image"
          className="w-8 h-8 mx-1"
          ></img>

          History
        </NavLink>

        <NavLink
          to="/aboutMe"

          className={({ isActive }) =>

            `flex items-center  px-3 py-3 hover:rounded-full  active:bg-white
          transition-all duration-200 active:text-[#D96B1E]
          ${isActive
              ?
              "bg-[#D96B1E] text-white rounded-full"
              : "hover:bg-[#21485C]"
            }
          `}
        >
           <img src="/white-person.png" alt="Clock Image"
          className="w-8 h-8 mx-1"
          ></img>

          About Me
        </NavLink>

      </div>
    </nav>

  )
}
export default NavBar