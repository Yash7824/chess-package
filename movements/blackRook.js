import IsWhitePiece from "../modules/IsWhitePiece.js";
import IsInvalidMove from "../modules/IsInvalidMove.js";
import toggleCurrentPlayer from "../modules/toggleCurrentPlayer.js";
import IsEmptyTile from "../modules/IsEmptyTile.js";
import resetToPreviousPosition from "../modules/resetToPrevPosition.js"
import { currentPlayer } from "../index.js";

const blackRookMovement = (fromRow, fromCol, toRow, toCol, chess_Board) => {
    const piece = chess_Board[fromRow][fromCol];
    //Attacking White Pieces
    if (
      IsWhitePiece(toRow, toCol, chess_Board) &&
      !IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)
    ) {
      chess_Board[toRow][toCol] = piece;
      chess_Board[fromRow][fromCol] = '';
      toggleCurrentPlayer(currentPlayer);
    }
    // If the tile is empty
    if (IsEmptyTile(toRow, toCol, chess_Board)) {
      //Invalid Move
      if (IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)) {
        resetToPreviousPosition(fromRow, fromCol, toRow, toCol, chess_Board);
        return;
      }

      // legal Move
      if (
        (toRow != fromRow && toCol == fromCol) ||
        (toRow == fromRow && toCol != fromCol)
      ) {
        chess_Board[toRow][toCol] = piece;
        chess_Board[fromRow][fromCol] = '';
        toggleCurrentPlayer(currentPlayer);
      }
    }
  }

  export default blackRookMovement;