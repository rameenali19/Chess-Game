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
import SocketClass from "../Socket/socketClass";
import socket from "../Socket/socket";

export function useChessBoard({ turn, setTurn, checkMate, setCheckMate, isStaleMate, setIsStaleMate, id, userColor, opponentColor, setUserColor, setOpponentColor, mode, setMode, }) {

  const [selectedPiece, setSelectedPiece] = useState(null);
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState(initialBoard)
  const [promotion, setPromotion] = useState(null);
  const enPassant = useRef(null)
  const [loaded, setLoaded] = useState(false);
  const fromSocket = useRef(false);
  const { guestId } = useContext(UserContext)
  const [isKingInCheck, setIsKingInCheck] = useState({
    inCheck: false,
    attackers: [],
    king: null
  })

  useEffect(() => {

    async function getGameAndPlayer() {
      const game = ApiChess.getAPI();
      console.log("useChessBoard mounted with id:", id, typeof id);
      const data = await game.getGameAndPlayer(id, guestId);
      const opponentColor = data.player_color === "White" ? "Black" : "White"
      setOpponentColor(opponentColor)
      setMode(data.mode)
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

  async function updateGame(gameData) {

    const game = ApiChess.getAPI();
    const data = await game.updateGame(id, {
      currentTurn: gameData.turn,
      gameStatus: gameData.status,
      gameBoard: gameData.board,
      enPassant: gameData.enPassant,
      promotion: gameData.promotion
    })

  }

  function resetData(gameData) {

    setBoard(gameData.board);
    setTurn(gameData.turn);
    setPromotion(gameData.promotion);
    enPassant.current = gameData.enPassant;
    const inCheck = IsKingInCheck(gameData.board, gameData.turn, enPassant.current)
    setIsKingInCheck(inCheck)

    if (inCheck.inCheck) {
      setCheckMate(CheckMate(gameData.board, gameData.turn, enPassant.current))
    } else {
      setCheckMate(false)
    }

    setIsStaleMate(
      !inCheck.inCheck && (
        staleMate(gameData.board, gameData.turn, enPassant.current)
      )
    )

  }

  useEffect(() => {
    socket.on("gameUpdate", (gameData) => {
      fromSocket.current = true
      resetData(gameData)
    });
  }, [])

  useEffect(() => {
    return () => {
      if (!id) return
      const socketClass = SocketClass.getObject();
      socketClass.leavingGame(id)
    };
  }, [id]);


  useEffect(() => {

    if (!loaded || !id) return;
    if (fromSocket.current) {
      fromSocket.current = false
      return
    }
    const gameData = {
      turn: turn,
      status: checkMate ? "finished" : isStaleMate ? "finished" : "unfinished",
      board: board,
      enPassant: enPassant.current,
      promotion: promotion
    }
    if (mode === "single player") {
      updateGame(gameData)
    }
    if (mode === "multiplayer") {
      const socketClass = SocketClass.getObject();
      socketClass.updateGame(id, gameData)
    }

  }, [board])



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
    if (mode === "multiplayer") {
      if (userColor !== turn) return;
      if (piece.color !== userColor) return;
    }
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
    promote,

  }
}