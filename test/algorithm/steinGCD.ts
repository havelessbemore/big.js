import {assert} from 'chai';
import {steinGCD} from '../../src/algorithm/steinGCD';

function test(A: number[], minA: number, maxA: number, B: number[], minB: number, maxB: number, C: number[], base: number): void {
  [A, minA, maxA] = steinGCD(A, minA, maxA, B, minB, maxB, base);
  assert.deepEqual(A.slice(minA, maxA), C);
}

describe('steinGCD', function(){
  it('should return gcd(1,1) = 1 in base 10', function(){
    test([1], 0, 1, [1], 0, 1, [1], 10);
  });

  it('should return gcd(18, 84) = 6 in base 10', function(){
    test([8,1], 0, 2, [4,8], 0, 2, [6], 10);
  });

  it('should return gcd(48, 18) = 6 in base 10', function(){
    test([8,4], 0, 2, [8,1], 0, 2, [6], 10);
  });

  it('should return gcd(42, 56) = 14 in base 10', function(){
    test([2,4], 0, 2, [6,5], 0, 2, [4,1], 10);
  });

  it('should return gcd(2345, 72) = 1 in base 10', function(){
    test([5,4,3,2], 0, 4, [2,7], 0, 2, [1], 10);
  });

  it('should return gcd(1368, 339) = 3 in base 10', function(){
    test([8,6,3,1], 0, 4, [9,3,3], 0, 3, [3], 10);
  });

  it('should return gcd(1071, 462) = 21 in base 10', function(){
    test([1,7,0,1], 0, 4, [2,6,4], 0, 3, [1,2], 10);
  });

  it('should return gcd(55534, 434334) = 2 in base 10', function(){
    test([4,3,5,5,5], 0, 5, [4,3,3,4,3,4], 0, 6, [2], 10);
  });

  it('should return gcd(1406700, 164115) = 23445 in base 10', function(){
    test([0,0,7,6,0,4,1], 0, 7, [5,1,1,4,6,1], 0, 6, [5,4,4,3,2], 10);

    //Should still return correct value
    test([0,0,0,0,0,7,6,0,4,1], 3, 10, [5,1,1,4,6,1], 0, 6, [5,4,4,3,2], 10);
    test([0,0,7,6,0,4,1], 0, 7, [0,0,5,1,1,4,6,1], 2, 8, [5,4,4,3,2], 10);
    test([0,0,7,6,0,4,1,9,9], 0, 7, [5,1,1,4,6,1], 0, 6, [5,4,4,3,2], 10);
    test([0,0,7,6,0,4,1], 0, 7, [5,1,1,4,6,1,9,9], 0, 6, [5,4,4,3,2], 10);
    test([0,0,0,7,6,0,4,1,9], 1, 8, [0,5,1,1,4,6,1,9], 1, 7, [5,4,4,3,2], 10);
  });

  it('should return gcd(1406700, 164115) = 23445 in base 2', function(){
    test(
      [0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1], 0, 21,
      [1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1], 0, 18,
      [1,0,1,0,1,0,0,1,1,1,0,1,1,0,1], 2
    );
  });

  it('should return gcd(1406700, 164115) = 23445 in base 3', function(){
    test(
      [0,0,0,2,2,1,0,1,1,2,2,1,2], 0, 13,
      [0,0,1,0,1,0,0,0,1,2,2], 0, 11,
      [0,0,1,1,1,0,2,1,0,1], 3
    );
  });

  it('should return gcd(1406700, 164115) = 23445 in base 5', function(){
    test(
      [0,0,3,3,0,0,0,3,3], 0, 9,
      [0,3,4,2,2,2,0,2], 0, 8,
      [0,4,2,2,2,2,1], 5
    );
  });

  it('should return gcd(1406700, 164115) = 23445 in base 16', function(){
    test([12,14,6,7,5,1], 0, 6, [3,1,1,8,2], 0, 5, [5,9,11,5], 16);
  });

  it('should return gcd(1406700, 164115) = 23445 in base 256', function(){
    test([236,118,21], 0, 3, [19,129,2], 0, 3, [149,91], 256);
  });

  it('should return gcd(1406700, 164115) = 23445 in base 373', function(){
    test([117,41,10], 0, 3, [368,66,1], 0, 3, [319,62], 373);
  });

  it('should return gcd(30315475, 24440870) = 31415 in base 10', function(){
    test(
      [5,7,4,5,1,3,0,3], 0, 8,
      [0,7,8,0,4,4,4,2], 0, 8,
      [5,1,4,1,3], 10
    );
  });

  it('should return gcd(37279462087332, 366983722766) = 564958 in base 10', function(){
    test(
      [2,3,3,7,8,0,2,6,4,9,7,2,7,3], 0, 14,
      [6,6,7,2,2,7,3,8,9,6,6,3], 0, 12,
      [8,5,9,4,6,5], 10
    );
  });

  it('should return gcd(4323874085395, 586898689868986900219865) = 85 in base 10', function(){
    test(
      [5,9,3,5,8,0,4,7,8,3,2,3,4], 0, 13,
      [5,6,8,9,1,2,0,0,9,6,8,9,8,6,8,9,8,6,8,9,8,6,8,5], 0, 24,
      [5,8], 10
    );
  });

  it('should return gcd(978, 89798763754892653453379597352537489494736) = 6 in base 10', function(){
    test(
      [8,7,9], 0, 3,
      [
        6,3,7,4,9,4,9,8,4,7,3,5,2,5,3,7,9,5,9,7,
        3,3,5,4,3,5,6,2,9,8,4,5,7,3,6,7,8,9,7,9,8
      ], 0, 41,
      [6], 10
    );
  });

  it('should return gcd(1221, 1234567891011121314151617181920212223242526272829) = 3 in base 10', function(){
    test(
      [1,2,2,1], 0, 4,
      [
        9,2,8,2,7,2,6,2,5,2,4,2,3,2,2,2,1,2,0,2,
        9,1,8,1,7,1,6,1,5,1,4,1,3,1,2,1,1,1,0,1,
        9,8,7,6,5,4,3,2,1
      ], 0, 49,
      [3], 10
    );
  });
});
