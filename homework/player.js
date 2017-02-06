class Player
{
	constructor(age, cash = 0){
		this._age = age;
		this._cash = cash;
		this._chips = 0;
	}


	get cash()
	{
		return this._cash;
	}

	addCash(cash)
	{
		this._cash += cash;
	}

	takeCash(cash)
	{
		if (this.isEnoughCash(cash)) {
			this._cash -= cash;
			return true;
		}
		return false;
	}

	isEnoughCash(cash)
	{
		if (this._cash >= cash)
			return true;
		return false;
	}

	addChips(chips)
	{
		this._chips = chips;
	}

	get chips()
	{
		return this._chips;
	}

	takeChips(chips)
	{
		if (this.isEnoughChips(chips)) {
			this._chips -= chips;
			return true;
		}
		return false;
	}

	isEnoughChips(chips)
	{
		if (this._chips >= chips)
			return true;
		return false;
	}

	set age(v)
	{
		this._age = v;
	}

	get age()
	{
		return this._age;
	}
};
module.exports = Player;
