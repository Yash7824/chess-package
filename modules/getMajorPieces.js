const getMajorPieces = (piece, chess_Board) => {
    const piece_Array = [];
    for (let i = 0; i < chess_Board.length; i++) {
      for (let j = 0; j < chess_Board[i].length; j++) {
        if (chess_Board[i][j] === piece) piece_Array.push([i, j]);
      }
    }
    return piece_Array;
  }

export default getMajorPieces;