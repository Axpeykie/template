import{d as e,r as t,c as n,o as r,u as o,a as s,b as i,e as c,t as a,F as l,f as u,g as d,h as m,i as p}from"./vendor.3d1e9ab3.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f=e({setup:e=>(e,o)=>{const s=t("router-view");return r(),n(s)}}),h={};var g=(e,t)=>{for(const[n,r]of t)e[n]=r;return e};const y=e({setup(){const e=o(),t=s(0);return{count:t,click:async()=>{await e.dispatch("increment"),t.value=e.getters.double,console.log("好麻烦")}}}}),v=c("div",{class:"home"},"home",-1);const k=[{path:"/",name:"Home",component:g(y,[["render",function(e,t,n,o,s,u){return r(),i(l,null,[v,c("div",null,a(e.count),1),c("button",{onClick:t[0]||(t[0]=(...t)=>e.click&&e.click(...t))},"click")],64)}]])},{path:"/login",name:"Login",component:()=>{return e=()=>import("./index.5381f087.js"),(t=["assets/index.5381f087.js","assets/vendor.3d1e9ab3.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in h)return;h[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t}}],b=u({history:d(),routes:k}),L={count:0};var E=m({state:()=>L,mutations:{increment(e){e.count+=1}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});p(f).use(b).use(E).mount("#app");export{g as _};
