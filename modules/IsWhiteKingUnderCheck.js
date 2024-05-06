import findPiece from "./findPiece.js";
import IsInvalidMove from "./IsInvalidMove.js";

const IsWhiteKingUnderCheck = (king, fromRow, fromCol, chess_Board) => {
    // The Piece giving check to the King
    const piece = chess_Board[fromRow][fromCol];

    // King's location:
    const kingLoc = findPiece(king, chess_Board);
    let kingRow = kingLoc.row, kingCol = kingLoc.col;

    if (king == 'K') {
      // If Black pawn is giving Check.
      if (
        piece == 'p' &&
        ((kingRow == fromRow + 1 && kingCol == fromCol - 1) ||
          (kingRow == fromRow + 1 && kingCol == fromCol + 1))
      ) {
        return true;
      }

      // If Black Rook is giving Check
      if (
        piece == 'r' &&
        ((kingRow != fromRow && kingCol == fromCol) ||
          (kingRow == fromRow && kingCol != fromCol)) &&
        !IsInvalidMove(piece, fromRow, fromCol, kingRow, kingCol, chess_Board)
      ) {
        return true;
      }

      // If Black knight is giving Check.
      if (
        piece == 'n' &&
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

      // If Black bishop is giving Check
      if (piece == 'b') {
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

      // If Black Queen is giving Check
      if (piece == 'q') {
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

  export default IsWhiteKingUnderCheck;