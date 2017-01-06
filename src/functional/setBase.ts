import {MIN_BASE, MAX_BASE} from '../constants';
import {Integer} from '../integer';
import {changeBase} from '../util/intUtils';

export function setBase(A: Integer, base: number): Integer {

  //Sanitize base
  base = 0 | base;

  //Check if already in base
  if(A.base === base){
    return A;
  }

  //If new base too low
  if(base < MIN_BASE){
    throw RangeError(base + " < MIN_BASE (" + MIN_BASE + ")");
  }

  //If new base too high
  if(base > MAX_BASE){
    throw RangeError(base + " > MAX_BASE (" + MAX_BASE + ")");
  }

  //Convert to base
  return changeBase(A, base);
}
