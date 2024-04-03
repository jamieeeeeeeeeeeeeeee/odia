import{s as sr,b as Zt,n as oe,r as eh,o as nh}from"../chunks/scheduler.DWWUxruK.js";import{S as ir,i as or,e as ct,b as dt,d as At,h as $,r as O,j as vt,t as Tt,y as Uo,w as qo,a as kt,A as rh,c as He,f as Qe,m as Ge,l as We,k as mt,x as gt,s as Wt,n as jo,q as Or,g as Yt,o as $o,u as Vi,p as zo}from"../chunks/index.D8lss90H.js";import{w as _e}from"../chunks/index.BpUvwN9o.js";import{B as Ko}from"../chunks/Button.uTP9coT2.js";import{i as sh}from"../chunks/india.DEOdbO_p.js";import{g as Di}from"../chunks/entry.G7l-U3G6.js";function bi(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const Jr=_e({done:0,total:0}),Ho=_e([]),jn=_e(new Set);function ki(n,t,e){const r=n.slice();return r[5]=t[e],r}function Ni(n){let t,e;function r(){return n[4](n[5])}return t=new Ko({props:{type:n[0].has(n[5])?"select":"",callback:r,text:n[5]}}),{c(){He(t.$$.fragment)},l(s){Qe(t.$$.fragment,s)},m(s,i){Ge(t,s,i),e=!0},p(s,i){n=s;const o={};i&3&&(o.type=n[0].has(n[5])?"select":""),i&2&&(o.callback=r),i&2&&(o.text=n[5]),t.$set(o)},i(s){e||(Tt(t.$$.fragment,s),e=!0)},o(s){kt(t.$$.fragment,s),e=!1},d(s){We(t,s)}}}function ih(n){let t,e,r=bi(n[1]),s=[];for(let o=0;o<r.length;o+=1)s[o]=Ni(ki(n,r,o));const i=o=>kt(s[o],1,1,()=>{s[o]=null});return{c(){t=ct("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){t=dt(o,"DIV",{class:!0});var a=At(t);for(let u=0;u<s.length;u+=1)s[u].l(a);a.forEach($),this.h()},h(){O(t,"class","svelte-hyor03")},m(o,a){vt(o,t,a);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(t,null);e=!0},p(o,[a]){if(a&7){r=bi(o[1]);let u;for(u=0;u<r.length;u+=1){const h=ki(o,r,u);s[u]?(s[u].p(h,a),Tt(s[u],1)):(s[u]=Ni(h),s[u].c(),Tt(s[u],1),s[u].m(t,null))}for(Uo(),u=r.length;u<s.length;u+=1)i(u);qo()}},i(o){if(!e){for(let a=0;a<r.length;a+=1)Tt(s[a]);e=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)kt(s[a]);e=!1},d(o){o&&$(t),rh(s,o)}}}function oh(n,t,e){let r,s;Zt(n,jn,u=>e(0,r=u)),Zt(n,Ho,u=>e(1,s=u));let{mult:i=!1}=t;function o(u){i?r.has(u)?r.delete(u):r.add(u):jn.set(new Set([u]))}const a=u=>o(u);return n.$$set=u=>{"mult"in u&&e(3,i=u.mult)},[r,s,o,i,a]}class ah extends ir{constructor(t){super(),or(this,t,oh,ih,sr,{mult:3})}}function uh(n){let t,e,r;return{c(){t=ct("div"),e=ct("div"),this.h()},l(s){t=dt(s,"DIV",{class:!0});var i=At(t);e=dt(i,"DIV",{id:!0,style:!0,class:!0});var o=At(e);o.forEach($),i.forEach($),this.h()},h(){O(e,"id","indicator"),O(e,"style",r="width:"+n[0].done/n[0].total*100+"%"),O(e,"class","svelte-1dfkqcd"),O(t,"class","svelte-1dfkqcd")},m(s,i){vt(s,t,i),mt(t,e)},p(s,[i]){i&1&&r!==(r="width:"+s[0].done/s[0].total*100+"%")&&O(e,"style",r)},i:oe,o:oe,d(s){s&&$(t)}}}function hh(n,t,e){let r;return Zt(n,Jr,s=>e(0,r=s)),[r]}class lh extends ir{constructor(t){super(),or(this,t,hh,uh,sr,{})}}var Oi={};/**
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
 */const Qo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ch=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],o=n[e++],a=n[e++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[e++],o=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Go={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,l=i>>2,c=(i&3)<<4|a>>4;let f=(a&15)<<2|h>>6,g=h&63;u||(g=64,o||(f=64)),r.push(e[l],e[c],e[f],e[g])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Qo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ch(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const h=s<n.length?e[n.charAt(s)]:64;++s;const c=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||a==null||h==null||c==null)throw new dh;const f=i<<2|a>>4;if(r.push(f),h!==64){const g=a<<4&240|h>>2;if(r.push(g),c!==64){const R=h<<6&192|c;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fh=function(n){const t=Qo(n);return Go.encodeByteArray(t,!0)},$n=function(n){return fh(n).replace(/\./g,"")},gh=function(n){try{return Go.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ph=()=>mh().__FIREBASE_DEFAULTS__,_h=()=>{if(typeof process>"u"||typeof Oi>"u")return;const n=Oi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&gh(n[1]);return t&&JSON.parse(t)},bs=()=>{try{return ph()||_h()||yh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Eh=n=>{var t,e;return(e=(t=bs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},vh=n=>{const t=Eh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Wo=()=>{var n;return(n=bs())===null||n===void 0?void 0:n.config};/**
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
 */class Th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ih(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$n(JSON.stringify(e)),$n(JSON.stringify(o)),""].join(".")}/**
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
 */function zn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wh(){var n;const t=(n=bs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ah(){return!wh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yo(){try{return typeof indexedDB=="object"}catch{return!1}}function Rh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const Ch="FirebaseError";class De extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ch,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xo.prototype.create)}}class Xo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Sh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new De(s,a,r)}}function Sh(n,t){return n.replace(Ph,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Ph=/\{\$([^}]+)}/g;function Zr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],o=t[s];if(Mi(i)&&Mi(o)){if(!Zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Mi(n){return n!==null&&typeof n=="object"}/**
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
 */function Vh(n){return n&&n._delegate?n._delegate:n}class rn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class Dh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Th;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(kh(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bh(n){return n===Xt?void 0:n}function kh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Nh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Dh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const Oh={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Mh=P.INFO,xh={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Lh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=xh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Jo{constructor(t){this.name=t,this._logLevel=Mh,this._logHandler=Lh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in P))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Oh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...t),this._logHandler(this,P.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...t),this._logHandler(this,P.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,P.INFO,...t),this._logHandler(this,P.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,P.WARN,...t),this._logHandler(this,P.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...t),this._logHandler(this,P.ERROR,...t)}}const Fh=(n,t)=>t.some(e=>n instanceof e);let xi,Li;function Bh(){return xi||(xi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uh(){return Li||(Li=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zo=new WeakMap,ts=new WeakMap,ta=new WeakMap,Mr=new WeakMap,ks=new WeakMap;function qh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{e(Bt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Zo.set(e,n)}).catch(()=>{}),ks.set(t,n),t}function jh(n){if(ts.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{e(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ts.set(n,t)}let es={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ts.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ta.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Bt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function $h(n){es=n(es)}function zh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(xr(this),t,...e);return ta.set(r,t.sort?t.sort():[t]),Bt(r)}:Uh().includes(n)?function(...t){return n.apply(xr(this),t),Bt(Zo.get(this))}:function(...t){return Bt(n.apply(xr(this),t))}}function Kh(n){return typeof n=="function"?zh(n):(n instanceof IDBTransaction&&jh(n),Fh(n,Bh())?new Proxy(n,es):n)}function Bt(n){if(n instanceof IDBRequest)return qh(n);if(Mr.has(n))return Mr.get(n);const t=Kh(n);return t!==n&&(Mr.set(n,t),ks.set(t,n)),t}const xr=n=>ks.get(n);function Hh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,t),a=Bt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Bt(o.result),u.oldVersion,u.newVersion,Bt(o.transaction),u)}),e&&o.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Qh=["get","getKey","getAll","getAllKeys","count"],Gh=["put","add","delete","clear"],Lr=new Map;function Fi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Lr.get(t))return Lr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Gh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Qh.includes(e)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[e](...a),s&&u.done]))[0]};return Lr.set(t,i),i}$h(n=>({...n,get:(t,e,r)=>Fi(t,e)||n.get(t,e,r),has:(t,e)=>!!Fi(t,e)||n.has(t,e)}));/**
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
 */class Wh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Yh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Yh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ns="@firebase/app",Bi="0.9.29";/**
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
 */const ae=new Jo("@firebase/app"),Xh="@firebase/app-compat",Jh="@firebase/analytics-compat",Zh="@firebase/analytics",tl="@firebase/app-check-compat",el="@firebase/app-check",nl="@firebase/auth",rl="@firebase/auth-compat",sl="@firebase/database",il="@firebase/database-compat",ol="@firebase/functions",al="@firebase/functions-compat",ul="@firebase/installations",hl="@firebase/installations-compat",ll="@firebase/messaging",cl="@firebase/messaging-compat",dl="@firebase/performance",fl="@firebase/performance-compat",gl="@firebase/remote-config",ml="@firebase/remote-config-compat",pl="@firebase/storage",_l="@firebase/storage-compat",yl="@firebase/firestore",El="@firebase/firestore-compat",vl="firebase",Tl="10.9.0";/**
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
 */const rs="[DEFAULT]",Il={[ns]:"fire-core",[Xh]:"fire-core-compat",[Zh]:"fire-analytics",[Jh]:"fire-analytics-compat",[el]:"fire-app-check",[tl]:"fire-app-check-compat",[nl]:"fire-auth",[rl]:"fire-auth-compat",[sl]:"fire-rtdb",[il]:"fire-rtdb-compat",[ol]:"fire-fn",[al]:"fire-fn-compat",[ul]:"fire-iid",[hl]:"fire-iid-compat",[ll]:"fire-fcm",[cl]:"fire-fcm-compat",[dl]:"fire-perf",[fl]:"fire-perf-compat",[gl]:"fire-rc",[ml]:"fire-rc-compat",[pl]:"fire-gcs",[_l]:"fire-gcs-compat",[yl]:"fire-fst",[El]:"fire-fst-compat","fire-js":"fire-js",[vl]:"fire-js-all"};/**
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
 */const Kn=new Map,ss=new Map;function wl(n,t){try{n.container.addComponent(t)}catch(e){ae.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Hn(n){const t=n.name;if(ss.has(t))return ae.debug(`There were multiple attempts to register component ${t}.`),!1;ss.set(t,n);for(const e of Kn.values())wl(e,n);return!0}function Al(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Rl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new Xo("app","Firebase",Rl);/**
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
 */class Cl{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const Sl=Tl;function ea(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:rs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ut.create("bad-app-name",{appName:String(s)});if(e||(e=Wo()),!e)throw Ut.create("no-options");const i=Kn.get(s);if(i){if(Zr(e,i.options)&&Zr(r,i.config))return i;throw Ut.create("duplicate-app",{appName:s})}const o=new Nh(s);for(const u of ss.values())o.addComponent(u);const a=new Cl(e,r,o);return Kn.set(s,a),a}function Pl(n=rs){const t=Kn.get(n);if(!t&&n===rs&&Wo())return ea();if(!t)throw Ut.create("no-app",{appName:n});return t}function Ye(n,t,e){var r;let s=(r=Il[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ae.warn(a.join(" "));return}Hn(new rn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Vl="firebase-heartbeat-database",Dl=1,sn="firebase-heartbeat-store";let Fr=null;function na(){return Fr||(Fr=Hh(Vl,Dl,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(sn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ut.create("idb-open",{originalErrorMessage:n.message})})),Fr}async function bl(n){try{const e=(await na()).transaction(sn),r=await e.objectStore(sn).get(ra(n));return await e.done,r}catch(t){if(t instanceof De)ae.warn(t.message);else{const e=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ae.warn(e.message)}}}async function Ui(n,t){try{const r=(await na()).transaction(sn,"readwrite");await r.objectStore(sn).put(t,ra(n)),await r.done}catch(e){if(e instanceof De)ae.warn(e.message);else{const r=Ut.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ae.warn(r.message)}}}function ra(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kl=1024,Nl=30*24*60*60*1e3;class Ol{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new xl(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qi();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Nl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qi(),{heartbeatsToSend:r,unsentEntries:s}=Ml(this._heartbeatsCache.heartbeats),i=$n(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qi(){return new Date().toISOString().substring(0,10)}function Ml(n,t=kl){const e=[];let r=n.slice();for(const s of n){const i=e.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ji(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ji(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class xl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yo()?Rh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await bl(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ui(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ui(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ji(n){return $n(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ll(n){Hn(new rn("platform-logger",t=>new Wh(t),"PRIVATE")),Hn(new rn("heartbeat",t=>new Ol(t),"PRIVATE")),Ye(ns,Bi,n),Ye(ns,Bi,"esm2017"),Ye("fire-js","")}Ll("");var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Ns=Ns||{},I=Fl||self;function ar(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function yn(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Bl(n){return Object.prototype.hasOwnProperty.call(n,Br)&&n[Br]||(n[Br]=++Ul)}var Br="closure_uid_"+(1e9*Math.random()>>>0),Ul=0;function ql(n,t,e){return n.call.apply(n.bind,arguments)}function jl(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(t,s)}}return function(){return n.apply(t,arguments)}}function st(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=ql:st=jl,st.apply(null,arguments)}function Dn(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Y(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Kt(){this.s=this.s,this.o=this.o}var $l=0;Kt.prototype.s=!1;Kt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),$l!=0)&&Bl(this)};Kt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sa=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Os(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function $i(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(ar(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function it(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var zl=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};I.addEventListener("test",e,t),I.removeEventListener("test",e,t)}catch{}return n}();function on(n){return/^[\s\xa0]*$/.test(n)}function ur(){var n=I.navigator;return n&&(n=n.userAgent)?n:""}function It(n){return ur().indexOf(n)!=-1}function Ms(n){return Ms[" "](n),n}Ms[" "]=function(){};function Kl(n,t){var e=Lc;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var Hl=It("Opera"),we=It("Trident")||It("MSIE"),ia=It("Edge"),is=ia||we,oa=It("Gecko")&&!(ur().toLowerCase().indexOf("webkit")!=-1&&!It("Edge"))&&!(It("Trident")||It("MSIE"))&&!It("Edge"),Ql=ur().toLowerCase().indexOf("webkit")!=-1&&!It("Edge");function aa(){var n=I.document;return n?n.documentMode:void 0}var os;t:{var Ur="",qr=function(){var n=ur();if(oa)return/rv:([^\);]+)(\)|;)/.exec(n);if(ia)return/Edge\/([\d\.]+)/.exec(n);if(we)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Ql)return/WebKit\/(\S+)/.exec(n);if(Hl)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(qr&&(Ur=qr?qr[1]:""),we){var jr=aa();if(jr!=null&&jr>parseFloat(Ur)){os=String(jr);break t}}os=Ur}var as;if(I.document&&we){var zi=aa();as=zi||parseInt(os,10)||void 0}else as=void 0;var Gl=as;function an(n,t){if(it.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(oa){t:{try{Ms(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Wl[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&an.$.h.call(this)}}Y(an,it);var Wl={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),Yl=0;function Xl(n,t,e,r,s){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=s,this.key=++Yl,this.fa=this.ia=!1}function hr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function xs(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Jl(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function ua(n){const t={};for(const e in n)t[e]=n[e];return t}const Ki="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ha(n,t){let e,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(e in r)n[e]=r[e];for(let i=0;i<Ki.length;i++)e=Ki[i],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function lr(n){this.src=n,this.g={},this.h=0}lr.prototype.add=function(n,t,e,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=hs(n,t,r,s);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Xl(t,this.src,i,!!r,s),t.ia=e,n.push(t)),t};function us(n,t){var e=t.type;if(e in n.g){var r=n.g[e],s=sa(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(hr(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function hs(n,t,e,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==t&&i.capture==!!e&&i.la==r)return s}return-1}var Ls="closure_lm_"+(1e6*Math.random()|0),$r={};function la(n,t,e,r,s){if(r&&r.once)return da(n,t,e,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)la(n,t[i],e,r,s);return null}return e=Us(e),n&&n[En]?n.O(t,e,yn(r)?!!r.capture:!!r,s):ca(n,t,e,!1,r,s)}function ca(n,t,e,r,s,i){if(!t)throw Error("Invalid event type");var o=yn(s)?!!s.capture:!!s,a=Bs(n);if(a||(n[Ls]=a=new lr(n)),e=a.add(t,e,r,o,i),e.proxy)return e;if(r=Zl(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)zl||(s=o),s===void 0&&(s=!1),n.addEventListener(t.toString(),r,s);else if(n.attachEvent)n.attachEvent(ga(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Zl(){function n(e){return t.call(n.src,n.listener,e)}const t=tc;return n}function da(n,t,e,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)da(n,t[i],e,r,s);return null}return e=Us(e),n&&n[En]?n.P(t,e,yn(r)?!!r.capture:!!r,s):ca(n,t,e,!0,r,s)}function fa(n,t,e,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)fa(n,t[i],e,r,s);else r=yn(r)?!!r.capture:!!r,e=Us(e),n&&n[En]?(n=n.i,t=String(t).toString(),t in n.g&&(i=n.g[t],e=hs(i,e,r,s),-1<e&&(hr(i[e]),Array.prototype.splice.call(i,e,1),i.length==0&&(delete n.g[t],n.h--)))):n&&(n=Bs(n))&&(t=n.g[t.toString()],n=-1,t&&(n=hs(t,e,r,s)),(e=-1<n?t[n]:null)&&Fs(e))}function Fs(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[En])us(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(ga(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Bs(t))?(us(e,n),e.h==0&&(e.src=null,t[Ls]=null)):hr(n)}}}function ga(n){return n in $r?$r[n]:$r[n]="on"+n}function tc(n,t){if(n.fa)n=!0;else{t=new an(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Fs(n),n=e.call(r,t)}return n}function Bs(n){return n=n[Ls],n instanceof lr?n:null}var zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Us(n){return typeof n=="function"?n:(n[zr]||(n[zr]=function(t){return n.handleEvent(t)}),n[zr])}function W(){Kt.call(this),this.i=new lr(this),this.S=this,this.J=null}Y(W,Kt);W.prototype[En]=!0;W.prototype.removeEventListener=function(n,t,e,r){fa(this,n,t,e,r)};function Z(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new it(t,n);else if(t instanceof it)t.target=t.target||n;else{var s=t;t=new it(r,n),ha(t,s)}if(s=!0,e)for(var i=e.length-1;0<=i;i--){var o=t.g=e[i];s=bn(o,r,!0,t)&&s}if(o=t.g=n,s=bn(o,r,!0,t)&&s,s=bn(o,r,!1,t)&&s,e)for(i=0;i<e.length;i++)o=t.g=e[i],s=bn(o,r,!1,t)&&s}W.prototype.N=function(){if(W.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)hr(e[r]);delete n.g[t],n.h--}}this.J=null};W.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};W.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function bn(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&us(n.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var qs=I.JSON.stringify;class ec{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function nc(){var n=js;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class rc{constructor(){this.h=this.g=null}add(t,e){const r=ma.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var ma=new ec(()=>new sc,n=>n.reset());class sc{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function ic(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function oc(n){I.setTimeout(()=>{throw n},0)}let un,hn=!1,js=new rc,pa=()=>{const n=I.Promise.resolve(void 0);un=()=>{n.then(ac)}};var ac=()=>{for(var n;n=nc();){try{n.h.call(n.g)}catch(e){oc(e)}var t=ma;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}hn=!1};function cr(n,t){W.call(this),this.h=n||1,this.g=t||I,this.j=st(this.qb,this),this.l=Date.now()}Y(cr,W);p=cr.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Z(this,"tick"),this.ga&&($s(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $s(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}p.N=function(){cr.$.N.call(this),$s(this),delete this.g};function zs(n,t,e){if(typeof n=="function")e&&(n=st(n,e));else if(n&&typeof n.handleEvent=="function")n=st(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(n,t||0)}function _a(n){n.g=zs(()=>{n.g=null,n.i&&(n.i=!1,_a(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class uc extends Kt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:_a(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ln(n){Kt.call(this),this.h=n,this.g={}}Y(ln,Kt);var Hi=[];function ya(n,t,e,r){Array.isArray(e)||(e&&(Hi[0]=e.toString()),e=Hi);for(var s=0;s<e.length;s++){var i=la(t,e[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Ea(n){xs(n.g,function(t,e){this.g.hasOwnProperty(e)&&Fs(t)},n),n.g={}}ln.prototype.N=function(){ln.$.N.call(this),Ea(this)};ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dr(){this.g=!0}dr.prototype.Ea=function(){this.g=!1};function hc(n,t,e,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var l=h[0];h=h[1];var c=l.split("_");o=2<=c.length&&c[1]=="type"?o+(l+"="+h+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+e+`
`+o})}function lc(n,t,e,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+e+`
`+i+" "+o})}function pe(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+dc(n,e)+(r?" "+r:"")})}function cc(n,t){n.info(function(){return"TIMEOUT: "+t})}dr.prototype.info=function(){};function dc(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return qs(e)}catch{return t}}var ce={},Qi=null;function fr(){return Qi=Qi||new W}ce.Ta="serverreachability";function va(n){it.call(this,ce.Ta,n)}Y(va,it);function cn(n){const t=fr();Z(t,new va(t))}ce.STAT_EVENT="statevent";function Ta(n,t){it.call(this,ce.STAT_EVENT,n),this.stat=t}Y(Ta,it);function ht(n){const t=fr();Z(t,new Ta(t,n))}ce.Ua="timingevent";function Ia(n,t){it.call(this,ce.Ua,n),this.size=t}Y(Ia,it);function vn(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){n()},t)}var gr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},wa={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ks(){}Ks.prototype.h=null;function Gi(n){return n.h||(n.h=n.i())}function Aa(){}var Tn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hs(){it.call(this,"d")}Y(Hs,it);function Qs(){it.call(this,"c")}Y(Qs,it);var ls;function mr(){}Y(mr,Ks);mr.prototype.g=function(){return new XMLHttpRequest};mr.prototype.i=function(){return{}};ls=new mr;function In(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new ln(this),this.P=fc,n=is?125:void 0,this.V=new cr(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ra}function Ra(){this.i=null,this.g="",this.h=!1}var fc=45e3,Ca={},cs={};p=In.prototype;p.setTimeout=function(n){this.P=n};function ds(n,t,e){n.L=1,n.A=_r(Ot(t)),n.u=e,n.S=!0,Sa(n,null)}function Sa(n,t){n.G=Date.now(),wn(n),n.B=Ot(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Ma(e.i,"t",r),n.o=0,e=n.l.J,n.h=new Ra,n.g=nu(n.l,e?t:null,!n.u),0<n.O&&(n.M=new uc(st(n.Pa,n,n.g),n.O)),ya(n.U,n.g,"readystatechange",n.nb),t=n.I?ua(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),cn(),hc(n.j,n.v,n.B,n.m,n.W,n.u)}p.nb=function(n){n=n.target;const t=this.M;t&&Rt(n)==3?t.l():this.Pa(n)};p.Pa=function(n){try{if(n==this.g)t:{const l=Rt(this.g);var t=this.g.Ia();const c=this.g.da();if(!(3>l)&&(l!=3||is||this.g&&(this.h.h||this.g.ja()||Ji(this.g)))){this.J||l!=4||t==7||(t==8||0>=c?cn(3):cn(2)),pr(this);var e=this.g.da();this.ca=e;e:if(Pa(this)){var r=Ji(this.g);n="";var s=r.length,i=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){te(this),Xe(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,lc(this.j,this.v,this.B,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!on(a)){var h=a;break e}}h=null}if(e=h)pe(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fs(this,e);else{this.i=!1,this.s=3,ht(12),te(this),Xe(this);break t}}this.S?(Va(this,l,o),is&&this.i&&l==3&&(ya(this.U,this.V,"tick",this.mb),this.V.start())):(pe(this.j,this.m,o,null),fs(this,o)),l==4&&te(this),this.i&&!this.J&&(l==4?Ja(this.l,this):(this.i=!1,wn(this)))}else Oc(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),te(this),Xe(this)}}}catch{}finally{}};function Pa(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Va(n,t,e){let r=!0,s;for(;!n.J&&n.o<e.length;)if(s=gc(n,e),s==cs){t==4&&(n.s=4,ht(14),r=!1),pe(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Ca){n.s=4,ht(15),pe(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else pe(n.j,n.m,s,null),fs(n,s);Pa(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,ht(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Zs(t),t.M=!0,ht(11))):(pe(n.j,n.m,e,"[Invalid Chunked Response]"),te(n),Xe(n))}p.mb=function(){if(this.g){var n=Rt(this.g),t=this.g.ja();this.o<t.length&&(pr(this),Va(this,n,t),this.i&&n!=4&&wn(this))}};function gc(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?cs:(e=Number(t.substring(e,r)),isNaN(e)?Ca:(r+=1,r+e>t.length?cs:(t=t.slice(r,r+e),n.o=r+e,t)))}p.cancel=function(){this.J=!0,te(this)};function wn(n){n.Y=Date.now()+n.P,Da(n,n.P)}function Da(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=vn(st(n.lb,n),t)}function pr(n){n.C&&(I.clearTimeout(n.C),n.C=null)}p.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(cc(this.j,this.B),this.L!=2&&(cn(),ht(17)),te(this),this.s=2,Xe(this)):Da(this,this.Y-n)};function Xe(n){n.l.H==0||n.J||Ja(n.l,n)}function te(n){pr(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,$s(n.V),Ea(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function fs(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||gs(e.i,n))){if(!n.K&&gs(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Wn(e),Tr(e);else break t;Js(e),ht(18)}}else e.Fa=s[1],0<e.Fa-e.V&&37500>s[2]&&e.G&&e.A==0&&!e.v&&(e.v=vn(st(e.ib,e),6e3));if(1>=Fa(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else ee(e,11)}else if((n.K||e.g==n)&&Wn(e),!on(t))for(s=e.Ja.g.parse(t),t=0;t<s.length;t++){let h=s[t];if(e.V=h[0],h=h[1],e.H==2)if(h[0]=="c"){e.K=h[1],e.pa=h[2];const l=h[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const c=h[4];c!=null&&(e.Ga=c,e.l.info("SVER="+e.Ga));const f=h[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const g=n.g;if(g){const R=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var i=r.i;i.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Gs(i,i.h),i.h=null))}if(r.F){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.Da=b,M(r.I,r.F,b))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=eu(r,r.J?r.pa:null,r.Y),o.K){Ba(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(pr(a),wn(a)),r.g=o}else Ya(r);0<e.j.length&&Ir(e)}else h[0]!="stop"&&h[0]!="close"||ee(e,7);else e.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?ee(e,7):Xs(e):h[0]!="noop"&&e.h&&e.h.Aa(h),e.A=0)}}cn(4)}catch{}}function mc(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ar(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function pc(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ar(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function ba(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(ar(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=pc(n),r=mc(n),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],e&&e[i],n)}var ka=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _c(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),s=null;if(0<=r){var i=n[e].substring(0,r);s=n[e].substring(r+1)}else i=n[e];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function se(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof se){this.h=n.h,Qn(this,n.j),this.s=n.s,this.g=n.g,Gn(this,n.m),this.l=n.l;var t=n.i,e=new dn;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Wi(this,e),this.o=n.o}else n&&(t=String(n).match(ka))?(this.h=!1,Qn(this,t[1]||"",!0),this.s=je(t[2]||""),this.g=je(t[3]||"",!0),Gn(this,t[4]),this.l=je(t[5]||"",!0),Wi(this,t[6]||"",!0),this.o=je(t[7]||"")):(this.h=!1,this.i=new dn(null,this.h))}se.prototype.toString=function(){var n=[],t=this.j;t&&n.push($e(t,Yi,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push($e(t,Yi,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push($e(e,e.charAt(0)=="/"?vc:Ec,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",$e(e,Ic)),n.join("")};function Ot(n){return new se(n)}function Qn(n,t,e){n.j=e?je(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Gn(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Wi(n,t,e){t instanceof dn?(n.i=t,wc(n.i,n.h)):(e||(t=$e(t,Tc)),n.i=new dn(t,n.h))}function M(n,t,e){n.i.set(t,e)}function _r(n){return M(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function je(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function $e(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,yc),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function yc(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Yi=/[#\/\?@]/g,Ec=/[#\?:]/g,vc=/[#\?]/g,Tc=/[#\?@]/g,Ic=/#/g;function dn(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Ht(n){n.g||(n.g=new Map,n.h=0,n.i&&_c(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}p=dn.prototype;p.add=function(n,t){Ht(this),this.i=null,n=be(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Na(n,t){Ht(n),t=be(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Oa(n,t){return Ht(n),t=be(n,t),n.g.has(t)}p.forEach=function(n,t){Ht(this),this.g.forEach(function(e,r){e.forEach(function(s){n.call(t,s,r,this)},this)},this)};p.ta=function(){Ht(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const s=n[r];for(let i=0;i<s.length;i++)e.push(t[r])}return e};p.Z=function(n){Ht(this);let t=[];if(typeof n=="string")Oa(this,n)&&(t=t.concat(this.g.get(be(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};p.set=function(n,t){return Ht(this),this.i=null,n=be(this,n),Oa(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};p.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Ma(n,t,e){Na(n,t),0<e.length&&(n.i=null,n.g.set(be(n,t),Os(e)),n.h+=e.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function be(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function wc(n,t){t&&!n.j&&(Ht(n),n.i=null,n.g.forEach(function(e,r){var s=r.toLowerCase();r!=s&&(Na(this,r),Ma(this,s,e))},n)),n.j=t}var Ac=class{constructor(n,t){this.g=n,this.map=t}};function xa(n){this.l=n||Rc,I.PerformanceNavigationTiming?(n=I.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rc=10;function La(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Fa(n){return n.h?1:n.g?n.g.size:0}function gs(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Gs(n,t){n.g?n.g.add(t):n.h=t}function Ba(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}xa.prototype.cancel=function(){if(this.i=Ua(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ua(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Os(n.i)}var Cc=class{stringify(n){return I.JSON.stringify(n,void 0)}parse(n){return I.JSON.parse(n,void 0)}};function Sc(){this.g=new Cc}function Pc(n,t,e){const r=e||"";try{ba(n,function(s,i){let o=s;yn(s)&&(o=qs(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Vc(n,t){const e=new dr;if(I.Image){const r=new Image;r.onload=Dn(kn,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Dn(kn,e,r,"TestLoadImage: error",!1,t),r.onabort=Dn(kn,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Dn(kn,e,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function kn(n,t,e,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function yr(n){this.l=n.ec||null,this.j=n.ob||!1}Y(yr,Ks);yr.prototype.g=function(){return new Er(this.l,this.j)};yr.prototype.i=function(n){return function(){return n}}({});function Er(n,t){W.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Ws,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Y(Er,W);var Ws=0;p=Er.prototype;p.open=function(n,t){if(this.readyState!=Ws)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,fn(this)};p.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=Ws};p.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,fn(this)),this.g&&(this.readyState=3,fn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qa(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function qa(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}p.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?An(this):fn(this),this.readyState==3&&qa(this)}};p.Za=function(n){this.g&&(this.response=this.responseText=n,An(this))};p.Ya=function(n){this.g&&(this.response=n,An(this))};p.ka=function(){this.g&&An(this)};function An(n){n.readyState=4,n.l=null,n.j=null,n.A=null,fn(n)}p.setRequestHeader=function(n,t){this.v.append(n,t)};p.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function fn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Dc=I.JSON.parse;function B(n){W.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ja,this.L=this.M=!1}Y(B,W);var ja="",bc=/^https?$/i,kc=["POST","PUT"];p=B.prototype;p.Oa=function(n){this.M=n};p.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ls.g(),this.C=this.u?Gi(this.u):Gi(ls),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(i){Xi(this,i);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)e.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())e.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(i=>i.toLowerCase()=="content-type"),s=I.FormData&&n instanceof I.FormData,!(0<=sa(kc,t))||r||s||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of e)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ka(this),0<this.B&&((this.L=Nc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=zs(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Xi(this,i)}};function Nc(n){return we&&typeof n.timeout=="number"&&n.ontimeout!==void 0}p.ua=function(){typeof Ns<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Z(this,"timeout"),this.abort(8))};function Xi(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,$a(n),vr(n)}function $a(n){n.F||(n.F=!0,Z(n,"complete"),Z(n,"error"))}p.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Z(this,"complete"),Z(this,"abort"),vr(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vr(this,!0)),B.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?za(this):this.kb())};p.kb=function(){za(this)};function za(n){if(n.h&&typeof Ns<"u"&&(!n.C[1]||Rt(n)!=4||n.da()!=2)){if(n.v&&Rt(n)==4)zs(n.La,0,n);else if(Z(n,"readystatechange"),Rt(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var s=String(n.I).match(ka)[1]||null;!s&&I.self&&I.self.location&&(s=I.self.location.protocol.slice(0,-1)),r=!bc.test(s?s.toLowerCase():"")}e=r}if(e)Z(n,"complete"),Z(n,"success");else{n.m=6;try{var i=2<Rt(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",$a(n)}}finally{vr(n)}}}}function vr(n,t){if(n.g){Ka(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||Z(n,"ready");try{e.onreadystatechange=r}catch{}}}function Ka(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(I.clearTimeout(n.A),n.A=null)}p.isActive=function(){return!!this.g};function Rt(n){return n.g?n.g.readyState:0}p.da=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Dc(t)}};function Ji(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case ja:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Oc(n){const t={};n=(n.g&&2<=Rt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(on(n[r]))continue;var e=ic(n[r]);const s=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const i=t[s]||[];t[s]=i,i.push(e)}Jl(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ha(n){let t="";return xs(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Ys(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Ha(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):M(n,t,e))}function Be(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Qa(n){this.Ga=0,this.j=[],this.l=new dr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Be("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Be("baseRetryDelayMs",5e3,n),this.hb=Be("retryDelaySeedMs",1e4,n),this.eb=Be("forwardChannelMaxRetries",2,n),this.xa=Be("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new xa(n&&n.concurrentRequestLimit),this.Ja=new Sc,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=Qa.prototype;p.ra=8;p.H=1;function Xs(n){if(Ga(n),n.H==3){var t=n.W++,e=Ot(n.I);if(M(e,"SID",n.K),M(e,"RID",t),M(e,"TYPE","terminate"),Rn(n,e),t=new In(n,n.l,t),t.L=2,t.A=_r(Ot(e)),e=!1,I.navigator&&I.navigator.sendBeacon)try{e=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&I.Image&&(new Image().src=t.A,e=!0),e||(t.g=nu(t.l,null),t.g.ha(t.A)),t.G=Date.now(),wn(t)}tu(n)}function Tr(n){n.g&&(Zs(n),n.g.cancel(),n.g=null)}function Ga(n){Tr(n),n.u&&(I.clearTimeout(n.u),n.u=null),Wn(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&I.clearTimeout(n.m),n.m=null)}function Ir(n){if(!La(n.i)&&!n.m){n.m=!0;var t=n.Na;un||pa(),hn||(un(),hn=!0),js.add(t,n),n.C=0}}function Mc(n,t){return Fa(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=vn(st(n.Na,n,t),Za(n,n.C)),n.C++,!0)}p.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new In(this,this.l,n);let i=this.s;if(this.U&&(i?(i=ua(i),ha(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Wa(this,s,t),e=Ot(this.I),M(e,"RID",n),M(e,"CVER",22),this.F&&M(e,"X-HTTP-Session-Id",this.F),Rn(this,e),i&&(this.O?t="headers="+encodeURIComponent(String(Ha(i)))+"&"+t:this.o&&Ys(e,this.o,i)),Gs(this.i,s),this.bb&&M(e,"TYPE","init"),this.P?(M(e,"$req",t),M(e,"SID","null"),s.aa=!0,ds(s,e,null)):ds(s,e,t),this.H=2}}else this.H==3&&(n?Zi(this,n):this.j.length==0||La(this.i)||Zi(this))};function Zi(n,t){var e;t?e=t.m:e=n.W++;const r=Ot(n.I);M(r,"SID",n.K),M(r,"RID",e),M(r,"AID",n.V),Rn(n,r),n.o&&n.s&&Ys(r,n.o,n.s),e=new In(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Wa(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Gs(n.i,e),ds(e,r,t)}function Rn(n,t){n.na&&xs(n.na,function(e,r){M(t,r,e)}),n.h&&ba({},function(e,r){M(t,r,e)})}function Wa(n,t,e){e=Math.min(n.j.length,e);var r=n.h?st(n.h.Va,n.h,n):null;t:{var s=n.j;let i=-1;for(;;){const o=["count="+e];i==-1?0<e?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<e;u++){let h=s[u].g;const l=s[u].map;if(h-=i,0>h)i=Math.max(0,s[u].g-100),a=!1;else try{Pc(l,o,"req"+h+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Ya(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;un||pa(),hn||(un(),hn=!0),js.add(t,n),n.A=0}}function Js(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=vn(st(n.Ma,n),Za(n,n.A)),n.A++,!0)}p.Ma=function(){if(this.u=null,Xa(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=vn(st(this.jb,this),n)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ht(10),Tr(this),Xa(this))};function Zs(n){n.B!=null&&(I.clearTimeout(n.B),n.B=null)}function Xa(n){n.g=new In(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Ot(n.wa);M(t,"RID","rpc"),M(t,"SID",n.K),M(t,"AID",n.V),M(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&M(t,"TO",n.qa),M(t,"TYPE","xmlhttp"),Rn(n,t),n.o&&n.s&&Ys(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=_r(Ot(t)),e.u=null,e.S=!0,Sa(e,n)}p.ib=function(){this.v!=null&&(this.v=null,Tr(this),Js(this),ht(19))};function Wn(n){n.v!=null&&(I.clearTimeout(n.v),n.v=null)}function Ja(n,t){var e=null;if(n.g==t){Wn(n),Zs(n),n.g=null;var r=2}else if(gs(n.i,t))e=t.F,Ba(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var s=n.C;r=fr(),Z(r,new Ia(r,e)),Ir(n)}else Ya(n);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Mc(n,t)||r==2&&Js(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),s){case 1:ee(n,5);break;case 4:ee(n,10);break;case 3:ee(n,6);break;default:ee(n,2)}}}function Za(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function ee(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=st(n.pb,n);e||(e=new se("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Qn(e,"https"),_r(e)),Vc(e.toString(),r)}else ht(2);n.H=0,n.h&&n.h.za(t),tu(n),Ga(n)}p.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ht(2)):(this.l.info("Failed to ping google.com"),ht(1))};function tu(n){if(n.H=0,n.ma=[],n.h){const t=Ua(n.i);(t.length!=0||n.j.length!=0)&&($i(n.ma,t),$i(n.ma,n.j),n.i.i.length=0,Os(n.j),n.j.length=0),n.h.ya()}}function eu(n,t,e){var r=e instanceof se?Ot(e):new se(e);if(r.g!="")t&&(r.g=t+"."+r.g),Gn(r,r.m);else{var s=I.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new se(null);r&&Qn(i,r),t&&(i.g=t),s&&Gn(i,s),e&&(i.l=e),r=i}return e=n.F,t=n.Da,e&&t&&M(r,e,t),M(r,"VER",n.ra),Rn(n,r),r}function nu(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new B(new yr({ob:e})):new B(n.va),t.Oa(n.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function ru(){}p=ru.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function Yn(){if(we&&!(10<=Number(Gl)))throw Error("Environmental error: no available transport.")}Yn.prototype.g=function(n,t){return new ft(n,t)};function ft(n,t){W.call(this),this.g=new Qa(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!on(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!on(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new ke(this)}Y(ft,W);ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;ht(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=eu(n,null,n.Y),Ir(n)};ft.prototype.close=function(){Xs(this.g)};ft.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=qs(n),n=e);t.j.push(new Ac(t.fb++,n)),t.H==3&&Ir(t)};ft.prototype.N=function(){this.g.h=null,delete this.j,Xs(this.g),delete this.g,ft.$.N.call(this)};function su(n){Hs.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}Y(su,Hs);function iu(){Qs.call(this),this.status=1}Y(iu,Qs);function ke(n){this.g=n}Y(ke,ru);ke.prototype.Ba=function(){Z(this.g,"a")};ke.prototype.Aa=function(n){Z(this.g,new su(n))};ke.prototype.za=function(n){Z(this.g,new iu)};ke.prototype.ya=function(){Z(this.g,"b")};function xc(){this.blockSize=-1}function _t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Y(_t,xc);_t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Kr(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(s=0;16>s;++s)r[s]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],s=n.g[2];var i=n.g[3],o=t+(i^e&(s^i))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[3]+3250441966&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[7]+4249261313&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[11]+2304563134&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(i^e&(s^i))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=i+(s^t&(e^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(e^i&(t^e))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=e+(t^s&(i^t))+r[15]+1236535329&4294967295,e=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(e^s))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[0]+3921069994&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[4]+3889429448&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[8]+1163531501&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(e^s))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=i+(e^s&(t^e))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^e&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=e+(i^t&(s^i))+r[12]+2368359562&4294967295,e=s+(o<<20&4294967295|o>>>12),o=t+(e^s^i)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[14]+4259657740&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[10]+3200236656&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[6]+76029189&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(e^s^i)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=i+(t^e^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^e)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=e+(s^i^t)+r[2]+3299628645&4294967295,e=s+(o<<23&4294967295|o>>>9),o=t+(s^(e|~i))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[5]+4237533241&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[1]+2240044497&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[13]+1309151649&4294967295,e=s+(o<<21&4294967295|o>>>11),o=t+(s^(e|~i))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=i+(e^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~e))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=e+(i^(s|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}_t.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=e;)Kr(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<t;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){Kr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=n[i++],s==this.blockSize){Kr(this,r),s=0;break}}this.h=s,this.i+=t};_t.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function N(n,t){this.h=t;for(var e=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==t||(e[s]=i,r=!1)}this.g=e}var Lc={};function ti(n){return-128<=n&&128>n?Kl(n,function(t){return new N([t|0],0>t?-1:0)}):new N([n|0],0>n?-1:0)}function Ct(n){if(isNaN(n)||!isFinite(n))return ye;if(0>n)return J(Ct(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=ms;return new N(t,0)}function ou(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return J(ou(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Ct(Math.pow(t,8)),r=ye,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),t);8>i?(i=Ct(Math.pow(t,i)),r=r.R(i).add(Ct(o))):(r=r.R(e),r=r.add(Ct(o)))}return r}var ms=4294967296,ye=ti(0),ps=ti(1),to=ti(16777216);p=N.prototype;p.ea=function(){if(pt(this))return-J(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:ms+r)*t,t*=ms}return n};p.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Nt(this))return"0";if(pt(this))return"-"+J(this).toString(n);for(var t=Ct(Math.pow(n,6)),e=this,r="";;){var s=Jn(e,t).g;e=Xn(e,s.R(t));var i=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=s,Nt(e))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};p.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Nt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function pt(n){return n.h==-1}p.X=function(n){return n=Xn(this,n),pt(n)?-1:Nt(n)?0:1};function J(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new N(e,~n.h).add(ps)}p.abs=function(){return pt(this)?J(this):this};p.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,e[s]=o<<16|i}return new N(e,e[e.length-1]&-2147483648?-1:0)};function Xn(n,t){return n.add(J(t))}p.R=function(n){if(Nt(this)||Nt(n))return ye;if(pt(this))return pt(n)?J(this).R(J(n)):J(J(this).R(n));if(pt(n))return J(this.R(J(n)));if(0>this.X(to)&&0>n.X(to))return Ct(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,u=n.D(s)&65535;e[2*r+2*s]+=o*u,Nn(e,2*r+2*s),e[2*r+2*s+1]+=i*u,Nn(e,2*r+2*s+1),e[2*r+2*s+1]+=o*a,Nn(e,2*r+2*s+1),e[2*r+2*s+2]+=i*a,Nn(e,2*r+2*s+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new N(e,0)};function Nn(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Ue(n,t){this.g=n,this.h=t}function Jn(n,t){if(Nt(t))throw Error("division by zero");if(Nt(n))return new Ue(ye,ye);if(pt(n))return t=Jn(J(n),t),new Ue(J(t.g),J(t.h));if(pt(t))return t=Jn(n,J(t)),new Ue(J(t.g),t.h);if(30<n.g.length){if(pt(n)||pt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=ps,r=t;0>=r.X(n);)e=eo(e),r=eo(r);var s=de(e,1),i=de(r,1);for(r=de(r,2),e=de(e,2);!Nt(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(e),i=o),r=de(r,1),e=de(e,1)}return t=Xn(n,s.R(t)),new Ue(s,t)}for(s=ye;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Ct(e),o=i.R(t);pt(o)||0<o.X(n);)e-=r,i=Ct(e),o=i.R(t);Nt(i)&&(i=ps),s=s.add(i),n=Xn(n,o)}return new Ue(s,n)}p.gb=function(n){return Jn(this,n).h};p.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new N(e,this.h&n.h)};p.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new N(e,this.h|n.h)};p.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new N(e,this.h^n.h)};function eo(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new N(e,n.h)}function de(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,s=[],i=0;i<r;i++)s[i]=0<t?n.D(i+e)>>>t|n.D(i+e+1)<<32-t:n.D(i+e);return new N(s,n.h)}Yn.prototype.createWebChannel=Yn.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;gr.NO_ERROR=0;gr.TIMEOUT=8;gr.HTTP_ERROR=6;wa.COMPLETE="complete";Aa.EventType=Tn;Tn.OPEN="a";Tn.CLOSE="b";Tn.ERROR="c";Tn.MESSAGE="d";W.prototype.listen=W.prototype.O;B.prototype.listenOnce=B.prototype.P;B.prototype.getLastError=B.prototype.Sa;B.prototype.getLastErrorCode=B.prototype.Ia;B.prototype.getStatus=B.prototype.da;B.prototype.getResponseJson=B.prototype.Wa;B.prototype.getResponseText=B.prototype.ja;B.prototype.send=B.prototype.ha;B.prototype.setWithCredentials=B.prototype.Oa;_t.prototype.digest=_t.prototype.l;_t.prototype.reset=_t.prototype.reset;_t.prototype.update=_t.prototype.j;N.prototype.add=N.prototype.add;N.prototype.multiply=N.prototype.R;N.prototype.modulo=N.prototype.gb;N.prototype.compare=N.prototype.X;N.prototype.toNumber=N.prototype.ea;N.prototype.toString=N.prototype.toString;N.prototype.getBits=N.prototype.D;N.fromNumber=Ct;N.fromString=ou;var Fc=function(){return new Yn},Bc=function(){return fr()},Hr=gr,Uc=wa,qc=ce,no={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},On=Aa,jc=B,$c=_t,Ee=N;const ro="@firebase/firestore";/**
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
 */class nt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let Ne="10.9.0";/**
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
 */const ue=new Jo("@firebase/firestore");function qe(){return ue.logLevel}function _(n,...t){if(ue.logLevel<=P.DEBUG){const e=t.map(ei);ue.debug(`Firestore (${Ne}): ${n}`,...e)}}function Pt(n,...t){if(ue.logLevel<=P.ERROR){const e=t.map(ei);ue.error(`Firestore (${Ne}): ${n}`,...e)}}function Ae(n,...t){if(ue.logLevel<=P.WARN){const e=t.map(ei);ue.warn(`Firestore (${Ne}): ${n}`,...e)}}function ei(n){if(typeof n=="string")return n;try{/**
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
 */function A(n="Unexpected state"){const t=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: `+n;throw Pt(t),new Error(t)}function K(n,t){n||A()}function D(n,t){return n}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends De{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class au{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(nt.UNAUTHENTICATED))}shutdown(){}}class Kc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Hc{constructor(t){this.t=t,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let i=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qt)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new au(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string"),new nt(t)}}class Qc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Qc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=i=>{i.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string"),this.R=e.token,new Wc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Xc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Jc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Xc(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function k(n,t){return n<t?-1:n>t?1:0}function Re(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class lt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return lt.fromMillis(Date.now())}static fromDate(t){return lt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new lt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new lt(0,0))}static max(){return new w(new lt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gn{constructor(t,e,r){e===void 0?e=0:e>t.length&&A(),r===void 0?r=t.length-e:r>t.length-e&&A(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return gn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),o=e.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends gn{construct(t,e,r){return new F(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new F(e)}static emptyPath(){return new F([])}}const Zc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends gn{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return Zc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
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
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(F.fromString(t))}static fromName(t){return new v(F.fromString(t).popFirst(5))}static empty(){return new v(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&F.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new F(t.slice()))}}function td(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=w.fromTimestamp(r===1e9?new lt(e+1,0):new lt(e,r));return new jt(s,v.empty(),t)}function ed(n){return new jt(n.readTime,n.key,-1)}class jt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new jt(w.min(),v.empty(),-1)}static max(){return new jt(w.max(),v.empty(),-1)}}function nd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=v.comparator(n.documentKey,t.documentKey),e!==0?e:k(n.largestBatchId,t.largestBatchId))}/**
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
 */const rd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ni(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==rd)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new d((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof d?e:d.resolve(e)}catch(e){return d.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):d.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):d.reject(e)}static resolve(t){return new d((e,r)=>{e(t)})}static reject(t){return new d((e,r)=>{r(t)})}static waitFor(t){return new d((e,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&e()},u=>r(u))}),o=!0,i===s&&e()})}static or(t){let e=d.resolve(!1);for(const r of t)e=e.next(s=>s?d.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new d((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const h=u;e(t[h]).next(l=>{o[h]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,e){return new d((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}/**
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
 */class ri{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new qt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Je(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=si(r.target.error);this.V.reject(new Je(t,s))}}static open(t,e,r,s){try{return new ri(e,t.transaction(s,r))}catch(i){throw new Je(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(_("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new od(e)}}class ne{constructor(t,e,r){this.name=t,this.version=e,this.p=r,ne.S(zn())===12.2&&Pt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return _("SimpleDb","Removing database:",t),Jt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Yo())return!1;if(ne.C())return!0;const t=zn(),e=ne.S(t),r=0<e&&e<10,s=ne.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;e(o)},s.onblocked=()=>{r(new Je(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Je(t,o))},s.onupgradeneeded=i=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,s){const i=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=ri.open(this.db,t,i?"readonly":"readwrite",r),u=s(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),d.reject(h))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,h=u.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class id{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Jt(this.k.delete())}}class Je extends y{constructor(t,e){super(m.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Cn(n){return n.name==="IndexedDbTransactionError"}class od{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(_("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Jt(r)}add(t){return _("SimpleDb","ADD",this.store.name,t,t),Jt(this.store.add(t))}get(t){return Jt(this.store.get(t)).next(e=>(e===void 0&&(e=null),_("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return _("SimpleDb","DELETE",this.store.name,t),Jt(this.store.delete(t))}count(){return _("SimpleDb","COUNT",this.store.name),Jt(this.store.count())}W(t,e){const r=this.options(t,e),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new d((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new d((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,e){_("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const s=this.cursor(r);return this.G(s,e)}Z(t){const e=this.cursor({});return new d((r,s)=>{e.onerror=i=>{const o=si(i.target.error);s(o)},e.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new d((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new id(a),h=e(a.primaryKey,a.value,u);if(h instanceof d){const l=h.catch(c=>(u.done(),d.reject(c)));r.push(l)}u.isDone?s():u.$===null?a.continue():a.continue(u.$)}}).next(()=>d.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Jt(n){return new d((t,e)=>{n.onsuccess=r=>{const s=r.target.result;t(s)},n.onerror=r=>{const s=si(r.target.error);e(s)}})}let so=!1;function si(n){const t=ne.S(zn());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return so||(so=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
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
 */class ii{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ii._e=-1;function wr(n){return n==null}function _s(n){return n===0&&1/n==-1/0}/**
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
 */function io(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ar(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ad(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class U{constructor(t,e){this.comparator=t,this.root=e||X.EMPTY}insert(t,e){return new U(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,X.BLACK,null,null))}remove(t){return new U(this.comparator,this.root.remove(t,this.comparator).copy(null,null,X.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Mn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Mn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Mn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Mn(this.root,t,this.comparator,!0)}}class Mn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class X{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??X.RED,this.left=s??X.EMPTY,this.right=i??X.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new X(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return X.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1;X.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,r,s,i){return this}insert(t,e,r){return new X(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(t){this.comparator=t,this.data=new U(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new oo(this.data.getIterator())}getIteratorFrom(t){return new oo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new tt(this.comparator);return e.data=t,e}}class oo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Lt([])}unionWith(t){let e=new tt(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class uu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new uu("Invalid base64 string: "+i):i}}(t);return new ot(e)}static fromUint8Array(t){const e=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new ot(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const ud=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(n){if(K(!!n),typeof n=="string"){let t=0;const e=ud.exec(n);if(K(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:z(n.seconds),nanos:z(n.nanos)}}function z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function he(n){return typeof n=="string"?ot.fromBase64String(n):ot.fromUint8Array(n)}/**
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
 */function oi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ai(n){const t=n.mapValue.fields.__previous_value__;return oi(t)?ai(t):t}function mn(n){const t=$t(n.mapValue.fields.__local_write_time__.timestampValue);return new lt(t.seconds,t.nanos)}/**
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
 */class hd{constructor(t,e,r,s,i,o,a,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h}}class pn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new pn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof pn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const xn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?oi(n)?4:ld(n)?9007199254740991:10:A()}function Vt(n,t){if(n===t)return!0;const e=le(n);if(e!==le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return mn(n).isEqual(mn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=$t(s.timestampValue),a=$t(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return he(s.bytesValue).isEqual(he(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return z(s.geoPointValue.latitude)===z(i.geoPointValue.latitude)&&z(s.geoPointValue.longitude)===z(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return z(s.integerValue)===z(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=z(s.doubleValue),a=z(i.doubleValue);return o===a?_s(o)===_s(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Re(n.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(io(o)!==io(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Vt(o[u],a[u])))return!1;return!0}(n,t);default:return A()}}function _n(n,t){return(n.values||[]).find(e=>Vt(e,t))!==void 0}function Ce(n,t){if(n===t)return 0;const e=le(n),r=le(t);if(e!==r)return k(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return k(n.booleanValue,t.booleanValue);case 2:return function(i,o){const a=z(i.integerValue||i.doubleValue),u=z(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return ao(n.timestampValue,t.timestampValue);case 4:return ao(mn(n),mn(t));case 5:return k(n.stringValue,t.stringValue);case 6:return function(i,o){const a=he(i),u=he(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let h=0;h<a.length&&h<u.length;h++){const l=k(a[h],u[h]);if(l!==0)return l}return k(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,o){const a=k(z(i.latitude),z(o.latitude));return a!==0?a:k(z(i.longitude),z(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let h=0;h<a.length&&h<u.length;++h){const l=Ce(a[h],u[h]);if(l)return l}return k(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===xn.mapValue&&o===xn.mapValue)return 0;if(i===xn.mapValue)return 1;if(o===xn.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),h=o.fields||{},l=Object.keys(h);u.sort(),l.sort();for(let c=0;c<u.length&&c<l.length;++c){const f=k(u[c],l[c]);if(f!==0)return f;const g=Ce(a[u[c]],h[l[c]]);if(g!==0)return g}return k(u.length,l.length)}(n.mapValue,t.mapValue);default:throw A()}}function ao(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return k(n,t);const e=$t(n),r=$t(t),s=k(e.seconds,r.seconds);return s!==0?s:k(e.nanos,r.nanos)}function Se(n){return ys(n)}function ys(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=$t(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return he(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return v.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=ys(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ys(e.fields[o])}`;return s+"}"}(n.mapValue):A()}function Es(n){return!!n&&"integerValue"in n}function ui(n){return!!n&&"arrayValue"in n}function uo(n){return!!n&&"nullValue"in n}function ho(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qr(n){return!!n&&"mapValue"in n}function Ze(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ar(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ze(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ze(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ld(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Qr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ze(e)}setAll(t){let e=ut.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=a.popLast()}o?r[a.lastSegment()]=Ze(o):s.push(a.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Qr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Qr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ar(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new wt(Ze(this.value))}}/**
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
 */class rt{constructor(t,e,r,s,i,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new rt(t,0,w.min(),w.min(),w.min(),wt.empty(),0)}static newFoundDocument(t,e,r,s){return new rt(t,1,e,w.min(),r,s,0)}static newNoDocument(t,e){return new rt(t,2,e,w.min(),w.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new rt(t,3,e,w.min(),w.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zn{constructor(t,e){this.position=t,this.inclusive=e}}function lo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],o=n.position[s];if(i.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),e.key):r=Ce(o,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function co(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Vt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class tr{constructor(t,e="asc"){this.field=t,this.dir=e}}function cd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class hu{}class H extends hu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new fd(t,e,r):e==="array-contains"?new pd(t,r):e==="in"?new _d(t,r):e==="not-in"?new yd(t,r):e==="array-contains-any"?new Ed(t,r):new H(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new gd(t,r):new md(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ce(e,this.value)):e!==null&&le(this.value)===le(e)&&this.matchesComparison(Ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends hu{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Dt(t,e)}matches(t){return lu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function lu(n){return n.op==="and"}function cu(n){return dd(n)&&lu(n)}function dd(n){for(const t of n.filters)if(t instanceof Dt)return!1;return!0}function vs(n){if(n instanceof H)return n.field.canonicalString()+n.op.toString()+Se(n.value);if(cu(n))return n.filters.map(t=>vs(t)).join(",");{const t=n.filters.map(e=>vs(e)).join(",");return`${n.op}(${t})`}}function du(n,t){return n instanceof H?function(r,s){return s instanceof H&&r.op===s.op&&r.field.isEqual(s.field)&&Vt(r.value,s.value)}(n,t):n instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&du(o,s.filters[a]),!0):!1}(n,t):void A()}function fu(n){return n instanceof H?function(e){return`${e.field.canonicalString()} ${e.op} ${Se(e.value)}`}(n):n instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(fu).join(" ,")+"}"}(n):"Filter"}class fd extends H{constructor(t,e,r){super(t,e,r),this.key=v.fromName(r.referenceValue)}matches(t){const e=v.comparator(t.key,this.key);return this.matchesComparison(e)}}class gd extends H{constructor(t,e){super(t,"in",e),this.keys=gu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class md extends H{constructor(t,e){super(t,"not-in",e),this.keys=gu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function gu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>v.fromName(r.referenceValue))}class pd extends H{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ui(e)&&_n(e.arrayValue,this.value)}}class _d extends H{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_n(this.value.arrayValue,e)}}class yd extends H{constructor(t,e){super(t,"not-in",e)}matches(t){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!_n(this.value.arrayValue,e)}}class Ed extends H{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ui(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>_n(this.value.arrayValue,r))}}/**
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
 */class vd{constructor(t,e=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function fo(n,t=null,e=[],r=[],s=null,i=null,o=null){return new vd(n,t,e,r,s,i,o)}function hi(n){const t=D(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>vs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Se(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Se(r)).join(",")),t.ce=e}return t.ce}function li(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!cd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!du(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!co(n.startAt,t.startAt)&&co(n.endAt,t.endAt)}function Ts(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Rr{constructor(t,e=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Td(n,t,e,r,s,i,o,a){return new Rr(n,t,e,r,s,i,o,a)}function mu(n){return new Rr(n)}function go(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Id(n){return n.collectionGroup!==null}function tn(n){const t=D(n);if(t.le===null){t.le=[];const e=new Set;for(const i of t.explicitOrderBy)t.le.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tt(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.le.push(new tr(i,r))}),e.has(ut.keyField().canonicalString())||t.le.push(new tr(ut.keyField(),r))}return t.le}function St(n){const t=D(n);return t.he||(t.he=wd(t,tn(n))),t.he}function wd(n,t){if(n.limitType==="F")return fo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new tr(s.field,i)});const e=n.endAt?new Zn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zn(n.startAt.position,n.startAt.inclusive):null;return fo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Is(n,t,e){return new Rr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Cr(n,t){return li(St(n),St(t))&&n.limitType===t.limitType}function pu(n){return`${hi(St(n))}|lt:${n.limitType}`}function fe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>fu(s)).join(", ")}]`),wr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Se(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Se(s)).join(",")),`Target(${r})`}(St(n))}; limitType=${n.limitType})`}function Sr(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):v.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of tn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const h=lo(o,a,u);return o.inclusive?h<=0:h<0}(r.startAt,tn(r),s)||r.endAt&&!function(o,a,u){const h=lo(o,a,u);return o.inclusive?h>=0:h>0}(r.endAt,tn(r),s))}(n,t)}function Ad(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _u(n){return(t,e)=>{let r=!1;for(const s of tn(n)){const i=Rd(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Rd(n,t,e){const r=n.field.isKeyField()?v.comparator(t.key,e.key):function(i,o,a){const u=o.data.field(i),h=a.data.field(i);return u!==null&&h!==null?Ce(u,h):A()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
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
 */class Oe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ar(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return ad(this.inner)}size(){return this.innerSize}}/**
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
 */const Cd=new U(v.comparator);function zt(){return Cd}const yu=new U(v.comparator);function ze(...n){let t=yu;for(const e of n)t=t.insert(e.key,e);return t}function Sd(n){let t=yu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function re(){return en()}function Eu(){return en()}function en(){return new Oe(n=>n.toString(),(n,t)=>n.isEqual(t))}const Pd=new tt(v.comparator);function V(...n){let t=Pd;for(const e of n)t=t.add(e);return t}const Vd=new tt(k);function Dd(){return Vd}/**
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
 */function bd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_s(t)?"-0":t}}function kd(n){return{integerValue:""+n}}/**
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
 */class Pr{constructor(){this._=void 0}}function Nd(n,t,e){return n instanceof ws?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&oi(i)&&(i=ai(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(e,t):n instanceof er?vu(n,t):n instanceof nr?Tu(n,t):function(s,i){const o=Md(s,i),a=mo(o)+mo(s.Ie);return Es(o)&&Es(s.Ie)?kd(a):bd(s.serializer,a)}(n,t)}function Od(n,t,e){return n instanceof er?vu(n,t):n instanceof nr?Tu(n,t):e}function Md(n,t){return n instanceof As?function(r){return Es(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class ws extends Pr{}class er extends Pr{constructor(t){super(),this.elements=t}}function vu(n,t){const e=Iu(t);for(const r of n.elements)e.some(s=>Vt(s,r))||e.push(r);return{arrayValue:{values:e}}}class nr extends Pr{constructor(t){super(),this.elements=t}}function Tu(n,t){let e=Iu(t);for(const r of n.elements)e=e.filter(s=>!Vt(s,r));return{arrayValue:{values:e}}}class As extends Pr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function mo(n){return z(n.integerValue||n.doubleValue)}function Iu(n){return ui(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof er&&s instanceof er||r instanceof nr&&s instanceof nr?Re(r.elements,s.elements,Vt):r instanceof As&&s instanceof As?Vt(r.Ie,s.Ie):r instanceof ws&&s instanceof ws}(n.transform,t.transform)}class ie{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ie}static exists(t){return new ie(void 0,t)}static updateTime(t){return new ie(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ci{}function wu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Fd(n.key,ie.none()):new di(n.key,n.data,ie.none());{const e=n.data,r=wt.empty();let s=new tt(ut.comparator);for(let i of t.fields)if(!s.has(i)){let o=e.field(i);o===null&&i.length>1&&(i=i.popLast(),o=e.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vr(n.key,r,new Lt(s.toArray()),ie.none())}}function Ld(n,t,e){n instanceof di?function(s,i,o){const a=s.value.clone(),u=_o(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Vr?function(s,i,o){if(!Bn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=_o(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Au(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function nn(n,t,e,r){return n instanceof di?function(i,o,a,u){if(!Bn(i.precondition,o))return a;const h=i.value.clone(),l=yo(i.fieldTransforms,u,o);return h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof Vr?function(i,o,a,u){if(!Bn(i.precondition,o))return a;const h=yo(i.fieldTransforms,u,o),l=o.data;return l.setAll(Au(i)),l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(n,t,e,r):function(i,o,a){return Bn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function po(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Re(r,s,(i,o)=>xd(i,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class di extends ci{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends ci{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Au(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function _o(n,t,e){const r=new Map;K(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Od(o,a,e[s]))}return r}function yo(n,t,e){const r=new Map;for(const s of n){const i=s.transform,o=e.data.field(s.field);r.set(s.field,Nd(i,o,t))}return r}class Fd extends ci{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Ld(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=nn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=nn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Eu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=e.has(s.key)?null:a;const u=wu(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(w.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),V())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,(e,r)=>po(e,r))&&Re(this.baseMutations,t.baseMutations,(e,r)=>po(e,r))}}/**
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
 */class Ud{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class qd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var j,S;function Ru(n){if(n===void 0)return Pt("GRPC error has no .code"),m.UNKNOWN;switch(n){case j.OK:return m.OK;case j.CANCELLED:return m.CANCELLED;case j.UNKNOWN:return m.UNKNOWN;case j.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case j.INTERNAL:return m.INTERNAL;case j.UNAVAILABLE:return m.UNAVAILABLE;case j.UNAUTHENTICATED:return m.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case j.NOT_FOUND:return m.NOT_FOUND;case j.ALREADY_EXISTS:return m.ALREADY_EXISTS;case j.PERMISSION_DENIED:return m.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case j.ABORTED:return m.ABORTED;case j.OUT_OF_RANGE:return m.OUT_OF_RANGE;case j.UNIMPLEMENTED:return m.UNIMPLEMENTED;case j.DATA_LOSS:return m.DATA_LOSS;default:return A()}}(S=j||(j={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jd(){return new TextEncoder}/**
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
 */const $d=new Ee([4294967295,4294967295],0);function Eo(n){const t=jd().encode(n),e=new $c;return e.update(t),new Uint8Array(e.digest())}function vo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ee([e,r],0),new Ee([s,i],0)]}class fi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ke(`Invalid padding: ${e}`);if(r<0)throw new Ke(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ke(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ke(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Ee.fromNumber(this.Te)}de(t,e,r){let s=t.add(e.multiply(Ee.fromNumber(r)));return s.compare($d)===1&&(s=new Ee([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Eo(t),[r,s]=vo(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new fi(i,s,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=Eo(t),[r,s]=vo(e);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ke extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Dr{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Sn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Dr(w.min(),s,new U(k),zt(),V())}}class Sn{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Sn(r,e,V(),V(),V())}}/**
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
 */class Un{constructor(t,e,r,s){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=s}}class Cu{constructor(t,e){this.targetId=t,this.fe=e}}class Su{constructor(t,e,r=ot.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class To{constructor(){this.ge=0,this.pe=wo(),this.ye=ot.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=V(),e=V(),r=V();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:A()}}),new Sn(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=wo()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,K(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class zd{constructor(t){this.Be=t,this.ke=new Map,this.qe=zt(),this.Qe=Io(),this.Ke=new U(k)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:A()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,r=t.fe.count,s=this.Ye(e);if(s){const i=s.target;if(Ts(i))if(r===0){const o=new v(i.path);this.We(e,o,rt.newNoDocument(o,w.min()))}else K(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,h)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let o,a;try{o=he(r).toUint8Array()}catch(u){if(u instanceof uu)return Ae("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new fi(o,s,i)}catch(u){return Ae(u instanceof Ke?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Be.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(e,i,null),s++)}),s}it(t){const e=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ts(a.target)){const u=new v(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,rt.newNoDocument(u,t))}i.De&&(e.set(o,i.ve()),i.Fe())}});let r=V();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Ye(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Dr(t,e,this.Ke,this.qe,r);return this.qe=zt(),this.Qe=Io(),this.Ke=new U(k),s}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,e)?s.Me(e,1):s.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new To,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new tt(k),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||_("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Be._t(t)}He(t){this.ke.set(t,new To),this.Be.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Be.getRemoteKeysForTarget(t).has(e)}}function Io(){return new U(v.comparator)}function wo(){return new U(v.comparator)}const Kd={asc:"ASCENDING",desc:"DESCENDING"},Hd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qd={and:"AND",or:"OR"};class Gd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Rs(n,t){return n.useProto3Json||wr(t)?t:{value:t}}function Wd(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ve(n){return K(!!n),w.fromTimestamp(function(e){const r=$t(e);return new lt(r.seconds,r.nanos)}(n))}function Xd(n,t){return Cs(n,t).canonicalString()}function Cs(n,t){const e=function(s){return new F(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Pu(n){const t=F.fromString(n);return K(Nu(t)),t}function Gr(n,t){const e=Pu(t);if(e.get(1)!==n.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new v(Du(e))}function Vu(n,t){return Xd(n.databaseId,t)}function Jd(n){const t=Pu(n);return t.length===4?F.emptyPath():Du(t)}function Ao(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Du(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Zd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,l){return h.useProto3Json?(K(l===void 0||typeof l=="string"),ot.fromBase64String(l||"")):(K(l===void 0||l instanceof Uint8Array),ot.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const l=h.code===void 0?m.UNKNOWN:Ru(h.code);return new y(l,h.message||"")}(o);e=new Su(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gr(n,r.document.name),i=ve(r.document.updateTime),o=r.document.createTime?ve(r.document.createTime):w.min(),a=new wt({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(s,i,o,a),h=r.targetIds||[],l=r.removedTargetIds||[];e=new Un(h,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Gr(n,r.document),i=r.readTime?ve(r.readTime):w.min(),o=rt.newNoDocument(s,i),a=r.removedTargetIds||[];e=new Un([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Gr(n,r.document),i=r.removedTargetIds||[];e=new Un([],i,s,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new qd(s,i),a=r.targetId;e=new Cu(a,o)}}return e}function tf(n,t){return{documents:[Vu(n,t.path)]}}function ef(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Vu(n,s);const i=function(h){if(h.length!==0)return ku(Dt.create(h,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(l=>function(f){return{field:ge(f.field),direction:sf(f.dir)}}(l))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Rs(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ut:e,parent:s}}function nf(n){let t=Jd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){K(r===1);const l=e.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];e.where&&(i=function(c){const f=bu(c);return f instanceof Dt&&cu(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(c){return c.map(f=>function(R){return new tr(me(R.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,wr(f)?null:f}(e.limit));let u=null;e.startAt&&(u=function(c){const f=!!c.before,g=c.values||[];return new Zn(g,f)}(e.startAt));let h=null;return e.endAt&&(h=function(c){const f=!c.before,g=c.values||[];return new Zn(g,f)}(e.endAt)),Td(t,s,o,i,a,"F",u,h)}function rf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function bu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=me(e.unaryFilter.field);return H.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=me(e.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=me(e.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=me(e.unaryFilter.field);return H.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(e){return H.create(me(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(r=>bu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(n):A()}function sf(n){return Kd[n]}function of(n){return Hd[n]}function af(n){return Qd[n]}function ge(n){return{fieldPath:n.canonicalString()}}function me(n){return ut.fromServerFormat(n.fieldPath)}function ku(n){return n instanceof H?function(e){if(e.op==="=="){if(ho(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NAN"}};if(uo(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ho(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NAN"}};if(uo(e.value))return{unaryFilter:{field:ge(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ge(e.field),op:of(e.op),value:e.value}}}(n):n instanceof Dt?function(e){const r=e.getFilters().map(s=>ku(s));return r.length===1?r[0]:{compositeFilter:{op:af(e.op),filters:r}}}(n):A()}function Nu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ft{constructor(t,e,r,s,i=w.min(),o=w.min(),a=ot.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Ft(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class uf{constructor(t){this.ct=t}}function hf(n){const t=nf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Is(t,t.limit,"L"):t}/**
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
 */class lf{constructor(){this._n=new cf}addToCollectionParentIndex(t,e){return this._n.add(e),d.resolve()}getCollectionParents(t,e){return d.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return d.resolve()}deleteFieldIndex(t,e){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,e){return d.resolve()}getDocumentsMatchingTarget(t,e){return d.resolve(null)}getIndexType(t,e){return d.resolve(0)}getFieldIndexes(t,e){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,e){return d.resolve(jt.min())}getMinOffsetFromCollectionGroup(t,e){return d.resolve(jt.min())}updateCollectionGroup(t,e,r){return d.resolve()}updateIndexEntries(t,e){return d.resolve()}}class cf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new tt(F.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new tt(F.comparator)).toArray()}}/**
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
 */class Pe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Pe(0)}static Ln(){return new Pe(-1)}}/**
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
 */class df{constructor(){this.changes=new Oe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,rt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?d.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ff{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class gf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&nn(r.mutation,s,Lt.empty(),lt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,V()).next(()=>r))}getLocalViewOfDocuments(t,e,r=V()){const s=re();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let o=ze();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=re();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,V()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,s){let i=zt();const o=en(),a=function(){return en()}();return e.forEach((u,h)=>{const l=r.get(h.key);s.has(h.key)&&(l===void 0||l.mutation instanceof Vr)?i=i.insert(h.key,h):l!==void 0?(o.set(h.key,l.mutation.getFieldMask()),nn(l.mutation,h,l.mutation.getFieldMask(),lt.now())):o.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((h,l)=>o.set(h,l)),e.forEach((h,l)=>{var c;return a.set(h,new ff(l,(c=o.get(h))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(t,e){const r=en();let s=new U((o,a)=>o-a),i=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let l=r.get(u)||Lt.empty();l=a.applyToLocalView(h,l),r.set(u,l);const c=(s.get(a.batchId)||V()).add(u);s=s.insert(a.batchId,c)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,l=u.value,c=Eu();l.forEach(f=>{if(!i.has(f)){const g=wu(e.get(f),r.get(f));g!==null&&c.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,c))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(o){return v.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Id(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):d.resolve(re());let a=-1,u=i;return o.next(h=>d.forEach(h,(l,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),i.get(l)?d.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,u,h,V())).next(l=>({batchId:a,changes:Sd(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new v(e)).next(r=>{let s=ze();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let o=ze();return this.indexManager.getCollectionParents(t,i).next(a=>d.forEach(a,u=>{const h=function(c,f){return new Rr(f,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(l=>{l.forEach((c,f)=>{o=o.insert(c,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(o=>{i.forEach((u,h)=>{const l=h.getKey();o.get(l)===null&&(o=o.insert(l,rt.newInvalidDocument(l)))});let a=ze();return o.forEach((u,h)=>{const l=i.get(u);l!==void 0&&nn(l.mutation,h,Lt.empty(),lt.now()),Sr(e,h)&&(a=a.insert(u,h))}),a})}}/**
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
 */class mf{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return d.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ve(s.createTime)}}(e)),d.resolve()}getNamedQuery(t,e){return d.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:hf(s.bundledQuery),readTime:ve(s.readTime)}}(e)),d.resolve()}}/**
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
 */class pf{constructor(){this.overlays=new U(v.comparator),this.hr=new Map}getOverlay(t,e){return d.resolve(this.overlays.get(e))}getOverlays(t,e){const r=re();return d.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.ht(t,e,i)}),d.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),d.resolve()}getOverlaysForCollection(t,e,r){const s=re(),i=e.length+1,o=new v(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return d.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new U((h,l)=>h-l);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let l=i.get(h.largestBatchId);l===null&&(l=re(),i=i.insert(h.largestBatchId,l)),l.set(h.getKey(),h)}}const a=re(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,l)=>a.set(h,l)),!(a.size()>=s)););return d.resolve(a)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ud(e,r));let i=this.hr.get(e);i===void 0&&(i=V(),this.hr.set(e,i)),this.hr.set(e,i.add(r.key))}}/**
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
 */class gi{constructor(){this.Pr=new tt(G.Ir),this.Tr=new tt(G.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new G(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new G(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new v(new F([])),r=new G(e,t),s=new G(e,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new v(new F([])),r=new G(e,t),s=new G(e,t+1);let i=V();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const e=new G(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class G{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return v.comparator(t.key,e.key)||k(t.pr,e.pr)}static Er(t,e){return k(t.pr,e.pr)||v.comparator(t.key,e.key)}}/**
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
 */class _f{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new tt(G.Ir)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bd(i,e,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new G(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,e){return d.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new G(e,0),s=new G(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new tt(k);return e.forEach(s=>{const i=new G(s,0),o=new G(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),d.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;v.isDocumentKey(i)||(i=i.child(""));const o=new G(new v(i),0);let a=new tt(k);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(a=a.add(u.pr)),!0)},o),d.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){K(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return d.forEach(e.mutations,s=>{const i=new G(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new G(e,0),s=this.wr.firstAfterOrEqual(r);return d.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class yf{constructor(t){this.vr=t,this.docs=function(){return new U(v.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return d.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(e))}getEntries(t,e){let r=zt();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),d.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=zt();const o=e.path,a=new v(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:h,value:{document:l}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||nd(ed(l),r)<=0||(s.has(l.key)||Sr(e,l))&&(i=i.insert(l.key,l.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,e,r,s){A()}Fr(t,e){return d.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ef(this)}getSize(t){return d.resolve(this.size)}}class Ef extends df{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),d.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class vf{constructor(t){this.persistence=t,this.Mr=new Oe(e=>hi(e),li),this.lastRemoteSnapshotVersion=w.min(),this.highestTargetId=0,this.Or=0,this.Nr=new gi,this.targetCount=0,this.Lr=Pe.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),d.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Pe(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,d.resolve()}updateTargetData(t,e){return this.qn(e),d.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),d.waitFor(i).next(()=>s)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return d.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),d.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),d.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return d.resolve(r)}containsKey(t,e){return d.resolve(this.Nr.containsKey(e))}}/**
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
 */class Tf{constructor(t,e){this.Br={},this.overlays={},this.kr=new ii(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new vf(this),this.indexManager=new lf,this.remoteDocumentCache=function(s){return new yf(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new uf(e),this.$r=new mf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new pf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new _f(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){_("MemoryPersistence","Starting transaction:",t);const s=new If(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return d.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class If extends sd{constructor(t){super(),this.currentSequenceNumber=t}}class mi{constructor(t){this.persistence=t,this.zr=new gi,this.jr=null}static Hr(t){return new mi(t)}get Jr(){if(this.jr)return this.jr;throw A()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),d.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),d.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Jr,r=>{const s=v.fromPath(r);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,w.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return d.or([()=>d.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class pi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=V(),s=V();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pi(t,e.fromCache,r,s)}}/**
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
 */class wf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Af{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ah()?8:ne.v(zn())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ji(t,e).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,e,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new wf;return this.Ji(t,e,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>i.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(qe()<=P.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",fe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),d.resolve()):(qe()<=P.DEBUG&&_("QueryEngine","Query:",fe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(qe()<=P.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",fe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(e))):d.resolve())}ji(t,e){if(go(e))return d.resolve(null);let r=St(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Is(e,null,"F"),r=St(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=V(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.Zi(e,a);return this.Xi(e,h,o,u.readTime)?this.ji(t,Is(e,null,"F")):this.es(t,h,e,u)}))})))}Hi(t,e,r,s){return go(e)||s.isEqual(w.min())?d.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(e,i);return this.Xi(e,o,r,s)?d.resolve(null):(qe()<=P.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fe(e)),this.es(t,o,e,td(s,-1)).next(a=>a))})}Zi(t,e){let r=new tt(_u(t));return e.forEach((s,i)=>{Sr(t,i)&&(r=r.add(i))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,r){return qe()<=P.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",fe(e)),this.zi.getDocumentsMatchingQuery(t,e,jt.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Rf{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new U(k),this.rs=new Oe(i=>hi(i),li),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new gf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Cf(n,t,e,r){return new Rf(n,t,e,r)}async function Ou(n,t){const e=D(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=V();for(const h of s){o.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}for(const h of i){a.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}return e.localDocuments.getDocuments(r,u).next(h=>({us:h,removedBatchIds:o,addedBatchIds:a}))})})}function Mu(n){const t=D(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Sf(n,t){const e=D(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const a=[];t.targetChanges.forEach((l,c)=>{const f=s.get(c);if(!f)return;a.push(e.Qr.removeMatchingKeys(i,l.removedDocuments,c).next(()=>e.Qr.addMatchingKeys(i,l.addedDocuments,c)));let g=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(c)!==null?g=g.withResumeToken(ot.EMPTY_BYTE_STRING,w.min()).withLastLimboFreeSnapshotVersion(w.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(c,g),function(b,T,E){return b.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,g,l)&&a.push(e.Qr.updateTargetData(i,g))});let u=zt(),h=V();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Pf(i,o,t.documentUpdates).next(l=>{u=l.cs,h=l.ls})),!r.isEqual(w.min())){const l=e.Qr.getLastRemoteSnapshotVersion(i).next(c=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(e.ns=s,i))}function Pf(n,t,e){let r=V(),s=V();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let o=zt();return e.forEach((a,u)=>{const h=i.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(w.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{cs:o,ls:s}})}function Vf(n,t){const e=D(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(i=>i?(s=i,d.resolve(s)):e.Qr.allocateTargetId(r).next(o=>(s=new Ft(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Ss(n,t,e){const r=D(n),s=r.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Cn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Ro(n,t,e){const r=D(n);let s=w.min(),i=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,l){const c=D(u),f=c.rs.get(l);return f!==void 0?d.resolve(c.ns.get(f)):c.Qr.getTargetData(h,l)}(r,o,St(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?s:w.min(),e?i:V())).next(a=>(Df(r,Ad(t),a),{documents:a,hs:i})))}function Df(n,t,e){let r=n.ss.get(t)||w.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ss.set(t,r)}class Co{constructor(){this.activeTargetIds=Dd()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bf{constructor(){this.no=new Co,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Co,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class kf{io(t){}shutdown(){}}/**
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
 */class So{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ln=null;function Wr(){return Ln===null?Ln=function(){return 268435456+Math.round(2147483648*Math.random())}():Ln++,"0x"+Ln.toString(16)}/**
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
 */const Nf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Of{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const et="WebChannelConnection";class Mf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(e,r,s,i,o){const a=Wr(),u=this.bo(e,r.toUriEncodedString());_("RestConnection",`Sending RPC '${e}' ${a}:`,u,s);const h={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(h,i,o),this.Co(e,u,h,s).then(l=>(_("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw Ae("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",u,"request:",s),l})}vo(e,r,s,i,o,a){return this.So(e,r,s,i,o)}Do(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ne}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>e[o]=i),s&&s.headers.forEach((i,o)=>e[o]=i)}bo(e,r){const s=Nf[e];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,s){const i=Wr();return new Promise((o,a)=>{const u=new jc;u.setWithCredentials(!0),u.listenOnce(Uc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Hr.NO_ERROR:const l=u.getResponseJson();_(et,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case Hr.TIMEOUT:_(et,`RPC '${t}' ${i} timed out`),a(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case Hr.HTTP_ERROR:const c=u.getStatus();if(_(et,`RPC '${t}' ${i} failed with status:`,c,"response text:",u.getResponseText()),c>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const R=function(T){const E=T.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(E)>=0?E:m.UNKNOWN}(g.status);a(new y(R,g.message))}else a(new y(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(m.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(et,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(s);_(et,`RPC '${t}' ${i} sending request:`,s),u.send(e,"POST",h,r,15)})}Fo(t,e,r){const s=Wr(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Fc(),a=Bc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const l=i.join("");_(et,`Creating RPC '${t}' stream ${s}: ${l}`,u);const c=o.createWebChannel(l,u);let f=!1,g=!1;const R=new Of({lo:T=>{g?_(et,`Not sending because RPC '${t}' stream ${s} is closed:`,T):(f||(_(et,`Opening RPC '${t}' stream ${s} transport.`),c.open(),f=!0),_(et,`RPC '${t}' stream ${s} sending:`,T),c.send(T))},ho:()=>c.close()}),b=(T,E,x)=>{T.listen(E,L=>{try{x(L)}catch(Q){setTimeout(()=>{throw Q},0)}})};return b(c,On.EventType.OPEN,()=>{g||_(et,`RPC '${t}' stream ${s} transport opened.`)}),b(c,On.EventType.CLOSE,()=>{g||(g=!0,_(et,`RPC '${t}' stream ${s} transport closed`),R.Vo())}),b(c,On.EventType.ERROR,T=>{g||(g=!0,Ae(et,`RPC '${t}' stream ${s} transport errored:`,T),R.Vo(new y(m.UNAVAILABLE,"The operation could not be completed")))}),b(c,On.EventType.MESSAGE,T=>{var E;if(!g){const x=T.data[0];K(!!x);const L=x,Q=L.error||((E=L[0])===null||E===void 0?void 0:E.error);if(Q){_(et,`RPC '${t}' stream ${s} received error:`,Q);const Mt=Q.status;let at=function(yt){const Fe=j[yt];if(Fe!==void 0)return Ru(Fe)}(Mt),bt=Q.message;at===void 0&&(at=m.INTERNAL,bt="Unknown error status: "+Mt+" with message "+Q.message),g=!0,R.Vo(new y(at,bt)),c.close()}else _(et,`RPC '${t}' stream ${s} received:`,x),R.mo(x)}}),b(a,qc.STAT_EVENT,T=>{T.stat===no.PROXY?_(et,`RPC '${t}' stream ${s} detected buffering proxy`):T.stat===no.NOPROXY&&_(et,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.Ro()},0),R}}function Yr(){return typeof document<"u"?document:null}/**
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
 */function xu(n){return new Gd(n,!0)}/**
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
 */class Lu{constructor(t,e,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,e-r);s>0&&_("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class xf{constructor(t,e,r,s,i,o,a,u){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Lu(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===m.RESOURCE_EXHAUSTED?(Pt(e.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===e&&this.o_(r,s)},r=>{t(()=>{const s=new y(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lf extends xf{constructor(t,e,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,o),this.serializer=i}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=Zd(this.serializer,t),r=function(i){if(!("targetChange"in i))return w.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?w.min():o.readTime?ve(o.readTime):w.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=Ao(this.serializer),e.addTarget=function(i,o){let a;const u=o.target;if(a=Ts(u)?{documents:tf(i,u)}:{query:ef(i,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Yd(i,o.resumeToken);const h=Rs(i,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(w.min())>0){a.readTime=Wd(i,o.snapshotVersion.toTimestamp());const h=Rs(i,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=rf(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=Ao(this.serializer),e.removeTarget=t,this.t_(e)}}/**
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
 */class Ff extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Cs(e,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}vo(t,e,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Cs(e,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(m.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Bf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Pt(e),this.g_=!1):_("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class Uf{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Vn(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=D(u);h.v_.add(4),await Pn(h),h.x_.set("Unknown"),h.v_.delete(4),await br(h)}(this))})}),this.x_=new Bf(r,s)}}async function br(n){if(Vn(n))for(const t of n.F_)await t(!0)}async function Pn(n){for(const t of n.F_)await t(!1)}function Fu(n,t){const e=D(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),vi(e)?Ei(e):Me(e).Jo()&&yi(e,t))}function _i(n,t){const e=D(n),r=Me(e);e.C_.delete(t),r.Jo()&&Bu(e,t),e.C_.size===0&&(r.Jo()?r.Xo():Vn(e)&&e.x_.set("Unknown"))}function yi(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(w.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(n).c_(t)}function Bu(n,t){n.O_.Oe(t),Me(n).l_(t)}function Ei(n){n.O_=new zd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Me(n).start(),n.x_.p_()}function vi(n){return Vn(n)&&!Me(n).Ho()&&n.C_.size>0}function Vn(n){return D(n).v_.size===0}function Uu(n){n.O_=void 0}async function qf(n){n.C_.forEach((t,e)=>{yi(n,t)})}async function jf(n,t){Uu(n),vi(n)?(n.x_.S_(t),Ei(n)):n.x_.set("Unknown")}async function $f(n,t,e){if(n.x_.set("Online"),t instanceof Su&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(n,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Po(n,r)}else if(t instanceof Un?n.O_.$e(t):t instanceof Cu?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(w.min()))try{const r=await Mu(n.localStore);e.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.C_.get(h);l&&i.C_.set(h,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,h)=>{const l=i.C_.get(u);if(!l)return;i.C_.set(u,l.withResumeToken(ot.EMPTY_BYTE_STRING,l.snapshotVersion)),Bu(i,u);const c=new Ft(l.target,u,h,l.sequenceNumber);yi(i,c)}),i.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Po(n,r)}}async function Po(n,t,e){if(!Cn(t))throw t;n.v_.add(1),await Pn(n),n.x_.set("Offline"),e||(e=()=>Mu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await br(n)})}async function Vo(n,t){const e=D(n);e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=Vn(e);e.v_.add(3),await Pn(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await br(e)}async function zf(n,t){const e=D(n);t?(e.v_.delete(2),await br(e)):t||(e.v_.add(2),await Pn(e),e.x_.set("Unknown"))}function Me(n){return n.N_||(n.N_=function(e,r,s){const i=D(e);return i.R_(),new Lf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Po:qf.bind(null,n),To:jf.bind(null,n),u_:$f.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),vi(n)?Ei(n):n.x_.set("Unknown")):(await n.N_.stop(),Uu(n))})),n.N_}/**
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
 */class Ti{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const o=Date.now()+r,a=new Ti(t,e,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(n,t){if(Pt("AsyncQueue",`${t}: ${n}`),Cn(n))return new y(m.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Te{constructor(t){this.comparator=t?(e,r)=>t(e,r)||v.comparator(e.key,r.key):(e,r)=>v.comparator(e.key,r.key),this.keyedMap=ze(),this.sortedSet=new U(this.comparator)}static emptySet(t){return new Te(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Te)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Te;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Do{constructor(){this.B_=new U(v.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):A():this.B_=this.B_.insert(e,t)}k_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ve{constructor(t,e,r,s,i,o,a,u,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,s,i){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Ve(t,e,Te.emptySet(e),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Kf{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class Hf{constructor(){this.queries=new Oe(t=>pu(t),Cr),this.onlineState="Unknown",this.W_=new Set}}async function Qf(n,t){const e=D(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new Kf,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await e.onListen(s,!0);break;case 1:i.q_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=qu(o,`Initialization of query '${fe(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,i),i.Q_.push(t),t.G_(e.onlineState),i.q_&&t.z_(i.q_)&&Ii(e)}async function Gf(n,t){const e=D(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Wf(n,t){const e=D(n);let r=!1;for(const s of t){const i=s.query,o=e.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Ii(e)}function Yf(n,t,e){const r=D(n),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(e);r.queries.delete(t)}function Ii(n){n.W_.forEach(t=>{t.next()})}var Ps,bo;(bo=Ps||(Ps={})).j_="default",bo.Cache="cache";class Xf{constructor(t,e,r){this.query=t,this.H_=e,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ve(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),e=!0):this.X_(t,this.onlineState)&&(this.ea(t),e=!0),this.Y_=t,e}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let e=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),e=!0),e}X_(t,e){if(!t.fromCache||!this.U_())return!0;const r=e!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const e=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ea(t){t=Ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Ps.Cache}}/**
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
 */class ju{constructor(t){this.key=t}}class $u{constructor(t){this.key=t}}class Jf{constructor(t,e){this.query=t,this.ua=e,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=V(),this.mutatedKeys=V(),this.ha=_u(t),this.Pa=new Te(this.ha)}get Ia(){return this.ua}Ta(t,e){const r=e?e.Ea:new Do,s=e?e.Pa:this.Pa;let i=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,c)=>{const f=s.get(l),g=Sr(this.query,c)?c:null,R=!!f&&this.mutatedKeys.has(f.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?R!==b&&(r.track({type:3,doc:g}),T=!0):this.da(f,g)||(r.track({type:2,doc:g}),T=!0,(u&&this.ha(g,u)>0||h&&this.ha(g,h)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),T=!0):f&&!g&&(r.track({type:1,doc:f}),T=!0,(u||h)&&(a=!0)),T&&(g?(o=o.add(g),i=b?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((l,c)=>function(g,R){const b=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return b(g)-b(R)}(l.type,c.type)||this.ha(l.doc,c.doc)),this.Aa(r),s=s!=null&&s;const a=e&&!s?this.Ra():[],u=this.la.size===0&&this.current&&!s?1:0,h=u!==this.ca;return this.ca=u,o.length!==0||h?{snapshot:new Ve(this.query,t.Pa,i,o,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Do,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(e=>this.ua=this.ua.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ua=this.ua.delete(e)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=V(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const e=[];return t.forEach(r=>{this.la.has(r)||e.push(new $u(r))}),this.la.forEach(r=>{t.has(r)||e.push(new ju(r))}),e}fa(t){this.ua=t.hs,this.la=V();const e=this.Ta(t.documents);return this.applyChanges(e,!0)}ga(){return Ve.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class Zf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class tg{constructor(t){this.key=t,this.pa=!1}}class eg{constructor(t,e,r,s,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Oe(a=>pu(a),Cr),this.Sa=new Map,this.ba=new Set,this.Da=new U(v.comparator),this.Ca=new Map,this.va=new gi,this.Fa={},this.Ma=new Map,this.xa=Pe.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function ng(n,t,e=!0){const r=Gu(n);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await zu(r,t,e,!0),s}async function rg(n,t){const e=Gu(n);await zu(e,t,!0,!1)}async function zu(n,t,e,r){const s=await Vf(n.localStore,St(t)),i=s.targetId,o=e?n.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await sg(n,t,i,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&Fu(n.remoteStore,s),a}async function sg(n,t,e,r,s){n.Na=(c,f,g)=>async function(b,T,E,x){let L=T.view.Ta(E);L.Xi&&(L=await Ro(b.localStore,T.query,!1).then(({documents:bt})=>T.view.Ta(bt,L)));const Q=x&&x.targetChanges.get(T.targetId),Mt=x&&x.targetMismatches.get(T.targetId)!=null,at=T.view.applyChanges(L,b.isPrimaryClient,Q,Mt);return No(b,T.targetId,at.Va),at.snapshot}(n,c,f,g);const i=await Ro(n.localStore,t,!0),o=new Jf(t,i.hs),a=o.Ta(i.documents),u=Sn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),h=o.applyChanges(a,n.isPrimaryClient,u);No(n,e,h.Va);const l=new Zf(t,e,o);return n.wa.set(t,l),n.Sa.has(e)?n.Sa.get(e).push(t):n.Sa.set(e,[t]),h.snapshot}async function ig(n,t,e){const r=D(n),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Cr(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ss(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&_i(r.remoteStore,s.targetId),Vs(r,s.targetId)}).catch(ni)):(Vs(r,s.targetId),await Ss(r.localStore,s.targetId,!0))}async function og(n,t){const e=D(n),r=e.wa.get(t),s=e.Sa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),_i(e.remoteStore,r.targetId))}async function Ku(n,t){const e=D(n);try{const r=await Sf(e.localStore,t);t.targetChanges.forEach((s,i)=>{const o=e.Ca.get(i);o&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?K(o.pa):s.removedDocuments.size>0&&(K(o.pa),o.pa=!1))}),await Qu(e,r,t)}catch(r){await ni(r)}}function ko(n,t,e){const r=D(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=D(o);u.onlineState=a;let h=!1;u.queries.forEach((l,c)=>{for(const f of c.Q_)f.G_(a)&&(h=!0)}),h&&Ii(u)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ag(n,t,e){const r=D(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new U(v.comparator);o=o.insert(i,rt.newNoDocument(i,w.min()));const a=V().add(i),u=new Dr(w.min(),new Map,new U(k),o,a);await Ku(r,u),r.Da=r.Da.remove(i),r.Ca.delete(t),wi(r)}else await Ss(r.localStore,t,!1).then(()=>Vs(r,t,e)).catch(ni)}function Vs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Sa.get(t))n.wa.delete(r),e&&n.ya.La(r,e);n.Sa.delete(t),n.isPrimaryClient&&n.va.Vr(t).forEach(r=>{n.va.containsKey(r)||Hu(n,r)})}function Hu(n,t){n.ba.delete(t.path.canonicalString());const e=n.Da.get(t);e!==null&&(_i(n.remoteStore,e),n.Da=n.Da.remove(t),n.Ca.delete(e),wi(n))}function No(n,t,e){for(const r of e)r instanceof ju?(n.va.addReference(r.key,t),ug(n,r)):r instanceof $u?(_("SyncEngine","Document no longer in limbo: "+r.key),n.va.removeReference(r.key,t),n.va.containsKey(r.key)||Hu(n,r.key)):A()}function ug(n,t){const e=t.key,r=e.path.canonicalString();n.Da.get(e)||n.ba.has(r)||(_("SyncEngine","New document in limbo: "+e),n.ba.add(r),wi(n))}function wi(n){for(;n.ba.size>0&&n.Da.size<n.maxConcurrentLimboResolutions;){const t=n.ba.values().next().value;n.ba.delete(t);const e=new v(F.fromString(t)),r=n.xa.next();n.Ca.set(r,new tg(e)),n.Da=n.Da.insert(e,r),Fu(n.remoteStore,new Ft(St(mu(e.path)),r,"TargetPurposeLimboResolution",ii._e))}}async function Qu(n,t,e){const r=D(n),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,u)=>{o.push(r.Na(u,t,e).then(h=>{if((h||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){s.push(h);const l=pi.Ki(u.targetId,h);i.push(l)}}))}),await Promise.all(o),r.ya.u_(s),await async function(u,h){const l=D(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>d.forEach(h,f=>d.forEach(f.qi,g=>l.persistence.referenceDelegate.addReference(c,f.targetId,g)).next(()=>d.forEach(f.Qi,g=>l.persistence.referenceDelegate.removeReference(c,f.targetId,g)))))}catch(c){if(!Cn(c))throw c;_("LocalStore","Failed to update sequence numbers: "+c)}for(const c of h){const f=c.targetId;if(!c.fromCache){const g=l.ns.get(f),R=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(R);l.ns=l.ns.insert(f,b)}}}(r.localStore,i))}async function hg(n,t){const e=D(n);if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await Ou(e.localStore,t);e.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(u=>{u.reject(new y(m.CANCELLED,o))})}),i.Ma.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Qu(e,r.us)}}function lg(n,t){const e=D(n),r=e.Ca.get(t);if(r&&r.pa)return V().add(r.key);{let s=V();const i=e.Sa.get(t);if(!i)return s;for(const o of i){const a=e.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Gu(n){const t=D(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ku.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ag.bind(null,t),t.ya.u_=Wf.bind(null,t.eventManager),t.ya.La=Yf.bind(null,t.eventManager),t}class Oo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=xu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Cf(this.persistence,new Af,t.initialUser,this.serializer)}createPersistence(t){return new Tf(mi.Hr,this.serializer)}createSharedClientState(t){return new bf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cg{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ko(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hg.bind(null,this.syncEngine),await zf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Hf}()}createDatastore(t){const e=xu(t.databaseInfo.databaseId),r=function(i){return new Mf(i)}(t.databaseInfo);return function(i,o,a,u){return new Ff(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,o,a){return new Uf(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>ko(this.syncEngine,e,0),function(){return So.D()?new So:new kf}())}createSyncEngine(t,e){return function(s,i,o,a,u,h,l){const c=new eg(s,i,o,a,u,h);return l&&(c.Oa=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=D(r);_("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Pn(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 *//**
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
 */class dg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):Pt("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class fg{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=Jc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{_("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(_("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=qu(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Xr(n,t){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ou(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Mo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await mg(n);_("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Vo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Vo(t.remoteStore,s)),n._onlineComponents=t}function gg(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function mg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!gg(e))throw e;Ae("Error using user provided cache. Falling back to memory cache: "+e),await Xr(n,new Oo)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Xr(n,new Oo);return n._offlineComponents}async function pg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await Mo(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await Mo(n,new cg))),n._onlineComponents}async function _g(n){const t=await pg(n),e=t.eventManager;return e.onListen=ng.bind(null,t.syncEngine),e.onUnlisten=ig.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=rg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=og.bind(null,t.syncEngine),e}function yg(n,t,e={}){const r=new qt;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,h){const l=new dg({next:f=>{o.enqueueAndForget(()=>Gf(i,c)),f.fromCache&&u.source==="server"?h.reject(new y(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(f)},error:f=>h.reject(f)}),c=new Xf(a,l,{includeMetadataChanges:!0,ta:!0});return Qf(i,c)}(await _g(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Wu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const xo=new Map;/**
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
 */function Eg(n,t,e){if(!e)throw new y(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function vg(n,t,e,r){if(t===!0&&r===!0)throw new y(m.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Lo(n){if(v.isDocumentKey(n))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Tg(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":A()}function Ds(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Tg(n);throw new y(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Fo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}vg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ai{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zc;switch(r.type){case"firstParty":return new Gc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=xo.get(e);r&&(_("ComponentProvider","Removing Datastore"),xo.delete(e),r.terminate())}(this),Promise.resolve()}}function Ig(n,t,e,r={}){var s;const i=(n=Ds(n,Ai))._getSettings(),o=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=nt.MOCK_USER;else{a=Ih(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nt(h)}n._authCredentials=new Kc(new au(a,u))}}/**
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
 */class kr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new kr(this.firestore,t,this._query)}}class xe{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ie(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xe(this.firestore,t,this._key)}}class Ie extends kr{constructor(t,e,r){super(t,e,mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xe(this.firestore,null,new v(t))}withConverter(t){return new Ie(this.firestore,t,this._path)}}function wg(n,t,...e){if(n=Vh(n),Eg("collection","path",t),n instanceof Ai){const r=F.fromString(t,...e);return Lo(r),new Ie(n,null,r)}{if(!(n instanceof xe||n instanceof Ie))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(t,...e));return Lo(r),new Ie(n.firestore,null,r)}}/**
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
 */class Ag{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Lu(this,"async_queue_retry"),this.cu=()=>{const e=Yr();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=Yr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const e=Yr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const e=new qt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!Cn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const e=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=e,e}enqueueAfterDelay(t,e,r){this.lu(),this.uu.indexOf(t)>-1&&(e=0);const s=Ti.createAndSchedule(this,t,e,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&A()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const e of this.su)if(e.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.su)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const e=this.su.indexOf(t);this.su.splice(e,1)}}class Yu extends Ai{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Ag}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xu(this),this._firestoreClient.terminate()}}function Rg(n,t){const e=typeof n=="object"?n:Pl(),r=typeof n=="string"?n:t||"(default)",s=Al(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vh("firestore");i&&Ig(s,...i)}return s}function Cg(n){return n._firestoreClient||Xu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Xu(n){var t,e,r;const s=n._freezeSettings(),i=function(a,u,h,l){return new hd(a,u,h,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Wu(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new fg(n._authCredentials,n._appCheckCredentials,n._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class rr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new rr(ot.fromBase64String(t))}catch(e){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new rr(ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ju{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Sg{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}const Pg=new RegExp("[~\\*/\\[\\]]");function Vg(n,t,e){if(t.search(Pg)>=0)throw Bo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ju(...t.split("."))._internalPath}catch{throw Bo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Bo(n,t,e,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new y(m.INVALID_ARGUMENT,a+n+u)}/**
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
 */class Zu{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Dg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(th("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Dg extends Zu{data(){return super.data()}}function th(n,t){return typeof t=="string"?Vg(n,t):t instanceof Ju?t._internalPath:t._delegate._internalPath}/**
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
 */function bg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kg{convertValue(t,e="none"){switch(le(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(he(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ar(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertGeoPoint(t){return new Sg(z(t.latitude),z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ai(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(mn(t));default:return null}}convertTimestamp(t){const e=$t(t);return new lt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=F.fromString(t);K(Nu(r));const s=new pn(r.get(1),r.get(3)),i=new v(r.popFirst(5));return s.isEqual(e)||Pt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */class Fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ng extends Zu{constructor(t,e,r,s,i,o){super(t,e,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(th("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class qn extends Ng{data(t={}){return super.data(t)}}class Og{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Fn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new qn(this._firestore,this._userDataWriter,r.key,r,new Fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new qn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new qn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,l=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Mg(a.type),doc:u,oldIndex:h,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Mg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}class xg extends kg{constructor(t){super(),this.firestore=t}convertBytes(t){return new rr(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new xe(this.firestore,null,e)}}function Lg(n){n=Ds(n,kr);const t=Ds(n.firestore,Yu),e=Cg(t),r=new xg(t);return bg(n._query),yg(e,n._query).then(s=>new Og(t,r,n,s))}(function(t,e=!0){(function(s){Ne=s})(Sl),Hn(new rn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Yu(new Hc(r.getProvider("auth-internal")),new Yc(r.getProvider("app-check-internal")),function(h,l){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pn(h.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ye(ro,"4.5.0",t),Ye(ro,"4.5.0","esm2017")})();const Fg={apiKey:"AIzaSyAMF_kikzvb5XhnfzPC6QBQfTb5Q20QL2Q",authDomain:"study-odia.firebaseapp.com",projectId:"study-odia",storageBucket:"study-odia.appspot.com",messagingSenderId:"693588961076",appId:"1:693588961076:web:281a98d392ae35d0bce761",measurementId:"G-XZY93WFYQL"};function Bg(n){let t;return{c(){t=ct("div"),this.h()},l(e){t=dt(e,"DIV",{class:!0,style:!0}),At(t).forEach($),this.h()},h(){O(t,"class","skeleton svelte-cjmcab"),gt(t,"height",n[1]),gt(t,"width",n[0]),gt(t,"border-radius",n[2]),gt(t,"--baseColor",n[3]),gt(t,"--highlightColor",n[4]),gt(t,"--animationLength",n[5])},m(e,r){vt(e,t,r)},p(e,[r]){r&2&&gt(t,"height",e[1]),r&1&&gt(t,"width",e[0]),r&4&&gt(t,"border-radius",e[2]),r&8&&gt(t,"--baseColor",e[3]),r&16&&gt(t,"--highlightColor",e[4]),r&32&&gt(t,"--animationLength",e[5])},i:oe,o:oe,d(e){e&&$(t)}}}function Ug(n,t,e){let{width:r="100%"}=t,{height:s="25px"}=t,{borderRadius:i="4px"}=t,{baseColor:o="rgb(238, 238, 238)"}=t,{highlightColor:a="rgb(245, 245, 245)"}=t,{animationLength:u="1.2s"}=t;return n.$$set=h=>{"width"in h&&e(0,r=h.width),"height"in h&&e(1,s=h.height),"borderRadius"in h&&e(2,i=h.borderRadius),"baseColor"in h&&e(3,o=h.baseColor),"highlightColor"in h&&e(4,a=h.highlightColor),"animationLength"in h&&e(5,u=h.animationLength)},[r,s,i,o,a,u]}class qg extends ir{constructor(t){super(),or(this,t,Ug,Bg,sr,{width:0,height:1,borderRadius:2,baseColor:3,highlightColor:4,animationLength:5})}}function jg(n){let t,e;return{c(){t=ct("h1"),e=jo(n[1]),this.h()},l(r){t=dt(r,"H1",{id:!0,class:!0});var s=At(t);e=$o(s,n[1]),s.forEach($),this.h()},h(){O(t,"id","question"),O(t,"class","svelte-1ia9uz7")},m(r,s){vt(r,t,s),mt(t,e)},p(r,s){s&2&&zo(e,r[1])},i:oe,o:oe,d(r){r&&$(t)}}}function $g(n){let t,e,r;return e=new qg({props:{baseColor:"rgb(175, 175, 175)",highlightColor:"rgb(225, 225, 225)",height:"2rem"}}),{c(){t=ct("div"),He(e.$$.fragment),this.h()},l(s){t=dt(s,"DIV",{id:!0,class:!0});var i=At(t);Qe(e.$$.fragment,i),i.forEach($),this.h()},h(){O(t,"id","question"),O(t,"class","svelte-1ia9uz7")},m(s,i){vt(s,t,i),Ge(e,t,null),r=!0},p:oe,i(s){r||(Tt(e.$$.fragment,s),r=!0)},o(s){kt(e.$$.fragment,s),r=!1},d(s){s&&$(t),We(e)}}}function zg(n){let t,e,r='<img width="35" src="close.svg" alt="Close"/>',s,i,o,a,u="",h,l,c,f,g,R,b,T,E,x=(n[0].showing?n[0].info:".")+"",L,Q,Mt,at,bt,Le,yt,Fe=`<div id="hansika" class="svelte-1ia9uz7">For Hansika ❤️</div> <div id="lang" class="svelte-1ia9uz7"><div>ଓଡ଼ିଆ<br/>Odia</div> <img width="50" src="${sh}" alt="India" class="svelte-1ia9uz7"/></div>`,Qt,Nr,Ri;i=new lh({});const Ci=[$g,jg],xt=[];function Si(C,q){return C[1]==""?0:1}return c=Si(n),f=xt[c]=Ci[c](n),R=new ah({}),at=new Ko({props:{type:"good",callback:n[5],text:n[0].button}}),{c(){t=ct("header"),e=ct("div"),e.innerHTML=r,s=Wt(),He(i.$$.fragment),o=Wt(),a=ct("div"),a.innerHTML=u,h=Wt(),l=ct("main"),f.c(),g=Wt(),He(R.$$.fragment),b=Wt(),T=ct("div"),E=ct("div"),L=jo(x),Mt=Wt(),He(at.$$.fragment),Le=Wt(),yt=ct("footer"),yt.innerHTML=Fe,this.h()},l(C){t=dt(C,"HEADER",{class:!0});var q=At(t);e=dt(q,"DIV",{role:!0,tabindex:!0,class:!0,"data-svelte-h":!0}),Or(e)!=="svelte-127rnbs"&&(e.innerHTML=r),s=Yt(q),Qe(i.$$.fragment,q),o=Yt(q),a=dt(q,"DIV",{"data-svelte-h":!0}),Or(a)!=="svelte-1bipc6g"&&(a.innerHTML=u),q.forEach($),h=Yt(C),l=dt(C,"MAIN",{class:!0});var Et=At(l);f.l(Et),g=Yt(Et),Qe(R.$$.fragment,Et),b=Yt(Et),T=dt(Et,"DIV",{id:!0,style:!0,class:!0});var Gt=At(T);E=dt(Gt,"DIV",{style:!0,id:!0,class:!0});var Pi=At(E);L=$o(Pi,x),Pi.forEach($),Mt=Yt(Gt),Qe(at.$$.fragment,Gt),Gt.forEach($),Et.forEach($),Le=Yt(C),yt=dt(C,"FOOTER",{class:!0,"data-svelte-h":!0}),Or(yt)!=="svelte-1ul2xwi"&&(yt.innerHTML=Fe),this.h()},h(){O(e,"role","button"),O(e,"tabindex","0"),O(e,"class","svelte-1ia9uz7"),O(t,"class","svelte-1ia9uz7"),O(E,"style",Q=n[0].showing?"":"color: white"),O(E,"id","infoinfo"),O(E,"class","svelte-1ia9uz7"),O(T,"id","info"),O(T,"style",bt=n[0].showing?"background-color: "+n[0].color+";":""),O(T,"class","svelte-1ia9uz7"),O(l,"class","svelte-1ia9uz7"),O(yt,"class","svelte-1ia9uz7")},m(C,q){vt(C,t,q),mt(t,e),mt(t,s),Ge(i,t,null),mt(t,o),mt(t,a),vt(C,h,q),vt(C,l,q),xt[c].m(l,null),mt(l,g),Ge(R,l,null),mt(l,b),mt(l,T),mt(T,E),mt(E,L),mt(T,Mt),Ge(at,T,null),vt(C,Le,q),vt(C,yt,q),Qt=!0,Nr||(Ri=[Vi(e,"click",n[6]),Vi(e,"keydown",n[7])],Nr=!0)},p(C,[q]){let Et=c;c=Si(C),c===Et?xt[c].p(C,q):(Uo(),kt(xt[Et],1,1,()=>{xt[Et]=null}),qo(),f=xt[c],f?f.p(C,q):(f=xt[c]=Ci[c](C),f.c()),Tt(f,1),f.m(l,g)),(!Qt||q&1)&&x!==(x=(C[0].showing?C[0].info:".")+"")&&zo(L,x),(!Qt||q&1&&Q!==(Q=C[0].showing?"":"color: white"))&&O(E,"style",Q);const Gt={};q&1&&(Gt.text=C[0].button),at.$set(Gt),(!Qt||q&1&&bt!==(bt=C[0].showing?"background-color: "+C[0].color+";":""))&&O(T,"style",bt)},i(C){Qt||(Tt(i.$$.fragment,C),Tt(f),Tt(R.$$.fragment,C),Tt(at.$$.fragment,C),Qt=!0)},o(C){kt(i.$$.fragment,C),kt(f),kt(R.$$.fragment,C),kt(at.$$.fragment,C),Qt=!1},d(C){C&&($(t),$(h),$(l),$(Le),$(yt)),We(i),xt[c].d(),We(R),We(at),Nr=!1,eh(Ri)}}}function Kg(n,t,e){let r,s,i,o;Zt(n,jn,E=>e(12,s=E));let a,u;const h=_e({info:"",color:"green",showing:!1,button:"CHECK"});Zt(n,h,E=>e(0,i=E));const l=_e("");Zt(n,l,E=>e(11,r=E));const c=_e("");Zt(n,c,E=>e(1,o=E));const f={};function g(){const E=Object.keys(f);let x="";const L=[];for(;L.length<4;){const Q=E[Math.floor(Math.random()*E.length)];L.includes(f[Q].o)||(L.push(f[Q].o),x=Q)}Ho.set(L),l.set(f[x].o),c.set('What is this vowel "'+x+'" in Odia?')}nh(async()=>{a=ea(Fg),u=Rg(a);const E=wg(u,"letters");(await Lg(E)).forEach(L=>{f[L.id]=L.data()}),g()});function R(){i.showing==!1?s.has(r)?(jn.set(new Set),Jr.update(E=>({done:E.done+1,total:E.total+1})),h.update(E=>({info:"Correct!",button:"NEXT QUESTION",color:"rgb(223, 254, 191);",showing:!0}))):(Jr.update(E=>({done:E.done,total:E.total+1})),h.update(E=>({info:r,button:"NEXT QUESTION",color:"rgb(254, 191, 191);",showing:!0}))):(h.update(E=>({info:"",button:"CHECK",color:"green",showing:!1})),g())}return[i,o,h,l,c,R,()=>Di("/"),E=>E.key==="Enter"&&Di("/")]}class em extends ir{constructor(t){super(),or(this,t,Kg,zg,sr,{})}}export{em as component};
