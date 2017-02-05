class Player
{
	constructor(age){
		this._age = age;
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
