function w(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(D)}function L(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function ot(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function I(t){return Object.keys(t).length===0}function J(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(J(e,n))}function ft(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function dt(t,e,n,i,r,o){if(r){const c=O(e,n,i,o);t.p(c,r)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let E=!1;function K(){E=!0}function Q(){E=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:R(1,r,x=>e[n[x]].claim_order,l))-1;i[u]=n[f]+1;const a=f+1;n[a]=u,r=Math.max(a,r)}const o=[],c=[];let s=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(o.push(e[u-1]);s>=u;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<o.length&&c[u].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(c[u],f)}}function U(t,e){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){E&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function yt(){return S(" ")}function gt(){return S("")}function xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,r=!1){tt(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const u=n(s);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const u=n(s);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function q(t,e,n,i){return P(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function wt(t,e,n){return q(t,e,n,X)}function Et(t,e,n){return q(t,e,n,Y)}function et(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function vt(t){return et(t," ")}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ct(t,e){return new t(e)}let y;function p(t){y=t}function B(){if(!y)throw new Error("Function called outside component initialization");return y}function Mt(t){B().$$.on_mount.push(t)}function Tt(t){B().$$.after_update.push(t)}const h=[],T=[];let m=[];const k=[],H=Promise.resolve();let N=!1;function z(){N||(N=!0,H.then(F))}function kt(){return z(),H}function A(t){m.push(t)}const v=new Set;let d=0;function F(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const e=h[d];d++,p(e),nt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;T.length;)T.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;k.length;)k.pop()();N=!1,v.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function it(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Lt(){_.r||g(_.c),_=_.p}function rt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Ot(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Pt(t){t&&t.c()}function qt(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(D).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),o.forEach(A)}function ut(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Bt(t,e,n,i,r,o,c,s=[-1]){const u=y;p(t);const l=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,x,...j)=>{const C=j.length?j[0]:x;return l.ctx&&r(l.ctx[a],l.ctx[a]=C)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](C),f&&lt(t,a)),x}):[],l.update(),f=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){K();const a=Z(e.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();e.intro&&rt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),Q(),F()}p(u)}class Ht{$destroy(){ut(this,1),this.$destroy=w}$on(e,n){if(!L(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ct as A,ut as B,Y as C,Et as D,ot as E,St as F,U as G,xt as H,bt as I,w as J,ft as K,dt as L,ht as M,_t as N,at as O,jt as P,pt as Q,Ht as S,yt as a,mt as b,vt as c,Ot as d,gt as e,Lt as f,rt as g,V as h,Bt as i,Tt as j,X as k,wt as l,Z as m,$t as n,Mt as o,At as p,S as q,et as r,st as s,kt as t,Nt as u,Dt as v,T as w,Ct as x,Pt as y,qt as z};
