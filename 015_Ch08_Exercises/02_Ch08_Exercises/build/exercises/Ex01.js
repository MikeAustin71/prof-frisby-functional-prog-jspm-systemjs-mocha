'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _data = require('folktale/data');

var _ExLib = require('./../xlib/ExLib.js');

var L = _interopRequireWildcard(_ExLib);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataAr = [3, 5]; /**
                      * Created by mike10 on 12/15/2015.
                      */

var result1 = L.add1(dataAr);

console.log("Result 1 for Ex1 = " + result1);

var x = _data.Maybe.of(37);

console.log("value of Maybe = " + x.getOrElse("null value!"));

// Exercise 5
// ==========
// Write a function that will getPost then toUpperCase the post's title

// getPost :: Int -> Task({id: Int, title: String})
var getPost = function getPost(i) {
    return new Task(function (rej, res) {
        setTimeout(function () {
            res({ id: i, title: 'Love them futures' });
        }, 300);
    });
};
//# sourceMappingURL=Ex01.js.map