!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(){return n(10)}var o=n(1),i=n(2).initLongExperiment,a=n(4)["default"],c=n(5).isPercent;!function(e,t,n){function d(t){var r=e[t];return e[t]=n,r}function s(e,t){return d("yandex_"+(t?t+"_":"")+e)}function u(e,t,n){for(var r=0;r<t.length;r++)e[t[r]]=s(t[r],n)}var l=r(),_=e.Ya=e.Ya||{};if(_.codeVer===n){_.loaderVer=l.loader;var f=new a(l.code),E=o.pcode,p=/^(([a-z0-9-]+\.)?)+devmail\.ru$/i;if(p.test(t.location.hostname)&&(E=f.getDefaultId()),E)_.codeVer=E,_.matchVer=f.getDefaultExtra().match||_.codeVer,_.confirmUrl=f.getDefaultExtra().confirm;else{_.codeVer=f.getId();_.matchVer=f.getExtra().match||_.codeVer,_.confirmUrl=f.getExtra().confirm}_._exp=f}_.Context||(_.Context={_callbacks:[],_asyncIdCounter:0,_asyncModeOn:!1,initTime:Number(new Date),longExp:{getId:function(){return""}},LOG_DIRECT:c(1)},i(),_.Direct={insertInto:function(e,t,n,r){_.Context._asyncModeOn||(_.Context._asyncModeOn=!0),_.Context.AdvManager?_.Context.AdvManager.renderDirect(e,t,n,r):_.Context._callbacks.push(function(){_.Context.AdvManager.renderDirect(e,t,n,r)})}});for(var x=["yandex_context_callbacks","yandexContextAsyncCallbacks"],h=0;h<x.length;h++){var D=d(x[h]);if(D){_.Context._asyncModeOn||(_.Context._asyncModeOn=!0);for(var I=0;I<D.length;I++)_.Context._callbacks.push(D[I])}}if(e.yandexContextSyncCallbacks)for(var m=d("yandexContextSyncCallbacks"),L=0;L<m.length;L++)_.Context._callbacks.push(m[L]);var B=["ad_format","site_bg_color","font_size","font_family","stat_id","no_sitelinks","search_text","search_page_number","lang"],g=["type","border_type","bg_color","border_radius","border_color","header_bg_color","title_color","text_color","url_color","hover_color","sitelinks_color","links_underline","limit","place","favicon","title_font_size","grab","c11n","geo_lat","geo_long","width","height"];if(e.yandex_ad_format){var T={};u(T,B),u(T,g,T.ad_format);var O=T.place;O&&t.getElementById(O)||(O="Ya_sync_"+_.Context._asyncIdCounter++,t.write('<div id="'+O+'"></div>'));var C=s("partner_id");_.Context._callbacks.push(function(){_.Context.AdvManager.renderDirect(C,O,T)})}var A,v,A,v,y=_.codeVer>=1700?"//an.yandex.ru/resource/context_static_r_<%= CODE_VER %>.js":"//an.yandex.ru/resource/context_static_r<%= CODE_VER %>.js",A=y.replace("<%= CODE_VER %>",_.codeVer),v="https:"+A;if(t.getElementById(A)&&_.Context._init)return void _.Context._init();if(_.Context._asyncModeOn){var N=t.createElement("script"),S=t.getElementsByTagName("script")[0];N.id=A,N.src=v,S.parentNode.insertBefore(N,S)}else t.write('<script type="text/javascript" src="'+v+'" id="'+A+'"></script>')}(window,window.document)},function(e,t){"use strict";function n(e){for(var t=e.split("&"),n={},r=0;r<t.length;r++)0===t[r].indexOf(o+"=")&&(n.pcode=t[r].substr((o+"=").length)),0===t[r].indexOf(i+"=")&&(n.media=t[r].substr((i+"=").length));return n}function r(e){return parseInt(e,10)||void 0}var o="pcodever",i="mcodever",a=n(window.location.hash.replace(/^\#/,"")),c=n(window.location.search.replace(/^\?/,"")),d={pcode:r(a.pcode||c.pcode),media:r(a.media||c.media)};e.exports=d},function(e,t,n){"use strict";function r(){var e=new i["default"](E);c.setGlobalVariable(s,e)}function o(e){if(f)return!1;var t=c.getGlobalVariable(s);return!!t&&t.isCurrentVersion(e)}var i=n(3),a=n(6),c=n(7),d=n(8),s="__longExperiment",u=n(9),l=document.location.host,_=function(e){return e.test(l)},f=u(d["default"],_).length>0,E=[[{id:a["default"].rmp.RMP_CONTROL,percent:50},{id:a["default"].rmp.RMP_ABILITIES,percent:50}],[{id:a["default"].rtbInDirect.ENABLED,percent:10},{id:a["default"].rtbInDirect.DISABLED,percent:90}],[{id:a["default"].rtbInDirectOld.ENABLED,percent:10},{id:a["default"].rtbInDirectOld.DISABLED,percent:90}],[{id:a["default"].phoneButton.ENABLED,percent:0},{id:a["default"].phoneButton.DISABLED,percent:100}],[{id:a["default"].storeButton.ENABLED,percent:50},{id:a["default"].storeButton.DISABLED,percent:50}],[{id:a["default"].vertical.VERTICAL_DESKTOP_ENABLED,percent:100},{id:a["default"].vertical.VERTICAL_DESKTOP_DISABLED,percent:0}]];t.initLongExperiment=r,t.isLongExperiment=o},function(e,t,n){"use strict";var r=n(4),o=function(){function e(e){this.experiments=[];for(var t=0;t<e.length;t++)this.experiments.push(new r["default"](e[t]))}return e.prototype.isCurrentVersion=function(e){for(var t=0;t<this.experiments.length;t++)if(this.experiments[t].getId()===e)return!0;return!1},e}();t.__esModule=!0,t["default"]=o},function(e,t,n){"use strict";var r=n(5),o=function(){function e(e){this.coin=Math.random(),this.versions=r.prepare(e),this.defaultVersion=r.findDefault(e)}return e.prototype.getId=function(){return this.get("id")},e.prototype.getExtra=function(){return this.get("extra")},e.prototype.getDefaultExtra=function(){return this.defaultVersion&&this.defaultVersion.extra?this.defaultVersion.extra:null},e.prototype.getDefaultId=function(){return this.defaultVersion&&this.defaultVersion.id?this.defaultVersion.id:null},e.prototype.get=function(e){var t=this.choose();return t&&t.hasOwnProperty(e)?t[e]:null},e.prototype.choose=function(){for(var e=null,t=0;t<this.versions.length;t++)if(this.coin<this.versions[t].threshold){e=this.versions[t];break}return e},e}();t.__esModule=!0,t["default"]=o},function(e,t){"use strict";function n(e){for(var t,n=[],i=0,a=0;a<e.length;a++)t=o(r(e[a].percent)+i),i=t,n.push({id:e[a].id,extra:e[a].extra,threshold:t});return n}function r(e){return o(e/100)}function o(e){return Number(e.toFixed(c))}function i(e){for(var t=null,n=0;n<e.length;n++)(!t||t.percent<e[n].percent)&&(t=e[n]);return t}function a(e){return Math.random()<r(e)}var c=2;t.prepare=n,t.toFraction=r,t.fixPrecision=o,t.findDefault=i,t.isPercent=a},function(e,t){"use strict";var n={vertical:{VERTICAL_DESKTOP_ENABLED:"VERTICAL_DESKTOP_ENABLED",VERTICAL_DESKTOP_DISABLED:"VERTICAL_DESKTOP_DISABLED",VERTICAL_MOBILE_ENABLED:"VERTICAL_MOBILE_ENABLED",VERTICAL_MOBILE_DISABLED:"VERTICAL_MOBILE_DISABLED"},rmp:{RMP_CONTROL:"RMP_CONTROL",RMP_ABILITIES:"RMP_ABILITIES"},stub:{STUB_CONTROL:"STUB_CONTROL",STUB_DOMAIN:"STUB_DOMAIN",STUB_WITH_SCALE:"STUB_WITH_SCALE",STUB_WITHOUT_SCALE:"STUB_WITHOUT_SCALE"},emoji:{EMOJI:"EMOJI",EMOJI_TITLE:"EMOJI_TITLE",EMOJI_CONTROL:"EMOJI_CONTROL"},rtbInDirect:{ENABLED:"RTB_IN_NEW_ENABLED",DISABLED:"RTB_IN_NEW_DISABLED"},rtbInDirectOld:{ENABLED:"RTB_IN_OLD_ENABLED",DISABLED:"RTB_IN_OLD_DISABLED"},phoneButton:{ENABLED:"PHONE_BUTTON_ENABLED",DISABLED:"PHONE_BUTTON_DISABLED"},storeButton:{ENABLED:"STORE_BUTTON_ENABLED",DISABLED:"STORE_BUTTON_DISABLED"}};t.__esModule=!0,t["default"]=n},function(e,t){"use strict";function n(e,t){window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[e]=t}function r(e){return window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[e]}t.setGlobalVariable=n,t.getGlobalVariable=r},function(e,t){"use strict";t.__esModule=!0,t["default"]=[/mail\.ru/i,/devmail\.ru/i]},function(e,t){e.exports=function(e,t,n){for(var r=[],o=0,i=e.length;o<i;o++){var a=e[o];t.call(n,a,o,e)&&r.push(a)}return r}},function(e,t){e.exports={loader:1505196973498,code:[{id:2896,percent:10,extra:{match:2896,confirm:"//st.yandexadexchange.net/confirm_r_2896.html"}},{id:2891,percent:10,extra:{match:2891,confirm:"//st.yandexadexchange.net/confirm_r_2891.html"}},{id:2890,percent:5,extra:{match:2890,confirm:"//st.yandexadexchange.net/confirm_r_2890.html"}},{id:2889,percent:5,extra:{match:2889,confirm:"//st.yandexadexchange.net/confirm_r_2889.html"}},{id:2888,percent:5,extra:{match:2888,confirm:"//st.yandexadexchange.net/confirm_r_2888.html"}},{id:2893,percent:1,extra:{match:2893,confirm:"//st.yandexadexchange.net/confirm_r_2893.html"}},{id:2884,percent:64,extra:{match:2884,confirm:"//st.yandexadexchange.net/confirm_r_2884.html"}}]}}]);