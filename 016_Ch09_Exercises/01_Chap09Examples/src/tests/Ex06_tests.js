/**
 * Created by Amarillo Mike on 12/28/2015.
 */

export let __hotReload = true;
import {assert} from 'chai/lib/chai.js';
import * as X from './../xlib/ExLib.js';
import {Maybe, Either, Task} from 'folktale/data';

var title = "  Task - Examples ";

describe("Ex06 Chapter 9 Examples" + title, function(){

    describe("Ex06-1 - Creating a Task with a number value. See ExLib.js ", function(){

        var expected = 9;

        it("ex6_1 should return number value = 9 ", function(done){

            X.getNum(9).fork(console.log, function(res){
                Chai.assert.deepEqual(res.num, expected,"Error: 'ex6_1()' result is INVALID!");
            });

            done();

        });

    });

});

