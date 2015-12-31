'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai/lib/chai.js');

var _ExLib = require('./../xlib/ExLib.js');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Amarillo Mike on 12/31/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "Exercise 2 - Now write a function that takes 2 Maybe's and adds them. Use liftA2 instead of ap().";

describe("Ex02 Chapter 10 Exercises" + title, function () {

        describe("Ex02-1 - liftA2(_.add, Maybe.of(2), Maybe.of(3))  See ExLib.js ", function () {

                var expected = 5;

                var actual = (0, _ExLib.liftA2)(_ramda2.default.add, _data.Maybe.of(2), _data.Maybe.of(3));

                it("liftA2(_.add, Maybe.of(2), Maybe.of(3)) should return value = 5", function () {

                        _chai.assert.deepEqual(actual.get(), expected, "Error: Ex02-1 result is INVALID!");
                });
        });

        describe("Ex02-2 - Professor Frisby's solution ex2_2 = liftA2(_.add). See ExLib.js ", function () {

                var expected = 5;

                var ex2_2 = (0, _ExLib.liftA2)(_ramda2.default.add);

                var actual = ex2_2(_data.Maybe.of(2), _data.Maybe.of(3));

                it("ex2_2(Maybe.of(2), Maybe.of(3)) should return value = 5", function () {

                        _chai.assert.deepEqual(actual.get(), expected, "Error: Ex02-2 result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex02_tests.js.map