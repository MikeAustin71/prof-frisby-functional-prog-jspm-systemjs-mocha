/**
 * Created by mike10 on 12/8/2015.
 */

import {sanitizeNames} from './../xlib/support.js';

import * as Chai from 'chai';

import {CARS} from './../exercises/testData';

describe("Ex04 Composition Exercises", function(){

    describe("Ex04 - sanitizeNames Convert to lowercase and replace spaces with underscores", function(){

        var expected = ['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra'];
        var result = sanitizeNames(CARS);

        it("should return lower case car names = '" + expected + "'" , function(){

            Chai.assert.deepEqual(expected,result,"Error: 'sanitizeNames' result is INVALID! result = " + result);

        });

    });


});


