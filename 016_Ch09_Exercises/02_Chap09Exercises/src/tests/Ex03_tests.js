/**
 * Created by mike10 on 12/22/2015.
 */

export let  __hotReload = true;

import * as Chai from 'chai';
import {ex3_1} from './../xlib/ExLib.js';
import {Maybe} from 'folktale/data';
import {monads} from 'folktale/control';
import _ from 'ramda';

var title = "Exercise 3 - " +
    "Use getPost() then pass the post's id to getComments().";


describe("Ex03 Chapter 9 Exercises" + title, function(){

    describe("Ex03-1 - See getPost() and getComments() in ExLib.js. Also checkout support.js", function(){

        var expected = [13, 13];
        var result;

        it("ex3_1(13) should return [13, 13]", function(done){

            ex3_1(13).fork(console.log, function (res) {
                Chai.assert.deepEqual(res.map(_.prop('post_id')), expected);
                done();
            });
        });

    });

});





