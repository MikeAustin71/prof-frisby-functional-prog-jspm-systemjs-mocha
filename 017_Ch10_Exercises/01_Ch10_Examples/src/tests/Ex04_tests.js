/**
 * Created by Amarillo Mike on 12/29/2015.
 */
export let  __hotReload = true;

import {assert} from 'chai/lib/chai.js';
import * as X from './../xlib/ExLib.js';
import {Either,Maybe,Task} from 'folktale/data';

var title = "Lift - "
    + "Testing 'Lift' techniques";

describe("Ex04 Chapter 10 Examples" + title, function(){

    describe("Ex04-1 - liftA2 should add Maybe(2) + Maybe(3) -> Maybe(5) See ExLib.js ", function(){

        var expected =5;

        var actual = X.liftA2(X.add2, Maybe.of(2), Maybe.of(3));

        it("liftA2 should add two Maybe's and return = 5 ", function(){

            assert.deepEqual(actual.get(), expected,"Error: 'liftA2' result is INVALID!");

        });

    });

    describe("Ex04-2 - liftA3 should add Maybe(1) + Maybe(2) + Maybe(3) -> Maybe(6). See ExLib.js ", function(){

        var expected =6;

        var actual = X.liftA3(X.add3, Maybe.of(1), Maybe.of(2), Maybe.of(3));

        it("liftA2 should add three Maybe's and return = (1+2+3) = 6 ", function(){

            assert.deepEqual(actual.get(), expected,"Error: 'liftA3' result is INVALID!");

        });

    });

});



