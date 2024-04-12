// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.2.1-esm/index.mjs";function s(r,s,i,n,a){var f,d,o,m,l;if(r<=0)return n;if(o=a<0?(1-r)*a:0,f=s[d=i<0?(1-r)*i:0],n[o]=f,o+=a,l=1,!1===e(f))for(;l<r;l++){if(m=s[d+=i],e(m)){f=m;break}(m<f||m===f&&t(m))&&(f=m),n[o]=f,o+=a}if(e(f))for(;l<r;l++)n[o]=f,o+=a;return n}function i(r,s,i,n,a,f,d){var o,m,l,j,p;if(r<=0)return a;if(l=d,o=s[m=n],a[l]=o,l+=f,p=1,!1===e(o))for(;p<r;p++){if(j=s[m+=i],e(j)){o=j;break}(j<o||j===o&&t(j))&&(o=j),a[l]=o,l+=f}if(e(o))for(;p<r;p++)a[l]=o,l+=f;return a}r(s,"ndarray",i);export{s as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
