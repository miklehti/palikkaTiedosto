//given that a tetrisPiece has actual coordinates( as calculated from mapCoordinates), does it fit into the grid?
//for ex. [0,0],[1,0],[1,1],[2,1] tetrisPiece and available coordinates [0,0],[0,1],[0,2],[0,3] should return false, and [0,0],[1,0],[1,1],[2,1] should return true
const isTetrisPieceFitToGrid = (tetrisPieceActualCoordinates) => {
  tetrisPieceActualCoordinates.forEach( coordinates => {
    return availableCoordinates.find(coordinates)
  });
}

//toinen testitapaus
const tetrisPieces = [
	[
		[0, 0],
		[1, 0],
		[2, 0],
		[3, 0]
	],
	[
		[0, 0],
		[0, 1],
		[1, 0],
		[1, 1]
	],
	[
		[0, 0],
		[1, 0],
		[1, 1],
		[1, 2]
	],
	[
		[0, 0],
		[1, 0],
		[2, 0],
		[2, -1]
	]
];
