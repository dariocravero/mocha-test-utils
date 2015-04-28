# mocha-test-utils

A bunch of helpers to aid mocha testing.

## check

Use it together with `done` to simplify error assertion on asynchronous tests.

```js
it('tests something asynchronous', (done) => {
  check(done, function() {
    // asynchronous stuff...
  });
});
```

## propertyDescriptor

Use it to get the propertyDescriptor for specific property on an object.
Uses [getOwnPropertyDescriptor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor).

```js
class Foo {
  get property() {}
}

it(`tests a property getter`, () => {
  let pd = propertyDescriptor(Foo, 'property');
  assert(typefo pd.get === 'function', 'has a getter');
});
```

## wcheck

Use it together with `done` to simplify error assertion on asynchronous tests.
It's the same as check but it returns a wrapped function instead. Useful for callbacks.

```js
it('tests something asynchronous', (done) => {
  someCallback(wcheck(done, (arg1) => {
    // asynchronous stuff...
  }));
});
```



MIT license.
