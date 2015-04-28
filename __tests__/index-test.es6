import assert from 'assert';
import * as index from '../index';

describe('index', () => {
  it('includes check', () => assert(typeof index.check === 'function'));
  it('includes mockCreator', () => assert(typeof index.mockCreator === 'function'));
  it('includes propertyDescriptor', () => assert(typeof index.propertyDescriptor === 'function'));
  it('includes wcheck', () => assert(typeof index.wcheck === 'function'));
});
