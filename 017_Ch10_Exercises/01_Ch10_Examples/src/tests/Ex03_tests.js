/**
 * Created by Amarillo Mike on 12/26/2015.
 */

export let  __hotReload = true;

import {assert} from 'chai/lib/chai.js';
import * as X from './../xlib/ExLib.js';
import {Either,Maybe,Task} from 'folktale/data';


var title = "Examining - checkName";

describe("Ex03 Chapter 10 Examples" + title, function(){

    var user = {id: 1, name: "John Doe", email: "eric@supply.com"};
    var userBadEmail = {id: 1, name: "John Doe", email: "xx"};

    describe("Ex03-1 - This tests checkName(user) with a valid user. See ExLib.js ", function(){

        var expected = 'John Doe';

        var result = X.checkName(user);

        var actual = result.get();

        it("checkName should return Either.Right value = 'John Doe' ", function(){

            assert.deepEqual(actual, expected,"Error: 'ex3_1() a' result is INVALID!");

        });

    });

    describe("Ex03-2 - This tests checkName(user) with an INVALID user. See ExLib.js", function(){

        var expected = "invalid name";

        var result = X.checkName(null);

        var actual = result.merge();

        it("checkName should return Either.Left value = 'invalid name' ", function(){

            assert.deepEqual(actual, expected,"Error: 'ex1_1()' result is INVALID!");

        });

    });

    describe("Ex03-3 - checkEmail() with valid email address See ExLib.js ", function(){

        var expected = "eric@supply.com";

        var actual = X.checkEmail(user).get();

        it("checkEmail check should return 'valid' as 'eric@supply.com' ", function(){

            assert.deepEqual(actual, expected,"Error: 'checkEmail()' result is INVALID!");

        });

    });

    describe("Ex03-4 - checkEmail() with INVALID email address See ExLib.js ", function(){

        var expected = "invalid email";

        var actual = X.checkEmail(userBadEmail).merge();

        it("checkEmail evaluate email as INVALID returning 'invalid email' ", function(){

            assert.deepEqual(actual, expected,"Error: 'checkEmail()' result is INVALID!");

        });

    });




});
