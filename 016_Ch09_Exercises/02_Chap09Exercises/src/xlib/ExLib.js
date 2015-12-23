/**
 * Created by mike10 on 12/21/2015.
 */

export let __hotReload = true;

import _ from 'ramda';
import {Either,Right,Left,Maybe,Task} from 'folktale/data';
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

