!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o){let t=document.querySelector(".door"),n=document.querySelector(".door-text"),r=document.querySelector(".background"),i=document.querySelector(".foreground"),u=(document.querySelector(".introduction"),document.querySelector(".nav-bar"));document.body.style.backgroundImage;function c(e){switch(e){case"in":r.classList.add("show");break;case"out":r.classList.remove("show");break;default:console.log("direction must be in or out")}}function l(e){i.style.animation=`transition ${e}s 1 linear`,i.addEventListener("animationend",()=>{i.style.animation="none"})}window.onbeforeunload=()=>{window.scrollTo(0,0)},t.addEventListener("mouseover",()=>{c("in"),n.setAttribute("class","door-text-animation"),t.style.animation="door-hover 8s infinite alternate none ease-in-out"}),t.addEventListener("click",()=>{c("out"),l(1),window.scroll({top:2717,behavior:"smooth"})}),window.addEventListener("scroll",()=>{console.log(scrollY),scrollY>2350&&scrollY<2800&&(!function(e){document.body.style.backgroundImage=`url(${e})`,c("in")}("./docs/img/textures/background-morning.png"),u.classList.add("show"))}),document.querySelector(".about").addEventListener("click",()=>{l(.6),window.scrollTo({top:5215,behavior:"smooth"})})}]);