'use strict';

var _support = require('./../xlib/support.js');

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/7/2015.
 */

describe("Ex01a Exercises", function () {
       describe("sentence arrays", function () {

              var s01a1 = ["Jingle bells Batman smells", "Robin laid an egg"];
              var expected01a1 = [['Jingle', 'bells', 'Batman', 'smells'], ['Robin', 'laid', 'an', 'egg']];

              it("should return two arrays containing individual words", function () {

                     Chai.assert.deepEqual((0, _support.sentence)(s01a1), expected01a1, "Error: Results don't match expected outcome!");
              });
       });
});
//# sourceMappingURL=Ex01a_tests.js.map