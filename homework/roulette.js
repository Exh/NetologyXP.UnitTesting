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
};


module.exports = Roulette;
