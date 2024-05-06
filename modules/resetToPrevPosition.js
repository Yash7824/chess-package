const resetToPreviousPosition = ( fromRow, fromCol, toRow, toCol, chess_Board ) => {
    const piece = chess_Board[fromRow][fromCol];
    chess_Board[toRow][toCol] = '';
    chess_Board[fromRow][fromCol] = piece;
  }

  export default resetToPreviousPosition;