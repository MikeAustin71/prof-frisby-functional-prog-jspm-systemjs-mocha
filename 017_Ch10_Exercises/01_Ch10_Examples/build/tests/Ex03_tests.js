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
 * Created by Amarillo Mike on 12/26/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "Examining - checkName";

describe("Ex03 Chapter 10 Examples" + title, function () {

        var user = { id: 1, name: "John Doe", email: "eric@supply.com" };
        var userBadEmail = { id: 1, name: "John Doe", email: "xx" };

        describe("Ex03-1 - This tests checkName(user) with a valid user. See ExLib.js ", function () {

                var expected = 'John Doe';

                var result = X.checkName(user);

                var actual = result.get();

                it("checkName should return Either.Right value = 'John Doe' ", function () {

                        _chai.assert.deepEqual(actual, expected, "Error: 'ex3_1() a' result is INVALID!");
                });
        });

        describe("Ex03-2 - This tests checkName(user) with an INVALID user. See ExLib.js", function () {

                var expected = "invalid name";

                var result = X.checkName(null);

                var actual = result.merge();

                it("checkName should return Either.Left value = 'invalid name' ", function () {

                        _chai.assert.deepEqual(actual, expected, "Error: 'ex1_1()' result is INVALID!");
                });
        });

        describe("Ex03-3 - checkEmail() with valid email address See ExLib.js ", function () {

                var expected = "eric@supply.com";

                var actual = X.checkEmail(user).get();

                it("checkEmail check should return 'valid' as 'eric@supply.com' ", function () {

                        _chai.assert.deepEqual(actual, expected, "Error: 'checkEmail()' result is INVALID!");
                });
        });

        describe("Ex03-4 - checkEmail() with INVALID email address See ExLib.js ", function () {

                var expected = "invalid email";

                var actual = X.checkEmail(userBadEmail).merge();

                it("checkEmail evaluate email as INVALID returning 'invalid email' ", function () {

                        _chai.assert.deepEqual(actual, expected, "Error: 'checkEmail()' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex03_tests.js.map