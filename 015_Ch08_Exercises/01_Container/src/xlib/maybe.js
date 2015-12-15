/**
 * Created by mike10 on 12/14/2015.
 */

import _ from 'ramda';

export let __hotReload = true;

export var Maybe = function(x) {
    this.__value = x;
};

Maybe.of = function(x) {
    return new Maybe(x);
};

Maybe.prototype.logIt = function(x){
    console.log( x + " Maybe.__value = " + this.__value);
};


Maybe.prototype.isNothing = function() {
    return (this.__value === null || this.__value === undefined);
};

Maybe.prototype.map = function(f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
};

// pointfree style
//  map :: Functor f => (a -> b) -> f a -> f b

var map = _.curry(function(f, any_functor_at_all) {
    return any_functor_at_all.map(f);
});