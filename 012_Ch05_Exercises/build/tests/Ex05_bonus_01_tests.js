'use strict';

var _support = require('./../xlib/support.js');

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _testData = require('./../exercises/testData');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe("Ex05 Bonus-1 Composition Exercises", function () {

        describe("Ex05 Bonus 1 - format money", function () {

                var expected = '$700,000.00';
                var result = (0, _support.fmtMoney)('700000');

                it("should return formatted money value = '" + expected + "'", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'fmtMoney()' result is INVALID! result = " + result);
                });
        });

        describe("Ex05 Bonus 1 - format price", function () {

                var expected = '$700,000.00';
                var result = (0, _support.fmtPrice)(_testData.CARS[0]);

                it("should return formatted money value for first car = '" + expected + "'", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'fmtPrice()' result is INVALID! result = " + result);
                });
        });

        describe("Ex05 Bonus 1 - display available prices formatted as money", function () {

                var expected = '$700,000.00, $1,850,000.00';
                var result = (0, _support.availablePrices)(_testData.CARS);

                it("should return prices for cars in stock = '" + expected + "'", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'availablePrices()' result is INVALID! result = " + result);
                });
        });
}); /**
     * Created by mike10 on 12/8/2015.
     */
//# sourceMappingURL=Ex05_bonus_01_tests.js.map