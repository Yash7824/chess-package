import IsInvalidMove from "../modules/IsInvalidMove.js";
import IsBlackPiece from "../modules/IsBlackPiece.js";
import IsEmptyTile from "../modules/IsEmptyTile.js";
import toggleCurrentPlayer from "../modules/toggleCurrentPlayer.js";
import { currentPlayer } from "../index.js";

const whiteBishopMovement = ( fromRow, fromCol, toRow, toCol, chess_Board) => {
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

    // If the tile is Empty
    if (IsEmptyTile(toRow, toCol, chess_Board)) {

      for (let i = 1; i <= 7; i++) {
        if (!IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)) {
          if (
            (toRow == fromRow - i && toCol == fromCol - i) ||
            (toRow == fromRow - i && toCol == fromCol + i) ||
            (toRow == fromRow + i && toCol == fromCol - i) ||
            (toRow == fromRow + i && toCol == fromCol + i)
          ) {
            chess_Board[toRow][toCol] = piece;
            chess_Board[fromRow][fromCol] = '';
            toggleCurrentPlayer(chess_Board);
          }
        }
      }
    }
  }

  export default whiteBishopMovement;