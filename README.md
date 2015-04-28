# mocha-test-utils

A bunch of helpers to aid mocha testing.

[![Build Status](https://travis-ci.org/dariocravero/mocha-test-utils.svg?branch=master)](https://travis-ci.org/dariocravero/mocha-test-utils)

## check

Use it together with `done` to simplify error assertion on asynchronous tests.

```js
it('tests something asynchronous', (done) => {
  check(done, function() {
    // asynchronous stuff...
  });
});
```

## mockCreator

Use it to create a module mocker. Handy used with Marty to mock all aspects of a module but one or
two things.

```js
// __mocks__/index.js
import ActionCreators from './action-creators';
import Constants from './constants';
import Container from './container';
import Component from './component';
import Store from './store';

export default mockCreator({
  ActionCreators,
  Constants,
  Container,
  Component,
  Store
});

// __tests__/store-test.js
import mockCreator from '../__mocks__';

const mock = mockCreator('actionCreators', 'component');

// Do stuff with:
mock.actionCreators;
mock.component;
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
