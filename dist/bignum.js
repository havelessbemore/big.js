!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.BigNum=e():t.BigNum=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1);e.BigInteger=r.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return t instanceof j}function o(t){return"number"==typeof t}function u(t){return"string"==typeof t}var f=n(2),s=r(f),a=n(20),c=r(a),l=n(31),d=r(l),p=n(32),v=r(p),g=n(36),h=r(g),y=n(83),b=r(y),m=n(91),_=n(92),x=n(93),O=n(94),S=n(95),w=n(96),M=n(97),N=n(98),j=function(t){function e(t){(0,d.default)(this,e);var n=(0,h.default)(this,(e.__proto__||(0,c.default)(e)).call(this));if(i(t))e.clone(n,t);else if(o(t))n.convertNumber(t);else{if(!u(t))throw TypeError("Expecting type BigInteger | string | number");n.convertString(t)}return n}return(0,b.default)(e,t),(0,v.default)(e,[{key:"convertNumber",value:function(t){var e=t,n=m.default.DEFAULT_BASE;e=(this.isNegative=e<0)?-e:e;for(var r=Math.ceil(Math.log(e)/Math.log(n)),i=new Array(r),o=0;0!=e;++o)i[o]=e%n,e=(e-i[o])/n;this.base=n,this.digits=r,this.integer=i}},{key:"convertString",value:function(t){if(t=t.trim(),(0,s.default)(t))throw TypeError("NaN");this.isNegative="-"===t[0],t=t.replace(/^[-+]?0+|\.[0-9]+$/gm,""),this.base=10,this.digits=t.length;for(var n=this.integer=new Array(this.digits),r=0,i=this.digits;i>0;n[r++]=0|t[--i]);e.toBase(this,m.default.DEFAULT_BASE)}},{key:"abs",value:function(){return this.clone().mAbs()}},{key:"mAbs",value:function(){return this.isNegative=!1,this}},{key:"negate",value:function(){return this.clone().mNegate()}},{key:"mNegate",value:function(){return this.isNegative=0!==this.digits&&this.isNegative===!1,this}},{key:"signum",value:function(){return this.isNegative?-1:0===this.digits?0:1}},{key:"clone",value:function(){return new e(this)}},{key:"toZero",value:function(){this.isNegative=!1,this.integer=[],this.digits=0}},{key:"toOne",value:function(){this.isNegative=!1,this.integer=[1],this.digits=1}},{key:"setBase",value:function(t){return this.clone().mSetBase(t)}},{key:"mSetBase",value:function(t){return t=e.sanitizeBase(t),this.base!==t&&e.toBase(this,t),this}},{key:"equals",value:function(t){return 0===this.compareTo(t)}},{key:"compareTo",value:function(t){var n=this;if(n===t)return 0;if(n.isNegative!==t.isNegative)return n.isNegative?-1:1;if(n.digits<2&&t.digits<2)return n.digits!==t.digits?n.digits<t.digits?-1:1:0===n.digits||n.integer[0]===t.integer[0]?0:n.integer[0]<t.integer[0]?-1:1;var r=-1;if(n.base!==t.base){if(n.base>t.base){var i=n;n=t,t=i,r=1}var o=Math.log(n.base)/Math.log(t.base);if(t.digits<Math.ceil(n.digits*o))return-r;if(t.digits>Math.ceil((n.digits+1)*o))return r;n=n.clone(),e.toBase(n,t.base)}if(n.digits!==t.digits)return n.digits<t.digits?r:-r;for(var u=n.digits;u-- >0;)if(n.integer[u]!==t.integer[u])return n.integer[u]<t.integer[u]?r:-r;return 0}},{key:"isOdd",value:function(){return!this.isEven()}},{key:"isEven",value:function t(){if(0===this.digits)return!0;if(0===(1&this.base))return 0===(1&this.integer[0]);for(var t=!0,e=this.integer,n=this.digits;n>0;t=t===(0===(1&e[--n])));return t}},{key:"double",value:function(){return this.clone().mDouble()}},{key:"mDouble",value:function(){return 0===this.digits?this:(this.integer.length=this.digits=x.default(this.integer,this.digits,this.base),this)}},{key:"half",value:function(){return this.clone().mHalf()}},{key:"mHalf",value:function(){return 0===this.digits?this:(this.integer.length=this.digits=O.default(this.integer,this.digits,this.base,this.isNegative),this)}},{key:"add",value:function(t){return this.clone().mAdd(t)}},{key:"mAdd",value:function(t){var n=this;if(n===t)return n.mDouble();if(0===t.digits)return n;if(0===n.digits){var r=n.base;return e.clone(n,t),r!==n.base&&e.toBase(n,r),n}return n.base!==t.base&&(t=t.clone(),e.toBase(t,n.base)),n.isNegative!==t.isNegative?n.mNegate().mSubtract(t).mNegate():(n.integer.length=n.digits<t.digits?t.digits+1:n.digits+1,n.integer.length=n.digits=_.default(n.integer,n.digits,t.integer,t.digits,n.base),n)}},{key:"subtract",value:function(t){return this.clone().mSubtract(t)}},{key:"mSubtract",value:function(t){var n=this;if(n===t)return n.toZero(),n;if(0===t.digits)return n;if(0===n.digits){var r=n.base;return e.clone(n,t),r!==n.base&&e.toBase(n,r),n.mNegate()}if(n.base!==t.base&&(t=t.clone(),e.toBase(t,n.base)),n.isNegative!==t.isNegative)return n.mNegate().mAdd(t).mNegate();var i=n.compareTo(t);return 0===i?(n.toZero(),n):(i<0?(n.mNegate(),n.integer.length=n.digits=w.default(n.integer,n.digits,t.integer,t.digits,n.base)):n.integer.length=n.digits=S.default(n.integer,n.digits,t.integer,t.digits,n.base),n)}},{key:"square",value:function(){return this.clone().mSquare()}},{key:"mSquare",value:function(){var t=this;if(0===t.digits)return t;if(t.isNegative&&(t.isNegative=!1),1===t.digits){if(1===t.integer[0])return t;if(2===t.integer[0])return t.mDouble()}return t.integer.length=2*t.digits,t.integer.length=t.digits=M.default(t.integer,t.digits,t.base),t}},{key:"multiply",value:function(t){return this.clone().mMultiply(t)}},{key:"mMultiply",value:function(t){var n=this;if(n===t)return n.mSquare();if(0===n.digits)return n;if(0===t.digits)return n.toZero(),n;if(n.isNegative=n.isNegative!==t.isNegative,1===n.digits&&n.integer[0]<3){var r=n.base;return e.clone(n,t),n.base!==r&&e.toBase(n,r),2===n.integer[0]&&n.mDouble(),n}return 1===t.digits&&t.integer[0]<3?1===t.integer[0]?n:n.mDouble():(n.base!==t.base&&(t=t.clone(),e.toBase(t,n.base)),n.integer.length=n.digits+t.digits,n.integer.length=n.digits=N.default(n.integer,n.digits,t.integer,t.digits,n.base),n)}},{key:"divide",value:function(t){return this.clone().mDivide(t)}},{key:"mDivide",value:function(t){var e=this;if(e===t)return e.toOne(),e;if(0===t.digits)throw EvalError("Divide by Zero");if(0===e.digits)return e;if(e.isNegative=e.isNegative!==t.isNegative,1===t.digits&&t.integer[0]<3)return 1===t.integer[0]?e:e.mHalf();throw Error("D")}}],[{key:"clone",value:function(t,e){t.isNegative=e.isNegative,t.integer=e.integer.slice(0),t.base=e.base,t.digits=e.digits}},{key:"sanitizeBase",value:function(t){if(t|=0,t<e.MIN_BASE)throw RangeError(t+" < BigInteger.MIN_BASE ("+e.MIN_BASE+")");if(t>e.MAX_BASE)throw RangeError(t+" > BigInteger.MAX_BASE ("+e.MAX_BASE+")");return t}},{key:"toBase",value:function(t,e){for(var n=t.integer,r=t.base,i=t.digits,o=new Array(Math.ceil(i*Math.log(r)/Math.log(e))),u=0,f=i;f>0;++u){for(var s=0,a=f;a-- >0;s%=e)s=s*r+n[a],n[a]=s<e?0:0|s/e;for(o[u]=s;n[f-1]<1;--f);}o.length=u,t.base=e,t.digits=u,t.integer=o}},{key:"min",value:function(t,e){return t.compareTo(e)>0?e.clone():t.clone()}},{key:"mMin",value:function(t,e){return t.compareTo(e)>0?e:t}},{key:"max",value:function(t,e){return t.compareTo(e)<0?e.clone():t.clone()}},{key:"mMax",value:function(t,e){return t.compareTo(e)<0?e:t}}]),e}(m.default);Object.defineProperty(e,"__esModule",{value:!0}),e.default=j},function(t,e,n){t.exports={default:n(3),__esModule:!0}},function(t,e,n){n(4),t.exports=n(7).Number.isNaN},function(t,e,n){var r=n(5);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e,n){var r=n(6),i=n(7),o=n(8),u=n(10),f="prototype",s=function(t,e,n){var a,c,l,d=t&s.F,p=t&s.G,v=t&s.S,g=t&s.P,h=t&s.B,y=t&s.W,b=p?i:i[e]||(i[e]={}),m=b[f],_=p?r:v?r[e]:(r[e]||{})[f];p&&(n=e);for(a in n)c=!d&&_&&void 0!==_[a],c&&a in b||(l=c?_[a]:n[a],b[a]=p&&"function"!=typeof _[a]?n[a]:h&&c?o(l,r):y&&_[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[f]=t[f],e}(l):g&&"function"==typeof l?o(Function.call,l):l,g&&((b.virtual||(b.virtual={}))[a]=l,t&s.R&&m&&!m[a]&&u(m,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(9);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(11),i=n(19);t.exports=n(15)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(12),i=n(14),o=n(18),u=Object.defineProperty;e.f=n(15)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(15)&&!n(16)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(13),i=n(6).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(13);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports={default:n(21),__esModule:!0}},function(t,e,n){n(22),t.exports=n(7).Object.getPrototypeOf},function(t,e,n){var r=n(23),i=n(25);n(30)("getPrototypeOf",function(){return function(t){return i(r(t))}})},function(t,e,n){var r=n(24);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(26),i=n(23),o=n(27)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(28)("keys"),i=n(29);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(6),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(5),i=n(7),o=n(16);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",u)}},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(33),o=r(i);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(34),__esModule:!0}},function(t,e,n){n(35);var r=n(7).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(5);r(r.S+r.F*!n(15),"Object",{defineProperty:n(11).f})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(37),o=r(i);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(38),o=r(i),u=n(67),f=r(u),s="function"==typeof f.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":typeof t};e.default="function"==typeof f.default&&"symbol"===s(o.default)?function(t){return"undefined"==typeof t?"undefined":s(t)}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":"undefined"==typeof t?"undefined":s(t)}},function(t,e,n){t.exports={default:n(39),__esModule:!0}},function(t,e,n){n(40),n(62),t.exports=n(66).f("iterator")},function(t,e,n){"use strict";var r=n(41)(!0);n(43)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(42),i=n(24);t.exports=function(t){return function(e,n){var o,u,f=String(i(e)),s=r(n),a=f.length;return s<0||s>=a?t?"":void 0:(o=f.charCodeAt(s),o<55296||o>56319||s+1===a||(u=f.charCodeAt(s+1))<56320||u>57343?t?f.charAt(s):o:t?f.slice(s,s+2):(o-55296<<10)+(u-56320)+65536)}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(44),i=n(5),o=n(45),u=n(10),f=n(26),s=n(46),a=n(47),c=n(60),l=n(25),d=n(61)("iterator"),p=!([].keys&&"next"in[].keys()),v="@@iterator",g="keys",h="values",y=function(){return this};t.exports=function(t,e,n,b,m,_,x){a(n,e,b);var O,S,w,M=function(t){if(!p&&t in k)return k[t];switch(t){case g:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},N=e+" Iterator",j=m==h,E=!1,k=t.prototype,A=k[d]||k[v]||m&&k[m],P=A||M(m),B=m?j?M("entries"):P:void 0,T="Array"==e?k.entries||A:A;if(T&&(w=l(T.call(new t)),w!==Object.prototype&&(c(w,N,!0),r||f(w,d)||u(w,d,y))),j&&A&&A.name!==h&&(E=!0,P=function(){return A.call(this)}),r&&!x||!p&&!E&&k[d]||u(k,d,P),s[e]=P,s[N]=y,m)if(O={values:j?P:M(h),keys:_?P:M(g),entries:B},x)for(S in O)S in k||o(k,S,O[S]);else i(i.P+i.F*(p||E),e,O);return O}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(10)},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(48),i=n(19),o=n(60),u={};n(10)(u,n(61)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(12),i=n(49),o=n(58),u=n(27)("IE_PROTO"),f=function(){},s="prototype",a=function(){var t,e=n(17)("iframe"),r=o.length,i="<",u=">";for(e.style.display="none",n(59).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+u+"document.F=Object"+i+"/script"+u),t.close(),a=t.F;r--;)delete a[s][o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(f[s]=r(t),n=new f,f[s]=null,n[u]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(11),i=n(12),o=n(50);t.exports=n(15)?Object.defineProperties:function(t,e){i(t);for(var n,u=o(e),f=u.length,s=0;f>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(51),i=n(58);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(26),i=n(52),o=n(55)(!1),u=n(27)("IE_PROTO");t.exports=function(t,e){var n,f=i(t),s=0,a=[];for(n in f)n!=u&&r(f,n)&&a.push(n);for(;e.length>s;)r(f,n=e[s++])&&(~o(a,n)||a.push(n));return a}},function(t,e,n){var r=n(53),i=n(24);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(54);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(52),i=n(56),o=n(57);t.exports=function(t){return function(e,n,u){var f,s=r(e),a=i(s.length),c=o(u,a);if(t&&n!=n){for(;a>c;)if(f=s[c++],f!=f)return!0}else for(;a>c;c++)if((t||c in s)&&s[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var r=n(42),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(42),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){t.exports=n(6).document&&document.documentElement},function(t,e,n){var r=n(11).f,i=n(26),o=n(61)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(28)("wks"),i=n(29),o=n(6).Symbol,u="function"==typeof o,f=t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))};f.store=r},function(t,e,n){n(63);for(var r=n(6),i=n(10),o=n(46),u=n(61)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var a=f[s],c=r[a],l=c&&c.prototype;l&&!l[u]&&i(l,u,a),o[a]=o.Array}},function(t,e,n){"use strict";var r=n(64),i=n(65),o=n(46),u=n(52);t.exports=n(43)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,n):"values"==e?i(0,t[n]):i(0,[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){e.f=n(61)},function(t,e,n){t.exports={default:n(68),__esModule:!0}},function(t,e,n){n(69),n(80),n(81),n(82),t.exports=n(7).Symbol},function(t,e,n){"use strict";var r=n(6),i=n(26),o=n(15),u=n(5),f=n(45),s=n(70).KEY,a=n(16),c=n(28),l=n(60),d=n(29),p=n(61),v=n(66),g=n(71),h=n(72),y=n(73),b=n(76),m=n(12),_=n(52),x=n(18),O=n(19),S=n(48),w=n(77),M=n(79),N=n(11),j=n(50),E=M.f,k=N.f,A=w.f,P=r.Symbol,B=r.JSON,T=B&&B.stringify,I="prototype",D=p("_hidden"),F=p("toPrimitive"),R={}.propertyIsEnumerable,C=c("symbol-registry"),L=c("symbols"),W=c("op-symbols"),q=Object[I],X="function"==typeof P,Z=r.QObject,z=!Z||!Z[I]||!Z[I].findChild,G=o&&a(function(){return 7!=S(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(q,e);r&&delete q[e],k(t,e,n),r&&t!==q&&k(q,e,r)}:k,J=function(t){var e=L[t]=S(P[I]);return e._k=t,e},U=X&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},Y=function(t,e,n){return t===q&&Y(W,e,n),m(t),e=x(e,!0),m(n),i(L,e)?(n.enumerable?(i(t,D)&&t[D][e]&&(t[D][e]=!1),n=S(n,{enumerable:O(0,!1)})):(i(t,D)||k(t,D,O(1,{})),t[D][e]=!0),G(t,e,n)):k(t,e,n)},H=function(t,e){m(t);for(var n,r=y(e=_(e)),i=0,o=r.length;o>i;)Y(t,n=r[i++],e[n]);return t},K=function(t,e){return void 0===e?S(t):H(S(t),e)},Q=function(t){var e=R.call(this,t=x(t,!0));return!(this===q&&i(L,t)&&!i(W,t))&&(!(e||!i(this,t)||!i(L,t)||i(this,D)&&this[D][t])||e)},$=function(t,e){if(t=_(t),e=x(e,!0),t!==q||!i(L,e)||i(W,e)){var n=E(t,e);return!n||!i(L,e)||i(t,D)&&t[D][e]||(n.enumerable=!0),n}},V=function(t){for(var e,n=A(_(t)),r=[],o=0;n.length>o;)i(L,e=n[o++])||e==D||e==s||r.push(e);return r},tt=function(t){for(var e,n=t===q,r=A(n?W:_(t)),o=[],u=0;r.length>u;)!i(L,e=r[u++])||n&&!i(q,e)||o.push(L[e]);return o};X||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===q&&e.call(W,n),i(this,D)&&i(this[D],t)&&(this[D][t]=!1),G(this,t,O(1,n))};return o&&z&&G(q,t,{configurable:!0,set:e}),J(t)},f(P[I],"toString",function(){return this._k}),M.f=$,N.f=Y,n(78).f=w.f=V,n(75).f=Q,n(74).f=tt,o&&!n(44)&&f(q,"propertyIsEnumerable",Q,!0),v.f=function(t){return J(p(t))}),u(u.G+u.W+u.F*!X,{Symbol:P});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var et=j(p.store),nt=0;et.length>nt;)g(et[nt++]);u(u.S+u.F*!X,"Symbol",{for:function(t){return i(C,t+="")?C[t]:C[t]=P(t)},keyFor:function(t){if(U(t))return h(C,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!X,"Object",{create:K,defineProperty:Y,defineProperties:H,getOwnPropertyDescriptor:$,getOwnPropertyNames:V,getOwnPropertySymbols:tt}),B&&u(u.S+u.F*(!X||a(function(){var t=P();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!U(t)){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);return e=r[1],"function"==typeof e&&(n=e),!n&&b(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!U(e))return e}),r[1]=e,T.apply(B,r)}}}),P[I][F]||n(10)(P[I],F,P[I].valueOf),l(P,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(29)("meta"),i=n(13),o=n(26),u=n(11).f,f=0,s=Object.isExtensible||function(){return!0},a=!n(16)(function(){return s(Object.preventExtensions({}))}),c=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!s(t))return"F";if(!e)return"E";c(t)}return t[r].i},d=function(t,e){if(!o(t,r)){if(!s(t))return!0;if(!e)return!1;c(t)}return t[r].w},p=function(t){return a&&v.NEED&&s(t)&&!o(t,r)&&c(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},function(t,e,n){var r=n(6),i=n(7),o=n(44),u=n(66),f=n(11).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:u.f(t)})}},function(t,e,n){var r=n(50),i=n(52);t.exports=function(t,e){for(var n,o=i(t),u=r(o),f=u.length,s=0;f>s;)if(o[n=u[s++]]===e)return n}},function(t,e,n){var r=n(50),i=n(74),o=n(75);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var u,f=n(t),s=o.f,a=0;f.length>a;)s.call(t,u=f[a++])&&e.push(u);return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(54);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(52),i=n(78).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return i(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?f(t):i(r(t))}},function(t,e,n){var r=n(51),i=n(58).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(75),i=n(19),o=n(52),u=n(18),f=n(26),s=n(14),a=Object.getOwnPropertyDescriptor;e.f=n(15)?a:function(t,e){if(t=o(t),e=u(e,!0),s)try{return a(t,e)}catch(t){}if(f(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(71)("asyncIterator")},function(t,e,n){n(71)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(84),o=r(i),u=n(88),f=r(u),s=n(37),a=r(s);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,a.default)(e)));t.prototype=(0,f.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o.default?(0,o.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(85),__esModule:!0}},function(t,e,n){n(86),t.exports=n(7).Object.setPrototypeOf},function(t,e,n){var r=n(5);r(r.S,"Object",{setPrototypeOf:n(87).set})},function(t,e,n){var r=n(13),i=n(12),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(8)(Function.call,n(79).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){t.exports={default:n(89),__esModule:!0}},function(t,e,n){n(90);var r=n(7).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(5);r(r.S,"Object",{create:n(48)})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(31),o=r(i),u=n(32),f=r(u),s=function(){function t(){(0,o.default)(this,t)}return(0,f.default)(t,[{key:"getBase",value:function(){return this.base}}],[{key:"MIN_BASE",get:function(){return 2}},{key:"MAX_BASE",get:function(){return 94906265}}]),t}();s.DECIMAL_BASE=1e7,s.BINARY_BASE=67108864,s.DEFAULT_BASE=s.BINARY_BASE,s.MAX_DIGITS=4294967295,Object.defineProperty(e,"__esModule",{value:!0}),e.default=s},function(t,e){"use strict";function n(t,e,n,r,i){var o=r;if(e<r){o=e;do t[e]=n[e];while(++e<r)}var u=void 0,f=0;for(u=0;u<o;++u)t[u]=t[u]+n[u]+f,t[u]<i?f=0:(f=1,t[u]=t[u]-i);if(f>0){for(f=i-1;u<e&&t[u]===f;t[u++]=0);t[u]=(0|t[u])+1,++u}return u<e?e:u}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t,e,n){for(var r=0,i=0;i<e;++i)t[i]=(t[i]<<1)+r,t[i]<n?r=0:(r=1,t[i]=t[i]-n);return r>0&&(t[e++]=1),e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t,e,n,r){for(var i=0,o=e;o-- >0;t[o]=t[o]>>1)i=0===i?0:n,t[o]=t[o]+i,i=1&t[o];if(0!==i&&r){var u=0;for(i=n-1;t[u]===i;t[u++]=0);t[u]=t[u]+1}return 0===t[e-1]?e-1:e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t,e,n,r,i){for(var o=0,u=0;o<r;++o)t[o]=t[o]-u-n[o],t[o]<0?(t[o]=t[o]+i,u=1):u=0;if(u>0){for(u=i-1;0===t[o];t[o++]=u);t[o]=t[o]-1,++o}if(o===e)for(;0===t[e-1];--e);return e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t,e,n,r,i){for(var o=0,u=0;o<e;++o)t[o]=n[o]-u-t[o],t[o]<0?(t[o]=t[o]+i,u=1):u=0;for(var f=i-1;o<r&&0===n[o];t[o++]=f);for(t[o]=n[o]-1;++o<r;t[o]=n[o]);return 0===n[r-1]?r-1:r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t,e,n){return r(t,0,e,n)}function r(t,e,n,s){var a=n-e;if(a<2)return t[e]=t[e]*t[e],t[e]<s?t[n]=0:(t[n++]=0|t[e]/s,t[e]=t[e]%s),n;var c=a>>1,l=e+c,d=t.slice(l,n),p=u(d,0,d.length,t,e,l,s);p=r(d,0,p,s);var v=l+c;i(t,l,n,c),o(t,l,v),n=r(t,v,n+c,s);var g=r(t,e,l,s);return p=f(d,0,p,t,v,n,s),p=f(d,0,p,t,e,g,s),u(t,l,n,d,0,p,s)}function i(t,e,n,r){for(var i=n,o=n+r;i>e;t[--o]=t[--i]);}function o(t,e,n){for(var r=e;r<n;t[r++]=0);}function u(t,e,n,r,i,o,u){for(var f=e,s=0,a=i;a<o;++f,++a)t[f]=t[f]+r[a]+s,t[f]<u?s=0:(t[f]=t[f]-u,s=1);if(s>0){for(s=u-1;f<n&&t[f]===s;t[f++]=0);f===n?t[n++]=1:t[f]=t[f]+1}return n}function f(t,e,n,r,i,o,u){for(var f=e,s=0,a=i;a<o;++f,++a)t[f]=t[f]-s-r[a],t[f]<0?(t[f]=t[f]+u,s=1):s=0;if(s>0){for(s=u-1;0===t[f];t[f++]=s);t[f]=t[f]-1,++f}if(f===n)for(;n>e&&0===t[n-1];--n);return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t,e,n,r,i){for(var o=e+r,u=e-r,f=e;u<e;t[f++]=t[u++]);for(var s=0,a=r;a<e;t[a++]=t[s++]);for(var c=0;c<r;t[c++]=0);for(var l=r;l<o;++l){for(var d=0,p=l-r,v=0;v<r;++v){var g=t[l]*n[v]+t[p]+d;g<i?d=0:(d=0|g/i,g%=i),t[p++]=g}t[p]=d}return 0===t[o-1]?o-1:o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}])});