"use strict";

var _ExLib = require("./../xlib/ExLib.js");

var m1 = (0, _ExLib.match)(/\s+/g, "hello world");

console.log("m1 'hello world' = " + m1);

var m2 = (0, _ExLib.match)(/\s+/g, "spaceless");

console.log("m2 'spaceless' = " + m2);

var m3 = (0, _ExLib.hasSpaces)("hello world");
console.log("m3 hasSpaces('hello world') = " + m3);

var m4 = (0, _ExLib.hasSpaces)("spaceless");
console.log("m4 hasSpaces('spaceless') = " + m4);

var m5 = filter(_ExLib.hasSpaces, ["tori_spelling", "tori amos"]);
// ["tori amos"]
console.log("m5 filter should be 'tori amos' = " + m5);

var findSpaces = filter(_ExLib.hasSpaces);
// function(xs) { return xs.filter(function(x) { return x.match(/\s+/g) }) }

var m6 = findSpaces(["tori_spelling", "tori amos"]);
console.log("m6 should be 'tori amos' = " + m6);

var noVowels = (0, _ExLib.replace)(/[aeiou]/ig);
// function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }

var censored = noVowels("*");
// function(x) { return x.replace(/[aeiou]/ig, "*") }

var m7 = censored("Chocolate Rain");
console.log("m7 should be 'Ch*c*l*t* R**n' = " + m7);
// 'Ch*c*l*t* R**n'
//# sourceMappingURL=Ex01.js.map