// Same as check but it returns a function rather that you can run and that may take arguments.
// Useful in callback checkos!

export default function wcheck(done, fn) {
  return function(...args) {
    try {
      fn.apply(this, args);
      done();
    } catch(exception) {
      done(exception);
    }
  }
}
