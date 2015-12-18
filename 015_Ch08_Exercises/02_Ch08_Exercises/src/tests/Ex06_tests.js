/**
 * Created by mike10 on 12/17/2015.
 */

export let __hotReload = true;

import * as Chai from 'chai';

import {checkActiveShowWelcome,Left, Right} from './../xlib/ExLib.js';

var msg = "Write a function that uses checkActive() and showWelcome() to grant access or return the error";

describe("Ex06 Functor Exercises -" + msg , function(){

// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access
// or return the error


    describe("Ex06-1 Process inactive user 'Gary' ", function(){

        var user = {active: false, name: 'Gary'};
        var expected = Left.of('Your account is not active');
        var actual = checkActiveShowWelcome(user);

        it("Exercise 06-1 checkActiveShowWelcome should show 'Your account is not active' ", function(){

            Chai.assert.deepEqual(actual, expected, "checkActiveShowWelcome() ERROR! actual = " + actual.toString());

        });
    });

    describe("Ex06-2 Process active user 'Theresa' ", function(){

        var user = {active: true, name: 'Theresa'};
        var expected = Right.of('Welcome Theresa');
        var actual = checkActiveShowWelcome(user);

        it("Exercise 06-2 checkActiveShowWelcome should show 'Welcome Theresa' ", function(){

            Chai.assert.deepEqual(actual, expected, "checkActiveShowWelcome() ERROR! actual = " + actual.toString());

        });
    });



});

