import Icon from "./Icon";
function Button({
  text = "+ New Game",
  variant = "primary",
  textSize = "normal",
  fontWeight = "normal",
  onClick = () => { },
  className: customClassName = "",
  type = "button",
  imageName = "",
  imageClassName = "",
  onMouseEnter = () => { },
  onMouseLeave = () => { }
}) {

  const buttonVariants = {
    primary:
      "bg-[#ff8127] text-[rgb(248,240,225)] rounded-lg ",
    outline:
      "text-[#17384A] hover:underline hover:decoration-2 hover:decoration-amber-600 hover:underline-offset-4 hover:text-amber-600",
    red:
      "bg-[#D9413A] text-[rgb(248,240,225)] rounded-lg ",
    green:
      "bg-[#35843C] text-[rgb(248,240,225)] rounded-lg ",
    aiBlue:
      "bg-[#443496] text-[rgb(248,240,225)] rounded-lg ",
    sideBarBlue:
      "bg-[#1d4960] text-[rgb(248,240,225)] rounded-lg ",
    delete:
      "bg-[#E64743] text-white rounded-full",
    continueButton:
      "bg-[#2b6381] text-white rounded-lg",
    viewButton:
      "ring-[#2b6381] ring-2 text-[#2b6381] rounded-lg",
    win:
      "bg-[#D9E8C8] text-[#3F6B2A] rounded-2xl",
    lose:
      "bg-[#FCDFDD] text-[#E64743] rounded-2xl",
    pending:
      "bg-[#F9E4A4] text-[#8A5A00] rounded-2xl",
    leave:
      "bg-[#ff8127] text-white border-2 border-[#ff8127] rounded-lg",
    wait:
      "text-[#ff8127] border-2 border-[#ff8127] rounded-lg",
    cross:
      "text-[#5A432B] ring-1 ring-[#E8D7B8] rounded-full"
  };

  const fontWeights = {
    normal: "font-normal",
    medium: "font-medium",
    semiBold: "font-semibold"
  };

  const textSizes = {
    normal: "text-base",
    small: "text-xs",
    large: "text-lg"
  }

  const baseButtonStyle =
    "transition hover:cursor-pointer hover:scale-105 hover:opacity-85 font-inter tracking-wider";


  const className = [
    baseButtonStyle,
    buttonVariants[variant],
    textSizes[textSize],
    fontWeights[fontWeight],
    customClassName
  ].join(" ");

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {imageName && (
        <Icon
          name={imageName}
          className={imageClassName}
        />
      )}
      {text}
    </button>
  )
};

export default Button;
