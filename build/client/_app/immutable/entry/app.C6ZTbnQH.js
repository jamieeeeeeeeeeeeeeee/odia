function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.DE0jTGOu.js","../chunks/scheduler.DWWUxruK.js","../chunks/index.D8lss90H.js","../nodes/1.C10II70W.js","../chunks/entry.G7l-U3G6.js","../chunks/index.BpUvwN9o.js","../nodes/2.fwIy44EB.js","../chunks/Button.uTP9coT2.js","../assets/Button.DFeZmM1O.css","../chunks/india.DEOdbO_p.js","../assets/2.CgTIoE6C.css","../nodes/3.Cldhou1d.js","../nodes/4.H190FWm3.js","../assets/4.C9TMuC17.css","../nodes/5.BGV2f_hF.js","../assets/5.DXaMbFy2.css","../nodes/6.DF42zrAb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as q,e as B,o as U,f as I,t as j}from"../chunks/scheduler.DWWUxruK.js";import{S as z,i as W,s as F,v as p,g as G,j as k,a as h,w as A,t as g,h as w,e as H,b as J,d as K,r as O,x as d,n as Q,o as X,p as Y,y as D,z as y,c as R,f as T,m as P,l as L}from"../chunks/index.D8lss90H.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},E=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=M(o,i),o in V)return;V[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let b=_.length-1;b>=0;b--){const v=_[b];if(v.href===o&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":Z,f||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),f)return new Promise((b,v)=>{u.addEventListener("load",b),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=y(r,_(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,_(t)),t[12](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=y(r,_(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,_(t)),t[11](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=y(r,_(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){D();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,_(t)),t[10](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[10](null),e&&L(e,t)}}}function S(a){let e,n=a[6]&&C(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=K(e);n&&n.l(r),r.forEach(w),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,r){k(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=C(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function C(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&Y(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let f=a[5]&&S(a);return{c(){n.c(),i=F(),f&&f.c(),r=p()},l(l){n.l(l),i=G(l),f&&f.l(l),r=p()},m(l,m){s[e].m(l,m),k(l,i,m),f&&f.m(l,m),k(l,r,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?s[e].p(l,m):(D(),h(s[u],1,1,()=>{s[u]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=S(l),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(l){_||(g(n),_=!0)},o(l){h(n),_=!1},d(l){l&&(w(i),w(r)),s[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:f=null}=e;B(i.page.notify);let l=!1,m=!1,u=null;U(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),j().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),c});function b(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function v(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function N(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,r=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,s=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,o,f,l,m,u,i,r,b,v,N]}class oe extends z{constructor(e){super(),W(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>E(()=>import("../nodes/0.DE0jTGOu.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>E(()=>import("../nodes/1.C10II70W.js"),__vite__mapDeps([3,1,2,4,5]),import.meta.url),()=>E(()=>import("../nodes/2.fwIy44EB.js"),__vite__mapDeps([6,1,2,7,8,9,4,5,10]),import.meta.url),()=>E(()=>import("../nodes/3.Cldhou1d.js"),__vite__mapDeps([11,1,2,7,8,4,5,10]),import.meta.url),()=>E(()=>import("../nodes/4.H190FWm3.js"),__vite__mapDeps([12,1,2,7,8,5,13]),import.meta.url),()=>E(()=>import("../nodes/5.BGV2f_hF.js"),__vite__mapDeps([14,1,2,5,7,8,9,4,15]),import.meta.url),()=>E(()=>import("../nodes/6.DF42zrAb.js"),__vite__mapDeps([16,1,2,7,8]),import.meta.url)],le=[],fe={"/":[2],"/cards":[3],"/cards/trumps":[4],"/odia":[5],"/ui":[6]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
