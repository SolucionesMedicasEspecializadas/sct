(function(t){function a(a){for(var r,s,i=a[0],l=a[1],c=a[2],d=0,p=[];d<i.length;d++)s=i[d],n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(a);while(p.length)p.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],r=!0,s=1;s<e.length;s++){var i=e[s];0!==n[i]&&(r=!1)}r&&(o.splice(a--,1),t=l(l.s=e[0]))}return t}var r={},s={app:0},n={app:0},o=[];function i(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-073eb6a1":"af5ebf7e","chunk-5bb1f6e2":"32b6c4af","chunk-7c7e840e":"54821a5b"}[t]+".js"}function l(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var a=[],e={"chunk-073eb6a1":1,"chunk-5bb1f6e2":1,"chunk-7c7e840e":1};s[t]?a.push(s[t]):0!==s[t]&&e[t]&&a.push(s[t]=new Promise(function(a,e){for(var r="css/"+({}[t]||t)+"."+{"chunk-073eb6a1":"67e0b5ec","chunk-5bb1f6e2":"ee50ac08","chunk-7c7e840e":"23d0c0b4"}[t]+".css",n=l.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===n))return a()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],d=c.getAttribute("data-href");if(d===r||d===n)return a()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=a,u.onerror=function(a){var r=a&&a.target&&a.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[t],u.parentNode.removeChild(u),e(o)},u.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(u)}).then(function(){s[t]=0}));var r=n[t];if(0!==r)if(r)a.push(r[2]);else{var o=new Promise(function(a,e){r=n[t]=[a,e]});a.push(r[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=i(t),c=function(a){d.onerror=d.onload=null,clearTimeout(p);var e=n[t];if(0!==e){if(e){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");o.type=r,o.request=s,e[1](o)}n[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(a)},l.m=t,l.c=r,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)l.d(e,r,function(a){return t[a]}.bind(null,r));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var p=0;p<c.length;p++)a(c[p]);var u=d;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var r=e("64a9"),s=e.n(r);s.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticStyle:{position:"relative",width:"100%!important"},attrs:{id:"app"}},[e("app-header"),e("router-view")],1)])},n=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{ref:"header",staticClass:"navbar bg-dark navbar-dark navbar-expand-sm navbar-gob",attrs:{id:"header"}},[t._m(0)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("a",{staticClass:"navbar-brand",attrs:{href:"https://www.gob.mx",target:"_blank"}},[e("img",{staticClass:"logos",staticStyle:{width:"8rem","margin-top":"-2%","margin-bottom":"-2%","margin-left":"-15%"},attrs:{src:"https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg",alt:"logo gobierno de méxico"}})]),e("div",{staticClass:"collapse navbar-collapse justify-content-end",staticStyle:{"background-color":"#0b231e"},attrs:{id:"collapsibleNavbar"}},[e("form",{staticClass:"form-inline"},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item",attrs:{align:"left"}},[e("a",{staticClass:"nav-link",attrs:{href:"https://mivacuna.salud.gob.mx/",target:"_blank",id:"op0"}},[t._v("Registro para vacunación")])]),e("li",{staticClass:"nav-item",attrs:{align:"left"}},[e("a",{staticClass:"nav-link",attrs:{href:"https://coronavirus.gob.mx/",target:"_blank",id:"op00"}},[t._v("Información sobre COVID-19")])]),e("li",{staticClass:"nav-item dropdown",attrs:{align:"left"}},[e("a",{staticClass:"nav-link menu",attrs:{href:"#","data-toggle":"dropdown",id:"op2","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Trámites")]),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e("a",{staticClass:"dropdown-item op opmenu",staticStyle:{"font-weight":"bold"},attrs:{href:"#"}},[t._v("Consulta por categoría de trámite")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/comunicaciones",target:"_blank"}},[t._v("Comunicaciones y transportes")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/economia",target:"_blank"}},[t._v("Economía")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/educacion",target:"_blank"}},[t._v("Educación")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/energia",target:"_blank"}},[t._v("Energía")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/identidad",target:"_blank"}},[t._v("Identidad, pasaporte y migración")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/impuestos",target:"_blank"}},[t._v("Impuestos y contribuciones")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/ambiente",target:"_blank"}},[t._v("Medio Ambiente")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/programas",target:"_blank"}},[t._v("Programas sociales")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/salud",target:"_blank"}},[t._v("Salud")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/seguridad",target:"_blank"}},[t._v("Seguridad, legalidad y justicia")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/financieros",target:"_blank"}},[t._v("Servicios financieros")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/territorio",target:"_blank"}},[t._v("Territorio y vivienda")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/trabajo",target:"_blank"}},[t._v("Trabajo")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/turismo",target:"_blank"}},[t._v("Turismo")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"/tramites/otros",target:"_blank"}},[t._v("Otros")])])]),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link menu",attrs:{href:"#","data-toggle":"dropdown",id:"op3","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Gobierno")]),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e("a",{staticClass:"dropdown-item op opmenu",staticStyle:{"font-weight":"bold"},attrs:{href:"#"}},[t._v("Instituciones del Gobierno de México")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/sader",target:"_blank"}},[t._v("Agricultura")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/bienestar",target:"_blank"}},[t._v("Bienestar")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/sct",target:"_blank"}},[t._v("Comunicaciones y Transportes")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/cultura",target:"_blank"}},[t._v("Cultura")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/sedena",target:"_blank"}},[t._v("Defensa Nacional")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/sedatu",target:"_blank"}},[t._v("Desarrollo Agrario")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/se",target:"_blank"}},[t._v("Economía")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/sep",target:"_blank"}},[t._v("Educación Pública")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/sener",target:"_blank"}},[t._v("Energía")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/sfp",target:"_blank"}},[t._v("Función Pública")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/segob",target:"_blank"}},[t._v("Gobernación")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/shcp",target:"_blank"}},[t._v("Hacienda")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/semar",target:"_blank"}},[t._v("Marina")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/semarnat",target:"_blank"}},[t._v("Medio Ambiente")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/presidencia",target:"_blank"}},[t._v("Presidencia")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/sre",target:"_blank"}},[t._v("Relaciones Exteriores")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/salud",target:"_blank"}},[t._v("Salud")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/stps",target:"_blank"}},[t._v("Trabajo")]),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/sectur",target:"_blank"}},[t._v("Turismo")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item op",attrs:{href:"https://www.gob.mx/gobierno",target:"_blank"}},[t._v("Ver más")])])]),e("button",{staticClass:"btn btn-default",attrs:{id:"botonbuscar",type:"button"}},[e("a",{attrs:{href:"https://www.gob.mx/busqueda?utf8=✓",target:"_blank",id:"botbusca"}},[e("img",{attrs:{alt:"Buscar",src:"https://framework-gb.cdn.gob.mx/landing/img/lupa.png"}})])])])])])])}],l=(e("75a0"),e("2877")),c={},d=Object(l["a"])(c,o,i,!1,null,"27b47ae7",null),p=d.exports,u={name:"app",components:{"app-header":p}},m=u,b=(e("034f"),Object(l["a"])(m,s,n,!1,null,null,null)),f=b.exports,g=e("8c4f");r["a"].use(g["a"]);var h=new g["a"]({mode:"history",routes:[{path:"/",name:"homegob",component:function(){return e.e("chunk-7c7e840e").then(e.bind(null,"acbc"))}},{path:"/tramites",name:"tramites_home",component:function(){return e.e("chunk-5bb1f6e2").then(e.bind(null,"e5d9"))}},{path:"/tramites/:categoria",name:"tramites",component:function(){return e.e("chunk-5bb1f6e2").then(e.bind(null,"e5d9"))}},{path:"/proyectosyprogramasprioritarios",name:"programasyproyectosprioritarios",component:function(){return e.e("chunk-073eb6a1").then(e.bind(null,"d4c2"))}}],scrollBehavior:function(){return{x:0,y:0}}}),w=(e("4989"),e("ab8b"),e("ecee")),v=e("c074"),_=e("ad3d");e("bc3a");window.axios=e("bc3a"),w["c"].add(v["a"]),r["a"].component("font-awesome-icon",_["a"]),new r["a"]({router:h,render:function(t){return t(f)}}).$mount("#app")},"62ea":function(t,a,e){},"64a9":function(t,a,e){},"75a0":function(t,a,e){"use strict";var r=e("62ea"),s=e.n(r);s.a}});
//# sourceMappingURL=app.f7059eea.js.map