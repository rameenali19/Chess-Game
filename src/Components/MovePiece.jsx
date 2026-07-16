export function MovePiece(rowIndex, colIndex, selectedPiece, board) {

  const newBoard = board.map(row => [...row])

  newBoard[rowIndex][colIndex] =

    newBoard[selectedPiece.row][selectedPiece.col];

  newBoard[selectedPiece.row][selectedPiece.col] = ".";

  return newBoard;

}