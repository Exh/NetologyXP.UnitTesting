class Player
{
    constructor(age, cash = 0)
    {
		this._age = age;
		this._cash = cash;
		this._chips = 0;

        this._bets = [];
	}

    setBet(number, bet)
    {
        var currentBet = this.getBet(number);
        if ((currentBet == undefined) ||
            (currentBet == ""))
        {
            if (this.isEnoughChips(bet)) {
                this._bets[number] = bet;
                this.takeChips(bet);
                return true;
            }
        }
        else
        {
            var diff = bet - currentBet;
            if (diff > 0)
            {
                if (this.isEnoughChips(diff)) {
                    this.takeChips(diff);
                    this._bets[number] += diff;
                    return true;
                }
            }
            else
            {
                this._bets[number] -= diff;
                this.addChips(diff);
                return true;
            }
        }
        return false;
    }

    getBet(number)
    {
        return this._bets[number];
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
