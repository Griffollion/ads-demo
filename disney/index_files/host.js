!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://yastatic.net/safeframe-bundles/",t(t.s=51)}([function(e,t,n){"use strict";function o(e,t,n){e.setAttribute(t,n)}function r(e,t){return e.getAttribute(t)}function i(e,t,n){if(void 0===n&&(n=!0),n){e.style.cssText=t}else s(e,t)}function s(e,t){var n=e.getAttribute("id");n||(n=a(),e.setAttribute("id",n));var o=e.parentNode,r=document.createElement("style");r.innerHTML="#"+n+"{"+t+"}",o.appendChild(r)}function a(){return"id"+Math.round(1e4*Math.random())}function u(e,t){e.appendChild(t)}function d(e){var t=g(e);t&&t.removeChild(e)}function c(e,t,n,o){void 0===o&&(o=!1),e.addEventListener?e.addEventListener(t,n,o):e.attachEvent("on"+t,n)}function f(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)}function l(e){return e.contentWindow}function p(e){return window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle}function h(e){return e.getBoundingClientRect()}function g(e){return e&&(e.parentNode||e.parentElement)||null}function m(e){if(e){var t=!/\{[^\}]*}/g.test(e),n=void 0;t?(n=document.createElement("link"),n.type="text/css",n.rel="stylesheet",n.href=e):(n=document.createElement("style"),n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)));document.getElementsByTagName("head")[0].appendChild(n)}}t.__esModule=!0,t.setAttr=o,t.getAttr=r,t.setStyle=i,t.appendChild=u,t.removeFromDocument=d,t.addEventListener=c,t.removeEventListener=f,t.getIframeWindow=l,t.getCurrentStyle=p,t.getRect=h,t.parent=g,t.createStyleSheet=m},function(e,t,n){"use strict";function o(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function r(e,t){if(e)for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n={},o=function(e,t){n[e]=t},i=0,s=e;i<s.length;i++){r(s[i],o)}return n}function s(e){return i(e)}function a(e){l++;var t=(new Date).getTime(),n=Math.round(100*Math.random());return[e||"","_",t,"_",n,"_",l].join("")}function u(e){var t=[];return r(e,function(e,n){var o="number"==typeof n?n+"px":n;t.push(e+":"+o)}),0===t.length?"":t.join(";")+";"}function d(e){return 0===e.length?"":f.reduce(e,function(e,t){return e.replace(/\/$/,"")+"/"+t.replace(/^\//,"")})}function c(){var e=navigator.plugins;if(e.length>0)for(var t=0;t<e.length;t++)if(-1!==e[t].name.toLowerCase().indexOf("flash")){var n=/\d+\.\d+/.exec(e[t].description);if(n)return parseFloat(n[0])}return 0}t.__esModule=!0;var f=n(7);t.trim=o,t.forEachProp=r,t.merge=i,t.shallowCopy=s;var l=0;t.guid=a,t.toCssString=u,t.concatPath=d,t.getFlashVersion=c},function(e,t,n){"use strict";function o(e){}function r(e){o("[SafeFrame error] "+e);var t=window;t.$sf&&t.$sf.info&&t.$sf.info.errs&&t.$sf.info.errs.push&&t.$sf.info.errs.push(e)}t.__esModule=!0,t.logInfo=o,t.logError=r},function(e,t,n){"use strict";function o(){}function r(e){if(void 0===e&&(e={}),!M){if(v.status.getStatus())return p.logError("Cannot update Config while system is busy"),null;M=h.merge(w,e),M.positions={},e.positions&&h.forEachProp(e.positions,function(e,t){M.positions[e]=m.PosConfig(h.merge(t,{id:e}))}),M.auto&&g.boot()}return null===M?null:h.shallowCopy(M)}function i(){return null!==M}function s(e){i()&&(M.positions[e.id]=e)}function a(e){return i()&&M.positions[e]?M.positions[e]:null}function u(e){if(void 0===e&&(e={}),i()){var t=h.concatPath([M.cdn,M.root,M.version,e["protected"]?"protected":"",M.renderFile]);return t}return null}function d(e){i()&&M.onStartPosRender(e)}function c(e){i()&&M.onEndPosRender(e)}function f(e){i()&&M.onFailure(e)}function l(){M=null}t.__esModule=!0;var p=n(2),h=n(1),g=n(16),m=n(17),v=n(5),y={cdn:"//yastatic.net",root:"/safeframe-bundles/0.40",renderFile:"render.html",renderFileAdb:"render_adb.html"},w={root:y.root,cdn:y.cdn,renderFile:y.renderFile,debug:!1,auto:!0,to:6e4,onBeforePosMsg:o,onPosMsg:o,onStartPosRender:o,onEndPosRender:o,onFailure:o,version:"1-1-0"},M=null;t.Config=r,t.isConfigReady=i,t.addPosConfig=s,t.findPosConfig=a,t.getRenderFileURL=u,t.notifyBeforePosMsg=function(e,t,n){return!!i()&&M.onBeforePosMsg(e,t,n)},t.notifyPosMsg=function(e,t,n){i()&&M.onPosMsg(e,t,n)},t.notifyStartPosRender=d,t.notifyEndPosRender=c,t.notifyFailure=f,t.resetConfig=l},function(e,t,n){"use strict";function o(){return"complete"===document.readyState||"interactive"===document.readyState&&!document.documentElement.doScroll}function r(e){o()?setTimeout(e):a.push(e)}function i(){s.removeEventListener(document,"DOMContentLoaded",i),s.removeEventListener(window,"load",i);for(var e=0,t=a;e<t.length;e++){(0,t[e])()}a=[]}t.__esModule=!0;var s=n(0),a=[];t.onDocumentReady=r,o()||(s.addEventListener(document,"DOMContentLoaded",i),s.addEventListener(window,"load",i))},function(e,t,n){"use strict";t.__esModule=!0;var o=n(1),r=n(3),i=function(){function e(){this.reset()}return e.prototype.setPositionReady=function(e){this.positions[e.id]=e,this.busyStatuses[e.id]="ready"},e.prototype.setPositionLoading=function(e,t,n){this.busyStatuses[e]="loading",this.iframes[e]=t,this.loadingTimeoutIds[e]=n,r.notifyStartPosRender(e)},e.prototype.setPositionLoaded=function(e){clearTimeout(this.loadingTimeoutIds[e]),delete this.busyStatuses[e],delete this.loadingTimeoutIds[e],r.notifyEndPosRender(e)},e.prototype.setPositionExpanding=function(e){this.busyStatuses[e]="expanding"},e.prototype.setPositionExpanded=function(e){this.busyStatuses[e]="expanded"},e.prototype.setPositionCollapsing=function(e){this.busyStatuses[e]="collapsing"},e.prototype.setPositionCollapsed=function(e){delete this.busyStatuses[e]},e.prototype.setPositionError=function(e){clearTimeout(this.loadingTimeoutIds[e]),this.busyStatuses[e]="error",delete this.iframes[e],r.notifyFailure(e)},e.prototype.setPositionNuked=function(e){clearTimeout(this.loadingTimeoutIds[e]),delete this.positions[e],delete this.iframes[e],delete this.busyStatuses[e],delete this.loadingTimeoutIds[e]},e.prototype.getPositionStatus=function(e){return{busy:this.busyStatuses[e]||null,iframe:this.iframes[e]||null}},e.prototype.getPositionsReadyForRender=function(){var e=this,t=[];return o.forEachProp(this.busyStatuses,function(n,o){"ready"===o&&t.push(e.positions[n])}),t},e.prototype.getRenderedPositions=function(){var e=this,t=[];return o.forEachProp(this.positions,function(n){"ready"!==e.busyStatuses[n]&&t.push(n)}),t},e.prototype.getStatus=function(e){var t=!1;return o.forEachProp(this.busyStatuses,function(n,o){t=!0,e&&(e[n]=o)}),t},e.prototype.getPosition=function(e){return this.positions[e]||null},e.prototype.reset=function(){this.busyStatuses={},this.iframes={},this.loadingTimeoutIds={},this.positions={}},e}();t.status=new i},function(e,t,n){"use strict";function o(e){var t={};return i.forEachProp(e,function(e,n){var o=typeof n;"number"!==o&&"string"!==o&&"boolean"!==o||(t[e]=n)}),t}function r(e){return e&&e.sharedData&&"string"==typeof e.ownerKey&&e.privateData?new s(e.sharedData,e.ownerKey,e.privateData):null}t.__esModule=!0;var i=n(1);t.createPosMeta=r;var s=function(){function e(e,t,n){this.sharedData=o(e),this.ownerKey=t,this.privateData=o(n)}return e.prototype.value=function(e,t){return e in this.sharedData?this.sharedData[e]:t===this.ownerKey&&e in this.privateData?this.privateData[e]:void 0},e.prototype.getFullMeta=function(){return{sharedData:this.sharedData,ownerKey:this.ownerKey,privateData:this.privateData}},e}();t.PosMeta=s},function(e,t,n){"use strict";t.__esModule=!0,t.reduce=function(e,t,n){var o=0;for(arguments.length<3&&(o=1,n=e[0]);o<e.length;o++)n=t(n,e[o],o,e);return n}},function(e,t,n){"use strict";function o(e,t){var n=e[t];if(!r.checkNativeCode(n)){var o=n;try{delete e[t];var i=e[t];"function"==typeof i&&(n=i),e[t]=o}catch(s){}}return n}t.__esModule=!0;var r=n(9);t.getNativeMethod=o},function(e,t,n){"use strict";function o(e){if(!e||!e.toString)return!1;var t=e.toString();return/\[native code\]/.test(t)||/\/\* source code not available \*\//.test(t)}t.__esModule=!0,t.checkNativeCode=o},function(e,t,n){"use strict";function o(e){return encodeURIComponent(JSON.stringify(e))}function r(e){try{var t=JSON.parse(decodeURIComponent(e));if(t.id&&t.html&&t.pmGuid)return t}catch(n){}return null}t.__esModule=!0,t.encode=o,t.decode=r},function(e,t,n){"use strict";t.__esModule=!0;var o=n(14),r=n(0),i=function(){function e(){var e=this;this.iframes=[],this.guids=[],this.callbacks=[],r.addEventListener(window,"message",function(t){e.handleMessage(t)})}return e.prototype.register=function(e,t,n){this.iframes.push(e),this.guids.push(t),this.callbacks.push(n)},e.prototype.unregister=function(e){var t=o.indexOf(this.iframes,e);-1!==t&&(this.iframes.splice(t,1),this.guids.splice(t,1),this.callbacks.splice(t,1))},e.prototype.send=function(e,t){var n=o.indexOf(this.iframes,e);if(-1!==n){var i=this.guids[n],s=void 0;try{s=JSON.stringify({guid:i,payload:t})}catch(u){}if(!s)return;var a=r.getIframeWindow(e);a&&a.postMessage(s,"*")}},e.prototype.handleMessage=function(e){var t;try{t=JSON.parse(e.data)}catch(a){}if(t&&t.guid){var n=o.indexOf(this.guids,t.guid);if(-1!==n){var i=this.iframes[n],s=this.callbacks[n];r.getIframeWindow(i)===e.source&&s(t.payload)}}},e}();t.postMessages=new i},,,function(e,t,n){"use strict";t.__esModule=!0,t.indexOf=function(e,t,n){void 0===n&&(n=0);for(var o=n;o<e.length;o++)if(e[o]===t)return o;return-1}},function(e,t,n){"use strict";t.__esModule=!0,t.forEach=function(e,t,n){for(var o=0;o<e.length;o++)t.call(n,e[o],o,e)}},function(e,t,n){"use strict";function o(){for(var e=document.getElementsByTagName("script"),t=[],n=0;n<e.length;n++){var o=e[n];o.className!==w&&f.getAttr(o,"type")!==M||-1===c.indexOf(P,o)&&(t.push({parent:f.parent(o),data:p.trim(o.text||o.innerHTML||o.innerText)}),P.push(o))}return h.onDocumentReady(r),t}function r(){for(var e=0,t=P;e<t.length;e++){var n=t[e];f.removeFromDocument(n)}P=[]}function i(e){var t,n=e.data,o=e.parent;try{t=new Function("return "+n)()}catch(s){return l.logError("Error parsing tag configuration "+(s&&s.message||"")),null}if(t&&(t.html||t.src)){t.conf=t.conf||{};var r=g.findPosConfig(t.id);r&&(t.conf=p.merge(r,t.conf)),t.conf.dest=t.conf.dest||p.guid("dest");if(!(t.conf.dest instanceof Element?t.conf.dest:document.getElementById(t.conf.dest))){var i=document.createElement("div");f.setAttr(i,"id",t.conf.dest),o.appendChild(i)}y.status.setPositionReady(new m.Position(t))}else l.logError("no content found in the inline position object")}function s(){g.isConfigReady()||l.logError("can't boot before config initialized"),d.forEach(o(),i)}function a(e){g.Config(e)}function u(){g.isConfigReady()||l.logError("can't boot before config initialized"),s(),v.render(y.status.getPositionsReadyForRender())}t.__esModule=!0;var d=n(15),c=n(14),f=n(0),l=n(2),p=n(1),h=n(4),g=n(3),m=n(18),v=n(47),y=n(5),w="sf_data",M="text/x-safeframe",P=[];t.grabScripts=s,t.parseInlineConfig=a,t.boot=u},function(e,t,n){"use strict";function o(e,t,n){var o;"object"==typeof e?(o=e,o.dest=o.dest||t):o={id:e};var u,d="100%"===o.w?o.w:Number(o.w)||0,c="100%"===o.h?o.h:Number(o.h)||0;if((!d||!c)&&o.size){var f=o.size.split(/x/gi);d=parseInt(f[0],10)||0,c=parseInt(f[1],10)||0}d&&c?u=d+"x"+c:(d=0,c=0,u="");var l=o.tgt||"_blank";"_self"!==l&&"_parent"!==l||(l="_top");var p={id:o.id||r.guid(s.POS_ID_AUTO_PREFIX),dest:o.dest||"",bg:o.bg||"transparent",css:o.css||"",z:Number(o.z)||0,supports:r.merge(a,o.supports),w:d,h:c,size:u,tgt:l,"protected":!0===o["protected"],basePath:o.basePath||""};return n&&null===i.Config()&&i.Config(n),null!==i.Config()&&i.addPosConfig(p),p}t.__esModule=!0;var r=n(1),i=n(3),s=n(45),a={"exp-ovr":!0,"exp-push":!1,"read-cookie":!1,"write-cookie":!1};t.PosConfig=o},function(e,t,n){"use strict";function o(e){var t=d.Config().version,n=f.isEnabled?"1":"0",o=s.getFlashVersion().toString();return e.replace(/\${sf_ver}/g,t).replace(/\${ck_on}/g,n).replace(/\${flash_ver}/g,o)}function r(e){return["<scr",'ipt type="text/javascript" src="',e,'"></scr',"ipt>"].join("")}t.__esModule=!0;var i=n(2),s=n(1),a=n(6),u=n(53),d=n(3),c=n(45),f=n(19),l=n(17),p=n(46),h=function(){function e(t,n,u,f){if(void 0===t)return void i.logError("posIDorObj is required");if(!d.isConfigReady())return void i.logError("Publisher Config not initialized - abort");if(!(this instanceof e))return new e(t,n,u,f);var h;if(h="object"==typeof t?t:{id:t},h.html=n||h.html,h.meta=u||h.meta,h.conf=f||h.conf,h.id?this.id=h.id:h.conf&&h.conf.id?this.id=h.conf.id:this.id=s.guid(c.POS_ID_AUTO_PREFIX),h.html?this.html=h.html:h.src?this.html=r(o(h.src)):this.html="",this.src="",this.meta=h.meta instanceof a.PosMeta?h.meta:p.fromInlineCode(h.meta),h.conf)h.conf.id=this.id,this.conf=l.PosConfig(h.conf);else{var g=d.findPosConfig(this.id);this.conf=g||l.PosConfig({id:this.id})}}return e.prototype.toString=function(){return u.setObjectToQueryString({id:this.id,meta:this.meta,html:this.html,conf:this.conf,src:this.src})},e}();t.Position=h},function(e,t,n){"use strict";function o(e){var t=i.getCookie(document,e);return"string"==typeof t?t:null}function r(e,t,n){var o=n||new Date(2100,0);i.setCookie(document,e,t,{expires:o})}t.__esModule=!0;var i=n(54),s=n(1);t.read=o,t.write=r,t.isEnabled=function(){var e=s.guid("safeframe-test-cookie");i.setCookie(document,e,"test");var t="test"===i.getCookie(document,e);return i.deleteCookie(document,e),t}()},function(e,t,n){"use strict";function o(e,t){return{width:e.w,height:e.h,top:0,left:0,position:t?"relative":"absolute"}}function r(e){return{width:e.w,height:e.h,position:"relative"}}function i(e,t,n){var i=o(t),s=r(t);n.t&&("number"==typeof i.height&&(i.height+=n.t),n.push||(i.top=-n.t)),n.l&&("number"==typeof i.width&&(i.width+=n.l),n.push||(i.left=-n.l)),n.b&&"number"==typeof i.height&&(i.height+=n.b),n.r&&"number"==typeof i.width&&(i.width+=n.r),n.push&&(s.width=i.width,s.height=i.height),a.setStyle(e,u.toCssString(i)),a.setStyle(a.parent(e),u.toCssString(s))}function s(e,t){var n=o(t),i=r(t);a.setStyle(e,u.toCssString(n)),a.setStyle(a.parent(e),u.toCssString(i))}t.__esModule=!0;var a=n(0),u=n(1);t.initialIframeStyle=o,t.initialWrapStyle=r,t.expand=i,t.collapse=s},function(e,t,n){"use strict";function o(e){e&&e.iframe&&(c.geomUpdater.unregister(e.iframe),d.focusUpdater.unregister(e.iframe),f.postMessages.unregister(e.iframe),s.removeFromDocument(e.iframe))}function r(e){if(e&&e.iframe){var t=s.parent(e.iframe);if(t){s.setStyle(t,"");var n=t.getElementsByTagName("style")[0];n&&t.removeChild(n)}}}function i(e){var t;t=e&&"*"!==e?"string"==typeof e?[e]:e:l.status.getRenderedPositions();for(var n=0,i=t;n<i.length;n++){var s=i[n],d=a.findPosConfig(s);if(d){var c=l.status.getPositionStatus(s);"expanded"===c.busy&&u.collapse(c.iframe,d)}var f=l.status.getPositionStatus(s);r(f),o(f),l.status.setPositionNuked(s)}}t.__esModule=!0;var s=n(0),a=n(3),u=n(20),d=n(48),c=n(50),f=n(11),l=n(5);t.removeIframe=o,t.resetContainerStyles=r,t.nuke=i},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";t.__esModule=!0,t.POS_ID_AUTO_PREFIX="sf_pos"},function(e,t,n){"use strict";function o(e,t,n){var o=a.Config();return o&&(e.sf_ver=o.version),e.ck_o=u.isEnabled?1:0,e.flash_ver=i.getFlashVersion(),new s.PosMeta(e,t,n)}function r(e){var t={},n="",r={};return i.forEachProp(e,function(e,o){"object"==typeof o?(n=e,r=o):t[e]=o}),o(t,n,r)}t.__esModule=!0;var i=n(1),s=n(6),a=n(3),u=n(19);t.createPosMeta=o,t.fromInlineCode=r},function(e,t,n){"use strict";function o(e,t){var n=document.createElement("iframe");return l.setAttr(n,"frameborder","no"),l.setAttr(n,"scrolling","no"),l.setAttr(n,"allowtransparency","true"),l.setAttr(n,"hidefocus","true"),l.setAttr(n,"tabindex","-1"),l.setAttr(n,"marginwidth","0"),l.setAttr(n,"marginheight","0"),h.forEachProp(e,function(e,t){return l.setAttr(n,e,t)}),n}function r(e){b.removeIframe(S.status.getPositionStatus(e)),S.status.setPositionError(e),p.logError('Render timeout of position "'+e+'"')}function i(e){var t=v.Config();return setTimeout(function(){r(e)},1e3*t.to)}function s(e){S.status.setPositionLoaded(e)}function a(e){var t=e.id,n=e.html,r=e.meta,a=v.findPosConfig(e.id);b.nuke(e.id),S.status.setPositionReady(e);var u,d=a.w,c=a.h;if(!(u=a.dest instanceof Element||Boolean(a.dest.nodeName)?a.dest:document.getElementById(a.dest)))return void p.logError('Dest container for "'+t+'" no found. Render aborted.');var f=!1;if(!d||!c){var m=l.getRect(u);d=d||m.right-m.left||"100%",c=c||m.bottom-m.top||"100%",a.w=d,a.h=c,f="100%"===d||"100%"===c}l.setStyle(u,h.toCssString(y.initialWrapStyle(a)),!1);var _={id:t,html:n,pmGuid:h.guid(),geom:M.getGeom(u),hasFocus:"function"!=typeof document.hasFocus||document.hasFocus(),supports:a.supports,css:a.css,bg:a.bg,posMeta:r.getFullMeta(),target:a.tgt,basePath:a.basePath},x={name:g.encode(_),src:v.getRenderFileURL({"protected":a["protected"]})};a["protected"]&&(x.sandbox="allow-same-origin allow-popups allow-scripts allow-forms");var k=o(x);l.addEventListener(k,"load",function(){s(t),k.removeAttribute("name")}),E.postMessages.register(k,_.pmGuid,function(e){return C.messageDispatcher(t,k,e)}),P.geomUpdater.register(k),w.focusUpdater.register(k),l.appendChild(u,k),l.setStyle(k,h.toCssString(y.initialIframeStyle(a,f)),!1);var R=i(t);S.status.setPositionLoading(t,k,R)}function u(e){if(!v.isConfigReady())return void p.logError("Render called before Config was initialized");m.onDocumentReady(function(){var t=c.isArray(e)?e:[e],n=f.map(t,function(e){return e instanceof _.Position?e:new _.Position(e)});d.forEach(n,a)})}t.__esModule=!0;var d=n(15),c=n(55),f=n(56),l=n(0),p=n(2),h=n(1),g=n(10),m=n(4),v=n(3),y=n(20),w=n(48),M=n(49),P=n(50),C=n(57),b=n(21),_=n(18),E=n(11),S=n(5);t.createIframe=o,t.render=u},function(e,t,n){"use strict";t.__esModule=!0;var o=n(14),r=n(0),i=n(11),s=function(){function e(){var e=this;this.iframes=[],this.lastReportTime=-Infinity,this.reportScheduled=!1,this.lastReportedValue=null;var t=function(){return e.report()};r.addEventListener(window,"focus",t),r.addEventListener(window,"blur",t)}return e.prototype.register=function(e){this.iframes.push(e)},e.prototype.unregister=function(e){var t=o.indexOf(this.iframes,e);-1!==t&&this.iframes.splice(t,1)},e.prototype.report=function(){if(0!==this.iframes.length){for(var e=document.hasFocus(),t=0,n=this.iframes;t<n.length;t++){var o=n[t];i.postMessages.send(o,{type:"focus-updated",hasFocus:e})}this.lastReportTime=(new Date).getTime()}},e}();t.FocusUpdater=s,t.focusUpdater=new s},function(e,t,n){"use strict";function o(){var e=window.innerWidth,t=window.innerHeight,n=window.screenY||0,o=window.screenX||0;return{t:Math.round(n),l:Math.round(o),w:Math.round(e),h:Math.round(t),b:Math.round(n+t),r:Math.round(o+e)}}function r(e,t){var n=a.getRect(e),o=n.right-n.left,r=n.bottom-n.top,i={l:Math.max(n.left,0),r:Math.min(n.right,t.w),t:Math.max(n.top,0),b:Math.min(n.bottom,t.h)},s={w:Math.max(i.r-i.l,0),h:Math.max(i.b-i.t,0)};return{t:Math.round(n.top),l:Math.round(n.left),b:Math.round(n.bottom),r:Math.round(n.right),w:Math.round(o),h:Math.round(r),xiv:s.w/o,yiv:s.h/r,iv:s.w*s.h/(o*r),z:Number(a.getCurrentStyle(e).zIndex)||0}}function i(e,t){return{t:Math.max(0,t.t),l:Math.max(0,t.l),r:Math.max(0,e.w-t.l-t.w),b:Math.max(0,e.h-t.t-t.h),xs:0,ys:0}}function s(e){var t=o(),n=r(e,t);return{win:t,self:n,exp:i(t,n)}}t.__esModule=!0;var a=n(0);t.windowRect=o,t.selfRect=r,t.expansion=i,t.getGeom=s},function(e,t,n){"use strict";t.__esModule=!0;var o=n(14),r=n(0),i=n(49),s=n(11),a=function(){function e(){var e=this;this.iframes=[],this.lastRecalcTime=-Infinity,this.recalcScheduled=!1;var t=function(){return e.handlePotentialChange()};r.addEventListener(window,"scroll",t,{passive:!0}),r.addEventListener(window,"resize",t,{passive:!0})}return e.prototype.register=function(e){this.iframes.push(e)},e.prototype.unregister=function(e){var t=o.indexOf(this.iframes,e);-1!==t&&this.iframes.splice(t,1)},e.prototype.recalc=function(){if(0!==this.iframes.length){for(var e=0,t=this.iframes;e<t.length;e++){var n=t[e],o=r.parent(n);o&&s.postMessages.send(n,{type:"geom-updated",geom:i.getGeom(o)})}this.lastRecalcTime=(new Date).getTime(),this.recalcScheduled=!1}},e.prototype.handlePotentialChange=function(){var e=this;if(!this.recalcScheduled){var t=(new Date).getTime()-this.lastRecalcTime;t>=250?this.recalc():(setTimeout(function(){return e.recalc()},250-t),this.recalcScheduled=!0)}},e}();t.GeomUpdater=a,t.geomUpdater=new a},function(e,t,n){"use strict";t.__esModule=!0;var o=n(15),r=n(1),i=n(52),s=n(16),a=window;a.$sf=a.$sf||{},a.$sf.info={errs:[]},a.$sf.host=r.merge(a.$sf.host||{},i.host),a.$sf.host.conf&&(s.parseInlineConfig(a.$sf.host.conf),delete a.$sf.host.conf);var u=function(e){return setTimeout(e,0)};a.yaSafeFrameAsyncCallbacks&&o.forEach(a.yaSafeFrameAsyncCallbacks,u),a.yaSafeFrameAsyncCallbacks={push:u}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(16),r=n(3),i=n(21),s=n(17),a=n(18),u=n(46),d=n(47),c=n(5);t.host={render:d.render,nuke:i.nuke,Config:r.Config,PosConfig:s.PosConfig,PosMeta:u.createPosMeta,Position:a.Position,boot:o.boot,status:function(e){return c.status.getStatus(e)},get:function(e){return c.status.getPosition(e)}}},function(e,t,n){"use strict";function o(e){return r(e)}function r(e,t){var n=[];return s.forEachProp(e,function(e,o){var s,a=t?t+"["+e+"]":e;(s="object"==typeof o||Array.isArray(o)?r(o,a):i(a,o))&&n.push(s)}),n.join("&")}function i(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)}t.__esModule=!0;var s=n(1);t.setObjectToQueryString=o},function(e,t,n){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};t.__esModule=!0,t.setCookie=function(e,t,n,o){void 0===o&&(o={}),o.expires instanceof Date&&(o.expires=o.expires.toUTCString()),"undefined"==typeof o.path&&(o.path="/");var r="";for(var i in o)o[i]&&(r+="; "+i,!0!==o[i]&&(r+="="+o[i]));try{var s=encodeURIComponent(String(t))+"="+encodeURIComponent(String(n));return e.cookie=s+r}catch(a){return undefined}},t.getCookie=function(e,t){var n=[];try{n=e.cookie?e.cookie.split("; "):[]}catch(d){}for(var o,r=/(%[0-9A-Z]{2})+/g,i=0;i<n.length;i++){var s=n[i].split("="),a=s.slice(1).join("=");try{var u=s[0].replace(r,decodeURIComponent);if(a.replace(r,decodeURIComponent),t===u){o=decodeURIComponent(a);break}}catch(d){return undefined}}return o},t.deleteCookie=function(e,n,r){t.setCookie(e,n,"",o({},r,{expires:new Date(0)}))}},function(e,t,n){"use strict";t.__esModule=!0;var o=n(8),r=o.getNativeMethod(Array,"isArray"),i={};t.isArray=Boolean(r)?function(e){return r.call(Array,e)}:function(e){return"[object Array]"===i.toString.call(i,e)}},function(e,t,n){"use strict";t.__esModule=!0,t.map=function(e,t,n){for(var o=new Array(e.length),r=0;r<e.length;r++)o[r]=t.call(n,e[r],r,e);return o}},function(e,t,n){"use strict";function o(e,t,n){if("error"===n.type)for(var o=0,f=n.messages;o<f.length;o++){var l=f[o];i.notifyPosMsg(e,"error",l),r.logError('Error in "'+e+'":\n'+l)}if("expand-request"===n.type){var p=i.findPosConfig(e);if(!p)return void r.logError("Couldn't find config for position \""+e+'" while handling expand request');if(!p.supports[n.dim.push?"exp-push":"exp-ovr"])return r.logError('Expansion not allowed for position "'+e+'"'),void d.postMessages.send(t,{type:"error",causedByMethod:"expand",message:"not allowed"});var h=i.notifyBeforePosMsg(e,"expand",n.dim);if(h)return void d.postMessages.send(t,{type:"error",causedByMethod:"expand",message:"canceled"});c.status.setPositionExpanding(e),a.expand(t,p,n.dim),c.status.setPositionExpanded(e),d.postMessages.send(t,{type:"expanded"}),i.notifyPosMsg(e,"expand",n.dim)}if("collapse-request"===n.type){var p=i.findPosConfig(e);if(!p)return void r.logError("Couldn't find config for position \""+e+'" while handling collapse request');if("expanded"!==c.status.getPositionStatus(e).busy)return r.logError('Collapse impossible, position "'+e+"\" isn't expanded."),void d.postMessages.send(t,{type:"error",causedByMethod:"collapse",message:"not expanded"});var h=i.notifyBeforePosMsg(e,"collapse");if(h)return void d.postMessages.send(t,{type:"error",causedByMethod:"collapse",message:"canceled"});c.status.setPositionCollapsing(e),a.collapse(t,p),c.status.setPositionCollapsed(e),d.postMessages.send(t,{type:"collapsed"}),i.notifyPosMsg(e,"collapse")}if("nuke"===n.type&&(u.nuke(e),i.notifyPosMsg(e,"nuke")),"read-cookie-request"===n.type){var p=i.findPosConfig(e);if(!p)return void r.logError("Couldn't find config for position \""+e+'" while handling read cookie request');if(!p.supports["read-cookie"])return r.logError('Cookies read not allowed for position "'+e+'"'),void d.postMessages.send(t,{type:"error",causedByMethod:"read-cookie",message:"Cookies read not allowed"});var h=i.notifyBeforePosMsg(e,"read-cookie",n.name);if(h)return void d.postMessages.send(t,{type:"error",causedByMethod:"read-cookie",message:"canceled"});var g=s.read(n.name);d.postMessages.send(t,{type:"cookie-read",name:n.name,value:g}),i.notifyPosMsg(e,"read-cookie",n.name)}if("write-cookie-request"===n.type){var m="number"==typeof n.expires?new Date(n.expires):undefined,v={name:n.name,value:n.value,expires:m},p=i.findPosConfig(e);if(!p)return void r.logError("Couldn't find config for position \""+e+'" while handling write cookie request');if(!p.supports["write-cookie"])return r.logError('Cookies write not allowed for position "'+e+'"'),void d.postMessages.send(t,{type:"error",causedByMethod:"write-cookie",message:"Cookies write not allowed"});var h=i.notifyBeforePosMsg(e,"write-cookie",v);if(h)return void d.postMessages.send(t,{type:"error",causedByMethod:"write-cookie",message:"canceled"});s.write(v.name,v.value,v.expires),d.postMessages.send(t,{type:"cookie-written",name:v.name,value:v.value}),i.notifyPosMsg(e,"write-cookie",v)}}t.__esModule=!0;var r=n(2),i=n(3),s=n(19),a=n(20),u=n(21),d=n(11),c=n(5);t.messageDispatcher=o}]);