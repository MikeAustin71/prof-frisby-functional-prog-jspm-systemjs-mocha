'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////
// Utils
//
/**
 * Created on 12/11/2015 from Prof Frisby's flickr demo version 1.
 * Adapted for use with systemjs and jspm
 */

var img = function img(url) {
    return (0, _jquery2.default)('<img />', { src: url });
};

var Impure = {
    getJSON: _ramda2.default.curry(function (callback, url) {
        _jquery2.default.getJSON(url, callback);
    }),

    setHtml: _ramda2.default.curry(function (sel, html) {
        (0, _jquery2.default)(sel).html(html);
    })
};

var trace = _ramda2.default.curry(function (tag, x) {
    console.log(tag, x);
    return x;
});

////////////////////////////////////////////
// Pure

//  url :: String -> URL
var url = function url(t) {
    return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + t + '&format=json&jsoncallback=?';
};

var mediaUrl = _ramda2.default.compose(_ramda2.default.prop('m'), _ramda2.default.prop('media'));

var srcs = _ramda2.default.compose(_ramda2.default.map(mediaUrl), _ramda2.default.prop('items'));

var images = _ramda2.default.compose(_ramda2.default.map(img), srcs);

////////////////////////////////////////////
// Impure
//
var renderImages = _ramda2.default.compose(Impure.setHtml("body"), images);
var app = _ramda2.default.compose(Impure.getJSON(renderImages), url);

app("cats");
//# sourceMappingURL=flickr.js.map