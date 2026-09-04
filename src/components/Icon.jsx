import trophyIcon from '../assets/Icons/trophy.png'
import statusWinIcon from '../assets/Icons/status-win.png'
import statusWinRateIcon from '../assets/Icons/status-win-rate.png'
import statuControllerIcon from '../assets/Icons/status-controller.png'
import sandClockIcon from '../assets/Icons/sand-clock.png'
import reloadIcon from '../assets/Icons/reload.png'
import redCrossIcon from '../assets/Icons/red-cross.png'
import pendingIcon from '../assets/Icons/pending.png'
import moveLogIcon from '../assets/Icons/move-log.png'
import logoChessIcon from '../assets/Icons/logo-chess-piece.png'
import greenTrophyIcon from '../assets/Icons/green-trophy.png'
import greenTickIcon from '../assets/Icons/green-tick.png'
import gameStatusIcon from '../assets/Icons/game-status.png'
import gameIdIcon from '../assets/Icons/game-id.png'
import dustbinOpenIcon from '../assets/Icons/dustbin-open.png'
import dustbinCloseIcon from '../assets/Icons/dustbin-close.png'
import doorIcon from '../assets/Icons/door.png'
import crownIcon from '../assets/Icons/crown.png'
import chessboardIcon from '../assets/Icons/chessboard.png'
import calendarIcon from '../assets/Icons/calendar.png'
import redPlayerIcon from '../assets/Icons/red-player.png'
import bulbIcon from '../assets/Icons/bulb.png'
import whitePersonIcon from '../assets/Icons/white-person.png'
import bookIcon from '../assets/Icons/book.png'
import whiteClockIcon from '../assets/Icons/white-clock.png'
import blueReloadIcon from '../assets/Icons/blue-reload.png'
import greenButtonIcon from '../assets/Icons/green-button.png'
import blueButtonIcon from '../assets/Icons/blue-button.png'
import redButtonIcon from '../assets/Icons/red-button.png'
import whiteHomeIcon from '../assets/Icons/white-home.png'
import orangeButtonBorderIcon from '../assets/Icons/orange-button-border.png'
import whiteKingIcon from '../assets/Icons/white-king.png'
import whitePawnIcon from '../assets/Icons/white-pawn.png'
import whiteBishopIcon from '../assets/Icons/white-bishop.png'
import whiteKnightIcon from '../assets/Icons/white-knight.png'
import whiteRookIcon from '../assets/Icons/white-rook.png'
import whiteQueenIcon from '../assets/Icons/white-queen.png'
import blackKingIcon from '../assets/Icons/black-king.png'
import blackPawnIcon from '../assets/Icons/black-pawn.png'
import blackBishopIcon from '../assets/Icons/black-bishop.png'
import blackKnightIcon from '../assets/Icons/black-knight.png'
import blackRookIcon from '../assets/Icons/black-rook.png'
import blackQueenIcon from '../assets/Icons/black-queen.png'
import bluePlayerIcon from '../assets/Icons/blue-player.png'
import whiteFlagIcon from '../assets/Icons/white-flag.png'
import openIcon from '../assets/Icons/open.png'
import greenPawnIcon from '../assets/Icons/green-pawn.png'
import orangeRookIcon from '../assets/Icons/orange-rook.png'
import yellowKnightIcon from '../assets/Icons/yellow-knight.png'
import redQueenIcon from '../assets/Icons/red-queen.png'
import homePageIcon from '../assets/Icons/home-page.png'
import greenBoardIcon from '../assets/Icons/green-board.png'
import statsIcon from '../assets/Icons/stats.png'
import purpleQueenIcon from '../assets/Icons/purple-queen.png'
import whiteStatsIcon from '../assets/Icons/white-stats.png'
import orangeButtonIcon from '../assets/Icons/orange-button.png'

const iconMap = {
  trophy: trophyIcon,
  homePage: homePageIcon,
  purpleQueen: purpleQueenIcon,
  stats: statsIcon,
  greenBoard: greenBoardIcon,
  statusWin: statusWinIcon,
  whiteStats: whiteStatsIcon,
  statusWinRate: statusWinRateIcon,
  statuController: statuControllerIcon,
  sandClock: sandClockIcon,
  reload: reloadIcon,
  redPlayer: redPlayerIcon,
  redCross: redCrossIcon,
  pending: pendingIcon,
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
  orangeButtonBorder: orangeButtonBorderIcon,
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
  blackQueen: blackQueenIcon,
  greenPawn: greenPawnIcon,
  orangeRook: orangeRookIcon,
  yellowKnight: yellowKnightIcon,
  redQueen: redQueenIcon
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