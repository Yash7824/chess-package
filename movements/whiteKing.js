import IsBlackPiece from "../modules/IsBlackPiece.js";
import IsInvalidMove from "../modules/IsInvalidMove.js";
import IsEmptyTile from "../modules/IsEmptyTile.js";
import toggleCurrentPlayer from "../modules/toggleCurrentPlayer.js";
import { currentPlayer, hasWhiteKingMoved } from "../index.js";

const whiteKingMovement = (fromRow, fromCol, toRow, toCol, chess_Board) => {
    const piece = chess_Board[fromRow][fromCol];

    // Attack Black Pieces
    if (
      IsBlackPiece(toRow, toCol, chess_Board) &&
      !IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)
    ) {
      chess_Board[toRow][toCol] = piece;
      chess_Board[fromRow][fromCol] = '';
      hasWhiteKingMoved = true;
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
        hasWhiteKingMoved = true;
        toggleCurrentPlayer(currentPlayer);
        return;
      }
    }

    // Castling
    if (
      chess_Board[7][4] == 'K' &&
      chess_Board[7][0] == 'R' &&
      IsEmptyTile(7, 1, chess_Board) &&
      IsEmptyTile(7, 2, chess_Board) &&
      IsEmptyTile(7, 3, chess_Board) &&
      !hasWhiteKingMoved
    ) {
      if (toRow == fromRow && toCol == fromCol - 2) {
        chess_Board[toRow][toCol] = 'K';
        chess_Board[toRow][toCol + 1] = 'R';
        chess_Board[fromRow][fromCol] = '';
        chess_Board[7][0] = '';
        hasWhiteKingMoved = true;
        toggleCurrentPlayer(currentPlayer);
        return;
      }
    } else if (
      chess_Board[7][4] == 'K' &&
      chess_Board[7][7] == 'R' &&
      IsEmptyTile(7, 5, chess_Board) &&
      IsEmptyTile(7, 6, chess_Board) &&
      !hasWhiteKingMoved
    ) {
      if (toRow == fromRow && toCol == fromCol + 2) {
        chess_Board[toRow][toCol] = 'K';
        chess_Board[toRow][toCol - 1] = 'R';
        chess_Board[fromRow][fromCol] = '';
        chess_Board[7][7] = '';
        hasWhiteKingMoved = true;
        toggleCurrentPlayer(currentPlayer);
        return;
      }
    }
  }

  export default whiteKingMovement;