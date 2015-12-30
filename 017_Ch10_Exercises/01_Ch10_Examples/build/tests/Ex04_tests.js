'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai/lib/chai.js');

var _ExLib = require('./../xlib/ExLib.js');

var X = _interopRequireWildcard(_ExLib);

var _data = require('folktale/data');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by Amarillo Mike on 12/29/2015.
 */
var __hotReload = exports.__hotReload = true;

var title = "Lift - " + "Testing 'Lift' techniques";

describe("Ex04 Chapter 10 Examples" + title, function () {

        describe("Ex04-1 - liftA2 should add Maybe(2) + Maybe(3) -> Maybe(5) See ExLib.js ", function () {

                var expected = 5;

                var actual = X.liftA2(X.add2, _data.Maybe.of(2), _data.Maybe.of(3));

                it("liftA2 should add two Maybe's and return = 5 ", function () {

                        _chai.assert.deepEqual(actual.get(), expected, "Error: 'liftA2' result is INVALID!");
                });
        });

        describe("Ex04-2 - liftA3 should add Maybe(1) + Maybe(2) + Maybe(3) -> Maybe(6). See ExLib.js ", function () {

                var expected = 6;

                var actual = X.liftA3(X.add3, _data.Maybe.of(1), _data.Maybe.of(2), _data.Maybe.of(3));

                it("liftA2 should add three Maybe's and return = (1+2+3) = 6 ", function () {

                        _chai.assert.deepEqual(actual.get(), expected, "Error: 'liftA3' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex04_tests.js.map