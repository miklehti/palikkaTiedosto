const expect = require('expect');
const utils = require('./utils');

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

it('should check if two coordinates are the same', () => {
  let res1 = utils.isTwoCoordinatesTheSame([0,0], [0,0]);
  let res2 = utils.isTwoCoordinatesTheSame([0,0], [0,1]);
  expect(res1).toBe(true);
  expect(res2).toBe(false);
});

it('should get absolute coordinates correctly', () =>{
  let result = utils.getAbsoluteCoordinates(tetrisPiecesTest[0], [1,1]);
  expect(result[0]).toEqual([1,1]);
  expect(result[1]).toEqual([2,1]);
  expect(result[2]).toEqual([2,2]);
  expect(result[3]).toEqual([3,2]);
});

it('should check if coordinates exist in an array correctly', () => {
  let result1 = utils.coordinateExistsInArray([0,0], [[0,0], [0,1], [1,1]]);
  let result2 = utils.coordinateExistsInArray([5,0], [[0,0], [0,1], [1,1]]);
  expect(result1).toBe(true);
  expect(result2).toBe(false);
});

it('should remove coordinates correctly', ()=>{
  let res = utils.removeCoordinates([[0,0], [1,1]], [[0,0], [0,1], [1,1]]);
	let res2 = utils.removeCoordinates([[0,0], [0,1]], [[0,0], [0,1], [1,1]]);
	let res3 = utils.removeCoordinates([[0,1], [1,1]], [[0,0], [0,1], [1,1]]);
	expect(res).toEqual([[0,1]]);
	expect(res2).toEqual([[1,1]]);
	expect(res3).toEqual([[0,0]]);
});

it('should create array for ids correctly', () => {
	let text1 = 'A:0,0;1,0;1,1;2,1';
	let text2 = 'ABBA:0,0;1,0;1,1;2,1';
	let res1 = utils.parseId(text1);
	let res2 = utils.parseId(text2);
	expect(res1).toEqual('A');
	expect(res2).toEqual('ABBA');
});

it('should run parseTetrisPiece correctly', ()=>{
	let text1 = 'A:0,0;1,0;1,1;2,1';
	let text2 = 'ABBA:0,0;-1,10;1,1;2,11';
	let res1 = utils.parseTetrisPiece(text1);
	let res2 = utils.parseTetrisPiece(text2);
	expect(res1).toEqual([[0,0], [1,0], [1,1], [2,1]]);
	expect(res2).toEqual([[0,0], [-1,10], [1,1], [2,11]]);
});
