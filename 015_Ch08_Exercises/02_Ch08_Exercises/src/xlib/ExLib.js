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

// Note: Javascript parseInt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
export var intParse = _.compose(_.map(parseInt), Maybe.of);

// Exercise 5
// ==========
// Write a function that will getPost then toUpperCase the post's title

var toUpperCase = function(x) {
    return x.toUpperCase();
};


// getPost :: Int -> Future({id: Int, title: String})
var getPost = function (i) {
    return new Task(function(rej, res) {
        setTimeout(function(){
            res({id: i, title: 'Love them futures'})
        }, 300)
    });
};


var upperTitle = _.compose(toUpperCase, _.prop('title'));

export var getPostToUpper = _.compose(_.map(upperTitle), getPost);

// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access
// or return the error

export var Left = function(x) {
    this.__value = x;
};

Left.of = function(x) {
    return new Left(x);
};

Left.prototype.map = function(f) { return this; }
Left.prototype.ap = function(other) { return this; }
Left.prototype.join = function() { return this; }
Left.prototype.chain = function() { return this; }
Left.prototype.inspect = function() {
    return 'Left('+inspect(this.__value)+')';
};


export var Right = function(x) {
    this.__value = x;
};

Right.of = function(x) {
    return new Right(x);
};

Right.prototype.map = function(f) {
    return Right.of(f(this.__value));
};

Right.prototype.join = function() {
    return this.__value;
};

Right.prototype.chain = function(f) {
    return f(this.__value);
};

Right.prototype.ap = function(other) {
    return this.chain(function(f) {
        return other.map(f);
    });
};

Right.prototype.join = function() {
    return this.__value;
};

Right.prototype.chain = function(f) {
    return f(this.__value);
};

Right.prototype.inspect = function() {
    return 'Right('+inspect(this.__value)+')';
};


var showWelcome = _.compose(_.add( "Welcome "), _.prop('name'));

var checkActive = function(user) {
    return user.active ? Right.of(user) : Left.of('Your account is not active')
};

export var checkActiveShowWelcome = _.compose(_.map(showWelcome), checkActive);

// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return
// Right(x) if it is greater than 3 and Left("You need > 3") otherwise

export var validateLen3 = function(x) {
    return x.length > 3 ? Right.of(x) : Left.of("You need > 3");
};
