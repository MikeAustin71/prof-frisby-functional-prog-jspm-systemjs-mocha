'use strict';

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/18/2015.
 */

describe("Ex02 Testing function 'hasSpaces'", function () {

        describe("Ex02-1 - hasSpaces('spaceless') ", function () {

                var expected = null;
                var result = (0, _ExLib.hasSpaces)('spaceless');

                it("hasSpaces('spaceless') should return 'null'", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'hasSpaces()' result is INVALID! result = " + result);
                });
        });

        describe("Ex02-2 - hasSpaces('hello world')", function () {

                var expected = [' '];
                var result = (0, _ExLib.hasSpaces)('hello world');

                it("hasSpaces('hello world') should return an array with one space [' ']", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'hasSpaces()' result is INVALID! result = " + result);
                });
        });
});
//# sourceMappingURL=Ex02_tests.js.map