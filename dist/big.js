!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Big=e():t.Big=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=n(1);e.Mint=i.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(2),o=i(r),u=n(59),s=i(u),a=n(62),f=i(a),c=n(63),l=i(c),g=n(67),v=n(68),d=n(69),h=n(70),p=n(71),y=n(72),b=n(73),_=n(75),M=n(76),m=n(78),x=n(77),O=n(74),k=function(){function t(e){if((0,f.default)(this,t),t.isBigMint(e))this._assign(e);else if(O.isNumber(e))this.convertNumber(e);else{if(!O.isString(e))throw TypeError("Expecting type BigMint | string | number");this.convertString(e)}}return(0,l.default)(t,[{key:"convertNumber",value:function(e){var n=this.base=t.DEFAULT_BASE;if(e>>>1===0)return void(0===e?this.toZero():(this.toOne(),e<0&&(this.isNegative=!0)));e=(this.isNegative=e<0)?-e:e;for(var i=Math.ceil(Math.log(e)/Math.log(n)),r=new Array(i),o=0;0!=e;++o)r[o]=e%n,e=(e-r[o])/n;this.digits=i,this.integer=r}},{key:"convertString",value:function(e){if(e=e.trim(),(0,s.default)(e))throw TypeError("NaN");this.isNegative="-"===e[0],e=e.replace(/^[-+]?0+|\.[0-9]+$/gm,""),this.base=10,this.digits=e.length;for(var n=this.integer=new Array(this.digits),i=0,r=this.digits;r>0;n[i++]=0|e[--r]);this.toBase(t.DEFAULT_BASE)}},{key:"abs",value:function(){return this.isNegative=!1,this}},{key:"signum",value:function(){return this.isNegative?-1:0===this.digits?0:1}},{key:"clone",value:function(){return new t(this)}},{key:"tryClone",value:function(e){return t.isBigMint(e)?e.clone():new t(e)}},{key:"copy",value:function(t){return this.isNegative=t.isNegative,this.integer=t.integer,this.digits=t.digits,this.base=t.base,this}},{key:"assign",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._assign(t.toBigMint(e),n)}},{key:"_assign",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.base,i=this.copy(t);return i.integer=i.integer.slice(0),e&&i.base!==n&&i.toBase(n),i}},{key:"toZero",value:function(){return this.isNegative=!1,this.integer=[],this.digits=0,this}},{key:"toOne",value:function(){return this.isNegative=!1,this.integer=[1],this.digits=1,this}},{key:"getBase",value:function(){return this.base}},{key:"setBase",value:function(e){if(e|=0,this.base===e)return this;if(e<t.MIN_BASE)throw RangeError(e+" < BigMint.MIN_BASE ("+t.MIN_BASE+")");if(e>t.MAX_BASE)throw RangeError(e+" > BigMint.MAX_BASE ("+t.MAX_BASE+")");return this.toBase(e)}},{key:"toBase",value:function(t){for(var e=this,n=e.integer,i=e.base,r=e.digits,o=new Array(Math.ceil(r*Math.log(i)/Math.log(t))),u=0,s=r;s>0;++u){for(var a=0,f=s;f-- >0;a%=t)a=a*i+n[f],n[f]=a<t?0:0|a/t;for(o[u]=a;n[s-1]<1;--s);}return o.length=u,e.base=t,e.digits=u,e.integer=o,e}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.base,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.CIPHER,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(this.base!==t)return this.setBase(t).toString(t,e,n);if((null===e||e instanceof Array&&t>e.length)&&!function(){var n=new Array((""+(t-1)).length+1).join("0");e=function(t,e,i){var r=""+t;return e+1===i?r:n.substring(r.length)+r}}(),0===this.digits)return e instanceof Array?e[0]:e(0,0,0);var i=void 0,r=this.integer;if(e instanceof Array){i=e[r[0]];for(var o=1,u=this.digits;o<u;i=e[r[o++]]+n+i);}else{i=e(r[0],0,this.digits);for(var s=1,a=this.digits;s<a;++s)i=e(r[s],s,a)+n+i}return this.isNegative&&(i="-"+i),i}},{key:"lt",value:function(t){return this.compareTo(t)<0}},{key:"lessThan",value:function(t){return this.lt(t)}},{key:"lteq",value:function(t){return this.compareTo(t)<=0}},{key:"lessThanEquals",value:function(t){return this.lteq(t)}},{key:"eq",value:function(t){return 0===this.compareTo(t)}},{key:"equals",value:function(t){return this.eq(t)}},{key:"gteq",value:function(t){return this.compareTo(t)>=0}},{key:"greaterThanEquals",value:function(t){return this.gteq(t)}},{key:"gt",value:function(t){return this.compareTo(t)>0}},{key:"greaterThan",value:function(t){return this.gt(t)}},{key:"compareTo",value:function(e){var n=this,i=t.toBigMint(e);if(n===i)return 0;if(n.isNegative!==i.isNegative)return n.isNegative?-1:1;if(n.digits<2&&i.digits<2)return n.digits!==i.digits?n.digits<i.digits?-1:1:0===n.digits||n.integer[0]===i.integer[0]?0:n.integer[0]<i.integer[0]?-1:1;if(n.base===i.base)return O.compare(n.integer,0,n.digits,i.integer,0,i.digits);var r=-1;if(n.base>i.base){var o=n;n=i,i=o,r=1}var u=Math.log(n.base)/Math.log(i.base);return i.digits<Math.ceil(n.digits*u)?-r:i.digits>Math.ceil((n.digits+1)*u)?r:(n=n.clone().toBase(i.base),r*O.compare(n.integer,0,n.digits,i.integer,0,i.digits))}},{key:"isOdd",value:function(){return!this.isEven()}},{key:"isEven",value:function(){if(0===this.digits)return!0;if(0===(1&this.base))return 0===(1&this.integer[0]);for(var t=0,e=this.integer,n=0,i=this.digits;n<i;t^=e[n++]);return 0===(1&t)}},{key:"gcd",value:function(e){var n=this;if(n===e)return n.abs();var i=t.toBigMint(e);if(0===i.digits)return n.abs();if(0===n.digits){var r=n.base;return n._assign(i),r!==n.base&&n.toBase(r),n.abs()}return i=e===i?i.clone():i,n.base!==i.base&&i.toBase(n.base),i=n._gcd(i),n===i?n:n._assign(i)}},{key:"_gcd",value:function(e){for(var n=this,i=t.ONE;n.isEven()&&e.isEven();)n._half(),e._half(),i.double();for(;n.isEven();)n._half();do{for(;e.isEven();)e._half();e.subtract(n).abs()}while(0!==e.digits);return n.multiply(i)}},{key:"lcm",value:function(e){var n=this,i=t.toBigMint(e);if(n===i)return n;if(0===n.digits||0===i.digits)return n.toZero();if(1===i.digits&&1===i.integer[0])return n.abs();if(1===n.digits&&1===n.integer[0]){var r=n.base;return n._assign(i),r!==n.base&&n.toBase(r),n.abs()}return n.divide(n.gcd(i)).multiply(i).abs()}},{key:"add",value:function(e){var n=this;if(n===e)return n.double();var i=t.toBigMint(e);return 0===i.digits?n:0===n.digits?n._assign(i,!0):(n.base!==i.base&&(i=e===i?i.clone():i,i.toBase(n.base)),n.isNegative!==i.isNegative?n.negate().subtract(i).negate():(n.integer.length=n.digits=(n.digits<i.digits?v.default:g.default)(n.integer,0,n.digits,i.integer,0,i.digits,n.base),n))}},{key:"divide",value:function(t){return this.divideAndRemainder(t)[0]}},{key:"divideAndRemainder",value:function(e){var n=this,i=t.toBigMint(e);if(0===i.digits)throw EvalError("Divide by Zero");if(n===i)return[n.toOne(),t.ZERO];if(0===n.digits)return[n,t.ZERO];if(n.isNegative=n.isNegative!==i.isNegative,1===i.digits&&i.integer[0]<3)return 1===i.integer[0]?[n,t.ZERO]:n.half();if(n.base!==i.base){var r=Math.log(i.base)/Math.log(n.base);if(n.digits<Math.ceil(i.digits*r)){var u=t.ZERO.copy(n);return[n.toZero(),u]}i=e===i?i.clone():i,i.toBase(n.base)}if(n.digits<i.digits){var s=t.ZERO.copy(n);return[n.toZero(),s]}var a=t.ZERO,f=i.digits<2?m.default(n.integer,n.digits,i.integer[0],n.base):M.default(n.integer,n.digits,i.integer,i.digits,n.base),c=(0,o.default)(f,4);return n.integer=c[0],a.integer=c[1],n.digits=c[2],a.digits=c[3],n.integer.length=n.digits,a.integer.length=a.digits,[n,a]}},{key:"double",value:function(){return 0===this.digits?this:(this.integer.length=this.digits=d.default(this.integer,this.digits,this.base),this)}},{key:"half",value:function(){if(0===this.digits)return[this,t.ZERO];var e=this._half();return[this,0===e?t.ZERO:t.ONE]}},{key:"_half",value:function(){var t=void 0,e=h.default(this.integer,this.digits,this.base,this.isNegative),n=(0,o.default)(e,2);return this.digits=n[0],t=n[1],this.integer.length=this.digits,t}},{key:"multiply",value:function(e){var n=this;if(n===e)return n.square();if(0===n.digits)return n;var i=t.toBigMint(e);if(0===i.digits)return n.toZero();if(n.isNegative=n.isNegative!==i.isNegative,n.base!==i.base&&(i=e===i?i.clone():i,i.toBase(n.base)),1===i.digits)return n.digits=x.default(n.integer,0,n.digits,i.integer[0],n.base),n;if(1===n.digits){var r=n.integer[0];return n.integer=i.integer.slice(0),n.digits=x.default(n.integer,0,i.digits,r,n.base),n}return n.integer.length=n.digits+i.digits,n.integer.length=n.digits=_.default(n.integer,n.digits,i.integer,i.digits,n.base),n}},{key:"negate",value:function(){return this.isNegative=0!==this.digits&&this.isNegative===!1,this}},{key:"plus",value:function(t){return this.add(t)}},{key:"pow",value:function(e){var n=this,i=t.toBigMint(e);return 0===i.digits?n.toOne():i.isNegative?n.toZero():0===n.digits?n:(n.isNegative&&i.isEven()&&(n.isNegative=!1),1===n.digits&&1===n.integer[0]?n:n._pow(e===i?i.clone():i))}},{key:"_pow",value:function(t){var e=this;if(1===t.digits&&1===t.integer[0])return e;if(t._half()>0){var n=e.clone();return e.square()._pow(t).multiply(n)}return e.square()._pow(t)}},{key:"remainder",value:function(t){return this.divideAndRemainder(t)[1]}},{key:"square",value:function(){var t=this;if(0===t.digits)return t;if(t.isNegative&&(t.isNegative=!1),1===t.digits){if(1===t.integer[0])return t;if(2===t.integer[0])return t.double()}return t.integer.length=2*t.digits,t.integer.length=t.digits=b.default(t.integer,t.digits,t.base),t}},{key:"subtract",value:function(e){var n=this;if(n===e)return n.toZero();var i=t.toBigMint(e);if(0===i.digits)return n;if(0===n.digits)return n._assign(i,!0).negate();if(n.base!==i.base&&(i=e===i?i.clone():i,i.toBase(n.base)),n.isNegative!==i.isNegative)return n.negate().add(i).negate();var r=n.compareTo(i);return 0===r?n.toZero():(r<0?(n.negate(),n.integer.length=n.digits=y.default(n.integer,0,n.digits,i.integer,0,i.digits,n.base)):n.integer.length=n.digits=p.default(n.integer,0,n.digits,i.integer,0,i.digits,n.base),n)}}],[{key:"isBigMint",value:function(e){return e instanceof t}},{key:"toBigMint",value:function(e){return t.isBigMint(e)?e:new t(e)}},{key:"min",value:function(e,n){var i=t.toBigMint(e),r=t.toBigMint(n);return i.compareTo(r)>0?i:r}},{key:"max",value:function(e,n){var i=t.toBigMint(e),r=t.toBigMint(n);return i.compareTo(r)<0?r:i}},{key:"MINUS_ONE",get:function(){return new t(-1)}},{key:"ZERO",get:function(){return new t(0)}},{key:"ONE",get:function(){return new t(1)}}]),t}();k.MIN_BASE=2,k.MAX_BASE=94906265,k.DEFAULT_BASE=94906264,k.MAX_DIGITS=4294967295,Object.defineProperty(e,"__esModule",{value:!0}),e.default=k},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(3),o=i(r),u=n(55),s=i(u);e.default=function(){function t(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var u,a=(0,s.default)(t);!(i=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{!i&&a.return&&a.return()}finally{if(r)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,o.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){t.exports={default:n(4),__esModule:!0}},function(t,e,n){n(5),n(51),t.exports=n(53)},function(t,e,n){n(6);for(var i=n(17),r=n(21),o=n(9),u=n(48)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var f=s[a],c=i[f],l=c&&c.prototype;l&&!l[u]&&r(l,u,f),o[f]=o.Array}},function(t,e,n){"use strict";var i=n(7),r=n(8),o=n(9),u=n(10);t.exports=n(14)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports={}},function(t,e,n){var i=n(11),r=n(13);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(12);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var i=n(15),r=n(16),o=n(31),u=n(21),s=n(32),a=n(9),f=n(33),c=n(47),l=n(49),g=n(48)("iterator"),v=!([].keys&&"next"in[].keys()),d="@@iterator",h="keys",p="values",y=function(){return this};t.exports=function(t,e,n,b,_,M,m){f(n,e,b);var x,O,k,w=function(t){if(!v&&t in S)return S[t];switch(t){case h:return function(){return new n(this,t)};case p:return function(){return new n(this,t)}}return function(){return new n(this,t)}},E=e+" Iterator",N=_==p,B=!1,S=t.prototype,A=S[g]||S[d]||_&&S[_],j=A||w(_),T=_?N?w("entries"):j:void 0,P="Array"==e?S.entries||A:A;if(P&&(k=l(P.call(new t)),k!==Object.prototype&&(c(k,E,!0),i||s(k,g)||u(k,g,y))),N&&A&&A.name!==p&&(B=!0,j=function(){return A.call(this)}),i&&!m||!v&&!B&&S[g]||u(S,g,j),a[e]=j,a[E]=y,_)if(x={values:N?j:w(p),keys:M?j:w(h),entries:T},m)for(O in x)O in S||o(S,O,x[O]);else r(r.P+r.F*(v||B),e,x);return x}},function(t,e){t.exports=!0},function(t,e,n){var i=n(17),r=n(18),o=n(19),u=n(21),s="prototype",a=function(t,e,n){var f,c,l,g=t&a.F,v=t&a.G,d=t&a.S,h=t&a.P,p=t&a.B,y=t&a.W,b=v?r:r[e]||(r[e]={}),_=b[s],M=v?i:d?i[e]:(i[e]||{})[s];v&&(n=e);for(f in n)c=!g&&M&&void 0!==M[f],c&&f in b||(l=c?M[f]:n[f],b[f]=v&&"function"!=typeof M[f]?n[f]:p&&c?o(l,i):y&&M[f]==l?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[s]=t[s],e}(l):h&&"function"==typeof l?o(Function.call,l):l,h&&((b.virtual||(b.virtual={}))[f]=l,t&a.R&&_&&!_[f]&&u(_,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(20);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(22),r=n(30);t.exports=n(26)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(23),r=n(25),o=n(29),u=Object.defineProperty;e.f=n(26)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(24);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(26)&&!n(27)(function(){return 7!=Object.defineProperty(n(28)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(27)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(24),r=n(17).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){var i=n(24);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=n(21)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){"use strict";var i=n(34),r=n(30),o=n(47),u={};n(21)(u,n(48)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(u,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var i=n(23),r=n(35),o=n(45),u=n(42)("IE_PROTO"),s=function(){},a="prototype",f=function(){var t,e=n(28)("iframe"),i=o.length,r="<",u=">";for(e.style.display="none",n(46).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(r+"script"+u+"document.F=Object"+r+"/script"+u),t.close(),f=t.F;i--;)delete f[a][o[i]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[a]=i(t),n=new s,s[a]=null,n[u]=t):n=f(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(22),r=n(23),o=n(36);t.exports=n(26)?Object.defineProperties:function(t,e){r(t);for(var n,u=o(e),s=u.length,a=0;s>a;)i.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var i=n(37),r=n(45);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e,n){var i=n(32),r=n(10),o=n(38)(!1),u=n(42)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),a=0,f=[];for(n in s)n!=u&&i(s,n)&&f.push(n);for(;e.length>a;)i(s,n=e[a++])&&(~o(f,n)||f.push(n));return f}},function(t,e,n){var i=n(10),r=n(39),o=n(41);t.exports=function(t){return function(e,n,u){var s,a=i(e),f=r(a.length),c=o(u,f);if(t&&n!=n){for(;f>c;)if(s=a[c++],s!=s)return!0}else for(;f>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var i=n(40),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(40),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(43)("keys"),r=n(44);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(17),r="__core-js_shared__",o=i[r]||(i[r]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){t.exports=n(17).document&&document.documentElement},function(t,e,n){var i=n(22).f,r=n(32),o=n(48)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(43)("wks"),r=n(44),o=n(17).Symbol,u="function"==typeof o,s=t.exports=function(t){return i[t]||(i[t]=u&&o[t]||(u?o:r)("Symbol."+t))};s.store=i},function(t,e,n){var i=n(32),r=n(50),o=n(42)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var i=n(13);t.exports=function(t){return Object(i(t))}},function(t,e,n){"use strict";var i=n(52)(!0);n(14)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var i=n(40),r=n(13);t.exports=function(t){return function(e,n){var o,u,s=String(r(e)),a=i(n),f=s.length;return a<0||a>=f?t?"":void 0:(o=s.charCodeAt(a),o<55296||o>56319||a+1===f||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):o:t?s.slice(a,a+2):(o-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var i=n(54),r=n(48)("iterator"),o=n(9);t.exports=n(18).isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||o.hasOwnProperty(i(e))}},function(t,e,n){var i=n(12),r=n(48)("toStringTag"),o="Arguments"==i(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),r))?n:o?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){t.exports={default:n(56),__esModule:!0}},function(t,e,n){n(5),n(51),t.exports=n(57)},function(t,e,n){var i=n(23),r=n(58);t.exports=n(18).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},function(t,e,n){var i=n(54),r=n(48)("iterator"),o=n(9);t.exports=n(18).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){n(61),t.exports=n(18).Number.isNaN},function(t,e,n){var i=n(16);i(i.S,"Number",{isNaN:function(t){return t!=t}})},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(64),o=i(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},function(t,e,n){t.exports={default:n(65),__esModule:!0}},function(t,e,n){n(66);var i=n(18).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(16);i(i.S+i.F*!n(26),"Object",{defineProperty:n(22).f})},function(t,e){"use strict";function n(t,e,n,i,r,o,u){for(var s=0;r<o;++e,++r)t[e]=t[e]+i[r]+s,t[e]<u?s=0:(t[e]=t[e]-u,s=1);if(s>0){for(s=u-1;e<n&&t[e]===s;t[e++]=0);e===n?t[n++]=1:t[e]=t[e]+1}return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,n){"use strict";function i(t,e,n,i,o,u,s){for(var a=o-e+n,f=a;f<u;t[n++]=i[f++]);return r.default(t,e,n,i,o,a,s)}var r=n(67);Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e){"use strict";function n(t,e,n){for(var i=0,r=0;r<e;++r)t[r]=(t[r]<<1)+i,t[r]<n?i=0:(i=1,t[r]=t[r]-n);return i>0&&(t[e++]=1),e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t,e,n,i){for(var r=0,o=e;o-- >0;t[o]=t[o]>>>1)t[o]=t[o]+(n&-r),r=1&t[o];if(0!==r&&i){var u=0;for(--n;t[u]===n;t[u++]=0);t[u]=t[u]+1}return[0===t[e-1]?e-1:e,r]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t,e,n,i,r,o,u){for(var s=e,a=0;r<o;++s,++r)t[s]=t[s]-a-i[r],t[s]<0?(t[s]=t[s]+u,a=1):a=0;if(a>0){for(a=u-1;0===t[s];t[s++]=a);t[s]=t[s]-1,++s}if(s===n)for(;n>e&&0===t[n-1];--n);return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t,e,n,i,r,o,u){for(var s=0;e<n;++e){var a=i[r++]-s-t[e];a<0?(a+=u,s=1):s=0,t[e]=a}if(s>0){for(s=u-1;0===i[r];++r)t[e++]=s;t[e++]=i[r++]-1}if(r<o){do t[e++]=i[r++];while(r<o)}else for(;0===t[e-1];)--e;return e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,n){"use strict";function i(t,e,n){return r(t,0,e,n)}function r(t,e,n,i){var a=n-e;if(a<2)return a=t[e]*t[e],a<i?t[n]=0:(t[n++]=0|a/i,a%=i),t[e]=a,n;a=a+1>>>1;var f=e+a,c=new Array(2*a+2);o.copy(c,0,t,e,f);var l=u.default(c,0,a,t,f,n,i);t[n]=0,o.basicShiftUp(t,f,n,a);var g=r(t,e,f,i);o.zero(t,g,n);var v=f+a;return n=r(t,v,n+a,i),l=r(c,0,l,i),l=s.default(c,0,l,t,e,g,i),l=s.default(c,0,l,t,v,n,i),u.default(t,f,n,c,0,l,i)}var o=n(74),u=n(67),s=n(71);Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e){"use strict";function n(t,e,n,i){for(var r=e+i;e<n;t[r++]=t[e++]);}function i(t,e,n,i){for(var r=n+i;n>e;t[--r]=t[--n]);}function r(t,e,n,i){for(var r=e-i;e<n;t[r++]=t[e++]);}function o(t,e,n){for(;e<n;)t[e++]=0}function u(t,e,n,i,r){for(;i<r;)t[e++]=n[i++]}function s(t,e,n,i,r){var o="";for(null==i&&(i=r=n,n=e);e<n;o=" "+t[e++]+o);for(o=" ]"+o;e<i;o=" "+t[e++]+o);for(o=" ["+o;e<r;o=" "+t[e++]+o);return o}function a(t,e){return t>e?e:t}function f(t,e){return t<e?e:t}function c(t){return"number"==typeof t}function l(t){return"string"==typeof t}function g(t,e,n,i,r,o){var u=n-e-o+r;if(0!==u)return u<0?-1:1;for(;n>e;)if(t[--n]!==i[--o])return t[n]<i[o]?-1:1;return 0}e.CIPHER=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],e.basicShiftUp=n,e.reverseShiftUp=i,e.basicShiftDown=r,e.zero=o,e.copy=u,e.print=s,e.min=a,e.max=f,e.isNumber=c,e.isString=l,e.compare=g},function(t,e,n){"use strict";function i(t,e,n,i,o){return r(t,0,e,n,0,i,o)}function r(t,e,n,i,f,c,l){var g=o.max(n-e,c-f);if(g<2)return g=t[e]*i[f],g<l?t[n]=0:(t[n++]=0|g/l,g%=l),t[e]=g,n;g=g+1>>>1;var v=e+g,d=o.min(v,n),h=o.min(f+g,c),p=new Array(h-f+1);o.copy(p,0,i,f,h);var y=s.default(p,0,h-f,i,h,c,l),b=new Array(d-e+1+y);o.copy(b,0,t,e,d);var _=s.default(b,0,d-e,t,d,n,l);_=r(b,0,_,p,0,y,l),t[n]=0,o.basicShiftUp(t,d,n,g);var M=r(t,e,d,i,f,h,l);if(_=a.default(b,0,_,t,e,M,l),d===n||h===c)return _>M-v?u.default(t,v,M,b,0,_,l):s.default(t,v,M,b,0,_,l);o.zero(t,M,n);var m=d+g;return n=r(t,m,n+g,i,h,c,l),_=a.default(b,0,_,t,m,n,l),s.default(t,v,n,b,0,_,l)}var o=n(74),u=n(68),s=n(67),a=n(71);Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e,n){"use strict";function i(t,e,n,i,a){var f=e-i,c=new Array(f+1);for(o.zero(c,0,f+1);o.compare(t,f,e,n,0,i)>=0;)++c[f],e=u.default(t,f,e,n,0,i,a);for(var l=new Array(i+1),g=i-1,v=g+f;v>g;--v){var d=v-g-1;c[d]=r(t[v],t[v-1],t[v-2],n[g],n[g-1],a);var h=0===c[d]?0:s.default(n,0,i,c[d],a,l,0);for(o.compare(l,0,h,t,d,e)>0&&(--c[d],h=u.default(l,0,h,n,0,i,a)),e=u.default(t,d,e,l,0,h,a);e>0&&0===t[e-1];)--e}return[c,t,0===c[f]?f:f+1,e]}function r(t,e,n,i,r,o){var u=t*o+e,s=u%i;return u=0|u/i,s=s*o-u*r+n,s<0&&(s=s+i*o+r,u=s<0?u-2:u-1),u}var o=n(74),u=n(71),s=n(77);Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e){"use strict";function n(t,e,n,i,r){for(var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:t,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e,s=0;e<n;){var a=t[e++]*i+s;a<r?s=0:(s=0|a/r,a%=r),o[u++]=a}return s>0&&(o[u++]=s),u}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e){"use strict";function n(t,e,n,i){for(var r=0,o=e;o-- >0;t[o]=0|t[o]/n)t[o]=t[o]+r*i,r=t[o]%n;return[t,[r],0===t[e-1]?e-1:e,0===r?0:1]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}])});