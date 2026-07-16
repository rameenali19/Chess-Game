import { useState } from "react";
import { initialBoard } from "../Chess/Board";
import Square from "./Square";
import { GenerateMoves } from "../Chess/GenerateMoves";

function ChessBoard() {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState(initialBoard)

  function HandleClick(rowIndex, colIndex) {
    const validMove = moves.some(move =>
      move.row === rowIndex &&
      move.col === colIndex
    )
    if (validMove && selectedPiece) {
      movePiece(rowIndex, colIndex);
    }
    selectPieceFunction(rowIndex, colIndex);

  }

  function selectPieceFunction(rowIndex, colIndex) {
    const piece = board[rowIndex][colIndex]
    if (piece === ".") return;
    const newSelectedPiece = {
      ...piece,
      row: rowIndex,
      col: colIndex
    };
    setSelectedPiece(newSelectedPiece)
    console.log(newSelectedPiece)
    const generatedMoves = GenerateMoves(newSelectedPiece, board);
    setMoves(generatedMoves);

  }

  function movePiece(rowIndex, colIndex) {
    const newBoard = board.map(row => [...row])
    newBoard[rowIndex][colIndex] =
      newBoard[selectedPiece.row][selectedPiece.col];
    newBoard[selectedPiece.row][selectedPiece.col] = ".";

    setBoard(newBoard);
    setSelectedPiece(null);
    setMoves([]);
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
          />
          )
          )
        )
      }
    </>
  )
}
export default ChessBoard;