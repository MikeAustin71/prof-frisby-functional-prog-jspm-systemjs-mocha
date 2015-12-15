'use strict';

var _support = require('./../xlib/support.js');

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _testData = require('./../exercises/testData');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe("Ex01 Composition Exercises", function () {

        describe("Ex01 - Return In-Stock-Property", function () {

                var result = (0, _support.carInStock)(_testData.CARS[0]);
                var expected = true;

                it("should return in_stock = 'true' for first car 'Ferrari FF' ", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'carInStock' result is INVALID!");
                });
        });

        describe("Ex01 - Last Car Composition", function () {

                var result = (0, _support.isLastInStock)(_testData.CARS);
                var expected = false;

                it("should return last car 'Pagani Huayra' in_stock = 'false' ", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'isLastInStock' result is INVALID!");
                });
        });
}); /**
     * Created by mike10 on 12/8/2015.
     */
//# sourceMappingURL=Ex01_tests.js.map