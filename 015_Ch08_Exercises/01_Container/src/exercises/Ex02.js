/**
 * Created by mike10 on 12/14/2015.
 */

import "./../../build/styles/css/idxdisplay.css!";
import _ from 'ramda';

import {Maybe} from './../xlib/maybe.js';

import $ from 'jquery';

//=> Maybe(['a', 'a'])
var maybe1 = Maybe.of("Malkovich Malkovich").map(_.match(/a/ig));

maybe1.logIt("maybe1");

$("#maybe1").text("Container => Maybe(['a', 'a']) - maybe1 value = " + JSON.stringify(maybe1.__value));

//=> Maybe(null)
var maybe2 = Maybe.of(null).map(_.match(/a/ig));

maybe2.logIt("maybe2");

$("#maybe2").text("Container => Maybe(null) - maybe2 value = " + JSON.stringify(maybe2.__value));


//=> Maybe(null)
var maybe3 = Maybe.of({name: "Boris"}).map(_.prop("age")).map(_.add(10,_.__));

maybe3.logIt("maybe3");

$("#maybe3").text("Container => Maybe(null) - maybe3 value = " + JSON.stringify(maybe3.__value));


//=> Maybe(24)
var maybe4 = Maybe.of({name: "Dinah", age: 14}).map(_.prop("age")).map(_.add(10,_.__));

maybe4.logIt("maybe4");

$("#maybe4").text("Container => Maybe(null) - maybe4 value = " + JSON.stringify(maybe4.__value));

