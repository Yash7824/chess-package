import findPiece from "./findPiece.js";
import IsWhitePiece from "./IsWhitePiece.js";
import IsBlackPiece from "./IsBlackPiece.js";
import getMajorPieces from "./getMajorPieces.js";
import IsInvalidMove from "./IsInvalidMove.js";

const IsTileSafeForKing = (king, row, col, chess_Board) => {
    let king_coordinates = findPiece(king, chess_Board);

    if (king === 'K' && king_coordinates && !IsWhitePiece(row, col, chess_Board)) {

      if ((chess_Board[row - 1][col - 1] === 'p' ||
        chess_Board[row - 1][col + 1] === 'p') &&
        row - 1 >= 0 && (col - 1 >= 0 && col + 1 <= 7)) {
        return false;
      }

      const blackKnightArray = getMajorPieces('n', chess_Board);
      for (let pos of blackKnightArray) {
        if (!IsInvalidMove('n', pos[0], pos[1], row, col, chess_Board)) {
          return false;
        }
      }

      const blackRookArray = getMajorPieces('r', chess_Board);
      for (let pos of blackRookArray) {
        if (!IsInvalidMove('r', pos[0], pos[1], row, col, chess_Board)) {
          return false;
        }
      }

      const blackBishopArray = getMajorPieces('b', chess_Board);
      for (let pos of blackBishopArray) {
        if (!IsInvalidMove('b', pos[0], pos[1], row, col, chess_Board)) {
          return false;
        }
      }

      const blackQueenArray = getMajorPieces('q', chess_Board);
      for (let pos of blackQueenArray) {
        if (!IsInvalidMove('q', pos[0], pos[1], row, col, chess_Board)) {
          return false;
        }
      }

    } else if (king === 'k' && king_coordinates && !IsBlackPiece(row, col, chess_Board)) {
      if ((chess_Board[row + 1][col - 1] === 'P' ||
        chess_Board[row + 1][col + 1] === 'P') &&
        row + 1 <= 7 && (col - 1 >= 0 && col + 1 <= 7)) {
        return false;
      }

      const whiteKnightArray = getMajorPieces('N', chess_Board);
      for (let pos of whiteKnightArray) {
        if (!IsInvalidMove('N', pos[0], pos[1], row, col, chess_Board)) {
          return false;
        }
      }

      const whiteRookArray = getMajorPieces('R', chess_Board);
      for (let pos of whiteRookArray) {
        if (!IsInvalidMove('R', pos[0], pos[1], row, col, chess_Board)) {
          return false;
        }
      }

      const whiteBishopArray = getMajorPieces('B', chess_Board);
      for (let pos of whiteBishopArray) {
        if (!IsInvalidMove('B', pos[0], pos[1], row, col, chess_Board)) {
          return false;
        }
      }

      const whiteQueenArray = getMajorPieces('Q', chess_Board);
      for (let pos of whiteQueenArray) {
        if (!IsInvalidMove('Q', pos[0], pos[1], row, col, chess_Board)) {
          return false;
        }
      }
    } else if ((king == 'k' && IsBlackPiece(row, col, chess_Board)) ||
      (king == 'K' && IsWhitePiece(row, col, chess_Board))) {
      return false;
    }

    return true;
  }

  export default IsTileSafeForKing;