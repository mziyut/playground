// { "framework": "Vue"} 

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){!function(){throw new Error('Cannot find module "/Users/mziyut/Workspace/github.com/mziyut/weex-sample/plugins/plugin_bundle.js"')}()}])},function(e,t,n){function r(e){o||n(8)}var o=!1,s=n(6)(n(2),n(7),r,null,null);s.options.__file="/Users/mziyut/Workspace/github.com/mziyut/weex-sample/src/index.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:{logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World"},methods:{update:function(e){this.target="Weex",console.log("target:",this.target)}}}},function(e,t,n){"use strict";n(0);var r=n(1);r.el="#root",new Vue(r)},function(e,t,n){t=e.exports=n(5)(),t.push([e.i,"\n.wrapper { align-items: center; margin-top: 120px;\n}\n.title { padding-top:40px; padding-bottom: 40px; font-size: 48px;\n}\n.logo { width: 360px; height: 156px;\n}\n.desc { padding-top: 20px; color:#888; font-size: 24px;\n}\n","",{version:3,sources:["/Users/mziyut/Workspace/github.com/mziyut/weex-sample/src/index.vue?138fe402"],names:[],mappings:";AASA,WAAA,oBAAA,CAAA,kBAAA;CAAA;AACA,SAAA,iBAAA,CAAA,qBAAA,CAAA,gBAAA;CAAA;AACA,QAAA,aAAA,CAAA,cAAA;CAAA;AACA,QAAA,kBAAA,CAAA,WAAA,CAAA,gBAAA;CAAA",file:"index.vue",sourcesContent:['<template>\n  <div class="wrapper" @click="update">\n    <image :src="logoUrl" class="logo"></image>\n    <text class="title">Hello {{target}}</text>\n    <text class="desc">Now, let\'s use vue to build your weex app.</text>\n  </div>\n</template>\n\n<style>\n  .wrapper { align-items: center; margin-top: 120px; }\n  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }\n  .logo { width: 360px; height: 156px; }\n  .desc { padding-top: 20px; color:#888; font-size: 24px;}\n</style>\n\n<script>\n  export default {\n    data: {\n      logoUrl: \'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png\',\n      target: \'World\'\n    },\n    methods: {\n      update: function (e) {\n        this.target = \'Weex\'\n        console.log(\'target:\', this.target)\n      }\n    }\n  }\n<\/script>'],sourceRoot:""}])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t){e.exports=function(e,t,n,r,o){var s,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,i=e.default);var u="function"==typeof i?i.options:i;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var l=u.functional,p=l?u.render:u.beforeCreate;l?u.render=function(e,t){return c.call(t),p(e,t)}:u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:s,exports:i,options:u}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.update}},[n("image",{staticClass:"logo",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{src:e.logoUrl}}),e._v(" "),n("text",{staticClass:"title",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Hello "+e._s(e.target))]),e._v(" "),n("text",{staticClass:"desc",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Now, let's use vue to build your weex app.")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(9)("71d3fd3f",r,!1)},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(s(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return A;r.parentNode.removeChild(r)}if(g){var s=f++;r=d||(d=o()),t=i.bind(null,r,s,!1),n=i.bind(null,r,s,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(10),l={},p=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,v=!1,A=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=c(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var i=o[s],a=l[i.id];a.refs--,n.push(a)}t?(o=c(e,t),r(o)):o=[];for(var s=0;s<n.length;s++){var a=n[s];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete l[a.id]}}}};var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],a=s[1],u=s[2],c=s[3],l={id:e+":"+o,css:a,media:u,sourceMap:c};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}}]);
//# sourceMappingURL=index.web.js.map