import { useState } from "react";
import { initialBoard } from "../Chess/Board";
import Square from "./Square";
import { GenerateMoves } from "../Chess/GenerateMoves";
import { MovePiece } from "./MovePiece";

function ChessBoard() {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState(initialBoard)
  const [turn, setTurn] = useState("White")


  function HandleClick(rowIndex, colIndex) {
    const validMove = moves.some(move =>
      move.row === rowIndex &&
      move.col === colIndex
    )
    if (validMove && selectedPiece) {
      const updatedBoard = MovePiece(rowIndex, colIndex, selectedPiece, board);
      setBoard(updatedBoard);
      setSelectedPiece(null);
      setMoves([]);

      setTurn(prev => prev === "White" ? "Black" : "White");
      return
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
              piece !== "." &&
              piece.color !== selectedPiece?.color
            )}
          />
          )
          )
        )
      }
    </>
  )
}
export default ChessBoard;