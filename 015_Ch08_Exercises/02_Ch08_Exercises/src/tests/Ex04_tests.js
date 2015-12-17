/**
 * Created by mike10 on 12/16/2015.
 */

export let __hotReload = true;

import * as Chai from 'chai';

import {intParse} from './../xlib/ExLib.js';

import {Maybe} from 'folktale/data';

describe("Ex04 Functor Exercises", function(){


// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement
//var ex4 = function (n) {
//    if (n) { return parseInt(n); }
//};

    describe("Ex04-1 - parse valid integer intParse()", function(){

        var input = "3";
        var expected = Maybe.of(3);
        var result = intParse(input);

        it("intParse should return integer 3 for input string '3' ", function(){

            Chai.assert.deepEqual(expected.get(),result.get(),"Error: 'intParse()' result is INVALID!");

        });

    });

    describe("Ex04-2 - parse INVALID integer string with intParse()", function(){

        var input = "Hello world";
        var expected = Maybe.Just(NaN);
        var result = intParse(input);

        it("intParse should return Maybe with value of 'NaN' for invalid input string 'hello world' ", function(){

            Chai.assert.deepEqual(expected.get(),result.get(),"Error: 'intParse()' result is INVALID!");

        });

    });

    describe("Ex04-3 - parse null string with intParse()", function(){

        var input = null;
        var expected = Maybe.Just(NaN);
        var result = intParse(input);

        it("intParse should return Maybe with value of 'NaN' for invalid input = null ", function(){

            Chai.assert.deepEqual(expected.get(),result.get(),"Error: 'intParse()' result is INVALID!");

        });

    });


});


