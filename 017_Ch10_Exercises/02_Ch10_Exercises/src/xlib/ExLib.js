/**
 * Created by Amarillo Mike on 12/31/2015.
 */

export let __hotReload = true;

import _ from 'ramda';
import {Either,Maybe,Task} from 'folktale/data';

export var liftA2 = _.curry(function(f, functor1, functor2) {
    return functor1.map(f).ap(functor2);
});

export var liftA3 = _.curry(function(f, functor1, functor2, functor3) {
    return functor1.map(f).ap(functor2).ap(functor3);
});


export var getPost = function(i) {
    return new Task(function (rej, res) {
        setTimeout(function () { res({ id: i, title: 'Love them tasks' }); }, 300);
    });
};

export var getComments = function(i){
    return new Task(function (rej, res) {
        setTimeout(function () {
            res(["This book should be illegal", "Monads are like space burritos"]);
        }, 300);
    });
};


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


