"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Container = exports.__hotReload = undefined;

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __hotReload = exports.__hotReload = true; /**
                                               * Created by mike10 on 12/13/2015.
                                               */

var Container = exports.Container = function Container(x) {
    this.__value = x;
};

// efectively this is a constructor
Container.of = function (x) {
    return new Container(x);
};

Container.prototype.logIt = function (x) {
    console.log(x + " Container __value = " + this.__value);
};

// This is Functor!
// A Functor is a type that implements map and obeys some laws
// (a -> b) -> Container a -> Container b
Container.prototype.map = function (f) {
    return Container.of(f(this.__value));
};
//# sourceMappingURL=support.js.map