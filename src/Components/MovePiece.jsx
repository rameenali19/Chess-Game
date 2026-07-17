export function MovePiece(rowIndex, colIndex, selectedPiece, board, castle) {

  const newBoard = board.map(row => [...row])

  if (castle === "kingSide") {
    newBoard[rowIndex][colIndex] = {
      ...selectedPiece,
      row: rowIndex,
      col: colIndex,
      hasMoved: true
    }
    newBoard[selectedPiece.row][selectedPiece.col] = ".";

    const rook = newBoard[selectedPiece.row][7];

    newBoard[selectedPiece.row][5] = {
      ...rook,
      row: selectedPiece.row,
      col: 5,
      hasMoved: true
    }
    newBoard[selectedPiece.row][7] = "."
    return newBoard
  }

  else if (castle === "queenSide") {
    newBoard[rowIndex][colIndex] = {
      ...selectedPiece,
      row: rowIndex,
      col: colIndex,
      hasMoved: true
    }
    newBoard[selectedPiece.row][selectedPiece.col] = ".";

    const rook = newBoard[selectedPiece.row][0];

    newBoard[selectedPiece.row][3] = {
      ...rook,
      row: selectedPiece.row,
      col: 3,
      hasMoved: true
    }
    newBoard[selectedPiece.row][0] = "."
    return newBoard
  }

  newBoard[rowIndex][colIndex] = {
    ...newBoard[selectedPiece.row][selectedPiece.col],
    row: rowIndex,
    col: colIndex,
    hasMoved: true
  };

  newBoard[selectedPiece.row][selectedPiece.col] = ".";

  return newBoard;

}