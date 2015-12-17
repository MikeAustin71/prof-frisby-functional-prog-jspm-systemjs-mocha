'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

var _data = require('folktale/data');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/16/2015.
 */

var __hotReload = exports.__hotReload = true;

describe("Ex04 Functor Exercises", function () {

        // Exercise 4
        // ==========
        // Use Maybe to rewrite ex4 without an if statement
        //var ex4 = function (n) {
        //    if (n) { return parseInt(n); }
        //};

        describe("Ex04-1 - parse valid integer intParse()", function () {

                var input = "3";
                var expected = _data.Maybe.of(3);
                var result = (0, _ExLib.intParse)(input);

                it("intParse should return integer 3 for input string '3' ", function () {

                        Chai.assert.deepEqual(expected.get(), result.get(), "Error: 'intParse()' result is INVALID!");
                });
        });

        describe("Ex04-2 - parse INVALID integer string with intParse()", function () {

                var input = "Hello world";
                var expected = _data.Maybe.Just(NaN);
                var result = (0, _ExLib.intParse)(input);

                it("intParse should return Maybe with value of 'NaN' for invalid input string 'hello world' ", function () {

                        Chai.assert.deepEqual(expected.get(), result.get(), "Error: 'intParse()' result is INVALID!");
                });
        });

        describe("Ex04-3 - parse null string with intParse()", function () {

                var input = null;
                var expected = _data.Maybe.Just(NaN);
                var result = (0, _ExLib.intParse)(input);

                it("intParse should return Maybe with value of 'NaN' for invalid input = null ", function () {

                        Chai.assert.deepEqual(expected.get(), result.get(), "Error: 'intParse()' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex04_tests.js.map