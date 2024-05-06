import findPiece from "./findPiece.js";
import IsTileSafeForKing from "./IsTileSafeForKing.js";
import canCaptureAttackingPiece from "./canCaptureAttackingPiece.js";
import IsPieceProtected from "./IsPieceProtected.js";

const IsCheckMate = (king, fromRow, fromCol, chess_Board) => {

    const attackingPiece = chess_Board[fromRow][fromCol];
    const king_coordinates = findPiece(king, chess_Board);

    if (king_coordinates) {
      let king_row = king_coordinates.row, king_col = king_coordinates.col
      if (king_row >= 1 && king_col >= 1 && IsTileSafeForKing(king, king_row - 1, king_col - 1, chess_Board)) {
        return false;
      }

      if (king_row >= 1 && IsTileSafeForKing(king, king_row - 1, king_col, chess_Board)) {
        return false;
      }

      if (king_row >= 1 && king_col <= 6 && IsTileSafeForKing(king, king_row - 1, king_col + 1,chess_Board)) {
        return false;
      }

      if (king_col >= 1 && IsTileSafeForKing(king, king_row, king_col - 1, chess_Board)) {
        return false;
      }

      if (king_col <= 6 && IsTileSafeForKing(king, king_row, king_col + 1, chess_Board)) {
        return false;
      }

      if (king_row <= 6 && king_col >= 1 && IsTileSafeForKing(king, king_row + 1, king_col - 1, chess_Board)) {
        return false;
      }

      if (king_row <= 6 && IsTileSafeForKing(king, king_row + 1, king_col, chess_Board)) {
        return false;
      }

      if (king_row <= 6 && king_col <= 6 && IsTileSafeForKing(king, king_row + 1, king_col + 1, chess_Board)) {
        return false;
      }

      if (!IsPieceProtected(attackingPiece, fromRow, fromCol, chess_Board)) {
        return false;
      } else {
        if (canCaptureAttackingPiece(attackingPiece, fromRow, fromCol, chess_Board)) {
          return false;
        }
      }

      return true;
    }
    return true;
  }

  export default IsCheckMate;