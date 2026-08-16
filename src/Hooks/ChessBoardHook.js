import { useState, useEffect } from "react";
import { initialBoard } from "../Chess/board";
import { generateMoves } from "../Chess/generateMoves";
import { MovePiece } from "../Components/MovePiece";
import { IsKingInCheck } from "../Chess/IsKingInCheck";
import { checkmateLogic } from "../Chess/checkmateLogic";
import { pieceImages } from "../Chess/constants";
import { useRef } from "react";
import { stalemateLogic } from "../Chess/stalemateLogic";
import ApiChess from "../api/apiChess";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import SocketClass from "../Socket/socketClass";
import socket from "../Socket/socket";

export function useChessBoard({ turn, setTurn, checkMate, setCheckMate, isStaleMate, setIsStaleMate, id, userColor, opponentColor, setUserColor, setOpponentColor, mode, setMode, winner, setWinner, resign, setResign, endReason, setEndReason, setMoveHistory }) {

  const [selectedPiece, setSelectedPiece] = useState(null);
  const [moves, setMoves] = useState([]);
  const [board, setBoard] = useState(initialBoard)
  const [promotion, setPromotion] = useState(null);
  const enPassant = useRef(null)
  const [loaded, setLoaded] = useState(false);
  const fromSocket = useRef(false);
  const { guestId } = useContext(UserContext)
  const [kingCheckState, setKingCheckState] = useState({
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
      setMode(data.mode)
      setUserColor(data.player_color)
      setBoard(data.game_board);
      setTurn(data.current_turn)
      setEndReason(data.end_reason)
      setPromotion(data.promotion ? JSON.parse(data.promotion) : null)
      enPassant.current = data.en_passant
      setWinner(data.winner)

      const inCheck = IsKingInCheck(data.game_board, data.current_turn, enPassant.current)
      setKingCheckState(inCheck)

      if (inCheck.inCheck) { setCheckMate(checkmateLogic(data.game_board, data.current_turn, enPassant.current)) }
      else { setCheckMate(false) }

      setIsStaleMate(
        !inCheck.inCheck && (
          stalemateLogic(data.game_board, data.current_turn, enPassant.current)))

      setResign(data.end_reason === "resignation")
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
      promotion: gameData.promotion,
      winner: gameData.winner,
      endReason: gameData.endReason
    })
  }

  function coordinateConversion(row, col) {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    return `${alphabets[col]}${8 - row}`
  }

  function resetData(gameData) {
    setBoard(gameData.board);
    setTurn(gameData.turn);
    setPromotion(gameData.promotion);
    setWinner(gameData.winner)
    setResign(gameData.endReason === "resignation")
    setEndReason(gameData.endReason)
    enPassant.current = gameData.enPassant;
    const inCheck = IsKingInCheck(gameData.board, gameData.turn, enPassant.current)
    setKingCheckState(inCheck)

    if (inCheck.inCheck) { setCheckMate(checkmateLogic(gameData.board, gameData.turn, enPassant.current)) }
    else { setCheckMate(false) }

    setIsStaleMate(
      !inCheck.inCheck && (
        stalemateLogic(gameData.board, gameData.turn, enPassant.current)))
  }

  useEffect(() => {
    socket.on("gameUpdate", (gameData) => {
      fromSocket.current = true
      resetData(gameData)
    });
    return () => { socket.off("gameUpdate"); };
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
      status: checkMate || isStaleMate || resign ? "finished" : "unfinished",
      board: board,
      enPassant: enPassant.current,
      promotion: promotion,
      winner: checkMate || isStaleMate || resign ? winner : null,
      endReason: resign ? "resignation" : checkMate ? "checkmate" : isStaleMate ? "stalemate" : null
    }
    if (mode === "single player") { updateGame(gameData) }
    if (mode === "multiplayer") {
      const socketClass = SocketClass.getObject();
      socketClass.updateGame(id, gameData)
    }
  }, [board, winner, resign])

  useEffect(() => {
    if (resign) {
      setSelectedPiece(null);
      setMoves([]);
      setPromotion(null);
    }
  }, [resign]);

  async function createMove(moveData) {
    const move = ApiChess.getAPI();
    const data = await move.createMove(id, {
      pieceColor: moveData.pieceColor,
      pieceType: moveData.pieceType,
      source: moveData.source,
      destination: moveData.destination
    })
  }

  function moveLogger(fromRow, fromCol, toRow, toCol) {
    const source = coordinateConversion(fromRow, fromCol)
    const destination = coordinateConversion(toRow, toCol)
    const moveData = {
      pieceColor: selectedPiece.color,
      pieceType: selectedPiece.type,
      source: source,
      destination: destination,
    }
    setMoveHistory(prev => [...prev, moveData])
    if (mode === "single player") { createMove(moveData) }
    if (mode === "multiplayer") {
      const socketClass = SocketClass.getObject();
      socketClass.createMove(id, moveData)
    }
  }


  function HandleClick(rowIndex, colIndex) {
    if (checkMate || promotion || isStaleMate || resign) {
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
      moveLogger(
        selectedPiece.row,
        selectedPiece.col,
        rowIndex,
        colIndex
      );

      const nextTurn = turn === "White" ? "Black" : "White";
      if (
        selectedPiece.type === "Pawn" &&
        (
          (selectedPiece.color === "White" && rowIndex === 0) ||
          (selectedPiece.color === "Black" && rowIndex === 7)
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
      setKingCheckState(opponentCheck);
      setBoard(updatedBoard);
      setSelectedPiece(null);
      setMoves([]);
      if (opponentCheck.inCheck) {
        const mate = (checkmateLogic(updatedBoard, nextTurn, enPassant.current));
        setCheckMate(mate)
        if (mate) {
          setWinner(turn)
          setEndReason("checkmate");
        }
      }
      else {
        setCheckMate(false);
      }

      if (!opponentCheck.inCheck && stalemateLogic(updatedBoard, nextTurn, enPassant.current)) {
        setWinner("Draw")
        setIsStaleMate(true);
        setEndReason("stalemate");
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
    const generatedMoves = generateMoves(newSelectedPiece, board, enPassant.current);
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

    setKingCheckState(opponentCheck);

    if (opponentCheck.inCheck) {
      const mate = (checkmateLogic(newBoard, nextTurn, enPassant.current));
      setCheckMate(mate)
      if (mate) {
        setWinner(turn)
        setEndReason("checkmate");
      }
    }
    else {
      setCheckMate(false);
    }

    if (!opponentCheck.inCheck && stalemateLogic(newBoard, nextTurn, enPassant.current)) {
      setWinner("Draw")
      setIsStaleMate(true);
      setEndReason("stalemate");
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
    kingCheckState,
    promote,

  }

}