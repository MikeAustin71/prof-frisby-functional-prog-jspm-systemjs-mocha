'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flatten = exports.take = exports.slice = exports.max = exports.filterQS = exports.sentence = exports.xWords = undefined;
exports.words = words;
exports.Xlib = Xlib;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xWords = exports.xWords = _ramda2.default.split(' '); /**
                                                           * Created by mike10 on 12/6/2015.
                                                           */

var sentence = exports.sentence = _ramda2.default.map(xWords);

var filterQS = exports.filterQS = _ramda2.default.filter(_ramda2.default.test(/q/i));

// All three solutions work for max
//var _keepHighest = function(x,y){ return x >= y ? x : y; }; // <- leave be
//var _keepHighest = R.max;
// Solution # 3 - probably the best.
var max = exports.max = _ramda2.default.reduce(_ramda2.default.max(_ramda2.default.__), 0, _ramda2.default.__);

var slice = exports.slice = _ramda2.default.slice(_ramda2.default.__, _ramda2.default.__, _ramda2.default.__);

var take = exports.take = _ramda2.default.slice(0, _ramda2.default.__, _ramda2.default.__);

var flatten = exports.flatten = _ramda2.default.flatten(_ramda2.default.__);

function words(str) {

    return xWords(str);
}

function Xlib() {}

Xlib.prototype.splitWords = function (str) {
    return xWords(str);
};
//# sourceMappingURL=support.js.map