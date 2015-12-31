/**
 * Created by Amarillo Mike on 12/31/2015.
 */

export let __hotReload = true;

import {assert} from 'chai/lib/chai.js';

import {getPost,getComments,liftA2} from './../xlib/ExLib.js';

import _ from 'ramda';

import {Task} from 'folktale/data';

var title = "Exercise 3 - Run both getPost(n) and getComments(n) then render the page with both. (the n arg is arbitrary)";

describe("Ex03 Chapter 10 Exercises" + title, function(){

    var makeComments = _.reduce(function(acc, c){ return acc+"<li>"+c+"</li>" }, "");
    var render = _.curry(function(p, cs) { return "<div>"+p.title+"</div>"+makeComments(cs); });


    describe("Ex03-1 - Task.of(render).ap(getPost(2)).ap(getComments(2)). See ExLib.js ", function(){

        var ex3_1 = Task.of(render).ap(getPost(2)).ap(getComments(2));

        var expected = "<div>Love them tasks</div><li>This book should be illegal</li><li>Monads are like space burritos</li>";

        it("ex3_1 should return target html ", function(done){
            ex3_1.fork(console.log, function(html){
                assert.deepEqual(html, expected,"Error: 'Ex03-1' result is INVALID!");
                done();
            });
        });

    });

    describe("Ex03-2 - Alternate solution using liftA2 . See ExLib.js ", function(){

        var ex3_2 = liftA2(render, getPost(2), getComments(2));

        var expected = "<div>Love them tasks</div><li>This book should be illegal</li><li>Monads are like space burritos</li>";

        it("ex3_2 should return target html ", function(done){
            ex3_2.fork(console.log, function(html){
                assert.deepEqual(html, expected,"Error: 'Ex03-2' result is INVALID!");
                done();
            });
        });

    });

});
