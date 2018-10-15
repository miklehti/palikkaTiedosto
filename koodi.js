var fs = require('fs');
var utils = require('./utils/utils');

//the function that does all the work, handle state etc.
const fitToGrid = (ids, tetrisPieces) => {
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

		const coordinatesA = utils.getAbsoluteCoordinates(tetrisPieces[0], grid[j]);
		const gridAfterA = utils.removeCoordinates(coordinatesA, grid);

		for (let k = 0; k < gridAfterA.length; k++) {

			const coordinatesB = utils.getAbsoluteCoordinates(tetrisPieces[1], gridAfterA[k]);
			const gridAfterAB = utils.removeCoordinates(coordinatesB, gridAfterA);

			for (let l = 0; l < gridAfterAB.length; l++) {

				const coordinatesC = utils.getAbsoluteCoordinates(tetrisPieces[2], gridAfterAB[l]);
				const gridAfterABC = utils.removeCoordinates(coordinatesC, gridAfterAB);

				const coordinatesD = utils.getAbsoluteCoordinates(tetrisPieces[3], gridAfterABC[0]);
				const gridAfterABCD = utils.removeCoordinates(coordinatesD, gridAfterABC);

				if (gridAfterABCD.length === 0) {
					utils.printResult(ids, coordinatesA, coordinatesB, coordinatesC, coordinatesD);
					return;
				}
			}
		}
	}
}

//1. starting point, read palikkatiedosto.txt and create one array for id's and one for coordinates
let lines = fs.readFileSync('palikkatiedosto.txt').toString().split("\n");
let ids = [];
let tetrisPieces = [];
for (i in lines) {
	ids.push(utils.parseId(lines[i]));
	tetrisPieces.push(utils.parseTetrisPiece(lines[i]));
}
fitToGrid(ids, tetrisPieces);
