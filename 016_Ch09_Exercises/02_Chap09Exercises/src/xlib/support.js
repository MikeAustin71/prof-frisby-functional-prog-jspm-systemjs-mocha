/*
Partial excerpt from 'support.js', Professor Frisby's functional programming e-book.
Source Code Repo = https://github.com/MostlyAdequate/mostly-adequate-guide.git

 */

import _ from 'ramda';
import {Task} from 'folktale/data';
import {monads} from 'folktale/control';

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

var unsafePerformIO = function(x) { return x.unsafePerformIO(); };

export var join = function(m){ return m.join(); };

//export var chain = curry(function(f, m){
//    return m.map(f).join(); // or compose(join, map(f))(m)
//});

//  chain :: Monad m => (a -> m b) -> m a -> m b
export var chain = _.curry(function(f, m){
    return  _.compose(monads.join, _.map(f))(m) ; // or m.map(f).join()
});

Task.prototype.join = function(){ return this.chain(_.identity); };
