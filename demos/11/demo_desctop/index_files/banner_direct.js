!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="https://yastatic.net/pcode-bundles/",e(0)}([function(t,e,n){t.exports=n(75)},,function(t,e){"use strict";function n(t){var e=l[t];if(e)return e;var n=r(t);return l[t]=n,u({},n)}function r(t){f.href=t;var e=f.pathname||"";return"/"!==e.charAt(0)&&(e="/"+e),{href:f.href,protocol:f.protocol,host:f.host,hostname:f.hostname,port:f.port,pathname:e,search:f.search,hash:f.hash}}function i(t){for(var e={},n=t.replace(/^\?+/,""),r=n.split("&"),i=0;i<r.length;i++){var o=r[i].indexOf("="),a=void 0,s=void 0;if(o===-1?(a=r[i],s=""):(a=r[i].slice(0,o),s=r[i].slice(o+1)),a)try{e[a]=decodeURIComponent(s)}catch(t){e[a]=s}}return e}function o(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n+"="+encodeURIComponent(t[n]));return"?"+e.join("&")}function a(t,e,r){var a=n(t),s=i(a.search);s[e]=r;var c="443"===a.port?a.hostname:a.host;return a.protocol+"//"+c+a.pathname+o(s)+a.hash}function s(t,e){for(var n in e)e.hasOwnProperty(n)&&(t=a(t,n,e[n]));return t}function c(t){var e=r(t).pathname.split(".");return e.length>1?e[e.length-1]:""}var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0;var f=document.createElement("a"),l={};e.parseUrlUsingCache=n,e.parseUrl=r,e.parseQueryString=i,e.formatQueryString=o,e.addParamToUrl=a,e.addParamsToUrl=s,e.getFileExt=c},,,,,,function(t,e,n){t.exports=n(9)},function(t,e,n){var r;!function(i){function o(t){var e=d(t);if(g)for(var n,r=0;n=O[r++];)t.hasOwnProperty(n)&&e.push(n);return e}function a(t,e,n){for(var r,i,a=o(n),s=0,c=a.length;s<c;)"__self"!==(r=a[s++])&&(i=n[r],!v(i)||i.prototype&&i.prototype.__self||u&&!(i.toString().indexOf(".__base")>-1)?e[r]=i:e[r]=function(n,r){var i=t[n]?t[n]:"__constructor"===n?e.__self.__parent:y,o=function(){var t=this.__base;this.__base=o.__base;var e=r.apply(this,arguments);return this.__base=t,e};return o.__base=i,o}(r,i))}function s(t,e){for(var n,r=1;n=t[r++];)e?v(n)?c.self(e,n.prototype,n):c.self(e,n):e=v(n)?c(t[0],n.prototype,n):c(t[0],n);return e||t[0]}function c(){var t=arguments,e=_(t[0]),n=e||v(t[0]),r=n?e?s(t[0]):t[0]:f,i=t[n?1:0]||{},o=t[n?2:1],c=i.__constructor||n&&r.prototype&&r.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)}:n?function(){return r.apply(this,arguments)}:function(){};if(!n)return c.prototype=i,c.prototype.__self=c.prototype.constructor=c,p(c,o);p(c,r),c.__parent=r;var u=r.prototype,l=c.prototype=h(u);return l.__self=l.constructor=c,i&&a(u,l,i),o&&a(r,c,o),c}var u=function(){return"_"}.toString().indexOf("_")>-1,f=function(){},l=Object.prototype.hasOwnProperty,h=Object.create||function(t){var e=function(){};return e.prototype=t,new e},d=Object.keys||function(t){var e=[];for(var n in t)l.call(t,n)&&e.push(n);return e},p=function(t,e){for(var n in e)l.call(e,n)&&(t[n]=e[n]);return t},m=Object.prototype.toString,_=Array.isArray||function(t){return"[object Array]"===m.call(t)},v=function(t){return"[object Function]"===m.call(t)},y=function(){},g=!0,b={toString:""};for(var C in b)b.hasOwnProperty(C)&&(g=!1);var O=g?["toString","valueOf"]:null;c.self=function(){var t=arguments,e=_(t[0]),n=e?s(t[0],t[0][0]):t[0],r=t[1],i=t[2],o=n.prototype;return r&&a(o,o,r),i&&a(n,n,i),n};var x=!0;t.exports=c,x=!1,"object"==typeof modules&&"function"==typeof modules.define&&(modules.define("inherit",function(t){t(c)}),x=!1),r=function(t,e,n){n.exports=c}.call(e,n,e,t),!(void 0!==r&&(t.exports=r)),x=!1,x&&(i.inherit=c)}(this)},function(t,e){"use strict";t.exports=function(t){var e=document.documentElement,n=e.codeLoader;"function"==typeof n&&n(t)}},,,function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];return"string"==typeof e&&(t[d]=e),t[d]||""}function i(t,e){return t.querySelector(e)}function o(t){var e=t.document,n=e.baseURI;if("undefined"==typeof n){var r=i(e,"base");n=r?r.href:e.URL}return n}function a(t,e){for(var n=void 0,r=null;t&&1===t.nodeType;){if(n=t.getAttribute(e)){r=t;break}t=t.parentNode}return{element:r,value:n}}function s(t){if(t.currentScript)return t.currentScript;var e=t.getElementsByTagName("script");return e[e.length-1]}function c(t){var e=t.getBoundingClientRect(),n=t.ownerDocument,r=n.documentElement,i=n.defaultView||n.parentWindow;return{top:e.top+(i.pageYOffset||r.scrollTop)-(r.clientTop||0),left:e.left+(i.pageXOffset||r.scrollLeft)-(r.clientLeft||0)}}function u(t){var e=t.document,n="undefined"!=typeof t.pageXOffset,r="CSS1Compat"===(e.compatMode||"");return{left:n?t.pageXOffset:r?e.documentElement.scrollLeft:e.body.scrollLeft,top:n?t.pageYOffset:r?e.documentElement.scrollTop:e.body.scrollTop}}function f(t){for(;t.firstChild;)t.removeChild(t.firstChild)}var l=n(14),h=l.IS_IE8,d=h?"innerText":"textContent",p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.element,n=t.event,r=n.pageX,i=n.pageY,o=n.clientX,a=n.clientY,s="undefined"==typeof r?o:r,u="undefined"==typeof i?a:i,f=c(e),l=f.left,h=f.top,d={x:s-l,y:u-h},p=d.x,m=d.y;return{width:e.clientWidth,height:e.clientHeight,x:p,y:m}};t.exports={text:r,getBaseURI:o,pageOffset:u,elementOffset:c,elementByTag:i,closestElementWithAttr:a,getCurrentScript:s,getCursorPositionOnElement:p,removeChildren:f}},function(t,e,n){"use strict";function r(){var t=document.createElement("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&t.firstChild&&t.firstChild.namespaceURI)}function i(){var t=document.createElement("canvas");return Boolean(t&&t.getContext&&t.getContext("2d"))}function o(){var t=document.createElement("video");return Boolean(t&&t.canPlayType&&t.canPlayType("video/mp4"))}function a(t){var e=u.match(new RegExp(t+"/([\\d.]+)"));return e&&e[1]||"0"}function s(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}var c=n(15),u=(navigator||{}).userAgent||"",f=(navigator||{}).platform||"",l="undefined"!=typeof window.ontouchstart,h=c();t.exports={isAMP:Boolean(window.ampSeen),isSafeframe:Boolean(window.$sf&&window.$sf.ext),chromeVersion:a("Chrome"),firefoxVersion:a("Firefox"),ieVer:h,IS_DESKTOP:!l&&screen.width>=1024&&screen.height>=728,IS_IE8:8===h,isChrome:/Chrome/gi.test(u),isEdge:/Edge/gi.test(u),isOperaMini:/Opera Mini/gi.test(u),isFirefox:/Firefox/gi.test(u),isIe:Boolean(h),isIEMobile:/IEMobile|Nokia|Lumia/gi.test(u),isSupportCanvas:i(),isSupportMP4Video:o(),isSupportPassiveEvents:s(),isSVGSupported:r(),isTouch:l,isWebkit:/WebKit/gi.test(u),isWin:/Windows NT/gi.test(f),isYaBro:/YaBrowser/gi.test(u),operaVersion:a("Opera"),safariVersion:a("Safari"),yaBroVersion:a("YaBrowser")}},function(t,e){var n=function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);var n=t.indexOf("Trident/");if(n>0){var r=t.indexOf("rv:");return parseInt(t.substring(r+3,t.indexOf(".",r)),10)}var i=t.indexOf("Edge/");return i>0&&parseInt(t.substring(i+5,t.indexOf(".",i)),10)};t.exports=n},function(t,e){"use strict";t.exports=function(){}},,,function(t,e){"use strict";function n(t){(new Image).src=t}function r(t,e){!t||"string"!=typeof t||e&&s[t]||(s[t]=!0,n(t))}function i(t,e){"string"==typeof t&&0!==t.indexOf("%AWAPS")&&r(t,e)}function o(){return Math.round(65535*Math.random())}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o(),i=arguments[3];"string"==typeof t&&"string"==typeof e&&r(t.replace(e,n),i)}var s={};t.exports={report:r,awReport:i,reportRandom:a,randomSeed:o}},,,,,,,,,function(t,e){"use strict";e.__esModule=!0,e.FORMAT_STRING=0,e.FORMAT_INT=1,e.FORMAT_FLOAT=2,e.FORMAT_ENCODED=3,e.FORMAT_BASE64=4,e.FORMAT_ARRAY=5,e.FORMAT_LENGTH=6,e.FORMAT_BOOLEAN=7},,,,,,function(t,e){"use strict";function n(t){return"undefined"!=typeof f.style[t]}function r(t,e){return d.indexOf(t)===-1&&!(isNaN(e)||0===e)}function i(t){var e=[],n=void 0;for(n in t){var i=t[n];if(t.hasOwnProperty(n)&&"undefined"!=typeof i&&null!==i){var o="";r(n,i)&&(o+="px"),e.push(n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()+":"+i+o)}}return e.join(";")}function o(t,e){return e+(r(t,e)?"px":"")}function a(t){return("function"==typeof getComputedStyle?getComputedStyle(t,null):t.currentStyle)||{}}function s(t,e){var n=void 0;for(n in e)e.hasOwnProperty(n)&&"undefined"!=typeof e[n]&&(t.style[n]=e[n])}var c=["","webkit","moz","o","ms"],u={},f=document.createElement("div"),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u[t]||function(){for(var e=""+t[0].toUpperCase()+t.slice(1),n=0;n<c.length;n++){var r=c[n],i=r?""+r+e:t;if("undefined"!=typeof f.style[i])return u[t]=i}return u[t]=t}()},h={contains:function(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1},add:function(t,e){this.contains(t,e)||(t.className+=" "+e)},remove:function(t,e){this.contains(t,e)&&(t.className=(" "+t.className+" ").replace(" "+e+" "," ").replace(/^\s+|\s+$/g,""))},toggle:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.contains(t,e);n?this.add(t,e):this.remove(t,e)}},d=["opacity"],p="_CACHE_TRANSFORM_MATRIX_PROPERTY",m=function(t,e,n,r){var i=l("transform"),o=r&&t[p]||a(t)[i];if((!o||o.indexOf("none")>-1)&&(o="matrix(1, 0, 0, 1, 0, 0)"),o.indexOf("matrix")>-1){var s=o.slice(7,-1).split(",").map(function(t){return Number(t)});switch(e){case"scale":s[0]=n,s[3]=n;break;case"left":s[4]=n;break;case"top":s[5]=n;break;default:return!0}var c="matrix("+s.join(",")+")";c!==o&&(t[p]=c,t.style[i]=c)}},_=function(t){var e=a(t),n=t.clientWidth,r=t.clientHeight,i=parseFloat(e.paddingLeft),o=parseFloat(e.paddingRight),s=parseFloat(e.paddingTop),c=parseFloat(e.paddingBottom);return{width:n-i-o,height:r-s-c}};t.exports={addPixel:o,cssClass:h,cssText:i,getInnerSizeOfElement:_,getStyle:a,isPropExist:n,normalizeStyleProp:l,setStyles:s,setTransformMatrix:m}},,function(t,e,n){"use strict";function r(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};u[e]=u[e]||0,u[e]+=1;var o=t.document,f="script",l=o.createElement(f),h=a(o,f)||o.body||o.documentElement;l.src=e;for(var d in i)i.hasOwnProperty(d)&&l.setAttribute(d,i[d]);if(l.onload=l.onreadystatechange=function(){this.readyState&&"complete"!==this.readyState&&"loaded"!==this.readyState||(l.onload=l.onreadystatechange=null,u[e]=0,"function"==typeof n&&n())},l.onerror=function(){if(u[e]>c)throw new Error("loadScript: error of loading "+e+" after "+c);setTimeout(function(){return r(t,e,n,i)},s)},h&&h.parentNode)h.parentNode.insertBefore(l,h);else{if(!h||!h.appendChild)throw new Error("loadScript: there is no node to append script");h.appendChild(l)}}function i(t,e,n){var r=t.document,i="script",o=r.createElement(i),s=a(r,i)||r.body;o.text=e,s.parentNode.insertBefore(o,s),n()}var o=n(13),a=o.elementByTag,s=1e3,c=5,u={};t.exports={loadScript:r,executeScript:i}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(38),a=r(o),s=n(8),c=n(41),u=n(19),f=u.report,l=n(14),h=l.isAMP,d=n(14),p=d.isSafeframe,m=n(42),_=n(44),v=n(54),y=n(62),g=2e3,b=.5;t.exports=s(c,{__constructor:function(t,e,n){this.__base(t,e,n),this._initTracking()},destroy:function(){this._clearContainerStyles(),this._destroyVisibilityChecker(),this.__base()},show:function(){this._container&&(this._container.style.display="")},hide:function(){this._container&&(this._container.style.display="none")},_afterRender:function(){this._setStylesToContainer()},_processParams:function(t){var e=this._getValidationRules();t=i({},t);var n=m.getParamsError(e,t);if(n)throw this._triggerCallback("onError",{message:n,type:"processBundleParams"}),new Error("adfox#processBundleParams: "+n);return t=m.processParams(e,t)},_getValidationRules:function(){return{}},_initTracking:function(){if(this._params.trackingUrl)for(var t=this._params.trackingUrl.split("|"),e=0;e<t.length;e++)t[e].match(/adfox\.ru\/transparent\.gif$/)||f(t[e])},_triggerCallback:function(t,e){this.__base(t,e),"onRender"===t&&this._initVisibilityChecker()},_getVisibilityCheckerContainer:function(){return this._container},_getVisibilityCheckerPortion:function(){return b},_initVisibilityChecker:function(){var t=this;if(this._params.eventConfirmVisibility){var e=function(){return f(t._params.eventConfirmVisibility)},n=void 0;n=h?y:p?a.default:v,this._visibilityConfirmer=new _(this._getVisibilityCheckerContainer(),e,{delay:g,portion:this._getVisibilityCheckerPortion(),VisibilityChecker:n})}},_destroyVisibilityChecker:function(){this._visibilityConfirmer&&(this._visibilityConfirmer.stop(),this._visibilityConfirmer=null)},_setStylesToContainer:function(){this._params.styles&&(this._container.style.cssText=this._params.styles)},_clearContainerStyles:function(){this._container&&this._params.styles&&(this._container.style.cssText="")}})},function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};e.__esModule=!0;var i,o,a=n(39),s=n(40),c={portion:0,disableAutoStart:!1};"undefined"!=typeof document.webkitHidden?(i="webkitHidden",o="webkitvisibilitychange"):(i="hidden",o="visibilitychange");var u=function(){function t(t,e,n){void 0===n&&(n={}),this.element=t,this.callback=e,this.options=r({},c,n),this.options.disableAutoStart!==!0&&this.start()}return t.prototype.start=function(){var t=this;this.stop(),this.check(),window.$sf.ext.register(0,0,function(e){"geom-update"===e&&t.check()}),"undefined"!=typeof document.addEventListener&&"undefined"!=typeof document[i]&&(this.handleVisibilityChange=function(){return t.check()},a.addEventListener(document,o,this.handleVisibilityChange,!1))},t.prototype.stop=function(){window.$sf.ext.register(),this.handleVisibilityChange&&(a.removeEventListener(document,o,this.handleVisibilityChange),this.handleVisibilityChange=!1)},t.prototype.check=function(){var t=s.hasDimensions(this.element),e=this.options.portion,n=!document.hidden,r=window.$sf.ext.inViewPercentage()/100;this.callback(t&&r>=e&&n)},t}();e.default=u},function(t,e){"use strict";function n(t,e,n,r){void 0===r&&(r=!1),t.addEventListener(e,n,r)}function r(t,e,n){t.removeEventListener(e,n,!1)}e.__esModule=!0,e.addEventListener=n,e.removeEventListener=r},function(t,e){"use strict";function n(t){var e=t.getBoundingClientRect();if(e){var n=Math.abs(e.left-e.right),r=Math.abs(e.top-e.bottom);return n>0&&r>0}return!0}e.__esModule=!0,e.hasDimensions=n},function(t,e,n){"use strict";var r=n(8),i=n(16);t.exports=r({__constructor:function(t,e,n){this._isDestroyed=!1,this._destroyHandlers=[],this._win=t,this._doc=t.document,this._params=this._processParams(e),this._callbacks=n},renderTo:function(t){this._container=t,this._beforeRender(),this._render(),this._isDestroyed||this._afterRender()},destroy:function(){this._isDestroyed||(this._isDestroyed=!0,this._removeEvents())},_beforeRender:i,_render:i,_afterRender:i,_processParams:function(t){return t},_removeEvents:function(){var t=void 0;for(t=0;t<this._destroyHandlers.length;t++)this._destroyHandlers[t]();this._destroyHandlers=[]},_triggerCallback:function(t,e){this._callbacks&&this._callbacks[t]&&this._callbacks[t](e)}})},function(t,e,n){"use strict";function r(t,e){for(var n in t)if(t.hasOwnProperty(n)){var r=i(e,t[n],e[n],n);if(r)return r}return!1}function i(t,e,n,r){var i=e.required;if(i)if("boolean"==typeof i){if(o(n))return'param "'+r+'" is required';if(s(n)||a(n)&&n.length<1)return'param "'+r+"\" can't be empty"}else if(C(n,i,t))return'param "'+r+'" is required when '+i.whenParam+' is "'+t[i.whenParam]+'"';if(!o(n)){if(d(e)&&!a(n))return'param "'+r+'" must be a Array';if(u(e)&&!c(n))return'param "'+r+'" must be only "yes" or "no"';if(f(e)&&!m(n))return'param "'+r+'" must be a Number';if(l(e)&&!_(n))return'param "'+r+'" must be a Number';if(p(e)&&!v(n))return'param "'+r+'" must be a Length. Example: "9", "9px", "9%"';if(h(e)&&!y(n))return'param "'+r+'" encoded incorrect';if(g(e)&&!b(e,n))return'param "'+r+'" must contain only a special value'}return!1}function o(t){return"undefined"==typeof t}function a(t){return"[object Array]"===Object.prototype.toString.call(t)}function s(t){return""===t}function c(t){return"boolean"==typeof t||"yes"===t||"no"===t}function u(t){return t.format===w.FORMAT_BOOLEAN}function f(t){return t.format===w.FORMAT_INT}function l(t){return t.format===w.FORMAT_FLOAT}function h(t){return t.format===w.FORMAT_ENCODED}function d(t){return t.format===w.FORMAT_ARRAY}function p(t){return t.format===w.FORMAT_LENGTH}function m(t){return!isNaN(parseInt(t,10))}function _(t){return!isNaN(parseFloat(t))}function v(t){var e="undefined"==typeof t?"undefined":x(t),n="string"===e||"number"===e;return n&&(/^-?[\d]+\.?[\d]*(px|%)?$/.test(t.toString())||""===t)}function y(t){try{return decodeURIComponent(t),"string"==typeof t}catch(t){return!1}}function g(t){return Boolean(t.oneOf)}function b(t,e){for(var n=0;n<t.oneOf.length;n++)if(e===t.oneOf[n])return!0;return!1}function C(t,e,n){return!t&&e.hasOneOfTheseValues.indexOf(n[e.whenParam])!==-1}function O(t,e){var n=void 0;for(n in t)t.hasOwnProperty(n)&&("undefined"!=typeof e[n]?(t[n].format===w.FORMAT_BOOLEAN&&(e[n]="boolean"==typeof e[n]?e[n]:"yes"===e[n]),t[n].format===w.FORMAT_INT&&(e[n]=parseInt(e[n],10)),t[n].format===w.FORMAT_FLOAT&&(e[n]=parseFloat(e[n])),t[n].format===w.FORMAT_BASE64&&(e[n]=S(e[n])),t[n].format===w.FORMAT_ENCODED&&(e[n]=decodeURIComponent(e[n])),t[n].format===w.FORMAT_LENGTH&&e[n].toString().indexOf("%")===-1&&e[n].toString().indexOf("px")===-1&&""!==e[n]&&(e[n]+="px")):t[n].format===w.FORMAT_ARRAY&&(e[n]=[]));return e}var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w=n(28),A=n(43),S=A.decode;t.exports={processParams:O,getParamsError:r}},function(t,e){function n(t,e){e=e||1e6;var n,i,o,s,c,u,f,l="",h=0;for(t=r(t,3*e/4|0);h<t.length;)n=t.charCodeAt(h++),i=t.charCodeAt(h++),o=t.charCodeAt(h++),s=n>>2,c=(3&n)<<4|i>>4,u=(15&i)<<2|o>>6,f=63&o,isNaN(i)?u=f=64:isNaN(o)&&(f=64),l=l+a.charAt(s)+a.charAt(c)+a.charAt(u)+a.charAt(f);return l}function r(t,e){t=t.replace(/\r\n/g,"\n");for(var n,r="",i=0;i<t.length;i++){var o=t.charCodeAt(i);if(o<128?n=s(o):o>127&&o<2048?(n=s(o>>6|192),n+=s(63&o|128)):(n=s(o>>12|224),n+=s(o>>6&63|128),n+=s(63&o|128)),r.length+n.length>e)break;r+=n}return r}function i(t){var e,n,r,i,s,c,u,f="",l=0;for(t=t.replace(/[^A-Za-z0-9\-\_\=]/g,"");l<t.length;)i=a.indexOf(t.charAt(l++)),s=a.indexOf(t.charAt(l++)),c=a.indexOf(t.charAt(l++)),u=a.indexOf(t.charAt(l++)),e=i<<2|s>>4,n=(15&s)<<4|c>>2,r=(3&c)<<6|u,f+=String.fromCharCode(e),64!=c&&(f+=String.fromCharCode(n)),64!=u&&(f+=String.fromCharCode(r));return o(f)}function o(t){for(var e="",n=0,r=0,i=0;n<t.length;)if(r=t.charCodeAt(n),r<128)e+=String.fromCharCode(r),n++;else if(r>191&&r<224)i=t.charCodeAt(n+1),e+=String.fromCharCode((31&r)<<6|63&i),n+=2;else{i=t.charCodeAt(n+1);var o=t.charCodeAt(n+2);e+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o),n+=3}return e}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",s=String.fromCharCode;t.exports={encode:n,decode:i}},function(t,e,n){var r=n(45),i=n(50),o=n(51),a=n(52),s={delay:0},c=r(Object,{constructor:function(t,e,n){this._element=t,this._callback=e,this._confirmTimeoutId=null,this._options=n=i({},s,n),this._visibilityChecker=new this._options.VisibilityChecker(t,o(this._check,this),{disableAutoStart:!0,portion:n.portion}),n.disableAutoStart!==!0&&this.start()},start:function(){this._visibilityChecker.start()},stop:function(){this._cancelConfirmSchedule(),this._visibilityChecker.stop()},_check:function(t){t?this._scheduleConfirm():this._cancelConfirmSchedule()},_scheduleConfirm:function(){return 0===this._options.delay?void this.confirm():void(null===this._confirmTimeoutId&&(this._confirmTimeoutId=setTimeout(a("VisibilityConfirmer#confirm",this.confirm,this),this._options.delay)))},_cancelConfirmSchedule:function(){null!==this._confirmTimeoutId&&(clearTimeout(this._confirmTimeoutId),this._confirmTimeoutId=null)},confirm:function(){this._confirmed||(this._confirmed=!0,this.stop(),this._callback())}});t.exports=c},function(t,e,n){var r=n(46),i=n(50);t.exports=function(t,e){var n=e.constructor;e.hasOwnProperty("constructor")||(n=function(){n.__parent.apply(this,arguments)});var o=r(t.prototype);return o.constructor=n,n.__super=t.prototype,n.__parent=t,o.__self=n,n.prototype=i(o,e),n}},function(t,e,n){var r=n(47),i=n(49);t.exports=function(){return r(Object,"create")?Object.create:function(t,e){function n(){}if(n.prototype=t,i(e))for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);return new n}}()},function(t,e,n){var r=n(48);t.exports=function(t,e){var n=t[e];if(!r(n)){var i=n;try{delete t[e],n=t[e],t[e]=i}catch(t){}}return n}},function(t,e){t.exports=function(t){if(!t||!t.toString)return!1;var e=t.toString();return/\[native code\]/.test(e)||/\/\* source code not available \*\//.test(e)}},function(t,e){t.exports=function(t){var e=typeof t;return!!t&&("object"===e||"function"===e)}},function(t,e){t.exports=function(t){for(var e,n=1,r=arguments.length;n<r;n++)if(e=arguments[n])for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}},function(t,e){t.exports=function(t,e){var n=Array.prototype.slice.call(arguments,2);return function(){for(var r=[],i=0,o=arguments.length;i<o;i++)r[i]=n[i]||arguments[i];return t.apply(e,r)}}},function(t,e,n){function r(t,e,n,o){return function(){try{return e.apply(n||this,arguments)}catch(e){if(i(o)&&o(e),e.preventProtect===!0)throw e;r.log(e,t)}}}var i=n(53);r.log=function(t,e){console.log("LOG:"+e+":"+t)},r.setTimeout=function(t,e,n,i){return window.setTimeout(r("timeout",t,n,i),e)},t.exports=r},function(t,e){t.exports=function(t){return"[object Function]"==={}.toString.call(t)}},function(t,e,n){var r=n(55),i=n(59),o=n(52),a=n(50),s=n(51),c=n(45),u=300,f={interval:300,portion:0,disableAutoStart:!1},l=c(Object,{constructor:function(t,e,n){this._element=t,this._callback=e,this._options=a({},f,n),this._displayObserver=new r(s(this._check,this)),this._options.disableAutoStart!==!0&&this.start()},start:function(){this.stop(),this._element&&(this._firstTimeout=o.setTimeout(function(){this._displayObserver.observe(this._element)},u,this))},stop:function(){clearTimeout(this._firstTimeout),this._displayObserver.disconnect()},_check:function(t){var e=this._options.portion,n=t&&!i.isOverlaid(this._element)&&i.isInViewport(this._element,e);this._callback(n)}});t.exports=l},function(t,e,n){function r(t){this.element=t,this.observers=[]}function i(t){var e=t.element,n=o(e);n||(n=new r(e),g.push(n)),n.observers.push(t),a(n),g.length&&!v&&s()}function o(t){for(var e=0;e<g.length;e++){var n=g[e];if(n.element===t)return n}return null}function a(t){var e=t.element,n=m(e);d(t.observers.concat(),function(t){t.handler(n,e)})}function s(){v=setInterval(u,_)}function c(){clearInterval(v),v=null}function u(){d(g.concat(),a)}function f(t){var e=o(t.element);e&&(l(e.observers,t),e.observers.length||l(g,e),!g.length&&v&&c())}function l(t,e){var n=p(t,e);n>-1&&t.splice(n,1)}var h=n(45),d=n(56),p=n(57),m=n(58),_=300,v=null,y=h(Object,{constructor:function(t){this.handler=t},observe:function(t){return this.disconnect(),this.element=t,i(this),this},disconnect:function(){return f(this),this}}),g=[];t.exports=y},function(t,e){t.exports=function(t,e,n){for(var r=0,i=t.length;r<i;++r)e.call(n,t[r],r,t)}},function(t,e,n){var r=n(47);t.exports=function(){var t=r(Array.prototype,"indexOf");return t?function(e,n,r){return t.call(e,n,r)}:function(t,e,n){var r=t.length>>>0,i=Number(n)||0;for(i=i<0?Math.ceil(i):Math.floor(i),i<0&&(i+=r);i<r;i++)if(i in t&&t[i]===e)return i;return-1}}()},function(t,e){function n(t){var e=t.getBoundingClientRect();if(e){var n=Math.abs(e.left-e.right),r=Math.abs(e.top-e.bottom);return n>0&&r>0}return!0}t.exports=n},function(t,e,n){function r(t,e,n){return Math.max(Math.min(e,n)-Math.max(t,0),0)}function i(t,e){if(s.isOperaMini)return t.offsetWidth>0&&t.offsetHeight>0;var n=t.getBoundingClientRect(),i=n.right-n.left,o=n.bottom-n.top,c=0;if(i>0&&o>0){var u=a(),f=r(n.left,n.right,u.width),l=r(n.top,n.bottom,u.height);c=f*l/(i*o)}return c>=(e||Number.MIN_VALUE)}function o(t){if(!document.elementFromPoint||!t.contains||s.isOperaMini)return!1;var e=t.getBoundingClientRect(),n=t.clientWidth/2,r=t.clientHeight/2,i=e.left+n,o=e.top+r,a=document.elementFromPoint(i,o);return!!a&&(t!==a&&!t.contains(a))}var a=n(60),s=n(61);t.exports={isInViewport:i,isOverlaid:o}},function(t,e){function n(){var t=window,e=t.innerWidth,n=t.innerHeight;if(!e){var r=t.document.documentElement;e=r.clientWidth,n=r.clientHeight}return{width:e,height:n}}t.exports=n},function(t,e){var n=navigator,r=n.userAgent.toLowerCase(),i=r.indexOf("opera mini")>-1;t.exports={isOperaMini:i}},function(t,e,n){var r=n(45),i=n(50),o=n(52),a={portion:0,disableAutoStart:!1},s=r(Object,{constructor:function(t,e,n){this._unlisten=null,this._callback=e,this._options=i({},a,n),this._lastRatio=0,this._protectedCheck=o("AmpVisibilityChecker#_check",this._check,this),this._protectedIntersectionChange=o("AmpVisibilityChecker#_onIntersectionChange",this._onIntersectionChange,this),this._options.disableAutoStart!==!0&&this.start()},start:function(){this.stop(),this._unlisten=window.context.observeIntersection(this._protectedIntersectionChange),window.addEventListener("amp:visibilitychange",this._protectedCheck)},stop:function(){this._unlisten&&(this._unlisten(),this._unlisten=null),window.removeEventListener("amp:visibilitychange",this._protectedCheck)},_onIntersectionChange:function(t){t.length>0&&(this._lastRatio=t[t.length-1].intersectionRatio,this._check())},_check:function(){this._callback(!window.context.hidden&&this._options.portion<=this._lastRatio)}});t.exports=s},,,,,,,,,,,function(t,e){"use strict";var n=4294967295;t.exports=function(){return Math.floor(Math.random()*n)+1}},,function(t,e,n){"use strict";var r=n(76),i=n(10);i(r)},function(t,e,n){"use strict";function r(t){var e="yandexContextAsyncCallbacks";t[e]=t[e]||[],t[e].push(i),l(t,O?b:g,null,!0)}function i(){var t=C.length;if(t){for(var e=0;e<t;e++)C[e]();C.splice(0,t)}w=!0}function o(){return Boolean(window.Ya&&window.Ya.Context&&window.Ya.Context.AdvManager)}var a=n(28),s=n(77),c=n(8),u=n(37),f=n(36),l=f.loadScript,h=n(19),d=h.report,p=n(34),m=p.cssClass,_=n(14),v=_.isAMP,y=n(73),g="https://an.yandex.ru/system/context.js",b="https://d30s0lx1onfwyh.cloudfront.net/partner-code/loaders/context_rel.js",C=[],O=(0,s.isRelAdFox)(),x=!1,w=x;t.exports=c(u,{_getValidationRules:function(){return{blockId:{required:!0},dataBase64:{format:a.FORMAT_BASE64}}},_render:function(){v||this._renderDirect()},destroy:function(){this._destroyContent(),this.__base()},callOnRender:function(){d(this._params.eventSuccess),this._triggerCallback("onRender")},callOnError:function(){d(this._params.eventError),this._triggerCallback("onDestroy"),this._params.returnUrl?this._triggerCallback("onReset",{prepareCodeUrl:this._params.returnUrl}):this._triggerCallback("onError",{message:"AdvManager can't render ad",type:"adfoxBackend"})},_renderDirect:function(){var t=this;x||(x=!0,r(this._win));var e=this._createAdContainer();this._container.appendChild(e),w?this._showBanner(e):C.push(function(){return t._showBanner(e)})},_destroyContent:function(){this._container&&(this._container.innerHTML="")},_showBanner:function(t){var e=this;o()?Ya.Context.AdvManager.render({clickMacro:this._params.clickMacro,adfoxexp:this._params.experimentId,async:!0,blockId:this._params.blockId,data:this._params.data,impId:this._params.impId,videoCategoryId:this._params.videoCategoryId,horizontalAlign:!0,onRender:function(){return e.callOnRender()},pageNumber:y(),renderTo:t.id,statId:this._params.statId},function(){return e.callOnError()}):this.callOnError()},_processParams:function(t){var e=this.__base(t);if(e.dataBase64){var n=Function("return "+e.dataBase64);e.data=n()}return e.blockData&&(e.data=e.blockData),e},_createAdContainer:function(){var t=this._doc.createElement("div");return t.id="yandex_rtb_"+y(),m.add(t,"yandex_rtb_"+this._params.blockId),t}})},function(t,e,n){"use strict";function r(){return Boolean(i.default(o))}e.__esModule=!0;var i=n(78),o=/\/adfox\/loader_rel\.js$/gi;e.RE_LOADER_REL_ADFOX=o,e.isRelAdFox=r},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2);e.default=function(t){for(var e="",n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var o=(n[i]||{}).src,a=void 0===o?"":o;if(t.test(a)){e=r.parseUrlUsingCache(a).hostname;break}}return e}}]);