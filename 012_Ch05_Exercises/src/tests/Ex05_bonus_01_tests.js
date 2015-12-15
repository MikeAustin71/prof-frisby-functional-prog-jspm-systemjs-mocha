/**
 * Created by mike10 on 12/8/2015.
 */

import {fmtMoney,fmtPrice,availablePrices} from './../xlib/support.js';

import * as Chai from 'chai';

import {CARS} from './../exercises/testData';

describe("Ex05 Bonus-1 Composition Exercises", function(){

    describe("Ex05 Bonus 1 - format money", function(){

        var expected = '$700,000.00';
        var result = fmtMoney('700000');

        it("should return formatted money value = '" + expected + "'" , function(){

            Chai.assert.deepEqual(expected,result,"Error: 'fmtMoney()' result is INVALID! result = " + result);

        });

    });

    describe("Ex05 Bonus 1 - format price", function(){

        var expected = '$700,000.00';
        var result = fmtPrice(CARS[0]);

        it("should return formatted money value for first car = '" + expected + "'" , function(){

            Chai.assert.deepEqual(expected,result,"Error: 'fmtPrice()' result is INVALID! result = " + result);

        });

    });

    describe("Ex05 Bonus 1 - display available prices formatted as money", function(){

        var expected = '$700,000.00, $1,850,000.00';
        var result = availablePrices(CARS);

        it("should return prices for cars in stock = '" + expected + "'" , function(){

            Chai.assert.deepEqual(expected,result,"Error: 'availablePrices()' result is INVALID! result = " + result);

        });

    });


});



