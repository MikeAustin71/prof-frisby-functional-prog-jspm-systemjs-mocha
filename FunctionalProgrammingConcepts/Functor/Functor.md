# Functor
A Functor is a type that implements ```map``` and obeys some laws.

In essence, a functor is nothing more than a type that implements a mapping function with the purpose of lifting values into a container. Hence, a functor F defines a mapping function as follows:

```F.prototype.map = function(f){   return F.of(f(this.val)) }```

## Functor Theory
As mentioned before, functors come from category theory and satisfy a few laws. Let's first explore these useful properties.
 // identity
map(id) === id;

// composition
compose(map(f), map(g)) === map(compose(f, g));

 The identity law is simple, but important. These laws are runnable bits of code so we can try them on our own functors to validate their legitimacy.

 ## A pointed functor is a functor with an 'of' method
