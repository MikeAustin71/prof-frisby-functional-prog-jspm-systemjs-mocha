'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

var _data = require('folktale/data');

var _control = require('folktale/control');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/22/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "Exercise 2 - " + "Use getFile to get the filename, remove the directory so it's just the file, " + "then purely log it.";

describe("Ex02 Chapter 9 Exercises" + title, function () {

        describe("Ex02-1 - Uses 'IO' from support.js. Also, see ExLib.js", function () {

                var expected = 'logged ExLib.js';

                var result = (0, _ExLib.ex2_1)(undefined).unsafePerformIO();

                it("ex2_1(user) should return name = " + expected, function () {

                        Chai.assert.equal(expected, result, "Error: 'ex2_1(user)' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex02_tests.js.map