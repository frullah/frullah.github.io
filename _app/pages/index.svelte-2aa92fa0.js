import{S as J,i as M,s as O,B as ae,D as ie,E as ue,a as b,d as f,b as i,M as fe,N as he,f as j,G as c,p as Ee,H as A,O as me,P as Se,e as x,j as V,c as $,m as Q,o as U,Q as ye,R as ke,x as y,u as T,v as W,k as R,n as C,t as k,g as I,r as ge,w as _e,T as de,h as Ie}from"../chunks/vendor-4c694507.js";function we(s){let e,t,a,r=[s[1]],n={};for(let l=0;l<r.length;l+=1)n=ae(n,r[l]);return{c(){e=ie("svg"),t=ie("use"),this.h()},l(l){e=ue(l,"svg",{});var o=b(e);t=ue(o,"use",{href:!0}),b(t).forEach(f),o.forEach(f),this.h()},h(){i(t,"href",a="#"+s[0]),fe(e,n),he(e,"svelte-1b9omjb",!0)},m(l,o){j(l,e,o),c(e,t)},p(l,[o]){o&1&&a!==(a="#"+l[0])&&i(t,"href",a),fe(e,n=Ee(r,[o&2&&l[1]])),he(e,"svelte-1b9omjb",!0)},i:A,o:A,d(l){l&&f(e)}}}function Te(s,e,t){const a=["name"];let r=me(e,a),{name:n}=e;return r.class=`icon ${r.class||""}`,s.$$set=l=>{e=ae(ae({},e),Se(l)),t(1,r=me(e,a)),"name"in l&&t(0,n=l.name)},[n,r]}class Pe extends J{constructor(e){super();M(this,e,Te,we,O,{name:0})}}function je(s){let e,t,a,r,n;return t=new Pe({props:{class:"text-[40px] "+s[1],name:s[1]}}),{c(){e=x("a"),V(t.$$.fragment),this.h()},l(l){e=$(l,"A",{href:!0,rel:!0,target:!0});var o=b(e);Q(t.$$.fragment,o),o.forEach(f),this.h()},h(){i(e,"href",s[0]),i(e,"rel","noopener"),i(e,"target","_blank")},m(l,o){j(l,e,o),U(t,e,null),a=!0,r||(n=ye(ke.call(null,e,s[2])),r=!0)},p(l,[o]){const d={};o&2&&(d.class="text-[40px] "+l[1]),o&2&&(d.name=l[1]),t.$set(d),(!a||o&1)&&i(e,"href",l[0])},i(l){a||(y(t.$$.fragment,l),a=!0)},o(l){T(t.$$.fragment,l),a=!1},d(l){l&&f(e),W(t),r=!1,n()}}}function Re(s,e,t){let{content:a}=e,{href:r}=e,{name:n}=e;const l={placement:"bottom",interactive:!0,content:a};return s.$$set=o=>{"content"in o&&t(3,a=o.content),"href"in o&&t(0,r=o.href),"name"in o&&t(1,n=o.name)},[r,n,l,a]}class Ce extends J{constructor(e){super();M(this,e,Re,je,O,{content:3,href:0,name:1})}}function pe(s,e,t){const a=s.slice();return a[1]=e[t],a}function ve(s){let e,t,a,r;return t=new Ce({props:{name:s[1].name,content:s[1].content,href:s[1].href}}),{c(){e=x("li"),V(t.$$.fragment),a=R(),this.h()},l(n){e=$(n,"LI",{class:!0});var l=b(e);Q(t.$$.fragment,l),a=C(l),l.forEach(f),this.h()},h(){i(e,"class","mx-1")},m(n,l){j(n,e,l),U(t,e,null),c(e,a),r=!0},p:A,i(n){r||(y(t.$$.fragment,n),r=!0)},o(n){T(t.$$.fragment,n),r=!1},d(n){n&&f(e),W(t)}}}function He(s){let e,t,a,r,n,l,o,d,u,N,m,_,h,E,D,H,w,K,X,Y,q,Z,ee,P,z,L=s[0],p=[];for(let v=0;v<L.length;v+=1)p[v]=ve(pe(s,L,v));const $e=v=>T(p[v],1,1,()=>{p[v]=null});return{c(){e=x("section"),t=x("div"),a=x("h1"),r=k("Hi, I am "),n=x("strong"),l=k("Fajarullah"),o=R(),d=x("article"),u=x("p"),N=k("I am a Full Stack Engineer, and I like to code to solve a problem."),m=R(),_=x("p"),h=k(`I often use
        `),E=x("a"),D=k("Ruby"),H=k(`, and
        `),w=x("a"),K=k("JavaScript"),X=k(`
        as my programming languages.`),Y=R(),q=x("p"),Z=k("Sometime in my free time, i learn about machine learning, learn foreign languages."),ee=R(),P=x("ul");for(let v=0;v<p.length;v+=1)p[v].c();this.h()},l(v){e=$(v,"SECTION",{id:!0});var S=b(e);t=$(S,"DIV",{class:!0});var g=b(t);a=$(g,"H1",{"aria-label":!0,class:!0});var B=b(a);r=I(B,"Hi, I am "),n=$(B,"STRONG",{"aria-label":!0});var ne=b(n);l=I(ne,"Fajarullah"),ne.forEach(f),B.forEach(f),o=C(g),d=$(g,"ARTICLE",{"aria-label":!0,class:!0});var F=b(d);u=$(F,"P",{});var le=b(u);N=I(le,"I am a Full Stack Engineer, and I like to code to solve a problem."),le.forEach(f),m=C(F),_=$(F,"P",{});var G=b(_);h=I(G,`I often use
        `),E=$(G,"A",{class:!0,rel:!0,target:!0,href:!0});var re=b(E);D=I(re,"Ruby"),re.forEach(f),H=I(G,`, and
        `),w=$(G,"A",{class:!0,rel:!0,target:!0,href:!0});var se=b(w);K=I(se,"JavaScript"),se.forEach(f),X=I(G,`
        as my programming languages.`),G.forEach(f),Y=C(F),q=$(F,"P",{});var oe=b(q);Z=I(oe,"Sometime in my free time, i learn about machine learning, learn foreign languages."),oe.forEach(f),F.forEach(f),ee=C(g),P=$(g,"UL",{"aria-label":!0,class:!0});var ce=b(P);for(let te=0;te<p.length;te+=1)p[te].l(ce);ce.forEach(f),g.forEach(f),S.forEach(f),this.h()},h(){i(n,"aria-label","my name"),i(a,"aria-label","introduction"),i(a,"class","text-2xl text-center mb-4"),i(E,"class","text-primary-600"),i(E,"rel","noopener"),i(E,"target","_blank"),i(E,"href","https://www.ruby-lang.org"),i(w,"class","text-primary-600"),i(w,"rel","noopener"),i(w,"target","_blank"),i(w,"href","https://developer.mozilla.org/docs/Web/JavaScript"),i(d,"aria-label","about me"),i(d,"class","text-center mb-4"),i(P,"aria-label","contact links"),i(P,"class","flex mx-auto justify-center"),i(t,"class","mx-auto mt-24 max-w-screen-sm p-4"),i(e,"id","home")},m(v,S){j(v,e,S),c(e,t),c(t,a),c(a,r),c(a,n),c(n,l),c(t,o),c(t,d),c(d,u),c(u,N),c(d,m),c(d,_),c(_,h),c(_,E),c(E,D),c(_,H),c(_,w),c(w,K),c(_,X),c(d,Y),c(d,q),c(q,Z),c(t,ee),c(t,P);for(let g=0;g<p.length;g+=1)p[g].m(P,null);z=!0},p(v,[S]){if(S&1){L=v[0];let g;for(g=0;g<L.length;g+=1){const B=pe(v,L,g);p[g]?(p[g].p(B,S),y(p[g],1)):(p[g]=ve(B),p[g].c(),y(p[g],1),p[g].m(P,null))}for(ge(),g=L.length;g<p.length;g+=1)$e(g);_e()}},i(v){if(!z){for(let S=0;S<L.length;S+=1)y(p[S]);z=!0}},o(v){p=p.filter(Boolean);for(let S=0;S<p.length;S+=1)T(p[S]);z=!1},d(v){v&&f(e),de(p,v)}}}function Le(s){return[[{name:"whatsapp-square",content:"+62 859 3993 6593",href:"callto:+6285939936593"},{name:"github-square",content:"@frullah",href:"https://github.com/frullah"},{name:"linkedin",content:"@fajarullah",href:"https://www.linkedin.com/in/fajarullah/"},{name:"envelope",content:"frullah12@gmail.com",href:"mailto:frullah12@gmail.com"}]]}class Ae extends J{constructor(e){super();M(this,e,Le,He,O,{})}}function De(s){let e,t;return{c(){e=x("div"),t=k(s[0]),this.h()},l(a){e=$(a,"DIV",{class:!0});var r=b(e);t=I(r,s[0]),r.forEach(f),this.h()},h(){i(e,"class","tag svelte-ido0is")},m(a,r){j(a,e,r),c(e,t)},p(a,[r]){r&1&&Ie(t,a[0])},i:A,o:A,d(a){a&&f(e)}}}function Be(s,e,t){let{text:a}=e;return s.$$set=r=>{"text"in r&&t(0,a=r.text)},[a]}class Fe extends J{constructor(e){super();M(this,e,Be,De,O,{text:0})}}function be(s,e,t){const a=s.slice();return a[1]=e[t],a}function xe(s){let e,t,a,r;return t=new Fe({props:{text:s[1]}}),{c(){e=x("li"),V(t.$$.fragment),a=R(),this.h()},l(n){e=$(n,"LI",{class:!0});var l=b(e);Q(t.$$.fragment,l),a=C(l),l.forEach(f),this.h()},h(){i(e,"class","mx-1 mb-2")},m(n,l){j(n,e,l),U(t,e,null),c(e,a),r=!0},p:A,i(n){r||(y(t.$$.fragment,n),r=!0)},o(n){T(t.$$.fragment,n),r=!1},d(n){n&&f(e),W(t)}}}function Ge(s){let e,t,a,r,n,l,o,d=s[0],u=[];for(let m=0;m<d.length;m+=1)u[m]=xe(be(s,d,m));const N=m=>T(u[m],1,1,()=>{u[m]=null});return{c(){e=x("section"),t=x("div"),a=x("h2"),r=k("My Tech Stacks"),n=R(),l=x("ul");for(let m=0;m<u.length;m+=1)u[m].c();this.h()},l(m){e=$(m,"SECTION",{id:!0});var _=b(e);t=$(_,"DIV",{class:!0});var h=b(t);a=$(h,"H2",{class:!0});var E=b(a);r=I(E,"My Tech Stacks"),E.forEach(f),n=C(h),l=$(h,"UL",{class:!0});var D=b(l);for(let H=0;H<u.length;H+=1)u[H].l(D);D.forEach(f),h.forEach(f),_.forEach(f),this.h()},h(){i(a,"class","mb-4 text-xl text-center"),i(l,"class","flex flex-wrap justify-center"),i(t,"class","mx-auto my-4 max-w-screen-sm p-4"),i(e,"id","technologies")},m(m,_){j(m,e,_),c(e,t),c(t,a),c(a,r),c(t,n),c(t,l);for(let h=0;h<u.length;h+=1)u[h].m(l,null);o=!0},p(m,[_]){if(_&1){d=m[0];let h;for(h=0;h<d.length;h+=1){const E=be(m,d,h);u[h]?(u[h].p(E,_),y(u[h],1)):(u[h]=xe(E),u[h].c(),y(u[h],1),u[h].m(l,null))}for(ge(),h=d.length;h<u.length;h+=1)N(h);_e()}},i(m){if(!o){for(let _=0;_<d.length;_+=1)y(u[_]);o=!0}},o(m){u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)T(u[_]);o=!1},d(m){m&&f(e),de(u,m)}}}function Je(s){return[["Ruby","Rails","Hotwire (Rails)","Stimulus JS","Javascript","HTML5","CSS3","TailwindCSS","Bootstrap","PostgreSQL","OracleDB","MariaDB","Python","PHP","Git","Github","Github Action","Docker","Google Cloud Platform","AWS","Flutter","Firebase"]]}class Me extends J{constructor(e){super();M(this,e,Je,Ge,O,{})}}function Oe(s){let e,t,a,r;return e=new Ae({}),a=new Me({}),{c(){V(e.$$.fragment),t=R(),V(a.$$.fragment)},l(n){Q(e.$$.fragment,n),t=C(n),Q(a.$$.fragment,n)},m(n,l){U(e,n,l),j(n,t,l),U(a,n,l),r=!0},p:A,i(n){r||(y(e.$$.fragment,n),y(a.$$.fragment,n),r=!0)},o(n){T(e.$$.fragment,n),T(a.$$.fragment,n),r=!1},d(n){W(e,n),n&&f(t),W(a,n)}}}class qe extends J{constructor(e){super();M(this,e,null,Oe,O,{})}}export{qe as default};
