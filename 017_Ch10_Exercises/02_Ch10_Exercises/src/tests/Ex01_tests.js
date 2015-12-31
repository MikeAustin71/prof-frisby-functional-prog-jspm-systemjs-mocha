/**
 * Created by mike10 on 12/21/2015.
 */

export let __hotReload = true;

import {assert} from 'chai/lib/chai.js';

import _ from 'ramda';

import {Maybe} from 'folktale/data';

var title = "Write a function that add's two possibly null numbers together using Maybe and ap()";

describe("Ex01 Chapter 10 Exercises" + title, function(){


    describe("Ex01-1 - Maybe.of(2) + Maybe.of(3) = 5 ", function(){

        var ex1_1 = function(x,y){
            return Maybe.of(_.add).ap(Maybe.of(x)).ap(Maybe.of(y));
        };

        var expected = 5;

        var actual = ex1_1(2,3);

        it("ex1_1(2,3) should return Maybe container with value = '5' ", function(){

            assert.deepEqual(actual.get(), expected,"Error: 'ex1_1(2,3)' result is INVALID!");

        });

    });

    describe("Ex01-2 - Maybe.of(null) + Maybe.of(3) = 3", function(){

        var ex1_2 = function(x,y){
            return Maybe.of(_.add).ap(Maybe.of(x)).ap(Maybe.of(y));
        };

        var expected = 3;

        var actual = ex1_2(null,3);

        it("ex1_2(null,3) should return Maybe container with value = '3' ", function(){

            assert.deepEqual(actual.get(), expected,"Error: 'ex1_1(2,3)' result is INVALID!");

        });

    });

    describe("Ex01-3 - Maybe.of(null) + Maybe.of(null) = 0", function(){

        var ex1_3 = function(x,y){
            return Maybe.of(_.add).ap(Maybe.of(x)).ap(Maybe.of(y));
        };

        var expected = 0;

        var actual = ex1_3(null,null);

        it("ex1_3(null,null) should return Maybe container with value = '0' ", function(){

            assert.deepEqual(actual.get(), expected,"Error: 'ex1_1(null,null)' result is INVALID!");

        });

    });

});
