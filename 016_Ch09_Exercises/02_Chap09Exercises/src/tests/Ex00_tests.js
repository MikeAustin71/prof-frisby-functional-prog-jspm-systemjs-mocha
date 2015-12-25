/**
 * Created by mike10 on 12/24/2015.
 */

export let __hotReload = true;

import _ from 'ramda';
import {Either,Maybe,Task} from 'folktale/data';
import {monads} from 'folktale/control';
import * as Chai from 'chai';
import * as T from "./../xlib/TLib.js"


describe("Ex00 Tests ", function(){

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

    describe("Ex00-1 - Tests folktale Maybe ", function(){

        var expected = Maybe.of('Walnut St');

        var result = expected;

        it("Maybe Result should return name = 'Walnut St' ", function(){

            Chai.assert.deepEqual(expected.get(),result.get(),"Error: 'ex00_1' result is INVALID!");

        });

    });

    describe("Ex00-2 - Tests external TLib ", function(){

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

        var expected = Maybe.of("albert");

        var result = T.safeProp("name", user);

        it("Maybe Result should return name = 'albert' ", function(){

            Chai.assert.deepEqual(expected.get(),result.get(),"Error: 'ex00_2' result is INVALID!");

        });

    });


    describe("Ex00-3 - This technique uses 'chain'. See TLib.js ", function(){

        var expected = Maybe.of('Walnut St');

        var result = T.ex00_3(user);

        it("ex00_3(user) should return name = 'Walnut St' ", function(){

            Chai.assert.deepEqual(expected.get(),result.get(),"Error: 'ex00_3(user)' result is INVALID!");

        });

    });

});
