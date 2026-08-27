import Button from "./Button"

function RightPanelButton({ setResignModal, winner, userColor, turn, mode }) {

  return (
    <Button
      text="Resign"
      variant="red"
      textSize="normal"
      fontWeight="medium"
      className="w-40 items-center flex justify-center h-10 gap-2"
      imageName="whiteFlag"
      imageClassName="w-5 h-5"
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
export default RightPanelButton;