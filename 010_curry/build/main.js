"use strict";

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var match = _lodash2.default.curry(function (what, str) {
  return str.match(what);
});

var replace = _lodash2.default.curry(function (what, replacement, str) {
  return str.replace(what, replacement);
});

var filter = _lodash2.default.curry(function (f, ary) {
  return ary.filter(f);
});

var map = _lodash2.default.curry(function (f, ary) {
  return ary.map(f);
});

var m1 = match(/\s+/g, "hello world");

console.log("m1 'hello world' = " + m1);

var m2 = match(/\s+/g, "spaceless");

console.log("m2 'spaceless' = " + m2);

var hasSpaces = match(/\s+/g);

var m3 = hasSpaces("hello world");
console.log("m3 hasSpaces('hello world') = " + m3);

var m4 = hasSpaces("spaceless");
console.log("m4 hasSpaces('spaceless') = " + m4);

var m5 = filter(hasSpaces, ["tori_spelling", "tori amos"]);
// ["tori amos"]
console.log("m5 filter should be 'tori amos' = " + m5);

var findSpaces = filter(hasSpaces);
// function(xs) { return xs.filter(function(x) { return x.match(/\s+/g) }) }

var m6 = findSpaces(["tori_spelling", "tori amos"]);
console.log("m6 should be 'tori amos' = " + m6);

var noVowels = replace(/[aeiou]/ig);
// function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }

var censored = noVowels("*");
// function(x) { return x.replace(/[aeiou]/ig, "*") }

var m7 = censored("Chocolate Rain");
console.log("m7 should be 'Ch*c*l*t* R**n' = " + m7);
// 'Ch*c*l*t* R**n'
//# sourceMappingURL=main.js.map