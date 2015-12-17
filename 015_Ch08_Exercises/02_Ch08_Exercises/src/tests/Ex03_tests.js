/**
 * Created by mike10 on 12/16/2015.
 */

export let __hotReload = true;

import * as Chai from 'chai';

import {safeProp, findFirstInitial} from './../xlib/ExLib.js';

import {Maybe} from 'folktale/data';

describe("Ex03 Functor Exercises", function(){


// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user


    describe("Ex03-1 - safeProp()", function(){

        var user = { id: 2, name: "Albert" };
        var expected = Maybe.of(user['name']);
        var result = safeProp('name', user);

        it("safeProp() should return name from user json  = 'Albert' ", function(){

            Chai.assert.deepEqual(expected.getOrElse(null),result.getOrElse(null),"Error: 'safeProp()' result is INVALID!");

        });

    });

// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user
    describe("Ex03-2 - findFirstInital()", function(){

        var user = { id: 2, name: "Albert" };
        var expected = Maybe.of('A');
        var result = findFirstInitial(user);

        it("findFirstInitial should return first initial from name in user json  = 'A' ", function(){

            Chai.assert.deepEqual(expected.getOrElse(null),result.getOrElse(null),"Error: 'findFirstInitial()' result is INVALID!");

        });

    });

});

