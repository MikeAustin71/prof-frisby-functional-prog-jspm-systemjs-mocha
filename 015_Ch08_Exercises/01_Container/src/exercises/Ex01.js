/**
 * Created by mike10 on 12/13/2015.
 */

import "./../../build/styles/css/idxdisplay.css!";

import _ from 'ramda';

import {Container} from './../xlib/support.js';

import $ from 'jquery';

export let __hotReload = true;

//=> Container(3)
var test = Container.of(8);

test.logIt("test1");

$("#container1").text("Container test 1 value = " + test.__value);

//=> Container("hotdogs")
var test2 = Container.of("hotdogs");
$("#container2").text("Container test 2 value = " + test2.__value);
test2.logIt("test2");

//=> Container(Container({name: "yoda" }))
var test3 = Container.of({name: "yoda"});
$("#container3").text("Container test 3 value = " + JSON.stringify( test3.__value));
test3.logIt("test3");

//=> Container(4)
var func1 = Container.of(2).map(function(two){ return two + 2 });
$("#functor1").text("Container Functor 1 value = " + func1.__value);
func1.logIt("Functor-1");


//=> Container("FLAMETHROWERS")
var func2 = Container.of("flamethrowers").map(function(s){ return s.toUpperCase() });
$("#functor2").text("Container Functor 2 value = " + func2.__value);
func2.logIt("Functor-2");

//=> Container(10)
var func3 = Container.of("bombs").map(_.concat(' away')).map(_.prop('length'));
$("#functor3").text("Container Functor 3 value = " + func3.__value);
func2.logIt("Functor-3");



