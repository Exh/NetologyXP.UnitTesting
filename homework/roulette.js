class Roulette {
	constructor()
	{
		this.players =[];
	}
	enter(player)
	{
		if (player.age >= 18) {
			this.players.push(player);
		}
	}

	hasPlayer(player)
	{
		if (this.players.indexOf(player) == -1)
			return false;
		else
			return true;
	}

    getBet(number) {
        var result = this.players.reduce(function(sum, player) {
            var bet = player.getBet(number);
            if ((bet == undefined) ||
                (bet == ""))
            {
                return sum;
            }
            return sum + bet;
        },0);
        return result;
    }

    startGame(number)
    {
        this.players.forEach(function(player) {
            var bet = player.getBet(number);
            if ((bet != undefined) &&
                (bet != "") &&
                (bet != NaN))
            {
                bet *= 2;
                player.addChips(bet);
            }
            player.removeBets();
        });
    }

	buyChips(player, chips)
	{
		if (!this.hasPlayer(player))
			this.enter(player);
		else
			return false;

		var success = player.takeCash(chips);
		if (success) {
			player.addChips(chips);
			return true;
		}

		return false;
	}
};


module.exports = Roulette;
