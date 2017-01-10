import {Globals} from '../globals';
import {Integer} from '../integer';

//Assumes input cipher is adequate for base
export function toString(A: Integer, sep: string = null, cipher: ReadonlyArray<string> = null): string {

  //If negative
  const sign: string = A.isNegative ? "-" : "";

  //If no custom cipher
  if(cipher == null){

    //If default cipher too small for base
    if(Globals.DEFAULT_CIPHER.length < A.base){

      //Print without cipher
      sep = (sep == null) ? ":": sep;
      return sign + A.digits.slice(0,A.precision).reverse().join(sep);
    }

    //Use default cipher
    cipher = Globals.DEFAULT_CIPHER;
  }

  //Print with cipher
  sep = (sep == null) ? "" : sep;
  return sign + A.digits.map(v => cipher[v]).reverse().join(sep);
}
