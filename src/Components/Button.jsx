const buttonVariants = {
  primary:
    "bg-amber-600 text-[rgb(248,240,225)]",
  outline:
    "text-[#17384A] hover:underline hover:decoration-2 hover:decoration-amber-600 hover:underline-offset-4 hover:text-amber-600"
};

const buttonSizes = {
  medium: "px-5 py-2 ",
};

const textWeights = {
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

function Button({
  text = "",
  variant = "",
  buttonSize = "",
  textSize = "",
  textWeight = "",
  onClick = "",
  className: customClassName = ""
}) {

  const className = [
    baseButtonStyle,
    buttonVariants[variant],
    buttonSizes[buttonSize],
    textSizes[textSize],
    textWeights[textWeight],
    customClassName
  ].join(" ");

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  )
};

export default Button;
