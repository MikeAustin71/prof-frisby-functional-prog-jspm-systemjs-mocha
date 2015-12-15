'use strict';

var _support = require('./../xlib/support.js');

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _testData = require('./../exercises/testData');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe("Ex04 Composition Exercises", function () {

        describe("Ex04 - sanitizeNames Convert to lowercase and replace spaces with underscores", function () {

                var expected = ['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra'];
                var result = (0, _support.sanitizeNames)(_testData.CARS);

                it("should return lower case car names = '" + expected + "'", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'sanitizeNames' result is INVALID! result = " + result);
                });
        });
}); /**
     * Created by mike10 on 12/8/2015.
     */
//# sourceMappingURL=Ex04_tests.js.map