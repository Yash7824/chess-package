import findPiece from "./findPiece.js";
import IsInvalidMove from "./IsInvalidMove.js";

const IsBlackKingUnderCheck = (king, fromRow, fromCol, chess_Board) => {
    // The Piece giving check to the King
    const piece = chess_Board[fromRow][fromCol];

    // King's location:
    const kingLoc = findPiece(king, chess_Board);
    let kingRow = kingLoc.row, kingCol = kingLoc.col;

    if (king == 'k') {
      // If White pawn is giving Check.
      if (
        piece == 'P' &&
        ((kingRow == fromRow - 1 && kingCol == fromCol - 1) ||
          (kingRow == fromRow - 1 && kingCol == fromCol + 1))
      ) {
        return true;
      }

      // If White Rook is giving Check
      if (
        piece == 'R' &&
        ((kingRow != fromRow && kingCol == fromCol) ||
          (kingRow == fromRow && kingCol != fromCol)) &&
        !IsInvalidMove(piece, fromRow, fromCol, kingRow, kingCol, chess_Board)
      ) {
        return true;
      }

      // If White knight is giving Check.
      if (
        piece == 'N' &&
        ((kingRow == fromRow - 2 &&
          (kingCol == fromCol + 1 || kingCol == fromCol - 1)) ||
          (kingRow == fromRow + 2 &&
            (kingCol == fromCol + 1 || kingCol == fromCol - 1)) ||
          (kingCol == fromCol - 2 &&
            (kingRow == fromRow + 1 || kingRow == fromRow - 1)) ||
          (kingCol == fromCol + 2 &&
            (kingRow == fromRow + 1 || kingRow == fromRow - 1)))
      ) {
        return true;
      }

      // If White bishop is giving Check
      if (piece == 'B') {
        for (let i = 1; i <= 7; i++) {
          if (!IsInvalidMove(piece, fromRow, fromCol, kingRow, kingCol, chess_Board)) {
            if (
              (kingRow == fromRow - i && kingCol == fromCol - i) ||
              (kingRow == fromRow - i && kingCol == fromCol + i) ||
              (kingRow == fromRow + i && kingCol == fromCol - i) ||
              (kingRow == fromRow + i && kingCol == fromCol + i)
            ) {
              return true;
            }
          }
        }
      }

      // If White Queen is giving Check
      if (piece == 'Q') {
        for (let i = 1; i <= 7; i++) {
          if (!IsInvalidMove(piece, fromRow, fromCol, kingRow, kingCol, chess_Board)) {
            if (
              (kingRow == fromRow - i && kingCol == fromCol - i) ||
              (kingRow == fromRow - i && kingCol == fromCol + i) ||
              (kingRow == fromRow + i && kingCol == fromCol - i) ||
              (kingRow == fromRow + i && kingCol == fromCol + i) ||
              (kingRow != fromRow && kingCol == fromCol) ||
              (kingRow == fromRow && kingCol != fromCol)
            ) {
              return true;
            }
          }
        }
      }
    }

    return false;
  }

  export default IsBlackKingUnderCheck;