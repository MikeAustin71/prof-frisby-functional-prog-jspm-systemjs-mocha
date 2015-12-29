/**
 * Created by mike10 on 12/20/2015.
 */

export let __hotReload = true;
import {assert} from 'chai/lib/chai.js';

import {safeProp, safeHead, firstAddressStreet} from './../xlib/ExLib.js';
import {Maybe} from 'folktale/data';

describe("Ex01 SafeProp Exercises", function(){


    describe("Ex01-1 - safeProp Example", function(){

        var Addr = {Addr1: '91210 Hwy 290 West', Addr2: 'Ste 5290', Addr3:'Box 152', City:'Austin', St:'TX', Zip:91210};
        var expected = Maybe.of('91210 Hwy 290 West');
        var result = safeProp('Addr1', Addr);

        it("safeProp('Addr1',Addr) should return '91210 Hwy 290 West' ", function(){

            assert.deepEqual(expected.get(),result.get(),"Error: 'safeProp()' result is INVALID!");

        });

    });

    describe("Ex01-2 - safeHead Example", function(){

        var txAddresses = [
            {Addr1: '91210 Hwy 290 West', Addr2: 'Ste 5290', Addr3:'Box 152', City:'Austin', St:'TX', Zip:91210},
            {Addr1: '21360 Kimball Ave', Addr2: '', Addr3:'', City:'Raymondville', St:'TX', Zip:75911},
            {Addr1: '5 DuckBill Trail', Addr2: '', Addr3:'', City:'Taylor', St:'TX', Zip:52119}
        ];

        var expected = Maybe.of({Addr1: '91210 Hwy 290 West', Addr2: 'Ste 5290', Addr3:'Box 152', City:'Austin', St:'TX', Zip:91210});
        var result = safeHead(txAddresses);

        it("safeHead(txAddresses) should return '91210 Hwy 290 West' ", function(){

            assert.deepEqual(expected,result,"Error: 'safeHead()' result is INVALID!");

        });

    });

    describe("Ex01-3 - firstStreetAddress Example", function(){

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


        var expected = Maybe.of(Maybe.of(Maybe.of({name: 'Hwy 290 West', number: '555555'})));
        var result = firstAddressStreet(txAddr);

        it("safeHead(txAddresses) should return Maybe 3-levels deep -> '{name: 'Hwy 290 West', number: '555555'}' ", function(){

            assert.deepEqual(expected,result,"Error: 'safeHead()' result is INVALID!");

        });

    });

});


