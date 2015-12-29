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
 * Created by Amarillo Mike on 12/26/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "Examining - checkName";

describe("Ex03 Chapter 10 Examples" + title, function () {

        var user = { id: 1, name: "John Doe", email: "eric@supply.com" };

        describe("Ex03-1 - This tests checkName(user) with a valid user. See ExLib.js ", function () {

                var expected = 'John Doe';

                var result = X.checkName(user);

                var actual = result.get();

                it("checkName should return Either.Right value = 'John Doe' ", function () {

                        Chai.assert.deepEqual(actual, expected, "Error: 'ex3_1() a' result is INVALID!");
                });
        });

        describe("Ex03-2 - This tests checkName(user) with an INVALID user. See ExLib.js", function () {

                var expected = "invalid name";

                var result = X.checkName(null);

                var actual = result.merge();

                it("checkName should return Either.Left value = 'invalid name' ", function () {

                        Chai.assert.deepEqual(actual, expected, "Error: 'ex1_1()' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex03_tests.js.map