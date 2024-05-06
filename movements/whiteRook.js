import IsInvalidMove from "../modules/IsInvalidMove.js";
import IsBlackPiece from "../modules/IsBlackPiece.js";
import { currentPlayer } from "../index.js";
import resetToPreviousPosition from "../modules/resetToPrevPosition.js";
import IsEmptyTile from "./modules/IsEmptyTile.js";
import toggleCurrentPlayer from "./modules/toggleCurrentPlayer.js";

const whiteRookMovement = (fromRow, fromCol, toRow, toCol, chess_Board) => {
    const piece = chess_Board[fromRow][fromCol];
    //Attacking Black Pieces
    if (
      IsBlackPiece(toRow, toCol, chess_Board) &&
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

  export default whiteRookMovement;