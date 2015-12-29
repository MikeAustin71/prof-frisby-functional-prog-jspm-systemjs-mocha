'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.__hotReload = undefined;

var _chai = require('chai/lib/chai.js');

var _data = require('folktale/data');

var _control = require('folktale/control');

/**
 * Created by mike10 on 12/20/2015.
 */

var __hotReload = exports.__hotReload = true;

describe("Ex02 Join Exercises", function () {

        describe("Ex01-1 - Join Example: mmo = Maybe.of(Maybe.of('numchucks'))", function () {

                var mmo = _data.Maybe.of(_data.Maybe.of('numchucks'));
                var expected = _data.Maybe.of('numchucks');
                var result = _control.monads.join(mmo);

                it("monads.join(mmo) should return 'numchucks' ", function () {

                        _chai.assert.deepEqual(expected.get(), result.get(), "Error: 'monads.join()' result is INVALID!");
                });
        });
});
//# sourceMappingURL=Ex02_tests.js.map