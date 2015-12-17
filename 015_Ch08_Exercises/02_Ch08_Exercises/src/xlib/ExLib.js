/**
 * Created by mike10 on 12/16/2015.
 */

export let __hotReload = true;

import _ from 'ramda';

import {Task,Maybe} from 'folktale/data';


// Exercise 1
// ==========
// Use _.add(x,y) and map(f,x) to make a function that increments a value inside a functor

export var add1 =  _.map(_.add(1,_.__),_.__);


//Exercise 2
// ==========
// Use _.head to get the first element of the list
// var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
// var ex2 = undefined

var inspect = function(x) {
    return (x && x.inspect) ? x.inspect() : x;
};


// Identity
export var Identity = function(x) {
    this.__value = x;
};

Identity.of = function(x) { return new Identity(x); };

Identity.prototype.map = function(f) {
    return Identity.of(f(this.__value));
};

Identity.prototype.inspect = function() {
    return 'Identity('+inspect(this.__value)+')';
};

export var firstInList = _.map(_.head);

// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user

export var safeProp = _.curry(function (x, o) { return Maybe.of(o[x]); });

export var findFirstInitial = _.compose( _.map(_.head),safeProp('name'));

// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement
//var ex4 = function (n) {
//    if (n) { return parseInt(n); }
//};

export var intParse = _.compose(_.map(parseInt), Maybe.of);