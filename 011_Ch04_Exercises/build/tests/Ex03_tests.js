'use strict';

var _support = require('./../xlib/support.js');

var Support = _interopRequireWildcard(_support);

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/7/2015.
 */

describe("Ex03 Exercises", function () {
        describe("Get max value from an array ", function () {

                var s031 = [323, 523, 554, 123, 5234];
                var expected = 5234;
                var result = Support.max(s031);

                it("should return one maximum value from an array of values ", function () {

                        Chai.assert.deepEqual(result, expected, "Error: maximum value was NOT identified!");
                });
        });
});
//# sourceMappingURL=Ex03_tests.js.map