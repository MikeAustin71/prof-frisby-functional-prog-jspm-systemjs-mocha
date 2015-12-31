/**
 * Created by Amarillo Mike on 12/31/2015.
 */

export let __hotReload = true;

import {assert} from 'chai/lib/chai.js';

import {liftA2} from './../xlib/ExLib.js';

import _ from 'ramda';

import {Maybe} from 'folktale/data';

var title = "Exercise 2 - Now write a function that takes 2 Maybe's and adds them. Use liftA2 instead of ap().";

describe("Ex02 Chapter 10 Exercises" + title, function(){

    describe("Ex02-1 - liftA2(_.add, Maybe.of(2), Maybe.of(3))  See ExLib.js ", function(){

        var expected = 5;

        var actual = liftA2(_.add, Maybe.of(2), Maybe.of(3));

        it("liftA2(_.add, Maybe.of(2), Maybe.of(3)) should return value = 5", function(){

            assert.deepEqual(actual.get(), expected,"Error: Ex02-1 result is INVALID!");

        });

    });

    describe("Ex02-2 - Professor Frisby's solution ex2_2 = liftA2(_.add). See ExLib.js ", function(){

        var expected = 5;

        var ex2_2 = liftA2(_.add);

        var actual = ex2_2(Maybe.of(2), Maybe.of(3));

        it("ex2_2(Maybe.of(2), Maybe.of(3)) should return value = 5", function(){

            assert.deepEqual(actual.get(), expected,"Error: Ex02-2 result is INVALID!");

        });

    });

});

