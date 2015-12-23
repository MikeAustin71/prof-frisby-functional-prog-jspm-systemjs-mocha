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

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/22/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "Exercise 3 - " + "Use getPost() then pass the post's id to getComments().";

describe("Ex03 Chapter 9 Exercises" + title, function () {

    describe("Ex03-1 - See getPost() and getComments() in ExLib.js. Also checkout support.js", function () {

        var expected = [13, 13];
        var result;

        it("ex3_1(13) should return [13, 13]", function (done) {

            (0, _ExLib.ex3_1)(13).fork(console.log, function (res) {
                Chai.assert.deepEqual(res.map(_ramda2.default.prop('post_id')), expected);
                done();
            });
        });
    });
});
//# sourceMappingURL=Ex03_tests.js.map