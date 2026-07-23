import { useState } from "react";
import { initialBoard } from "../Chess/Board";
import { GenerateMoves } from "../Chess/GenerateMoves";
import { MovePiece } from "../Components/MovePiece";
import { IsKingInCheck } from "../Chess/IsKingInCheck";
import { CheckMate } from "../Chess/CheckMate";
import { pieceImages } from "../Chess/Constants";
import { useRef } from "react";
import { staleMate } from "../Chess/Stalemate";


export function useChessBoard({ turn, setTurn, checkMate, setCheckMate, isStaleMate, setIsStaleMate }) {

  const [selectedPiece, setSelectedPiece] = useState(null);
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState(initialBoard)
  const [promotion, setPromotion] = useState(null);
  const enPassant = useRef(null)
  const [isKingInCheck, setIsKingInCheck] = useState({
    inCheck: false,
    attackers: [],
    king: null
  })


  function HandleClick(rowIndex, colIndex) {
    if (checkMate || promotion || isStaleMate) {
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
      const updatedBoard = MovePiece(rowIndex, colIndex, selectedPiece, board,
        selectedMove?.castle, selectedMove?.enPassant);

      const selfCheck = IsKingInCheck(updatedBoard, turn, enPassant.current)

      if (selfCheck.inCheck) {
        setSelectedPiece(null);
        setMoves([]);
        return;
      }

      if (
        selectedPiece.type === "Pawn" &&
        (
          (selectedPiece.color === "White" && rowIndex === 0) ||
          (selectedPiece.color === "Black" && rowIndex === 7)
        )
      ) {
        setPromotion({
          row: rowIndex,
          col: colIndex
        });
        setBoard(updatedBoard);
        setSelectedPiece(null);
        setMoves([]);
        return;
      }

      if (
        selectedPiece.type === "Pawn" &&
        Math.abs(selectedPiece.row - rowIndex) === 2
      ) {
        enPassant.current = {
          row: rowIndex,
          col: colIndex,
          color: selectedPiece.color
        };
      }
      else {
        enPassant.current = null;
      }

      const nextTurn = turn === "White" ? "Black" : "White";
      const opponentCheck = IsKingInCheck(updatedBoard, nextTurn, enPassant.current);
      setIsKingInCheck(opponentCheck);
      setBoard(updatedBoard);
      setSelectedPiece(null);
      setMoves([]);
      if (opponentCheck.inCheck) {
        setCheckMate(CheckMate(updatedBoard, nextTurn, enPassant.current));
      }
      else {
        setCheckMate(false);
      }

      if (!opponentCheck.inCheck && staleMate(updatedBoard, nextTurn, enPassant.current)) {
        setIsStaleMate(true);
      }
      else {
        setIsStaleMate(false);
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
    const generatedMoves = GenerateMoves(newSelectedPiece, board, enPassant.current);
    setMoves(generatedMoves);

  }

  function promote(type) {
    const newBoard = board.map(row => [...row]);
    newBoard[promotion.row][promotion.col] = {
      ...newBoard[promotion.row][promotion.col],
      type: type,
      image: pieceImages[turn][type]
    }
    setBoard(newBoard);
    setPromotion(null);
    setMoves([]);
    setSelectedPiece(null);
    const nextTurn = turn === "White" ? "Black" : "White";

    const opponentCheck = IsKingInCheck(newBoard, nextTurn, enPassant.current);

    setIsKingInCheck(opponentCheck);

    if (opponentCheck.inCheck) {
      setCheckMate(CheckMate(newBoard, nextTurn, enPassant.current));
    }
    else {
      setCheckMate(false);
    }

    if (!opponentCheck.inCheck && staleMate(newBoard, nextTurn, enPassant.current)) {
      setIsStaleMate(true);
    }
    else {
      setIsStaleMate(false);
    }
    enPassant.current = null;
    setTurn(nextTurn);

  }
  return {
    board,
    HandleClick,
    selectedPiece,
    moves,
    promotion,
    enPassant,
    isKingInCheck,
    promote
  }
}