'use strict';

var _support = require('./../xlib/support.js');

var Support = _interopRequireWildcard(_support);

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/7/2015.
 */

describe("Ex06 Mike Bonus Exercise 3", function () {
        describe("curry a slice function ", function () {

                var s051 = ['a', ['b', 'c', 'd'], 'e', ['f', ['g', 'h', 'i'], 'j'], 'k', ['l', ['m', 'n', 'o'], 'p'], 'q'];
                var expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q'];
                var result = Support.flatten(s051);

                it("flatten should return a single result array ", function () {

                        Chai.assert.deepEqual(expected, result, "Error: correct 'take' values were NOT identified!");
                });
        });
});
//# sourceMappingURL=Ex06_mikebonus3_tests.js.map