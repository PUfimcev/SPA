(self.webpackChunkspa=self.webpackChunkspa||[]).push([[18],{18:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});const a=new class{create(){return this.elem=document.createElement("main"),this.elem.classList.add("main"),this.elem}routing(){const e=()=>{let e=location.hash;e=e.slice(1);let t="404";0!=e.length||"/SPA/"!=location.pathname&&"/"!=location.pathname&&"/index.html"!=location.pathname?e.length>0&&(t=e,e.includes("product")&&(t="404",e=e.split("/")[0],e&&e.length>0&&(t=e))):t="home",t=t.charAt(0).toUpperCase()+t.slice(1),n(653)(`./${t}.js`).then((e=>{if(e.default){if(this.elem.innerHTML="",e.default.init){let t=e.default.init([this.cart,this.cartWidget]);if(t.then)return void t.then((e=>{this.elem.append(e)}))}e.default.then?e.default.then((e=>{this.elem.append(e)})):this.elem.append(e.default)}}))};window.addEventListener("hashchange",e),e(),document.querySelectorAll('a[href="/"]').forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),history.pushState(null,null,"/"),e()}))}))}init(e){return this.cart=e[0],this.cartWidget=e[1],this.routing(),this.create(),this.elem}}},653:(e,t,n)=>{var a={"./404.js":[612,612],"./Cart.js":[841],"./Contact.js":[780,780],"./Home.js":[153,153],"./Product.js":[527,527],"./Shop.js":[286,286]};function i(e){if(!n.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(i)))}i.keys=()=>Object.keys(a),i.id=653,e.exports=i}}]);