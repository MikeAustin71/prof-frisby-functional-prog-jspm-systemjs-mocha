'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ex00_3 = exports.safeProp = exports.__hotReload = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _control = require('folktale/control');

var _support = require('./support.js');

var S = _interopRequireWildcard(_support);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mike10 on 12/24/2015.
 */

var __hotReload = exports.__hotReload = true;

var safeProp = exports.safeProp = _ramda2.default.curry(function (x, o) {
  return _data.Maybe.of(o[x]);
});

var ex00_3 = exports.ex00_3 = _ramda2.default.compose(S.chain(safeProp('name')), S.chain(safeProp('street')), safeProp('address'));
//# sourceMappingURL=TLib.js.map