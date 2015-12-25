'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

var _support = require('./../xlib/support.js');

var S = _interopRequireWildcard(_support);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/23/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "Exercise 4 - " + "Use validateEmail, addToMailingList, and emailBlast to implement ex4's type signature.";

describe("Ex04 Chapter 9 Exercises" + title, function () {

        describe("Ex04-1 - Ebook Exercise - See ex4_1 & getResult in ExLib.js. Also checkout support.js", function () {

                it("ex4_1('notanemail') should return 'invalid email'", function () {

                        var expected = 'invalid email';
                        var r1 = (0, _ExLib.ex4_1)('notanemail');
                        var result = (0, _ExLib.getResult)(S.unsafePerformIO, r1);
                        Chai.assert.deepEqual(result, expected, "ex4_1('notanemail') returned invalid result!");
                });

                it("ex4_1('sleepy@grandpa.net') should return valid email 'emailed: sleepy@grandpa.net'", function () {

                        var expected = 'emailed: sleepy@grandpa.net';
                        var r1 = (0, _ExLib.ex4_1)('sleepy@grandpa.net');
                        var result = (0, _ExLib.getResult)(S.unsafePerformIO, r1);
                        Chai.assert.deepEqual(result, expected, "ex4_1('sleepy@grandpa.net') returned invalid result!");
                });
        });

        describe("Ex04-2 - Alternative To ex4_1 - See ex4_2 & getResult2 in ExLib.js. Also checkout support.js", function () {

                it("ex4_2('notanemail') should return 'invalid email'", function () {

                        var expected = 'invalid email';
                        var result = (0, _ExLib.getResult2)((0, _ExLib.ex4_2)('notanemail'));
                        Chai.assert.deepEqual(result, expected, "ex4_2('notanemail') returned invalid result!");
                });

                it("ex4_2('sleepy@grandpa.net') should return valid email 'emailed: sleepy@grandpa.net'", function () {

                        var expected = 'emailed: sleepy@grandpa.net';
                        var result = (0, _ExLib.getResult2)((0, _ExLib.ex4_2)('sleepy@grandpa.net'));

                        Chai.assert.deepEqual(result, expected, "ex4_2('sleepy@grandpa.net') returned invalid result!");
                });
        });
});
//# sourceMappingURL=Ex04_tests.js.map