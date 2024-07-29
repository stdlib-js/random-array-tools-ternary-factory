// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-method-in@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import{factory as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-array-tools-ternary@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/random-array-tools-nullary@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function p(p,j,u){var c;if(!s(p))throw new TypeError(f("1ql3c",p));if(!i(p,"factory"))throw new TypeError(f("1qlFM","factory"));if(!r(j))throw new TypeError(f("1qlFN",j));if(!d(j,u))throw new TypeError(f("1qlFO",u));return c=d(j),function(){var r,s,i,d,g,v,y,b,x,w,L;y=arguments.length,y<1?(x={},b=p,w=N):1===y?(x=arguments[0],b=p.factory(x),w=N):3===y?(i=arguments[0],d=arguments[1],g=arguments[2],x={},b=p.factory(i,d,g),w=G):(i=arguments[0],d=arguments[1],g=arguments[2],x=arguments[3],b=p.factory(i,d,g,x),w=G);if(o(x,"dtype")){if(L=x.dtype,!c(L))throw new TypeError(f("1ql4S","dtype",j.join('", "'),L))}else L=u;w===N?(v=function(t,e,n,r){return s.assign(t,e,n,r)},r=a):(v=function(t){return s.assign(t)},r=h);s=new r(b,j,L),x&&x.prng?(n(w,"seed",null),n(w,"seedLength",null),t(w,"state",l(null),m),n(w,"stateLength",null),n(w,"byteLength",null)):(e(w,"seed",(function(){return w.PRNG.seed})),e(w,"seedLength",(function(){return w.PRNG.seedLength})),t(w,"state",(function(){return w.PRNG.state}),(function(t){w.PRNG.state=t})),e(w,"stateLength",(function(){return w.PRNG.stateLength})),e(w,"byteLength",(function(){return w.PRNG.byteLength})));return n(w,"PRNG",b.PRNG),n(w,"assign",v),w;function N(t,e,n,r,i){return arguments.length<5?s.generate(t,e,n,r):s.generate(t,e,n,r,i)}function G(t,e){return arguments.length<2?s.generate(t):s.generate(t,e)}}}export{p as default};
//# sourceMappingURL=index.mjs.map
