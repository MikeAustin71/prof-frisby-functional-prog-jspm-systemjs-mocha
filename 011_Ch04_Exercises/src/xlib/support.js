/**
 * Created by mike10 on 12/6/2015.
 */

import R from 'ramda';

export var xWords = R.split(' ');

export var sentence = R.map(xWords);

export var filterQS = R.filter(R.test(/q/i));

// All three solutions work for max
//var _keepHighest = function(x,y){ return x >= y ? x : y; }; // <- leave be
//var _keepHighest = R.max;
// Solution # 3 - probably the best.
export var max  = R.reduce(R.max(R.__),0,R.__);

export var slice = R.slice(R.__,R.__,R.__);

export var take = R.slice(0,R.__, R.__);

export var flatten = R.flatten(R.__);

export function words(str) {

    return xWords(str);

}




export function Xlib(){

}

Xlib.prototype.splitWords = function(str){
    return xWords(str);
};
