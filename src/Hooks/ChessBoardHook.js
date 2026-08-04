import { useState, useEffect } from "react";
import { initialBoard } from "../Chess/Board";
import { GenerateMoves } from "../Chess/GenerateMoves";
import { MovePiece } from "../Components/MovePiece";
import { IsKingInCheck } from "../Chess/IsKingInCheck";
import { CheckMate } from "../Chess/CheckMate";
import { pieceImages } from "../Chess/Constants";
import { useRef } from "react";
import { staleMate } from "../Chess/Stalemate";
import ApiChess from "../api/apiChess";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

export function useChessBoard({ turn, setTurn, checkMate, setCheckMate, isStaleMate, setIsStaleMate, id, userColor, opponentColor, setUserColor, setOpponentColor }) {

  const [selectedPiece, setSelectedPiece] = useState(null);
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState(initialBoard)
  const [promotion, setPromotion] = useState(null);
  const enPassant = useRef(null)
  const [loaded, setLoaded] = useState(false);
  const { guestId } = useContext(UserContext)
  const [isKingInCheck, setIsKingInCheck] = useState({
    inCheck: false,
    attackers: [],
    king: null
  })

  useEffect(() => {

    async function getGameAndPlayer() {
      const game = ApiChess.getAPI();

      const data = await game.getGameAndPlayer(id, guestId);
      const opponentColor = data.player_color === "White" ? "Black" : "White"
      setOpponentColor(opponentColor)
      setUserColor(data.player_color)
      setBoard(data.game_board);
      setTurn(data.current_turn)
      setPromotion(data.promotion)
      enPassant.current = data.en_passant


      const inCheck = IsKingInCheck(data.game_board, data.current_turn, enPassant.current)
      setIsKingInCheck(inCheck)

      if (inCheck.inCheck) {
        setCheckMate(CheckMate(data.game_board, data.current_turn, enPassant.current))
      } else {
        setCheckMate(false)
      }

      setIsStaleMate(
        !inCheck.inCheck && (
          staleMate(data.game_board, data.current_turn, enPassant.current)
        )
      )

      setLoaded(true)
    }
    getGameAndPlayer();
  }, [id])

  async function updateGame(currentTurn, gameStatus, gameBoard, enPassant, promotion) {
    const game = ApiChess.getAPI();
    const data = await game.updateGame(id, {
      currentTurn: currentTurn,
      gameStatus: gameStatus,
      gameBoard: gameBoard,
      enPassant: enPassant,
      promotion: promotion
    })

  }

  useEffect(() => {
    if (!loaded || !id) return;
    updateGame(
      turn,
      checkMate ?
        "finished"
        : isStaleMate ?
          "finished"
          : "unfinished",
      board,
      enPassant.current,
      promotion
    )

  }, [board, turn, isStaleMate, checkMate, loaded, promotion])


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

      const nextTurn = turn === "White" ? "Black" : "White";


      if (
        selectedPiece.type === "Pawn" &&
        (
          (selectedPiece.color === userColor && rowIndex === 0) ||
          (selectedPiece.color === opponentColor && rowIndex === 7)
        )
      ) {
        const p = {
          row: rowIndex,
          col: colIndex,
        };

        setPromotion(p);
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