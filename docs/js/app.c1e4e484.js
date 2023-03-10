(function(){"use strict";var n={126:function(n,t,e){var o=e(963),r=e(252),u=e(577);function i(n,t,e,i,a,l){const c=(0,r.up)("CompLevel1"),s=(0,r.up)("TodoList"),d=(0,r.up)("ProductStatus"),m=(0,r.up)("FeeStatus"),v=(0,r.up)("SavingStatus");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c),(0,r._)("button",{onClick:t[0]||(t[0]=n=>a.activeTab="Menu1")},"menu1"),(0,r._)("button",{onClick:t[1]||(t[1]=n=>a.activeTab="Menu2")},"menu2"),(0,r._)("button",{onClick:t[2]||(t[2]=n=>a.activeTab="Menu3")},"menu3"),((0,r.wg)(),(0,r.j4)((0,r.LL)(a.activeTab))),(0,r.Wm)(s),(0,r.Wm)(d),(0,r.Wm)(m),(0,r.Wm)(v),(0,r._)("div",null,[(0,r.Uk)(" price "),(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=n=>i.price=n)},null,512),[[o.nr,i.price]]),(0,r.Uk)(" amount "),(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=n=>i.amount=n)},null,512),[[o.nr,i.amount]]),(0,r._)("h3",null,"total price :: "+(0,u.zw)(i.totalPrice),1)]),(0,r._)("h3",null,"full name :: "+(0,u.zw)(i.fullName),1)])}var a=e(262);function l(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h2",null,"합산된 요금: "+(0,u.zw)(n.totalMoney),1),(0,r._)("button",{onClick:t[0]||(t[0]=t=>n.addMoney(50))},"50"),(0,r._)("button",{onClick:t[1]||(t[1]=t=>n.addMoney(100))},"100"),(0,r._)("button",{onClick:t[2]||(t[2]=t=>n.addMoney(150))},"150"),(0,r._)("button",{onClick:t[3]||(t[3]=t=>n.addMoney(200))},"200")])}var c={data(){return{totalMoney:0}},methods:{addMoney(n){this.totalMoney+=n}}},s={name:"FeeStatus",mixins:[c],data(){return{}},methods:{}},d=e(744);const m=(0,d.Z)(s,[["render",l]]);var v=m;function p(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h2",null,"총 적금: "+(0,u.zw)(n.totalMoney),1),(0,r._)("button",{onClick:t[0]||(t[0]=t=>n.addMoney(50))},"50"),(0,r._)("button",{onClick:t[1]||(t[1]=t=>n.addMoney(100))},"100"),(0,r._)("button",{onClick:t[2]||(t[2]=t=>n.addMoney(150))},"150"),(0,r._)("button",{onClick:t[3]||(t[3]=t=>n.addMoney(200))},"200")])}var f={name:"SavingStatus",data(){return{}},mixins:[c],methods:{}};const h=(0,d.Z)(f,[["render",p]]);var g=h;function y(n,t,e,o,i,a){const l=(0,r.up)("FeeStatusVue");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h2",null,"전체 금액: "+(0,u.zw)(n.totalMoney),1),(0,r._)("div",null,[(0,r._)("button",{onClick:t[0]||(t[0]=t=>n.addMoney(100))},"100"),(0,r._)("button",{onClick:t[1]||(t[1]=t=>n.addMoney(200))},"200"),(0,r._)("button",{onClick:t[2]||(t[2]=t=>n.addMoney(300))},"300")]),(0,r.Wm)(l)])}var _={name:"productStatus",data(){return{}},mixins:[c],methods:{},componenets:{}};const b=(0,d.Z)(_,[["render",y]]);var w=b;const M=(0,r._)("div",null,"TodoList",-1),k=(0,r._)("div",null,null,-1),C={key:0};function L(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[M,(0,r._)("button",{onClick:t[0]||(t[0]=(...n)=>a.getTodoList&&a.getTodoList(...n))},"Request Todo"),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.todoList,(n=>((0,r.wg)(),(0,r.iD)("li",{key:n.id},(0,u.zw)(n.title),1)))),128))]),k,i.errorMessage?((0,r.wg)(),(0,r.iD)("p",C,(0,u.zw)(i.errorMessage),1)):(0,r.kq)("",!0)],64)}var D=e(154),T={name:"TodoList",data(){return{todoList:[],errorMessage:""}},methods:{getTodoList(){const n="https://jsonplaceholder.typicode.com/todos";D.Z.get(n).then((n=>this.todoList=n.data)).catch((()=>{this.errorMessage="에러가 발생했음!!"}))}}};const S=(0,d.Z)(T,[["render",L]]);var j=S;const Z=(0,r._)("h2",null,"menu-1",-1),O=[Z];function z(n,t,e,o,u,i){return(0,r.wg)(),(0,r.iD)("div",null,O)}var W={name:"menu-1"};const x=(0,d.Z)(W,[["render",z]]);var F=x;const P=(0,r._)("h2",null,"menu-2",-1),H=[P];function N(n,t,e,o,u,i){return(0,r.wg)(),(0,r.iD)("div",null,H)}var U={name:"menu-2"};const Y=(0,d.Z)(U,[["render",N]]);var q=Y;const V=(0,r._)("h2",null,"menu-3",-1),A=[V];function K(n,t,e,o,u,i){return(0,r.wg)(),(0,r.iD)("div",null,A)}var $={name:"menu-3"};const B=(0,d.Z)($,[["render",K]]);var E=B;const R=(0,r._)("h2",null,"component 1",-1);function G(n,t,e,o,u,i){const a=(0,r.up)("CompLevel2");return(0,r.wg)(),(0,r.iD)("div",null,[R,(0,r.Wm)(a)])}const I=(0,r._)("h2",null,"component 2",-1);function J(n,t,e,o,u,i){const a=(0,r.up)("CompLevel3");return(0,r.wg)(),(0,r.iD)("div",null,[I,(0,r.Wm)(a)])}const Q=(0,r._)("div",null,"CompLevel3",-1);function X(n,t,e,o,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[Q,(0,r._)("h3",null,"passd Data from App ="+(0,u.zw)(a.name),1)],64)}var nn={name:"comp-3",inject:["name"]};const tn=(0,d.Z)(nn,[["render",X]]);var en=tn,on={name:"comp-2",components:{CompLevel3:en}};const rn=(0,d.Z)(on,[["render",J]]);var un=rn,an={name:"comp-1",components:{CompLevel2:un}};const ln=(0,d.Z)(an,[["render",G]]);var cn=ln,sn={name:"App",setup(){const n=(0,a.iH)("jin"),t=(0,a.iH)(5e3),e=(0,a.iH)(1),o=(0,r.Fl)((()=>t.value+e.value)),u=(0,a.qj)({first:"code",last:"jin"}),i=(0,r.Fl)((function(){return`${u.first} ${u.last}`}));return(0,r.YP)((()=>u.first),((n,t)=>{console.log(n,t)})),{username:n,price:t,amount:e,totalPrice:o,...(0,a.BK)(u),fullName:i}},data(){return{money:0,userName:"kim",displayDetail:!1,activeTab:"Menu1"}},components:{CompLevel1:cn,Menu1:F,Menu2:q,Menu3:E,TodoList:j,ProductStatus:w,FeeStatus:v,SavingStatus:g},methods:{close(){this.displayDetail=!1}},provide(){return{name:this.userName}},watch:{userName:{handler(n){console.log(n)},deep:!0},money(n,t){console.log(t),n>2e3&&n>t&&console.log("mossion good"),t<1500&&n<t&&console.log("save good")}}};const dn=(0,d.Z)(sn,[["render",i]]);var mn=dn;(0,o.ri)(mn).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return n[o](u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,u){if(!o){var i=1/0;for(s=0;s<n.length;s++){o=n[s][0],r=n[s][1],u=n[s][2];for(var a=!0,l=0;l<o.length;l++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](o[l])}))?o.splice(l--,1):(a=!1,u<i&&(i=u));if(a){n.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[o,r,u]}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,u,i=o[0],a=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(l)var s=l(e)}for(t&&t(o);c<i.length;c++)u=i[c],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(s)},o=self["webpackChunktest_vue"]=self["webpackChunktest_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(126)}));o=e.O(o)})();
//# sourceMappingURL=app.c1e4e484.js.map