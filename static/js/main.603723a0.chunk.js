(this.webpackJsonpidea=this.webpackJsonpidea||[]).push([[0],{42:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),r=c(36),s=c.n(r),o=(c(42),c(25)),i=c(11),u=c(21),l=c(37),j=c(20);Object(l.a)({apiKey:"AIzaSyBwm3dEj3g2r1zCg1cMAi9FS8BeibVAzpM",authDomain:"peeyush-project.firebaseapp.com",projectId:"peeyush-project",storageBucket:"peeyush-project.appspot.com",messagingSenderId:"15254799484",appId:"1:15254799484:web:22744b8ebd0e9df24ff5f9"});var b=Object(j.c)(),d=c(18),O=c(19),f=(c(48),c(5)),h="#B2F9FC",x="#A2D2FF",p="#FFC898",m="#FFFFFF",g="#AE98FF",v=function(e){var t=e.color,c=e.handleChangeColor,a=Object(n.useState)(!1),r=Object(i.a)(a,2),s=r[0],o=r[1],u=function(e){o(!1),t!==e&&c(e)},l="color-pad ";return s&&(l+="color-open"),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{className:"btn-palette",icon:O.c,onClick:function(){o(!s)}}),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:l+"-1",style:{backgroundColor:h},onClick:function(){return u(h)}}),Object(f.jsx)("div",{className:l+"-2",style:{backgroundColor:x},onClick:function(){return u(x)}}),Object(f.jsx)("div",{className:l+"-3",style:{backgroundColor:p},onClick:function(){return u(p)}}),Object(f.jsx)("div",{className:l+"-4",style:{backgroundColor:m},onClick:function(){return u(m)}}),Object(f.jsx)("div",{className:l+"-5",style:{backgroundColor:g},onClick:function(){return u(g)}})]})]})},y=function(e){var t=e.id,c=e.title,a=e.body,r=e.color,s=e.editorId,o=e.setEditorId,u=Object(n.useState)(!1),l=Object(i.a)(u,2),h=l[0],x=l[1],p=Object(n.useState)(1),m=Object(i.a)(p,2),g=m[0],y=m[1],C=Object(n.useState)("20px"),S=Object(i.a)(C,2),N=S[0],k=S[1],F=Object(n.useState)("20px"),w=Object(i.a)(F,2),E=w[0],I=w[1],T=Object(n.useState)(c),B=Object(i.a)(T,2),D=B[0],M=B[1],R=Object(n.useState)(a),A=Object(i.a)(R,2),L=A[0],z=A[1],H=Object(n.useRef)(),W=Object(n.useRef)(),V=Object(n.useRef)(),J=Object(n.useRef)();return Object(f.jsxs)("div",{className:"note",onMouseOver:function(){return x(!0)},onMouseLeave:function(){return x(!1)},draggable:!0,onDragStart:function(e){return e.preventDefault()},onClick:function(){s!==t&&o(null)},onDoubleClick:function(){if(s!==t){if(H.current){var e=H.current.getBoundingClientRect().height;k(e?"".concat(e,"px"):"1.5rem")}if(W.current){var n=W.current.getBoundingClientRect().height;I(n?"".concat(n,"px"):"1.5rem")}M(c),z(a),o(t)}},style:{background:r,opacity:g,border:t===s&&"1px solid #0b0d1b"},children:[h&&Object(f.jsx)(d.a,{className:"btn-trash",icon:O.e,onClick:function(){return function(e){y(0),setTimeout((function(){return Object(j.a)(Object(j.b)(b,"ideas",e))}),200)}(t)}}),s===t?Object(f.jsxs)("form",{children:[Object(f.jsx)("textarea",{ref:V,placeholder:"Title",className:"input-title",value:D,style:{height:N},onChange:function(e){M(e.target.value),k("".concat(V.current.scrollHeight,"px"))}}),Object(f.jsx)("textarea",{ref:J,placeholder:"Body",className:"input-body",value:L,style:{height:E},onChange:function(e){z(e.target.value),I("".concat(J.current.scrollHeight,"px"))}}),h&&Object(f.jsx)(d.a,{icon:O.a,className:"check-btn",onClick:function(){if(o(null),D!==c||L!==a){var e=Object(j.b)(b,"ideas",t);Object(j.d)(e,{title:D,body:L},{merge:!0})}M(null),z(null)}})]}):Object(f.jsxs)(f.Fragment,{children:[!c&&!a&&Object(f.jsx)("h3",{className:"empty-note",children:"Empty Note..."}),c&&Object(f.jsx)("h4",{ref:H,className:"title",children:c}),Object(f.jsx)("p",{ref:W,className:"body",children:a})]}),h&&Object(f.jsx)(v,{color:r,handleChangeColor:function(e){var c=Object(j.b)(b,"ideas",t);Object(j.d)(c,{color:e},{merge:!0})}})]})},C=function(e){var t=e.column,c=e.editorId,n=e.setEditorId;return Object(f.jsx)("div",{className:"note-column",children:t.map((function(e){return Object(f.jsx)(y,Object(o.a)(Object(o.a)({},e),{},{editorId:c,setEditorId:n}),e.id)}))})},S=c(0),N=c.n(S),k=c(3),F=(c(50),function(e){var t=e.setTakeNoteVisible,c=Object(n.useState)(""),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),j=l[0],h=l[1],x=Object(n.useState)("White"),p=Object(i.a)(x,2),m=p[0],g=p[1],y=Object(n.useState)("30px"),C=Object(i.a)(y,2),S=C[0],F=C[1],w=Object(n.useState)("100px"),E=Object(i.a)(w,2),I=E[0],T=E[1],B=Object(n.useRef)(),D=Object(n.useRef)(),M=function(){var e=Object(k.a)(N.a.mark((function e(c){var n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),r||j){e.next=3;break}return e.abrupt("return");case 3:n=r,a=j,s(""),h(""),g("White"),t(!1);try{Object(u.a)(Object(u.b)(b,"ideas"),{title:n,body:a,color:m})}catch(o){console.error("Error adding document: ",o)}case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("form",{className:"take-note",onSubmit:function(e){return M(e)},style:{background:m},children:[Object(f.jsx)(d.a,{icon:O.d,className:"close-btn",onClick:function(){t(!1),s(""),h(""),g("White")}}),Object(f.jsx)("textarea",{ref:B,className:"input-title",rows:"1",placeholder:"Title",value:r,style:{height:S},onChange:function(e){s(e.target.value),F("".concat(B.current.scrollHeight,"px"))}}),Object(f.jsx)("textarea",{ref:D,className:"input-body",rows:"3",placeholder:"Take a note...",value:j,style:{height:I},onInput:function(e){h(e.target.value),T("".concat(D.current.scrollHeight,"px"))}}),Object(f.jsx)("button",{type:"submit",children:"Save"}),Object(f.jsx)(v,{color:m,handleChangeColor:function(e){g(e)}})]})}),w=function(e){var t=e.filteredData,c=Object(n.useState)([]),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),l=u[0],j=u[1],b=Object(n.useState)(null),h=Object(i.a)(b,2),x=h[0],p=h[1];return Object(n.useEffect)((function(){var e=function(){for(var e=!0,c=Math.max(1,Math.min(4,Math.floor(window.innerWidth/240))),n=[],a=0;a<c;a++)n.push([]);t.forEach((function(e,t){return n[t%c].push(e)})),e&&s(n);var r=document.querySelector(":root"),o=1===c?"100%":"".concat(220,"px");return r.style.setProperty("--note-width",o),function(){return e=!1}};window.addEventListener("resize",e),e()}),[t]),Object(f.jsxs)("div",{className:"note-board",children:[l&&Object(f.jsx)(F,{setTakeNoteVisible:j}),Object(f.jsxs)("div",{style:{filter:l?"blur(3px)":"none",pointerEvents:l?"none":"all"},children:[Object(f.jsx)("div",{className:"new-note-btn",onClick:function(){return j(!0)},children:Object(f.jsx)(d.a,{icon:O.b})}),0===t.length?Object(f.jsx)("p",{children:"Loading..."}):Object(f.jsx)("div",{className:"note-container",children:r.map((function(e,t){return Object(f.jsx)(C,{column:e,editorId:x,setEditorId:p},t)}))})]})]})},E=function(e){var t=e.searchText,c=e.setSearchText;return Object(f.jsx)("div",{children:Object(f.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search",value:t,onChange:function(e){return c(e.target.value)}})})},I=function(e){var t=e.searchText,c=e.setSearchText;return Object(f.jsxs)("div",{className:"nav",children:[Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)("h1",{children:"Idea"}),Object(f.jsx)("img",{src:"assets/splash.png",alt:"bg",className:"splash"})]}),Object(f.jsx)(E,{searchText:t,setSearchText:c})]})},T=(c(51),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),l=s[0],j=s[1],d=Object(n.useState)([]),O=Object(i.a)(d,2),h=O[0],x=O[1];return Object(n.useEffect)((function(){return Object(u.f)(Object(u.b)(b,"ideas"),(function(e){a(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})})))}))}),[]),Object(n.useEffect)((function(){var e=c.filter((function(e){return!l||(e.title.toLowerCase().includes(l.toLowerCase())||e.body.includes(l))}));x(e)}),[l,c]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(I,{searchText:l,setSearchText:j}),Object(f.jsx)(w,{filteredData:h})]})});s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.603723a0.chunk.js.map