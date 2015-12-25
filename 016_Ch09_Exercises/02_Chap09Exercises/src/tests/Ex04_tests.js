/**
 * Created by mike10 on 12/23/2015.
 */

export let  __hotReload = true;

import * as Chai from 'chai';
import {ex4_1,ex4_2,getResult,getResult2, unsafePerformIO, validateEmail2} from './../xlib/ExLib.js';
import * as S from './../xlib/support.js';
import _ from 'ramda';

var title = "Exercise 4 - " +
    "Use validateEmail, addToMailingList, and emailBlast to implement ex4's type signature.";


describe("Ex04 Chapter 9 Exercises" + title, function(){

    describe("Ex04-1 - Ebook Exercise - See ex4_1 & getResult in ExLib.js. Also checkout support.js", function(){

        it("ex4_1('notanemail') should return 'invalid email'", function(done){

            var expected = 'invalid email';
            var r1 = ex4_1('notanemail');
            var result = getResult(S.unsafePerformIO, r1);

            done();

            Chai.assert.deepEqual(result, expected,"ex4_1('notanemail') returned invalid result!");
        });

        it("ex4_1('sleepy@grandpa.net') should return valid email 'emailed: sleepy@grandpa.net'", function(done){

            var expected = 'emailed: sleepy@grandpa.net';
            var r1 = ex4_1('sleepy@grandpa.net');
            var result = getResult(S.unsafePerformIO, r1);
            done();

            Chai.assert.deepEqual(result, expected,"ex4_1('sleepy@grandpa.net') returned invalid result!");
        });

    });

    describe("Ex04-2 - Alternative To ex4_1 - See ex4_2 & getResult2 in ExLib.js. Also checkout support.js", function(){

        it("ex4_2('notanemail') should return 'invalid email'", function(done){

            var expected = 'invalid email';
            var result = getResult2(ex4_2('notanemail'));
            done();

            Chai.assert.deepEqual(result, expected,"ex4_2('notanemail') returned invalid result!");
        });

        it("ex4_2('sleepy@grandpa.net') should return valid email 'emailed: sleepy@grandpa.net'", function(done){

            var expected = 'emailed: sleepy@grandpa.net';
            var result = getResult2(ex4_2('sleepy@grandpa.net'));
            done();
            Chai.assert.deepEqual(result, expected,"ex4_2('sleepy@grandpa.net') returned invalid result!");
        });

    });

});

