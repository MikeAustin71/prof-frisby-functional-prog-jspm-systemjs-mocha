/**
 * Created by mike10 on 12/16/2015.
 */

import * as Chai from 'chai';

import {add1} from './../xlib/ExLib.js';

describe("Ex01 Functor Exercises", function(){

// Exercise 1
// ==========
// Use _.add(x,y) and _.map(f,x) to make a function that increments a value
// inside a functor

    describe("Ex01-1 - add1 functor", function(){

        var input = [3,5,9];
        var expected = [4,6,10];
        var result = add1(input);

        it("should return input ([3,5,9]) + 1 = [4,6,10] from Functor add1() ", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'add1()' result is INVALID!");

        });

    });

    describe("Ex01-2 - run add1 functor on a single value ", function(){

        var input = [3];
        var expected = [4];
        var result = add1(input);

        it("should return input ([3]) + 1 = [4] from Functor add1() ", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'add1()' result is INVALID!");

        });

    });

});
