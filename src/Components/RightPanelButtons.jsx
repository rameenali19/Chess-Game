import Button from "../Components/Button"

function RightPanelButtons({ setResignModal, winner, userColor, turn, mode }) {

  return (
    <Button
      text="Resign"
      variant="red"
      textSize="normal"
      fontWeight="medium"
      className="w-40 items-center flex justify-center h-10 gap-2"
      image="/white-flag.png"
      imageText="white flag image"
      imageStyling="object-contain w-5 h-5"
      onClick={() => {
        if (winner) return;
        if (mode === "multiplayer" && userColor !== turn) {
          return
        }
        setResignModal(true)
      }}
    />
  )
}
export default RightPanelButtons;