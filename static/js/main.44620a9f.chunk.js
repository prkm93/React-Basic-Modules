(this.webpackJsonplearningreact=this.webpackJsonplearningreact||[]).push([[0],{170:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),c=n.n(r),i=n(16),s=n.n(i),l=(n(68),n(7));var o=function(){var e=["snicker","skittles","twix","milky way"],t=Object(r.useState)(e),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(0),o=Object(l.a)(s,2),j=o[0];return o[1],console.log("counter",j,typeof j),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"candy-content",children:[Object(a.jsx)("p",{className:"heading",children:"Candy Dispenser"}),Object(a.jsx)("p",{className:"title",children:"Available Candy"}),Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:0===c.length?Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"candy-btn",onClick:function(){return i(e)},children:"Refill"})}):c.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsxs)("li",{children:[Object(a.jsx)("button",{className:"candy-btn",onClick:function(){return t=e,void i(c.filter((function(e){return e!==t})));var t},children:"grab"}),e]})},t)}))})})]})})},j=n(59);var u=function(){var e=Object(r.useState)({labels:["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Income",data:[617594,181045,153060,106519,105162,95072,617594,181045,153060,106519,105162,95072],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}]}),t=Object(l.a)(e,2),n=t[0];return t[1],Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"chart",children:Object(a.jsx)(j.Bar,{data:n,width:100,height:50,options:{title:{display:!0,text:"Income",fontSize:25},legend:{display:!0,position:"right"}}})})})},b=n(172),d=n(175),h=n(177),O=n(173);var p=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),s=Object(l.a)(i,2),o=s[0],j=s[1],u=Object(r.useState)(""),p=Object(l.a)(u,2),v=p[0],m=p[1],x=Object(r.useState)(""),f=Object(l.a)(x,2),g=f[0],y=f[1],C=function(){var e={num1:"",num2:""};return""===n&&(e.num1="Please enter valid 1st No"),""===o&&(e.num2="Please enter valid 2nd No"),y(e),console.log("errors",e),""===e.num1&&""===e.num2};return Object(a.jsxs)(b.a,{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h3",{children:"Basic Calculator"})}),Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(d.a.Group,{controlId:"1st",children:[Object(a.jsx)(d.a.Label,{children:"1st No"}),Object(a.jsx)(d.a.Control,{type:"number",placeholder:"Enter 1st No",value:n,onChange:function(e){return c(e.target.value)}}),g.num1&&Object(a.jsx)(h.a,{variant:"danger",children:g.num1})]}),Object(a.jsxs)(d.a.Group,{controlId:"2nd",children:[Object(a.jsx)(d.a.Label,{children:"2nd No"}),Object(a.jsx)(d.a.Control,{type:"number",placeholder:"Enter 2nd No",value:o,onChange:function(e){return j(e.target.value)}}),g.num2&&Object(a.jsx)(h.a,{variant:"danger",children:g.num2})]}),Object(a.jsx)(O.a,{variant:"primary",className:"mr-2",type:"submit",onClick:function(e){return function(e){if(e.preventDefault(),C()){var t=Math.floor(parseInt(n,10)+parseInt(o,10));m(t)}}(e)},children:"Addition"}),Object(a.jsx)(O.a,{variant:"primary",className:"mr-2",type:"submit",onClick:function(e){return function(e){if(e.preventDefault(),C()){var t=Math.floor(parseInt(n,10)-parseInt(o,10));m(t)}}(e)},children:"Subtraction"}),Object(a.jsx)(O.a,{variant:"primary",className:"mr-2",type:"submit",onClick:function(e){return function(e){if(e.preventDefault(),C()){var t=parseInt(n,10)*parseInt(o,10);m(t)}}(e)},children:"Multiply"}),Object(a.jsx)(O.a,{variant:"primary",className:"mr-2",type:"submit",onClick:function(e){return function(e){if(e.preventDefault(),C()){var t=Math.round(parseInt(n,10)/parseInt(o,10));m(t)}}(e)},children:"Divide"}),Object(a.jsx)(O.a,{variant:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),c(""),j(""),m(""),y("")}(e)},children:"Reset"}),Object(a.jsx)("div",{children:Object(a.jsxs)(d.a.Label,{className:"",children:[" The result is : ",v]})})]})]})},v=n(176),m=n(174);var x=function(){return Object(a.jsx)("div",{className:"container mt-4",children:Object(a.jsxs)(v.a,{defaultActiveKey:"profile",id:"uncontrolled-tab-example",children:[Object(a.jsx)(m.a,{eventKey:"home",title:"Candy Dispenser",children:Object(a.jsx)(o,{})}),Object(a.jsx)(m.a,{eventKey:"profile",title:"Chart",children:Object(a.jsx)(u,{})}),Object(a.jsx)(m.a,{eventKey:"contact",title:"Calculator",children:Object(a.jsx)(p,{})})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(169);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),f()},68:function(e,t,n){}},[[170,1,2]]]);
//# sourceMappingURL=main.44620a9f.chunk.js.map