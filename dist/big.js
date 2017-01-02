!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.Big=i():t.Big=i()}(this,function(){return function(t){function i(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}var e={};return i.m=t,i.c=e,i.p="",i(0)}([function(t,i,e){"use strict";var n=e(1);i.Mint=n.default},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=e(2),o=n(r),s=e(59),u=n(s),a=e(60),c=n(a),f=e(64),l=e(67),v=e(69),p=e(71),d=e(73),g=e(74),h=e(76),y=e(78),b=e(80),m=e(81),_=e(83),M=e(88),x=e(90),k=e(89),E=e(84),w=e(91),O=function(){function t(i){if((0,u.default)(this,t),t.isBigMint(i))this._assign(i);else if("number"==typeof i)this.convertString(""+i);else{if("string"!=typeof i)throw TypeError("Expecting type BigMint | string | number");this.convertString(i)}}return(0,c.default)(t,[{key:"convertString",value:function(i){this.base=10;var e=E.strToDecArray(i),n=(0,o.default)(e,2);this.digits=n[0],this.isNegative=n[1],this.precision=this.digits.length,this.toBase(t.DEFAULT_BASE)}},{key:"clone",value:function(){return new t(this)}},{key:"assign",value:function(i){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._assign(t.toBigMint(i),e)}},{key:"_assign",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=this.base;return w.copy(this,t),i&&this.base!==e&&this.toBase(e),this}},{key:"getBase",value:function(){return this.base}},{key:"setBase",value:function(i){if(i|=0,this.base===i)return this;if(i<t.MIN_BASE)throw RangeError(i+" < BigMint.MIN_BASE ("+t.MIN_BASE+")");if(i>t.MAX_BASE)throw RangeError(i+" > BigMint.MAX_BASE ("+t.MAX_BASE+")");return this.toBase(i)}},{key:"toBase",value:function(t){var i=E.changeBase(this.digits,0,this.precision,this.base,t),e=(0,o.default)(i,2);return this.digits=e[0],this.precision=e[1],this.base=t,this}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.base,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.CIPHER,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(this.base!==t)return this.setBase(t).toString(t,i,e);if((null===i||i instanceof Array&&t>i.length)&&!function(){var e=new Array((""+(t-1)).length+1).join("0");i=function(t,i,n){var r=""+t;return i+1===n?r:e.substring(r.length)+r}}(),0===this.precision)return i instanceof Array?i[0]:i(0,0,0);var n=void 0,r=this.digits;if(i instanceof Array){n=i[r[0]];for(var o=1,s=this.precision;o<s;n=i[r[o++]]+e+n);}else{n=i(r[0],0,this.precision);for(var u=1,a=this.precision;u<a;++u)n=i(r[u],u,a)+e+n}return this.isNegative&&(n="-"+n),n}},{key:"lt",value:function(t){return this.compareTo(t)<0}},{key:"lessThan",value:function(t){return this.lt(t)}},{key:"lteq",value:function(t){return this.compareTo(t)<=0}},{key:"lessThanEquals",value:function(t){return this.lteq(t)}},{key:"eq",value:function(t){return 0===this.compareTo(t)}},{key:"equals",value:function(t){return this.eq(t)}},{key:"gteq",value:function(t){return this.compareTo(t)>=0}},{key:"greaterThanEquals",value:function(t){return this.gteq(t)}},{key:"gt",value:function(t){return this.compareTo(t)>0}},{key:"greaterThan",value:function(t){return this.gt(t)}},{key:"compareTo",value:function(i){var e=this,n=t.toBigMint(i);if(e===n)return 0;if(e.isNegative!==n.isNegative)return e.isNegative?-1:1;if(e.precision<2&&n.precision<2)return e.precision!==n.precision?e.precision<n.precision?-1:1:0===e.precision||e.digits[0]===n.digits[0]?0:e.digits[0]<n.digits[0]?-1:1;if(e.base===n.base)return E.compare(e.digits,0,e.precision,n.digits,0,n.precision);var r=-1;if(e.base>n.base){var o=e;e=n,n=o,r=1}var s=Math.log(e.base)/Math.log(n.base);return n.precision<Math.ceil(e.precision*s)?-r:n.precision>Math.ceil((e.precision+1)*s)?r:(e=e.clone().toBase(n.base),r*E.compare(e.digits,0,e.precision,n.digits,0,n.precision))}},{key:"abs",value:function(){return this.isNegative=!1,this}},{key:"add",value:function(i){var e=this;if(e===i)return e.double();var n=t.toBigMint(i);return 0===n.precision?e:0===e.precision?e._assign(n,!0):(e.base!==n.base&&(n=i===n?n.clone():n,n.toBase(e.base)),e.isNegative!==n.isNegative?e.negate().subtract(n).negate():(e.digits.length=e.precision<n.precision?n.precision+1:e.precision+1,e.precision<n.precision?g.reverseAddition(e,n):f.addition(e,n),e.digits.length=e.precision,e))}},{key:"divide",value:function(t){return this.divideAndRemainder(t)[0]}},{key:"divideAndRemainder",value:function(i){var e=this,n=t.toBigMint(i);if(0===n.precision)throw EvalError("Divide by Zero");if(e===n)return[w.setOne(e),t.ZERO];if(0===e.precision)return[e,t.ZERO];if(e.isNegative=e.isNegative!==n.isNegative,1===n.precision&&n.digits[0]<3)return 1===n.digits[0]?[e,t.ZERO]:e.half();if(e.base!==n.base){var r=Math.log(n.base)/Math.log(e.base);if(e.precision<Math.ceil(n.precision*r)){var s=w.share(t.ZERO,e);return[w.setZero(e),s]}n=i===n?n.clone():n,n.toBase(e.base)}if(e.precision<n.precision){var u=w.share(t.ZERO,e);return[w.setZero(e),u]}if(n.precision<2){var a=void 0,c=x.singleDigitDivision(e.digits,0,e.precision,n.digits[0],e.base),f=(0,o.default)(c,2);return e.precision=f[0],a=f[1],[e,new t(a)]}var l=t.ZERO,v=M.basicDivision(e.digits,0,e.precision,n.digits,0,n.precision,e.base),p=(0,o.default)(v,4);return e.digits=p[0],l.digits=p[1],e.precision=p[2],l.precision=p[3],e.digits.length=e.precision,l.digits.length=l.precision,[e,l]}},{key:"double",value:function(){return v.double(this),this}},{key:"gcd",value:function(i){var e=this;if(e===i)return e.abs();var n=t.toBigMint(i);return 0===n.precision?e.abs():0===e.precision?e._assign(n,!0).abs():(n=i===n?n.clone():n,e.base!==n.base&&n.toBase(e.base),n=e._gcd(n),e===n?e:e._assign(n))}},{key:"_gcd",value:function(i){for(var e=this,n=t.ONE;e.isEven()&&i.isEven();)e._half(),i._half(),n.double();for(;e.isEven();)e._half();do{for(;i.isEven();)i._half();i.subtract(e).abs()}while(0!==i.precision);return e.multiply(n)}},{key:"half",value:function(){if(0===this.precision)return[this,t.ZERO];var i=this._half();return[this,0===i?t.ZERO:t.ONE]}},{key:"_half",value:function(){var t=p.halve(this);return this.isNegative&&0!==t.precision&&d.increment(this),this.digits.length=this.precision,t.precision}},{key:"isEven",value:function(){if(0===this.precision)return!0;if(0===(1&this.base))return 0===(1&this.digits[0]);for(var t=0,i=this.digits,e=0,n=this.precision;e<n;t^=i[e++]);return 0===(1&t)}},{key:"isOdd",value:function(){return!this.isEven()}},{key:"lcm",value:function(i){var e=this,n=t.toBigMint(i);return e===n?e:0===e.precision||0===n.precision?w.setZero(e):1===n.precision&&1===n.digits[0]?e.abs():1===e.precision&&1===e.digits[0]?e._assign(n,!0).abs():e.divide(e.gcd(n)).multiply(n).abs()}},{key:"minusminus",value:function(){return this.isNegative?(d.increment(this),this.digits.length=this.precision):0===this.precision?(w.setOne(this),this.isNegative=!0):(l.decrement(this),this.digits.length=this.precision),this}},{key:"multiply",value:function(i){var e=this;if(e===i)return e.square();if(0===e.precision)return e;var n=t.toBigMint(i);if(0===n.precision)return w.setZero(e);if(e.isNegative=e.isNegative!==n.isNegative,e.base!==n.base&&(n=i===n?n.clone():n,n.toBase(e.base)),1===n.precision)return e.precision=k.singleDigitMultiplication(e.digits,0,e.precision,n.digits[0],e.base),e;if(1===e.precision){var r=e.digits[0];return e.digits=n.digits.slice(0),e.precision=k.singleDigitMultiplication(e.digits,0,n.precision,r,e.base),e}return e.digits.length=e.precision+n.precision,e.digits.length=e.precision=_.karatsubaMultiplication(e.digits,0,e.precision,n.digits,0,n.precision,e.base),e}},{key:"negate",value:function(){return 0!==this.precision&&(this.isNegative=this.isNegative===!1),this}},{key:"plus",value:function(t){return this.add(t)}},{key:"plusplus",value:function(){return this.isNegative?(l.decrement(this),this.digits.length=this.precision,0===this.precision&&(this.isNegative=!1)):(d.increment(this),this.digits.length=this.precision),this}},{key:"pow",value:function(i){var e=this,n=t.toBigMint(i);return 0===n.precision?w.setOne(e):n.isNegative?w.setZero(e):0===e.precision?e:(e.isNegative&&n.isEven()&&(e.isNegative=!1),1===e.precision&&1===e.digits[0]?e:(n=i===n?n.clone():n,e.digits.length=e.precision=b.exponentiation(e.digits,0,e.precision,e.base,n.digits,0,n.precision,n.base),e))}},{key:"remainder",value:function(t){return this.divideAndRemainder(t)[1]}},{key:"signum",value:function(){return this.isNegative?-1:0===this.precision?0:1}},{key:"square",value:function(){var t=this;return 0===t.precision?t:(t.isNegative=!1,1===t.precision&&1===t.digits[0]?t:(t.digits.length=2*t.precision,t.digits.length=t.precision=m.karatsubaSquare(t.digits,0,t.precision,t.base),t))}},{key:"subtract",value:function(i){var e=this;if(e===i)return w.setZero(e);var n=t.toBigMint(i);if(0===n.precision)return e;if(0===e.precision)return e._assign(n,!0).negate();if(e.base!==n.base&&(n=i===n?n.clone():n,n.toBase(e.base)),e.isNegative!==n.isNegative)return e.negate().add(n).negate();var r=e.compareTo(n);if(0===r)return w.setZero(e);var o=y.subtraction;return r<0&&(e.negate(),o=h.reverseSubtraction),o(e,n),e.digits.length=e.precision,e}}],[{key:"isBigMint",value:function(i){return i instanceof t}},{key:"toBigMint",value:function(i){return t.isBigMint(i)?i:new t(i)}},{key:"min",value:function(i,e){var n=t.toBigMint(i),r=t.toBigMint(e);return n.compareTo(r)>0?n:r}},{key:"max",value:function(i,e){var n=t.toBigMint(i),r=t.toBigMint(e);return n.compareTo(r)<0?r:n}},{key:"MINUS_ONE",get:function(){return new t(-1)}},{key:"ZERO",get:function(){return new t(0)}},{key:"ONE",get:function(){return new t(1)}}]),t}();O.MIN_BASE=2,O.MAX_BASE=94906265,O.DEFAULT_BASE=94906264,O.MAX_PRECISION=4294967295,Object.defineProperty(i,"__esModule",{value:!0}),i.default=O},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}i.__esModule=!0;var r=e(3),o=n(r),s=e(55),u=n(s);i.default=function(){function t(t,i){var e=[],n=!0,r=!1,o=void 0;try{for(var s,a=(0,u.default)(t);!(n=(s=a.next()).done)&&(e.push(s.value),!i||e.length!==i);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return e}return function(i,e){if(Array.isArray(i))return i;if((0,o.default)(Object(i)))return t(i,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,i,e){t.exports={default:e(4),__esModule:!0}},function(t,i,e){e(5),e(51),t.exports=e(53)},function(t,i,e){e(6);for(var n=e(17),r=e(21),o=e(9),s=e(48)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var c=u[a],f=n[c],l=f&&f.prototype;l&&!l[s]&&r(l,s,c),o[c]=o.Array}},function(t,i,e){"use strict";var n=e(7),r=e(8),o=e(9),s=e(10);t.exports=e(14)(Array,"Array",function(t,i){this._t=s(t),this._i=0,this._k=i},function(){var t=this._t,i=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,r(1)):"keys"==i?r(0,e):"values"==i?r(0,t[e]):r(0,[e,t[e]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(t,i){t.exports=function(){}},function(t,i){t.exports=function(t,i){return{value:i,done:!!t}}},function(t,i){t.exports={}},function(t,i,e){var n=e(11),r=e(13);t.exports=function(t){return n(r(t))}},function(t,i,e){var n=e(12);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,i){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,i){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,i,e){"use strict";var n=e(15),r=e(16),o=e(31),s=e(21),u=e(32),a=e(9),c=e(33),f=e(47),l=e(49),v=e(48)("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",g="keys",h="values",y=function(){return this};t.exports=function(t,i,e,b,m,_,M){c(e,i,b);var x,k,E,w=function(t){if(!p&&t in A)return A[t];switch(t){case g:return function(){return new e(this,t)};case h:return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=i+" Iterator",N=m==h,S=!1,A=t.prototype,B=A[v]||A[d]||m&&A[m],T=B||w(m),j=m?N?w("entries"):T:void 0,R="Array"==i?A.entries||B:B;if(R&&(E=l(R.call(new t)),E!==Object.prototype&&(f(E,O,!0),n||u(E,v)||s(E,v,y))),N&&B&&B.name!==h&&(S=!0,T=function(){return B.call(this)}),n&&!M||!p&&!S&&A[v]||s(A,v,T),a[i]=T,a[O]=y,m)if(x={values:N?T:w(h),keys:_?T:w(g),entries:j},M)for(k in x)k in A||o(A,k,x[k]);else r(r.P+r.F*(p||S),i,x);return x}},function(t,i){t.exports=!0},function(t,i,e){var n=e(17),r=e(18),o=e(19),s=e(21),u="prototype",a=function(t,i,e){var c,f,l,v=t&a.F,p=t&a.G,d=t&a.S,g=t&a.P,h=t&a.B,y=t&a.W,b=p?r:r[i]||(r[i]={}),m=b[u],_=p?n:d?n[i]:(n[i]||{})[u];p&&(e=i);for(c in e)f=!v&&_&&void 0!==_[c],f&&c in b||(l=f?_[c]:e[c],b[c]=p&&"function"!=typeof _[c]?e[c]:h&&f?o(l,n):y&&_[c]==l?function(t){var i=function(i,e,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(i);case 2:return new t(i,e)}return new t(i,e,n)}return t.apply(this,arguments)};return i[u]=t[u],i}(l):g&&"function"==typeof l?o(Function.call,l):l,g&&((b.virtual||(b.virtual={}))[c]=l,t&a.R&&m&&!m[c]&&s(m,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,i){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,i){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,i,e){var n=e(20);t.exports=function(t,i,e){if(n(t),void 0===i)return t;switch(e){case 1:return function(e){return t.call(i,e)};case 2:return function(e,n){return t.call(i,e,n)};case 3:return function(e,n,r){return t.call(i,e,n,r)}}return function(){return t.apply(i,arguments)}}},function(t,i){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,i,e){var n=e(22),r=e(30);t.exports=e(26)?function(t,i,e){return n.f(t,i,r(1,e))}:function(t,i,e){return t[i]=e,t}},function(t,i,e){var n=e(23),r=e(25),o=e(29),s=Object.defineProperty;i.f=e(26)?Object.defineProperty:function(t,i,e){if(n(t),i=o(i,!0),n(e),r)try{return s(t,i,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[i]=e.value),t}},function(t,i,e){var n=e(24);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,i){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,i,e){t.exports=!e(26)&&!e(27)(function(){return 7!=Object.defineProperty(e(28)("div"),"a",{get:function(){return 7}}).a})},function(t,i,e){t.exports=!e(27)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,i){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,i,e){var n=e(24),r=e(17).document,o=n(r)&&n(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,i,e){var n=e(24);t.exports=function(t,i){if(!n(t))return t;var e,r;if(i&&"function"==typeof(e=t.toString)&&!n(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!n(r=e.call(t)))return r;if(!i&&"function"==typeof(e=t.toString)&&!n(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,i){t.exports=function(t,i){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:i}}},function(t,i,e){t.exports=e(21)},function(t,i){var e={}.hasOwnProperty;t.exports=function(t,i){return e.call(t,i)}},function(t,i,e){"use strict";var n=e(34),r=e(30),o=e(47),s={};e(21)(s,e(48)("iterator"),function(){return this}),t.exports=function(t,i,e){t.prototype=n(s,{next:r(1,e)}),o(t,i+" Iterator")}},function(t,i,e){var n=e(23),r=e(35),o=e(45),s=e(42)("IE_PROTO"),u=function(){},a="prototype",c=function(){var t,i=e(28)("iframe"),n=o.length,r="<",s=">";for(i.style.display="none",e(46).appendChild(i),i.src="javascript:",t=i.contentWindow.document,t.open(),t.write(r+"script"+s+"document.F=Object"+r+"/script"+s),t.close(),c=t.F;n--;)delete c[a][o[n]];return c()};t.exports=Object.create||function(t,i){var e;return null!==t?(u[a]=n(t),e=new u,u[a]=null,e[s]=t):e=c(),void 0===i?e:r(e,i)}},function(t,i,e){var n=e(22),r=e(23),o=e(36);t.exports=e(26)?Object.defineProperties:function(t,i){r(t);for(var e,s=o(i),u=s.length,a=0;u>a;)n.f(t,e=s[a++],i[e]);return t}},function(t,i,e){var n=e(37),r=e(45);t.exports=Object.keys||function(t){return n(t,r)}},function(t,i,e){var n=e(32),r=e(10),o=e(38)(!1),s=e(42)("IE_PROTO");t.exports=function(t,i){var e,u=r(t),a=0,c=[];for(e in u)e!=s&&n(u,e)&&c.push(e);for(;i.length>a;)n(u,e=i[a++])&&(~o(c,e)||c.push(e));return c}},function(t,i,e){var n=e(10),r=e(39),o=e(41);t.exports=function(t){return function(i,e,s){var u,a=n(i),c=r(a.length),f=o(s,c);if(t&&e!=e){for(;c>f;)if(u=a[f++],u!=u)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,i,e){var n=e(40),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},function(t,i){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},function(t,i,e){var n=e(40),r=Math.max,o=Math.min;t.exports=function(t,i){return t=n(t),t<0?r(t+i,0):o(t,i)}},function(t,i,e){var n=e(43)("keys"),r=e(44);t.exports=function(t){return n[t]||(n[t]=r(t))}},function(t,i,e){var n=e(17),r="__core-js_shared__",o=n[r]||(n[r]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,i){var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},function(t,i){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,i,e){t.exports=e(17).document&&document.documentElement},function(t,i,e){var n=e(22).f,r=e(32),o=e(48)("toStringTag");t.exports=function(t,i,e){t&&!r(t=e?t:t.prototype,o)&&n(t,o,{configurable:!0,value:i})}},function(t,i,e){var n=e(43)("wks"),r=e(44),o=e(17).Symbol,s="function"==typeof o,u=t.exports=function(t){return n[t]||(n[t]=s&&o[t]||(s?o:r)("Symbol."+t))};u.store=n},function(t,i,e){var n=e(32),r=e(50),o=e(42)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,i,e){var n=e(13);t.exports=function(t){return Object(n(t))}},function(t,i,e){"use strict";var n=e(52)(!0);e(14)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,i=this._t,e=this._i;return e>=i.length?{value:void 0,done:!0}:(t=n(i,e),this._i+=t.length,{value:t,done:!1})})},function(t,i,e){var n=e(40),r=e(13);t.exports=function(t){return function(i,e){var o,s,u=String(r(i)),a=n(e),c=u.length;return a<0||a>=c?t?"":void 0:(o=u.charCodeAt(a),o<55296||o>56319||a+1===c||(s=u.charCodeAt(a+1))<56320||s>57343?t?u.charAt(a):o:t?u.slice(a,a+2):(o-55296<<10)+(s-56320)+65536)}}},function(t,i,e){var n=e(54),r=e(48)("iterator"),o=e(9);t.exports=e(18).isIterable=function(t){var i=Object(t);return void 0!==i[r]||"@@iterator"in i||o.hasOwnProperty(n(i))}},function(t,i,e){var n=e(12),r=e(48)("toStringTag"),o="Arguments"==n(function(){return arguments}()),s=function(t,i){try{return t[i]}catch(t){}};t.exports=function(t){var i,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=s(i=Object(t),r))?e:o?n(i):"Object"==(u=n(i))&&"function"==typeof i.callee?"Arguments":u}},function(t,i,e){t.exports={default:e(56),__esModule:!0}},function(t,i,e){e(5),e(51),t.exports=e(57)},function(t,i,e){var n=e(23),r=e(58);t.exports=e(18).getIterator=function(t){var i=r(t);if("function"!=typeof i)throw TypeError(t+" is not iterable!");return n(i.call(t))}},function(t,i,e){var n=e(54),r=e(48)("iterator"),o=e(9);t.exports=e(18).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[n(t)]}},function(t,i){"use strict";i.__esModule=!0,i.default=function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}i.__esModule=!0;var r=e(61),o=n(r);i.default=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o.default)(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}()},function(t,i,e){t.exports={default:e(62),__esModule:!0}},function(t,i,e){e(63);var n=e(18).Object;t.exports=function(t,i,e){return n.defineProperty(t,i,e)}},function(t,i,e){var n=e(16);n(n.S+n.F*!e(26),"Object",{defineProperty:e(22).f})},function(t,i,e){"use strict";function n(t,i){return t.precision=r.addition(t.digits,0,t.precision,i.digits,0,i.precision,t.base),t}var r=e(65);i.addition=n},function(t,i,e){"use strict";function n(t,i,e,n,o,s,u){for(var a=0;o<s;){var c=t[i]+n[o++]+a;c<u?a=0:(a=1,c-=u),t[i++]=c}return a>0?r.increment(t,i,e,u):e}var r=e(66);i.addition=n},function(t,i){"use strict";function e(t,i,e,n){for(--n;i<e&&t[i]===n;t[i++]=0);return i===e?t[e++]=1:t[i]=t[i]+1,e}i.increment=e},function(t,i,e){"use strict";function n(t){return t.precision=r.decrement(t.digits,0,t.precision,t.base),t}var r=e(68);i.decrement=n},function(t,i){"use strict";function e(t,i,e,n){for(var r=n-1;0===t[i];t[i++]=r);return t[i]=t[i]-1,i+1===e&&0===t[i]?e-1:e}i.decrement=e},function(t,i,e){"use strict";function n(t){return t.precision=r.double(t.digits,0,t.precision,t.base),t}var r=e(70);i.double=n},function(t,i){"use strict";function e(t,i,e,n){for(var r=0;i<e;){var o=(t[i]<<1)+r;o<n?r=0:(r=1,o-=n),t[i++]=o}return r>0&&(t[i++]=1),i}i.double=e},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){var i=void 0,e=void 0,n=u.halve(t.digits,0,t.precision,t.base),r=(0,s.default)(n,2);return i=r[0],e=r[1],t.precision=i,{base:t.base,digits:0===e?[]:[1],precision:e,isNegative:!1}}var o=e(2),s=n(o),u=e(72);i.halve=r},function(t,i){"use strict";function e(t,i,e,n){for(var r=0,o=e;o-- >i;t[o]=t[o]>>>1)t[o]=t[o]+(n&-r),r=1&t[o];return 0===t[e-1]&&--e,[e,r]}i.halve=e},function(t,i,e){"use strict";function n(t){return t.precision=r.increment(t.digits,0,t.precision,t.base),t}var r=e(66);i.increment=n},function(t,i,e){"use strict";function n(t,i){return t.precision=r.reverseAddition(t.digits,0,t.precision,i.digits,0,i.precision,t.base),t}var r=e(75);i.reverseAddition=n},function(t,i,e){"use strict";function n(t,i,e,n,o,s,u){for(var a=o-i+e,c=a;c<s;t[e++]=n[c++]);return r.addition(t,i,e,n,o,a,u)}var r=e(65);i.reverseAddition=n},function(t,i,e){"use strict";function n(t,i){return t.precision=r.reverseSubtraction(t.digits,0,t.precision,i.digits,0,i.precision,t.base),t}var r=e(77);i.reverseSubtraction=n},function(t,i){"use strict";function e(t,i,e,n,r,o,s){for(var u=0;i<e;){var a=n[r++]-u-t[i];a<0?(u=1,a+=s):u=0,t[i++]=a}if(u>0){for(u=s-1;0===n[r];++r)t[i++]=u;t[i++]=n[r++]-1}if(r<o){do t[i++]=n[r++];while(r<o)}else for(;0===t[i-1];)--i;return i}i.reverseSubtraction=e},function(t,i,e){"use strict";function n(t,i){return t.precision=r.subtraction(t.digits,0,t.precision,i.digits,0,i.precision,t.base),t}var r=e(79);i.subtraction=n},function(t,i,e){"use strict";function n(t,i,e,n,o,s,u){for(var a=i,c=0;o<s;){var f=t[a]-c-n[o++];f<0?(c=1,f+=u):c=0,t[a++]=f}if(c>0)return r.decrement(t,a,e,u);if(a===e){for(;a-- >i&&0===t[a];);e=a+1}return e}var r=e(68);i.subtraction=n},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,i,e,n,r,o,f,l){for(var v=1,p=[1];o+1<f||r[o]>1;){var d=void 0,g=u.halve(r,o,f,l),h=(0,s.default)(g,2);f=h[0],d=h[1],d>0&&(p.length=v+e,v=c.karatsubaMultiplication(p,0,v,t,i,e,n)),e=a.karatsubaSquare(t,i,e,n)}return p.length>1&&(e=c.karatsubaMultiplication(t,i,e,p,0,v,n)),e}var o=e(2),s=n(o),u=e(72),a=e(81),c=e(83);i.exponentiation=r},function(t,i,e){"use strict";function n(t,i,e,u){var a=e-i;if(a<2)return a=t[i]*t[i],a<u?t[e]=0:(t[e++]=0|a/u,a%=u),t[i]=a,e;a=a+1>>>1;var c=i+a,f=new Array(2*a+2);s.copy(f,0,t,i,c);var l=r.addition(f,0,a,t,c,e,u);t[e]=0,s.unsafeShiftUp(t,c,e,a);var v=n(t,i,c,u);s.set(t,v,e,0);var p=c+a;return e=n(t,p,e+a,u),l=n(f,0,l,u),l=o.subtraction(f,0,l,t,i,v,u),l=o.subtraction(f,0,l,t,p,e,u),r.addition(t,c,e,f,0,l,u)}var r=e(65),o=e(79),s=e(82);i.karatsubaSquare=n},function(t,i){"use strict";function e(t,i,e,n){for(var r=i+n;i<e;t[r++]=t[i++]);}function n(t,i,e,n){for(var r=e+n;e>i;t[--r]=t[--e]);}function r(t,i,e,n,r){for(;n<r;)t[i++]=e[n++]}function o(t,i,e,n){for(;i<e;)t[i++]=n}function s(t,i,e){return"["+t.slice(i,e).reverse().join(" ")+"]"}i.unsafeShiftUp=e,i.safeShiftUp=n,i.copy=r,i.set=o,i.print=s},function(t,i,e){"use strict";function n(t,i,e,c,f,l,v){var p=u.max(e-i,l-f);if(p<2)return p=t[i]*c[f],p<v?t[e]=0:(t[e++]=0|p/v,p%=v),t[i]=p,e;p=p+1>>>1;var d=i+p,g=u.min(d,e),h=u.min(f+p,l),y=new Array(h-f+1);a.copy(y,0,c,f,h);var b=r.addition(y,0,h-f,c,h,l,v),m=new Array(g-i+1+b);a.copy(m,0,t,i,g);var _=r.addition(m,0,g-i,t,g,e,v);_=n(m,0,_,y,0,b,v),t[e]=0,a.unsafeShiftUp(t,g,e,p);var M=n(t,i,g,c,f,h,v);if(_=s.subtraction(m,0,_,t,i,M,v),g===e||h===l)return _>M-d?o.reverseAddition(t,d,M,m,0,_,v):r.addition(t,d,M,m,0,_,v);a.set(t,M,e,0);var x=g+p;return e=n(t,x,e+p,c,h,l,v),_=s.subtraction(m,0,_,t,x,e,v),r.addition(t,d,e,m,0,_,v)}var r=e(65),o=e(75),s=e(79),u=e(84),a=e(82);i.karatsubaMultiplication=n},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,i,e,n,r){var o=0,s=new Array(Math.ceil((e-i)*Math.log(n)/Math.log(r)));if(e===i)return[s,o];for(;;){for(var u=0,a=e;a>i;u%=r)u=u*n+t[--a],t[a]=0|u/r;for(s[o++]=u;0===t[e-1];)if(--e===i)return[s,o]}}function o(t,i,e,n,r,o){var s=e-i-o+r;if(0!==s)return s<0?-1:1;for(;e>i;)if(t[--e]!==n[--o])return t[e]<n[o]?-1:1;return 0}function s(t,i){return t<i?i:t}function u(t,i){return t>i?i:t}function a(t){if(t=t.trim(),(0,f.default)(t))throw TypeError("NaN");var i="-"===t[0];t=t.replace(/^[-+]?0+|\.[0-9]+$/gm,"");var e=t.length;if(0===e)return[[],!1];for(var n=new Array(e),r=0,o=e;o>0;++r)n[r]=0|t[--o];return[n,i]}var c=e(85),f=n(c);i.CIPHER=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],i.changeBase=r,i.compare=o,i.max=s,i.min=u,i.strToDecArray=a},function(t,i,e){t.exports={default:e(86),__esModule:!0}},function(t,i,e){e(87),t.exports=e(18).Number.isNaN},function(t,i,e){var n=e(16);n(n.S,"Number",{isNaN:function(t){return t!=t}})},function(t,i,e){"use strict";function n(t,i,e,n,c,f,l){var v=f-c,p=e-i-v,d=new Array(p+1);u.set(d,0,p+1,0);for(var g=e;a.compare(t,i+p,g,n,c,f)>=0;)++d[p],g=s.subtraction(t,i+p,g,n,c,f,l);for(var h=n[f-1],y=n[f-2],b=new Array(v+1),m=e-1,_=p;_-- >0;--m)if(d[_]=r(t[m],t[m-1],t[m-2],h,y,l),0!==d[_]){u.copy(b,0,n,c,f);var M=o.singleDigitMultiplication(b,0,v,d[_],l);a.compare(b,0,M,t,i+_,g)>0&&(--d[_],M=s.subtraction(b,0,M,n,c,f,l)),g=s.subtraction(t,i+_,g,b,0,M,l)}for(;g>i&&0===t[g-1];)--g;return[d,t,0===d[p]?p:p+1,g]}function r(t,i,e,n,r,o){var s=t*o+i,u=s%n;return s=0|s/n,u=u*o-s*r+e,u<0&&(u=u+n*o+r,s=u<0?s-2:s-1),s}var o=e(89),s=e(79),u=e(82),a=e(84);i.basicDivision=n},function(t,i){"use strict";function e(t,i,e,n,r){for(var o=0;i<e;){var s=t[i]*n+o;s<r?o=0:(o=0|s/r,s%=r),t[i++]=s}return o>0&&(t[i++]=o),i}i.singleDigitMultiplication=e},function(t,i){"use strict";function e(t,i,e,n,r){for(var o=0,s=e;s-- >i;o%=n)o=o*r+t[s],t[s]=0|o/n;return 0===t[e-1]&&--e,[e,o]}i.singleDigitDivision=e},function(t,i){"use strict";function e(t){return t.precision=1,t.digits.length=1,t.digits[0]=1,t.isNegative=!1,t}function n(t){return t.precision=0,t.digits.length=0,t.isNegative=!1,t}function r(t,i){return t.base=i.base,t.digits=i.digits,t.precision=i.precision,t.isNegative=i.isNegative,t}function o(t,i){return r(t,i),t.digits=t.digits.slice(0,t.precision),t}i.setOne=e,i.setZero=n,i.share=r,i.copy=o}])});
//# sourceMappingURL=big.js.map