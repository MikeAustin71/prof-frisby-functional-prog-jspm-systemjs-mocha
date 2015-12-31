# Object.freeze()
The Object.freeze() method freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed. In essence the object is made effectively immutable. The method returns the object being frozen.

* Object.freeze(obj)
* obj = the object to freeze

Nothing can be added to or removed from the properties set of a frozen object. Any attempt to do so will fail, either silently or by throwing a TypeError exception (most commonly, but not exclusively, when in strict mode).

Values cannot be changed for data properties. Accessor properties (getters and setters) work the same (and still give the illusion that you are changing the value). Note that values that are objects can still be modified, unless they are also frozen.

~~~
var obj = {
  prop: function() {},
  foo: 'bar'
};

// New properties may be added, existing properties may be changed or removed
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// Both the object being passed as well as the returned object will be frozen.
// It is unecessary to save the returned object in order to freeze the original.
var o = Object.freeze(obj);

assert(Object.isFrozen(obj) === true);

~~~
