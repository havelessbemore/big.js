import {assert} from 'chai';
import BasicHalfMethod from '../../src/div/basicHalfMethod';

function test(A: number[], B: number[], C: number, base: number, isNegative: boolean = false): void {
  let remainder: number;
  [A.length, remainder] = BasicHalfMethod(A, 0, A.length, base, isNegative);
  assert.equal(C, remainder);
  assert.equal(A.length, B.length);
  assert.deepEqual(A, B);
}

describe('BasicHalfMethod', function(){

  it('should return 0/2 in base 10',
    () => test([0], [], 0, 10)
  );

  it('should return -0/2 in base 10',
    () => test([0], [], 0, 10, true)
  );

  it('should return 1/2 in base 10',
    () => test([1], [], 1, 10)
  );

  it('should return -1/2 in base 10',
    () => test([1], [1], 1, 10, true)
  );

  it('should return 2/2 in base 10',
    () => test([2], [1], 0, 10)
  );

  it('should return -2/2 in base 10',
    () => test([2], [1], 0, 10, true)
  );

  it('should return 99/2 in base 10',
    () => test([99], [49], 1, 10)
  );

  it('should return -99/2 in base 10',
    () => test([99], [50], 1, 10, true)
  );

  it('should return 123/2 in base 10',
    () => test([3,2,1], [1,6], 1, 10)
  );

  it('should return -123/2 in base 10',
    () => test([3,2,1], [2,6], 1, 10, true)
  );

  it('should return 13579/2 in base 2',
    () => test([1,1,0,1,0,0,0,0,1,0,1,0,1,1], [1,0,1,0,0,0,0,1,0,1,0,1,1], 1, 2)
  );

  it('should return -13579/2 in base 2',
    () => test([1,1,0,1,0,0,0,0,1,0,1,0,1,1], [0,1,1,0,0,0,0,1,0,1,0,1,1], 1, 2, true)
  );

  it('should return 13579/2 in base 3',
    () => test([1,2,2,1,2,1,0,0,2], [0,1,1,2,2,0,0,0,1], 1, 3)
  );

  it('should return -13579/2 in base 3',
    () => test([1,2,2,1,2,1,0,0,2], [1,1,1,2,2,0,0,0,1], 1, 3, true)
  );

  it('should return 13579/2 in base 10',
    () => test([9,7,5,3,1], [9,8,7,6], 1, 10)
  );

  it('should return -13579/2 in base 10',
    () => test([9,7,5,3,1], [0,9,7,6], 1, 10, true)
  );

  it('should return 13579/2 in base 11',
    () => test([5,2,2,10], [2,1,1,5], 1, 11)
  );

  it('should return -13579/2 in base 11',
    () => test([5,2,2,10], [3,1,1,5], 1, 11, true)
  );

  it('should return 321/2 in base 179',
    () => test([142, 1], [160], 1, 179)
  );

  it('should return 987654/2 in base 179',
    () => test([111, 147, 30], [145, 73, 15], 0, 179)
  );

  it('should return 854,839,610,118,336,687,659,177 / 2 in base 94906265',
    () => test([94906264, 94906263, 94906264], [94906264, 47453131, 47453132], 1, 94906265)
  );
});
