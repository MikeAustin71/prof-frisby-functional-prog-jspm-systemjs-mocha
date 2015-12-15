'use strict';

var _support = require('./../xlib/support.js');

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _testData = require('./../exercises/testData');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe("Ex06 Bonus-2 Composition Exercises", function () {

        describe("Ex06 Bonus 2 - display name of fastest car", function () {

                var expected = 'Aston Martin One-77 is the fastest';
                var result = (0, _support.fastestCar)(_testData.CARS);

                it("should return name of the fastest car = '" + expected + "'", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'fastestCar()' result is INVALID! result = " + result);
                });
        });
}); /**
     * Created by mike10 on 12/8/2015.
     */
//# sourceMappingURL=Ex06_bonus_02_tests.js.map