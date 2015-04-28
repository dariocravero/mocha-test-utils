import assert from 'assert';
import propertyDescriptor from '../property-descriptor';

describe('#propertyDescriptor', () => {
  describe('function', () => {
    function Foo() {};
    Object.defineProperty(Foo.prototype, 'bar', {
      get: function() {},
      set: function(baz) {}
    });
    const foo = new Foo();

    it('works with a class', () => {
      let pd = propertyDescriptor(Foo, 'bar');
      assert(typeof pd.get === 'function', 'has get');
      assert(typeof pd.set === 'function', 'has set');
    });

    it('works with an instance a class', () => {
      let pd = propertyDescriptor(foo, 'bar');
      assert(typeof pd.get === 'function', 'has get');
      assert(typeof pd.set === 'function', 'has set');
    });
  });

  describe('ES6 classes', () => {
    class Foo {
      get bar() {}
      set bar(baz) {}
    }
    const foo = new Foo();

    it('works with a class', () => {
      let pd = propertyDescriptor(Foo, 'bar');
      assert(typeof pd.get === 'function', 'has get');
      assert(typeof pd.set === 'function', 'has set');
    });

    it('works with an instance a class', () => {
      let pd = propertyDescriptor(foo, 'bar');
      assert(typeof pd.get === 'function', 'has get');
      assert(typeof pd.set === 'function', 'has set');
    });
  });

  it('works with properties defined in an object', () => {
    let foo = {};
    Object.defineProperty(Object.getPrototypeOf(foo), 'bar', {
      get: function() {},
      set: function(baz) {}
    });

    let pd = propertyDescriptor(foo, 'bar');

    assert(typeof pd.get === 'function', 'has get');
    assert(typeof pd.set === 'function', 'has set');
  });
});
