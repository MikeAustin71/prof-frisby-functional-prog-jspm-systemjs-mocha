/**
 * Created by mike10 on 12/24/2015.
 */

export let __hotReload = true;

import _ from 'ramda';
import {Either,Maybe,Task} from 'folktale/data';
import {monads} from 'folktale/control';
import * as S from './support.js';

export var safeProp = _.curry(function (x, o) { return Maybe.of(o[x]); });

export var ex00_3 = _.compose(S.chain(safeProp('name')), S.chain(safeProp('street')), safeProp('address'));


