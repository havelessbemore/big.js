import {addition} from './adapter/addition';
import {decrement} from './adapter/decrement';
import {increment} from './adapter/increment';
import {reverseAddition} from './adapter/reverseAddition';
import {double} from './algorithm/double';
import {halve} from './algorithm/halve';
import {subtraction} from './algorithm/subtraction';
import {reverseSubtraction} from './algorithm/reverseSubtraction';
import {karatsubaSquare} from './algorithm/karatsubaSquare';
import {karatsubaMultiplication} from './algorithm/karatsubaMultiplication';
import {basicDivision} from './algorithm/basicDivision';
import {singleDigitDivision} from './algorithm/singleDigitDivision';
import {singleDigitMultiplication} from './algorithm/singleDigitMultiplication';
import {CIPHER, compare} from './util/numUtils';

export default class BigMint {

  ////////////////////////
  // CONSTANTS
  ////////////////////////

  public static readonly MIN_BASE: number = 2;
  public static readonly MAX_BASE: number = 94906265; //2^26 < sqrt(Number.MAX_SAFE_INTEGER) < 2^27
  private static readonly DEFAULT_BASE: number = 94906264;
  //private static readonly MAX_DIGITS: number = 4294967295; //2^32 - 1

  ////////////////////////
  // PROPERTIES
  ///////////////////////

  public base: number;
  public digits: number[];
  public precision: number;
  public isNegative: boolean;

  ////////////////////////
  // CONSTRUCTOR
  ////////////////////////
  public static get MINUS_ONE(): BigMint {return new BigMint(-1)};
  public static get ZERO(): BigMint {return new BigMint(0)};
  public static get ONE(): BigMint {return new BigMint(1)};

  constructor(input: BigMint | number | string) {
    if(BigMint.isBigMint(input)){
      this._assign(input);
    } else if(typeof input === "number"){
      this.convertString('' + input);
    } else if(typeof input === "string"){
      this.convertString(input);
    } else {
      throw TypeError("Expecting type BigMint | string | number");
    }
  }

  public static isBigMint(n: any): n is BigMint {
    return n instanceof BigMint;
  }

  public static toBigMint(input: BigMint | number | string): BigMint {
    return BigMint.isBigMint(input) ? input : new BigMint(input);
  }

  private convertString(s: String): void {
    s = s.trim();

    //Check if string is a number
    if(Number.isNaN(<any>s)){
      throw TypeError("NaN");
    }

    //Check for leading sign
    this.isNegative = s[0] === '-';

    //Trim signs, leading zeros and decimal part
    s = s.replace(/^[-+]?0+|\.[0-9]+$/gm, '');

    //Convert to decimal array
    this.base = 10;
    this.precision = s.length;
    const digits: number[] = this.digits = new Array<number>(this.precision);
    for(let i = 0, j = this.precision; j > 0; digits[i++] = 0 | <any>s[--j]){
    }

    //Convert to default base
    this.toBase(BigMint.DEFAULT_BASE);
  }

  ////////////////////////
  // UPDATE
  ////////////////////////

  public clone(): BigMint {
    return new BigMint(this);
  }

  public assign(source: BigMint | number | string, keepBase: boolean = false): BigMint {
    return this._assign(BigMint.toBigMint(source), keepBase);
  }

  private _assign(source: BigMint, keepBase: boolean = false): BigMint {
    const originalBase: number = this.base;
    const target: BigMint = this.copy(source);
    target.digits = target.digits.slice(0);
    if(keepBase && target.base !== originalBase){
      target.toBase(originalBase);
    }
    return target;
  }

  private copy(source: BigMint): BigMint {
    this.isNegative = source.isNegative;
    this.digits = source.digits;
    this.precision = source.precision;
    this.base = source.base;
    return this;
  }

  private toZero(): BigMint {
    this.isNegative = false;
    this.digits = [];
    this.precision = 0;
    return this;
  }

  private toOne(): BigMint {
    this.isNegative = false;
    this.digits = [1];
    this.precision = 1;
    return this;
  }

  ////////////////////////
  // BASE
  ////////////////////////

  public getBase(): number {
    return this.base;
  }

  public setBase(base: number): BigMint {

    //Sanitize base
    base = 0 | base;

    //Check if already in base
    if(this.base === base){
      return this;
    }

    //Check if new base too low
    if(base < BigMint.MIN_BASE){
      throw RangeError(base + " < BigMint.MIN_BASE (" + BigMint.MIN_BASE + ")");
    }

    //Check if new base too high
    if(base > BigMint.MAX_BASE){
      throw RangeError(base + " > BigMint.MAX_BASE (" + BigMint.MAX_BASE + ")");
    }

    //Convert to base
    return this.toBase(base);
  }

  private toBase(newBase: number): BigMint {
    const curInteger: number[] = this.digits;
    const curBase: number = this.base;
    const curDigits: number = this.precision;
    const newInteger: number[] = new Array(Math.ceil(
      curDigits * Math.log(curBase) / Math.log(newBase)
    ));

    //Update number
    let newDigits: number = 0;
    for(let len = curDigits; len > 0; ++newDigits){
      let remainder: number = 0;
      for(let i: number = len; i-- > 0; remainder = remainder % newBase){
        remainder = remainder*curBase + curInteger[i];
        curInteger[i] = (remainder < newBase) ? 0 : 0 | (remainder / newBase);
      }
      for(newInteger[newDigits] = remainder; len > 0 && curInteger[len - 1] < 1; --len){
      }
    }

    newInteger.length = newDigits;
    this.base = newBase;
    this.precision = newDigits;
    this.digits = newInteger;
    return this;
  }

  ////////////////////////
  // TO STRING
  ////////////////////////

  public toString(base: number = this.base, cipher: string[] | ((v: number, i: number, n: number) => string) = CIPHER, sep: string = ""): string {

    //Set base
    if(this.base !== base){
      return this.setBase(base).toString(base, cipher, sep);
    }

    //Check cipher
    if(cipher === null || cipher instanceof Array && base > cipher.length){
      const pad: string = new Array(("" + (base-1)).length + 1).join('0');
      cipher = (v: number, i: number, n: number): string => {
        const s: string = "" + v;
        return i+1 === n ? s : pad.substring(s.length) + s;
      };
    }

    //Check if zero
    if(this.precision === 0){
      return (cipher instanceof Array) ? cipher[0] : cipher(0, 0, 0);
    }

    let s: string;
    const A: number[] = this.digits;

    //Print with cipher
    if(cipher instanceof Array){
      s = cipher[A[0]];
      for(let i: number = 1, j: number = this.precision; i < j; s = cipher[A[i++]] + sep + s){
      }

    //Print with custom function
    } else {
      s = cipher(A[0], 0, this.precision);
      for(let i: number = 1, j: number = this.precision; i < j; ++i){
        s = cipher(A[i], i, j) + sep + s;
      }
    }

    //If negative
    if(this.isNegative){
      s = "-" + s;
    }

    //Return string
    return s;
  }

  ////////////////////////
  // COMPARE
  ////////////////////////

  public lt(n: BigMint | number | string): boolean {
    return this.compareTo(n) < 0;
  }

  public lessThan(n: BigMint | number | string): boolean {
    return this.lt(n);
  }

  public lteq(n: BigMint | number | string): boolean {
    return this.compareTo(n) <= 0;
  }

  public lessThanEquals(n: BigMint | number | string): boolean {
    return this.lteq(n);
  }

  public eq(n: BigMint | number | string): boolean {
    return this.compareTo(n) === 0;
  }

  public equals(n: BigMint | number | string): boolean {
    return this.eq(n);
  }

  public gteq(n: BigMint | number | string): boolean {
    return this.compareTo(n) >= 0;
  }

  public greaterThanEquals(n: BigMint | number | string): boolean {
    return this.gteq(n);
  }

  public gt(n: BigMint | number | string): boolean {
    return this.compareTo(n) > 0;
  }

  public greaterThan(n: BigMint | number | string): boolean {
    return this.gt(n);
  }

  public static min(a: BigMint | number | string, b: BigMint | number | string): BigMint {
    const c: BigMint = BigMint.toBigMint(a);
    const d: BigMint = BigMint.toBigMint(b);
    return (c.compareTo(d) > 0) ? c : d;
  }

  public static max(a: BigMint | number | string, b: BigMint | number | string): BigMint {
    const c: BigMint = BigMint.toBigMint(a);
    const d: BigMint = BigMint.toBigMint(b);
    return (c.compareTo(d) < 0) ? d : c;
  }

  public compareTo(n: BigMint | number | string): number {
    let a: BigMint = this;
    let b: BigMint = BigMint.toBigMint(n);

    //If self
    if(a === b){
      return 0;
    }

    //Check if signs are different
    if (a.isNegative !== b.isNegative){
      return (a.isNegative) ? -1 : 1;
    }

    //Check if basic numbers
    if(a.precision < 2 && b.precision < 2){

      //Compare digits
      if(a.precision !== b.precision){
        return (a.precision < b.precision) ? -1 : 1;
      }

      //Check if same number
      if(a.precision === 0 || a.digits[0] === b.digits[0]){
        return 0;
      }

      //Compare numbers
      return (a.digits[0] < b.digits[0]) ? -1 : 1;
    }

    //If same base
    if(a.base === b.base){
      return compare(a.digits, 0, a.precision, b.digits, 0, b.precision);
    }

    // Assume a < b
    let out: number = -1;

    //Force a to represent smaller base
    if(a.base > b.base){
      const c: BigMint = a;
      a = b;
      b = c;
      out = 1;
    }

    //Estimate number of digits of A if converted to B's base
    const ratio: number = Math.log(a.base) / Math.log(b.base);
    if(b.precision < Math.ceil(a.precision * ratio)){
      return -out;
    }
    if(b.precision > Math.ceil((a.precision + 1) * ratio)){
      return out;
    }

    //Convert A to B's base and compare numbers
    a = a.clone().toBase(b.base);
    return out * compare(a.digits, 0, a.precision, b.digits, 0, b.precision);
  }

  ////////////////////////
  // BITWISE
  ////////////////////////

  //public not(): BigMint {
  //  return this.add(BigMint.ONE).negate();
  //}

  //TODO
  //public and(B: BigMint | number | string): BigMint {
  //  throw Error("D");
  //}

  //public andNot(B: BigMint | number | string): BigMint {
  //  return this.and(this.tryClone(B).not());
  //}

  //TODO
  //public or(B: BigMint | number | string): BigMint {
  //  throw Error("D");
  //}

  //TODO
  //public xor(B: BigMint | number | string): BigMint {
  //  throw Error("D");
  //}

  public abs(): BigMint {
    this.isNegative = false;
    return this;
  };

  public add(n: BigMint | number | string): BigMint {
    const adduend: BigMint = this;

    //If self
    if(adduend === n){
      return adduend.double();
    }

    //Convert to class iff necessary
    let addend: BigMint = BigMint.toBigMint(n);

    //If addend is zero
    if(addend.precision === 0){
      return adduend;
    }

    //If adduend is zero
    if(adduend.precision === 0){

      //Copy addend and return to original base
      return adduend._assign(addend, true);
    }

    //Normalize bases
    if (adduend.base !== addend.base){
      addend = (n === addend) ? addend.clone() : addend;
      addend.toBase(adduend.base);
    }

    //If signs differ
    if (adduend.isNegative !== addend.isNegative){

      //Change sign, subtract, change sign again
      return adduend.negate().subtract(addend).negate();
    }

    //Make room for addition
    adduend.digits.length = (adduend.precision < addend.precision) ? addend.precision + 1 : adduend.precision + 1;

    //Add
    if(adduend.precision < addend.precision){
      reverseAddition(adduend, addend);
    } else {
      addition(adduend, addend);
    }
    adduend.digits.length = adduend.precision;

    return adduend;
  }

  public divide(divisor: BigMint | number | string): BigMint {
    return this.divideAndRemainder(divisor)[0];
  }

  public divideAndRemainder(n: BigMint | number | string): [BigMint, BigMint] {
    const dividend: BigMint = this;
    let divisor: BigMint = BigMint.toBigMint(n);

    //If divisor is zero
    if(divisor.precision === 0){
      throw EvalError("Divide by Zero");
    }

    //If self
    if(dividend === divisor){
      return [dividend.toOne(), BigMint.ZERO];
    }

    //If dividend is zero
    if(dividend.precision === 0){
      return [dividend, BigMint.ZERO];
    }

    //Divide signs
    dividend.isNegative = dividend.isNegative !== divisor.isNegative;

    //If divisor is one or two
    if(divisor.precision === 1 && divisor.digits[0] < 3){
      return (divisor.digits[0] === 1) ? [dividend, BigMint.ZERO] : dividend.half();
    }

    //If different bases
    if(dividend.base !== divisor.base){

      //Estimate the least number of digits of the divisor if converted to the dividend's base
      //If the dividend is smaller than the divisor the quotient will be zero (less than 1)
      const ratio: number = Math.log(divisor.base) / Math.log(dividend.base);
      if(dividend.precision < Math.ceil(divisor.precision *  ratio)){
        const remainder: BigMint = BigMint.ZERO.copy(dividend);
        return [dividend.toZero(), remainder];
      }

      //Normalize bases
      divisor = (n === divisor) ? divisor.clone() : divisor;
      divisor.toBase(dividend.base);
    }

    //Check if the dividend has less digits than the divisor
    if(dividend.precision < divisor.precision){
      const remainder: BigMint = BigMint.ZERO.copy(dividend);
      return [dividend.toZero(), remainder];
    }

    const remainder: BigMint = BigMint.ZERO;

    [
      dividend.digits, remainder.digits,
      dividend.precision, remainder.precision
    ] = (divisor.precision < 2) ?
      singleDigitDivision(
        dividend.digits, 0, dividend.precision,
        divisor.digits[0], dividend.base
      ) :
      basicDivision(
        dividend.digits, dividend.precision,
        divisor.digits, divisor.precision,
        dividend.base
      );
    dividend.digits.length = dividend.precision;
    remainder.digits.length = remainder.precision;
    return [dividend, remainder];
  }

  public double(): BigMint {
    if(this.precision === 0){
      return this;
    }

    //Double and set new length
    this.digits.length = this.precision = double(
      this.digits, 0, this.precision, this.base
    );

    return this;
  }

  public gcd(n: BigMint | number | string): BigMint {
    const A: BigMint = this;

    //if gcd of self
    if(A === n){
      return A.abs();
    }

    //Convert to class iff necessary
    let B: BigMint = BigMint.toBigMint(n);

    //If B is zero
    if(B.precision === 0){
      return A.abs();
    }

    //If A is zero
    if(A.precision === 0){

      //Copy B and return to original base
      const base: number = A.base;
      A._assign(B);
      if(base !== A.base){
        A.toBase(base);
      }

      return A.abs();
    }

    //Make a copy of B iff necessary
    B = (n === B) ? B.clone() : B;

    //Normalize bases
    if(A.base !== B.base){
      B.toBase(A.base);
    }

    //Calculate GCD
    B = A._gcd(B);

    //Update A to be result iff needed
    return (A === B) ? A : A._assign(B);
  }

  //See: https://en.wikipedia.org/wiki/Binary_GCD_algorithm
  private _gcd(B: BigMint): BigMint {
    let A: BigMint = this;
    const C: BigMint = BigMint.ONE;

    //Remove and record common factors of 2
    while(A.isEven() && B.isEven()){
      A._half();
      B._half();
      C.double();
    }

    //Remove factors of 2 from A
    while(A.isEven()){
      A._half();
    }

    do {

      //Remove factors of 2 from B
      while(B.isEven()){
        B._half();
      }

      //Make sure A <= B. A and B are both odd, so B - A will be even.
      B.subtract(A).abs();

    //Continue until B is zero
    } while (B.precision !== 0);

    //Restore common factors of 2
    return A.multiply(C);
  }

  public half(): [BigMint, BigMint] {

    //If zero
    if(this.precision === 0){
      return [this, BigMint.ZERO];
    }

    //Halve
    const remainder: number = this._half();
    return [this, remainder === 0 ? BigMint.ZERO : BigMint.ONE];
  }

  private _half(): number {
    let remainder: number;

    //Half
    [this.precision, remainder] = halve(
      this.digits, 0, this.precision, this.base
    );

    if(this.isNegative && remainder !== 0){

      //Round up (e.g. Math.floor(-49.5) = -50)
      increment(this);
    }

    //Update array length
    this.digits.length = this.precision;

    return remainder;
  }

  public isEven(): boolean {

    //If zero
    if(this.precision === 0){
      return true;
    }

    //If even base
    if((this.base & 1) === 0){
      return (this.digits[0] & 1) === 0;
    }

    //If odd base
    let xor: number = 0;
    const digits: number[] = this.digits;
    for(let i: number = 0, n: number = this.precision; i < n; xor = xor ^ digits[i++]){
    }
    return (xor & 1) === 0;
  }

  public isOdd(): boolean {
    return !this.isEven();
  }

  //See: https://en.wikipedia.org/wiki/Least_common_multiple
  public lcm(N: BigMint | number | string): BigMint {
    const A: BigMint = this;
    let B: BigMint = BigMint.toBigMint(N);

    //If lcm of self
    if(A === B){
      return A;
    }

    //If A is zero or B is zero
    if(A.precision === 0 || B.precision === 0){
      return A.toZero();
    }

    //If B is one
    if(B.precision === 1 && B.digits[0] === 1){
      return A.abs();
    }

    //If A is one
    if(A.precision === 1 && A.digits[0] === 1){

      //Turn A into B
      const base: number = A.base;
      A._assign(B);
      if(base !== A.base){
        A.toBase(base);
      }

      return A.abs();
    }

    //Calculate and return LCM
    return A.divide(A.gcd(B)).multiply(B).abs();
  }

  public minusminus(): BigMint {
    if(this.isNegative){
      increment(this);
      this.digits.length = this.precision;
    } else if (this.precision === 0){
      this.toOne();
      this.isNegative = true;
    } else {
      decrement(this);
      this.digits.length = this.precision;
    }
    return this;
  }

  public multiply(n: BigMint | number | string): BigMint {
    const multiplicand: BigMint = this;

    //If self
    if(multiplicand === n){
      return multiplicand.square();
    }

    //If zero
    if(multiplicand.precision === 0){
      return multiplicand;
    }

    //Convert to class if necessary
    let multiplier = BigMint.toBigMint(n);

    //If multiplying by zero
    if(multiplier.precision === 0){
      return multiplicand.toZero();
    }

    //Multiply signs
    multiplicand.isNegative = multiplicand.isNegative !== multiplier.isNegative;

    //Normalize bases
    if (multiplicand.base !== multiplier.base){
      multiplier = (n === multiplier) ? multiplier.clone() : multiplier;
      multiplier.toBase(multiplicand.base);
    }

    //If multiplying by single digit
    if(multiplier.precision === 1){
      multiplicand.precision = singleDigitMultiplication(
        multiplicand.digits, 0, multiplicand.precision,
        multiplier.digits[0], multiplicand.base
      );
      return multiplicand;
    }

    //If single digit
    if(multiplicand.precision === 1){
      const n: number = multiplicand.digits[0];
      multiplicand.digits = multiplier.digits.slice(0);
      multiplicand.precision = singleDigitMultiplication(
        multiplicand.digits, 0, multiplier.precision,
        n, multiplicand.base
      );
      return multiplicand;
    }

    return multiplicand._multiply(multiplier);
  }

  private _multiply(multiplier: BigMint): BigMint {
    const multiplicand: BigMint = this;

    //Make room for multiplication
    multiplicand.digits.length = multiplicand.precision + multiplier.precision;

    //Multiply
    //if(MEETS_THRESHOLD){
    multiplicand.digits.length = multiplicand.precision = karatsubaMultiplication(
      multiplicand.digits, multiplicand.precision,
      multiplier.digits, multiplier.precision,
      multiplicand.base
    );
    /*
    }
    multiplicand.digits.length = multiplicand.precision = BasicMultiplication(
      multiplicand.digits, multiplicand.precision,
      multiplier.digits, multiplier.precision,
      multiplicand.base
    );*/

    return multiplicand;
  }

  public negate(): BigMint {
    this.isNegative = (this.precision === 0) ? false : this.isNegative === false;
    return this;
  };

  public plus(adduend: BigMint | number | string): BigMint {
    return this.add(adduend);
  }

  public plusplus(): BigMint {
    if(this.isNegative){
      decrement(this);
      this.digits.length = this.precision;
      if(this.precision === 0){
        this.isNegative = false;
      }
    } else {
      increment(this);
      this.digits.length = this.precision;
    }
    return this;
  }

  public pow(n: BigMint | number | string): BigMint {
    const base: BigMint = this;
    let power: BigMint = BigMint.toBigMint(n);

    //If raised to zero power
    if(power.precision === 0){

      //Make one
      return base.toOne();
    }

    //If raised to negative power
    if(power.isNegative){

      //Make zero
      return base.toZero();
    }

    //If base is zero
    if(base.precision === 0){
      return base;
    }

    //If negative base and even power
    if(base.isNegative && power.isEven()){

      //Switch sign
      base.isNegative = false;
    }

    //If base is one
    if(base.precision === 1 && base.digits[0] === 1){
      return base;
    }

    return base._pow((n === power) ? power.clone() : power);
  }

  private _pow(power: BigMint): BigMint {
    const base: BigMint = this;

    //If power is 1
    if(power.precision === 1 && power.digits[0] === 1){
      return base;
    }

    //Divide the power in half and check for remainder
    if(power._half() > 0){
      const baseClone: BigMint = base.clone();
      return base._square()._pow(power)._multiply(baseClone);
    }

    //If power was even
    return base._square()._pow(power);
  }

  public remainder(divisor: BigMint | number | string): BigMint {
    return this.divideAndRemainder(divisor)[1];
  }

  public signum(): number {
    return this.isNegative ? -1 : this.precision === 0 ? 0 : 1;
  };

  public square(): BigMint {
    const multiplicand: BigMint = this;

    //If zero
    if (multiplicand.precision === 0){
      return multiplicand;
    }

    //If negative change to positive
    multiplicand.isNegative = false;

    //If one
    if(multiplicand.precision === 1 && multiplicand.digits[0] === 1){
      return multiplicand;
    }

    return multiplicand._square();
  }

  private _square(): BigMint {
    const multiplicand: BigMint = this;

    //Make room for squaring
    multiplicand.digits.length = 2*multiplicand.precision;

    //TODO: Analyze threshold between Basic and Karatsuba

    //Square
    multiplicand.digits.length = multiplicand.precision = karatsubaSquare(
      multiplicand.digits, multiplicand.precision, multiplicand.base
    );

    return multiplicand;
  }

  public subtract(n: BigMint | number | string): BigMint {
    const minuend: BigMint = this;

    //If self
    if(minuend === n){
      return minuend.toZero();
    }

    //Convert to class iff necessary
    let subtrahend: BigMint = BigMint.toBigMint(n);

    //If subtrahend is zero
    if(subtrahend.precision === 0){
      return minuend;
    }

    //If minuend is zero
    if(minuend.precision === 0){

      //Copy subtrahend and return to original base
      return minuend._assign(subtrahend, true).negate();
    }

    //Normalize bases
    if (minuend.base !== subtrahend.base){
      subtrahend = (n === subtrahend) ? subtrahend.clone() : subtrahend;
      subtrahend.toBase(minuend.base);
    }

    //If signs differ, add instead
    if (minuend.isNegative !== subtrahend.isNegative){
      return minuend.negate().add(subtrahend).negate();
    }

    //Compare A to B
    const comparison: number = minuend.compareTo(subtrahend);

    //If same number
    if(comparison === 0){
      return minuend.toZero();
    }

    //Assume A > B
    let f: (
      a: number[], b: number, c: number,
      d: number[], e: number, f: number, g: number
    ) => number = subtraction;

    //If A < B
    if(comparison < 0){
      minuend.negate();
      f = reverseSubtraction;
    }

    minuend.digits.length = minuend.precision = f(
      minuend.digits, 0, minuend.precision,
      subtrahend.digits, 0, subtrahend.precision,
      minuend.base
    );

    return minuend;
  }
}
