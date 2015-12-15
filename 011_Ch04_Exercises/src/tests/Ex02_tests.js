/**
 * Created by mike10 on 12/7/2015.
 */

import * as Support from './../xlib/support.js';

import * as Chai from 'chai';

describe("Ex02 Exercises", function(){
    describe("Filter Array for 'q' ", function(){

        var s021 = ['quick', 'camels', 'quarry', 'over', 'quails'];
        var expected021 = ['quick', 'quarry', 'quails'];
        var result = Support.filterQS(s021);

        it("should return one array with filtered elements beginning with 'q'", function(){

            Chai.assert.deepEqual(result ,expected021,"Error: Results did NOT match expected Filter outcome!");

        });

    });

});

