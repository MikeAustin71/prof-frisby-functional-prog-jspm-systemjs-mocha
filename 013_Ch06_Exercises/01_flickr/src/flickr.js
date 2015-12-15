/**
 * Created on 12/11/2015 from Prof Frisby's flickr demo version 1.
 * Adapted for use with systemjs and jspm
 */

import $ from 'jquery';
import _ from 'ramda';

////////////////////////////////////////////
// Utils
//
var img = function (url) {
    return $('<img />', { src: url });
};

var Impure = {
    getJSON: _.curry(function(callback, url) {
        $.getJSON(url, callback)
    }),

    setHtml: _.curry(function(sel, html) {
        $(sel).html(html)
    })
};

var trace = _.curry(function(tag, x) {
    console.log(tag, x);
    return x;
});



////////////////////////////////////////////
// Pure

//  url :: String -> URL
var url = function (t) {
    return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + t + '&format=json&jsoncallback=?';
};

var mediaUrl = _.compose(_.prop('m'), _.prop('media'));

var srcs = _.compose(_.map(mediaUrl), _.prop('items'));

var images = _.compose(_.map(img), srcs);


////////////////////////////////////////////
// Impure
//
var renderImages = _.compose(Impure.setHtml("body"), images);
var app = _.compose(Impure.getJSON(renderImages), url);

app("cats");

