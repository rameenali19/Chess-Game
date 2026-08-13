function Button({
  text = "+ New Game",
  variant = "primary",
  textSize = "normal",
  fontWeight = "normal",
  onClick = () => { },
  className: customClassName = "",
  type = "button",
  image = "",
  imageText = "",
  imageStyling = "",
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
      "border-2 border-[#ff8127] rounded-lg"
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
    "transition hover:cursor-pointer hover:scale-105 hover:opacity-85 font-inter";


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
      {image && (
        <img
          src={image} alt={imageText} className={imageStyling}
        />
      )}
      {text}
    </button>
  )
};

export default Button;
