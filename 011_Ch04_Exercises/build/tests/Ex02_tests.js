'use strict';

var _support = require('./../xlib/support.js');

var Support = _interopRequireWildcard(_support);

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/7/2015.
 */

describe("Ex02 Exercises", function () {
        describe("Filter Array for 'q' ", function () {

                var s021 = ['quick', 'camels', 'quarry', 'over', 'quails'];
                var expected021 = ['quick', 'quarry', 'quails'];
                var result = Support.filterQS(s021);

                it("should return one array with filtered elements beginning with 'q'", function () {

                        Chai.assert.deepEqual(result, expected021, "Error: Results did NOT match expected Filter outcome!");
                });
        });
});
//# sourceMappingURL=Ex02_tests.js.map