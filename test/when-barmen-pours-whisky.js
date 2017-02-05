var assert = require('assert');
var Barmen = require('../src/barmen');

//
// When<Action>.<Arrange><Assert>
//
// WhenAuthorizeUser
//   AdminCanLogin
//   HackerCanNotLogin
//
// WhenLoadMovies
//   AdminCanSeeAllMovies
//   ChildrenMustNotNotSeeRestrictedMovies
//

describe('When barmen pours whisky', function () {
    var barmen = {};

    beforeEach(function () {
        barmen = new Barmen();
    });

    // <Arrange>.<Assert>
    describe('I ask for 50 grams', function () {
        it('I have a glass with 50 grams of whisky', function () {
        // Arrange

        // Act

        // Assert
             assert.equal(50, volumeInGlass);
        });
    });

    //<Assert>.<Arrange>
    describe('I get 50 grams of whisky', function () {
        it('if barmen is free', function () {

        });

        it('if I won a promo glass', function () {

        });

        it('my friend orders 50 grams to me as a gift', function () {

        });
    });
});