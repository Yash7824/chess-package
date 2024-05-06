import IsInvalidMove from "../modules/IsInvalidMove.js";
import IsBlackPiece from "../modules/IsBlackPiece.js";
import IsEmptyTile from "../modules/IsEmptyTile.js";
import toggleCurrentPlayer from "../modules/toggleCurrentPlayer.js";
import { currentPlayer, whitePawnMovement } from "../index.js";

const whiteQueenMovement = (fromRow, fromCol, toRow, toCol, chess_Board) => {
    const piece = chess_Board[fromRow][fromCol];
    // Attack Black Pieces
    if (
      IsBlackPiece(toRow, toCol, chess_Board) &&
      !IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)
    ) {
      chess_Board[toRow][toCol] = piece;
      chess_Board[fromRow][fromCol] = '';
      toggleCurrentPlayer(currentPlayer);
    }

    // If Tile is Empty
    if (IsEmptyTile(toRow, toCol, chess_Board)) {
      for (let i = 1; i <= 7; i++) {
        if (!IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)) {
          if (
            (toRow == fromRow - i && toCol == fromCol - i) ||
            (toRow == fromRow - i && toCol == fromCol + i) ||
            (toRow == fromRow + i && toCol == fromCol - i) ||
            (toRow == fromRow + i && toCol == fromCol + i) ||
            (toRow != fromRow && toCol == fromCol) ||
            (toRow == fromRow && toCol != fromCol)
          ) {
            chess_Board[toRow][toCol] = piece;
            chess_Board[fromRow][fromCol] = '';
            toggleCurrentPlayer(currentPlayer);
          }
        }
      }
    }
  }

  export default whiteQueenMovement;