import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className=" w-11/12 h-[60px] rounded-full  shadow-lg 
            mt-3 mx-auto flex items-center justify-between font-extrabold font-nunito px-8 text-[18px] "
    >
      <div className="flex items-center ">
        {/* <img
          className="object-contain w-20 h-19 hover:scale-120 hover:cursor-pointer transition-all duration-200"
          src="/pinkcontroller.png"
        ></img> */}
        <h1>
          Chess Game <span className="text-[#EC6086]">Zone</span>
        </h1>
      </div>
      <div className="flex gap-7  ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-[#EC6086] hover:bg-[#FFE1E6] hover:rounded-full px-4 py-2 active:bg-white
          transition-all duration-200
          ${isActive ?
              "bg-[#FFE1E6] text-[#EC6086]" : ""
            }
          `}
        >
          Home
        </NavLink>
        <NavLink
          to="/game"
          className={({ isActive }) =>
            `hover:text-[#EC6086] hover:bg-[#FFE1E6] hover:rounded-full px-4 py-2 active:bg-white
          transition-all duration-200
          ${isActive ?
              "bg-[#FFE1E6] text-[#EC6086]" : ""
            }
          `}
        >
          Game Page
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `hover:text-[#EC6086] hover:bg-[#FFE1E6] hover:rounded-full px-4 py-2 active:bg-white
          transition-all duration-200
          ${isActive ?
              "bg-[#FFE1E6] text-[#EC6086]" : ""
            }
          `}
        >
          History
        </NavLink>
        <NavLink
          to="/aboutMe"
          className={({ isActive }) =>
            `hover:text-[#EC6086] hover:bg-[#FFE1E6] hover:rounded-full px-4 py-2 active:bg-white
          transition-all duration-200
          ${isActive ?
              "bg-[#FFE1E6] text-[#EC6086]" : ""
            }
          `}
        >
          About Me
        </NavLink>
      </div>
      <button
        className=" bg-[#9D73E8] border-2 rounded-[17px] text-white px-8 py-2 transition-all duration-200 active:text-[#9D73E8] active:bg-white active:border-2 active:border-[#9D73E8] hover:bg-[#af8af0] hover:cursor-pointer"
      >
        Create Game
      </button>

    </nav>
  )
}
export default NavBar;