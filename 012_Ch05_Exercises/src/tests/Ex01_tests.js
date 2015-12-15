/**
 * Created by mike10 on 12/8/2015.
 */

import {carInStock, isLastInStock} from './../xlib/support.js';

import * as Chai from 'chai';

import {CARS} from './../exercises/testData';


describe("Ex01 Composition Exercises", function(){

    describe("Ex01 - Return In-Stock-Property", function(){

        var result = carInStock(CARS[0]);
        var expected = true;

        it("should return in_stock = 'true' for first car 'Ferrari FF' ", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'carInStock' result is INVALID!");

        });

    });


    describe("Ex01 - Last Car Composition", function(){

        var result = isLastInStock(CARS);
        var expected = false;

        it("should return last car 'Pagani Huayra' in_stock = 'false' ", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'isLastInStock' result is INVALID!");

        });

    });

});
