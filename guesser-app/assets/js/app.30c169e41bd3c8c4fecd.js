!function(e){function t(t){for(var o,a,u=t[0],i=t[1],l=t[2],d=0,f=[];d<u.length;d++)a=u[d],r[a]&&f.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={0:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;c.push([15,1]),n()}([,,,function(e,t){},function(e,t){window.onload=function(){var e=1,t=10,n=g(e,t),o=3,r=document.querySelector(".min"),c=document.querySelector(".max"),a=document.querySelector("#guesse-input"),u=document.querySelector("#guesse-btn"),i=document.querySelector("#message"),l=document.querySelector(".save"),s=document.querySelector(".game-container"),d=document.querySelector(".overlay"),f=document.querySelector(".showSettings"),p=document.querySelector(".setting");function y(e,t){i.textContent=e,i.style.color=t}function v(e,t){var n=!0===e?"green":"red";a.disabled=!0,a.style.borderColor=n,i.style.color=n,y(t),u.value="Новая игра",u.className+="play-again"}function m(e){e?(s.style.opacity="0.2",d.style.display="block",p.classList.add("show")):(s.style.opacity="1",d.style.display="none",p.classList.remove("show"))}function g(e,t){return Math.floor(Math.random()*(t-e+1))+e}r.textContent=e,c.textContent=t,u.addEventListener("click",function(r){var c=parseInt(a.value);a.value="",isNaN(c)||c<e||c>t?y("Число должно быть в интервале от ".concat(e," до ").concat(t),"red"):c==n?v(!0,"Вы угадали, ПОЗДРАВЛЯЕМ!!!"):0===(o-=1)?v(!1,"Вы проиграли, нужным числом было ".concat(n)):(a.style.borderColor="red",y("Число ".concat(c," не правильное, осталось ").concat(o," попыток"),"red"))}),s.addEventListener("mousedown",function(e){e.target.classList.contains("play-again")&&(message.style.display="none",window.location.reload())}),f.addEventListener("click",function(e){m(!0)}),document.body.addEventListener("click",function(e){e.target.classList.contains("overlay")&&m(!1)}),l.addEventListener("click",function(a){e=parseInt(document.querySelector("#setmin").value)||e,t=parseInt(document.querySelector("#setmax").value)||t,o=parseInt(document.querySelector("#setn").value)||o,n=g(e,t),r.textContent=e,c.textContent=t,m(!1)})}},function(e,t,n){var o=n(6);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){},,function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var o=function(){var e=this.$createElement;return(this._self._c||e)("div")};o._withStripped=!0;var r={name:"App",data:function(){return{}}},c=n(2),a=Object(c.a)(r,o,[],!1,null,null,null);a.options.__file="src/components/App.vue";t.default=a.exports},function(e,t,n){"use strict";n.r(t);n(3),n(4),n(5),n(8);window.Vue=n(10),Vue.component("app-component",n(14).default);new Vue({el:"#app",data:function(){return{}}})}]);