import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { initialBoard } from "../chess/board";
import { generateMoves } from "../chess/generateMoves";
import { movePiece } from "../chess/movePiece";
import { isKingInCheck } from "../chess/isKingInCheck";
import { checkmateLogic } from "../chess/checkmateLogic";
import { pieceImages } from "../chess/constants";
import { stalemateLogic } from "../chess/stalemateLogic";
import ApiChess from "../api/apiChess";
import socketService from "../socket/socketService";
import { bestMove } from "../ai/bestMove";

export function useChessBoard({ turn, setTurn, checkmate, setCheckmate, stalemate, setStalemate, id, userColor, opponentColor, setUserColor, setOpponentColor, mode, setMode, winner, setWinner, resign, setResign, endReason, setEndReason, setMoveHistory }) {

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

      const inCheck = isKingInCheck(data.game_board, data.current_turn, enPassant.current)
      setKingCheckState(inCheck)

      if (inCheck.inCheck) { setCheckmate(checkmateLogic(data.game_board, data.current_turn, enPassant.current)) }
      else { setCheckmate(false) }

      setStalemate(
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
    const inCheck = isKingInCheck(gameData.board, gameData.turn, enPassant.current)
    setKingCheckState(inCheck)

    if (inCheck.inCheck) { setCheckmate(checkmateLogic(gameData.board, gameData.turn, enPassant.current)) }
    else { setCheckmate(false) }

    setStalemate(
      !inCheck.inCheck && (
        stalemateLogic(gameData.board, gameData.turn, enPassant.current)))
  }

  useEffect(() => {
    function handleGame(gameData) {
      fromSocket.current = true
      resetData(gameData)
    }
    socketService.onGameUpdate(handleGame);
    return () => {
      socketService.offGameUpdate(handleGame);
    };
  }, [])

  useEffect(() => {
    return () => {
      if (!id) return
      socketService.leavingGame(id)
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
      status: checkmate || stalemate || resign ? "finished" : "unfinished",
      board: board,
      enPassant: enPassant.current,
      promotion: promotion,
      winner: checkmate || stalemate || resign ? winner : null,
      endReason: resign ? "resignation" : checkmate ? "checkmate" : stalemate ? "stalemate" : null
    }
    if (mode === "singleplayer" || mode === "ai") { updateGame(gameData) }
    if (mode === "multiplayer") {

      socketService.updateGame(id, gameData)
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


  useEffect(() => {
    if (mode !== "ai") return;
    if (turn !== opponentColor) return;

    const result = bestMove(board, opponentColor, enPassant.current)
    if (!result?.move) return

    const aiMove = result.move;

    setTimeout(() => {
      applyMove(aiMove.piece,
        aiMove.destination,
        aiMove.destination.row,
        aiMove.destination.col,
        true
      )
    }, 1000);
  }, [turn])


  function moveLogger(selectedPiece, fromRow, fromCol, toRow, toCol) {
    const source = coordinateConversion(fromRow, fromCol)
    const destination = coordinateConversion(toRow, toCol)
    const moveData = {
      pieceColor: selectedPiece.color,
      pieceType: selectedPiece.type,
      source: source,
      destination: destination,
    }
    setMoveHistory(prev => [...prev, moveData])
    if (mode === "singleplayer" || mode === "ai") { createMove(moveData) }
    if (mode === "multiplayer") {

      socketService.createMove(id, moveData)
    }
  }


  function applyMove(selectedPiece, selectedMove, rowIndex, colIndex, aiPromotion = false) {

    const updatedBoard = movePiece(rowIndex, colIndex, selectedPiece, board,
      selectedMove?.castle, selectedMove?.enPassant);
    const selfCheck = isKingInCheck(updatedBoard, turn, enPassant.current)

    if (selfCheck.inCheck) {
      setSelectedPiece(null);
      setMoves([]);
      return;
    }
    moveLogger(
      selectedPiece,
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
      if (!aiPromotion) {
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

      updatedBoard[rowIndex][colIndex] = {
        ...updatedBoard[rowIndex][colIndex],
        type: "Queen",
        image: pieceImages[selectedPiece.color]["Queen"]
      }
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


    const opponentCheck = isKingInCheck(updatedBoard, nextTurn, enPassant.current);
    setKingCheckState(opponentCheck);
    setBoard(updatedBoard);
    setSelectedPiece(null);
    setMoves([]);
    if (opponentCheck.inCheck) {
      const mate = (checkmateLogic(updatedBoard, nextTurn, enPassant.current));
      setCheckmate(mate)
      if (mate) {
        setWinner(turn)
        setEndReason("checkmate");
      }
    }
    else {
      setCheckmate(false);
    }

    if (!opponentCheck.inCheck && stalemateLogic(updatedBoard, nextTurn, enPassant.current)) {
      setWinner("Draw")
      setStalemate(true);
      setEndReason("stalemate");
    }
    else {
      setStalemate(false);
    }

    setTurn(nextTurn);
  }


  function handleClick(rowIndex, colIndex) {
    if (checkmate || promotion || stalemate || resign) {
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

      applyMove(selectedPiece, selectedMove, rowIndex, colIndex)
      return;
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

    const opponentCheck = isKingInCheck(newBoard, nextTurn, enPassant.current);

    setKingCheckState(opponentCheck);

    if (opponentCheck.inCheck) {
      const mate = (checkmateLogic(newBoard, nextTurn, enPassant.current));
      setCheckmate(mate)
      if (mate) {
        setWinner(turn)
        setEndReason("checkmate");
      }
    }
    else {
      setCheckmate(false);
    }

    if (!opponentCheck.inCheck && stalemateLogic(newBoard, nextTurn, enPassant.current)) {
      setWinner("Draw")
      setStalemate(true);
      setEndReason("stalemate");
    }
    else {
      setStalemate(false);
    }
    enPassant.current = null;
    setTurn(nextTurn);

  }
  return {
    board,
    handleClick,
    selectedPiece,
    moves,
    promotion,
    enPassant,
    kingCheckState,
    promote,

  }

}