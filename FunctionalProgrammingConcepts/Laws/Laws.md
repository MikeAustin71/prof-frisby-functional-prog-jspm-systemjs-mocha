# Laws
## Prof. Frisby's Mostly Adequate Guide To Functional Programming

# Page 39 - maps law
// map's composition law
```
var law = compose(map(f), map(g)) == map(compose(f, g));
```

## Page 79 applicatives are "closed under composition"
Like the other mathematical constructs we've explored, applicative functors hold some useful properties for us to rely on in our daily code. First off, you should know that applicatives are "closed under composition", meaning ap will never change container types on us(yet another reason to favor over monads). That's not to say we cannot have multiple different effects - we can stack our types knowing that they will remain the same during the entirety of our application.
 To demonstrate:
   var tOfM = compose(Task.of, Maybe.of);

  liftA2(_.concat, tOfM('Rainy Days and Mondays'), tOfM(' always get me down'));
  // -> Task(Maybe(Rainy Days and Mondays always get me down)


  ## Page 79 Identity
   // identity
  A.of(id).ap(v) == v

   Right, so applying id all from within a functor shouldn't alter the value in v. For example:
   var v = Identity.of("Pillow Pets");
  Identity.of(id).ap(v) == v

   Identity.of(id) makes me chuckle at its futility. Anyway, what's interesting is that, as we've already established, of/ap is the same as map so this law follows directly from functor identity: map(id) == id.

   Identity.of(id) makes me chuckle at its futility. Anyway, what's interesting is that, as we've already established, of/ap is the same as map so this law follows directly from functor identity: map(id) == id.

    The beauty in using these laws is that, like a militant kindergarten gym coach, they force all of our interfaces to play well together.

## Page 79 Homomorphism
// homomorphism
A.of(f).ap(A.of(x)) == A.of(f(x))

 A homomorphism is just a structure preserving map. In fact, a functor is just a homomorphism between categories as it preserves the original category's structure under the mapping.

 We're really just stuffing our normal functions and values into a container and running the computation in there so it should come as no surprise that we will end up with the same result if we apply the whole thing inside the container (left side of the equation) or apply it outside, then place it in there (right side).
 ```
 A quick example:
 Either.of(_.toUpper).ap(Either.of("oreos")) == Either.of(_.toUpper("oreos"))
```

 ## Page 80 Interchange
 The interchange states that it doesn't matter if we choose to lift our function into the left or right side of ap.

```
 // interchange
v.ap(A.of(x)) == A.of(function(f) { return f(x) }).ap(v)
```

Here is an example:
```
var v = Task.of(_.reverse);
var x = 'Sparklehorse';

v.ap(Task.of(x)) == Task.of(function(f) { return f(x) }).ap(v)
```


## Composition
 And finally composition which is just a way to check that our standard function composition holds when applying inside of containers.
 // composition
A.of(compose).ap(u).ap(v).ap(w) == u.ap(v.ap(w));
```
var u = IO.of(_.toUpper);
var v = IO.of(_.concat("& beyond"));
var w = IO.of("blood bath ");

IO.of(_.compose).ap(u).ap(v).ap(w) == u.ap(v.ap(w))
```
