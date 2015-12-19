'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _ExLib = require('./../xlib/ExLib.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Ex04 Testing replace vowels in string", function () {

        describe("Ex04-1 - Create function 'Censored' to replace vowels in 'Chocolate Rain' ", function () {

                var noVowels = (0, _ExLib.replace)(/[aeiou]/ig);
                // function(replacement, x) { return x.replace(/[aeiou]/ig, replacement) }

                var censored = noVowels("*");
                // function(x) { return x.replace(/[aeiou]/ig, "*") }

                var expected = 'Ch*c*l*t* R**n';
                var result = censored("Chocolate Rain");

                it("censored('Chocolate Rain') should return 'Ch*c*l*t* R**n'", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'censored()' result is INVALID!");
                });
        });

        describe("Ex04-2 - Create function 'replaceVowels' to replace vowels in 'Chocolate Rain' ", function () {

                var replaceVowels = _ramda2.default.curry((0, _ExLib.replace)(/[aeiou]/ig, '*'));
                // function(x) { return x.replace(/[aeiou]/ig, "*") }

                var expected = 'Ch*c*l*t* R**n';
                var result = replaceVowels("Chocolate Rain");

                it("replaceVowels('Chocolate Rain') should return 'Ch*c*l*t* R**n'", function () {

                        Chai.assert.deepEqual(expected, result, "Error: 'replaceVowels()' result is INVALID!");
                });
        });
}); /**
     * Created by mike10 on 12/18/2015.
     */
//# sourceMappingURL=Ex04_tests.js.map