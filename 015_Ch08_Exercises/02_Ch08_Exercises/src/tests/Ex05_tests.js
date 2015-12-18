/**
 * Created by mike10 on 12/17/2015.
 */

export let __hotReload = true;

import * as Chai from 'chai';

import {getPostToUpper} from './../xlib/ExLib.js';

import {Task} from 'folktale/data';

describe("Ex05 Functor Exercises", function(){

// Exercise 5
// ==========
// Write a function that will getPost then toUpperCase the post's title

    describe("Ex05-1 -Write a function that will getPost then toUpperCase the post's title", function(){

        it("Exercise 05-1 Converting string to UpperCase from getPost ", function(done){
            getPostToUpper(13).fork(console.log, function(res){
               console.log("Ex05-1 res = " + res);
               Chai.assert.deepEqual('LOVE THEM FUTURES', res);
                done();
            });
        });
    });
});
