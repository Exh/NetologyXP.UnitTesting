var assert = require('assert');
var Roulette = require('../roulette.js');
var Player = require('../player.js');

/* Казино (рулетка)
 * Могу войти в игру, если мне есть 18 лет и больше
 * Могу купить фишки
 * Могу сделать ставку и выиграть, если ставка сыграла. Выиграшь - X2 от ставки
 * В игре несколько человек могут делать ставку
 * Могу проиграть свою ставку, если ошибусь
 * Могу сдлеать ставок на несколько чисел и если одно из них попадет, мой выигрышь составит X2 от этой ставки
 */


// 
// <ClassNameTests>.<Act>_<Arrange>_<Assert>
//

describe("Roulette tests", function () {
	it("Enter the game - I am older than 18 years old - I join to the game", function () {
		//Arrange
		let roulette = new Roulette();
		let player = new Player(26);

		//Action
		roulette.enter(player);

		//Assert
		assert.equal(true, roulette.hasPlayer(player));
	});

	it("Enter the game - I am less than 18 years old - Dealer call the security", function () {
		//Arrange
		let roulette = new Roulette();
		let player = new Player(17);

		//Action
		roulette.enter(player);

		//Assert
		assert.equal(false, roulette.hasPlayer(player));
	});
});