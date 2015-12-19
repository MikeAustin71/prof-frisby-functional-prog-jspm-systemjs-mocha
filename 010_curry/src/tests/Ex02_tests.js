/**
 * Created by mike10 on 12/18/2015.
 */

import * as Chai from 'chai';

import {hasSpaces} from './../xlib/ExLib.js';

describe("Ex02 Testing function 'hasSpaces'", function(){

    describe("Ex02-1 - hasSpaces('spaceless') ", function(){

        var expected = null;
        var result = hasSpaces('spaceless');

        it("hasSpaces('spaceless') should return 'null'", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'hasSpaces()' result is INVALID! result = " + result);

        });

    });

    describe("Ex02-2 - hasSpaces('hello world')", function(){

        var expected = [' '];
        var result = hasSpaces('hello world');

        it("hasSpaces('hello world') should return an array with one space [' ']", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'hasSpaces()' result is INVALID! result = " + result);

        });

    });
});


