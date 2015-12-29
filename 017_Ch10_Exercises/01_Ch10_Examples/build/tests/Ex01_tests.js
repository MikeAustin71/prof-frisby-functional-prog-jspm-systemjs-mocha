'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

var X = _interopRequireWildcard(_ExLib);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _control = require('folktale/control');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/21/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "Maybe Test 1 - " + "Use folktale's Maybe to compare values.";

describe("Ex01 Chapter 10 Examples" + title, function () {

        describe("Ex01-1 - This tests folktale 'Maybe'comparisons method See ExLib.js ", function () {

                var expected = _data.Maybe.of('Walnut St');

                var actual = X.ex1_1('Walnut St');

                it("ex1_1 should return Maybe container with value = 'Walnut St' ", function () {

                        Chai.assert.deepEqual(actual.get(), expected.get(), "Error: 'ex1_1()' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex01_tests.js.map