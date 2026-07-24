import Square from "./Square";
import Promotion from "../Screens/PromotionScreen";
import { useChessBoard } from "../Hooks/ChessBoardHook";
import { useEffect } from "react";
import ApiChess from "../api/apiChess";

function ChessBoard({ turn, setTurn, checkMate, setCheckMate, isStaleMate, setIsStaleMate, id }) {

  const {
    board,
    HandleClick,
    selectedPiece,
    moves,
    promotion,
    enPassant,
    isKingInCheck,
    promote
  } = useChessBoard({
    turn,
    setTurn,
    checkMate,
    setCheckMate,
    isStaleMate,
    setIsStaleMate,
    id
  })

  return (
    <>
      {
        board.map((row, rowIndex) =>
          row.map((piece, colIndex) =>
          (<Square
            key={`${rowIndex} ${colIndex}`}
            row={rowIndex}
            col={colIndex}
            piece={piece}
            onClick={() => HandleClick(rowIndex, colIndex)}
            selected={selectedPiece &&
              selectedPiece.row === rowIndex &&
              selectedPiece.col === colIndex
            }
            possibleMoves={moves.some(move =>
              move.row === rowIndex &&
              move.col === colIndex

            )}
            possibleCaptures={moves.some(move =>
              move.row === rowIndex &&
              move.col === colIndex &&
              piece !== "."
            )}
            kingInCheck={
              isKingInCheck.inCheck &&
              rowIndex === isKingInCheck.king?.row &&
              colIndex === isKingInCheck.king?.col
            }
            checkingPiece={isKingInCheck.attackers.some(attacker =>
              rowIndex === attacker.row &&
              colIndex === attacker.col
            )

            }
          />
          )
          )
        )
      }
      {

        <Promotion
          turn={turn}
          promote={promote}
          open={promotion}
        />

      }
    </>
  )
}
export default ChessBoard;