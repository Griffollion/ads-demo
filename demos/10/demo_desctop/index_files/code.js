var _tmr=_tmr||[];
(function(){function r(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function A(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}function aa(a,b){var c,d;if(!a)return"";var e=typeof a;if("number"===e||"boolean"===e||"string"===e||a.nodeType||a===a.window)return"";e=[];if("[object Array]"===Object.prototype.toString.call(a)){c=0;for(d=a.length;c<d;c++)na(e,null,a[c],b);c="[";d="]"}else{for(c in a)a.hasOwnProperty(c)&&na(e,
c,a[c],b);c="{";d="}"}return!e.length?"":c+e.join(",")+d}function na(a,b,c,d){var e=typeof c;if("string"===e)c='"'+c.replace(/[\"\']/g,"\\$&")+'"';else if(!("number"===e||"boolean"===e))if(c=d?"":aa(c),!c.length)return;a.push((null===b?"":'"'+b+'":')+c)}function oa(a){for(var b="",c,d=0;d<a;d++)c=16*Math.random()|0,b+=c.toString(16);return b}function s(){return(new Date).getTime()}function w(a,b){var c={data:b,raw:a,url:"https://top-fwz1.mail.ru"+a},d;"function"!==typeof x.sendBeacon?d=!1:(c.dataKey=
O,ba(c),d=!0===x.sendBeacon(c.url,c.data));d||(void 0===b?(c.dataKey=O,c.dataSplitter=";",c.open=Pa,c.connect=Qa,c.startListen=Ra,c.stopListen=Sa,c.open(c),ba(c),c.connect(c)):("function"===typeof g.XMLHttpRequest?(c.dataKey=O,c.dataSplitter=";",c.open=Ta,c.connect=Ua,c.startListen=Va,c.stopListen=Wa,c.open(c),ba(c),c.connect(c),d=!0):d=!1,d||Xa(c)))}function Xa(a){var b=f.createElement("iframe"),c=f.createElement("div");c.setAttribute("style","position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");
c.appendChild(b);f.body.appendChild(c);try{var d=b.contentWindow.document,e=d.createElement("input");e.setAttribute("type","hidden");e.setAttribute("name",O);e.value=a.data;var p=d.createElement("div");p.appendChild(e);var t=d.createElement("form");t.setAttribute("action",a.url);t.setAttribute("method",pa);t.setAttribute("enctype",qa);t.appendChild(p);var g=d.createElement("div");g.appendChild(t);d.body.appendChild(g);var u=function(){try{A(b,"load",u),f.body.removeChild(c)}catch(a){l&&console.warn("[TopMailRu] Error#1.2",
a)}};r(b,"load",u);t.submit()}catch(h){l&&console.warn("[TopMailRu] Error#1.3",h)}}function Ta(a){a._connection=new g.XMLHttpRequest}function Ua(a){a._connection.open(pa,a.url);a._connection.setRequestHeader("enctype",qa);a._connection.send(a.data)}function Va(a){r(a._connection,"load",a._onload);r(a._connection,"error",a._onerror)}function Wa(a){A(a._connection,"load",a._onload);A(a._connection,"error",a._onerror)}function Pa(a){a._connection=new Image}function Qa(a){a._connection.src=a.url+a.data}
function Ra(a){a._connection.onload=a._onload;a._connection.onerror=a._onerror}function Sa(a){a._connection.onload=null;a._connection.onerror=null}function ba(a){a.data=a.data?a.dataKey+"="+encodeURIComponent(a.data):""}function ca(a){return(a=f.cookie.match(RegExp("(?:^|; )"+a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(a[1]):null}function H(a,b,c){c=c||{};var d=c.expires;"number"===typeof c.expires&&(d=new Date,d.setTime(d.getTime()+c.expires));d&&d.toUTCString&&
(d=d.toUTCString());c.expires=d;a=a+"="+encodeURIComponent(b);for(var e in c)if((b=c[e])||0===b)a+="; "+e,!0!==b&&(a+="="+b);f.cookie=a}function Ya(){var a="tmr"+(""+Math.random()).slice(2);try{return E=g.localStorage||null,E.setItem(a,a),E.removeItem(a),!0}catch(b){return E=null,l&&console.warn("[TopMailRu] Error#1.4",b),!1}}function Za(){if(!P)return null;for(var a=v.hostname.split(".").reverse(),b,c=1,d=a.length;c<d;c++){b=a[0];for(var e=1;e<=c;e++)b=a[e]+"."+b;var e=""+s(),p={domain:b,path:"/",
expires:3E5};try{H("tmr_tcdhn",e,p);var t=ca("tmr_tcdhn"),p=p||{};p.expires=-1;H("tmr_tcdhn","",p);if(t===e)return b}catch(f){l&&console.warn("[TopMailRu] Error#1.8",f)}}return null}function Q(a,b){P&&H(a,b,sa);if(da)try{E.setItem(a,b)}catch(c){l&&console.warn("[TopMailRu] Error#1.6",c)}}function ea(a){var b;if(!(b=P?ca(a):null)){var c;if(da)a:{try{c=E.getItem(a);break a}catch(d){l&&console.warn("[TopMailRu] Error#1.5",d)}c=null}else c=null;b=c}return b}function ta(a){var b=";e="+escape("detect");
w(y(a,!0,!1,!1)+b)}function h(){}function R(a){a&&"object"===typeof a&&(!B&&"id"in a)&&(B=a.id)}function $a(a){return(a=!C?void 0:C[a])&&fa?a-fa:void 0}function ua(){if(C){for(var a=0,b="domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),c=0;c<b.length;c++){var d=!C?void 0:C[b[c]];if(0<d&&(d<a||0==a))a=d}return a?a:void 0}}function S(a){return a&&"object"===typeof a&&("id"in a&&a.id||B)}function y(a,b,c,d){Q(ga,++F);var e="id"in a?
a.id:B,p="url"in a?a.url:v.href,t="referrer"in a?a.referrer:f.referrer,ra="title"in a?a.title:f.title,u;u=ha;null===u&&(u=ab());u=null!==u?u?1:0:null;var h="userid"in a?a.userid:z||0===z?z:void 0,k;k=[];B&&e!==B&&k.push("sec");"dataLayer"in g&&k.push("dl");D&&k.push(["ecom"].concat(D).join("-"));k=k.join(",");var ia=g.screen,n;n=(new Date).getTimezoneOffset();var va="";if(g.Intl)try{va=g.Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch(m){l&&console.warn("[TopMailRu] Error#1.1",m)}n=n+"/"+
va;a.start=ua();b=(b?"/tracker":"/counter")+"?js=13"+(e?";id="+escape(e):"")+(p?";u="+escape(p):"")+(t?";r="+escape(t):"")+(a.start?";st="+escape(a.start):"")+("gender"in a?";gender="+escape(a.gender):"")+("age"in a?";age="+escape(a.age):"")+("pid"in a?";pid="+escape(a.pid):"")+(void 0!==h?";userid="+escape(h):"")+(d&&ra?";title="+encodeURIComponent(ra):"")+(ia?";s="+ia.width+"*"+ia.height:"")+";vp=";e=d=0;f.documentElement&&(f.documentElement.clientWidth||f.documentElement.clientHeight)?(d=f.documentElement.clientWidth,
e=f.documentElement.clientHeight):"number"==typeof g.innerWidth&&(d=g.innerWidth,e=g.innerHeight);b=b+(""+d+"*"+e)+";touch="+bb+";hds="+cb+";flash=";if(null===I)if(I="",x.plugins&&x.plugins["Shockwave Flash"])I=x.plugins["Shockwave Flash"].description.split(" ")[2];else if(g.ActiveXObject)try{var q=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),q=q.GetVariable("$version"),q=q.split(" ")[1].split(",");I=q[0]+"."+q[1]}catch(r){l&&console.warn("[TopMailRu] Error#1.12",r)}q=b+I+";sid="+wa+";ver="+
xa+";tz="+encodeURIComponent(n);if(c){if(!C||!ja)c="";else{c=[];c.push(ja.type);c.push(ja.redirectCount);c.push(fa);for(b=0;b<ya.length;b++)c.push($a(ya[b]));c=c.join("/")}c=";nt="+c}else c="";c=q+c+("device"in a?";device="+escape(a.device):"")+";ni=";if(!x||!x.connection)q="";else{q=x.connection;b=[];for(e=0;e<za.length;e++){d=q[za[e]];if(void 0!==d)switch(d){case !0:d=1;break;case !1:d=0;break;default:d=(""+d).replace(/\//g,"_")}b.push(d)}q=b.join("/")}return c+q+("params"in a?";params="+escape(aa(a.params,
!1)):"")+(null!==u?";detect="+u:"")+(P||da?";lvid="+escape([J,s(),F,G].join(":")):"")+(k?";opts="+escape(k):"")+("version"in a?";appver="+escape(a.version):"")+";_="+Math.random()}function Aa(a){a=";e="+escape("PVT/"+a);for(var b=0;b<k.length;b++)w(y(k[b],!0,!1,!0)+a)}function db(){ha=!0;Ba(1);if(!Ca&&!K){K=!0;for(var a=0;a<k.length;a++)ta(k[a])}}function eb(){Ba(0);ha=!1}function ab(){var a=ca(Da);if(null===a)return null;a=a.split("|");if(2!==a.length)return null;var b=a[1],b=s()-b;if(0>b||b>Ea)return null;
a=parseInt(a[0],10);return isNaN(a)?null:a}function Ba(a){var b=s();a=[a,b].join("|");H(Da,a,{path:"/",expires:Ea})}function T(){f.addEventListener?(A(f,"DOMContentLoaded",T),_tmr.onready()):f.attachEvent&&"complete"===f.readyState&&(A(f,"readystatechange",T),_tmr.onready())}function Fa(){A(g,"load",Fa);_tmr.onready();_tmr.onload()}function U(){A(g,"unload",U);A(g,"beforeunload",U);_tmr.unload()}if("[object Array]"===Object.prototype.toString.call(_tmr)){var g=window,x=navigator,f=document,v=location,
L="string"===typeof v.hostname?v.hostname:"",V=-1!=L.search(/(^|\.)odnoklassniki\.ru$/)||-1!=L.search(/(^|\.)ok\.ru$/),W=-1!=L.search(/(^|\.)vk\.com$/),fb=-1!=L.search(/(^|\.)lamoda\.ru$/),gb=-1!=L.search(/(^|\.)kommersant\.ru$/),hb="string"===typeof v.search&&-1!=v.search.search(/[?&]rb_clickid=/),l="string"===typeof v.search&&-1!=v.search.search(/[?&]tmr_debug=1(?:&|$)/),Ga=V||W||fb||gb,ib=!hb,jb=V||W,kb=V||W,Ha=V||W,Ca=!1,pa="post",qa="application/x-www-form-urlencoded",O="data",P=!(0===v.hostname.search(/^(\d+.)+\d+$/g)||
-1!==v.hostname.search(/:/g)),E=null,da=Ya(),sa={domain:Za(),path:"/",expires:287712E5};(function(){var a;if(a=f.cookie.match(RegExp("(?:^|; )(tmr_tcdhn\\d+)=([^;]*)","g"))){for(var b=[],c,d=0,e=a.length;d<e;d++)c=a[d],(c=c.match(/(?:^|; )(tmr_tcdhn\d+)=([^;]*)/))&&b.push(c.slice(1));a=b}else a=null;if(a){b=0;for(d=a.length;b<d;b++)e=a[b][0],c=sa||{},c.expires=-1,H(e,"",c)}})();var K=!1,ha=null,Ea=864E5,Da="tmr_detect",lb=function(){function a(a,c){var d=f.createElement("div");d.setAttribute("class",
String.fromCharCode(97,100,118,98,108,111,99,107,32,97,100,118,101,114,116,98,108,111,99,107,32,97,109,109,98,108,111,99,107,32,98,45,98,97,110,110,101,114,32,98,45,109,101,100,105,97,45,98,97,110,110,101,114,32,112,117,98,95,51,48,48,120,50,53,48,32,112,117,98,95,51,48,48,120,50,53,48,109,32,109,101,100,105,117,109,95,114,101,99,116,97,110,103,108,101,95,51,48,48,95,50,53,48,32,112,117,98,95,55,50,56,120,57,48,32,108,101,97,100,101,114,98,111,97,114,100,95,55,50,56,95,57,48,32,119,105,100,101,95,
115,107,121,115,99,114,97,112,101,114,95,49,54,48,95,54,48,48,32,119,105,100,101,95,115,107,121,115,99,114,97,112,101,114,95,49,54,48,120,54,48,48,32,116,101,120,116,45,97,100,32,116,101,120,116,65,100,32,116,101,120,116,95,97,100,32,116,101,120,116,95,97,100,115,32,116,101,120,116,45,97,100,115,32,116,101,120,116,45,97,100,45,108,105,110,107,115,32,97,100,95,116,101,120,116,32,97,100,95,116,101,120,116,32,98,97,110,110,101,114,95,116,101,120,116,32,116,101,120,116,45,98,97,110,110,101,114,32,98,
45,114,98,32,114,98,45,115,108,111,116,32,98,45,112,114,111,109,111,45,97,100,32,105,45,98,114,97,110,100,105,110,103,32,98,114,97,110,100,105,110,103,45,112,32,114,98,45,118,105,100,101,111,45,119,105,100,103,101,116,32,98,45,109,105,109,105,99,45,97,100,118,32,112,109,45,116,111,111,108,98,97,114,95,95,98,97,110,110,101,114,32,114,98,95,98,111,100,121,32,115,116,105,99,107,121,45,115,112,114,105,110,103,115,32,97,100,118,95,115,108,111,116,95,49,32,98,97,110,110,101,114,95,50,52,48,32,98,108,111,
99,107,95,115,104,97,114,101,32,97,99,116,105,111,110,45,45,115,104,97,114,101,32,115,104,97,114,101,108,105,115,116,32,106,115,45,98,97,110,110,101,114,32,100,105,114,101,99,116,32,112,99,45,109,105,109,105,99,32,116,103,98,45,98,97,110,110,101,114,32,121,97,100,105,114,101,99,116,32,106,115,45,112,114,111,109,111,45,112,111,112,117,112,32,109,45,115,117,98,115,99,114,105,112,116,105,111,110,32,112,45,116,97,114,103,101,116,32,112,45,100,105,114,101,99,116,104,97,99,107,32,114,98,45,102,108,111,
97,116,105,110,103,32,116,114,103,45,98,45,98,97,110,110,101,114,45,98,108,111,99,107));d.setAttribute("style","position: absolute !important; top: -9999px !important; left: -9999px !important; width: 1px !important; height: 1px !important;");d.setAttribute("id","trg-b-banners-1");d.setAttribute("data-view","SlotView.mimic");this.bait=f.body.appendChild(d);this.bait.offsetParent;this.bait.offsetHeight;this.bait.offsetLeft;this.bait.offsetTop;this.bait.offsetWidth;this.bait.clientHeight;this.bait.clientWidth;
this.loopNumber=0;this.fnPositive=a||null;this.fnNegative=c||null;var e=this;setTimeout(function(){e._checkBait.call(e)},1)}a.prototype._checkBait=function(){if(K)this._stop();else{var a=!1;null!==f.body.getAttribute("abp")||null===this.bait.offsetParent||0==this.bait.offsetHeight||0==this.bait.offsetLeft||0==this.bait.offsetTop||0==this.bait.offsetWidth||0==this.bait.clientHeight||0==this.bait.clientWidth?a=!0:void 0!==g.getComputedStyle&&(a=g.getComputedStyle(this.bait,null),a="none"==a.getPropertyValue("display")||
"hidden"==a.getPropertyValue("visibility"));(!0===a||10<=++this.loopNumber)&&this._stop();var c;if(a&&this.fnPositive)try{c=this.fnPositive,c()}catch(d){l&&console.warn("[TopMailRu] Error#1.9",d)}else if(!a&&10>this.loopNumber){var e=this;setTimeout(function(){e._checkBait.call(e)},50*this.loopNumber)}else try{c=this.fnNegative,c()}catch(p){l&&console.warn("[TopMailRu] Error#1.10",p)}}};a.prototype._stop=function(){try{f.body.removeChild(this.bait)}catch(a){l&&console.warn("[TopMailRu] Error#1.11",
a)}};return function(b,c){new a(b,c)}}(),D=null,Ia;(function(){function a(a){for(var b=[],f,g,k=0,l=a.length;k<l;k++)if(g=a[k]){f=null;if(g.ecommerce){g=g.ecommerce;f=!1;var h={},n=void 0;for(n in g)g.hasOwnProperty(n)&&c[n]&&(f=!0,h[n]=g[n]);f=f?h:null}else if("event"===g[0])if(h=d[g[1]],g=g[2],!h||!g.items)f=null;else{f={};f[h]={products:g.items};var h=!1,n={},m=void 0;for(m in g)"items"!==m&&("currency"===m?f.currencyCode=g[m]:e[m]?(h=!0,n[e[m]]=g[m]):g[m]&&(h=!0,n[m]=g[m]));h&&(f.actionField=
n)}f&&b.push(f)}if(b.length){D||(D=[0,0]);D[0]+=b.length;k=a=0;for(l=b.length;k<l;k++)a+=aa(b[k]).length;D[1]+=a}}function b(b){if((b=g[b])&&"function"===typeof b.push){a(b);var c=b.push;b.push=function(){var b=c.apply(this,arguments);a([].slice.call(arguments,0));return b}}}var c={currencyCode:"currencyCode",detail:"detail",add:"add",remove:"remove",checkout:"checkout",purchase:"purchase",refund:"refund"},d={view_item:c.detail,add_to_cart:c.add,remove_from_cart:c.remove,begin_checkout:c.checkout,
purchase:c.purchase,refund:c.refund},e={transaction_id:"id",value:"revenue"};Ia=function(){b("dataLayer")}})();var xa="60.2.0",ka=0,X=0,wa=oa(16),z=null,Y=0,ga="tmr_reqNum",F=ea(ga),F=null===F?0:parseInt(F,10);Q(ga,F);var G=ea("tmr_lvid"),J=ea("tmr_lvidTS");if(null===G||-1===G.search(/^[0-9a-fA-F]+$/))G=oa(32);Q("tmr_lvid",G);if(null===J||-1===J.search(/^\d+$/))J=""+s();Q("tmr_lvidTS",J);var B=0,k=[],Z=[],$=[],bb="ontouchstart"in g||1<(x.maxTouchPoints||x.msMaxTouchPoints)?"1":"0",cb=g.devicePixelRatio||
0,I=null,Ja=g.performance||g.mozPerformance||g.msPerformance||g.webkitPerformance||{},C=Ja.timing||{},ja=Ja.navigation||{},ya="unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "),fa=!C?void 0:C.navigationStart,za="downlink downlinkMax effectiveType rtt saveData type".split(" "),
M,la;M=function(a,b,c){if(b&&"object"===typeof b){var d="id"in b&&b.id||B,e=c.title||null,g,f=la(b,{params:c.required,fn:c.fn});if(f.missed.length)console.warn("[TopMailRu]"+(d?"["+d+"]":"")+" Error#1.14","Unspecified "+(1<f.missed.length&&f.missed.slice(0,-1).join(", ")+" and "||"")+f.missed.slice(-1)+" in "+a);else{var h=la(b,{params:c.optional,fn:c.fn});g=[].concat(f.values).concat(h.values);f=[].concat(f.missed).concat(h.missed);c.value&&(b="value"in b&&b.value,!0!==c.value&&(b=b||c.value),b?
g.push("value: "+b):f.push("value"));c=g.length?"{ "+g.join(", ")+" }":"";g=f.length?"("+(1<f.length?f.slice(0,-1).join(", ")+" and "+f.slice(-1)+" are":f.slice(-1)+" is")+" empty)":"";d?console.info("[TopMailRu]["+d+"]: "+(e||a)+" "+c+" "+g):console.warn("[TopMailRu] Error#1.15","Undefined counter ID of "+a+" "+c)}}else console.warn("[TopMailRu][]["+a+"] Error#1.13")};la=function(a,b){var c=[],d=[],e,f,g;if(b.params)for(e in b.params)if(b.params.hasOwnProperty(e)&&!1!==b.params[e])if(f=e in a&&a[e],
!0!==b.params[e]&&(f=f||b.params[e]),f)try{g=b.fn?b.fn:null,c.push(e+': "'+(g?g(e,f):f)+'"')}catch(h){console.warn("[TopMailRu] Error#1.16",h)}else d&&d.push(e);return{values:c,missed:d}};h.prototype.pageView=function(a){R(a);var b;if(b=a&&"object"===typeof a&&"id"in a)if(b=a.id)if(b=5>Z.length){b:{for(b=0;b<Z.length;b++)if(Z[b]===a.id){b=!0;break b}b=!1}b=!b}b&&(Z.push(a.id),!1!==a.beat&&$.push(a.id),k.push(a),K&&ta(a));l&&M("pageView",a,{title:"Page view",optional:{url:v.href}});S(a)&&(w(y(a,!1,
!1,!0)),X=s())};h.prototype.reachGoal=function(a){R(a);l&&M("reachGoal",a,{title:"Reach goal",value:!0,required:{goal:!0}});if(S(a)&&"goal"in a&&a.goal){var b="";"value"in a&&a.value&&(b=parseInt(a.value)||"");w(y(a,!0,!1,!0)+(";e="+escape("RG:"+b+"/"+a.goal)))}};h.prototype.itemView=function(a){l&&M("itemView",a,{title:"Item view",optional:{list:!0,productid:!0,pagetype:!0,totalvalue:!0},fn:function(a,b){return(""+b).replace(/;/g," ")}});if(S(a)){var b=a.list||"",c=a.productid||"",d=a.pagetype||
"",e=a.totalvalue||0;(new Image).src="https://ad.mail.ru/retarget/?counter="+(a.id||B)+"&list="+b+"&productid="+c+"&pagetype="+d+"&totalvalue="+e+"&_="+Math.random();b="IV:"+e+"/"+(""+b).replace(/;/g," ")+";"+(""+c).replace(/;/g," ")+";"+(""+d).replace(/;/g," ");w(y(a,!0,!1,!1)+(";e="+escape(b)))}};h.prototype.sendEvent=function(a){R(a);l&&M("sendEvent",a,{title:"Send event",value:!0,required:{category:!0,action:!0},optional:{label:!0},fn:function(a,b){return(""+b).substr(0,300).replace(/;/g," ")}});
if(S(a)&&"category"in a&&a.category&&"action"in a&&a.action){var b=(""+a.category).substr(0,300),c=(""+a.action).substr(0,300),d="";"label"in a&&a.label&&(d=(""+a.label).substr(0,300));var e="";"value"in a&&a.value&&(e=parseInt(a.value)||"");b="CE:"+e+"/"+(""+b).replace(/;/g," ")+";"+(""+c).replace(/;/g," ")+";"+(""+d).replace(/;/g," ");w(y(a,!0,!1,!1)+(";e="+escape(b)))}};h.prototype.setUserID=function(a){if(null===a||!1===a||void 0===a)this.deleteUserID();else{var b=typeof a;"number"!==b&&"string"!==
b?l&&console.warn("[TopMailRu] Error#1.17","Invalid user ID in setUserID"):(z=a,l&&console.info("[TopMailRu]: Global user ID = "+z))}};h.prototype.getUserID=function(){return z||0===z?z:void 0};h.prototype.deleteUserID=function(){z=null;l&&console.info("[TopMailRu]: Reset global user ID to null")};h.prototype.getClientID=function(){var a=G;return a||0===a?a:void 0};h.prototype.processEvent=function(a){if(a&&"object"===typeof a)if("type"in a)switch(a.type){case "pageView":this.pageView(a);break;case "reachGoal":this.reachGoal(a);
break;case "itemView":this.itemView(a);break;case "sendEvent":this.sendEvent(a);break;case "setUserID":"userid"in a&&this.setUserID(a.userid);break;case "deleteUserID":this.deleteUserID()}else l&&console.warn("[TopMailRu] Error#1.19","Unspecified type of push event");else l&&console.warn("[TopMailRu] Error#1.18","Invalid push event")};h.prototype.push=function(a){for(var b=0,c=arguments.length;b<c;b++)this.processEvent(arguments[b])};var Ka=!1;h.prototype.onready=function(){Ka||(Ka=!0,!Ca&&!K&&lb(db,
eb),Ia())};var La=!1;h.prototype.onload=function(){if(!La){La=!0;Y=s();if(!kb&&0<k.length){for(var a=";e="+escape("RT/load")+";et="+Y,b=0;b<k.length;b++)w(y(k[b],!0,!0,!1)+a);X=Y}ib||setTimeout(function(){Aa(2)},2E3);jb||setTimeout(function(){Aa(15)},15E3)}};h.prototype.beat=function(){if(!Ga&&ka){var a=s();if(!(12E4<a-ka)){if(12E4<a-X)for(var b=";e="+escape("RT/resend")+";et="+Y,c=0;c<k.length;c++)!1!==k[c].beat&&w(y(k[c],!0,!1,!0)+b);else 0<$.length&&w("/tracker?js=13;id="+$[0]+";e="+escape("RT/beat")+
";sid="+wa+";ids="+$.join()+";ver="+xa+";_="+Math.random());X=a}}};var Ma=!1;h.prototype.unload=function(){if(!Ma&&(Ma=!0,!Ha)){var a;a=(a=ua())?s()-a:void 0;a=";e="+escape("RT/unload")+";et="+s()+(a?";pvt="+escape(a):"");for(var b=0;b<k.length;b++)w(y(k[b],!0,!1,!1)+a)}};h.prototype.activity=function(a){ka=s()};for(var Na=new h,m=0,ma=_tmr.length,N;m<ma;m++)(N=_tmr[m])&&"object"===typeof N&&R(N);m=0;for(ma=_tmr.length;m<ma;m++)N=_tmr[m],Na.processEvent(N);_tmr=Na;if("complete"===f.readyState||"loading"!==
f.readyState&&!f.documentElement.doScroll)_tmr.onready();else f.addEventListener?r(f,"DOMContentLoaded",T):f.attachEvent&&r(f,"readystatechange",T);if("complete"===f.readyState)_tmr.onload();else r(g,"load",Fa);Ha||(r(g,"unload",U),r(g,"beforeunload",U));if(!Ga){setInterval(function(){_tmr.beat()},6E4);try{for(var Oa="scroll gesturechange touchmove mousedown mousemove mouseup touch".split(" "),mb=function(a){r(f,a,function(){_tmr.activity(a)})},m=0;m<Oa.length;m++)mb(Oa[m]);r(g,"scroll",function(){_tmr.activity("scallback")})}catch(nb){l&&
console.warn("[TopMailRu] Error#1.20",nb)}}}})();