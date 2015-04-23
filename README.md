# mocha-test-utils

A bunch of helpers to aid mocha testing.

## check

Use it together with `done` to simplify error assertion on asynchronous tests.

```
it('tests something asynchronous', function(done) {
  check(done, function() {
    // asynchronous stuff...
  })
})
```

## wcheck

Use it together with `done` to simplify error assertion on asynchronous tests.
It's the same as check but it returns a wrapped function instead. Useful for callbacks.

```
it('tests something asynchronous', function(done) {
  someCallback(wcheck(done, function(arg1) {
    // asynchronous stuff...
  }))
})
```



MIT license.
