import { useState } from "react";
import { initialBoard } from "../Chess/Board";
import Square from "./Square";
import { GenerateMoves } from "../Chess/GenerateMoves";
import { MovePiece } from "./MovePiece";
import { IsKingInCheck } from "../Chess/IsKingInCheck";
import { CheckMate } from "../Chess/CheckMate";

function ChessBoard({ turn, setTurn, checkMate, setCheckMate }) {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState(initialBoard)
  const [isKingInCheck, setIsKingInCheck] = useState({
    inCheck: false,
    attackers: [],
    king: null
  })

  function HandleClick(rowIndex, colIndex) {
    if (checkMate) {
      return;
    }
    const validMove = moves.some(move =>
      move.row === rowIndex &&
      move.col === colIndex
    )
    if (validMove && selectedPiece) {
      const selectedMove = moves.find(move =>
        move.row === rowIndex &&
        move.col === colIndex
      );
      const updatedBoard = MovePiece(rowIndex, colIndex, selectedPiece, board, selectedMove?.castle);

      const selfCheck = IsKingInCheck(updatedBoard, turn)

      if (selfCheck.inCheck) {
        setSelectedPiece(null);
        setMoves([]);

        return;
      }

      const nextTurn = turn === "White" ? "Black" : "White";
      const opponentCheck = IsKingInCheck(updatedBoard, nextTurn);
      setIsKingInCheck(opponentCheck);
      setBoard(updatedBoard);
      setSelectedPiece(null);
      setMoves([]);
      if (opponentCheck.inCheck) {
        const checkMate = CheckMate(updatedBoard, nextTurn);
        setCheckMate(checkMate)
        // if (checkMate) {
        //   return
        // }
      }
      setTurn(nextTurn);
    }
    selectPieceFunction(rowIndex, colIndex);
  }


  function selectPieceFunction(rowIndex, colIndex) {
    const piece = board[rowIndex][colIndex]
    if (piece === ".") return;
    if (piece.color !== turn) return;
    const newSelectedPiece = {
      ...piece,
      row: rowIndex,
      col: colIndex
    };
    setSelectedPiece(newSelectedPiece)
    const generatedMoves = GenerateMoves(newSelectedPiece, board);
    setMoves(generatedMoves);

  }


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

    </>
  )
}
export default ChessBoard;