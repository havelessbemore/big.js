!function(i,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Big=e():i.Big=e()}(this,function(){return function(i){function e(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return i[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var t={};return e.m=i,e.c=t,e.p="",e(0)}([function(i,e,t){"use strict";var r=t(4);e.__globals__=r.Globals;var n=t(29);e.abs=n.abs;var s=t(15);e.add=s.add;var o=t(50);e.clone=o.clone;var a=t(3);e.compare=a.compare;var c=t(2);e.copy=c.copy;var u=t(16);e.decrement=u.decrement;var f=t(30);e.divideAndRemainder=f.divideAndRemainder;var p=t(17);e.double=p.double;var g=t(31);e.gcd=g.gcd;var v=t(32);e.halve=v.halve;var l=t(33);e.increment=l.increment;var d=t(18);e.isEven=d.isEven;var b=t(34);e.isInteger=b.isInteger;var h=t(35);e.lcm=h.lcm;var y=t(36);e.max=y.max;var m=t(37);e.min=m.min;var B=t(38);e.multiply=B.multiply;var E=t(9);e.negate=E.negate;var M=t(39);e.pow=M.pow;var N=t(19);e.setBase=N.setBase;var A=t(40);e.signum=A.signum;var I=t(20);e.square=I.square;var S=t(21);e.subtract=S.subtract;var w=t(41);e.toInteger=w.toInteger;var D=t(42);e.toString=D.toString;var _=t(51);e.Int=_.BigInt},function(i,e,t){"use strict";function r(i,e){return void 0===e&&(e=u.Globals.DEFAULT_IS_MUTABLE),e?i:s({},i)}function n(i,e){return i.base=e.base,i.digits=e.digits,i.precision=e.precision,i.isNegative=e.isNegative,i}function s(i,e){var t=n(i,e);return t.digits=t.digits.slice(0,t.precision),t}function o(i,e){return t=f.setBase(i.digits,0,i.precision,i.base,e),i.digits=t[0],i.precision=t[1],i.base=e,i;var t}function a(i){return i.precision=1,i.digits=[1],i.isNegative=!1,i}function c(i){return i.precision=0,i.digits=[],i.isNegative=!1,i}var u=t(4),f=t(48);e.tryMutable=r,e.assign=n,e.copy=s,e.changeBase=o,e.setOne=a,e.setZero=c},function(i,e,t){"use strict";function r(i,e){return n.copy(i,e)}var n=t(1);e.copy=r},function(i,e,t){"use strict";function r(i,e){if(i===e)return 0;if(i.isNegative!==e.isNegative)return i.isNegative?-1:1;var t=i.base;if(i.base!==e.base){var r=Math.log(i.base)/Math.log(e.base);if(Math.ceil(i.precision*r)>e.base)return 1;if(Math.ceil((i.precision+1)*r)<e.precision)return-1;n.changeBase(i,e.base)}var o=s.compare(i.digits,0,i.precision,e.digits,0,e.precision);return n.changeBase(i,t),o}var n=t(1),s=t(10);e.compare=r},function(i,e){"use strict";var t;!function(i){i.MIN_BASE=2,i.MAX_BASE=94906265,i.MAX_PRECISION=4294967295,i.DEFAULT_IS_MUTABLE=!1,i.DEFAULT_BASE=94906264,i.DEFAULT_CIPHER=Object.freeze(["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"])}(t=e.Globals||(e.Globals={}))},function(i,e){"use strict";function t(i,e){return i<e?e:i}function r(i,e){return i>e?e:i}function n(i){if(i=i.trim(),1>i.length)throw new TypeError("NaN");var e="-"===i[0];if(i=i.replace(/^[-+]?0*/,"").replace(/\.[0-9]+$/,""),i.match(/[^\d]/))throw new TypeError("NaN");var t=i.length;if(0===t)return[[],!1];for(var r=Array(t),n=0,s=t;0<s;++n)r[n]=0|i[--s];return[r,e]}function s(i,e,t){for(;e<t;)i[e++]=0}e.max=t,e.min=r,e.strToDigits=n,e.zero=s},function(i,e,t){"use strict";function r(i,e,t,r,s,o,a){for(var c=e,u=0;s<o;){var f=i[c]-u-r[s++];0>f?(u=1,f+=a):u=0,i[c++]=f}if(0<u)return n.decrement(i,c,t,a);if(c===t){for(;c-- >e&&0===i[c];);t=c+1}return t}var n=t(11);e.subtraction=r},function(i,e){"use strict";function t(i,e,t,r){for(var n=e+r;e<t;i[n++]=i[e++]);}function r(i,e,t,r){for(var n=t+r;t>e;i[--n]=i[--t]);}function n(i,e,t,r,n){for(;r<n;)i[e++]=t[r++]}function s(i,e,t,r,n){return void 0===r&&(r=e),void 0===n&&(n=t),i=i.map(function(i){return null==i||i!==i?i+"":i}),"["+i.slice(e,r).join(", ")+"|"+i.slice(r,n).join(", ")+"|"+i.slice(n,t).join(", ")+"]"}e.unsafeShiftUp=t,e.safeShiftUp=r,e.copy=n,e.printArr=s},function(i,e,t){"use strict";function r(i,e,t,r,s,o,a){for(var c=0;s<o;){var u=i[e]+r[s++]+c;u<a?c=0:(c=1,u-=a),i[e++]=u}return 0<c?n.increment(i,e,t,a):t}var n=t(13);e.addition=r},function(i,e,t){"use strict";function r(i,e){return i=n.tryMutable(i,e),i.isNegative=0<i.precision&&!i.isNegative,i}var n=t(1);e.negate=r},function(i,e){"use strict";function t(i,e,t,r,n,s){var o=t-e-s+n;if(0!==o)return 0>o?-1:1;for(;t>e;)if(i[--t]!==r[--s])return i[t]<r[s]?-1:1;return 0}e.compare=t},function(i,e){"use strict";function t(i,e,t,r){for(;0===i[e];i[e++]=r-1);return--i[e],e+1===t&&0===i[e]?t-1:t}e.decrement=t},function(i,e){"use strict";function t(i,e,t,r){for(var n=0,s=t;s-- >e;i[s]>>>=1)i[s]+=r&-n,n=1&i[s];return 0===i[t-1]&&--t,[t,n]}e.halve=t},function(i,e){"use strict";function t(i,e,t,r){for(--r;e<t&&i[e]===r;i[e++]=0);return e===t?i[t++]=1:++i[e],t}e.increment=t},function(i,e,t){"use strict";function r(i,e,t,u,f,p,g){var v=c.max(t-e,p-f);if(2>v)return v=i[e]*u[f],v<g?i[t]=0:(i[t++]=0|v/g,v%=g),i[e]=v,t;v=v+1>>>1;var l=e+v,d=c.min(l,t),b=c.min(f+v,p),h=Array(b-f+1);a.copy(h,0,u,f,b);var y=n.addition(h,0,b-f,u,b,p,g),m=Array(d-e+1+y);a.copy(m,0,i,e,d);var B=n.addition(m,0,d-e,i,d,t,g);B=r(m,0,B,h,0,y,g),i[t]=0,a.unsafeShiftUp(i,d,t,v);var E=r(i,e,d,u,f,b,g);if(B=o.subtraction(m,0,B,i,e,E,g),d===t||b===p)return E<=l?(t=l+B,c.zero(i,E,l),a.copy(i,l,m,0,B)):t=B>E-l?s.reverseAddition(i,l,E,m,0,B,g):n.addition(i,l,E,m,0,B,g),t;c.zero(i,E,t);var M=d+v;return t=r(i,M,t+v,u,b,p,g),B=o.subtraction(m,0,B,i,M,t,g),t=n.addition(i,l,t,m,0,B,g)}var n=t(8),s=t(26),o=t(6),a=t(7),c=t(5);e.karatsubaMultiplication=r},function(i,e,t){"use strict";function r(i,e,t){if(i=f.tryMutable(i,t),i===e)return s.double(i,!0);if(0===e.precision)return i;var r=i.base;return 0===i.precision?(i=n.copy(i,e),f.changeBase(i,r)):i.isNegative===e.isNegative?(f.changeBase(i,e.base),i.precision<e.precision?(i.digits.length<e.precision&&(i.digits.length=e.precision),i.precision=u.reverseAddition(i.digits,0,i.precision,e.digits,0,e.precision,i.base)):i.precision=c.addition(i.digits,0,i.precision,e.digits,0,e.precision,i.base),f.changeBase(i,r)):(i=o.negate(i,!0),i=a.subtract(i,e,!0),i=o.negate(i,!0))}var n=t(2),s=t(17),o=t(9),a=t(21),c=t(8),u=t(26),f=t(1);e.add=r},function(i,e,t){"use strict";function r(i,e){return i=o.tryMutable(i,e),i.isNegative?i.precision=s.increment(i.digits,0,i.precision,i.base):0===i.precision?(o.setOne(i),i.isNegative=!0):i.precision=n.decrement(i.digits,0,i.precision,i.base),i}var n=t(11),s=t(13),o=t(1);e.decrement=r},function(i,e,t){"use strict";function r(i,e){return i=s.tryMutable(i,e),i.precision=n.double(i.digits,0,i.precision,i.base),i}var n=t(23),s=t(1);e.double=r},function(i,e,t){"use strict";function r(i){return n.isEven(i.digits,0,i.precision,i.base)}var n=t(24);e.isEven=r},function(i,e,t){"use strict";function r(i,e,t){if(e|=0,e<n.Globals.MIN_BASE)throw RangeError(e+" < MIN_BASE ("+n.Globals.MIN_BASE+")");if(e>n.Globals.MAX_BASE)throw RangeError(e+" > MAX_BASE ("+n.Globals.MAX_BASE+")");return s.changeBase(s.tryMutable(i,t),e)}var n=t(4),s=t(1);e.setBase=r},function(i,e,t){"use strict";function r(i,e){if(i=o.tryMutable(i,e),0===i.precision)return i;i.isNegative=!1;var t=2*i.precision-1;return i.digits.length<t&&(i.digits.length=t),i.precision=500>i.precision?s.longSquare(i.digits,0,i.precision,i.base):n.karatsubaSquare(i.digits,0,i.precision,i.base),i}var n=t(25),s=t(46),o=t(1);e.square=r},function(i,e,t){"use strict";function r(i,e,t){if(i===e)return f.setZero(t?i:{base:i.base});if(i=f.tryMutable(i,t),0===e.precision)return i;var r=i.base;if(0===i.precision)return i=o.copy(i,e),i=a.negate(i,!0),f.changeBase(i,r);if(i.isNegative!==e.isNegative)return i=a.negate(i,!0),i=n.add(i,e,!0),a.negate(i,!0);f.changeBase(i,e.base);var p=s.compare(i,e);return 0===p?(i.base=r,f.setZero(i)):(0>p?(a.negate(i,!0),i.digits.length<e.precision&&(i.digits.length=e.precision),i.precision=c.reverseSubtraction(i.digits,0,i.precision,e.digits,0,e.precision,i.base)):i.precision=u.subtraction(i.digits,0,i.precision,e.digits,0,e.precision,i.base),f.changeBase(i,r))}var n=t(15),s=t(3),o=t(2),a=t(9),c=t(47),u=t(6),f=t(1);e.subtract=r},function(i,e,t){"use strict";function r(i,e,t,r,f,p,g){var v=p-f,l=t-e-v,d=Array(l+1);u.zero(d,0,l+1);for(var b=t;0<=s.compare(i,e+l,b,r,f,p);)++d[l],b=a.subtraction(i,e+l,b,r,f,p,g);for(var h=r[p-1],y=r[p-2],m=Array(v+1),B=t-1,E=l;0<E--;--B)if(d[E]=n(i[B],i[B-1],i[B-2],h,y,g),0!==d[E]){c.copy(m,0,r,f,p);var M=o.singleDigitMultiplication(m,0,v,d[E],g);0<s.compare(m,0,M,i,e+E,b)&&(--d[E],M=a.subtraction(m,0,M,r,f,p,g)),b=a.subtraction(i,e+E,b,m,0,M,g)}for(;b>e&&0===i[b-1];)--b;return[d,i,0===d[l]?l:l+1,b]}function n(i,e,t,r,n,s){var o=i*s+e,a=o%r;return o=0|o/r,a=a*s-o*n+t,0>a&&(a=a+r*s+n,o=0>a?o-2:o-1),o}var s=t(10),o=t(27),a=t(6),c=t(7),u=t(5);e.basicDivision=r},function(i,e){"use strict";function t(i,e,t,r){for(var n=0;e<t;){var s=(i[e]<<1)+n;s<r?n=0:(n=1,s-=r),i[e++]=s}return 0<n&&(i[e++]=1),e}e.double=t},function(i,e){"use strict";function t(i,e,t,r){if(e===t)return!0;if(0==(1&r))return 0==(1&i[e]);for(var n=0;e<t;)n^=i[e++];return 0==(1&n)}e.isEven=t},function(i,e,t){"use strict";function r(i,e,t,c){var u=t-e;if(2>u)return u=i[e]*i[e],u<c?i[t]=0:(i[t++]=0|u/c,u%=c),i[e]=u,t;u=u+1>>>1;var f=e+u,p=Array(2*u+2);o.copy(p,0,i,e,f);var g=n.addition(p,0,u,i,f,t,c);i[t]=0,o.unsafeShiftUp(i,f,t,u);var v=r(i,e,f,c);a.zero(i,v,t);var l=f+u;return t=r(i,l,t+u,c),g=r(p,0,g,c),g=s.subtraction(p,0,g,i,e,v,c),g=s.subtraction(p,0,g,i,l,t,c),n.addition(i,f,t,p,0,g,c)}var n=t(8),s=t(6),o=t(7),a=t(5);e.karatsubaSquare=r},function(i,e,t){"use strict";function r(i,e,t,r,s,o,a){for(var c=s-e+t,u=c;u<o;i[t++]=r[u++]);return n.addition(i,e,t,r,s,c,a)}var n=t(8);e.reverseAddition=r},function(i,e){"use strict";function t(i,e,t,r,n){for(var s=0;e<t;){var o=i[e]*r+s;o<n?s=0:(s=0|o/n,o%=n),i[e++]=o}return 0<s&&(i[e++]=s),e}e.singleDigitMultiplication=t},function(i,e,t){"use strict";function r(i,e,t,r,u,f,p){for(var g=0;a.isEven(i,e,t,p)&&a.isEven(r,u,f,p);)t=o.halve(i,e,t,p)[0],f=o.halve(r,u,f,p)[0],++g;for(;a.isEven(i,e,t,p);)t=o.halve(i,e,t,p)[0];for(;a.isEven(r,u,f,p);)f=o.halve(r,u,f,p)[0];for(var v;0!==(v=n.compare(i,e,t,r,u,f));){if(0<v){var l=i;i=r,r=l,v=e,e=u,u=v,v=t,t=f,f=v}f=c.subtraction(r,u,f,i,e,t,p);do f=o.halve(r,u,f,p)[0];while(a.isEven(r,u,f,p))}for(;0<g--;)t=s.double(i,e,t,p);return[i,e,t]}var n=t(10),s=t(23),o=t(12),a=t(24),c=t(6);e.steinGCD=r},function(i,e,t){"use strict";function r(i,e){return i=n.tryMutable(i,e),i.isNegative=!1,i}var n=t(1);e.abs=r},function(i,e,t){"use strict";function r(i,e,t){if(void 0===t&&(t=!1),0===e.precision)throw new EvalError("Divide by zero");var r=a.tryMutable(i,t);if(i===e)return[r,a.setZero({base:r.base})];if(0===r.precision)return[r,a.setZero({base:r.base})];if(r.isNegative=r.isNegative!==e.isNegative,1===e.precision&&1===e.digits[0])return[r,a.setZero({base:r.base})];if(1===r.precision&&1===r.digits[0])return[a.setZero(r),a.setOne({base:r.base})];var c=r.base;if(c!==e.base){var u=Math.log(e.base)/Math.log(c);if(r.precision<Math.ceil(e.precision*u)){var f=t?n.copy({},r):r;return[a.setZero({base:r.base}),f]}a.changeBase(r,e.base)}if(r.precision<e.precision){r.base=c;var f=t?n.copy({},r):r;return[a.setZero({base:r.base}),f]}var p=a.setOne({base:r.base});return 2>e.precision?(g=o.singleDigitDivision(r.digits,0,r.precision,e.digits[0],r.base),r.precision=g[0],p.digits[0]=g[1],0===p.digits[0]&&a.setZero(p)):(v=s.basicDivision(r.digits,0,r.precision,e.digits,0,e.precision,r.base),r.digits=v[0],p.digits=v[1],r.precision=v[2],p.precision=v[3]),a.changeBase(r,c),a.changeBase(p,c),[r,p];var g,v}var n=t(2),s=t(22),o=t(49),a=t(1);e.divideAndRemainder=r},function(i,e,t){"use strict";function r(i,e,t){var r=a.tryMutable(i,t);if(r.isNegative=!1,i===e||0===e.precision)return r;if(0===r.precision)return s.copy(r,e),r.isNegative=!1,r;var c=r.base;return a.changeBase(r,e.base),0!==n.compare(r,e)&&(u=o.steinGCD(r.digits,0,r.precision,e.digits.slice(0,e.precision),0,e.precision,r.base),r.digits=u[0],r.precision=u[2]),a.changeBase(r,c);var u}var n=t(3),s=t(2),o=t(28),a=t(1);e.gcd=r},function(i,e,t){"use strict";function r(i,e){var t=o.setZero({base:i.base});return i=o.tryMutable(i,e),0===i.precision?[i,t]:(r=s.halve(i.digits,0,i.precision,i.base),i.precision=r[0],t.precision=r[1],0===t.precision?[i,t]:(i.isNegative&&n.decrement(i,!0),[i,o.setOne(t)]));var r}var n=t(16),s=t(12),o=t(1);e.halve=r},function(i,e,t){"use strict";function r(i,e){return i=o.tryMutable(i,e),i.isNegative?(i.precision=n.decrement(i.digits,0,i.precision,i.base),0===i.precision&&(i.isNegative=!1)):i.precision=s.increment(i.digits,0,i.precision,i.base),i}var n=t(11),s=t(13),o=t(1);e.increment=r},function(i,e){"use strict";function t(i){return i.hasOwnProperty("base")&&i.hasOwnProperty("digits")&&i.hasOwnProperty("precision")&&i.hasOwnProperty("isNegative")}e.isInteger=t},function(i,e,t){"use strict";function r(i,e,t){var r=o.tryMutable(i,t);if(r.isNegative=!1,i===e||0===i.precision||1===e.precision&&1===e.digits[0])return r;if(0===e.precision)return o.setZero(r);var a=r.base;return 1===r.precision&&1===r.digits[0]?(n.copy(r,e),r.isNegative=!1):(o.changeBase(r,e.base),c=s.lcm(r.digits,0,r.precision,e.digits,0,e.precision,r.base),r.digits=c[0],r.precision=c[1]),o.changeBase(r,a);var c}var n=t(2),s=t(44),o=t(1);e.lcm=r},function(i,e,t){"use strict";function r(i,e,t){return s.tryMutable(0>n.compare(i,e)?e:i,t)}var n=t(3),s=t(1);e.max=r},function(i,e,t){"use strict";function r(i,e,t){return s.tryMutable(0<n.compare(i,e)?e:i,t)}var n=t(3),s=t(1);e.min=r},function(i,e,t){"use strict";function r(i,e,t){if(i===e)return n.square(i,t);if(i=c.tryMutable(i,t),0===i.precision)return i;if(0===e.precision)return c.setZero(i);i.isNegative=i.isNegative!==e.isNegative;var r=i.base;if(c.changeBase(i,e.base),1===e.precision)return i.precision=a.singleDigitMultiplication(i.digits,0,i.precision,e.digits[0],i.base),c.changeBase(i,r);if(1===i.precision){var u=i.digits[0];return i.digits=e.digits.slice(0,e.precision),i.precision=a.singleDigitMultiplication(i.digits,0,e.precision,u,i.base),c.changeBase(i,r)}var f=i.precision+e.precision-1;return i.digits.length<f&&(i.digits.length=f),i.precision=100>i.precision&&100>e.precision?o.longMultiplication(i.digits,0,i.precision,e.digits,0,e.precision,i.base):s.karatsubaMultiplication(i.digits,0,i.precision,e.digits,0,e.precision,i.base),c.changeBase(i,r)}var n=t(20),s=t(14),o=t(45),a=t(27),c=t(1);e.multiply=r},function(i,e,t){"use strict";function r(i,e,t){var r=o.tryMutable(i,t);if(0===e.precision)return o.setOne(r);if(e.isNegative){if(0===r.precision)throw new EvalError("Divide by zero");return o.setZero(r)}return 0===r.precision?r:(r.isNegative=!(r.isNegative&&n.isEven(e)),1===r.precision&&1===r.digits[0]?r:(r.precision=s.exponentiation(r.digits,0,r.precision,r.base,e.digits.slice(0,e.precision),0,e.precision,e.base),r))}var n=t(18),s=t(43),o=t(1);e.pow=r},function(i,e){"use strict";function t(i){return i.isNegative?-1:0===i.precision?0:1}e.signum=t},function(i,e,t){"use strict";function r(i,e,t){if(void 0===e&&(e=null),o.isInteger(i))return s.setBase(i,null==e?i.base:e,t);if("number"==typeof i)i=""+i;else if("string"!=typeof i)throw TypeError("Expecting type Integer | string | number");var r=a.setZero({base:10});return u=c.strToDigits(i),r.digits=u[0],r.isNegative=u[1],r.precision=r.digits.length,s.setBase(r,null==e?n.Globals.DEFAULT_BASE:e,!0);var u}var n=t(4),s=t(19),o=t(34),a=t(1),c=t(5);e.toInteger=r},function(i,e,t){"use strict";function r(i,e,t){void 0===e&&(e=null),void 0===t&&(t=null);var r=i.isNegative?"-":"";if(null==t){if(n.Globals.DEFAULT_CIPHER.length<i.base)return e=null==e?":":e,r+i.digits.slice(0,i.precision).reverse().join(e);t=n.Globals.DEFAULT_CIPHER}return e=null==e?"":e,r+i.digits.map(function(i){return t[i]}).reverse().join(e)}var n=t(4);e.toString=r},function(i,e,t){"use strict";function r(i,e,t,r,a,c,u,f){for(var p=1,g=[1];c+1<u||1<a[c];){var v=void 0;l=n.halve(a,c,u,f),u=l[0],v=l[1],0<v&&(g.length=p+t,p=o.karatsubaMultiplication(g,0,p,i,e,t,r)),t=s.karatsubaSquare(i,e,t,r)}return 1<g.length&&(t=o.karatsubaMultiplication(i,e,t,g,0,p,r)),t;var l}var n=t(12),s=t(25),o=t(14);e.exponentiation=r},function(i,e,t){"use strict";function r(i,e,t,r,a,c,u){var f=i.slice(e,t),p=f.length,g=r.slice(a,c),v=g.length;return l=o.steinGCD(f,0,p,g,0,v,u),f=l[0],p=l[2],d=n.basicDivision(i,e,t,f,0,p,u),f=d[0],p=d[2],p=s.karatsubaMultiplication(f,0,p,r,a,c,u),[f,p];var l,d}var n=t(22),s=t(14),o=t(28);e.lcm=r},function(i,e,t){"use strict";function r(i,e,t,r,o,a,c){var u=a-o,f=e+u;n.safeShiftUp(i,e,t,u),s.zero(i,e,f);for(var p=t+u,g=f;g<p;++g){for(var v=0,l=g-u,d=o;d<a;++d){var b=i[g]*r[d]+i[l]+v;b<c?v=0:(v=0|b/c,b%=c),i[l++]=b}i[l]=v}return 0===i[p-1]?p-1:p}var n=t(7),s=t(5);e.longMultiplication=r},function(i,e,t){"use strict";function r(i,e,t,r){var o=t-e;n.unsafeShiftUp(i,e,t,o),s.zero(i,e,t),o+=t;for(var a=e,c=t;a<o;a+=2){var u=i[c++],f=0;i[a]+=u*u,i[a]>=r&&(f=0|i[a]/r,i[a]%=r);for(var p=a+1,g=c;g<o;++p){var v=0,l=i[g++]*u;l>=r&&(v=0|l/r,l%=r),v<<=1,l<<=1,i[p]=i[p]+l+f,f=v,i[p]>=r&&(f+=0|i[p]/r,i[p]%=r)}i[p]=f}return 0===i[o-1]?o-1:o}var n=t(7),s=t(5);e.longSquare=r},function(i,e){"use strict";function t(i,e,t,r,n,s,o){for(var a=0;e<t;){var c=r[n++]-a-i[e];0>c?(a=1,c+=o):a=0,i[e++]=c}if(0<a){for(a=o-1;0===r[n];++n)i[e++]=a;i[e++]=r[n++]-1}if(n<s){do i[e++]=r[n++];while(n<s)}else for(;0===i[e-1];)--e;return e}e.reverseSubtraction=t},function(i,e){"use strict";function t(i,e,t,r,n){if(t===e||r===n)return[i,t];for(var s=0,o=Array(Math.ceil((t-e)*Math.log(r)/Math.log(n)));;){for(var a=0,c=t;c>e;a%=n)a=a*r+i[--c],i[c]=0|a/n;for(o[s++]=a;0===i[t-1];)if(--t===e)return[o,s]}}e.setBase=t},function(i,e){"use strict";function t(i,e,t,r,n){for(var s=0,o=t;o-- >e;s%=r)s=s*n+i[o],i[o]=0|s/r;return 0===i[t-1]&&--t,[t,s]}e.singleDigitDivision=t},function(i,e,t){"use strict";function r(i){return n.copy({},i)}var n=t(2);e.clone=r},function(i,e,t){"use strict";var r=t(4),n=t(29),s=t(15),o=t(3),a=t(2),c=t(16),u=t(30),f=t(17),p=t(31),g=t(32),v=t(33),l=t(18),d=t(35),b=t(36),h=t(37),y=t(38),m=t(9),B=t(39),E=t(40),M=t(19),N=t(21),A=t(20),I=t(41),S=t(42),w=t(1),D=function(){function i(i){w.assign(this,I.toInteger(i,r.Globals.DEFAULT_BASE,!1)),this.digits.length=this.precision}return Object.defineProperty(i,"MINUS_ONE",{get:function(){return new i(-1)},enumerable:!0,configurable:!0}),Object.defineProperty(i,"ZERO",{get:function(){return new i(0)},enumerable:!0,configurable:!0}),Object.defineProperty(i,"ONE",{get:function(){return new i(1)},enumerable:!0,configurable:!0}),i.prototype.abs=function(e){return i.toBigInt(n.abs(this,e),!0)},i.prototype.add=function(e,t){var r=s.add(this,e,t);return r.digits.length=r.precision,i.toBigInt(r,!0)},i.prototype.clone=function(){return new i(this)},i.prototype.compareTo=function(i){return o.compare(this,i)},i.prototype.copy=function(i){return a.copy(this,i),this},i.prototype.divide=function(i,e){return this.divideAndRemainder(i,e)[0]},i.prototype.divideAndRemainder=function(e,t){var r,n;return s=u.divideAndRemainder(this,e,t),r=s[0],n=s[1],r.digits.length=r.precision,n.digits.length=n.precision,[i.toBigInt(r,!0),w.assign(i.ZERO,n)];var s},i.prototype.double=function(e){return i.toBigInt(f.double(this,e),!0)},i.prototype.gcd=function(e,t){var r=p.gcd(this,e,t);return r.digits.length=r.precision,i.toBigInt(r,!0)},i.prototype.getBase=function(){return this.base},i.prototype.half=function(e){var t,r;return n=g.halve(this,e),t=n[0],r=n[1],t.digits.length=t.precision,[i.toBigInt(t,!0),new i(r.precision)];var n},i.isBigInt=function(e){return e instanceof i},i.prototype.isEven=function(){return l.isEven(this)},i.prototype.isOdd=function(){return!this.isEven()},i.prototype.lcm=function(e,t){var r=d.lcm(this,e,t);return r.digits.length=r.precision,i.toBigInt(r,!0)},i.max=function(e,t,r){return i.toBigInt(b.max(e,t,r),!0)},i.min=function(e,t,r){return i.toBigInt(h.min(e,t,r),!0)},i.prototype.minusminus=function(e){var t=c.decrement(this,e);return t.digits.length=t.precision,i.toBigInt(t,!0)},i.prototype.multiply=function(e,t){var r=y.multiply(this,e,t);return r.digits.length=r.precision,i.toBigInt(r,!0)},i.prototype.negate=function(e){return i.toBigInt(m.negate(this,e),!0)},i.prototype.plusplus=function(e){return i.toBigInt(v.increment(this,e),!0)},i.prototype.pow=function(e,t){var r=B.pow(this,e,t);return r.digits.length=r.precision,i.toBigInt(r,!0)},i.prototype.remainder=function(i,e){var t=this.divideAndRemainder(i,e)[1];return e&&w.assign(this,t),this},i.prototype.setBase=function(e,t){var r=M.setBase(this,e,t);return r.digits.length=r.precision,i.toBigInt(r,!0)},i.prototype.signum=function(){return E.signum(this)},i.prototype.square=function(e){var t=A.square(this,e);return t.digits.length=t.precision,i.toBigInt(t,!0)},i.prototype.subtract=function(e,t){var r=N.subtract(this,e,t);return r.digits.length=r.precision,i.toBigInt(r,!0)},i.toBigInt=function(e,t){return i.isBigInt(e)&&t?e:new i(e)},i.prototype.toString=function(i,e){return void 0===i&&(i=null),void 0===e&&(e=null),S.toString(this,i,e)},i}();e.BigInt=D}])});
//# sourceMappingURL=big.js.map