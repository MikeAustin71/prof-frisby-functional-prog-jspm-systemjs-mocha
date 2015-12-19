/**
 * Created by mike10 on 12/17/2015.
 */

export let __hotReload = true;

import * as Chai from 'chai';

import {validateLen3,Left, Right} from './../xlib/ExLib.js';

var msg = "Write a function that uses checkActive() and showWelcome() to grant access or return the error";

describe("Ex07 Functor Exercises -" + msg , function(){

// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return
// Right(x) if it is greater than 3 and Left("You need > 3") otherwise


    describe("Ex07-1 Process string with length greater than '3' ", function(){

        var input = "fpguy99";
        var expected = Right.of(input);
        var actual = validateLen3(input);

        it("Exercise 07-1 validateLen3(Length > 3) should show original input value 'fpguy99' ", function(){

            Chai.assert.deepEqual(actual, expected, "validateLen3() ERROR!");

        });
    });

    describe("Ex07-2 Process string with length = '3' ", function(){

        var input = '...';
        var expected = Left.of('You need > 3');
        var actual = validateLen3(input);

        it("Exercise 07-2 validateLen3(Length == 3) should show 'validateLen3' ", function(){

            Chai.assert.deepEqual(actual, expected, "validateLen3() ERROR!");

        });
    });
});


