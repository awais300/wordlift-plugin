!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=109)}({109:function(n,t,e){"use strict";e(110);var o=window.wlSettings;!function(){if("undefined"!=typeof fetch&&!(void 0!==o.jsonld_enabled&&"1"!==o.jsonld_enabled||void 0===o.postId&&void 0===o.isHome)){var n,t,e=(t=0<=(n=o).apiUrl.indexOf("?")?"&":"?",n.apiUrl+t+"action=wl_jsonld"+(void 0!==n.postId?"&id="+n.postId:"")+(void 0!==n.isHome?"&homepage=true":""));fetch(e).then(function(n){return n.text()}).then(function(n){var t=document.createElement("script");t.type="application/ld+json",t.innerText=n,document.head.appendChild(t)})}}()},110:function(n,t,e){"use strict";function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}!function(){function n(n,t,e,r,i,a){var f;if("undefined"==typeof wordliftAnalyticsConfigData)return!1;n("send","event","WordLift","Mentions",r,1,(o(f={},t,i),o(f,e,a),o(f,"nonInteraction",!0),f))}function t(n,t,e,r,i,a){var f;if("undefined"==typeof wordliftAnalyticsConfigData)return!1;n("event","Mentions",(o(f={event_category:"WordLift",event_label:r,value:1},t,i),o(f,e,a),o(f,"non_interaction",!0),f))}document.addEventListener("DOMContentLoaded",function(e){if("undefined"!=typeof wordliftAnalyticsEntityData){var o=new Promise(function(n,t){return n(function(){var n=!1;window.ga?n=window.ga:window.__gaTracker?n=window.__gaTracker:window.gtag&&(n=window.gtag);return n}())});o.then(function(e){return function(e){return new Promise(function(o,r){if(void 0===e||"undefined"==typeof wordliftAnalyticsConfigData)return r();var i="dimension"+wordliftAnalyticsConfigData.entity_uri_dimension,a="dimension"+wordliftAnalyticsConfigData.entity_type_dimension,f=[];for(var u in wordliftAnalyticsEntityData)wordliftAnalyticsEntityData.hasOwnProperty(u)&&f.push(wordliftAnalyticsEntityData[u]);var d=f.length;if("ga"===window.GoogleAnalyticsObject||"__gaTracker"===window.GoogleAnalyticsObject)for(var l=0;l<d;l++)n(e,i,a,f[l].label,f[l].uri,f[l].type);else if("gtag"===window.GoogleAnalyticsObject)for(l=0;l<d;l++)t(e,i,a,f[l].label,f[l].uri,f[l].type);return o(!0)})}(e)})}})}()}});
//# sourceMappingURL=bundle.js.map