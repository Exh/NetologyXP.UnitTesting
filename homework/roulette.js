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
