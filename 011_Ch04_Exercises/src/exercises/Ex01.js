/**
 * Created by mike10 on 12/6/2015.
 */

import {Xlib, xWords, words} from './../xlib/support.js';

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

//var words = function(str) {
//    return _.split(' ', str);
//};

var txt = "hello cruel world";

var breakOut = words(txt);

console.log("breakOut");

var xBreakout = xWords(txt);

console.log("xBreakOut");


var breakOut2 = Xlib.prototype.splitWords(txt);

console.log("breakOut2");