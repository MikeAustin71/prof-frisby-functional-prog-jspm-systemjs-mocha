/**
 * Created by mike10 on 12/7/2015.
 */

import * as Support from './../xlib/support.js';

import * as Chai from 'chai';

describe("Ex05 Bonus Exercise 2", function(){
    describe("curry a slice function ", function(){

        var s051 = ['a', 'b', 'c'];
        var expected = ['a', 'b'];
        var result = Support.take(2,s051);


        it("take parm 2 should return 'a' and 'b' from 'a,b,c,' ", function(){

            Chai.assert.deepEqual(expected ,result,"Error: correct 'take' values were NOT identified!");

        });

    });

});

