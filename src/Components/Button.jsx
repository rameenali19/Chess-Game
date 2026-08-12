const buttonVariants = {
  primary:
    "bg-amber-600 text-[rgb(248,240,225)]"
};

const buttonSize = {
  md:
    "px-5 py-2 text-base",
};

const buttonWeights = {
  normal: "font-normal",
  medium: "font-medium",
};

const baseButtonStyle =
  "rounded-lg transition hover:cursor-pointer hover:scale-105 hover:opacity-85 font-inter";

function Button({
  text,
  variant,
  size,
  weight,
  fullWidth,
  onClick,
  className: customClassName
}) {

  const className = [
    baseButtonStyle,
    buttonVariants[variant],
    buttonSize[size],
    buttonWeights[weight],
    fullWidth ? "w-full" : "",
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
