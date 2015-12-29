/**
 * Created by mike10 on 12/23/2015.
 */

export let __hotReload = true;
import {assert} from 'chai/lib/chai.js';

import {Maybe, Either} from 'folktale/data';

describe("Ex05 Test folktale 'Either'", function(){

    // This version of validateEmail returns a folktale 'Either' object.
    var validateEmail = function(x){
        return x.match(/\S+@\S+\.\S+/) ? (Either.Right(x)) : (Either.Left('invalid email'));
    };

    describe("Ex05-1 - folktale Either Examples", function(){

        it("validateEmail('sleepy@grandpa.net') should return Either.Right('sleepy@grandpa.net') ", function(){

            var expected = Either.Right('sleepy@grandpa.net');
            var result = validateEmail('sleepy@grandpa.net');

            assert.deepEqual(expected,result,"Error: 'validateEmail()' result is INVALID!");

        });

        it("validateEmail('notanemail') should return Either.Left('invalid email') ", function(){

            var expected = Either.Left('invalid email');
            var result = validateEmail('notanemail');

            assert.deepEqual(expected,result,"Error: 'validateEmail()' result is INVALID!");

        });

    });

    describe("Ex05-2 - folktale Either.get() Examples", function(){

        it("validateEmail('sleepy@grandpa.net') should return string 'sleepy@grandpa.net' ", function(){

            var expected = 'sleepy@grandpa.net';
            var e1 = validateEmail('sleepy@grandpa.net');
            var result = e1.get();

            assert.deepEqual(expected,result,"Error: 'validateEmail()' result is INVALID!");

        });

        it("validateEmail('notanemail').merge() should return string 'invalid email' ", function(){

            var expected = 'invalid email';
            var result = validateEmail('notanemail').merge();

            assert.deepEqual(expected,result,"Error: 'validateEmail()' result is INVALID!");

        });

    });


    describe("Ex05-3 - Either.IsRight and IsLeft", function(){

        it("validateEmail('sleepy@grandpa.net') isRight should return 'true' ", function(){

            var expected = true;
            var e1 = validateEmail('sleepy@grandpa.net');
            var result = e1.isRight;

            assert.deepEqual(expected,result,"Error: 'isRight' result is INVALID!");

        });

        it("validateEmail('notanemail') isLeft should return 'true' ", function(){

            var expected = true;
            var e1 = validateEmail('notanemail');
            var result = e1.isLeft;

            assert.deepEqual(expected,result,"Error: 'isLeft' result is INVALID!");

        });

    });

});



