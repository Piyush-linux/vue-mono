(function(e){function t(t){for(var r,u,a=t[0],i=t[1],b=t[2],d=0,s=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&s.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(s.length)s.shift()();return o.push.apply(o,b||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var b=0;b<a.length;b++)t(a[b]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"150b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,o,u){var a=Object(r["l"])("Com1");return Object(r["i"])(),Object(r["c"])("div",null,[Object(r["f"])(a)])}function o(e,t,n,c,o,u){var a=Object(r["l"])("Com2");return Object(r["i"])(),Object(r["c"])("div",null,[Object(r["f"])(a)])}function u(e,t,n,c,o,u){var a=Object(r["l"])("Com3");return Object(r["i"])(),Object(r["c"])("div",null,[Object(r["f"])(a)])}function a(e,t,n,c,o,u){var a=Object(r["l"])("Counter"),i=Object(r["l"])("History");return Object(r["i"])(),Object(r["c"])("div",null,[Object(r["f"])(a),Object(r["f"])(i)])}var i=Object(r["d"])("h1",{class:"title"},[Object(r["e"])("M "),Object(r["d"])("span",{class:"blue"},"O"),Object(r["e"])(" N "),Object(r["d"])("span",{class:"blue"},"O")],-1),b={class:"box"},l={class:"counter"},d={class:"grp"};function s(e,t,n,c,o,u){return Object(r["i"])(),Object(r["c"])("div",null,[i,Object(r["d"])("div",b,[Object(r["d"])("h2",l,Object(r["m"])(e.counter),1)]),Object(r["d"])("div",d,[Object(r["d"])("button",{class:"button button-primary",onClick:t[0]||(t[0]=function(t){return e.subCounter(o.value)})},"-"),Object(r["q"])(Object(r["d"])("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.value=e})},null,512),[[r["n"],o.value]]),Object(r["d"])("button",{class:"button button-primary",onClick:t[2]||(t[2]=function(t){return e.addCounter(o.value)})},"+")]),Object(r["d"])("button",{class:"button",onClick:t[3]||(t[3]=function(){return e.addRandomNumber&&e.addRandomNumber.apply(e,arguments)})},"add Randomly ")])}var O=n("5530"),j=n("5502"),p={name:"Counter",data:function(){return{value:0}},computed:Object(O["a"])({},Object(j["e"])(["counter"])),methods:Object(O["a"])(Object(O["a"])({},Object(j["d"])(["addCounter","subCounter"])),Object(j["b"])(["addRandomNumber"]))},f=n("6b0d"),m=n.n(f);const v=m()(p,[["render",s]]);var h=v,y=(n("caad"),n("2532"),{class:"history"}),C=Object(r["d"])("h3",null,"H I S T O R Y",-1),g={class:"container"},w={class:"flex"};function x(e,t,n,c,o,u){var a=Object(r["l"])("center");return Object(r["i"])(),Object(r["c"])("div",y,[C,Object(r["d"])("div",g,[Object(r["d"])("div",w,[(Object(r["i"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(e.history,(function(t,n){return Object(r["i"])(),Object(r["c"])("p",{key:n,class:Object(r["h"])(e.activeIndex(o.value).includes(n)&&"bold")},Object(r["m"])(t),3)})),128))]),Object(r["f"])(a,null,{default:Object(r["p"])((function(){return[Object(r["q"])(Object(r["d"])("input",{type:"number",class:"input","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.value=e})},null,512),[[r["n"],o.value]])]})),_:1})])])}var k={name:"History",data:function(){return{value:0,active:0}},computed:Object(O["a"])(Object(O["a"])({},Object(j["e"])(["history"])),Object(j["c"])(["activeIndex"]))};const R=m()(k,[["render",x]]);var _=R,P={name:"Com3",components:{Counter:h,History:_}};const M=m()(P,[["render",a]]);var S=M,N={name:"Com2",components:{Com3:S}};const H=m()(N,[["render",u]]);var I=H,T={name:"Com1",components:{Com2:I}};const q=m()(T,[["render",o]]);var J=q,U={name:"App",components:{Com1:J}};const V=m()(U,[["render",c]]);var A=V,E=n("1da1"),Y=(n("96cf"),n("b65f"),n("d3b7"),n("159b"),n("bc3a")),z=n.n(Y),B=Object(j["a"])({state:{counter:0,history:[0]},mutations:{addCounter:function(e,t){e.counter+=t,e.history.push(e.counter)},subCounter:function(e,t){e.counter-=t,e.history.push(e.counter)}},actions:{addRandomNumber:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z.a.get("https://random-data-api.com/api/number/random_number");case 2:n=t.sent,r=Math.trunc(n.data.decimal),e.commit("addCounter",r),console.log(r);case 6:case"end":return t.stop()}}),t)})))()}},getters:{activeIndex:function(e){return function(t){var n=[];return e.history.forEach((function(e,r){e==t&&n.push(r)})),n}}},modules:{}});n("150b");Object(r["b"])(A).use(B).mount("#app")}});
//# sourceMappingURL=app.71b64526.js.map