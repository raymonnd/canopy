var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function l(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function h(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let g;function y(t){g=t}function v(){if(!g)throw new Error("Function called outside component initialization");return g}const b=[],x=[],w=[],_=[],A=Promise.resolve();let C=!1;function z(t){w.push(t)}const E=new Set;let M=0;function N(){const t=g;do{for(;M<b.length;){const t=b[M];M++,y(t),k(t.$$)}for(y(null),b.length=0,M=0;x.length;)x.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];E.has(n)||(E.add(n),n())}w.length=0}while(b.length);for(;_.length;)_.pop()();C=!1,E.clear(),y(t)}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}const j=new Set;let S;function B(){S={r:0,c:[],p:S}}function O(){S.r||o(S.c),S=S.p}function P(t,n){t&&t.i&&(j.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(j.has(t))return;j.add(t),S.c.push((()=>{j.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function L(t){t&&t.c()}function W(t,e,c,i){const{fragment:l,on_mount:u,on_destroy:s,after_update:a}=t.$$;l&&l.m(e,c),i||z((()=>{const e=u.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(z)}function D(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function I(t,n){-1===t.$$.dirty[0]&&(b.push(t),C||(C=!0,A.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(n,r,c,i,l,u,a,d=[-1]){const f=g;y(n);const p=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:e(),dirty:d,skip_bound:!1,root:r.target||f.$$.root};a&&a(p.root);let h=!1;if(p.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&I(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();r.intro&&P(n.$$.fragment),W(n,r.target,r.anchor,r.customElement),N()}y(f)}class V{$destroy(){D(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Y(t,n,e){const o=t.slice();return o[6]=n[e],o}function q(n){let e,o;return{c(){e=d("svg"),o=d("path"),m(o,"d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"),m(e,"width","16"),m(e,"height","16"),m(e,"class","circle svelte-i9o0yb"),m(e,"fill","currentColor"),m(e,"viewBox","0 0 16 16")},m(t,n){u(t,e,n),l(e,o)},p:t,d(t){t&&s(e)}}}function F(t){let n;function e(t,n){return t[0]?G:R}let o=e(t),r=o(t);return{c(){r.c(),n=f("")},m(t,e){r.m(t,e),u(t,n,e)},p(t,c){o===(o=e(t))&&r?r.p(t,c):(r.d(1),r=o(t),r&&(r.c(),r.m(n.parentNode,n)))},d(t){r.d(t),t&&s(n)}}}function R(n){let e,o,r,c,i;return{c(){e=d("svg"),o=d("path"),r=d("path"),m(o,"d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"),m(r,"d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"),m(e,"class","toggle-icon circle svelte-i9o0yb"),m(e,"width","16"),m(e,"height","16"),m(e,"fill","currentColor"),m(e,"viewBox","0 0 16 16")},m(t,s){u(t,e,s),l(e,o),l(e,r),c||(i=h(e,"click",n[3]),c=!0)},p:t,d(t){t&&s(e),c=!1,i()}}}function G(n){let e,o,r,c,i;return{c(){e=d("svg"),o=d("path"),r=d("path"),m(o,"d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"),m(r,"d","M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"),m(e,"class","toggle-icon circle svelte-i9o0yb"),m(e,"width","16"),m(e,"height","16"),m(e,"fill","currentColor"),m(e,"viewBox","0 0 16 16")},m(t,s){u(t,e,s),l(e,o),l(e,r),c||(i=h(e,"click",n[3]),c=!0)},p:t,d(t){t&&s(e),c=!1,i()}}}function H(t){let n,e,o=t[1].children,r=[];for(let n=0;n<o.length;n+=1)r[n]=J(Y(t,o,n));const c=t=>K(r[t],1,1,(()=>{r[t]=null}));return{c(){n=a("div");for(let t=0;t<r.length;t+=1)r[t].c();m(n,"id","inner-children-div")},m(t,o){u(t,n,o);for(let t=0;t<r.length;t+=1)r[t].m(n,null);e=!0},p(t,e){if(2&e){let i;for(o=t[1].children,i=0;i<o.length;i+=1){const c=Y(t,o,i);r[i]?(r[i].p(c,e),P(r[i],1)):(r[i]=J(c),r[i].c(),P(r[i],1),r[i].m(n,null))}for(B(),i=o.length;i<r.length;i+=1)c(i);O()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)P(r[t]);e=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)K(r[t]);e=!1},d(t){t&&s(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t)}}}function J(t){let n,e,o,r,c,i,d,f,h;return d=new X({props:{tree:t[6]}}),{c(){n=a("div"),e=a("br"),o=p(),r=a("span"),r.textContent="        ",c=p(),i=a("span"),L(d.$$.fragment),f=p(),m(n,"class","child svelte-i9o0yb")},m(t,s){u(t,n,s),l(n,e),l(n,o),l(n,r),l(n,c),l(n,i),W(d,i,null),l(n,f),h=!0},p(t,n){const e={};2&n&&(e.tree=t[6]),d.$set(e)},i(t){h||(P(d.$$.fragment,t),h=!0)},o(t){K(d.$$.fragment,t),h=!1},d(t){t&&s(n),D(d)}}}function Q(t){let n,e,o,r,c,d,h,g,y,v,b,x,w=t[1].componentKey+"",_=t[1].componentName+"";const A=t[5].default,C=function(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}(A,t,t[4],null);function z(t,n){return t[2]?F:q}let E=z(t),M=E(t),N=t[2]&&t[0]&&H(t);return{c(){n=a("div"),C&&C.c(),e=p(),o=a("div"),M.c(),r=p(),c=a("div"),d=a("b"),h=f(w),g=f(', an instance of the "'),y=f(_),v=f('" component'),b=p(),N&&N.c(),m(c,"class","text-container svelte-i9o0yb"),m(o,"class","curr-row svelte-i9o0yb"),m(n,"class","container svelte-i9o0yb")},m(t,i){u(t,n,i),C&&C.m(n,null),l(n,e),l(n,o),M.m(o,null),l(o,r),l(o,c),l(c,d),l(d,h),l(c,g),l(c,y),l(c,v),l(n,b),N&&N.m(n,null),x=!0},p(t,[e]){C&&C.p&&(!x||16&e)&&function(t,n,e,o,r,c){if(r){const l=i(n,e,o,c);t.p(l,r)}}(C,A,t,t[4],x?function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(A,t[4],e,null):function(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}(t[4]),null),E===(E=z(t))&&M?M.p(t,e):(M.d(1),M=E(t),M&&(M.c(),M.m(o,r))),(!x||2&e)&&w!==(w=t[1].componentKey+"")&&$(h,w),(!x||2&e)&&_!==(_=t[1].componentName+"")&&$(y,_),t[2]&&t[0]?N?(N.p(t,e),5&e&&P(N,1)):(N=H(t),N.c(),P(N,1),N.m(n,null)):N&&(B(),K(N,1,1,(()=>{N=null})),O())},i(t){x||(P(C,t),P(N),x=!0)},o(t){K(C,t),K(N),x=!1},d(t){t&&s(n),C&&C.d(t),M.d(),N&&N.d()}}}function U(t,n,e){let o,{$$slots:r={},$$scope:c}=n,{tree:i}=n,{expanded:l=!0}=n;return t.$$set=t=>{"tree"in t&&e(1,i=t.tree),"expanded"in t&&e(0,l=t.expanded),"$$scope"in t&&e(4,c=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&(i.children.length?e(2,o=!0):e(2,o=!1))},[l,i,o,function(){e(0,l=!l)},c,r]}class X extends V{constructor(t){super(),T(this,t,U,Q,c,{tree:1,expanded:0})}}function Z(t){let n,e,o;function r(n){t[2](n)}let c={};return void 0!==t[0]&&(c.tree=t[0]),n=new X({props:c}),x.push((()=>function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}(n,"tree",r))),{c(){L(n.$$.fragment)},m(t,e){W(n,t,e),o=!0},p(t,o){const r={};var c;!e&&1&o&&(e=!0,r.tree=t[0],c=()=>e=!1,_.push(c)),n.$set(r)},i(t){o||(P(n.$$.fragment,t),o=!0)},o(t){K(n.$$.fragment,t),o=!1},d(t){D(n,t)}}}function tt(n){let e;return{c(){e=f("Interact with Webpage State to activate Svelte Component Visualizer!")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}function nt(t){let n,e,o,r,c,i;const d=[tt,Z],f=[];function h(t,n){return 0===t[0].children.length?0:1}return r=h(t),c=f[r]=d[r](t),{c(){n=a("main"),e=a("h1"),e.textContent="Component Visualizer",o=p(),c.c(),m(e,"class","svelte-1relhie"),m(n,"class","svelte-1relhie")},m(t,c){u(t,n,c),l(n,e),l(n,o),f[r].m(n,null),i=!0},p(t,[e]){let o=r;r=h(t),r===o?f[r].p(t,e):(B(),K(f[o],1,1,(()=>{f[o]=null})),O(),c=f[r],c?c.p(t,e):(c=f[r]=d[r](t),c.c()),P(c,1),c.m(n,null))},i(t){i||(P(c),i=!0)},o(t){K(c),i=!1},d(t){t&&s(n),f[r].d()}}}function et(t,n,e){let o,r,c={componentKey:-1,componentName:"Canopy",children:[]};var i;return i=async()=>{console.log("sidebarMount"),console.log("preconnectPort",r),r=await chrome.runtime.connect({name:"sidebar-port"}),console.log("currPort",r),r.onMessage.addListener(((t,n,r)=>{const i=o;i.children=[],t.body.componentData.forEach(((t,n)=>{i.children=[...i.children,{componentKey:n,componentName:t[2],children:[]}]})),e(1,c=i)})),await(async()=>{chrome.devtools.inspectedWindow.getResources((t=>{for(let n=0;n<t.length;n++)t[n].url.endsWith("bundle.js")&&t[n].getContent(((t,n)=>{r.postMessage({target:"CANOPY",body:"runAndInjectScript",script:t})}))}))})(),r.postMessage({target:"CANOPY",body:"getComponents"})},v().$$.on_mount.push(i),function(t){v().$$.on_destroy.push(t)}((()=>{console.log("sidebarDestroyed"),r.disconnect(),r=void 0,chrome.runtime.reload()})),t.$$.update=()=>{2&t.$$.dirty&&e(0,o=c)},[o,c,function(t){o=t,e(0,o),e(1,c)}]}return new class extends V{constructor(t){super(),T(this,t,et,nt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=sidebarBundle.js.map
