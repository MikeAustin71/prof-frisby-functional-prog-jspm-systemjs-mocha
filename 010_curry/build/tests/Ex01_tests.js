'use strict';

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/18/2015.
 */

describe("Ex01 match space in string test", function () {

        describe("Ex01-1 - match regex '/\s+/g' (space)", function () {

                var expected = [' '];
                var result = (0, _ExLib.match)(/\s+/g, "hello world");

                it("match 'hello world' should return [' '] ( array of one space) from match '/\s+/g' ", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'match()' result is INVALID! match = " + result);
                });
        });

        describe("Ex01-2 - match space in 'spaceless' string", function () {

                var expected = null;
                var result = (0, _ExLib.match)(/\s+/g, "spaceless");

                it("match space in 'spaceless' (string with no spaces) should yield 'null' return ", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'match()' result is INVALID! match = " + result);
                });
        });
});
//# sourceMappingURL=Ex01_tests.js.map