/**
 * Created by mike10 on 12/7/2015.
 */

import * as Support from './../xlib/support.js';

import * as Chai from 'chai';

describe("Ex04 Bonus Exercise 1", function(){
    describe("curry a slice function ", function(){

        var s031 = ['a', 'b', 'c'];
        var expected = ['b', 'c'];
        var result = Support.slice(1,3,s031);

        it("should 0,3 return 'b' and 'c' from 'a,b,c,' ", function(){

            Chai.assert.deepEqual(expected ,result,"Error: maximum value was NOT identified!");

        });

    });

});


