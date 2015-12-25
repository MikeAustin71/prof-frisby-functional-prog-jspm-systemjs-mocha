/**
 * Created by mike10 on 12/21/2015.
 */

export let __hotReload = true;

import _ from 'ramda';
import {Either,Maybe,Task} from 'folktale/data';
import {monads} from 'folktale/control';
import * as S from './support.js';

// Exercise 1
// ==========
// Use safeProp and map/join or chain to safely get the street name when given
// a user

export var safeProp = _.curry(function (x, o) { return Maybe.of(o[x]); });

export var ex1_1 = _.compose(monads.join,_.map(safeProp('name')), monads.join, _.map(safeProp('street')), safeProp('address'));

export var ex1_2 = _.compose(S.chain(safeProp('name')), S.chain(safeProp('street')), safeProp('address'));

// Exercise 2
// ==========
// Use getFile to get the filename, remove the directory so it's just the file,
// then purely log it.

// Note: IO is located in support.js

export var getFile = function() {
    return new S.IO(function(){ return __filename; });
};

export var pureLog = function(x) {
    return new S.IO(function(){
        console.log(x);
        return 'logged ' + x; // for testing w/o mocks
    });
};

export var ex2_1 = _.compose(S.chain(_.compose(pureLog, _.last, S.split('/'))), getFile);


// Exercise 3
// ==========
// Use getPost() then pass the post's id to getComments().
//

var getPost = function(i) {
    return new Task(function (rej, res) {
        setTimeout(function () {
            res({ id: i, title: 'Love them tasks' });
        }, 300);
    });
};

var getComments = function(i) {
    return new Task(function (rej, res) {
        setTimeout(function () {
            res([
                {post_id: i, body: "This book should be illegal"},
                {post_id: i, body: "Monads are like smelly shallots"}
            ]);
        }, 300);
    });
};

export var ex3_1 = _.compose(S.chain(_.compose(getComments, _.prop('id'))), getPost);

// Exercise 4
// ==========
// Use validateEmail, addToMailingList, and emailBlast to implement ex4's type
// signature.

//  addToMailingList :: Email -> IO([Email])
var addToMailingList = (function(list){
    return function(email) {
        return new S.IO(function(){
            list.push(email);
            return list;
        });
    }
})([]);

var emailBlast = function(list) {
    return new S.IO(function(){
        return 'emailed: ' + list.join(',');
    });
};

var validateEmail = function(x){
    return x.match(/\S+@\S+\.\S+/) ? (new S.Right(x)) : (new S.Left('invalid email'));
};

// Note modified from original 'getResult' for Chapter 9 Exercises.
// Original: var getResult = either(_.identity, unsafePerformIO);

export var getResult = _.curry(S.either(_.identity, _.__));

//_.compose(S.chain(_.compose(emailBlast,addToMailingList),validateEmail));
export var ex4_1 = _.compose(_.map(_.compose(S.chain(emailBlast), addToMailingList)), validateEmail);

// Exercise ex4_2 - an alternative to ex4_1

// export var getResult = _.curry(S.either(_.identity, _.__));
export var getResult2 = function(x){
    var j =  x.isRight ? x.get().get() : x.value;
    return j;
};

var emailBlast2 = function(list) {
    return new S.IO2(function(){
        return 'emailed: ' + list.join(',');
    });
};

export var validateEmail2 = function(x){
    return x.match(/\S+@\S+\.\S+/) ? Either.Right(x) : (new Either.Left('invalid email'));
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

