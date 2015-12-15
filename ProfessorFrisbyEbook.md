# Professor Frisby's Mostly Adequate Guide to Functional Programming
[Professor Firsby's Free E-book](https://drboolean.gitbooks.io/mostly-adequate-guide//?__s=ehycp62un87de5g78chs)

# maps law
// map's composition law
```
var law = compose(map(f), map(g)) == map(compose(f, g));
```

# Functor
A Functor is a type that implements ```map``` and obeys some laws.
