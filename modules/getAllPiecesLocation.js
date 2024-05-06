const getAllPiecesLocation = (chess_Board) => {
    let locations = {}
    
    for(let i=0; i<chess_Board.length; i++){
      for(let j=0; j<chess_Board[i].length; j++){
        let piece = chess_Board[i][j];
        if(locations[piece]){
          locations[piece].push([i,j]);
        }else{
          locations[piece] = [[i,j]];
        }
      }
    }
    return locations;
  }

  export default getAllPiecesLocation;