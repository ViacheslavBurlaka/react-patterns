(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{31:function(e,t,a){"use strict";a.r(t);var n=a(49),r=a(50),l=a(46),c=a(0),i=a.n(c),o=a(8),s=function(e){var t=e.title,a=e.email,n=e.name,r=e.phone,l=e.message,s=e.password,m=e.country,u=e.site,p=e.agreement,d=e.gender,f=e.handleSubmit,g=e.handleChange,h=e.handleReset;return i.a.createElement(c.Fragment,null,i.a.createElement("h1",null,i.a.createElement(o.b,{to:"/"},t)),i.a.createElement("form",{className:"form",onSubmit:f,onReset:h},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"group"},i.a.createElement("input",{type:"text",name:"name",className:"field-style field-split align-left",placeholder:"Name",value:n,onChange:g}),i.a.createElement("input",{type:"email",name:"email",className:"field-style field-split align-right",placeholder:"Email",value:a,onChange:g})),i.a.createElement("div",{className:"group"},i.a.createElement("input",{type:"text",name:"phone",className:"field-style field-split align-left",placeholder:"Phone",value:r,onChange:g}),i.a.createElement("input",{type:"url",name:"site",className:"field-style field-split align-right",placeholder:"Website",value:u,onChange:g})),i.a.createElement("div",{className:"group"},i.a.createElement("input",{type:"password",name:"password",className:"field-style field-full align-none",placeholder:"Password",value:s,onChange:g})),i.a.createElement("div",{className:"group"},i.a.createElement("textarea",{name:"message",className:"field-style",placeholder:"Message",value:l,onChange:g})),i.a.createElement("div",{className:"group"},i.a.createElement("label",null,i.a.createElement("input",{className:"field-style",type:"radio",name:"gender",value:"mr",checked:"mr"===d,onChange:g}),"Mr"),i.a.createElement("label",null,i.a.createElement("input",{className:"field-style",type:"radio",name:"gender",value:"mrs",checked:"mrs"===d,onChange:g}),"Mrs"),i.a.createElement("label",null,i.a.createElement("input",{className:"field-style",type:"radio",name:"gender",value:"miss",checked:"miss"===d,onChange:g}),"Miss")),i.a.createElement("div",{className:"group"},i.a.createElement("label",null,"Country"),i.a.createElement("select",{className:"field-style",name:"country",value:m,onChange:g},i.a.createElement("option",{value:"Canada"},"Canada"),i.a.createElement("option",{value:"France"},"France"),i.a.createElement("option",{value:"Germany"},"Germany"),i.a.createElement("option",{value:"Italy"},"Italy"),i.a.createElement("option",{value:"Japan"},"Japan"),i.a.createElement("option",{value:"Ukraine"},"Ukraine"),i.a.createElement("option",{value:"United Kingdom"},"United Kingdom"),i.a.createElement("option",{value:"United States"},"United States"))),i.a.createElement("div",{className:"group"},i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",name:"agreement",checked:p,onChange:g}),"I agree to the",i.a.createElement("a",{href:"/#"}," terms and conditions"))),i.a.createElement("div",{className:"group"},i.a.createElement("button",{type:"submit",disabled:!p},"Sign up")))))},m=function e(t){var a=Object(c.useState)(t),o=Object(l.a)(a,2),m=o[0],u=o[1],p=function(){return u(e.defaultProps)};return i.a.createElement(s,Object.assign({},m,{handleSubmit:function(e){e.preventDefault(),console.log(m),p()},handleChange:function(e){var t=e.target,a=t.name,l=t.value,c=t.checked;u(function(e){return Object(r.a)({},e,Object(n.a)({},a,"agreement"===a?c:l))})},handleReset:p}))};m.defaultProps={name:"Kottans",email:"kottans@gmail.com",phone:"000 000 00 00",message:"Kottans - Knowledge must be shared",password:"123",country:"Ukraine",site:"http://kottans.org",gender:"miss",agreement:!1},t.default=m},46:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},49:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",function(){return n})},50:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(49);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}}}]);
//# sourceMappingURL=6.af28df9f.chunk.js.map