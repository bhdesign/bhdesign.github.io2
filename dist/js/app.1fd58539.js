(function(e){function t(t){for(var r,o,i=t[0],s=t[1],c=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0a9c0061"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"f13907b5"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0600":function(e,t,n){"use strict";var r=n("1f51"),o=n.n(r);o.a},"1f51":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),e.authenticated?n("router-link",{attrs:{to:"/Login",replace:""},nativeOn:{click:function(t){return e.logout()}}},[e._v("Logout")]):e._e()],1),n("router-view",{on:{authenticated:e.setAuthenticated}})],1)},a=[],u=(n("ac1f"),n("5319"),{name:"App",data:function(){return{authenticated:!1,mockAccount:{username:"user",password:"user"}}},mounted:function(){this.authenticated||this.$router.replace({name:"login"})},methods:{setAuthenticated:function(e){this.authenticated=e},logout:function(){this.authenticated=!1}}}),i=u,s=(n("034f"),n("2877")),c=Object(s["a"])(i,o,a,!1,null,null,null),l=c.exports,p=(n("d3b7"),n("8c4f")),d=n("dd7b"),f=n("5f5b");n("f9e3"),n("2dd8");r["default"].use(f["a"]),r["default"].use(p["a"]);var m=[{path:"/",name:"home",component:d["default"]},{path:"/Login",name:"login",component:function(){return n.e("about").then(n.bind(null,"dd7b"))}},{path:"/Secure",name:"secure",component:function(){return n.e("about").then(n.bind(null,"76b9"))}},{path:"/panier",name:"panier",component:function(){return n.e("about").then(n.bind(null,"ad1e"))}}],h=new p["a"]({mode:"history",base:"/",routes:m}),v=h,g=n("2f62");r["default"].use(g["a"]);var b=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["default"].config.productionTip=!1,new r["default"]({router:v,store:b,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},dd7b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h1",[e._v("Login")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Username"},domProps:{value:e.input.username},on:{input:function(t){t.target.composing||e.$set(e.input,"username",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:function(t){return e.login()}}},[e._v("Login")])])},o=[],a=(n("ac1f"),n("5319"),{name:"login",data:function(){return{input:{username:"",password:""}}},methods:{login:function(){""!=this.input.username&&""!=this.input.password&&(this.input.username==this.$parent.mockAccount.username&&this.input.password==this.$parent.mockAccount.password?(this.$emit("authenticated",!0),this.$router.replace({name:"secure"})):alert("error"))}}}),u=a,i=(n("0600"),n("2877")),s=Object(i["a"])(u,r,o,!1,null,"2b705574",null);t["default"]=s.exports}});
//# sourceMappingURL=app.1fd58539.js.map