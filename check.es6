// Use it together with `done` to simplify error assertion on asynchronous tests.
//
// Based on http://stackoverflow.com/a/15208067/1562732

export default function check(done, fn) {
  try {
    fn();
    done();
  } catch(exception) {
    done(exception);
  }
}
