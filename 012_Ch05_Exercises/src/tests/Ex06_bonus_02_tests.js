/**
 * Created by mike10 on 12/8/2015.
 */

import {fastestCar} from './../xlib/support.js';

import * as Chai from 'chai';

import {CARS} from './../exercises/testData';

describe("Ex06 Bonus-2 Composition Exercises", function(){

    describe("Ex06 Bonus 2 - display name of fastest car", function(){

        var expected = 'Aston Martin One-77 is the fastest';
        var result = fastestCar(CARS);

        it("should return name of the fastest car = '" + expected + "'" , function(){

            Chai.assert.deepEqual(expected,result,"Error: 'fastestCar()' result is INVALID! result = " + result);

        });

    });

});




