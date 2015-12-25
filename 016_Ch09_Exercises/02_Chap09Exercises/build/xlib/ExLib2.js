'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ex4_1 = exports.getResult = exports.ex3_1 = exports.ex2_1 = exports.pureLog = exports.getFile = exports.ex1_2 = exports.ex1_1 = exports.safeProp = exports.__hotReload = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _control = require('folktale/control');

var _support = require('./support.js');

var S = _interopRequireWildcard(_support);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by mike10 on 12/21/2015.
 */

var __hotReload = exports.__hotReload = true;

// Exercise 1
// ==========
// Use safeProp and map/join or chain to safely get the street name when given
// a user

var safeProp = exports.safeProp = _ramda2.default.curry(function (x, o) {
    return _data.Maybe.of(o[x]);
});

var ex1_1 = exports.ex1_1 = _ramda2.default.compose(_control.monads.join, _ramda2.default.map(safeProp('name')), _control.monads.join, _ramda2.default.map(safeProp('street')), safeProp('address'));

var ex1_2 = exports.ex1_2 = _ramda2.default.compose(S.chain(safeProp('name')), S.chain(safeProp('street')), safeProp('address'));

// Exercise 2
// ==========
// Use getFile to get the filename, remove the directory so it's just the file,
// then purely log it.

// Note: IO is located in support.js

var getFile = exports.getFile = function getFile() {
    return new S.IO(function () {
        return __filename;
    });
};

var pureLog = exports.pureLog = function pureLog(x) {
    return new S.IO(function () {
        console.log(x);
        return 'logged ' + x; // for testing w/o mocks
    });
};

var ex2_1 = exports.ex2_1 = _ramda2.default.compose(S.chain(_ramda2.default.compose(pureLog, _ramda2.default.last, S.split('/'))), getFile);

// Exercise 3
// ==========
// Use getPost() then pass the post's id to getComments().
//

var getPost = function getPost(i) {
    return new _data.Task(function (rej, res) {
        setTimeout(function () {
            res({ id: i, title: 'Love them tasks' });
        }, 300);
    });
};
var getComments = function getComments(i) {
    return new _data.Task(function (rej, res) {
        setTimeout(function () {
            res([{ post_id: i, body: "This book should be illegal" }, { post_id: i, body: "Monads are like smelly shallots" }]);
        }, 300);
    });
};

var ex3_1 = exports.ex3_1 = _ramda2.default.compose(S.chain(_ramda2.default.compose(getComments, _ramda2.default.prop('id'))), getPost);

// Exercise 4
// ==========
// Use validateEmail, addToMailingList, and emailBlast to implement ex4's type
// signature.

//  addToMailingList :: Email -> IO([Email])
var addToMailingList = (function (list) {
    return function (email) {
        return new S.IO(function () {
            list.push(email);
            return list;
        });
    };
})([]);

function emailBlast(list) {
    return new S.IO(function () {
        return 'emailed: ' + list.join(',');
    });
}

var validateEmail = function validateEmail(x) {
    return x.match(/\S+@\S+\.\S+/) ? new S.Right(x) : new S.Left('invalid email');
};

// Note modified from original 'getResult' for Chapter 9 Exercises.
// Original: var getResult = either(_.identity, unsafePerformIO);

var getResult = exports.getResult = _ramda2.default.curry(S.either(_ramda2.default.identity, _ramda2.default.__));

//_.compose(S.chain(_.compose(emailBlast,addToMailingList),validateEmail));
var ex4_1 = exports.ex4_1 = _ramda2.default.compose(_ramda2.default.map(_ramda2.default.compose(S.chain(emailBlast), addToMailingList)), validateEmail);

// Exercise 4 Alternative ex4_2
/*
 export var getResult2 = _.curry(Either(_.identity, _.__));

 function emailBlast2(list) {
 return new S.IO2(function(){
 return 'emailed: ' + list.join(',');
 });
 }

 var validateEmail2 = function(x){
 return x.match(/\S+@\S+\.\S+/) ? (Either.Right(x)) : (new Either.Left('invalid email'));
 };

 var addToMailingList2 = (function(list){
 return function(email) {
 return new S.IO2(function(){
 list.push(email);
 return list;
 });
 }
 })([]);

 export var ex4_2 = _.compose(_.map(_.compose(S.chain(emailBlast2), addToMailingList2)), validateEmail2);
 */
//# sourceMappingURL=ExLib2.js.map