import IsWhitePiece from "../modules/IsWhitePiece.js";
import IsInvalidMove from "../modules/IsInvalidMove.js";
import toggleCurrentPlayer from "../modules/toggleCurrentPlayer.js";
import IsEmptyTile from "../modules/IsEmptyTile.js";
import resetToPreviousPosition from "../modules/resetToPrevPosition.js"
import { currentPlayer } from "../index.js";

const blackKnightMovement = ( fromRow, fromCol, toRow, toCol, chess_Board) => {
    const piece = chess_Board[fromRow][fromCol];

    // Attacking White Pieces
    if (
      ((toRow == fromRow - 2 &&
        (toCol == fromCol + 1 || toCol == fromCol - 1)) ||
        (toRow == fromRow + 2 &&
          (toCol == fromCol + 1 || toCol == fromCol - 1)) ||
        (toCol == fromCol - 2 &&
          (toRow == fromRow + 1 || toRow == fromRow - 1)) ||
        (toCol == fromCol + 2 &&
          (toRow == fromRow + 1 || toRow == fromRow - 1))) &&
      IsWhitePiece(toRow, toCol, chess_Board)
    ) {
      chess_Board[toRow][toCol] = piece;
      chess_Board[fromRow][fromCol] = '';
      toggleCurrentPlayer(currentPlayer);
    }

    // If the tile is empty
    if (IsEmptyTile(toRow, toCol, chess_Board)) {
      // Invalid Move
      if (IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)) {
        resetToPreviousPosition(fromRow, fromCol, toRow, toCol, chess_Board);
        return;
      }

      // legal Moves
      if (
        (toRow == fromRow - 2 &&
          (toCol == fromCol + 1 || toCol == fromCol - 1)) ||
        (toRow == fromRow + 2 &&
          (toCol == fromCol + 1 || toCol == fromCol - 1)) ||
        (toCol == fromCol - 2 &&
          (toRow == fromRow + 1 || toRow == fromRow - 1)) ||
        (toCol == fromCol + 2 && (toRow == fromRow + 1 || toRow == fromRow - 1))
      ) {
        chess_Board[toRow][toCol] = piece;
        chess_Board[fromRow][fromCol] = '';
        toggleCurrentPlayer(currentPlayer);
      }
    }
  }

  export default blackKnightMovement;