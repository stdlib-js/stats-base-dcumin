"use strict";var c=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var d=c(function(F,x){
var m=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-assert-is-negative-zero/dist');function E(e,i,s,f,a,t,q){var r,o,u,n,v;if(e<=0)return a;if(o=f,u=q,r=i[o],a[u]=r,u+=t,v=1,m(r)===!1)for(v;v<e;v++){if(o+=s,n=i[o],m(n)){r=n;break}(n<r||n===r&&k(n))&&(r=n),a[u]=r,u+=t}if(m(r))for(v;v<e;v++)a[u]=r,u+=t;return a}x.exports=E
});var y=c(function(G,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),O=d();function Z(e,i,s,f,a){var t=j(e,s),q=j(e,a);return O(e,i,s,t,f,a,q)}l.exports=Z
});var b=c(function(H,_){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),w=d();h(R,"ndarray",w);_.exports=R
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=b(),p,g=A(z(__dirname,"./native.js"));B(g)?p=C:p=g;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
