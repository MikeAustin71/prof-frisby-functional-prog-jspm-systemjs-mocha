'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.__hotReload = undefined;

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

var X = _interopRequireWildcard(_ExLib);

var _data = require('folktale/data');

var _control = require('folktale/control');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/21/2015.
 */

var __hotReload = exports.__hotReload = true;

var title = "Exercise 1 - " + "Use safeProp and map/join or chain to safely get the street name when given " + "a user.";

describe("Ex01 Chapter 9 Exercises" + title, function () {

    var user = {
        id: 2,
        name: "albert",
        address: {
            street: {
                number: 22,
                name: 'Walnut St'
            }
        }
    };

    describe("Ex01-1 - This technique uses 'join'. See ExLib.js ", function () {

        var expected = _data.Maybe.of('Walnut St');

        var result = X.ex1_1(user);

        it("ex1_1(user) should return name = 'Walnut St' ", function () {

            Chai.assert.deepEqual(expected.get(), result.get(), "Error: 'ex1_1(user)' result is INVALID!");
        });
    });

    describe("Ex01-2 - This technique uses 'chain'. See ExLib.js ", function () {

        var expected = _data.Maybe.of('Walnut St');

        var result = X.ex1_2(user);

        it("ex1_2(user) should return name = 'Walnut St' ", function () {

            Chai.assert.deepEqual(expected.get(), result.get(), "Error: 'ex1_2(user)' result is INVALID!");
        });
    });
});
//# sourceMappingURL=Ex01_tests.js.map