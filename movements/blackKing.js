import IsWhitePiece from "../modules/IsWhitePiece.js";
import IsInvalidMove from "../modules/IsInvalidMove.js";
import toggleCurrentPlayer from "../modules/toggleCurrentPlayer.js";
import IsEmptyTile from "../modules/IsEmptyTile.js";
import { currentPlayer, hasBlackKingMoved } from "../index.js";

const blackKingMovement = ( fromRow, fromCol, toRow, toCol, chess_Board ) => {
    const piece = chess_Board[fromRow][fromCol];

    // Attack White Pieces
    if (
      IsWhitePiece(toRow, toCol, chess_Board) &&
      !IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)
    ) {
      chess_Board[toRow][toCol] = piece;
      chess_Board[fromRow][fromCol] = '';
      hasBlackKingMoved = true;
      toggleCurrentPlayer(currentPlayer);
    }

    if (IsEmptyTile(toRow, toCol, chess_Board)) {
      // legal Moves
      if (
        ((toRow == fromRow - 1 && toCol == fromCol - 1) ||
          (toRow == fromRow - 1 && toCol == fromCol) ||
          (toRow == fromRow - 1 && toCol == fromCol + 1) ||
          (toRow == fromRow && toCol == fromCol - 1) ||
          (toRow == fromRow && toCol == fromCol + 1) ||
          (toRow == fromRow + 1 && toCol == fromCol - 1) ||
          (toRow == fromRow + 1 && toCol == fromCol) ||
          (toRow == fromRow + 1 && toCol == fromCol + 1)) &&
        !IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)
      ) {
        chess_Board[toRow][toCol] = piece;
        chess_Board[fromRow][fromCol] = '';
        hasBlackKingMoved = true;
        toggleCurrentPlayer(currentPlayer);
        return;
      }
    }

    // Castling
    if (
      chess_Board[0][4] == 'k' &&
      chess_Board[0][0] == 'r' &&
      IsEmptyTile(0, 1, chess_Board) &&
      IsEmptyTile(0, 2, chess_Board) &&
      IsEmptyTile(0, 3, chess_Board) &&
      !hasBlackKingMoved
    ) {
      if (toRow == fromRow && toCol == fromCol - 2) {
        chess_Board[toRow][toCol] = 'k';
        chess_Board[toRow][toCol + 1] = 'r';
        chess_Board[fromRow][fromCol] = '';
        chess_Board[0][0] = '';
        hasBlackKingMoved = true;
        toggleCurrentPlayer(currentPlayer);
        return;
      }
    } else if (
      chess_Board[0][4] == 'k' &&
      chess_Board[0][7] == 'r' &&
      IsEmptyTile(0, 5, chess_Board) &&
      IsEmptyTile(0, 6, chess_Board) &&
      !hasBlackKingMoved
    ) {
      if (toRow == fromRow && toCol == fromCol + 2) {
        chess_Board[toRow][toCol] = 'k';
        chess_Board[toRow][toCol - 1] = 'r';
        chess_Board[fromRow][fromCol] = '';
        chess_Board[0][7] = '';
        hasBlackKingMoved = true;
        toggleCurrentPlayer(currentPlayer);
        return;
      }
    }
  }

  export default blackKingMovement;