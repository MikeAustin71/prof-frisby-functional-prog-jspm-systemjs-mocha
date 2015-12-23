/**
 * Created by mike10 on 12/20/2015.
 */


export let __hotReload = true;

import _ from 'ramda';

import {Either,Right,Left,Maybe} from 'folktale/data';
import {monads} from 'folktale/control';

//  safeProp :: Key -> {Key: a} -> Maybe a
export var safeProp = _.curry(function(x, obj) {
    return Maybe.of(obj[x]);
});

//  safeHead :: [a] -> Maybe a
export var safeHead = safeProp(0);

//  firstAddressStreet :: User -> Maybe (Maybe (Maybe Street) )
export var firstAddressStreet = _.compose(
    _.map(_.map(safeProp('street'))), _.map(safeHead), safeProp('addresses')
);

export var mFirstAddressStreet = _.compose(
    monads.join, _.map(safeProp('street')), monads.join, _.map(safeHead), safeProp('addresses')
);


//  chain :: Monad m => (a -> m b) -> m a -> m b
export var chain = _.curry(function(f, m){
    return  _.compose(monads.join, _.map(f))(m) ; // or m.map(f).join()
});

// chain
export var v2FirstAddressStreet = _.compose(
    chain(safeProp('street')), chain(safeHead), safeProp('addresses')
);