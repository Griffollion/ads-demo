!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,i){for(var a,u,s=0,c=[];s<r.length;s++)u=r[s],o[u]&&c.push.apply(c,o[u]),o[u]=0;for(a in i)e[a]=i[a];for(n&&n(r,i);c.length;)c.shift().call(null,t)};var r={},o={0:0};return t.e=function(e,n){if(0===o[e])return n.call(null,t);if(void 0!==o[e])o[e].push(n);else{o[e]=[n];var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+"bundles/"+({1:"adsdk.bundle",2:"inpage.bundle",3:"banner_ad.bundle",4:"video_player.bundle",5:"ad_loader.bundle"}[e]||e)+".js",r.appendChild(i)}},t.m=e,t.c=r,t.p="",t(0)}([function(e,t,n){var r,o;r=[n,t,n(1)],o=function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.deployObject(n.ya,"ya")}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o,i="undefined"==typeof Promise?n(2).Promise:Promise;r=[n,t,n(5),n(6),n(19)],o=function(e,t,r,o){"use strict";function a(e,r){var i=e.module,a=c[i];if(a)r(a);else switch(i){case"AdSDK":n.e(1,function(e){var t=n(20);c[i]=t,r(t)});break;case"InPage":n.e(2,function(e){var t=n(28);c[i]=t,r(t)});break;case"BannerAd":n.e(3,function(e){var t=n(31);c[i]=t,r(t)});break;case"VideoPlayer":n.e(4,function(a){var u=n(33);c[i]=u;var s=e.options,f=void 0===s?{}:s,l=f.playerVersion,d=void 0===l?t.ENVIRONMENT.VIDEO_PLAYER_VERSION:l;o.loadScript("//"+t.ENVIRONMENT.DOMAIN+"/yandex-html5-video-player-bundles/"+("1.0-"+d+"/video-player-html/video-player-html.min.js")).then(function(){r(u)})});break;case"AdLoader":n.e(5,function(e){var t=n(21);c[i]=t,r(t)});break;default:throw new Error("AdSDK JS Error: Unexpected loader ["+i+"]")}}function u(e,t){for(var n=t.split("."),r=window,o=0;o<n.length-1;o++)r=r[n[o]];var i=n[n.length-1];if(void 0===r[i])r[i]=e;else if("object"==typeof r[i])for(var o in e)e.hasOwnProperty(o)&&u(e[o],t+"."+o)}Object.defineProperty(t,"__esModule",{value:!0}),t.AdType={PREROLL:"preroll",MIDROLL:"midroll",PAUSEROLL:"pauseroll",OVERLAY:"overlay",POSTROLL:"postroll"},t.AdConfigParams={VAST_URL:"vastUrl",VAST:"vast",AD_FOX_URL:"adFoxUrl",AD_FOX_URL_VAST:"adFoxUrlVast",PARTNER_ID:"partnerId",CATEGORY:"category",TAGS_LIST:"tagsList",CHARSET:"charset",VIDEO_CONTENT_ID:"videoContentId",VIDEO_CONTENT_NAME:"videoContentName",VIDEO_PUBLISHER_ID:"videoPublisherId",VIDEO_PUBLISHER_NAME:"videoPublisherName",VIDEO_GENRE_ID:"videoGenreId",VIDEO_GENRE_NAME:"videoGenreName",EXT_PARAM:"extParam",PLAYER_INFO:"playerInfo",DURATION:"duration",IMPRESSION_TRACK_OFFSET:"impressionOffset"},t.TrackingEventType={ERROR:"error",IMPRESSION:"impression",CREATIVE_VIEW:"creativeView",START:"start",FIRST_QUARTILE:"firstQuartile",MIDPOINT:"midpoint",THIRD_QUARTILE:"thirdQuartile",COMPLETE:"complete",MUTE:"mute",UNMUTE:"unmute",PAUSE:"pause",RESUME:"resume",FULLSCREEN:"fullscreen",EXIT_FULLSCREEN:"exitFullscreen",CLOSE:"close",SKIP:"skip",CLICK_THROUGH:"clickThrough",PROGRESS:"progress",REWIND:"rewind",VIEWABLE:"viewable",DWELL:"dwell",EXPAND:"expand",COLLAPSE:"collapse",ACCEPT_INVITATION:"acceptInvitation"};var s=function(){function e(){function t(e){for(var t,n=e[0][0],r=0;r<e.length;r++){if(t=e[r],i<=n)return t[1];n+=e[r][0]}return e[0][1]}var o=this;this.SID=r.generateHexadecimalString(64),this.YANDEX_METRIKA_COUNTER_ID="39370120",this.VIDEO_PLAYER_VERSION="140",this.CURRENT_SCRIPT_SRC=document.currentScript?document.currentScript.src:function(){var e=document.getElementsByTagName("script");return e[e.length-1].src}();var i=Math.random(),a={loader:452,bundles:[[1,452]]};this.LOADER_VERSION=a.loader,this.BUNDLES_VERSION=t(a.bundles),this.SDK_VERSION="1.0-"+this.BUNDLES_VERSION,this.SDK_FULL_VERSION=this.SDK_VERSION,this.DEV_MODE=!1,this.BUNDLES_PATH="",this.DOMAIN=this.DEV_MODE?e.DOMAINS.TEST[0]:e.DOMAINS.PROD[0],n.p=function(){return o.BUNDLES_PATH?o.BUNDLES_PATH:"https://"+o.getActualDomain()+"/awaps-ad-sdk-js-bundles/"+o.SDK_VERSION+"/"}()}return e.prototype.getActualDomain=function(){var t=this;return e.DOMAINS.TEST.some(function(e){return t.CURRENT_SCRIPT_SRC.indexOf(e)!==-1})?e.DOMAINS.TEST[0]:this.DOMAIN},e.prototype.getVersioningURL=function(){return this.DEV_MODE?("1.0-"+this.BUNDLES_VERSION).split("-")[0].split(".").join("_"):("1.0-"+this.BUNDLES_VERSION).split("-")[0].split(".").join("_")+"/v-"+this.SDK_VERSION},e.DOMAINS={TEST:["betastatic.yastatic.net","betastatic.yandex.net"],PROD:["yastatic.net"]},e}();t.ENVIRONMENT=new s;var c={};t["default"]=a,t.ya={videoAd:{AdConfigParams:t.AdConfigParams,loadModule:function(e,t){return void 0===t&&(t={}),new i(function(n){a({module:e,options:t},n)})},initVideoNode:function(e,t,n,r){a({module:"AdSDK"},function(o){o.initVideoNode(e,t,n,r)})},skipTokens:[],flashPlayerCallbacks:{}},mediaAd:{util:{setDefaultUrlScheme:function(e){var n=["http","https"];if(n.indexOf(e)<0)throw new Error("AdSDK setDefaultUrlScheme error. Allowed: "+n.join(", "));t.ya.mediaAd.util.URL_SCHEME=e},URL_SCHEME:null},DOMAIN:t.ENVIRONMENT.DOMAIN,SDK_VERSION:t.ENVIRONMENT.SDK_VERSION,AdType:t.AdType,TrackingEventType:t.TrackingEventType,AdConfigParams:t.AdConfigParams,bannerAd:{initVideo:function(e,t,n){a({module:"BannerAd"},function(r){r.initVideo(e,t,n)})}},inPage:{addInPageVideo:function(e,t,n){a({module:"InPage"},function(r){r.addInPageVideo(e,t,n)})}},initForVideoNode:function(e,t,n,r,o){a({module:"AdSDK"},function(i){i.initForVideoNode(e,t,n,r,o)})},initAdDisplay:function(e,t,n,r){a({module:"AdSDK"},function(o){o.initAdDisplay(e,t,n,r)})},initPlacement:function(e,t,n){a({module:"AdSDK"},function(r){r.initPlacement(e,t,n)})}},video:{addVideoPlayer:function(e,t,n,r){a({module:"VideoPlayer"},function(o){o.addVideoPlayer(e,t,n,r)})}}},t.deployObject=u}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){(function(t,r){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!function(t,n){e.exports=n()}(this,function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function o(e){return"function"==typeof e}function i(e){J=e}function a(e){q=e}function u(){return function(){return t.nextTick(d)}}function s(){return"undefined"!=typeof G?function(){G(d)}:l()}function c(){var e=0,t=new Z(d),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function f(){var e=new MessageChannel;return e.port1.onmessage=d,function(){return e.port2.postMessage(0)}}function l(){var e=setTimeout;return function(){return e(d,1)}}function d(){for(var e=0;e<$;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}$=0}function p(){try{var e=n(4);return G=e.runOnLoop||e.runOnContext,s()}catch(t){return l()}}function h(e,t){var n=arguments,r=this,o=new this.constructor(m);void 0===o[oe]&&V(o);var i=r._state;return i?!function(){var e=n[i-1];q(function(){return L(i,o,e,r._result)})}():P(r,o,e,t),o}function v(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(m);return w(n,e),n}function m(){}function y(){return new TypeError("You cannot resolve a promise with itself")}function E(){return new TypeError("A promises callback cannot return that same promise.")}function _(e){try{return e.then}catch(t){return se.error=t,se}}function g(e,t,n,r){try{e.call(t,n,r)}catch(o){return o}}function S(e,t,n){q(function(e){var r=!1,o=g(n,t,function(n){r||(r=!0,t!==n?w(e,n):I(e,n))},function(t){r||(r=!0,N(e,t))},"Settle: "+(e._label||" unknown promise"));!r&&o&&(r=!0,N(e,o))},e)}function O(e,t){t._state===ae?I(e,t._result):t._state===ue?N(e,t._result):P(t,void 0,function(t){return w(e,t)},function(t){return N(e,t)})}function T(e,t,n){t.constructor===e.constructor&&n===h&&t.constructor.resolve===v?O(e,t):n===se?(N(e,se.error),se.error=null):void 0===n?I(e,t):o(n)?S(e,t,n):I(e,t)}function w(t,n){t===n?N(t,y()):e(n)?T(t,n,_(n)):I(t,n)}function A(e){e._onerror&&e._onerror(e._result),b(e)}function I(e,t){e._state===ie&&(e._result=t,e._state=ae,0!==e._subscribers.length&&q(b,e))}function N(e,t){e._state===ie&&(e._state=ue,e._result=t,q(A,e))}function P(e,t,n,r){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+ae]=n,o[i+ue]=r,0===i&&e._state&&q(b,e)}function b(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,o=void 0,i=e._result,a=0;a<t.length;a+=3)r=t[a],o=t[a+n],r?L(n,r,o,i):o(i);e._subscribers.length=0}}function R(){this.error=null}function D(e,t){try{return e(t)}catch(n){return ce.error=n,ce}}function L(e,t,n,r){var i=o(n),a=void 0,u=void 0,s=void 0,c=void 0;if(i){if(a=D(n,r),a===ce?(c=!0,u=a.error,a.error=null):s=!0,t===a)return void N(t,E())}else a=r,s=!0;t._state!==ie||(i&&s?w(t,a):c?N(t,u):e===ae?I(t,a):e===ue&&N(t,a))}function x(e,t){try{t(function(t){w(e,t)},function(t){N(e,t)})}catch(n){N(e,n)}}function M(){return fe++}function V(e){e[oe]=fe++,e._state=void 0,e._result=void 0,e._subscribers=[]}function C(e,t){this._instanceConstructor=e,this.promise=new e(m),this.promise[oe]||V(this.promise),X(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?I(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&I(this.promise,this._result))):N(this.promise,U())}function U(){return new Error("Array Methods must be provided an Array")}function j(e){return new C(this,e).promise}function k(e){var t=this;return new t(X(e)?function(n,r){for(var o=e.length,i=0;i<o;i++)t.resolve(e[i]).then(n,r)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function F(e){var t=this,n=new t(m);return N(n,e),n}function K(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function H(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function B(e){this[oe]=M(),this._result=this._state=void 0,this._subscribers=[],m!==e&&("function"!=typeof e&&K(),this instanceof B?x(this,e):H())}function Y(){var e=void 0;if("undefined"!=typeof r)e=r;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=e.Promise;if(n){var o=null;try{o=Object.prototype.toString.call(n.resolve())}catch(t){}if("[object Promise]"===o&&!n.cast)return}e.Promise=B}var W=void 0;W=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var X=W,$=0,G=void 0,J=void 0,q=function(e,t){ne[$]=e,ne[$+1]=t,$+=2,2===$&&(J?J(d):re())},Q="undefined"!=typeof window?window:void 0,z=Q||{},Z=z.MutationObserver||z.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),re=void 0;re=ee?u():Z?c():te?f():void 0===Q?p():l();var oe=Math.random().toString(36).substring(16),ie=void 0,ae=1,ue=2,se=new R,ce=new R,fe=0;return C.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ie&&n<e;n++)this._eachEntry(t[n],n)},C.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===v){var o=_(e);if(o===h&&e._state!==ie)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===B){var i=new n(m);T(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},C.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===ie&&(this._remaining--,e===ue?N(r,n):this._result[t]=n),0===this._remaining&&I(r,this._result)},C.prototype._willSettleAt=function(e,t){var n=this;P(e,void 0,function(e){return n._settledAt(ae,t,e)},function(e){return n._settledAt(ue,t,e)})},B.all=j,B.race=k,B.resolve=v,B.reject=F,B._setScheduler=i,B._setAsap=a,B._asap=q,B.prototype={constructor:B,then:h,"catch":function(e){return this.then(null,e)}},B.polyfill=Y,B.Promise=B,B})}).call(t,n(3),function(){return this}())},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){v&&p&&(v=!1,p.length?h=p.concat(h):m=-1,h.length&&u())}function u(){if(!v){var e=o(a);v=!0;for(var t=h.length;t;){for(p=h,h=[];++m<t;)p&&p[m].run();m=-1,t=h.length}p=null,v=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var f,l,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var p,h=[],v=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||v||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){},function(e,t,n){var r,o;r=[n,t],o=function(e,t){"use strict";function n(e){for(var t="",n=0;n<e;n++)t+=(16*Math.random()|0).toString(16);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.generateHexadecimalString=n}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o,i="undefined"==typeof Promise?n(2).Promise:Promise,a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();r=[n,t,n(1),n(7),n(16),n(17)],o=function(e,t,n,r,o,u){"use strict";function s(e,t){return void 0===t&&(t=""),u.isTrueYandexDomain(e)?o.addUrlParams(e,{"video-api-version":"js:"+n.ENVIRONMENT.SDK_FULL_VERSION+(t?":"+t:"")}):e}function c(e){return"//"===e.trim().substr(0,2)&&"undefined"!=typeof ya&&ya.mediaAd&&ya.mediaAd.util&&ya.mediaAd.util.URL_SCHEME&&(e=ya.mediaAd.util.URL_SCHEME+":"+e),e}function f(e,t,n,r){return void 0===r&&(r=!0),new i(function(i,a){"https:"===window.location.protocol&&(e=o.setProtocolToUrl(e,"https:"));var u=new XMLHttpRequest;u.open("GET",c(e)),"number"==typeof n&&setTimeout(function(){var e=new m("HTTP timeout error");e.isTimeoutError=!0,a(e)},n),u.withCredentials=r,u.onerror=function(t){a(new Error("XHR Error["+u.status+"]["+u.statusText+"]["+e+"]"))},u.onreadystatechange=function(){if(4===u.readyState&&0!==u.status)if(200===u.status)i(u.responseXML);else{var t=new Error(u.statusText);t.id=u.status,t.message="["+t.message+"]["+u.status+"]["+e+"]",a(t)}};try{u.send(t)}catch(s){s.message="["+s.message+"]["+e+"]",a(s)}})}function l(e){return{url:e,promise:new i(function(t){var n=new Image;n.onload=function(){return t(!0)},n.onerror=function(){return t(!1)},n.src=c(s(e))})}}function d(e){return Array.isArray(e)?e.map(l):[]}function p(e,t){void 0===t&&(t=[]),t.push(c(v));var n=e&&e.hasOwnProperty("id")?String(e.id):"0",i={errcode:n,subsection:n};return e&&e.message&&(i.errstring=e.message),e&&e.lineNumber&&(i.line=String(e.lineNumber)),e&&e.columnNumber&&(i.col=String(e.columnNumber)),e&&e.stack&&(i.stack=e.stack.substr(0,512)),r.pushErrorToStatistics(e),d(t.map(function(e){return u.isTrueYandexDomain(e)?o.addUrlParams(e,i).split("video-api-version").join("supstitute-api-version"):e}))}function h(e,t){var n=c(e);return new i(function(r,o){t&&setTimeout(function(){return o(new Error("Script Loading Error: loading timeout: "+t/1e3+"s : "+e))},t);var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.onload=r,i.onerror=function(){return o(new Error("Script Loading Error: "+n))},i.src=n,document.head.appendChild(i)})}Object.defineProperty(t,"__esModule",{value:!0});var v="//awaps.yandex.ru/65/218/0.gif";t.appendVersion=s,t.fixUrlSheme=c;var m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t}(Error);t.load=f,t.knock=l,t.knockEach=d,t.trackError=p,t.loadScript=h}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o;r=[n,t,n(8)],o=function(e,t,n){"use strict";function r(e,t){void 0===t&&(t="default");var r=e||new Error("Error object is not defined"),o=r.url,i=r.line,a=r.col;return n.pushToStatistics({event:"error",errorDescription:t},{message:r.message,code:r.code||0,details:r.details,stack:r.stack?r.stack:(o||"?")+":"+(i||"?")+":"+(a||"?")})}Object.defineProperty(t,"__esModule",{value:!0}),t.pushErrorToStatistics=r}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o,i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};r=[n,t,n(9),n(12),n(1),n(14),n(15)],o=function(e,t,n,r,o,a,u){"use strict";function s(e,t){var s="string"==typeof e?{event:e}:e,c=n.getTopLocationData(document),f=c.location,l=c.referrer;return u.pushToLogs({AdSDKJS:i({},s,{data:t,sid:o.ENVIRONMENT.SID,version:o.ENVIRONMENT.SDK_VERSION,timestamp:Date.now(),location:a.getWindowLocation(window),topLocation:f,referrer:window.document.referrer,topReferrer:l,userAgent:window.navigator.userAgent,currentScriptSrc:o.ENVIRONMENT.CURRENT_SCRIPT_SRC,secureIFrame:r.isInSecureIFrame})})}Object.defineProperty(t,"__esModule",{value:!0}),t.pushToStatistics=s}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o;r=[n,t,n(10)],o=function(e,t,n){"use strict";function r(e){var t=n.getParentLocationsData(e),r="",o="";return t.reverse().forEach(function(e){var t=e.location,n=e.referrer;r=r||t,o=o||n}),{location:r,referrer:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.getTopLocationData=r}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o;r=[n,t,n(11)],o=function(e,t,n){"use strict";function r(e){var t=n.getParentFriendlyIFrames(e.documentElement).map(function(e){return e.ownerDocument});return t.unshift(e),t.map(function(e){return{location:e.defaultView.location.toString(),referrer:e.referrer}})}Object.defineProperty(t,"__esModule",{value:!0}),t.getParentLocationsData=r}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o;r=[n,t],o=function(e,t){"use strict";function n(e){for(var t=[],n=e;;)try{if(n=n.ownerDocument.defaultView.frameElement,!n)return t;t.push(n)}catch(r){return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.getParentFriendlyIFrames=n}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o;r=[n,t,n(13)],o=function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInSecureIFrame=n.isInSecureIFrame()}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o;r=[n,t,n(11)],o=function(e,t,n){"use strict";function r(){var e=n.getParentFriendlyIFrames(document.documentElement).map(function(e){return e.ownerDocument}),t=e.length,r=t?e[t-1]:document,o=r.defaultView;return o.self!==o.parent}Object.defineProperty(t,"__esModule",{value:!0}),t.isInSecureIFrame=r}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o;r=[n,t],o=function(e,t){"use strict";function n(e){var t=e.location;return t?t.toString():""}Object.defineProperty(t,"__esModule",{value:!0}),t.getWindowLocation=n}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o,i="undefined"==typeof Promise?n(2).Promise:Promise;r=[n,t],o=function(e,t){"use strict";function n(e){return new i(function(t){var n=new XMLHttpRequest;n.open("POST",r,!0),n.onreadystatechange=function(){4===n.readyState&&t(200===n.status?!0:!1)},n.onerror=function(){t(!1)},n.send(JSON.stringify(e))})}Object.defineProperty(t,"__esModule",{value:!0});var r="https://an.yandex.ru/jstracer";t.pushToLogs=n}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o;r=[n,t],o=function(e,t){"use strict";function n(e){c.href=e;var t=c.pathname||"";return"/"!==t.charAt(0)&&(t="/"+t),{href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:c.port,pathname:t,search:c.search,hash:c.hash}}function r(e){return c.href=e,c.hostname}function o(e){return 0===e.indexOf("http://")||0===e.indexOf("https://")||0===e.indexOf("//")}function i(e,t,n){c.href=e,void 0===n&&(n="");var r=encodeURIComponent(t)+"="+encodeURIComponent(n);return c.search=c.search?c.search+"&"+r:"?"+r,c.href}function a(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];"undefined"!=typeof r&&(e=i(e,n,r))}return e}function u(e,t){c.href=e;var n=c.search.substring(1).split("&");for(var r in n)if(n.hasOwnProperty(r)){var o=n[r].split("="),i=o[0],a=o[1];if(i===t)return a?decodeURIComponent(a):""}return null}function s(e,t){if(f.indexOf(t)===-1)throw new Error("setProtocolToUrl Error: Unsupported protocol: "+t);return c.href=e,c.protocol=t,c.href}Object.defineProperty(t,"__esModule",{value:!0});var c=document.createElement("a");t.parseUrl=n,t.getDomainFromUrl=r,t.isAbsoluteUrl=o,t.addUrlParams=a,t.getParamFromUrl=u;var f=["http:","https:"];t.setProtocolToUrl=s}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o;r=[n,t,n(1),n(18),n(6),n(16)],o=function(e,t,n,r,o,i){"use strict";function a(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];n.ENVIRONMENT.DEV_MODE&&console&&console.log&&console.log.apply(console,[e].concat(t))}function u(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];n.ENVIRONMENT.DEV_MODE&&console&&console.error&&console.error.apply(console,[e].concat(t))}function s(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e)if("function"==typeof e)e.apply(void 0,t);else if(e&&e.hasOwnProperty("length")){var r=e;r.forEach(function(e){return e.apply(void 0,t)})}}function c(e,t){return t===e.substring(e.length-t.length)}function f(e){return l(e,!0)}function l(e,t){if(void 0===t&&(t=!1),!e)return!1;var n=i.getDomainFromUrl(e),r=t?M:M.concat(V);return!(!n||0===n.length)&&r.some(function(e){return c(n,e)})}function d(e){return c(i.getDomainFromUrl(e),"adfox.ru")}function p(e,t,n,r){var i=document.createElement("video");return i.id="yaVideoPlayer_"+Math.floor(1e6*Math.random()),i.setAttribute("x-webkit-airplay","allow"),Array.isArray(t)?t.forEach(function(e){var t=document.createElement("source");t.src=o.fixUrlSheme(e.src),t.type=e.type,i.appendChild(t)}):t&&(i.src=o.fixUrlSheme(t)),n&&(i.poster=n),i.autoplay=Boolean(r),E()||(i.preload=r?"auto":"none"),e.firstChild?e.insertBefore(i,e.firstChild):e.appendChild(i),i}function h(){return navigator.userAgent.toLowerCase().indexOf("iphone")>-1}function v(){return/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)}function m(){return navigator.platform.indexOf("iPad")>-1}function y(){return navigator.userAgent.toLowerCase().indexOf("android")>-1}function E(){var e=navigator.userAgent.toLowerCase();return e.indexOf("iphone")>-1||e.indexOf("ipad")>-1||e.indexOf("ipod")>-1}function _(){return E()&&7===S()}function g(){return E()&&S()<=9}function S(){if(/iP(hone|od|ad)/.test(navigator.platform)){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return e?parseInt(e[1],10):-1}return-1}function O(e){return"string"!=typeof e?NaN:e.split(":").reverse().reduce(function(e,t,n){return e+parseFloat(t)*Math.pow(60,n)},0)}function T(e){var t=Math.floor(e/60/60),n=Math.floor((e-60*t*60)/60),r=e-60*t*60-60*n,o=function(e,t){return void 0===t&&(t=0),e.toFixed(t).split(".").map(function(e,t){return 0!==t?e:1===e.length?"0"+e:e}).join(".")};return[o(t),o(n),o(r,3)].join(":")}function w(e,t){var n=document.createElement("div");return n.className=e,t&&(n.innerHTML=t),n}function A(e,t,n,r){var o=w(e,n);return o.addEventListener("click",t),r&&r.appendChild(o),o}function I(e){return"string"==typeof e?document.getElementById(e):e}function N(){var e;try{e=top.location.href}catch(t){e=location.href}return e}function P(){var e=document.querySelector("style[data-yamediaad]");if(!e&&n.ENVIRONMENT.DEFAULT_CSS){var t=document.createElement("style");t.setAttribute("data-yamediaad",""),t.innerHTML=n.ENVIRONMENT.DEFAULT_CSS;var r=document.querySelector("head");r&&r.appendChild(t)}}function b(e,t){var n=t.split("."),r=e;for(var o in n)if(n.hasOwnProperty(o)){if(!r.hasOwnProperty(n[o]))return"$$"+t+"$$";var i=r[n[o]];if("string"==typeof i)return i;r=i}return"$$"+t+"$$"}function R(e,t){return e.split("$$").map(function(e,n){return n%2!==0?b(t,e):e}).join("")}function D(e,t){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n])}function L(e){var t=new r["default"],n=function(){return t.trigger(!0)},o=function(){return t.trigger(!1)};return e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",o),{signal:t,unsubscribe:function(){e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",o)}}}function x(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce(function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e})}Object.defineProperty(t,"__esModule",{value:!0});var M=["yandex.ru","yandex.com","yandex.net","yandex.com.tr","yandex.ua","yandex.by","yandex.kz","yastatic.net","yandex.st","yandex-team.ru","yandex-team.com","yandex-team.com.ua","yandex-team.net.ua","yandex-team.com.tr","ya.ru"],V=["kinopoisk.ru","kinopoisk.ua","kinopoisk.by","kinopoisk.tel","vidigital.ru","tns-counter.ru","adfox.ru"];t.log=a,t.logError=u,t.fireCallback=s,t.endsWith=c,t.isTrueYandexDomain=f,t.isYandexDomain=l,t.isAdFoxDomain=d,t.createVideoNode=p,t.isIPhone=h,t.isIOSWebView=v,t.isIPad=m,t.isAndroid=y,t.isIOS=E,t.isIOS7=_,t.isIOS9OrLess=g,t.getIOSVersion=S,t.parseVASTTime=O,t.toVastTime=T,t.createDiv=w,t.createControl=A,t.getElement=I,t.getReferrer=N,t.addBuiltinSkin=P,t.replaceStringWith=R,t.applyStyles=D,t.createHoverE=L,t.merge=x}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t,n){var r,o,i="undefined"==typeof Promise?n(2).Promise:Promise;r=[n,t],o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.on=[],this.once=[]}return e.prototype.add=function(t){t instanceof e?this.on.push(function(e){return t.trigger(e)}):this.on.push(t)},e.prototype.addOne=function(t){t instanceof e?this.once.push(function(e){return t.trigger(e)}):this.once.push(t)},e.prototype.promise=function(){var e=this;return new i(function(t){return e.addOne(t)})},e.prototype.remove=function(e){this.on=this.on.filter(function(t){return t!==e}),this.once=this.once.filter(function(t){return t!==e})},e.prototype.trigger=function(e){this.triggerECallbacks(this.on,e),this.triggerECallbacks(this.once,e),this.once=[]},e.prototype.removeAll=function(){this.on=[],this.once=[]},e.prototype.triggerECallbacks=function(e,t){for(var n in e)e.hasOwnProperty(n)&&e[n](t)},e}();t["default"]=n}.apply(t,r),!(void 0!==o&&(e.exports=o))},function(e,t){!function(){Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),r=n.length>>>0,o=arguments[1],i=0;i<r;i++)if(t=n[i],e.call(o,t,i,n))return t})}()}]);