/*
A: 0,0; 1,0; 1,1; 2,1
B: 0,0; 0,1; 0,2; 1,2
C: 0,0; 1,0; 2,0; 1,1
D: 0,0; 1,0; 1,1; 1,-1
*/
const tetrisPieces = [[ [0,0],[1,0],[1,1],[2,1] ], [ [0,0],[0,1],[0,2],[1,2] ], [ [0,0],[1,0],[2,0],[1,1] ], [ [0,0],[1,0],[1,1],[1,-1] ]];
//console.log(tetrisPieces);


let availableCoordinates = [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[2,3],[3,0],[3,1],[3,2],[3,3]];
//console.log(availableCoordinates);

//map a tetris pieces' relative coordinate to an actual one based on the coordinate where the first piece of a tetrus piece is
// for example: if the tetrisPieces[0] is in positin [1,1] in the grid, the function should return [[1,1], [2,1], [2,2], [3,2]]
const mapCoordinates = (tetrisPiece, position) => {
  return tetrisPiece.map(piece => {
    return [piece[0] + position[0], piece[1] + position[1]];
  });
}
//console.log(mapCoordinates(tetrisPieces[0], [1,1]))

//given that a tetrisPiece has actual coordinates( as calculated from mapCoordinates), does it fit into the grid?
//for ex. [0,0],[1,0],[1,1],[2,1] tetrisPiece and available coordinates [0,0],[0,1],[0,2],[0,3] should return false, and [0,0],[1,0],[1,1],[2,1] should return true
const isTetrisPieceFitToGrid = (tetrisPieceActualCoordinates) => {
  tetrisPieceActualCoordinates.forEach( coordinates => {

  });
}
