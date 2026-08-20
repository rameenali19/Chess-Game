import trophyIcon from './../../public/trophy.png'
import statusWinIcon from './../../public/status-win.png'
import statusWinRateIcon from './../../public/status-win-rate.png'
import statuControllerIcon from './../../public/status-controller.png'
import singlePlayerIcon from './../../public/single-player.png'
import sandClockIcon from './../../public/sand-clock.png'
import reloadIcon from './../../public/reload.png'
import redCrossIcon from './../../public/red-cross.png'
import pendingIcon from './../../public/pending.png'
import multiplayerIcon from './../../public/multiplayer.png'
import moveLogIcon from './../../public/move-log.png'
import logoChessIcon from './../../public/logo-chess-piece.png'
import greenTrophyIcon from './../../public/green-trophy.png'
import greenTickIcon from './../../public/green-tick.png'
import gameStatusIcon from './../../public/game-status.png'


const iconMap = {
  trophy: trophyIcon,
  statusWin: statusWinIcon,

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