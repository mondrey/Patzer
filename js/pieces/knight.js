const { KNIGHT_MOVES } = require('./movements/masks.js');

const Knight = {
  value: 325,
  positionValues: [
		-50, -40, -30, -30, -30, -30, -40, -50,
		-40, -20, 0, 0, 0, 0, -20, -40,
		-30, 0, 10, 15, 15, 10, 0, -30,
		-30, 5, 15, 20, 20, 15, 5, -30,
		-30, 0, 15, 20, 20, 15, 0, -30,
		-30, 5, 10, 15, 15, 10, 5, -30,
		-40, -20, 0, 5, 5, 0, -20, -40,
		-50, -40, -30, -30, -30, -30, -40, -50
	],
  moves: (position, notOwnPieces) => {
    return KNIGHT_MOVES[position].and(notOwnPieces);
  }
};

module.exports = Knight;
