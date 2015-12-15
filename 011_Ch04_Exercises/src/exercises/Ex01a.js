/**
 * Created by mike10 on 12/7/2015.
 */

import {sentence} from './../xlib/support.js';

var txt = 'How now brown cow';

var outSentence = sentence(txt);

console.log('outSentence ');

var txt2 = ["How now brown cow", "Batman laid an egg"];

var outWords = sentence(txt2);

console.log('outSentence2 ');