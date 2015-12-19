/**
 * Created by mike10 on 12/18/2015.
 */

import _ from 'ramda';

import * as Chai from 'chai';

import {replace} from './../xlib/ExLib.js';

describe("Ex04 Testing replace vowels in string", function(){

    describe("Ex04-1 - Create function 'Censored' to replace vowels in 'Chocolate Rain' ", function(){

        var noVowels = replace(/[aeiou]/ig);
        // function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }

        var censored = noVowels("*");
        // function(x) { return x.replace(/[aeiou]/ig, "*") }

        var expected = 'Ch*c*l*t* R**n';
        var result = censored("Chocolate Rain");

        it("censored('Chocolate Rain') should return 'Ch*c*l*t* R**n'", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'censored()' result is INVALID!");

        });

    });

    describe("Ex04-2 - Create function 'replaceVowels' to replace vowels in 'Chocolate Rain' ", function(){

        var replaceVowels = _.curry( replace(/[aeiou]/ig,'*'));
        // function(x) { return x.replace(/[aeiou]/ig, "*") }

        var expected = 'Ch*c*l*t* R**n';
        var result = replaceVowels("Chocolate Rain");

        it("replaceVowels('Chocolate Rain') should return 'Ch*c*l*t* R**n'", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'replaceVowels()' result is INVALID!");

        });

    });

});




