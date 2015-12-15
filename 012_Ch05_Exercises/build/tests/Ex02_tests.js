'use strict';

var _support = require('./../xlib/support.js');

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _testData = require('./../exercises/testData');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe("Ex02 Composition Exercises", function () {

        describe("Ex02 - Return Car-Name-Property", function () {

                var result = (0, _support.carName)(_testData.CARS[_testData.CARS.length - 1]);
                var expected = 'Pagani Huayra';

                it("should return car name = 'Pagani Huayra' for last car", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'carName' result is INVALID!");
                });
        });

        describe("Ex02 - Composition Return Name of First Car", function () {

                var result = (0, _support.nameOfFirstCar)(_testData.CARS);
                var expected = 'Ferrari FF';

                it("should return name of first car = 'Ferrari FF' ", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'nameOfFirstCar' result is INVALID!");
                });
        });
}); /**
     * Created by mike10 on 12/8/2015.
     */
//# sourceMappingURL=Ex02_tests.js.map