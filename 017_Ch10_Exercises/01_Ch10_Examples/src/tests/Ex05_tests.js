/**
 * Created by Amarillo Mike on 12/29/2015.
 */
export let  __hotReload = true;

import {assert} from 'chai/lib/chai.js';
import * as X from './../xlib/ExLib.js';
import {Either,Maybe,Task} from 'folktale/data';
import _ from 'ramda';

var title = "Testing Tasks - "
    + "Uses Tasks and ap methods.";

describe("Ex05 Chapter 10 Examples" + title, function(){

    describe("Ex05-1 - Add Two Tasks together. See ExLib.js ", function(){

        var expected = 5;

        it("Ex05-1 Task.of(X.add2).ap(Task.of(2)).ap(Task.of(3)) = 5 ", function(done){

            Task.of(X.add2).ap(Task.of(2)).ap(Task.of(3)).fork(console.log, function(result){
                assert.deepEqual(result, expected,"Error: 'Ex05-1' result is INVALID!");
            });

            done();
        });

    });

    describe("Ex05-2 - Use LiftA2 to add two Tasks together. See ExLib.js ", function(){

        var expected = 5;

        it("Ex05-2 liftA2(add2, Task.of(2), Task.of(3) ) = 5 ", function(done){

            X.liftA2(X.add2, Task.of(2), Task.of(3) ).fork(console.log, function(result){
                assert.deepEqual(result, expected,"Error: 'Ex05-2' result is INVALID!");
            });

            done();
        });

    });

    describe("Ex05-3 - Use LiftA3 to add three Tasks together. See ExLib.js ", function(){

        var expected = 6;

        it("Ex05-3 liftA3(X.add3, Task.of(1), Task.of(2), Task.of(3) ) = 6 ", function(done){

            X.liftA3(X.add3, Task.of(1), Task.of(2), Task.of(3)).fork(console.log, function(result){
                assert.deepEqual(result, expected,"Error: 'Ex05-3' result is INVALID!");
            });

            done();
        });

    });

});


