/**
 * Created by mike10 on 12/22/2015.
 */


export let  __hotReload = true;

import * as Chai from 'chai';
import {ex2_1} from './../xlib/ExLib.js';
import {Maybe} from 'folktale/data';
import {monads} from 'folktale/control';

var title = "Exercise 2 - " +
"Use getFile to get the filename, remove the directory so it's just the file, " +
"then purely log it.";


describe("Ex02 Chapter 9 Exercises" + title, function(){

    describe("Ex02-1 - Uses 'IO' from support.js. Also, see ExLib.js", function(){

        var expected = 'logged ExLib.js';

        var result = ex2_1(undefined).unsafePerformIO();

        it("ex2_1(user) should return name = " + expected, function(){

            Chai.assert.equal(expected,result,"Error: 'ex2_1(user)' result is INVALID!");

        });

    });

});




