// import Square from "./Square";
// import Promotion from "../Screens/PromotionScreen";
// import { useChessBoard } from "../Hooks/ChessBoardHook";
// import { useEffect } from "react";
// import ApiChess from "../api/apiChess";


// function ChessBoard({ turn, setTurn, checkMate, setCheckMate, isStaleMate, setIsStaleMate, id, userColor, opponentColor, setUserColor, setOpponentColor }) {
//   const {
//     board,
//     HandleClick,
//     selectedPiece,
//     moves,
//     promotion,
//     enPassant,
//     isKingInCheck,
//     promote,
//   } = useChessBoard({
//     turn,
//     setTurn,
//     checkMate,
//     setCheckMate,
//     isStaleMate,
//     setIsStaleMate,
//     id,
//     userColor,
//     opponentColor,
//     setUserColor,
//     setOpponentColor
//   })


//   const displayBoard =
//     userColor === "White"
//       ? board
//       : [...board]
//         .reverse()
//         .map((row) => [...row].reverse());

//   return (
//     <>
//       {
//         displayBoard.map((row, rowIndex) =>
//           row.map((piece, colIndex) =>


//           (<Square
//             key={`${rowIndex} ${colIndex}`}
//             row={rowIndex}
//             col={colIndex}
//             piece={piece}
//             onClick={() => HandleClick(rowIndex, colIndex)}
//             selected={selectedPiece &&
//               selectedPiece.row === rowIndex &&
//               selectedPiece.col === colIndex
//             }
//             possibleMoves={moves.some(move =>
//               move.row === rowIndex &&
//               move.col === colIndex

//             )}
//             possibleCaptures={moves.some(move =>
//               move.row === rowIndex &&
//               move.col === colIndex &&
//               piece !== "."
//             )}
//             kingInCheck={
//               isKingInCheck.inCheck &&
//               rowIndex === isKingInCheck.king?.row &&
//               colIndex === isKingInCheck.king?.col
//             }
//             checkingPiece={isKingInCheck.attackers.some(attacker =>
//               rowIndex === attacker.row &&
//               colIndex === attacker.col
//             )

//             }
//             userColor={userColor}
//           />
//           )
//           )
//         )
//       }
//       <Promotion
//         turn={turn}
//         promote={promote}
//         open={promotion}
//       />
//     </>
//   )
// }
// export default ChessBoard;

import Square from "./Square";
import Promotion from "../Screens/PromotionScreen";
import { useChessBoard } from "../Hooks/ChessBoardHook";

function ChessBoard({
  turn,
  setTurn,
  checkMate,
  setCheckMate,
  isStaleMate,
  setIsStaleMate,
  id,
  userColor,
  opponentColor,
  setUserColor,
  setOpponentColor,
}) {
  const {
    board,
    HandleClick,
    selectedPiece,
    moves,
    promotion,
    enPassant,
    isKingInCheck,
    promote,
  } = useChessBoard({
    turn,
    setTurn,
    checkMate,
    setCheckMate,
    isStaleMate,
    setIsStaleMate,
    id,
    userColor,
    opponentColor,
    setUserColor,
    setOpponentColor,
  });

  const displayBoard =
    userColor === "White"
      ? board
      : [...board].reverse().map((row) => [...row].reverse());

  return (
    <>
      {displayBoard.map((row, rowIndex) =>
        row.map((piece, colIndex) => {
          const realRow =
            userColor === "White" ? rowIndex : 7 - rowIndex;

          const realCol =
            userColor === "White" ? colIndex : 7 - colIndex;

          return (
            <Square
              key={`${realRow}-${realCol}`}
              row={realRow}
              col={realCol}
              piece={piece}
              onClick={() => HandleClick(realRow, realCol)}
              selected={
                selectedPiece &&
                selectedPiece.row === realRow &&
                selectedPiece.col === realCol
              }
              possibleMoves={moves.some(
                (move) =>
                  move.row === realRow &&
                  move.col === realCol
              )}
              possibleCaptures={moves.some(
                (move) =>
                  move.row === realRow &&
                  move.col === realCol &&
                  piece !== "."
              )}
              kingInCheck={
                isKingInCheck.inCheck &&
                realRow === isKingInCheck.king?.row &&
                realCol === isKingInCheck.king?.col
              }
              checkingPiece={isKingInCheck.attackers.some(
                (attacker) =>
                  realRow === attacker.row &&
                  realCol === attacker.col
              )}
              displayRow={rowIndex}
              displayCol={colIndex}
              userColor={userColor}
            />
          );
        })
      )}

      <Promotion
        turn={turn}
        promote={promote}
        open={promotion}
      />
    </>
  );
}

export default ChessBoard;