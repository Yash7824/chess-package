const IsEmptyTile = (row, col, chess_Board)  => {
    if (chess_Board[row][col] == '') return true;
    return false;
}

export default IsEmptyTile;
