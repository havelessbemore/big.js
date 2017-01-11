import {Integer} from '../integer';
import {copy} from './copy';
import {double} from './double';
import {negate} from './negate';
import {subtract} from './subtract';
import {addition} from '../algorithm/addition';
import {reverseAddition} from '../algorithm/reverseAddition';
import {changeBase, tryMutable} from '../util/intUtils';

export function add(A: Integer, B: Integer, isMutable?: boolean): Integer {
  A = tryMutable(A, isMutable);

  //If self
  if(A === B){
    return double(A, true);
  }

  //If B is zero
  if(B.precision === 0){
    return A;
  }

  const base: number = A.base;

  //If C is zero
  if(A.precision === 0){
    A = copy(A, B);
    return changeBase(A, base);
  }

  //If signs differ
  if(A.isNegative !== B.isNegative){

    //Change sign, subtract, change sign again
    A = negate(A, true);
    A = subtract(A, B, true);
    A = negate(A, true);
    return A;
  }

  //Normalize to B's base
  changeBase(A, B.base);

  //If C < B
  if(A.precision < B.precision){

    //Update C's digit array to minimum result size
    if(A.digits.length < B.precision){
      A.digits.length = B.precision;
    }

    //Add
    A.precision = reverseAddition(
      A.digits, 0, A.precision,
      B.digits, 0, B.precision,
      A.base
    );

  //If A >= B
  } else {

    //Add
    A.precision = addition(
      A.digits, 0, A.precision,
      B.digits, 0, B.precision,
      A.base
    );
  }

  //Change A back to original base
  return changeBase(A, base);
}
