(this["webpackJsonpproject-sweeft"]=this["webpackJsonpproject-sweeft"]||[]).push([[0],{28:function(e,t,s){},29:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),a=s(23),i=s.n(a),r=(s(28),s(9)),l=s(6),o=s(3),j=(s(29),s(8)),d=s.n(j),u=s(10),b=s(2),m=s.p+"static/media/Spinner.f53aa23f.gif",O=s.p+"static/media/backTop.e0402307.png",f=s(1);var h=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:O,alt:"arrow pointing upwards",className:"top-button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})})};var x=function(e){var t=e.users,s=e.isLoading,c=Object(n.useState)(""),a=Object(o.a)(c,2),i=a[0],r=a[1],l=Object(b.f)();return Object(f.jsxs)("div",{className:"usersContainer",children:[Object(f.jsx)("input",{type:"text",placeholder:"Search by job title!",className:"inputSearch",onChange:function(e){return r(e.target.value)}}),Object(f.jsx)(h,{}),Object(f.jsxs)("div",{className:"usersPage",children:[t&&t.filter((function(e){return""===i||e.title.toLowerCase().includes(i.toLowerCase())?e:void 0})).map((function(e){return Object(f.jsxs)("div",{className:"userList",children:[Object(f.jsx)("img",{className:"animalImage",src:e.imageUrl+"/"+e.id,onClick:function(){return l("/UserInfo",{state:{userIndex:e.id}})},alt:"animal"})," ",Object(f.jsx)("h3",{onClick:function(){return l("/UserInfo",{state:{userIndex:e.id}})},children:e.prefix+" "+e.name+" "+e.lastName}),Object(f.jsx)("h4",{children:e.title})]},e.id)})),s&&Object(f.jsx)("img",{className:"spinnerGif",src:m,alt:"Loading..."})," "]})]})};s.p;var p=function(e){var t=e.userIndex,s=e.history,c=Object(n.useState)([]),a=Object(o.a)(c,2),i=a[0],j=a[1],u=Object(n.useState)(!0),O=Object(o.a)(u,2),x=O[0],p=O[1],g=Object(n.useState)({currentPage:1,size:20}),N=Object(o.a)(g,2),I=N[0],v=N[1],w=Object(b.f)();return Object(n.useEffect)((function(){d.a.get("http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/".concat(t,"/friends/").concat(I.currentPage,"/20")).then((function(e){j((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e.data.list))})),p(!1),console.log(e.data)}))}),[I]),window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(p(!0),v(Object(r.a)(Object(r.a)({},I),{},{currentPage:I.currentPage+1})))},Object(f.jsxs)("div",{className:"friendsList",children:[Object(f.jsx)("div",{className:"historySection",children:s.map((function(e){return Object(f.jsxs)("div",{className:"historyContainer",children:[Object(f.jsx)("p",{className:"viewHistory",onClick:function(){return w("/UserInfo",{state:{userIndex:e.id}})},children:e.prefix+" "+e.name+" "+e.lastName})," ",Object(f.jsxs)("p",{children:[" ",">"," "]})]},e.id)}))}),Object(f.jsx)("h1",{children:"Friends:"}),Object(f.jsx)(h,{}),Object(f.jsxs)("div",{className:"usersPage",children:[i&&i.map((function(e){return Object(f.jsxs)("div",{className:"userList",children:[Object(f.jsx)("img",{className:"animalImage",src:e.imageUrl+"/"+e.id,onClick:function(){return w("/UserInfo",{state:{userIndex:e.id}})},alt:"animal"})," ",Object(f.jsx)("h3",{onClick:function(){return w("/UserInfo",{state:{userIndex:e.id}})},children:e.prefix+" "+e.name+" "+e.lastName}),Object(f.jsx)("h4",{children:e.title})]},e.id)})),x&&Object(f.jsx)("img",{className:"spinnerGif",src:m,alt:"Loading..."})]})]})};var g=function(){var e=Object(b.e)(),t=Object(n.useState)({}),s=Object(o.a)(t,2),c=s[0],a=s[1],i=Object(n.useState)(!0),r=Object(o.a)(i,2),j=r[0],u=r[1],O=Object(n.useState)([]),h=Object(o.a)(O,2),x=h[0],g=h[1];return Object(n.useEffect)((function(){d.a.get("http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/".concat(e.state.userIndex)).then((function(e){a(e.data),u(!1),g((function(t){return[].concat(Object(l.a)(t),[e.data])})),console.log(e.data)}))}),[e.state.userIndex]),j?Object(f.jsx)("img",{className:"spinnerGif",src:m,alt:"Loading..."}):Object(f.jsxs)("div",{children:[c&&Object(f.jsxs)("div",{className:"mainInfoContainer",children:[Object(f.jsx)("img",{className:"personalPageImage",src:c.imageUrl+"/"+c.id,alt:"animal"}),Object(f.jsxs)("div",{className:"fieldContainer",children:[Object(f.jsxs)("fieldset",{className:"infoField",children:[Object(f.jsx)("legend",{children:"Info"}),Object(f.jsx)("h3",{className:"userName",children:c.prefix+" "+c.name+" "+c.lastName}),Object(f.jsx)("h3",{className:"positionTitle",children:c.title}),Object(f.jsxs)("h3",{className:"personalInfo",children:["Email: ",c.email]}),Object(f.jsxs)("h3",{className:"personalInfo",children:["IP Address: ",c.ip]}),Object(f.jsxs)("h3",{className:"personalInfo",children:["Job Area: ",c.jobArea]}),Object(f.jsxs)("h3",{className:"personalInfo",children:["Job Type: ",c.jobType]})]}),Object(f.jsxs)("fieldset",{className:"addressField",children:[Object(f.jsx)("legend",{children:"Address"}),Object(f.jsx)("h3",{children:c.company.name+" "+c.company.suffix}),Object(f.jsxs)("h3",{className:"personalInfo",children:["City: ",c.address.city]}),Object(f.jsxs)("h3",{className:"personalInfo",children:["Country: ",c.address.country]}),Object(f.jsxs)("h3",{className:"personalInfo",children:["State: ",c.address.state]}),Object(f.jsxs)("h3",{className:"personalInfo",children:["Street Address: ",c.address.streetAddress]}),Object(f.jsxs)("h3",{className:"personalInfo",children:["ZIP: ",c.address.zipCode]})]})]})]}),Object(f.jsx)(p,{userIndex:c.id,history:x},c.id)," "]})};var N=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(!0),i=Object(o.a)(a,2),j=i[0],m=i[1],O=Object(n.useState)({currentPage:1,size:20}),h=Object(o.a)(O,2),p=h[0],N=h[1];return Object(n.useEffect)((function(){d.a.get("http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/".concat(p.currentPage,"/20")).then((function(e){c((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e.data.list))})),m(!1),console.log(e.data)}))}),[p]),window.onscroll=function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(m(!0),N(Object(r.a)(Object(r.a)({},p),{},{currentPage:p.currentPage+1})))},Object(f.jsx)(u.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"/",element:Object(f.jsx)(x,{users:s,isLoading:j})}),Object(f.jsx)(b.a,{path:"/UserInfo",element:Object(f.jsx)(g,{})})]})})})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),I()}},[[49,1,2]]]);
//# sourceMappingURL=main.57af531e.chunk.js.map