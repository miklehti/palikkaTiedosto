var fs = require('fs');

//map a tetris pieces' relative coordinate to an actual one based on the coordinate where the first piece of a tetrus piece is
const getAbsoluteCoordinates = (tetrisPiece, position) => {
	return tetrisPiece.map(piece => {
		return [piece[0] + position[0], piece[1] + position[1]];
	});
}

//are two coordinates the same?
const isTwoCoordinatesTheSame = (coor1, coor2) => {
	return coor1[0] === coor2[0] && coor1[1] === coor2[1];
}

// coordinate is in the array?
const coordinateExistsInArray = (coordinate, availableCoordinates) => {
	for (let i = 0; i < availableCoordinates.length; i++) {
		if (isTwoCoordinatesTheSame(coordinate, availableCoordinates[i])) {
			return true;
		}
	}
	return false;
};

// if coordinate found, remove, return new array from where the removals have been done
const removeCoordinates = (coordinatestoRemove, availableCoordinates) => {
	return availableCoordinates.filter(el => {
		return !coordinateExistsInArray(el, coordinatestoRemove);
	});
};

// print a tetris piece
const printPiece = (piece) => {
	return `${piece[0][0]},${piece[0][1]};${piece[1][0]},${piece[1][1]};${piece[2][0]},${piece[2][1]};${piece[3][0]},${piece[3][1]}`
}

//print the result
const printResult = (ids, pieceA, pieceB, pieceC, pieceD) => {
	console.log(`${ids[0]}:${printPiece(pieceA)}`);
	console.log(`${ids[1]}:${printPiece(pieceB)}`);
	console.log(`${ids[2]}:${printPiece(pieceC)}`);
	console.log(`${ids[3]}:${printPiece(pieceD)}`);
}

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
					printResult(ids, coordinatesA, coordinatesB, coordinatesC, coordinatesD);
					return;
				}
			}
		}
	}
}

//create array for id's
const parseId = (line) => {
	return line.substr(0, line.indexOf(':'));
}

//create array for coordinates
const parseTetrisPiece = (line) => {
	let coordinates = []
	let lineWithoutID = line.substr(line.indexOf(':') + 1, line.length);
	let coordinatesInStringArray = lineWithoutID.replace(/\r/g, "").split(';');
	for (let i = 0; i < coordinatesInStringArray.length; i++) {
		coordinates.push((JSON.parse("[" + coordinatesInStringArray[i] + "]")));
	}
	return coordinates;
}

//1. starting point, read palikkatiedosto.txt and create one array for id's and one for coordinates
let lines = fs.readFileSync('palikkatiedosto.txt').toString().split("\n");
let ids = [];
let tetrisPieces = [];
for (i in lines) {
	ids.push(parseId(lines[i]));
	tetrisPieces.push(parseTetrisPiece(lines[i]));
}
fitToGrid(ids, tetrisPieces);
