'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai/lib/chai.js');

var _ExLib = require('./../xlib/ExLib.js');

var X = _interopRequireWildcard(_ExLib);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _control = require('folktale/control');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/25/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "Maybe Test 2 - " + "Use folktale's Maybe to process container values.";

describe("Ex02 Chapter 10 Examples" + title, function () {

        describe("Ex02-1 - This tests folktale 'Maybe.app' See ExLib.js ", function () {

                var actual = X.ex2_1(4, 2);

                var expected = 6;

                it("ex2_1 should return Maybe container with value = '6' ", function () {

                        _chai.assert.deepEqual(actual.value, expected, "Error: 'ex2_1()' result is INVALID!");
                });
        });

        describe("Ex02-2 - Uses Maybe.app to input and add values from two containers. The result is computed as third container. See ExLib.js ", function () {

                var expected = _data.Maybe.of(7);
                var m1 = _data.Maybe.of(8);
                var m2 = _data.Maybe.of(-1);
                var actual = X.ex2_2(m1, m2);

                it("ex2_2 should return the addition of two containers formatted as third container with value = '7' ", function () {

                        _chai.assert.deepEqual(actual.get(), expected.get(), "Error: 'ex2_2()' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex02_tests.js.map