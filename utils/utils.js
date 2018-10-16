//map a tetris pieces' relative coordinate to an actual one based on the coordinate where the first piece of a tetrus piece is
module.exports.getAbsoluteCoordinates = (tetrisPiece, position) => {
	return tetrisPiece.map(piece => {
		return [piece[0] + position[0], piece[1] + position[1]];
	});
}

//are two coordinates the same?
module.exports.isTwoCoordinatesTheSame = (coor1, coor2) => {
	return coor1[0] === coor2[0] && coor1[1] === coor2[1];
}

// coordinate is in the array?
module.exports.coordinateExistsInArray = (coordinate, availableCoordinates) => {
	for (let i = 0; i < availableCoordinates.length; i++) {
		if (this.isTwoCoordinatesTheSame(coordinate, availableCoordinates[i])) {
			return true;
		}
	}
	return false;
};

// if coordinate found, remove, return new array from where the removals have been done
module.exports.removeCoordinates = (coordinatestoRemove, availableCoordinates) => {
	return availableCoordinates.filter(el => {
		return !this.coordinateExistsInArray(el, coordinatestoRemove);
	});
};

// print a tetris piece
module.exports.printPiece = (piece) => {
	return `${piece[0][0]},${piece[0][1]};${piece[1][0]},${piece[1][1]};${piece[2][0]},${piece[2][1]};${piece[3][0]},${piece[3][1]}`
}

//print the result
module.exports.printResult = (ids, pieceA, pieceB, pieceC, pieceD) => {
	console.log(`${ids[0]}:${this.printPiece(pieceA)}`);
	console.log(`${ids[1]}:${this.printPiece(pieceB)}`);
	console.log(`${ids[2]}:${this.printPiece(pieceC)}`);
	console.log(`${ids[3]}:${this.printPiece(pieceD)}`);
}

//create array for id's
module.exports.parseId = (line) => {
	return line.substr(0, line.indexOf(':'));
}

//create array for coordinates
module.exports.parseTetrisPiece = (line) => {
	let coordinates = []
	let lineWithoutID = line.substr(line.indexOf(':') + 1, line.length);
	let coordinatesInStringArray = lineWithoutID.replace(/\r/g, "").split(';');
	for (let i = 0; i < coordinatesInStringArray.length; i++) {
		coordinates.push((JSON.parse("[" + coordinatesInStringArray[i] + "]")));
	}
	return coordinates;
}
