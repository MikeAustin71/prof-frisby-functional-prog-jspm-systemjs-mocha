/**
 * Created by mike10 on 12/23/2015.
 */

export let __hotReload = true;

import _ from 'ramda';

import {Either,Maybe} from 'folktale/data';
import {monads} from 'folktale/control';

//export var join = function(m){ return m.join(); };
export var join = function(m){ return monads.join(m); };

//  chain :: Monad m => (a -> m b) -> m a -> m b
export var chain = _.curry(function(f, m){
    return  _.compose(monads.join, _.map(f))(m) ; // or m.map(f).join()
});

export var inspect = function(x) {
    return (x && x.inspect) ? x.inspect() : x;
};

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

export var unsafePerformIO = function(x) { return x.unsafePerformIO(); };
