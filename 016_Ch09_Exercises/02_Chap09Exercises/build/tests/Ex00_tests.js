'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.__hotReload = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _control = require('folktale/control');

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _TLib = require('./../xlib/TLib.js');

var T = _interopRequireWildcard(_TLib);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mike10 on 12/24/2015.
 */

var __hotReload = exports.__hotReload = true;

describe("Ex00 Tests ", function () {

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

    describe("Ex00-1 - Tests folktale Maybe ", function () {

        var expected = _data.Maybe.of('Walnut St');

        var result = expected;

        it("Maybe Result should return name = 'Walnut St' ", function () {

            Chai.assert.deepEqual(expected.get(), result.get(), "Error: 'ex00_1' result is INVALID!");
        });
    });

    describe("Ex00-2 - Tests external TLib ", function () {

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

        var expected = _data.Maybe.of("albert");

        var result = T.safeProp("name", user);

        it("Maybe Result should return name = 'albert' ", function () {

            Chai.assert.deepEqual(expected.get(), result.get(), "Error: 'ex00_2' result is INVALID!");
        });
    });

    describe("Ex00-3 - This technique uses 'chain'. See TLib.js ", function () {

        var expected = _data.Maybe.of('Walnut St');

        var result = T.ex00_3(user);

        it("ex00_3(user) should return name = 'Walnut St' ", function () {

            Chai.assert.deepEqual(expected.get(), result.get(), "Error: 'ex00_3(user)' result is INVALID!");
        });
    });
});
//# sourceMappingURL=Ex00_tests.js.map