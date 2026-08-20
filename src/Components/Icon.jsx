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
import gameIdIcon from './../../public/game-id.png'
import dustbinOpenIcon from './../../public/dustbin-open.png'
import dustbinCloseIcon from './../../public/dustbin-close.png'
import doorIcon from './../../public/door.png'
import crownIcon from './../../public/crown.png'
import chessboardIcon from './../../public/chessboard.png'
import calendarIcon from './../../public/calendar.png'
import bulbIcon from './../../public/bulb.png'
import bookIcon from './../../public/book.png'
import blueReloadIcon from './../../public/blue-reload.png'
import greenButtonIcon from './../../public/green-button.png'
import blueButtonIcon from './../../public/blue-button.png'
import redButtonIcon from './../../public/red-button.png'
import orangeButtonIcon from './../../public/orange-button.png'
import whiteKingIcon from './../../public/white-king.png'
import whitePawnIcon from './../../public/white-pawn.png'
import whiteBishopIcon from './../../public/white-bishop.png'
import whiteKnightIcon from './../../public/white-knight.png'
import whiteRookIcon from './../../public/white-rook.png'
import whiteQueenIcon from './../../public/white-queen.png'
import blackKingIcon from './../../public/black-king.png'
import blackPawnIcon from './../../public/black-pawn.png'
import blackBishopIcon from './../../public/black-bishop.png'
import blackKnightIcon from './../../public/black-knight.png'
import blackRookIcon from './../../public/black-rook.png'
import blackQueenIcon from './../../public/black-queen.png'

const iconMap = {
  trophy: trophyIcon,
  statusWin: statusWinIcon,
  statusWinRate: statusWinRateIcon,
  statuController: statuControllerIcon,
  singlePlayer: singlePlayerIcon,
  sandClock: sandClockIcon,
  reload: reloadIcon,
  redCross: redCrossIcon,
  pending: pendingIcon,
  multiplayer: multiplayerIcon,
  moveLog: moveLogIcon,
  logoChess: logoChessIcon,
  greenTrophy: greenTrophyIcon,
  greenTick: greenTickIcon,
  gameStatus: gameStatusIcon,
  gameId: gameIdIcon,
  dustbinOpen: dustbinOpenIcon,
  dustbinClose: dustbinCloseIcon,
  door: doorIcon,
  crown: crownIcon,
  chessboard: chessboardIcon,
  calendar: calendarIcon,
  bulb: bulbIcon,
  book: bookIcon,
  blueReload: blueReloadIcon,
  greenButton: greenButtonIcon,
  blueButton: blueButtonIcon,
  redButton: redButtonIcon,
  orangeButton: orangeButtonIcon,
  whiteKing: whiteKingIcon,
  whitePawn: whitePawnIcon,
  whiteBishop: whiteBishopIcon,
  whiteKnight: whiteKnightIcon,
  whiteRook: whiteRookIcon,
  whiteQueen: whiteQueenIcon,
  blackKing: blackKingIcon,
  blackPawn: blackPawnIcon,
  blackBishop: blackBishopIcon,
  blackKnight: blackKnightIcon,
  blackRook: blackRookIcon,
  blackQueen: blackQueenIcon
}

function Icon({
  name = "",
  height,
  width,
  className = ""
}) {
  return (
    <img
      src={iconMap[name]}
      alt={`${name} image`}
      width={width}
      height={height}
      className={`${className} object-contain`}
    />
  )
}
export default Icon;