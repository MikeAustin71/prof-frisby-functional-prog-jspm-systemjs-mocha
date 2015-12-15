"use strict";

var _support = require("./../xlib/support.js");

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

//var words = function(str) {
//    return _.split(' ', str);
//};

var txt = "hello cruel world"; /**
                                * Created by mike10 on 12/6/2015.
                                */

var breakOut = (0, _support.words)(txt);

console.log("breakOut");

var xBreakout = (0, _support.xWords)(txt);

console.log("xBreakOut");

var breakOut2 = _support.Xlib.prototype.splitWords(txt);

console.log("breakOut2");
//# sourceMappingURL=Ex01.js.map