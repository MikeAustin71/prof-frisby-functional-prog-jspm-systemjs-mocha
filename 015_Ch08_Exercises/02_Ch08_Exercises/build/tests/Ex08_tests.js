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
 * Created by mike10 on 12/18/2015.
 */

var __hotReload = exports.__hotReload = true;

var msg = "Use Ex07 above and 'Either' as a functor to save the user if they are valid or return the error message string.";

describe("Ex08 Functor Exercises -" + msg, function () {

        // Exercise 8
        // ==========
        // Use ex7 above and Either as a functor to save the user if they are valid or
        // return the error message string. Remember either's two arguments must return
        // the same type.

        //var save = function(x){
        //    return new IO(function(){
        //        console.log("SAVED USER!");
        //        return x + '-saved';
        //    });
        //};

        describe("Ex08-1 Save operation with valid user ", function () {

                var expected = "fpguy99-saved";
                var actual = (0, _ExLib.saveUser)("fpguy99").unsafePerformIO(); // Length > 3

                it("Exercise 08-1 saveUser(Length > 3) should show valid return value= 'fpguy99-saved' ", function () {

                        Chai.assert.deepEqual(actual, expected, "saveUser() ERROR!");
                });
        });

        describe("Ex08-2 Save operation with INVALID user ", function () {

                var expected = 'You need > 3';
                var actual = (0, _ExLib.saveUser)("...").unsafePerformIO(); // Length > 3

                it("Exercise 08-1 saveUser('...') should show INVALID return value= 'You need > 3' ", function () {

                        Chai.assert.deepEqual(actual, expected, "saveUser() ERROR!");
                });
        });
});
//# sourceMappingURL=Ex08_tests.js.map