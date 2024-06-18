(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function Y(n,t){return Math.floor(Math.random()*(t-n+1))+n}function Ga(){const n=["sunny-yellow","lemonade-yellow","daffodil-yellow","marigold-yellow","sunflower-yellow","tangerine-yellow","apricot-orange","pumpkin-orange","persimmon-orange","coral-red","watermelon-red","tomato-red","strawberry-red","raspberry-pink","orchid-pink","lavender-pink","lilac-purple","amethyst-purple","periwinkle-blue","cornflower-blue","sky-blue","aqua-blue","azure-blue","light-green","mint-green","seafoam-green"],t=n[Y(0,n.length-1)],e=document.createElement("div");e.className="cloud",e.style.backgroundColor=`var(--${t})`;const i=Y(4,8);e.style.animationDuration=`${i}s`;const s=Y(1,12);for(let o=0;o<s;o++){const l=document.createElement("div");l.className="puff",l.style.backgroundColor=`var(--${t})`,l.style.left=`${Y(-50,50)}%`,l.style.top=`${Y(-50,50)}%`,e.appendChild(l)}return e}const Ka=n=>{const t=[];for(let i=0;i<n;i++){const s=Ga();t.push(s)}const e=()=>{const i=window.innerHeight/window.innerWidth;let s,o;i>1?(o=Math.round(n/3),s=(n-o*2)/2):(s=Math.round(n/3),o=(n-s*2)/2),t.forEach((l,c)=>{c<s?(l.style.top="0",l.style.left=`${c/s*100}%`,l.style.right="",l.style.bottom=""):c<s+o?(l.style.top=`${(c-s)/o*100}%`,l.style.right="0",l.style.left="",l.style.bottom=""):c<s*2+o?(l.style.bottom="0",l.style.left=`${(c-s-o)/s*100}%`,l.style.top="",l.style.right=""):(l.style.top=`${(c-s*2-o)/o*100}%`,l.style.left="0",l.style.right="",l.style.bottom="")})};return window.addEventListener("resize",e),e(),t},Wa="/assets/sticker1-DKE_VHlU.png",Qa="/assets/sticker2-D2a9wHo7.png",Xa="/assets/sticker3-BjLilFOp.png",Ya="/assets/sticker4-Be1iQrlW.png",Ja=()=>{let n=[Wa,Qa,Xa,Ya];const t=[];n=n.sort(()=>Math.random()-.5);const e=(i,s)=>{let o;if(window.innerWidth<=768)o=[{left:0,top:Y(0,window.innerHeight/2-s.height)},{left:0,top:Y(window.innerHeight/2,window.innerHeight-s.height)},{left:window.innerWidth-s.width,top:Y(0,window.innerHeight/2-s.height)},{left:window.innerWidth-s.width,top:Y(window.innerHeight/2,window.innerHeight-s.height)}];else{const l=window.innerWidth/3,c=window.innerHeight/3;o=[{left:Y(0,l-s.width),top:Y(0,c-s.height)},{left:Y(2*l,window.innerWidth-2*s.width),top:Y(0,c-s.height)},{left:Y(0,l-s.width),top:Y(2*c,window.innerHeight-2*s.height)},{left:Y(2*l,window.innerWidth-2*s.width),top:Y(2*c,window.innerHeight-2*s.height)}]}s.style.left=`${o[i].left}px`,s.style.top=`${o[i].top}px`,s.style.transform=`rotate(${Y(-25,25)}deg)`};return n.forEach((i,s)=>{const o=new Image;o.src=i,o.className="sticker",o.onload=()=>e(s,o),t.push(o)}),window.addEventListener("resize",()=>{n.forEach((i,s)=>e(s,t[s]))}),t},Za=n=>{const t=n.getContext("2d");tl(t,n),t.shadowColor="rgba(0, 0, 0, 0.5)",t.shadowBlur=10,t.shadowOffsetX=5,t.shadowOffsetY=5,t.font="30px Emilys Candy",t.fillStyle="#ffffff",t.fillText("Care-O-Meter",n.width/2-t.measureText("Care-O-Meter").width/2,n.height/4+80),t.shadowColor="transparent",el(t,n.width,n.height),nl(t,n.width,n.height)};function tl(n,t){n.beginPath(),n.moveTo(t.width/2,t.height/4),n.bezierCurveTo(t.width/2+160,t.height/4-120,t.width/2+160,t.height/4+120,t.width/2,t.height/4+160),n.bezierCurveTo(t.width/2-160,t.height/4+120,t.width/2-160,t.height/4-120,t.width/2,t.height/4),n.fillStyle="#ff6161",n.strokeStyle=Ws("#ff6161",-10),n.lineWidth=5,n.closePath(),n.stroke(),n.fill()}const el=(n,t,e)=>{const i=["#FFDFB5","#FFFFB5","#94FBAB","#9EDEFF","#B5B9FF","#FFB5E8","#FF9CEE"];for(let o=0;o<i.length;o++){const l=40+o*10,c=Ws(i[o],-10);n.beginPath(),n.arc(t*.75,e*.2,l+4,Math.PI,2*Math.PI,!1),n.strokeStyle=c,n.lineWidth=4,n.stroke(),n.beginPath(),n.arc(t*.75,e*.2,l,Math.PI,2*Math.PI,!1),n.strokeStyle=i[o],n.lineWidth=8,n.stroke()}};function Ws(n,t){let e=parseInt(n.substring(1,3),16),i=parseInt(n.substring(3,5),16),s=parseInt(n.substring(5,7),16);e=parseInt(e*(100+t)/100),i=parseInt(i*(100+t)/100),s=parseInt(s*(100+t)/100),e=e<255?e:255,i=i<255?i:255,s=s<255?s:255;const o=e.toString(16).length==1?"0"+e.toString(16):e.toString(16),l=i.toString(16).length==1?"0"+i.toString(16):i.toString(16),c=s.toString(16).length==1?"0"+s.toString(16):s.toString(16);return"#"+o+l+c}const nl=(n,t,e)=>{const i=t*.25-30,s=e*.2-40,o=30,l="#555555",c="#ADD8E6",d="#FFFACD";n.beginPath(),n.arc(i,s,o,Math.PI*.5,Math.PI*1.5,!1),n.arc(i+30,s-20,o,Math.PI*1.15,Math.PI*2,!1),n.arc(i+60,s,o,Math.PI*1.5,Math.PI*.5,!1),n.closePath(),n.fillStyle=l,n.fill();for(let m=0;m<5;m++)n.beginPath(),n.moveTo(i+5+m*10,s+10),n.bezierCurveTo(i+5+m*10,s+20,i+10+m*10,s+20,i+5+m*10,s+30),n.strokeStyle=c,n.lineWidth=3,n.stroke();n.beginPath(),n.moveTo(i+55,s+10),n.lineTo(i+65,s+25),n.lineTo(i+58,s+25),n.lineTo(i+65,s+40),n.strokeStyle=d,n.lineWidth=5,n.stroke()},rl=(n,t)=>{const e=n.getContext("2d"),i=50,s=10,o=n.width/2,l=n.height/4+40;e.save(),e.translate(o,l),e.rotate(t),e.beginPath(),e.moveTo(0,0),e.lineTo(0,-i),e.strokeStyle="#000000",e.lineWidth=2,e.stroke(),e.beginPath(),e.moveTo(-s/2,-i),e.lineTo(0,-i-s),e.lineTo(s/2,-i),e.fillStyle="#000000",e.fill(),e.restore()},il=()=>{const n=document.createElement("div"),t=document.createElement("canvas");return n.appendChild(t),n.className="canvas-container",t.className="canvas",n},sl=n=>{const t=n.getContext("2d");t.fillStyle="#ff999e",t.fillRect(0,0,n.width,n.height)},ol=n=>{const t=n.getContext("2d"),e=20,i=5,s="#fa70b5";for(let o=e;o<n.width-e;o+=e)Tn(t,o,e,i,s),Tn(t,o,n.height-e,i,s);for(let o=e;o<n.height-e;o+=e)Tn(t,e,o,i,s),Tn(t,n.width-e,o,i,s)},Tn=(n,t,e,i,s)=>{n.beginPath(),n.arc(t,e,i,0,Math.PI*2,!1),n.fillStyle=s,n.fill()},al="/assets/banner-CCN3BeJI.png";var us={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ll=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],c=n[e++],d=((s&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(d>>10)),t[i++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],l=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Xs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,c=l?n[s+1]:0,d=s+2<n.length,m=d?n[s+2]:0,w=o>>2,A=(o&3)<<4|c>>4;let C=(c&15)<<2|m>>6,V=m&63;d||(V=64,l||(C=64)),i.push(e[w],e[A],e[C],e[V])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Qs(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ll(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const m=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||m==null||A==null)throw new ul;const C=o<<2|c>>4;if(i.push(C),m!==64){const V=c<<4&240|m>>2;if(i.push(V),A!==64){const D=m<<6&192|A;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ul extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cl=function(n){const t=Qs(n);return Xs.encodeByteArray(t,!0)},Dn=function(n){return cl(n).replace(/\./g,"")},hl=function(n){try{return Xs.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=()=>dl().__FIREBASE_DEFAULTS__,pl=()=>{if(typeof process>"u"||typeof us>"u")return;const n=us.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ml=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&hl(n[1]);return t&&JSON.parse(t)},Gr=()=>{try{return fl()||pl()||ml()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gl=n=>{var t,e;return(e=(t=Gr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},_l=n=>{const t=gl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Ys=()=>{var n;return(n=Gr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Dn(JSON.stringify(e)),Dn(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tl(){var n;const t=(n=Gr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wl(){return!Tl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Il(){try{return typeof indexedDB=="object"}catch{return!1}}function Al(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="FirebaseError";class me extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Rl,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?Pl(o,i):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new me(s,c,i)}}function Pl(n,t){return n.replace(Cl,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Cl=/\{\$([^}]+)}/g;function Nr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],l=t[s];if(cs(o)&&cs(l)){if(!Nr(o,l))return!1}else if(o!==l)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function cs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n){return n&&n._delegate?n._delegate:n}class He{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new yl;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vl(t))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Wt){return this.instances.has(t)}getOptions(t=Wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&l.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bl(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Wt){return this.component?this.component.multipleInstances?t:Wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bl(n){return n===Wt?void 0:n}function Vl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Sl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const Nl={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},kl=L.INFO,Ol={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Ml=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Ol[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zs{constructor(t){this.name=t,this._logLevel=kl,this._logHandler=Ml,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const Fl=(n,t)=>t.some(e=>n instanceof e);let hs,ds;function xl(){return hs||(hs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ll(){return ds||(ds=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const to=new WeakMap,kr=new WeakMap,eo=new WeakMap,Ar=new WeakMap,Kr=new WeakMap;function Bl(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(xt(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&to.set(e,n)}).catch(()=>{}),Kr.set(t,n),t}function Ul(n){if(kr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});kr.set(n,t)}let Or={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return kr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||eo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return xt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function jl(n){Or=n(Or)}function $l(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Rr(this),t,...e);return eo.set(i,t.sort?t.sort():[t]),xt(i)}:Ll().includes(n)?function(...t){return n.apply(Rr(this),t),xt(to.get(this))}:function(...t){return xt(n.apply(Rr(this),t))}}function ql(n){return typeof n=="function"?$l(n):(n instanceof IDBTransaction&&Ul(n),Fl(n,xl())?new Proxy(n,Or):n)}function xt(n){if(n instanceof IDBRequest)return Bl(n);if(Ar.has(n))return Ar.get(n);const t=ql(n);return t!==n&&(Ar.set(n,t),Kr.set(t,n)),t}const Rr=n=>Kr.get(n);function Hl(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),c=xt(l);return i&&l.addEventListener("upgradeneeded",d=>{i(xt(l.result),d.oldVersion,d.newVersion,xt(l.transaction),d)}),e&&l.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const zl=["get","getKey","getAll","getAllKeys","count"],Gl=["put","add","delete","clear"],Pr=new Map;function fs(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Pr.get(t))return Pr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Gl.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||zl.includes(e)))return;const o=async function(l,...c){const d=this.transaction(l,s?"readwrite":"readonly");let m=d.store;return i&&(m=m.index(c.shift())),(await Promise.all([m[e](...c),s&&d.done]))[0]};return Pr.set(t,o),o}jl(n=>({...n,get:(t,e,i)=>fs(t,e)||n.get(t,e,i),has:(t,e)=>!!fs(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Wl(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Wl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Mr="@firebase/app",ps="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Zs("@firebase/app"),Ql="@firebase/app-compat",Xl="@firebase/analytics-compat",Yl="@firebase/analytics",Jl="@firebase/app-check-compat",Zl="@firebase/app-check",tu="@firebase/auth",eu="@firebase/auth-compat",nu="@firebase/database",ru="@firebase/database-compat",iu="@firebase/functions",su="@firebase/functions-compat",ou="@firebase/installations",au="@firebase/installations-compat",lu="@firebase/messaging",uu="@firebase/messaging-compat",cu="@firebase/performance",hu="@firebase/performance-compat",du="@firebase/remote-config",fu="@firebase/remote-config-compat",pu="@firebase/storage",mu="@firebase/storage-compat",gu="@firebase/firestore",_u="@firebase/vertexai-preview",yu="@firebase/firestore-compat",Eu="firebase",vu="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]",Tu={[Mr]:"fire-core",[Ql]:"fire-core-compat",[Yl]:"fire-analytics",[Xl]:"fire-analytics-compat",[Zl]:"fire-app-check",[Jl]:"fire-app-check-compat",[tu]:"fire-auth",[eu]:"fire-auth-compat",[nu]:"fire-rtdb",[ru]:"fire-rtdb-compat",[iu]:"fire-fn",[su]:"fire-fn-compat",[ou]:"fire-iid",[au]:"fire-iid-compat",[lu]:"fire-fcm",[uu]:"fire-fcm-compat",[cu]:"fire-perf",[hu]:"fire-perf-compat",[du]:"fire-rc",[fu]:"fire-rc-compat",[pu]:"fire-gcs",[mu]:"fire-gcs-compat",[gu]:"fire-fst",[yu]:"fire-fst-compat",[_u]:"fire-vertex","fire-js":"fire-js",[Eu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Map,wu=new Map,xr=new Map;function ms(n,t){try{n.container.addComponent(t)}catch(e){Jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function kn(n){const t=n.name;if(xr.has(t))return Jt.debug(`There were multiple attempts to register component ${t}.`),!1;xr.set(t,n);for(const e of Nn.values())ms(e,n);for(const e of wu.values())ms(e,n);return!0}function Iu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new Js("app","Firebase",Au);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=vu;function no(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(e||(e=Ys()),!e)throw Lt.create("no-options");const o=Nn.get(s);if(o){if(Nr(e,o.options)&&Nr(i,o.config))return o;throw Lt.create("duplicate-app",{appName:s})}const l=new Dl(s);for(const d of xr.values())l.addComponent(d);const c=new Ru(e,i,l);return Nn.set(s,c),c}function Cu(n=Fr){const t=Nn.get(n);if(!t&&n===Fr&&Ys())return no();if(!t)throw Lt.create("no-app",{appName:n});return t}function le(n,t,e){var i;let s=(i=Tu[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Jt.warn(c.join(" "));return}kn(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="firebase-heartbeat-database",bu=1,ze="firebase-heartbeat-store";let Cr=null;function ro(){return Cr||(Cr=Hl(Su,bu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ze)}catch(e){console.warn(e)}}}}).catch(n=>{throw Lt.create("idb-open",{originalErrorMessage:n.message})})),Cr}async function Vu(n){try{const e=(await ro()).transaction(ze),i=await e.objectStore(ze).get(io(n));return await e.done,i}catch(t){if(t instanceof me)Jt.warn(t.message);else{const e=Lt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(e.message)}}}async function gs(n,t){try{const i=(await ro()).transaction(ze,"readwrite");await i.objectStore(ze).put(t,io(n)),await i.done}catch(e){if(e instanceof me)Jt.warn(e.message);else{const i=Lt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(i.message)}}}function io(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=1024,Nu=30*24*60*60*1e3;class ku{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Mu(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=_s();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=Nu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_s(),{heartbeatsToSend:i,unsentEntries:s}=Ou(this._heartbeatsCache.heartbeats),o=Dn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function _s(){return new Date().toISOString().substring(0,10)}function Ou(n,t=Du){const e=[];let i=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),ys(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ys(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Mu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Il()?Al().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Vu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return gs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return gs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ys(n){return Dn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n){kn(new He("platform-logger",t=>new Kl(t),"PRIVATE")),kn(new He("heartbeat",t=>new ku(t),"PRIVATE")),le(Mr,ps,n),le(Mr,ps,"esm2017"),le("fire-js","")}Fu("");var xu="firebase",Lu="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le(xu,Lu,"app");var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var so;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,f){function g(){}g.prototype=f.prototype,E.D=f.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(_,y,T){for(var p=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)p[Rt-2]=arguments[Rt];return f.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,f,g){g||(g=0);var _=Array(16);if(typeof f=="string")for(var y=0;16>y;++y)_[y]=f.charCodeAt(g++)|f.charCodeAt(g++)<<8|f.charCodeAt(g++)<<16|f.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=f[g++]|f[g++]<<8|f[g++]<<16|f[g++]<<24;f=E.g[0],g=E.g[1],y=E.g[2];var T=E.g[3],p=f+(T^g&(y^T))+_[0]+3614090360&4294967295;f=g+(p<<7&4294967295|p>>>25),p=T+(y^f&(g^y))+_[1]+3905402710&4294967295,T=f+(p<<12&4294967295|p>>>20),p=y+(g^T&(f^g))+_[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(f^y&(T^f))+_[3]+3250441966&4294967295,g=y+(p<<22&4294967295|p>>>10),p=f+(T^g&(y^T))+_[4]+4118548399&4294967295,f=g+(p<<7&4294967295|p>>>25),p=T+(y^f&(g^y))+_[5]+1200080426&4294967295,T=f+(p<<12&4294967295|p>>>20),p=y+(g^T&(f^g))+_[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(f^y&(T^f))+_[7]+4249261313&4294967295,g=y+(p<<22&4294967295|p>>>10),p=f+(T^g&(y^T))+_[8]+1770035416&4294967295,f=g+(p<<7&4294967295|p>>>25),p=T+(y^f&(g^y))+_[9]+2336552879&4294967295,T=f+(p<<12&4294967295|p>>>20),p=y+(g^T&(f^g))+_[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(f^y&(T^f))+_[11]+2304563134&4294967295,g=y+(p<<22&4294967295|p>>>10),p=f+(T^g&(y^T))+_[12]+1804603682&4294967295,f=g+(p<<7&4294967295|p>>>25),p=T+(y^f&(g^y))+_[13]+4254626195&4294967295,T=f+(p<<12&4294967295|p>>>20),p=y+(g^T&(f^g))+_[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=g+(f^y&(T^f))+_[15]+1236535329&4294967295,g=y+(p<<22&4294967295|p>>>10),p=f+(y^T&(g^y))+_[1]+4129170786&4294967295,f=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(f^g))+_[6]+3225465664&4294967295,T=f+(p<<9&4294967295|p>>>23),p=y+(f^g&(T^f))+_[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^f&(y^T))+_[0]+3921069994&4294967295,g=y+(p<<20&4294967295|p>>>12),p=f+(y^T&(g^y))+_[5]+3593408605&4294967295,f=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(f^g))+_[10]+38016083&4294967295,T=f+(p<<9&4294967295|p>>>23),p=y+(f^g&(T^f))+_[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^f&(y^T))+_[4]+3889429448&4294967295,g=y+(p<<20&4294967295|p>>>12),p=f+(y^T&(g^y))+_[9]+568446438&4294967295,f=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(f^g))+_[14]+3275163606&4294967295,T=f+(p<<9&4294967295|p>>>23),p=y+(f^g&(T^f))+_[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^f&(y^T))+_[8]+1163531501&4294967295,g=y+(p<<20&4294967295|p>>>12),p=f+(y^T&(g^y))+_[13]+2850285829&4294967295,f=g+(p<<5&4294967295|p>>>27),p=T+(g^y&(f^g))+_[2]+4243563512&4294967295,T=f+(p<<9&4294967295|p>>>23),p=y+(f^g&(T^f))+_[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=g+(T^f&(y^T))+_[12]+2368359562&4294967295,g=y+(p<<20&4294967295|p>>>12),p=f+(g^y^T)+_[5]+4294588738&4294967295,f=g+(p<<4&4294967295|p>>>28),p=T+(f^g^y)+_[8]+2272392833&4294967295,T=f+(p<<11&4294967295|p>>>21),p=y+(T^f^g)+_[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^f)+_[14]+4259657740&4294967295,g=y+(p<<23&4294967295|p>>>9),p=f+(g^y^T)+_[1]+2763975236&4294967295,f=g+(p<<4&4294967295|p>>>28),p=T+(f^g^y)+_[4]+1272893353&4294967295,T=f+(p<<11&4294967295|p>>>21),p=y+(T^f^g)+_[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^f)+_[10]+3200236656&4294967295,g=y+(p<<23&4294967295|p>>>9),p=f+(g^y^T)+_[13]+681279174&4294967295,f=g+(p<<4&4294967295|p>>>28),p=T+(f^g^y)+_[0]+3936430074&4294967295,T=f+(p<<11&4294967295|p>>>21),p=y+(T^f^g)+_[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^f)+_[6]+76029189&4294967295,g=y+(p<<23&4294967295|p>>>9),p=f+(g^y^T)+_[9]+3654602809&4294967295,f=g+(p<<4&4294967295|p>>>28),p=T+(f^g^y)+_[12]+3873151461&4294967295,T=f+(p<<11&4294967295|p>>>21),p=y+(T^f^g)+_[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=g+(y^T^f)+_[2]+3299628645&4294967295,g=y+(p<<23&4294967295|p>>>9),p=f+(y^(g|~T))+_[0]+4096336452&4294967295,f=g+(p<<6&4294967295|p>>>26),p=T+(g^(f|~y))+_[7]+1126891415&4294967295,T=f+(p<<10&4294967295|p>>>22),p=y+(f^(T|~g))+_[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~f))+_[5]+4237533241&4294967295,g=y+(p<<21&4294967295|p>>>11),p=f+(y^(g|~T))+_[12]+1700485571&4294967295,f=g+(p<<6&4294967295|p>>>26),p=T+(g^(f|~y))+_[3]+2399980690&4294967295,T=f+(p<<10&4294967295|p>>>22),p=y+(f^(T|~g))+_[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~f))+_[1]+2240044497&4294967295,g=y+(p<<21&4294967295|p>>>11),p=f+(y^(g|~T))+_[8]+1873313359&4294967295,f=g+(p<<6&4294967295|p>>>26),p=T+(g^(f|~y))+_[15]+4264355552&4294967295,T=f+(p<<10&4294967295|p>>>22),p=y+(f^(T|~g))+_[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~f))+_[13]+1309151649&4294967295,g=y+(p<<21&4294967295|p>>>11),p=f+(y^(g|~T))+_[4]+4149444226&4294967295,f=g+(p<<6&4294967295|p>>>26),p=T+(g^(f|~y))+_[11]+3174756917&4294967295,T=f+(p<<10&4294967295|p>>>22),p=y+(f^(T|~g))+_[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=g+(T^(y|~f))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+f&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}i.prototype.u=function(E,f){f===void 0&&(f=E.length);for(var g=f-this.blockSize,_=this.B,y=this.h,T=0;T<f;){if(y==0)for(;T<=g;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<f;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<f;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=f},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var f=1;f<E.length-8;++f)E[f]=0;var g=8*this.o;for(f=E.length-8;f<E.length;++f)E[f]=g&255,g/=256;for(this.u(E),E=Array(16),f=g=0;4>f;++f)for(var _=0;32>_;_+=8)E[g++]=this.g[f]>>>_&255;return E};function o(E,f){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=f(E)}function l(E,f){this.h=f;for(var g=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==f||(g[y]=T,_=!1)}this.g=g}var c={};function d(E){return-128<=E&&128>E?o(E,function(f){return new l([f|0],0>f?-1:0)}):new l([E|0],0>E?-1:0)}function m(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return b(m(-E));for(var f=[],g=1,_=0;E>=g;_++)f[_]=E/g|0,g*=4294967296;return new l(f,0)}function w(E,f){if(E.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(E.charAt(0)=="-")return b(w(E.substring(1),f));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=m(Math.pow(f,8)),_=A,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+T),f);8>T?(T=m(Math.pow(f,T)),_=_.j(T).add(m(p))):(_=_.j(g),_=_.add(m(p)))}return _}var A=d(0),C=d(1),V=d(16777216);n=l.prototype,n.m=function(){if(k(this))return-b(this).m();for(var E=0,f=1,g=0;g<this.g.length;g++){var _=this.i(g);E+=(0<=_?_:4294967296+_)*f,f*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(k(this))return"-"+b(this).toString(E);for(var f=m(Math.pow(E,6)),g=this,_="";;){var y=ot(g,f).g;g=j(g,y.j(f));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=y,D(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var f=0;f<E.g.length;f++)if(E.g[f]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=j(this,E),k(E)?-1:D(E)?0:1};function b(E){for(var f=E.g.length,g=[],_=0;_<f;_++)g[_]=~E.g[_];return new l(g,~E.h).add(C)}n.abs=function(){return k(this)?b(this):this},n.add=function(E){for(var f=Math.max(this.g.length,E.g.length),g=[],_=0,y=0;y<=f;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=p>>>16,T&=65535,p&=65535,g[y]=p<<16|T}return new l(g,g[g.length-1]&-2147483648?-1:0)};function j(E,f){return E.add(b(f))}n.j=function(E){if(D(this)||D(E))return A;if(k(this))return k(E)?b(this).j(b(E)):b(b(this).j(E));if(k(E))return b(this.j(b(E)));if(0>this.l(V)&&0>E.l(V))return m(this.m()*E.m());for(var f=this.g.length+E.g.length,g=[],_=0;_<2*f;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,p=this.i(_)&65535,Rt=E.i(y)>>>16,ye=E.i(y)&65535;g[2*_+2*y]+=p*ye,z(g,2*_+2*y),g[2*_+2*y+1]+=T*ye,z(g,2*_+2*y+1),g[2*_+2*y+1]+=p*Rt,z(g,2*_+2*y+1),g[2*_+2*y+2]+=T*Rt,z(g,2*_+2*y+2)}for(_=0;_<f;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=f;_<2*f;_++)g[_]=0;return new l(g,0)};function z(E,f){for(;(E[f]&65535)!=E[f];)E[f+1]+=E[f]>>>16,E[f]&=65535,f++}function Q(E,f){this.g=E,this.h=f}function ot(E,f){if(D(f))throw Error("division by zero");if(D(E))return new Q(A,A);if(k(E))return f=ot(b(E),f),new Q(b(f.g),b(f.h));if(k(f))return f=ot(E,b(f)),new Q(b(f.g),f.h);if(30<E.g.length){if(k(E)||k(f))throw Error("slowDivide_ only works with positive integers.");for(var g=C,_=f;0>=_.l(E);)g=qt(g),_=qt(_);var y=_t(g,1),T=_t(_,1);for(_=_t(_,2),g=_t(g,2);!D(_);){var p=T.add(_);0>=p.l(E)&&(y=y.add(g),T=p),_=_t(_,1),g=_t(g,1)}return f=j(E,y.j(f)),new Q(y,f)}for(y=A;0<=E.l(f);){for(g=Math.max(1,Math.floor(E.m()/f.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=m(g),p=T.j(f);k(p)||0<p.l(E);)g-=_,T=m(g),p=T.j(f);D(T)&&(T=C),y=y.add(T),E=j(E,p)}return new Q(y,E)}n.A=function(E){return ot(this,E).h},n.and=function(E){for(var f=Math.max(this.g.length,E.g.length),g=[],_=0;_<f;_++)g[_]=this.i(_)&E.i(_);return new l(g,this.h&E.h)},n.or=function(E){for(var f=Math.max(this.g.length,E.g.length),g=[],_=0;_<f;_++)g[_]=this.i(_)|E.i(_);return new l(g,this.h|E.h)},n.xor=function(E){for(var f=Math.max(this.g.length,E.g.length),g=[],_=0;_<f;_++)g[_]=this.i(_)^E.i(_);return new l(g,this.h^E.h)};function qt(E){for(var f=E.g.length+1,g=[],_=0;_<f;_++)g[_]=E.i(_)<<1|E.i(_-1)>>>31;return new l(g,E.h)}function _t(E,f){var g=f>>5;f%=32;for(var _=E.g.length-g,y=[],T=0;T<_;T++)y[T]=0<f?E.i(T+g)>>>f|E.i(T+g+1)<<32-f:E.i(T+g);return new l(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=w,so=l}).apply(typeof Es<"u"?Es:typeof self<"u"?self:typeof window<"u"?window:{});var wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var oo,ao,Le,lo,Sn,Lr,uo,co,ho;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,u){return r==Array.prototype||r==Object.prototype||(r[a]=u.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof wn=="object"&&wn];for(var a=0;a<r.length;++a){var u=r[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var u=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var v=r[h];if(!(v in u))break t;u=u[v]}r=r[r.length-1],h=u[r],a=a(h),a!=h&&a!=null&&t(u,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var u=0,h=!1,v={next:function(){if(!h&&u<r.length){var I=u++;return{value:a(I,r[I]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function d(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function m(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function w(r,a,u){return r.call.apply(r.bind,arguments)}function A(r,a,u){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),r.apply(a,v)}}return function(){return r.apply(a,arguments)}}function C(r,a,u){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,C.apply(null,arguments)}function V(r,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function D(r,a){function u(){}u.prototype=a.prototype,r.aa=a.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(h,v,I){for(var S=Array(arguments.length-2),U=2;U<arguments.length;U++)S[U-2]=arguments[U];return a.prototype[v].apply(h,S)}}function k(r){const a=r.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=r[h];return u}return[]}function b(r,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(d(h)){const v=r.length||0,I=h.length||0;r.length=v+I;for(let S=0;S<I;S++)r[v+S]=h[S]}else r.push(h)}}class j{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function z(r){return/^[\s\xa0]*$/.test(r)}function Q(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function ot(r){return ot[" "](r),r}ot[" "]=function(){};var qt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function _t(r,a,u){for(const h in r)a.call(u,r[h],h,r)}function E(r,a){for(const u in r)a.call(void 0,r[u],u,r)}function f(r){const a={};for(const u in r)a[u]=r[u];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let u,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(u in h)r[u]=h[u];for(let I=0;I<g.length;I++)u=g[I],Object.prototype.hasOwnProperty.call(h,u)&&(r[u]=h[u])}}function y(r){var a=1;r=r.split(":");const u=[];for(;0<a&&r.length;)u.push(r.shift()),a--;return r.length&&u.push(r.join(":")),u}function T(r){c.setTimeout(()=>{throw r},0)}function p(){var r=tr;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Rt{constructor(){this.h=this.g=null}add(a,u){const h=ye.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var ye=new j(()=>new ha,r=>r.reset());class ha{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,ve=!1,tr=new Rt,ui=()=>{const r=c.Promise.resolve(void 0);Ee=()=>{r.then(da)}};var da=()=>{for(var r;r=p();){try{r.h.call(r.g)}catch(u){T(u)}var a=ye;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}ve=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var fa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return r}();function Te(r,a){if(at.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(qt){t:{try{ot(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else u=="mouseover"?a=r.fromElement:u=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:pa[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Te.aa.h.call(this)}}D(Te,at);var pa={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),ma=0;function ga(r,a,u,h,v){this.listener=r,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=v,this.key=++ma,this.da=this.fa=!1}function rn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function sn(r){this.src=r,this.g={},this.h=0}sn.prototype.add=function(r,a,u,h,v){var I=r.toString();r=this.g[I],r||(r=this.g[I]=[],this.h++);var S=nr(r,a,h,v);return-1<S?(a=r[S],u||(a.fa=!1)):(a=new ga(a,this.src,I,!!h,v),a.fa=u,r.push(a)),a};function er(r,a){var u=a.type;if(u in r.g){var h=r.g[u],v=Array.prototype.indexOf.call(h,a,void 0),I;(I=0<=v)&&Array.prototype.splice.call(h,v,1),I&&(rn(a),r.g[u].length==0&&(delete r.g[u],r.h--))}}function nr(r,a,u,h){for(var v=0;v<r.length;++v){var I=r[v];if(!I.da&&I.listener==a&&I.capture==!!u&&I.ha==h)return v}return-1}var rr="closure_lm_"+(1e6*Math.random()|0),ir={};function ci(r,a,u,h,v){if(Array.isArray(a)){for(var I=0;I<a.length;I++)ci(r,a[I],u,h,v);return null}return u=fi(u),r&&r[nn]?r.K(a,u,m(h)?!!h.capture:!!h,v):_a(r,a,u,!1,h,v)}function _a(r,a,u,h,v,I){if(!a)throw Error("Invalid event type");var S=m(v)?!!v.capture:!!v,U=or(r);if(U||(r[rr]=U=new sn(r)),u=U.add(a,u,h,S,I),u.proxy)return u;if(h=ya(),u.proxy=h,h.src=r,h.listener=u,r.addEventListener)fa||(v=S),v===void 0&&(v=!1),r.addEventListener(a.toString(),h,v);else if(r.attachEvent)r.attachEvent(di(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function ya(){function r(u){return a.call(r.src,r.listener,u)}const a=Ea;return r}function hi(r,a,u,h,v){if(Array.isArray(a))for(var I=0;I<a.length;I++)hi(r,a[I],u,h,v);else h=m(h)?!!h.capture:!!h,u=fi(u),r&&r[nn]?(r=r.i,a=String(a).toString(),a in r.g&&(I=r.g[a],u=nr(I,u,h,v),-1<u&&(rn(I[u]),Array.prototype.splice.call(I,u,1),I.length==0&&(delete r.g[a],r.h--)))):r&&(r=or(r))&&(a=r.g[a.toString()],r=-1,a&&(r=nr(a,u,h,v)),(u=-1<r?a[r]:null)&&sr(u))}function sr(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[nn])er(a.i,r);else{var u=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(u,h,r.capture):a.detachEvent?a.detachEvent(di(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=or(a))?(er(u,r),u.h==0&&(u.src=null,a[rr]=null)):rn(r)}}}function di(r){return r in ir?ir[r]:ir[r]="on"+r}function Ea(r,a){if(r.da)r=!0;else{a=new Te(a,this);var u=r.listener,h=r.ha||r.src;r.fa&&sr(r),r=u.call(h,a)}return r}function or(r){return r=r[rr],r instanceof sn?r:null}var ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function fi(r){return typeof r=="function"?r:(r[ar]||(r[ar]=function(a){return r.handleEvent(a)}),r[ar])}function lt(){Dt.call(this),this.i=new sn(this),this.M=this,this.F=null}D(lt,Dt),lt.prototype[nn]=!0,lt.prototype.removeEventListener=function(r,a,u,h){hi(this,r,a,u,h)};function mt(r,a){var u,h=r.F;if(h)for(u=[];h;h=h.F)u.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new at(a,r);else if(a instanceof at)a.target=a.target||r;else{var v=a;a=new at(h,r),_(a,v)}if(v=!0,u)for(var I=u.length-1;0<=I;I--){var S=a.g=u[I];v=on(S,h,!0,a)&&v}if(S=a.g=r,v=on(S,h,!0,a)&&v,v=on(S,h,!1,a)&&v,u)for(I=0;I<u.length;I++)S=a.g=u[I],v=on(S,h,!1,a)&&v}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var u=r.g[a],h=0;h<u.length;h++)rn(u[h]);delete r.g[a],r.h--}}this.F=null},lt.prototype.K=function(r,a,u,h){return this.i.add(String(r),a,!1,u,h)},lt.prototype.L=function(r,a,u,h){return this.i.add(String(r),a,!0,u,h)};function on(r,a,u,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,I=0;I<a.length;++I){var S=a[I];if(S&&!S.da&&S.capture==u){var U=S.listener,nt=S.ha||S.src;S.fa&&er(r.i,S),v=U.call(nt,h)!==!1&&v}}return v&&!h.defaultPrevented}function pi(r,a,u){if(typeof r=="function")u&&(r=C(r,u));else if(r&&typeof r.handleEvent=="function")r=C(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function mi(r){r.g=pi(()=>{r.g=null,r.i&&(r.i=!1,mi(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class va extends Dt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:mi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function we(r){Dt.call(this),this.h=r,this.g={}}D(we,Dt);var gi=[];function _i(r){_t(r.g,function(a,u){this.g.hasOwnProperty(u)&&sr(a)},r),r.g={}}we.prototype.N=function(){we.aa.N.call(this),_i(this)},we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lr=c.JSON.stringify,Ta=c.JSON.parse,wa=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function ur(){}ur.prototype.h=null;function yi(r){return r.h||(r.h=r.i())}function Ei(){}var Ie={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cr(){at.call(this,"d")}D(cr,at);function hr(){at.call(this,"c")}D(hr,at);var Ht={},vi=null;function an(){return vi=vi||new lt}Ht.La="serverreachability";function Ti(r){at.call(this,Ht.La,r)}D(Ti,at);function Ae(r){const a=an();mt(a,new Ti(a))}Ht.STAT_EVENT="statevent";function wi(r,a){at.call(this,Ht.STAT_EVENT,r),this.stat=a}D(wi,at);function gt(r){const a=an();mt(a,new wi(a,r))}Ht.Ma="timingevent";function Ii(r,a){at.call(this,Ht.Ma,r),this.size=a}D(Ii,at);function Re(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function Pe(){this.g=!0}Pe.prototype.xa=function(){this.g=!1};function Ia(r,a,u,h,v,I){r.info(function(){if(r.g)if(I)for(var S="",U=I.split("&"),nt=0;nt<U.length;nt++){var B=U[nt].split("=");if(1<B.length){var ut=B[0];B=B[1];var ct=ut.split("_");S=2<=ct.length&&ct[1]=="type"?S+(ut+"="+B+"&"):S+(ut+"=redacted&")}}else S=null;else S=I;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+u+`
`+S})}function Aa(r,a,u,h,v,I,S){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+u+`
`+I+" "+S})}function re(r,a,u,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Pa(r,u)+(h?" "+h:"")})}function Ra(r,a){r.info(function(){return"TIMEOUT: "+a})}Pe.prototype.info=function(){};function Pa(r,a){if(!r.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var h=u[r];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var I=v[0];if(I!="noop"&&I!="stop"&&I!="close")for(var S=1;S<v.length;S++)v[S]=""}}}}return lr(u)}catch{return a}}var ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dr;function un(){}D(un,ur),un.prototype.g=function(){return new XMLHttpRequest},un.prototype.i=function(){return{}},dr=new un;function Nt(r,a,u,h){this.j=r,this.i=a,this.l=u,this.R=h||1,this.U=new we(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ri}function Ri(){this.i=null,this.g="",this.h=!1}var Pi={},fr={};function pr(r,a,u){r.L=1,r.v=fn(Pt(a)),r.m=u,r.P=!0,Ci(r,null)}function Ci(r,a){r.F=Date.now(),cn(r),r.A=Pt(r.v);var u=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),ji(u.i,"t",h),r.C=0,u=r.j.J,r.h=new Ri,r.g=ss(r.j,u?a:null,!r.m),0<r.O&&(r.M=new va(C(r.Y,r,r.g),r.O)),a=r.U,u=r.g,h=r.ca;var v="readystatechange";Array.isArray(v)||(v&&(gi[0]=v.toString()),v=gi);for(var I=0;I<v.length;I++){var S=ci(u,v[I],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=r.H?f(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Ae(),Ia(r.i,r.u,r.A,r.l,r.R,r.m)}Nt.prototype.ca=function(r){r=r.target;const a=this.M;a&&Ct(r)==3?a.j():this.Y(r)},Nt.prototype.Y=function(r){try{if(r==this.g)t:{const ct=Ct(this.g);var a=this.g.Ba();const oe=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Wi(this.g)))){this.J||ct!=4||a==7||(a==8||0>=oe?Ae(3):Ae(2)),mr(this);var u=this.g.Z();this.X=u;e:if(Si(this)){var h=Wi(this.g);r="";var v=h.length,I=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zt(this),Ce(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(I&&a==v-1)});h.length=0,this.h.g+=r,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=u==200,Aa(this.i,this.u,this.A,this.l,this.R,ct,u),this.o){if(this.T&&!this.K){e:{if(this.g){var U,nt=this.g;if((U=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(U)){var B=U;break e}}B=null}if(u=B)re(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gr(this,u);else{this.o=!1,this.s=3,gt(12),zt(this),Ce(this);break t}}if(this.P){u=!0;let vt;for(;!this.J&&this.C<S.length;)if(vt=Ca(this,S),vt==fr){ct==4&&(this.s=4,gt(14),u=!1),re(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Pi){this.s=4,gt(15),re(this.i,this.l,S,"[Invalid Chunk]"),u=!1;break}else re(this.i,this.l,vt,null),gr(this,vt);if(Si(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||S.length!=0||this.h.h||(this.s=1,gt(16),u=!1),this.o=this.o&&u,!u)re(this.i,this.l,S,"[Invalid Chunked Response]"),zt(this),Ce(this);else if(0<S.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),wr(ut),ut.M=!0,gt(11))}}else re(this.i,this.l,S,null),gr(this,S);ct==4&&zt(this),this.o&&!this.J&&(ct==4?es(this.j,this):(this.o=!1,cn(this)))}else Ha(this.g),u==400&&0<S.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),zt(this),Ce(this)}}}catch{}finally{}};function Si(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Ca(r,a){var u=r.C,h=a.indexOf(`
`,u);return h==-1?fr:(u=Number(a.substring(u,h)),isNaN(u)?Pi:(h+=1,h+u>a.length?fr:(a=a.slice(h,h+u),r.C=h+u,a)))}Nt.prototype.cancel=function(){this.J=!0,zt(this)};function cn(r){r.S=Date.now()+r.I,bi(r,r.I)}function bi(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Re(C(r.ba,r),a)}function mr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Nt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Ra(this.i,this.A),this.L!=2&&(Ae(),gt(17)),zt(this),this.s=2,Ce(this)):bi(this,this.S-r)};function Ce(r){r.j.G==0||r.J||es(r.j,r)}function zt(r){mr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,_i(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function gr(r,a){try{var u=r.j;if(u.G!=0&&(u.g==r||_r(u.h,r))){if(!r.K&&_r(u.h,r)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)yn(u),gn(u);else break t;Tr(u),gt(18)}}else u.za=v[1],0<u.za-u.T&&37500>v[2]&&u.F&&u.v==0&&!u.C&&(u.C=Re(C(u.Za,u),6e3));if(1>=Ni(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Kt(u,11)}else if((r.K||u.g==r)&&yn(u),!z(a))for(v=u.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(u.T=B[0],B=B[1],u.G==2)if(B[0]=="c"){u.K=B[1],u.ia=B[2];const ut=B[3];ut!=null&&(u.la=ut,u.j.info("VER="+u.la));const ct=B[4];ct!=null&&(u.Aa=ct,u.j.info("SVER="+u.Aa));const oe=B[5];oe!=null&&typeof oe=="number"&&0<oe&&(h=1.5*oe,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const vt=r.g;if(vt){const vn=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vn){var I=h.h;I.g||vn.indexOf("spdy")==-1&&vn.indexOf("quic")==-1&&vn.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(yr(I,I.h),I.h=null))}if(h.D){const Ir=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ir&&(h.ya=Ir,q(h.I,h.D,Ir))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var S=r;if(h.qa=is(h,h.J?h.ia:null,h.W),S.K){ki(h.h,S);var U=S,nt=h.L;nt&&(U.I=nt),U.B&&(mr(U),cn(U)),h.g=S}else Zi(h);0<u.i.length&&_n(u)}else B[0]!="stop"&&B[0]!="close"||Kt(u,7);else u.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Kt(u,7):vr(u):B[0]!="noop"&&u.l&&u.l.ta(B),u.v=0)}}Ae(4)}catch{}}var Sa=class{constructor(r,a){this.g=r,this.map=a}};function Vi(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Di(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Ni(r){return r.h?1:r.g?r.g.size:0}function _r(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function yr(r,a){r.g?r.g.add(a):r.h=a}function ki(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Vi.prototype.cancel=function(){if(this.i=Oi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Oi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const u of r.g.values())a=a.concat(u.D);return a}return k(r.i)}function ba(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(d(r)){for(var a=[],u=r.length,h=0;h<u;h++)a.push(r[h]);return a}a=[],u=0;for(h in r)a[u++]=r[h];return a}function Va(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(d(r)||typeof r=="string"){var a=[];r=r.length;for(var u=0;u<r;u++)a.push(u);return a}a=[],u=0;for(const h in r)a[u++]=h;return a}}}function Mi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(d(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var u=Va(r),h=ba(r),v=h.length,I=0;I<v;I++)a.call(void 0,h[I],u&&u[I],r)}var Fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Da(r,a){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var h=r[u].indexOf("="),v=null;if(0<=h){var I=r[u].substring(0,h);v=r[u].substring(h+1)}else I=r[u];a(I,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Gt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Gt){this.h=r.h,hn(this,r.j),this.o=r.o,this.g=r.g,dn(this,r.s),this.l=r.l;var a=r.i,u=new Ve;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),xi(this,u),this.m=r.m}else r&&(a=String(r).match(Fi))?(this.h=!1,hn(this,a[1]||"",!0),this.o=Se(a[2]||""),this.g=Se(a[3]||"",!0),dn(this,a[4]),this.l=Se(a[5]||"",!0),xi(this,a[6]||"",!0),this.m=Se(a[7]||"")):(this.h=!1,this.i=new Ve(null,this.h))}Gt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(be(a,Li,!0),":");var u=this.g;return(u||a=="file")&&(r.push("//"),(a=this.o)&&r.push(be(a,Li,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(be(u,u.charAt(0)=="/"?Oa:ka,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",be(u,Fa)),r.join("")};function Pt(r){return new Gt(r)}function hn(r,a,u){r.j=u?Se(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function dn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function xi(r,a,u){a instanceof Ve?(r.i=a,xa(r.i,r.h)):(u||(a=be(a,Ma)),r.i=new Ve(a,r.h))}function q(r,a,u){r.i.set(a,u)}function fn(r){return q(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Se(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function be(r,a,u){return typeof r=="string"?(r=encodeURI(r).replace(a,Na),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Na(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Li=/[#\/\?@]/g,ka=/[#\?:]/g,Oa=/[#\?]/g,Ma=/[#\?@]/g,Fa=/#/g;function Ve(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function kt(r){r.g||(r.g=new Map,r.h=0,r.i&&Da(r.i,function(a,u){r.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Ve.prototype,n.add=function(r,a){kt(this),this.i=null,r=ie(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(a),this.h+=1,this};function Bi(r,a){kt(r),a=ie(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Ui(r,a){return kt(r),a=ie(r,a),r.g.has(a)}n.forEach=function(r,a){kt(this),this.g.forEach(function(u,h){u.forEach(function(v){r.call(a,v,h,this)},this)},this)},n.na=function(){kt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const v=r[h];for(let I=0;I<v.length;I++)u.push(a[h])}return u},n.V=function(r){kt(this);let a=[];if(typeof r=="string")Ui(this,r)&&(a=a.concat(this.g.get(ie(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)a=a.concat(r[u])}return a},n.set=function(r,a){return kt(this),this.i=null,r=ie(this,r),Ui(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function ji(r,a,u){Bi(r,a),0<u.length&&(r.i=null,r.g.set(ie(r,a),k(u)),r.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const I=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var v=I;S[h]!==""&&(v+="="+encodeURIComponent(String(S[h]))),r.push(v)}}return this.i=r.join("&")};function ie(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function xa(r,a){a&&!r.j&&(kt(r),r.i=null,r.g.forEach(function(u,h){var v=h.toLowerCase();h!=v&&(Bi(this,h),ji(this,v,u))},r)),r.j=a}function La(r,a){const u=new Pe;if(c.Image){const h=new Image;h.onload=V(Ot,u,"TestLoadImage: loaded",!0,a,h),h.onerror=V(Ot,u,"TestLoadImage: error",!1,a,h),h.onabort=V(Ot,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=V(Ot,u,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function Ba(r,a){const u=new Pe,h=new AbortController,v=setTimeout(()=>{h.abort(),Ot(u,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(I=>{clearTimeout(v),I.ok?Ot(u,"TestPingServer: ok",!0,a):Ot(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Ot(u,"TestPingServer: error",!1,a)})}function Ot(r,a,u,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(u)}catch{}}function Ua(){this.g=new wa}function ja(r,a,u){const h=u||"";try{Mi(r,function(v,I){let S=v;m(v)&&(S=lr(v)),a.push(h+I+"="+encodeURIComponent(S))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function De(r){this.l=r.Ub||null,this.j=r.eb||!1}D(De,ur),De.prototype.g=function(){return new pn(this.l,this.j)},De.prototype.i=function(r){return function(){return r}}({});function pn(r,a){lt.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(pn,lt),n=pn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,ke(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ne(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,ke(this)),this.g&&(this.readyState=3,ke(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$i(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function $i(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Ne(this):ke(this),this.readyState==3&&$i(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Ne(this))},n.Qa=function(r){this.g&&(this.response=r,Ne(this))},n.ga=function(){this.g&&Ne(this)};function Ne(r){r.readyState=4,r.l=null,r.j=null,r.v=null,ke(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=a.next();return r.join(`\r
`)};function ke(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function qi(r){let a="";return _t(r,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function Er(r,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=qi(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):q(r,a,u))}function K(r){lt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(K,lt);var $a=/^https?$/i,qa=["POST","PUT"];n=K.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dr.g(),this.v=this.o?yi(this.o):yi(dr),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(I){Hi(this,I);return}if(r=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)u.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const I of h.keys())u.set(I,h.get(I));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(I=>I.toLowerCase()=="content-type"),v=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(qa,a,void 0))||h||v||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,S]of u)this.g.setRequestHeader(I,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ki(this),this.u=!0,this.g.send(r),this.u=!1}catch(I){Hi(this,I)}};function Hi(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,zi(r),mn(r)}function zi(r){r.A||(r.A=!0,mt(r,"complete"),mt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,mt(this,"complete"),mt(this,"abort"),mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),K.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Gi(this):this.bb())},n.bb=function(){Gi(this)};function Gi(r){if(r.h&&typeof l<"u"&&(!r.v[1]||Ct(r)!=4||r.Z()!=2)){if(r.u&&Ct(r)==4)pi(r.Ea,0,r);else if(mt(r,"readystatechange"),Ct(r)==4){r.h=!1;try{const S=r.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=S===0){var v=String(r.D).match(Fi)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!$a.test(v?v.toLowerCase():"")}u=h}if(u)mt(r,"complete"),mt(r,"success");else{r.m=6;try{var I=2<Ct(r)?r.g.statusText:""}catch{I=""}r.l=I+" ["+r.Z()+"]",zi(r)}}finally{mn(r)}}}}function mn(r,a){if(r.g){Ki(r);const u=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||mt(r,"ready");try{u.onreadystatechange=h}catch{}}}function Ki(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Ct(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Ta(a)}};function Wi(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Ha(r){const a={};r=(r.g&&2<=Ct(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(z(r[h]))continue;var u=y(r[h]);const v=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const I=a[v]||[];a[v]=I,I.push(u)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oe(r,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||a}function Qi(r){this.Aa=0,this.i=[],this.j=new Pe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oe("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oe("baseRetryDelayMs",5e3,r),this.cb=Oe("retryDelaySeedMs",1e4,r),this.Wa=Oe("forwardChannelMaxRetries",2,r),this.wa=Oe("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(r&&r.concurrentRequestLimit),this.Da=new Ua,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qi.prototype,n.la=8,n.G=1,n.connect=function(r,a,u,h){gt(0),this.W=r,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=is(this,null,this.W),_n(this)};function vr(r){if(Xi(r),r.G==3){var a=r.U++,u=Pt(r.I);if(q(u,"SID",r.K),q(u,"RID",a),q(u,"TYPE","terminate"),Me(r,u),a=new Nt(r,r.j,a),a.L=2,a.v=fn(Pt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=ss(a.j,null),a.g.ea(a.v)),a.F=Date.now(),cn(a)}rs(r)}function gn(r){r.g&&(wr(r),r.g.cancel(),r.g=null)}function Xi(r){gn(r),r.u&&(c.clearTimeout(r.u),r.u=null),yn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function _n(r){if(!Di(r.h)&&!r.s){r.s=!0;var a=r.Ga;Ee||ui(),ve||(Ee(),ve=!0),tr.add(a,r),r.B=0}}function za(r,a){return Ni(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Re(C(r.Ga,r,a),ns(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const v=new Nt(this,this.j,r);let I=this.o;if(this.S&&(I?(I=f(I),_(I,this.S)):I=this.S),this.m!==null||this.O||(v.H=I,I=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=Ji(this,v,a),u=Pt(this.I),q(u,"RID",r),q(u,"CVER",22),this.D&&q(u,"X-HTTP-Session-Id",this.D),Me(this,u),I&&(this.O?a="headers="+encodeURIComponent(String(qi(I)))+"&"+a:this.m&&Er(u,this.m,I)),yr(this.h,v),this.Ua&&q(u,"TYPE","init"),this.P?(q(u,"$req",a),q(u,"SID","null"),v.T=!0,pr(v,u,null)):pr(v,u,a),this.G=2}}else this.G==3&&(r?Yi(this,r):this.i.length==0||Di(this.h)||Yi(this))};function Yi(r,a){var u;a?u=a.l:u=r.U++;const h=Pt(r.I);q(h,"SID",r.K),q(h,"RID",u),q(h,"AID",r.T),Me(r,h),r.m&&r.o&&Er(h,r.m,r.o),u=new Nt(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Ji(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),yr(r.h,u),pr(u,h,a)}function Me(r,a){r.H&&_t(r.H,function(u,h){q(a,h,u)}),r.l&&Mi({},function(u,h){q(a,h,u)})}function Ji(r,a,u){u=Math.min(r.i.length,u);var h=r.l?C(r.l.Na,r.l,r):null;t:{var v=r.i;let I=-1;for(;;){const S=["count="+u];I==-1?0<u?(I=v[0].g,S.push("ofs="+I)):I=0:S.push("ofs="+I);let U=!0;for(let nt=0;nt<u;nt++){let B=v[nt].g;const ut=v[nt].map;if(B-=I,0>B)I=Math.max(0,v[nt].g-100),U=!1;else try{ja(ut,S,"req"+B+"_")}catch{h&&h(ut)}}if(U){h=S.join("&");break t}}}return r=r.i.splice(0,u),a.D=r,h}function Zi(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Ee||ui(),ve||(Ee(),ve=!0),tr.add(a,r),r.v=0}}function Tr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Re(C(r.Fa,r),ns(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,ts(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Re(C(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),gn(this),ts(this))};function wr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function ts(r){r.g=new Nt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Pt(r.qa);q(a,"RID","rpc"),q(a,"SID",r.K),q(a,"AID",r.T),q(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&q(a,"TO",r.ja),q(a,"TYPE","xmlhttp"),Me(r,a),r.m&&r.o&&Er(a,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=fn(Pt(a)),u.m=null,u.P=!0,Ci(u,r)}n.Za=function(){this.C!=null&&(this.C=null,gn(this),Tr(this),gt(19))};function yn(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function es(r,a){var u=null;if(r.g==a){yn(r),wr(r),r.g=null;var h=2}else if(_r(r.h,a))u=a.D,ki(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var v=r.B;h=an(),mt(h,new Ii(h,u)),_n(r)}else Zi(r);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&za(r,a)||h==2&&Tr(r)))switch(u&&0<u.length&&(a=r.h,a.i=a.i.concat(u)),v){case 1:Kt(r,5);break;case 4:Kt(r,10);break;case 3:Kt(r,6);break;default:Kt(r,2)}}}function ns(r,a){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*a}function Kt(r,a){if(r.j.info("Error code "+a),a==2){var u=C(r.fb,r),h=r.Xa;const v=!h;h=new Gt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||hn(h,"https"),fn(h),v?La(h.toString(),u):Ba(h.toString(),u)}else gt(2);r.G=0,r.l&&r.l.sa(a),rs(r),Xi(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function rs(r){if(r.G=0,r.ka=[],r.l){const a=Oi(r.h);(a.length!=0||r.i.length!=0)&&(b(r.ka,a),b(r.ka,r.i),r.h.i.length=0,k(r.i),r.i.length=0),r.l.ra()}}function is(r,a,u){var h=u instanceof Gt?Pt(u):new Gt(u);if(h.g!="")a&&(h.g=a+"."+h.g),dn(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var I=new Gt(null);h&&hn(I,h),a&&(I.g=a),v&&dn(I,v),u&&(I.l=u),h=I}return u=r.D,a=r.ya,u&&a&&q(h,u,a),q(h,"VER",r.la),Me(r,h),h}function ss(r,a,u){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new K(new De({eb:u})):new K(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function os(){}n=os.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function En(){}En.prototype.g=function(r,a){return new Et(r,a)};function Et(r,a){lt.call(this),this.g=new Qi(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!z(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!z(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new se(this)}D(Et,lt),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){vr(this.g)},Et.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=lr(r),r=u);a.i.push(new Sa(a.Ya++,r)),a.G==3&&_n(a)},Et.prototype.N=function(){this.g.l=null,delete this.j,vr(this.g),delete this.g,Et.aa.N.call(this)};function as(r){cr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const u in a){r=u;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}D(as,cr);function ls(){hr.call(this),this.status=1}D(ls,hr);function se(r){this.g=r}D(se,os),se.prototype.ua=function(){mt(this.g,"a")},se.prototype.ta=function(r){mt(this.g,new as(r))},se.prototype.sa=function(r){mt(this.g,new ls)},se.prototype.ra=function(){mt(this.g,"b")},En.prototype.createWebChannel=En.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,ho=function(){return new En},co=function(){return an()},uo=Ht,Lr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ln.NO_ERROR=0,ln.TIMEOUT=8,ln.HTTP_ERROR=6,Sn=ln,Ai.COMPLETE="complete",lo=Ai,Ei.EventType=Ie,Ie.OPEN="a",Ie.CLOSE="b",Ie.ERROR="c",Ie.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Le=Ei,ao=De,K.prototype.listenOnce=K.prototype.L,K.prototype.getLastError=K.prototype.Ka,K.prototype.getLastErrorCode=K.prototype.Ba,K.prototype.getStatus=K.prototype.Z,K.prototype.getResponseJson=K.prototype.Oa,K.prototype.getResponseText=K.prototype.oa,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Ha,oo=K}).apply(typeof wn<"u"?wn:typeof self<"u"?self:typeof window<"u"?window:{});const vs="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ge="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Zs("@firebase/firestore");function Fe(){return Zt.logLevel}function N(n,...t){if(Zt.logLevel<=L.DEBUG){const e=t.map(Wr);Zt.debug(`Firestore (${ge}): ${n}`,...e)}}function te(n,...t){if(Zt.logLevel<=L.ERROR){const e=t.map(Wr);Zt.error(`Firestore (${ge}): ${n}`,...e)}}function On(n,...t){if(Zt.logLevel<=L.WARN){const e=t.map(Wr);Zt.warn(`Firestore (${ge}): ${n}`,...e)}}function Wr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n="Unexpected state"){const t=`FIRESTORE (${ge}) INTERNAL ASSERTION FAILED: `+n;throw te(t),new Error(t)}function et(n,t){n||F()}function H(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends me{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(dt.UNAUTHENTICATED))}shutdown(){}}class Uu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ju{constructor(t){this.t=t,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=d=>this.i!==i?(i=this.i,e(d)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(et(typeof i.accessToken=="string"),new fo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new dt(t)}}class $u{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qu{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new $u(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(et(typeof e.token=="string"),this.R=e.token,new Hu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Gu(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function $(n,t){return n<t?-1:n>t?1:0}function ce(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new tt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new tt(0,0))}static max(){return new G(new tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,e,i){e===void 0?e=0:e>t.length&&F(),i===void 0?i=t.length-e:i>t.length-e&&F(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return Ge.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ge?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),l=e.get(s);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class W extends Ge{construct(t,e,i){return new W(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Ku=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Ge{construct(t,e,i){return new st(t,e,i)}static isValidIdentifier(t){return Ku.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=d,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(i+=c,s++):(o(),s++)}if(o(),l)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(e)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(W.fromString(t))}static fromName(t){return new M(W.fromString(t).popFirst(5))}static empty(){return new M(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new W(t.slice()))}}function Wu(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(i===1e9?new tt(e+1,0):new tt(e,i));return new Ut(s,M.empty(),t)}function Qu(n){return new Ut(n.readTime,n.key,-1)}class Ut{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Ut(G.min(),M.empty(),-1)}static max(){return new Ut(G.max(),M.empty(),-1)}}function Xu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ju{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Yu)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,l=!1;t.forEach(c=>{++s,c.next(()=>{++o,l&&o===s&&e()},d=>i(d))}),l=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,l=new Array(o);let c=0;for(let d=0;d<o;d++){const m=d;e(t[m]).next(w=>{l[m]=w,++c,c===o&&i(l)},w=>s(w))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Zu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function zn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}go.oe=-1;function Qr(n){return n==null}function Mn(n){return n===0&&1/n==-1/0}function tc(n){return typeof n=="number"&&Number.isInteger(n)&&!Mn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Je(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function _o(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e){this.comparator=t,this.root=e||rt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new In(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new In(this.root,t,this.comparator,!1)}getReverseIterator(){return new In(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new In(this.root,t,this.comparator,!0)}}class In{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??rt.RED,this.left=s??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new rt(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const t=this.left.check();if(t!==this.right.check())throw F();return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,i,s,o){return this}insert(t,e,i){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ws(this.data.getIterator())}getIteratorFrom(t){return new ws(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class ws{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new It([])}unionWith(t){let e=new pt(st.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new It(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ce(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ec("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const nc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(et(!!n),typeof n=="string"){let t=0;const e=nc.exec(n);if(et(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ke(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function yo(n){const t=n.mapValue.fields.__previous_value__;return Xr(t)?yo(t):t}function Fn(n){const t=ee(n.mapValue.fields.__local_write_time__.timestampValue);return new tt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,i,s,o,l,c,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=m}}class xn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function he(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Xr(n)?4:ic(n)?9007199254740991:10:F()}function At(n,t){if(n===t)return!0;const e=he(n);if(e!==he(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Fn(n).isEqual(Fn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=ee(s.timestampValue),c=ee(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ke(s.bytesValue).isEqual(Ke(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return it(s.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return it(s.integerValue)===it(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=it(s.doubleValue),c=it(o.doubleValue);return l===c?Mn(l)===Mn(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return ce(n.arrayValue.values||[],t.arrayValue.values||[],At);case 10:return function(s,o){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ts(l)!==Ts(c))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(c[d]===void 0||!At(l[d],c[d])))return!1;return!0}(n,t);default:return F()}}function We(n,t){return(n.values||[]).find(e=>At(e,t))!==void 0}function de(n,t){if(n===t)return 0;const e=he(n),i=he(t);if(e!==i)return $(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=it(o.integerValue||o.doubleValue),d=it(l.integerValue||l.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,t);case 3:return Is(n.timestampValue,t.timestampValue);case 4:return Is(Fn(n),Fn(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,l){const c=Ke(o),d=Ke(l);return c.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),d=l.split("/");for(let m=0;m<c.length&&m<d.length;m++){const w=$(c[m],d[m]);if(w!==0)return w}return $(c.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=$(it(o.latitude),it(l.latitude));return c!==0?c:$(it(o.longitude),it(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,l){const c=o.values||[],d=l.values||[];for(let m=0;m<c.length&&m<d.length;++m){const w=de(c[m],d[m]);if(w)return w}return $(c.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,l){if(o===An.mapValue&&l===An.mapValue)return 0;if(o===An.mapValue)return 1;if(l===An.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),m=l.fields||{},w=Object.keys(m);d.sort(),w.sort();for(let A=0;A<d.length&&A<w.length;++A){const C=$(d[A],w[A]);if(C!==0)return C;const V=de(c[d[A]],m[w[A]]);if(V!==0)return V}return $(d.length,w.length)}(n.mapValue,t.mapValue);default:throw F()}}function Is(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=ee(n),i=ee(t),s=$(e.seconds,i.seconds);return s!==0?s:$(e.nanos,i.nanos)}function fe(n){return Br(n)}function Br(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ee(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ke(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=Br(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of i)o?o=!1:s+=",",s+=`${l}:${Br(e.fields[l])}`;return s+"}"}(n.mapValue):F()}function Ur(n){return!!n&&"integerValue"in n}function Yr(n){return!!n&&"arrayValue"in n}function bn(n){return!!n&&"mapValue"in n}function Be(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Je(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Be(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Be(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ic(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!bn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Be(e)}setAll(t){let e=st.emptyPath(),i={},s=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,i,s),i={},s=[],e=c.popLast()}l?i[c.lastSegment()]=Be(l):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());bn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return At(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];bn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Je(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new wt(Be(this.value))}}function Eo(n){const t=[];return Je(n.fields,(e,i)=>{const s=new st([e]);if(bn(i)){const o=Eo(i.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new It(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,i,s,o,l,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new Tt(t,0,G.min(),G.min(),G.min(),wt.empty(),0)}static newFoundDocument(t,e,i,s){return new Tt(t,1,e,G.min(),i,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,G.min(),G.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,G.min(),G.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e){this.position=t,this.inclusive=e}}function As(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?i=M.comparator(M.fromName(l.referenceValue),e.key):i=de(l,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Rs(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!At(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,e="asc"){this.field=t,this.dir=e}}function sc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{}class Z extends vo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new ac(t,e,i):e==="array-contains"?new cc(t,i):e==="in"?new hc(t,i):e==="not-in"?new dc(t,i):e==="array-contains-any"?new fc(t,i):new Z(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new lc(t,i):new uc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(de(e,this.value)):e!==null&&he(this.value)===he(e)&&this.matchesComparison(de(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends vo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new jt(t,e)}matches(t){return To(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function To(n){return n.op==="and"}function wo(n){return oc(n)&&To(n)}function oc(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function jr(n){if(n instanceof Z)return n.field.canonicalString()+n.op.toString()+fe(n.value);if(wo(n))return n.filters.map(t=>jr(t)).join(",");{const t=n.filters.map(e=>jr(e)).join(",");return`${n.op}(${t})`}}function Io(n,t){return n instanceof Z?function(i,s){return s instanceof Z&&i.op===s.op&&i.field.isEqual(s.field)&&At(i.value,s.value)}(n,t):n instanceof jt?function(i,s){return s instanceof jt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,l,c)=>o&&Io(l,s.filters[c]),!0):!1}(n,t):void F()}function Ao(n){return n instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${fe(e.value)}`}(n):n instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ao).join(" ,")+"}"}(n):"Filter"}class ac extends Z{constructor(t,e,i){super(t,e,i),this.key=M.fromName(i.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class lc extends Z{constructor(t,e){super(t,"in",e),this.keys=Ro("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class uc extends Z{constructor(t,e){super(t,"not-in",e),this.keys=Ro("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ro(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>M.fromName(i.referenceValue))}class cc extends Z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yr(e)&&We(e.arrayValue,this.value)}}class hc extends Z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&We(this.value.arrayValue,e)}}class dc extends Z{constructor(t,e){super(t,"not-in",e)}matches(t){if(We(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!We(this.value.arrayValue,e)}}class fc extends Z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>We(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e=null,i=[],s=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=l,this.endAt=c,this.ue=null}}function Ps(n,t=null,e=[],i=[],s=null,o=null,l=null){return new pc(n,t,e,i,s,o,l)}function Jr(n){const t=H(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>jr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),Qr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>fe(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>fe(i)).join(",")),t.ue=e}return t.ue}function Zr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!sc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Io(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Rs(n.startAt,t.startAt)&&Rs(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e=null,i=[],s=[],o=null,l="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mc(n,t,e,i,s,o,l,c){return new Gn(n,t,e,i,s,o,l,c)}function gc(n){return new Gn(n)}function Cs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _c(n){return n.collectionGroup!==null}function Ue(n){const t=H(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new pt(st.comparator);return l.filters.forEach(d=>{d.getFlattenedFilters().forEach(m=>{m.isInequality()&&(c=c.add(m.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Bn(o,i))}),e.has(st.keyField().canonicalString())||t.ce.push(new Bn(st.keyField(),i))}return t.ce}function Yt(n){const t=H(n);return t.le||(t.le=yc(t,Ue(n))),t.le}function yc(n,t){if(n.limitType==="F")return Ps(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Bn(s.field,o)});const e=n.endAt?new Ln(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ln(n.startAt.position,n.startAt.inclusive):null;return Ps(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function $r(n,t,e){return new Gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Po(n,t){return Zr(Yt(n),Yt(t))&&n.limitType===t.limitType}function Co(n){return`${Jr(Yt(n))}|lt:${n.limitType}`}function xe(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Ao(s)).join(", ")}]`),Qr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>fe(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>fe(s)).join(",")),`Target(${i})`}(Yt(n))}; limitType=${n.limitType})`}function ti(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):M.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of Ue(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(l,c,d){const m=As(l,c,d);return l.inclusive?m<=0:m<0}(i.startAt,Ue(i),s)||i.endAt&&!function(l,c,d){const m=As(l,c,d);return l.inclusive?m>=0:m>0}(i.endAt,Ue(i),s))}(n,t)}function Ec(n){return(t,e)=>{let i=!1;for(const s of Ue(n)){const o=vc(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function vc(n,t,e){const i=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,l,c){const d=l.data.field(o),m=c.data.field(o);return d!==null&&m!==null?de(d,m):F()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Je(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return _o(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new yt(M.comparator);function Un(){return Tc}const So=new yt(M.comparator);function Rn(...n){let t=So;for(const e of n)t=t.insert(e.key,e);return t}function bo(n){let t=So;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Qt(){return je()}function Vo(){return je()}function je(){return new _e(n=>n.toString(),(n,t)=>n.isEqual(t))}const wc=new yt(M.comparator),Ic=new pt(M.comparator);function ft(...n){let t=Ic;for(const e of n)t=t.add(e);return t}const Ac=new pt($);function Rc(){return Ac}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mn(t)?"-0":t}}function No(n){return{integerValue:""+n}}function Pc(n,t){return tc(t)?No(t):Do(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this._=void 0}}function Cc(n,t,e){return n instanceof jn?function(s,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Xr(o)&&(o=yo(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof Qe?Oo(n,t):n instanceof Xe?Mo(n,t):function(s,o){const l=ko(s,o),c=Ss(l)+Ss(s.Pe);return Ur(l)&&Ur(s.Pe)?No(c):Do(s.serializer,c)}(n,t)}function Sc(n,t,e){return n instanceof Qe?Oo(n,t):n instanceof Xe?Mo(n,t):e}function ko(n,t){return n instanceof $n?function(i){return Ur(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class jn extends Kn{}class Qe extends Kn{constructor(t){super(),this.elements=t}}function Oo(n,t){const e=Fo(t);for(const i of n.elements)e.some(s=>At(s,i))||e.push(i);return{arrayValue:{values:e}}}class Xe extends Kn{constructor(t){super(),this.elements=t}}function Mo(n,t){let e=Fo(t);for(const i of n.elements)e=e.filter(s=>!At(s,i));return{arrayValue:{values:e}}}class $n extends Kn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ss(n){return it(n.integerValue||n.doubleValue)}function Fo(n){return Yr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function bc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Qe&&s instanceof Qe||i instanceof Xe&&s instanceof Xe?ce(i.elements,s.elements,At):i instanceof $n&&s instanceof $n?At(i.Pe,s.Pe):i instanceof jn&&s instanceof jn}(n.transform,t.transform)}class Vc{constructor(t,e){this.version=t,this.transformResults=e}}class St{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new St}static exists(t){return new St(void 0,t)}static updateTime(t){return new St(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Vn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Wn{}function xo(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Bo(n.key,St.none()):new Ze(n.key,n.data,St.none());{const e=n.data,i=wt.empty();let s=new pt(st.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?i.delete(o):i.set(o,l),s=s.add(o)}return new ne(n.key,i,new It(s.toArray()),St.none())}}function Dc(n,t,e){n instanceof Ze?function(s,o,l){const c=s.value.clone(),d=Vs(s.fieldTransforms,o,l.transformResults);c.setAll(d),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ne?function(s,o,l){if(!Vn(s.precondition,o))return void o.convertToUnknownDocument(l.version);const c=Vs(s.fieldTransforms,o,l.transformResults),d=o.data;d.setAll(Lo(s)),d.setAll(c),o.convertToFoundDocument(l.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function $e(n,t,e,i){return n instanceof Ze?function(o,l,c,d){if(!Vn(o.precondition,l))return c;const m=o.value.clone(),w=Ds(o.fieldTransforms,d,l);return m.setAll(w),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null}(n,t,e,i):n instanceof ne?function(o,l,c,d){if(!Vn(o.precondition,l))return c;const m=Ds(o.fieldTransforms,d,l),w=l.data;return w.setAll(Lo(o)),w.setAll(m),l.convertToFoundDocument(l.version,w).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,i):function(o,l,c){return Vn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function Nc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=ko(i.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(i.field,o))}return e||null}function bs(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ce(i,s,(o,l)=>bc(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ze extends Wn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ne extends Wn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Lo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Vs(n,t,e){const i=new Map;et(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,c=t.data.field(o.field);i.set(o.field,Sc(l,c,e[s]))}return i}function Ds(n,t,e){const i=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);i.set(s.field,Cc(o,l,t))}return i}class Bo extends Wn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kc extends Wn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Dc(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=$e(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=$e(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Vo();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(s.key)?null:c;const d=xo(l,c);d!==null&&i.set(s.key,d),l.isValidDocument()||l.convertToNoDocument(G.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ft())}isEqual(t){return this.batchId===t.batchId&&ce(this.mutations,t.mutations,(e,i)=>bs(e,i))&&ce(this.baseMutations,t.baseMutations,(e,i)=>bs(e,i))}}class ei{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){et(t.mutations.length===i.length);let s=function(){return wc}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,i[l].version);return new ei(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,x;function Fc(n){switch(n){default:return F();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function xc(n){if(n===void 0)return te("GRPC error has no .code"),P.UNKNOWN;switch(n){case X.OK:return P.OK;case X.CANCELLED:return P.CANCELLED;case X.UNKNOWN:return P.UNKNOWN;case X.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case X.INTERNAL:return P.INTERNAL;case X.UNAVAILABLE:return P.UNAVAILABLE;case X.UNAUTHENTICATED:return P.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case X.NOT_FOUND:return P.NOT_FOUND;case X.ALREADY_EXISTS:return P.ALREADY_EXISTS;case X.PERMISSION_DENIED:return P.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case X.ABORTED:return P.ABORTED;case X.OUT_OF_RANGE:return P.OUT_OF_RANGE;case X.UNIMPLEMENTED:return P.UNIMPLEMENTED;case X.DATA_LOSS:return P.DATA_LOSS;default:return F()}}(x=X||(X={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new so([4294967295,4294967295],0);class Lc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function qr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Uc(n,t){return qr(n,t.toTimestamp())}function ue(n){return et(!!n),G.fromTimestamp(function(e){const i=ee(e);return new tt(i.seconds,i.nanos)}(n))}function Uo(n,t){return Hr(n,t).canonicalString()}function Hr(n,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function jc(n){const t=W.fromString(n);return et(Qc(t)),t}function zr(n,t){return Uo(n.databaseId,t.path)}function $c(n){const t=jc(n);return t.length===4?W.emptyPath():Hc(t)}function qc(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hc(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ns(n,t,e){return{name:zr(n,t),fields:e.value.mapValue.fields}}function zc(n,t){let e;if(t instanceof Ze)e={update:Ns(n,t.key,t.value)};else if(t instanceof Bo)e={delete:zr(n,t.key)};else if(t instanceof ne)e={update:Ns(n,t.key,t.data),updateMask:Wc(t.fieldMask)};else{if(!(t instanceof kc))return F();e={verify:zr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,l){const c=l.transform;if(c instanceof jn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qe)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xe)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof $n)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw F()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Uc(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F()}(n,t.precondition)),e}function Gc(n,t){return n&&n.length>0?(et(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?ue(s.updateTime):ue(o);return l.isEqual(G.min())&&(l=ue(o)),new Vc(l,s.transformResults||[])}(e,t))):[]}function Kc(n){let t=$c(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){et(i===1);const w=e.from[0];w.allDescendants?s=w.collectionId:t=t.child(w.collectionId)}let o=[];e.where&&(o=function(A){const C=jo(A);return C instanceof jt&&wo(C)?C.getFilters():[C]}(e.where));let l=[];e.orderBy&&(l=function(A){return A.map(C=>function(D){return new Bn(ae(D.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(C))}(e.orderBy));let c=null;e.limit&&(c=function(A){let C;return C=typeof A=="object"?A.value:A,Qr(C)?null:C}(e.limit));let d=null;e.startAt&&(d=function(A){const C=!!A.before,V=A.values||[];return new Ln(V,C)}(e.startAt));let m=null;return e.endAt&&(m=function(A){const C=!A.before,V=A.values||[];return new Ln(V,C)}(e.endAt)),mc(t,s,l,o,c,"F",d,m)}function jo(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ae(e.unaryFilter.field);return Z.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ae(e.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ae(e.unaryFilter.field);return Z.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=ae(e.unaryFilter.field);return Z.create(l,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(e){return Z.create(ae(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(i=>jo(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(n):F()}function ae(n){return st.fromServerFormat(n.fieldPath)}function Wc(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Qc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t){this.ct=t}}function Yc(n){const t=Kc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$r(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this._n=new Zc}addToCollectionParentIndex(t,e){return this._n.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ut.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Zc{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new pt(W.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new pt(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new pe(0)}static Ln(){return new pe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.changes=new _e(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&$e(i.mutation,s,It.empty(),tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ft()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ft()){const s=Qt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let l=Rn();return o.forEach((c,d)=>{l=l.insert(c,d.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const i=Qt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ft()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,i,s){let o=Un();const l=je(),c=function(){return je()}();return e.forEach((d,m)=>{const w=i.get(m.key);s.has(m.key)&&(w===void 0||w.mutation instanceof ne)?o=o.insert(m.key,m):w!==void 0?(l.set(m.key,w.mutation.getFieldMask()),$e(w.mutation,m,w.mutation.getFieldMask(),tt.now())):l.set(m.key,It.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((m,w)=>l.set(m,w)),e.forEach((m,w)=>{var A;return c.set(m,new eh(w,(A=l.get(m))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const i=je();let s=new yt((l,c)=>l-c),o=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(d=>{const m=e.get(d);if(m===null)return;let w=i.get(d)||It.empty();w=c.applyToLocalView(m,w),i.set(d,w);const A=(s.get(c.batchId)||ft()).add(d);s=s.insert(c.batchId,A)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),m=d.key,w=d.value,A=Vo();w.forEach(C=>{if(!o.has(C)){const V=xo(e.get(C),i.get(C));V!==null&&A.set(C,V),o=o.add(C)}}),l.push(this.documentOverlayCache.saveOverlays(t,m,A))}return R.waitFor(l)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(l){return M.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):_c(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Qt());let c=-1,d=o;return l.next(m=>R.forEach(m,(w,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(w)?R.resolve():this.remoteDocumentCache.getEntry(t,w).next(C=>{d=d.insert(w,C)}))).next(()=>this.populateOverlays(t,m,o)).next(()=>this.computeViews(t,d,m,ft())).next(w=>({batchId:c,changes:bo(w)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(i=>{let s=Rn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let l=Rn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,d=>{const m=function(A,C){return new Gn(C,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,m,i,s).next(w=>{w.forEach((A,C)=>{l=l.insert(A,C)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(l=>{o.forEach((d,m)=>{const w=m.getKey();l.get(w)===null&&(l=l.insert(w,Tt.newInvalidDocument(w)))});let c=Rn();return l.forEach((d,m)=>{const w=o.get(d);w!==void 0&&$e(w.mutation,m,It.empty(),tt.now()),ti(e,m)&&(c=c.insert(d,m))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return R.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ue(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Yc(s.bundledQuery),readTime:ue(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.overlays=new yt(M.comparator),this.hr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Qt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Qt(),o=e.length+1,l=new M(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const d=c.getNext().value,m=d.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===o&&d.largestBatchId>i&&s.set(d.getKey(),d)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new yt((m,w)=>m-w);const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>i){let w=o.get(m.largestBatchId);w===null&&(w=Qt(),o=o.insert(m.largestBatchId,w)),w.set(m.getKey(),m)}}const c=Qt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((m,w)=>c.set(m,w)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const l=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(i.key,new Mc(e,i));let o=this.hr.get(e);o===void 0&&(o=ft(),this.hr.set(e,o)),this.hr.set(e,o.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.Pr=new pt(J.Ir),this.Tr=new pt(J.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const i=new J(t,e);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Ar(new J(t,e))}Rr(t,e){t.forEach(i=>this.removeReference(i,e))}Vr(t){const e=new M(new W([])),i=new J(e,t),s=new J(e,t+1),o=[];return this.Tr.forEachInRange([i,s],l=>{this.Ar(l),o.push(l.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new M(new W([])),i=new J(e,t),s=new J(e,t+1);let o=ft();return this.Tr.forEachInRange([i,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new J(t,0),i=this.Pr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class J{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return M.comparator(t.key,e.key)||$(t.pr,e.pr)}static Er(t,e){return $(t.pr,e.pr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new pt(J.Ir)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Oc(o,e,i,s);this.mutationQueue.push(l);for(const c of s)this.wr=this.wr.add(new J(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.br(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new J(e,0),s=new J(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([i,s],l=>{const c=this.Sr(l.pr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new pt($);return e.forEach(s=>{const o=new J(s,0),l=new J(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,l],c=>{i=i.add(c.pr)})}),R.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;M.isDocumentKey(o)||(o=o.child(""));const l=new J(new M(o),0);let c=new pt($);return this.wr.forEachWhile(d=>{const m=d.key.path;return!!i.isPrefixOf(m)&&(m.length===s&&(c=c.add(d.pr)),!0)},l),R.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(i=>{const s=this.Sr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){et(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return R.forEach(e.mutations,s=>{const o=new J(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,e){const i=new J(e,0),s=this.wr.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.vr=t,this.docs=function(){return new yt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,l=this.vr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let i=Un();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=Un();const l=e.path,c=new M(l.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:m,value:{document:w}}=d.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||Xu(Qu(w),i)<=0||(s.has(w.key)||ti(e,w))&&(o=o.insert(w.key,w.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){F()}Fr(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new ah(this)}getSize(t){return R.resolve(this.size)}}class ah extends th{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.persistence=t,this.Mr=new _e(e=>Jr(e),Zr),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ni,this.targetCount=0,this.Lr=pe.Nn()}forEachTarget(t,e){return this.Mr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Or&&(this.Or=e),R.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new pe(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.qn(e),R.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Mr.forEach((l,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Mr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Mr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Nr.dr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Nr.Rr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Nr.gr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e){this.Br={},this.overlays={},this.kr=new go(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new lh(this),this.indexManager=new Jc,this.remoteDocumentCache=function(s){return new oh(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new Xc(e),this.$r=new rh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ih,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Br[t.toKey()];return i||(i=new sh(e,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,i){N("MemoryPersistence","Starting transaction:",t);const s=new ch(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return R.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,e)))}}class ch extends Ju{constructor(t){super(),this.currentSequenceNumber=t}}class ri{constructor(t){this.persistence=t,this.zr=new ni,this.jr=null}static Hr(t){return new ri(t)}get Jr(){if(this.jr)return this.jr;throw F()}addReference(t,e,i){return this.zr.addReference(i,e),this.Jr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.zr.removeReference(i,e),this.Jr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),R.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,i=>{const s=M.fromPath(i);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,G.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(i=>{i?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return R.or([()=>R.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.qi=i,this.Qi=s}static Ki(t,e){let i=ft(),s=ft();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ii(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return wl()?8:Zu(vl())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.ji(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Hi(t,e,s,i).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new hh;return this.Ji(t,e,l).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,l,c.size)})}).next(()=>o.result)}Yi(t,e,i,s){return i.documentReadCount<this.Wi?(Fe()<=L.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",xe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(Fe()<=L.DEBUG&&N("QueryEngine","Query:",xe(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(Fe()<=L.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",xe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Yt(e))):R.resolve())}ji(t,e){if(Cs(e))return R.resolve(null);let i=Yt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=$r(e,null,"F"),i=Yt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const l=ft(...o);return this.zi.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,i).next(d=>{const m=this.Zi(e,c);return this.Xi(e,m,l,d.readTime)?this.ji(t,$r(e,null,"F")):this.es(t,m,e,d)}))})))}Hi(t,e,i,s){return Cs(e)||s.isEqual(G.min())?R.resolve(null):this.zi.getDocuments(t,i).next(o=>{const l=this.Zi(e,o);return this.Xi(e,l,i,s)?R.resolve(null):(Fe()<=L.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xe(e)),this.es(t,l,e,Wu(s,-1)).next(c=>c))})}Zi(t,e){let i=new pt(Ec(t));return e.forEach((s,o)=>{ti(t,o)&&(i=i.add(o))}),i}Xi(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,i){return Fe()<=L.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",xe(e)),this.zi.getDocumentsMatchingQuery(t,e,Ut.min(),i)}es(t,e,i,s){return this.zi.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,e,i,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new yt($),this.rs=new _e(o=>Jr(o),Zr),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function ph(n,t,e,i){return new fh(n,t,e,i)}async function $o(n,t){const e=H(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const l=[],c=[];let d=ft();for(const m of s){l.push(m.batchId);for(const w of m.mutations)d=d.add(w.key)}for(const m of o){c.push(m.batchId);for(const w of m.mutations)d=d.add(w.key)}return e.localDocuments.getDocuments(i,d).next(m=>({us:m,removedBatchIds:l,addedBatchIds:c}))})})}function mh(n,t){const e=H(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(c,d,m,w){const A=m.batch,C=A.keys();let V=R.resolve();return C.forEach(D=>{V=V.next(()=>w.getEntry(d,D)).next(k=>{const b=m.docVersions.get(D);et(b!==null),k.version.compareTo(b)<0&&(A.applyToRemoteDocument(k,m),k.isValidDocument()&&(k.setReadTime(m.commitVersion),w.addEntry(k)))})}),V.next(()=>c.mutationQueue.removeMutationBatch(d,A))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let d=ft();for(let m=0;m<c.mutationResults.length;++m)c.mutationResults[m].transformResults.length>0&&(d=d.add(c.batch.mutations[m].key));return d}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function gh(n){const t=H(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function _h(n,t){const e=H(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class ks{constructor(){this.activeTargetIds=Rc()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class yh{constructor(){this.no=new ks,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,i){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ks,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn=null;function Sr(){return Pn===null?Pn=function(){return 268435456+Math.round(2147483648*Math.random())}():Pn++,"0x"+Pn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class wh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,i,s,o,l){const c=Sr(),d=this.vo(e,i.toUriEncodedString());N("RestConnection",`Sending RPC '${e}' ${c}:`,d,s);const m={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(m,o,l),this.Mo(e,d,m,s).then(w=>(N("RestConnection",`Received RPC '${e}' ${c}: `,w),w),w=>{throw On("RestConnection",`RPC '${e}' ${c} failed with error: `,w,"url: ",d,"request:",s),w})}xo(e,i,s,o,l,c){return this.Co(e,i,s,o,l)}Fo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ge}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}vo(e,i){const s=vh[e];return`${this.wo}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,i,s){const o=Sr();return new Promise((l,c)=>{const d=new oo;d.setWithCredentials(!0),d.listenOnce(lo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Sn.NO_ERROR:const w=d.getResponseJson();N(ht,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(w)),l(w);break;case Sn.TIMEOUT:N(ht,`RPC '${t}' ${o} timed out`),c(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Sn.HTTP_ERROR:const A=d.getStatus();if(N(ht,`RPC '${t}' ${o} failed with status:`,A,"response text:",d.getResponseText()),A>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const V=C==null?void 0:C.error;if(V&&V.status&&V.message){const D=function(b){const j=b.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(V.status);c(new O(D,V.message))}else c(new O(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new O(P.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{N(ht,`RPC '${t}' ${o} completed.`)}});const m=JSON.stringify(s);N(ht,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",m,i,15)})}Oo(t,e,i){const s=Sr(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=ho(),c=co(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(d.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(d.xmlHttpFactory=new ao({})),this.Fo(d.initMessageHeaders,e,i),d.encodeInitMessageHeaders=!0;const w=o.join("");N(ht,`Creating RPC '${t}' stream ${s}: ${w}`,d);const A=l.createWebChannel(w,d);let C=!1,V=!1;const D=new Th({lo:b=>{V?N(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,b):(C||(N(ht,`Opening RPC '${t}' stream ${s} transport.`),A.open(),C=!0),N(ht,`RPC '${t}' stream ${s} sending:`,b),A.send(b))},ho:()=>A.close()}),k=(b,j,z)=>{b.listen(j,Q=>{try{z(Q)}catch(ot){setTimeout(()=>{throw ot},0)}})};return k(A,Le.EventType.OPEN,()=>{V||(N(ht,`RPC '${t}' stream ${s} transport opened.`),D.mo())}),k(A,Le.EventType.CLOSE,()=>{V||(V=!0,N(ht,`RPC '${t}' stream ${s} transport closed`),D.po())}),k(A,Le.EventType.ERROR,b=>{V||(V=!0,On(ht,`RPC '${t}' stream ${s} transport errored:`,b),D.po(new O(P.UNAVAILABLE,"The operation could not be completed")))}),k(A,Le.EventType.MESSAGE,b=>{var j;if(!V){const z=b.data[0];et(!!z);const Q=z,ot=Q.error||((j=Q[0])===null||j===void 0?void 0:j.error);if(ot){N(ht,`RPC '${t}' stream ${s} received error:`,ot);const qt=ot.status;let _t=function(g){const _=X[g];if(_!==void 0)return xc(_)}(qt),E=ot.message;_t===void 0&&(_t=P.INTERNAL,E="Unknown error status: "+qt+" with message "+ot.message),V=!0,D.po(new O(_t,E)),A.close()}else N(ht,`RPC '${t}' stream ${s} received:`,z),D.yo(z)}}),k(c,uo.STAT_EVENT,b=>{b.stat===Lr.PROXY?N(ht,`RPC '${t}' stream ${s} detected buffering proxy`):b.stat===Lr.NOPROXY&&N(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function br(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n){return new Lc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,e,i=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=i,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-i);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e,i,s,o,l,c,d){this.oi=t,this.Go=i,this.zo=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new qo(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.jo===e&&this.u_(i,s)},i=>{t(()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(s)})})}u_(t,e){const i=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{i(()=>this.c_(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ah extends Ih{constructor(t,e,i,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,l),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(et(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Gc(t.writeResults,t.commitTime),i=ue(t.commitTime);return this.listener.A_(i,e)}return et(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=qc(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>zc(this.serializer,i))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(t,Hr(e,i),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(P.UNKNOWN,o.toString())})}xo(t,e,i,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.xo(t,Hr(e,i),s,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new O(P.UNKNOWN,l.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Ph{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(te(e),this.y_=!1):N("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(l=>{i.enqueueAndForget(async()=>{en(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(d){const m=H(d);m.M_.add(4),await tn(m),m.N_.set("Unknown"),m.M_.delete(4),await Xn(m)}(this))})}),this.N_=new Ph(i,s)}}async function Xn(n){if(en(n))for(const t of n.x_)await t(!0)}async function tn(n){for(const t of n.x_)await t(!1)}function en(n){return H(n).M_.size===0}async function Ho(n,t,e){if(!zn(t))throw t;n.M_.add(1),await tn(n),n.N_.set("Offline"),e||(e=()=>gh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Xn(n)})}function zo(n,t){return t().catch(e=>Ho(n,e,t))}async function Yn(n){const t=H(n),e=$t(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Sh(t);)try{const s=await _h(t.localStore,i);if(s===null){t.v_.length===0&&e.n_();break}i=s.batchId,bh(t,s)}catch(s){await Ho(t,s)}Go(t)&&Ko(t)}function Sh(n){return en(n)&&n.v_.length<10}function bh(n,t){n.v_.push(t);const e=$t(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Go(n){return en(n)&&!$t(n).Zo()&&n.v_.length>0}function Ko(n){$t(n).start()}async function Vh(n){$t(n).V_()}async function Dh(n){const t=$t(n);for(const e of n.v_)t.d_(e.mutations)}async function Nh(n,t,e){const i=n.v_.shift(),s=ei.from(i,t,e);await zo(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Yn(n)}async function kh(n,t){t&&$t(n).E_&&await async function(i,s){if(function(l){return Fc(l)&&l!==P.ABORTED}(s.code)){const o=i.v_.shift();$t(i).t_(),await zo(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Yn(i)}}(n,t),Go(n)&&Ko(n)}async function Ms(n,t){const e=H(n);e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const i=en(e);e.M_.add(3),await tn(e),i&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Xn(e)}async function Oh(n,t){const e=H(n);t?(e.M_.delete(2),await Xn(e)):t||(e.M_.add(2),await tn(e),e.N_.set("Unknown"))}function $t(n){return n.k_||(n.k_=function(e,i,s){const o=H(e);return o.f_(),new Ah(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Vh.bind(null,n),Ao:kh.bind(null,n),R_:Dh.bind(null,n),A_:Nh.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Yn(n)):(await n.k_.stop(),n.v_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const l=Date.now()+i,c=new si(t,e,l,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wo(n,t){if(te("AsyncQueue",`${t}: ${n}`),zn(n))return new O(P.UNAVAILABLE,`${t}: ${n}`);throw n}class Mh{constructor(){this.queries=new _e(t=>Co(t),Po),this.onlineState="Unknown",this.z_=new Set}}function Fh(n){n.z_.forEach(t=>{t.next()})}var Fs,xs;(xs=Fs||(Fs={})).J_="default",xs.Cache="cache";class xh{constructor(t,e,i,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Sa={},this.ba=new _e(c=>Co(c),Po),this.Da=new Map,this.Ca=new Set,this.va=new yt(M.comparator),this.Fa=new Map,this.Ma=new ni,this.xa={},this.Oa=new Map,this.Na=pe.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Lh(n,t,e){const i=$h(n);try{const s=await function(l,c){const d=H(l),m=tt.now(),w=c.reduce((V,D)=>V.add(D.key),ft());let A,C;return d.persistence.runTransaction("Locally write mutations","readwrite",V=>{let D=Un(),k=ft();return d.os.getEntries(V,w).next(b=>{D=b,D.forEach((j,z)=>{z.isValidDocument()||(k=k.add(j))})}).next(()=>d.localDocuments.getOverlayedDocuments(V,D)).next(b=>{A=b;const j=[];for(const z of c){const Q=Nc(z,A.get(z.key).overlayedDocument);Q!=null&&j.push(new ne(z.key,Q,Eo(Q.value.mapValue),St.exists(!0)))}return d.mutationQueue.addMutationBatch(V,m,j,c)}).next(b=>{C=b;const j=b.applyToLocalDocumentSet(A,k);return d.documentOverlayCache.saveOverlays(V,b.batchId,j)})}).then(()=>({batchId:C.batchId,changes:bo(A)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(l,c,d){let m=l.xa[l.currentUser.toKey()];m||(m=new yt($)),m=m.insert(c,d),l.xa[l.currentUser.toKey()]=m}(i,s.batchId,e),await Jn(i,s.changes),await Yn(i.remoteStore)}catch(s){const o=Wo(s,"Failed to persist write");e.reject(o)}}function Ls(n,t,e){const i=H(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.ba.forEach((o,l)=>{const c=l.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(l,c){const d=H(l);d.onlineState=c;let m=!1;d.queries.forEach((w,A)=>{for(const C of A.U_)C.j_(c)&&(m=!0)}),m&&Fh(d)}(i.eventManager,t),s.length&&i.Sa.h_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Bh(n,t){const e=H(n),i=t.batch.batchId;try{const s=await mh(e.localStore,t);Xo(e,i,null),Qo(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Jn(e,s)}catch(s){await mo(s)}}async function Uh(n,t,e){const i=H(n);try{const s=await function(l,c){const d=H(l);return d.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let w;return d.mutationQueue.lookupMutationBatch(m,c).next(A=>(et(A!==null),w=A.keys(),d.mutationQueue.removeMutationBatch(m,A))).next(()=>d.mutationQueue.performConsistencyCheck(m)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(m,w,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,w)).next(()=>d.localDocuments.getDocuments(m,w))})}(i.localStore,t);Xo(i,t,e),Qo(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Jn(i,s)}catch(s){await mo(s)}}function Qo(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Xo(n,t,e){const i=H(n);let s=i.xa[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.xa[i.currentUser.toKey()]=s}}async function Jn(n,t,e){const i=H(n),s=[],o=[],l=[];i.ba.isEmpty()||(i.ba.forEach((c,d)=>{l.push(i.Ba(d,t,e).then(m=>{if((m||e)&&i.isPrimaryClient){const w=m&&!m.fromCache;i.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(m){s.push(m);const w=ii.Ki(d.targetId,m);o.push(w)}}))}),await Promise.all(l),i.Sa.h_(s),await async function(d,m){const w=H(d);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>R.forEach(m,C=>R.forEach(C.qi,V=>w.persistence.referenceDelegate.addReference(A,C.targetId,V)).next(()=>R.forEach(C.Qi,V=>w.persistence.referenceDelegate.removeReference(A,C.targetId,V)))))}catch(A){if(!zn(A))throw A;N("LocalStore","Failed to update sequence numbers: "+A)}for(const A of m){const C=A.targetId;if(!A.fromCache){const V=w.ns.get(C),D=V.snapshotVersion,k=V.withLastLimboFreeSnapshotVersion(D);w.ns=w.ns.insert(C,k)}}}(i.localStore,o))}async function jh(n,t){const e=H(n);if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const i=await $o(e.localStore,t);e.currentUser=t,function(o,l){o.Oa.forEach(c=>{c.forEach(d=>{d.reject(new O(P.CANCELLED,l))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Jn(e,i.us)}}function $h(n){const t=H(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Uh.bind(null,t),t}class Bs{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Qn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ph(this.persistence,new dh,t.initialUser,this.serializer)}createPersistence(t){return new uh(ri.Hr,this.serializer)}createSharedClientState(t){return new yh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ls(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=jh.bind(null,this.syncEngine),await Oh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Mh}()}createDatastore(t){const e=Qn(t.databaseInfo.databaseId),i=function(o){return new wh(o)}(t.databaseInfo);return function(o,l,c,d){return new Rh(o,l,c,d)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,l,c){return new Ch(i,s,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ls(this.syncEngine,e,0),function(){return Os.D()?new Os:new Eh}())}createSyncEngine(t,e){return function(s,o,l,c,d,m,w){const A=new xh(s,o,l,c,d,m);return w&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(i){const s=H(i);N("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await tn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=po.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{N("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(N("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Wo(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Vr(n,t){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await $o(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Us(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Gh(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Ms(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ms(t.remoteStore,s)),n._onlineComponents=t}function zh(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Gh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!zh(e))throw e;On("Error using user provided cache. Falling back to memory cache: "+e),await Vr(n,new Bs)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Vr(n,new Bs);return n._offlineComponents}async function Kh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Us(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Us(n,new qh))),n._onlineComponents}function Wh(n){return Kh(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(n,t,e){if(!e)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Qh(n,t,e,i){if(t===!0&&i===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function $s(n){if(!M.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qs(n){if(M.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F()}function Zo(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=oi(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yo((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zn{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hs(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Bu;switch(i.type){case"firstParty":return new qu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=js.get(e);i&&(N("ComponentProvider","Removing Datastore"),js.delete(e),i.terminate())}(this),Promise.resolve()}}function Xh(n,t,e,i={}){var s;const o=(n=Zo(n,Zn))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&On("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),i.mockUserToken){let c,d;if(typeof i.mockUserToken=="string")c=i.mockUserToken,d=dt.MOCK_USER;else{c=El(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new dt(m)}n._authCredentials=new Uu(new fo(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new ai(this.firestore,t,this._query)}}class bt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class Bt extends ai{constructor(t,e,i){super(t,e,gc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new M(t))}withConverter(t){return new Bt(this.firestore,t,this._path)}}function Yh(n,t,...e){if(n=qe(n),Jo("collection","path",t),n instanceof Zn){const i=W.fromString(t,...e);return qs(i),new Bt(n,null,i)}{if(!(n instanceof bt||n instanceof Bt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(W.fromString(t,...e));return qs(i),new Bt(n.firestore,null,i)}}function Jh(n,t,...e){if(n=qe(n),arguments.length===1&&(t=po.newId()),Jo("doc","path",t),n instanceof Zn){const i=W.fromString(t,...e);return $s(i),new bt(n,null,new M(i))}{if(!(n instanceof bt||n instanceof Bt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(W.fromString(t,...e));return $s(i),new bt(n.firestore,n instanceof Bt?n.converter:null,new M(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new qo(this,"async_queue_retry"),this.hu=()=>{const e=br();e&&N("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=br();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=br();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Xt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!zn(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(i);throw te("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.uu=!1,i))));return this.iu=e,e}enqueueAfterDelay(t,e,i){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=si.createAndSchedule(this,t,e,i,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&F()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class ta extends Zn{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new Zh}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ea(this),this._firestoreClient.terminate()}}function td(n,t){const e=typeof n=="object"?n:Cu(),i=typeof n=="string"?n:"(default)",s=Iu(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=_l("firestore");o&&Xh(s,...o)}return s}function ed(n){return n._firestoreClient||ea(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ea(n){var t,e,i;const s=n._freezeSettings(),o=function(c,d,m,w){return new rc(c,d,m,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Yo(w.experimentalLongPollingOptions),w.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Hh(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ye(Vt.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ye(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=/^__.*__$/;class rd{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ze(t,this.data,e,this.fieldTransforms)}}function sa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class li{constructor(t,e,i,s,o,l){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new li(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.wu(t),s}Su(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:i,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return qn(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(sa(this.fu)&&nd.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class id{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Qn(t)}Fu(t,e,i,s=!1){return new li({fu:t,methodName:e,vu:i,path:st.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sd(n){const t=n._freezeSettings(),e=Qn(n._databaseId);return new id(n._databaseId,!!t.ignoreUndefinedProperties,e)}function od(n,t,e,i,s,o={}){const l=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);ua("Data must be an object, but it was:",l,i);const c=aa(i,l);let d,m;if(o.merge)d=new It(l.fieldMask),m=l.fieldTransforms;else if(o.mergeFields){const w=[];for(const A of o.mergeFields){const C=ad(t,A,e);if(!l.contains(C))throw new O(P.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);cd(w,C)||w.push(C)}d=new It(w),m=l.fieldTransforms.filter(A=>d.covers(A.field))}else d=null,m=l.fieldTransforms;return new rd(new wt(c),d,m)}function oa(n,t){if(la(n=qe(n)))return ua("Unsupported field value:",t,n),aa(n,t);if(n instanceof ra)return function(i,s){if(!sa(s.fu))throw s.Du(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,s){const o=[];let l=0;for(const c of i){let d=oa(c,s.bu(l));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),l++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=qe(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Pc(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=tt.fromDate(i);return{timestampValue:qr(s.serializer,o)}}if(i instanceof tt){const o=new tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:qr(s.serializer,o)}}if(i instanceof ia)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ye)return{bytesValue:Bc(s.serializer,i._byteString)};if(i instanceof bt){const o=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(o))throw s.Du(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Uo(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Du(`Unsupported field value: ${oi(i)}`)}(n,t)}function aa(n,t){const e={};return _o(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Je(n,(i,s)=>{const o=oa(s,t.pu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function la(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof ia||n instanceof Ye||n instanceof bt||n instanceof ra)}function ua(n,t,e){if(!la(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=oi(e);throw i==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+i)}}function ad(n,t,e){if((t=qe(t))instanceof na)return t._internalPath;if(typeof t=="string")return ud(n,t);throw qn("Field path arguments must be of type string or ",n,!1,void 0,e)}const ld=new RegExp("[~\\*/\\[\\]]");function ud(n,t,e){if(t.search(ld)>=0)throw qn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new na(...t.split("."))._internalPath}catch{throw qn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function qn(n,t,e,i,s){const o=i&&!i.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||l)&&(d+=" (found",o&&(d+=` in field ${i}`),l&&(d+=` in document ${s}`),d+=")"),new O(P.INVALID_ARGUMENT,c+n+d)}function cd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function dd(n,t){const e=Zo(n.firestore,ta),i=Jh(n),s=hd(n.converter,t);return fd(e,[od(sd(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,St.exists(!1))]).then(()=>i)}function fd(n,t){return function(i,s){const o=new Xt;return i.asyncQueue.enqueueAndForget(async()=>Lh(await Wh(i),s,o)),o.promise}(ed(n),t)}(function(t,e=!0){(function(s){ge=s})(Pu),kn(new He("firestore",(i,{instanceIdentifier:s,options:o})=>{const l=i.getProvider("app").getImmediate(),c=new ta(new ju(i.getProvider("auth-internal")),new zu(i.getProvider("app-check-internal")),function(m,w){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(m.options.projectId,w)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),le(vs,"4.6.3",t),le(vs,"4.6.3","esm2017")})();var Mt={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const pd={apiKey:Mt.VITE_FIREBASE_API_KEY,authDomain:Mt.VITE_FIREBASE_AUTH_DOMAIN,projectId:Mt.VITE_FIREBASE_PROJECT_ID,storageBucket:Mt.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:Mt.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:Mt.VITE_FIREBASE_APP_ID,measurementId:Mt.VITE_FIREBASE_MEASUREMENT_ID},md=no(pd),gd=td(md);console.log(Mt);const zs=["Mary, would you let me make your post-birthday celebration extra special?","How about we continue the celebration when you're back?","Would you like to extend your birthday with a special day out?","Just us two, creating moments to remember...","It's a date, right? 😊🌹"];let Dr=0;const _d=()=>{const n=document.createElement("div");n.className="popover-wizard";const t=document.createElement("p");t.className="quote",t.textContent="For each thorn, there's a rosebud... For each twilight - a dawn... For each trial - the strength to carry on, For each storm cloud - a rainbow... For each shadow - the sun... For each parting - sweet memories when sorrow is done.",n.appendChild(t);const e=document.createElement("form");e.className="date-form";const i=document.createElement("label");i.textContent="Mary, you've just made me the happiest! Now, for the cherry on top, when can I steal you away for our date? 🍒",i.className="date-label";const s=document.createElement("div");s.className="date-picker-container";const o=document.createElement("input");o.type="date",o.className="date-picker",s.appendChild(o);const l=document.createElement("button");l.type="submit",l.textContent="Submit",l.className="cute-button submit-button";const c=document.createElement("label");c.textContent="What's the best time for our date? 🌅🌃";const d=document.createElement("select");d.className="time-of-day-select",["Morning 🌅","Evening 🌃"].forEach(k=>{const b=document.createElement("option");b.value=k,b.textContent=k,d.appendChild(b)});const m=document.createElement("label");m.textContent="What cuisine shall we indulge in? 🍽️";const w=document.createElement("select");w.className="food-select",["Korean BBQ 🥩","Sushi 🍣","Picnic 🧺","Italian 🍝","French 🥐"].forEach(k=>{const b=document.createElement("option");b.value=k,b.textContent=k,w.appendChild(b)});const A=document.createElement("label");A.textContent="Which sweet treat shall we share? 🍨";const C=document.createElement("select");C.className="dessert-select",["Boba 🧋","Churro 🍫","Taiyaki 🐟"].forEach(k=>{const b=document.createElement("option");b.value=k,b.textContent=k,C.appendChild(b)});const V=document.createElement("label");V.textContent="Where shall our magical date take us? 🎠";const D=document.createElement("select");return D.className="location-select",["Aquarium 🐠","Movies 🎬","Park 🌳","Coffee Shop ☕","Exhibition 🖼️","Rooftop Bar 🍸","Helicopter Tour 🚁","Theme Park 🎡","Shopping 🛍️"].forEach(k=>{const b=document.createElement("option");b.value=k,b.textContent=k,D.appendChild(b)}),e.appendChild(i),e.appendChild(s),e.appendChild(c),e.appendChild(d),e.appendChild(m),e.appendChild(w),e.appendChild(A),e.appendChild(C),e.appendChild(V),e.appendChild(D),e.appendChild(l),e.addEventListener("submit",async k=>{k.preventDefault();const b={date:o.value,timeOfDay:d.value,cuisine:w.value,dessert:C.value,location:D.value};console.log("Form values:",b);try{const j=await dd(Yh(gd,"responses"),b);console.log("Document written with ID: ",j.id),n.classList.add("fade-out"),setTimeout(()=>{n.remove()},1e3)}catch(j){console.error("Error adding document: ",j)}}),n.appendChild(e),n},ca=()=>{if(Dr<zs.length){const n=zs[Dr];document.querySelector(".message").textContent=n,Dr++}else if(!document.querySelector(".popover-wizard")){const t=_d();document.querySelector("#app").appendChild(t)}};window.onload=()=>{const n=document.querySelector("#app"),t=new Image;t.src=al,t.className="banner",n.appendChild(t);const e=il();n.appendChild(e),Hn(),window.addEventListener("resize",Hn),Ka(40).forEach(w=>n.appendChild(w)),Ja().forEach(w=>n.appendChild(w));const o=document.createElement("div"),l=document.createElement("div");o.className="content-container",l.className="button-wrapper";const c=document.createElement("p");c.className="message",o.appendChild(c);const d=Ks("Yes","up");d.className="cute-button yes-button";const m=Ks("No","down");m.className="cute-button no-button",l.appendChild(m),l.appendChild(d),o.appendChild(l),n.appendChild(o),ca()};let Ft=Math.PI*2,Cn;const Gs=n=>{const i=Math.PI*2,s=i-.3*3,o=i+.3*4,l=i*3+.3*6,c=n==="up"?.3:-.3;Ft+=c,Ft<=s&&(console.log("show tiktok"),document.querySelector(".tiktok-embed").style.display="block",Ft=i),Ft>=o&&(console.log("All messages have been displayed"),clearInterval(Cn),Cn=setInterval(()=>{Ft+=c,Hn(),Ft>=l&&(Ft=o,clearInterval(Cn),Cn=null)},10)),Hn()},Ks=(n,t)=>{const e=document.createElement("button");return e.textContent=n,n==="Yes"?e.onclick=()=>{Gs(t),ca()}:e.onclick=()=>Gs(t),e},Hn=()=>{const n=document.querySelector(".canvas"),t=n.getBoundingClientRect();n.width=t.width,n.height=t.height,sl(n),ol(n),Za(n),rl(n,Ft)};document.querySelector("#hideTikTok").addEventListener("click",function(){document.querySelector(".tiktok-embed").style.display="none"});
