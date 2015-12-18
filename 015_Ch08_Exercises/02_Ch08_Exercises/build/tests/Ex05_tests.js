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
 * Created by mike10 on 12/17/2015.
 */

var __hotReload = exports.__hotReload = true;

describe("Ex05 Functor Exercises", function () {

    // Exercise 5
    // ==========
    // Write a function that will getPost then toUpperCase the post's title

    describe("Ex05-1 -Write a function that will getPost then toUpperCase the post's title", function () {

        it("Exercise 05-1 Converting string to UpperCase from getPost ", function (done) {
            (0, _ExLib.getPostToUpper)(13).fork(console.log, function (res) {
                console.log("Ex05-1 res = " + res);
                Chai.assert.deepEqual('LOVE THEM FUTURES', res);
                done();
            });
        });
    });
});
//# sourceMappingURL=Ex05_tests.js.map