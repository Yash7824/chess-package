import IsKingUnderCheckAfterPieceMovement from './IsKingCheckAfterPieceMove.js';
import IsEmptyTile from './IsEmptyTile.js';
import findPiece from './findPiece.js';
import IsBlackPiece from './IsBlackPiece.js';
import IsWhitePiece from './IsWhitePiece.js';

const IsInvalidMove = (piece, fromRow,fromCol, toRow, toCol, chess_Board) => {
    if (fromRow == toRow && fromCol == toCol) return true;

    if(IsKingUnderCheckAfterPieceMovement(fromRow, fromCol, chess_Board)){
      return true;
    }
    // Finding the locations of White and Black Kings.
    let whiteKingRow, whiteKingCol, blackKingRow, blackKingCol;
    let whiteKingCoord = findPiece('K', chess_Board);
    whiteKingRow = whiteKingCoord?.row, whiteKingCol = whiteKingCoord?.col;

    let blackKingCoord = findPiece('k', chess_Board);
    blackKingRow = blackKingCoord?.row, blackKingCol = blackKingCoord?.col;

    switch (piece) {
      case 'P': {

        // Attacking Black Piece
        if((toRow == fromRow - 1 && toCol == fromCol - 1 && IsBlackPiece(toRow, toCol, chess_Board)) ||
           (toRow == fromRow - 1 && toCol == fromCol + 1 && IsBlackPiece(toRow, toCol, chess_Board))){
          return false;
        }

        if (
          toRow == fromRow - 1 &&
          (toCol == fromCol - 1 || toCol == fromCol + 1)
        ) {
          return true;
        }

        if(toRow != fromRow && toCol != fromCol ){
          return true;
        }

        if (toCol == fromCol && toRow > fromRow) {
          return true;
        }

        if (!IsEmptyTile(toRow, toCol, chess_Board)) {
          return true;
        }

        return false;

        break;
      }

      case 'R':
      case 'r': {
        if (toRow != fromRow && toCol == fromCol) {
          if (toRow > fromRow) {
            for (let i = fromRow + 1; i < toRow; i++) {
              if (!IsEmptyTile(i, toCol, chess_Board)) return true;
            }
          } else {
            for (let i = fromRow - 1; i > toRow; i--) {
              if (!IsEmptyTile(i, toCol, chess_Board)) return true;
            }
          }
        } else if (toRow == fromRow && toCol != fromCol) {
          if (toCol > fromCol) {
            for (let i = fromCol + 1; i < toCol; i++) {
              if (!IsEmptyTile(toRow, i, chess_Board)) return true;
            }
          } else {
            for (let i = fromCol - 1; i > toCol; i--) {
              if (!IsEmptyTile(toRow, i, chess_Board)) return true;
            }
          }
        } else if (toRow != fromRow && toCol != fromCol) {
          // alert('Invalid rook move as tiles are not empty in between');
          return true;
        }

        break;
      }

      case 'N':
      case 'n': {
        // moving apart from L shape
        if (
          !(
            (toRow == fromRow - 2 && (toCol == fromCol + 1 || toCol == fromCol - 1)) ||
            (toRow == fromRow + 2 && (toCol == fromCol + 1 || toCol == fromCol - 1)) ||
            (toCol == fromCol - 2 && (toRow == fromRow + 1 || toRow == fromRow - 1)) ||
            (toCol == fromCol + 2 && (toRow == fromRow + 1 || toRow == fromRow - 1))
          )
        ) {
          return true;
        }


        if (piece === 'N' && IsWhitePiece(toRow, toCol, chess_Board)) {
          return true;
        }

        if (piece === 'n' && IsBlackPiece(toRow, toCol, chess_Board)) {
          return true;
        }

        return false;
        break;
      }

      case 'B':
      case 'b': {
        let correctMovement = false;
        for (let i = 1; i <= 7; i++) {
          if (
            (toRow == fromRow - i && toCol == fromCol - i) ||
            (toRow == fromRow - i && toCol == fromCol + i) ||
            (toRow == fromRow + i && toCol == fromCol - i) ||
            (toRow == fromRow + i && toCol == fromCol + i)
          ) {
            correctMovement = true;
            break;
          }
        }

        if (correctMovement) {
          // Up and Left
          if (toRow < fromRow && toCol < fromCol) {
            for (
              let i = fromRow - 1, j = fromCol - 1;
              i > toRow && j > toCol;
              i--, j--
            ) {
              if (!IsEmptyTile(i, j, chess_Board)) return true;
            }
          } else if (toRow < fromRow && toCol > fromCol) {
            for (
              let i = fromRow - 1, j = fromCol + 1;
              i > toRow && j < toCol;
              i--, j++
            ) {
              if (!IsEmptyTile(i, j, chess_Board)) return true;
            }
          } else if (toRow > fromRow && toCol < fromCol) {
            for (
              let i = fromRow + 1, j = fromCol - 1;
              i < toRow && j > toCol;
              i++, j--
            ) {
              if (!IsEmptyTile(i, j, chess_Board)) return true;
            }
          } else if (toRow > fromRow && toCol > fromCol) {
            for (
              let i = fromRow + 1, j = fromCol + 1;
              i < toRow && j < toCol;
              i++, j++
            ) {
              if (!IsEmptyTile(i, j, chess_Board)) return true;
            }
          }
        } else if (correctMovement == false) {
          return true;
        }

        if (toRow != fromRow && toCol == fromCol) return true;
        if (toRow == fromRow && toCol != fromCol) return true;

        return false;
        break;
      }

      case 'Q':
      case 'q': {
        // Bishop Part
        let correctMovement = false;
        for (let i = 1; i <= 7; i++) {
          if (
            (toRow == fromRow - i && toCol == fromCol - i) ||
            (toRow == fromRow - i && toCol == fromCol + i) ||
            (toRow == fromRow + i && toCol == fromCol - i) ||
            (toRow == fromRow + i && toCol == fromCol + i) ||
            (toRow != fromRow && toCol == fromCol) ||
            (toRow == fromRow && toCol != fromCol)
          ) {
            correctMovement = true;
            break;
          }
        }

        if (correctMovement) {
          if (toRow < fromRow && toCol < fromCol) {
            for (
              let i = fromRow - 1, j = fromCol - 1;
              i > toRow && j > toCol;
              i--, j--
            ) {
              if (!IsEmptyTile(i, j, chess_Board)) return true;
            }
          } else if (toRow < fromRow && toCol > fromCol) {
            for (
              let i = fromRow - 1, j = fromCol + 1;
              i > toRow && j < toCol;
              i--, j++
            ) {
              if (!IsEmptyTile(i, j, chess_Board)) return true;
            }
          } else if (toRow > fromRow && toCol < fromCol) {
            for (
              let i = fromRow + 1, j = fromCol - 1;
              i < toRow && j > toCol;
              i++, j--
            ) {
              if (!IsEmptyTile(i, j, chess_Board)) return true;
            }
          } else if (toRow > fromRow && toCol > fromCol) {
            for (
              let i = fromRow + 1, j = fromCol + 1;
              i < toRow && j < toCol;
              i++, j++
            ) {
              if (!IsEmptyTile(i, j, chess_Board)) return true;
            }
          }
          // Rook Part
          else if (toRow != fromRow && toCol == fromCol) {
            if (toRow > fromRow) {
              for (let i = fromRow + 1; i < toRow; i++) {
                if (!IsEmptyTile(i, toCol, chess_Board)) return true;
              }
            } else {
              for (let i = fromRow - 1; i > toRow; i--) {
                if (!IsEmptyTile(i, toCol, chess_Board)) return true;
              }
            }
          } else if (toRow == fromRow && toCol != fromCol) {
            if (toCol > fromCol) {
              for (let i = fromCol + 1; i < toCol; i++) {
                if (!IsEmptyTile(toRow, i, chess_Board)) return true;
              }
            } else {
              for (let i = fromCol - 1; i > toCol; i--) {
                if (!IsEmptyTile(toRow, i, chess_Board)) return true;
              }
            }
          }
        } else {
          return true;
        }

        return false;
        break;
      }

      case 'K':
      case 'k': {
        let correctMovement = false;
        let attackingPiece = this.chess_Board[toRow][toCol];
        if (this.IsPieceProtected(attackingPiece, toRow, toCol)) {
          return true;
        }

        if(!this.IsTileSafeForKing(piece, toRow, toCol)){
          return true;
        }

        if (
          (toRow == fromRow - 1 && toCol == fromCol - 1) ||
          (toRow == fromRow - 1 && toCol == fromCol) ||
          (toRow == fromRow - 1 && toCol == fromCol + 1) ||
          (toRow == fromRow && toCol == fromCol - 1) ||
          (toRow == fromRow && toCol == fromCol + 1) ||
          (toRow == fromRow + 1 && toCol == fromCol - 1) ||
          (toRow == fromRow + 1 && toCol == fromCol) ||
          (toRow == fromRow + 1 && toCol == fromCol + 1)
        ) {
          correctMovement = true;
          break;
        }


        if (correctMovement) return false;
        else return true;
        break;
      }

      case 'p': {

        // Attacking White Pieces
        if((toRow == fromRow + 1 && toCol == fromCol - 1 && IsWhitePiece(toRow, toCol, chess_Board)) ||
           (toRow == fromRow + 1 && toCol == fromCol + 1 && IsWhitePiece(toRow, toCol, chess_Board))){
          return false;
        }
        //moving diagonally
        if (
          toRow == fromRow + 1 &&
          (toCol == fromCol - 1 || toCol == fromCol + 1)
        ) {
          return true;
        }

        if(toRow == fromRow + 2 && toCol != fromCol ){
          return true;
        }

        if (toCol == fromCol && toRow < fromRow) {
          return true;
        }

        if (!IsEmptyTile(toRow, toCol, chess_Board)) {
          return true;
        }

        break;
      }
    }
    return false;
  }

  export default IsInvalidMove;