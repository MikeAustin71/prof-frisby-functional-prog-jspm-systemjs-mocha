/**
 * Created by mike10 on 12/21/2015.
 */

export let  __hotReload = true;

import * as Chai from 'chai';
import * as X from './../xlib/ExLib.js';
import {Maybe} from 'folktale/data';
import {monads} from 'folktale/control';


var title = "Exercise 1 - "
    + "Use safeProp and map/join or chain to safely get the street name when given "
    +"a user.";


describe("Ex01 Chapter 9 Exercises" + title, function(){



    var user = {
        id: 2,
        name: "albert",
        address: {
            street: {
                number: 22,
                name: 'Walnut St'
            }
        }
    };

    describe("Ex01-1 - This technique uses 'join'. See ExLib.js ", function(){

        var expected = Maybe.of('Walnut St');

        var result = X.ex1_1(user);

        it("ex1_1(user) should return name = 'Walnut St' ", function(){

            Chai.assert.deepEqual(expected.get(),result.get(),"Error: 'ex1_1(user)' result is INVALID!");

        });

    });

    describe("Ex01-2 - This technique uses 'chain'. See ExLib.js ", function(){

        var expected = Maybe.of('Walnut St');

        var result = X.ex1_2(user);

        it("ex1_2(user) should return name = 'Walnut St' ", function(){

            Chai.assert.deepEqual(expected.get(),result.get(),"Error: 'ex1_2(user)' result is INVALID!");

        });

    });

});



