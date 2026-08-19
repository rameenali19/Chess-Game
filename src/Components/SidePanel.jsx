import { NavLink } from "react-router-dom";

function SidePanel() {
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

    <nav className=" fixed left-0 top-0 w-45 h-screen bg-[#17384A] text-white flex flex-col shadow-xl z-50">

      <div className="flex items-center py-4 ">
        <img src="/logo-chess-piece.png" alt="chess piece"
          className="w-15 h-15" />

        <div className="font-cormorant text-2xl">
          <h1>Chess</h1>
          <h1>Mastery</h1>
        </div>
      </div>

      <div className="flex flex-col mt-5 gap-2 px-2 font-inter text-sm">
        {
          sidePanelComponents.map((panel) => {
            return (
              <NavLink
                to={panel.link}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 hover:rounded-lg transition-all duration-200 
                  ${isActive
                    ?
                    "bg-[#D96B1E] text-white rounded-lg"
                    : "hover:bg-[#21485C]"
                  }`}
              >
                <img src={panel.image} alt={panel.imageText}
                  className="w-8 h-8 mr-1 object-contain"
                ></img>

                {panel.text}
              </NavLink>
            )
          })
        }
      </div>
    </nav>

  )
}
export default SidePanel;