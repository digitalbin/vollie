import{S as A,i as C,s as N,e as v,k as I,t as D,c as g,a as k,m as S,h as H,d as h,b as m,g as q,F as p,l as L,G as M,H as X,n as G,I as Y,J as Z,p as O,q as E,o as w,K as J,L as R,M as x,N as ee,w as B,x as F,y as Q,B as T,O as te,Q as se,P as le,R as re,T as ae,U as ne,V as oe}from"../chunks/vendor-4946cc4b.js";import{p as ie}from"../chunks/stores-d9004b58.js";import{r as ce}from"../chunks/singletons-4a680913.js";import{k as ue}from"../chunks/index-e02fe488.js";const fe=ce,_e=he;async function he(n,e){return fe.goto(n,e,[])}function pe(n){let e,t,s,o,a,i,r,l,c=ue(n[1])+"",d,y;function u($,b){return $[3]?me:de}let _=u(n)(n);return{c(){e=v("li"),t=v("a"),_.c(),s=I(),o=v("div"),a=v("h3"),i=D(n[0]),r=I(),l=v("p"),d=D(c),y=D(" members"),this.h()},l($){e=g($,"LI",{class:!0});var b=k(e);t=g(b,"A",{href:!0,class:!0});var j=k(t);_.l(j),s=S(j),o=g(j,"DIV",{});var P=k(o);a=g(P,"H3",{class:!0});var V=k(a);i=H(V,n[0]),V.forEach(h),r=S(P),l=g(P,"P",{class:!0});var U=k(l);d=H(U,c),y=H(U," members"),U.forEach(h),P.forEach(h),j.forEach(h),b.forEach(h),this.h()},h(){m(a,"class","svelte-gqef8l"),m(l,"class","svelte-gqef8l"),m(t,"href",n[2]),m(t,"class","svelte-gqef8l"),m(e,"class","svelte-gqef8l")},m($,b){q($,e,b),p(e,t),_.m(t,null),p(t,s),p(t,o),p(o,a),p(a,i),p(o,r),p(o,l),p(l,d),p(l,y)},p($,b){_.p($,b)},d($){$&&h(e),_.d()}}}function de(n){let e;return{c(){e=v("span"),this.h()},l(t){e=g(t,"SPAN",{class:!0}),k(e).forEach(h),this.h()},h(){m(e,"class","svelte-gqef8l")},m(t,s){q(t,e,s)},p:M,d(t){t&&h(e)}}}function me(n){let e,t;return{c(){e=v("img"),this.h()},l(s){e=g(s,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){m(e,"alt",`Icon for ${n[0]}`),X(e.src,t=n[3])||m(e,"src",t),m(e,"class","svelte-gqef8l")},m(s,o){q(s,e,o)},p:M,d(s){s&&h(e)}}}function ve(n){let e,t=n[2]&&pe(n);return{c(){t&&t.c(),e=L()},l(s){t&&t.l(s),e=L()},m(s,o){t&&t.m(s,o),q(s,e,o)},p(s,[o]){s[2]&&t.p(s,o)},i:M,o:M,d(s){t&&t.d(s),s&&h(e)}}}function ge(n,e,t){let{data:s}=e;const{display_name_prefixed:o,subscribers:a,url:i,icon_img:r="",community_icon:l=""}=s,[c]=(r||l).split("?");return n.$$set=d=>{"data"in d&&t(4,s=d.data)},[o,a,i,c,s]}class $e extends A{constructor(e){super();C(this,e,ge,ve,N,{data:4})}}function K(n,e,t){const s=n.slice();return s[10]=e[t].data,s}function z(n){let e,t=[],s=new Map,o,a=n[1];const i=r=>r[10].id;for(let r=0;r<a.length;r+=1){let l=K(n,a,r),c=i(l);s.set(c,t[r]=W(c,l))}return{c(){e=v("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=g(r,"UL",{class:!0});var l=k(e);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(h),this.h()},h(){m(e,"class","svelte-2p3od4")},m(r,l){q(r,e,l);for(let c=0;c<t.length;c+=1)t[c].m(e,null);o=!0},p(r,l){l&2&&(a=r[1],G(),t=Y(t,l,i,1,r,a,s,e,Z,W,null,K),O())},i(r){if(!o){for(let l=0;l<a.length;l+=1)E(t[l]);o=!0}},o(r){for(let l=0;l<t.length;l+=1)w(t[l]);o=!1},d(r){r&&h(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}function W(n,e){let t,s,o;return s=new $e({props:{data:e[10]}}),{key:n,first:null,c(){t=L(),B(s.$$.fragment),this.h()},l(a){t=L(),F(s.$$.fragment,a),this.h()},h(){this.first=t},m(a,i){q(a,t,i),Q(s,a,i),o=!0},p(a,i){e=a;const r={};i&2&&(r.data=e[10]),s.$set(r)},i(a){o||(E(s.$$.fragment,a),o=!0)},o(a){w(s.$$.fragment,a),o=!1},d(a){a&&h(t),T(s,a)}}}function be(n){let e,t,s,o,a,i,r,l=Boolean(n[1].length),c,d,y,u=l&&z(n);return{c(){e=v("header"),t=v("h2"),s=D(n[2]),o=I(),a=v("form"),i=v("input"),r=I(),u&&u.c(),this.h()},l(f){e=g(f,"HEADER",{class:!0});var _=k(e);t=g(_,"H2",{});var $=k(t);s=H($,n[2]),$.forEach(h),o=S(_),a=g(_,"FORM",{});var b=k(a);i=g(b,"INPUT",{placeholder:!0,class:!0}),r=S(b),u&&u.l(b),b.forEach(h),_.forEach(h),this.h()},h(){m(i,"placeholder","Search subreddit..."),m(i,"class","svelte-2p3od4"),m(e,"class","svelte-2p3od4")},m(f,_){q(f,e,_),p(e,t),p(t,s),p(e,o),p(e,a),p(a,i),J(i,n[0]),p(a,r),u&&u.m(a,null),c=!0,d||(y=[R(i,"input",n[4]),R(i,"input",n[5]),R(a,"submit",n[3])],d=!0)},p(f,[_]){_&1&&i.value!==f[0]&&J(i,f[0]),_&2&&(l=Boolean(f[1].length)),l?u?(u.p(f,_),_&2&&E(u,1)):(u=z(f),u.c(),E(u,1),u.m(a,null)):u&&(G(),w(u,1,1,()=>{u=null}),O())},i(f){c||(E(u),c=!0)},o(f){w(u),c=!1},d(f){f&&h(e),u&&u.d(),d=!1,x(y)}}}function ke(n,e,t){let s;ee(n,ie,f=>t(6,s=f));const{subreddit:o="popular"}=s.params;let i=s.url.pathname==="/search"?"search":`r/${o}`,r="",l=[];const c=()=>{const f=new URL("https://www.reddit.com/api/subreddit_autocomplete_v2.json");return f.searchParams.append("query",r),fetch(f.toString()).then(_=>_.json()).then(_=>{t(1,l=_.data.children)})},d=f=>{f.preventDefault(),_e(`/search?q=${r}`)},y=te(()=>{c()},500);function u(){r=this.value,t(0,r)}return[r,l,i,d,y,u]}class ye extends A{constructor(e){super();C(this,e,ke,be,N,{})}}function qe(n){let e,t,s,o,a;t=new ye({});const i=n[1].default,r=re(i,n,n[2],null);return{c(){e=v("div"),B(t.$$.fragment),s=I(),o=v("main"),r&&r.c(),this.h()},l(l){e=g(l,"DIV",{class:!0});var c=k(e);F(t.$$.fragment,c),s=S(c),o=g(c,"MAIN",{class:!0});var d=k(o);r&&r.l(d),d.forEach(h),c.forEach(h),this.h()},h(){m(o,"class","svelte-i4ipmx"),m(e,"class","svelte-i4ipmx")},m(l,c){q(l,e,c),Q(t,e,null),p(e,s),p(e,o),r&&r.m(o,null),a=!0},p(l,c){r&&r.p&&(!a||c&4)&&ae(r,i,l,l[2],a?oe(i,l[2],c,null):ne(l[2]),null)},i(l){a||(E(t.$$.fragment,l),E(r,l),a=!0)},o(l){w(t.$$.fragment,l),w(r,l),a=!1},d(l){l&&h(e),T(t),r&&r.d(l)}}}function Ee(n){let e,t;return e=new se({props:{client:n[0],$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(s){F(e.$$.fragment,s)},m(s,o){Q(e,s,o),t=!0},p(s,[o]){const a={};o&4&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function we(n,e,t){let{$$slots:s={},$$scope:o}=e;const a=new le;return n.$$set=i=>{"$$scope"in i&&t(2,o=i.$$scope)},[a,s,o]}class De extends A{constructor(e){super();C(this,e,we,Ee,N,{})}}export{De as default};
