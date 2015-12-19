'use strict';

require('./../../build/styles/css/idxdisplay.css!');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _maybe = require('./../xlib/maybe.js');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//=> Maybe(['a', 'a'])
/**
 * Created by mike10 on 12/14/2015.
 */

var maybe1 = _maybe.Maybe.of("Malkovich Malkovich").map(_ramda2.default.match(/a/ig));

maybe1.logIt("maybe1");

(0, _jquery2.default)("#maybe1").text("Container => Maybe(['a', 'a']) - maybe1 value = " + JSON.stringify(maybe1.__value));

//=> Maybe(null)
var maybe2 = _maybe.Maybe.of(null).map(_ramda2.default.match(/a/ig));

maybe2.logIt("maybe2");

(0, _jquery2.default)("#maybe2").text("Container => Maybe(null) - maybe2 value = " + JSON.stringify(maybe2.__value));

//=> Maybe(null)
var maybe3 = _maybe.Maybe.of({ name: "Boris" }).map(_ramda2.default.prop("age")).map(_ramda2.default.add(10, _ramda2.default.__));

maybe3.logIt("maybe3");

(0, _jquery2.default)("#maybe3").text("Container => Maybe(null) - maybe3 value = " + JSON.stringify(maybe3.__value));

//=> Maybe(24)
var maybe4 = _maybe.Maybe.of({ name: "Dinah", age: 14 }).map(_ramda2.default.prop("age")).map(_ramda2.default.add(10, _ramda2.default.__));

maybe4.logIt("maybe4");

(0, _jquery2.default)("#maybe4").text("Container => Maybe(null) - maybe4 value = " + JSON.stringify(maybe4.__value));
//# sourceMappingURL=Ex02.js.map