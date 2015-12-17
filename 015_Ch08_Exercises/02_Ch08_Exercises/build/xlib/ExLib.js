'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.intParse = exports.findFirstInitial = exports.safeProp = exports.firstInList = exports.Identity = exports.add1 = exports.__hotReload = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mike10 on 12/16/2015.
 */

var __hotReload = exports.__hotReload = true;

// Exercise 1
// ==========
// Use _.add(x,y) and map(f,x) to make a function that increments a value inside a functor

var add1 = exports.add1 = _ramda2.default.map(_ramda2.default.add(1, _ramda2.default.__), _ramda2.default.__);

//Exercise 2
// ==========
// Use _.head to get the first element of the list
// var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
// var ex2 = undefined

var inspect = function inspect(x) {
    return x && x.inspect ? x.inspect() : x;
};

// Identity
var Identity = exports.Identity = function Identity(x) {
    this.__value = x;
};

Identity.of = function (x) {
    return new Identity(x);
};

Identity.prototype.map = function (f) {
    return Identity.of(f(this.__value));
};

Identity.prototype.inspect = function () {
    return 'Identity(' + inspect(this.__value) + ')';
};

var firstInList = exports.firstInList = _ramda2.default.map(_ramda2.default.head);

// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user

var safeProp = exports.safeProp = _ramda2.default.curry(function (x, o) {
    return _data.Maybe.of(o[x]);
});

var findFirstInitial = exports.findFirstInitial = _ramda2.default.compose(_ramda2.default.map(_ramda2.default.head), safeProp('name'));

// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement
//var ex4 = function (n) {
//    if (n) { return parseInt(n); }
//};

var intParse = exports.intParse = _ramda2.default.compose(_ramda2.default.map(parseInt), _data.Maybe.of);
//# sourceMappingURL=ExLib.js.map