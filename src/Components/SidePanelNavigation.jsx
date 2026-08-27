import { NavLink } from "react-router-dom";
import Icon from "./Icon";
function SidePanelNavigation({ open }) {
  const sidePanelComponents = [
    {
      link: "/",
      text: "Home",
      image: "whiteHome",
      imageText: "White home image"
    },
    {
      link: "/mode-selection",
      text: "Play",
      image: "whiteKnight",
      imageText: "White knight image"
    },
    {
      link: "/history",
      text: "History",
      image: "whiteClock",
      imageText: "White clock image"
    },
    {
      link: "/about-me",
      text: "About Me",
      image: "whitePerson",
      imageText: "White home image"
    },
  ]
  return (
    <div className={`flex flex-col mt-3 gap-2 px-2 font-inter text-sm ${!open && "scale-0"}`}>
      {
        sidePanelComponents.map((panel) => {
          return (
            <NavLink key={panel.link}
              to={panel.link}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg transition-all duration-200 
                  ${isActive ? "bg-[#D96B1E]" : "hover:bg-[#21485C]"
                }`}>
              <Icon
                name={panel.image}
                className="mr-1 w-8 h-8"
              />
              {panel.text}
            </NavLink>
          )
        })
      }
    </div>
  )
}
export default SidePanelNavigation;