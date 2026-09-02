import Icon from "./Icon";

function ColorSelection({ selectedColor, setSelectedColor }) {
  const pieces = [{ image: "whiteKing", text: "White", }, { image: "blackKing", text: "Black", }]

  return (
    <div className="flex justify-center gap-10 w-full">
      {
        pieces.map((color) => {
          return (
            <div key={color.text}
              className={`border-2 w-35 border-[#ff8127] h-30 rounded-lg flex 
                       items-center justify-center flex-col font-inter font-bold text-[#ff8127] hover:scale-105 transition hover:cursor-pointer
                        ${selectedColor === color.text ? "scale-105 shadow-lg" : ""}`}
              onClick={() => {
                setSelectedColor(color.text)
              }}
            >
              <Icon
                name={color.image}
                className="w-21 h-21"
              />
              <h1>{color.text}</h1>
            </div>
          )
        })
      }
    </div>
  )
}
export default ColorSelection;