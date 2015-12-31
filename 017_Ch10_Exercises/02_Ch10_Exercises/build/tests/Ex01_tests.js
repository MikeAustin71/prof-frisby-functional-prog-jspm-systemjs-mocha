'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai/lib/chai.js');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mike10 on 12/21/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "Write a function that add's two possibly null numbers together using Maybe and ap()";

describe("Ex01 Chapter 10 Exercises" + title, function () {

        describe("Ex01-1 - Maybe.of(2) + Maybe.of(3) = 5 ", function () {

                var ex1_1 = function ex1_1(x, y) {
                        return _data.Maybe.of(_ramda2.default.add).ap(_data.Maybe.of(x)).ap(_data.Maybe.of(y));
                };

                var expected = 5;

                var actual = ex1_1(2, 3);

                it("ex1_1(2,3) should return Maybe container with value = '5' ", function () {

                        _chai.assert.deepEqual(actual.get(), expected, "Error: 'ex1_1(2,3)' result is INVALID!");
                });
        });

        describe("Ex01-2 - Maybe.of(null) + Maybe.of(3) = 3", function () {

                var ex1_2 = function ex1_2(x, y) {
                        return _data.Maybe.of(_ramda2.default.add).ap(_data.Maybe.of(x)).ap(_data.Maybe.of(y));
                };

                var expected = 3;

                var actual = ex1_2(null, 3);

                it("ex1_2(null,3) should return Maybe container with value = '3' ", function () {

                        _chai.assert.deepEqual(actual.get(), expected, "Error: 'ex1_1(2,3)' result is INVALID!");
                });
        });

        describe("Ex01-3 - Maybe.of(null) + Maybe.of(null) = 0", function () {

                var ex1_3 = function ex1_3(x, y) {
                        return _data.Maybe.of(_ramda2.default.add).ap(_data.Maybe.of(x)).ap(_data.Maybe.of(y));
                };

                var expected = 0;

                var actual = ex1_3(null, null);

                it("ex1_3(null,null) should return Maybe container with value = '0' ", function () {

                        _chai.assert.deepEqual(actual.get(), expected, "Error: 'ex1_1(null,null)' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex01_tests.js.map