import IsBlackPiece from "../modules/IsBlackPiece.js";
import IsInvalidMove from "../modules/IsInvalidMove.js";
import IsEmptyTile from "../modules/IsEmptyTile.js";
import resetToPreviousPosition from "../modules/resetToPrevPosition.js";
import { currentPlayer } from "../index.js";

const whitePawnMovement = (fromRow, fromCol, toRow, toCol, chess_Board) => {
  const piece = chess_Board[fromRow][fromCol];
  // Attacking Black Pieces
  if (
    toRow == fromRow - 1 &&
    (toCol == fromCol - 1 || toCol == fromCol + 1) &&
    IsBlackPiece(toRow, toCol, chess_Board) && 
    !IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)
  ) {
    chess_Board[toRow][toCol] = piece;
    chess_Board[fromRow][fromCol] = '';
    toggleCurrentPlayer(currentPlayer);
  }

  // If the tile is empty
  if (IsEmptyTile(toRow, toCol, chess_Board)) {
    if (IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)) {
      resetToPreviousPosition(fromRow, fromCol, toRow, toCol, chess_Board);
      return;
    }

    // If Valid Move is played
    if (!IsInvalidMove(piece, fromRow, fromCol, toRow, toCol, chess_Board)) {
      if (fromRow == 6 && toRow >= fromRow - 2 && toRow < fromRow) {
        chess_Board[toRow][toCol] = piece;
        chess_Board[fromRow][fromCol] = '';
        toggleCurrentPlayer(currentPlayer);
      } else if (fromRow != 6 && toRow >= fromRow - 1 && toRow < fromRow) {
        chess_Board[toRow][toCol] = piece;
        chess_Board[fromRow][fromCol] = '';
        toggleCurrentPlayer(currentPlayer);
      }
    }
  }
}

export default whitePawnMovement;