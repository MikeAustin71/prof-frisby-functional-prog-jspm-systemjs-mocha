'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chain = exports.join = exports.IO = exports.inspect = exports.split = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _control = require('folktale/control');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var split = exports.split = _ramda2.default.curry(function (what, x) {
    return x.split(what);
}); /*
    Partial excerpt from 'support.js', Professor Frisby's functional programming e-book.
    Source Code Repo = https://github.com/MostlyAdequate/mostly-adequate-guide.git
    
     */

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

var unsafePerformIO = function unsafePerformIO(x) {
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
//# sourceMappingURL=support.js.map