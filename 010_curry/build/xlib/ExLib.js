'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.map = exports.filter = exports.replace = exports.hasSpaces = exports.match = exports.__hotReload = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mike10 on 12/18/2015.
 */

var __hotReload = exports.__hotReload = true;

var match = exports.match = _ramda2.default.curry(function (what, str) {
    return str.match(what);
});

var hasSpaces = exports.hasSpaces = match(/\s+/g);

var replace = exports.replace = _ramda2.default.curry(function (what, replacement, str) {
    return str.replace(what, replacement);
});

var filter = exports.filter = _ramda2.default.curry(function (f, ary) {
    return ary.filter(f);
});

var map = exports.map = _ramda2.default.curry(function (f, ary) {
    return ary.map(f);
});
//# sourceMappingURL=ExLib.js.map