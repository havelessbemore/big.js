import {assert} from 'chai';
import * as sinon from 'sinon';
import rewire = require('rewire');
import {Integer} from '../../src/integer';
import {toInteger} from '../../src/util/intUtils';
import {copy} from '../../src/functional/copy';
const rewired = rewire<CopyFunc>('../../src/functional/copy');

interface CopyFunc {
  copy: (A: Integer, B: Integer) => Integer;
}

describe('copy', () => {
  it('should copy source property values with target', () => {
    const source: Integer = toInteger([1,2,3,4,5], 5, true, 125);
    const target: Integer = toInteger([6,7,8], 3, false, 10);
    const actual: Integer = copy(target, source);
    assert.equal(actual, target);
    assert.deepEqual(actual, source);
    assert.notEqual(actual.digits, source.digits);
  });

  it('should use copy() correctly', () => {
    const target: Integer = toInteger([1,2,3], 3, true, 10);
    const source: Integer = toInteger([1,2,3,4,5], 5, true, 125);

    //Create mock
    const intUtil1 = rewired.__get__('intUtils_1');
    const mock: sinon.SinonMock = sinon.mock(intUtil1);
    mock.expects("copy").once().withExactArgs(target, source);

    //Rewire and run method
    rewired.__with__({
      'intUtils_1.copy': intUtil1.copy
    })(() => rewired.copy(target, source));

    //Verify method
    mock.verify();
  });
});
