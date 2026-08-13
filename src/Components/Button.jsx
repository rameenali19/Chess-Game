function Button({
  text = "",
  variant = "",
  textSize = "",
  textWeight = "",
  onClick = "",
  className: customClassName = "",
  type = "button",
}) {

  const buttonVariants = {
    primary:
      "bg-[#ff8127] text-[rgb(248,240,225)]",
    outline:
      "text-[#17384A] hover:underline hover:decoration-2 hover:decoration-amber-600 hover:underline-offset-4 hover:text-amber-600",
    red:
      "bg-[#D9413A] text-[rgb(248,240,225)]",
    green:
      "bg-[#35843C] text-[rgb(248,240,225)]",
    aiBlue:
      "bg-[#443496] text-[rgb(248,240,225)]",
    sideBarBlue:
      "bg-[#1d4960] text-[rgb(248,240,225)]"

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
    "rounded-lg transition hover:cursor-pointer hover:scale-105 hover:opacity-85 font-inter";


  const className = [
    baseButtonStyle,
    buttonVariants[variant],
    textSizes[textSize],
    fontWeights[textWeight],
    customClassName
  ].join(" ");

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  )
};

export default Button;
