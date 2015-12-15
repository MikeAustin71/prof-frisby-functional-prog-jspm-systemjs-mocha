/**
 * Created by mike10 on 12/8/2015.
 */

import {toFixed ,carValue, averageDollarValue} from './../xlib/support.js';

import * as Chai from 'chai';

import {CARS} from './../exercises/testData';

describe("Ex03 Composition Exercises", function(){

    describe("Ex03 - Convert String to dollar value", function(){

        var expected = '5.00';
        var result = toFixed('5');


        it("should return expected value = '" + expected + "'" , function(){

            Chai.assert.deepEqual(expected,result,"Error: 'toFixed()' result is INVALID!");

        });

    });

    describe("Ex03 - Derive formatted numeric value from car dollar_value", function(){

        var result = carValue(CARS[0]);
        var expected = '700000.00';

        it("should return first car value = '" + expected + "'", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'carValue' result is INVALID!");

        });

    });

    describe("Ex03 - Average dollar_values for all cars", function(){

        var result = averageDollarValue(CARS);
        var expected = '790700.00';

        it("should average for all car values = '" + expected + "'", function(){

            var errMsg = "Error: 'carValue' result is INVALID! function result = " + result;
            Chai.assert.deepEqual(expected,result,errMsg);

        });

    });


});

