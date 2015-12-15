'use strict';

var _support = require('./../xlib/support.js');

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _testData = require('./../exercises/testData');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe("Ex03 Composition Exercises", function () {

        describe("Ex03 - Convert String to dollar value", function () {

                var expected = '5.00';
                var result = (0, _support.toFixed)('5');

                it("should return expected value = '" + expected + "'", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'toFixed()' result is INVALID!");
                });
        });

        describe("Ex03 - Derive formatted numeric value from car dollar_value", function () {

                var result = (0, _support.carValue)(_testData.CARS[0]);
                var expected = '700000.00';

                it("should return first car value = '" + expected + "'", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'carValue' result is INVALID!");
                });
        });

        describe("Ex03 - Average dollar_values for all cars", function () {

                var result = (0, _support.averageDollarValue)(_testData.CARS);
                var expected = '790700.00';

                it("should average for all car values = '" + expected + "'", function () {

                        var errMsg = "Error: 'carValue' result is INVALID! function result = " + result;
                        Chai.assert.deepEqual(expected, result, errMsg);
                });
        });
}); /**
     * Created by mike10 on 12/8/2015.
     */
//# sourceMappingURL=Ex03_tests.js.map