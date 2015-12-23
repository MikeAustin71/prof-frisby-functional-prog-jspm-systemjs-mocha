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
 * Created by mike10 on 12/21/2015.
 */

var __hotReload = exports.__hotReload = true;

describe("Ex03 Refactor firstStreetAddress as monad", function () {

    describe("Ex03-1 - mFirstAddressStreet Example", function () {

        var txAddr = {
            addresses: [{ street: { name: 'Hwy 290 West', number: '555555' }, Zip: 91210 }, { street: { name: 'Kimball Ave', number: '21360' }, Zip: 75911 }, { street: { name: 'DuckBill Trail', number: '5' }, Zip: 52119 }],
            cities: [{ city: 'Austin', state: 'TX' }, { city: 'Raymondville', state: 'TX' }, { city: 'Taylor', state: 'TX' }]

        };

        var expected = _data.Maybe.of({ name: 'Hwy 290 West', number: '555555' });
        var result = (0, _ExLib.mFirstAddressStreet)(txAddr);

        it("mFirstAddressStreet(txAddr) should return Maybe 1-level deep -> '{name: 'Hwy 290 West', number: '555555'}' ", function () {

            Chai.assert.deepEqual(expected, result, "Error: 'mFirstAddressStreet()' result is INVALID!");
        });
    });
});
//# sourceMappingURL=Ex03_tests.js.map