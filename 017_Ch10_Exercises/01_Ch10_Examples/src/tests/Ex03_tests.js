/**
 * Created by Amarillo Mike on 12/26/2015.
 */

export let  __hotReload = true;

import * as Chai from 'chai';
import * as X from './../xlib/ExLib.js';
import _ from 'ramda';
import {Either,Maybe,Task} from 'folktale/data';
import {monads} from 'folktale/control';

var title = "Examining - checkName";

describe("Ex03 Chapter 10 Examples" + title, function(){

    var user = {id: 1, name: "John Doe", email: "eric@supply.com"};

    describe("Ex03-1 - This tests checkName(user) with a valid user. See ExLib.js ", function(){

        var expected = 'John Doe';

        var result = X.checkName(user);

        var actual = result.get();

        it("checkName should return Either.Right value = 'John Doe' ", function(){

            Chai.assert.deepEqual(actual, expected,"Error: 'ex3_1() a' result is INVALID!");

        });

    });

    describe("Ex03-2 - This tests checkName(user) with an INVALID user. See ExLib.js", function(){

        var expected = "invalid name";

        var result = X.checkName(null);

        var actual = result.merge();

        it("checkName should return Either.Left value = 'invalid name' ", function(){

            Chai.assert.deepEqual(actual, expected,"Error: 'ex1_1()' result is INVALID!");

        });

    });


});
