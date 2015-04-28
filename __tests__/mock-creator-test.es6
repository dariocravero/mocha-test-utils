import assert from 'assert';
import mockCreator from '../mock-creator';

const BAR = 'BAR';
const BAZ = 'BAZ';
const FOO = 'FOO';
const MODULES = {
  Bar() { return BAR; },
  Baz() { return BAZ; },
  Foo() { return FOO; }
};

describe('#mockCreator', () => {
  let mocker;
  beforeEach(() => mocker = mockCreator(MODULES));

  it('creates a "mocker" function', () => typeof mocker === 'function');
  it('selectively returns mocked modules through the "mocker" function', () => {
    let mock = mocker('Foo');
    assert(mock.Foo === FOO);
    assert(typeof mock.Bar === 'undefined');
  });

  it('mocks many modules at once too', () => {
    let mock = mocker('Foo', 'Bar');
    assert(mock.Foo === FOO);
    assert(mock.Bar === BAR);
  });
});
