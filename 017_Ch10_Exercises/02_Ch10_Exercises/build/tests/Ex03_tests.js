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

var title = "Exercise 3 - Run both getPost(n) and getComments(n) then render the page with both. (the n arg is arbitrary)";

describe("Ex03 Chapter 10 Exercises" + title, function () {

    var makeComments = _ramda2.default.reduce(function (acc, c) {
        return acc + "<li>" + c + "</li>";
    }, "");
    var render = _ramda2.default.curry(function (p, cs) {
        return "<div>" + p.title + "</div>" + makeComments(cs);
    });

    describe("Ex03-1 - Task.of(render).ap(getPost(2)).ap(getComments(2)). See ExLib.js ", function () {

        var ex3_1 = _data.Task.of(render).ap((0, _ExLib.getPost)(2)).ap((0, _ExLib.getComments)(2));

        var expected = "<div>Love them tasks</div><li>This book should be illegal</li><li>Monads are like space burritos</li>";

        it("ex3_1 should return target html ", function (done) {
            ex3_1.fork(console.log, function (html) {
                _chai.assert.deepEqual(html, expected, "Error: 'Ex03-1' result is INVALID!");
                done();
            });
        });
    });

    describe("Ex03-2 - Alternate solution using liftA2 . See ExLib.js ", function () {

        var ex3_2 = (0, _ExLib.liftA2)(render, (0, _ExLib.getPost)(2), (0, _ExLib.getComments)(2));

        var expected = "<div>Love them tasks</div><li>This book should be illegal</li><li>Monads are like space burritos</li>";

        it("ex3_2 should return target html ", function (done) {
            ex3_2.fork(console.log, function (html) {
                _chai.assert.deepEqual(html, expected, "Error: 'Ex03-2' result is INVALID!");
                done();
            });
        });
    });
});
//# sourceMappingURL=Ex03_tests.js.map