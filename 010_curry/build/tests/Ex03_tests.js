'use strict';

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/18/2015.
 */

describe("Ex03 Testing function 'filter'", function () {

        describe("Ex03-1 - filter(hasSpaces, ['tori_spelling', 'tori amos'])", function () {

                var expected = ['tori amos'];
                var result = (0, _ExLib.filter)(_ExLib.hasSpaces, ["tori_spelling", "tori amos"]);

                it("filter(hasSpaces, ['tori_spelling', 'tori amos']) should return ['tori amos']", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'filter()' result is INVALID! result = " + result);
                });
        });

        describe("Ex03-2 - Test findSpaces = filter(hasSpaces) function", function () {

                var findSpaces = (0, _ExLib.filter)(_ExLib.hasSpaces);
                var expected = ['tori amos'];
                var result = findSpaces(['tori_spelling', 'tori amos']);

                it("findSpaces(['tori_spelling', 'tori amos']) should return ['tori amos']", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'findSpaces()' result is INVALID! result = " + result);
                });
        });
});
//# sourceMappingURL=Ex03_tests.js.map