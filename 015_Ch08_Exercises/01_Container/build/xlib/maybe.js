"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Maybe = exports.__hotReload = undefined;

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __hotReload = exports.__hotReload = true; /**
                                               * Created by mike10 on 12/14/2015.
                                               */

var Maybe = exports.Maybe = function Maybe(x) {
    this.__value = x;
};

Maybe.of = function (x) {
    return new Maybe(x);
};

Maybe.prototype.logIt = function (x) {
    console.log(x + " Maybe.__value = " + this.__value);
};

Maybe.prototype.isNothing = function () {
    return this.__value === null || this.__value === undefined;
};

Maybe.prototype.map = function (f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
};

// pointfree style
//  map :: Functor f => (a -> b) -> f a -> f b

var map = _ramda2.default.curry(function (f, any_functor_at_all) {
    return any_functor_at_all.map(f);
});
//# sourceMappingURL=maybe.js.map