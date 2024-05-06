import getAllPiecesLocation from "./getAllPiecesLocation.js";
import IsEmptyTile from "./IsEmptyTile.js";

const IsKingCheckAfterPieceMove = (fromRow, fromCol, chessBoard) => {
    let chessBoardTemp = chessBoard;
    let piecesLoc = getAllPiecesLocation(chessBoardTemp);
    let piece = chessBoardTemp[fromRow][fromCol];
    chessBoardTemp[fromRow][fromCol] = '';
    
    let whiteRooks = piecesLoc['R'];
    let whiteBishops = piecesLoc['B'];
    let whiteQueens = piecesLoc['Q'];
    let whiteKing = piecesLoc['K']
    let blackRooks = piecesLoc['r'];
    let blackBishops = piecesLoc['b'];
    let blackQueens = piecesLoc['q'];
    let blackKing = piecesLoc['k'];

    if(blackRooks !== undefined){
      for(let blackRook of blackRooks){
        if(whiteKing[0][0] == blackRook[0]){ // rows same
          if(whiteKing[0][1] > blackRook[1]){
            for(let i = blackRook[1] + 1; i <= whiteKing[0][1]; i++){
              if(IsEmptyTile(blackRook[0], i, chessBoardTemp)) continue;
              if(chessBoardTemp[blackRook[0]][i] == 'K') {chessBoardTemp[fromRow][fromCol] = piece; return true; }
              if(!IsEmptyTile(blackRook[0], i, chessBoardTemp))  break; 
            }
          } else if(whiteKing[0][1] < blackRook[1]){
            for(let i = whiteKing[0][1]+1; i <= blackRook[1]; i++){
              if(IsEmptyTile(blackRook[0], i, chessBoardTemp)) continue;
              if(chessBoard[blackRook[0]][i] == 'r') {chessBoardTemp[fromRow][fromCol] = piece; return true;}
              if(!IsEmptyTile(blackRook[0], i, chessBoardTemp))  break; 
            }
          }
        } else if(whiteKing[0][1] == blackRook[1]){ // columns same
          if(whiteKing[0][0] > blackRook[0]){
            for(let i = blackRook[0] + 1; i <= whiteKing[0][0]; i++){
              if(IsEmptyTile(i, blackRook[1], chessBoardTemp)) continue;
              if(chessBoardTemp[i][blackRook[1]] == 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
              if(!IsEmptyTile(i, blackRook[1], chessBoardTemp))  break;
            }
          }else if(whiteKing[0][0] < blackRook[0]){
            for(let i = whiteKing[0][0] + 1; i <= blackRook[0]; i++){
              if(IsEmptyTile(i, blackRook[1], chessBoardTemp)) continue;
              if(chessBoardTemp[i][blackRook[1]] == 'R') {chessBoardTemp[fromRow][fromCol] = piece; return true;}
              if(!IsEmptyTile(i, blackRook[1], chessBoardTemp)) break; 
            }
          }
        }
      }
    }
    
    if(blackBishops !== undefined){
      for(let blackBishop of blackBishops){
        let bishopRow = blackBishop[0], bishopCol = blackBishop[1];
        for(let i=1; i<=7; i++){
          // up-left
          if(bishopRow-i >= 0 && bishopCol-i >= 0){
            if(IsEmptyTile(bishopRow-i, bishopCol-i, chessBoardTemp)) continue;
            if(chessBoardTemp[bishopRow-i][bishopCol-i] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(bishopRow-i, bishopCol-i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // up-right
          if(bishopRow-i >= 0 && bishopCol+i <= 7){
            if(IsEmptyTile(bishopRow-i, bishopCol+i, chessBoardTemp)) continue;
            if(chessBoardTemp[bishopRow-i][bishopCol+i] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(bishopRow-i, bishopCol+i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // down-left
          if(bishopRow+i <= 7 && bishopCol-i >= 0){
            if(IsEmptyTile(bishopRow+i, bishopCol-i, chessBoardTemp)) continue;
            if(chessBoardTemp[bishopRow+i][bishopCol-i] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(bishopRow+i, bishopCol-i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // down-right
          if(bishopRow+i <= 7 && bishopCol+i <= 7){
            if(IsEmptyTile(bishopRow+i, bishopCol+i, chessBoardTemp)) continue;
            if(chessBoardTemp[bishopRow+i][bishopCol+i] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(bishopRow+i, bishopCol+i, chessBoardTemp)) break;
          } 
        }
      }
    }
    

    if(blackQueens !== undefined){
      for(let blackQueen of blackQueens){
        let queenRow = blackQueen[0], queenCol = blackQueen[1];
        for(let i=1; i<=7; i++){
          // up-left
          if(queenRow-i >= 0 && queenCol-i >= 0){
            if(IsEmptyTile(queenRow-i, queenCol-i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow-i][queenCol-i] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow-i, queenCol-i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // up-right
          if(queenRow-i >= 0 && queenCol+i <= 7){
            if(IsEmptyTile(queenRow-i, queenCol+i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow-i][queenCol+i] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow-i, queenCol+i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // down-left
          if(queenRow+i <= 7 && queenCol-i >= 0){
            if(IsEmptyTile(queenRow+i, queenCol-i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow+i][queenCol-i] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow+i, queenCol-i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // down-right
          if(queenRow+i <= 7 && queenCol+i <= 7){
            if(IsEmptyTile(queenRow+i, queenCol+i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow+i][queenCol+i] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow+i, queenCol+i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // row same
          if(queenCol-i >= 0){
            if(IsEmptyTile(queenRow, queenCol-i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow][queenCol-i] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow, queenCol-i, chessBoardTemp)) break;
          }
        }
   
        for(let i=1; i<=7; i++){
          if(queenCol+i <= 7){
            if(IsEmptyTile(queenRow, queenCol+i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow][queenCol+i] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow, queenCol+i, chessBoardTemp)) break;
          }
        }
          
        for(let i=1; i<=7; i++){
          // column same
          if(queenRow-i >= 0){
            if(IsEmptyTile(queenRow-i, queenCol, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow-i][queenCol] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow-i, queenCol, chessBoardTemp)) break;
          }
        }
  
        for(let i=1; i<=7; i++){
          if(queenRow+i <= 7){
            if(IsEmptyTile(queenRow+i, queenCol, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow+i][queenCol] === 'K') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow+i, queenCol, chessBoardTemp)) break;
          }
        }
  
      }
    }
    

    if(whiteRooks !== undefined){
      for(let whiteRook of whiteRooks){
        let row = whiteRook[0], col = whiteRook[1];
        for(let i=1; i<=7; i++){
          // row same
          if(col-i >= 0){
            if(IsEmptyTile(row, col-i, chessBoardTemp)) continue;
            if(chessBoardTemp[row][col-i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(row, col-i, chessBoardTemp)) break;
          }
        }
  
        for(let i=1; i<=7; i++){
  
          if(col+i <= 7){
            if(IsEmptyTile(row, col+i, chessBoardTemp)) continue;
            if(chessBoardTemp[row][col+i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(row, col+i, chessBoardTemp)) break;
          }
          
        }
  
        for(let i=1; i<=7; i++){
          // column same
          if(row-i >= 0){
            if(IsEmptyTile(row-i, col, chessBoardTemp)) continue;
            if(chessBoardTemp[row-i][col] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(row-i, col, chessBoardTemp)) break;
          }
        }
  
        for(let i=1; i<=7; i++){
          if(row+i <= 7){
            if(IsEmptyTile(row+i, col, chessBoardTemp)) continue;
            if(chessBoardTemp[row+i][col] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(row+i, col, chessBoardTemp)) break;
          }
          
        }
      }
    }
    

    if(whiteBishops !== undefined){
      for(let whiteBishop of whiteBishops){
        let bishopRow = whiteBishop[0], bishopCol = whiteBishop[1];
        for(let i=1; i<=7; i++){
          // up-left
          if(bishopRow-i >= 0 && bishopCol-i >= 0){
            if(IsEmptyTile(bishopRow-i, bishopCol-i, chessBoardTemp)) continue;
            if(chessBoardTemp[bishopRow-i][bishopCol-i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(bishopRow-i, bishopCol-i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // up-right
          if(bishopRow-i >= 0 && bishopCol+i <= 7){
            if(IsEmptyTile(bishopRow-i, bishopCol+i, chessBoardTemp)) continue;
            if(chessBoardTemp[bishopRow-i][bishopCol+i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(bishopRow-i, bishopCol+i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // down-left
          if(bishopRow+i <= 7 && bishopCol-i >= 0){
            if(IsEmptyTile(bishopRow+i, bishopCol-i, chessBoardTemp)) continue;
            if(chessBoardTemp[bishopRow+i][bishopCol-i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(bishopRow+i, bishopCol-i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // down-right
          if(bishopRow+i <= 7 && bishopCol+i <= 7){
            if(IsEmptyTile(bishopRow+i, bishopCol+i, chessBoardTemp)) continue;
            if(chessBoardTemp[bishopRow+i][bishopCol+i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(bishopRow+i, bishopCol+i, chessBoardTemp)) break;
          } 
        }
      }
    }
    

    if(whiteQueens !== undefined){
      for(let whiteQueen of whiteQueens){
        let queenRow = whiteQueen[0], queenCol = whiteQueen[1];
        for(let i=1; i<=7; i++){
          // up-left
          if(queenRow-i >= 0 && queenCol-i >= 0){
            if(IsEmptyTile(queenRow-i, queenCol-i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow-i][queenCol-i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow-i, queenCol-i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // up-right
          if(queenRow-i >= 0 && queenCol+i <= 7){
            if(IsEmptyTile(queenRow-i, queenCol+i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow-i][queenCol+i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow-i, queenCol+i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // down-left
          if(queenRow+i <= 7 && queenCol-i >= 0){
            if(IsEmptyTile(queenRow+i, queenCol-i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow+i][queenCol-i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow+i, queenCol-i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // down-right
          if(queenRow+i <= 7 && queenCol+i <= 7){
            if(IsEmptyTile(queenRow+i, queenCol+i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow+i][queenCol+i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow+i, queenCol+i, chessBoardTemp)) break;
          } 
        }
  
        for(let i=1; i<=7; i++){
          // row same
          if(queenCol-i >= 0){
            if(IsEmptyTile(queenRow, queenCol-i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow][queenCol-i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow, queenCol-i, chessBoardTemp)) break;
          }
        }
  
        for(let i=1; i<=7; i++){
          if(queenCol+i <= 7){
            if(IsEmptyTile(queenRow, queenCol+i, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow][queenCol+i] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow, queenCol+i, chessBoardTemp)) break;
          }
          
        }
  
        for(let i=1; i<=7; i++){
          // column same
          if(queenRow-i >= 0){
            if(IsEmptyTile(queenRow-i, queenCol, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow-i][queenCol] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow-i, queenCol, chessBoardTemp)) break;
          }
        }
  
        for(let i=1; i<=7; i++){
          if(queenRow+i <= 7){
            if(IsEmptyTile(queenRow+i, queenCol, chessBoardTemp)) continue;
            if(chessBoardTemp[queenRow+i][queenCol] === 'k') {chessBoardTemp[fromRow][fromCol] = piece;return true;}
            if(!IsEmptyTile(queenRow+i, queenCol, chessBoardTemp)) break;
          }
          
        }
      }
    }
    
 
    chessBoardTemp[fromRow][fromCol] = piece;
    return false;
  }

  export default IsKingCheckAfterPieceMove;