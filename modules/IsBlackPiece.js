const IsBlackPiece = (row, col, chess_Board) => {
    let piece = chess_Board[row][col];
    if (
      piece == 'r' ||
      piece == 'n' ||
      piece == 'b' ||
      piece == 'q' ||
      piece == 'k' ||
      piece == 'p'
    )
      return true;
    return false;
  }

  export default IsBlackPiece;