import {assert} from 'chai';
import {addition} from '../../src/algorithm/addition';

function test(A: number[], B: number[], C: number[], base: number): void {
  const D: number[] = B.slice();
  const len: number = A.length = addition(A, 0, A.length, B, 0, B.length, base);
  assert.equal(B.length, D.length);
  assert.deepEqual(B, D);
  assert.equal(len, C.length);
  assert.deepEqual(A, C);
}

describe('addition', function(){

  it('should return 0+0 in base 10', function(){
    test([0], [0], [0], 10);
  });

  it('should return 1+1 in base 10', function(){
    test([1], [1], [2], 10);
  });

  it('should return 5+5 in base 10', function(){
    test([5], [5], [0,1], 10);
  });

  it('should return 1+9 in base 10', function(){
    test([1], [9], [0,1], 10);
  });

  it('should return 9+1 in base 10', function(){
    test([9], [1], [0,1], 10);
  });

  it('should return 456789+123 in base 10', function(){
    test([9,8,7,6,5,4], [3,2,1], [2,1,9,6,5,4], 10);
  });

  it('should return 456789+123 in base 2', function(){
    test(
      [1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1],
      [1,1,0,1,1,1,1],
      [0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1], 2
    );
  });

  it('should return 9,870,006,540,003,210+123,000,456,000,789 in base 10', function(){
    test(
      [0,1,2,3,0,0,0,4,5,6,0,0,0,7,8,9],
      [9,8,7,0,0,0,6,5,4,0,0,0,3,2,1],
      [9,9,9,3,0,0,6,9,9,6,0,0,3,9,9,9], 10
    );
  });

  it('should return 1,524,155,677,489+1,524,155,677,489 in base 10', function(){
    test(
      [9,8,4,7,7,6,5,5,1,4,2,5,1],
      [9,8,4,7,7,6,5,5,1,4,2,5,1],
      [8,7,9,4,5,3,1,1,3,8,4,0,3], 10
    );
  });

  it('should return 9,999,999+1 in base 10', function(){
    test(
      [9,9,9,9,9,9,9],
      [1],
      [0,0,0,0,0,0,0,1], 10
    );
  });

  it('should return 109,999,999+1 in base 10', function(){
    test(
      [9,9,9,9,9,9,9,0,1],
      [1],
      [0,0,0,0,0,0,0,1,1], 10
    );
  });
});
