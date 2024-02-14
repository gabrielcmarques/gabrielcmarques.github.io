import{s as O,n as H,o as T}from"../chunks/scheduler.TAC0JT4F.js";import{S as j,i as B,e as u,m as w,n as L,c as d,g as I,o as b,a as N,b as p,d as c,f as g,p as P,H as y,q as C}from"../chunks/index.fplpzQBa.js";import{e as E}from"../chunks/each.6w4Ej4nR.js";function S(h,a,f){const i=h.slice();return i[1]=a[f],i}function $(h){let a,f="BLOG:",i,n,l=E(h[0]),e=[];for(let t=0;t<l.length;t+=1)e[t]=x(S(h,l,t));return{c(){a=u("h1"),a.textContent=f,i=w(),n=u("ul");for(let t=0;t<e.length;t+=1)e[t].c()},l(t){a=d(t,"H1",{"data-svelte-h":!0}),I(a)!=="svelte-woz3b8"&&(a.textContent=f),i=b(t),n=d(t,"UL",{});var r=g(n);for(let s=0;s<e.length;s+=1)e[s].l(r);r.forEach(c)},m(t,r){p(t,a,r),p(t,i,r),p(t,n,r);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(n,null)},p(t,r){if(r&1){l=E(t[0]);let s;for(s=0;s<l.length;s+=1){const m=S(t,l,s);e[s]?e[s].p(m,r):(e[s]=x(m),e[s].c(),e[s].m(n,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=l.length}},d(t){t&&(c(a),c(i),c(n)),P(e,t)}}}function x(h){let a,f,i=h[1].id+"",n,l,e,t=h[1].title+"",r,s,m,v=h[1].content+"";return{c(){a=u("li"),f=new y(!1),n=w(),l=u("li"),e=new y(!1),r=w(),s=u("li"),m=new y(!1),this.h()},l(o){a=d(o,"LI",{});var _=g(a);f=C(_,!1),_.forEach(c),n=b(o),l=d(o,"LI",{});var k=g(l);e=C(k,!1),k.forEach(c),r=b(o),s=d(o,"LI",{});var q=g(s);m=C(q,!1),q.forEach(c),this.h()},h(){f.a=null,e.a=null,m.a=null},m(o,_){p(o,a,_),f.m(i,a),p(o,n,_),p(o,l,_),e.m(t,l),p(o,r,_),p(o,s,_),m.m(v,s)},p(o,_){_&1&&i!==(i=o[1].id+"")&&f.p(i),_&1&&t!==(t=o[1].title+"")&&e.p(t),_&1&&v!==(v=o[1].content+"")&&m.p(v)},d(o){o&&(c(a),c(n),c(l),c(r),c(s))}}}function z(h){let a,f="Blog test",i,n,l=h[0]&&$(h);return{c(){a=u("h1"),a.textContent=f,i=w(),l&&l.c(),n=L(),this.h()},l(e){a=d(e,"H1",{class:!0,"data-svelte-h":!0}),I(a)!=="svelte-8am7ku"&&(a.textContent=f),i=b(e),l&&l.l(e),n=L(),this.h()},h(){N(a,"class","text-white")},m(e,t){p(e,a,t),p(e,i,t),l&&l.m(e,t),p(e,n,t)},p(e,[t]){e[0]?l?l.p(e,t):(l=$(e),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},i:H,o:H,d(e){e&&(c(a),c(i),c(n)),l&&l.d(e)}}}function G(h,a,f){let i;return T(async()=>{const n=await fetch("https://arabesco.space/wp/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
			query {
			  posts {
				edges {
				  node {
					id
					title
					content
				  }
				}
			  }
			}
		  `})});console.log(n);const l=await n.json();f(0,i=l.data.posts.edges.map(e=>e.node))}),[i]}class A extends j{constructor(a){super(),B(this,a,G,z,O,{})}}export{A as component};
