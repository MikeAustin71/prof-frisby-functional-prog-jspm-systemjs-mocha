/**
 * Created by mike10 on 12/18/2015.
 */

export let __hotReload = true;

import * as Chai from 'chai';

import {saveUser,unsafePerformIO,Left, Right} from './../xlib/ExLib.js';

var msg = "Use Ex07 above and 'Either' as a functor to save the user if they are valid or return the error message string.";

describe("Ex08 Functor Exercises -" + msg , function(){

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

    describe("Ex08-1 Save operation with valid user ", function(){

        var expected = "fpguy99-saved";
        var actual = saveUser("fpguy99").unsafePerformIO(); // Length > 3

        it("Exercise 08-1 saveUser(Length > 3) should show valid return value= 'fpguy99-saved' ", function(){

            Chai.assert.deepEqual(actual, expected, "saveUser() ERROR!");

        });
    });

    describe("Ex08-2 Save operation with INVALID user ", function(){

        var expected = 'You need > 3';
        var actual = saveUser("...").unsafePerformIO(); // Length > 3

        it("Exercise 08-1 saveUser('...') should show INVALID return value= 'You need > 3' ", function(){

            Chai.assert.deepEqual(actual, expected, "saveUser() ERROR!");

        });
    });


});
