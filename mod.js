// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function t(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,a,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(a=e.arg,s=parseInt(a,10),!isFinite(s)){if(!i(a))throw new Error("invalid integer. Value: "+a);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(a=(-s).toString(r),e.precision&&(a=t(a,e.precision,e.padRight)),a="-"+a):(a=s.toString(r),s||e.precision?e.precision&&(a=t(a,e.precision,e.padRight)):a="",e.sign&&(a=e.sign+a)),16===r&&(e.alternate&&(a="0x"+a),a=e.specifier===o.call(e.specifier)?o.call(a):n.call(a)),8===r&&e.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function y(e){var r,a,t=parseFloat(e.arg);if(!isFinite(t)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+a);t=e.arg}switch(e.specifier){case"e":case"E":a=t.toExponential(e.precision);break;case"f":case"F":a=t.toFixed(e.precision);break;case"g":case"G":c(t)<1e-4?((r=e.precision)>0&&(r-=1),a=t.toExponential(r)):a=t.toPrecision(e.precision),e.alternate||(a=f.call(a,v,"$1e"),a=f.call(a,b,"e"),a=f.call(a,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=f.call(a,u,"e+0$1"),a=f.call(a,g,"e-0$1"),e.alternate&&(a=f.call(a,d,"$1."),a=f.call(a,h,"$1.e")),t>=0&&e.sign&&(a=e.sign+a),a=e.specifier===l.call(e.specifier)?l.call(a):p.call(a)}function m(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var _=String.fromCharCode,k=isNaN,E=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,i,a,n,o,c,p,l,f,u,g,d,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,l=0;l<e.length;l++)if(a=e[l],"string"==typeof a)c+=a;else{if(r=void 0!==a.precision,!(a=x(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+a+"`.");for(a.mapping&&(p=a.mapping),i=a.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[p],10),p+=1,k(a.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[p],10),p+=1,k(a.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[p],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=s(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!k(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=k(o)?String(a.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=y(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=(u=a.arg,g=a.width,d=a.padRight,h=void 0,(h=g-u.length)<0?u:u=d?u+m(h):m(h)+u)),c+=a.arg||"",p+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function j(e){var r,i,a,t;for(i=[],t=0,a=S.exec(e);a;)(r=e.slice(t,S.lastIndex-a[0].length)).length&&i.push(r),i.push(V(a)),t=S.lastIndex,a=S.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function F(e){var r,i;if("string"!=typeof e)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[j(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return I.apply(null,r)}var T,$=Object.prototype,A=$.toString,C=$.__defineGetter__,N=$.__defineSetter__,R=$.__lookupGetter__,G=$.__lookupSetter__;T=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var a,t,n,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===A.call(i))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((t="value"in i)&&(R.call(e,r)||G.call(e,r)?(a=e.__proto__,e.__proto__=$,delete e[r],e[r]=i.value,e.__proto__=a):e[r]=i.value),n="get"in i,o="set"in i,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&C&&C.call(e,r,i.get),o&&N&&N.call(e,r,i.set),e};var O=T;function P(e){return e!=e}var Z=Number.NEGATIVE_INFINITY;function W(e){return 0===e&&1/e===Z}function L(e,r,i,a,t){var n,o,s,c,p;if(e<=0)return a;if(s=t<0?(1-e)*t:0,n=r[o=i<0?(1-e)*i:0],a[s]=n,s+=t,p=1,!1===P(n))for(;p<e;p++){if(P(c=r[o+=i])){n=c;break}(c<n||c===n&&W(c))&&(n=c),a[s]=n,s+=t}if(P(n))for(;p<e;p++)a[s]=n,s+=t;return a}function U(e,r,i,a,t,n,o){var s,c,p,l,f;if(e<=0)return t;if(p=o,s=r[c=a],t[p]=s,p+=n,f=1,!1===P(s))for(;f<e;f++){if(P(l=r[c+=i])){s=l;break}(l<s||l===s&&W(l))&&(s=l),t[p]=s,p+=n}if(P(s))for(;f<e;f++)t[p]=s,p+=n;return t}O(L,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:U});export{L as default,U as ndarray};
//# sourceMappingURL=mod.js.map
