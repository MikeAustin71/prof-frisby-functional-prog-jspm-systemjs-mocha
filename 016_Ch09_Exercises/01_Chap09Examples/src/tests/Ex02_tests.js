/**
 * Created by mike10 on 12/20/2015.
 */


export let __hotReload = true;
import {assert} from 'chai/lib/chai.js';


import {Maybe} from 'folktale/data';
import {monads} from 'folktale/control';

describe("Ex02 Join Exercises", function(){


    describe("Ex01-1 - Join Example: mmo = Maybe.of(Maybe.of('numchucks'))", function(){

        var mmo = Maybe.of(Maybe.of('numchucks'));
        var expected = Maybe.of('numchucks');
        var result = monads.join(mmo);

        it("monads.join(mmo) should return 'numchucks' ", function(){

            assert.deepEqual(expected.get(),result.get(),"Error: 'monads.join()' result is INVALID!");

        });

    });

});


