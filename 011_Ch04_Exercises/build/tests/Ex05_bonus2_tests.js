'use strict';

var _support = require('./../xlib/support.js');

var Support = _interopRequireWildcard(_support);

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/7/2015.
 */

describe("Ex05 Bonus Exercise 2", function () {
        describe("curry a slice function ", function () {

                var s051 = ['a', 'b', 'c'];
                var expected = ['a', 'b'];
                var result = Support.take(2, s051);

                it("take parm 2 should return 'a' and 'b' from 'a,b,c,' ", function () {

                        Chai.assert.deepEqual(expected, result, "Error: correct 'take' values were NOT identified!");
                });
        });
});
//# sourceMappingURL=Ex05_bonus2_tests.js.map