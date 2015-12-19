/**
 * Created by mike10 on 12/18/2015.
 */

export let __hotReload = true;

import _ from 'ramda';

export var match = _.curry(function(what, str){
    return str.match(what);
});

export var hasSpaces = match(/\s+/g);

export var replace = _.curry(function(what, replacement, str) {
    return str.replace(what, replacement);
});

export var filter = _.curry(function(f, ary) {
    return ary.filter(f);
});

export var map = _.curry(function(f, ary) {
    return ary.map(f);
});

