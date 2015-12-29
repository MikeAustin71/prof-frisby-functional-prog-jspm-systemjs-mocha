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
 * Created by Amarillo Mike on 12/28/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "  Task - Examples ";

describe("Ex06 Chapter 9 Examples" + title, function () {

    describe("Ex06-1 - Creating a Task with a number value. See ExLib.js ", function () {

        var expected = 9;

        it("ex6_1 should return number value = 9 ", function (done) {

            X.getNum(9).fork(console.log, function (res) {
                Chai.assert.deepEqual(res.num, expected, "Error: 'ex6_1()' result is INVALID!");
            });

            done();
        });
    });
});
//# sourceMappingURL=Ex06_tests.js.map