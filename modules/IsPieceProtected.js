import IsWhitePiece from "./IsWhitePiece.js";
import IsBlackPiece from "./IsBlackPiece.js";
import IsEmptyTile from "./IsEmptyTile.js";

const IsPieceProtected = (piece, row, col, chess_Board) => {

    if (IsWhitePiece(row, col, chess_Board)) {
      // Pawn Protection
      if ((col - 1 >= 0 && row + 1 <= 7 && chess_Board[row + 1][col - 1] === 'P') ||
        (col + 1 <= 7 && row + 1 <= 7 && chess_Board[row + 1][col + 1] === 'P')) {
        return true;
      }

      // Knight Protection
      if ((row + 1 <= 7 && col - 2 >= 0 && chess_Board[row + 1][col - 2] === 'N') ||
        (row + 1 <= 7 && col + 2 <= 7 && chess_Board[row + 1][col + 2] === 'N') ||
        (row + 2 <= 7 && col - 1 >= 0 && chess_Board[row + 2][col - 1] === 'N') ||
        (row + 2 <= 7 && col + 1 <= 7 && chess_Board[row + 2][col + 1] === 'N') ||
        (row - 1 >= 0 && col - 2 >= 0 && chess_Board[row - 1][col - 2] === 'N') ||
        (row - 1 >= 0 && col + 2 <= 7 && chess_Board[row - 1][col + 2] === 'N') ||
        (row - 2 >= 0 && col - 1 >= 0 && chess_Board[row - 2][col - 1] === 'N') ||
        (row - 2 >= 0 && col + 1 <= 7 && chess_Board[row - 2][col + 1] === 'N')
      ) {
        return true;
      }

      // Rook Protection
      for (let i = 1; i <= 7; i++) {
        if (col - i >= 0 && IsEmptyTile(row, col - i, chess_Board)) continue;
        if (col - i >= 0 && chess_Board[row][col - i] === 'R') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (col + i <= 7 && IsEmptyTile(row, col + i, chess_Board)) continue;
        if (col + i <= 7 && chess_Board[row][col + i] === 'R') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && IsEmptyTile(row - i, col, chess_Board)) continue;
        if (row - i >= 0 && chess_Board[row - i][col] === 'R') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i >= 0 && IsEmptyTile(row + i, col, chess_Board)) continue;
        if (row + i >= 0 && chess_Board[row + i][col] === 'R') {
          return true;
        } else break;
      }

      // Bishop Protection
      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && col - i >= 0 && IsEmptyTile(row - i, col - i, chess_Board)) continue;
        if (row - i >= 0 && col - i >= 0 && chess_Board[row - i][col - i] === 'B') {
          return true;
        }
      }

      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && col + i <= 7 && IsEmptyTile(row - i, col + i, chess_Board)) continue;
        if (row - i >= 0 && col + i <= 7 && chess_Board[row - i][col + i] === 'B') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i <= 7 && col - i >= 0 && IsEmptyTile(row + i, col - i, chess_Board)) continue;
        if (row + i <= 7 && col - i >= 0 && chess_Board[row + i][col - i] === 'B') {
          return true
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i <= 7 && col + i <= 7 && IsEmptyTile(row + i, col + i, chess_Board)) continue;
        if (row + i <= 7 && col + i <= 7 && chess_Board[row + i][col + i] === 'B') {
          return true;
        } else break;
      }

      // Queen Protection
      for (let i = 1; i <= 7; i++) {
        if (col - i >= 0 && IsEmptyTile(row, col - i, chess_Board)) continue;
        if (col - i >= 0 && chess_Board[row][col - i] === 'Q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (col + i <= 7 && IsEmptyTile(row, col + i, chess_Board)) continue;
        if (col + i <= 7 && chess_Board[row][col + i] === 'Q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && IsEmptyTile(row - i, col, chess_Board)) break;
        if (row - i >= 0 && chess_Board[row - i][col] === 'Q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i >= 0 && IsEmptyTile(row + i, col, chess_Board)) continue;
        if (row + i >= 0 && chess_Board[row + i][col] === 'Q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && col - i >= 0 && IsEmptyTile(row - i, col - i, chess_Board)) continue;
        if (row - i >= 0 && col - i >= 0 && chess_Board[row - i][col - i] === 'Q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && col + i <= 7 && IsEmptyTile(row - i, col + i, chess_Board)) continue;
        if (row - i >= 0 && col + i <= 7 && chess_Board[row - i][col + i] === 'Q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i <= 7 && col - i >= 0 && IsEmptyTile(row + i, col - i, chess_Board)) continue;
        if (row + i <= 7 && col - i >= 0 && chess_Board[row + i][col - i] === 'Q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i <= 7 && col + i <= 7 && IsEmptyTile(row + i, col + i, chess_Board)) continue;
        if (row + i <= 7 && col + i <= 7 && chess_Board[row + i][col + i] === 'Q') {
          return true;
        } else break;
      }

      // King Protection
      if ((row - 1 >= 0 && col - 1 >= 0 && chess_Board[row - 1][col - 1] === 'K') ||
        (row - 1 >= 0 && chess_Board[row - 1][col] === 'K') ||
        (row - 1 >= 0 && col + 1 <= 7 && chess_Board[row - 1][col + 1] === 'K') ||
        (col - 1 >= 0 && chess_Board[row][col - 1] === 'K') ||
        (col + 1 <= 7 && chess_Board[row][col + 1] === 'K') ||
        (row + 1 <= 7 && col - 1 >= 0 && chess_Board[row + 1][col - 1] === 'K') ||
        (row + 1 >= 7 && chess_Board[row + 1][col] === 'K') ||
        (row + 1 <= 7 && col + 1 <= 7 && chess_Board[row + 1][col + 1] === 'K')
      ) {
        return true;
      }

    } else {
      return false;
    }

    if (IsBlackPiece(row, col, chess_Board)) {

      // Pawn Protection
      if ((col - 1 >= 0 && row - 1 >= 0 && chess_Board[row - 1][col - 1] === 'p') ||
        (col + 1 <= 7 && row - 1 >= 0 && chess_Board[row - 1][col + 1] === 'p')) {
        return true;
      }

      // Knight Protection
      if ((row + 1 <= 7 && col - 2 >= 0 && chess_Board[row + 1][col - 2] === 'n') ||
        (row + 1 <= 7 && col + 2 <= 7 && chess_Board[row + 1][col + 2] === 'n') ||
        (row + 2 <= 7 && col - 1 >= 0 && chess_Board[row + 2][col - 1] === 'n') ||
        (row + 2 <= 7 && col + 1 <= 7 && chess_Board[row + 2][col + 1] === 'n') ||
        (row - 1 >= 0 && col - 2 >= 0 && chess_Board[row - 1][col - 2] === 'n') ||
        (row - 1 >= 0 && col + 2 <= 7 && chess_Board[row - 1][col + 2] === 'n') ||
        (row - 2 >= 0 && col - 1 >= 0 && chess_Board[row - 2][col - 1] === 'n') ||
        (row - 2 >= 0 && col + 1 <= 7 && chess_Board[row - 2][col + 1] === 'n')
      ) {
        return true;
      }

      // Rook Protection
      for (let i = 1; i <= 7; i++) {
        if (col - i >= 0 && IsEmptyTile(row, col - i, chess_Board)) continue;
        if (col - i >= 0 && chess_Board[row][col - i] === 'r') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (col + i <= 7 && IsEmptyTile(row, col + i, chess_Board)) continue;
        if (col + i <= 7 && chess_Board[row][col + i] === 'r') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && IsEmptyTile(row - i, col, chess_Board)) continue;
        if (row - i >= 0 && chess_Board[row - i][col] === 'r') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i >= 0 && IsEmptyTile(row + i, col, chess_Board)) continue;
        if (row + i >= 0 && chess_Board[row + i][col] === 'r') {
          return true;
        } else break;
      }

      // Bishop Protection
      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && col - i >= 0 && IsEmptyTile(row - i, col - i, chess_Board)) continue;
        if (row - i >= 0 && col - i >= 0 && chess_Board[row - i][col - i] === 'b') {
          return true;
        }
      }

      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && col + i <= 7 && IsEmptyTile(row - i, col + i, chess_Board)) continue;
        if (row - i >= 0 && col + i <= 7 && chess_Board[row - i][col + i] === 'b') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i <= 7 && col - i >= 0 && IsEmptyTile(row + i, col - i, chess_Board)) continue;
        if (row + i <= 7 && col - i >= 0 && chess_Board[row + i][col - i] === 'b') {
          return true
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i <= 7 && col + i <= 7 && IsEmptyTile(row + i, col + i, chess_Board)) continue;
        if (row + i <= 7 && col + i <= 7 && chess_Board[row + i][col + i] === 'b') {
          return true;
        } else break;
      }

      // Queen Protection
      for (let i = 1; i <= 7; i++) {
        if (col - i >= 0 && IsEmptyTile(row, col - i, chess_Board)) continue;
        if (col - i >= 0 && chess_Board[row][col - i] === 'q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (col + i <= 7 && IsEmptyTile(row, col + i, chess_Board)) continue;
        if (col + i <= 7 && chess_Board[row][col + i] === 'q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && IsEmptyTile(row - i, col, chess_Board)) break;
        if (row - i >= 0 && chess_Board[row - i][col] === 'q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i >= 0 && IsEmptyTile(row + i, col, chess_Board)) continue;
        if (row + i >= 0 && chess_Board[row + i][col] === 'q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && col - i >= 0 && IsEmptyTile(row - i, col - i, chess_Board)) continue;
        if (row - i >= 0 && col - i >= 0 && chess_Board[row - i][col - i] === 'q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row - i >= 0 && col + i <= 7 && IsEmptyTile(row - i, col + i, chess_Board)) continue;
        if (row - i >= 0 && col + i <= 7 && chess_Board[row - i][col + i] === 'q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i <= 7 && col - i >= 0 && IsEmptyTile(row + i, col - i, chess_Board)) continue;
        if (row + i <= 7 && col - i >= 0 && chess_Board[row + i][col - i] === 'q') {
          return true;
        } else break;
      }

      for (let i = 1; i <= 7; i++) {
        if (row + i <= 7 && col + i <= 7 && IsEmptyTile(row + i, col + i, chess_Board)) continue;
        if (row + i <= 7 && col + i <= 7 && chess_Board[row + i][col + i] === 'q') {
          return true;
        } else break;
      }


      // King Protection
      if ((row - 1 >= 0 && col - 1 >= 0 && chess_Board[row - 1][col - 1] === 'k') ||
        (row - 1 >= 0 && chess_Board[row - 1][col] === 'k') ||
        (row - 1 >= 0 && col + 1 <= 7 && chess_Board[row - 1][col + 1] === 'k') ||
        (col - 1 >= 0 && chess_Board[row][col - 1] === 'k') ||
        (col + 1 <= 7 && chess_Board[row][col + 1] === 'k') ||
        (row + 1 <= 7 && col - 1 >= 0 && chess_Board[row + 1][col - 1] === 'k') ||
        (row + 1 >= 7 && chess_Board[row + 1][col] === 'k') ||
        (row + 1 <= 7 && col + 1 <= 7 && chess_Board[row + 1][col + 1] === 'k')
      ) {
        return true;
      }

    } else {
      return false;
    }

    return false;

  }

  export default IsPieceProtected;