/**
 * Created by mike10 on 12/7/2015.
 */

import {sentence} from './../xlib/support.js';

import * as Chai from 'chai';

describe("Ex01a Exercises", function(){
   describe("sentence arrays", function(){

       var s01a1 = ["Jingle bells Batman smells", "Robin laid an egg"];
       var expected01a1 = [['Jingle', 'bells', 'Batman', 'smells'], ['Robin', 'laid', 'an', 'egg']];

       it("should return two arrays containing individual words", function(){

         Chai.assert.deepEqual(sentence(s01a1),expected01a1,"Error: Results don't match expected outcome!");

       });

   });

});

