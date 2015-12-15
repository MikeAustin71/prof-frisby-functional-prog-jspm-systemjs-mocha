'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fastestCar = exports.availablePrices = exports.fmtPrice = exports.fmtMoney = exports.sanitizeNames = exports.averageDollarValue = exports.xAverage = exports.carValue = exports.toFixed = exports.nameOfFirstCar = exports.carName = exports.isLastInStock = exports.carInStock = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _accounting = require('accounting');

var _accounting2 = _interopRequireDefault(_accounting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.
//var isLastInStock = function(cars) {
//    var last_car = _.last(cars);
//    return _.prop('in_stock', last_car);
//};

/**
 * Created by mike10 on 12/8/2015.
 */

var carInStock = exports.carInStock = _ramda2.default.prop('in_stock', _ramda2.default.__);

var isLastInStock = exports.isLastInStock = _ramda2.default.compose(carInStock, _ramda2.default.last(_ramda2.default.__));

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car
//var nameOfFirstCar = undefined;

var carName = exports.carName = _ramda2.default.prop('name', _ramda2.default.__);

var nameOfFirstCar = exports.nameOfFirstCar = _ramda2.default.compose(carName, _ramda2.default.head(_ramda2.default.__));

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition
//var _average = function(xs) { return _.reduce(_.add, 0, xs) / xs.length; }; // <- leave be

//var averageDollarValue = function(cars) {
//    var dollar_values = _.map(function(c) { return c.dollar_value; }, cars);
//    return _average(dollar_values);
//};

var setFixed = _ramda2.default.curryN(2, _accounting2.default.toFixed);

var toFixed = exports.toFixed = setFixed(_ramda2.default.__, 2);

var carValue = exports.carValue = _ramda2.default.compose(toFixed, _ramda2.default.prop('dollar_value', _ramda2.default.__));

var xAverage = exports.xAverage = function xAverage(xs) {
  return _ramda2.default.reduce(_ramda2.default.add, 0, xs) / xs.length;
};

var averageDollarValue = exports.averageDollarValue = _ramda2.default.compose(toFixed, xAverage, _ramda2.default.map(_ramda2.default.prop('dollar_value', _ramda2.default.__), _ramda2.default.__));

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ["ferrari_ff"].

var xUnderscore = _ramda2.default.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

var sanitizeNames = exports.sanitizeNames = _ramda2.default.map(_ramda2.default.compose(xUnderscore, _ramda2.default.toLower, _ramda2.default.prop('name')));

// Bonus 1:
// ============
// Refactor availablePrices with compose.

//var availablePrices = function(cars) {
//    var available_cars = _.filter(_.prop('in_stock'), cars);
//    return available_cars.map(function(x){
//        return accounting.formatMoney(x.dollar_value);
//    }).join(', ');
//};

var fmtMoney = exports.fmtMoney = _ramda2.default.curryN(1, _accounting2.default.formatMoney);

var fmtPrice = exports.fmtPrice = _ramda2.default.compose(fmtMoney, carValue);

var filter = _ramda2.default.filter(carInStock, _ramda2.default.__);

var availablePrices = exports.availablePrices = _ramda2.default.compose(_ramda2.default.join(', '), _ramda2.default.map(fmtPrice), filter);

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip()

//var fastestCar = function(cars) {
//    var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
//    var fastest = _.last(sorted);
//    return fastest.name + ' is the fastest';
//};

var append = _ramda2.default.flip(_ramda2.default.concat);
var fastestCar = exports.fastestCar = _ramda2.default.compose(append(' is the fastest'), _ramda2.default.prop('name'), _ramda2.default.last, _ramda2.default.sortBy(_ramda2.default.prop('horsepower')));
//# sourceMappingURL=support.js.map