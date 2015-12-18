'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateLen3 = exports.checkActiveShowWelcome = exports.Right = exports.Left = exports.getPostToUpper = exports.intParse = exports.findFirstInitial = exports.safeProp = exports.firstInList = exports.Identity = exports.add1 = exports.__hotReload = undefined;

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

// Note: Javascript parseInt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
var intParse = exports.intParse = _ramda2.default.compose(_ramda2.default.map(parseInt), _data.Maybe.of);

// Exercise 5
// ==========
// Write a function that will getPost then toUpperCase the post's title

var toUpperCase = function toUpperCase(x) {
    return x.toUpperCase();
};

// getPost :: Int -> Future({id: Int, title: String})
var getPost = function getPost(i) {
    return new _data.Task(function (rej, res) {
        setTimeout(function () {
            res({ id: i, title: 'Love them futures' });
        }, 300);
    });
};

var upperTitle = _ramda2.default.compose(toUpperCase, _ramda2.default.prop('title'));

var getPostToUpper = exports.getPostToUpper = _ramda2.default.compose(_ramda2.default.map(upperTitle), getPost);

// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access
// or return the error

var Left = exports.Left = function Left(x) {
    this.__value = x;
};

Left.of = function (x) {
    return new Left(x);
};

Left.prototype.map = function (f) {
    return this;
};
Left.prototype.ap = function (other) {
    return this;
};
Left.prototype.join = function () {
    return this;
};
Left.prototype.chain = function () {
    return this;
};
Left.prototype.inspect = function () {
    return 'Left(' + inspect(this.__value) + ')';
};

var Right = exports.Right = function Right(x) {
    this.__value = x;
};

Right.of = function (x) {
    return new Right(x);
};

Right.prototype.map = function (f) {
    return Right.of(f(this.__value));
};

Right.prototype.join = function () {
    return this.__value;
};

Right.prototype.chain = function (f) {
    return f(this.__value);
};

Right.prototype.ap = function (other) {
    return this.chain(function (f) {
        return other.map(f);
    });
};

Right.prototype.join = function () {
    return this.__value;
};

Right.prototype.chain = function (f) {
    return f(this.__value);
};

Right.prototype.inspect = function () {
    return 'Right(' + inspect(this.__value) + ')';
};

var showWelcome = _ramda2.default.compose(_ramda2.default.add("Welcome "), _ramda2.default.prop('name'));

var checkActive = function checkActive(user) {
    return user.active ? Right.of(user) : Left.of('Your account is not active');
};

var checkActiveShowWelcome = exports.checkActiveShowWelcome = _ramda2.default.compose(_ramda2.default.map(showWelcome), checkActive);

// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return
// Right(x) if it is greater than 3 and Left("You need > 3") otherwise

var validateLen3 = exports.validateLen3 = function validateLen3(x) {
    return x.length > 3 ? Right.of(x) : Left.of("You need > 3");
};
//# sourceMappingURL=ExLib.js.map