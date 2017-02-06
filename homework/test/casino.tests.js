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



describe("Roulette tests", function () {

//
// <ClassNameTests>.<Act>_<Arrange>_<Assert>
//

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

	it("Add cash to player - I have 0 cash units on my account. I add 50 cash units - I got 50 cash units on my account", function () {
		let player = new Player(19);

		player.addCash(50);

		assert.equal(50, player.cash);
	});

	it("Player buy chips - I have 100 cash. I buy 80 chips. - I got 80 chips and 20 cash", function () {
		let player = new Player(20, 100);
		let roulette = new Roulette();

		roulette.buyChips(player, 80);

		assert.equal(80, player.chips);
		assert.equal(20, player.cash)
	});
});