var assert = require('assert');
var Roulette = require('../roulette.js');
var Player = require('../player.js');

/* Казино (рулетка)
 * Могу войти в игру, если мне есть 18 лет и больше
 * Могу купить фишки 
 * В игре несколько человек могут делать ставку
 * Могу сделать ставку и выиграть, если ставка сыграла. Выиграшь - X2 от ставки
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
        assert.equal(roulette.hasPlayer(player), true);
	});

	it("Enter the game - I am less than 18 years old - Dealer call the security", function () {
		//Arrange
		let roulette = new Roulette();
		let player = new Player(17);

		//Action
		roulette.enter(player);

		//Assert
        assert.equal(roulette.hasPlayer(player), false);
	});

	it("Add cash to player - I have 0 cash units on my account. I add 50 cash units - I got 50 cash units on my account", function () {
		let player = new Player(19);

		player.addCash(50);

        assert.equal(player.cash, 50);
	});

	it("Player buy chips - I have 100 cash. I buy 80 chips. - I got 80 chips and 20 cash", function () {
		let player = new Player(20, 100);
		let roulette = new Roulette();

		roulette.buyChips(player, 80);

        assert.equal(player.chips, 80);
        assert.equal(player.cash, 20);
	});

    it("Player set bet - I have 80 chips. I set 20 chips on number 2 - I got 20 chips on number 2 and 60 chips on my account", function () {
        let player = new Player(20, 80);
        let roulette = new Roulette();
        roulette.buyChips(player, 80);

        player.setBet(2, 20);

        assert.equal(player.getBet(2), 20);
        assert.equal(player.chips, 60);
    });

// When<Action>.<Arrange><Assert>

    it("When 3 players set bet on the same number. Players 1 set 100 chips; Players 2 set 100 chips; Players 3 set 50 chips; Everyone set on number 1; The common bet on number 1 is 250 chips", function () {
        let player = new Player(20, 100);
        let player1 = new Player(22, 100);
        let player2 = new Player(31, 100);
        let roulette = new Roulette();
        roulette.buyChips(player, 100);
        roulette.buyChips(player1, 100);
        roulette.buyChips(player2, 100);

        player.setBet(1, 100);
        player1.setBet(1, 100);
        player2.setBet(1, 50);

        assert.equal(roulette.getBet(1), 250);
    });

// <ClassName>Should.<Assert>_<Arrange>

    it("Player Should Set 20 chips on number 1; The win number is 1 then player win & get 40 chips on account.", function() {
        let player = new Player(20, 100);
        let roulette = new Roulette();
        roulette.buyChips(player, 20);

        player.setBet(1, 20);
        roulette.startGame(1);

        assert.equal(player.chips, 40);
    });

    it("Player Should Set 20 chips on number 1; The win number is 17 then player lose & get 0 chips on account.", function() {
        let player = new Player(20, 100);
        let roulette = new Roulette();
        roulette.buyChips(player, 20);

        player.setBet(1, 20);
        roulette.startGame(17);

        assert.equal(player.chips, 40);
    });
});
