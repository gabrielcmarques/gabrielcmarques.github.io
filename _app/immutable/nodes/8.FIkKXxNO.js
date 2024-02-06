import{s as z,n as L}from"../chunks/scheduler.TAC0JT4F.js";import{S as A,i as x,e as d,m as g,n as q,c as m,g as B,o as y,b as f,d as p,f as j,p as D,t as k,h as O,j as C,s as S}from"../chunks/index._I1uoCM0.js";import{e as T}from"../chunks/each.6w4Ej4nR.js";const G=`
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
  }`;async function H({fetch:i}){const o=await i("https://arabescocartonagem.store/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:G})});return o.ok?{props:{posts:(await o.json()).data.posts.edges}}:{status:o.status,error:new Error("Could not load url")}}const K=Object.freeze(Object.defineProperty({__proto__:null,load:H},Symbol.toStringTag,{value:"Module"}));function I(i,o,n){const t=i.slice();return t[1]=o[n],t}function N(i){let o,n=T(i[0].props.posts),t=[];for(let l=0;l<n.length;l+=1)t[l]=P(I(i,n,l));return{c(){o=d("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){o=m(l,"UL",{});var s=j(o);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(p)},m(l,s){f(l,o,s);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(o,null)},p(l,s){if(s&1){n=T(l[0].props.posts);let e;for(e=0;e<n.length;e+=1){const r=I(l,n,e);t[e]?t[e].p(r,s):(t[e]=P(r),t[e].c(),t[e].m(o,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=n.length}},d(l){l&&p(o),D(t,l)}}}function P(i){let o,n=i[1].node.id+"",t,l,s,e=i[1].node.title+"",r,h,u,_=i[1].node.content+"",b,v;return{c(){o=d("li"),t=k(n),l=g(),s=d("li"),r=k(e),h=g(),u=d("li"),b=k(_),v=g()},l(a){o=m(a,"LI",{});var c=j(o);t=O(c,n),c.forEach(p),l=y(a),s=m(a,"LI",{});var w=j(s);r=O(w,e),w.forEach(p),h=y(a),u=m(a,"LI",{});var E=j(u);b=O(E,_),E.forEach(p),v=y(a)},m(a,c){f(a,o,c),C(o,t),f(a,l,c),f(a,s,c),C(s,r),f(a,h,c),f(a,u,c),C(u,b),f(a,v,c)},p(a,c){c&1&&n!==(n=a[1].node.id+"")&&S(t,n),c&1&&e!==(e=a[1].node.title+"")&&S(r,e),c&1&&_!==(_=a[1].node.content+"")&&S(b,_)},d(a){a&&(p(o),p(l),p(s),p(h),p(u),p(v))}}}function J(i){let o,n="BLOG:",t,l,s=i[0].props.posts&&N(i);return{c(){o=d("h1"),o.textContent=n,t=g(),s&&s.c(),l=q()},l(e){o=m(e,"H1",{"data-svelte-h":!0}),B(o)!=="svelte-woz3b8"&&(o.textContent=n),t=y(e),s&&s.l(e),l=q()},m(e,r){f(e,o,r),f(e,t,r),s&&s.m(e,r),f(e,l,r)},p(e,[r]){e[0].props.posts?s?s.p(e,r):(s=N(e),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},i:L,o:L,d(e){e&&(p(o),p(t),p(l)),s&&s.d(e)}}}function M(i,o,n){let{data:t}=o;return console.log(`DATA: ... 
`,t.props.posts),i.$$set=l=>{"data"in l&&n(0,t=l.data)},[t]}class R extends A{constructor(o){super(),x(this,o,M,J,z,{data:0})}}export{R as component,K as universal};
