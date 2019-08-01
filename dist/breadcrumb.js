!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("breadcrumb",[],t):"object"==typeof exports?exports.breadcrumb=t():e.breadcrumb=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=n.a},function(e,t,r){"use strict";var n=r(2);n.a.install=function(e,t){e.directive("breadcrumb",{params:["paths","separator"],bind:function(e,r,a){e.breadcrumb=new n.a(e,r.value||{paths:a.context.$route.matched},t)},unbind:function(e,t,r,n){e.breadcrumb.destroy()}})},t.a=n.a},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=r(3),o=(r.n(a),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}),i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s={separator:"/",paths:[],routable:!0},u=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n(this,e),this._opts=o({},e._defaults,e.filterOpts(r,a)),this._$el=t,this._$tpl=this._createBreadcrumbElement(),this._mount()}return i(e,[{key:"destroy",value:function(){this._unmount()}},{key:"_mount",value:function(){this._$tpl&&this._$el&&this._$el.insertAdjacentElement("afterbegin",this._$tpl)}},{key:"_unmount",value:function(){this._$tpl&&this._$tpl.parentNode&&this._$tpl.parentNode.removeChild(this._$tpl)}},{key:"_createBreadcrumbElement",value:function(){var e=this;if(!this.opts||!this.opts.paths)return null;var t=document.createElement("div");return t.setAttribute("class","breadcrumb"),this.opts.paths.map(function(r){var n=r.name,a=r.to,o=a?"a":"span",i=e.opts.paths.indexOf(r)===e.opts.paths.length-1,s=document.createElement(o);return e._cla(s,"breadcrumb__item"),a&&e._cla(s,"is-navigative"),a&&e._setAttr(s,"href",a),i&&e._cla(s,"breadcrumb__item-active"),s.innerText=n,t.appendChild(s),!i&&t.appendChild(e._createSeparatorElement()),s}),t}},{key:"_createSeparatorElement",value:function(e){var t=document.createElement("span");return this._setAttr(t,"class","breadcrumb__separator"),t.innerText=this.opts.separator,t}},{key:"_cla",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof t&&e&&this._isElement(e)&&e.classList)if(r){var n=e.classList.value.replace(this.options.class,t);this._setAttr(e,"class",n)}else e.classList.add(t)}},{key:"_setAttr",value:function(e,t,r){"string"==typeof t&&"string"==typeof r&&t&&r&&e&&this._isElement(e)&&e.classList&&e.setAttribute(t,r)}},{key:"_isElement",value:function(e){return e instanceof window.Element}},{key:"opts",get:function(){return o({},this._opts)}}],[{key:"_booly",value:function(e){if(e&&("boolean"==typeof e||["true","false"].includes(e.toLowerCase())))return"boolean"==typeof e?e:"true"===e.toLowerCase()}},{key:"_okv",value:function(t,r){return r=r||"name",e._nestedV(r.indexOf(".")>-1?r:[r],t)}},{key:"_nestedV",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";return(Array.isArray(e)?e:e.split(r)).reduce(function(e,t){return e&&e[t]},t)}},{key:"filterOpts",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};if(t.separator&&"string"==typeof t.separator&&(n.separator=t.separator),r&&r.hasOwnProperty("routable")){var a=e._booly(r.routable);void 0!==a&&(n.routable=a)}return t.paths&&Array.isArray(t.paths)&&(n.paths=t.paths.map(function(t){var r={};return r.name=e._okv(t,t.meta&&t.meta.title?"meta.title":"name"),r.to=n.routable&&e._okv(t,t.path?"path":"to"),r})),n}}]),e}();t.a=u,u._defaults=o({},s)},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(6)("b5749da0",n,!0,{})},function(e,t,r){t=e.exports=r(5)(!1),t.push([e.i,".breadcrumb{display:flex;align-items:center;height:45px;background:#fff;padding:4px 20px 0;border-bottom:1px solid #f0f2f5}.breadcrumb .breadcrumb__separator{display:inline-block;margin:0 8px;font-weight:700;color:#c0c4cc;font-size:.8em}.breadcrumb .breadcrumb__item{color:#999;text-decoration:none;font-size:14px}.breadcrumb .breadcrumb__item.is-navigative:hover{color:#c8132d;cursor:pointer}.breadcrumb .breadcrumb__item.router-link-active{color:#606266}.breadcrumb .breadcrumb__item.breadcrumb__item-active{font-weight:400;color:#606266;cursor:text}",""])},function(e,t){function r(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var o=n(a);return[r].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([o]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=l[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(o(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(o(r.parts[a]));l[r.id]={id:r.id,refs:1,parts:i}}}}function a(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,r,n=document.querySelector("style["+b+'~="'+e.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(y){var o=d++;n=p||(p=a()),t=i.bind(null,n,o,!1),r=i.bind(null,n,o,!0)}else n=a(),t=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function i(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function s(e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),v.ssrId&&e.setAttribute(b,t.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=r(7),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,m=function(){},v=null,b="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,a){h=r,v=a||{};var o=c(e,t);return n(o),function(t){for(var r=[],a=0;a<o.length;a++){var i=o[a],s=l[i.id];s.refs--,r.push(s)}t?(o=c(e,t),n(o)):o=[];for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var _=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},a=0;a<t.length;a++){var o=t[a],i=o[0],s=o[1],u=o[2],c=o[3],l={id:e+":"+a,css:s,media:u,sourceMap:c};n[i]?n[i].parts.push(l):r.push(n[i]={id:i,parts:[l]})}return r}}])});
//# sourceMappingURL=breadcrumb.js.map