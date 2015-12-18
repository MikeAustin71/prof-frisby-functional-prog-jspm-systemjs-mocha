'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/17/2015.
 */

var __hotReload = exports.__hotReload = true;

var msg = "Write a function that uses checkActive() and showWelcome() to grant access or return the error";

describe("Ex06 Functor Exercises -" + msg, function () {

        // Exercise 6
        // ==========
        // Write a function that uses checkActive() and showWelcome() to grant access
        // or return the error

        describe("Ex06-1 Process inactive user 'Gary' ", function () {

                var user = { active: false, name: 'Gary' };
                var expected = _ExLib.Left.of('Your account is not active');
                var actual = (0, _ExLib.checkActiveShowWelcome)(user);

                it("Exercise 06-1 checkActiveShowWelcome should show 'Your account is not active' ", function () {

                        Chai.assert.deepEqual(actual, expected, "checkActiveShowWelcome() ERROR! actual = " + actual.toString());
                });
        });

        describe("Ex06-2 Process active user 'Theresa' ", function () {

                var user = { active: true, name: 'Theresa' };
                var expected = _ExLib.Right.of('Welcome Theresa');
                var actual = (0, _ExLib.checkActiveShowWelcome)(user);

                it("Exercise 06-2 checkActiveShowWelcome should show 'Welcome Theresa' ", function () {

                        Chai.assert.deepEqual(actual, expected, "checkActiveShowWelcome() ERROR! actual = " + actual.toString());
                });
        });
});
//# sourceMappingURL=Ex06_tests.js.map