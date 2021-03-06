'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNum = exports.v2FirstAddressStreet = exports.chain = exports.mFirstAddressStreet = exports.firstAddressStreet = exports.safeHead = exports.safeProp = exports.__hotReload = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _control = require('folktale/control');

var _support = require('./support.js');

var S = _interopRequireWildcard(_support);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mike10 on 12/20/2015.
 */

var __hotReload = exports.__hotReload = true;

//  safeProp :: Key -> {Key: a} -> Maybe a
var safeProp = exports.safeProp = _ramda2.default.curry(function (x, obj) {
    return _data.Maybe.of(obj[x]);
});

//  safeHead :: [a] -> Maybe a
var safeHead = exports.safeHead = safeProp(0);

//  firstAddressStreet :: User -> Maybe (Maybe (Maybe Street) )
var firstAddressStreet = exports.firstAddressStreet = _ramda2.default.compose(_ramda2.default.map(_ramda2.default.map(safeProp('street'))), _ramda2.default.map(safeHead), safeProp('addresses'));

var mFirstAddressStreet = exports.mFirstAddressStreet = _ramda2.default.compose(_control.monads.join, _ramda2.default.map(safeProp('street')), _control.monads.join, _ramda2.default.map(safeHead), safeProp('addresses'));

//  chain :: Monad m => (a -> m b) -> m a -> m b
var chain = exports.chain = _ramda2.default.curry(function (f, m) {
    return _ramda2.default.compose(_control.monads.join, _ramda2.default.map(f))(m); // or m.map(f).join()
});

// chain
var v2FirstAddressStreet = exports.v2FirstAddressStreet = _ramda2.default.compose(chain(safeProp('street')), chain(safeHead), safeProp('addresses'));

/*
var getNum = function (i) {
    return new Task(function(rej, res) {
        setTimeout(function(){
            res({num: i})
        }, 300)
    });
};
*/

var getNum = exports.getNum = function getNum(i) {
    return new _data.Task(function (rej, res) {
        setTimeout(function () {
            res({ num: i });
        }, 300);
    });
};
//# sourceMappingURL=Exlib.js.map