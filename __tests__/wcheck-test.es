import assert from 'assert'
import wcheck from '../wcheck'
import { spy, stub } from 'sinon'

describe('wcheck', () => {
  it('should return a function', () => assert(typeof wcheck() === 'function'))

  it(`shouldn't call done nor the function when first invoked`, () => {
    let done = spy()
    let fn = spy()
    wcheck(done, fn)

    assert(fn.notCalled, `didn't call fn`)
    assert(done.notCalled, `didn't call done`)
  })

  describe('when the wrapping function is called', () => {
    it('should call done and its internal function finished', () => {
      let done = spy()
      let fn = spy()
      let check = wcheck(done, fn)

      check()
      assert(fn.calledOnce, 'called fn')
      assert(done.calledOnce, 'called done')
    })

    it('should call done with an exception when the function fails', () => {
      let done = spy()
      let fn = stub().throws('Error')
      let check = wcheck(done, fn)

      check()
      assert(fn.calledOnce, 'called fn')
      assert(done.calledOnce, 'called done')
      assert(done.firstCall.args[0] instanceof Error, 'called done with an exception')
    })
  })
})
