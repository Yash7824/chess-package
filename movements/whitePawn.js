

const whitePawnMovement = (fromRow, fromCol, toRow, toCol, chess_Board) => {
    const piece = chess_Board[fromRow][fromCol];

}

whitePawnMovement(
    fromRow: number,
    fromCol: number,
    toRow: number,
    toCol: number
  ) {
    const piece = this.genRule.chess_Board[fromRow][fromCol];

    // Attacking Black Pieces
    if (
      toRow == fromRow - 1 &&
      (toCol == fromCol - 1 || toCol == fromCol + 1) &&
      this.genRule.IsBlackPiece(toRow, toCol) && 
      !this.genRule.IsInvalidMove(piece, fromRow, fromCol, toRow, toCol)
    ) {
      this.genRule.chess_Board[toRow][toCol] = piece;
      this.genRule.chess_Board[fromRow][fromCol] = '';
      this.genRule.toggleCurrentPlayer();
    }

    // If the tile is empty
    if (this.genRule.IsEmptyTile(toRow, toCol)) {
      if (this.genRule.IsInvalidMove(piece, fromRow, fromCol, toRow, toCol)) {
        this.genRule.resetToPreviousPosition(fromRow, fromCol, toRow, toCol);
        return;
      }

      // If Valid Move is played
      if (!this.genRule.IsInvalidMove(piece, fromRow, fromCol, toRow, toCol)) {
        if (fromRow == 6 && toRow >= fromRow - 2 && toRow < fromRow) {
          this.genRule.chess_Board[toRow][toCol] = piece;
          this.genRule.chess_Board[fromRow][fromCol] = '';
          this.genRule.toggleCurrentPlayer();
        } else if (fromRow != 6 && toRow >= fromRow - 1 && toRow < fromRow) {
          this.genRule.chess_Board[toRow][toCol] = piece;
          this.genRule.chess_Board[fromRow][fromCol] = '';
          this.genRule.toggleCurrentPlayer();
        }
      }
    }
  }

export default whitePawnMovement;