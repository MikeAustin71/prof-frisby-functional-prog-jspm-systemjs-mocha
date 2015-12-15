/**
 * Created by mike10 on 12/7/2015.
 */

import * as Support from './../xlib/support.js';

import * as Chai from 'chai';

describe("Ex03 Exercises", function(){
    describe("Get max value from an array ", function(){

        var s031 = [323,523,554,123,5234];
        var expected = 5234;
        var result = Support.max(s031);

        it("should return one maximum value from an array of values ", function(){

            Chai.assert.deepEqual(result ,expected,"Error: maximum value was NOT identified!");

        });

    });

});

