'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.liftA3 = exports.liftA2 = exports.checkName = exports.checkEmail = exports.identity = exports.ex2_2 = exports.ex2_1 = exports.add1 = exports.add = exports.ex1_1 = exports.__hotReload = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _control = require('folktale/control');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mike10 on 12/25/2015.
 */

var __hotReload = exports.__hotReload = true;

var ex1_1 = exports.ex1_1 = _ramda2.default.curry(function (x) {

    return _data.Maybe.of(x);
});

var add = exports.add = function add(a, b) {
    return a + b;
};

var add1 = exports.add1 = function add1(x) {
    return _data.Maybe.of(x.value + 1);
};

// Inputs two values and computes result formatted as a container.
var ex2_1 = exports.ex2_1 = function ex2_1(x, y) {
    return _data.Maybe.of(_ramda2.default.add).ap(_data.Maybe.of(x)).ap(_data.Maybe.of(y));
};

// Inputs two containers and computes the addition result in a third container
var ex2_2 = exports.ex2_2 = function ex2_2(x, y) {
    return _data.Maybe.of(_ramda2.default.add).ap(x).ap(y);
};

var identity = exports.identity = _ramda2.default.curry(function (x) {
    return x;
});

var checkEmail = exports.checkEmail = function checkEmail(user) {
    return user['email'].match(/\S+@\S+\.\S+/) ? _data.Either.Right(user['email']) : _data.Either.Left('invalid email');
};

var checkName = exports.checkName = function checkName(user) {
    return user && user['name'] ? _data.Either.Right(user['name']) : _data.Either.Left('invalid name');
};

var liftA2 = exports.liftA2 = _ramda2.default.curry(function (f, functor1, functor2) {
    return functor1.map(f).ap(functor2);
});

var liftA3 = exports.liftA3 = _ramda2.default.curry(function (f, functor1, functor2, functor3) {
    return functor1.map(f).ap(functor2).ap(functor3);
});
//# sourceMappingURL=ExLib.js.map