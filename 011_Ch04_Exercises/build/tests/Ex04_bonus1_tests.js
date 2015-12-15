'use strict';

var _support = require('./../xlib/support.js');

var Support = _interopRequireWildcard(_support);

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/7/2015.
 */

describe("Ex04 Bonus Exercise 1", function () {
        describe("curry a slice function ", function () {

                var s031 = ['a', 'b', 'c'];
                var expected = ['b', 'c'];
                var result = Support.slice(1, 3, s031);

                it("should 0,3 return 'b' and 'c' from 'a,b,c,' ", function () {

                        Chai.assert.deepEqual(expected, result, "Error: maximum value was NOT identified!");
                });
        });
});
//# sourceMappingURL=Ex04_bonus1_tests.js.map