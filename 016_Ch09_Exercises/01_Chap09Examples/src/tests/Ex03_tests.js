/**
 * Created by mike10 on 12/21/2015.
 */

export let __hotReload = true;
import * as Chai from 'chai';

import {mFirstAddressStreet} from './../xlib/ExLib.js';
import {Maybe} from 'folktale/data';

describe("Ex03 Refactor firstStreetAddress as monad", function(){

    describe("Ex03-1 - mFirstAddressStreet Example", function(){

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
        var result = mFirstAddressStreet(txAddr);

        it("mFirstAddressStreet(txAddr) should return Maybe 1-level deep -> '{name: 'Hwy 290 West', number: '555555'}' ", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'mFirstAddressStreet()' result is INVALID!");

        });

    });

});

