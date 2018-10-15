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

/*
fs.readFile('palikkatiedosto.txt', 'utf8', function(err, data) {
    if (err) throw err;
    const ids = getListOfIds(data);
    const tetrisPieces = getTetrisPieces(data);

});*/


//for testing purposes
const tetrisPiecesTest = [
	[
		[0, 0],
		[1, 0],
		[1, 1],
		[2, 1]
	],
	[
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 2]
	],
	[
		[0, 0],
		[1, 0],
		[2, 0],
		[1, 1]
	],
	[
		[0, 0],
		[1, 0],
		[1, 1],
		[1, -1]
	]
];

//fitToGrid(tetrisPieces);

//console logeja:
//console.log(getAbsoluteCoordinates(tetrisPieces[0], [1,1])) // should return => [[1,1], [2,1], [2,2], [3,2]]
//console.log(isTwoCoordinatesTheSame([0,0], [0,0])); //=> true
//console.log(isTwoCoordinatesTheSame([0,0], [0,1])); // => false
//console.log(coordinateExistsInArray([0,0], [[0,0], [0,1], [1,1]])); //=> should return true
//console.log(coordinateExistsInArray([5,0], [[0,0], [0,1], [1,1]])); //=> should return false
//console.log(removeCoordinates([[0,0], [1,1]], [[0,0], [0,1], [1,1]])); //=> should return [0,1]
//console.log(printResult(tetrisPieces[0], tetrisPieces[1], tetrisPieces[2], tetrisPieces[3]));
