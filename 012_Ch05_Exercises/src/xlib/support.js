/**
 * Created by mike10 on 12/8/2015.
 */

import R from 'ramda';

import acc from 'accounting';


// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.
//var isLastInStock = function(cars) {
//    var last_car = _.last(cars);
//    return _.prop('in_stock', last_car);
//};

export var carInStock = R.prop('in_stock',R.__);

export var isLastInStock = R.compose(carInStock,R.last(R.__) );

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car
//var nameOfFirstCar = undefined;

export var carName = R.prop('name', R.__);

export var nameOfFirstCar = R.compose(carName, R.head(R.__) );

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition
//var _average = function(xs) { return _.reduce(_.add, 0, xs) / xs.length; }; // <- leave be

//var averageDollarValue = function(cars) {
//    var dollar_values = _.map(function(c) { return c.dollar_value; }, cars);
//    return _average(dollar_values);
//};

var setFixed = R.curryN(2,acc.toFixed);

export var toFixed = setFixed(R.__,2);

export var carValue = R.compose(toFixed, R.prop('dollar_value', R.__));

export var xAverage = function(xs) { return R.reduce(R.add, 0, xs) / xs.length; };

export var averageDollarValue = R.compose(toFixed, xAverage, R.map(R.prop('dollar_value', R.__),R.__));

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ["ferrari_ff"].

var xUnderscore = R.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

export var sanitizeNames = R.map(R.compose(xUnderscore, R.toLower, R.prop('name')));


// Bonus 1:
// ============
// Refactor availablePrices with compose.

//var availablePrices = function(cars) {
//    var available_cars = _.filter(_.prop('in_stock'), cars);
//    return available_cars.map(function(x){
//        return accounting.formatMoney(x.dollar_value);
//    }).join(', ');
//};


export var fmtMoney = R.curryN(1, acc.formatMoney);

export var fmtPrice = R.compose(fmtMoney, carValue);


var filter = R.filter(carInStock,R.__);

export var availablePrices = R.compose(R.join(', '), R.map(fmtPrice) ,filter);


// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip()

//var fastestCar = function(cars) {
//    var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
//    var fastest = _.last(sorted);
//    return fastest.name + ' is the fastest';
//};


var append = R.flip(R.concat);
export var fastestCar = R.compose(append(' is the fastest'),
    R.prop('name'),
    R.last,
    R.sortBy(R.prop('horsepower')));