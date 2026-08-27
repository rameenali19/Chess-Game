import trophyIcon from '../assets/icons/trophy.png'
import statusWinIcon from '../assets/icons/status-win.png'
import statusWinRateIcon from '../assets/icons/status-win-rate.png'
import statuControllerIcon from '../assets/icons/status-controller.png'
import singlePlayerIcon from '../assets/icons/single-player.png'
import sandClockIcon from '../assets/icons/sand-clock.png'
import reloadIcon from '../assets/icons/reload.png'
import redCrossIcon from '../assets/icons/red-cross.png'
import pendingIcon from '../assets/icons/pending.png'
import multiplayerIcon from '../assets/icons/multiplayer.png'
import moveLogIcon from '../assets/icons/move-log.png'
import logoChessIcon from '../assets/icons/logo-chess-piece.png'
import greenTrophyIcon from '../assets/icons/green-trophy.png'
import greenTickIcon from '../assets/icons/green-tick.png'
import gameStatusIcon from '../assets/icons/game-status.png'
import gameIdIcon from '../assets/icons/game-id.png'
import dustbinOpenIcon from '../assets/icons/dustbin-open.png'
import dustbinCloseIcon from '../assets/icons/dustbin-close.png'
import doorIcon from '../assets/icons/door.png'
import crownIcon from '../assets/icons/crown.png'
import chessboardIcon from '../assets/icons/chessboard.png'
import calendarIcon from '../assets/icons/calendar.png'
import bulbIcon from '../assets/icons/bulb.png'
import whitePersonIcon from '../assets/icons/white-person.png'
import bookIcon from '../assets/icons/book.png'
import whiteClockIcon from '../assets/icons/white-clock.png'
import blueReloadIcon from '../assets/icons/blue-reload.png'
import greenButtonIcon from '../assets/icons/green-button.png'
import blueButtonIcon from '../assets/icons/blue-button.png'
import redButtonIcon from '../assets/icons/red-button.png'
import whiteHomeIcon from '../assets/icons/white-home.png'
import orangeButtonIcon from '../assets/icons/orange-button.png'
import whiteKingIcon from '../assets/icons/white-king.png'
import whitePawnIcon from '../assets/icons/white-pawn.png'
import whiteBishopIcon from '../assets/icons/white-bishop.png'
import whiteKnightIcon from '../assets/icons/white-knight.png'
import whiteRookIcon from '../assets/icons/white-rook.png'
import whiteQueenIcon from '../assets/icons/white-queen.png'
import blackKingIcon from '../assets/icons/black-king.png'
import blackPawnIcon from '../assets/icons/black-pawn.png'
import blackBishopIcon from '../assets/icons/black-bishop.png'
import blackKnightIcon from '../assets/icons/black-knight.png'
import blackRookIcon from '../assets/icons/black-rook.png'
import blackQueenIcon from '../assets/icons/black-queen.png'
import bluePlayerIcon from '../assets/icons/blue-player.png'
import whiteFlagIcon from '../assets/icons/white-flag.png'
import openIcon from '../assets/Icons/open.png'

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
  whiteFlag: whiteFlagIcon,
  moveLog: moveLogIcon,
  logoChess: logoChessIcon,
  greenTrophy: greenTrophyIcon,
  bluePlayer: bluePlayerIcon,
  greenTick: greenTickIcon,
  gameStatus: gameStatusIcon,
  gameId: gameIdIcon,
  open: openIcon,
  dustbinOpen: dustbinOpenIcon,
  dustbinClose: dustbinCloseIcon,
  whitePerson: whitePersonIcon,
  door: doorIcon,
  crown: crownIcon,
  chessboard: chessboardIcon,
  calendar: calendarIcon,
  bulb: bulbIcon,
  book: bookIcon,
  whiteClock: whiteClockIcon,
  blueReload: blueReloadIcon,
  greenButton: greenButtonIcon,
  blueButton: blueButtonIcon,
  redButton: redButtonIcon,
  orangeButton: orangeButtonIcon,
  whiteHome: whiteHomeIcon,
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
  className = "",
  onClick = () => { }
}) {
  return (
    <img
      src={iconMap[name]}
      alt={`${name} image`}
      className={`${className} object-contain`}
      onClick={onClick}
    />
  )
}
export default Icon;