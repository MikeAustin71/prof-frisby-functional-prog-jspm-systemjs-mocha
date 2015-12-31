/**
 * Created by mike10 on 12/25/2015.
 */

export let  __hotReload = true;

import {assert} from 'chai/lib/chai.js';
import * as X from './../xlib/ExLib.js';
import _ from 'ramda';
import {Either,Maybe,Task} from 'folktale/data';
import {monads} from 'folktale/control';

var title = "Maybe Test 2 - "
    + "Use folktale's Maybe to process container values.";

describe("Ex02 Chapter 10 Examples" + title, function(){

    describe("Ex02-1 - This tests folktale 'Maybe.ap' See ExLib.js ", function(){

        var actual = X.ex2_1(4,2);

        var expected = 6;

        it("ex2_1 should return Maybe container with value = '6' ", function(){

            assert.deepEqual(actual.value, expected,"Error: 'ex2_1()' result is INVALID!");

        });

    });

    describe("Ex02-2 - Uses Maybe.ap to input and add values from two containers. The result is computed as third container. See ExLib.js ", function(){

        var expected =  Maybe.of(7);
        var m1 = Maybe.of(8);
        var m2 = Maybe.of(-1);
        var actual = X.ex2_2(m1, m2);

        it("ex2_2 should return the addition of two containers formatted as third container with value = '7' ", function(){

            assert.deepEqual(actual.get(), expected.get(),"Error: 'ex2_2()' result is INVALID!");

        });

    });

    describe("Ex02-3 - Add two values.  Call addition with null value: ex2_3(4,null).", function(){

        var ex2_3 = function(x, y) {
            return Maybe.of(_.add).ap(Maybe.of(x)).ap(Maybe.of(y));
        };

        var expected =  4;
        var actual = ex2_3(4, null);

        it("ex2_3  ex2_3(4, null) should return value = 4 ", function(){

            assert.deepEqual(actual.get(), expected,"Error: ex2_3 result is INVALID!");

        });

    });


});
