/**
 * Created by mike10 on 12/7/2015.
 */

import * as Support from './../xlib/support.js';

import * as Chai from 'chai';

describe("Ex06 Mike Bonus Exercise 3", function(){
    describe("curry a slice function ", function(){

        var s051 = ['a',['b','c','d'], 'e', ['f',['g','h','i'],'j'], 'k',['l',['m','n','o'],'p'],'q'];
        var expected = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'];
        var result = Support.flatten(s051);


        it("flatten should return a single result array ", function(){

            Chai.assert.deepEqual(expected ,result,"Error: correct 'take' values were NOT identified!");

        });

    });

});

