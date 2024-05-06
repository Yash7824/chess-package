const IsWhitePiece = (row, col, chess_Board) => {
    let piece = chess_Board[row][col];
    if (
      piece == 'R' ||
      piece == 'N' ||
      piece == 'B' ||
      piece == 'Q' ||
      piece == 'K' ||
      piece == 'P'
    )
      return true;
    return false;
  }

  export default IsWhitePiece;