/**
 * Created by Amarillo Mike on 12/31/2015.
 */

export let __hotReload = true;

import {assert} from 'chai/lib/chai.js';

import {IO,liftA2} from './../xlib/ExLib.js';

import _ from 'ramda';

import {Task} from 'folktale/data';

var title = "Exercise 4 - Write an IO that gets both player1 and player2 from the cache and starts the game";

describe("Ex04 Chapter 10 Exercises" + title, function(){

    var localStorage = {};

    localStorage.player1 = "toby";
    localStorage.player2 = "sally";

    var getCache = function(x) {
        return new IO(function() { return localStorage[x]; });
    };

    var game = _.curry(function(p1, p2) { return p1 + ' vs ' + p2; });


    describe("Ex04-1 - liftA2(game, getCache('player1'), getCache('player2')) - See ExLib.js ", function(){

        var ex4_1 = liftA2(game, getCache('player1'), getCache('player2'));

        var expected = "toby vs sally";

        var actual = ex4_1.unsafePerformIO();

        it("ex4_1.unsafePerformIO() should return value = 'toby vs sally' ", function(){

            assert.deepEqual(actual, expected,"Error: 'Ex04-1' result is INVALID!");

        });

    });

});
