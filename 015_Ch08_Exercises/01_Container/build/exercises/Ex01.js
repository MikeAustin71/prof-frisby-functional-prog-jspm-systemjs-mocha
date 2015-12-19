'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__hotReload = undefined;

require('./../../build/styles/css/idxdisplay.css!');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _support = require('./../xlib/support.js');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mike10 on 12/13/2015.
 */

var __hotReload = exports.__hotReload = true;

//=> Container(3)
var test = _support.Container.of(8);

test.logIt("test1");

(0, _jquery2.default)("#container1").text("Container test 1 value = " + test.__value);

//=> Container("hotdogs")
var test2 = _support.Container.of("hotdogs");
(0, _jquery2.default)("#container2").text("Container test 2 value = " + test2.__value);
test2.logIt("test2");

//=> Container(Container({name: "yoda" }))
var test3 = _support.Container.of({ name: "yoda" });
(0, _jquery2.default)("#container3").text("Container test 3 value = " + JSON.stringify(test3.__value));
test3.logIt("test3");

//=> Container(4)
var func1 = _support.Container.of(2).map(function (two) {
  return two + 2;
});
(0, _jquery2.default)("#functor1").text("Container Functor 1 value = " + func1.__value);
func1.logIt("Functor-1");

//=> Container("FLAMETHROWERS")
var func2 = _support.Container.of("flamethrowers").map(function (s) {
  return s.toUpperCase();
});
(0, _jquery2.default)("#functor2").text("Container Functor 2 value = " + func2.__value);
func2.logIt("Functor-2");

//=> Container(10)
var func3 = _support.Container.of("bombs").map(_ramda2.default.concat(' away')).map(_ramda2.default.prop('length'));
(0, _jquery2.default)("#functor3").text("Container Functor 3 value = " + func3.__value);
func2.logIt("Functor-3");
//# sourceMappingURL=Ex01.js.map