(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();function l(t,o){return Math.floor(Math.random()*(o-t+1))+t}function f(){const t=["sunny-yellow","lemonade-yellow","daffodil-yellow","marigold-yellow","sunflower-yellow","tangerine-yellow","apricot-orange","pumpkin-orange","persimmon-orange","coral-red","watermelon-red","tomato-red","strawberry-red","raspberry-pink","orchid-pink","lavender-pink","lilac-purple","amethyst-purple","periwinkle-blue","cornflower-blue","sky-blue","aqua-blue","azure-blue","light-green","mint-green","seafoam-green"],o=t[l(0,t.length-1)],s=document.createElement("div");s.className="cloud",s.style.backgroundColor=`var(--${o})`;const i=l(4,8);s.style.animationDuration=`${i}s`;const e=l(1,12);for(let n=0;n<e;n++){const r=document.createElement("div");r.className="puff",r.style.backgroundColor=`var(--${o})`,r.style.left=`${l(-50,50)}%`,r.style.top=`${l(-50,50)}%`,s.appendChild(r)}return s}const h=()=>{let t=["sticker1.png","sticker2.png","sticker3.png","sticker4.png"];const o=[];t=t.sort(()=>Math.random()-.5);const s=(i,e)=>{const n=window.innerWidth/3,r=window.innerHeight/3,a=[{left:l(0,n-e.width),top:l(0,r-e.height)},{left:l(2*n,window.innerWidth-2*e.width),top:l(0,r-e.height)},{left:l(0,n-e.width),top:l(2*r,window.innerHeight-2*e.height)},{left:l(2*n,window.innerWidth-2*e.width),top:l(2*r,window.innerHeight-2*e.height)}];e.style.left=`${a[i].left}px`,e.style.top=`${a[i].top}px`,e.style.transform=`rotate(${l(-25,25)}deg)`};return t.forEach((i,e)=>{const n=new Image;n.src="./assets/"+i,n.className="sticker",n.onload=()=>s(e,n),o.push(n)}),window.addEventListener("resize",s),o};window.onload=()=>{const t=document.querySelector("#app"),o=p();t.appendChild(o),d(),window.addEventListener("resize",d),y(40).forEach(e=>t.appendChild(e)),h().forEach(e=>t.appendChild(e))};const d=()=>{const t=document.querySelector(".canvas"),o=t.getBoundingClientRect();t.width=o.width,t.height=o.height,u(t),w(t)},p=()=>{const t=document.createElement("div"),o=document.createElement("canvas");return t.appendChild(o),t.className="canvas-container",o.className="canvas",t},u=t=>{const o=t.getContext("2d");o.fillStyle="#ff999e",o.fillRect(0,0,t.width,t.height)},w=t=>{const o=t.getContext("2d"),s=20,i=5,e="#fa70b5";for(let n=s;n<t.width-s;n+=s)c(o,n,s,i,e),c(o,n,t.height-s,i,e);for(let n=s;n<t.height-s;n+=s)c(o,s,n,i,e),c(o,t.width-s,n,i,e)},c=(t,o,s,i,e)=>{t.beginPath(),t.arc(o,s,i,0,Math.PI*2,!1),t.fillStyle=e,t.fill()},y=t=>{const o=[];for(let i=0;i<t;i++){const e=f();o.push(e)}const s=()=>{const i=window.innerHeight/window.innerWidth;let e,n;i>1?(n=Math.round(t/3),e=(t-n*2)/2):(e=Math.round(t/3),n=(t-e*2)/2),o.forEach((r,a)=>{a<e?(r.style.top="0",r.style.left=`${a/e*100}%`,r.style.right="",r.style.bottom=""):a<e+n?(r.style.top=`${(a-e)/n*100}%`,r.style.right="0",r.style.left="",r.style.bottom=""):a<e*2+n?(r.style.bottom="0",r.style.left=`${(a-e-n)/e*100}%`,r.style.top="",r.style.right=""):(r.style.top=`${(a-e*2-n)/n*100}%`,r.style.left="0",r.style.right="",r.style.bottom="")})};return window.addEventListener("resize",s),s(),o};
