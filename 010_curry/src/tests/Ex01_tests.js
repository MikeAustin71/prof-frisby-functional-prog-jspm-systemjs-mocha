/**
 * Created by mike10 on 12/18/2015.
 */

import * as Chai from 'chai';

import {match} from './../xlib/ExLib.js';

describe("Ex01 match space in string test", function(){

    describe("Ex01-1 - match regex '/\s+/g' (space)", function(){

        var expected = [' '];
        var result = match(/\s+/g,"hello world");

        it("match 'hello world' should return [' '] ( array of one space) from match '/\s+/g' ", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'match()' result is INVALID! match = " + result);

        });

    });

    describe("Ex01-2 - match space in 'spaceless' string", function(){

        var expected = null;
        var result = match(/\s+/g,"spaceless");

        it("match space in 'spaceless' (string with no spaces) should yield 'null' return ", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'match()' result is INVALID! match = " + result);

        });

    });
});

