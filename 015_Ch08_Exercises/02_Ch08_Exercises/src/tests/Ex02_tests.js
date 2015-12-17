/**
 * Created by mike10 on 12/16/2015.
 */

/**
 * Created by mike10 on 12/16/2015.
 */

export let __hotReload = true;

import * as Chai from 'chai';

import {firstInList, Identity} from './../xlib/ExLib.js';

describe("Ex02 Functor Exercises", function(){

//Exercise 2
// ==========
// Use _.head to get the first element of the list
// var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
// var ex2 = undefined

    describe("Ex02-1 - firstInList()", function(){

        var input = ['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'];
        var expected = Identity.of('do');
        var idInput = Identity.of(input);
        var result = firstInList(idInput);

        it("should return input head = 'do' from Functor firstInList ", function(){

            Chai.assert.deepEqual(expected.inspect,result.inspect,"Error: 'firstInList()' result is INVALID!");

        });

    });
});
