webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(1),u=r(i),o=n(12),a=n(137),s=r(a),l=n(136),f=r(l),c=n(248),d=r(c),h=n(249),m=r(h),g=n(250),v=r(g),y=n(251),p=r(y),b=n(134),E=r(b),w=n(252),_=r(w),M=n(253),q=n(254),x=r(q),S=n(255),O=r(S),N=n(135),j=r(N),I=n(256),B=r(I),P=n(257),A=r(P),R=n(258),T=r(R),U=n(259),L=r(U),z=n(260),Z=r(z),D=n(261),k=(r(D),n(89));r(k);(0,o.render)(u["default"].createElement(s["default"],{metric:d["default"],enforceNumbers:!0,sameDimension:!0}),document.getElementById("canberra-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:v["default"],enforceNumbers:!0,sameDimension:!0}),document.getElementById("cosine-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:m["default"],enforceNumbers:!0,sameDimension:!0}),document.getElementById("chebyshev-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:p["default"],integerResult:!0}),document.getElementById("damerau-levenshtein-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:E["default"]}),document.getElementById("dice-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:_["default"],enforceNumbers:!0,sameDimension:!0}),document.getElementById("euclidean-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:M.distance,integerResult:!0}),document.getElementById("eudex-distance-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:M.isSimilar}),document.getElementById("eudex-similarity-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:w.squared,enforceNumbers:!0,sameDimension:!0}),document.getElementById("euclidean-squared-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:x["default"],integerResult:!0,sameDimension:!0}),document.getElementById("hamming-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:O["default"]}),document.getElementById("jaccard-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:j["default"]}),document.getElementById("jaro-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:B["default"]}),document.getElementById("jaro-winkler-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:A["default"],integerResult:!0}),document.getElementById("levenshtein-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:T["default"],enforceNumbers:!0,sameDimension:!0}),document.getElementById("manhattan-mount")),(0,o.render)(u["default"].createElement(f["default"],{metric:L["default"]}),document.getElementById("mra-mount")),(0,o.render)(u["default"].createElement(s["default"],{metric:Z["default"]}),document.getElementById("overlap-mount"))},5:function(e,t){"use strict";function n(e,t){for(var n=[],r=void 0;r=e.exec(t);)n.push(r);return e.lastIndex=0,n}function r(e){return e.slice().sort(function(e,t){return e-t})}function i(e){return"string"==typeof e?e.split(""):e}function u(e){for(var t="string"==typeof e,n=i(e),r=[n[0]],u=1,o=n.length;u<o;u++)n[u]!==n[u-1]&&r.push(n[u]);return t?r.join(""):r}function o(e,t){var n={};if(e=e.split(""),t=t.split(""),e.length!==t.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var r=0,i=e.length;r<i;r++)n[e[r]]=t[r];return n}function a(e){for(var t=Math.random(),n=e.length,r=0,i=0;i<n;i++)if(r+=e[i],t<=r)return i;return n-1}Object.defineProperty(t,"__esModule",{value:!0}),t.findall=n,t.numericSort=r,t.seq=i,t.squeeze=u,t.translation=o,t.weightedRandomIndex=a},8:function(e,t,n){"use strict";function r(e){return e=u(e),e&&e.replace(o,i).replace(f,"")}var i=n(35),u=n(26),o=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,a="\\u0300-\\u036f\\ufe20-\\ufe23",s="\\u20d0-\\u20f0",l="["+a+s+"]",f=RegExp(l,"g");e.exports=r},20:function(e,t,n){"use strict";var r=n(23),i=r.Symbol;e.exports=i},21:function(e,t,n){"use strict";function r(e){if("string"==typeof e)return e;if(u(e))return s?s.call(e):"";var t=e+"";return"0"==t&&1/e==-o?"-0":t}var i=n(20),u=n(25),o=1/0,a=i?i.prototype:void 0,s=a?a.toString:void 0;e.exports=r},22:function(e,t){(function(t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r="object"==("undefined"==typeof t?"undefined":n(t))&&t&&t.Object===Object&&t;e.exports=r}).call(t,function(){return this}())},23:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},i=n(22),u="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,o=i||u||Function("return this")();e.exports=o},24:function(e,t){"use strict";function n(e){return!!e&&"object"==("undefined"==typeof e?"undefined":r(e))}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};e.exports=n},25:function(e,t,n){"use strict";function r(e){return"symbol"==("undefined"==typeof e?"undefined":i(e))||u(e)&&s.call(e)==o}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=n(24),o="[object Symbol]",a=Object.prototype,s=a.toString;e.exports=r},26:function(e,t,n){"use strict";function r(e){return null==e?"":i(e)}var i=n(21);e.exports=r},34:function(e,t){"use strict";function n(e){return function(t){return null==e?void 0:e[t]}}e.exports=n},35:function(e,t,n){"use strict";var r=n(34),i={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"},u=r(i);e.exports=u},47:function(e,t,n){var r,i,u;(function(e){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};/**
	 * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
	 * Released under the Apache License, Version 2.0
	 * see: https://github.com/dcodeIO/long.js for details
	 */
!function(a,s){n(95).amd?(i=[],r=s,u="function"==typeof r?r.apply(t,i):r,!(void 0!==u&&(e.exports=u))):"object"===o(e)&&e&&e.exports?e.exports=s():(a.dcodeIO=a.dcodeIO||{}).Long=s()}(void 0,function(){function e(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}function t(e){return(e&&e.__isLong__)===!0}function n(e,t){var n,r,u;return t?(e>>>=0,(u=0<=e&&e<256)&&(r=s[e])?r:(n=i(e,(0|e)<0?-1:0,!0),u&&(s[e]=n),n)):(e|=0,(u=-128<=e&&e<128)&&(r=a[e])?r:(n=i(e,e<0?-1:0,!1),u&&(a[e]=n),n))}function r(e,t){if(isNaN(e)||!isFinite(e))return t?v:g;if(t){if(e<0)return v;if(e>=d)return w}else{if(e<=-h)return _;if(e+1>=h)return E}return e<0?r(-e,t).neg():i(e%c|0,e/c|0,t)}function i(t,n,r){return new e(t,n,r)}function u(e,t,n){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return g;if("number"==typeof t?(n=t,t=!1):t=!!t,n=n||10,n<2||36<n)throw RangeError("radix");var i;if((i=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===i)return u(e.substring(1),t,n).neg();for(var o=r(l(n,8)),a=g,s=0;s<e.length;s+=8){var f=Math.min(8,e.length-s),c=parseInt(e.substring(s,s+f),n);if(f<8){var d=r(l(n,f));a=a.mul(d).add(r(c))}else a=a.mul(o),a=a.add(r(c))}return a.unsigned=t,a}function o(t){return t instanceof e?t:"number"==typeof t?r(t):"string"==typeof t?u(t):i(t.low,t.high,t.unsigned)}e.prototype.__isLong__,Object.defineProperty(e.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1}),e.isLong=t;var a={},s={};e.fromInt=n,e.fromNumber=r,e.fromBits=i;var l=Math.pow;e.fromString=u,e.fromValue=o;var f=1<<24,c=4294967296,d=0x10000000000000000,h=d/2,m=n(f),g=n(0);e.ZERO=g;var v=n(0,!0);e.UZERO=v;var y=n(1);e.ONE=y;var p=n(1,!0);e.UONE=p;var b=n(-1);e.NEG_ONE=b;var E=i(-1,2147483647,!1);e.MAX_VALUE=E;var w=i(-1,-1,!0);e.MAX_UNSIGNED_VALUE=w;var _=i(0,-2147483648,!1);e.MIN_VALUE=_;var M=e.prototype;return M.toInt=function(){return this.unsigned?this.low>>>0:this.low},M.toNumber=function(){return this.unsigned?(this.high>>>0)*c+(this.low>>>0):this.high*c+(this.low>>>0)},M.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(_)){var t=r(e),n=this.div(t),i=n.mul(t).sub(this);return n.toString(e)+i.toInt().toString(e)}return"-"+this.neg().toString(e)}for(var u=r(l(e,6),this.unsigned),o=this,a="";;){var s=o.div(u),f=o.sub(s.mul(u)).toInt()>>>0,c=f.toString(e);if(o=s,o.isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}},M.getHighBits=function(){return this.high},M.getHighBitsUnsigned=function(){return this.high>>>0},M.getLowBits=function(){return this.low},M.getLowBitsUnsigned=function(){return this.low>>>0},M.getNumBitsAbs=function(){if(this.isNegative())return this.eq(_)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&0==(e&1<<t);t--);return 0!=this.high?t+33:t+1},M.isZero=function(){return 0===this.high&&0===this.low},M.isNegative=function(){return!this.unsigned&&this.high<0},M.isPositive=function(){return this.unsigned||this.high>=0},M.isOdd=function(){return 1===(1&this.low)},M.isEven=function(){return 0===(1&this.low)},M.equals=function(e){return t(e)||(e=o(e)),(this.unsigned===e.unsigned||this.high>>>31!==1||e.high>>>31!==1)&&(this.high===e.high&&this.low===e.low)},M.eq=M.equals,M.notEquals=function(e){return!this.eq(e)},M.neq=M.notEquals,M.lessThan=function(e){return this.comp(e)<0},M.lt=M.lessThan,M.lessThanOrEqual=function(e){return this.comp(e)<=0},M.lte=M.lessThanOrEqual,M.greaterThan=function(e){return this.comp(e)>0},M.gt=M.greaterThan,M.greaterThanOrEqual=function(e){return this.comp(e)>=0},M.gte=M.greaterThanOrEqual,M.compare=function(e){if(t(e)||(e=o(e)),this.eq(e))return 0;var n=this.isNegative(),r=e.isNegative();return n&&!r?-1:!n&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},M.comp=M.compare,M.negate=function(){return!this.unsigned&&this.eq(_)?_:this.not().add(y)},M.neg=M.negate,M.add=function(e){t(e)||(e=o(e));var n=this.high>>>16,r=65535&this.high,u=this.low>>>16,a=65535&this.low,s=e.high>>>16,l=65535&e.high,f=e.low>>>16,c=65535&e.low,d=0,h=0,m=0,g=0;return g+=a+c,m+=g>>>16,g&=65535,m+=u+f,h+=m>>>16,m&=65535,h+=r+l,d+=h>>>16,h&=65535,d+=n+s,d&=65535,i(m<<16|g,d<<16|h,this.unsigned)},M.subtract=function(e){return t(e)||(e=o(e)),this.add(e.neg())},M.sub=M.subtract,M.multiply=function(e){if(this.isZero())return g;if(t(e)||(e=o(e)),e.isZero())return g;if(this.eq(_))return e.isOdd()?_:g;if(e.eq(_))return this.isOdd()?_:g;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(m)&&e.lt(m))return r(this.toNumber()*e.toNumber(),this.unsigned);var n=this.high>>>16,u=65535&this.high,a=this.low>>>16,s=65535&this.low,l=e.high>>>16,f=65535&e.high,c=e.low>>>16,d=65535&e.low,h=0,v=0,y=0,p=0;return p+=s*d,y+=p>>>16,p&=65535,y+=a*d,v+=y>>>16,y&=65535,y+=s*c,v+=y>>>16,y&=65535,v+=u*d,h+=v>>>16,v&=65535,v+=a*c,h+=v>>>16,v&=65535,v+=s*f,h+=v>>>16,v&=65535,h+=n*d+u*c+a*f+s*l,h&=65535,i(y<<16|p,h<<16|v,this.unsigned)},M.mul=M.multiply,M.divide=function(e){if(t(e)||(e=o(e)),e.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?v:g;var n,i,u;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return v;if(e.gt(this.shru(1)))return p;u=v}else{if(this.eq(_)){if(e.eq(y)||e.eq(b))return _;if(e.eq(_))return y;var a=this.shr(1);return n=a.div(e).shl(1),n.eq(g)?e.isNegative()?y:b:(i=this.sub(e.mul(n)),u=n.add(i.div(e)))}if(e.eq(_))return this.unsigned?v:g;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();u=g}for(i=this;i.gte(e);){n=Math.max(1,Math.floor(i.toNumber()/e.toNumber()));for(var s=Math.ceil(Math.log(n)/Math.LN2),f=s<=48?1:l(2,s-48),c=r(n),d=c.mul(e);d.isNegative()||d.gt(i);)n-=f,c=r(n,this.unsigned),d=c.mul(e);c.isZero()&&(c=y),u=u.add(c),i=i.sub(d)}return u},M.div=M.divide,M.modulo=function(e){return t(e)||(e=o(e)),this.sub(this.div(e).mul(e))},M.mod=M.modulo,M.not=function(){return i(~this.low,~this.high,this.unsigned)},M.and=function(e){return t(e)||(e=o(e)),i(this.low&e.low,this.high&e.high,this.unsigned)},M.or=function(e){return t(e)||(e=o(e)),i(this.low|e.low,this.high|e.high,this.unsigned)},M.xor=function(e){return t(e)||(e=o(e)),i(this.low^e.low,this.high^e.high,this.unsigned)},M.shiftLeft=function(e){return t(e)&&(e=e.toInt()),0===(e&=63)?this:e<32?i(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):i(0,this.low<<e-32,this.unsigned)},M.shl=M.shiftLeft,M.shiftRight=function(e){return t(e)&&(e=e.toInt()),0===(e&=63)?this:e<32?i(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):i(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},M.shr=M.shiftRight,M.shiftRightUnsigned=function(e){if(t(e)&&(e=e.toInt()),e&=63,0===e)return this;var n=this.high;if(e<32){var r=this.low;return i(r>>>e|n<<32-e,n>>>e,this.unsigned)}return 32===e?i(n,0,this.unsigned):i(n>>>e-32,0,this.unsigned)},M.shru=M.shiftRightUnsigned,M.toSigned=function(){return this.unsigned?i(this.low,this.high,!1):this},M.toUnsigned=function(){return this.unsigned?this:i(this.low,this.high,!0)},M.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},M.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24&255,255&e,e>>>8&255,e>>>16&255,e>>>24&255]},M.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24&255,e>>>16&255,e>>>8&255,255&e,t>>>24&255,t>>>16&255,t>>>8&255,255&t]},e})}).call(t,n(94)(e))},88:function(e,t){"use strict";function n(e,t){var n=new Array(e);if(arguments.length>1)for(var r=0;r<e;r++)n[r]=t;return n}function r(e,t){for(var r=e.length,i=n(r),u=0;u<r;u++)i[u]=e[u]+t[u];return i}function i(e,t){for(var r=e.length,i=n(r),u=0;u<r;u++)i[u]=e[u]*t;return i}function u(e){for(var t=n(e[0].length,0),r=0,i=e.length;r<i;r++)for(var u=e[r],o=0,a=u.length;o<a;o++)t[o]+=u[o];for(var s=0,l=t.length;s<l;s++)t[s]/=e.length;return t}function o(e,t){for(var n=0,r=0,i=e.length;r<i;r++)n+=e[r]*t[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.vec=n,t.add=r,t.scale=i,t.mean=u,t.dot=o},89:function(e,t,n){"use strict";function r(e,t){return(0,s.intersection)(e,t).size}function i(e,t){return(0,s.difference)(e,t).size}function u(e,t,n,u){var o=r(e,t);return o/(o+n*i(e,t)+u*i(t,e))}function o(e,t,n,u){var o=r(e,t),a=i(e,t),s=i(t,e),l=Math.min(a,s),f=Math.max(a,s);return o/(o+u*(n*l+Math.pow(n-1,f)))}function a(e,t,n){e=e||{};var r=e,i=r.alpha,a=void 0===i?1:i,s=r.beta,f=void 0===s?1:s,c=r.symmetric,d=void 0!==c&&c;if(a<0||f<0)throw Error("talisman/metrics/distance/tversky: alpha & beta parameters should be >= 0.");return t=new Set((0,l.seq)(t)),n=new Set((0,l.seq)(n)),d?o(t,n,a,f):u(t,n,a,f)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var s=n(133),l=n(5)},90:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){var t=l(e),n=t.length>0?(32|t[0])-g&255:0,r=0;n<c?r=h[n]:n>=223&&n<255&&(r=m[n-223]),r=new o["default"](r);for(var i=o["default"].UZERO,u=0,a=1;u<8&&a<t.length;){if(n=(32|t[a])-g&255,n<=v){var s=void 0;if(n<c)s=f[n];else{if(!(n>=223&&n<255))continue;s=d[n-223]}i.and(254).equals(254&s)||(i=i.shiftLeft(8),i=i.or(s),u++)}a++}return i.or(r.shiftLeft(56))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var u=n(47),o=r(u),a=function(e){return"string"==typeof e?parseInt(e,2):e},s=function(e){return e.charCodeAt(0)},l=function(e){return e.split("").map(s)},f=["0","01001000","00001100","00011000","0","01000100","00001000","00000100","1","00000101","00001001","10100000","00000010","00010010","0","01001001","10101000","10100001","00010100","00011101","1","01000101","00000000","10000100","1","10010100"].map(a),c=f.length,d=[1^f[s("s")-s("a")],"0","0","0","0","0","1","0",1^f[s("z")-s("a")],"1","1","1","1","1","1","1","1","00010101","00010111","0","0","0","0","1","1","1","1","1","1","1","1","00010101","1"].map(a),h=["10000100","00100100","00000110","00001100","11011000","00100010","00000100","00000010","11111000","00000011","00000101","01010000","00000001","00001001","10010100","00100101","01010100","01010001","00001010","00001110","11100000","00100011","00000000","01000010","11100100","01001010"].map(a),m=[1^h[s("s")-s("a")],1^h[s("a")-s("a")],1^h[s("a")-s("a")],"10000000","10000110","10100110","11000010","10100111","01010100",1^h[s("e")-s("a")],1^h[s("e")-s("a")],1^h[s("e")-s("a")],"11000110",1^h[s("i")-s("a")],1^h[s("i")-s("a")],1^h[s("i")-s("a")],1^h[s("i")-s("a")],"00001011","00001011",1^h[s("o")-s("a")],1^h[s("o")-s("a")],1^h[s("o")-s("a")],1^h[s("o")-s("a")],"11011100","1","11011101",1^h[s("u")-s("a")],1^h[s("u")-s("a")],1^h[s("u")-s("a")],1^h[s("y")-s("a")],1^h[s("y")-s("a")],"00001011",1^h[s("y")-s("a")]].map(a),g=s("a"),v=s("z")},91:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if("string"!=typeof e)throw Error("talisman/phonetics/mra: the given name is not a string.");var t=(0,a["default"])(e).toUpperCase().replace(/[^A-Z]/g,"");t=t.charAt(0)+t.slice(1).replace(/[AEIOU]/g,""),t=(0,u.squeeze)(t);var n=Math.min(3,t.length-3);return t.slice(0,3)+t.substr(t.length-n,n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var u=n(5),o=n(8),a=r(o)},94:function(e,t){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},95:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},133:function(e,t){"use strict";e.exports.intersection=function(e,t){var n=new Set;return e&&t&&(t.has||(t=new Set(t)),e.forEach(function(e){t.has(e)&&n.add(e)})),n},e.exports.union=function(e,t){var n=new Set(e);return t&&t.forEach(function(e){n.add(e)}),n},e.exports.difference=function(e,t){if(!t)return new Set(e);var n=new Set;return e&&(t.has||(t=new Set(t)),e.forEach(function(e){t.has(e)||n.add(e)})),n};var n={};e.exports.isEqual=function(e,t){if(e===t)return!0;if(!e&&!t)return!0;if(!e||!t)return!1;if(e.has||(e=new Set(e)),t.has||(t=new Set(t)),e.size!=t.size)return!1;try{e.forEach(function(e){if(!t.has(e))throw n})}catch(r){if(r===n)return!1;throw r}return!0},e.exports.add=e.exports.union,e.exports.subtract=e.exports.difference},134:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=t.similarity=t.coefficient=t.index=void 0;var i=n(89),u=r(i),o=n(283),a=function(e){return e.join("")},s=function(e,t){return e===t?1:1===e.length&&1===t.length&&e!==t?0:(e=(0,o.bigrams)(e,a),t=(0,o.bigrams)(t,a),(0,u["default"])({alpha:.5,beta:.5},e,t))},l=function(e,t){return 1-s(e,t)};t["default"]=s,t.index=s,t.coefficient=s,t.similarity=s,t.distance=l},135:function(e,t,n){"use strict";function r(e,t){if(e===t)return 1;e=(0,i.seq)(e),t=(0,i.seq)(t);var n=void 0,r=void 0;e.length>t.length?(n=e,r=t):(n=t,r=e);for(var o=Math.max((n.length/2|0)-1,0),a=(0,u.vec)(r.length,-1),s=(0,u.vec)(n.length,!1),l=0,f=0,c=r.length;f<c;f++)for(var d=r[f],h=Math.max(f-o,0),m=Math.min(f+o+1,n.length),g=h,v=m;g<v;g++)if(!s[g]&&d===n[g]){a[f]=g,s[g]=!0,l++;break}var y=new Array(l),p=new Array(l),b=void 0;b=0;for(var E=0,w=r.length;E<w;E++)a[E]!==-1&&(y[b]=r[E],b++);b=0;for(var _=0,M=n.length;_<M;_++)s[_]&&(p[b]=n[_],b++);for(var q=0,x=0,S=y.length;x<S;x++)y[x]!==p[x]&&q++;if(!l)return 0;var O=q/2|0,N=l;return(N/e.length+N/t.length+(N-O)/N)/3}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=t.similarity=void 0,t["default"]=r;var i=n(5),u=n(88),o=function(e,t){return 1-r(e,t)};t.similarity=r,t.distance=o},136:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=r(i),o=n(11),a=n(10),s=r(a),l=(0,o.compose)((0,o.withState)("sequenceOne","setSequenceOne",""),(0,o.withState)("sequenceTwo","setSequenceTwo","")),f=l(function(e){var t=e.metric,n=e.sequenceOne,r=e.sequenceTwo,i=e.setSequenceOne,o=e.setSequenceTwo,a=n.split(/,\s*/),l=r.split(/,\s*/),f=null;1===a.length&&1===l.length&&(a=a[0],l=l[0]),n&&r&&(f=t(a,l));var c="default";return f&&(c=f.matching?"success":"error"),u["default"].createElement("div",null,u["default"].createElement("table",null,u["default"].createElement("tbody",null,u["default"].createElement("tr",null,u["default"].createElement("td",null,u["default"].createElement(s["default"],{placeholder:"Name 1",value:n,onChange:function(e){return i(e.target.value)},status:c})),u["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},u["default"].createElement("strong",null,"·")),u["default"].createElement("td",null,u["default"].createElement(s["default"],{placeholder:"Name 2",value:r,onChange:function(e){return o(e.target.value)},status:c}))))),u["default"].createElement("p",null,u["default"].createElement("div",null,u["default"].createElement("strong",null,"Minimum:")," ",f?f.minimum:"",u["default"].createElement("br",null),u["default"].createElement("strong",null,"Similarity:")," ",f?f.similarity:"",u["default"].createElement("br",null),u["default"].createElement("strong",null,"Codex:")," ",f?"["+f.codex[0]+", "+f.codex[1]+"]":"",u["default"].createElement("br",null),u["default"].createElement("strong",null,"Matching:")," ",f?""+f.matching:"")))});t["default"]=f},137:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=r(i),o=n(11),a=n(10),s=r(a),l=function(e){return isNaN(+e)},f=(0,o.compose)((0,o.withState)("sequenceOne","setSequenceOne",""),(0,o.withState)("sequenceTwo","setSequenceTwo","")),c=f(function(e){var t=e.metric,n=e.sequenceOne,r=e.sequenceTwo,i=e.setSequenceOne,o=e.setSequenceTwo,a=e.integerResult,f=void 0!==a&&a,c=e.sameDimension,d=void 0!==c&&c,h=e.enforceNumbers,m=void 0!==h&&h,g=n.split(/,\s*/),v=r.split(/,\s*/),y="~",p=null;return 1===g.length&&1===v.length&&(g=g[0],v=v[0]),d&&g.length!==v.length&&(p=u["default"].createElement("span",{className:"error"},"The compared vectors are not of the same dimension.")),m&&([].concat(g).some(l)||[].concat(v).some(l))&&(p=u["default"].createElement("span",{className:"error"},"This algorithm only accepts numbers.")),!p&&n&&r&&(y=t(g,v),f||"number"!=typeof y||1===y||(y=y.toFixed(2)),"boolean"==typeof y&&(y=""+y)),u["default"].createElement("div",null,u["default"].createElement("table",null,u["default"].createElement("tbody",null,u["default"].createElement("tr",null,u["default"].createElement("td",null,u["default"].createElement(s["default"],{placeholder:"Sequence 1",value:n,onChange:function(e){return i(e.target.value)},status:"default"})),u["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},u["default"].createElement("strong",null,y)),u["default"].createElement("td",null,u["default"].createElement(s["default"],{placeholder:"Sequence 2",value:r,onChange:function(e){return o(e.target.value)},status:"default"}))))),u["default"].createElement("div",null,p," "))});t["default"]=c},248:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)throw Error("talisman/metrics/distance/canberra: the given vectors are not of the same dimension.");for(var n=0,r=0,i=e.length;r<i;r++)n+=Math.abs(e[r]-t[r])/(Math.abs(e[r])+Math.abs(t[r]));return n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},249:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)throw Error("talisman/metrics/distance/chebyshev: the given vectors are not of the same dimension.");for(var n=0,r=0,i=e.length;r<i;r++)n=Math.max(n,Math.abs(e[r]-t[r]));return n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},250:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)throw Error("talisman/metrics/distance/cosine: the given vectors are not of the same dimension.");for(var n=0,r=0,i=0,u=0,o=e.length;u<o;u++){var a=e[u],s=t[u];n+=a*a,i+=s*s,r+=a*s}return r/Math.sqrt(n*i)}function r(e,t){return 1-n(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,t.distance=r,t.similarity=n},251:function(e,t){"use strict";function n(e,t){if(e===t)return 0;var n=e.length,r=t.length;if(!n)return r;if(!r)return n;if(n>r){var i=[t,e];e=i[0],t=i[1];var u=[r,n];n=u[0],r=u[1]}for(;n>0&&e[n-1]===t[r-1];)n--,r--;var o=0;if(e[0]===t[0]||!n){for(;o<n&&e[o]===t[o];)o++;if(n-=o,r-=o,!n)return r;t=t.substr(o,r)}for(var a=new Array(r),s=new Array(r),l=0;l<r;l++)a[l]=l+1;for(var f=e[0],c=0,d=0;d<n;d++){var h=f,m=0,g=t[0],v=d;c=d+1,f=e[o+d];for(var y=0;y<r;y++){var p=c,b=g,E=m;g=t[y],m=s[y],s[y]=c=v,v=a[y],f!==g&&(v<c&&(c=v),p<c&&(c=p),c++,0!==d&&0!==y&&f===b&&g===h&&(E++,E<c&&(c=E))),a[y]=c}}return c}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},252:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)throw Error("talisman/metrics/distance/euclidean: the given vectors are not of the same dimension.");for(var n=0,r=0,i=e.length;r<i;r++)n+=Math.pow(e[r]-t[r],2);return n}function r(e,t){return Math.sqrt(n(e,t))}Object.defineProperty(t,"__esModule",{value:!0}),t.squared=n,t["default"]=r},253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){return new f["default"]((e.toString(2).match(/1/g)||[]).length)}function u(e,t){for(var n=(0,s["default"])(e).xor((0,s["default"])(t)),r=i(n.and(255)),u=[i(n.shiftRight(8).and(255)).mul(2),i(n.shiftRight(16).and(255)).mul(4),i(n.shiftRight(24).and(255)).mul(8),i(n.shiftRight(32).and(255)).mul(16),i(n.shiftRight(40).and(255)).mul(32),i(n.shiftRight(48).and(255)).mul(64),i(n.shiftRight(56).and(255)).mul(128)],o=0,a=u.length;o<a;o++)r=r.add(u[o]);return r.low}function o(e,t){return u(e,t)<10}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=u,t.isSimilar=o;var a=n(90),s=r(a),l=n(47),f=r(l)},254:function(e,t,n){"use strict";function r(e,t){if(e===t)return 0;if(e=(0,i.seq)(e),t=(0,i.seq)(t),e.length!==t.length)throw Error("talisman/metrics/distance/hamming: given sequences are not of equal length.");for(var n=0,r=0,u=e.length;r<u;r++)e[r]!==t[r]&&n++;return n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(5)},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=t.similarity=t.index=void 0;var i=n(89),u=r(i),o=function(e,t){return e===t?1:(0,u["default"])({alpha:1,beta:1},e,t)},a=function(e,t){return 1-o(e,t)};t["default"]=o,t.index=o,t.similarity=o,t.distance=a},256:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t,n){e=e||{};var r=e,i=r.boostThreshold,u=void 0===i?.7:i,s=r.scalingFactor,l=void 0===s?.1:s;if(l>.25)throw Error("talisman/metrics/distance/jaro-winkler: the scaling factor should not exceed 0.25.");if(u<0||u>1)throw Error("talisman/metrics/distance/jaro-winkler: the boost threshold should be comprised between 0 and 1.");if(t===n)return 1;t=(0,a.seq)(t),n=(0,a.seq)(n);for(var f=Math.max(t.length,n.length),c=Math.min(t.length,n.length),d=0,h=0,m=c;h<m&&t[h]===n[h];h++)d++;var g=(0,o["default"])(t,n);return g<u?g:g+Math.min(l,f)*d*(1-g)}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=t.similarity=t.custom=void 0;var u=n(135),o=r(u),a=n(5),s=i.bind(null,null),l=function(e,t){return 1-s(e,t)};t["default"]=s,t.custom=i,t.similarity=s,t.distance=l},257:function(e,t){"use strict";function n(e,t){if(e===t)return 0;if(!e.length)return t.length;if(!t.length)return e.length;for(var n=new Array(t.length+1),r=0,i=n.length;r<i;r++)n[r]=r;for(var u=void 0,o=void 0,a=void 0,s=void 0,l=0,f=e.length;l<f;l++){u=l+1;var c=t.length;for(s=0;s<c;s++)o=u,u=n[s]+(e[l]===t[s]?0:1),a=o+1,u>a&&(u=a),a=n[s+1]+1,u>a&&(u=a),n[s]=o;n[s]=u}return u}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,t.distance=n},258:function(e,t){"use strict";function n(e,t){if(e.length!==t.length)throw Error("talisman/metrics/distance/manhattan: the given vectors are not of the same dimension.");for(var n=0,r=0,i=e.length;r<i;r++)n+=Math.abs(e[r]-t[r]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},259:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){return e.split("").reverse().join("")}function u(e,t){if("string"!=typeof e||"string"!=typeof t)throw Error("talisman/metrics/distance/mra: given names should be strings.");var n=(0,a["default"])(e),r=(0,a["default"])(t);if(Math.abs(n.length-r.length)>3)return null;var u=n.length+r.length,o=2;u<=4&&(o=5),u>4&&u<=7&&(o=4),u>7&&u<=11&&(o=3);for(var s="",l="",f=0,c=Math.max(n.length,r.length);f<c;f++)n[f]!==r[f]&&(s+=n[f]?n[f]:"",l+=r[f]?r[f]:"");s=i(s),l=i(l);for(var d="",h="",m=0,g=Math.max(s.length,l.length);m<g;m++)s[m]!==l[m]&&(d+=s[m]?s[m]:"",h+=l[m]?l[m]:"");var v=Math.max(d.length,h.length),y=6-v,p=y>=o;return{codex:[n,r],minimum:o,similarity:y,matching:p}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var o=n(91),a=r(o)},260:function(e,t,n){"use strict";function r(e,t){if(e===t)return 1;e=new Set((0,u.seq)(e)),t=new Set((0,u.seq)(t));var n=(0,i.intersection)(e,t);return n.size/Math.min(e.size,t.size)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(133),u=n(5)},261:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.distance=t.similarity=t.coefficient=t.index=void 0;var i=n(134),u=r(i);t["default"]=u["default"],t.index=u["default"],t.coefficient=u["default"],t.similarity=u["default"],t.distance=i.distance},283:function(e,t,n){"use strict";function r(e,t,n){if(e<1)throw Error("talisman/stats/ngrams: first argument should be a positive integer > 0.");t=(0,i.seq)(t),n="function"==typeof n?n:u;for(var r=[],o=0,a=t.length;o<a-e+1;o++){for(var s=[],l=0;l<e;l++)s.push(t[o+l]);r.push(n(s))}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.quadrigrams=t.trigrams=t.bigrams=void 0,t["default"]=r;var i=n(5),u=function(e){return e},o=r.bind(null,2),a=r.bind(null,3),s=r.bind(null,4);t.bigrams=o,t.trigrams=a,t.quadrigrams=s}});