import trophyIcon from './../../public/trophy.png'

const iconMap = {
  trophy: trophyIcon,
}

function Icon({
  name, height, width
}) {
  return (
    <img
      src={iconMap[name]}
      alt={`${name} image`}
      width={width}
      height={height}
      className="object-contain"
    />
  )
}
export default Icon;