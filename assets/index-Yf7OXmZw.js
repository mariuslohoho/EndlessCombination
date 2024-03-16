(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function y(e){return q.find(t=>t.id===e)}const q=[{id:0,Name:"Template",Emoji:"♾️",Category:"Template"},{id:100,Name:"Water",Emoji:"💧",Category:"Element"},{id:101,Name:"Fire",Emoji:"🔥",Category:"Element"},{id:102,Name:"Wind",Emoji:"🌬️",Category:"Element"},{id:103,Name:"Earth",Emoji:"🌍",Category:"Element"},{id:120,Name:"Steam",Emoji:"‍💨",Category:"Moisture"},{id:121,Name:"Cloud",Emoji:"☁️",Category:"Moisture"},{id:124,Name:"Wave",Emoji:"🌊",Category:"Water"},{id:132,Name:"Ice",Emoji:"🧊",Category:"Water"},{id:138,Name:"Tsunami",Emoji:"🌊",Category:"Water"},{id:134,Name:"Geyser",Emoji:"🌋",Category:"Water"},{id:125,Name:"Lava",Emoji:"🌋",Category:"Fire"},{id:128,Name:"Volcano",Emoji:"🌋",Category:"Fire"},{id:136,Name:"Forest Fire",Emoji:"🔥",Category:"Fire"},{id:127,Name:"Tornado",Emoji:"🌪️",Category:"Wind"},{id:135,Name:"Hurricane",Emoji:"🌀",Category:"Wind"},{id:123,Name:"Dust",Emoji:"‍♂️",Category:"Earth"},{id:126,Name:"Mud",Emoji:"‍♂️",Category:"Earth"},{id:129,Name:"Earthquake",Emoji:"🏔️",Category:"Earth"},{id:133,Name:"Desert",Emoji:"🏜️",Category:"Earth"},{id:139,Name:"Avalanche",Emoji:"🏔️",Category:"Earth"},{id:130,Name:"Rain",Emoji:"🌧️",Category:"Moisture"},{id:131,Name:"Snow",Emoji:"❄️",Category:"Moisture"},{id:137,Name:"Fog",Emoji:"🌫️",Category:"Moisture"}];function z(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;e=e.sort(),t=t.sort();for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}function G(e,t){return U.find(n=>z(n.IngredientIds,[e,t]))}const U=[{id:0,ProductId:0,IngredientIds:[0,0]},{id:1,ProductId:120,IngredientIds:[100,101]},{id:2,ProductId:121,IngredientIds:[100,120]},{id:3,ProductId:122,IngredientIds:[102,101]},{id:4,ProductId:123,IngredientIds:[102,103]},{id:5,ProductId:124,IngredientIds:[100,102]},{id:6,ProductId:125,IngredientIds:[101,103]},{id:7,ProductId:126,IngredientIds:[100,103]},{id:8,ProductId:127,IngredientIds:[102,120]},{id:9,ProductId:128,IngredientIds:[101,121]},{id:10,ProductId:129,IngredientIds:[103,121]},{id:11,ProductId:130,IngredientIds:[100,121]},{id:12,ProductId:131,IngredientIds:[102,123]},{id:13,ProductId:132,IngredientIds:[101,124]},{id:14,ProductId:133,IngredientIds:[100,125]},{id:15,ProductId:134,IngredientIds:[103,125]},{id:16,ProductId:135,IngredientIds:[102,126]},{id:17,ProductId:136,IngredientIds:[101,126]},{id:18,ProductId:137,IngredientIds:[100,127]},{id:19,ProductId:138,IngredientIds:[102,127]},{id:20,ProductId:139,IngredientIds:[103,128]}],u=document.getElementById("leftPanel"),X=document.getElementById("rightPanel"),Y=document.getElementById("itemsContainer");let L=!1,S=!1,C=[],k=[100,101,102,103],B=[100,101,102,103],D=["eroticism","discriminatory","profanities"],s,w=!1,v=99;const K=e=>new Promise(t=>setTimeout(t,e));function V(){Y.innerHTML=""}function M(){let e=k;return B.forEach(t=>{const n=y(t);n&&!e.includes(t)&&!D.includes(n.Category.toLowerCase())&&e.push(t)}),e}function b(e){const t=e.getAttribute("ItemId");return t==null?0:parseInt(t)}function R(e,t,n=!1){const o=b(e),r=b(t),i=G(o,r);if(!i)return null;const d=i.ProductId,E=(e.getBoundingClientRect().x+t.getBoundingClientRect().x)/2,c=(e.getBoundingClientRect().y+t.getBoundingClientRect().y)/2;B.includes(d)||($(d),B.push(d));const a=document.getElementById("searchInput");if(a==null||a.setAttribute("placeholder",`Search (${M().length}) items...`),!n){const f=x(d,E,c);return u.appendChild(f),N(e),N(t),f.classList.add("inMainWorkspace"),f}return null}function T(e){if(e===null)return;const t=P(e);if(t===null)return;let n=null;t.every(o=>{if(n)return!1;n=R(e,o)})}function P(e){if(e===null)return null;const t=Array.from(u.getElementsByTagName("div"));let n=[];return t.forEach(o=>{o!==e&&h(e,o)&&n.push(o)}),n.length>0?n:null}function h(e,t){const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();return n.x+n.width>=o.x&&n.x<=o.x+o.width&&n.y+n.height>=o.y&&n.y<=o.y+o.height}async function N(e){w=!0,e.style.transition="scale 0.05s ease-out",e.style.scale="0.4",await K(50),e.remove()}function W(e=""){B.forEach(t=>{const n=y(t);n!=null&&n.Name.includes(e)&&$(t)})}function $(e){let t="";const n=document.getElementById("searchInput");n&&(t=n.value);const o=y(e);if(o!=null&&o.Name.toLowerCase().includes(t.toLowerCase())&&!D.includes(o.Category.toLowerCase())){let r=o==null?void 0:o.Emoji,i=o==null?void 0:o.Name.toString();r=r===void 0?"⛔":r,i=i===void 0?`Error [${e}]`:i;const d=F(r,i);d.setAttribute("itemid",e.toString()),Y==null||Y.appendChild(d),L&&(d.classList.add("mobile-new-made-element"),setTimeout(()=>{d.classList.remove("mobile-new-made-element")},1500)),d.addEventListener("mousedown",c=>{if(L){if(L){if(S)return;S=!0,C.length<2?(C.push(d),d.classList.add("mobile-toggled")):(C=[d],d.classList.add("mobile-toggled")),C.length==2&&(R(C[0],C[1],!0),Array.from(X.getElementsByClassName("mobile-toggled")).forEach(a=>{a.classList.remove("mobile-toggled")})),S=!1}}else{const a=x(e,c.clientX,c.clientY);u==null||u.appendChild(a),s=a;const f=d.getBoundingClientRect(),l=c.clientX-f.left,g=c.clientY-f.top;a.dataset.offsetX=l.toString(),a.dataset.offsetY=g.toString();const p=parseInt(a.dataset.offsetX||"0"),I=parseInt(a.dataset.offsetY||"0");a.style.left=`${c.clientX-p}px`,a.style.top=`${c.clientY-I}px`}}),d.addEventListener("touchstart",c=>{if(!L){const a=x(e,c.touches[0].clientX,c.touches[0].clientY);u==null||u.appendChild(a),s=a;const f=d.getBoundingClientRect(),l=c.touches[0].clientX-f.left,g=c.touches[0].clientY-f.top;a.dataset.offsetX=l.toString(),a.dataset.offsetY=g.toString();const p=parseInt(s.dataset.offsetX||"0"),I=parseInt(s.dataset.offsetY||"0");s.style.left=`${c.touches[0].clientX-p}px`,s.style.top=`${c.touches[0].clientY-I}px`}});const E=document.getElementById("searchInput");E==null||E.setAttribute("placeholder",`Search (${M().length}) items...`)}}function x(e,t,n){var E,c,a,f;const o=((E=y(e))==null?void 0:E.Emoji)===void 0?"⛔":(c=y(e))==null?void 0:c.Emoji,r=((a=y(e))==null?void 0:a.Name)===void 0?"Error [Unnamed]":(f=y(e))==null?void 0:f.Name,i=F(o,r);i.setAttribute("ItemId",e.toString()),i.style.position="fixed",v+=1,i.style.zIndex=v.toString(),i.style.top=n?n-i.clientHeight/2+"px":"",i.style.left=t?t-i.clientWidth/2+"px":"",i.classList.add("dragging"),i.addEventListener("mousedown",l=>{s=i,i.classList.add("dragging"),v+=1,i.style.zIndex=v.toString();const g=s.getBoundingClientRect(),p=l.clientX-g.left,I=l.clientY-g.top;s.dataset.offsetX=p.toString(),s.dataset.offsetY=I.toString(),l.button==2&&N(i)}),i.addEventListener("dblclick",l=>{u.appendChild(x(e,l.clientX,l.clientY))});let d=0;return i.addEventListener("touchstart",async l=>{s=i,i.classList.add("dragging"),v+=1,i.style.zIndex=v.toString();const g=s.getBoundingClientRect(),p=l.touches[0].clientX-g.left,I=l.touches[0].clientY-g.top;s.dataset.offsetX=p.toString(),s.dataset.offsetY=I.toString(),d+=1,setTimeout(()=>{d-=1},300),d==2&&(l.preventDefault(),u.appendChild(x(e,l.touches[0].clientX,l.touches[0].clientY)))}),i}function F(e,t){const n=document.createElement("div");n.classList.add("item");const o=document.createElement("span");o.classList.add("emoji"),o.innerHTML=e,n.appendChild(o);const r=document.createElement("span");return r.classList.add("text"),r.innerHTML=t,n.appendChild(r),n.addEventListener("mousedown",i=>{i.button==2&&(w=!0)}),n}document.addEventListener("mousemove",e=>{if(Array.from(document.getElementsByClassName("colliding")).forEach(t=>{t.classList.remove("colliding")}),s){const t=parseInt(s.dataset.offsetX||"0"),n=parseInt(s.dataset.offsetY||"0");s.style.left=`${e.clientX-t}px`,s.style.top=`${e.clientY-n}px`,s.classList.toggle("inMainWorkspace",!h(s,X));let o=[s];Array.from(u.getElementsByTagName("div")).forEach(r=>{o.includes(r)||(o.push(r),s&&h(s,r)&&(s.classList.add("colliding"),r.classList.add("colliding")))})}});document.addEventListener("mouseup",()=>{const e=P(s);e==null||e.forEach(t=>{t.classList.add("colliding")}),T(s),s=null,[].forEach.call(document.getElementsByClassName("dragging"),t=>{t.classList.remove("dragging"),h(t,X)&&N(t)})});document.addEventListener("contextmenu",e=>{w&&(e.preventDefault(),w=!1)});document.addEventListener("touchmove",e=>{if(Array.from(document.getElementsByClassName("colliding")).forEach(t=>{t.classList.remove("colliding")}),s){const t=parseInt(s.dataset.offsetX||"0"),n=parseInt(s.dataset.offsetY||"0");s.style.left=`${e.touches[0].clientX-t}px`,s.style.top=`${e.touches[0].clientY-n}px`,s.classList.toggle("inMainWorkspace",!h(s,X));let o=[s];Array.from(u.getElementsByTagName("div")).forEach(r=>{o.includes(r)||(o.push(r),s&&h(s,r)&&(s.classList.add("colliding"),r.classList.add("colliding")))})}});document.addEventListener("touchend",()=>{const e=P(s);e==null||e.forEach(t=>{t.classList.add("colliding")}),T(s),s=null,[].forEach.call(document.getElementsByClassName("dragging"),t=>{t.classList.remove("dragging"),h(t,X)&&N(t)})});function O(){const e=window.screen.width,t=window.screen.height;e/t<1?L=!0:L=!1}window.addEventListener("resize",O);var A;(A=document.getElementById("clearCanvasIcon"))==null||A.addEventListener("mousedown",()=>{u.innerHTML=""});const j=document.querySelector("div.index.draggable-popup"),Z=j.querySelector("div.popup-title"),J=document.getElementById("index-close"),H=document.querySelector("div.index.button");J.addEventListener("mousedown",()=>{j.toggleAttribute("hidden",!0)});H.addEventListener("mousedown",e=>{e.preventDefault(),j.toggleAttribute("hidden")});H.toggleAttribute("disabled");let m=null;Z.addEventListener("mousedown",e=>{m=j;const t=m.getBoundingClientRect(),n=e.clientX-t.left-t.width/2,o=e.clientY-t.top-t.height/2;m.dataset.offsetX=n.toString(),m.dataset.offsetY=o.toString()});document.addEventListener("mouseup",()=>{m=null});document.addEventListener("mousemove",e=>{if(m){const t=parseInt(m.dataset.offsetX||"0"),n=parseInt(m.dataset.offsetY||"0");m.style.left=`${e.clientX-t}px`,m.style.top=`${e.clientY-n}px`}});const Q=document.getElementById("searchInput");Q.addEventListener("input",()=>{V(),W()});Array.from(document.getElementsByClassName("disabled")).forEach(e=>{e.setAttribute("title","Coming Soon...")});function _(){W(),O()}_();
