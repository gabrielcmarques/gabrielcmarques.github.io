import{s as z,n as L}from"../chunks/scheduler.TAC0JT4F.js";import{S as x,i as B,e as d,m as g,n as q,c as m,g as G,o as y,b as p,d as c,f as j,p as H,t as k,h as O,j as C,s as S}from"../chunks/index._I1uoCM0.js";import{e as I}from"../chunks/each.6w4Ej4nR.js";const J=`
query NewQuery {
	posts {
	  edges{
		node{
		  id
		  title
		  content
		}
	  }
	}
  }`;async function M({fetch:i}){const o=await i("https://arabescocartonagem.store/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:J})});return o.ok?{props:{posts:(await o.json()).data.posts.edges}}:{status:o.status,error:new Error("Could not load url")}}const K=Object.freeze(Object.defineProperty({__proto__:null,load:M},Symbol.toStringTag,{value:"Module"}));function N(i,o,n){const t=i.slice();return t[1]=o[n],t}function P(i){let o,n=I(i[0].props.posts),t=[];for(let l=0;l<n.length;l+=1)t[l]=T(N(i,n,l));return{c(){o=d("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){o=m(l,"UL",{});var s=j(o);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(c)},m(l,s){p(l,o,s);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(o,null)},p(l,s){if(s&1){n=I(l[0].props.posts);let e;for(e=0;e<n.length;e+=1){const r=N(l,n,e);t[e]?t[e].p(r,s):(t[e]=T(r),t[e].c(),t[e].m(o,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=n.length}},d(l){l&&c(o),H(t,l)}}}function T(i){let o,n=i[1].node.id+"",t,l,s,e=i[1].node.title+"",r,h,u,_=i[1].node.content+"",b,v;return{c(){o=d("li"),t=k(n),l=g(),s=d("li"),r=k(e),h=g(),u=d("li"),b=k(_),v=g()},l(a){o=m(a,"LI",{});var f=j(o);t=O(f,n),f.forEach(c),l=y(a),s=m(a,"LI",{});var w=j(s);r=O(w,e),w.forEach(c),h=y(a),u=m(a,"LI",{});var E=j(u);b=O(E,_),E.forEach(c),v=y(a)},m(a,f){p(a,o,f),C(o,t),p(a,l,f),p(a,s,f),C(s,r),p(a,h,f),p(a,u,f),C(u,b),p(a,v,f)},p(a,f){f&1&&n!==(n=a[1].node.id+"")&&S(t,n),f&1&&e!==(e=a[1].node.title+"")&&S(r,e),f&1&&_!==(_=a[1].node.content+"")&&S(b,_)},d(a){a&&(c(o),c(l),c(s),c(h),c(u),c(v))}}}function Q(i){let o,n="BLOG:",t,l,s=i[0].props.posts&&P(i);return{c(){o=d("h1"),o.textContent=n,t=g(),s&&s.c(),l=q()},l(e){o=m(e,"H1",{"data-svelte-h":!0}),G(o)!=="svelte-woz3b8"&&(o.textContent=n),t=y(e),s&&s.l(e),l=q()},m(e,r){p(e,o,r),p(e,t,r),s&&s.m(e,r),p(e,l,r)},p(e,[r]){e[0].props.posts?s?s.p(e,r):(s=P(e),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},i:L,o:L,d(e){e&&(c(o),c(t),c(l)),s&&s.d(e)}}}function U(i,o,n){let{data:t}=o;return i.$$set=l=>{"data"in l&&n(0,t=l.data)},[t]}class R extends x{constructor(o){super(),B(this,o,U,Q,z,{data:0})}}export{R as component,K as universal};
