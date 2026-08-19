import { NavLink } from "react-router-dom";
function SidePanelNavigation() {
  const sidePanelComponents = [
    {
      link: "/",
      text: "Home",
      image: "/white-home.png",
      imageText: "White home image"
    },
    {
      link: "/mode-selection",
      text: "Play",
      image: "/white-knight.png",
      imageText: "White knight image"
    },
    {
      link: "/history",
      text: "History",
      image: "/white-clock.png",
      imageText: "White clock image"
    },
    {
      link: "/about-me",
      text: "About Me",
      image: "/white-person.png",
      imageText: "White home image"
    },
  ]
  return (
    <div className="flex flex-col mt-5 gap-2 px-2 font-inter text-sm">
      {
        sidePanelComponents.map((panel) => {
          return (
            <NavLink key={panel.link}
              to={panel.link}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg transition-all duration-200 
                  ${isActive ? "bg-[#D96B1E]" : "hover:bg-[#21485C]"
                }`}>
              <img src={panel.image} alt={panel.imageText}
                className="w-8 h-8 mr-1 object-contain"
              ></img>
              {panel.text}
            </NavLink>
          )
        })
      }
    </div>
  )
}
export default SidePanelNavigation;