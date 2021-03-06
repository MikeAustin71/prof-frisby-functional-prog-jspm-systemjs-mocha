/**
 * Created by mike10 on 12/21/2015.
 */

export let __hotReload = true;
import {assert} from 'chai/lib/chai.js';

import {v2FirstAddressStreet} from './../xlib/ExLib.js';
import {Maybe} from 'folktale/data';

describe("Ex04 Refactor firstStreetAddress with 'chain'", function(){

    describe("Ex04-1 - v2FirstAddressStreet 'chain' Example", function(){

        var txAddr =
        {
            addresses:[
                {street:{name: 'Hwy 290 West', number: '555555'}, Zip:91210},
                {street:{name: 'Kimball Ave', number: '21360'}, Zip:75911},
                {street:{name: 'DuckBill Trail', number: '5'}, Zip:52119}
            ],
            cities: [
                {city: 'Austin', state: 'TX'},
                {city: 'Raymondville', state: 'TX'},
                {city: 'Taylor', state: 'TX'}
            ]

        };

        var expected = Maybe.of({name: 'Hwy 290 West', number: '555555'});
        var result = v2FirstAddressStreet(txAddr);

        it("v2FirstAddressStreet(txAddr) should return Maybe 1-level deep -> '{name: 'Hwy 290 West', number: '555555'}' ", function(){

            assert.deepEqual(expected,result,"Error: 'v2FirstAddressStreet()' result is INVALID!");

        });

    });

});


