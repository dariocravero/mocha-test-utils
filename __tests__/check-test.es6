import assert from 'assert';
import check from '../check';
import { spy, stub } from 'sinon';

describe('check', () => {
  it('should call done when the function finished', () => {
    let done = spy();
    let fn = spy();

    check(done, fn);
    assert(fn.calledOnce, 'called fn');
    assert(done.calledOnce, 'called done');
  });

  it('should call done with an exception when the function fails', () => {
    let done = spy();
    let fn = stub().throws('Error');

    check(done, fn);

    assert(fn.calledOnce, 'called fn');
    assert(done.calledOnce, 'called done');
    assert(done.firstCall.args[0] instanceof Error, 'called done with an exception');
  });
});
