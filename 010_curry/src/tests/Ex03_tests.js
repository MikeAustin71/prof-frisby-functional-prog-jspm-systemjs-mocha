/**
 * Created by mike10 on 12/18/2015.
 */

import * as Chai from 'chai';

import {hasSpaces, filter} from './../xlib/ExLib.js';

describe("Ex03 Testing function 'filter'", function(){

    describe("Ex03-1 - filter(hasSpaces, ['tori_spelling', 'tori amos'])", function(){

        var expected = ['tori amos'];
        var result = filter(hasSpaces, ["tori_spelling", "tori amos"]);

        it("filter(hasSpaces, ['tori_spelling', 'tori amos']) should return ['tori amos']", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'filter()' result is INVALID! result = " + result);

        });

    });

    describe("Ex03-2 - Test findSpaces = filter(hasSpaces) function", function(){

        var findSpaces = filter(hasSpaces);
        var expected = ['tori amos'];
        var result = findSpaces(['tori_spelling', 'tori amos']);

        it("findSpaces(['tori_spelling', 'tori amos']) should return ['tori amos']", function(){

            Chai.assert.deepEqual(expected,result,"Error: 'findSpaces()' result is INVALID! result = " + result);

        });

    });
});



