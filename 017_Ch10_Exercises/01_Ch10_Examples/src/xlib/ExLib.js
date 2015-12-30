/**
 * Created by mike10 on 12/25/2015.
 */


export let __hotReload = true;

import _ from 'ramda';
import {Either,Maybe,Task} from 'folktale/data';
import {monads} from 'folktale/control';

export var ex1_1 = _.curry(function(x){

    return Maybe.of(x);

});

export var add = function(a, b){
    return a + b;
};


export var add2 = _.curry(function(a, b){
   return a + b;
});

export var add3 = _.curry(function(a,b,c){
    return a + b + c;
});

// Inputs two values and computes result formatted as a container.
export var ex2_1 = function(x, y) {
    return Maybe.of(_.add).ap(Maybe.of(x)).ap(Maybe.of(y));
};

// Inputs two containers and computes the addition result in a third container
export var ex2_2 = function(x, y) {
    return Maybe.of(_.add).ap(x).ap(y);
};

export var identity = _.curry(function(x){
    return x;
});

export var checkEmail = function(user){
    return user['email'].match(/\S+@\S+\.\S+/) ? Either.Right(user['email']) : Either.Left('invalid email');
};

export var checkName = function(user){
    return user && user['name'] ? Either.Right(user['name']) : Either.Left('invalid name');
};

export var liftA2 = _.curry(function(f, functor1, functor2) {
    return functor1.map(f).ap(functor2);
});

export var liftA3 = _.curry(function(f, functor1, functor2, functor3) {
    return functor1.map(f).ap(functor2).ap(functor3);
});

