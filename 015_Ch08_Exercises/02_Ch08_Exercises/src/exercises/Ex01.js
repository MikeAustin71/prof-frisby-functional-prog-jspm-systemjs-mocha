/**
 * Created by mike10 on 12/15/2015.
 */

import _ from 'ramda';

import {Maybe} from 'folktale/data';

import * as L from './../xlib/ExLib.js'


var dataAr = [3,5];

var result1 = L.add1(dataAr);

console.log("Result 1 for Ex1 = " + result1);

var x = Maybe.of(37);

console.log("value of Maybe = " + x.getOrElse("null value!"));


// Exercise 5
// ==========
// Write a function that will getPost then toUpperCase the post's title

// getPost :: Int -> Task({id: Int, title: String})
var getPost = function (i) {
    return new Task(function(rej, res) {
        setTimeout(function(){
            res({id: i, title: 'Love them futures'})
        }, 300)
    });
};
