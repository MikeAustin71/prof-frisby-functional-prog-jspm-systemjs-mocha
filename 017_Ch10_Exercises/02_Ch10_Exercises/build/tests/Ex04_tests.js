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

var title = "Exercise 4 - Write an IO that gets both player1 and player2 from the cache and starts the game";

describe("Ex04 Chapter 10 Exercises" + title, function () {

    var localStorage = {};

    localStorage.player1 = "toby";
    localStorage.player2 = "sally";

    var getCache = function getCache(x) {
        return new _ExLib.IO(function () {
            return localStorage[x];
        });
    };

    var game = _ramda2.default.curry(function (p1, p2) {
        return p1 + ' vs ' + p2;
    });

    describe("Ex04-1 - liftA2(game, getCache('player1'), getCache('player2')) - See ExLib.js ", function () {

        var ex4_1 = (0, _ExLib.liftA2)(game, getCache('player1'), getCache('player2'));

        var expected = "toby vs sally";

        var actual = ex4_1.unsafePerformIO();

        it("ex4_1.unsafePerformIO() should return value = 'toby vs sally' ", function () {

            _chai.assert.deepEqual(actual, expected, "Error: 'Ex04-1' result is INVALID!");
        });
    });
});
//# sourceMappingURL=Ex04_tests.js.map