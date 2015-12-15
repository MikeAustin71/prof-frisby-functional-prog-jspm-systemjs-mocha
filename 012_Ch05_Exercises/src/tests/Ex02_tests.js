/**
 * Created by mike10 on 12/8/2015.
 */

import {carName, nameOfFirstCar} from './../xlib/support.js';

import * as Chai from 'chai';

import {CARS} from './../exercises/testData';


describe("Ex02 Composition Exercises", function(){

    describe("Ex02 - Return Car-Name-Property", function(){

        var result = carName(CARS[CARS.length -1]);
        var expected = 'Pagani Huayra';

        it("should return car name = 'Pagani Huayra' for last car", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'carName' result is INVALID!");

        });

    });


    describe("Ex02 - Composition Return Name of First Car", function(){

        var result = nameOfFirstCar(CARS);
        var expected = 'Ferrari FF';

        it("should return name of first car = 'Ferrari FF' ", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'nameOfFirstCar' result is INVALID!");

        });

    });

});
