import * as chai from 'chai';
//import * as sinon from 'sinon';
import BigMint from '../src/bigMint';

function testState(n: BigMint, isNegative: boolean, digits: number[], precision: number): void {
  chai.expect(n['isNegative']).to.equal(isNegative);
  chai.expect(n['digits']).to.deep.equal(digits);
  chai.expect(n['precision']).to.equal(precision);
}

describe('BigMint', function(){

  describe('BigMint.MINUS_ONE', function(){
    it('should return new BigMint(-1)', function(){
      const n: BigMint = BigMint.MINUS_ONE;
      chai.expect(n).to.be.not.null;
      testState(n, true, [1], 1);
    });
  });

  describe('BigMint.ZERO', function(){
    it('should return new BigMint(0)', function(){
      const n: BigMint = BigMint.ZERO;
      chai.expect(n).to.be.not.null;
      testState(n, false, [], 0);
    });
  });

  describe('BigMint.ONE', function(){
    it('should return new BigMint(1)', function(){
      const n: BigMint = BigMint.ONE;
      chai.expect(n).to.be.not.null;
      testState(n, false, [1], 1);
    });
  });

  describe('BigMint.isBigMint', function(){
    it('should return true when input is instance of class', function(){
      const n: BigMint = new BigMint(0);
      chai.expect(BigMint.isBigMint(n)).to.equal(true);
    });

    it('should return false when input is not instance of class', function(){
      const inputs: any[] = [
        null, undefined, 0, 1, [], [1,2,3], {}, {foo: 'bar'}, false, true, function(){}
      ];
      for(const input of inputs){
        chai.expect(BigMint.isBigMint(input)).to.equal(false);
      }
    });
  });

  describe('BigMint.toBigMint', function(){
    it('should cast a valid input to class', function(){
      const n: BigMint = BigMint.toBigMint(0);
      chai.expect(n.constructor.name).to.equal('BigMint');
    });

    it('should return input if input is already class', function(){
      const n: BigMint = new BigMint(0);
      const m: BigMint = BigMint.toBigMint(n);
      chai.expect(n).to.equal(m);
    });
  });

  describe('abs', function(){
    it('should return the absolute value of the number', function(){
      for(const v of [-1, -12, 0, 1, 12]){
        const n: BigMint = new BigMint(v).abs();
        chai.expect(n['isNegative']).to.equal(false);
      }
    })
  });

  describe('double', function(){
    it('should return self if zero', function(){
      const n: BigMint = new BigMint(0).double();
      testState(n, false, [], 0);
    });

    it('should double number', function(){
      let s: number[] = [1, 2, 25, 123];
      let d: number[] = [2, 4, 50, 246];
      for(let i: number = 0, n: number = s.length; i < n; ++i){
        const n: BigMint = new BigMint(s[i]).double();
        testState(n, false, [d[i]], 1);
      }
    });
  });

  describe('half', function(){
    it('should return self remainder zero if number is zero', function(){
      let r: BigMint;
      let n: BigMint = new BigMint(0);
      [n, r] = n.half();
      testState(n, false, [], 0);
      testState(r, false, [], 0);
    });

    it('should return self remainder zero if number is even', function(){
      let r: BigMint;
      let n: BigMint = new BigMint(12).setBase(10);
      [n, r] = n.half();
      testState(n, false, [6], 1);
      testState(r, false, [], 0);
    });

    it('should return self remainder one if number is odd', function(){
      let r: BigMint;
      let n: BigMint = new BigMint(15).setBase(10);
      [n, r] = n.half();
      testState(n, false, [7], 1);
      testState(r, false, [1], 1);
    });
  });

  describe('isEven', function(){
    it('should return true for zero', function(){
      const n: BigMint = new BigMint(0);
      chai.expect(n.isEven()).to.equal(true);
    });

    it('should return true if given even number in even base', function(){
      const n: BigMint = new BigMint(12345678);
      for(let base of [2, 8, 10, 16, 124]){
        chai.expect(n.setBase(base).isEven()).to.equal(true);
      }
    });

    it('should return false if given odd number in even base', function(){
      const n: BigMint = new BigMint(123456789);
      for(let base of [2, 8, 10, 16, 124]){
        chai.expect(n.setBase(base).isEven()).to.equal(false);
      }
    });

    it('should return true if given even number in odd base', function(){
      const n: BigMint = new BigMint(12345678);
      for(let base of [3, 7, 11, 15, 123]){
        chai.expect(n.setBase(base).isEven()).to.equal(true);
      }
    });

    it('should return false if given odd number in odd base', function(){
      const n: BigMint = new BigMint(123456789);
      for(let base of [3, 7, 11, 15, 123]){
        chai.expect(n.setBase(base).isEven()).to.equal(false);
      }
    });
  });

  describe('isOdd', function(){
    it('should return false for zero', function(){
      const n: BigMint = new BigMint(0);
      chai.expect(n.isOdd()).to.equal(false);
    });

    it('should return false if given even number in even base', function(){
      const n: BigMint = new BigMint(12345678);
      for(let base of [2, 8, 10, 16, 124]){
        chai.expect(n.setBase(base).isOdd()).to.equal(false);
      }
    });

    it('should return true if given odd number in even base', function(){
      const n: BigMint = new BigMint(123456789);
      for(let base of [2, 8, 10, 16, 124]){
        chai.expect(n.setBase(base).isOdd()).to.equal(true);
      }
    });

    it('should return false if given even number in odd base', function(){
      const n: BigMint = new BigMint(12345678);
      for(let base of [3, 7, 11, 15, 123]){
        chai.expect(n.setBase(base).isOdd()).to.equal(false);
      }
    });

    it('should return true if given odd number in odd base', function(){
      const n: BigMint = new BigMint(123456789);
      for(let base of [3, 7, 11, 15, 123]){
        chai.expect(n.setBase(base).isOdd()).to.equal(true);
      }
    });
  });

  describe('negate', function(){
    it('should ensure -0 === 0', function(){
      const n: BigMint = new BigMint(0).negate();
      testState(n, false, [], 0);
    });

    it('should switch a positive number to negative', function(){
      const n: BigMint = new BigMint(1).negate();
      testState(n, true, [1], 1);
    });

    it('should switch a negative number to positive', function(){
      const n: BigMint = new BigMint(-1).negate();
      testState(n, false, [1], 1);
    });
  });

  describe('signum', function(){
    it('should return one if number is positive', function(){
      const n: BigMint = new BigMint(12);
      chai.expect(n.signum()).to.equal(1);
    });

    it('should return zero if number is zero', function(){
      const n: BigMint = new BigMint(0);
      chai.expect(n.signum()).to.equal(0);
    });

    it('should return negative one if number is negative', function(){
      const n: BigMint = new BigMint(-12);
      chai.expect(n.signum()).to.equal(-1);
    });
  });

  describe('square', function(){
    it('should return itself if zero', function(){
      const n: BigMint = new BigMint(0);
      n.square();
      testState(n, false, [], 0);
    });

    it('should return itself if one', function(){
      const n: BigMint = new BigMint(1);
      n.square();
      testState(n, false, [1], 1);
    });

    it('should return itself if negative one', function(){
      const n: BigMint = new BigMint(-1);
      n.square();
      testState(n, false, [1], 1);
    });

    it('should square normally', function(){
      const n: BigMint = new BigMint(5).setBase(10);
      n.square();
      testState(n, false, [5, 2], 2);
    });
  })

  describe('subtract', function(){
    it('should return zero when passed itself', function(){
      const n: BigMint = new BigMint(5);
      n.subtract(n);
      testState(n, false, [], 0);
    });

    it('should return number if passed zero', function(){
      const a: BigMint = new BigMint(5);
      const b: BigMint = new BigMint(0);
      a.subtract(b);
      testState(a, false, [5], 1);
    });

    it('should return negative input when subtracting from zero', function(){
      let a: BigMint = new BigMint(0);
      let b: BigMint = new BigMint(5);
      a.subtract(b);
      testState(a, true, [5], 1);

      a = new BigMint(0);
      a.subtract(b.negate());
      testState(a, false, [5], 1);
    });

    it('should "add" numbers if signs differ', function(){
      let a: BigMint = new BigMint(4);
      let b: BigMint = new BigMint(-5);
      a.subtract(b);
      testState(a, false, [9], 1);

      a = new BigMint(-4);
      a.subtract(b.negate());
      testState(a, true, [9], 1);
    });

    it('should return zero when subtracting the same value', function(){
      let a: BigMint = new BigMint(5);
      let b: BigMint = new BigMint(5);
      a.subtract(b);
      testState(a, false, [], 0);
    });

    it('should normalize bases if needed', function(){
      let a: BigMint = new BigMint(5);
      let b: BigMint = new BigMint(5).setBase(2);
      a.subtract(b);
      testState(a, false, [], 0);
    });

    it('should subtract normally when minuend > subtrahend', function(){
      let a: BigMint = new BigMint(9);
      let b: BigMint = new BigMint(4);
      a.subtract(b);
      testState(a, false, [5], 1);
      //TODO: Check if normal subtraction called
    });

    it('should reverse subtract when minuend < subtrahend', function(){
      let a: BigMint = new BigMint(4);
      let b: BigMint = new BigMint(9);
      a.subtract(b);
      testState(a, true, [5], 1);
      //TODO: Check if reverse subtraction called
    });
  });
});