import Button from "../Components/Button"

function RightPanelButtons() {

  return (
    <div className=" bg-[#FFF7EA] shadow-lg border border-[#E8DCC7] text-sm h-30
      w-70 flex flex-col  rounded-lg font-inter text-[#17384A] justify-center gap-3 items-center  ">

      <Button
        text="Resign"
        variant="red"
        textSize="large"
        fontWeight="semiBold"
        className="w-60 items-center flex justify-center h-10 gap-2"
        image="/white-flag.png"
        imageText="white flag image"
        imageStyling="object-contain w-5 h-5"
      />

      <Button
        text="Restart Game"
        variant="viewButton"
        textSize="large"
        fontWeight="semiBold"
        className=" w-60 items-center flex justify-center h-10 gap-1"
        image="/blue-reload.png"
        imageText="blue reload image"
        imageStyling="object-contain w-5 h-5"
      />

    </div>

  )
}
export default RightPanelButtons;