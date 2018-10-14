//map a tetris pieces' relative coordinate to an actual one based on the coordinate where the first piece of a tetrus piece is
const getAbsoluteCoordinates = (tetrisPiece, position) => {
	return tetrisPiece.map(piece => {
		return [piece[0] + position[0], piece[1] + position[1]];
	});
}
//console.log(getAbsoluteCoordinates(tetrisPieces[0], [1,1])) // should return => [[1,1], [2,1], [2,2], [3,2]]

//are two coordinates the same?
const isTwoCoordinatesTheSame = (coor1, coor2) => {
	return coor1[0] === coor2[0] && coor1[1] === coor2[1];
}
//console.log(isTwoCoordinatesTheSame([0,0], [0,0])); //=> true
//console.log(isTwoCoordinatesTheSame([0,0], [0,1])); // => false

// coordinate is in the array?
const coordinateExistsInArray = (coordinate, availableCoordinates) => {
  for (let i = 0; i < availableCoordinates.length; i++) {
		if (isTwoCoordinatesTheSame(coordinate, availableCoordinates[i])) {
			return true;
		}
	}
	return false;
};

//console.log(coordinateExistsInArray([0,0], [[0,0], [0,1], [1,1]])); //=> should return true
//console.log(coordinateExistsInArray([5,0], [[0,0], [0,1], [1,1]])); //=> should return false

// if coordinate found, remove, return new array from where the removals have been done
const removeCoordinates = (coordinatestoRemove, availableCoordinates) => {
	return availableCoordinates.filter(el => {
		return !coordinateExistsInArray(el, coordinatestoRemove);
	});
};
//console.log(removeCoordinates([[0,0], [1,1]], [[0,0], [0,1], [1,1]])); //=> should return [0,1]

// print a tetris piece
const printPiece = (piece) => {
	return `${piece[0][0]},${piece[0][1]}; ${piece[1][0]},${piece[1][1]}; ${piece[2][0]},${piece[2][1]}; ${piece[3][0]},${piece[3][1]}`
}

//print the result
const printResult = (pieceA, pieceB, pieceC, pieceD) => {
	console.log(`A: ${printPiece(pieceA)}`);
	console.log(`B: ${printPiece(pieceB)}`);
	console.log(`C: ${printPiece(pieceC)}`);
	console.log(`D: ${printPiece(pieceD)}`);
}
//console.log(printResult(tetrisPieces[0], tetrisPieces[1], tetrisPieces[2], tetrisPieces[3]));

//the function that does all the work, handle state etc.
const fitToGrid = (tetrisPieces) => {
	const grid = [
		[0, 0],
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 0],
		[1, 1],
		[1, 2],
		[1, 3],
		[2, 0],
		[2, 1],
		[2, 2],
		[2, 3],
		[3, 0],
		[3, 1],
		[3, 2],
		[3, 3]
	];
	for (let j = 0; j < grid.length; j++) {

		const coordinatesA = getAbsoluteCoordinates(tetrisPieces[0], grid[j]);
		const gridAfterA = removeCoordinates(coordinatesA, grid);

		for (let k = 0; k < gridAfterA.length; k++) {

			const coordinatesB = getAbsoluteCoordinates(tetrisPieces[1], gridAfterA[k]);
			const gridAfterAB = removeCoordinates(coordinatesB, gridAfterA);

			for (let l = 0; l < gridAfterAB.length; l++) {

				const coordinatesC = getAbsoluteCoordinates(tetrisPieces[2], gridAfterAB[l]);
				const gridAfterABC = removeCoordinates(coordinatesC, gridAfterAB);

				const coordinatesD = getAbsoluteCoordinates(tetrisPieces[3], gridAfterABC[0]);
				const gridAfterABCD = removeCoordinates(coordinatesD, gridAfterABC);

				if (gridAfterABCD.length === 0) {
					printResult(coordinatesA, coordinatesB, coordinatesC, coordinatesD);
					return;
				}
			}
		}
	}
}

//1. starting point,
const tetrisPieces = [
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
	fitToGrid(tetrisPieces);
