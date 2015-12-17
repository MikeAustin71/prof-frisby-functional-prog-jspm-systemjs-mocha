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
 * Created by mike10 on 12/16/2015.
 */

var __hotReload = exports.__hotReload = true;

describe("Ex03 Functor Exercises", function () {

        // Exercise 3
        // ==========
        // Use safeProp and _.head to find the first initial of the user

        describe("Ex03-1 - safeProp()", function () {

                var user = { id: 2, name: "Albert" };
                var expected = _data.Maybe.of(user['name']);
                var result = (0, _ExLib.safeProp)('name', user);

                it("safeProp() should return name from user json  = 'Albert' ", function () {

                        Chai.assert.deepEqual(expected.getOrElse(null), result.getOrElse(null), "Error: 'safeProp()' result is INVALID!");
                });
        });

        // Exercise 3
        // ==========
        // Use safeProp and _.head to find the first initial of the user
        describe("Ex03-2 - findFirstInital()", function () {

                var user = { id: 2, name: "Albert" };
                var expected = _data.Maybe.of('A');
                var result = (0, _ExLib.findFirstInitial)(user);

                it("findFirstInitial should return first initial from name in user json  = 'A' ", function () {

                        Chai.assert.deepEqual(expected.getOrElse(null), result.getOrElse(null), "Error: 'findFirstInitial()' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex03_tests.js.map