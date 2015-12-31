'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unsafePerformIO = exports.IO = exports.inspect = exports.getComments = exports.getPost = exports.liftA3 = exports.liftA2 = exports.__hotReload = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Amarillo Mike on 12/31/2015.
 */

var __hotReload = exports.__hotReload = true;

var liftA2 = exports.liftA2 = _ramda2.default.curry(function (f, functor1, functor2) {
    return functor1.map(f).ap(functor2);
});

var liftA3 = exports.liftA3 = _ramda2.default.curry(function (f, functor1, functor2, functor3) {
    return functor1.map(f).ap(functor2).ap(functor3);
});

var getPost = exports.getPost = function getPost(i) {
    return new _data.Task(function (rej, res) {
        setTimeout(function () {
            res({ id: i, title: 'Love them tasks' });
        }, 300);
    });
};

var getComments = exports.getComments = function getComments(i) {
    return new _data.Task(function (rej, res) {
        setTimeout(function () {
            res(["This book should be illegal", "Monads are like space burritos"]);
        }, 300);
    });
};

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
//# sourceMappingURL=ExLib.js.map