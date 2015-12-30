/**
 * Created by mike10 on 12/21/2015.
 */

export let  __hotReload = true;

import {assert} from 'chai/lib/chai.js';
import * as X from './../xlib/ExLib.js';
import _ from 'ramda';
import {Either,Maybe,Task} from 'folktale/data';
import {monads} from 'folktale/control';

var title = "Maybe Test 1 - "
    + "Use folktale's Maybe to compare values.";

describe("Ex01 Chapter 10 Examples" + title, function(){

    describe("Ex01-1 - This tests folktale 'Maybe'comparisons method See ExLib.js ", function(){

        var expected = Maybe.of('Walnut St');

        var actual = X.ex1_1('Walnut St');

        it("ex1_1 should return Maybe container with value = 'Walnut St' ", function(){

            assert.deepEqual(actual.get(), expected.get(),"Error: 'ex1_1()' result is INVALID!");

        });

    });

});

