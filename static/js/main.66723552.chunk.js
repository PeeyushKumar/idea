(this.webpackJsonpidea=this.webpackJsonpidea||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(12),r=n.n(c),a=n(34),s=n.n(a),i=(n(42),n(24)),u=n(11),o=n(18),j=(n(44),n(35)),b=n(37),d=n(36),l=n(27);Object(d.a)({apiKey:"AIzaSyBwm3dEj3g2r1zCg1cMAi9FS8BeibVAzpM",authDomain:"peeyush-project.firebaseapp.com",projectId:"peeyush-project",storageBucket:"peeyush-project.appspot.com",messagingSenderId:"15254799484",appId:"1:15254799484:web:22744b8ebd0e9df24ff5f9"});var f=Object(l.c)(),O=n(9),h=function(e){var t=e.id,n=e.title,r=e.body,a=Object(c.useState)(!1),s=Object(u.a)(a,2),i=s[0],o=s[1];return Object(O.jsxs)("div",{className:"note",onMouseOver:function(){return o(!0)},onMouseLeave:function(){return o(!1)},draggable:!0,onDragStart:function(e){return e.preventDefault()},children:[i&&Object(O.jsx)(j.a,{className:"btn-trash",icon:b.a,onClick:function(){return Object(l.a)(Object(l.b)(f,"ideas",t))}}),n&&Object(O.jsx)("h4",{className:"title",children:n}),Object(O.jsx)("p",{className:"body",children:r})]})},p=function(e){var t=e.column;return Object(O.jsx)("div",{className:"note-column",children:t.map((function(e){return Object(O.jsx)(h,Object(i.a)({},e),e.id)}))})},x=n(0),v=n.n(x),m=n(3),S=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),i=s[0],j=s[1],b=function(){var e=Object(m.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n||i){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(o.a)(Object(o.b)(f,"ideas"),{title:n,body:i});case 6:e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error("Error adding document: ",e.t0);case 12:return e.prev=12,r(""),j(""),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[3,9,12,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("form",{className:"take-note",onSubmit:function(e){return b(e)},children:[Object(O.jsx)("input",{name:"title",type:"text",id:"input-title",placeholder:"Title",value:n,onChange:function(e){return r(e.target.value)}}),Object(O.jsx)("textarea",{name:"body",id:"input-body",placeholder:"Take a note...",cols:"30",rows:"3",value:i,onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("button",{type:"submit",children:"Save"})]})},g=function(e){var t=e.filteredData,n=Object(c.useState)([]),r=Object(u.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var e=function(){for(var e=!0,n=Math.max(1,Math.min(4,Math.floor(window.innerWidth/240))),c=[],r=0;r<n;r++)c.push([]);t.forEach((function(e,t){return c[t%n].push(e)})),e&&s(c);var a=document.querySelector(":root"),i=1===n?"100%":"".concat(220,"px");return a.style.setProperty("--note-width",i),function(){return e=!1}};window.addEventListener("resize",e),e()}),[t]),Object(O.jsxs)("div",{className:"note-board",children:[Object(O.jsx)(S,{}),0===t.length?Object(O.jsx)("p",{children:"Loading..."}):Object(O.jsx)("div",{className:"note-container",children:a.map((function(e,t){return Object(O.jsx)(p,{column:e},t)}))})]})},y=function(e){var t=e.searchText,n=e.setSearchText;return Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search",value:t,onChange:function(e){return n(e.target.value)}})})},w=function(e){var t=e.searchText,n=e.setSearchText;return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)("h1",{className:"logo",children:"Ideas"}),Object(O.jsx)(y,{searchText:t,setSearchText:n})]})},N=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),j=s[0],b=s[1],d=Object(c.useState)([]),l=Object(u.a)(d,2),h=l[0],p=l[1];return Object(c.useEffect)((function(){return Object(o.f)(Object(o.b)(f,"ideas"),(function(e){r(e.docs.map((function(e){return Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id})})))}))}),[]),Object(c.useEffect)((function(){var e=n.filter((function(e){return!j||(e.title.includes(j)||e.body.includes(j))}));p(e)}),[j,n]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(w,{searchText:j,setSearchText:b}),Object(O.jsx)(g,{filteredData:h})]})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.66723552.chunk.js.map