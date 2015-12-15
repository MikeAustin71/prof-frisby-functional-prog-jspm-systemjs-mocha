/**
 * Created by mike10 on 12/13/2015.
 */

import _ from 'ramda';

export let __hotReload = true;

export var Container = function(x) {
    this.__value = x;
};

// efectively this is a constructor
Container.of = function(x){
    return new Container(x);
};

Container.prototype.logIt = function(x){
    console.log( x + " Container __value = " + this.__value);
};


// This is Functor!
// A Functor is a type that implements map and obeys some laws
// (a -> b) -> Container a -> Container b
Container.prototype.map = function(f){
    return Container.of(f(this.__value))
};

