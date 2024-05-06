import canCaptureAttackingPiece from './modules/canCaptureAttackingPiece.js';
import findPiece from './modules/findPiece.js';
import getAllPiecesLocation from './modules/getAllPiecesLocation.js';
import getMajorPieces from './modules/getMajorPieces.js';
import IsBlackKingUnderCheck from './modules/IsBlackKingUnderCheck.js';
import IsBlackPiece from './modules/IsBlackPiece.js';
import IsCheckMate from './modules/IsCheckMate.js';
import IsEmptyTile from './modules/IsEmptyTile.js';
import IsInvalidMove from './modules/IsInvalidMove.js';
import IsKingCheckAfterPieceMove from './modules/IsKingCheckAfterPieceMove.js';
import IsPieceProtected from './modules/IsPieceProtected.js';
import IsTileSafeForKing from './modules/IsTileSafeForKing.js';
import IsWhitePiece from './modules/IsWhitePiece.js';
import IsWhiteKingUnderCheck from './modules/IsWhiteKingUnderCheck.js';
import resetToPrevPosition from './modules/resetToPrevPosition.js';
import toggleCurrentPlayer from './modules/toggleCurrentPlayer.js';
import whitePawnMovement from './movements/whitePawn.js';
import whiteRookMovement from './movements/whiteRook.js';
import whiteKnightMovement from './movements/whiteKnight.js';
import whiteBishopMovement from './movements/whiteBishop.js';
import whiteQueenMovement from './movements/whiteQueen.js';
import whiteKingMovement from './movements/whiteKing.js';
import blackPawnMovement from './movements/blackPawn.js';
import blackRookMovement from './movements/blackRook.js';
import blackKnightMovement from './movements/blackKnight.js';
import blackBishopMovement from './movements/blackBishop.js';
import blackQueenMovement from './movements/blackQueen.js';
import blackKingMovement from './movements/blackKing.js';


var currentPlayer = 'white';
var hasWhiteKingMoved = false;
var hasBlackKingMoved = false;

export {currentPlayer,hasWhiteKingMoved, hasBlackKingMoved, canCaptureAttackingPiece, findPiece, getAllPiecesLocation, getMajorPieces, IsBlackKingUnderCheck, IsBlackPiece, IsCheckMate, IsEmptyTile, IsInvalidMove, IsKingCheckAfterPieceMove, IsPieceProtected, IsTileSafeForKing, IsWhitePiece, IsWhiteKingUnderCheck, resetToPrevPosition, toggleCurrentPlayer, whitePawnMovement, whiteRookMovement, whiteKnightMovement, whiteBishopMovement, whiteQueenMovement, whiteKingMovement, blackPawnMovement, blackRookMovement, blackKnightMovement, blackBishopMovement, blackQueenMovement, blackKingMovement};