'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IO2 = exports.either = exports.chain = exports.join = exports.unsafePerformIO = exports.IO = exports.inspect = exports.split = exports.Right = exports.Left = exports.__hotReload = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _control = require('folktale/control');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Partial excerpt from 'support.js', Professor Frisby's functional programming e-book.
Source Code Repo = https://github.com/MostlyAdequate/mostly-adequate-guide.git

 */

var __hotReload = exports.__hotReload = true;

var Left = exports.Left = function Left(x) {
    this.__value = x;
};

// TODO: remove this nonsense
Left.of = function (x) {
    return new Left(x);
};

Left.prototype.map = function (f) {
    return this;
};
Left.prototype.ap = function (other) {
    return this;
};
Left.prototype.join = function () {
    return this;
};
Left.prototype.chain = function () {
    return this;
};
Left.prototype.inspect = function () {
    return 'Left(' + inspect(this.__value) + ')';
};

var Right = exports.Right = function Right(x) {
    this.__value = x;
};

// TODO: remove in favor of Either.of
Right.of = function (x) {
    return new Right(x);
};

Right.prototype.map = function (f) {
    return Right.of(f(this.__value));
};

Right.prototype.join = function () {
    return this.__value;
};

Right.prototype.chain = function (f) {
    return f(this.__value);
};

Right.prototype.ap = function (other) {
    return this.chain(function (f) {
        return other.map(f);
    });
};

Right.prototype.join = function () {
    return this.__value;
};

Right.prototype.chain = function (f) {
    return f(this.__value);
};

Right.prototype.inspect = function () {
    return 'Right(' + inspect(this.__value) + ')';
};

var split = exports.split = _ramda2.default.curry(function (what, x) {
    return x.split(what);
});

var inspect = exports.inspect = function inspect(x) {
    return x && x.inspect ? x.inspect() : x;
};

// IO
var IO = exports.IO = function IO(f) {
    this.unsafePerformIO = f;
};

IO.of = function (x) {
    return new IO(function () {
        return x;
    });
};

IO.prototype.map = function (f) {
    return new IO(_ramda2.default.compose(f, this.unsafePerformIO));
};

IO.prototype.join = function () {
    return this.unsafePerformIO();
};

IO.prototype.chain = function (f) {
    return this.map(f).join();
};

IO.prototype.ap = function (a) {
    return this.chain(function (f) {
        return a.map(f);
    });
};

IO.prototype.inspect = function () {
    return 'IO(' + inspect(this.unsafePerformIO) + ')';
};

var unsafePerformIO = exports.unsafePerformIO = function unsafePerformIO(x) {
    return x.unsafePerformIO();
};

var join = exports.join = function join(m) {
    return m.join();
};

//export var chain = curry(function(f, m){
//    return m.map(f).join(); // or compose(join, map(f))(m)
//});

//  chain :: Monad m => (a -> m b) -> m a -> m b
var chain = exports.chain = _ramda2.default.curry(function (f, m) {
    return _ramda2.default.compose(_control.monads.join, _ramda2.default.map(f))(m); // or m.map(f).join()
});

_data.Task.prototype.join = function () {
    return this.chain(_ramda2.default.identity);
};

var either = exports.either = _ramda2.default.curry(function (f, g, e) {
    switch (e.constructor) {
        case Left:
            return f(e.__value);
        case Right:
            return g(e.__value);
    }
});

/* Alternative Exercise 4 */
// IO
var IO2 = exports.IO2 = function IO2(f) {
    this.unsafePerformIO = f;
};

IO2.of = function (x) {
    return new IO2(function () {
        return x;
    });
};

IO2.prototype.map = function (f) {
    return new IO2(_ramda2.default.compose(f, this.unsafePerformIO));
};

IO2.prototype.get = function () {
    return this.unsafePerformIO;
};

IO2.prototype.join = function () {
    return this.unsafePerformIO();
};

IO2.prototype.chain = function (f) {
    return this.map(f).join();
};

IO2.prototype.ap = function (a) {
    return this.chain(function (f) {
        return a.map(f);
    });
};

IO2.prototype.inspect = function () {
    return 'IO(' + inspect(this.unsafePerformIO) + ')';
};
//# sourceMappingURL=support.js.map