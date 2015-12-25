'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unsafePerformIO = exports.IO2 = exports.inspect = exports.chain = exports.join = exports.__hotReload = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _control = require('folktale/control');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mike10 on 12/23/2015.
 */

var __hotReload = exports.__hotReload = true;

//export var join = function(m){ return m.join(); };
var join = exports.join = function join(m) {
    return _control.monads.join(m);
};

//  chain :: Monad m => (a -> m b) -> m a -> m b
var chain = exports.chain = _ramda2.default.curry(function (f, m) {
    return _ramda2.default.compose(_control.monads.join, _ramda2.default.map(f))(m); // or m.map(f).join()
});

var inspect = exports.inspect = function inspect(x) {
    return x && x.inspect ? x.inspect() : x;
};

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

var unsafePerformIO = exports.unsafePerformIO = function unsafePerformIO(x) {
    return x.unsafePerformIO();
};
//# sourceMappingURL=support.js.map