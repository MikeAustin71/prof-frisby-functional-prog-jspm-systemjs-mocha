'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/16/2015.
 */

/**
 * Created by mike10 on 12/16/2015.
 */

var __hotReload = exports.__hotReload = true;

describe("Ex02 Functor Exercises", function () {

        //Exercise 2
        // ==========
        // Use _.head to get the first element of the list
        // var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
        // var ex2 = undefined

        describe("Ex02-1 - firstInList()", function () {

                var input = ['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'];
                var expected = _ExLib.Identity.of('do');
                var idInput = _ExLib.Identity.of(input);
                var result = (0, _ExLib.firstInList)(idInput);

                it("should return input head = 'do' from Functor firstInList ", function () {

                        Chai.assert.deepEqual(expected.inspect, result.inspect, "Error: 'firstInList()' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex02_tests.js.map