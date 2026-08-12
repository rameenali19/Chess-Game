const buttonStyles = {
  newGame:
    "bg-amber-600 text-[rgb(248,240,225)] px-5 py-2 rounded-lg hover:cursor-pointer font-inter hover:scale-105 transition hover:opacity-85 "
};


function Button({
  text,
  onClick,
  buttonType = "newGame",
  className
}) {
  return (
    <button
      className={`${buttonStyles[buttonType]} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;