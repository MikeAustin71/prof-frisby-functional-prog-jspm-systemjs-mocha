'use strict';

Object.defineProperty(exports, "__esModule", {
            value: true
});
exports.__hotReload = undefined;

var _chai = require('chai');

var Chai = _interopRequireWildcard(_chai);

var _data = require('folktale/data');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by mike10 on 12/23/2015.
 */

var __hotReload = exports.__hotReload = true;

describe("Ex05 Test folktale 'Either'", function () {

            // This version of validateEmail returns a folktale 'Either' object.
            var validateEmail = function validateEmail(x) {
                        return x.match(/\S+@\S+\.\S+/) ? _data.Either.Right(x) : _data.Either.Left('invalid email');
            };

            describe("Ex05-1 - folktale Either Examples", function () {

                        it("validateEmail('sleepy@grandpa.net') should return Either.Right('sleepy@grandpa.net') ", function () {

                                    var expected = _data.Either.Right('sleepy@grandpa.net');
                                    var result = validateEmail('sleepy@grandpa.net');

                                    Chai.assert.deepEqual(expected, result, "Error: 'validateEmail()' result is INVALID!");
                        });

                        it("validateEmail('notanemail') should return Either.Left('invalid email') ", function () {

                                    var expected = _data.Either.Left('invalid email');
                                    var result = validateEmail('notanemail');

                                    Chai.assert.deepEqual(expected, result, "Error: 'validateEmail()' result is INVALID!");
                        });
            });

            describe("Ex05-2 - folktale Either.get() Examples", function () {

                        it("validateEmail('sleepy@grandpa.net') should return string 'sleepy@grandpa.net' ", function () {

                                    var expected = 'sleepy@grandpa.net';
                                    var e1 = validateEmail('sleepy@grandpa.net');
                                    var result = e1.get();

                                    Chai.assert.deepEqual(expected, result, "Error: 'validateEmail()' result is INVALID!");
                        });

                        it("validateEmail('notanemail').merge() should return string 'invalid email' ", function () {

                                    var expected = 'invalid email';
                                    var result = validateEmail('notanemail').merge();

                                    Chai.assert.deepEqual(expected, result, "Error: 'validateEmail()' result is INVALID!");
                        });
            });

            describe("Ex05-3 - Either.IsRight and IsLeft", function () {

                        it("validateEmail('sleepy@grandpa.net') isRight should return 'true' ", function () {

                                    var expected = true;
                                    var e1 = validateEmail('sleepy@grandpa.net');
                                    var result = e1.isRight;

                                    Chai.assert.deepEqual(expected, result, "Error: 'isRight' result is INVALID!");
                        });

                        it("validateEmail('notanemail') isLeft should return 'true' ", function () {

                                    var expected = true;
                                    var e1 = validateEmail('notanemail');
                                    var result = e1.isLeft;

                                    Chai.assert.deepEqual(expected, result, "Error: 'isLeft' result is INVALID!");
                        });
            });
});
//# sourceMappingURL=Ex05_tests.js.map