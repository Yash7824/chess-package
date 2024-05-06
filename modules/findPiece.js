const findPiece = (piece, chess_Board) =>  {
    for (let i = 0; i < chess_Board.length; i++) {
      for (let j = 0; j < chess_Board[i].length; j++) {
        if (chess_Board[i][j] == piece) return { row: i, col: j };
      }
    }
    return null;
  }

export default findPiece;