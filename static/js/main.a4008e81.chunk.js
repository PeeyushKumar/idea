(this.webpackJsonpidea=this.webpackJsonpidea||[]).push([[0],{42:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),r=c(36),s=c.n(r),o=(c(42),c(25)),i=c(11),l=c(21),u=c(37),j=c(20);Object(u.a)({apiKey:"AIzaSyCV-LeS_KOXaWObumnr0NGJ8_wDgWqx_wA",authDomain:"idea-6c2fe.firebaseapp.com",projectId:"idea-6c2fe",storageBucket:"idea-6c2fe.appspot.com",messagingSenderId:"374536146365",appId:"1:374536146365:web:d59e1a1a2b1c25610f16d4",measurementId:"G-8QM5LNP4HF"});var b=Object(j.c)(),d=c(17),O=c(18),f=(c(48),c(5)),h="#B2F9FC",x="#A2D2FF",m="#FFC898",p="#FFFFFF",v="#AE98FF",g=function(e){var t=e.color,c=e.handleChangeColor,a=Object(n.useState)(!1),r=Object(i.a)(a,2),s=r[0],o=r[1],l=function(e){o(!1),t!==e&&c(e)},u="color-pad ";return s&&(u+="color-open"),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{className:"btn-palette",icon:O.d,onClick:function(){o(!s)}}),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:u+"-1",style:{backgroundColor:h},onClick:function(){return l(h)}}),Object(f.jsx)("div",{className:u+"-2",style:{backgroundColor:x},onClick:function(){return l(x)}}),Object(f.jsx)("div",{className:u+"-3",style:{backgroundColor:m},onClick:function(){return l(m)}}),Object(f.jsx)("div",{className:u+"-4",style:{backgroundColor:p},onClick:function(){return l(p)}}),Object(f.jsx)("div",{className:u+"-5",style:{backgroundColor:v},onClick:function(){return l(v)}})]})]})},y=function(e){var t=e.id,c=e.title,a=e.body,r=e.color,s=e.editorId,o=e.setEditorId,l=Object(n.useState)(!1),u=Object(i.a)(l,2),h=u[0],x=u[1],m=Object(n.useState)(1),p=Object(i.a)(m,2),v=p[0],y=p[1],N=Object(n.useState)("20px"),C=Object(i.a)(N,2),S=C[0],k=C[1],w=Object(n.useState)("20px"),F=Object(i.a)(w,2),E=F[0],I=F[1],T=Object(n.useState)(c),D=Object(i.a)(T,2),L=D[0],R=D[1],M=Object(n.useState)(a),B=Object(i.a)(M,2),W=B[0],A=B[1],H=Object(n.useRef)(),z=Object(n.useRef)(),J=Object(n.useRef)(),V=Object(n.useRef)();return Object(f.jsxs)("div",{className:"note",onMouseOver:function(){return x(!0)},onMouseLeave:function(){return x(!1)},draggable:!0,onDragStart:function(e){return e.preventDefault()},onClick:function(){s!==t&&o(null)},onDoubleClick:function(){if(s!==t){if(H.current){var e=H.current.getBoundingClientRect().height;k(e?"".concat(e,"px"):"1.5rem")}if(z.current){var n=z.current.getBoundingClientRect().height;I(n?"".concat(n,"px"):"1.5rem")}R(c),A(a),o(t)}},style:{background:r,opacity:v,border:t===s&&"1px solid #0b0d1b"},children:[h&&Object(f.jsx)(d.a,{className:"btn-trash",icon:O.f,onClick:function(){return function(e){y(0),setTimeout((function(){return Object(j.a)(Object(j.b)(b,"ideas",e))}),200)}(t)}}),s===t?Object(f.jsxs)("form",{children:[Object(f.jsx)("textarea",{ref:J,placeholder:"Title",className:"input-title",value:L,style:{height:S},onChange:function(e){R(e.target.value),k("".concat(J.current.scrollHeight,"px"))}}),Object(f.jsx)("textarea",{ref:V,placeholder:"Body",className:"input-body",value:W,style:{height:E},onChange:function(e){A(e.target.value),I("".concat(V.current.scrollHeight,"px"))}}),h&&Object(f.jsx)(d.a,{icon:O.a,className:"check-btn",onClick:function(){if(o(null),L!==c||W!==a){var e=Object(j.b)(b,"ideas",t);Object(j.d)(e,{title:L,body:W},{merge:!0})}R(null),A(null)}})]}):Object(f.jsxs)(f.Fragment,{children:[!c&&!a&&Object(f.jsx)("h3",{className:"empty-note",children:"Empty Note..."}),c&&Object(f.jsx)("h4",{ref:H,className:"title",children:c}),Object(f.jsx)("p",{ref:z,className:"body",children:a})]}),h&&Object(f.jsx)(g,{color:r,handleChangeColor:function(e){var c=Object(j.b)(b,"ideas",t);Object(j.d)(c,{color:e},{merge:!0})}})]})},N=function(e){var t=e.column,c=e.editorId,n=e.setEditorId;return Object(f.jsx)("div",{className:"note-column",children:t.map((function(e){return Object(f.jsx)(y,Object(o.a)(Object(o.a)({},e),{},{editorId:c,setEditorId:n}),e.id)}))})},C=c(0),S=c.n(C),k=c(3),w=(c(50),function(e){var t=e.setTakeNoteVisible,c=e.closeDisabled,a=Object(n.useState)(""),r=Object(i.a)(a,2),s=r[0],o=r[1],u=Object(n.useState)(""),j=Object(i.a)(u,2),h=j[0],x=j[1],m=Object(n.useState)("White"),p=Object(i.a)(m,2),v=p[0],y=p[1],N=Object(n.useState)("30px"),C=Object(i.a)(N,2),w=C[0],F=C[1],E=Object(n.useState)("100px"),I=Object(i.a)(E,2),T=I[0],D=I[1],L=Object(n.useRef)(),R=Object(n.useRef)(),M=function(){var e=Object(k.a)(S.a.mark((function e(n){var a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),s||h){e.next=3;break}return e.abrupt("return");case 3:a=s,r=h,o(""),x(""),y("White"),c||t(!1);try{Object(l.a)(Object(l.b)(b,"ideas"),{title:a,body:r,color:v})}catch(i){console.error("Error adding document: ",i)}case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("form",{className:"take-note",onSubmit:function(e){return M(e)},style:{background:v},children:[c||Object(f.jsx)(d.a,{icon:O.e,className:"close-btn",onClick:function(){t(!1),o(""),x(""),y("White")}}),Object(f.jsx)("textarea",{ref:L,className:"input-title",rows:"1",placeholder:"Title",value:s,style:{height:w},onChange:function(e){o(e.target.value),F("".concat(L.current.scrollHeight,"px"))}}),Object(f.jsx)("textarea",{ref:R,className:"input-body",rows:"3",placeholder:"Take a note...",value:h,style:{height:T},onInput:function(e){x(e.target.value),D("".concat(R.current.scrollHeight,"px"))}}),Object(f.jsx)("button",{type:"submit",children:"Save"}),Object(f.jsx)(g,{color:v,handleChangeColor:function(e){y(e)}})]})}),F=function(e){var t=e.filteredData,c=Object(n.useState)([]),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),u=l[0],j=l[1],b=Object(n.useState)(null),h=Object(i.a)(b,2),x=h[0],m=h[1];return Object(n.useEffect)((function(){var e=function(){for(var e=Math.max(1,Math.min(4,Math.floor(window.innerWidth/240))),c=[],n=0;n<e;n++)c.push([]);t.forEach((function(t,n){return c[n%e].push(t)})),s(c);var a=document.querySelector(":root"),r=1===e?"100%":"".concat(220,"px");a.style.setProperty("--note-width",r)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[t]),Object(f.jsxs)("div",{className:"note-board",children:[Object(f.jsx)("div",{className:"new-note-btn",onClick:function(){return j(!u)},children:Object(f.jsx)(d.a,{icon:O.b})}),Object(f.jsx)("div",{className:"note-container",children:r.map((function(e,t){return Object(f.jsx)(N,{column:e,editorId:x,setEditorId:m},t)}))}),u&&Object(f.jsx)("div",{className:"take-note-wrapper",children:Object(f.jsx)(w,{setTakeNoteVisible:j})})]})},E=function(e){var t=e.searchText,c=e.setSearchText;return Object(f.jsx)("div",{children:Object(f.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search",value:t,onChange:function(e){return c(e.target.value)}})})},I=function(e){var t=e.searchText,c=e.setSearchText;return Object(f.jsxs)("div",{className:"nav",children:[Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)("h1",{style:{userSelect:"none",pointerEvents:"none"},children:"Idea"}),Object(f.jsx)("img",{style:{userSelect:"none",pointerEvents:"none"},src:"assets/splash.png",alt:"Logo",className:"splash"})]}),Object(f.jsx)(E,{searchText:t,setSearchText:c})]})},T=(c(51),function(){return Object(f.jsxs)("div",{className:"welcome",children:[Object(f.jsx)("h1",{className:"large-text",children:"Create a new memory"}),Object(f.jsx)(w,{closeDisabled:!0})]})}),D=(c(52),function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),u=s[0],j=s[1],h=Object(n.useState)(""),x=Object(i.a)(h,2),m=x[0],p=x[1],v=Object(n.useState)([]),g=Object(i.a)(v,2),y=g[0],N=g[1];return Object(n.useEffect)((function(){return Object(l.f)(Object(l.b)(b,"ideas"),(function(e){j(e.docs.map((function(e){return Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})}))),a(!1)}))}),[]),Object(n.useEffect)((function(){if(u){var e=u.filter((function(e){return!m||(e.title.toLowerCase().includes(m.toLowerCase())||e.body.includes(m))}));N(e)}}),[m,u]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(I,{searchText:m,setSearchText:p}),c?Object(f.jsx)("h1",{className:"no-data",children:"Loading"}):0===u.length?Object(f.jsx)(T,{}):0===y.length?Object(f.jsx)(d.a,{icon:O.c,style:{position:"absolute",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)",fontSize:"20rem",color:"#dedede"}}):Object(f.jsx)(F,{filteredData:y})]})});s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.a4008e81.chunk.js.map