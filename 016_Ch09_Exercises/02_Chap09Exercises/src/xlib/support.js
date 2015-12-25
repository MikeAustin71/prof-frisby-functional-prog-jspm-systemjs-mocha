/*
Partial excerpt from 'support.js', Professor Frisby's functional programming e-book.
Source Code Repo = https://github.com/MostlyAdequate/mostly-adequate-guide.git

 */

export let __hotReload = true;

import _ from 'ramda';
import {Task} from 'folktale/data';
import {monads} from 'folktale/control';


export var Left = function(x) {
    this.__value = x;
};

// TODO: remove this nonsense
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

// TODO: remove in favor of Either.of
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


export var split = _.curry(function(what, x) {
    return x.split(what);
});

export var inspect = function(x) {
    return (x && x.inspect) ? x.inspect() : x;
};

// IO
export var IO = function(f) {
    this.unsafePerformIO = f;
};

IO.of = function(x) {
    return new IO(function() {
        return x;
    });
};

IO.prototype.map = function(f) {
    return new IO(_.compose(f, this.unsafePerformIO));
};

IO.prototype.join = function() {
    return this.unsafePerformIO();
};

IO.prototype.chain = function(f) {
    return this.map(f).join();
};

IO.prototype.ap = function(a) {
    return this.chain(function(f) {
        return a.map(f);
    });
};

IO.prototype.inspect = function() {
    return 'IO('+inspect(this.unsafePerformIO)+')';
};

export var unsafePerformIO = function(x) { return x.unsafePerformIO(); };

export var join = function(m){ return m.join(); };

//export var chain = curry(function(f, m){
//    return m.map(f).join(); // or compose(join, map(f))(m)
//});

//  chain :: Monad m => (a -> m b) -> m a -> m b
export var chain = _.curry(function(f, m){
    return  _.compose(monads.join, _.map(f))(m) ; // or m.map(f).join()
});

Task.prototype.join = function(){ return this.chain(_.identity); };


export var either = _.curry(function(f, g, e) {
    switch(e.constructor) {
        case Left: return f(e.__value);
        case Right: return g(e.__value);
    }
});


/* Alternative Exercise 4 */
// IO
export var IO2 = function(f) {
    this.unsafePerformIO = f;
};

IO2.of = function(x) {
    return new IO2(function() {
        return x;
    });
};

IO2.prototype.map = function(f) {
    return new IO2(_.compose(f, this.unsafePerformIO));
};

IO2.prototype.get = function(){
    return this.unsafePerformIO;
}

IO2.prototype.join = function() {
    return this.unsafePerformIO();
};

IO2.prototype.chain = function(f) {
    return this.map(f).join();
};

IO2.prototype.ap = function(a) {
    return this.chain(function(f) {
        return a.map(f);
    });
};

IO2.prototype.inspect = function() {
    return 'IO('+inspect(this.unsafePerformIO)+')';
};

