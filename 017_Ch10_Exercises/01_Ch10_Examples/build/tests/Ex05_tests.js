'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.__hotReload = undefined;

var _chai = require('chai/lib/chai.js');

var _ExLib = require('./../xlib/ExLib.js');

var X = _interopRequireWildcard(_ExLib);

var _data = require('folktale/data');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by Amarillo Mike on 12/29/2015.
 */
var __hotReload = exports.__hotReload = true;

var title = "Testing Tasks - " + "Uses Tasks and ap methods.";

describe("Ex05 Chapter 10 Examples" + title, function () {

    describe("Ex05-1 - Add Two Tasks together. See ExLib.js ", function () {

        var expected = 5;

        it("Ex05-1 Task.of(X.add2).ap(Task.of(2)).ap(Task.of(3)) = 5 ", function (done) {

            _data.Task.of(X.add2).ap(_data.Task.of(2)).ap(_data.Task.of(3)).fork(console.log, function (result) {
                _chai.assert.deepEqual(result, expected, "Error: 'Ex05-1' result is INVALID!");
            });

            done();
        });
    });

    describe("Ex05-2 - Use LiftA2 to add two Tasks together. See ExLib.js ", function () {

        var expected = 5;

        it("Ex05-2 liftA2(add2, Task.of(2), Task.of(3) ) = 5 ", function (done) {

            X.liftA2(X.add2, _data.Task.of(2), _data.Task.of(3)).fork(console.log, function (result) {
                _chai.assert.deepEqual(result, expected, "Error: 'Ex05-2' result is INVALID!");
            });

            done();
        });
    });

    describe("Ex05-3 - Use LiftA3 to add three Tasks together. See ExLib.js ", function () {

        var expected = 6;

        it("Ex05-3 liftA3(X.add3, Task.of(1), Task.of(2), Task.of(3) ) = 6 ", function (done) {

            X.liftA3(X.add3, _data.Task.of(1), _data.Task.of(2), _data.Task.of(3)).fork(console.log, function (result) {
                _chai.assert.deepEqual(result, expected, "Error: 'Ex05-3' result is INVALID!");
            });

            done();
        });
    });
});
//# sourceMappingURL=Ex05_tests.js.map