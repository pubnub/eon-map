(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["map"] = factory();
	else
		root["eon"] = root["eon"] || {}, root["eon"]["map"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	window.PubNub = __webpack_require__(1);
	window.GoogleMapsLoader = __webpack_require__(2);
	window.L = __webpack_require__(3);
	__webpack_require__(4)
	__webpack_require__(31);
	__webpack_require__(41);
	module.exports = __webpack_require__(42)


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PubNub=t():e.PubNub=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){if(!navigator||!navigator.sendBeacon)return!1;navigator.sendBeacon(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=r(u),l=n(40),h=r(l),f=n(41),d=r(f),p=n(42),g=(n(8),function(e){function t(e){i(this,t);var n=e.listenToBrowserNetworkEvents,r=void 0===n||n;e.db=d.default,e.sdkFamily="Web",e.networking=new h.default({get:p.get,post:p.post,sendBeacon:a});var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r&&(window.addEventListener("offline",function(){s.networkDownDetected()}),window.addEventListener("online",function(){s.networkUpDetected()})),s}return s(t,e),t}(c.default));t.default=g,e.exports=t.default},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),u=i(a),c=n(7),l=i(c),h=n(9),f=i(h),d=n(11),p=i(d),g=n(12),y=i(g),v=n(18),b=i(v),_=n(19),m=r(_),k=n(20),P=r(k),S=n(21),w=r(S),O=n(22),T=r(O),C=n(23),M=r(C),E=n(24),x=r(E),N=n(25),R=r(N),K=n(26),A=r(K),j=n(27),D=r(j),G=n(28),U=r(G),B=n(29),I=r(B),H=n(30),L=r(H),q=n(31),F=r(q),z=n(32),X=r(z),W=n(33),V=r(W),J=n(34),$=r(J),Q=n(35),Y=r(Q),Z=n(36),ee=r(Z),te=n(37),ne=r(te),re=n(38),ie=r(re),oe=n(15),se=r(oe),ae=n(39),ue=r(ae),ce=n(16),le=i(ce),he=n(13),fe=i(he),de=(n(8),function(){function e(t){var n=this;o(this,e);var r=t.db,i=t.networking,s=this._config=new l.default({setup:t,db:r}),a=new f.default({config:s});i.init(s);var u={config:s,networking:i,crypto:a},c=b.default.bind(this,u,se),h=b.default.bind(this,u,U),d=b.default.bind(this,u,L),g=b.default.bind(this,u,X),v=b.default.bind(this,u,ue),_=this._listenerManager=new y.default,k=new p.default({timeEndpoint:c,leaveEndpoint:h,heartbeatEndpoint:d,setStateEndpoint:g,subscribeEndpoint:v,crypto:u.crypto,config:u.config,listenerManager:_});this.addListener=_.addListener.bind(_),this.removeListener=_.removeListener.bind(_),this.removeAllListeners=_.removeAllListeners.bind(_),this.channelGroups={listGroups:b.default.bind(this,u,T),listChannels:b.default.bind(this,u,M),addChannels:b.default.bind(this,u,m),removeChannels:b.default.bind(this,u,P),deleteGroup:b.default.bind(this,u,w)},this.push={addChannels:b.default.bind(this,u,x),removeChannels:b.default.bind(this,u,R),deleteDevice:b.default.bind(this,u,D),listChannels:b.default.bind(this,u,A)},this.hereNow=b.default.bind(this,u,V),this.whereNow=b.default.bind(this,u,I),this.getState=b.default.bind(this,u,F),this.setState=k.adaptStateChange.bind(k),this.grant=b.default.bind(this,u,Y),this.audit=b.default.bind(this,u,$),this.publish=b.default.bind(this,u,ee),this.fire=function(e,t){return e.replicate=!1,e.storeInHistory=!1,n.publish(e,t)},this.history=b.default.bind(this,u,ne),this.fetchMessages=b.default.bind(this,u,ie),this.time=c,this.subscribe=k.adaptSubscribeChange.bind(k),this.unsubscribe=k.adaptUnsubscribeChange.bind(k),this.disconnect=k.disconnect.bind(k),this.reconnect=k.reconnect.bind(k),this.destroy=function(e){k.unsubscribeAll(e),k.disconnect()},this.stop=this.destroy,this.unsubscribeAll=k.unsubscribeAll.bind(k),this.getSubscribedChannels=k.getSubscribedChannels.bind(k),this.getSubscribedChannelGroups=k.getSubscribedChannelGroups.bind(k),this.encrypt=a.encrypt.bind(a),this.decrypt=a.decrypt.bind(a),this.getAuthKey=u.config.getAuthKey.bind(u.config),this.setAuthKey=u.config.setAuthKey.bind(u.config),this.setCipherKey=u.config.setCipherKey.bind(u.config),this.getUUID=u.config.getUUID.bind(u.config),this.setUUID=u.config.setUUID.bind(u.config),this.getFilterExpression=u.config.getFilterExpression.bind(u.config),this.setFilterExpression=u.config.setFilterExpression.bind(u.config)}return s(e,[{key:"getVersion",value:function(){return this._config.getVersion()}},{key:"networkDownDetected",value:function(){this._listenerManager.announceNetworkDown(),this._config.restore?this.disconnect():this.destroy(!0)}},{key:"networkUpDetected",value:function(){this._listenerManager.announceNetworkUp(),this.reconnect()}}],[{key:"generateUUID",value:function(){return u.default.v4()}}]),e}());de.OPERATIONS=le.default,de.CATEGORIES=fe.default,t.default=de,e.exports=t.default},function(e,t,n){var r=n(3),i=n(6),o=i;o.v1=r,o.v4=i,e.exports=o},function(e,t,n){function r(e,t,n){var r=t&&n||0,i=t||[];e=e||{};var s=void 0!==e.clockseq?e.clockseq:u,h=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:l+1,d=h-c+(f-l)/1e4;if(d<0&&void 0===e.clockseq&&(s=s+1&16383),(d<0||h>c)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=h,l=f,u=s,h+=122192928e5;var p=(1e4*(268435455&h)+f)%4294967296;i[r++]=p>>>24&255,i[r++]=p>>>16&255,i[r++]=p>>>8&255,i[r++]=255&p;var g=h/4294967296*1e4&268435455;i[r++]=g>>>8&255,i[r++]=255&g,i[r++]=g>>>24&15|16,i[r++]=g>>>16&255,i[r++]=s>>>8|128,i[r++]=255&s;for(var y=e.node||a,v=0;v<6;++v)i[r+v]=y[v];return t||o(i)}var i=n(4),o=n(5),s=i(),a=[1|s[0],s[1],s[2],s[3],s[4],s[5]],u=16383&(s[6]<<8|s[7]),c=0,l=0;e.exports=r},function(e,t){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var i=new Uint8Array(16);n=function(){return r.getRandomValues(i),i}}if(!n){var o=new Array(16);n=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}e.exports=n}).call(t,function(){return this}())},function(e,t){function n(e,t){var n=t||0,i=r;return i[e[n++]]+i[e[n++]]+i[e[n++]]+i[e[n++]]+"-"+i[e[n++]]+i[e[n++]]+"-"+i[e[n++]]+i[e[n++]]+"-"+i[e[n++]]+i[e[n++]]+"-"+i[e[n++]]+i[e[n++]]+i[e[n++]]+i[e[n++]]+i[e[n++]]+i[e[n++]]}for(var r=[],i=0;i<256;++i)r[i]=(i+256).toString(16).substr(1);e.exports=n},function(e,t,n){function r(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var s=e.random||(e.rng||i)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var a=0;a<16;++a)t[r+a]=s[a];return t||o(s)}var i=n(4),o=n(5);e.exports=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),s=function(e){return e&&e.__esModule?e:{default:e}}(o),a=(n(8),function(){function e(t){var n=t.setup,i=t.db;r(this,e),this._db=i,this.instanceId="pn-"+s.default.v4(),this.secretKey=n.secretKey||n.secret_key,this.subscribeKey=n.subscribeKey||n.subscribe_key,this.publishKey=n.publishKey||n.publish_key,this.sdkFamily=n.sdkFamily,this.partnerId=n.partnerId,this.setAuthKey(n.authKey),this.setCipherKey(n.cipherKey),this.setFilterExpression(n.filterExpression),this.origin=n.origin||"pubsub.pubnub.com",this.secure=n.ssl||!1,this.restore=n.restore||!1,this.proxy=n.proxy,this.keepAlive=n.keepAlive,this.keepAliveSettings=n.keepAliveSettings,this.autoNetworkDetection=n.autoNetworkDetection||!1,this.customEncrypt=n.customEncrypt,this.customDecrypt=n.customDecrypt,"undefined"!=typeof location&&"https:"===location.protocol&&(this.secure=!0),this.logVerbosity=n.logVerbosity||!1,this.suppressLeaveEvents=n.suppressLeaveEvents||!1,this.announceFailedHeartbeats=n.announceFailedHeartbeats||!0,this.announceSuccessfulHeartbeats=n.announceSuccessfulHeartbeats||!1,this.useInstanceId=n.useInstanceId||!1,this.useRequestId=n.useRequestId||!1,this.requestMessageCountThreshold=n.requestMessageCountThreshold,this.setTransactionTimeout(n.transactionalRequestTimeout||15e3),this.setSubscribeTimeout(n.subscribeRequestTimeout||31e4),this.setSendBeaconConfig(n.useSendBeacon||!0),this.setPresenceTimeout(n.presenceTimeout||300),n.heartbeatInterval&&this.setHeartbeatInterval(n.heartbeatInterval),this.setUUID(this._decideUUID(n.uuid))}return i(e,[{key:"getAuthKey",value:function(){return this.authKey}},{key:"setAuthKey",value:function(e){return this.authKey=e,this}},{key:"setCipherKey",value:function(e){return this.cipherKey=e,this}},{key:"getUUID",value:function(){return this.UUID}},{key:"setUUID",value:function(e){return this._db&&this._db.set&&this._db.set(this.subscribeKey+"uuid",e),this.UUID=e,this}},{key:"getFilterExpression",value:function(){return this.filterExpression}},{key:"setFilterExpression",value:function(e){return this.filterExpression=e,this}},{key:"getPresenceTimeout",value:function(){return this._presenceTimeout}},{key:"setPresenceTimeout",value:function(e){return this._presenceTimeout=e,this.setHeartbeatInterval(this._presenceTimeout/2-1),this}},{key:"getHeartbeatInterval",value:function(){return this._heartbeatInterval}},{key:"setHeartbeatInterval",value:function(e){return this._heartbeatInterval=e,this}},{key:"getSubscribeTimeout",value:function(){return this._subscribeRequestTimeout}},{key:"setSubscribeTimeout",value:function(e){return this._subscribeRequestTimeout=e,this}},{key:"getTransactionTimeout",value:function(){return this._transactionalRequestTimeout}},{key:"setTransactionTimeout",value:function(e){return this._transactionalRequestTimeout=e,this}},{key:"isSendBeaconEnabled",value:function(){return this._useSendBeacon}},{key:"setSendBeaconConfig",value:function(e){return this._useSendBeacon=e,this}},{key:"getVersion",value:function(){return"4.12.0"}},{key:"_decideUUID",value:function(e){return e||(this._db&&this._db.get&&this._db.get(this.subscribeKey+"uuid")?this._db.get(this.subscribeKey+"uuid"):"pn-"+s.default.v4())}}]),e}());t.default=a,e.exports=t.default},function(e,t){"use strict";e.exports={}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),a=(r(s),n(10)),u=r(a),c=function(){function e(t){var n=t.config;i(this,e),this._config=n,this._iv="0123456789012345",this._allowedKeyEncodings=["hex","utf8","base64","binary"],this._allowedKeyLengths=[128,256],this._allowedModes=["ecb","cbc"],this._defaultOptions={encryptKey:!0,keyEncoding:"utf8",keyLength:256,mode:"cbc"}}return o(e,[{key:"HMACSHA256",value:function(e){return u.default.HmacSHA256(e,this._config.secretKey).toString(u.default.enc.Base64)}},{key:"SHA256",value:function(e){return u.default.SHA256(e).toString(u.default.enc.Hex)}},{key:"_parseOptions",value:function(e){var t=e||{};return t.hasOwnProperty("encryptKey")||(t.encryptKey=this._defaultOptions.encryptKey),t.hasOwnProperty("keyEncoding")||(t.keyEncoding=this._defaultOptions.keyEncoding),t.hasOwnProperty("keyLength")||(t.keyLength=this._defaultOptions.keyLength),t.hasOwnProperty("mode")||(t.mode=this._defaultOptions.mode),-1===this._allowedKeyEncodings.indexOf(t.keyEncoding.toLowerCase())&&(t.keyEncoding=this._defaultOptions.keyEncoding),-1===this._allowedKeyLengths.indexOf(parseInt(t.keyLength,10))&&(t.keyLength=this._defaultOptions.keyLength),-1===this._allowedModes.indexOf(t.mode.toLowerCase())&&(t.mode=this._defaultOptions.mode),t}},{key:"_decodeKey",value:function(e,t){return"base64"===t.keyEncoding?u.default.enc.Base64.parse(e):"hex"===t.keyEncoding?u.default.enc.Hex.parse(e):e}},{key:"_getPaddedKey",value:function(e,t){return e=this._decodeKey(e,t),t.encryptKey?u.default.enc.Utf8.parse(this.SHA256(e).slice(0,32)):e}},{key:"_getMode",value:function(e){return"ecb"===e.mode?u.default.mode.ECB:u.default.mode.CBC}},{key:"_getIV",value:function(e){return"cbc"===e.mode?u.default.enc.Utf8.parse(this._iv):null}},{key:"encrypt",value:function(e,t,n){return this._config.customEncrypt?this._config.customEncrypt(e):this.pnEncrypt(e,t,n)}},{key:"decrypt",value:function(e,t,n){return this._config.customDecrypt?this._config.customDecrypt(e):this.pnDecrypt(e,t,n)}},{key:"pnEncrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),o=this._getPaddedKey(t||this._config.cipherKey,n);return u.default.AES.encrypt(e,o,{iv:r,mode:i}).ciphertext.toString(u.default.enc.Base64)||e}},{key:"pnDecrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),o=this._getPaddedKey(t||this._config.cipherKey,n);try{var s=u.default.enc.Base64.parse(e),a=u.default.AES.decrypt({ciphertext:s},o,{iv:r,mode:i}).toString(u.default.enc.Utf8);return JSON.parse(a)}catch(e){return null}}}]),e}();t.default=c,e.exports=t.default},function(e,t){"use strict";var n=n||function(e,t){var n={},r=n.lib={},i=function(){},o=r.Base={extend:function(e){i.prototype=this;var t=new i;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},s=r.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=void 0!=t?t:4*e.length},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes;if(e=e.sigBytes,this.clamp(),r%4)for(var i=0;i<e;i++)t[r+i>>>2]|=(n[i>>>2]>>>24-i%4*8&255)<<24-(r+i)%4*8;else if(65535<n.length)for(i=0;i<e;i+=4)t[r+i>>>2]=n[i>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(4294967296*e.random()|0);return new s.init(n,t)}}),a=n.enc={},u=a.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++){var i=t[r>>>2]>>>24-r%4*8&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new s.init(n,t/2)}},c=a.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new s.init(n,t)}},l=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},h=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,o=this.blockSize,a=i/(4*o),a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0);if(t=a*o,i=e.min(4*t,i),t){for(var u=0;u<t;u+=o)this._doProcessBlock(r,u);u=r.splice(0,t),n.sigBytes-=i}return new s.init(u,i)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=h.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new f.HMAC.init(e,n).finalize(t)}}});var f=n.algo={};return n}(Math);!function(e){for(var t=n,r=t.lib,i=r.WordArray,o=r.Hasher,r=t.algo,s=[],a=[],u=function(e){return 4294967296*(e-(0|e))|0},c=2,l=0;64>l;){var h;e:{h=c;for(var f=e.sqrt(h),d=2;d<=f;d++)if(!(h%d)){h=!1;break e}h=!0}h&&(8>l&&(s[l]=u(e.pow(c,.5))),a[l]=u(e.pow(c,1/3)),l++),c++}var p=[],r=r.SHA256=o.extend({_doReset:function(){this._hash=new i.init(s.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],s=n[3],u=n[4],c=n[5],l=n[6],h=n[7],f=0;64>f;f++){if(16>f)p[f]=0|e[t+f];else{var d=p[f-15],g=p[f-2];p[f]=((d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3)+p[f-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+p[f-16]}d=h+((u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25))+(u&c^~u&l)+a[f]+p[f],g=((r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22))+(r&i^r&o^i&o),h=l,l=c,c=u,u=s+d|0,s=o,o=i,i=r,r=d+g|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+u|0,n[5]=n[5]+c|0,n[6]=n[6]+l|0,n[7]=n[7]+h|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=e.floor(r/4294967296),n[15+(i+64>>>9<<4)]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=o._createHelper(r),t.HmacSHA256=o._createHmacHelper(r)}(Math),function(){var e=n,t=e.enc.Utf8;e.algo.HMAC=e.lib.Base.extend({init:function(e,n){e=this._hasher=new e.init,"string"==typeof n&&(n=t.parse(n));var r=e.blockSize,i=4*r;n.sigBytes>i&&(n=e.finalize(n)),n.clamp();for(var o=this._oKey=n.clone(),s=this._iKey=n.clone(),a=o.words,u=s.words,c=0;c<r;c++)a[c]^=1549556828,u[c]^=909522486;o.sigBytes=s.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher;return e=t.finalize(e),t.reset(),t.finalize(this._oKey.clone().concat(e))}})}(),function(){var e=n,t=e.lib.WordArray;e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp(),e=[];for(var i=0;i<n;i+=3)for(var o=(t[i>>>2]>>>24-i%4*8&255)<<16|(t[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|t[i+2>>>2]>>>24-(i+2)%4*8&255,s=0;4>s&&i+.75*s<n;s++)e.push(r.charAt(o>>>6*(3-s)&63));if(t=r.charAt(64))for(;e.length%4;)e.push(t);return e.join("")},parse:function(e){var n=e.length,r=this._map,i=r.charAt(64);i&&-1!=(i=e.indexOf(i))&&(n=i);for(var i=[],o=0,s=0;s<n;s++)if(s%4){var a=r.indexOf(e.charAt(s-1))<<s%4*2,u=r.indexOf(e.charAt(s))>>>6-s%4*2;i[o>>>2]|=(a|u)<<24-o%4*8,o++}return t.create(i,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(e){function t(e,t,n,r,i,o,s){return((e=e+(t&n|~t&r)+i+s)<<o|e>>>32-o)+t}function r(e,t,n,r,i,o,s){return((e=e+(t&r|n&~r)+i+s)<<o|e>>>32-o)+t}function i(e,t,n,r,i,o,s){return((e=e+(t^n^r)+i+s)<<o|e>>>32-o)+t}function o(e,t,n,r,i,o,s){return((e=e+(n^(t|~r))+i+s)<<o|e>>>32-o)+t}for(var s=n,a=s.lib,u=a.WordArray,c=a.Hasher,a=s.algo,l=[],h=0;64>h;h++)l[h]=4294967296*e.abs(e.sin(h+1))|0;a=a.MD5=c.extend({_doReset:function(){this._hash=new u.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,n){for(var s=0;16>s;s++){var a=n+s,u=e[a];e[a]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}var s=this._hash.words,a=e[n+0],u=e[n+1],c=e[n+2],h=e[n+3],f=e[n+4],d=e[n+5],p=e[n+6],g=e[n+7],y=e[n+8],v=e[n+9],b=e[n+10],_=e[n+11],m=e[n+12],k=e[n+13],P=e[n+14],S=e[n+15],w=s[0],O=s[1],T=s[2],C=s[3],w=t(w,O,T,C,a,7,l[0]),C=t(C,w,O,T,u,12,l[1]),T=t(T,C,w,O,c,17,l[2]),O=t(O,T,C,w,h,22,l[3]),w=t(w,O,T,C,f,7,l[4]),C=t(C,w,O,T,d,12,l[5]),T=t(T,C,w,O,p,17,l[6]),O=t(O,T,C,w,g,22,l[7]),w=t(w,O,T,C,y,7,l[8]),C=t(C,w,O,T,v,12,l[9]),T=t(T,C,w,O,b,17,l[10]),O=t(O,T,C,w,_,22,l[11]),w=t(w,O,T,C,m,7,l[12]),C=t(C,w,O,T,k,12,l[13]),T=t(T,C,w,O,P,17,l[14]),O=t(O,T,C,w,S,22,l[15]),w=r(w,O,T,C,u,5,l[16]),C=r(C,w,O,T,p,9,l[17]),T=r(T,C,w,O,_,14,l[18]),O=r(O,T,C,w,a,20,l[19]),w=r(w,O,T,C,d,5,l[20]),C=r(C,w,O,T,b,9,l[21]),T=r(T,C,w,O,S,14,l[22]),O=r(O,T,C,w,f,20,l[23]),w=r(w,O,T,C,v,5,l[24]),C=r(C,w,O,T,P,9,l[25]),T=r(T,C,w,O,h,14,l[26]),O=r(O,T,C,w,y,20,l[27]),w=r(w,O,T,C,k,5,l[28]),C=r(C,w,O,T,c,9,l[29]),T=r(T,C,w,O,g,14,l[30]),O=r(O,T,C,w,m,20,l[31]),w=i(w,O,T,C,d,4,l[32]),C=i(C,w,O,T,y,11,l[33]),T=i(T,C,w,O,_,16,l[34]),O=i(O,T,C,w,P,23,l[35]),w=i(w,O,T,C,u,4,l[36]),C=i(C,w,O,T,f,11,l[37]),T=i(T,C,w,O,g,16,l[38]),O=i(O,T,C,w,b,23,l[39]),w=i(w,O,T,C,k,4,l[40]),C=i(C,w,O,T,a,11,l[41]),T=i(T,C,w,O,h,16,l[42]),O=i(O,T,C,w,p,23,l[43]),w=i(w,O,T,C,v,4,l[44]),C=i(C,w,O,T,m,11,l[45]),T=i(T,C,w,O,S,16,l[46]),O=i(O,T,C,w,c,23,l[47]),w=o(w,O,T,C,a,6,l[48]),C=o(C,w,O,T,g,10,l[49]),T=o(T,C,w,O,P,15,l[50]),O=o(O,T,C,w,d,21,l[51]),w=o(w,O,T,C,m,6,l[52]),C=o(C,w,O,T,h,10,l[53]),T=o(T,C,w,O,b,15,l[54]),O=o(O,T,C,w,u,21,l[55]),w=o(w,O,T,C,y,6,l[56]),C=o(C,w,O,T,S,10,l[57]),T=o(T,C,w,O,p,15,l[58]),O=o(O,T,C,w,k,21,l[59]),w=o(w,O,T,C,f,6,l[60]),C=o(C,w,O,T,_,10,l[61]),T=o(T,C,w,O,c,15,l[62]),O=o(O,T,C,w,v,21,l[63]);s[0]=s[0]+w|0,s[1]=s[1]+O|0,s[2]=s[2]+T|0,s[3]=s[3]+C|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;n[i>>>5]|=128<<24-i%32;var o=e.floor(r/4294967296);for(n[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n[14+(i+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(n.length+1),this._process(),t=this._hash,n=t.words,r=0;4>r;r++)i=n[r],n[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8);return t},clone:function(){var e=c.clone.call(this);return e._hash=this._hash.clone(),e}}),s.MD5=c._createHelper(a),s.HmacMD5=c._createHmacHelper(a)}(Math),function(){var e=n,t=e.lib,r=t.Base,i=t.WordArray,t=e.algo,o=t.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:t.MD5,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=n.hasher.create(),o=i.create(),s=o.words,a=n.keySize,n=n.iterations;s.length<a;){u&&r.update(u);var u=r.update(e).finalize(t);r.reset();for(var c=1;c<n;c++)u=r.finalize(u),r.reset();o.concat(u)}return o.sigBytes=4*a,o}});e.EvpKDF=function(e,t,n){return o.create(n).compute(e,t)}}(),n.lib.Cipher||function(e){var t=n,r=t.lib,i=r.Base,o=r.WordArray,s=r.BufferedBlockAlgorithm,a=t.enc.Base64,u=t.algo.EvpKDF,c=r.Cipher=s.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(t,n,r){return("string"==typeof n?g:p).encrypt(e,t,n,r)},decrypt:function(t,n,r){return("string"==typeof n?g:p).decrypt(e,t,n,r)}}}});r.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var l=t.mode={},h=function(e,t,n){var r=this._iv;r?this._iv=void 0:r=this._prevBlock;for(var i=0;i<n;i++)e[t+i]^=r[i]},f=(r.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}})).extend();f.Encryptor=f.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize;h.call(this,e,t,r),n.encryptBlock(e,t),this._prevBlock=e.slice(t,t+r)}}),f.Decryptor=f.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,i=e.slice(t,t+r);n.decryptBlock(e,t),h.call(this,e,t,r),this._prevBlock=i}}),l=l.CBC=f,f=(t.pad={}).Pkcs7={pad:function(e,t){for(var n=4*t,n=n-e.sigBytes%n,r=n<<24|n<<16|n<<8|n,i=[],s=0;s<n;s+=4)i.push(r);n=o.create(i,n),e.concat(n)},unpad:function(e){e.sigBytes-=255&e.words[e.sigBytes-1>>>2]}},r.BlockCipher=c.extend({cfg:c.cfg.extend({mode:l,padding:f}),reset:function(){c.reset.call(this);var e=this.cfg,t=e.iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=e.createEncryptor;else n=e.createDecryptor,this._minBufferSize=1;this._mode=n.call(e,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else t=this._process(!0),e.unpad(t);return t},blockSize:4});var d=r.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),l=(t.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext;return e=e.salt,(e?o.create([1398893684,1701076831]).concat(e).concat(t):t).toString(a)},parse:function(e){e=a.parse(e);var t=e.words;if(1398893684==t[0]&&1701076831==t[1]){var n=o.create(t.slice(2,4));t.splice(0,4),e.sigBytes-=16}return d.create({ciphertext:e,salt:n})}},p=r.SerializableCipher=i.extend({cfg:i.extend({format:l}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r);return t=i.finalize(t),i=i.cfg,d.create({ciphertext:t,key:n,iv:i.iv,algorithm:e,mode:i.mode,padding:i.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),t=(t.kdf={}).OpenSSL={execute:function(e,t,n,r){return r||(r=o.random(8)),e=u.create({keySize:t+n}).compute(e,r),n=o.create(e.words.slice(t),4*n),e.sigBytes=4*t,d.create({key:e,iv:n,salt:r})}},g=r.PasswordBasedCipher=p.extend({cfg:p.cfg.extend({kdf:t}),encrypt:function(e,t,n,r){return r=this.cfg.extend(r),n=r.kdf.execute(n,e.keySize,e.ivSize),r.iv=n.iv,e=p.encrypt.call(this,e,t,n.key,r),e.mixIn(n),e},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),n=r.kdf.execute(n,e.keySize,e.ivSize,t.salt),r.iv=n.iv,p.decrypt.call(this,e,t,n.key,r)}})}(),function(){for(var e=n,t=e.lib.BlockCipher,r=e.algo,i=[],o=[],s=[],a=[],u=[],c=[],l=[],h=[],f=[],d=[],p=[],g=0;256>g;g++)p[g]=128>g?g<<1:g<<1^283;for(var y=0,v=0,g=0;256>g;g++){var b=v^v<<1^v<<2^v<<3^v<<4,b=b>>>8^255&b^99;i[y]=b,o[b]=y;var _=p[y],m=p[_],k=p[m],P=257*p[b]^16843008*b;s[y]=P<<24|P>>>8,a[y]=P<<16|P>>>16,u[y]=P<<8|P>>>24,c[y]=P,P=16843009*k^65537*m^257*_^16843008*y,l[b]=P<<24|P>>>8,h[b]=P<<16|P>>>16,f[b]=P<<8|P>>>24,d[b]=P,y?(y=_^p[p[p[k^_]]],v^=p[p[v]]):y=v=1}var S=[0,1,2,4,8,16,32,64,128,27,54],r=r.AES=t.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes/4,e=4*((this._nRounds=n+6)+1),r=this._keySchedule=[],o=0;o<e;o++)if(o<n)r[o]=t[o];else{var s=r[o-1];o%n?6<n&&4==o%n&&(s=i[s>>>24]<<24|i[s>>>16&255]<<16|i[s>>>8&255]<<8|i[255&s]):(s=s<<8|s>>>24,s=i[s>>>24]<<24|i[s>>>16&255]<<16|i[s>>>8&255]<<8|i[255&s],s^=S[o/n|0]<<24),r[o]=r[o-n]^s}for(t=this._invKeySchedule=[],n=0;n<e;n++)o=e-n,s=n%4?r[o]:r[o-4],t[n]=4>n||4>=o?s:l[i[s>>>24]]^h[i[s>>>16&255]]^f[i[s>>>8&255]]^d[i[255&s]]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,s,a,u,c,i)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,l,h,f,d,o),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,o,s,a){for(var u=this._nRounds,c=e[t]^n[0],l=e[t+1]^n[1],h=e[t+2]^n[2],f=e[t+3]^n[3],d=4,p=1;p<u;p++)var g=r[c>>>24]^i[l>>>16&255]^o[h>>>8&255]^s[255&f]^n[d++],y=r[l>>>24]^i[h>>>16&255]^o[f>>>8&255]^s[255&c]^n[d++],v=r[h>>>24]^i[f>>>16&255]^o[c>>>8&255]^s[255&l]^n[d++],f=r[f>>>24]^i[c>>>16&255]^o[l>>>8&255]^s[255&h]^n[d++],c=g,l=y,h=v;g=(a[c>>>24]<<24|a[l>>>16&255]<<16|a[h>>>8&255]<<8|a[255&f])^n[d++],y=(a[l>>>24]<<24|a[h>>>16&255]<<16|a[f>>>8&255]<<8|a[255&c])^n[d++],v=(a[h>>>24]<<24|a[f>>>16&255]<<16|a[c>>>8&255]<<8|a[255&l])^n[d++],f=(a[f>>>24]<<24|a[c>>>16&255]<<16|a[l>>>8&255]<<8|a[255&h])^n[d++],e[t]=g,e[t+1]=y,e[t+2]=v,e[t+3]=f},keySize:8});e.AES=t._createHelper(r)}(),n.mode.ECB=function(){var e=n.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),e.Decryptor=e.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),e}(),e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(9),a=(r(s),n(7)),u=(r(a),n(12)),c=(r(u),n(14)),l=r(c),h=n(17),f=r(h),d=(n(8),n(13)),p=r(d),g=function(){function e(t){var n=t.subscribeEndpoint,r=t.leaveEndpoint,o=t.heartbeatEndpoint,s=t.setStateEndpoint,a=t.timeEndpoint,u=t.config,c=t.crypto,h=t.listenerManager;i(this,e),this._listenerManager=h,this._config=u,this._leaveEndpoint=r,this._heartbeatEndpoint=o,this._setStateEndpoint=s,this._subscribeEndpoint=n,this._crypto=c,this._channels={},this._presenceChannels={},this._channelGroups={},this._presenceChannelGroups={},this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[],this._currentTimetoken=0,this._lastTimetoken=0,this._storedTimetoken=null,this._subscriptionStatusAnnounced=!1,this._isOnline=!0,this._reconnectionManager=new l.default({timeEndpoint:a})}return o(e,[{key:"adaptStateChange",value:function(e,t){var n=this,r=e.state,i=e.channels,o=void 0===i?[]:i,s=e.channelGroups,a=void 0===s?[]:s;return o.forEach(function(e){e in n._channels&&(n._channels[e].state=r)}),a.forEach(function(e){e in n._channelGroups&&(n._channelGroups[e].state=r)}),this._setStateEndpoint({state:r,channels:o,channelGroups:a},t)}},{key:"adaptSubscribeChange",value:function(e){var t=this,n=e.timetoken,r=e.channels,i=void 0===r?[]:r,o=e.channelGroups,s=void 0===o?[]:o,a=e.withPresence,u=void 0!==a&&a;if(!this._config.subscribeKey||""===this._config.subscribeKey)return void(console&&console.log&&console.log("subscribe key missing; aborting subscribe"));n&&(this._lastTimetoken=this._currentTimetoken,this._currentTimetoken=n),"0"!==this._currentTimetoken&&(this._storedTimetoken=this._currentTimetoken,this._currentTimetoken=0),i.forEach(function(e){t._channels[e]={state:{}},u&&(t._presenceChannels[e]={}),t._pendingChannelSubscriptions.push(e)}),s.forEach(function(e){t._channelGroups[e]={state:{}},u&&(t._presenceChannelGroups[e]={}),t._pendingChannelGroupSubscriptions.push(e)}),this._subscriptionStatusAnnounced=!1,this.reconnect()}},{key:"adaptUnsubscribeChange",
	value:function(e,t){var n=this,r=e.channels,i=void 0===r?[]:r,o=e.channelGroups,s=void 0===o?[]:o;i.forEach(function(e){e in n._channels&&delete n._channels[e],e in n._presenceChannels&&delete n._presenceChannels[e]}),s.forEach(function(e){e in n._channelGroups&&delete n._channelGroups[e],e in n._presenceChannelGroups&&delete n._channelGroups[e]}),!1!==this._config.suppressLeaveEvents||t||this._leaveEndpoint({channels:i,channelGroups:s},function(e){e.affectedChannels=i,e.affectedChannelGroups=s,e.currentTimetoken=n._currentTimetoken,e.lastTimetoken=n._lastTimetoken,n._listenerManager.announceStatus(e)}),0===Object.keys(this._channels).length&&0===Object.keys(this._presenceChannels).length&&0===Object.keys(this._channelGroups).length&&0===Object.keys(this._presenceChannelGroups).length&&(this._lastTimetoken=0,this._currentTimetoken=0,this._storedTimetoken=null,this._region=null,this._reconnectionManager.stopPolling()),this.reconnect()}},{key:"unsubscribeAll",value:function(e){this.adaptUnsubscribeChange({channels:this.getSubscribedChannels(),channelGroups:this.getSubscribedChannelGroups()},e)}},{key:"getSubscribedChannels",value:function(){return Object.keys(this._channels)}},{key:"getSubscribedChannelGroups",value:function(){return Object.keys(this._channelGroups)}},{key:"reconnect",value:function(){this._startSubscribeLoop(),this._registerHeartbeatTimer()}},{key:"disconnect",value:function(){this._stopSubscribeLoop(),this._stopHeartbeatTimer(),this._reconnectionManager.stopPolling()}},{key:"_registerHeartbeatTimer",value:function(){this._stopHeartbeatTimer(),this._performHeartbeatLoop(),this._heartbeatTimer=setInterval(this._performHeartbeatLoop.bind(this),1e3*this._config.getHeartbeatInterval())}},{key:"_stopHeartbeatTimer",value:function(){this._heartbeatTimer&&(clearInterval(this._heartbeatTimer),this._heartbeatTimer=null)}},{key:"_performHeartbeatLoop",value:function(){var e=this,t=Object.keys(this._channels),n=Object.keys(this._channelGroups),r={};if(0!==t.length||0!==n.length){t.forEach(function(t){var n=e._channels[t].state;Object.keys(n).length&&(r[t]=n)}),n.forEach(function(t){var n=e._channelGroups[t].state;Object.keys(n).length&&(r[t]=n)});var i=function(t){t.error&&e._config.announceFailedHeartbeats&&e._listenerManager.announceStatus(t),t.error&&e._config.autoNetworkDetection&&e._isOnline&&(e._isOnline=!1,e.disconnect(),e._listenerManager.announceNetworkDown(),e.reconnect()),!t.error&&e._config.announceSuccessfulHeartbeats&&e._listenerManager.announceStatus(t)};this._heartbeatEndpoint({channels:t,channelGroups:n,state:r},i.bind(this))}}},{key:"_startSubscribeLoop",value:function(){this._stopSubscribeLoop();var e=[],t=[];if(Object.keys(this._channels).forEach(function(t){return e.push(t)}),Object.keys(this._presenceChannels).forEach(function(t){return e.push(t+"-pnpres")}),Object.keys(this._channelGroups).forEach(function(e){return t.push(e)}),Object.keys(this._presenceChannelGroups).forEach(function(e){return t.push(e+"-pnpres")}),0!==e.length||0!==t.length){var n={channels:e,channelGroups:t,timetoken:this._currentTimetoken,filterExpression:this._config.filterExpression,region:this._region};this._subscribeCall=this._subscribeEndpoint(n,this._processSubscribeResponse.bind(this))}}},{key:"_processSubscribeResponse",value:function(e,t){var n=this;if(e.error)return void(e.category===p.default.PNTimeoutCategory?this._startSubscribeLoop():e.category===p.default.PNNetworkIssuesCategory?(this.disconnect(),e.error&&this._config.autoNetworkDetection&&this._isOnline&&(this._isOnline=!1,this._listenerManager.announceNetworkDown()),this._reconnectionManager.onReconnection(function(){n._config.autoNetworkDetection&&!n._isOnline&&(n._isOnline=!0,n._listenerManager.announceNetworkUp()),n.reconnect(),n._subscriptionStatusAnnounced=!0;var t={category:p.default.PNReconnectedCategory,operation:e.operation,lastTimetoken:n._lastTimetoken,currentTimetoken:n._currentTimetoken};n._listenerManager.announceStatus(t)}),this._reconnectionManager.startPolling(),this._listenerManager.announceStatus(e)):e.category===p.default.PNBadRequestCategory?(this._stopHeartbeatTimer(),this._listenerManager.announceStatus(e)):this._listenerManager.announceStatus(e));if(this._storedTimetoken?(this._currentTimetoken=this._storedTimetoken,this._storedTimetoken=null):(this._lastTimetoken=this._currentTimetoken,this._currentTimetoken=t.metadata.timetoken),!this._subscriptionStatusAnnounced){var r={};r.category=p.default.PNConnectedCategory,r.operation=e.operation,r.affectedChannels=this._pendingChannelSubscriptions,r.subscribedChannels=this.getSubscribedChannels(),r.affectedChannelGroups=this._pendingChannelGroupSubscriptions,r.lastTimetoken=this._lastTimetoken,r.currentTimetoken=this._currentTimetoken,this._subscriptionStatusAnnounced=!0,this._listenerManager.announceStatus(r),this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[]}var i=t.messages||[],o=this._config.requestMessageCountThreshold;if(o&&i.length>=o){var s={};s.category=p.default.PNRequestMessageCountExceededCategory,s.operation=e.operation,this._listenerManager.announceStatus(s)}i.forEach(function(e){var t=e.channel,r=e.subscriptionMatch,i=e.publishMetaData;if(t===r&&(r=null),f.default.endsWith(e.channel,"-pnpres")){var o={};o.channel=null,o.subscription=null,o.actualChannel=null!=r?t:null,o.subscribedChannel=null!=r?r:t,t&&(o.channel=t.substring(0,t.lastIndexOf("-pnpres"))),r&&(o.subscription=r.substring(0,r.lastIndexOf("-pnpres"))),o.action=e.payload.action,o.state=e.payload.data,o.timetoken=i.publishTimetoken,o.occupancy=e.payload.occupancy,o.uuid=e.payload.uuid,o.timestamp=e.payload.timestamp,e.payload.join&&(o.join=e.payload.join),e.payload.leave&&(o.leave=e.payload.leave),e.payload.timeout&&(o.timeout=e.payload.timeout),n._listenerManager.announcePresence(o)}else{var s={};s.channel=null,s.subscription=null,s.actualChannel=null!=r?t:null,s.subscribedChannel=null!=r?r:t,s.channel=t,s.subscription=r,s.timetoken=i.publishTimetoken,s.publisher=e.issuingClientId,e.userMetadata&&(s.userMetadata=e.userMetadata),n._config.cipherKey?s.message=n._crypto.decrypt(e.payload):s.message=e.payload,n._listenerManager.announceMessage(s)}}),this._region=t.metadata.region,this._startSubscribeLoop()}},{key:"_stopSubscribeLoop",value:function(){this._subscribeCall&&(this._subscribeCall.abort(),this._subscribeCall=null)}}]),e}();t.default=g,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=(n(8),n(13)),s=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(){function e(){r(this,e),this._listeners=[]}return i(e,[{key:"addListener",value:function(e){this._listeners.push(e)}},{key:"removeListener",value:function(e){var t=[];this._listeners.forEach(function(n){n!==e&&t.push(n)}),this._listeners=t}},{key:"removeAllListeners",value:function(){this._listeners=[]}},{key:"announcePresence",value:function(e){this._listeners.forEach(function(t){t.presence&&t.presence(e)})}},{key:"announceStatus",value:function(e){this._listeners.forEach(function(t){t.status&&t.status(e)})}},{key:"announceMessage",value:function(e){this._listeners.forEach(function(t){t.message&&t.message(e)})}},{key:"announceNetworkUp",value:function(){var e={};e.category=s.default.PNNetworkUpCategory,this.announceStatus(e)}},{key:"announceNetworkDown",value:function(){var e={};e.category=s.default.PNNetworkDownCategory,this.announceStatus(e)}}]),e}();t.default=a,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PNNetworkUpCategory:"PNNetworkUpCategory",PNNetworkDownCategory:"PNNetworkDownCategory",PNNetworkIssuesCategory:"PNNetworkIssuesCategory",PNTimeoutCategory:"PNTimeoutCategory",PNBadRequestCategory:"PNBadRequestCategory",PNAccessDeniedCategory:"PNAccessDeniedCategory",PNUnknownCategory:"PNUnknownCategory",PNReconnectedCategory:"PNReconnectedCategory",PNConnectedCategory:"PNConnectedCategory",PNRequestMessageCountExceededCategory:"PNRequestMessageCountExceededCategory"},e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(15),s=(function(e){e&&e.__esModule}(o),n(8),function(){function e(t){var n=t.timeEndpoint;r(this,e),this._timeEndpoint=n}return i(e,[{key:"onReconnection",value:function(e){this._reconnectionCallback=e}},{key:"startPolling",value:function(){this._timeTimer=setInterval(this._performTimeLoop.bind(this),3e3)}},{key:"stopPolling",value:function(){clearInterval(this._timeTimer)}},{key:"_performTimeLoop",value:function(){var e=this;this._timeEndpoint(function(t){t.error||(clearInterval(e._timeTimer),e._reconnectionCallback())})}}]),e}());t.default=s,e.exports=t.default},function(e,t,n){"use strict";function r(){return h.default.PNTimeOperation}function i(){return"/time/0"}function o(e){return e.config.getTransactionTimeout()}function s(){return{}}function a(){return!1}function u(e,t){return{timetoken:t[0]}}function c(){}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.getURL=i,t.getRequestTimeout=o,t.prepareParams=s,t.isAuthSupported=a,t.handleResponse=u,t.validateParams=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PNTimeOperation:"PNTimeOperation",PNHistoryOperation:"PNHistoryOperation",PNFetchMessagesOperation:"PNFetchMessagesOperation",PNSubscribeOperation:"PNSubscribeOperation",PNUnsubscribeOperation:"PNUnsubscribeOperation",PNPublishOperation:"PNPublishOperation",PNPushNotificationEnabledChannelsOperation:"PNPushNotificationEnabledChannelsOperation",PNRemoveAllPushNotificationsOperation:"PNRemoveAllPushNotificationsOperation",PNWhereNowOperation:"PNWhereNowOperation",PNSetStateOperation:"PNSetStateOperation",PNHereNowOperation:"PNHereNowOperation",PNGetStateOperation:"PNGetStateOperation",PNHeartbeatOperation:"PNHeartbeatOperation",PNChannelGroupsOperation:"PNChannelGroupsOperation",PNRemoveGroupOperation:"PNRemoveGroupOperation",PNChannelsForGroupOperation:"PNChannelsForGroupOperation",PNAddChannelsToGroupOperation:"PNAddChannelsToGroupOperation",PNRemoveChannelsFromGroupOperation:"PNRemoveChannelsFromGroupOperation",PNAccessManagerGrant:"PNAccessManagerGrant",PNAccessManagerAudit:"PNAccessManagerAudit"},e.exports=t.default},function(e,t){"use strict";function n(e){var t=[];return Object.keys(e).forEach(function(e){return t.push(e)}),t}function r(e){return encodeURIComponent(e).replace(/[!~*'()]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){return n(e).sort()}function o(e){return i(e).map(function(t){return t+"="+r(e[t])}).join("&")}function s(e,t){return-1!==e.indexOf(t,this.length-t.length)}function a(){var e=void 0,t=void 0;return{promise:new Promise(function(n,r){e=n,t=r}),reject:t,fulfill:e}}e.exports={signPamFromParams:o,endsWith:s,createPromise:a,encodeString:r}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){return e.type=t,e.error=!0,e}function u(e){return a({message:e},"validationError")}function c(e,t,n){return e.usePost&&e.usePost(t,n)?e.postURL(t,n):e.getURL(t,n)}function l(e){var t="PubNub-JS-"+e.sdkFamily;return e.partnerId&&(t+="-"+e.partnerId),t+="/"+e.getVersion()}function h(e,t,n){var r=e.config,i=e.crypto;n.timestamp=Math.floor((new Date).getTime()/1e3);var o=r.subscribeKey+"\n"+r.publishKey+"\n"+t+"\n";o+=g.default.signPamFromParams(n);var s=i.HMACSHA256(o);s=s.replace(/\+/g,"-"),s=s.replace(/\//g,"_"),n.signature=s}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.networking,r=e.config,i=null,o=null,s={};t.getOperation()===b.default.PNTimeOperation||t.getOperation()===b.default.PNChannelGroupsOperation?i=arguments.length<=2?void 0:arguments[2]:(s=arguments.length<=2?void 0:arguments[2],i=arguments.length<=3?void 0:arguments[3]),"undefined"==typeof Promise||i||(o=g.default.createPromise());var a=t.validateParams(e,s);if(!a){var f=t.prepareParams(e,s),p=c(t,e,s),y=void 0,v={url:p,operation:t.getOperation(),timeout:t.getRequestTimeout(e)};f.uuid=r.UUID,f.pnsdk=l(r),r.useInstanceId&&(f.instanceid=r.instanceId),r.useRequestId&&(f.requestid=d.default.v4()),t.isAuthSupported()&&r.getAuthKey()&&(f.auth=r.getAuthKey()),r.secretKey&&h(e,p,f);var m=function(n,r){if(n.error)return void(i?i(n):o&&o.reject(new _("PubNub call failed, check status for details",n)));var a=t.handleResponse(e,r,s);i?i(n,a):o&&o.fulfill(a)};if(t.usePost&&t.usePost(e,s)){var k=t.postPayload(e,s);y=n.POST(f,k,v,m)}else y=n.GET(f,v,m);return t.getOperation()===b.default.PNSubscribeOperation?y:o?o.promise:void 0}return i?i(u(a)):o?(o.reject(new _("Validation failed, check status for details",u(a))),o.promise):void 0};var f=n(2),d=r(f),p=(n(8),n(17)),g=r(p),y=n(7),v=(r(y),n(16)),b=r(v),_=function(e){function t(e,n){i(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.name=r.constructor.name,r.status=n,r.message=e,r}return s(t,e),t}(Error);e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNAddChannelsToGroupOperation}function o(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function s(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channels;return{add:(void 0===n?[]:n).join(",")}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=o,t.getURL=s,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNRemoveChannelsFromGroupOperation}function o(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function s(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channels;return{remove:(void 0===n?[]:n).join(",")}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=o,t.getURL=s,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNRemoveGroupOperation}function o(e,t){var n=t.channelGroup,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel Group"}function s(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)+"/remove"}function a(){return!0}function u(e){return e.config.getTransactionTimeout()}function c(){return{}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=o,t.getURL=s,t.isAuthSupported=a,t.getRequestTimeout=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(){return h.default.PNChannelGroupsOperation}function i(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e){return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group"}function s(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(){return{}}function c(e,t){return{groups:t.payload.groups}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=o,t.getRequestTimeout=s,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNChannelsForGroupOperation}function o(e,t){var n=t.channelGroup,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel Group"}function s(e,t){var n=t.channelGroup;return"/v1/channel-registration/sub-key/"+e.config.subscribeKey+"/channel-group/"+p.default.encodeString(n)}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(){return{}}function l(e,t){return{channels:t.payload.channels}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=o,t.getURL=s,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(){return h.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=t.channels,o=e.config;return n?r?i&&0!==i.length?o.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function o(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function s(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(e,t){var n=t.pushGateway,r=t.channels;return{type:n,add:(void 0===r?[]:r).join(",")}}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=o,t.getRequestTimeout=s,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return h.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=t.channels,o=e.config;return n?r?i&&0!==i.length?o.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function o(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function s(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(e,t){var n=t.pushGateway,r=t.channels;return{type:n,remove:(void 0===r?[]:r).join(",")}}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=o,t.getRequestTimeout=s,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return h.default.PNPushNotificationEnabledChannelsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function o(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n}function s(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(e,t){return{type:t.pushGateway}}function c(e,t){return{channels:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=o,t.getRequestTimeout=s,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return h.default.PNRemoveAllPushNotificationsOperation}function i(e,t){var n=t.device,r=t.pushGateway,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function o(e,t){var n=t.device;return"/v1/push/sub-key/"+e.config.subscribeKey+"/devices/"+n+"/remove"}function s(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(e,t){return{type:t.pushGateway}}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=o,t.getRequestTimeout=s,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNUnsubscribeOperation}function o(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,o=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(o)+"/leave"}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};return r.length>0&&(i["channel-group"]=r.join(",")),i}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=o,t.getURL=s,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(){return h.default.PNWhereNowOperation}function i(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r;return"/v2/presence/sub-key/"+n.subscribeKey+"/uuid/"+i}function s(e){return e.config.getTransactionTimeout()}function a(){return!0}function u(){return{}}function c(e,t){return{channels:t.payload.channels}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=o,t.getRequestTimeout=s,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNHeartbeatOperation}function o(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,o=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(o)+"/heartbeat"}function a(){return!0}function u(e){return e.config.getTransactionTimeout()}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.state,o=void 0===i?{}:i,s=e.config,a={};return r.length>0&&(a["channel-group"]=r.join(",")),a.state=JSON.stringify(o),a.heartbeat=s.getPresenceTimeout(),a}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=o,t.getURL=s,t.isAuthSupported=a,t.getRequestTimeout=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNGetStateOperation}function o(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r,o=t.channels,s=void 0===o?[]:o,a=s.length>0?s.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(a)+"/uuid/"+i}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};return r.length>0&&(i["channel-group"]=r.join(",")),i}function l(e,t,n){var r=n.channels,i=void 0===r?[]:r,o=n.channelGroups,s=void 0===o?[]:o,a={};return 1===i.length&&0===s.length?a[i[0]]=t.payload:a=t.payload,{channels:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=o,t.getURL=s,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNSetStateOperation}function o(e,t){var n=e.config,r=t.state,i=t.channels,o=void 0===i?[]:i,s=t.channelGroups,a=void 0===s?[]:s;return r?n.subscribeKey?0===o.length&&0===a.length?"Please provide a list of channels and/or channel-groups":void 0:"Missing Subscribe Key":"Missing State"}function s(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,o=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+p.default.encodeString(o)+"/uuid/"+n.UUID+"/data"}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.state,r=t.channelGroups,i=void 0===r?[]:r,o={};return o.state=JSON.stringify(n),i.length>0&&(o["channel-group"]=i.join(",")),o}function l(e,t){return{state:t.payload}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=o,t.getURL=s,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNHereNowOperation}function o(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,o=t.channelGroups,s=void 0===o?[]:o,a="/v2/presence/sub-key/"+n.subscribeKey;if(i.length>0||s.length>0){var u=i.length>0?i.join(","):",";a+="/channel/"+p.default.encodeString(u)}return a}function a(e){return e.config.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.includeUUIDs,o=void 0===i||i,s=t.includeState,a=void 0!==s&&s,u={};return o||(u.disable_uuids=1),a&&(u.state=1),r.length>0&&(u["channel-group"]=r.join(",")),u}function l(e,t,n){var r=n.channels,i=void 0===r?[]:r,o=n.channelGroups,s=void 0===o?[]:o,a=n.includeUUIDs,u=void 0===a||a,c=n.includeState,l=void 0!==c&&c;return i.length>1||s.length>0||0===s.length&&0===i.length?function(){var e={};return e.totalChannels=t.payload.total_channels,e.totalOccupancy=t.payload.total_occupancy,e.channels={},Object.keys(t.payload.channels).forEach(function(n){var r=t.payload.channels[n],i=[];return e.channels[n]={occupants:i,name:n,occupancy:r.occupancy},u&&r.uuids.forEach(function(e){l?i.push({state:e.state,uuid:e.uuid}):i.push({state:null,uuid:e})}),e}),e}():function(){var e={},n=[];return e.totalChannels=1,e.totalOccupancy=t.occupancy,e.channels={},e.channels[i[0]]={occupants:n,name:i[0],occupancy:t.occupancy},u&&t.uuids.forEach(function(e){l?n.push({state:e.state,uuid:e.uuid}):n.push({state:null,uuid:e})}),e}()}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=o,t.getURL=s,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(){return h.default.PNAccessManagerAudit}function i(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function o(e){return"/v2/auth/audit/sub-key/"+e.config.subscribeKey}function s(e){return e.config.getTransactionTimeout()}function a(){return!1}function u(e,t){var n=t.channel,r=t.channelGroup,i=t.authKeys,o=void 0===i?[]:i,s={};return n&&(s.channel=n),r&&(s["channel-group"]=r),o.length>0&&(s.auth=o.join(",")),s}function c(e,t){return t.payload}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=o,t.getRequestTimeout=s,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(){return h.default.PNAccessManagerGrant}function i(e){var t=e.config;return t.subscribeKey?t.publishKey?t.secretKey?void 0:"Missing Secret Key":"Missing Publish Key":"Missing Subscribe Key"}function o(e){return"/v2/auth/grant/sub-key/"+e.config.subscribeKey}function s(e){return e.config.getTransactionTimeout()}function a(){return!1}function u(e,t){var n=t.channels,r=void 0===n?[]:n,i=t.channelGroups,o=void 0===i?[]:i,s=t.ttl,a=t.read,u=void 0!==a&&a,c=t.write,l=void 0!==c&&c,h=t.manage,f=void 0!==h&&h,d=t.authKeys,p=void 0===d?[]:d,g={};return g.r=u?"1":"0",g.w=l?"1":"0",g.m=f?"1":"0",r.length>0&&(g.channel=r.join(",")),o.length>0&&(g["channel-group"]=o.join(",")),p.length>0&&(g.auth=p.join(",")),(s||0===s)&&(g.ttl=s),g}function c(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=r,t.validateParams=i,t.getURL=o,t.getRequestTimeout=s,t.isAuthSupported=a,t.prepareParams=u,t.handleResponse=c;var l=(n(8),n(16)),h=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function o(){return v.default.PNPublishOperation}function s(e,t){var n=e.config,r=t.message;return t.channel?r?n.subscribeKey?void 0:"Missing Subscribe Key":"Missing Message":"Missing Channel"}function a(e,t){var n=t.sendByPost;return void 0!==n&&n}function u(e,t){var n=e.config,r=t.channel,o=t.message,s=i(e,o);return"/publish/"+n.publishKey+"/"+n.subscribeKey+"/0/"+_.default.encodeString(r)+"/0/"+_.default.encodeString(s)}function c(e,t){var n=e.config,r=t.channel;return"/publish/"+n.publishKey+"/"+n.subscribeKey+"/0/"+_.default.encodeString(r)+"/0"}function l(e){return e.config.getTransactionTimeout()}function h(){return!0}function f(e,t){return i(e,t.message)}function d(e,t){var n=t.meta,r=t.replicate,i=void 0===r||r,o=t.storeInHistory,s=t.ttl,a={};return null!=o&&(a.store=o?"1":"0"),s&&(a.ttl=s),!1===i&&(a.norep="true"),n&&"object"===(void 0===n?"undefined":g(n))&&(a.meta=JSON.stringify(n)),a}function p(e,t){return{timetoken:t[2]}}Object.defineProperty(t,"__esModule",{value:!0});var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getOperation=o,t.validateParams=s,t.usePost=a,t.getURL=u,t.postURL=c,t.getRequestTimeout=l,t.isAuthSupported=h,t.postPayload=f,t.prepareParams=d,t.handleResponse=p;var y=(n(8),n(16)),v=r(y),b=n(17),_=r(b)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}function o(){return d.default.PNHistoryOperation}function s(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channel"}function a(e,t){var n=t.channel;return"/v2/history/sub-key/"+e.config.subscribeKey+"/channel/"+g.default.encodeString(n)}function u(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){var n=t.start,r=t.end,i=t.reverse,o=t.count,s=void 0===o?100:o,a=t.stringifiedTimeToken,u=void 0!==a&&a,c={include_token:"true"};return c.count=s,n&&(c.start=n),r&&(c.end=r),u&&(c.string_message_token="true"),
	null!=i&&(c.reverse=i.toString()),c}function h(e,t){var n={messages:[],startTimeToken:t[1],endTimeToken:t[2]};return t[0].forEach(function(t){var r={timetoken:t.timetoken,entry:i(e,t.message)};n.messages.push(r)}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=o,t.validateParams=s,t.getURL=a,t.getRequestTimeout=u,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=h;var f=(n(8),n(16)),d=r(f),p=n(17),g=r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}function o(){return d.default.PNFetchMessagesOperation}function s(e,t){var n=t.channels,r=e.config;return n&&0!==n.length?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channels"}function a(e,t){var n=t.channels,r=void 0===n?[]:n,i=e.config,o=r.length>0?r.join(","):",";return"/v3/history/sub-key/"+i.subscribeKey+"/channel/"+g.default.encodeString(o)}function u(e){return e.config.getTransactionTimeout()}function c(){return!0}function l(e,t){var n=t.start,r=t.end,i=t.count,o={};return i&&(o.max=i),n&&(o.start=n),r&&(o.end=r),o}function h(e,t){var n={channels:{}};return Object.keys(t.channels||{}).forEach(function(r){n.channels[r]=[],(t.channels[r]||[]).forEach(function(t){var o={};o.channel=r,o.subscription=null,o.timetoken=t.timetoken,o.message=i(e,t.message),n.channels[r].push(o)})}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=o,t.validateParams=s,t.getURL=a,t.getRequestTimeout=u,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=h;var f=(n(8),n(16)),d=r(f),p=n(17),g=r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNSubscribeOperation}function o(e){if(!e.config.subscribeKey)return"Missing Subscribe Key"}function s(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,o=i.length>0?i.join(","):",";return"/v2/subscribe/"+n.subscribeKey+"/"+p.default.encodeString(o)+"/0"}function a(e){return e.config.getSubscribeTimeout()}function u(){return!0}function c(e,t){var n=e.config,r=t.channelGroups,i=void 0===r?[]:r,o=t.timetoken,s=t.filterExpression,a=t.region,u={heartbeat:n.getPresenceTimeout()};return i.length>0&&(u["channel-group"]=i.join(",")),s&&s.length>0&&(u["filter-expr"]=s),o&&(u.tt=o),a&&(u.tr=a),u}function l(e,t){var n=[];t.m.forEach(function(e){var t={publishTimetoken:e.p.t,region:e.p.r},r={shard:parseInt(e.a,10),subscriptionMatch:e.b,channel:e.c,payload:e.d,flags:e.f,issuingClientId:e.i,subscribeKey:e.k,originationTimetoken:e.o,userMetadata:e.u,publishMetaData:t};n.push(r)});var r={timetoken:t.t.t,region:t.t.r};return{messages:n,metadata:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=o,t.getURL=s,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(8),n(16)),f=r(h),d=n(17),p=r(d)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),a=(r(s),n(13)),u=r(a),c=(n(8),function(){function e(t){var n=this;i(this,e),this._modules={},Object.keys(t).forEach(function(e){n._modules[e]=t[e].bind(n)})}return o(e,[{key:"init",value:function(e){this._config=e,this._maxSubDomain=20,this._currentSubDomain=Math.floor(Math.random()*this._maxSubDomain),this._providedFQDN=(this._config.secure?"https://":"http://")+this._config.origin,this._coreParams={},this.shiftStandardOrigin()}},{key:"nextOrigin",value:function(){if(-1===this._providedFQDN.indexOf("pubsub."))return this._providedFQDN;var e=void 0;return this._currentSubDomain=this._currentSubDomain+1,this._currentSubDomain>=this._maxSubDomain&&(this._currentSubDomain=1),e=this._currentSubDomain.toString(),this._providedFQDN.replace("pubsub","ps"+e)}},{key:"shiftStandardOrigin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._standardOrigin=this.nextOrigin(e),this._standardOrigin}},{key:"getStandardOrigin",value:function(){return this._standardOrigin}},{key:"POST",value:function(e,t,n,r){return this._modules.post(e,t,n,r)}},{key:"GET",value:function(e,t,n){return this._modules.get(e,t,n)}},{key:"_detectErrorCategory",value:function(e){if("ENOTFOUND"===e.code)return u.default.PNNetworkIssuesCategory;if("ECONNREFUSED"===e.code)return u.default.PNNetworkIssuesCategory;if("ECONNRESET"===e.code)return u.default.PNNetworkIssuesCategory;if("EAI_AGAIN"===e.code)return u.default.PNNetworkIssuesCategory;if(0===e.status||e.hasOwnProperty("status")&&void 0===e.status)return u.default.PNNetworkIssuesCategory;if(e.timeout)return u.default.PNTimeoutCategory;if(e.response){if(e.response.badRequest)return u.default.PNBadRequestCategory;if(e.response.forbidden)return u.default.PNAccessDeniedCategory}return u.default.PNUnknownCategory}}]),e}());t.default=c,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={get:function(e){try{return localStorage.getItem(e)}catch(e){return null}},set:function(e,t){try{return localStorage.setItem(e,t)}catch(e){return null}}},e.exports=t.default},function(e,t,n){"use strict";function r(e){var t=(new Date).getTime(),n=(new Date).toISOString(),r=function(){return console&&console.log?console:window&&window.console&&window.console.log?window.console:console}();r.log("<<<<<"),r.log("["+n+"]","\n",e.url,"\n",e.qs),r.log("-----"),e.on("response",function(n){var i=(new Date).getTime(),o=i-t,s=(new Date).toISOString();r.log(">>>>>>"),r.log("["+s+" / "+o+"]","\n",e.url,"\n",e.qs,"\n",n.text),r.log("-----")})}function i(e,t,n){var i=this;return this._config.logVerbosity&&(e=e.use(r)),this._config.proxy&&this._modules.proxy&&(e=this._modules.proxy.call(this,e)),this._config.keepAlive&&this._modules.keepAlive&&(e=this._module.keepAlive(e)),e.timeout(t.timeout).end(function(e,r){var o={};if(o.error=null!==e,o.operation=t.operation,r&&r.status&&(o.statusCode=r.status),e)return o.errorData=e,o.category=i._detectErrorCategory(e),n(o,null);var s=JSON.parse(r.text);return n(o,s)})}function o(e,t,n){var r=u.default.get(this.getStandardOrigin()+t.url).query(e);return i.call(this,r,t,n)}function s(e,t,n,r){var o=u.default.post(this.getStandardOrigin()+n.url).query(e).send(t);return i.call(this,o,n,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.get=o,t.post=s;var a=n(43),u=function(e){return e&&e.__esModule?e:{default:e}}(a);n(8)},function(e,t,n){function r(){}function i(e){if(!v(e))return e;var t=[];for(var n in e)o(t,n,e[n]);return t.join("&")}function o(e,t,n){if(null!=n)if(Array.isArray(n))n.forEach(function(n){o(e,t,n)});else if(v(n))for(var r in n)o(e,t+"["+r+"]",n[r]);else e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));else null===n&&e.push(encodeURIComponent(t))}function s(e){for(var t,n,r={},i=e.split("&"),o=0,s=i.length;o<s;++o)t=i[o],n=t.indexOf("="),-1==n?r[decodeURIComponent(t)]="":r[decodeURIComponent(t.slice(0,n))]=decodeURIComponent(t.slice(n+1));return r}function a(e){var t,n,r,i,o=e.split(/\r?\n/),s={};o.pop();for(var a=0,u=o.length;a<u;++a)n=o[a],t=n.indexOf(":"),r=n.slice(0,t).toLowerCase(),i=_(n.slice(t+1)),s[r]=i;return s}function u(e){return/[\/+]json\b/.test(e)}function c(e){return e.split(/ *; */).shift()}function l(e){return e.split(/ *; */).reduce(function(e,t){var n=t.split(/ *= */),r=n.shift(),i=n.shift();return r&&i&&(e[r]=i),e},{})}function h(e,t){t=t||{},this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this._setStatusProperties(this.xhr.status),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function f(e,t){var n=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",function(){var e=null,t=null;try{t=new h(n)}catch(t){return e=new Error("Parser is unable to parse the response"),e.parse=!0,e.original=t,e.rawResponse=n.xhr&&n.xhr.responseText?n.xhr.responseText:null,e.statusCode=n.xhr&&n.xhr.status?n.xhr.status:null,n.callback(e)}n.emit("response",t);var r;try{(t.status<200||t.status>=300)&&(r=new Error(t.statusText||"Unsuccessful HTTP response"),r.original=e,r.response=t,r.status=t.status)}catch(e){r=e}r?n.callback(r,t):n.callback(null,t)})}function d(e,t){var n=b("DELETE",e);return t&&n.end(t),n}var p;"undefined"!=typeof window?p=window:"undefined"!=typeof self?p=self:(console.warn("Using browser-only version of superagent in non-browser environment"),p=this);var g=n(44),y=n(45),v=n(46),b=e.exports=n(47).bind(null,f);b.getXHR=function(){if(!(!p.XMLHttpRequest||p.location&&"file:"==p.location.protocol&&p.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only verison of superagent could not find XHR")};var _="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};b.serializeObject=i,b.parseString=s,b.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},b.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},b.parse={"application/x-www-form-urlencoded":s,"application/json":JSON.parse},h.prototype.get=function(e){return this.header[e.toLowerCase()]},h.prototype._setHeaderProperties=function(e){var t=this.header["content-type"]||"";this.type=c(t);var n=l(t);for(var r in n)this[r]=n[r]},h.prototype._parseBody=function(e){var t=b.parse[this.type];return!t&&u(this.type)&&(t=b.parse["application/json"]),t&&e&&(e.length||e instanceof Object)?t(e):null},h.prototype._setStatusProperties=function(e){1223===e&&(e=204);var t=e/100|0;this.status=this.statusCode=e,this.statusType=t,this.info=1==t,this.ok=2==t,this.clientError=4==t,this.serverError=5==t,this.error=(4==t||5==t)&&this.toError(),this.accepted=202==e,this.noContent=204==e,this.badRequest=400==e,this.unauthorized=401==e,this.notAcceptable=406==e,this.notFound=404==e,this.forbidden=403==e},h.prototype.toError=function(){var e=this.req,t=e.method,n=e.url,r="cannot "+t+" "+n+" ("+this.status+")",i=new Error(r);return i.status=this.status,i.method=t,i.url=n,i},b.Response=h,g(f.prototype);for(var m in y)f.prototype[m]=y[m];f.prototype.type=function(e){return this.set("Content-Type",b.types[e]||e),this},f.prototype.responseType=function(e){return this._responseType=e,this},f.prototype.accept=function(e){return this.set("Accept",b.types[e]||e),this},f.prototype.auth=function(e,t,n){switch(n||(n={type:"basic"}),n.type){case"basic":var r=btoa(e+":"+t);this.set("Authorization","Basic "+r);break;case"auto":this.username=e,this.password=t}return this},f.prototype.query=function(e){return"string"!=typeof e&&(e=i(e)),e&&this._query.push(e),this},f.prototype.attach=function(e,t,n){return this._getFormData().append(e,t,n||t.name),this},f.prototype._getFormData=function(){return this._formData||(this._formData=new p.FormData),this._formData},f.prototype.callback=function(e,t){var n=this._callback;this.clearTimeout(),n(e,t)},f.prototype.crossDomainError=function(){var e=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain=!0,e.status=this.status,e.method=this.method,e.url=this.url,this.callback(e)},f.prototype._timeoutError=function(){var e=this._timeout,t=new Error("timeout of "+e+"ms exceeded");t.timeout=e,this.callback(t)},f.prototype._appendQueryString=function(){var e=this._query.join("&");e&&(this.url+=~this.url.indexOf("?")?"&"+e:"?"+e)},f.prototype.end=function(e){var t=this,n=this.xhr=b.getXHR(),i=this._timeout,o=this._formData||this._data;this._callback=e||r,n.onreadystatechange=function(){if(4==n.readyState){var e;try{e=n.status}catch(t){e=0}if(0==e){if(t.timedout)return t._timeoutError();if(t._aborted)return;return t.crossDomainError()}t.emit("end")}};var s=function(e,n){n.total>0&&(n.percent=n.loaded/n.total*100),n.direction=e,t.emit("progress",n)};if(this.hasListeners("progress"))try{n.onprogress=s.bind(null,"download"),n.upload&&(n.upload.onprogress=s.bind(null,"upload"))}catch(e){}if(i&&!this._timer&&(this._timer=setTimeout(function(){t.timedout=!0,t.abort()},i)),this._appendQueryString(),this.username&&this.password?n.open(this.method,this.url,!0,this.username,this.password):n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof o&&!this._isHost(o)){var a=this._header["content-type"],c=this._serializer||b.serialize[a?a.split(";")[0]:""];!c&&u(a)&&(c=b.serialize["application/json"]),c&&(o=c(o))}for(var l in this.header)null!=this.header[l]&&n.setRequestHeader(l,this.header[l]);return this._responseType&&(n.responseType=this._responseType),this.emit("request",this),n.send(void 0!==o?o:null),this},b.Request=f,b.get=function(e,t,n){var r=b("GET",e);return"function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},b.head=function(e,t,n){var r=b("HEAD",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.options=function(e,t,n){var r=b("OPTIONS",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.del=d,b.delete=d,b.patch=function(e,t,n){var r=b("PATCH",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.post=function(e,t,n){var r=b("POST",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.put=function(e,t,n){var r=b("PUT",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r}},function(e,t,n){function r(e){if(e)return i(e)}function i(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if((r=n[i])===t||r.fn===t){n.splice(i,1);break}return this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks["$"+e];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},function(e,t,n){var r=n(46);t.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},t.parse=function(e){return this._parser=e,this},t.serialize=function(e){return this._serializer=e,this},t.timeout=function(e){return this._timeout=e,this},t.then=function(e,t){if(!this._fullfilledPromise){var n=this;this._fullfilledPromise=new Promise(function(e,t){n.end(function(n,r){n?t(n):e(r)})})}return this._fullfilledPromise.then(e,t)},t.catch=function(e){return this.then(void 0,e)},t.use=function(e){return e(this),this},t.get=function(e){return this._header[e.toLowerCase()]},t.getHeader=t.get,t.set=function(e,t){if(r(e)){for(var n in e)this.set(n,e[n]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},t.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},t.field=function(e,t){if(null===e||void 0===e)throw new Error(".field(name, val) name can not be empty");if(r(e)){for(var n in e)this.field(n,e[n]);return this}if(null===t||void 0===t)throw new Error(".field(name, val) val can not be empty");return this._getFormData().append(e,t),this},t.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},t.withCredentials=function(){return this._withCredentials=!0,this},t.redirects=function(e){return this._maxRedirects=e,this},t.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},t._isHost=function(e){switch({}.toString.call(e)){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}},t.send=function(e){var t=r(e),n=this._header["content-type"];if(t&&r(this._data))for(var i in e)this._data[i]=e[i];else"string"==typeof e?(n||this.type("form"),n=this._header["content-type"],this._data="application/x-www-form-urlencoded"==n?this._data?this._data+"&"+e:e:(this._data||"")+e):this._data=e;return!t||this._isHost(e)?this:(n||this.type("json"),this)}},function(e,t){function n(e){return null!==e&&"object"==typeof e}e.exports=n},function(e,t){function n(e,t,n){return"function"==typeof n?new e("GET",t).end(n):2==arguments.length?new e("GET",t):new e(t,n)}e.exports=n}])});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {

		if (root === null) {
			throw new Error('Google-maps package can be used only in browser');
		}

		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.GoogleMapsLoader = factory();
		}

	})(typeof window !== 'undefined' ? window : null, function() {


		'use strict';


		var googleVersion = '3.18';

		var script = null;

		var google = null;

		var loading = false;

		var callbacks = [];

		var onLoadEvents = [];

		var originalCreateLoaderMethod = null;


		var GoogleMapsLoader = {};


		GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

		GoogleMapsLoader.KEY = null;

		GoogleMapsLoader.LIBRARIES = [];

		GoogleMapsLoader.CLIENT = null;

		GoogleMapsLoader.CHANNEL = null;

		GoogleMapsLoader.LANGUAGE = null;

		GoogleMapsLoader.REGION = null;

		GoogleMapsLoader.VERSION = googleVersion;

		GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


		GoogleMapsLoader._googleMockApiObject = {};


		GoogleMapsLoader.load = function(fn) {
			if (google === null) {
				if (loading === true) {
					if (fn) {
						callbacks.push(fn);
					}
				} else {
					loading = true;

					window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
						ready(fn);
					};

					GoogleMapsLoader.createLoader();
				}
			} else if (fn) {
				fn(google);
			}
		};


		GoogleMapsLoader.createLoader = function() {
			script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = GoogleMapsLoader.createUrl();

			document.body.appendChild(script);
		};


		GoogleMapsLoader.isLoaded = function() {
			return google !== null;
		};


		GoogleMapsLoader.createUrl = function() {
			var url = GoogleMapsLoader.URL;

			url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

			if (GoogleMapsLoader.KEY) {
				url += '&key=' + GoogleMapsLoader.KEY;
			}

			if (GoogleMapsLoader.LIBRARIES.length > 0) {
				url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
			}

			if (GoogleMapsLoader.CLIENT) {
				url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
			}

			if (GoogleMapsLoader.CHANNEL) {
				url += '&channel=' + GoogleMapsLoader.CHANNEL;
			}

			if (GoogleMapsLoader.LANGUAGE) {
				url += '&language=' + GoogleMapsLoader.LANGUAGE;
			}

			if (GoogleMapsLoader.REGION) {
				url += '&region=' + GoogleMapsLoader.REGION;
			}

			return url;
		};


		GoogleMapsLoader.release = function(fn) {
			var release = function() {
				GoogleMapsLoader.KEY = null;
				GoogleMapsLoader.LIBRARIES = [];
				GoogleMapsLoader.CLIENT = null;
				GoogleMapsLoader.CHANNEL = null;
				GoogleMapsLoader.LANGUAGE = null;
				GoogleMapsLoader.REGION = null;
				GoogleMapsLoader.VERSION = googleVersion;

				google = null;
				loading = false;
				callbacks = [];
				onLoadEvents = [];

				if (typeof window.google !== 'undefined') {
					delete window.google;
				}

				if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
					delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
				}

				if (originalCreateLoaderMethod !== null) {
					GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
					originalCreateLoaderMethod = null;
				}

				if (script !== null) {
					script.parentElement.removeChild(script);
					script = null;
				}

				if (fn) {
					fn();
				}
			};

			if (loading) {
				GoogleMapsLoader.load(function() {
					release();
				});
			} else {
				release();
			}
		};


		GoogleMapsLoader.onLoad = function(fn) {
			onLoadEvents.push(fn);
		};


		GoogleMapsLoader.makeMock = function() {
			originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

			GoogleMapsLoader.createLoader = function() {
				window.google = GoogleMapsLoader._googleMockApiObject;
				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
			};
		};


		var ready = function(fn) {
			var i;

			loading = false;

			if (google === null) {
				google = window.google;
			}

			for (i = 0; i < onLoadEvents.length; i++) {
				onLoadEvents[i](google);
			}

			if (fn) {
				fn(google);
			}

			for (i = 0; i < callbacks.length; i++) {
				callbacks[i](google);
			}

			callbacks = [];
		};


		return GoogleMapsLoader;

	});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * Leaflet 1.1.0, a JS library for interactive maps. http://leafletjs.com
	 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
	 */
	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global.L = global.L || {})));
	}(this, (function (exports) { 'use strict';

	var version = "1.1.0";

	/*
	 * @namespace Util
	 *
	 * Various utility functions, used by Leaflet internally.
	 */

	// @function extend(dest: Object, src?: Object): Object
	// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
	function extend(dest) {
		var i, j, len, src;

		for (j = 1, len = arguments.length; j < len; j++) {
			src = arguments[j];
			for (i in src) {
				dest[i] = src[i];
			}
		}
		return dest;
	}

	// @function create(proto: Object, properties?: Object): Object
	// Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
	var create = Object.create || (function () {
		function F() {}
		return function (proto) {
			F.prototype = proto;
			return new F();
		};
	})();

	// @function bind(fn: Function, …): Function
	// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
	// Has a `L.bind()` shortcut.
	function bind(fn, obj) {
		var slice = Array.prototype.slice;

		if (fn.bind) {
			return fn.bind.apply(fn, slice.call(arguments, 1));
		}

		var args = slice.call(arguments, 2);

		return function () {
			return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
		};
	}

	// @property lastId: Number
	// Last unique ID used by [`stamp()`](#util-stamp)
	var lastId = 0;

	// @function stamp(obj: Object): Number
	// Returns the unique ID of an object, assiging it one if it doesn't have it.
	function stamp(obj) {
		/*eslint-disable */
		obj._leaflet_id = obj._leaflet_id || ++lastId;
		return obj._leaflet_id;
		/*eslint-enable */
	}

	// @function throttle(fn: Function, time: Number, context: Object): Function
	// Returns a function which executes function `fn` with the given scope `context`
	// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
	// `fn` will be called no more than one time per given amount of `time`. The arguments
	// received by the bound function will be any arguments passed when binding the
	// function, followed by any arguments passed when invoking the bound function.
	// Has an `L.throttle` shortcut.
	function throttle(fn, time, context) {
		var lock, args, wrapperFn, later;

		later = function () {
			// reset lock and call if queued
			lock = false;
			if (args) {
				wrapperFn.apply(context, args);
				args = false;
			}
		};

		wrapperFn = function () {
			if (lock) {
				// called too soon, queue to call later
				args = arguments;

			} else {
				// call and lock until later
				fn.apply(context, arguments);
				setTimeout(later, time);
				lock = true;
			}
		};

		return wrapperFn;
	}

	// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
	// Returns the number `num` modulo `range` in such a way so it lies within
	// `range[0]` and `range[1]`. The returned value will be always smaller than
	// `range[1]` unless `includeMax` is set to `true`.
	function wrapNum(x, range, includeMax) {
		var max = range[1],
		    min = range[0],
		    d = max - min;
		return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
	}

	// @function falseFn(): Function
	// Returns a function which always returns `false`.
	function falseFn() { return false; }

	// @function formatNum(num: Number, digits?: Number): Number
	// Returns the number `num` rounded to `digits` decimals, or to 5 decimals by default.
	function formatNum(num, digits) {
		var pow = Math.pow(10, digits || 5);
		return Math.round(num * pow) / pow;
	}

	// @function trim(str: String): String
	// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
	function trim(str) {
		return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	}

	// @function splitWords(str: String): String[]
	// Trims and splits the string on whitespace and returns the array of parts.
	function splitWords(str) {
		return trim(str).split(/\s+/);
	}

	// @function setOptions(obj: Object, options: Object): Object
	// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
	function setOptions(obj, options) {
		if (!obj.hasOwnProperty('options')) {
			obj.options = obj.options ? create(obj.options) : {};
		}
		for (var i in options) {
			obj.options[i] = options[i];
		}
		return obj.options;
	}

	// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
	// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
	// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
	// be appended at the end. If `uppercase` is `true`, the parameter names will
	// be uppercased (e.g. `'?A=foo&B=bar'`)
	function getParamString(obj, existingUrl, uppercase) {
		var params = [];
		for (var i in obj) {
			params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
		}
		return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
	}

	var templateRe = /\{ *([\w_\-]+) *\}/g;

	// @function template(str: String, data: Object): String
	// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
	// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
	// `('Hello foo, bar')`. You can also specify functions instead of strings for
	// data values — they will be evaluated passing `data` as an argument.
	function template(str, data) {
		return str.replace(templateRe, function (str, key) {
			var value = data[key];

			if (value === undefined) {
				throw new Error('No value provided for variable ' + str);

			} else if (typeof value === 'function') {
				value = value(data);
			}
			return value;
		});
	}

	// @function isArray(obj): Boolean
	// Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
	var isArray = Array.isArray || function (obj) {
		return (Object.prototype.toString.call(obj) === '[object Array]');
	};

	// @function indexOf(array: Array, el: Object): Number
	// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
	function indexOf(array, el) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] === el) { return i; }
		}
		return -1;
	}

	// @property emptyImageUrl: String
	// Data URI string containing a base64-encoded empty GIF image.
	// Used as a hack to free memory from unused images on WebKit-powered
	// mobile devices (by setting image `src` to this string).
	var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

	// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

	function getPrefixed(name) {
		return window['webkit' + name] || window['moz' + name] || window['ms' + name];
	}

	var lastTime = 0;

	// fallback for IE 7-8
	function timeoutDefer(fn) {
		var time = +new Date(),
		    timeToCall = Math.max(0, 16 - (time - lastTime));

		lastTime = time + timeToCall;
		return window.setTimeout(fn, timeToCall);
	}

	var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
	var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
			getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };

	// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
	// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
	// `context` if given. When `immediate` is set, `fn` is called immediately if
	// the browser doesn't have native support for
	// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
	// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
	function requestAnimFrame(fn, context, immediate) {
		if (immediate && requestFn === timeoutDefer) {
			fn.call(context);
		} else {
			return requestFn.call(window, bind(fn, context));
		}
	}

	// @function cancelAnimFrame(id: Number): undefined
	// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
	function cancelAnimFrame(id) {
		if (id) {
			cancelFn.call(window, id);
		}
	}


	var Util = (Object.freeze || Object)({
		extend: extend,
		create: create,
		bind: bind,
		lastId: lastId,
		stamp: stamp,
		throttle: throttle,
		wrapNum: wrapNum,
		falseFn: falseFn,
		formatNum: formatNum,
		trim: trim,
		splitWords: splitWords,
		setOptions: setOptions,
		getParamString: getParamString,
		template: template,
		isArray: isArray,
		indexOf: indexOf,
		emptyImageUrl: emptyImageUrl,
		requestFn: requestFn,
		cancelFn: cancelFn,
		requestAnimFrame: requestAnimFrame,
		cancelAnimFrame: cancelAnimFrame
	});

	// @class Class
	// @aka L.Class

	// @section
	// @uninheritable

	// Thanks to John Resig and Dean Edwards for inspiration!

	function Class() {}

	Class.extend = function (props) {

		// @function extend(props: Object): Function
		// [Extends the current class](#class-inheritance) given the properties to be included.
		// Returns a Javascript function that is a class constructor (to be called with `new`).
		var NewClass = function () {

			// call the constructor
			if (this.initialize) {
				this.initialize.apply(this, arguments);
			}

			// call all constructor hooks
			this.callInitHooks();
		};

		var parentProto = NewClass.__super__ = this.prototype;

		var proto = create(parentProto);
		proto.constructor = NewClass;

		NewClass.prototype = proto;

		// inherit parent's statics
		for (var i in this) {
			if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
				NewClass[i] = this[i];
			}
		}

		// mix static properties into the class
		if (props.statics) {
			extend(NewClass, props.statics);
			delete props.statics;
		}

		// mix includes into the prototype
		if (props.includes) {
			checkDeprecatedMixinEvents(props.includes);
			extend.apply(null, [proto].concat(props.includes));
			delete props.includes;
		}

		// merge options
		if (proto.options) {
			props.options = extend(create(proto.options), props.options);
		}

		// mix given properties into the prototype
		extend(proto, props);

		proto._initHooks = [];

		// add method for calling all hooks
		proto.callInitHooks = function () {

			if (this._initHooksCalled) { return; }

			if (parentProto.callInitHooks) {
				parentProto.callInitHooks.call(this);
			}

			this._initHooksCalled = true;

			for (var i = 0, len = proto._initHooks.length; i < len; i++) {
				proto._initHooks[i].call(this);
			}
		};

		return NewClass;
	};


	// @function include(properties: Object): this
	// [Includes a mixin](#class-includes) into the current class.
	Class.include = function (props) {
		extend(this.prototype, props);
		return this;
	};

	// @function mergeOptions(options: Object): this
	// [Merges `options`](#class-options) into the defaults of the class.
	Class.mergeOptions = function (options) {
		extend(this.prototype.options, options);
		return this;
	};

	// @function addInitHook(fn: Function): this
	// Adds a [constructor hook](#class-constructor-hooks) to the class.
	Class.addInitHook = function (fn) { // (Function) || (String, args...)
		var args = Array.prototype.slice.call(arguments, 1);

		var init = typeof fn === 'function' ? fn : function () {
			this[fn].apply(this, args);
		};

		this.prototype._initHooks = this.prototype._initHooks || [];
		this.prototype._initHooks.push(init);
		return this;
	};

	function checkDeprecatedMixinEvents(includes) {
		if (!L || !L.Mixin) { return; }

		includes = isArray(includes) ? includes : [includes];

		for (var i = 0; i < includes.length; i++) {
			if (includes[i] === L.Mixin.Events) {
				console.warn('Deprecated include of L.Mixin.Events: ' +
					'this property will be removed in future releases, ' +
					'please inherit from L.Evented instead.', new Error().stack);
			}
		}
	}

	/*
	 * @class Evented
	 * @aka L.Evented
	 * @inherits Class
	 *
	 * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
	 *
	 * @example
	 *
	 * ```js
	 * map.on('click', function(e) {
	 * 	alert(e.latlng);
	 * } );
	 * ```
	 *
	 * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
	 *
	 * ```js
	 * function onClick(e) { ... }
	 *
	 * map.on('click', onClick);
	 * map.off('click', onClick);
	 * ```
	 */

	var Events = {
		/* @method on(type: String, fn: Function, context?: Object): this
		 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
		 *
		 * @alternative
		 * @method on(eventMap: Object): this
		 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
		 */
		on: function (types, fn, context) {

			// types can be a map of types/handlers
			if (typeof types === 'object') {
				for (var type in types) {
					// we don't process space-separated events here for performance;
					// it's a hot path since Layer uses the on(obj) syntax
					this._on(type, types[type], fn);
				}

			} else {
				// types can be a string of space-separated words
				types = splitWords(types);

				for (var i = 0, len = types.length; i < len; i++) {
					this._on(types[i], fn, context);
				}
			}

			return this;
		},

		/* @method off(type: String, fn?: Function, context?: Object): this
		 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
		 *
		 * @alternative
		 * @method off(eventMap: Object): this
		 * Removes a set of type/listener pairs.
		 *
		 * @alternative
		 * @method off: this
		 * Removes all listeners to all events on the object.
		 */
		off: function (types, fn, context) {

			if (!types) {
				// clear all listeners if called without arguments
				delete this._events;

			} else if (typeof types === 'object') {
				for (var type in types) {
					this._off(type, types[type], fn);
				}

			} else {
				types = splitWords(types);

				for (var i = 0, len = types.length; i < len; i++) {
					this._off(types[i], fn, context);
				}
			}

			return this;
		},

		// attach listener (without syntactic sugar now)
		_on: function (type, fn, context) {
			this._events = this._events || {};

			/* get/init listeners for type */
			var typeListeners = this._events[type];
			if (!typeListeners) {
				typeListeners = [];
				this._events[type] = typeListeners;
			}

			if (context === this) {
				// Less memory footprint.
				context = undefined;
			}
			var newListener = {fn: fn, ctx: context},
			    listeners = typeListeners;

			// check if fn already there
			for (var i = 0, len = listeners.length; i < len; i++) {
				if (listeners[i].fn === fn && listeners[i].ctx === context) {
					return;
				}
			}

			listeners.push(newListener);
		},

		_off: function (type, fn, context) {
			var listeners,
			    i,
			    len;

			if (!this._events) { return; }

			listeners = this._events[type];

			if (!listeners) {
				return;
			}

			if (!fn) {
				// Set all removed listeners to noop so they are not called if remove happens in fire
				for (i = 0, len = listeners.length; i < len; i++) {
					listeners[i].fn = falseFn;
				}
				// clear all listeners for a type if function isn't specified
				delete this._events[type];
				return;
			}

			if (context === this) {
				context = undefined;
			}

			if (listeners) {

				// find fn and remove it
				for (i = 0, len = listeners.length; i < len; i++) {
					var l = listeners[i];
					if (l.ctx !== context) { continue; }
					if (l.fn === fn) {

						// set the removed listener to noop so that's not called if remove happens in fire
						l.fn = falseFn;

						if (this._firingCount) {
							/* copy array in case events are being fired */
							this._events[type] = listeners = listeners.slice();
						}
						listeners.splice(i, 1);

						return;
					}
				}
			}
		},

		// @method fire(type: String, data?: Object, propagate?: Boolean): this
		// Fires an event of the specified type. You can optionally provide an data
		// object — the first argument of the listener function will contain its
		// properties. The event can optionally be propagated to event parents.
		fire: function (type, data, propagate) {
			if (!this.listens(type, propagate)) { return this; }

			var event = extend({}, data, {type: type, target: this});

			if (this._events) {
				var listeners = this._events[type];

				if (listeners) {
					this._firingCount = (this._firingCount + 1) || 1;
					for (var i = 0, len = listeners.length; i < len; i++) {
						var l = listeners[i];
						l.fn.call(l.ctx || this, event);
					}

					this._firingCount--;
				}
			}

			if (propagate) {
				// propagate the event to parents (set with addEventParent)
				this._propagateEvent(event);
			}

			return this;
		},

		// @method listens(type: String): Boolean
		// Returns `true` if a particular event type has any listeners attached to it.
		listens: function (type, propagate) {
			var listeners = this._events && this._events[type];
			if (listeners && listeners.length) { return true; }

			if (propagate) {
				// also check parents for listeners if event propagates
				for (var id in this._eventParents) {
					if (this._eventParents[id].listens(type, propagate)) { return true; }
				}
			}
			return false;
		},

		// @method once(…): this
		// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
		once: function (types, fn, context) {

			if (typeof types === 'object') {
				for (var type in types) {
					this.once(type, types[type], fn);
				}
				return this;
			}

			var handler = bind(function () {
				this
				    .off(types, fn, context)
				    .off(types, handler, context);
			}, this);

			// add a listener that's executed once and removed after that
			return this
			    .on(types, fn, context)
			    .on(types, handler, context);
		},

		// @method addEventParent(obj: Evented): this
		// Adds an event parent - an `Evented` that will receive propagated events
		addEventParent: function (obj) {
			this._eventParents = this._eventParents || {};
			this._eventParents[stamp(obj)] = obj;
			return this;
		},

		// @method removeEventParent(obj: Evented): this
		// Removes an event parent, so it will stop receiving propagated events
		removeEventParent: function (obj) {
			if (this._eventParents) {
				delete this._eventParents[stamp(obj)];
			}
			return this;
		},

		_propagateEvent: function (e) {
			for (var id in this._eventParents) {
				this._eventParents[id].fire(e.type, extend({layer: e.target}, e), true);
			}
		}
	};

	// aliases; we should ditch those eventually

	// @method addEventListener(…): this
	// Alias to [`on(…)`](#evented-on)
	Events.addEventListener = Events.on;

	// @method removeEventListener(…): this
	// Alias to [`off(…)`](#evented-off)

	// @method clearAllEventListeners(…): this
	// Alias to [`off()`](#evented-off)
	Events.removeEventListener = Events.clearAllEventListeners = Events.off;

	// @method addOneTimeEventListener(…): this
	// Alias to [`once(…)`](#evented-once)
	Events.addOneTimeEventListener = Events.once;

	// @method fireEvent(…): this
	// Alias to [`fire(…)`](#evented-fire)
	Events.fireEvent = Events.fire;

	// @method hasEventListeners(…): Boolean
	// Alias to [`listens(…)`](#evented-listens)
	Events.hasEventListeners = Events.listens;

	var Evented = Class.extend(Events);

	/*
	 * @class Point
	 * @aka L.Point
	 *
	 * Represents a point with `x` and `y` coordinates in pixels.
	 *
	 * @example
	 *
	 * ```js
	 * var point = L.point(200, 300);
	 * ```
	 *
	 * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
	 *
	 * ```js
	 * map.panBy([200, 300]);
	 * map.panBy(L.point(200, 300));
	 * ```
	 */

	function Point(x, y, round) {
		// @property x: Number; The `x` coordinate of the point
		this.x = (round ? Math.round(x) : x);
		// @property y: Number; The `y` coordinate of the point
		this.y = (round ? Math.round(y) : y);
	}

	Point.prototype = {

		// @method clone(): Point
		// Returns a copy of the current point.
		clone: function () {
			return new Point(this.x, this.y);
		},

		// @method add(otherPoint: Point): Point
		// Returns the result of addition of the current and the given points.
		add: function (point) {
			// non-destructive, returns a new point
			return this.clone()._add(toPoint(point));
		},

		_add: function (point) {
			// destructive, used directly for performance in situations where it's safe to modify existing point
			this.x += point.x;
			this.y += point.y;
			return this;
		},

		// @method subtract(otherPoint: Point): Point
		// Returns the result of subtraction of the given point from the current.
		subtract: function (point) {
			return this.clone()._subtract(toPoint(point));
		},

		_subtract: function (point) {
			this.x -= point.x;
			this.y -= point.y;
			return this;
		},

		// @method divideBy(num: Number): Point
		// Returns the result of division of the current point by the given number.
		divideBy: function (num) {
			return this.clone()._divideBy(num);
		},

		_divideBy: function (num) {
			this.x /= num;
			this.y /= num;
			return this;
		},

		// @method multiplyBy(num: Number): Point
		// Returns the result of multiplication of the current point by the given number.
		multiplyBy: function (num) {
			return this.clone()._multiplyBy(num);
		},

		_multiplyBy: function (num) {
			this.x *= num;
			this.y *= num;
			return this;
		},

		// @method scaleBy(scale: Point): Point
		// Multiply each coordinate of the current point by each coordinate of
		// `scale`. In linear algebra terms, multiply the point by the
		// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
		// defined by `scale`.
		scaleBy: function (point) {
			return new Point(this.x * point.x, this.y * point.y);
		},

		// @method unscaleBy(scale: Point): Point
		// Inverse of `scaleBy`. Divide each coordinate of the current point by
		// each coordinate of `scale`.
		unscaleBy: function (point) {
			return new Point(this.x / point.x, this.y / point.y);
		},

		// @method round(): Point
		// Returns a copy of the current point with rounded coordinates.
		round: function () {
			return this.clone()._round();
		},

		_round: function () {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			return this;
		},

		// @method floor(): Point
		// Returns a copy of the current point with floored coordinates (rounded down).
		floor: function () {
			return this.clone()._floor();
		},

		_floor: function () {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			return this;
		},

		// @method ceil(): Point
		// Returns a copy of the current point with ceiled coordinates (rounded up).
		ceil: function () {
			return this.clone()._ceil();
		},

		_ceil: function () {
			this.x = Math.ceil(this.x);
			this.y = Math.ceil(this.y);
			return this;
		},

		// @method distanceTo(otherPoint: Point): Number
		// Returns the cartesian distance between the current and the given points.
		distanceTo: function (point) {
			point = toPoint(point);

			var x = point.x - this.x,
			    y = point.y - this.y;

			return Math.sqrt(x * x + y * y);
		},

		// @method equals(otherPoint: Point): Boolean
		// Returns `true` if the given point has the same coordinates.
		equals: function (point) {
			point = toPoint(point);

			return point.x === this.x &&
			       point.y === this.y;
		},

		// @method contains(otherPoint: Point): Boolean
		// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
		contains: function (point) {
			point = toPoint(point);

			return Math.abs(point.x) <= Math.abs(this.x) &&
			       Math.abs(point.y) <= Math.abs(this.y);
		},

		// @method toString(): String
		// Returns a string representation of the point for debugging purposes.
		toString: function () {
			return 'Point(' +
			        formatNum(this.x) + ', ' +
			        formatNum(this.y) + ')';
		}
	};

	// @factory L.point(x: Number, y: Number, round?: Boolean)
	// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

	// @alternative
	// @factory L.point(coords: Number[])
	// Expects an array of the form `[x, y]` instead.

	// @alternative
	// @factory L.point(coords: Object)
	// Expects a plain object of the form `{x: Number, y: Number}` instead.
	function toPoint(x, y, round) {
		if (x instanceof Point) {
			return x;
		}
		if (isArray(x)) {
			return new Point(x[0], x[1]);
		}
		if (x === undefined || x === null) {
			return x;
		}
		if (typeof x === 'object' && 'x' in x && 'y' in x) {
			return new Point(x.x, x.y);
		}
		return new Point(x, y, round);
	}

	/*
	 * @class Bounds
	 * @aka L.Bounds
	 *
	 * Represents a rectangular area in pixel coordinates.
	 *
	 * @example
	 *
	 * ```js
	 * var p1 = L.point(10, 10),
	 * p2 = L.point(40, 60),
	 * bounds = L.bounds(p1, p2);
	 * ```
	 *
	 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
	 *
	 * ```js
	 * otherBounds.intersects([[10, 10], [40, 60]]);
	 * ```
	 */

	function Bounds(a, b) {
		if (!a) { return; }

		var points = b ? [a, b] : a;

		for (var i = 0, len = points.length; i < len; i++) {
			this.extend(points[i]);
		}
	}

	Bounds.prototype = {
		// @method extend(point: Point): this
		// Extends the bounds to contain the given point.
		extend: function (point) { // (Point)
			point = toPoint(point);

			// @property min: Point
			// The top left corner of the rectangle.
			// @property max: Point
			// The bottom right corner of the rectangle.
			if (!this.min && !this.max) {
				this.min = point.clone();
				this.max = point.clone();
			} else {
				this.min.x = Math.min(point.x, this.min.x);
				this.max.x = Math.max(point.x, this.max.x);
				this.min.y = Math.min(point.y, this.min.y);
				this.max.y = Math.max(point.y, this.max.y);
			}
			return this;
		},

		// @method getCenter(round?: Boolean): Point
		// Returns the center point of the bounds.
		getCenter: function (round) {
			return new Point(
			        (this.min.x + this.max.x) / 2,
			        (this.min.y + this.max.y) / 2, round);
		},

		// @method getBottomLeft(): Point
		// Returns the bottom-left point of the bounds.
		getBottomLeft: function () {
			return new Point(this.min.x, this.max.y);
		},

		// @method getTopRight(): Point
		// Returns the top-right point of the bounds.
		getTopRight: function () { // -> Point
			return new Point(this.max.x, this.min.y);
		},

		// @method getTopLeft(): Point
		// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
		getTopLeft: function () {
			return this.min; // left, top
		},

		// @method getBottomRight(): Point
		// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
		getBottomRight: function () {
			return this.max; // right, bottom
		},

		// @method getSize(): Point
		// Returns the size of the given bounds
		getSize: function () {
			return this.max.subtract(this.min);
		},

		// @method contains(otherBounds: Bounds): Boolean
		// Returns `true` if the rectangle contains the given one.
		// @alternative
		// @method contains(point: Point): Boolean
		// Returns `true` if the rectangle contains the given point.
		contains: function (obj) {
			var min, max;

			if (typeof obj[0] === 'number' || obj instanceof Point) {
				obj = toPoint(obj);
			} else {
				obj = toBounds(obj);
			}

			if (obj instanceof Bounds) {
				min = obj.min;
				max = obj.max;
			} else {
				min = max = obj;
			}

			return (min.x >= this.min.x) &&
			       (max.x <= this.max.x) &&
			       (min.y >= this.min.y) &&
			       (max.y <= this.max.y);
		},

		// @method intersects(otherBounds: Bounds): Boolean
		// Returns `true` if the rectangle intersects the given bounds. Two bounds
		// intersect if they have at least one point in common.
		intersects: function (bounds) { // (Bounds) -> Boolean
			bounds = toBounds(bounds);

			var min = this.min,
			    max = this.max,
			    min2 = bounds.min,
			    max2 = bounds.max,
			    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
			    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

			return xIntersects && yIntersects;
		},

		// @method overlaps(otherBounds: Bounds): Boolean
		// Returns `true` if the rectangle overlaps the given bounds. Two bounds
		// overlap if their intersection is an area.
		overlaps: function (bounds) { // (Bounds) -> Boolean
			bounds = toBounds(bounds);

			var min = this.min,
			    max = this.max,
			    min2 = bounds.min,
			    max2 = bounds.max,
			    xOverlaps = (max2.x > min.x) && (min2.x < max.x),
			    yOverlaps = (max2.y > min.y) && (min2.y < max.y);

			return xOverlaps && yOverlaps;
		},

		isValid: function () {
			return !!(this.min && this.max);
		}
	};


	// @factory L.bounds(corner1: Point, corner2: Point)
	// Creates a Bounds object from two corners coordinate pairs.
	// @alternative
	// @factory L.bounds(points: Point[])
	// Creates a Bounds object from the given array of points.
	function toBounds(a, b) {
		if (!a || a instanceof Bounds) {
			return a;
		}
		return new Bounds(a, b);
	}

	/*
	 * @class LatLngBounds
	 * @aka L.LatLngBounds
	 *
	 * Represents a rectangular geographical area on a map.
	 *
	 * @example
	 *
	 * ```js
	 * var corner1 = L.latLng(40.712, -74.227),
	 * corner2 = L.latLng(40.774, -74.125),
	 * bounds = L.latLngBounds(corner1, corner2);
	 * ```
	 *
	 * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
	 *
	 * ```js
	 * map.fitBounds([
	 * 	[40.712, -74.227],
	 * 	[40.774, -74.125]
	 * ]);
	 * ```
	 *
	 * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
	 */

	function LatLngBounds(corner1, corner2) { // (LatLng, LatLng) or (LatLng[])
		if (!corner1) { return; }

		var latlngs = corner2 ? [corner1, corner2] : corner1;

		for (var i = 0, len = latlngs.length; i < len; i++) {
			this.extend(latlngs[i]);
		}
	}

	LatLngBounds.prototype = {

		// @method extend(latlng: LatLng): this
		// Extend the bounds to contain the given point

		// @alternative
		// @method extend(otherBounds: LatLngBounds): this
		// Extend the bounds to contain the given bounds
		extend: function (obj) {
			var sw = this._southWest,
			    ne = this._northEast,
			    sw2, ne2;

			if (obj instanceof LatLng) {
				sw2 = obj;
				ne2 = obj;

			} else if (obj instanceof LatLngBounds) {
				sw2 = obj._southWest;
				ne2 = obj._northEast;

				if (!sw2 || !ne2) { return this; }

			} else {
				return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
			}

			if (!sw && !ne) {
				this._southWest = new LatLng(sw2.lat, sw2.lng);
				this._northEast = new LatLng(ne2.lat, ne2.lng);
			} else {
				sw.lat = Math.min(sw2.lat, sw.lat);
				sw.lng = Math.min(sw2.lng, sw.lng);
				ne.lat = Math.max(ne2.lat, ne.lat);
				ne.lng = Math.max(ne2.lng, ne.lng);
			}

			return this;
		},

		// @method pad(bufferRatio: Number): LatLngBounds
		// Returns bigger bounds created by extending the current bounds by a given percentage in each direction.
		pad: function (bufferRatio) {
			var sw = this._southWest,
			    ne = this._northEast,
			    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
			    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

			return new LatLngBounds(
			        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
			        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
		},

		// @method getCenter(): LatLng
		// Returns the center point of the bounds.
		getCenter: function () {
			return new LatLng(
			        (this._southWest.lat + this._northEast.lat) / 2,
			        (this._southWest.lng + this._northEast.lng) / 2);
		},

		// @method getSouthWest(): LatLng
		// Returns the south-west point of the bounds.
		getSouthWest: function () {
			return this._southWest;
		},

		// @method getNorthEast(): LatLng
		// Returns the north-east point of the bounds.
		getNorthEast: function () {
			return this._northEast;
		},

		// @method getNorthWest(): LatLng
		// Returns the north-west point of the bounds.
		getNorthWest: function () {
			return new LatLng(this.getNorth(), this.getWest());
		},

		// @method getSouthEast(): LatLng
		// Returns the south-east point of the bounds.
		getSouthEast: function () {
			return new LatLng(this.getSouth(), this.getEast());
		},

		// @method getWest(): Number
		// Returns the west longitude of the bounds
		getWest: function () {
			return this._southWest.lng;
		},

		// @method getSouth(): Number
		// Returns the south latitude of the bounds
		getSouth: function () {
			return this._southWest.lat;
		},

		// @method getEast(): Number
		// Returns the east longitude of the bounds
		getEast: function () {
			return this._northEast.lng;
		},

		// @method getNorth(): Number
		// Returns the north latitude of the bounds
		getNorth: function () {
			return this._northEast.lat;
		},

		// @method contains(otherBounds: LatLngBounds): Boolean
		// Returns `true` if the rectangle contains the given one.

		// @alternative
		// @method contains (latlng: LatLng): Boolean
		// Returns `true` if the rectangle contains the given point.
		contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
			if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
				obj = toLatLng(obj);
			} else {
				obj = toLatLngBounds(obj);
			}

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2, ne2;

			if (obj instanceof LatLngBounds) {
				sw2 = obj.getSouthWest();
				ne2 = obj.getNorthEast();
			} else {
				sw2 = ne2 = obj;
			}

			return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
			       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
		},

		// @method intersects(otherBounds: LatLngBounds): Boolean
		// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
		intersects: function (bounds) {
			bounds = toLatLngBounds(bounds);

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2 = bounds.getSouthWest(),
			    ne2 = bounds.getNorthEast(),

			    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
			    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

			return latIntersects && lngIntersects;
		},

		// @method overlaps(otherBounds: Bounds): Boolean
		// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
		overlaps: function (bounds) {
			bounds = toLatLngBounds(bounds);

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2 = bounds.getSouthWest(),
			    ne2 = bounds.getNorthEast(),

			    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
			    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);

			return latOverlaps && lngOverlaps;
		},

		// @method toBBoxString(): String
		// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
		toBBoxString: function () {
			return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
		},

		// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
		// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overriden by setting `maxMargin` to a small number.
		equals: function (bounds, maxMargin) {
			if (!bounds) { return false; }

			bounds = toLatLngBounds(bounds);

			return this._southWest.equals(bounds.getSouthWest(), maxMargin) &&
			       this._northEast.equals(bounds.getNorthEast(), maxMargin);
		},

		// @method isValid(): Boolean
		// Returns `true` if the bounds are properly initialized.
		isValid: function () {
			return !!(this._southWest && this._northEast);
		}
	};

	// TODO International date line?

	// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
	// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

	// @alternative
	// @factory L.latLngBounds(latlngs: LatLng[])
	// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
	function toLatLngBounds(a, b) {
		if (a instanceof LatLngBounds) {
			return a;
		}
		return new LatLngBounds(a, b);
	}

	/* @class LatLng
	 * @aka L.LatLng
	 *
	 * Represents a geographical point with a certain latitude and longitude.
	 *
	 * @example
	 *
	 * ```
	 * var latlng = L.latLng(50.5, 30.5);
	 * ```
	 *
	 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
	 *
	 * ```
	 * map.panTo([50, 30]);
	 * map.panTo({lon: 30, lat: 50});
	 * map.panTo({lat: 50, lng: 30});
	 * map.panTo(L.latLng(50, 30));
	 * ```
	 */

	function LatLng(lat, lng, alt) {
		if (isNaN(lat) || isNaN(lng)) {
			throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
		}

		// @property lat: Number
		// Latitude in degrees
		this.lat = +lat;

		// @property lng: Number
		// Longitude in degrees
		this.lng = +lng;

		// @property alt: Number
		// Altitude in meters (optional)
		if (alt !== undefined) {
			this.alt = +alt;
		}
	}

	LatLng.prototype = {
		// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
		// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overriden by setting `maxMargin` to a small number.
		equals: function (obj, maxMargin) {
			if (!obj) { return false; }

			obj = toLatLng(obj);

			var margin = Math.max(
			        Math.abs(this.lat - obj.lat),
			        Math.abs(this.lng - obj.lng));

			return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
		},

		// @method toString(): String
		// Returns a string representation of the point (for debugging purposes).
		toString: function (precision) {
			return 'LatLng(' +
			        formatNum(this.lat, precision) + ', ' +
			        formatNum(this.lng, precision) + ')';
		},

		// @method distanceTo(otherLatLng: LatLng): Number
		// Returns the distance (in meters) to the given `LatLng` calculated using the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula).
		distanceTo: function (other) {
			return Earth.distance(this, toLatLng(other));
		},

		// @method wrap(): LatLng
		// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
		wrap: function () {
			return Earth.wrapLatLng(this);
		},

		// @method toBounds(sizeInMeters: Number): LatLngBounds
		// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
		toBounds: function (sizeInMeters) {
			var latAccuracy = 180 * sizeInMeters / 40075017,
			    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

			return toLatLngBounds(
			        [this.lat - latAccuracy, this.lng - lngAccuracy],
			        [this.lat + latAccuracy, this.lng + lngAccuracy]);
		},

		clone: function () {
			return new LatLng(this.lat, this.lng, this.alt);
		}
	};



	// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
	// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

	// @alternative
	// @factory L.latLng(coords: Array): LatLng
	// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

	// @alternative
	// @factory L.latLng(coords: Object): LatLng
	// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

	function toLatLng(a, b, c) {
		if (a instanceof LatLng) {
			return a;
		}
		if (isArray(a) && typeof a[0] !== 'object') {
			if (a.length === 3) {
				return new LatLng(a[0], a[1], a[2]);
			}
			if (a.length === 2) {
				return new LatLng(a[0], a[1]);
			}
			return null;
		}
		if (a === undefined || a === null) {
			return a;
		}
		if (typeof a === 'object' && 'lat' in a) {
			return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
		}
		if (b === undefined) {
			return null;
		}
		return new LatLng(a, b, c);
	}

	/*
	 * @namespace CRS
	 * @crs L.CRS.Base
	 * Object that defines coordinate reference systems for projecting
	 * geographical points into pixel (screen) coordinates and back (and to
	 * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
	 * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
	 *
	 * Leaflet defines the most usual CRSs by default. If you want to use a
	 * CRS not defined by default, take a look at the
	 * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
	 */

	var CRS = {
		// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
		// Projects geographical coordinates into pixel coordinates for a given zoom.
		latLngToPoint: function (latlng, zoom) {
			var projectedPoint = this.projection.project(latlng),
			    scale = this.scale(zoom);

			return this.transformation._transform(projectedPoint, scale);
		},

		// @method pointToLatLng(point: Point, zoom: Number): LatLng
		// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
		// zoom into geographical coordinates.
		pointToLatLng: function (point, zoom) {
			var scale = this.scale(zoom),
			    untransformedPoint = this.transformation.untransform(point, scale);

			return this.projection.unproject(untransformedPoint);
		},

		// @method project(latlng: LatLng): Point
		// Projects geographical coordinates into coordinates in units accepted for
		// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
		project: function (latlng) {
			return this.projection.project(latlng);
		},

		// @method unproject(point: Point): LatLng
		// Given a projected coordinate returns the corresponding LatLng.
		// The inverse of `project`.
		unproject: function (point) {
			return this.projection.unproject(point);
		},

		// @method scale(zoom: Number): Number
		// Returns the scale used when transforming projected coordinates into
		// pixel coordinates for a particular zoom. For example, it returns
		// `256 * 2^zoom` for Mercator-based CRS.
		scale: function (zoom) {
			return 256 * Math.pow(2, zoom);
		},

		// @method zoom(scale: Number): Number
		// Inverse of `scale()`, returns the zoom level corresponding to a scale
		// factor of `scale`.
		zoom: function (scale) {
			return Math.log(scale / 256) / Math.LN2;
		},

		// @method getProjectedBounds(zoom: Number): Bounds
		// Returns the projection's bounds scaled and transformed for the provided `zoom`.
		getProjectedBounds: function (zoom) {
			if (this.infinite) { return null; }

			var b = this.projection.bounds,
			    s = this.scale(zoom),
			    min = this.transformation.transform(b.min, s),
			    max = this.transformation.transform(b.max, s);

			return new Bounds(min, max);
		},

		// @method distance(latlng1: LatLng, latlng2: LatLng): Number
		// Returns the distance between two geographical coordinates.

		// @property code: String
		// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
		//
		// @property wrapLng: Number[]
		// An array of two numbers defining whether the longitude (horizontal) coordinate
		// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
		// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
		//
		// @property wrapLat: Number[]
		// Like `wrapLng`, but for the latitude (vertical) axis.

		// wrapLng: [min, max],
		// wrapLat: [min, max],

		// @property infinite: Boolean
		// If true, the coordinate space will be unbounded (infinite in both axes)
		infinite: false,

		// @method wrapLatLng(latlng: LatLng): LatLng
		// Returns a `LatLng` where lat and lng has been wrapped according to the
		// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
		wrapLatLng: function (latlng) {
			var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
			    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
			    alt = latlng.alt;

			return new LatLng(lat, lng, alt);
		},

		// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
		// Returns a `LatLngBounds` with the same size as the given one, ensuring
		// that its center is within the CRS's bounds.
		// Only accepts actual `L.LatLngBounds` instances, not arrays.
		wrapLatLngBounds: function (bounds) {
			var center = bounds.getCenter(),
			    newCenter = this.wrapLatLng(center),
			    latShift = center.lat - newCenter.lat,
			    lngShift = center.lng - newCenter.lng;

			if (latShift === 0 && lngShift === 0) {
				return bounds;
			}

			var sw = bounds.getSouthWest(),
			    ne = bounds.getNorthEast(),
			    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
			    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);

			return new LatLngBounds(newSw, newNe);
		}
	};

	/*
	 * @namespace CRS
	 * @crs L.CRS.Earth
	 *
	 * Serves as the base for CRS that are global such that they cover the earth.
	 * Can only be used as the base for other CRS and cannot be used directly,
	 * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
	 * meters.
	 */

	var Earth = extend({}, CRS, {
		wrapLng: [-180, 180],

		// Mean Earth Radius, as recommended for use by
		// the International Union of Geodesy and Geophysics,
		// see http://rosettacode.org/wiki/Haversine_formula
		R: 6371000,

		// distance between two geographical points using spherical law of cosines approximation
		distance: function (latlng1, latlng2) {
			var rad = Math.PI / 180,
			    lat1 = latlng1.lat * rad,
			    lat2 = latlng2.lat * rad,
			    a = Math.sin(lat1) * Math.sin(lat2) +
			        Math.cos(lat1) * Math.cos(lat2) * Math.cos((latlng2.lng - latlng1.lng) * rad);

			return this.R * Math.acos(Math.min(a, 1));
		}
	});

	/*
	 * @namespace Projection
	 * @projection L.Projection.SphericalMercator
	 *
	 * Spherical Mercator projection — the most common projection for online maps,
	 * used by almost all free and commercial tile providers. Assumes that Earth is
	 * a sphere. Used by the `EPSG:3857` CRS.
	 */

	var SphericalMercator = {

		R: 6378137,
		MAX_LATITUDE: 85.0511287798,

		project: function (latlng) {
			var d = Math.PI / 180,
			    max = this.MAX_LATITUDE,
			    lat = Math.max(Math.min(max, latlng.lat), -max),
			    sin = Math.sin(lat * d);

			return new Point(
					this.R * latlng.lng * d,
					this.R * Math.log((1 + sin) / (1 - sin)) / 2);
		},

		unproject: function (point) {
			var d = 180 / Math.PI;

			return new LatLng(
				(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
				point.x * d / this.R);
		},

		bounds: (function () {
			var d = 6378137 * Math.PI;
			return new Bounds([-d, -d], [d, d]);
		})()
	};

	/*
	 * @class Transformation
	 * @aka L.Transformation
	 *
	 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
	 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
	 * the reverse. Used by Leaflet in its projections code.
	 *
	 * @example
	 *
	 * ```js
	 * var transformation = L.transformation(2, 5, -1, 10),
	 * 	p = L.point(1, 2),
	 * 	p2 = transformation.transform(p), //  L.point(7, 8)
	 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
	 * ```
	 */


	// factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
	// Creates a `Transformation` object with the given coefficients.
	function Transformation(a, b, c, d) {
		if (isArray(a)) {
			// use array properties
			this._a = a[0];
			this._b = a[1];
			this._c = a[2];
			this._d = a[3];
			return;
		}
		this._a = a;
		this._b = b;
		this._c = c;
		this._d = d;
	}

	Transformation.prototype = {
		// @method transform(point: Point, scale?: Number): Point
		// Returns a transformed point, optionally multiplied by the given scale.
		// Only accepts actual `L.Point` instances, not arrays.
		transform: function (point, scale) { // (Point, Number) -> Point
			return this._transform(point.clone(), scale);
		},

		// destructive transform (faster)
		_transform: function (point, scale) {
			scale = scale || 1;
			point.x = scale * (this._a * point.x + this._b);
			point.y = scale * (this._c * point.y + this._d);
			return point;
		},

		// @method untransform(point: Point, scale?: Number): Point
		// Returns the reverse transformation of the given point, optionally divided
		// by the given scale. Only accepts actual `L.Point` instances, not arrays.
		untransform: function (point, scale) {
			scale = scale || 1;
			return new Point(
			        (point.x / scale - this._b) / this._a,
			        (point.y / scale - this._d) / this._c);
		}
	};

	// factory L.transformation(a: Number, b: Number, c: Number, d: Number)

	// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
	// Instantiates a Transformation object with the given coefficients.

	// @alternative
	// @factory L.transformation(coefficients: Array): Transformation
	// Expects an coeficients array of the form
	// `[a: Number, b: Number, c: Number, d: Number]`.

	function toTransformation(a, b, c, d) {
		return new Transformation(a, b, c, d);
	}

	/*
	 * @namespace CRS
	 * @crs L.CRS.EPSG3857
	 *
	 * The most common CRS for online maps, used by almost all free and commercial
	 * tile providers. Uses Spherical Mercator projection. Set in by default in
	 * Map's `crs` option.
	 */

	var EPSG3857 = extend({}, Earth, {
		code: 'EPSG:3857',
		projection: SphericalMercator,

		transformation: (function () {
			var scale = 0.5 / (Math.PI * SphericalMercator.R);
			return toTransformation(scale, 0.5, -scale, 0.5);
		}())
	});

	var EPSG900913 = extend({}, EPSG3857, {
		code: 'EPSG:900913'
	});

	// @namespace SVG; @section
	// There are several static functions which can be called without instantiating L.SVG:

	// @function create(name: String): SVGElement
	// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
	// corresponding to the class name passed. For example, using 'line' will return
	// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
	function svgCreate(name) {
		return document.createElementNS('http://www.w3.org/2000/svg', name);
	}

	// @function pointsToPath(rings: Point[], closed: Boolean): String
	// Generates a SVG path string for multiple rings, with each ring turning
	// into "M..L..L.." instructions
	function pointsToPath(rings, closed) {
		var str = '',
		i, j, len, len2, points, p;

		for (i = 0, len = rings.length; i < len; i++) {
			points = rings[i];

			for (j = 0, len2 = points.length; j < len2; j++) {
				p = points[j];
				str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
			}

			// closes the ring for polygons; "x" is VML syntax
			str += closed ? (svg ? 'z' : 'x') : '';
		}

		// SVG complains about empty path strings
		return str || 'M0 0';
	}

	/*
	 * @namespace Browser
	 * @aka L.Browser
	 *
	 * A namespace with static properties for browser/feature detection used by Leaflet internally.
	 *
	 * @example
	 *
	 * ```js
	 * if (L.Browser.ielt9) {
	 *   alert('Upgrade your browser, dude!');
	 * }
	 * ```
	 */

	var style$1 = document.documentElement.style;

	// @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
	var ie = 'ActiveXObject' in window;

	// @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
	var ielt9 = ie && !document.addEventListener;

	// @property edge: Boolean; `true` for the Edge web browser.
	var edge = 'msLaunchUri' in navigator && !('documentMode' in document);

	// @property webkit: Boolean;
	// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
	var webkit = userAgentContains('webkit');

	// @property android: Boolean
	// `true` for any browser running on an Android platform.
	var android = userAgentContains('android');

	// @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.
	var android23 = userAgentContains('android 2') || userAgentContains('android 3');

	// @property opera: Boolean; `true` for the Opera browser
	var opera = !!window.opera;

	// @property chrome: Boolean; `true` for the Chrome browser.
	var chrome = userAgentContains('chrome');

	// @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
	var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;

	// @property safari: Boolean; `true` for the Safari browser.
	var safari = !chrome && userAgentContains('safari');

	var phantom = userAgentContains('phantom');

	// @property opera12: Boolean
	// `true` for the Opera browser supporting CSS transforms (version 12 or later).
	var opera12 = 'OTransition' in style$1;

	// @property win: Boolean; `true` when the browser is running in a Windows platform
	var win = navigator.platform.indexOf('Win') === 0;

	// @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
	var ie3d = ie && ('transition' in style$1);

	// @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
	var webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23;

	// @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
	var gecko3d = 'MozPerspective' in style$1;

	// @property any3d: Boolean
	// `true` for all browsers supporting CSS transforms.
	var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;

	// @property mobile: Boolean; `true` for all browsers running in a mobile device.
	var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');

	// @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
	var mobileWebkit = mobile && webkit;

	// @property mobileWebkit3d: Boolean
	// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
	var mobileWebkit3d = mobile && webkit3d;

	// @property msPointer: Boolean
	// `true` for browsers implementing the Microsoft touch events model (notably IE10).
	var msPointer = !window.PointerEvent && window.MSPointerEvent;

	// @property pointer: Boolean
	// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
	var pointer = !!(window.PointerEvent || msPointer);

	// @property touch: Boolean
	// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
	// This does not necessarily mean that the browser is running in a computer with
	// a touchscreen, it only means that the browser is capable of understanding
	// touch events.
	var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
			(window.DocumentTouch && document instanceof window.DocumentTouch));

	// @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
	var mobileOpera = mobile && opera;

	// @property mobileGecko: Boolean
	// `true` for gecko-based browsers running in a mobile device.
	var mobileGecko = mobile && gecko;

	// @property retina: Boolean
	// `true` for browsers on a high-resolution "retina" screen.
	var retina = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;


	// @property canvas: Boolean
	// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
	var canvas = (function () {
		return !!document.createElement('canvas').getContext;
	}());

	// @property svg: Boolean
	// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
	var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);

	// @property vml: Boolean
	// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
	var vml = !svg && (function () {
		try {
			var div = document.createElement('div');
			div.innerHTML = '<v:shape adj="1"/>';

			var shape = div.firstChild;
			shape.style.behavior = 'url(#default#VML)';

			return shape && (typeof shape.adj === 'object');

		} catch (e) {
			return false;
		}
	}());


	function userAgentContains(str) {
		return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
	}


	var Browser = (Object.freeze || Object)({
		ie: ie,
		ielt9: ielt9,
		edge: edge,
		webkit: webkit,
		android: android,
		android23: android23,
		opera: opera,
		chrome: chrome,
		gecko: gecko,
		safari: safari,
		phantom: phantom,
		opera12: opera12,
		win: win,
		ie3d: ie3d,
		webkit3d: webkit3d,
		gecko3d: gecko3d,
		any3d: any3d,
		mobile: mobile,
		mobileWebkit: mobileWebkit,
		mobileWebkit3d: mobileWebkit3d,
		msPointer: msPointer,
		pointer: pointer,
		touch: touch,
		mobileOpera: mobileOpera,
		mobileGecko: mobileGecko,
		retina: retina,
		canvas: canvas,
		svg: svg,
		vml: vml
	});

	/*
	 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
	 */


	var POINTER_DOWN =   msPointer ? 'MSPointerDown'   : 'pointerdown';
	var POINTER_MOVE =   msPointer ? 'MSPointerMove'   : 'pointermove';
	var POINTER_UP =     msPointer ? 'MSPointerUp'     : 'pointerup';
	var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
	var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];
	var _pointers = {};
	var _pointerDocListener = false;

	// DomEvent.DoubleTap needs to know about this
	var _pointersCount = 0;

	// Provides a touch events wrapper for (ms)pointer events.
	// ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

	function addPointerListener(obj, type, handler, id) {
		if (type === 'touchstart') {
			_addPointerStart(obj, handler, id);

		} else if (type === 'touchmove') {
			_addPointerMove(obj, handler, id);

		} else if (type === 'touchend') {
			_addPointerEnd(obj, handler, id);
		}

		return this;
	}

	function removePointerListener(obj, type, id) {
		var handler = obj['_leaflet_' + type + id];

		if (type === 'touchstart') {
			obj.removeEventListener(POINTER_DOWN, handler, false);

		} else if (type === 'touchmove') {
			obj.removeEventListener(POINTER_MOVE, handler, false);

		} else if (type === 'touchend') {
			obj.removeEventListener(POINTER_UP, handler, false);
			obj.removeEventListener(POINTER_CANCEL, handler, false);
		}

		return this;
	}

	function _addPointerStart(obj, handler, id) {
		var onDown = bind(function (e) {
			if (e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
				// In IE11, some touch events needs to fire for form controls, or
				// the controls will stop working. We keep a whitelist of tag names that
				// need these events. For other target tags, we prevent default on the event.
				if (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
					preventDefault(e);
				} else {
					return;
				}
			}

			_handlePointer(e, handler);
		});

		obj['_leaflet_touchstart' + id] = onDown;
		obj.addEventListener(POINTER_DOWN, onDown, false);

		// need to keep track of what pointers and how many are active to provide e.touches emulation
		if (!_pointerDocListener) {
			// we listen documentElement as any drags that end by moving the touch off the screen get fired there
			document.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);
			document.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);
			document.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);
			document.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);

			_pointerDocListener = true;
		}
	}

	function _globalPointerDown(e) {
		_pointers[e.pointerId] = e;
		_pointersCount++;
	}

	function _globalPointerMove(e) {
		if (_pointers[e.pointerId]) {
			_pointers[e.pointerId] = e;
		}
	}

	function _globalPointerUp(e) {
		delete _pointers[e.pointerId];
		_pointersCount--;
	}

	function _handlePointer(e, handler) {
		e.touches = [];
		for (var i in _pointers) {
			e.touches.push(_pointers[i]);
		}
		e.changedTouches = [e];

		handler(e);
	}

	function _addPointerMove(obj, handler, id) {
		var onMove = function (e) {
			// don't fire touch moves when mouse isn't down
			if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

			_handlePointer(e, handler);
		};

		obj['_leaflet_touchmove' + id] = onMove;
		obj.addEventListener(POINTER_MOVE, onMove, false);
	}

	function _addPointerEnd(obj, handler, id) {
		var onUp = function (e) {
			_handlePointer(e, handler);
		};

		obj['_leaflet_touchend' + id] = onUp;
		obj.addEventListener(POINTER_UP, onUp, false);
		obj.addEventListener(POINTER_CANCEL, onUp, false);
	}

	/*
	 * Extends the event handling code with double tap support for mobile browsers.
	 */

	var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';
	var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';
	var _pre = '_leaflet_';

	// inspired by Zepto touch code by Thomas Fuchs
	function addDoubleTapListener(obj, handler, id) {
		var last, touch$$1,
		    doubleTap = false,
		    delay = 250;

		function onTouchStart(e) {
			var count;

			if (pointer) {
				if ((!edge) || e.pointerType === 'mouse') { return; }
				count = _pointersCount;
			} else {
				count = e.touches.length;
			}

			if (count > 1) { return; }

			var now = Date.now(),
			    delta = now - (last || now);

			touch$$1 = e.touches ? e.touches[0] : e;
			doubleTap = (delta > 0 && delta <= delay);
			last = now;
		}

		function onTouchEnd(e) {
			if (doubleTap && !touch$$1.cancelBubble) {
				if (pointer) {
					if ((!edge) || e.pointerType === 'mouse') { return; }
					// work around .type being readonly with MSPointer* events
					var newTouch = {},
					    prop, i;

					for (i in touch$$1) {
						prop = touch$$1[i];
						newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
					}
					touch$$1 = newTouch;
				}
				touch$$1.type = 'dblclick';
				handler(touch$$1);
				last = null;
			}
		}

		obj[_pre + _touchstart + id] = onTouchStart;
		obj[_pre + _touchend + id] = onTouchEnd;
		obj[_pre + 'dblclick' + id] = handler;

		obj.addEventListener(_touchstart, onTouchStart, false);
		obj.addEventListener(_touchend, onTouchEnd, false);

		// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
		// the browser doesn't fire touchend/pointerup events but does fire
		// native dblclicks. See #4127.
		// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
		obj.addEventListener('dblclick', handler, false);

		return this;
	}

	function removeDoubleTapListener(obj, id) {
		var touchstart = obj[_pre + _touchstart + id],
		    touchend = obj[_pre + _touchend + id],
		    dblclick = obj[_pre + 'dblclick' + id];

		obj.removeEventListener(_touchstart, touchstart, false);
		obj.removeEventListener(_touchend, touchend, false);
		if (!edge) {
			obj.removeEventListener('dblclick', dblclick, false);
		}

		return this;
	}

	/*
	 * @namespace DomEvent
	 * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
	 */

	// Inspired by John Resig, Dean Edwards and YUI addEvent implementations.

	// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
	// Adds a listener function (`fn`) to a particular DOM event type of the
	// element `el`. You can optionally specify the context of the listener
	// (object the `this` keyword will point to). You can also pass several
	// space-separated types (e.g. `'click dblclick'`).

	// @alternative
	// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
	// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
	function on(obj, types, fn, context) {

		if (typeof types === 'object') {
			for (var type in types) {
				addOne(obj, type, types[type], fn);
			}
		} else {
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				addOne(obj, types[i], fn, context);
			}
		}

		return this;
	}

	var eventsKey = '_leaflet_events';

	// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
	// Removes a previously added listener function. If no function is specified,
	// it will remove all the listeners of that particular DOM event from the element.
	// Note that if you passed a custom context to on, you must pass the same
	// context to `off` in order to remove the listener.

	// @alternative
	// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
	// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`

	// @alternative
	// @function off(el: HTMLElement): this
	// Removes all known event listeners
	function off(obj, types, fn, context) {

		if (typeof types === 'object') {
			for (var type in types) {
				removeOne(obj, type, types[type], fn);
			}
		} else if (types) {
			types = splitWords(types);

			for (var i = 0, len = types.length; i < len; i++) {
				removeOne(obj, types[i], fn, context);
			}
		} else {
			for (var j in obj[eventsKey]) {
				removeOne(obj, j, obj[eventsKey][j]);
			}
			delete obj[eventsKey];
		}
	}

	function addOne(obj, type, fn, context) {
		var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

		if (obj[eventsKey] && obj[eventsKey][id]) { return this; }

		var handler = function (e) {
			return fn.call(context || obj, e || window.event);
		};

		var originalHandler = handler;

		if (pointer && type.indexOf('touch') === 0) {
			// Needs DomEvent.Pointer.js
			addPointerListener(obj, type, handler, id);

		} else if (touch && (type === 'dblclick') && addDoubleTapListener &&
		           !(pointer && chrome)) {
			// Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener
			// See #5180
			addDoubleTapListener(obj, handler, id);

		} else if ('addEventListener' in obj) {

			if (type === 'mousewheel') {
				obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);

			} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
				handler = function (e) {
					e = e || window.event;
					if (isExternalTarget(obj, e)) {
						originalHandler(e);
					}
				};
				obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);

			} else {
				if (type === 'click' && android) {
					handler = function (e) {
						filterClick(e, originalHandler);
					};
				}
				obj.addEventListener(type, handler, false);
			}

		} else if ('attachEvent' in obj) {
			obj.attachEvent('on' + type, handler);
		}

		obj[eventsKey] = obj[eventsKey] || {};
		obj[eventsKey][id] = handler;
	}

	function removeOne(obj, type, fn, context) {

		var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
		    handler = obj[eventsKey] && obj[eventsKey][id];

		if (!handler) { return this; }

		if (pointer && type.indexOf('touch') === 0) {
			removePointerListener(obj, type, id);

		} else if (touch && (type === 'dblclick') && removeDoubleTapListener) {
			removeDoubleTapListener(obj, id);

		} else if ('removeEventListener' in obj) {

			if (type === 'mousewheel') {
				obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);

			} else {
				obj.removeEventListener(
					type === 'mouseenter' ? 'mouseover' :
					type === 'mouseleave' ? 'mouseout' : type, handler, false);
			}

		} else if ('detachEvent' in obj) {
			obj.detachEvent('on' + type, handler);
		}

		obj[eventsKey][id] = null;
	}

	// @function stopPropagation(ev: DOMEvent): this
	// Stop the given event from propagation to parent elements. Used inside the listener functions:
	// ```js
	// L.DomEvent.on(div, 'click', function (ev) {
	// 	L.DomEvent.stopPropagation(ev);
	// });
	// ```
	function stopPropagation(e) {

		if (e.stopPropagation) {
			e.stopPropagation();
		} else if (e.originalEvent) {  // In case of Leaflet event.
			e.originalEvent._stopped = true;
		} else {
			e.cancelBubble = true;
		}
		skipped(e);

		return this;
	}

	// @function disableScrollPropagation(el: HTMLElement): this
	// Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).
	function disableScrollPropagation(el) {
		return addOne(el, 'mousewheel', stopPropagation);
	}

	// @function disableClickPropagation(el: HTMLElement): this
	// Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
	// `'mousedown'` and `'touchstart'` events (plus browser variants).
	function disableClickPropagation(el) {
		on(el, 'mousedown touchstart dblclick', stopPropagation);
		addOne(el, 'click', fakeStop);
		return this;
	}

	// @function preventDefault(ev: DOMEvent): this
	// Prevents the default action of the DOM Event `ev` from happening (such as
	// following a link in the href of the a element, or doing a POST request
	// with page reload when a `<form>` is submitted).
	// Use it inside listener functions.
	function preventDefault(e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		return this;
	}

	// @function stop(ev): this
	// Does `stopPropagation` and `preventDefault` at the same time.
	function stop(e) {
		preventDefault(e);
		stopPropagation(e);
		return this;
	}

	// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
	// Gets normalized mouse position from a DOM event relative to the
	// `container` or to the whole page if not specified.
	function getMousePosition(e, container) {
		if (!container) {
			return new Point(e.clientX, e.clientY);
		}

		var rect = container.getBoundingClientRect();

		return new Point(
			e.clientX - rect.left - container.clientLeft,
			e.clientY - rect.top - container.clientTop);
	}

	// Chrome on Win scrolls double the pixels as in other platforms (see #4538),
	// and Firefox scrolls device pixels, not CSS pixels
	var wheelPxFactor =
		(win && chrome) ? 2 * window.devicePixelRatio :
		gecko ? window.devicePixelRatio : 1;

	// @function getWheelDelta(ev: DOMEvent): Number
	// Gets normalized wheel delta from a mousewheel DOM event, in vertical
	// pixels scrolled (negative if scrolling down).
	// Events from pointing devices without precise scrolling are mapped to
	// a best guess of 60 pixels.
	function getWheelDelta(e) {
		return (edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
		       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / wheelPxFactor : // Pixels
		       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines
		       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages
		       (e.deltaX || e.deltaZ) ? 0 :	// Skip horizontal/depth wheel events
		       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
		       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines
		       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
		       0;
	}

	var skipEvents = {};

	function fakeStop(e) {
		// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
		skipEvents[e.type] = true;
	}

	function skipped(e) {
		var events = skipEvents[e.type];
		// reset when checking, as it's only used in map container and propagates outside of the map
		skipEvents[e.type] = false;
		return events;
	}

	// check if element really left/entered the event target (for mouseenter/mouseleave)
	function isExternalTarget(el, e) {

		var related = e.relatedTarget;

		if (!related) { return true; }

		try {
			while (related && (related !== el)) {
				related = related.parentNode;
			}
		} catch (err) {
			return false;
		}
		return (related !== el);
	}

	var lastClick;

	// this is a horrible workaround for a bug in Android where a single touch triggers two click events
	function filterClick(e, handler) {
		var timeStamp = (e.timeStamp || (e.originalEvent && e.originalEvent.timeStamp)),
		    elapsed = lastClick && (timeStamp - lastClick);

		// are they closer together than 500ms yet more than 100ms?
		// Android typically triggers them ~300ms apart while multiple listeners
		// on the same event should be triggered far faster;
		// or check if click is simulated on the element, and if it is, reject any non-simulated events

		if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
			stop(e);
			return;
		}
		lastClick = timeStamp;

		handler(e);
	}




	var DomEvent = (Object.freeze || Object)({
		on: on,
		off: off,
		stopPropagation: stopPropagation,
		disableScrollPropagation: disableScrollPropagation,
		disableClickPropagation: disableClickPropagation,
		preventDefault: preventDefault,
		stop: stop,
		getMousePosition: getMousePosition,
		getWheelDelta: getWheelDelta,
		fakeStop: fakeStop,
		skipped: skipped,
		isExternalTarget: isExternalTarget,
		addListener: on,
		removeListener: off
	});

	/*
	 * @namespace DomUtil
	 *
	 * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
	 * tree, used by Leaflet internally.
	 *
	 * Most functions expecting or returning a `HTMLElement` also work for
	 * SVG elements. The only difference is that classes refer to CSS classes
	 * in HTML and SVG classes in SVG.
	 */


	// @property TRANSFORM: String
	// Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
	var TRANSFORM = testProp(
		['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

	// webkitTransition comes first because some browser versions that drop vendor prefix don't do
	// the same for the transitionend event, in particular the Android 4.1 stock browser

	// @property TRANSITION: String
	// Vendor-prefixed transition style name.
	var TRANSITION = testProp(
		['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

	// @property TRANSITION_END: String
	// Vendor-prefixed transitionend event name.
	var TRANSITION_END =
		TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';


	// @function get(id: String|HTMLElement): HTMLElement
	// Returns an element given its DOM id, or returns the element itself
	// if it was passed directly.
	function get(id) {
		return typeof id === 'string' ? document.getElementById(id) : id;
	}

	// @function getStyle(el: HTMLElement, styleAttrib: String): String
	// Returns the value for a certain style attribute on an element,
	// including computed values or values set through CSS.
	function getStyle(el, style) {
		var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);

		if ((!value || value === 'auto') && document.defaultView) {
			var css = document.defaultView.getComputedStyle(el, null);
			value = css ? css[style] : null;
		}
		return value === 'auto' ? null : value;
	}

	// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
	// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
	function create$1(tagName, className, container) {
		var el = document.createElement(tagName);
		el.className = className || '';

		if (container) {
			container.appendChild(el);
		}
		return el;
	}

	// @function remove(el: HTMLElement)
	// Removes `el` from its parent element
	function remove(el) {
		var parent = el.parentNode;
		if (parent) {
			parent.removeChild(el);
		}
	}

	// @function empty(el: HTMLElement)
	// Removes all of `el`'s children elements from `el`
	function empty(el) {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
	}

	// @function toFront(el: HTMLElement)
	// Makes `el` the last child of its parent, so it renders in front of the other children.
	function toFront(el) {
		var parent = el.parentNode;
		if (parent.lastChild !== el) {
			parent.appendChild(el);
		}
	}

	// @function toBack(el: HTMLElement)
	// Makes `el` the first child of its parent, so it renders behind the other children.
	function toBack(el) {
		var parent = el.parentNode;
		if (parent.firstChild !== el) {
			parent.insertBefore(el, parent.firstChild);
		}
	}

	// @function hasClass(el: HTMLElement, name: String): Boolean
	// Returns `true` if the element's class attribute contains `name`.
	function hasClass(el, name) {
		if (el.classList !== undefined) {
			return el.classList.contains(name);
		}
		var className = getClass(el);
		return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
	}

	// @function addClass(el: HTMLElement, name: String)
	// Adds `name` to the element's class attribute.
	function addClass(el, name) {
		if (el.classList !== undefined) {
			var classes = splitWords(name);
			for (var i = 0, len = classes.length; i < len; i++) {
				el.classList.add(classes[i]);
			}
		} else if (!hasClass(el, name)) {
			var className = getClass(el);
			setClass(el, (className ? className + ' ' : '') + name);
		}
	}

	// @function removeClass(el: HTMLElement, name: String)
	// Removes `name` from the element's class attribute.
	function removeClass(el, name) {
		if (el.classList !== undefined) {
			el.classList.remove(name);
		} else {
			setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
		}
	}

	// @function setClass(el: HTMLElement, name: String)
	// Sets the element's class.
	function setClass(el, name) {
		if (el.className.baseVal === undefined) {
			el.className = name;
		} else {
			// in case of SVG element
			el.className.baseVal = name;
		}
	}

	// @function getClass(el: HTMLElement): String
	// Returns the element's class.
	function getClass(el) {
		return el.className.baseVal === undefined ? el.className : el.className.baseVal;
	}

	// @function setOpacity(el: HTMLElement, opacity: Number)
	// Set the opacity of an element (including old IE support).
	// `opacity` must be a number from `0` to `1`.
	function setOpacity(el, value) {
		if ('opacity' in el.style) {
			el.style.opacity = value;
		} else if ('filter' in el.style) {
			_setOpacityIE(el, value);
		}
	}

	function _setOpacityIE(el, value) {
		var filter = false,
		    filterName = 'DXImageTransform.Microsoft.Alpha';

		// filters collection throws an error if we try to retrieve a filter that doesn't exist
		try {
			filter = el.filters.item(filterName);
		} catch (e) {
			// don't set opacity to 1 if we haven't already set an opacity,
			// it isn't needed and breaks transparent pngs.
			if (value === 1) { return; }
		}

		value = Math.round(value * 100);

		if (filter) {
			filter.Enabled = (value !== 100);
			filter.Opacity = value;
		} else {
			el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
		}
	}

	// @function testProp(props: String[]): String|false
	// Goes through the array of style names and returns the first name
	// that is a valid style name for an element. If no such name is found,
	// it returns false. Useful for vendor-prefixed styles like `transform`.
	function testProp(props) {
		var style = document.documentElement.style;

		for (var i = 0; i < props.length; i++) {
			if (props[i] in style) {
				return props[i];
			}
		}
		return false;
	}

	// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
	// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
	// and optionally scaled by `scale`. Does not have an effect if the
	// browser doesn't support 3D CSS transforms.
	function setTransform(el, offset, scale) {
		var pos = offset || new Point(0, 0);

		el.style[TRANSFORM] =
			(ie3d ?
				'translate(' + pos.x + 'px,' + pos.y + 'px)' :
				'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
			(scale ? ' scale(' + scale + ')' : '');
	}

	// @function setPosition(el: HTMLElement, position: Point)
	// Sets the position of `el` to coordinates specified by `position`,
	// using CSS translate or top/left positioning depending on the browser
	// (used by Leaflet internally to position its layers).
	function setPosition(el, point) {

		/*eslint-disable */
		el._leaflet_pos = point;
		/*eslint-enable */

		if (any3d) {
			setTransform(el, point);
		} else {
			el.style.left = point.x + 'px';
			el.style.top = point.y + 'px';
		}
	}

	// @function getPosition(el: HTMLElement): Point
	// Returns the coordinates of an element previously positioned with setPosition.
	function getPosition(el) {
		// this method is only used for elements previously positioned using setPosition,
		// so it's safe to cache the position for performance

		return el._leaflet_pos || new Point(0, 0);
	}

	// @function disableTextSelection()
	// Prevents the user from generating `selectstart` DOM events, usually generated
	// when the user drags the mouse through a page with text. Used internally
	// by Leaflet to override the behaviour of any click-and-drag interaction on
	// the map. Affects drag interactions on the whole document.

	// @function enableTextSelection()
	// Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
	var disableTextSelection;
	var enableTextSelection;
	var _userSelect;
	if ('onselectstart' in document) {
		disableTextSelection = function () {
			on(window, 'selectstart', preventDefault);
		};
		enableTextSelection = function () {
			off(window, 'selectstart', preventDefault);
		};
	} else {
		var userSelectProperty = testProp(
			['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

		disableTextSelection = function () {
			if (userSelectProperty) {
				var style = document.documentElement.style;
				_userSelect = style[userSelectProperty];
				style[userSelectProperty] = 'none';
			}
		};
		enableTextSelection = function () {
			if (userSelectProperty) {
				document.documentElement.style[userSelectProperty] = _userSelect;
				_userSelect = undefined;
			}
		};
	}

	// @function disableImageDrag()
	// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
	// for `dragstart` DOM events, usually generated when the user drags an image.
	function disableImageDrag() {
		on(window, 'dragstart', preventDefault);
	}

	// @function enableImageDrag()
	// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
	function enableImageDrag() {
		off(window, 'dragstart', preventDefault);
	}

	var _outlineElement;
	var _outlineStyle;
	// @function preventOutline(el: HTMLElement)
	// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
	// of the element `el` invisible. Used internally by Leaflet to prevent
	// focusable elements from displaying an outline when the user performs a
	// drag interaction on them.
	function preventOutline(element) {
		while (element.tabIndex === -1) {
			element = element.parentNode;
		}
		if (!element.style) { return; }
		restoreOutline();
		_outlineElement = element;
		_outlineStyle = element.style.outline;
		element.style.outline = 'none';
		on(window, 'keydown', restoreOutline);
	}

	// @function restoreOutline()
	// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
	function restoreOutline() {
		if (!_outlineElement) { return; }
		_outlineElement.style.outline = _outlineStyle;
		_outlineElement = undefined;
		_outlineStyle = undefined;
		off(window, 'keydown', restoreOutline);
	}


	var DomUtil = (Object.freeze || Object)({
		TRANSFORM: TRANSFORM,
		TRANSITION: TRANSITION,
		TRANSITION_END: TRANSITION_END,
		get: get,
		getStyle: getStyle,
		create: create$1,
		remove: remove,
		empty: empty,
		toFront: toFront,
		toBack: toBack,
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		setClass: setClass,
		getClass: getClass,
		setOpacity: setOpacity,
		testProp: testProp,
		setTransform: setTransform,
		setPosition: setPosition,
		getPosition: getPosition,
		disableTextSelection: disableTextSelection,
		enableTextSelection: enableTextSelection,
		disableImageDrag: disableImageDrag,
		enableImageDrag: enableImageDrag,
		preventOutline: preventOutline,
		restoreOutline: restoreOutline
	});

	/*
	 * @class PosAnimation
	 * @aka L.PosAnimation
	 * @inherits Evented
	 * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
	 *
	 * @example
	 * ```js
	 * var fx = new L.PosAnimation();
	 * fx.run(el, [300, 500], 0.5);
	 * ```
	 *
	 * @constructor L.PosAnimation()
	 * Creates a `PosAnimation` object.
	 *
	 */

	var PosAnimation = Evented.extend({

		// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
		// Run an animation of a given element to a new position, optionally setting
		// duration in seconds (`0.25` by default) and easing linearity factor (3rd
		// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
		// `0.5` by default).
		run: function (el, newPos, duration, easeLinearity) {
			this.stop();

			this._el = el;
			this._inProgress = true;
			this._duration = duration || 0.25;
			this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

			this._startPos = getPosition(el);
			this._offset = newPos.subtract(this._startPos);
			this._startTime = +new Date();

			// @event start: Event
			// Fired when the animation starts
			this.fire('start');

			this._animate();
		},

		// @method stop()
		// Stops the animation (if currently running).
		stop: function () {
			if (!this._inProgress) { return; }

			this._step(true);
			this._complete();
		},

		_animate: function () {
			// animation loop
			this._animId = requestAnimFrame(this._animate, this);
			this._step();
		},

		_step: function (round) {
			var elapsed = (+new Date()) - this._startTime,
			    duration = this._duration * 1000;

			if (elapsed < duration) {
				this._runFrame(this._easeOut(elapsed / duration), round);
			} else {
				this._runFrame(1);
				this._complete();
			}
		},

		_runFrame: function (progress, round) {
			var pos = this._startPos.add(this._offset.multiplyBy(progress));
			if (round) {
				pos._round();
			}
			setPosition(this._el, pos);

			// @event step: Event
			// Fired continuously during the animation.
			this.fire('step');
		},

		_complete: function () {
			cancelAnimFrame(this._animId);

			this._inProgress = false;
			// @event end: Event
			// Fired when the animation ends.
			this.fire('end');
		},

		_easeOut: function (t) {
			return 1 - Math.pow(1 - t, this._easeOutPower);
		}
	});

	/*
	 * @class Map
	 * @aka L.Map
	 * @inherits Evented
	 *
	 * The central class of the API — it is used to create a map on a page and manipulate it.
	 *
	 * @example
	 *
	 * ```js
	 * // initialize the map on the "map" div with a given center and zoom
	 * var map = L.map('map', {
	 * 	center: [51.505, -0.09],
	 * 	zoom: 13
	 * });
	 * ```
	 *
	 */

	var Map = Evented.extend({

		options: {
			// @section Map State Options
			// @option crs: CRS = L.CRS.EPSG3857
			// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
			// sure what it means.
			crs: EPSG3857,

			// @option center: LatLng = undefined
			// Initial geographic center of the map
			center: undefined,

			// @option zoom: Number = undefined
			// Initial map zoom level
			zoom: undefined,

			// @option minZoom: Number = *
			// Minimum zoom level of the map.
			// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
			// the lowest of their `minZoom` options will be used instead.
			minZoom: undefined,

			// @option maxZoom: Number = *
			// Maximum zoom level of the map.
			// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
			// the highest of their `maxZoom` options will be used instead.
			maxZoom: undefined,

			// @option layers: Layer[] = []
			// Array of layers that will be added to the map initially
			layers: [],

			// @option maxBounds: LatLngBounds = null
			// When this option is set, the map restricts the view to the given
			// geographical bounds, bouncing the user back if the user tries to pan
			// outside the view. To set the restriction dynamically, use
			// [`setMaxBounds`](#map-setmaxbounds) method.
			maxBounds: undefined,

			// @option renderer: Renderer = *
			// The default method for drawing vector layers on the map. `L.SVG`
			// or `L.Canvas` by default depending on browser support.
			renderer: undefined,


			// @section Animation Options
			// @option zoomAnimation: Boolean = true
			// Whether the map zoom animation is enabled. By default it's enabled
			// in all browsers that support CSS3 Transitions except Android.
			zoomAnimation: true,

			// @option zoomAnimationThreshold: Number = 4
			// Won't animate zoom if the zoom difference exceeds this value.
			zoomAnimationThreshold: 4,

			// @option fadeAnimation: Boolean = true
			// Whether the tile fade animation is enabled. By default it's enabled
			// in all browsers that support CSS3 Transitions except Android.
			fadeAnimation: true,

			// @option markerZoomAnimation: Boolean = true
			// Whether markers animate their zoom with the zoom animation, if disabled
			// they will disappear for the length of the animation. By default it's
			// enabled in all browsers that support CSS3 Transitions except Android.
			markerZoomAnimation: true,

			// @option transform3DLimit: Number = 2^23
			// Defines the maximum size of a CSS translation transform. The default
			// value should not be changed unless a web browser positions layers in
			// the wrong place after doing a large `panBy`.
			transform3DLimit: 8388608, // Precision limit of a 32-bit float

			// @section Interaction Options
			// @option zoomSnap: Number = 1
			// Forces the map's zoom level to always be a multiple of this, particularly
			// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
			// By default, the zoom level snaps to the nearest integer; lower values
			// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
			// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
			zoomSnap: 1,

			// @option zoomDelta: Number = 1
			// Controls how much the map's zoom level will change after a
			// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
			// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
			// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
			zoomDelta: 1,

			// @option trackResize: Boolean = true
			// Whether the map automatically handles browser window resize to update itself.
			trackResize: true
		},

		initialize: function (id, options) { // (HTMLElement or String, Object)
			options = setOptions(this, options);

			this._initContainer(id);
			this._initLayout();

			// hack for https://github.com/Leaflet/Leaflet/issues/1980
			this._onResize = bind(this._onResize, this);

			this._initEvents();

			if (options.maxBounds) {
				this.setMaxBounds(options.maxBounds);
			}

			if (options.zoom !== undefined) {
				this._zoom = this._limitZoom(options.zoom);
			}

			if (options.center && options.zoom !== undefined) {
				this.setView(toLatLng(options.center), options.zoom, {reset: true});
			}

			this._handlers = [];
			this._layers = {};
			this._zoomBoundLayers = {};
			this._sizeChanged = true;

			this.callInitHooks();

			// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
			this._zoomAnimated = TRANSITION && any3d && !mobileOpera &&
					this.options.zoomAnimation;

			// zoom transitions run with the same duration for all layers, so if one of transitionend events
			// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
			if (this._zoomAnimated) {
				this._createAnimProxy();
				on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
			}

			this._addLayers(this.options.layers);
		},


		// @section Methods for modifying map state

		// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
		// Sets the view of the map (geographical center and zoom) with the given
		// animation options.
		setView: function (center, zoom, options) {

			zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
			center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
			options = options || {};

			this._stop();

			if (this._loaded && !options.reset && options !== true) {

				if (options.animate !== undefined) {
					options.zoom = extend({animate: options.animate}, options.zoom);
					options.pan = extend({animate: options.animate, duration: options.duration}, options.pan);
				}

				// try animating pan or zoom
				var moved = (this._zoom !== zoom) ?
					this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
					this._tryAnimatedPan(center, options.pan);

				if (moved) {
					// prevent resize handler call, the view will refresh after animation anyway
					clearTimeout(this._sizeTimer);
					return this;
				}
			}

			// animation didn't start, just reset the map view
			this._resetView(center, zoom);

			return this;
		},

		// @method setZoom(zoom: Number, options?: Zoom/pan options): this
		// Sets the zoom of the map.
		setZoom: function (zoom, options) {
			if (!this._loaded) {
				this._zoom = zoom;
				return this;
			}
			return this.setView(this.getCenter(), zoom, {zoom: options});
		},

		// @method zoomIn(delta?: Number, options?: Zoom options): this
		// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
		zoomIn: function (delta, options) {
			delta = delta || (any3d ? this.options.zoomDelta : 1);
			return this.setZoom(this._zoom + delta, options);
		},

		// @method zoomOut(delta?: Number, options?: Zoom options): this
		// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
		zoomOut: function (delta, options) {
			delta = delta || (any3d ? this.options.zoomDelta : 1);
			return this.setZoom(this._zoom - delta, options);
		},

		// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
		// Zooms the map while keeping a specified geographical point on the map
		// stationary (e.g. used internally for scroll zoom and double-click zoom).
		// @alternative
		// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
		// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
		setZoomAround: function (latlng, zoom, options) {
			var scale = this.getZoomScale(zoom),
			    viewHalf = this.getSize().divideBy(2),
			    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),

			    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
			    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

			return this.setView(newCenter, zoom, {zoom: options});
		},

		_getBoundsCenterZoom: function (bounds, options) {

			options = options || {};
			bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);

			var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
			    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),

			    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

			zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;

			if (zoom === Infinity) {
				return {
					center: bounds.getCenter(),
					zoom: zoom
				};
			}

			var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

			    swPoint = this.project(bounds.getSouthWest(), zoom),
			    nePoint = this.project(bounds.getNorthEast(), zoom),
			    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

			return {
				center: center,
				zoom: zoom
			};
		},

		// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
		// Sets a map view that contains the given geographical bounds with the
		// maximum zoom level possible.
		fitBounds: function (bounds, options) {

			bounds = toLatLngBounds(bounds);

			if (!bounds.isValid()) {
				throw new Error('Bounds are not valid.');
			}

			var target = this._getBoundsCenterZoom(bounds, options);
			return this.setView(target.center, target.zoom, options);
		},

		// @method fitWorld(options?: fitBounds options): this
		// Sets a map view that mostly contains the whole world with the maximum
		// zoom level possible.
		fitWorld: function (options) {
			return this.fitBounds([[-90, -180], [90, 180]], options);
		},

		// @method panTo(latlng: LatLng, options?: Pan options): this
		// Pans the map to a given center.
		panTo: function (center, options) { // (LatLng)
			return this.setView(center, this._zoom, {pan: options});
		},

		// @method panBy(offset: Point, options?: Pan options): this
		// Pans the map by a given number of pixels (animated).
		panBy: function (offset, options) {
			offset = toPoint(offset).round();
			options = options || {};

			if (!offset.x && !offset.y) {
				return this.fire('moveend');
			}
			// If we pan too far, Chrome gets issues with tiles
			// and makes them disappear or appear in the wrong place (slightly offset) #2602
			if (options.animate !== true && !this.getSize().contains(offset)) {
				this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
				return this;
			}

			if (!this._panAnim) {
				this._panAnim = new PosAnimation();

				this._panAnim.on({
					'step': this._onPanTransitionStep,
					'end': this._onPanTransitionEnd
				}, this);
			}

			// don't fire movestart if animating inertia
			if (!options.noMoveStart) {
				this.fire('movestart');
			}

			// animate pan unless animate: false specified
			if (options.animate !== false) {
				addClass(this._mapPane, 'leaflet-pan-anim');

				var newPos = this._getMapPanePos().subtract(offset).round();
				this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
			} else {
				this._rawPanBy(offset);
				this.fire('move').fire('moveend');
			}

			return this;
		},

		// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
		// Sets the view of the map (geographical center and zoom) performing a smooth
		// pan-zoom animation.
		flyTo: function (targetCenter, targetZoom, options) {

			options = options || {};
			if (options.animate === false || !any3d) {
				return this.setView(targetCenter, targetZoom, options);
			}

			this._stop();

			var from = this.project(this.getCenter()),
			    to = this.project(targetCenter),
			    size = this.getSize(),
			    startZoom = this._zoom;

			targetCenter = toLatLng(targetCenter);
			targetZoom = targetZoom === undefined ? startZoom : targetZoom;

			var w0 = Math.max(size.x, size.y),
			    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
			    u1 = (to.distanceTo(from)) || 1,
			    rho = 1.42,
			    rho2 = rho * rho;

			function r(i) {
				var s1 = i ? -1 : 1,
				    s2 = i ? w1 : w0,
				    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
				    b1 = 2 * s2 * rho2 * u1,
				    b = t1 / b1,
				    sq = Math.sqrt(b * b + 1) - b;

				    // workaround for floating point precision bug when sq = 0, log = -Infinite,
				    // thus triggering an infinite loop in flyTo
				    var log = sq < 0.000000001 ? -18 : Math.log(sq);

				return log;
			}

			function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }
			function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }
			function tanh(n) { return sinh(n) / cosh(n); }

			var r0 = r(0);

			function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }
			function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }

			function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }

			var start = Date.now(),
			    S = (r(1) - r0) / rho,
			    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

			function frame() {
				var t = (Date.now() - start) / duration,
				    s = easeOut(t) * S;

				if (t <= 1) {
					this._flyToFrame = requestAnimFrame(frame, this);

					this._move(
						this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
						this.getScaleZoom(w0 / w(s), startZoom),
						{flyTo: true});

				} else {
					this
						._move(targetCenter, targetZoom)
						._moveEnd(true);
				}
			}

			this._moveStart(true);

			frame.call(this);
			return this;
		},

		// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
		// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
		// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
		flyToBounds: function (bounds, options) {
			var target = this._getBoundsCenterZoom(bounds, options);
			return this.flyTo(target.center, target.zoom, options);
		},

		// @method setMaxBounds(bounds: Bounds): this
		// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
		setMaxBounds: function (bounds) {
			bounds = toLatLngBounds(bounds);

			if (!bounds.isValid()) {
				this.options.maxBounds = null;
				return this.off('moveend', this._panInsideMaxBounds);
			} else if (this.options.maxBounds) {
				this.off('moveend', this._panInsideMaxBounds);
			}

			this.options.maxBounds = bounds;

			if (this._loaded) {
				this._panInsideMaxBounds();
			}

			return this.on('moveend', this._panInsideMaxBounds);
		},

		// @method setMinZoom(zoom: Number): this
		// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
		setMinZoom: function (zoom) {
			this.options.minZoom = zoom;

			if (this._loaded && this.getZoom() < this.options.minZoom) {
				return this.setZoom(zoom);
			}

			return this;
		},

		// @method setMaxZoom(zoom: Number): this
		// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
		setMaxZoom: function (zoom) {
			this.options.maxZoom = zoom;

			if (this._loaded && (this.getZoom() > this.options.maxZoom)) {
				return this.setZoom(zoom);
			}

			return this;
		},

		// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
		// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
		panInsideBounds: function (bounds, options) {
			this._enforcingBounds = true;
			var center = this.getCenter(),
			    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

			if (!center.equals(newCenter)) {
				this.panTo(newCenter, options);
			}

			this._enforcingBounds = false;
			return this;
		},

		// @method invalidateSize(options: Zoom/Pan options): this
		// Checks if the map container size changed and updates the map if so —
		// call it after you've changed the map size dynamically, also animating
		// pan by default. If `options.pan` is `false`, panning will not occur.
		// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
		// that it doesn't happen often even if the method is called many
		// times in a row.

		// @alternative
		// @method invalidateSize(animate: Boolean): this
		// Checks if the map container size changed and updates the map if so —
		// call it after you've changed the map size dynamically, also animating
		// pan by default.
		invalidateSize: function (options) {
			if (!this._loaded) { return this; }

			options = extend({
				animate: false,
				pan: true
			}, options === true ? {animate: true} : options);

			var oldSize = this.getSize();
			this._sizeChanged = true;
			this._lastCenter = null;

			var newSize = this.getSize(),
			    oldCenter = oldSize.divideBy(2).round(),
			    newCenter = newSize.divideBy(2).round(),
			    offset = oldCenter.subtract(newCenter);

			if (!offset.x && !offset.y) { return this; }

			if (options.animate && options.pan) {
				this.panBy(offset);

			} else {
				if (options.pan) {
					this._rawPanBy(offset);
				}

				this.fire('move');

				if (options.debounceMoveend) {
					clearTimeout(this._sizeTimer);
					this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
				} else {
					this.fire('moveend');
				}
			}

			// @section Map state change events
			// @event resize: ResizeEvent
			// Fired when the map is resized.
			return this.fire('resize', {
				oldSize: oldSize,
				newSize: newSize
			});
		},

		// @section Methods for modifying map state
		// @method stop(): this
		// Stops the currently running `panTo` or `flyTo` animation, if any.
		stop: function () {
			this.setZoom(this._limitZoom(this._zoom));
			if (!this.options.zoomSnap) {
				this.fire('viewreset');
			}
			return this._stop();
		},

		// @section Geolocation methods
		// @method locate(options?: Locate options): this
		// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
		// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
		// and optionally sets the map view to the user's location with respect to
		// detection accuracy (or to the world view if geolocation failed).
		// Note that, if your page doesn't use HTTPS, this method will fail in
		// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
		// See `Locate options` for more details.
		locate: function (options) {

			options = this._locateOptions = extend({
				timeout: 10000,
				watch: false
				// setView: false
				// maxZoom: <Number>
				// maximumAge: 0
				// enableHighAccuracy: false
			}, options);

			if (!('geolocation' in navigator)) {
				this._handleGeolocationError({
					code: 0,
					message: 'Geolocation not supported.'
				});
				return this;
			}

			var onResponse = bind(this._handleGeolocationResponse, this),
			    onError = bind(this._handleGeolocationError, this);

			if (options.watch) {
				this._locationWatchId =
				        navigator.geolocation.watchPosition(onResponse, onError, options);
			} else {
				navigator.geolocation.getCurrentPosition(onResponse, onError, options);
			}
			return this;
		},

		// @method stopLocate(): this
		// Stops watching location previously initiated by `map.locate({watch: true})`
		// and aborts resetting the map view if map.locate was called with
		// `{setView: true}`.
		stopLocate: function () {
			if (navigator.geolocation && navigator.geolocation.clearWatch) {
				navigator.geolocation.clearWatch(this._locationWatchId);
			}
			if (this._locateOptions) {
				this._locateOptions.setView = false;
			}
			return this;
		},

		_handleGeolocationError: function (error) {
			var c = error.code,
			    message = error.message ||
			            (c === 1 ? 'permission denied' :
			            (c === 2 ? 'position unavailable' : 'timeout'));

			if (this._locateOptions.setView && !this._loaded) {
				this.fitWorld();
			}

			// @section Location events
			// @event locationerror: ErrorEvent
			// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
			this.fire('locationerror', {
				code: c,
				message: 'Geolocation error: ' + message + '.'
			});
		},

		_handleGeolocationResponse: function (pos) {
			var lat = pos.coords.latitude,
			    lng = pos.coords.longitude,
			    latlng = new LatLng(lat, lng),
			    bounds = latlng.toBounds(pos.coords.accuracy),
			    options = this._locateOptions;

			if (options.setView) {
				var zoom = this.getBoundsZoom(bounds);
				this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
			}

			var data = {
				latlng: latlng,
				bounds: bounds,
				timestamp: pos.timestamp
			};

			for (var i in pos.coords) {
				if (typeof pos.coords[i] === 'number') {
					data[i] = pos.coords[i];
				}
			}

			// @event locationfound: LocationEvent
			// Fired when geolocation (using the [`locate`](#map-locate) method)
			// went successfully.
			this.fire('locationfound', data);
		},

		// TODO handler.addTo
		// TODO Appropiate docs section?
		// @section Other Methods
		// @method addHandler(name: String, HandlerClass: Function): this
		// Adds a new `Handler` to the map, given its name and constructor function.
		addHandler: function (name, HandlerClass) {
			if (!HandlerClass) { return this; }

			var handler = this[name] = new HandlerClass(this);

			this._handlers.push(handler);

			if (this.options[name]) {
				handler.enable();
			}

			return this;
		},

		// @method remove(): this
		// Destroys the map and clears all related event listeners.
		remove: function () {

			this._initEvents(true);

			if (this._containerId !== this._container._leaflet_id) {
				throw new Error('Map container is being reused by another instance');
			}

			try {
				// throws error in IE6-8
				delete this._container._leaflet_id;
				delete this._containerId;
			} catch (e) {
				/*eslint-disable */
				this._container._leaflet_id = undefined;
				/*eslint-enable */
				this._containerId = undefined;
			}

			remove(this._mapPane);

			if (this._clearControlPos) {
				this._clearControlPos();
			}

			this._clearHandlers();

			if (this._loaded) {
				// @section Map state change events
				// @event unload: Event
				// Fired when the map is destroyed with [remove](#map-remove) method.
				this.fire('unload');
			}

			var i;
			for (i in this._layers) {
				this._layers[i].remove();
			}
			for (i in this._panes) {
				remove(this._panes[i]);
			}

			this._layers = [];
			this._panes = [];
			delete this._mapPane;
			delete this._renderer;

			return this;
		},

		// @section Other Methods
		// @method createPane(name: String, container?: HTMLElement): HTMLElement
		// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
		// then returns it. The pane is created as a child of `container`, or
		// as a child of the main map pane if not set.
		createPane: function (name, container) {
			var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
			    pane = create$1('div', className, container || this._mapPane);

			if (name) {
				this._panes[name] = pane;
			}
			return pane;
		},

		// @section Methods for Getting Map State

		// @method getCenter(): LatLng
		// Returns the geographical center of the map view
		getCenter: function () {
			this._checkIfLoaded();

			if (this._lastCenter && !this._moved()) {
				return this._lastCenter;
			}
			return this.layerPointToLatLng(this._getCenterLayerPoint());
		},

		// @method getZoom(): Number
		// Returns the current zoom level of the map view
		getZoom: function () {
			return this._zoom;
		},

		// @method getBounds(): LatLngBounds
		// Returns the geographical bounds visible in the current map view
		getBounds: function () {
			var bounds = this.getPixelBounds(),
			    sw = this.unproject(bounds.getBottomLeft()),
			    ne = this.unproject(bounds.getTopRight());

			return new LatLngBounds(sw, ne);
		},

		// @method getMinZoom(): Number
		// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
		getMinZoom: function () {
			return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
		},

		// @method getMaxZoom(): Number
		// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
		getMaxZoom: function () {
			return this.options.maxZoom === undefined ?
				(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
				this.options.maxZoom;
		},

		// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean): Number
		// Returns the maximum zoom level on which the given bounds fit to the map
		// view in its entirety. If `inside` (optional) is set to `true`, the method
		// instead returns the minimum zoom level on which the map view fits into
		// the given bounds in its entirety.
		getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
			bounds = toLatLngBounds(bounds);
			padding = toPoint(padding || [0, 0]);

			var zoom = this.getZoom() || 0,
			    min = this.getMinZoom(),
			    max = this.getMaxZoom(),
			    nw = bounds.getNorthWest(),
			    se = bounds.getSouthEast(),
			    size = this.getSize().subtract(padding),
			    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
			    snap = any3d ? this.options.zoomSnap : 1,
			    scalex = size.x / boundsSize.x,
			    scaley = size.y / boundsSize.y,
			    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);

			zoom = this.getScaleZoom(scale, zoom);

			if (snap) {
				zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
				zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
			}

			return Math.max(min, Math.min(max, zoom));
		},

		// @method getSize(): Point
		// Returns the current size of the map container (in pixels).
		getSize: function () {
			if (!this._size || this._sizeChanged) {
				this._size = new Point(
					this._container.clientWidth || 0,
					this._container.clientHeight || 0);

				this._sizeChanged = false;
			}
			return this._size.clone();
		},

		// @method getPixelBounds(): Bounds
		// Returns the bounds of the current map view in projected pixel
		// coordinates (sometimes useful in layer and overlay implementations).
		getPixelBounds: function (center, zoom) {
			var topLeftPoint = this._getTopLeftPoint(center, zoom);
			return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
		},

		// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
		// the map pane? "left point of the map layer" can be confusing, specially
		// since there can be negative offsets.
		// @method getPixelOrigin(): Point
		// Returns the projected pixel coordinates of the top left point of
		// the map layer (useful in custom layer and overlay implementations).
		getPixelOrigin: function () {
			this._checkIfLoaded();
			return this._pixelOrigin;
		},

		// @method getPixelWorldBounds(zoom?: Number): Bounds
		// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
		// If `zoom` is omitted, the map's current zoom level is used.
		getPixelWorldBounds: function (zoom) {
			return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
		},

		// @section Other Methods

		// @method getPane(pane: String|HTMLElement): HTMLElement
		// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
		getPane: function (pane) {
			return typeof pane === 'string' ? this._panes[pane] : pane;
		},

		// @method getPanes(): Object
		// Returns a plain object containing the names of all [panes](#map-pane) as keys and
		// the panes as values.
		getPanes: function () {
			return this._panes;
		},

		// @method getContainer: HTMLElement
		// Returns the HTML element that contains the map.
		getContainer: function () {
			return this._container;
		},


		// @section Conversion Methods

		// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
		// Returns the scale factor to be applied to a map transition from zoom level
		// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
		getZoomScale: function (toZoom, fromZoom) {
			// TODO replace with universal implementation after refactoring projections
			var crs = this.options.crs;
			fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
			return crs.scale(toZoom) / crs.scale(fromZoom);
		},

		// @method getScaleZoom(scale: Number, fromZoom: Number): Number
		// Returns the zoom level that the map would end up at, if it is at `fromZoom`
		// level and everything is scaled by a factor of `scale`. Inverse of
		// [`getZoomScale`](#map-getZoomScale).
		getScaleZoom: function (scale, fromZoom) {
			var crs = this.options.crs;
			fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
			var zoom = crs.zoom(scale * crs.scale(fromZoom));
			return isNaN(zoom) ? Infinity : zoom;
		},

		// @method project(latlng: LatLng, zoom: Number): Point
		// Projects a geographical coordinate `LatLng` according to the projection
		// of the map's CRS, then scales it according to `zoom` and the CRS's
		// `Transformation`. The result is pixel coordinate relative to
		// the CRS origin.
		project: function (latlng, zoom) {
			zoom = zoom === undefined ? this._zoom : zoom;
			return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
		},

		// @method unproject(point: Point, zoom: Number): LatLng
		// Inverse of [`project`](#map-project).
		unproject: function (point, zoom) {
			zoom = zoom === undefined ? this._zoom : zoom;
			return this.options.crs.pointToLatLng(toPoint(point), zoom);
		},

		// @method layerPointToLatLng(point: Point): LatLng
		// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
		// returns the corresponding geographical coordinate (for the current zoom level).
		layerPointToLatLng: function (point) {
			var projectedPoint = toPoint(point).add(this.getPixelOrigin());
			return this.unproject(projectedPoint);
		},

		// @method latLngToLayerPoint(latlng: LatLng): Point
		// Given a geographical coordinate, returns the corresponding pixel coordinate
		// relative to the [origin pixel](#map-getpixelorigin).
		latLngToLayerPoint: function (latlng) {
			var projectedPoint = this.project(toLatLng(latlng))._round();
			return projectedPoint._subtract(this.getPixelOrigin());
		},

		// @method wrapLatLng(latlng: LatLng): LatLng
		// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
		// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
		// CRS's bounds.
		// By default this means longitude is wrapped around the dateline so its
		// value is between -180 and +180 degrees.
		wrapLatLng: function (latlng) {
			return this.options.crs.wrapLatLng(toLatLng(latlng));
		},

		// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
		// Returns a `LatLngBounds` with the same size as the given one, ensuring that
		// its center is within the CRS's bounds.
		// By default this means the center longitude is wrapped around the dateline so its
		// value is between -180 and +180 degrees, and the majority of the bounds
		// overlaps the CRS's bounds.
		wrapLatLngBounds: function (latlng) {
			return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
		},

		// @method distance(latlng1: LatLng, latlng2: LatLng): Number
		// Returns the distance between two geographical coordinates according to
		// the map's CRS. By default this measures distance in meters.
		distance: function (latlng1, latlng2) {
			return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
		},

		// @method containerPointToLayerPoint(point: Point): Point
		// Given a pixel coordinate relative to the map container, returns the corresponding
		// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
		containerPointToLayerPoint: function (point) { // (Point)
			return toPoint(point).subtract(this._getMapPanePos());
		},

		// @method layerPointToContainerPoint(point: Point): Point
		// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
		// returns the corresponding pixel coordinate relative to the map container.
		layerPointToContainerPoint: function (point) { // (Point)
			return toPoint(point).add(this._getMapPanePos());
		},

		// @method containerPointToLatLng(point: Point): LatLng
		// Given a pixel coordinate relative to the map container, returns
		// the corresponding geographical coordinate (for the current zoom level).
		containerPointToLatLng: function (point) {
			var layerPoint = this.containerPointToLayerPoint(toPoint(point));
			return this.layerPointToLatLng(layerPoint);
		},

		// @method latLngToContainerPoint(latlng: LatLng): Point
		// Given a geographical coordinate, returns the corresponding pixel coordinate
		// relative to the map container.
		latLngToContainerPoint: function (latlng) {
			return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
		},

		// @method mouseEventToContainerPoint(ev: MouseEvent): Point
		// Given a MouseEvent object, returns the pixel coordinate relative to the
		// map container where the event took place.
		mouseEventToContainerPoint: function (e) {
			return getMousePosition(e, this._container);
		},

		// @method mouseEventToLayerPoint(ev: MouseEvent): Point
		// Given a MouseEvent object, returns the pixel coordinate relative to
		// the [origin pixel](#map-getpixelorigin) where the event took place.
		mouseEventToLayerPoint: function (e) {
			return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
		},

		// @method mouseEventToLatLng(ev: MouseEvent): LatLng
		// Given a MouseEvent object, returns geographical coordinate where the
		// event took place.
		mouseEventToLatLng: function (e) { // (MouseEvent)
			return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
		},


		// map initialization methods

		_initContainer: function (id) {
			var container = this._container = get(id);

			if (!container) {
				throw new Error('Map container not found.');
			} else if (container._leaflet_id) {
				throw new Error('Map container is already initialized.');
			}

			on(container, 'scroll', this._onScroll, this);
			this._containerId = stamp(container);
		},

		_initLayout: function () {
			var container = this._container;

			this._fadeAnimated = this.options.fadeAnimation && any3d;

			addClass(container, 'leaflet-container' +
				(touch ? ' leaflet-touch' : '') +
				(retina ? ' leaflet-retina' : '') +
				(ielt9 ? ' leaflet-oldie' : '') +
				(safari ? ' leaflet-safari' : '') +
				(this._fadeAnimated ? ' leaflet-fade-anim' : ''));

			var position = getStyle(container, 'position');

			if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
				container.style.position = 'relative';
			}

			this._initPanes();

			if (this._initControlPos) {
				this._initControlPos();
			}
		},

		_initPanes: function () {
			var panes = this._panes = {};
			this._paneRenderers = {};

			// @section
			//
			// Panes are DOM elements used to control the ordering of layers on the map. You
			// can access panes with [`map.getPane`](#map-getpane) or
			// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
			// [`map.createPane`](#map-createpane) method.
			//
			// Every map has the following default panes that differ only in zIndex.
			//
			// @pane mapPane: HTMLElement = 'auto'
			// Pane that contains all other map panes

			this._mapPane = this.createPane('mapPane', this._container);
			setPosition(this._mapPane, new Point(0, 0));

			// @pane tilePane: HTMLElement = 200
			// Pane for `GridLayer`s and `TileLayer`s
			this.createPane('tilePane');
			// @pane overlayPane: HTMLElement = 400
			// Pane for vector overlays (`Path`s), like `Polyline`s and `Polygon`s
			this.createPane('shadowPane');
			// @pane shadowPane: HTMLElement = 500
			// Pane for overlay shadows (e.g. `Marker` shadows)
			this.createPane('overlayPane');
			// @pane markerPane: HTMLElement = 600
			// Pane for `Icon`s of `Marker`s
			this.createPane('markerPane');
			// @pane tooltipPane: HTMLElement = 650
			// Pane for tooltip.
			this.createPane('tooltipPane');
			// @pane popupPane: HTMLElement = 700
			// Pane for `Popup`s.
			this.createPane('popupPane');

			if (!this.options.markerZoomAnimation) {
				addClass(panes.markerPane, 'leaflet-zoom-hide');
				addClass(panes.shadowPane, 'leaflet-zoom-hide');
			}
		},


		// private methods that modify map state

		// @section Map state change events
		_resetView: function (center, zoom) {
			setPosition(this._mapPane, new Point(0, 0));

			var loading = !this._loaded;
			this._loaded = true;
			zoom = this._limitZoom(zoom);

			this.fire('viewprereset');

			var zoomChanged = this._zoom !== zoom;
			this
				._moveStart(zoomChanged)
				._move(center, zoom)
				._moveEnd(zoomChanged);

			// @event viewreset: Event
			// Fired when the map needs to redraw its content (this usually happens
			// on map zoom or load). Very useful for creating custom overlays.
			this.fire('viewreset');

			// @event load: Event
			// Fired when the map is initialized (when its center and zoom are set
			// for the first time).
			if (loading) {
				this.fire('load');
			}
		},

		_moveStart: function (zoomChanged) {
			// @event zoomstart: Event
			// Fired when the map zoom is about to change (e.g. before zoom animation).
			// @event movestart: Event
			// Fired when the view of the map starts changing (e.g. user starts dragging the map).
			if (zoomChanged) {
				this.fire('zoomstart');
			}
			return this.fire('movestart');
		},

		_move: function (center, zoom, data) {
			if (zoom === undefined) {
				zoom = this._zoom;
			}
			var zoomChanged = this._zoom !== zoom;

			this._zoom = zoom;
			this._lastCenter = center;
			this._pixelOrigin = this._getNewPixelOrigin(center);

			// @event zoom: Event
			// Fired repeatedly during any change in zoom level, including zoom
			// and fly animations.
			if (zoomChanged || (data && data.pinch)) {	// Always fire 'zoom' if pinching because #3530
				this.fire('zoom', data);
			}

			// @event move: Event
			// Fired repeatedly during any movement of the map, including pan and
			// fly animations.
			return this.fire('move', data);
		},

		_moveEnd: function (zoomChanged) {
			// @event zoomend: Event
			// Fired when the map has changed, after any animations.
			if (zoomChanged) {
				this.fire('zoomend');
			}

			// @event moveend: Event
			// Fired when the center of the map stops changing (e.g. user stopped
			// dragging the map).
			return this.fire('moveend');
		},

		_stop: function () {
			cancelAnimFrame(this._flyToFrame);
			if (this._panAnim) {
				this._panAnim.stop();
			}
			return this;
		},

		_rawPanBy: function (offset) {
			setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
		},

		_getZoomSpan: function () {
			return this.getMaxZoom() - this.getMinZoom();
		},

		_panInsideMaxBounds: function () {
			if (!this._enforcingBounds) {
				this.panInsideBounds(this.options.maxBounds);
			}
		},

		_checkIfLoaded: function () {
			if (!this._loaded) {
				throw new Error('Set map center and zoom first.');
			}
		},

		// DOM event handling

		// @section Interaction events
		_initEvents: function (remove$$1) {
			this._targets = {};
			this._targets[stamp(this._container)] = this;

			var onOff = remove$$1 ? off : on;

			// @event click: MouseEvent
			// Fired when the user clicks (or taps) the map.
			// @event dblclick: MouseEvent
			// Fired when the user double-clicks (or double-taps) the map.
			// @event mousedown: MouseEvent
			// Fired when the user pushes the mouse button on the map.
			// @event mouseup: MouseEvent
			// Fired when the user releases the mouse button on the map.
			// @event mouseover: MouseEvent
			// Fired when the mouse enters the map.
			// @event mouseout: MouseEvent
			// Fired when the mouse leaves the map.
			// @event mousemove: MouseEvent
			// Fired while the mouse moves over the map.
			// @event contextmenu: MouseEvent
			// Fired when the user pushes the right mouse button on the map, prevents
			// default browser context menu from showing if there are listeners on
			// this event. Also fired on mobile when the user holds a single touch
			// for a second (also called long press).
			// @event keypress: KeyboardEvent
			// Fired when the user presses a key from the keyboard while the map is focused.
			onOff(this._container, 'click dblclick mousedown mouseup ' +
				'mouseover mouseout mousemove contextmenu keypress', this._handleDOMEvent, this);

			if (this.options.trackResize) {
				onOff(window, 'resize', this._onResize, this);
			}

			if (any3d && this.options.transform3DLimit) {
				(remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
			}
		},

		_onResize: function () {
			cancelAnimFrame(this._resizeRequest);
			this._resizeRequest = requestAnimFrame(
			        function () { this.invalidateSize({debounceMoveend: true}); }, this);
		},

		_onScroll: function () {
			this._container.scrollTop  = 0;
			this._container.scrollLeft = 0;
		},

		_onMoveEnd: function () {
			var pos = this._getMapPanePos();
			if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
				// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
				// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
				this._resetView(this.getCenter(), this.getZoom());
			}
		},

		_findEventTargets: function (e, type) {
			var targets = [],
			    target,
			    isHover = type === 'mouseout' || type === 'mouseover',
			    src = e.target || e.srcElement,
			    dragging = false;

			while (src) {
				target = this._targets[stamp(src)];
				if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
					// Prevent firing click after you just dragged an object.
					dragging = true;
					break;
				}
				if (target && target.listens(type, true)) {
					if (isHover && !isExternalTarget(src, e)) { break; }
					targets.push(target);
					if (isHover) { break; }
				}
				if (src === this._container) { break; }
				src = src.parentNode;
			}
			if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
				targets = [this];
			}
			return targets;
		},

		_handleDOMEvent: function (e) {
			if (!this._loaded || skipped(e)) { return; }

			var type = e.type;

			if (type === 'mousedown' || type === 'keypress') {
				// prevents outline when clicking on keyboard-focusable element
				preventOutline(e.target || e.srcElement);
			}

			this._fireDOMEvent(e, type);
		},

		_mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],

		_fireDOMEvent: function (e, type, targets) {

			if (e.type === 'click') {
				// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
				// @event preclick: MouseEvent
				// Fired before mouse click on the map (sometimes useful when you
				// want something to happen on click before any existing click
				// handlers start running).
				var synth = extend({}, e);
				synth.type = 'preclick';
				this._fireDOMEvent(synth, synth.type, targets);
			}

			if (e._stopped) { return; }

			// Find the layer the event is propagating from and its parents.
			targets = (targets || []).concat(this._findEventTargets(e, type));

			if (!targets.length) { return; }

			var target = targets[0];
			if (type === 'contextmenu' && target.listens(type, true)) {
				preventDefault(e);
			}

			var data = {
				originalEvent: e
			};

			if (e.type !== 'keypress') {
				var isMarker = (target.options && 'icon' in target.options);
				data.containerPoint = isMarker ?
						this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
				data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
				data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
			}

			for (var i = 0; i < targets.length; i++) {
				targets[i].fire(type, data, true);
				if (data.originalEvent._stopped ||
					(targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1)) { return; }
			}
		},

		_draggableMoved: function (obj) {
			obj = obj.dragging && obj.dragging.enabled() ? obj : this;
			return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
		},

		_clearHandlers: function () {
			for (var i = 0, len = this._handlers.length; i < len; i++) {
				this._handlers[i].disable();
			}
		},

		// @section Other Methods

		// @method whenReady(fn: Function, context?: Object): this
		// Runs the given function `fn` when the map gets initialized with
		// a view (center and zoom) and at least one layer, or immediately
		// if it's already initialized, optionally passing a function context.
		whenReady: function (callback, context) {
			if (this._loaded) {
				callback.call(context || this, {target: this});
			} else {
				this.on('load', callback, context);
			}
			return this;
		},


		// private methods for getting map state

		_getMapPanePos: function () {
			return getPosition(this._mapPane) || new Point(0, 0);
		},

		_moved: function () {
			var pos = this._getMapPanePos();
			return pos && !pos.equals([0, 0]);
		},

		_getTopLeftPoint: function (center, zoom) {
			var pixelOrigin = center && zoom !== undefined ?
				this._getNewPixelOrigin(center, zoom) :
				this.getPixelOrigin();
			return pixelOrigin.subtract(this._getMapPanePos());
		},

		_getNewPixelOrigin: function (center, zoom) {
			var viewHalf = this.getSize()._divideBy(2);
			return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
		},

		_latLngToNewLayerPoint: function (latlng, zoom, center) {
			var topLeft = this._getNewPixelOrigin(center, zoom);
			return this.project(latlng, zoom)._subtract(topLeft);
		},

		_latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {
			var topLeft = this._getNewPixelOrigin(center, zoom);
			return toBounds([
				this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
				this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
				this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
				this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
			]);
		},

		// layer point of the current center
		_getCenterLayerPoint: function () {
			return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
		},

		// offset of the specified place to the current center in pixels
		_getCenterOffset: function (latlng) {
			return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
		},

		// adjust center for view to get inside bounds
		_limitCenter: function (center, zoom, bounds) {

			if (!bounds) { return center; }

			var centerPoint = this.project(center, zoom),
			    viewHalf = this.getSize().divideBy(2),
			    viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
			    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

			// If offset is less than a pixel, ignore.
			// This prevents unstable projections from getting into
			// an infinite loop of tiny offsets.
			if (offset.round().equals([0, 0])) {
				return center;
			}

			return this.unproject(centerPoint.add(offset), zoom);
		},

		// adjust offset for view to get inside bounds
		_limitOffset: function (offset, bounds) {
			if (!bounds) { return offset; }

			var viewBounds = this.getPixelBounds(),
			    newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

			return offset.add(this._getBoundsOffset(newBounds, bounds));
		},

		// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
		_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
			var projectedMaxBounds = toBounds(
			        this.project(maxBounds.getNorthEast(), zoom),
			        this.project(maxBounds.getSouthWest(), zoom)
			    ),
			    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
			    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),

			    dx = this._rebound(minOffset.x, -maxOffset.x),
			    dy = this._rebound(minOffset.y, -maxOffset.y);

			return new Point(dx, dy);
		},

		_rebound: function (left, right) {
			return left + right > 0 ?
				Math.round(left - right) / 2 :
				Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
		},

		_limitZoom: function (zoom) {
			var min = this.getMinZoom(),
			    max = this.getMaxZoom(),
			    snap = any3d ? this.options.zoomSnap : 1;
			if (snap) {
				zoom = Math.round(zoom / snap) * snap;
			}
			return Math.max(min, Math.min(max, zoom));
		},

		_onPanTransitionStep: function () {
			this.fire('move');
		},

		_onPanTransitionEnd: function () {
			removeClass(this._mapPane, 'leaflet-pan-anim');
			this.fire('moveend');
		},

		_tryAnimatedPan: function (center, options) {
			// difference between the new and current centers in pixels
			var offset = this._getCenterOffset(center)._floor();

			// don't animate too far unless animate: true specified in options
			if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

			this.panBy(offset, options);

			return true;
		},

		_createAnimProxy: function () {

			var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');
			this._panes.mapPane.appendChild(proxy);

			this.on('zoomanim', function (e) {
				var prop = TRANSFORM,
				    transform = this._proxy.style[prop];

				setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

				// workaround for case when transform is the same and so transitionend event is not fired
				if (transform === this._proxy.style[prop] && this._animatingZoom) {
					this._onZoomTransitionEnd();
				}
			}, this);

			this.on('load moveend', function () {
				var c = this.getCenter(),
				    z = this.getZoom();
				setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
			}, this);

			this._on('unload', this._destroyAnimProxy, this);
		},

		_destroyAnimProxy: function () {
			remove(this._proxy);
			delete this._proxy;
		},

		_catchTransitionEnd: function (e) {
			if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
				this._onZoomTransitionEnd();
			}
		},

		_nothingToAnimate: function () {
			return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
		},

		_tryAnimatedZoom: function (center, zoom, options) {

			if (this._animatingZoom) { return true; }

			options = options || {};

			// don't animate if disabled, not supported or zoom difference is too large
			if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
			        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

			// offset is the pixel coords of the zoom origin relative to the current center
			var scale = this.getZoomScale(zoom),
			    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

			// don't animate if the zoom origin isn't within one screen from the current center, unless forced
			if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

			requestAnimFrame(function () {
				this
				    ._moveStart(true)
				    ._animateZoom(center, zoom, true);
			}, this);

			return true;
		},

		_animateZoom: function (center, zoom, startAnim, noUpdate) {
			if (startAnim) {
				this._animatingZoom = true;

				// remember what center/zoom to set after animation
				this._animateToCenter = center;
				this._animateToZoom = zoom;

				addClass(this._mapPane, 'leaflet-zoom-anim');
			}

			// @event zoomanim: ZoomAnimEvent
			// Fired on every frame of a zoom animation
			this.fire('zoomanim', {
				center: center,
				zoom: zoom,
				noUpdate: noUpdate
			});

			// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
			setTimeout(bind(this._onZoomTransitionEnd, this), 250);
		},

		_onZoomTransitionEnd: function () {
			if (!this._animatingZoom) { return; }

			removeClass(this._mapPane, 'leaflet-zoom-anim');

			this._animatingZoom = false;

			this._move(this._animateToCenter, this._animateToZoom);

			// This anim frame should prevent an obscure iOS webkit tile loading race condition.
			requestAnimFrame(function () {
				this._moveEnd(true);
			}, this);
		}
	});

	// @section

	// @factory L.map(id: String, options?: Map options)
	// Instantiates a map object given the DOM ID of a `<div>` element
	// and optionally an object literal with `Map options`.
	//
	// @alternative
	// @factory L.map(el: HTMLElement, options?: Map options)
	// Instantiates a map object given an instance of a `<div>` HTML element
	// and optionally an object literal with `Map options`.
	function createMap(id, options) {
		return new Map(id, options);
	}

	/*
	 * @class Control
	 * @aka L.Control
	 * @inherits Class
	 *
	 * L.Control is a base class for implementing map controls. Handles positioning.
	 * All other controls extend from this class.
	 */

	var Control = Class.extend({
		// @section
		// @aka Control options
		options: {
			// @option position: String = 'topright'
			// The position of the control (one of the map corners). Possible values are `'topleft'`,
			// `'topright'`, `'bottomleft'` or `'bottomright'`
			position: 'topright'
		},

		initialize: function (options) {
			setOptions(this, options);
		},

		/* @section
		 * Classes extending L.Control will inherit the following methods:
		 *
		 * @method getPosition: string
		 * Returns the position of the control.
		 */
		getPosition: function () {
			return this.options.position;
		},

		// @method setPosition(position: string): this
		// Sets the position of the control.
		setPosition: function (position) {
			var map = this._map;

			if (map) {
				map.removeControl(this);
			}

			this.options.position = position;

			if (map) {
				map.addControl(this);
			}

			return this;
		},

		// @method getContainer: HTMLElement
		// Returns the HTMLElement that contains the control.
		getContainer: function () {
			return this._container;
		},

		// @method addTo(map: Map): this
		// Adds the control to the given map.
		addTo: function (map) {
			this.remove();
			this._map = map;

			var container = this._container = this.onAdd(map),
			    pos = this.getPosition(),
			    corner = map._controlCorners[pos];

			addClass(container, 'leaflet-control');

			if (pos.indexOf('bottom') !== -1) {
				corner.insertBefore(container, corner.firstChild);
			} else {
				corner.appendChild(container);
			}

			return this;
		},

		// @method remove: this
		// Removes the control from the map it is currently active on.
		remove: function () {
			if (!this._map) {
				return this;
			}

			remove(this._container);

			if (this.onRemove) {
				this.onRemove(this._map);
			}

			this._map = null;

			return this;
		},

		_refocusOnMap: function (e) {
			// if map exists and event is not a keyboard event
			if (this._map && e && e.screenX > 0 && e.screenY > 0) {
				this._map.getContainer().focus();
			}
		}
	});

	var control = function (options) {
		return new Control(options);
	};

	/* @section Extension methods
	 * @uninheritable
	 *
	 * Every control should extend from `L.Control` and (re-)implement the following methods.
	 *
	 * @method onAdd(map: Map): HTMLElement
	 * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
	 *
	 * @method onRemove(map: Map)
	 * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
	 */

	/* @namespace Map
	 * @section Methods for Layers and Controls
	 */
	Map.include({
		// @method addControl(control: Control): this
		// Adds the given control to the map
		addControl: function (control) {
			control.addTo(this);
			return this;
		},

		// @method removeControl(control: Control): this
		// Removes the given control from the map
		removeControl: function (control) {
			control.remove();
			return this;
		},

		_initControlPos: function () {
			var corners = this._controlCorners = {},
			    l = 'leaflet-',
			    container = this._controlContainer =
			            create$1('div', l + 'control-container', this._container);

			function createCorner(vSide, hSide) {
				var className = l + vSide + ' ' + l + hSide;

				corners[vSide + hSide] = create$1('div', className, container);
			}

			createCorner('top', 'left');
			createCorner('top', 'right');
			createCorner('bottom', 'left');
			createCorner('bottom', 'right');
		},

		_clearControlPos: function () {
			for (var i in this._controlCorners) {
				remove(this._controlCorners[i]);
			}
			remove(this._controlContainer);
			delete this._controlCorners;
			delete this._controlContainer;
		}
	});

	/*
	 * @class Control.Layers
	 * @aka L.Control.Layers
	 * @inherits Control
	 *
	 * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
	 *
	 * @example
	 *
	 * ```js
	 * var baseLayers = {
	 * 	"Mapbox": mapbox,
	 * 	"OpenStreetMap": osm
	 * };
	 *
	 * var overlays = {
	 * 	"Marker": marker,
	 * 	"Roads": roadsLayer
	 * };
	 *
	 * L.control.layers(baseLayers, overlays).addTo(map);
	 * ```
	 *
	 * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
	 *
	 * ```js
	 * {
	 *     "<someName1>": layer1,
	 *     "<someName2>": layer2
	 * }
	 * ```
	 *
	 * The layer names can contain HTML, which allows you to add additional styling to the items:
	 *
	 * ```js
	 * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
	 * ```
	 */

	var Layers = Control.extend({
		// @section
		// @aka Control.Layers options
		options: {
			// @option collapsed: Boolean = true
			// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
			collapsed: true,
			position: 'topright',

			// @option autoZIndex: Boolean = true
			// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
			autoZIndex: true,

			// @option hideSingleBase: Boolean = false
			// If `true`, the base layers in the control will be hidden when there is only one.
			hideSingleBase: false,

			// @option sortLayers: Boolean = false
			// Whether to sort the layers. When `false`, layers will keep the order
			// in which they were added to the control.
			sortLayers: false,

			// @option sortFunction: Function = *
			// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
			// that will be used for sorting the layers, when `sortLayers` is `true`.
			// The function receives both the `L.Layer` instances and their names, as in
			// `sortFunction(layerA, layerB, nameA, nameB)`.
			// By default, it sorts layers alphabetically by their name.
			sortFunction: function (layerA, layerB, nameA, nameB) {
				return nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);
			}
		},

		initialize: function (baseLayers, overlays, options) {
			setOptions(this, options);

			this._layerControlInputs = [];
			this._layers = [];
			this._lastZIndex = 0;
			this._handlingClick = false;

			for (var i in baseLayers) {
				this._addLayer(baseLayers[i], i);
			}

			for (i in overlays) {
				this._addLayer(overlays[i], i, true);
			}
		},

		onAdd: function (map) {
			this._initLayout();
			this._update();

			this._map = map;
			map.on('zoomend', this._checkDisabledLayers, this);

			for (var i = 0; i < this._layers.length; i++) {
				this._layers[i].layer.on('add remove', this._onLayerChange, this);
			}

			return this._container;
		},

		addTo: function (map) {
			Control.prototype.addTo.call(this, map);
			// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
			return this._expandIfNotCollapsed();
		},

		onRemove: function () {
			this._map.off('zoomend', this._checkDisabledLayers, this);

			for (var i = 0; i < this._layers.length; i++) {
				this._layers[i].layer.off('add remove', this._onLayerChange, this);
			}
		},

		// @method addBaseLayer(layer: Layer, name: String): this
		// Adds a base layer (radio button entry) with the given name to the control.
		addBaseLayer: function (layer, name) {
			this._addLayer(layer, name);
			return (this._map) ? this._update() : this;
		},

		// @method addOverlay(layer: Layer, name: String): this
		// Adds an overlay (checkbox entry) with the given name to the control.
		addOverlay: function (layer, name) {
			this._addLayer(layer, name, true);
			return (this._map) ? this._update() : this;
		},

		// @method removeLayer(layer: Layer): this
		// Remove the given layer from the control.
		removeLayer: function (layer) {
			layer.off('add remove', this._onLayerChange, this);

			var obj = this._getLayer(stamp(layer));
			if (obj) {
				this._layers.splice(this._layers.indexOf(obj), 1);
			}
			return (this._map) ? this._update() : this;
		},

		// @method expand(): this
		// Expand the control container if collapsed.
		expand: function () {
			addClass(this._container, 'leaflet-control-layers-expanded');
			this._form.style.height = null;
			var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
			if (acceptableHeight < this._form.clientHeight) {
				addClass(this._form, 'leaflet-control-layers-scrollbar');
				this._form.style.height = acceptableHeight + 'px';
			} else {
				removeClass(this._form, 'leaflet-control-layers-scrollbar');
			}
			this._checkDisabledLayers();
			return this;
		},

		// @method collapse(): this
		// Collapse the control container if expanded.
		collapse: function () {
			removeClass(this._container, 'leaflet-control-layers-expanded');
			return this;
		},

		_initLayout: function () {
			var className = 'leaflet-control-layers',
			    container = this._container = create$1('div', className),
			    collapsed = this.options.collapsed;

			// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
			container.setAttribute('aria-haspopup', true);

			disableClickPropagation(container);
			disableScrollPropagation(container);

			var form = this._form = create$1('form', className + '-list');

			if (collapsed) {
				this._map.on('click', this.collapse, this);

				if (!android) {
					on(container, {
						mouseenter: this.expand,
						mouseleave: this.collapse
					}, this);
				}
			}

			var link = this._layersLink = create$1('a', className + '-toggle', container);
			link.href = '#';
			link.title = 'Layers';

			if (touch) {
				on(link, 'click', stop);
				on(link, 'click', this.expand, this);
			} else {
				on(link, 'focus', this.expand, this);
			}

			// work around for Firefox Android issue https://github.com/Leaflet/Leaflet/issues/2033
			on(form, 'click', function () {
				setTimeout(bind(this._onInputClick, this), 0);
			}, this);

			// TODO keyboard accessibility

			if (!collapsed) {
				this.expand();
			}

			this._baseLayersList = create$1('div', className + '-base', form);
			this._separator = create$1('div', className + '-separator', form);
			this._overlaysList = create$1('div', className + '-overlays', form);

			container.appendChild(form);
		},

		_getLayer: function (id) {
			for (var i = 0; i < this._layers.length; i++) {

				if (this._layers[i] && stamp(this._layers[i].layer) === id) {
					return this._layers[i];
				}
			}
		},

		_addLayer: function (layer, name, overlay) {
			if (this._map) {
				layer.on('add remove', this._onLayerChange, this);
			}

			this._layers.push({
				layer: layer,
				name: name,
				overlay: overlay
			});

			if (this.options.sortLayers) {
				this._layers.sort(L.bind(function (a, b) {
					return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
				}, this));
			}

			if (this.options.autoZIndex && layer.setZIndex) {
				this._lastZIndex++;
				layer.setZIndex(this._lastZIndex);
			}

			this._expandIfNotCollapsed();
		},

		_update: function () {
			if (!this._container) { return this; }

			empty(this._baseLayersList);
			empty(this._overlaysList);

			this._layerControlInputs = [];
			var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

			for (i = 0; i < this._layers.length; i++) {
				obj = this._layers[i];
				this._addItem(obj);
				overlaysPresent = overlaysPresent || obj.overlay;
				baseLayersPresent = baseLayersPresent || !obj.overlay;
				baseLayersCount += !obj.overlay ? 1 : 0;
			}

			// Hide base layers section if there's only one layer.
			if (this.options.hideSingleBase) {
				baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
				this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
			}

			this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

			return this;
		},

		_onLayerChange: function (e) {
			if (!this._handlingClick) {
				this._update();
			}

			var obj = this._getLayer(stamp(e.target));

			// @namespace Map
			// @section Layer events
			// @event baselayerchange: LayersControlEvent
			// Fired when the base layer is changed through the [layer control](#control-layers).
			// @event overlayadd: LayersControlEvent
			// Fired when an overlay is selected through the [layer control](#control-layers).
			// @event overlayremove: LayersControlEvent
			// Fired when an overlay is deselected through the [layer control](#control-layers).
			// @namespace Control.Layers
			var type = obj.overlay ?
				(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
				(e.type === 'add' ? 'baselayerchange' : null);

			if (type) {
				this._map.fire(type, obj);
			}
		},

		// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
		_createRadioElement: function (name, checked) {

			var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
					name + '"' + (checked ? ' checked="checked"' : '') + '/>';

			var radioFragment = document.createElement('div');
			radioFragment.innerHTML = radioHtml;

			return radioFragment.firstChild;
		},

		_addItem: function (obj) {
			var label = document.createElement('label'),
			    checked = this._map.hasLayer(obj.layer),
			    input;

			if (obj.overlay) {
				input = document.createElement('input');
				input.type = 'checkbox';
				input.className = 'leaflet-control-layers-selector';
				input.defaultChecked = checked;
			} else {
				input = this._createRadioElement('leaflet-base-layers', checked);
			}

			this._layerControlInputs.push(input);
			input.layerId = stamp(obj.layer);

			on(input, 'click', this._onInputClick, this);

			var name = document.createElement('span');
			name.innerHTML = ' ' + obj.name;

			// Helps from preventing layer control flicker when checkboxes are disabled
			// https://github.com/Leaflet/Leaflet/issues/2771
			var holder = document.createElement('div');

			label.appendChild(holder);
			holder.appendChild(input);
			holder.appendChild(name);

			var container = obj.overlay ? this._overlaysList : this._baseLayersList;
			container.appendChild(label);

			this._checkDisabledLayers();
			return label;
		},

		_onInputClick: function () {
			var inputs = this._layerControlInputs,
			    input, layer, hasLayer;
			var addedLayers = [],
			    removedLayers = [];

			this._handlingClick = true;

			for (var i = inputs.length - 1; i >= 0; i--) {
				input = inputs[i];
				layer = this._getLayer(input.layerId).layer;
				hasLayer = this._map.hasLayer(layer);

				if (input.checked && !hasLayer) {
					addedLayers.push(layer);

				} else if (!input.checked && hasLayer) {
					removedLayers.push(layer);
				}
			}

			// Bugfix issue 2318: Should remove all old layers before readding new ones
			for (i = 0; i < removedLayers.length; i++) {
				this._map.removeLayer(removedLayers[i]);
			}
			for (i = 0; i < addedLayers.length; i++) {
				this._map.addLayer(addedLayers[i]);
			}

			this._handlingClick = false;

			this._refocusOnMap();
		},

		_checkDisabledLayers: function () {
			var inputs = this._layerControlInputs,
			    input,
			    layer,
			    zoom = this._map.getZoom();

			for (var i = inputs.length - 1; i >= 0; i--) {
				input = inputs[i];
				layer = this._getLayer(input.layerId).layer;
				input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||
				                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);

			}
		},

		_expandIfNotCollapsed: function () {
			if (this._map && !this.options.collapsed) {
				this.expand();
			}
			return this;
		},

		_expand: function () {
			// Backward compatibility, remove me in 1.1.
			return this.expand();
		},

		_collapse: function () {
			// Backward compatibility, remove me in 1.1.
			return this.collapse();
		}

	});


	// @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
	// Creates an attribution control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
	var layers = function (baseLayers, overlays, options) {
		return new Layers(baseLayers, overlays, options);
	};

	/*
	 * @class Control.Zoom
	 * @aka L.Control.Zoom
	 * @inherits Control
	 *
	 * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
	 */

	var Zoom = Control.extend({
		// @section
		// @aka Control.Zoom options
		options: {
			position: 'topleft',

			// @option zoomInText: String = '+'
			// The text set on the 'zoom in' button.
			zoomInText: '+',

			// @option zoomInTitle: String = 'Zoom in'
			// The title set on the 'zoom in' button.
			zoomInTitle: 'Zoom in',

			// @option zoomOutText: String = '&#x2212;'
			// The text set on the 'zoom out' button.
			zoomOutText: '&#x2212;',

			// @option zoomOutTitle: String = 'Zoom out'
			// The title set on the 'zoom out' button.
			zoomOutTitle: 'Zoom out'
		},

		onAdd: function (map) {
			var zoomName = 'leaflet-control-zoom',
			    container = create$1('div', zoomName + ' leaflet-bar'),
			    options = this.options;

			this._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,
			        zoomName + '-in',  container, this._zoomIn);
			this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
			        zoomName + '-out', container, this._zoomOut);

			this._updateDisabled();
			map.on('zoomend zoomlevelschange', this._updateDisabled, this);

			return container;
		},

		onRemove: function (map) {
			map.off('zoomend zoomlevelschange', this._updateDisabled, this);
		},

		disable: function () {
			this._disabled = true;
			this._updateDisabled();
			return this;
		},

		enable: function () {
			this._disabled = false;
			this._updateDisabled();
			return this;
		},

		_zoomIn: function (e) {
			if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
				this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
			}
		},

		_zoomOut: function (e) {
			if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
				this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
			}
		},

		_createButton: function (html, title, className, container, fn) {
			var link = create$1('a', className, container);
			link.innerHTML = html;
			link.href = '#';
			link.title = title;

			/*
			 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
			 */
			link.setAttribute('role', 'button');
			link.setAttribute('aria-label', title);

			disableClickPropagation(link);
			on(link, 'click', stop);
			on(link, 'click', fn, this);
			on(link, 'click', this._refocusOnMap, this);

			return link;
		},

		_updateDisabled: function () {
			var map = this._map,
			    className = 'leaflet-disabled';

			removeClass(this._zoomInButton, className);
			removeClass(this._zoomOutButton, className);

			if (this._disabled || map._zoom === map.getMinZoom()) {
				addClass(this._zoomOutButton, className);
			}
			if (this._disabled || map._zoom === map.getMaxZoom()) {
				addClass(this._zoomInButton, className);
			}
		}
	});

	// @namespace Map
	// @section Control options
	// @option zoomControl: Boolean = true
	// Whether a [zoom control](#control-zoom) is added to the map by default.
	Map.mergeOptions({
		zoomControl: true
	});

	Map.addInitHook(function () {
		if (this.options.zoomControl) {
			this.zoomControl = new Zoom();
			this.addControl(this.zoomControl);
		}
	});

	// @namespace Control.Zoom
	// @factory L.control.zoom(options: Control.Zoom options)
	// Creates a zoom control
	var zoom = function (options) {
		return new Zoom(options);
	};

	/*
	 * @class Control.Scale
	 * @aka L.Control.Scale
	 * @inherits Control
	 *
	 * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
	 *
	 * @example
	 *
	 * ```js
	 * L.control.scale().addTo(map);
	 * ```
	 */

	var Scale = Control.extend({
		// @section
		// @aka Control.Scale options
		options: {
			position: 'bottomleft',

			// @option maxWidth: Number = 100
			// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
			maxWidth: 100,

			// @option metric: Boolean = True
			// Whether to show the metric scale line (m/km).
			metric: true,

			// @option imperial: Boolean = True
			// Whether to show the imperial scale line (mi/ft).
			imperial: true

			// @option updateWhenIdle: Boolean = false
			// If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
		},

		onAdd: function (map) {
			var className = 'leaflet-control-scale',
			    container = create$1('div', className),
			    options = this.options;

			this._addScales(options, className + '-line', container);

			map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
			map.whenReady(this._update, this);

			return container;
		},

		onRemove: function (map) {
			map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		},

		_addScales: function (options, className, container) {
			if (options.metric) {
				this._mScale = create$1('div', className, container);
			}
			if (options.imperial) {
				this._iScale = create$1('div', className, container);
			}
		},

		_update: function () {
			var map = this._map,
			    y = map.getSize().y / 2;

			var maxMeters = map.distance(
					map.containerPointToLatLng([0, y]),
					map.containerPointToLatLng([this.options.maxWidth, y]));

			this._updateScales(maxMeters);
		},

		_updateScales: function (maxMeters) {
			if (this.options.metric && maxMeters) {
				this._updateMetric(maxMeters);
			}
			if (this.options.imperial && maxMeters) {
				this._updateImperial(maxMeters);
			}
		},

		_updateMetric: function (maxMeters) {
			var meters = this._getRoundNum(maxMeters),
			    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

			this._updateScale(this._mScale, label, meters / maxMeters);
		},

		_updateImperial: function (maxMeters) {
			var maxFeet = maxMeters * 3.2808399,
			    maxMiles, miles, feet;

			if (maxFeet > 5280) {
				maxMiles = maxFeet / 5280;
				miles = this._getRoundNum(maxMiles);
				this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

			} else {
				feet = this._getRoundNum(maxFeet);
				this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
			}
		},

		_updateScale: function (scale, text, ratio) {
			scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
			scale.innerHTML = text;
		},

		_getRoundNum: function (num) {
			var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
			    d = num / pow10;

			d = d >= 10 ? 10 :
			    d >= 5 ? 5 :
			    d >= 3 ? 3 :
			    d >= 2 ? 2 : 1;

			return pow10 * d;
		}
	});


	// @factory L.control.scale(options?: Control.Scale options)
	// Creates an scale control with the given options.
	var scale = function (options) {
		return new Scale(options);
	};

	/*
	 * @class Control.Attribution
	 * @aka L.Control.Attribution
	 * @inherits Control
	 *
	 * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
	 */

	var Attribution = Control.extend({
		// @section
		// @aka Control.Attribution options
		options: {
			position: 'bottomright',

			// @option prefix: String = 'Leaflet'
			// The HTML text shown before the attributions. Pass `false` to disable.
			prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
		},

		initialize: function (options) {
			setOptions(this, options);

			this._attributions = {};
		},

		onAdd: function (map) {
			map.attributionControl = this;
			this._container = create$1('div', 'leaflet-control-attribution');
			disableClickPropagation(this._container);

			// TODO ugly, refactor
			for (var i in map._layers) {
				if (map._layers[i].getAttribution) {
					this.addAttribution(map._layers[i].getAttribution());
				}
			}

			this._update();

			return this._container;
		},

		// @method setPrefix(prefix: String): this
		// Sets the text before the attributions.
		setPrefix: function (prefix) {
			this.options.prefix = prefix;
			this._update();
			return this;
		},

		// @method addAttribution(text: String): this
		// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
		addAttribution: function (text) {
			if (!text) { return this; }

			if (!this._attributions[text]) {
				this._attributions[text] = 0;
			}
			this._attributions[text]++;

			this._update();

			return this;
		},

		// @method removeAttribution(text: String): this
		// Removes an attribution text.
		removeAttribution: function (text) {
			if (!text) { return this; }

			if (this._attributions[text]) {
				this._attributions[text]--;
				this._update();
			}

			return this;
		},

		_update: function () {
			if (!this._map) { return; }

			var attribs = [];

			for (var i in this._attributions) {
				if (this._attributions[i]) {
					attribs.push(i);
				}
			}

			var prefixAndAttribs = [];

			if (this.options.prefix) {
				prefixAndAttribs.push(this.options.prefix);
			}
			if (attribs.length) {
				prefixAndAttribs.push(attribs.join(', '));
			}

			this._container.innerHTML = prefixAndAttribs.join(' | ');
		}
	});

	// @namespace Map
	// @section Control options
	// @option attributionControl: Boolean = true
	// Whether a [attribution control](#control-attribution) is added to the map by default.
	Map.mergeOptions({
		attributionControl: true
	});

	Map.addInitHook(function () {
		if (this.options.attributionControl) {
			new Attribution().addTo(this);
		}
	});

	// @namespace Control.Attribution
	// @factory L.control.attribution(options: Control.Attribution options)
	// Creates an attribution control.
	var attribution = function (options) {
		return new Attribution(options);
	};

	Control.Layers = Layers;
	Control.Zoom = Zoom;
	Control.Scale = Scale;
	Control.Attribution = Attribution;

	control.layers = layers;
	control.zoom = zoom;
	control.scale = scale;
	control.attribution = attribution;

	/*
		L.Handler is a base class for handler classes that are used internally to inject
		interaction features like dragging to classes like Map and Marker.
	*/

	// @class Handler
	// @aka L.Handler
	// Abstract class for map interaction handlers

	var Handler = Class.extend({
		initialize: function (map) {
			this._map = map;
		},

		// @method enable(): this
		// Enables the handler
		enable: function () {
			if (this._enabled) { return this; }

			this._enabled = true;
			this.addHooks();
			return this;
		},

		// @method disable(): this
		// Disables the handler
		disable: function () {
			if (!this._enabled) { return this; }

			this._enabled = false;
			this.removeHooks();
			return this;
		},

		// @method enabled(): Boolean
		// Returns `true` if the handler is enabled
		enabled: function () {
			return !!this._enabled;
		}

		// @section Extension methods
		// Classes inheriting from `Handler` must implement the two following methods:
		// @method addHooks()
		// Called when the handler is enabled, should add event hooks.
		// @method removeHooks()
		// Called when the handler is disabled, should remove the event hooks added previously.
	});

	var Mixin = {Events: Events};

	/*
	 * @class Draggable
	 * @aka L.Draggable
	 * @inherits Evented
	 *
	 * A class for making DOM elements draggable (including touch support).
	 * Used internally for map and marker dragging. Only works for elements
	 * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
	 *
	 * @example
	 * ```js
	 * var draggable = new L.Draggable(elementToDrag);
	 * draggable.enable();
	 * ```
	 */

	var _dragging = false;
	var START = touch ? 'touchstart mousedown' : 'mousedown';
	var END = {
		mousedown: 'mouseup',
		touchstart: 'touchend',
		pointerdown: 'touchend',
		MSPointerDown: 'touchend'
	};
	var MOVE = {
		mousedown: 'mousemove',
		touchstart: 'touchmove',
		pointerdown: 'touchmove',
		MSPointerDown: 'touchmove'
	};


	var Draggable = Evented.extend({

		options: {
			// @section
			// @aka Draggable options
			// @option clickTolerance: Number = 3
			// The max number of pixels a user can shift the mouse pointer during a click
			// for it to be considered a valid click (as opposed to a mouse drag).
			clickTolerance: 3
		},

		// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
		// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
		initialize: function (element, dragStartTarget, preventOutline$$1, options) {
			setOptions(this, options);

			this._element = element;
			this._dragStartTarget = dragStartTarget || element;
			this._preventOutline = preventOutline$$1;
		},

		// @method enable()
		// Enables the dragging ability
		enable: function () {
			if (this._enabled) { return; }

			on(this._dragStartTarget, START, this._onDown, this);

			this._enabled = true;
		},

		// @method disable()
		// Disables the dragging ability
		disable: function () {
			if (!this._enabled) { return; }

			// If we're currently dragging this draggable,
			// disabling it counts as first ending the drag.
			if (L.Draggable._dragging === this) {
				this.finishDrag();
			}

			off(this._dragStartTarget, START, this._onDown, this);

			this._enabled = false;
			this._moved = false;
		},

		_onDown: function (e) {
			// Ignore simulated events, since we handle both touch and
			// mouse explicitly; otherwise we risk getting duplicates of
			// touch events, see #4315.
			// Also ignore the event if disabled; this happens in IE11
			// under some circumstances, see #3666.
			if (e._simulated || !this._enabled) { return; }

			this._moved = false;

			if (hasClass(this._element, 'leaflet-zoom-anim')) { return; }

			if (_dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }
			_dragging = this;  // Prevent dragging multiple objects at once.

			if (this._preventOutline) {
				preventOutline(this._element);
			}

			disableImageDrag();
			disableTextSelection();

			if (this._moving) { return; }

			// @event down: Event
			// Fired when a drag is about to start.
			this.fire('down');

			var first = e.touches ? e.touches[0] : e;

			this._startPoint = new Point(first.clientX, first.clientY);

			on(document, MOVE[e.type], this._onMove, this);
			on(document, END[e.type], this._onUp, this);
		},

		_onMove: function (e) {
			// Ignore simulated events, since we handle both touch and
			// mouse explicitly; otherwise we risk getting duplicates of
			// touch events, see #4315.
			// Also ignore the event if disabled; this happens in IE11
			// under some circumstances, see #3666.
			if (e._simulated || !this._enabled) { return; }

			if (e.touches && e.touches.length > 1) {
				this._moved = true;
				return;
			}

			var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
			    newPoint = new Point(first.clientX, first.clientY),
			    offset = newPoint.subtract(this._startPoint);

			if (!offset.x && !offset.y) { return; }
			if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }

			preventDefault(e);

			if (!this._moved) {
				// @event dragstart: Event
				// Fired when a drag starts
				this.fire('dragstart');

				this._moved = true;
				this._startPos = getPosition(this._element).subtract(offset);

				addClass(document.body, 'leaflet-dragging');

				this._lastTarget = e.target || e.srcElement;
				// IE and Edge do not give the <use> element, so fetch it
				// if necessary
				if ((window.SVGElementInstance) && (this._lastTarget instanceof SVGElementInstance)) {
					this._lastTarget = this._lastTarget.correspondingUseElement;
				}
				addClass(this._lastTarget, 'leaflet-drag-target');
			}

			this._newPos = this._startPos.add(offset);
			this._moving = true;

			cancelAnimFrame(this._animRequest);
			this._lastEvent = e;
			this._animRequest = requestAnimFrame(this._updatePosition, this, true);
		},

		_updatePosition: function () {
			var e = {originalEvent: this._lastEvent};

			// @event predrag: Event
			// Fired continuously during dragging *before* each corresponding
			// update of the element's position.
			this.fire('predrag', e);
			setPosition(this._element, this._newPos);

			// @event drag: Event
			// Fired continuously during dragging.
			this.fire('drag', e);
		},

		_onUp: function (e) {
			// Ignore simulated events, since we handle both touch and
			// mouse explicitly; otherwise we risk getting duplicates of
			// touch events, see #4315.
			// Also ignore the event if disabled; this happens in IE11
			// under some circumstances, see #3666.
			if (e._simulated || !this._enabled) { return; }
			this.finishDrag();
		},

		finishDrag: function () {
			removeClass(document.body, 'leaflet-dragging');

			if (this._lastTarget) {
				removeClass(this._lastTarget, 'leaflet-drag-target');
				this._lastTarget = null;
			}

			for (var i in MOVE) {
				off(document, MOVE[i], this._onMove, this);
				off(document, END[i], this._onUp, this);
			}

			enableImageDrag();
			enableTextSelection();

			if (this._moved && this._moving) {
				// ensure drag is not fired after dragend
				cancelAnimFrame(this._animRequest);

				// @event dragend: DragEndEvent
				// Fired when the drag ends.
				this.fire('dragend', {
					distance: this._newPos.distanceTo(this._startPos)
				});
			}

			this._moving = false;
			_dragging = false;
		}

	});

	/*
	 * @namespace LineUtil
	 *
	 * Various utility functions for polyine points processing, used by Leaflet internally to make polylines lightning-fast.
	 */

	// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
	// Improves rendering performance dramatically by lessening the number of points to draw.

	// @function simplify(points: Point[], tolerance: Number): Point[]
	// Dramatically reduces the number of points in a polyline while retaining
	// its shape and returns a new array of simplified points, using the
	// [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
	// Used for a huge performance boost when processing/displaying Leaflet polylines for
	// each zoom level and also reducing visual noise. tolerance affects the amount of
	// simplification (lesser value means higher quality but slower and with more points).
	// Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
	function simplify(points, tolerance) {
		if (!tolerance || !points.length) {
			return points.slice();
		}

		var sqTolerance = tolerance * tolerance;

		    // stage 1: vertex reduction
		    points = _reducePoints(points, sqTolerance);

		    // stage 2: Douglas-Peucker simplification
		    points = _simplifyDP(points, sqTolerance);

		return points;
	}

	// @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
	// Returns the distance between point `p` and segment `p1` to `p2`.
	function pointToSegmentDistance(p, p1, p2) {
		return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
	}

	// @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
	// Returns the closest point from a point `p` on a segment `p1` to `p2`.
	function closestPointOnSegment(p, p1, p2) {
		return _sqClosestPointOnSegment(p, p1, p2);
	}

	// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
	function _simplifyDP(points, sqTolerance) {

		var len = points.length,
		    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
		    markers = new ArrayConstructor(len);

		    markers[0] = markers[len - 1] = 1;

		_simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

		var i,
		    newPoints = [];

		for (i = 0; i < len; i++) {
			if (markers[i]) {
				newPoints.push(points[i]);
			}
		}

		return newPoints;
	}

	function _simplifyDPStep(points, markers, sqTolerance, first, last) {

		var maxSqDist = 0,
		index, i, sqDist;

		for (i = first + 1; i <= last - 1; i++) {
			sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

			if (sqDist > maxSqDist) {
				index = i;
				maxSqDist = sqDist;
			}
		}

		if (maxSqDist > sqTolerance) {
			markers[index] = 1;

			_simplifyDPStep(points, markers, sqTolerance, first, index);
			_simplifyDPStep(points, markers, sqTolerance, index, last);
		}
	}

	// reduce points that are too close to each other to a single point
	function _reducePoints(points, sqTolerance) {
		var reducedPoints = [points[0]];

		for (var i = 1, prev = 0, len = points.length; i < len; i++) {
			if (_sqDist(points[i], points[prev]) > sqTolerance) {
				reducedPoints.push(points[i]);
				prev = i;
			}
		}
		if (prev < len - 1) {
			reducedPoints.push(points[len - 1]);
		}
		return reducedPoints;
	}

	var _lastCode;

	// @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
	// Clips the segment a to b by rectangular bounds with the
	// [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
	// (modifying the segment points directly!). Used by Leaflet to only show polyline
	// points that are on the screen or near, increasing performance.
	function clipSegment(a, b, bounds, useLastCode, round) {
		var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
		    codeB = _getBitCode(b, bounds),

		    codeOut, p, newCode;

		    // save 2nd code to avoid calculating it on the next segment
		    _lastCode = codeB;

		while (true) {
			// if a,b is inside the clip window (trivial accept)
			if (!(codeA | codeB)) {
				return [a, b];
			}

			// if a,b is outside the clip window (trivial reject)
			if (codeA & codeB) {
				return false;
			}

			// other cases
			codeOut = codeA || codeB;
			p = _getEdgeIntersection(a, b, codeOut, bounds, round);
			newCode = _getBitCode(p, bounds);

			if (codeOut === codeA) {
				a = p;
				codeA = newCode;
			} else {
				b = p;
				codeB = newCode;
			}
		}
	}

	function _getEdgeIntersection(a, b, code, bounds, round) {
		var dx = b.x - a.x,
		    dy = b.y - a.y,
		    min = bounds.min,
		    max = bounds.max,
		    x, y;

		if (code & 8) { // top
			x = a.x + dx * (max.y - a.y) / dy;
			y = max.y;

		} else if (code & 4) { // bottom
			x = a.x + dx * (min.y - a.y) / dy;
			y = min.y;

		} else if (code & 2) { // right
			x = max.x;
			y = a.y + dy * (max.x - a.x) / dx;

		} else if (code & 1) { // left
			x = min.x;
			y = a.y + dy * (min.x - a.x) / dx;
		}

		return new Point(x, y, round);
	}

	function _getBitCode(p, bounds) {
		var code = 0;

		if (p.x < bounds.min.x) { // left
			code |= 1;
		} else if (p.x > bounds.max.x) { // right
			code |= 2;
		}

		if (p.y < bounds.min.y) { // bottom
			code |= 4;
		} else if (p.y > bounds.max.y) { // top
			code |= 8;
		}

		return code;
	}

	// square distance (to avoid unnecessary Math.sqrt calls)
	function _sqDist(p1, p2) {
		var dx = p2.x - p1.x,
		    dy = p2.y - p1.y;
		return dx * dx + dy * dy;
	}

	// return closest point on segment or distance to that point
	function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
		var x = p1.x,
		    y = p1.y,
		    dx = p2.x - x,
		    dy = p2.y - y,
		    dot = dx * dx + dy * dy,
		    t;

		if (dot > 0) {
			t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

			if (t > 1) {
				x = p2.x;
				y = p2.y;
			} else if (t > 0) {
				x += dx * t;
				y += dy * t;
			}
		}

		dx = p.x - x;
		dy = p.y - y;

		return sqDist ? dx * dx + dy * dy : new Point(x, y);
	}


	function _flat(latlngs) {
		// true if it's a flat array of latlngs; false if nested
		return !isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
	}


	var LineUtil = (Object.freeze || Object)({
		simplify: simplify,
		pointToSegmentDistance: pointToSegmentDistance,
		closestPointOnSegment: closestPointOnSegment,
		clipSegment: clipSegment,
		_getEdgeIntersection: _getEdgeIntersection,
		_getBitCode: _getBitCode,
		_sqClosestPointOnSegment: _sqClosestPointOnSegment,
		_flat: _flat
	});

	/*
	 * @namespace PolyUtil
	 * Various utility functions for polygon geometries.
	 */

	/* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
	 * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgeman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
	 * Used by Leaflet to only show polygon points that are on the screen or near, increasing
	 * performance. Note that polygon points needs different algorithm for clipping
	 * than polyline, so there's a seperate method for it.
	 */
	function clipPolygon(points, bounds, round) {
		var clippedPoints,
		    edges = [1, 4, 2, 8],
		    i, j, k,
		    a, b,
		    len, edge, p;

		for (i = 0, len = points.length; i < len; i++) {
			points[i]._code = _getBitCode(points[i], bounds);
		}

		// for each edge (left, bottom, right, top)
		for (k = 0; k < 4; k++) {
			edge = edges[k];
			clippedPoints = [];

			for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
				a = points[i];
				b = points[j];

				// if a is inside the clip window
				if (!(a._code & edge)) {
					// if b is outside the clip window (a->b goes out of screen)
					if (b._code & edge) {
						p = _getEdgeIntersection(b, a, edge, bounds, round);
						p._code = _getBitCode(p, bounds);
						clippedPoints.push(p);
					}
					clippedPoints.push(a);

				// else if b is inside the clip window (a->b enters the screen)
				} else if (!(b._code & edge)) {
					p = _getEdgeIntersection(b, a, edge, bounds, round);
					p._code = _getBitCode(p, bounds);
					clippedPoints.push(p);
				}
			}
			points = clippedPoints;
		}

		return points;
	}


	var PolyUtil = (Object.freeze || Object)({
		clipPolygon: clipPolygon
	});

	/*
	 * @namespace Projection
	 * @section
	 * Leaflet comes with a set of already defined Projections out of the box:
	 *
	 * @projection L.Projection.LonLat
	 *
	 * Equirectangular, or Plate Carree projection — the most simple projection,
	 * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
	 * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
	 * `EPSG:4326` and `Simple` CRS.
	 */

	var LonLat = {
		project: function (latlng) {
			return new Point(latlng.lng, latlng.lat);
		},

		unproject: function (point) {
			return new LatLng(point.y, point.x);
		},

		bounds: new Bounds([-180, -90], [180, 90])
	};

	/*
	 * @namespace Projection
	 * @projection L.Projection.Mercator
	 *
	 * Elliptical Mercator projection — more complex than Spherical Mercator. Takes into account that Earth is a geoid, not a perfect sphere. Used by the EPSG:3395 CRS.
	 */

	var Mercator = {
		R: 6378137,
		R_MINOR: 6356752.314245179,

		bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),

		project: function (latlng) {
			var d = Math.PI / 180,
			    r = this.R,
			    y = latlng.lat * d,
			    tmp = this.R_MINOR / r,
			    e = Math.sqrt(1 - tmp * tmp),
			    con = e * Math.sin(y);

			var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
			y = -r * Math.log(Math.max(ts, 1E-10));

			return new Point(latlng.lng * d * r, y);
		},

		unproject: function (point) {
			var d = 180 / Math.PI,
			    r = this.R,
			    tmp = this.R_MINOR / r,
			    e = Math.sqrt(1 - tmp * tmp),
			    ts = Math.exp(-point.y / r),
			    phi = Math.PI / 2 - 2 * Math.atan(ts);

			for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
				con = e * Math.sin(phi);
				con = Math.pow((1 - con) / (1 + con), e / 2);
				dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
				phi += dphi;
			}

			return new LatLng(phi * d, point.x * d / r);
		}
	};

	/*
	 * @class Projection

	 * An object with methods for projecting geographical coordinates of the world onto
	 * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).

	 * @property bounds: Bounds
	 * The bounds (specified in CRS units) where the projection is valid

	 * @method project(latlng: LatLng): Point
	 * Projects geographical coordinates into a 2D point.
	 * Only accepts actual `L.LatLng` instances, not arrays.

	 * @method unproject(point: Point): LatLng
	 * The inverse of `project`. Projects a 2D point into a geographical location.
	 * Only accepts actual `L.Point` instances, not arrays.

	 */




	var index = (Object.freeze || Object)({
		LonLat: LonLat,
		Mercator: Mercator,
		SphericalMercator: SphericalMercator
	});

	/*
	 * @namespace CRS
	 * @crs L.CRS.EPSG3395
	 *
	 * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
	 */
	var EPSG3395 = extend({}, Earth, {
		code: 'EPSG:3395',
		projection: Mercator,

		transformation: (function () {
			var scale = 0.5 / (Math.PI * Mercator.R);
			return toTransformation(scale, 0.5, -scale, 0.5);
		}())
	});

	/*
	 * @namespace CRS
	 * @crs L.CRS.EPSG4326
	 *
	 * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
	 *
	 * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
	 * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
	 * with this CRS, ensure that there are two 256x256 pixel tiles covering the
	 * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
	 * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
	 */

	var EPSG4326 = extend({}, Earth, {
		code: 'EPSG:4326',
		projection: LonLat,
		transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
	});

	/*
	 * @namespace CRS
	 * @crs L.CRS.Simple
	 *
	 * A simple CRS that maps longitude and latitude into `x` and `y` directly.
	 * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
	 * axis should still be inverted (going from bottom to top). `distance()` returns
	 * simple euclidean distance.
	 */

	var Simple = extend({}, CRS, {
		projection: LonLat,
		transformation: toTransformation(1, 0, -1, 0),

		scale: function (zoom) {
			return Math.pow(2, zoom);
		},

		zoom: function (scale) {
			return Math.log(scale) / Math.LN2;
		},

		distance: function (latlng1, latlng2) {
			var dx = latlng2.lng - latlng1.lng,
			    dy = latlng2.lat - latlng1.lat;

			return Math.sqrt(dx * dx + dy * dy);
		},

		infinite: true
	});

	CRS.Earth = Earth;
	CRS.EPSG3395 = EPSG3395;
	CRS.EPSG3857 = EPSG3857;
	CRS.EPSG900913 = EPSG900913;
	CRS.EPSG4326 = EPSG4326;
	CRS.Simple = Simple;

	/*
	 * @class Layer
	 * @inherits Evented
	 * @aka L.Layer
	 * @aka ILayer
	 *
	 * A set of methods from the Layer base class that all Leaflet layers use.
	 * Inherits all methods, options and events from `L.Evented`.
	 *
	 * @example
	 *
	 * ```js
	 * var layer = L.Marker(latlng).addTo(map);
	 * layer.addTo(map);
	 * layer.remove();
	 * ```
	 *
	 * @event add: Event
	 * Fired after the layer is added to a map
	 *
	 * @event remove: Event
	 * Fired after the layer is removed from a map
	 */


	var Layer = Evented.extend({

		// Classes extending `L.Layer` will inherit the following options:
		options: {
			// @option pane: String = 'overlayPane'
			// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
			pane: 'overlayPane',

			// @option attribution: String = null
			// String to be shown in the attribution control, describes the layer data, e.g. "© Mapbox".
			attribution: null,

			bubblingMouseEvents: true
		},

		/* @section
		 * Classes extending `L.Layer` will inherit the following methods:
		 *
		 * @method addTo(map: Map): this
		 * Adds the layer to the given map
		 */
		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		// @method remove: this
		// Removes the layer from the map it is currently active on.
		remove: function () {
			return this.removeFrom(this._map || this._mapToAdd);
		},

		// @method removeFrom(map: Map): this
		// Removes the layer from the given map
		removeFrom: function (obj) {
			if (obj) {
				obj.removeLayer(this);
			}
			return this;
		},

		// @method getPane(name? : String): HTMLElement
		// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
		getPane: function (name) {
			return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
		},

		addInteractiveTarget: function (targetEl) {
			this._map._targets[stamp(targetEl)] = this;
			return this;
		},

		removeInteractiveTarget: function (targetEl) {
			delete this._map._targets[stamp(targetEl)];
			return this;
		},

		// @method getAttribution: String
		// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
		getAttribution: function () {
			return this.options.attribution;
		},

		_layerAdd: function (e) {
			var map = e.target;

			// check in case layer gets added and then removed before the map is ready
			if (!map.hasLayer(this)) { return; }

			this._map = map;
			this._zoomAnimated = map._zoomAnimated;

			if (this.getEvents) {
				var events = this.getEvents();
				map.on(events, this);
				this.once('remove', function () {
					map.off(events, this);
				}, this);
			}

			this.onAdd(map);

			if (this.getAttribution && map.attributionControl) {
				map.attributionControl.addAttribution(this.getAttribution());
			}

			this.fire('add');
			map.fire('layeradd', {layer: this});
		}
	});

	/* @section Extension methods
	 * @uninheritable
	 *
	 * Every layer should extend from `L.Layer` and (re-)implement the following methods.
	 *
	 * @method onAdd(map: Map): this
	 * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
	 *
	 * @method onRemove(map: Map): this
	 * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
	 *
	 * @method getEvents(): Object
	 * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
	 *
	 * @method getAttribution(): String
	 * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
	 *
	 * @method beforeAdd(map: Map): this
	 * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
	 */


	/* @namespace Map
	 * @section Layer events
	 *
	 * @event layeradd: LayerEvent
	 * Fired when a new layer is added to the map.
	 *
	 * @event layerremove: LayerEvent
	 * Fired when some layer is removed from the map
	 *
	 * @section Methods for Layers and Controls
	 */
	Map.include({
		// @method addLayer(layer: Layer): this
		// Adds the given layer to the map
		addLayer: function (layer) {
			var id = stamp(layer);
			if (this._layers[id]) { return this; }
			this._layers[id] = layer;

			layer._mapToAdd = this;

			if (layer.beforeAdd) {
				layer.beforeAdd(this);
			}

			this.whenReady(layer._layerAdd, layer);

			return this;
		},

		// @method removeLayer(layer: Layer): this
		// Removes the given layer from the map.
		removeLayer: function (layer) {
			var id = stamp(layer);

			if (!this._layers[id]) { return this; }

			if (this._loaded) {
				layer.onRemove(this);
			}

			if (layer.getAttribution && this.attributionControl) {
				this.attributionControl.removeAttribution(layer.getAttribution());
			}

			delete this._layers[id];

			if (this._loaded) {
				this.fire('layerremove', {layer: layer});
				layer.fire('remove');
			}

			layer._map = layer._mapToAdd = null;

			return this;
		},

		// @method hasLayer(layer: Layer): Boolean
		// Returns `true` if the given layer is currently added to the map
		hasLayer: function (layer) {
			return !!layer && (stamp(layer) in this._layers);
		},

		/* @method eachLayer(fn: Function, context?: Object): this
		 * Iterates over the layers of the map, optionally specifying context of the iterator function.
		 * ```
		 * map.eachLayer(function(layer){
		 *     layer.bindPopup('Hello');
		 * });
		 * ```
		 */
		eachLayer: function (method, context) {
			for (var i in this._layers) {
				method.call(context, this._layers[i]);
			}
			return this;
		},

		_addLayers: function (layers) {
			layers = layers ? (isArray(layers) ? layers : [layers]) : [];

			for (var i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		},

		_addZoomLimit: function (layer) {
			if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
				this._zoomBoundLayers[stamp(layer)] = layer;
				this._updateZoomLevels();
			}
		},

		_removeZoomLimit: function (layer) {
			var id = stamp(layer);

			if (this._zoomBoundLayers[id]) {
				delete this._zoomBoundLayers[id];
				this._updateZoomLevels();
			}
		},

		_updateZoomLevels: function () {
			var minZoom = Infinity,
			    maxZoom = -Infinity,
			    oldZoomSpan = this._getZoomSpan();

			for (var i in this._zoomBoundLayers) {
				var options = this._zoomBoundLayers[i].options;

				minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
				maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
			}

			this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
			this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

			// @section Map state change events
			// @event zoomlevelschange: Event
			// Fired when the number of zoomlevels on the map is changed due
			// to adding or removing a layer.
			if (oldZoomSpan !== this._getZoomSpan()) {
				this.fire('zoomlevelschange');
			}

			if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
				this.setZoom(this._layersMaxZoom);
			}
			if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
				this.setZoom(this._layersMinZoom);
			}
		}
	});

	/*
	 * @class LayerGroup
	 * @aka L.LayerGroup
	 * @inherits Layer
	 *
	 * Used to group several layers and handle them as one. If you add it to the map,
	 * any layers added or removed from the group will be added/removed on the map as
	 * well. Extends `Layer`.
	 *
	 * @example
	 *
	 * ```js
	 * L.layerGroup([marker1, marker2])
	 * 	.addLayer(polyline)
	 * 	.addTo(map);
	 * ```
	 */

	var LayerGroup = Layer.extend({

		initialize: function (layers) {
			this._layers = {};

			var i, len;

			if (layers) {
				for (i = 0, len = layers.length; i < len; i++) {
					this.addLayer(layers[i]);
				}
			}
		},

		// @method addLayer(layer: Layer): this
		// Adds the given layer to the group.
		addLayer: function (layer) {
			var id = this.getLayerId(layer);

			this._layers[id] = layer;

			if (this._map) {
				this._map.addLayer(layer);
			}

			return this;
		},

		// @method removeLayer(layer: Layer): this
		// Removes the given layer from the group.
		// @alternative
		// @method removeLayer(id: Number): this
		// Removes the layer with the given internal ID from the group.
		removeLayer: function (layer) {
			var id = layer in this._layers ? layer : this.getLayerId(layer);

			if (this._map && this._layers[id]) {
				this._map.removeLayer(this._layers[id]);
			}

			delete this._layers[id];

			return this;
		},

		// @method hasLayer(layer: Layer): Boolean
		// Returns `true` if the given layer is currently added to the group.
		// @alternative
		// @method hasLayer(id: Number): Boolean
		// Returns `true` if the given internal ID is currently added to the group.
		hasLayer: function (layer) {
			return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
		},

		// @method clearLayers(): this
		// Removes all the layers from the group.
		clearLayers: function () {
			for (var i in this._layers) {
				this.removeLayer(this._layers[i]);
			}
			return this;
		},

		// @method invoke(methodName: String, …): this
		// Calls `methodName` on every layer contained in this group, passing any
		// additional parameters. Has no effect if the layers contained do not
		// implement `methodName`.
		invoke: function (methodName) {
			var args = Array.prototype.slice.call(arguments, 1),
			    i, layer;

			for (i in this._layers) {
				layer = this._layers[i];

				if (layer[methodName]) {
					layer[methodName].apply(layer, args);
				}
			}

			return this;
		},

		onAdd: function (map) {
			for (var i in this._layers) {
				map.addLayer(this._layers[i]);
			}
		},

		onRemove: function (map) {
			for (var i in this._layers) {
				map.removeLayer(this._layers[i]);
			}
		},

		// @method eachLayer(fn: Function, context?: Object): this
		// Iterates over the layers of the group, optionally specifying context of the iterator function.
		// ```js
		// group.eachLayer(function (layer) {
		// 	layer.bindPopup('Hello');
		// });
		// ```
		eachLayer: function (method, context) {
			for (var i in this._layers) {
				method.call(context, this._layers[i]);
			}
			return this;
		},

		// @method getLayer(id: Number): Layer
		// Returns the layer with the given internal ID.
		getLayer: function (id) {
			return this._layers[id];
		},

		// @method getLayers(): Layer[]
		// Returns an array of all the layers added to the group.
		getLayers: function () {
			var layers = [];

			for (var i in this._layers) {
				layers.push(this._layers[i]);
			}
			return layers;
		},

		// @method setZIndex(zIndex: Number): this
		// Calls `setZIndex` on every layer contained in this group, passing the z-index.
		setZIndex: function (zIndex) {
			return this.invoke('setZIndex', zIndex);
		},

		// @method getLayerId(layer: Layer): Number
		// Returns the internal ID for a layer
		getLayerId: function (layer) {
			return stamp(layer);
		}
	});


	// @factory L.layerGroup(layers: Layer[])
	// Create a layer group, optionally given an initial set of layers.
	var layerGroup = function (layers) {
		return new LayerGroup(layers);
	};

	/*
	 * @class FeatureGroup
	 * @aka L.FeatureGroup
	 * @inherits LayerGroup
	 *
	 * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
	 *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
	 *  * Events are propagated to the `FeatureGroup`, so if the group has an event
	 * handler, it will handle events from any of the layers. This includes mouse events
	 * and custom events.
	 *  * Has `layeradd` and `layerremove` events
	 *
	 * @example
	 *
	 * ```js
	 * L.featureGroup([marker1, marker2, polyline])
	 * 	.bindPopup('Hello world!')
	 * 	.on('click', function() { alert('Clicked on a member of the group!'); })
	 * 	.addTo(map);
	 * ```
	 */

	var FeatureGroup = LayerGroup.extend({

		addLayer: function (layer) {
			if (this.hasLayer(layer)) {
				return this;
			}

			layer.addEventParent(this);

			LayerGroup.prototype.addLayer.call(this, layer);

			// @event layeradd: LayerEvent
			// Fired when a layer is added to this `FeatureGroup`
			return this.fire('layeradd', {layer: layer});
		},

		removeLayer: function (layer) {
			if (!this.hasLayer(layer)) {
				return this;
			}
			if (layer in this._layers) {
				layer = this._layers[layer];
			}

			layer.removeEventParent(this);

			LayerGroup.prototype.removeLayer.call(this, layer);

			// @event layerremove: LayerEvent
			// Fired when a layer is removed from this `FeatureGroup`
			return this.fire('layerremove', {layer: layer});
		},

		// @method setStyle(style: Path options): this
		// Sets the given path options to each layer of the group that has a `setStyle` method.
		setStyle: function (style) {
			return this.invoke('setStyle', style);
		},

		// @method bringToFront(): this
		// Brings the layer group to the top of all other layers
		bringToFront: function () {
			return this.invoke('bringToFront');
		},

		// @method bringToBack(): this
		// Brings the layer group to the top of all other layers
		bringToBack: function () {
			return this.invoke('bringToBack');
		},

		// @method getBounds(): LatLngBounds
		// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
		getBounds: function () {
			var bounds = new LatLngBounds();

			for (var id in this._layers) {
				var layer = this._layers[id];
				bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
			}
			return bounds;
		}
	});

	// @factory L.featureGroup(layers: Layer[])
	// Create a feature group, optionally given an initial set of layers.
	var featureGroup = function (layers) {
		return new FeatureGroup(layers);
	};

	/*
	 * @class Icon
	 * @aka L.Icon
	 *
	 * Represents an icon to provide when creating a marker.
	 *
	 * @example
	 *
	 * ```js
	 * var myIcon = L.icon({
	 *     iconUrl: 'my-icon.png',
	 *     iconRetinaUrl: 'my-icon@2x.png',
	 *     iconSize: [38, 95],
	 *     iconAnchor: [22, 94],
	 *     popupAnchor: [-3, -76],
	 *     shadowUrl: 'my-icon-shadow.png',
	 *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
	 *     shadowSize: [68, 95],
	 *     shadowAnchor: [22, 94]
	 * });
	 *
	 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
	 * ```
	 *
	 * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
	 *
	 */

	var Icon = Class.extend({

		/* @section
		 * @aka Icon options
		 *
		 * @option iconUrl: String = null
		 * **(required)** The URL to the icon image (absolute or relative to your script path).
		 *
		 * @option iconRetinaUrl: String = null
		 * The URL to a retina sized version of the icon image (absolute or relative to your
		 * script path). Used for Retina screen devices.
		 *
		 * @option iconSize: Point = null
		 * Size of the icon image in pixels.
		 *
		 * @option iconAnchor: Point = null
		 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
		 * will be aligned so that this point is at the marker's geographical location. Centered
		 * by default if size is specified, also can be set in CSS with negative margins.
		 *
		 * @option popupAnchor: Point = null
		 * The coordinates of the point from which popups will "open", relative to the icon anchor.
		 *
		 * @option shadowUrl: String = null
		 * The URL to the icon shadow image. If not specified, no shadow image will be created.
		 *
		 * @option shadowRetinaUrl: String = null
		 *
		 * @option shadowSize: Point = null
		 * Size of the shadow image in pixels.
		 *
		 * @option shadowAnchor: Point = null
		 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
		 * as iconAnchor if not specified).
		 *
		 * @option className: String = ''
		 * A custom class name to assign to both icon and shadow images. Empty by default.
		 */

		initialize: function (options) {
			setOptions(this, options);
		},

		// @method createIcon(oldIcon?: HTMLElement): HTMLElement
		// Called internally when the icon has to be shown, returns a `<img>` HTML element
		// styled according to the options.
		createIcon: function (oldIcon) {
			return this._createIcon('icon', oldIcon);
		},

		// @method createShadow(oldIcon?: HTMLElement): HTMLElement
		// As `createIcon`, but for the shadow beneath it.
		createShadow: function (oldIcon) {
			return this._createIcon('shadow', oldIcon);
		},

		_createIcon: function (name, oldIcon) {
			var src = this._getIconUrl(name);

			if (!src) {
				if (name === 'icon') {
					throw new Error('iconUrl not set in Icon options (see the docs).');
				}
				return null;
			}

			var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
			this._setIconStyles(img, name);

			return img;
		},

		_setIconStyles: function (img, name) {
			var options = this.options;
			var sizeOption = options[name + 'Size'];

			if (typeof sizeOption === 'number') {
				sizeOption = [sizeOption, sizeOption];
			}

			var size = toPoint(sizeOption),
			    anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
			            size && size.divideBy(2, true));

			img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

			if (anchor) {
				img.style.marginLeft = (-anchor.x) + 'px';
				img.style.marginTop  = (-anchor.y) + 'px';
			}

			if (size) {
				img.style.width  = size.x + 'px';
				img.style.height = size.y + 'px';
			}
		},

		_createImg: function (src, el) {
			el = el || document.createElement('img');
			el.src = src;
			return el;
		},

		_getIconUrl: function (name) {
			return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
		}
	});


	// @factory L.icon(options: Icon options)
	// Creates an icon instance with the given options.
	function icon(options) {
		return new Icon(options);
	}

	/*
	 * @miniclass Icon.Default (Icon)
	 * @aka L.Icon.Default
	 * @section
	 *
	 * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
	 * no icon is specified. Points to the blue marker image distributed with Leaflet
	 * releases.
	 *
	 * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
	 * (which is a set of `Icon options`).
	 *
	 * If you want to _completely_ replace the default icon, override the
	 * `L.Marker.prototype.options.icon` with your own icon instead.
	 */

	var IconDefault = Icon.extend({

		options: {
			iconUrl:       'marker-icon.png',
			iconRetinaUrl: 'marker-icon-2x.png',
			shadowUrl:     'marker-shadow.png',
			iconSize:    [25, 41],
			iconAnchor:  [12, 41],
			popupAnchor: [1, -34],
			tooltipAnchor: [16, -28],
			shadowSize:  [41, 41]
		},

		_getIconUrl: function (name) {
			if (!IconDefault.imagePath) {	// Deprecated, backwards-compatibility only
				IconDefault.imagePath = this._detectIconPath();
			}

			// @option imagePath: String
			// `Icon.Default` will try to auto-detect the absolute location of the
			// blue icon images. If you are placing these images in a non-standard
			// way, set this option to point to the right absolute path.
			return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
		},

		_detectIconPath: function () {
			var el = create$1('div',  'leaflet-default-icon-path', document.body);
			var path = getStyle(el, 'background-image') ||
			           getStyle(el, 'backgroundImage');	// IE8

			document.body.removeChild(el);

			if (path === null || path.indexOf('url') !== 0) {
				path = '';
			} else {
				path = path.replace(/^url\([\"\']?/, '').replace(/marker-icon\.png[\"\']?\)$/, '');
			}

			return path;
		}
	});

	/*
	 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
	 */


	/* @namespace Marker
	 * @section Interaction handlers
	 *
	 * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
	 *
	 * ```js
	 * marker.dragging.disable();
	 * ```
	 *
	 * @property dragging: Handler
	 * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
	 */

	var MarkerDrag = Handler.extend({
		initialize: function (marker) {
			this._marker = marker;
		},

		addHooks: function () {
			var icon = this._marker._icon;

			if (!this._draggable) {
				this._draggable = new Draggable(icon, icon, true);
			}

			this._draggable.on({
				dragstart: this._onDragStart,
				drag: this._onDrag,
				dragend: this._onDragEnd
			}, this).enable();

			addClass(icon, 'leaflet-marker-draggable');
		},

		removeHooks: function () {
			this._draggable.off({
				dragstart: this._onDragStart,
				drag: this._onDrag,
				dragend: this._onDragEnd
			}, this).disable();

			if (this._marker._icon) {
				removeClass(this._marker._icon, 'leaflet-marker-draggable');
			}
		},

		moved: function () {
			return this._draggable && this._draggable._moved;
		},

		_onDragStart: function () {
			// @section Dragging events
			// @event dragstart: Event
			// Fired when the user starts dragging the marker.

			// @event movestart: Event
			// Fired when the marker starts moving (because of dragging).

			this._oldLatLng = this._marker.getLatLng();
			this._marker
			    .closePopup()
			    .fire('movestart')
			    .fire('dragstart');
		},

		_onDrag: function (e) {
			var marker = this._marker,
			    shadow = marker._shadow,
			iconPos = getPosition(marker._icon),
			    latlng = marker._map.layerPointToLatLng(iconPos);

			// update shadow position
			if (shadow) {
				setPosition(shadow, iconPos);
			}

			marker._latlng = latlng;
			e.latlng = latlng;
			e.oldLatLng = this._oldLatLng;

			// @event drag: Event
			// Fired repeatedly while the user drags the marker.
			marker
			    .fire('move', e)
			    .fire('drag', e);
		},

		_onDragEnd: function (e) {
			// @event dragend: DragEndEvent
			// Fired when the user stops dragging the marker.

			// @event moveend: Event
			// Fired when the marker stops moving (because of dragging).
			delete this._oldLatLng;
			this._marker
			    .fire('moveend')
			    .fire('dragend', e);
		}
	});

	/*
	 * @class Marker
	 * @inherits Interactive layer
	 * @aka L.Marker
	 * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
	 *
	 * @example
	 *
	 * ```js
	 * L.marker([50.5, 30.5]).addTo(map);
	 * ```
	 */

	var Marker = Layer.extend({

		// @section
		// @aka Marker options
		options: {
			// @option icon: Icon = *
			// Icon instance to use for rendering the marker.
			// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
			// If not specified, a common instance of `L.Icon.Default` is used.
			icon: new IconDefault(),

			// Option inherited from "Interactive layer" abstract class
			interactive: true,

			// @option draggable: Boolean = false
			// Whether the marker is draggable with mouse/touch or not.
			draggable: false,

			// @option keyboard: Boolean = true
			// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
			keyboard: true,

			// @option title: String = ''
			// Text for the browser tooltip that appear on marker hover (no tooltip by default).
			title: '',

			// @option alt: String = ''
			// Text for the `alt` attribute of the icon image (useful for accessibility).
			alt: '',

			// @option zIndexOffset: Number = 0
			// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
			zIndexOffset: 0,

			// @option opacity: Number = 1.0
			// The opacity of the marker.
			opacity: 1,

			// @option riseOnHover: Boolean = false
			// If `true`, the marker will get on top of others when you hover the mouse over it.
			riseOnHover: false,

			// @option riseOffset: Number = 250
			// The z-index offset used for the `riseOnHover` feature.
			riseOffset: 250,

			// @option pane: String = 'markerPane'
			// `Map pane` where the markers icon will be added.
			pane: 'markerPane',

			// @option bubblingMouseEvents: Boolean = false
			// When `true`, a mouse event on this marker will trigger the same event on the map
			// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
			bubblingMouseEvents: false
		},

		/* @section
		 *
		 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
		 */

		initialize: function (latlng, options) {
			setOptions(this, options);
			this._latlng = toLatLng(latlng);
		},

		onAdd: function (map) {
			this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

			if (this._zoomAnimated) {
				map.on('zoomanim', this._animateZoom, this);
			}

			this._initIcon();
			this.update();
		},

		onRemove: function (map) {
			if (this.dragging && this.dragging.enabled()) {
				this.options.draggable = true;
				this.dragging.removeHooks();
			}
			delete this.dragging;

			if (this._zoomAnimated) {
				map.off('zoomanim', this._animateZoom, this);
			}

			this._removeIcon();
			this._removeShadow();
		},

		getEvents: function () {
			return {
				zoom: this.update,
				viewreset: this.update
			};
		},

		// @method getLatLng: LatLng
		// Returns the current geographical position of the marker.
		getLatLng: function () {
			return this._latlng;
		},

		// @method setLatLng(latlng: LatLng): this
		// Changes the marker position to the given point.
		setLatLng: function (latlng) {
			var oldLatLng = this._latlng;
			this._latlng = toLatLng(latlng);
			this.update();

			// @event move: Event
			// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
			return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
		},

		// @method setZIndexOffset(offset: Number): this
		// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
		setZIndexOffset: function (offset) {
			this.options.zIndexOffset = offset;
			return this.update();
		},

		// @method setIcon(icon: Icon): this
		// Changes the marker icon.
		setIcon: function (icon) {

			this.options.icon = icon;

			if (this._map) {
				this._initIcon();
				this.update();
			}

			if (this._popup) {
				this.bindPopup(this._popup, this._popup.options);
			}

			return this;
		},

		getElement: function () {
			return this._icon;
		},

		update: function () {

			if (this._icon) {
				var pos = this._map.latLngToLayerPoint(this._latlng).round();
				this._setPos(pos);
			}

			return this;
		},

		_initIcon: function () {
			var options = this.options,
			    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

			var icon = options.icon.createIcon(this._icon),
			    addIcon = false;

			// if we're not reusing the icon, remove the old one and init new one
			if (icon !== this._icon) {
				if (this._icon) {
					this._removeIcon();
				}
				addIcon = true;

				if (options.title) {
					icon.title = options.title;
				}
				if (options.alt) {
					icon.alt = options.alt;
				}
			}

			addClass(icon, classToAdd);

			if (options.keyboard) {
				icon.tabIndex = '0';
			}

			this._icon = icon;

			if (options.riseOnHover) {
				this.on({
					mouseover: this._bringToFront,
					mouseout: this._resetZIndex
				});
			}

			var newShadow = options.icon.createShadow(this._shadow),
			    addShadow = false;

			if (newShadow !== this._shadow) {
				this._removeShadow();
				addShadow = true;
			}

			if (newShadow) {
				addClass(newShadow, classToAdd);
				newShadow.alt = '';
			}
			this._shadow = newShadow;


			if (options.opacity < 1) {
				this._updateOpacity();
			}


			if (addIcon) {
				this.getPane().appendChild(this._icon);
			}
			this._initInteraction();
			if (newShadow && addShadow) {
				this.getPane('shadowPane').appendChild(this._shadow);
			}
		},

		_removeIcon: function () {
			if (this.options.riseOnHover) {
				this.off({
					mouseover: this._bringToFront,
					mouseout: this._resetZIndex
				});
			}

			remove(this._icon);
			this.removeInteractiveTarget(this._icon);

			this._icon = null;
		},

		_removeShadow: function () {
			if (this._shadow) {
				remove(this._shadow);
			}
			this._shadow = null;
		},

		_setPos: function (pos) {
			setPosition(this._icon, pos);

			if (this._shadow) {
				setPosition(this._shadow, pos);
			}

			this._zIndex = pos.y + this.options.zIndexOffset;

			this._resetZIndex();
		},

		_updateZIndex: function (offset) {
			this._icon.style.zIndex = this._zIndex + offset;
		},

		_animateZoom: function (opt) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

			this._setPos(pos);
		},

		_initInteraction: function () {

			if (!this.options.interactive) { return; }

			addClass(this._icon, 'leaflet-interactive');

			this.addInteractiveTarget(this._icon);

			if (MarkerDrag) {
				var draggable = this.options.draggable;
				if (this.dragging) {
					draggable = this.dragging.enabled();
					this.dragging.disable();
				}

				this.dragging = new MarkerDrag(this);

				if (draggable) {
					this.dragging.enable();
				}
			}
		},

		// @method setOpacity(opacity: Number): this
		// Changes the opacity of the marker.
		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			if (this._map) {
				this._updateOpacity();
			}

			return this;
		},

		_updateOpacity: function () {
			var opacity = this.options.opacity;

			setOpacity(this._icon, opacity);

			if (this._shadow) {
				setOpacity(this._shadow, opacity);
			}
		},

		_bringToFront: function () {
			this._updateZIndex(this.options.riseOffset);
		},

		_resetZIndex: function () {
			this._updateZIndex(0);
		},

		_getPopupAnchor: function () {
			return this.options.icon.options.popupAnchor || [0, 0];
		},

		_getTooltipAnchor: function () {
			return this.options.icon.options.tooltipAnchor || [0, 0];
		}
	});


	// factory L.marker(latlng: LatLng, options? : Marker options)

	// @factory L.marker(latlng: LatLng, options? : Marker options)
	// Instantiates a Marker object given a geographical point and optionally an options object.
	function marker(latlng, options) {
		return new Marker(latlng, options);
	}

	/*
	 * @class Path
	 * @aka L.Path
	 * @inherits Interactive layer
	 *
	 * An abstract class that contains options and constants shared between vector
	 * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
	 */

	var Path = Layer.extend({

		// @section
		// @aka Path options
		options: {
			// @option stroke: Boolean = true
			// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
			stroke: true,

			// @option color: String = '#3388ff'
			// Stroke color
			color: '#3388ff',

			// @option weight: Number = 3
			// Stroke width in pixels
			weight: 3,

			// @option opacity: Number = 1.0
			// Stroke opacity
			opacity: 1,

			// @option lineCap: String= 'round'
			// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
			lineCap: 'round',

			// @option lineJoin: String = 'round'
			// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
			lineJoin: 'round',

			// @option dashArray: String = null
			// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
			dashArray: null,

			// @option dashOffset: String = null
			// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
			dashOffset: null,

			// @option fill: Boolean = depends
			// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
			fill: false,

			// @option fillColor: String = *
			// Fill color. Defaults to the value of the [`color`](#path-color) option
			fillColor: null,

			// @option fillOpacity: Number = 0.2
			// Fill opacity.
			fillOpacity: 0.2,

			// @option fillRule: String = 'evenodd'
			// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
			fillRule: 'evenodd',

			// className: '',

			// Option inherited from "Interactive layer" abstract class
			interactive: true,

			// @option bubblingMouseEvents: Boolean = true
			// When `true`, a mouse event on this path will trigger the same event on the map
			// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
			bubblingMouseEvents: true
		},

		beforeAdd: function (map) {
			// Renderer is set here because we need to call renderer.getEvents
			// before this.getEvents.
			this._renderer = map.getRenderer(this);
		},

		onAdd: function () {
			this._renderer._initPath(this);
			this._reset();
			this._renderer._addPath(this);
		},

		onRemove: function () {
			this._renderer._removePath(this);
		},

		// @method redraw(): this
		// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
		redraw: function () {
			if (this._map) {
				this._renderer._updatePath(this);
			}
			return this;
		},

		// @method setStyle(style: Path options): this
		// Changes the appearance of a Path based on the options in the `Path options` object.
		setStyle: function (style) {
			setOptions(this, style);
			if (this._renderer) {
				this._renderer._updateStyle(this);
			}
			return this;
		},

		// @method bringToFront(): this
		// Brings the layer to the top of all path layers.
		bringToFront: function () {
			if (this._renderer) {
				this._renderer._bringToFront(this);
			}
			return this;
		},

		// @method bringToBack(): this
		// Brings the layer to the bottom of all path layers.
		bringToBack: function () {
			if (this._renderer) {
				this._renderer._bringToBack(this);
			}
			return this;
		},

		getElement: function () {
			return this._path;
		},

		_reset: function () {
			// defined in child classes
			this._project();
			this._update();
		},

		_clickTolerance: function () {
			// used when doing hit detection for Canvas layers
			return (this.options.stroke ? this.options.weight / 2 : 0) + (touch ? 10 : 0);
		}
	});

	/*
	 * @class CircleMarker
	 * @aka L.CircleMarker
	 * @inherits Path
	 *
	 * A circle of a fixed size with radius specified in pixels. Extends `Path`.
	 */

	var CircleMarker = Path.extend({

		// @section
		// @aka CircleMarker options
		options: {
			fill: true,

			// @option radius: Number = 10
			// Radius of the circle marker, in pixels
			radius: 10
		},

		initialize: function (latlng, options) {
			setOptions(this, options);
			this._latlng = toLatLng(latlng);
			this._radius = this.options.radius;
		},

		// @method setLatLng(latLng: LatLng): this
		// Sets the position of a circle marker to a new location.
		setLatLng: function (latlng) {
			this._latlng = toLatLng(latlng);
			this.redraw();
			return this.fire('move', {latlng: this._latlng});
		},

		// @method getLatLng(): LatLng
		// Returns the current geographical position of the circle marker
		getLatLng: function () {
			return this._latlng;
		},

		// @method setRadius(radius: Number): this
		// Sets the radius of a circle marker. Units are in pixels.
		setRadius: function (radius) {
			this.options.radius = this._radius = radius;
			return this.redraw();
		},

		// @method getRadius(): Number
		// Returns the current radius of the circle
		getRadius: function () {
			return this._radius;
		},

		setStyle : function (options) {
			var radius = options && options.radius || this._radius;
			Path.prototype.setStyle.call(this, options);
			this.setRadius(radius);
			return this;
		},

		_project: function () {
			this._point = this._map.latLngToLayerPoint(this._latlng);
			this._updateBounds();
		},

		_updateBounds: function () {
			var r = this._radius,
			    r2 = this._radiusY || r,
			    w = this._clickTolerance(),
			    p = [r + w, r2 + w];
			this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
		},

		_update: function () {
			if (this._map) {
				this._updatePath();
			}
		},

		_updatePath: function () {
			this._renderer._updateCircle(this);
		},

		_empty: function () {
			return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
		},

		// Needed by the `Canvas` renderer for interactivity
		_containsPoint: function (p) {
			return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
		}
	});


	// @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
	// Instantiates a circle marker object given a geographical point, and an optional options object.
	function circleMarker(latlng, options) {
		return new CircleMarker(latlng, options);
	}

	/*
	 * @class Circle
	 * @aka L.Circle
	 * @inherits CircleMarker
	 *
	 * A class for drawing circle overlays on a map. Extends `CircleMarker`.
	 *
	 * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
	 *
	 * @example
	 *
	 * ```js
	 * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
	 * ```
	 */

	var Circle = CircleMarker.extend({

		initialize: function (latlng, options, legacyOptions) {
			if (typeof options === 'number') {
				// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
				options = extend({}, legacyOptions, {radius: options});
			}
			setOptions(this, options);
			this._latlng = toLatLng(latlng);

			if (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }

			// @section
			// @aka Circle options
			// @option radius: Number; Radius of the circle, in meters.
			this._mRadius = this.options.radius;
		},

		// @method setRadius(radius: Number): this
		// Sets the radius of a circle. Units are in meters.
		setRadius: function (radius) {
			this._mRadius = radius;
			return this.redraw();
		},

		// @method getRadius(): Number
		// Returns the current radius of a circle. Units are in meters.
		getRadius: function () {
			return this._mRadius;
		},

		// @method getBounds(): LatLngBounds
		// Returns the `LatLngBounds` of the path.
		getBounds: function () {
			var half = [this._radius, this._radiusY || this._radius];

			return new LatLngBounds(
				this._map.layerPointToLatLng(this._point.subtract(half)),
				this._map.layerPointToLatLng(this._point.add(half)));
		},

		setStyle: Path.prototype.setStyle,

		_project: function () {

			var lng = this._latlng.lng,
			    lat = this._latlng.lat,
			    map = this._map,
			    crs = map.options.crs;

			if (crs.distance === Earth.distance) {
				var d = Math.PI / 180,
				    latR = (this._mRadius / Earth.R) / d,
				    top = map.project([lat + latR, lng]),
				    bottom = map.project([lat - latR, lng]),
				    p = top.add(bottom).divideBy(2),
				    lat2 = map.unproject(p).lat,
				    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
				            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

				if (isNaN(lngR) || lngR === 0) {
					lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
				}

				this._point = p.subtract(map.getPixelOrigin());
				this._radius = isNaN(lngR) ? 0 : Math.max(Math.round(p.x - map.project([lat2, lng - lngR]).x), 1);
				this._radiusY = Math.max(Math.round(p.y - top.y), 1);

			} else {
				var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

				this._point = map.latLngToLayerPoint(this._latlng);
				this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
			}

			this._updateBounds();
		}
	});

	// @factory L.circle(latlng: LatLng, options?: Circle options)
	// Instantiates a circle object given a geographical point, and an options object
	// which contains the circle radius.
	// @alternative
	// @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
	// Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
	// Do not use in new applications or plugins.
	function circle(latlng, options, legacyOptions) {
		return new Circle(latlng, options, legacyOptions);
	}

	/*
	 * @class Polyline
	 * @aka L.Polyline
	 * @inherits Path
	 *
	 * A class for drawing polyline overlays on a map. Extends `Path`.
	 *
	 * @example
	 *
	 * ```js
	 * // create a red polyline from an array of LatLng points
	 * var latlngs = [
	 * 	[45.51, -122.68],
	 * 	[37.77, -122.43],
	 * 	[34.04, -118.2]
	 * ];
	 *
	 * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
	 *
	 * // zoom the map to the polyline
	 * map.fitBounds(polyline.getBounds());
	 * ```
	 *
	 * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
	 *
	 * ```js
	 * // create a red polyline from an array of arrays of LatLng points
	 * var latlngs = [
	 * 	[[45.51, -122.68],
	 * 	 [37.77, -122.43],
	 * 	 [34.04, -118.2]],
	 * 	[[40.78, -73.91],
	 * 	 [41.83, -87.62],
	 * 	 [32.76, -96.72]]
	 * ];
	 * ```
	 */


	var Polyline = Path.extend({

		// @section
		// @aka Polyline options
		options: {
			// @option smoothFactor: Number = 1.0
			// How much to simplify the polyline on each zoom level. More means
			// better performance and smoother look, and less means more accurate representation.
			smoothFactor: 1.0,

			// @option noClip: Boolean = false
			// Disable polyline clipping.
			noClip: false
		},

		initialize: function (latlngs, options) {
			setOptions(this, options);
			this._setLatLngs(latlngs);
		},

		// @method getLatLngs(): LatLng[]
		// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
		getLatLngs: function () {
			return this._latlngs;
		},

		// @method setLatLngs(latlngs: LatLng[]): this
		// Replaces all the points in the polyline with the given array of geographical points.
		setLatLngs: function (latlngs) {
			this._setLatLngs(latlngs);
			return this.redraw();
		},

		// @method isEmpty(): Boolean
		// Returns `true` if the Polyline has no LatLngs.
		isEmpty: function () {
			return !this._latlngs.length;
		},

		closestLayerPoint: function (p) {
			var minDistance = Infinity,
			    minPoint = null,
			    closest = _sqClosestPointOnSegment,
			    p1, p2;

			for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
				var points = this._parts[j];

				for (var i = 1, len = points.length; i < len; i++) {
					p1 = points[i - 1];
					p2 = points[i];

					var sqDist = closest(p, p1, p2, true);

					if (sqDist < minDistance) {
						minDistance = sqDist;
						minPoint = closest(p, p1, p2);
					}
				}
			}
			if (minPoint) {
				minPoint.distance = Math.sqrt(minDistance);
			}
			return minPoint;
		},

		// @method getCenter(): LatLng
		// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
		getCenter: function () {
			// throws error when not yet added to map as this center calculation requires projected coordinates
			if (!this._map) {
				throw new Error('Must add layer to map before using getCenter()');
			}

			var i, halfDist, segDist, dist, p1, p2, ratio,
			    points = this._rings[0],
			    len = points.length;

			if (!len) { return null; }

			// polyline centroid algorithm; only uses the first ring if there are multiple

			for (i = 0, halfDist = 0; i < len - 1; i++) {
				halfDist += points[i].distanceTo(points[i + 1]) / 2;
			}

			// The line is so small in the current view that all points are on the same pixel.
			if (halfDist === 0) {
				return this._map.layerPointToLatLng(points[0]);
			}

			for (i = 0, dist = 0; i < len - 1; i++) {
				p1 = points[i];
				p2 = points[i + 1];
				segDist = p1.distanceTo(p2);
				dist += segDist;

				if (dist > halfDist) {
					ratio = (dist - halfDist) / segDist;
					return this._map.layerPointToLatLng([
						p2.x - ratio * (p2.x - p1.x),
						p2.y - ratio * (p2.y - p1.y)
					]);
				}
			}
		},

		// @method getBounds(): LatLngBounds
		// Returns the `LatLngBounds` of the path.
		getBounds: function () {
			return this._bounds;
		},

		// @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this
		// Adds a given point to the polyline. By default, adds to the first ring of
		// the polyline in case of a multi-polyline, but can be overridden by passing
		// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
		addLatLng: function (latlng, latlngs) {
			latlngs = latlngs || this._defaultShape();
			latlng = toLatLng(latlng);
			latlngs.push(latlng);
			this._bounds.extend(latlng);
			return this.redraw();
		},

		_setLatLngs: function (latlngs) {
			this._bounds = new LatLngBounds();
			this._latlngs = this._convertLatLngs(latlngs);
		},

		_defaultShape: function () {
			return _flat(this._latlngs) ? this._latlngs : this._latlngs[0];
		},

		// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
		_convertLatLngs: function (latlngs) {
			var result = [],
			    flat = _flat(latlngs);

			for (var i = 0, len = latlngs.length; i < len; i++) {
				if (flat) {
					result[i] = toLatLng(latlngs[i]);
					this._bounds.extend(result[i]);
				} else {
					result[i] = this._convertLatLngs(latlngs[i]);
				}
			}

			return result;
		},

		_project: function () {
			var pxBounds = new Bounds();
			this._rings = [];
			this._projectLatlngs(this._latlngs, this._rings, pxBounds);

			var w = this._clickTolerance(),
			    p = new Point(w, w);

			if (this._bounds.isValid() && pxBounds.isValid()) {
				pxBounds.min._subtract(p);
				pxBounds.max._add(p);
				this._pxBounds = pxBounds;
			}
		},

		// recursively turns latlngs into a set of rings with projected coordinates
		_projectLatlngs: function (latlngs, result, projectedBounds) {
			var flat = latlngs[0] instanceof LatLng,
			    len = latlngs.length,
			    i, ring;

			if (flat) {
				ring = [];
				for (i = 0; i < len; i++) {
					ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
					projectedBounds.extend(ring[i]);
				}
				result.push(ring);
			} else {
				for (i = 0; i < len; i++) {
					this._projectLatlngs(latlngs[i], result, projectedBounds);
				}
			}
		},

		// clip polyline by renderer bounds so that we have less to render for performance
		_clipPoints: function () {
			var bounds = this._renderer._bounds;

			this._parts = [];
			if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
				return;
			}

			if (this.options.noClip) {
				this._parts = this._rings;
				return;
			}

			var parts = this._parts,
			    i, j, k, len, len2, segment, points;

			for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
				points = this._rings[i];

				for (j = 0, len2 = points.length; j < len2 - 1; j++) {
					segment = clipSegment(points[j], points[j + 1], bounds, j, true);

					if (!segment) { continue; }

					parts[k] = parts[k] || [];
					parts[k].push(segment[0]);

					// if segment goes out of screen, or it's the last one, it's the end of the line part
					if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
						parts[k].push(segment[1]);
						k++;
					}
				}
			}
		},

		// simplify each clipped part of the polyline for performance
		_simplifyPoints: function () {
			var parts = this._parts,
			    tolerance = this.options.smoothFactor;

			for (var i = 0, len = parts.length; i < len; i++) {
				parts[i] = simplify(parts[i], tolerance);
			}
		},

		_update: function () {
			if (!this._map) { return; }

			this._clipPoints();
			this._simplifyPoints();
			this._updatePath();
		},

		_updatePath: function () {
			this._renderer._updatePoly(this);
		},

		// Needed by the `Canvas` renderer for interactivity
		_containsPoint: function (p, closed) {
			var i, j, k, len, len2, part,
			    w = this._clickTolerance();

			if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

			// hit detection for polylines
			for (i = 0, len = this._parts.length; i < len; i++) {
				part = this._parts[i];

				for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
					if (!closed && (j === 0)) { continue; }

					if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
						return true;
					}
				}
			}
			return false;
		}
	});

	// @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
	// Instantiates a polyline object given an array of geographical points and
	// optionally an options object. You can create a `Polyline` object with
	// multiple separate lines (`MultiPolyline`) by passing an array of arrays
	// of geographic points.
	function polyline(latlngs, options) {
		return new Polyline(latlngs, options);
	}

	/*
	 * @class Polygon
	 * @aka L.Polygon
	 * @inherits Polyline
	 *
	 * A class for drawing polygon overlays on a map. Extends `Polyline`.
	 *
	 * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
	 *
	 *
	 * @example
	 *
	 * ```js
	 * // create a red polygon from an array of LatLng points
	 * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
	 *
	 * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
	 *
	 * // zoom the map to the polygon
	 * map.fitBounds(polygon.getBounds());
	 * ```
	 *
	 * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
	 *
	 * ```js
	 * var latlngs = [
	 *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
	 *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
	 * ];
	 * ```
	 *
	 * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
	 *
	 * ```js
	 * var latlngs = [
	 *   [ // first polygon
	 *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
	 *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
	 *   ],
	 *   [ // second polygon
	 *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
	 *   ]
	 * ];
	 * ```
	 */

	var Polygon = Polyline.extend({

		options: {
			fill: true
		},

		isEmpty: function () {
			return !this._latlngs.length || !this._latlngs[0].length;
		},

		getCenter: function () {
			// throws error when not yet added to map as this center calculation requires projected coordinates
			if (!this._map) {
				throw new Error('Must add layer to map before using getCenter()');
			}

			var i, j, p1, p2, f, area, x, y, center,
			    points = this._rings[0],
			    len = points.length;

			if (!len) { return null; }

			// polygon centroid algorithm; only uses the first ring if there are multiple

			area = x = y = 0;

			for (i = 0, j = len - 1; i < len; j = i++) {
				p1 = points[i];
				p2 = points[j];

				f = p1.y * p2.x - p2.y * p1.x;
				x += (p1.x + p2.x) * f;
				y += (p1.y + p2.y) * f;
				area += f * 3;
			}

			if (area === 0) {
				// Polygon is so small that all points are on same pixel.
				center = points[0];
			} else {
				center = [x / area, y / area];
			}
			return this._map.layerPointToLatLng(center);
		},

		_convertLatLngs: function (latlngs) {
			var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
			    len = result.length;

			// remove last point if it equals first one
			if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
				result.pop();
			}
			return result;
		},

		_setLatLngs: function (latlngs) {
			Polyline.prototype._setLatLngs.call(this, latlngs);
			if (_flat(this._latlngs)) {
				this._latlngs = [this._latlngs];
			}
		},

		_defaultShape: function () {
			return _flat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
		},

		_clipPoints: function () {
			// polygons need a different clipping algorithm so we redefine that

			var bounds = this._renderer._bounds,
			    w = this.options.weight,
			    p = new Point(w, w);

			// increase clip padding by stroke width to avoid stroke on clip edges
			bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));

			this._parts = [];
			if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
				return;
			}

			if (this.options.noClip) {
				this._parts = this._rings;
				return;
			}

			for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
				clipped = clipPolygon(this._rings[i], bounds, true);
				if (clipped.length) {
					this._parts.push(clipped);
				}
			}
		},

		_updatePath: function () {
			this._renderer._updatePoly(this, true);
		},

		// Needed by the `Canvas` renderer for interactivity
		_containsPoint: function (p) {
			var inside = false,
			    part, p1, p2, i, j, k, len, len2;

			if (!this._pxBounds.contains(p)) { return false; }

			// ray casting algorithm for detecting if point is in polygon
			for (i = 0, len = this._parts.length; i < len; i++) {
				part = this._parts[i];

				for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
					p1 = part[j];
					p2 = part[k];

					if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
						inside = !inside;
					}
				}
			}

			// also check if it's on polygon stroke
			return inside || Polyline.prototype._containsPoint.call(this, p, true);
		}

	});


	// @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
	function polygon(latlngs, options) {
		return new Polygon(latlngs, options);
	}

	/*
	 * @class GeoJSON
	 * @aka L.GeoJSON
	 * @inherits FeatureGroup
	 *
	 * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
	 * GeoJSON data and display it on the map. Extends `FeatureGroup`.
	 *
	 * @example
	 *
	 * ```js
	 * L.geoJSON(data, {
	 * 	style: function (feature) {
	 * 		return {color: feature.properties.color};
	 * 	}
	 * }).bindPopup(function (layer) {
	 * 	return layer.feature.properties.description;
	 * }).addTo(map);
	 * ```
	 */

	var GeoJSON = FeatureGroup.extend({

		/* @section
		 * @aka GeoJSON options
		 *
		 * @option pointToLayer: Function = *
		 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
		 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
		 * The default is to spawn a default `Marker`:
		 * ```js
		 * function(geoJsonPoint, latlng) {
		 * 	return L.marker(latlng);
		 * }
		 * ```
		 *
		 * @option style: Function = *
		 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
		 * called internally when data is added.
		 * The default value is to not override any defaults:
		 * ```js
		 * function (geoJsonFeature) {
		 * 	return {}
		 * }
		 * ```
		 *
		 * @option onEachFeature: Function = *
		 * A `Function` that will be called once for each created `Feature`, after it has
		 * been created and styled. Useful for attaching events and popups to features.
		 * The default is to do nothing with the newly created layers:
		 * ```js
		 * function (feature, layer) {}
		 * ```
		 *
		 * @option filter: Function = *
		 * A `Function` that will be used to decide whether to include a feature or not.
		 * The default is to include all features:
		 * ```js
		 * function (geoJsonFeature) {
		 * 	return true;
		 * }
		 * ```
		 * Note: dynamically changing the `filter` option will have effect only on newly
		 * added data. It will _not_ re-evaluate already included features.
		 *
		 * @option coordsToLatLng: Function = *
		 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
		 * The default is the `coordsToLatLng` static method.
		 */

		initialize: function (geojson, options) {
			setOptions(this, options);

			this._layers = {};

			if (geojson) {
				this.addData(geojson);
			}
		},

		// @method addData( <GeoJSON> data ): this
		// Adds a GeoJSON object to the layer.
		addData: function (geojson) {
			var features = isArray(geojson) ? geojson : geojson.features,
			    i, len, feature;

			if (features) {
				for (i = 0, len = features.length; i < len; i++) {
					// only add this if geometry or geometries are set and not null
					feature = features[i];
					if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
						this.addData(feature);
					}
				}
				return this;
			}

			var options = this.options;

			if (options.filter && !options.filter(geojson)) { return this; }

			var layer = geometryToLayer(geojson, options);
			if (!layer) {
				return this;
			}
			layer.feature = asFeature(geojson);

			layer.defaultOptions = layer.options;
			this.resetStyle(layer);

			if (options.onEachFeature) {
				options.onEachFeature(geojson, layer);
			}

			return this.addLayer(layer);
		},

		// @method resetStyle( <Path> layer ): this
		// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
		resetStyle: function (layer) {
			// reset any custom styles
			layer.options = extend({}, layer.defaultOptions);
			this._setLayerStyle(layer, this.options.style);
			return this;
		},

		// @method setStyle( <Function> style ): this
		// Changes styles of GeoJSON vector layers with the given style function.
		setStyle: function (style) {
			return this.eachLayer(function (layer) {
				this._setLayerStyle(layer, style);
			}, this);
		},

		_setLayerStyle: function (layer, style) {
			if (typeof style === 'function') {
				style = style(layer.feature);
			}
			if (layer.setStyle) {
				layer.setStyle(style);
			}
		}
	});

	// @section
	// There are several static functions which can be called without instantiating L.GeoJSON:

	// @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
	// Creates a `Layer` from a given GeoJSON feature. Can use a custom
	// [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
	// functions if provided as options.
	function geometryToLayer(geojson, options) {

		var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
		    coords = geometry ? geometry.coordinates : null,
		    layers = [],
		    pointToLayer = options && options.pointToLayer,
		    _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
		    latlng, latlngs, i, len;

		if (!coords && !geometry) {
			return null;
		}

		switch (geometry.type) {
		case 'Point':
			latlng = _coordsToLatLng(coords);
			return pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng);

		case 'MultiPoint':
			for (i = 0, len = coords.length; i < len; i++) {
				latlng = _coordsToLatLng(coords[i]);
				layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng));
			}
			return new FeatureGroup(layers);

		case 'LineString':
		case 'MultiLineString':
			latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
			return new Polyline(latlngs, options);

		case 'Polygon':
		case 'MultiPolygon':
			latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
			return new Polygon(latlngs, options);

		case 'GeometryCollection':
			for (i = 0, len = geometry.geometries.length; i < len; i++) {
				var layer = geometryToLayer({
					geometry: geometry.geometries[i],
					type: 'Feature',
					properties: geojson.properties
				}, options);

				if (layer) {
					layers.push(layer);
				}
			}
			return new FeatureGroup(layers);

		default:
			throw new Error('Invalid GeoJSON object.');
		}
	}

	// @function coordsToLatLng(coords: Array): LatLng
	// Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
	// or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
	function coordsToLatLng(coords) {
		return new LatLng(coords[1], coords[0], coords[2]);
	}

	// @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
	// Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
	// `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
	// Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
	function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
		var latlngs = [];

		for (var i = 0, len = coords.length, latlng; i < len; i++) {
			latlng = levelsDeep ?
					coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) :
					(_coordsToLatLng || coordsToLatLng)(coords[i]);

			latlngs.push(latlng);
		}

		return latlngs;
	}

	// @function latLngToCoords(latlng: LatLng, precision?: Number): Array
	// Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
	function latLngToCoords(latlng, precision) {
		precision = typeof precision === 'number' ? precision : 6;
		return latlng.alt !== undefined ?
				[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] :
				[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
	}

	// @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
	// Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
	// `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
	function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
		var coords = [];

		for (var i = 0, len = latlngs.length; i < len; i++) {
			coords.push(levelsDeep ?
				latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) :
				latLngToCoords(latlngs[i], precision));
		}

		if (!levelsDeep && closed) {
			coords.push(coords[0]);
		}

		return coords;
	}

	function getFeature(layer, newGeometry) {
		return layer.feature ?
				extend({}, layer.feature, {geometry: newGeometry}) :
				asFeature(newGeometry);
	}

	// @function asFeature(geojson: Object): Object
	// Normalize GeoJSON geometries/features into GeoJSON features.
	function asFeature(geojson) {
		if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
			return geojson;
		}

		return {
			type: 'Feature',
			properties: {},
			geometry: geojson
		};
	}

	var PointToGeoJSON = {
		toGeoJSON: function (precision) {
			return getFeature(this, {
				type: 'Point',
				coordinates: latLngToCoords(this.getLatLng(), precision)
			});
		}
	};

	// @namespace Marker
	// @method toGeoJSON(): Object
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
	Marker.include(PointToGeoJSON);

	// @namespace CircleMarker
	// @method toGeoJSON(): Object
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
	Circle.include(PointToGeoJSON);
	CircleMarker.include(PointToGeoJSON);


	// @namespace Polyline
	// @method toGeoJSON(): Object
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
	Polyline.include({
		toGeoJSON: function (precision) {
			var multi = !_flat(this._latlngs);

			var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);

			return getFeature(this, {
				type: (multi ? 'Multi' : '') + 'LineString',
				coordinates: coords
			});
		}
	});

	// @namespace Polygon
	// @method toGeoJSON(): Object
	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
	Polygon.include({
		toGeoJSON: function (precision) {
			var holes = !_flat(this._latlngs),
			    multi = holes && !_flat(this._latlngs[0]);

			var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

			if (!holes) {
				coords = [coords];
			}

			return getFeature(this, {
				type: (multi ? 'Multi' : '') + 'Polygon',
				coordinates: coords
			});
		}
	});


	// @namespace LayerGroup
	LayerGroup.include({
		toMultiPoint: function (precision) {
			var coords = [];

			this.eachLayer(function (layer) {
				coords.push(layer.toGeoJSON(precision).geometry.coordinates);
			});

			return getFeature(this, {
				type: 'MultiPoint',
				coordinates: coords
			});
		},

		// @method toGeoJSON(): Object
		// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
		toGeoJSON: function (precision) {

			var type = this.feature && this.feature.geometry && this.feature.geometry.type;

			if (type === 'MultiPoint') {
				return this.toMultiPoint(precision);
			}

			var isGeometryCollection = type === 'GeometryCollection',
			    jsons = [];

			this.eachLayer(function (layer) {
				if (layer.toGeoJSON) {
					var json = layer.toGeoJSON(precision);
					if (isGeometryCollection) {
						jsons.push(json.geometry);
					} else {
						var feature = asFeature(json);
						// Squash nested feature collections
						if (feature.type === 'FeatureCollection') {
							jsons.push.apply(jsons, feature.features);
						} else {
							jsons.push(feature);
						}
					}
				}
			});

			if (isGeometryCollection) {
				return getFeature(this, {
					geometries: jsons,
					type: 'GeometryCollection'
				});
			}

			return {
				type: 'FeatureCollection',
				features: jsons
			};
		}
	});

	// @namespace GeoJSON
	// @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
	// Creates a GeoJSON layer. Optionally accepts an object in
	// [GeoJSON format](http://geojson.org/geojson-spec.html) to display on the map
	// (you can alternatively add it later with `addData` method) and an `options` object.
	function geoJSON(geojson, options) {
		return new GeoJSON(geojson, options);
	}

	// Backward compatibility.
	var geoJson = geoJSON;

	/*
	 * @class ImageOverlay
	 * @aka L.ImageOverlay
	 * @inherits Interactive layer
	 *
	 * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
	 *
	 * @example
	 *
	 * ```js
	 * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
	 * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
	 * L.imageOverlay(imageUrl, imageBounds).addTo(map);
	 * ```
	 */

	var ImageOverlay = Layer.extend({

		// @section
		// @aka ImageOverlay options
		options: {
			// @option opacity: Number = 1.0
			// The opacity of the image overlay.
			opacity: 1,

			// @option alt: String = ''
			// Text for the `alt` attribute of the image (useful for accessibility).
			alt: '',

			// @option interactive: Boolean = false
			// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
			interactive: false,

			// @option crossOrigin: Boolean = false
			// If true, the image will have its crossOrigin attribute set to ''. This is needed if you want to access image pixel data.
			crossOrigin: false,

			// @option errorOverlayUrl: String = ''
			// URL to the overlay image to show in place of the overlay that failed to load.
			errorOverlayUrl: '',

			// @option zIndex: Number = 1
			// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the tile layer.
			zIndex: 1,

			// @option className: String = ''
			// A custom class name to assign to the image. Empty by default.
			className: '',
		},

		initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
			this._url = url;
			this._bounds = toLatLngBounds(bounds);

			setOptions(this, options);
		},

		onAdd: function () {
			if (!this._image) {
				this._initImage();

				if (this.options.opacity < 1) {
					this._updateOpacity();
				}
			}

			if (this.options.interactive) {
				addClass(this._image, 'leaflet-interactive');
				this.addInteractiveTarget(this._image);
			}

			this.getPane().appendChild(this._image);
			this._reset();
		},

		onRemove: function () {
			remove(this._image);
			if (this.options.interactive) {
				this.removeInteractiveTarget(this._image);
			}
		},

		// @method setOpacity(opacity: Number): this
		// Sets the opacity of the overlay.
		setOpacity: function (opacity) {
			this.options.opacity = opacity;

			if (this._image) {
				this._updateOpacity();
			}
			return this;
		},

		setStyle: function (styleOpts) {
			if (styleOpts.opacity) {
				this.setOpacity(styleOpts.opacity);
			}
			return this;
		},

		// @method bringToFront(): this
		// Brings the layer to the top of all overlays.
		bringToFront: function () {
			if (this._map) {
				toFront(this._image);
			}
			return this;
		},

		// @method bringToBack(): this
		// Brings the layer to the bottom of all overlays.
		bringToBack: function () {
			if (this._map) {
				toBack(this._image);
			}
			return this;
		},

		// @method setUrl(url: String): this
		// Changes the URL of the image.
		setUrl: function (url) {
			this._url = url;

			if (this._image) {
				this._image.src = url;
			}
			return this;
		},

		// @method setBounds(bounds: LatLngBounds): this
		// Update the bounds that this ImageOverlay covers
		setBounds: function (bounds) {
			this._bounds = bounds;

			if (this._map) {
				this._reset();
			}
			return this;
		},

		getEvents: function () {
			var events = {
				zoom: this._reset,
				viewreset: this._reset
			};

			if (this._zoomAnimated) {
				events.zoomanim = this._animateZoom;
			}

			return events;
		},

		// @method: setZIndex(value: Number) : this
		// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
		setZIndex: function (value) {
			this.options.zIndex = value;
			this._updateZIndex();
			return this;
		},

		// @method getBounds(): LatLngBounds
		// Get the bounds that this ImageOverlay covers
		getBounds: function () {
			return this._bounds;
		},

		// @method getElement(): HTMLElement
		// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
		// used by this overlay.
		getElement: function () {
			return this._image;
		},

		_initImage: function () {
			var img = this._image = create$1('img',
					'leaflet-image-layer ' + (this._zoomAnimated ? 'leaflet-zoom-animated' : '') +
					 (this.options.className || ''));

			img.onselectstart = falseFn;
			img.onmousemove = falseFn;

			// @event load: Event
			// Fired when the ImageOverlay layer has loaded its image
			img.onload = bind(this.fire, this, 'load');
			img.onerror = bind(this._overlayOnError, this, 'error');

			if (this.options.crossOrigin) {
				img.crossOrigin = '';
			}

			if (this.options.zIndex) {
				this._updateZIndex();
			}

			img.src = this._url;
			img.alt = this.options.alt;
		},

		_animateZoom: function (e) {
			var scale = this._map.getZoomScale(e.zoom),
			    offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

			setTransform(this._image, offset, scale);
		},

		_reset: function () {
			var image = this._image,
			    bounds = new Bounds(
			        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
			        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
			    size = bounds.getSize();

			setPosition(image, bounds.min);

			image.style.width  = size.x + 'px';
			image.style.height = size.y + 'px';
		},

		_updateOpacity: function () {
			setOpacity(this._image, this.options.opacity);
		},

		_updateZIndex: function () {
			if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
				this._image.style.zIndex = this.options.zIndex;
			}
		},

		_overlayOnError: function () {
			// @event error: Event
			// Fired when the ImageOverlay layer has loaded its image
			this.fire('error');

			var errorUrl = this.options.errorOverlayUrl;
			if (errorUrl && this._url !== errorUrl) {
				this._url = errorUrl;
				this._image.src = errorUrl;
			}
		}
	});

	// @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
	// Instantiates an image overlay object given the URL of the image and the
	// geographical bounds it is tied to.
	var imageOverlay = function (url, bounds, options) {
		return new ImageOverlay(url, bounds, options);
	};

	/*
	 * @class VideoOverlay
	 * @aka L.VideoOverlay
	 * @inherits ImageOverlay
	 *
	 * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
	 *
	 * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
	 * HTML5 element.
	 *
	 * @example
	 *
	 * ```js
	 * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
	 * 	imageBounds = [[ 32, -130], [ 13, -100]];
	 * L.imageOverlay(imageUrl, imageBounds).addTo(map);
	 * ```
	 */

	var VideoOverlay = ImageOverlay.extend({

		// @section
		// @aka VideoOverlay options
		options: {
			// @option autoplay: Boolean = true
			// Whether the video starts playing automatically when loaded.
			autoplay: true,

			// @option loop: Boolean = true
			// Whether the video will loop back to the beginning when played.
			loop: true
		},

		_initImage: function () {
			var vid = this._image = create$1('video',
				'leaflet-image-layer ' + (this._zoomAnimated ? 'leaflet-zoom-animated' : ''));

			vid.onselectstart = falseFn;
			vid.onmousemove = falseFn;

			// @event load: Event
			// Fired when the video has finished loading the first frame
			vid.onloadeddata = bind(this.fire, this, 'load');

			if (!isArray(this._url)) { this._url = [this._url]; }

			vid.autoplay = !!this.options.autoplay;
			vid.loop = !!this.options.loop;
			for (var i = 0; i < this._url.length; i++) {
				var source = create$1('source');
				source.src = this._url[i];
				vid.appendChild(source);
			}
		}

		// @method getElement(): HTMLVideoElement
		// Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
		// used by this overlay.
	});


	// @factory L.videoOverlay(videoUrl: String|Array, bounds: LatLngBounds, options?: VideoOverlay options)
	// Instantiates an image overlay object given the URL of the video (or array of URLs) and the
	// geographical bounds it is tied to.
	function videoOverlay(url, bounds, options) {
		return new VideoOverlay(url, bounds, options);
	}

	/*
	 * @class DivOverlay
	 * @inherits Layer
	 * @aka L.DivOverlay
	 * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
	 */

	// @namespace DivOverlay
	var DivOverlay = Layer.extend({

		// @section
		// @aka DivOverlay options
		options: {
			// @option offset: Point = Point(0, 7)
			// The offset of the popup position. Useful to control the anchor
			// of the popup when opening it on some overlays.
			offset: [0, 7],

			// @option className: String = ''
			// A custom CSS class name to assign to the popup.
			className: '',

			// @option pane: String = 'popupPane'
			// `Map pane` where the popup will be added.
			pane: 'popupPane'
		},

		initialize: function (options, source) {
			setOptions(this, options);

			this._source = source;
		},

		onAdd: function (map) {
			this._zoomAnimated = map._zoomAnimated;

			if (!this._container) {
				this._initLayout();
			}

			if (map._fadeAnimated) {
				setOpacity(this._container, 0);
			}

			clearTimeout(this._removeTimeout);
			this.getPane().appendChild(this._container);
			this.update();

			if (map._fadeAnimated) {
				setOpacity(this._container, 1);
			}

			this.bringToFront();
		},

		onRemove: function (map) {
			if (map._fadeAnimated) {
				setOpacity(this._container, 0);
				this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
			} else {
				remove(this._container);
			}
		},

		// @namespace Popup
		// @method getLatLng: LatLng
		// Returns the geographical point of popup.
		getLatLng: function () {
			return this._latlng;
		},

		// @method setLatLng(latlng: LatLng): this
		// Sets the geographical point where the popup will open.
		setLatLng: function (latlng) {
			this._latlng = toLatLng(latlng);
			if (this._map) {
				this._updatePosition();
				this._adjustPan();
			}
			return this;
		},

		// @method getContent: String|HTMLElement
		// Returns the content of the popup.
		getContent: function () {
			return this._content;
		},

		// @method setContent(htmlContent: String|HTMLElement|Function): this
		// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
		setContent: function (content) {
			this._content = content;
			this.update();
			return this;
		},

		// @method getElement: String|HTMLElement
		// Alias for [getContent()](#popup-getcontent)
		getElement: function () {
			return this._container;
		},

		// @method update: null
		// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
		update: function () {
			if (!this._map) { return; }

			this._container.style.visibility = 'hidden';

			this._updateContent();
			this._updateLayout();
			this._updatePosition();

			this._container.style.visibility = '';

			this._adjustPan();
		},

		getEvents: function () {
			var events = {
				zoom: this._updatePosition,
				viewreset: this._updatePosition
			};

			if (this._zoomAnimated) {
				events.zoomanim = this._animateZoom;
			}
			return events;
		},

		// @method isOpen: Boolean
		// Returns `true` when the popup is visible on the map.
		isOpen: function () {
			return !!this._map && this._map.hasLayer(this);
		},

		// @method bringToFront: this
		// Brings this popup in front of other popups (in the same map pane).
		bringToFront: function () {
			if (this._map) {
				toFront(this._container);
			}
			return this;
		},

		// @method bringToBack: this
		// Brings this popup to the back of other popups (in the same map pane).
		bringToBack: function () {
			if (this._map) {
				toBack(this._container);
			}
			return this;
		},

		_updateContent: function () {
			if (!this._content) { return; }

			var node = this._contentNode;
			var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;

			if (typeof content === 'string') {
				node.innerHTML = content;
			} else {
				while (node.hasChildNodes()) {
					node.removeChild(node.firstChild);
				}
				node.appendChild(content);
			}
			this.fire('contentupdate');
		},

		_updatePosition: function () {
			if (!this._map) { return; }

			var pos = this._map.latLngToLayerPoint(this._latlng),
			    offset = toPoint(this.options.offset),
			    anchor = this._getAnchor();

			if (this._zoomAnimated) {
				setPosition(this._container, pos.add(anchor));
			} else {
				offset = offset.add(pos).add(anchor);
			}

			var bottom = this._containerBottom = -offset.y,
			    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

			// bottom position the popup in case the height of the popup changes (images loading etc)
			this._container.style.bottom = bottom + 'px';
			this._container.style.left = left + 'px';
		},

		_getAnchor: function () {
			return [0, 0];
		}

	});

	/*
	 * @class Popup
	 * @inherits DivOverlay
	 * @aka L.Popup
	 * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
	 * open popups while making sure that only one popup is open at one time
	 * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
	 *
	 * @example
	 *
	 * If you want to just bind a popup to marker click and then open it, it's really easy:
	 *
	 * ```js
	 * marker.bindPopup(popupContent).openPopup();
	 * ```
	 * Path overlays like polylines also have a `bindPopup` method.
	 * Here's a more complicated way to open a popup on a map:
	 *
	 * ```js
	 * var popup = L.popup()
	 * 	.setLatLng(latlng)
	 * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
	 * 	.openOn(map);
	 * ```
	 */


	// @namespace Popup
	var Popup = DivOverlay.extend({

		// @section
		// @aka Popup options
		options: {
			// @option maxWidth: Number = 300
			// Max width of the popup, in pixels.
			maxWidth: 300,

			// @option minWidth: Number = 50
			// Min width of the popup, in pixels.
			minWidth: 50,

			// @option maxHeight: Number = null
			// If set, creates a scrollable container of the given height
			// inside a popup if its content exceeds it.
			maxHeight: null,

			// @option autoPan: Boolean = true
			// Set it to `false` if you don't want the map to do panning animation
			// to fit the opened popup.
			autoPan: true,

			// @option autoPanPaddingTopLeft: Point = null
			// The margin between the popup and the top left corner of the map
			// view after autopanning was performed.
			autoPanPaddingTopLeft: null,

			// @option autoPanPaddingBottomRight: Point = null
			// The margin between the popup and the bottom right corner of the map
			// view after autopanning was performed.
			autoPanPaddingBottomRight: null,

			// @option autoPanPadding: Point = Point(5, 5)
			// Equivalent of setting both top left and bottom right autopan padding to the same value.
			autoPanPadding: [5, 5],

			// @option keepInView: Boolean = false
			// Set it to `true` if you want to prevent users from panning the popup
			// off of the screen while it is open.
			keepInView: false,

			// @option closeButton: Boolean = true
			// Controls the presence of a close button in the popup.
			closeButton: true,

			// @option autoClose: Boolean = true
			// Set it to `false` if you want to override the default behavior of
			// the popup closing when another popup is opened.
			autoClose: true,

			// @option closeOnClick: Boolean = *
			// Set it if you want to override the default behavior of the popup closing when user clicks
			// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.

			// @option className: String = ''
			// A custom CSS class name to assign to the popup.
			className: ''
		},

		// @namespace Popup
		// @method openOn(map: Map): this
		// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
		openOn: function (map) {
			map.openPopup(this);
			return this;
		},

		onAdd: function (map) {
			DivOverlay.prototype.onAdd.call(this, map);

			// @namespace Map
			// @section Popup events
			// @event popupopen: PopupEvent
			// Fired when a popup is opened in the map
			map.fire('popupopen', {popup: this});

			if (this._source) {
				// @namespace Layer
				// @section Popup events
				// @event popupopen: PopupEvent
				// Fired when a popup bound to this layer is opened
				this._source.fire('popupopen', {popup: this}, true);
				// For non-path layers, we toggle the popup when clicking
				// again the layer, so prevent the map to reopen it.
				if (!(this._source instanceof Path)) {
					this._source.on('preclick', stopPropagation);
				}
			}
		},

		onRemove: function (map) {
			DivOverlay.prototype.onRemove.call(this, map);

			// @namespace Map
			// @section Popup events
			// @event popupclose: PopupEvent
			// Fired when a popup in the map is closed
			map.fire('popupclose', {popup: this});

			if (this._source) {
				// @namespace Layer
				// @section Popup events
				// @event popupclose: PopupEvent
				// Fired when a popup bound to this layer is closed
				this._source.fire('popupclose', {popup: this}, true);
				if (!(this._source instanceof Path)) {
					this._source.off('preclick', stopPropagation);
				}
			}
		},

		getEvents: function () {
			var events = DivOverlay.prototype.getEvents.call(this);

			if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
				events.preclick = this._close;
			}

			if (this.options.keepInView) {
				events.moveend = this._adjustPan;
			}

			return events;
		},

		_close: function () {
			if (this._map) {
				this._map.closePopup(this);
			}
		},

		_initLayout: function () {
			var prefix = 'leaflet-popup',
			    container = this._container = create$1('div',
				prefix + ' ' + (this.options.className || '') +
				' leaflet-zoom-animated');

			var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
			this._contentNode = create$1('div', prefix + '-content', wrapper);

			disableClickPropagation(wrapper);
			disableScrollPropagation(this._contentNode);
			on(wrapper, 'contextmenu', stopPropagation);

			this._tipContainer = create$1('div', prefix + '-tip-container', container);
			this._tip = create$1('div', prefix + '-tip', this._tipContainer);

			if (this.options.closeButton) {
				var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
				closeButton.href = '#close';
				closeButton.innerHTML = '&#215;';

				on(closeButton, 'click', this._onCloseButtonClick, this);
			}
		},

		_updateLayout: function () {
			var container = this._contentNode,
			    style = container.style;

			style.width = '';
			style.whiteSpace = 'nowrap';

			var width = container.offsetWidth;
			width = Math.min(width, this.options.maxWidth);
			width = Math.max(width, this.options.minWidth);

			style.width = (width + 1) + 'px';
			style.whiteSpace = '';

			style.height = '';

			var height = container.offsetHeight,
			    maxHeight = this.options.maxHeight,
			    scrolledClass = 'leaflet-popup-scrolled';

			if (maxHeight && height > maxHeight) {
				style.height = maxHeight + 'px';
				addClass(container, scrolledClass);
			} else {
				removeClass(container, scrolledClass);
			}

			this._containerWidth = this._container.offsetWidth;
		},

		_animateZoom: function (e) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
			    anchor = this._getAnchor();
			setPosition(this._container, pos.add(anchor));
		},

		_adjustPan: function () {
			if (!this.options.autoPan || (this._map._panAnim && this._map._panAnim._inProgress)) { return; }

			var map = this._map,
			    marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
			    containerHeight = this._container.offsetHeight + marginBottom,
			    containerWidth = this._containerWidth,
			    layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);

			layerPos._add(getPosition(this._container));

			var containerPos = map.layerPointToContainerPoint(layerPos),
			    padding = toPoint(this.options.autoPanPadding),
			    paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
			    paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
			    size = map.getSize(),
			    dx = 0,
			    dy = 0;

			if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
				dx = containerPos.x + containerWidth - size.x + paddingBR.x;
			}
			if (containerPos.x - dx - paddingTL.x < 0) { // left
				dx = containerPos.x - paddingTL.x;
			}
			if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
				dy = containerPos.y + containerHeight - size.y + paddingBR.y;
			}
			if (containerPos.y - dy - paddingTL.y < 0) { // top
				dy = containerPos.y - paddingTL.y;
			}

			// @namespace Map
			// @section Popup events
			// @event autopanstart: Event
			// Fired when the map starts autopanning when opening a popup.
			if (dx || dy) {
				map
				    .fire('autopanstart')
				    .panBy([dx, dy]);
			}
		},

		_onCloseButtonClick: function (e) {
			this._close();
			stop(e);
		},

		_getAnchor: function () {
			// Where should we anchor the popup on the source layer?
			return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
		}

	});

	// @namespace Popup
	// @factory L.popup(options?: Popup options, source?: Layer)
	// Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
	var popup = function (options, source) {
		return new Popup(options, source);
	};


	/* @namespace Map
	 * @section Interaction Options
	 * @option closePopupOnClick: Boolean = true
	 * Set it to `false` if you don't want popups to close when user clicks the map.
	 */
	Map.mergeOptions({
		closePopupOnClick: true
	});


	// @namespace Map
	// @section Methods for Layers and Controls
	Map.include({
		// @method openPopup(popup: Popup): this
		// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
		// @alternative
		// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
		// Creates a popup with the specified content and options and opens it in the given point on a map.
		openPopup: function (popup, latlng, options) {
			if (!(popup instanceof Popup)) {
				popup = new Popup(options).setContent(popup);
			}

			if (latlng) {
				popup.setLatLng(latlng);
			}

			if (this.hasLayer(popup)) {
				return this;
			}

			if (this._popup && this._popup.options.autoClose) {
				this.closePopup();
			}

			this._popup = popup;
			return this.addLayer(popup);
		},

		// @method closePopup(popup?: Popup): this
		// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
		closePopup: function (popup) {
			if (!popup || popup === this._popup) {
				popup = this._popup;
				this._popup = null;
			}
			if (popup) {
				this.removeLayer(popup);
			}
			return this;
		}
	});

	/*
	 * @namespace Layer
	 * @section Popup methods example
	 *
	 * All layers share a set of methods convenient for binding popups to it.
	 *
	 * ```js
	 * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
	 * layer.openPopup();
	 * layer.closePopup();
	 * ```
	 *
	 * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
	 */

	// @section Popup methods
	Layer.include({

		// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
		// Binds a popup to the layer with the passed `content` and sets up the
		// neccessary event listeners. If a `Function` is passed it will receive
		// the layer as the first argument and should return a `String` or `HTMLElement`.
		bindPopup: function (content, options) {

			if (content instanceof Popup) {
				setOptions(content, options);
				this._popup = content;
				content._source = this;
			} else {
				if (!this._popup || options) {
					this._popup = new Popup(options, this);
				}
				this._popup.setContent(content);
			}

			if (!this._popupHandlersAdded) {
				this.on({
					click: this._openPopup,
					keypress: this._onKeyPress,
					remove: this.closePopup,
					move: this._movePopup
				});
				this._popupHandlersAdded = true;
			}

			return this;
		},

		// @method unbindPopup(): this
		// Removes the popup previously bound with `bindPopup`.
		unbindPopup: function () {
			if (this._popup) {
				this.off({
					click: this._openPopup,
					keypress: this._onKeyPress,
					remove: this.closePopup,
					move: this._movePopup
				});
				this._popupHandlersAdded = false;
				this._popup = null;
			}
			return this;
		},

		// @method openPopup(latlng?: LatLng): this
		// Opens the bound popup at the specificed `latlng` or at the default popup anchor if no `latlng` is passed.
		openPopup: function (layer, latlng) {
			if (!(layer instanceof Layer)) {
				latlng = layer;
				layer = this;
			}

			if (layer instanceof FeatureGroup) {
				for (var id in this._layers) {
					layer = this._layers[id];
					break;
				}
			}

			if (!latlng) {
				latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
			}

			if (this._popup && this._map) {
				// set popup source to this layer
				this._popup._source = layer;

				// update the popup (content, layout, ect...)
				this._popup.update();

				// open the popup on the map
				this._map.openPopup(this._popup, latlng);
			}

			return this;
		},

		// @method closePopup(): this
		// Closes the popup bound to this layer if it is open.
		closePopup: function () {
			if (this._popup) {
				this._popup._close();
			}
			return this;
		},

		// @method togglePopup(): this
		// Opens or closes the popup bound to this layer depending on its current state.
		togglePopup: function (target) {
			if (this._popup) {
				if (this._popup._map) {
					this.closePopup();
				} else {
					this.openPopup(target);
				}
			}
			return this;
		},

		// @method isPopupOpen(): boolean
		// Returns `true` if the popup bound to this layer is currently open.
		isPopupOpen: function () {
			return (this._popup ? this._popup.isOpen() : false);
		},

		// @method setPopupContent(content: String|HTMLElement|Popup): this
		// Sets the content of the popup bound to this layer.
		setPopupContent: function (content) {
			if (this._popup) {
				this._popup.setContent(content);
			}
			return this;
		},

		// @method getPopup(): Popup
		// Returns the popup bound to this layer.
		getPopup: function () {
			return this._popup;
		},

		_openPopup: function (e) {
			var layer = e.layer || e.target;

			if (!this._popup) {
				return;
			}

			if (!this._map) {
				return;
			}

			// prevent map click
			stop(e);

			// if this inherits from Path its a vector and we can just
			// open the popup at the new location
			if (layer instanceof Path) {
				this.openPopup(e.layer || e.target, e.latlng);
				return;
			}

			// otherwise treat it like a marker and figure out
			// if we should toggle it open/closed
			if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
				this.closePopup();
			} else {
				this.openPopup(layer, e.latlng);
			}
		},

		_movePopup: function (e) {
			this._popup.setLatLng(e.latlng);
		},

		_onKeyPress: function (e) {
			if (e.originalEvent.keyCode === 13) {
				this._openPopup(e);
			}
		}
	});

	/*
	 * @class Tooltip
	 * @inherits DivOverlay
	 * @aka L.Tooltip
	 * Used to display small texts on top of map layers.
	 *
	 * @example
	 *
	 * ```js
	 * marker.bindTooltip("my tooltip text").openTooltip();
	 * ```
	 * Note about tooltip offset. Leaflet takes two options in consideration
	 * for computing tooltip offseting:
	 * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
	 *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
	 *   move it to the bottom. Negatives will move to the left and top.
	 * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
	 *   should adapt this value if you use a custom icon.
	 */


	// @namespace Tooltip
	var Tooltip = DivOverlay.extend({

		// @section
		// @aka Tooltip options
		options: {
			// @option pane: String = 'tooltipPane'
			// `Map pane` where the tooltip will be added.
			pane: 'tooltipPane',

			// @option offset: Point = Point(0, 0)
			// Optional offset of the tooltip position.
			offset: [0, 0],

			// @option direction: String = 'auto'
			// Direction where to open the tooltip. Possible values are: `right`, `left`,
			// `top`, `bottom`, `center`, `auto`.
			// `auto` will dynamicaly switch between `right` and `left` according to the tooltip
			// position on the map.
			direction: 'auto',

			// @option permanent: Boolean = false
			// Whether to open the tooltip permanently or only on mouseover.
			permanent: false,

			// @option sticky: Boolean = false
			// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
			sticky: false,

			// @option interactive: Boolean = false
			// If true, the tooltip will listen to the feature events.
			interactive: false,

			// @option opacity: Number = 0.9
			// Tooltip container opacity.
			opacity: 0.9
		},

		onAdd: function (map) {
			DivOverlay.prototype.onAdd.call(this, map);
			this.setOpacity(this.options.opacity);

			// @namespace Map
			// @section Tooltip events
			// @event tooltipopen: TooltipEvent
			// Fired when a tooltip is opened in the map.
			map.fire('tooltipopen', {tooltip: this});

			if (this._source) {
				// @namespace Layer
				// @section Tooltip events
				// @event tooltipopen: TooltipEvent
				// Fired when a tooltip bound to this layer is opened.
				this._source.fire('tooltipopen', {tooltip: this}, true);
			}
		},

		onRemove: function (map) {
			DivOverlay.prototype.onRemove.call(this, map);

			// @namespace Map
			// @section Tooltip events
			// @event tooltipclose: TooltipEvent
			// Fired when a tooltip in the map is closed.
			map.fire('tooltipclose', {tooltip: this});

			if (this._source) {
				// @namespace Layer
				// @section Tooltip events
				// @event tooltipclose: TooltipEvent
				// Fired when a tooltip bound to this layer is closed.
				this._source.fire('tooltipclose', {tooltip: this}, true);
			}
		},

		getEvents: function () {
			var events = DivOverlay.prototype.getEvents.call(this);

			if (touch && !this.options.permanent) {
				events.preclick = this._close;
			}

			return events;
		},

		_close: function () {
			if (this._map) {
				this._map.closeTooltip(this);
			}
		},

		_initLayout: function () {
			var prefix = 'leaflet-tooltip',
			    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

			this._contentNode = this._container = create$1('div', className);
		},

		_updateLayout: function () {},

		_adjustPan: function () {},

		_setPosition: function (pos) {
			var map = this._map,
			    container = this._container,
			    centerPoint = map.latLngToContainerPoint(map.getCenter()),
			    tooltipPoint = map.layerPointToContainerPoint(pos),
			    direction = this.options.direction,
			    tooltipWidth = container.offsetWidth,
			    tooltipHeight = container.offsetHeight,
			    offset = toPoint(this.options.offset),
			    anchor = this._getAnchor();

			if (direction === 'top') {
				pos = pos.add(toPoint(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y, true));
			} else if (direction === 'bottom') {
				pos = pos.subtract(toPoint(tooltipWidth / 2 - offset.x, -offset.y, true));
			} else if (direction === 'center') {
				pos = pos.subtract(toPoint(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y, true));
			} else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {
				direction = 'right';
				pos = pos.add(toPoint(offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y, true));
			} else {
				direction = 'left';
				pos = pos.subtract(toPoint(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y, true));
			}

			removeClass(container, 'leaflet-tooltip-right');
			removeClass(container, 'leaflet-tooltip-left');
			removeClass(container, 'leaflet-tooltip-top');
			removeClass(container, 'leaflet-tooltip-bottom');
			addClass(container, 'leaflet-tooltip-' + direction);
			setPosition(container, pos);
		},

		_updatePosition: function () {
			var pos = this._map.latLngToLayerPoint(this._latlng);
			this._setPosition(pos);
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;

			if (this._container) {
				setOpacity(this._container, opacity);
			}
		},

		_animateZoom: function (e) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
			this._setPosition(pos);
		},

		_getAnchor: function () {
			// Where should we anchor the tooltip on the source layer?
			return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
		}

	});

	// @namespace Tooltip
	// @factory L.tooltip(options?: Tooltip options, source?: Layer)
	// Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
	var tooltip = function (options, source) {
		return new Tooltip(options, source);
	};

	// @namespace Map
	// @section Methods for Layers and Controls
	Map.include({

		// @method openTooltip(tooltip: Tooltip): this
		// Opens the specified tooltip.
		// @alternative
		// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
		// Creates a tooltip with the specified content and options and open it.
		openTooltip: function (tooltip, latlng, options) {
			if (!(tooltip instanceof Tooltip)) {
				tooltip = new Tooltip(options).setContent(tooltip);
			}

			if (latlng) {
				tooltip.setLatLng(latlng);
			}

			if (this.hasLayer(tooltip)) {
				return this;
			}

			return this.addLayer(tooltip);
		},

		// @method closeTooltip(tooltip?: Tooltip): this
		// Closes the tooltip given as parameter.
		closeTooltip: function (tooltip) {
			if (tooltip) {
				this.removeLayer(tooltip);
			}
			return this;
		}

	});

	/*
	 * @namespace Layer
	 * @section Tooltip methods example
	 *
	 * All layers share a set of methods convenient for binding tooltips to it.
	 *
	 * ```js
	 * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
	 * layer.openTooltip();
	 * layer.closeTooltip();
	 * ```
	 */

	// @section Tooltip methods
	Layer.include({

		// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
		// Binds a tooltip to the layer with the passed `content` and sets up the
		// neccessary event listeners. If a `Function` is passed it will receive
		// the layer as the first argument and should return a `String` or `HTMLElement`.
		bindTooltip: function (content, options) {

			if (content instanceof Tooltip) {
				setOptions(content, options);
				this._tooltip = content;
				content._source = this;
			} else {
				if (!this._tooltip || options) {
					this._tooltip = new Tooltip(options, this);
				}
				this._tooltip.setContent(content);

			}

			this._initTooltipInteractions();

			if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
				this.openTooltip();
			}

			return this;
		},

		// @method unbindTooltip(): this
		// Removes the tooltip previously bound with `bindTooltip`.
		unbindTooltip: function () {
			if (this._tooltip) {
				this._initTooltipInteractions(true);
				this.closeTooltip();
				this._tooltip = null;
			}
			return this;
		},

		_initTooltipInteractions: function (remove$$1) {
			if (!remove$$1 && this._tooltipHandlersAdded) { return; }
			var onOff = remove$$1 ? 'off' : 'on',
			    events = {
				remove: this.closeTooltip,
				move: this._moveTooltip
			    };
			if (!this._tooltip.options.permanent) {
				events.mouseover = this._openTooltip;
				events.mouseout = this.closeTooltip;
				if (this._tooltip.options.sticky) {
					events.mousemove = this._moveTooltip;
				}
				if (touch) {
					events.click = this._openTooltip;
				}
			} else {
				events.add = this._openTooltip;
			}
			this[onOff](events);
			this._tooltipHandlersAdded = !remove$$1;
		},

		// @method openTooltip(latlng?: LatLng): this
		// Opens the bound tooltip at the specificed `latlng` or at the default tooltip anchor if no `latlng` is passed.
		openTooltip: function (layer, latlng) {
			if (!(layer instanceof Layer)) {
				latlng = layer;
				layer = this;
			}

			if (layer instanceof FeatureGroup) {
				for (var id in this._layers) {
					layer = this._layers[id];
					break;
				}
			}

			if (!latlng) {
				latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
			}

			if (this._tooltip && this._map) {

				// set tooltip source to this layer
				this._tooltip._source = layer;

				// update the tooltip (content, layout, ect...)
				this._tooltip.update();

				// open the tooltip on the map
				this._map.openTooltip(this._tooltip, latlng);

				// Tooltip container may not be defined if not permanent and never
				// opened.
				if (this._tooltip.options.interactive && this._tooltip._container) {
					addClass(this._tooltip._container, 'leaflet-clickable');
					this.addInteractiveTarget(this._tooltip._container);
				}
			}

			return this;
		},

		// @method closeTooltip(): this
		// Closes the tooltip bound to this layer if it is open.
		closeTooltip: function () {
			if (this._tooltip) {
				this._tooltip._close();
				if (this._tooltip.options.interactive && this._tooltip._container) {
					removeClass(this._tooltip._container, 'leaflet-clickable');
					this.removeInteractiveTarget(this._tooltip._container);
				}
			}
			return this;
		},

		// @method toggleTooltip(): this
		// Opens or closes the tooltip bound to this layer depending on its current state.
		toggleTooltip: function (target) {
			if (this._tooltip) {
				if (this._tooltip._map) {
					this.closeTooltip();
				} else {
					this.openTooltip(target);
				}
			}
			return this;
		},

		// @method isTooltipOpen(): boolean
		// Returns `true` if the tooltip bound to this layer is currently open.
		isTooltipOpen: function () {
			return this._tooltip.isOpen();
		},

		// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
		// Sets the content of the tooltip bound to this layer.
		setTooltipContent: function (content) {
			if (this._tooltip) {
				this._tooltip.setContent(content);
			}
			return this;
		},

		// @method getTooltip(): Tooltip
		// Returns the tooltip bound to this layer.
		getTooltip: function () {
			return this._tooltip;
		},

		_openTooltip: function (e) {
			var layer = e.layer || e.target;

			if (!this._tooltip || !this._map) {
				return;
			}
			this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
		},

		_moveTooltip: function (e) {
			var latlng = e.latlng, containerPoint, layerPoint;
			if (this._tooltip.options.sticky && e.originalEvent) {
				containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
				layerPoint = this._map.containerPointToLayerPoint(containerPoint);
				latlng = this._map.layerPointToLatLng(layerPoint);
			}
			this._tooltip.setLatLng(latlng);
		}
	});

	/*
	 * @class DivIcon
	 * @aka L.DivIcon
	 * @inherits Icon
	 *
	 * Represents a lightweight icon for markers that uses a simple `<div>`
	 * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
	 *
	 * @example
	 * ```js
	 * var myIcon = L.divIcon({className: 'my-div-icon'});
	 * // you can set .my-div-icon styles in CSS
	 *
	 * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
	 * ```
	 *
	 * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
	 */

	var DivIcon = Icon.extend({
		options: {
			// @section
			// @aka DivIcon options
			iconSize: [12, 12], // also can be set through CSS

			// iconAnchor: (Point),
			// popupAnchor: (Point),

			// @option html: String = ''
			// Custom HTML code to put inside the div element, empty by default.
			html: false,

			// @option bgPos: Point = [0, 0]
			// Optional relative position of the background, in pixels
			bgPos: null,

			className: 'leaflet-div-icon'
		},

		createIcon: function (oldIcon) {
			var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
			    options = this.options;

			div.innerHTML = options.html !== false ? options.html : '';

			if (options.bgPos) {
				var bgPos = toPoint(options.bgPos);
				div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
			}
			this._setIconStyles(div, 'icon');

			return div;
		},

		createShadow: function () {
			return null;
		}
	});

	// @factory L.divIcon(options: DivIcon options)
	// Creates a `DivIcon` instance with the given options.
	function divIcon(options) {
		return new DivIcon(options);
	}

	Icon.Default = IconDefault;

	/*
	 * @class GridLayer
	 * @inherits Layer
	 * @aka L.GridLayer
	 *
	 * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
	 * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
	 *
	 *
	 * @section Synchronous usage
	 * @example
	 *
	 * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
	 *
	 * ```js
	 * var CanvasLayer = L.GridLayer.extend({
	 *     createTile: function(coords){
	 *         // create a <canvas> element for drawing
	 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
	 *
	 *         // setup tile width and height according to the options
	 *         var size = this.getTileSize();
	 *         tile.width = size.x;
	 *         tile.height = size.y;
	 *
	 *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
	 *         var ctx = tile.getContext('2d');
	 *
	 *         // return the tile so it can be rendered on screen
	 *         return tile;
	 *     }
	 * });
	 * ```
	 *
	 * @section Asynchronous usage
	 * @example
	 *
	 * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
	 *
	 * ```js
	 * var CanvasLayer = L.GridLayer.extend({
	 *     createTile: function(coords, done){
	 *         var error;
	 *
	 *         // create a <canvas> element for drawing
	 *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
	 *
	 *         // setup tile width and height according to the options
	 *         var size = this.getTileSize();
	 *         tile.width = size.x;
	 *         tile.height = size.y;
	 *
	 *         // draw something asynchronously and pass the tile to the done() callback
	 *         setTimeout(function() {
	 *             done(error, tile);
	 *         }, 1000);
	 *
	 *         return tile;
	 *     }
	 * });
	 * ```
	 *
	 * @section
	 */


	var GridLayer = Layer.extend({

		// @section
		// @aka GridLayer options
		options: {
			// @option tileSize: Number|Point = 256
			// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
			tileSize: 256,

			// @option opacity: Number = 1.0
			// Opacity of the tiles. Can be used in the `createTile()` function.
			opacity: 1,

			// @option updateWhenIdle: Boolean = depends
			// If `false`, new tiles are loaded during panning, otherwise only after it (for better performance). `true` by default on mobile browsers, otherwise `false`.
			updateWhenIdle: mobile,

			// @option updateWhenZooming: Boolean = true
			// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
			updateWhenZooming: true,

			// @option updateInterval: Number = 200
			// Tiles will not update more than once every `updateInterval` milliseconds when panning.
			updateInterval: 200,

			// @option zIndex: Number = 1
			// The explicit zIndex of the tile layer.
			zIndex: 1,

			// @option bounds: LatLngBounds = undefined
			// If set, tiles will only be loaded inside the set `LatLngBounds`.
			bounds: null,

			// @option minZoom: Number = 0
			// The minimum zoom level down to which this layer will be displayed (inclusive).
			minZoom: 0,

			// @option maxZoom: Number = undefined
			// The maximum zoom level up to which this layer will be displayed (inclusive).
			maxZoom: undefined,

			// @option maxNativeZoom: Number = undefined
			// Maximum zoom number the tile source has available. If it is specified,
			// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
			// from `maxNativeZoom` level and auto-scaled.
			maxNativeZoom: undefined,

			// @option minNativeZoom: Number = undefined
			// Minimum zoom number the tile source has available. If it is specified,
			// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
			// from `minNativeZoom` level and auto-scaled.
			minNativeZoom: undefined,

			// @option noWrap: Boolean = false
			// Whether the layer is wrapped around the antimeridian. If `true`, the
			// GridLayer will only be displayed once at low zoom levels. Has no
			// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
			// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
			// tiles outside the CRS limits.
			noWrap: false,

			// @option pane: String = 'tilePane'
			// `Map pane` where the grid layer will be added.
			pane: 'tilePane',

			// @option className: String = ''
			// A custom class name to assign to the tile layer. Empty by default.
			className: '',

			// @option keepBuffer: Number = 2
			// When panning the map, keep this many rows and columns of tiles before unloading them.
			keepBuffer: 2
		},

		initialize: function (options) {
			setOptions(this, options);
		},

		onAdd: function () {
			this._initContainer();

			this._levels = {};
			this._tiles = {};

			this._resetView();
			this._update();
		},

		beforeAdd: function (map) {
			map._addZoomLimit(this);
		},

		onRemove: function (map) {
			this._removeAllTiles();
			remove(this._container);
			map._removeZoomLimit(this);
			this._container = null;
			this._tileZoom = null;
		},

		// @method bringToFront: this
		// Brings the tile layer to the top of all tile layers.
		bringToFront: function () {
			if (this._map) {
				toFront(this._container);
				this._setAutoZIndex(Math.max);
			}
			return this;
		},

		// @method bringToBack: this
		// Brings the tile layer to the bottom of all tile layers.
		bringToBack: function () {
			if (this._map) {
				toBack(this._container);
				this._setAutoZIndex(Math.min);
			}
			return this;
		},

		// @method getContainer: HTMLElement
		// Returns the HTML element that contains the tiles for this layer.
		getContainer: function () {
			return this._container;
		},

		// @method setOpacity(opacity: Number): this
		// Changes the [opacity](#gridlayer-opacity) of the grid layer.
		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			this._updateOpacity();
			return this;
		},

		// @method setZIndex(zIndex: Number): this
		// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
		setZIndex: function (zIndex) {
			this.options.zIndex = zIndex;
			this._updateZIndex();

			return this;
		},

		// @method isLoading: Boolean
		// Returns `true` if any tile in the grid layer has not finished loading.
		isLoading: function () {
			return this._loading;
		},

		// @method redraw: this
		// Causes the layer to clear all the tiles and request them again.
		redraw: function () {
			if (this._map) {
				this._removeAllTiles();
				this._update();
			}
			return this;
		},

		getEvents: function () {
			var events = {
				viewprereset: this._invalidateAll,
				viewreset: this._resetView,
				zoom: this._resetView,
				moveend: this._onMoveEnd
			};

			if (!this.options.updateWhenIdle) {
				// update tiles on move, but not more often than once per given interval
				if (!this._onMove) {
					this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
				}

				events.move = this._onMove;
			}

			if (this._zoomAnimated) {
				events.zoomanim = this._animateZoom;
			}

			return events;
		},

		// @section Extension methods
		// Layers extending `GridLayer` shall reimplement the following method.
		// @method createTile(coords: Object, done?: Function): HTMLElement
		// Called only internally, must be overriden by classes extending `GridLayer`.
		// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
		// is specified, it must be called when the tile has finished loading and drawing.
		createTile: function () {
			return document.createElement('div');
		},

		// @section
		// @method getTileSize: Point
		// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
		getTileSize: function () {
			var s = this.options.tileSize;
			return s instanceof Point ? s : new Point(s, s);
		},

		_updateZIndex: function () {
			if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
				this._container.style.zIndex = this.options.zIndex;
			}
		},

		_setAutoZIndex: function (compare) {
			// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

			var layers = this.getPane().children,
			    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

			for (var i = 0, len = layers.length, zIndex; i < len; i++) {

				zIndex = layers[i].style.zIndex;

				if (layers[i] !== this._container && zIndex) {
					edgeZIndex = compare(edgeZIndex, +zIndex);
				}
			}

			if (isFinite(edgeZIndex)) {
				this.options.zIndex = edgeZIndex + compare(-1, 1);
				this._updateZIndex();
			}
		},

		_updateOpacity: function () {
			if (!this._map) { return; }

			// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
			if (ielt9) { return; }

			setOpacity(this._container, this.options.opacity);

			var now = +new Date(),
			    nextFrame = false,
			    willPrune = false;

			for (var key in this._tiles) {
				var tile = this._tiles[key];
				if (!tile.current || !tile.loaded) { continue; }

				var fade = Math.min(1, (now - tile.loaded) / 200);

				setOpacity(tile.el, fade);
				if (fade < 1) {
					nextFrame = true;
				} else {
					if (tile.active) {
						willPrune = true;
					} else {
						this._onOpaqueTile(tile);
					}
					tile.active = true;
				}
			}

			if (willPrune && !this._noPrune) { this._pruneTiles(); }

			if (nextFrame) {
				cancelAnimFrame(this._fadeFrame);
				this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
			}
		},

		_onOpaqueTile: falseFn,

		_initContainer: function () {
			if (this._container) { return; }

			this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));
			this._updateZIndex();

			if (this.options.opacity < 1) {
				this._updateOpacity();
			}

			this.getPane().appendChild(this._container);
		},

		_updateLevels: function () {

			var zoom = this._tileZoom,
			    maxZoom = this.options.maxZoom;

			if (zoom === undefined) { return undefined; }

			for (var z in this._levels) {
				if (this._levels[z].el.children.length || z === zoom) {
					this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
					this._onUpdateLevel(z);
				} else {
					remove(this._levels[z].el);
					this._removeTilesAtZoom(z);
					this._onRemoveLevel(z);
					delete this._levels[z];
				}
			}

			var level = this._levels[zoom],
			    map = this._map;

			if (!level) {
				level = this._levels[zoom] = {};

				level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
				level.el.style.zIndex = maxZoom;

				level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
				level.zoom = zoom;

				this._setZoomTransform(level, map.getCenter(), map.getZoom());

				// force the browser to consider the newly added element for transition
				falseFn(level.el.offsetWidth);

				this._onCreateLevel(level);
			}

			this._level = level;

			return level;
		},

		_onUpdateLevel: falseFn,

		_onRemoveLevel: falseFn,

		_onCreateLevel: falseFn,

		_pruneTiles: function () {
			if (!this._map) {
				return;
			}

			var key, tile;

			var zoom = this._map.getZoom();
			if (zoom > this.options.maxZoom ||
				zoom < this.options.minZoom) {
				this._removeAllTiles();
				return;
			}

			for (key in this._tiles) {
				tile = this._tiles[key];
				tile.retain = tile.current;
			}

			for (key in this._tiles) {
				tile = this._tiles[key];
				if (tile.current && !tile.active) {
					var coords = tile.coords;
					if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
						this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
					}
				}
			}

			for (key in this._tiles) {
				if (!this._tiles[key].retain) {
					this._removeTile(key);
				}
			}
		},

		_removeTilesAtZoom: function (zoom) {
			for (var key in this._tiles) {
				if (this._tiles[key].coords.z !== zoom) {
					continue;
				}
				this._removeTile(key);
			}
		},

		_removeAllTiles: function () {
			for (var key in this._tiles) {
				this._removeTile(key);
			}
		},

		_invalidateAll: function () {
			for (var z in this._levels) {
				remove(this._levels[z].el);
				this._onRemoveLevel(z);
				delete this._levels[z];
			}
			this._removeAllTiles();

			this._tileZoom = null;
		},

		_retainParent: function (x, y, z, minZoom) {
			var x2 = Math.floor(x / 2),
			    y2 = Math.floor(y / 2),
			    z2 = z - 1,
			    coords2 = new Point(+x2, +y2);
			coords2.z = +z2;

			var key = this._tileCoordsToKey(coords2),
			    tile = this._tiles[key];

			if (tile && tile.active) {
				tile.retain = true;
				return true;

			} else if (tile && tile.loaded) {
				tile.retain = true;
			}

			if (z2 > minZoom) {
				return this._retainParent(x2, y2, z2, minZoom);
			}

			return false;
		},

		_retainChildren: function (x, y, z, maxZoom) {

			for (var i = 2 * x; i < 2 * x + 2; i++) {
				for (var j = 2 * y; j < 2 * y + 2; j++) {

					var coords = new Point(i, j);
					coords.z = z + 1;

					var key = this._tileCoordsToKey(coords),
					    tile = this._tiles[key];

					if (tile && tile.active) {
						tile.retain = true;
						continue;

					} else if (tile && tile.loaded) {
						tile.retain = true;
					}

					if (z + 1 < maxZoom) {
						this._retainChildren(i, j, z + 1, maxZoom);
					}
				}
			}
		},

		_resetView: function (e) {
			var animating = e && (e.pinch || e.flyTo);
			this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
		},

		_animateZoom: function (e) {
			this._setView(e.center, e.zoom, true, e.noUpdate);
		},

		_clampZoom: function (zoom) {
			var options = this.options;

			if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
				return options.minNativeZoom;
			}

			if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
				return options.maxNativeZoom;
			}

			return zoom;
		},

		_setView: function (center, zoom, noPrune, noUpdate) {
			var tileZoom = this._clampZoom(Math.round(zoom));
			if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
			    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
				tileZoom = undefined;
			}

			var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);

			if (!noUpdate || tileZoomChanged) {

				this._tileZoom = tileZoom;

				if (this._abortLoading) {
					this._abortLoading();
				}

				this._updateLevels();
				this._resetGrid();

				if (tileZoom !== undefined) {
					this._update(center);
				}

				if (!noPrune) {
					this._pruneTiles();
				}

				// Flag to prevent _updateOpacity from pruning tiles during
				// a zoom anim or a pinch gesture
				this._noPrune = !!noPrune;
			}

			this._setZoomTransforms(center, zoom);
		},

		_setZoomTransforms: function (center, zoom) {
			for (var i in this._levels) {
				this._setZoomTransform(this._levels[i], center, zoom);
			}
		},

		_setZoomTransform: function (level, center, zoom) {
			var scale = this._map.getZoomScale(zoom, level.zoom),
			    translate = level.origin.multiplyBy(scale)
			        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

			if (any3d) {
				setTransform(level.el, translate, scale);
			} else {
				setPosition(level.el, translate);
			}
		},

		_resetGrid: function () {
			var map = this._map,
			    crs = map.options.crs,
			    tileSize = this._tileSize = this.getTileSize(),
			    tileZoom = this._tileZoom;

			var bounds = this._map.getPixelWorldBounds(this._tileZoom);
			if (bounds) {
				this._globalTileRange = this._pxBoundsToTileRange(bounds);
			}

			this._wrapX = crs.wrapLng && !this.options.noWrap && [
				Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
				Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
			];
			this._wrapY = crs.wrapLat && !this.options.noWrap && [
				Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
				Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
			];
		},

		_onMoveEnd: function () {
			if (!this._map || this._map._animatingZoom) { return; }

			this._update();
		},

		_getTiledPixelBounds: function (center) {
			var map = this._map,
			    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
			    scale = map.getZoomScale(mapZoom, this._tileZoom),
			    pixelCenter = map.project(center, this._tileZoom).floor(),
			    halfSize = map.getSize().divideBy(scale * 2);

			return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
		},

		// Private method to load tiles in the grid's active zoom level according to map bounds
		_update: function (center) {
			var map = this._map;
			if (!map) { return; }
			var zoom = this._clampZoom(map.getZoom());

			if (center === undefined) { center = map.getCenter(); }
			if (this._tileZoom === undefined) { return; }	// if out of minzoom/maxzoom

			var pixelBounds = this._getTiledPixelBounds(center),
			    tileRange = this._pxBoundsToTileRange(pixelBounds),
			    tileCenter = tileRange.getCenter(),
			    queue = [],
			    margin = this.options.keepBuffer,
			    noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),
			                              tileRange.getTopRight().add([margin, -margin]));

			// Sanity check: panic if the tile range contains Infinity somewhere.
			if (!(isFinite(tileRange.min.x) &&
			      isFinite(tileRange.min.y) &&
			      isFinite(tileRange.max.x) &&
			      isFinite(tileRange.max.y))) { throw new Error('Attempted to load an infinite number of tiles'); }

			for (var key in this._tiles) {
				var c = this._tiles[key].coords;
				if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
					this._tiles[key].current = false;
				}
			}

			// _update just loads more tiles. If the tile zoom level differs too much
			// from the map's, let _setView reset levels and prune old tiles.
			if (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }

			// create a queue of coordinates to load tiles from
			for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
				for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
					var coords = new Point(i, j);
					coords.z = this._tileZoom;

					if (!this._isValidTile(coords)) { continue; }

					if (!this._tiles[this._tileCoordsToKey(coords)]) {
						queue.push(coords);
					}
				}
			}

			// sort tile queue to load tiles in order of their distance to center
			queue.sort(function (a, b) {
				return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
			});

			if (queue.length !== 0) {
				// if it's the first batch of tiles to load
				if (!this._loading) {
					this._loading = true;
					// @event loading: Event
					// Fired when the grid layer starts loading tiles.
					this.fire('loading');
				}

				// create DOM fragment to append tiles in one batch
				var fragment = document.createDocumentFragment();

				for (i = 0; i < queue.length; i++) {
					this._addTile(queue[i], fragment);
				}

				this._level.el.appendChild(fragment);
			}
		},

		_isValidTile: function (coords) {
			var crs = this._map.options.crs;

			if (!crs.infinite) {
				// don't load tile if it's out of bounds and not wrapped
				var bounds = this._globalTileRange;
				if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
				    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }
			}

			if (!this.options.bounds) { return true; }

			// don't load tile if it doesn't intersect the bounds in options
			var tileBounds = this._tileCoordsToBounds(coords);
			return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
		},

		_keyToBounds: function (key) {
			return this._tileCoordsToBounds(this._keyToTileCoords(key));
		},

		// converts tile coordinates to its geographical bounds
		_tileCoordsToBounds: function (coords) {

			var map = this._map,
			    tileSize = this.getTileSize(),

			    nwPoint = coords.scaleBy(tileSize),
			    sePoint = nwPoint.add(tileSize),

			    nw = map.unproject(nwPoint, coords.z),
			    se = map.unproject(sePoint, coords.z),
			    bounds = new LatLngBounds(nw, se);

			if (!this.options.noWrap) {
				map.wrapLatLngBounds(bounds);
			}

			return bounds;
		},

		// converts tile coordinates to key for the tile cache
		_tileCoordsToKey: function (coords) {
			return coords.x + ':' + coords.y + ':' + coords.z;
		},

		// converts tile cache key to coordinates
		_keyToTileCoords: function (key) {
			var k = key.split(':'),
			    coords = new Point(+k[0], +k[1]);
			coords.z = +k[2];
			return coords;
		},

		_removeTile: function (key) {
			var tile = this._tiles[key];
			if (!tile) { return; }

			remove(tile.el);

			delete this._tiles[key];

			// @event tileunload: TileEvent
			// Fired when a tile is removed (e.g. when a tile goes off the screen).
			this.fire('tileunload', {
				tile: tile.el,
				coords: this._keyToTileCoords(key)
			});
		},

		_initTile: function (tile) {
			addClass(tile, 'leaflet-tile');

			var tileSize = this.getTileSize();
			tile.style.width = tileSize.x + 'px';
			tile.style.height = tileSize.y + 'px';

			tile.onselectstart = falseFn;
			tile.onmousemove = falseFn;

			// update opacity on tiles in IE7-8 because of filter inheritance problems
			if (ielt9 && this.options.opacity < 1) {
				setOpacity(tile, this.options.opacity);
			}

			// without this hack, tiles disappear after zoom on Chrome for Android
			// https://github.com/Leaflet/Leaflet/issues/2078
			if (android && !android23) {
				tile.style.WebkitBackfaceVisibility = 'hidden';
			}
		},

		_addTile: function (coords, container) {
			var tilePos = this._getTilePos(coords),
			    key = this._tileCoordsToKey(coords);

			var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

			this._initTile(tile);

			// if createTile is defined with a second argument ("done" callback),
			// we know that tile is async and will be ready later; otherwise
			if (this.createTile.length < 2) {
				// mark tile as ready, but delay one frame for opacity animation to happen
				requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
			}

			setPosition(tile, tilePos);

			// save tile in cache
			this._tiles[key] = {
				el: tile,
				coords: coords,
				current: true
			};

			container.appendChild(tile);
			// @event tileloadstart: TileEvent
			// Fired when a tile is requested and starts loading.
			this.fire('tileloadstart', {
				tile: tile,
				coords: coords
			});
		},

		_tileReady: function (coords, err, tile) {
			if (!this._map) { return; }

			if (err) {
				// @event tileerror: TileErrorEvent
				// Fired when there is an error loading a tile.
				this.fire('tileerror', {
					error: err,
					tile: tile,
					coords: coords
				});
			}

			var key = this._tileCoordsToKey(coords);

			tile = this._tiles[key];
			if (!tile) { return; }

			tile.loaded = +new Date();
			if (this._map._fadeAnimated) {
				setOpacity(tile.el, 0);
				cancelAnimFrame(this._fadeFrame);
				this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
			} else {
				tile.active = true;
				this._pruneTiles();
			}

			if (!err) {
				addClass(tile.el, 'leaflet-tile-loaded');

				// @event tileload: TileEvent
				// Fired when a tile loads.
				this.fire('tileload', {
					tile: tile.el,
					coords: coords
				});
			}

			if (this._noTilesToLoad()) {
				this._loading = false;
				// @event load: Event
				// Fired when the grid layer loaded all visible tiles.
				this.fire('load');

				if (ielt9 || !this._map._fadeAnimated) {
					requestAnimFrame(this._pruneTiles, this);
				} else {
					// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
					// to trigger a pruning.
					setTimeout(bind(this._pruneTiles, this), 250);
				}
			}
		},

		_getTilePos: function (coords) {
			return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
		},

		_wrapCoords: function (coords) {
			var newCoords = new Point(
				this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
				this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
			newCoords.z = coords.z;
			return newCoords;
		},

		_pxBoundsToTileRange: function (bounds) {
			var tileSize = this.getTileSize();
			return new Bounds(
				bounds.min.unscaleBy(tileSize).floor(),
				bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
		},

		_noTilesToLoad: function () {
			for (var key in this._tiles) {
				if (!this._tiles[key].loaded) { return false; }
			}
			return true;
		}
	});

	// @factory L.gridLayer(options?: GridLayer options)
	// Creates a new instance of GridLayer with the supplied options.
	function gridLayer(options) {
		return new GridLayer(options);
	}

	/*
	 * @class TileLayer
	 * @inherits GridLayer
	 * @aka L.TileLayer
	 * Used to load and display tile layers on the map. Extends `GridLayer`.
	 *
	 * @example
	 *
	 * ```js
	 * L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
	 * ```
	 *
	 * @section URL template
	 * @example
	 *
	 * A string of the following form:
	 *
	 * ```
	 * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
	 * ```
	 *
	 * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add @2x to the URL to load retina tiles.
	 *
	 * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
	 *
	 * ```
	 * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
	 * ```
	 */


	var TileLayer = GridLayer.extend({

		// @section
		// @aka TileLayer options
		options: {
			// @option minZoom: Number = 0
			// The minimum zoom level down to which this layer will be displayed (inclusive).
			minZoom: 0,

			// @option maxZoom: Number = 18
			// The maximum zoom level up to which this layer will be displayed (inclusive).
			maxZoom: 18,

			// @option subdomains: String|String[] = 'abc'
			// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
			subdomains: 'abc',

			// @option errorTileUrl: String = ''
			// URL to the tile image to show in place of the tile that failed to load.
			errorTileUrl: '',

			// @option zoomOffset: Number = 0
			// The zoom number used in tile URLs will be offset with this value.
			zoomOffset: 0,

			// @option tms: Boolean = false
			// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
			tms: false,

			// @option zoomReverse: Boolean = false
			// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
			zoomReverse: false,

			// @option detectRetina: Boolean = false
			// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
			detectRetina: false,

			// @option crossOrigin: Boolean = false
			// If true, all tiles will have their crossOrigin attribute set to ''. This is needed if you want to access tile pixel data.
			crossOrigin: false
		},

		initialize: function (url, options) {

			this._url = url;

			options = setOptions(this, options);

			// detecting retina displays, adjusting tileSize and zoom levels
			if (options.detectRetina && retina && options.maxZoom > 0) {

				options.tileSize = Math.floor(options.tileSize / 2);

				if (!options.zoomReverse) {
					options.zoomOffset++;
					options.maxZoom--;
				} else {
					options.zoomOffset--;
					options.minZoom++;
				}

				options.minZoom = Math.max(0, options.minZoom);
			}

			if (typeof options.subdomains === 'string') {
				options.subdomains = options.subdomains.split('');
			}

			// for https://github.com/Leaflet/Leaflet/issues/137
			if (!android) {
				this.on('tileunload', this._onTileRemove);
			}
		},

		// @method setUrl(url: String, noRedraw?: Boolean): this
		// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
		setUrl: function (url, noRedraw) {
			this._url = url;

			if (!noRedraw) {
				this.redraw();
			}
			return this;
		},

		// @method createTile(coords: Object, done?: Function): HTMLElement
		// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
		// to return an `<img>` HTML element with the appropiate image URL given `coords`. The `done`
		// callback is called when the tile has been loaded.
		createTile: function (coords, done) {
			var tile = document.createElement('img');

			on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
			on(tile, 'error', bind(this._tileOnError, this, done, tile));

			if (this.options.crossOrigin) {
				tile.crossOrigin = '';
			}

			/*
			 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
			 http://www.w3.org/TR/WCAG20-TECHS/H67
			*/
			tile.alt = '';

			/*
			 Set role="presentation" to force screen readers to ignore this
			 https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
			*/
			tile.setAttribute('role', 'presentation');

			tile.src = this.getTileUrl(coords);

			return tile;
		},

		// @section Extension methods
		// @uninheritable
		// Layers extending `TileLayer` might reimplement the following method.
		// @method getTileUrl(coords: Object): String
		// Called only internally, returns the URL for a tile given its coordinates.
		// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
		getTileUrl: function (coords) {
			var data = {
				r: retina ? '@2x' : '',
				s: this._getSubdomain(coords),
				x: coords.x,
				y: coords.y,
				z: this._getZoomForUrl()
			};
			if (this._map && !this._map.options.crs.infinite) {
				var invertedY = this._globalTileRange.max.y - coords.y;
				if (this.options.tms) {
					data['y'] = invertedY;
				}
				data['-y'] = invertedY;
			}

			return template(this._url, extend(data, this.options));
		},

		_tileOnLoad: function (done, tile) {
			// For https://github.com/Leaflet/Leaflet/issues/3332
			if (ielt9) {
				setTimeout(bind(done, this, null, tile), 0);
			} else {
				done(null, tile);
			}
		},

		_tileOnError: function (done, tile, e) {
			var errorUrl = this.options.errorTileUrl;
			if (errorUrl && tile.src !== errorUrl) {
				tile.src = errorUrl;
			}
			done(e, tile);
		},

		_onTileRemove: function (e) {
			e.tile.onload = null;
		},

		_getZoomForUrl: function () {
			var zoom = this._tileZoom,
			maxZoom = this.options.maxZoom,
			zoomReverse = this.options.zoomReverse,
			zoomOffset = this.options.zoomOffset;

			if (zoomReverse) {
				zoom = maxZoom - zoom;
			}

			return zoom + zoomOffset;
		},

		_getSubdomain: function (tilePoint) {
			var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
			return this.options.subdomains[index];
		},

		// stops loading all tiles in the background layer
		_abortLoading: function () {
			var i, tile;
			for (i in this._tiles) {
				if (this._tiles[i].coords.z !== this._tileZoom) {
					tile = this._tiles[i].el;

					tile.onload = falseFn;
					tile.onerror = falseFn;

					if (!tile.complete) {
						tile.src = emptyImageUrl;
						remove(tile);
					}
				}
			}
		}
	});


	// @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
	// Instantiates a tile layer object given a `URL template` and optionally an options object.

	function tileLayer(url, options) {
		return new TileLayer(url, options);
	}

	/*
	 * @class TileLayer.WMS
	 * @inherits TileLayer
	 * @aka L.TileLayer.WMS
	 * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
	 *
	 * @example
	 *
	 * ```js
	 * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
	 * 	layers: 'nexrad-n0r-900913',
	 * 	format: 'image/png',
	 * 	transparent: true,
	 * 	attribution: "Weather data © 2012 IEM Nexrad"
	 * });
	 * ```
	 */

	var TileLayerWMS = TileLayer.extend({

		// @section
		// @aka TileLayer.WMS options
		// If any custom options not documented here are used, they will be sent to the
		// WMS server as extra parameters in each request URL. This can be useful for
		// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
		defaultWmsParams: {
			service: 'WMS',
			request: 'GetMap',

			// @option layers: String = ''
			// **(required)** Comma-separated list of WMS layers to show.
			layers: '',

			// @option styles: String = ''
			// Comma-separated list of WMS styles.
			styles: '',

			// @option format: String = 'image/jpeg'
			// WMS image format (use `'image/png'` for layers with transparency).
			format: 'image/jpeg',

			// @option transparent: Boolean = false
			// If `true`, the WMS service will return images with transparency.
			transparent: false,

			// @option version: String = '1.1.1'
			// Version of the WMS service to use
			version: '1.1.1'
		},

		options: {
			// @option crs: CRS = null
			// Coordinate Reference System to use for the WMS requests, defaults to
			// map CRS. Don't change this if you're not sure what it means.
			crs: null,

			// @option uppercase: Boolean = false
			// If `true`, WMS request parameter keys will be uppercase.
			uppercase: false
		},

		initialize: function (url, options) {

			this._url = url;

			var wmsParams = extend({}, this.defaultWmsParams);

			// all keys that are not TileLayer options go to WMS params
			for (var i in options) {
				if (!(i in this.options)) {
					wmsParams[i] = options[i];
				}
			}

			options = setOptions(this, options);

			wmsParams.width = wmsParams.height = options.tileSize * (options.detectRetina && retina ? 2 : 1);

			this.wmsParams = wmsParams;
		},

		onAdd: function (map) {

			this._crs = this.options.crs || map.options.crs;
			this._wmsVersion = parseFloat(this.wmsParams.version);

			var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
			this.wmsParams[projectionKey] = this._crs.code;

			TileLayer.prototype.onAdd.call(this, map);
		},

		getTileUrl: function (coords) {

			var tileBounds = this._tileCoordsToBounds(coords),
			    nw = this._crs.project(tileBounds.getNorthWest()),
			    se = this._crs.project(tileBounds.getSouthEast()),

			    bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ?
				    [se.y, nw.x, nw.y, se.x] :
				    [nw.x, se.y, se.x, nw.y]).join(','),

			    url = TileLayer.prototype.getTileUrl.call(this, coords);

			return url +
				getParamString(this.wmsParams, url, this.options.uppercase) +
				(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
		},

		// @method setParams(params: Object, noRedraw?: Boolean): this
		// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
		setParams: function (params, noRedraw) {

			extend(this.wmsParams, params);

			if (!noRedraw) {
				this.redraw();
			}

			return this;
		}
	});


	// @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
	// Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
	function tileLayerWMS(url, options) {
		return new TileLayerWMS(url, options);
	}

	TileLayer.WMS = TileLayerWMS;
	tileLayer.wms = tileLayerWMS;

	/*
	 * @class Renderer
	 * @inherits Layer
	 * @aka L.Renderer
	 *
	 * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
	 * DOM container of the renderer, its bounds, and its zoom animation.
	 *
	 * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
	 * itself can be added or removed to the map. All paths use a renderer, which can
	 * be implicit (the map will decide the type of renderer and use it automatically)
	 * or explicit (using the [`renderer`](#path-renderer) option of the path).
	 *
	 * Do not use this class directly, use `SVG` and `Canvas` instead.
	 *
	 * @event update: Event
	 * Fired when the renderer updates its bounds, center and zoom, for example when
	 * its map has moved
	 */

	var Renderer = Layer.extend({

		// @section
		// @aka Renderer options
		options: {
			// @option padding: Number = 0.1
			// How much to extend the clip area around the map view (relative to its size)
			// e.g. 0.1 would be 10% of map view in each direction
			padding: 0.1
		},

		initialize: function (options) {
			setOptions(this, options);
			stamp(this);
			this._layers = this._layers || {};
		},

		onAdd: function () {
			if (!this._container) {
				this._initContainer(); // defined by renderer implementations

				if (this._zoomAnimated) {
					addClass(this._container, 'leaflet-zoom-animated');
				}
			}

			this.getPane().appendChild(this._container);
			this._update();
			this.on('update', this._updatePaths, this);
		},

		onRemove: function () {
			this.off('update', this._updatePaths, this);
			this._destroyContainer();
		},

		getEvents: function () {
			var events = {
				viewreset: this._reset,
				zoom: this._onZoom,
				moveend: this._update,
				zoomend: this._onZoomEnd
			};
			if (this._zoomAnimated) {
				events.zoomanim = this._onAnimZoom;
			}
			return events;
		},

		_onAnimZoom: function (ev) {
			this._updateTransform(ev.center, ev.zoom);
		},

		_onZoom: function () {
			this._updateTransform(this._map.getCenter(), this._map.getZoom());
		},

		_updateTransform: function (center, zoom) {
			var scale = this._map.getZoomScale(zoom, this._zoom),
			    position = getPosition(this._container),
			    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
			    currentCenterPoint = this._map.project(this._center, zoom),
			    destCenterPoint = this._map.project(center, zoom),
			    centerOffset = destCenterPoint.subtract(currentCenterPoint),

			    topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

			if (any3d) {
				setTransform(this._container, topLeftOffset, scale);
			} else {
				setPosition(this._container, topLeftOffset);
			}
		},

		_reset: function () {
			this._update();
			this._updateTransform(this._center, this._zoom);

			for (var id in this._layers) {
				this._layers[id]._reset();
			}
		},

		_onZoomEnd: function () {
			for (var id in this._layers) {
				this._layers[id]._project();
			}
		},

		_updatePaths: function () {
			for (var id in this._layers) {
				this._layers[id]._update();
			}
		},

		_update: function () {
			// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
			// Subclasses are responsible of firing the 'update' event.
			var p = this.options.padding,
			    size = this._map.getSize(),
			    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

			this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());

			this._center = this._map.getCenter();
			this._zoom = this._map.getZoom();
		}
	});

	/*
	 * @class Canvas
	 * @inherits Renderer
	 * @aka L.Canvas
	 *
	 * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
	 * Inherits `Renderer`.
	 *
	 * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
	 * available in all web browsers, notably IE8, and overlapping geometries might
	 * not display properly in some edge cases.
	 *
	 * @example
	 *
	 * Use Canvas by default for all paths in the map:
	 *
	 * ```js
	 * var map = L.map('map', {
	 * 	renderer: L.canvas()
	 * });
	 * ```
	 *
	 * Use a Canvas renderer with extra padding for specific vector geometries:
	 *
	 * ```js
	 * var map = L.map('map');
	 * var myRenderer = L.canvas({ padding: 0.5 });
	 * var line = L.polyline( coordinates, { renderer: myRenderer } );
	 * var circle = L.circle( center, { renderer: myRenderer } );
	 * ```
	 */

	var Canvas = Renderer.extend({
		getEvents: function () {
			var events = Renderer.prototype.getEvents.call(this);
			events.viewprereset = this._onViewPreReset;
			return events;
		},

		_onViewPreReset: function () {
			// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
			this._postponeUpdatePaths = true;
		},

		onAdd: function () {
			Renderer.prototype.onAdd.call(this);

			// Redraw vectors since canvas is cleared upon removal,
			// in case of removing the renderer itself from the map.
			this._draw();
		},

		_initContainer: function () {
			var container = this._container = document.createElement('canvas');

			on(container, 'mousemove', throttle(this._onMouseMove, 32, this), this);
			on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
			on(container, 'mouseout', this._handleMouseOut, this);

			this._ctx = container.getContext('2d');
		},

		_destroyContainer: function () {
			delete this._ctx;
			remove(this._container);
			off(this._container);
			delete this._container;
		},

		_updatePaths: function () {
			if (this._postponeUpdatePaths) { return; }

			var layer;
			this._redrawBounds = null;
			for (var id in this._layers) {
				layer = this._layers[id];
				layer._update();
			}
			this._redraw();
		},

		_update: function () {
			if (this._map._animatingZoom && this._bounds) { return; }

			this._drawnLayers = {};

			Renderer.prototype._update.call(this);

			var b = this._bounds,
			    container = this._container,
			    size = b.getSize(),
			    m = retina ? 2 : 1;

			setPosition(container, b.min);

			// set canvas size (also clearing it); use double size on retina
			container.width = m * size.x;
			container.height = m * size.y;
			container.style.width = size.x + 'px';
			container.style.height = size.y + 'px';

			if (retina) {
				this._ctx.scale(2, 2);
			}

			// translate so we use the same path coordinates after canvas element moves
			this._ctx.translate(-b.min.x, -b.min.y);

			// Tell paths to redraw themselves
			this.fire('update');
		},

		_reset: function () {
			Renderer.prototype._reset.call(this);

			if (this._postponeUpdatePaths) {
				this._postponeUpdatePaths = false;
				this._updatePaths();
			}
		},

		_initPath: function (layer) {
			this._updateDashArray(layer);
			this._layers[stamp(layer)] = layer;

			var order = layer._order = {
				layer: layer,
				prev: this._drawLast,
				next: null
			};
			if (this._drawLast) { this._drawLast.next = order; }
			this._drawLast = order;
			this._drawFirst = this._drawFirst || this._drawLast;
		},

		_addPath: function (layer) {
			this._requestRedraw(layer);
		},

		_removePath: function (layer) {
			var order = layer._order;
			var next = order.next;
			var prev = order.prev;

			if (next) {
				next.prev = prev;
			} else {
				this._drawLast = prev;
			}
			if (prev) {
				prev.next = next;
			} else {
				this._drawFirst = next;
			}

			delete layer._order;

			delete this._layers[L.stamp(layer)];

			this._requestRedraw(layer);
		},

		_updatePath: function (layer) {
			// Redraw the union of the layer's old pixel
			// bounds and the new pixel bounds.
			this._extendRedrawBounds(layer);
			layer._project();
			layer._update();
			// The redraw will extend the redraw bounds
			// with the new pixel bounds.
			this._requestRedraw(layer);
		},

		_updateStyle: function (layer) {
			this._updateDashArray(layer);
			this._requestRedraw(layer);
		},

		_updateDashArray: function (layer) {
			if (layer.options.dashArray) {
				var parts = layer.options.dashArray.split(','),
				    dashArray = [],
				    i;
				for (i = 0; i < parts.length; i++) {
					dashArray.push(Number(parts[i]));
				}
				layer.options._dashArray = dashArray;
			}
		},

		_requestRedraw: function (layer) {
			if (!this._map) { return; }

			this._extendRedrawBounds(layer);
			this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
		},

		_extendRedrawBounds: function (layer) {
			if (layer._pxBounds) {
				var padding = (layer.options.weight || 0) + 1;
				this._redrawBounds = this._redrawBounds || new Bounds();
				this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
				this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
			}
		},

		_redraw: function () {
			this._redrawRequest = null;

			if (this._redrawBounds) {
				this._redrawBounds.min._floor();
				this._redrawBounds.max._ceil();
			}

			this._clear(); // clear layers in redraw bounds
			this._draw(); // draw layers

			this._redrawBounds = null;
		},

		_clear: function () {
			var bounds = this._redrawBounds;
			if (bounds) {
				var size = bounds.getSize();
				this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
			} else {
				this._ctx.clearRect(0, 0, this._container.width, this._container.height);
			}
		},

		_draw: function () {
			var layer, bounds = this._redrawBounds;
			this._ctx.save();
			if (bounds) {
				var size = bounds.getSize();
				this._ctx.beginPath();
				this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
				this._ctx.clip();
			}

			this._drawing = true;

			for (var order = this._drawFirst; order; order = order.next) {
				layer = order.layer;
				if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
					layer._updatePath();
				}
			}

			this._drawing = false;

			this._ctx.restore();  // Restore state before clipping.
		},

		_updatePoly: function (layer, closed) {
			if (!this._drawing) { return; }

			var i, j, len2, p,
			    parts = layer._parts,
			    len = parts.length,
			    ctx = this._ctx;

			if (!len) { return; }

			this._drawnLayers[layer._leaflet_id] = layer;

			ctx.beginPath();

			for (i = 0; i < len; i++) {
				for (j = 0, len2 = parts[i].length; j < len2; j++) {
					p = parts[i][j];
					ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
				}
				if (closed) {
					ctx.closePath();
				}
			}

			this._fillStroke(ctx, layer);

			// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
		},

		_updateCircle: function (layer) {

			if (!this._drawing || layer._empty()) { return; }

			var p = layer._point,
			    ctx = this._ctx,
			    r = layer._radius,
			    s = (layer._radiusY || r) / r;

			this._drawnLayers[layer._leaflet_id] = layer;

			if (s !== 1) {
				ctx.save();
				ctx.scale(1, s);
			}

			ctx.beginPath();
			ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

			if (s !== 1) {
				ctx.restore();
			}

			this._fillStroke(ctx, layer);
		},

		_fillStroke: function (ctx, layer) {
			var options = layer.options;

			if (options.fill) {
				ctx.globalAlpha = options.fillOpacity;
				ctx.fillStyle = options.fillColor || options.color;
				ctx.fill(options.fillRule || 'evenodd');
			}

			if (options.stroke && options.weight !== 0) {
				if (ctx.setLineDash) {
					ctx.setLineDash(layer.options && layer.options._dashArray || []);
				}
				ctx.globalAlpha = options.opacity;
				ctx.lineWidth = options.weight;
				ctx.strokeStyle = options.color;
				ctx.lineCap = options.lineCap;
				ctx.lineJoin = options.lineJoin;
				ctx.stroke();
			}
		},

		// Canvas obviously doesn't have mouse events for individual drawn objects,
		// so we emulate that by calculating what's under the mouse on mousemove/click manually

		_onClick: function (e) {
			var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;

			for (var order = this._drawFirst; order; order = order.next) {
				layer = order.layer;
				if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
					clickedLayer = layer;
				}
			}
			if (clickedLayer)  {
				fakeStop(e);
				this._fireEvent([clickedLayer], e);
			}
		},

		_onMouseMove: function (e) {
			if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

			var point = this._map.mouseEventToLayerPoint(e);
			this._handleMouseHover(e, point);
		},


		_handleMouseOut: function (e) {
			var layer = this._hoveredLayer;
			if (layer) {
				// if we're leaving the layer, fire mouseout
				removeClass(this._container, 'leaflet-interactive');
				this._fireEvent([layer], e, 'mouseout');
				this._hoveredLayer = null;
			}
		},

		_handleMouseHover: function (e, point) {
			var layer, candidateHoveredLayer;

			for (var order = this._drawFirst; order; order = order.next) {
				layer = order.layer;
				if (layer.options.interactive && layer._containsPoint(point)) {
					candidateHoveredLayer = layer;
				}
			}

			if (candidateHoveredLayer !== this._hoveredLayer) {
				this._handleMouseOut(e);

				if (candidateHoveredLayer) {
					addClass(this._container, 'leaflet-interactive'); // change cursor
					this._fireEvent([candidateHoveredLayer], e, 'mouseover');
					this._hoveredLayer = candidateHoveredLayer;
				}
			}

			if (this._hoveredLayer) {
				this._fireEvent([this._hoveredLayer], e);
			}
		},

		_fireEvent: function (layers, e, type) {
			this._map._fireDOMEvent(e, type || e.type, layers);
		},

		_bringToFront: function (layer) {
			var order = layer._order;
			var next = order.next;
			var prev = order.prev;

			if (next) {
				next.prev = prev;
			} else {
				// Already last
				return;
			}
			if (prev) {
				prev.next = next;
			} else if (next) {
				// Update first entry unless this is the
				// signle entry
				this._drawFirst = next;
			}

			order.prev = this._drawLast;
			this._drawLast.next = order;

			order.next = null;
			this._drawLast = order;

			this._requestRedraw(layer);
		},

		_bringToBack: function (layer) {
			var order = layer._order;
			var next = order.next;
			var prev = order.prev;

			if (prev) {
				prev.next = next;
			} else {
				// Already first
				return;
			}
			if (next) {
				next.prev = prev;
			} else if (prev) {
				// Update last entry unless this is the
				// signle entry
				this._drawLast = prev;
			}

			order.prev = null;

			order.next = this._drawFirst;
			this._drawFirst.prev = order;
			this._drawFirst = order;

			this._requestRedraw(layer);
		}
	});

	// @factory L.canvas(options?: Renderer options)
	// Creates a Canvas renderer with the given options.
	function canvas$1(options) {
		return canvas ? new Canvas(options) : null;
	}

	/*
	 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
	 */


	var vmlCreate = (function () {
		try {
			document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
			return function (name) {
				return document.createElement('<lvml:' + name + ' class="lvml">');
			};
		} catch (e) {
			return function (name) {
				return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
			};
		}
	})();


	/*
	 * @class SVG
	 *
	 * Although SVG is not available on IE7 and IE8, these browsers support [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language), and the SVG renderer will fall back to VML in this case.
	 *
	 * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
	 * with old versions of Internet Explorer.
	 */

	// mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
	var vmlMixin = {

		_initContainer: function () {
			this._container = create$1('div', 'leaflet-vml-container');
		},

		_update: function () {
			if (this._map._animatingZoom) { return; }
			Renderer.prototype._update.call(this);
			this.fire('update');
		},

		_initPath: function (layer) {
			var container = layer._container = vmlCreate('shape');

			addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

			container.coordsize = '1 1';

			layer._path = vmlCreate('path');
			container.appendChild(layer._path);

			this._updateStyle(layer);
			this._layers[stamp(layer)] = layer;
		},

		_addPath: function (layer) {
			var container = layer._container;
			this._container.appendChild(container);

			if (layer.options.interactive) {
				layer.addInteractiveTarget(container);
			}
		},

		_removePath: function (layer) {
			var container = layer._container;
			remove(container);
			layer.removeInteractiveTarget(container);
			delete this._layers[stamp(layer)];
		},

		_updateStyle: function (layer) {
			var stroke = layer._stroke,
			    fill = layer._fill,
			    options = layer.options,
			    container = layer._container;

			container.stroked = !!options.stroke;
			container.filled = !!options.fill;

			if (options.stroke) {
				if (!stroke) {
					stroke = layer._stroke = vmlCreate('stroke');
				}
				container.appendChild(stroke);
				stroke.weight = options.weight + 'px';
				stroke.color = options.color;
				stroke.opacity = options.opacity;

				if (options.dashArray) {
					stroke.dashStyle = isArray(options.dashArray) ?
					    options.dashArray.join(' ') :
					    options.dashArray.replace(/( *, *)/g, ' ');
				} else {
					stroke.dashStyle = '';
				}
				stroke.endcap = options.lineCap.replace('butt', 'flat');
				stroke.joinstyle = options.lineJoin;

			} else if (stroke) {
				container.removeChild(stroke);
				layer._stroke = null;
			}

			if (options.fill) {
				if (!fill) {
					fill = layer._fill = vmlCreate('fill');
				}
				container.appendChild(fill);
				fill.color = options.fillColor || options.color;
				fill.opacity = options.fillOpacity;

			} else if (fill) {
				container.removeChild(fill);
				layer._fill = null;
			}
		},

		_updateCircle: function (layer) {
			var p = layer._point.round(),
			    r = Math.round(layer._radius),
			    r2 = Math.round(layer._radiusY || r);

			this._setPath(layer, layer._empty() ? 'M0 0' :
					'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
		},

		_setPath: function (layer, path) {
			layer._path.v = path;
		},

		_bringToFront: function (layer) {
			toFront(layer._container);
		},

		_bringToBack: function (layer) {
			toBack(layer._container);
		}
	};

	var create$2 = vml ? vmlCreate : svgCreate;

	/*
	 * @class SVG
	 * @inherits Renderer
	 * @aka L.SVG
	 *
	 * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
	 * Inherits `Renderer`.
	 *
	 * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
	 * available in all web browsers, notably Android 2.x and 3.x.
	 *
	 * Although SVG is not available on IE7 and IE8, these browsers support
	 * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
	 * (a now deprecated technology), and the SVG renderer will fall back to VML in
	 * this case.
	 *
	 * @example
	 *
	 * Use SVG by default for all paths in the map:
	 *
	 * ```js
	 * var map = L.map('map', {
	 * 	renderer: L.svg()
	 * });
	 * ```
	 *
	 * Use a SVG renderer with extra padding for specific vector geometries:
	 *
	 * ```js
	 * var map = L.map('map');
	 * var myRenderer = L.svg({ padding: 0.5 });
	 * var line = L.polyline( coordinates, { renderer: myRenderer } );
	 * var circle = L.circle( center, { renderer: myRenderer } );
	 * ```
	 */

	var SVG = Renderer.extend({

		getEvents: function () {
			var events = Renderer.prototype.getEvents.call(this);
			events.zoomstart = this._onZoomStart;
			return events;
		},

		_initContainer: function () {
			this._container = create$2('svg');

			// makes it possible to click through svg root; we'll reset it back in individual paths
			this._container.setAttribute('pointer-events', 'none');

			this._rootGroup = create$2('g');
			this._container.appendChild(this._rootGroup);
		},

		_destroyContainer: function () {
			remove(this._container);
			off(this._container);
			delete this._container;
			delete this._rootGroup;
		},

		_onZoomStart: function () {
			// Drag-then-pinch interactions might mess up the center and zoom.
			// In this case, the easiest way to prevent this is re-do the renderer
			//   bounds and padding when the zooming starts.
			this._update();
		},

		_update: function () {
			if (this._map._animatingZoom && this._bounds) { return; }

			Renderer.prototype._update.call(this);

			var b = this._bounds,
			    size = b.getSize(),
			    container = this._container;

			// set size of svg-container if changed
			if (!this._svgSize || !this._svgSize.equals(size)) {
				this._svgSize = size;
				container.setAttribute('width', size.x);
				container.setAttribute('height', size.y);
			}

			// movement: update container viewBox so that we don't have to change coordinates of individual layers
			setPosition(container, b.min);
			container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));

			this.fire('update');
		},

		// methods below are called by vector layers implementations

		_initPath: function (layer) {
			var path = layer._path = create$2('path');

			// @namespace Path
			// @option className: String = null
			// Custom class name set on an element. Only for SVG renderer.
			if (layer.options.className) {
				addClass(path, layer.options.className);
			}

			if (layer.options.interactive) {
				addClass(path, 'leaflet-interactive');
			}

			this._updateStyle(layer);
			this._layers[stamp(layer)] = layer;
		},

		_addPath: function (layer) {
			if (!this._rootGroup) { this._initContainer(); }
			this._rootGroup.appendChild(layer._path);
			layer.addInteractiveTarget(layer._path);
		},

		_removePath: function (layer) {
			remove(layer._path);
			layer.removeInteractiveTarget(layer._path);
			delete this._layers[stamp(layer)];
		},

		_updatePath: function (layer) {
			layer._project();
			layer._update();
		},

		_updateStyle: function (layer) {
			var path = layer._path,
			    options = layer.options;

			if (!path) { return; }

			if (options.stroke) {
				path.setAttribute('stroke', options.color);
				path.setAttribute('stroke-opacity', options.opacity);
				path.setAttribute('stroke-width', options.weight);
				path.setAttribute('stroke-linecap', options.lineCap);
				path.setAttribute('stroke-linejoin', options.lineJoin);

				if (options.dashArray) {
					path.setAttribute('stroke-dasharray', options.dashArray);
				} else {
					path.removeAttribute('stroke-dasharray');
				}

				if (options.dashOffset) {
					path.setAttribute('stroke-dashoffset', options.dashOffset);
				} else {
					path.removeAttribute('stroke-dashoffset');
				}
			} else {
				path.setAttribute('stroke', 'none');
			}

			if (options.fill) {
				path.setAttribute('fill', options.fillColor || options.color);
				path.setAttribute('fill-opacity', options.fillOpacity);
				path.setAttribute('fill-rule', options.fillRule || 'evenodd');
			} else {
				path.setAttribute('fill', 'none');
			}
		},

		_updatePoly: function (layer, closed) {
			this._setPath(layer, pointsToPath(layer._parts, closed));
		},

		_updateCircle: function (layer) {
			var p = layer._point,
			    r = layer._radius,
			    r2 = layer._radiusY || r,
			    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

			// drawing a circle with two half-arcs
			var d = layer._empty() ? 'M0 0' :
					'M' + (p.x - r) + ',' + p.y +
					arc + (r * 2) + ',0 ' +
					arc + (-r * 2) + ',0 ';

			this._setPath(layer, d);
		},

		_setPath: function (layer, path) {
			layer._path.setAttribute('d', path);
		},

		// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
		_bringToFront: function (layer) {
			toFront(layer._path);
		},

		_bringToBack: function (layer) {
			toBack(layer._path);
		}
	});

	if (vml) {
		SVG.include(vmlMixin);
	}

	// @factory L.svg(options?: Renderer options)
	// Creates a SVG renderer with the given options.
	function svg$1(options) {
		return svg || vml ? new SVG(options) : null;
	}

	Map.include({
		// @namespace Map; @method getRenderer(layer: Path): Renderer
		// Returns the instance of `Renderer` that should be used to render the given
		// `Path`. It will ensure that the `renderer` options of the map and paths
		// are respected, and that the renderers do exist on the map.
		getRenderer: function (layer) {
			// @namespace Path; @option renderer: Renderer
			// Use this specific instance of `Renderer` for this path. Takes
			// precedence over the map's [default renderer](#map-renderer).
			var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

			if (!renderer) {
				// @namespace Map; @option preferCanvas: Boolean = false
				// Whether `Path`s should be rendered on a `Canvas` renderer.
				// By default, all `Path`s are rendered in a `SVG` renderer.
				renderer = this._renderer = (this.options.preferCanvas && canvas$1()) || svg$1();
			}

			if (!this.hasLayer(renderer)) {
				this.addLayer(renderer);
			}
			return renderer;
		},

		_getPaneRenderer: function (name) {
			if (name === 'overlayPane' || name === undefined) {
				return false;
			}

			var renderer = this._paneRenderers[name];
			if (renderer === undefined) {
				renderer = (SVG && svg$1({pane: name})) || (Canvas && canvas$1({pane: name}));
				this._paneRenderers[name] = renderer;
			}
			return renderer;
		}
	});

	/*
	 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
	 */

	/*
	 * @class Rectangle
	 * @aka L.Retangle
	 * @inherits Polygon
	 *
	 * A class for drawing rectangle overlays on a map. Extends `Polygon`.
	 *
	 * @example
	 *
	 * ```js
	 * // define rectangle geographical bounds
	 * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
	 *
	 * // create an orange rectangle
	 * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
	 *
	 * // zoom the map to the rectangle bounds
	 * map.fitBounds(bounds);
	 * ```
	 *
	 */


	var Rectangle = Polygon.extend({
		initialize: function (latLngBounds, options) {
			Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
		},

		// @method setBounds(latLngBounds: LatLngBounds): this
		// Redraws the rectangle with the passed bounds.
		setBounds: function (latLngBounds) {
			return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
		},

		_boundsToLatLngs: function (latLngBounds) {
			latLngBounds = toLatLngBounds(latLngBounds);
			return [
				latLngBounds.getSouthWest(),
				latLngBounds.getNorthWest(),
				latLngBounds.getNorthEast(),
				latLngBounds.getSouthEast()
			];
		}
	});


	// @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
	function rectangle(latLngBounds, options) {
		return new Rectangle(latLngBounds, options);
	}

	SVG.create = create$2;
	SVG.pointsToPath = pointsToPath;

	GeoJSON.geometryToLayer = geometryToLayer;
	GeoJSON.coordsToLatLng = coordsToLatLng;
	GeoJSON.coordsToLatLngs = coordsToLatLngs;
	GeoJSON.latLngToCoords = latLngToCoords;
	GeoJSON.latLngsToCoords = latLngsToCoords;
	GeoJSON.getFeature = getFeature;
	GeoJSON.asFeature = asFeature;

	/*
	 * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
	 * (zoom to a selected bounding box), enabled by default.
	 */

	// @namespace Map
	// @section Interaction Options
	Map.mergeOptions({
		// @option boxZoom: Boolean = true
		// Whether the map can be zoomed to a rectangular area specified by
		// dragging the mouse while pressing the shift key.
		boxZoom: true
	});

	var BoxZoom = Handler.extend({
		initialize: function (map) {
			this._map = map;
			this._container = map._container;
			this._pane = map._panes.overlayPane;
			this._resetStateTimeout = 0;
			map.on('unload', this._destroy, this);
		},

		addHooks: function () {
			on(this._container, 'mousedown', this._onMouseDown, this);
		},

		removeHooks: function () {
			off(this._container, 'mousedown', this._onMouseDown, this);
		},

		moved: function () {
			return this._moved;
		},

		_destroy: function () {
			remove(this._pane);
			delete this._pane;
		},

		_resetState: function () {
			this._resetStateTimeout = 0;
			this._moved = false;
		},

		_clearDeferredResetState: function () {
			if (this._resetStateTimeout !== 0) {
				clearTimeout(this._resetStateTimeout);
				this._resetStateTimeout = 0;
			}
		},

		_onMouseDown: function (e) {
			if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

			// Clear the deferred resetState if it hasn't executed yet, otherwise it
			// will interrupt the interaction and orphan a box element in the container.
			this._clearDeferredResetState();
			this._resetState();

			disableTextSelection();
			disableImageDrag();

			this._startPoint = this._map.mouseEventToContainerPoint(e);

			on(document, {
				contextmenu: stop,
				mousemove: this._onMouseMove,
				mouseup: this._onMouseUp,
				keydown: this._onKeyDown
			}, this);
		},

		_onMouseMove: function (e) {
			if (!this._moved) {
				this._moved = true;

				this._box = create$1('div', 'leaflet-zoom-box', this._container);
				addClass(this._container, 'leaflet-crosshair');

				this._map.fire('boxzoomstart');
			}

			this._point = this._map.mouseEventToContainerPoint(e);

			var bounds = new Bounds(this._point, this._startPoint),
			    size = bounds.getSize();

			setPosition(this._box, bounds.min);

			this._box.style.width  = size.x + 'px';
			this._box.style.height = size.y + 'px';
		},

		_finish: function () {
			if (this._moved) {
				remove(this._box);
				removeClass(this._container, 'leaflet-crosshair');
			}

			enableTextSelection();
			enableImageDrag();

			off(document, {
				contextmenu: stop,
				mousemove: this._onMouseMove,
				mouseup: this._onMouseUp,
				keydown: this._onKeyDown
			}, this);
		},

		_onMouseUp: function (e) {
			if ((e.which !== 1) && (e.button !== 1)) { return; }

			this._finish();

			if (!this._moved) { return; }
			// Postpone to next JS tick so internal click event handling
			// still see it as "moved".
			this._clearDeferredResetState();
			this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);

			var bounds = new LatLngBounds(
			        this._map.containerPointToLatLng(this._startPoint),
			        this._map.containerPointToLatLng(this._point));

			this._map
				.fitBounds(bounds)
				.fire('boxzoomend', {boxZoomBounds: bounds});
		},

		_onKeyDown: function (e) {
			if (e.keyCode === 27) {
				this._finish();
			}
		}
	});

	// @section Handlers
	// @property boxZoom: Handler
	// Box (shift-drag with mouse) zoom handler.
	Map.addInitHook('addHandler', 'boxZoom', BoxZoom);

	/*
	 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
	 */

	// @namespace Map
	// @section Interaction Options

	Map.mergeOptions({
		// @option doubleClickZoom: Boolean|String = true
		// Whether the map can be zoomed in by double clicking on it and
		// zoomed out by double clicking while holding shift. If passed
		// `'center'`, double-click zoom will zoom to the center of the
		//  view regardless of where the mouse was.
		doubleClickZoom: true
	});

	var DoubleClickZoom = Handler.extend({
		addHooks: function () {
			this._map.on('dblclick', this._onDoubleClick, this);
		},

		removeHooks: function () {
			this._map.off('dblclick', this._onDoubleClick, this);
		},

		_onDoubleClick: function (e) {
			var map = this._map,
			    oldZoom = map.getZoom(),
			    delta = map.options.zoomDelta,
			    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

			if (map.options.doubleClickZoom === 'center') {
				map.setZoom(zoom);
			} else {
				map.setZoomAround(e.containerPoint, zoom);
			}
		}
	});

	// @section Handlers
	//
	// Map properties include interaction handlers that allow you to control
	// interaction behavior in runtime, enabling or disabling certain features such
	// as dragging or touch zoom (see `Handler` methods). For example:
	//
	// ```js
	// map.doubleClickZoom.disable();
	// ```
	//
	// @property doubleClickZoom: Handler
	// Double click zoom handler.
	Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);

	/*
	 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
	 */

	// @namespace Map
	// @section Interaction Options
	Map.mergeOptions({
		// @option dragging: Boolean = true
		// Whether the map be draggable with mouse/touch or not.
		dragging: true,

		// @section Panning Inertia Options
		// @option inertia: Boolean = *
		// If enabled, panning of the map will have an inertia effect where
		// the map builds momentum while dragging and continues moving in
		// the same direction for some time. Feels especially nice on touch
		// devices. Enabled by default unless running on old Android devices.
		inertia: !android23,

		// @option inertiaDeceleration: Number = 3000
		// The rate with which the inertial movement slows down, in pixels/second².
		inertiaDeceleration: 3400, // px/s^2

		// @option inertiaMaxSpeed: Number = Infinity
		// Max speed of the inertial movement, in pixels/second.
		inertiaMaxSpeed: Infinity, // px/s

		// @option easeLinearity: Number = 0.2
		easeLinearity: 0.2,

		// TODO refactor, move to CRS
		// @option worldCopyJump: Boolean = false
		// With this option enabled, the map tracks when you pan to another "copy"
		// of the world and seamlessly jumps to the original one so that all overlays
		// like markers and vector layers are still visible.
		worldCopyJump: false,

		// @option maxBoundsViscosity: Number = 0.0
		// If `maxBounds` is set, this option will control how solid the bounds
		// are when dragging the map around. The default value of `0.0` allows the
		// user to drag outside the bounds at normal speed, higher values will
		// slow down map dragging outside bounds, and `1.0` makes the bounds fully
		// solid, preventing the user from dragging outside the bounds.
		maxBoundsViscosity: 0.0
	});

	var Drag = Handler.extend({
		addHooks: function () {
			if (!this._draggable) {
				var map = this._map;

				this._draggable = new Draggable(map._mapPane, map._container);

				this._draggable.on({
					dragstart: this._onDragStart,
					drag: this._onDrag,
					dragend: this._onDragEnd
				}, this);

				this._draggable.on('predrag', this._onPreDragLimit, this);
				if (map.options.worldCopyJump) {
					this._draggable.on('predrag', this._onPreDragWrap, this);
					map.on('zoomend', this._onZoomEnd, this);

					map.whenReady(this._onZoomEnd, this);
				}
			}
			addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
			this._draggable.enable();
			this._positions = [];
			this._times = [];
		},

		removeHooks: function () {
			removeClass(this._map._container, 'leaflet-grab');
			removeClass(this._map._container, 'leaflet-touch-drag');
			this._draggable.disable();
		},

		moved: function () {
			return this._draggable && this._draggable._moved;
		},

		moving: function () {
			return this._draggable && this._draggable._moving;
		},

		_onDragStart: function () {
			var map = this._map;

			map._stop();
			if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
				var bounds = toLatLngBounds(this._map.options.maxBounds);

				this._offsetLimit = toBounds(
					this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
					this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)
						.add(this._map.getSize()));

				this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
			} else {
				this._offsetLimit = null;
			}

			map
			    .fire('movestart')
			    .fire('dragstart');

			if (map.options.inertia) {
				this._positions = [];
				this._times = [];
			}
		},

		_onDrag: function (e) {
			if (this._map.options.inertia) {
				var time = this._lastTime = +new Date(),
				    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

				this._positions.push(pos);
				this._times.push(time);

				if (time - this._times[0] > 50) {
					this._positions.shift();
					this._times.shift();
				}
			}

			this._map
			    .fire('move', e)
			    .fire('drag', e);
		},

		_onZoomEnd: function () {
			var pxCenter = this._map.getSize().divideBy(2),
			    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

			this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
			this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
		},

		_viscousLimit: function (value, threshold) {
			return value - (value - threshold) * this._viscosity;
		},

		_onPreDragLimit: function () {
			if (!this._viscosity || !this._offsetLimit) { return; }

			var offset = this._draggable._newPos.subtract(this._draggable._startPos);

			var limit = this._offsetLimit;
			if (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }
			if (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }
			if (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }
			if (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }

			this._draggable._newPos = this._draggable._startPos.add(offset);
		},

		_onPreDragWrap: function () {
			// TODO refactor to be able to adjust map pane position after zoom
			var worldWidth = this._worldWidth,
			    halfWidth = Math.round(worldWidth / 2),
			    dx = this._initialWorldOffset,
			    x = this._draggable._newPos.x,
			    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
			    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
			    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

			this._draggable._absPos = this._draggable._newPos.clone();
			this._draggable._newPos.x = newX;
		},

		_onDragEnd: function (e) {
			var map = this._map,
			    options = map.options,

			    noInertia = !options.inertia || this._times.length < 2;

			map.fire('dragend', e);

			if (noInertia) {
				map.fire('moveend');

			} else {

				var direction = this._lastPos.subtract(this._positions[0]),
				    duration = (this._lastTime - this._times[0]) / 1000,
				    ease = options.easeLinearity,

				    speedVector = direction.multiplyBy(ease / duration),
				    speed = speedVector.distanceTo([0, 0]),

				    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
				    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

				    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
				    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

				if (!offset.x && !offset.y) {
					map.fire('moveend');

				} else {
					offset = map._limitOffset(offset, map.options.maxBounds);

					requestAnimFrame(function () {
						map.panBy(offset, {
							duration: decelerationDuration,
							easeLinearity: ease,
							noMoveStart: true,
							animate: true
						});
					});
				}
			}
		}
	});

	// @section Handlers
	// @property dragging: Handler
	// Map dragging handler (by both mouse and touch).
	Map.addInitHook('addHandler', 'dragging', Drag);

	/*
	 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
	 */

	// @namespace Map
	// @section Keyboard Navigation Options
	Map.mergeOptions({
		// @option keyboard: Boolean = true
		// Makes the map focusable and allows users to navigate the map with keyboard
		// arrows and `+`/`-` keys.
		keyboard: true,

		// @option keyboardPanDelta: Number = 80
		// Amount of pixels to pan when pressing an arrow key.
		keyboardPanDelta: 80
	});

	var Keyboard = Handler.extend({

		keyCodes: {
			left:    [37],
			right:   [39],
			down:    [40],
			up:      [38],
			zoomIn:  [187, 107, 61, 171],
			zoomOut: [189, 109, 54, 173]
		},

		initialize: function (map) {
			this._map = map;

			this._setPanDelta(map.options.keyboardPanDelta);
			this._setZoomDelta(map.options.zoomDelta);
		},

		addHooks: function () {
			var container = this._map._container;

			// make the container focusable by tabbing
			if (container.tabIndex <= 0) {
				container.tabIndex = '0';
			}

			on(container, {
				focus: this._onFocus,
				blur: this._onBlur,
				mousedown: this._onMouseDown
			}, this);

			this._map.on({
				focus: this._addHooks,
				blur: this._removeHooks
			}, this);
		},

		removeHooks: function () {
			this._removeHooks();

			off(this._map._container, {
				focus: this._onFocus,
				blur: this._onBlur,
				mousedown: this._onMouseDown
			}, this);

			this._map.off({
				focus: this._addHooks,
				blur: this._removeHooks
			}, this);
		},

		_onMouseDown: function () {
			if (this._focused) { return; }

			var body = document.body,
			    docEl = document.documentElement,
			    top = body.scrollTop || docEl.scrollTop,
			    left = body.scrollLeft || docEl.scrollLeft;

			this._map._container.focus();

			window.scrollTo(left, top);
		},

		_onFocus: function () {
			this._focused = true;
			this._map.fire('focus');
		},

		_onBlur: function () {
			this._focused = false;
			this._map.fire('blur');
		},

		_setPanDelta: function (panDelta) {
			var keys = this._panKeys = {},
			    codes = this.keyCodes,
			    i, len;

			for (i = 0, len = codes.left.length; i < len; i++) {
				keys[codes.left[i]] = [-1 * panDelta, 0];
			}
			for (i = 0, len = codes.right.length; i < len; i++) {
				keys[codes.right[i]] = [panDelta, 0];
			}
			for (i = 0, len = codes.down.length; i < len; i++) {
				keys[codes.down[i]] = [0, panDelta];
			}
			for (i = 0, len = codes.up.length; i < len; i++) {
				keys[codes.up[i]] = [0, -1 * panDelta];
			}
		},

		_setZoomDelta: function (zoomDelta) {
			var keys = this._zoomKeys = {},
			    codes = this.keyCodes,
			    i, len;

			for (i = 0, len = codes.zoomIn.length; i < len; i++) {
				keys[codes.zoomIn[i]] = zoomDelta;
			}
			for (i = 0, len = codes.zoomOut.length; i < len; i++) {
				keys[codes.zoomOut[i]] = -zoomDelta;
			}
		},

		_addHooks: function () {
			on(document, 'keydown', this._onKeyDown, this);
		},

		_removeHooks: function () {
			off(document, 'keydown', this._onKeyDown, this);
		},

		_onKeyDown: function (e) {
			if (e.altKey || e.ctrlKey || e.metaKey) { return; }

			var key = e.keyCode,
			    map = this._map,
			    offset;

			if (key in this._panKeys) {

				if (map._panAnim && map._panAnim._inProgress) { return; }

				offset = this._panKeys[key];
				if (e.shiftKey) {
					offset = toPoint(offset).multiplyBy(3);
				}

				map.panBy(offset);

				if (map.options.maxBounds) {
					map.panInsideBounds(map.options.maxBounds);
				}

			} else if (key in this._zoomKeys) {
				map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);

			} else if (key === 27 && map._popup) {
				map.closePopup();

			} else {
				return;
			}

			stop(e);
		}
	});

	// @section Handlers
	// @section Handlers
	// @property keyboard: Handler
	// Keyboard navigation handler.
	Map.addInitHook('addHandler', 'keyboard', Keyboard);

	/*
	 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
	 */

	// @namespace Map
	// @section Interaction Options
	Map.mergeOptions({
		// @section Mousewheel options
		// @option scrollWheelZoom: Boolean|String = true
		// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
		// it will zoom to the center of the view regardless of where the mouse was.
		scrollWheelZoom: true,

		// @option wheelDebounceTime: Number = 40
		// Limits the rate at which a wheel can fire (in milliseconds). By default
		// user can't zoom via wheel more often than once per 40 ms.
		wheelDebounceTime: 40,

		// @option wheelPxPerZoomLevel: Number = 60
		// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
		// mean a change of one full zoom level. Smaller values will make wheel-zooming
		// faster (and vice versa).
		wheelPxPerZoomLevel: 60
	});

	var ScrollWheelZoom = Handler.extend({
		addHooks: function () {
			on(this._map._container, 'mousewheel', this._onWheelScroll, this);

			this._delta = 0;
		},

		removeHooks: function () {
			off(this._map._container, 'mousewheel', this._onWheelScroll, this);
		},

		_onWheelScroll: function (e) {
			var delta = getWheelDelta(e);

			var debounce = this._map.options.wheelDebounceTime;

			this._delta += delta;
			this._lastMousePos = this._map.mouseEventToContainerPoint(e);

			if (!this._startTime) {
				this._startTime = +new Date();
			}

			var left = Math.max(debounce - (+new Date() - this._startTime), 0);

			clearTimeout(this._timer);
			this._timer = setTimeout(bind(this._performZoom, this), left);

			stop(e);
		},

		_performZoom: function () {
			var map = this._map,
			    zoom = map.getZoom(),
			    snap = this._map.options.zoomSnap || 0;

			map._stop(); // stop panning and fly animations if any

			// map the delta with a sigmoid function to -4..4 range leaning on -1..1
			var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
			    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
			    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
			    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

			this._delta = 0;
			this._startTime = null;

			if (!delta) { return; }

			if (map.options.scrollWheelZoom === 'center') {
				map.setZoom(zoom + delta);
			} else {
				map.setZoomAround(this._lastMousePos, zoom + delta);
			}
		}
	});

	// @section Handlers
	// @property scrollWheelZoom: Handler
	// Scroll wheel zoom handler.
	Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);

	/*
	 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
	 */

	// @namespace Map
	// @section Interaction Options
	Map.mergeOptions({
		// @section Touch interaction options
		// @option tap: Boolean = true
		// Enables mobile hacks for supporting instant taps (fixing 200ms click
		// delay on iOS/Android) and touch holds (fired as `contextmenu` events).
		tap: true,

		// @option tapTolerance: Number = 15
		// The max number of pixels a user can shift his finger during touch
		// for it to be considered a valid tap.
		tapTolerance: 15
	});

	var Tap = Handler.extend({
		addHooks: function () {
			on(this._map._container, 'touchstart', this._onDown, this);
		},

		removeHooks: function () {
			off(this._map._container, 'touchstart', this._onDown, this);
		},

		_onDown: function (e) {
			if (!e.touches) { return; }

			preventDefault(e);

			this._fireClick = true;

			// don't simulate click or track longpress if more than 1 touch
			if (e.touches.length > 1) {
				this._fireClick = false;
				clearTimeout(this._holdTimeout);
				return;
			}

			var first = e.touches[0],
			    el = first.target;

			this._startPos = this._newPos = new Point(first.clientX, first.clientY);

			// if touching a link, highlight it
			if (el.tagName && el.tagName.toLowerCase() === 'a') {
				addClass(el, 'leaflet-active');
			}

			// simulate long hold but setting a timeout
			this._holdTimeout = setTimeout(bind(function () {
				if (this._isTapValid()) {
					this._fireClick = false;
					this._onUp();
					this._simulateEvent('contextmenu', first);
				}
			}, this), 1000);

			this._simulateEvent('mousedown', first);

			on(document, {
				touchmove: this._onMove,
				touchend: this._onUp
			}, this);
		},

		_onUp: function (e) {
			clearTimeout(this._holdTimeout);

			off(document, {
				touchmove: this._onMove,
				touchend: this._onUp
			}, this);

			if (this._fireClick && e && e.changedTouches) {

				var first = e.changedTouches[0],
				    el = first.target;

				if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
					removeClass(el, 'leaflet-active');
				}

				this._simulateEvent('mouseup', first);

				// simulate click if the touch didn't move too much
				if (this._isTapValid()) {
					this._simulateEvent('click', first);
				}
			}
		},

		_isTapValid: function () {
			return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
		},

		_onMove: function (e) {
			var first = e.touches[0];
			this._newPos = new Point(first.clientX, first.clientY);
			this._simulateEvent('mousemove', first);
		},

		_simulateEvent: function (type, e) {
			var simulatedEvent = document.createEvent('MouseEvents');

			simulatedEvent._simulated = true;
			e.target._simulatedClick = true;

			simulatedEvent.initMouseEvent(
			        type, true, true, window, 1,
			        e.screenX, e.screenY,
			        e.clientX, e.clientY,
			        false, false, false, false, 0, null);

			e.target.dispatchEvent(simulatedEvent);
		}
	});

	// @section Handlers
	// @property tap: Handler
	// Mobile touch hacks (quick tap and touch hold) handler.
	if (touch && !pointer) {
		Map.addInitHook('addHandler', 'tap', Tap);
	}

	/*
	 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
	 */

	// @namespace Map
	// @section Interaction Options
	Map.mergeOptions({
		// @section Touch interaction options
		// @option touchZoom: Boolean|String = *
		// Whether the map can be zoomed by touch-dragging with two fingers. If
		// passed `'center'`, it will zoom to the center of the view regardless of
		// where the touch events (fingers) were. Enabled for touch-capable web
		// browsers except for old Androids.
		touchZoom: touch && !android23,

		// @option bounceAtZoomLimits: Boolean = true
		// Set it to false if you don't want the map to zoom beyond min/max zoom
		// and then bounce back when pinch-zooming.
		bounceAtZoomLimits: true
	});

	var TouchZoom = Handler.extend({
		addHooks: function () {
			addClass(this._map._container, 'leaflet-touch-zoom');
			on(this._map._container, 'touchstart', this._onTouchStart, this);
		},

		removeHooks: function () {
			removeClass(this._map._container, 'leaflet-touch-zoom');
			off(this._map._container, 'touchstart', this._onTouchStart, this);
		},

		_onTouchStart: function (e) {
			var map = this._map;
			if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

			var p1 = map.mouseEventToContainerPoint(e.touches[0]),
			    p2 = map.mouseEventToContainerPoint(e.touches[1]);

			this._centerPoint = map.getSize()._divideBy(2);
			this._startLatLng = map.containerPointToLatLng(this._centerPoint);
			if (map.options.touchZoom !== 'center') {
				this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
			}

			this._startDist = p1.distanceTo(p2);
			this._startZoom = map.getZoom();

			this._moved = false;
			this._zooming = true;

			map._stop();

			on(document, 'touchmove', this._onTouchMove, this);
			on(document, 'touchend', this._onTouchEnd, this);

			preventDefault(e);
		},

		_onTouchMove: function (e) {
			if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

			var map = this._map,
			    p1 = map.mouseEventToContainerPoint(e.touches[0]),
			    p2 = map.mouseEventToContainerPoint(e.touches[1]),
			    scale = p1.distanceTo(p2) / this._startDist;

			this._zoom = map.getScaleZoom(scale, this._startZoom);

			if (!map.options.bounceAtZoomLimits && (
				(this._zoom < map.getMinZoom() && scale < 1) ||
				(this._zoom > map.getMaxZoom() && scale > 1))) {
				this._zoom = map._limitZoom(this._zoom);
			}

			if (map.options.touchZoom === 'center') {
				this._center = this._startLatLng;
				if (scale === 1) { return; }
			} else {
				// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
				var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
				if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
				this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
			}

			if (!this._moved) {
				map._moveStart(true);
				this._moved = true;
			}

			cancelAnimFrame(this._animRequest);

			var moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});
			this._animRequest = requestAnimFrame(moveFn, this, true);

			preventDefault(e);
		},

		_onTouchEnd: function () {
			if (!this._moved || !this._zooming) {
				this._zooming = false;
				return;
			}

			this._zooming = false;
			cancelAnimFrame(this._animRequest);

			off(document, 'touchmove', this._onTouchMove);
			off(document, 'touchend', this._onTouchEnd);

			// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
			if (this._map.options.zoomAnimation) {
				this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
			} else {
				this._map._resetView(this._center, this._map._limitZoom(this._zoom));
			}
		}
	});

	// @section Handlers
	// @property touchZoom: Handler
	// Touch zoom handler.
	Map.addInitHook('addHandler', 'touchZoom', TouchZoom);

	Map.BoxZoom = BoxZoom;
	Map.DoubleClickZoom = DoubleClickZoom;
	Map.Drag = Drag;
	Map.Keyboard = Keyboard;
	Map.ScrollWheelZoom = ScrollWheelZoom;
	Map.Tap = Tap;
	Map.TouchZoom = TouchZoom;

	// misc

	var oldL = window.L;
	function noConflict() {
		window.L = oldL;
		return this;
	}

	// Always export us to window global (see #2364)
	window.L = exports;

	exports.version = version;
	exports.noConflict = noConflict;
	exports.Control = Control;
	exports.control = control;
	exports.Browser = Browser;
	exports.Evented = Evented;
	exports.Mixin = Mixin;
	exports.Util = Util;
	exports.Class = Class;
	exports.Handler = Handler;
	exports.extend = extend;
	exports.bind = bind;
	exports.stamp = stamp;
	exports.setOptions = setOptions;
	exports.DomEvent = DomEvent;
	exports.DomUtil = DomUtil;
	exports.PosAnimation = PosAnimation;
	exports.Draggable = Draggable;
	exports.LineUtil = LineUtil;
	exports.PolyUtil = PolyUtil;
	exports.Point = Point;
	exports.point = toPoint;
	exports.Bounds = Bounds;
	exports.bounds = toBounds;
	exports.Transformation = Transformation;
	exports.transformation = toTransformation;
	exports.Projection = index;
	exports.LatLng = LatLng;
	exports.latLng = toLatLng;
	exports.LatLngBounds = LatLngBounds;
	exports.latLngBounds = toLatLngBounds;
	exports.CRS = CRS;
	exports.GeoJSON = GeoJSON;
	exports.geoJSON = geoJSON;
	exports.geoJson = geoJson;
	exports.Layer = Layer;
	exports.LayerGroup = LayerGroup;
	exports.layerGroup = layerGroup;
	exports.FeatureGroup = FeatureGroup;
	exports.featureGroup = featureGroup;
	exports.ImageOverlay = ImageOverlay;
	exports.imageOverlay = imageOverlay;
	exports.VideoOverlay = VideoOverlay;
	exports.videoOverlay = videoOverlay;
	exports.DivOverlay = DivOverlay;
	exports.Popup = Popup;
	exports.popup = popup;
	exports.Tooltip = Tooltip;
	exports.tooltip = tooltip;
	exports.Icon = Icon;
	exports.icon = icon;
	exports.DivIcon = DivIcon;
	exports.divIcon = divIcon;
	exports.Marker = Marker;
	exports.marker = marker;
	exports.TileLayer = TileLayer;
	exports.tileLayer = tileLayer;
	exports.GridLayer = GridLayer;
	exports.gridLayer = gridLayer;
	exports.SVG = SVG;
	exports.svg = svg$1;
	exports.Renderer = Renderer;
	exports.Canvas = Canvas;
	exports.canvas = canvas$1;
	exports.Path = Path;
	exports.CircleMarker = CircleMarker;
	exports.circleMarker = circleMarker;
	exports.Circle = Circle;
	exports.circle = circle;
	exports.Polyline = Polyline;
	exports.polyline = polyline;
	exports.Polygon = Polygon;
	exports.polygon = polygon;
	exports.Rectangle = Rectangle;
	exports.rectangle = rectangle;
	exports.Map = Map;
	exports.map = createMap;

	})));
	//# sourceMappingURL=leaflet-src.js.map


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var geocoderControl = __webpack_require__(5),
	    gridControl = __webpack_require__(15),
	    featureLayer = __webpack_require__(19),
	    legendControl = __webpack_require__(22),
	    shareControl = __webpack_require__(23),
	    tileLayer = __webpack_require__(25),
	    map = __webpack_require__(26),
	    gridLayer = __webpack_require__(27),
	    styleLayer = __webpack_require__(30);

	L.mapbox = module.exports = {
	    VERSION: __webpack_require__(11).version,
	    geocoder: __webpack_require__(6),
	    marker: __webpack_require__(20),
	    simplestyle: __webpack_require__(21),
	    tileLayer: tileLayer.tileLayer,
	    TileLayer: tileLayer.TileLayer,
	    styleLayer: styleLayer.styleLayer,
	    StyleLayer: styleLayer.StyleLayer,
	    shareControl: shareControl.shareControl,
	    ShareControl: shareControl.ShareControl,
	    legendControl: legendControl.legendControl,
	    LegendControl: legendControl.LegendControl,
	    geocoderControl: geocoderControl.geocoderControl,
	    GeocoderControl: geocoderControl.GeocoderControl,
	    gridControl: gridControl.gridControl,
	    GridControl: gridControl.GridControl,
	    gridLayer: gridLayer.gridLayer,
	    GridLayer: gridLayer.GridLayer,
	    featureLayer: featureLayer.featureLayer,
	    FeatureLayer: featureLayer.FeatureLayer,
	    map: map.map,
	    Map: map.Map,
	    config: __webpack_require__(10),
	    sanitize: __webpack_require__(17),
	    template: __webpack_require__(16).to_html,
	    feedback: __webpack_require__(12)
	};


	// Hardcode image path, because Leaflet's autodetection
	// fails, because mapbox.js is not named leaflet.js
	window.L.Icon.Default.imagePath =
	    // Detect bad-news protocols like file:// and hardcode
	    // to https if they're detected.
	    ((document.location.protocol === 'https:' ||
	    document.location.protocol === 'http:') ? '' : 'https:') +
	    '//api.tiles.mapbox.com/mapbox.js/' + 'v' +
	    __webpack_require__(11).version + '/images/';


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var geocoder = __webpack_require__(6),
	    util = __webpack_require__(8);

	var GeocoderControl = L.Control.extend({
	    includes: L.Mixin.Events,

	    options: {
	        proximity: true,
	        position: 'topleft',
	        pointZoom: 16,
	        keepOpen: false,
	        autocomplete: false,
	        queryOptions: {}
	    },

	    initialize: function(_, options) {
	        L.Util.setOptions(this, options);
	        this.setURL(_);
	        this._updateSubmit = L.bind(this._updateSubmit, this);
	        this._updateAutocomplete = L.bind(this._updateAutocomplete, this);
	        this._chooseResult = L.bind(this._chooseResult, this);
	    },

	    setURL: function(_) {
	        this.geocoder = geocoder(_, {
	            accessToken: this.options.accessToken
	        });
	        return this;
	    },

	    getURL: function() {
	        return this.geocoder.getURL();
	    },

	    setID: function(_) {
	        return this.setURL(_);
	    },

	    setTileJSON: function(_) {
	        return this.setURL(_.geocoder);
	    },

	    _toggle: function(e) {
	        if (e) L.DomEvent.stop(e);
	        if (L.DomUtil.hasClass(this._container, 'active')) {
	            L.DomUtil.removeClass(this._container, 'active');
	            this._results.innerHTML = '';
	            this._input.blur();
	        } else {
	            L.DomUtil.addClass(this._container, 'active');
	            this._input.focus();
	            this._input.select();
	        }
	    },

	    _closeIfOpen: function() {
	        if (L.DomUtil.hasClass(this._container, 'active') &&
	            !this.options.keepOpen) {
	            L.DomUtil.removeClass(this._container, 'active');
	            this._results.innerHTML = '';
	            this._input.blur();
	        }
	    },

	    onAdd: function(map) {

	        var container = L.DomUtil.create('div', 'leaflet-control-mapbox-geocoder leaflet-bar leaflet-control'),
	            link = L.DomUtil.create('a', 'leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder', container),
	            results = L.DomUtil.create('div', 'leaflet-control-mapbox-geocoder-results', container),
	            wrap = L.DomUtil.create('div', 'leaflet-control-mapbox-geocoder-wrap', container),
	            form = L.DomUtil.create('form', 'leaflet-control-mapbox-geocoder-form', wrap),
	            input = L.DomUtil.create('input', '', form);

	        link.href = '#';
	        link.innerHTML = '&nbsp;';

	        input.type = 'text';
	        input.setAttribute('placeholder', 'Search');

	        L.DomEvent.addListener(form, 'submit', this._geocode, this);
	        L.DomEvent.addListener(input, 'keyup', this._autocomplete, this);
	        L.DomEvent.disableClickPropagation(container);

	        this._map = map;
	        this._results = results;
	        this._input = input;
	        this._form = form;

	        if (this.options.keepOpen) {
	            L.DomUtil.addClass(container, 'active');
	        } else {
	            this._map.on('click', this._closeIfOpen, this);
	            L.DomEvent.addListener(link, 'click', this._toggle, this);
	        }

	        return container;
	    },

	    _updateSubmit: function(err, resp) {
	        L.DomUtil.removeClass(this._container, 'searching');
	        this._results.innerHTML = '';
	        if (err || !resp) {
	            this.fire('error', {error: err});
	        } else {
	            var features = [];
	            if (resp.results && resp.results.features) {
	                features = resp.results.features;
	            }
	            if (features.length === 1) {
	                this.fire('autoselect', { feature: features[0] });
	                this.fire('found', {results: resp.results});
	                this._chooseResult(features[0]);
	                this._closeIfOpen();
	            } else if (features.length > 1) {
	                this.fire('found', {results: resp.results});
	                this._displayResults(features);
	            } else {
	                this.fire('notfound');
	                this._displayResults(features);
	            }
	        }
	    },

	    _updateAutocomplete: function(err, resp) {
	        this._results.innerHTML = '';
	        if (err || !resp) {
	            this.fire('error', {error: err});
	        } else {
	            var features = [];
	            if (resp.results && resp.results.features) {
	                features = resp.results.features;
	            }
	            if (features.length) {
	                this.fire('found', {results: resp.results});
	            } else {
	                this.fire('notfound');
	            }
	            this._displayResults(features);
	        }
	    },

	    _displayResults: function(features) {
	        for (var i = 0, l = Math.min(features.length, 5); i < l; i++) {
	            var feature = features[i];
	            var name = feature.place_name;
	            if (!name.length) continue;

	            var r = L.DomUtil.create('a', '', this._results);
	            var text = ('innerText' in r) ? 'innerText' : 'textContent';
	            r[text] = name;
	            r.setAttribute('title', name);
	            r.href = '#';

	            (L.bind(function(feature) {
	                L.DomEvent.addListener(r, 'click', function(e) {
	                    this._chooseResult(feature);
	                    L.DomEvent.stop(e);
	                    this.fire('select', { feature: feature });
	                }, this);
	            }, this))(feature);
	        }
	        if (features.length > 5) {
	            var outof = L.DomUtil.create('span', '', this._results);
	            outof.innerHTML = 'Top 5 of ' + features.length + '  results';
	        }
	    },

	    _chooseResult: function(result) {
	        if (result.bbox) {
	            this._map.fitBounds(util.lbounds(result.bbox));
	        } else if (result.center) {
	            this._map.setView([result.center[1], result.center[0]], (this._map.getZoom() === undefined) ?
	                this.options.pointZoom :
	                Math.max(this._map.getZoom(), this.options.pointZoom));
	        }
	    },

	    _geocode: function(e) {
	        L.DomEvent.preventDefault(e);
	        if (this._input.value === '') return this._updateSubmit();
	        L.DomUtil.addClass(this._container, 'searching');
	        this.geocoder.query(L.Util.extend({
	            query: this._input.value,
	            proximity: this.options.proximity ? this._map.getCenter() : false
	        }, this.options.queryOptions), this._updateSubmit);
	    },

	    _autocomplete: function() {
	        if (!this.options.autocomplete) return;
	        if (this._input.value === '') return this._updateAutocomplete();
	        this.geocoder.query(L.Util.extend({
	            query: this._input.value,
	            proximity: this.options.proximity ? this._map.getCenter() : false
	        }, this.options.queryOptions), this._updateAutocomplete);
	    }
	});

	module.exports.GeocoderControl = GeocoderControl;

	module.exports.geocoderControl = function(_, options) {
	    return new GeocoderControl(_, options);
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(7),
	    util = __webpack_require__(8),
	    format_url = __webpack_require__(9),
	    feedback = __webpack_require__(12),
	    request = __webpack_require__(13);

	// Low-level geocoding interface - wraps specific API calls and their
	// return values.
	module.exports = function(url, options) {
	    if (!options) options = {};
	    var geocoder = {};

	    util.strict(url, 'string');

	    if (url.indexOf('/') === -1) {
	        url = format_url('/geocoding/v5/' + url + '/{query}.json', options.accessToken, 5);
	    }

	    function roundTo(latLng, precision) {
	        var mult = Math.pow(10, precision);
	        latLng.lat = Math.round(latLng.lat * mult) / mult;
	        latLng.lng = Math.round(latLng.lng * mult) / mult;
	        return latLng;
	    }

	    geocoder.getURL = function() {
	        return url;
	    };

	    geocoder.queryURL = function(_) {
	        var isObject = !(isArray(_) || typeof _ === 'string'),
	            query = isObject ? _.query : _;

	        if (isArray(query)) {
	            var parts = [];
	            for (var i = 0; i < query.length; i++) {
	                parts[i] = encodeURIComponent(query[i]);
	            }
	            query = parts.join(';');
	        } else {
	            query = encodeURIComponent(query);
	        }

	        feedback.record({ geocoding: query });

	        var url = L.Util.template(geocoder.getURL(), {query: query});

	        if (isObject) {
	            if (_.types) {
	                if (isArray(_.types)) {
	                    url += '&types=' + _.types.join();
	                } else {
	                    url += '&types=' + _.types;
	                }
	            }

	            if (_.country) {
	                if (isArray(_.country)) {
	                    url += '&country=' + _.country.join();
	                } else {
	                    url += '&country=' + _.country;
	                }
	            }

	            if (_.bbox) {
	                if (isArray(_.bbox)) {
	                    url += '&bbox=' + _.bbox.join();
	                } else {
	                    url += '&bbox=' + _.bbox;
	                }
	            }

	            if (_.proximity) {
	                var proximity = roundTo(L.latLng(_.proximity), 3);
	                url += '&proximity=' + proximity.lng + ',' + proximity.lat;
	            }

	            if (typeof _.autocomplete === 'boolean') {
	                url += '&autocomplete=' + _.autocomplete;
	            }
	        }

	        return url;
	    };

	    geocoder.query = function(_, callback) {
	        util.strict(callback, 'function');

	        request(geocoder.queryURL(_), function(err, json) {
	            if (json && (json.length || json.features)) {
	                var res = {
	                    results: json
	                };
	                if (json.features && json.features.length) {
	                    res.latlng = [
	                        json.features[0].center[1],
	                        json.features[0].center[0]];

	                    if (json.features[0].bbox) {
	                        res.bounds = json.features[0].bbox;
	                        res.lbounds = util.lbounds(res.bounds);
	                    }
	                }
	                callback(null, res);
	            } else callback(err || true);
	        });

	        return geocoder;
	    };

	    // a reverse geocode:
	    //
	    //  geocoder.reverseQuery([80, 20])
	    geocoder.reverseQuery = function(_, callback) {
	        var q = '';

	        // sort through different ways people represent lat and lon pairs
	        function normalize(x) {
	            var latLng;
	            if (x.lat !== undefined && x.lng !== undefined) {
	                latLng = L.latLng(x.lat, x.lng);
	            } else if (x.lat !== undefined && x.lon !== undefined) {
	                latLng = L.latLng(x.lat, x.lon);
	            } else {
	                latLng = L.latLng(x[1], x[0]);
	            }
	            latLng = roundTo(latLng, 5);
	            return latLng.lng + ',' + latLng.lat;
	        }

	        if (_.length && _[0].length) {
	            for (var i = 0, pts = []; i < _.length; i++) {
	                pts.push(normalize(_[i]));
	            }
	            q = pts.join(';');
	        } else {
	            q = normalize(_);
	        }

	        request(geocoder.queryURL(q), function(err, json) {
	            callback(err, json);
	        });

	        return geocoder;
	    };

	    return geocoder;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	function contains(item, list) {
	    if (!list || !list.length) return false;
	    for (var i = 0; i < list.length; i++) {
	        if (list[i] === item) return true;
	    }
	    return false;
	}

	module.exports = {
	    idUrl: function(_, t) {
	        if (_.indexOf('/') === -1) t.loadID(_);
	        else t.loadURL(_);
	    },
	    log: function(_) {
	        if (typeof console === 'object' &&
	            typeof console.error === 'function') {
	            console.error(_);
	        }
	    },
	    strict: function(_, type) {
	        if (typeof _ !== type) {
	            throw new Error('Invalid argument: ' + type + ' expected');
	        }
	    },
	    strict_instance: function(_, klass, name) {
	        if (!(_ instanceof klass)) {
	            throw new Error('Invalid argument: ' + name + ' expected');
	        }
	    },
	    strict_oneof: function(_, values) {
	        if (!contains(_, values)) {
	            throw new Error('Invalid argument: ' + _ + ' given, valid values are ' +
	                values.join(', '));
	        }
	    },
	    strip_tags: function(_) {
	        return _.replace(/<[^<]+>/g, '');
	    },
	    lbounds: function(_) {
	        // leaflet-compatible bounds, since leaflet does not do geojson
	        return new L.LatLngBounds([[_[1], _[0]], [_[3], _[2]]]);
	    }
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var config = __webpack_require__(10),
	    version = __webpack_require__(11).version;

	module.exports = function(path, accessToken) {
	    accessToken = accessToken || L.mapbox.accessToken;

	    if (!accessToken && config.REQUIRE_ACCESS_TOKEN) {
	        throw new Error('An API access token is required to use Mapbox.js. ' +
	            'See https://www.mapbox.com/mapbox.js/api/v' + version + '/api-access-tokens/');
	    }

	    var url = (document.location.protocol === 'https:' || config.FORCE_HTTPS) ? config.HTTPS_URL : config.HTTP_URL;
	    url = url.replace(/\/v4$/, '');
	    url += path;

	    if (config.REQUIRE_ACCESS_TOKEN) {
	        if (accessToken[0] === 's') {
	            throw new Error('Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). ' +
	                'See https://www.mapbox.com/mapbox.js/api/v' + version + '/api-access-tokens/');
	        }

	        url += url.indexOf('?') !== -1 ? '&access_token=' : '?access_token=';
	        url += accessToken;
	    }

	    return url;
	};

	module.exports.tileJSON = function(urlOrMapID, accessToken) {

	    if (urlOrMapID.indexOf('mapbox://styles') === 0) {
	        throw new Error('Styles created with Mapbox Studio need to be used with ' +
	            'L.mapbox.styleLayer, not L.mapbox.tileLayer');
	    }

	    if (urlOrMapID.indexOf('/') !== -1)
	        return urlOrMapID;

	    var url = module.exports('/v4/' + urlOrMapID + '.json', accessToken);

	    // TileJSON requests need a secure flag appended to their URLs so
	    // that the server knows to send SSL-ified resource references.
	    if (url.indexOf('https') === 0)
	        url += '&secure';

	    return url;
	};


	module.exports.style = function(styleURL, accessToken) {
	    if (styleURL.indexOf('mapbox://styles/') === -1) throw new Error('Incorrectly formatted Mapbox style at ' + styleURL);

	    var ownerIDStyle = styleURL.split('mapbox://styles/')[1];
	    var url = module.exports('/styles/v1/' + ownerIDStyle, accessToken)
	        .replace('http://', 'https://');

	    return url;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    HTTP_URL: 'http://a.tiles.mapbox.com/v4',
	    HTTPS_URL: 'https://a.tiles.mapbox.com/v4',
	    FORCE_HTTPS: false,
	    REQUIRE_ACCESS_TOKEN: true
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = {
		"author": {
			"name": "Mapbox"
		},
		"name": "mapbox.js",
		"description": "mapbox javascript api",
		"version": "3.1.1",
		"homepage": "http://mapbox.com/",
		"repository": {
			"type": "git",
			"url": "git://github.com/mapbox/mapbox.js.git"
		},
		"main": "src/index.js",
		"dependencies": {
			"corslite": "0.0.6",
			"isarray": "0.0.1",
			"leaflet": "1.0.2",
			"mustache": "2.2.1",
			"sanitize-caja": "0.1.4"
		},
		"scripts": {
			"test": "eslint --no-eslintrc -c .eslintrc src && phantomjs node_modules/mocha-phantomjs-core/mocha-phantomjs-core.js test/index.html"
		},
		"license": "BSD-3-Clause",
		"devDependencies": {
			"browserify": "^13.0.0",
			"clean-css": "~2.0.7",
			"cz-conventional-changelog": "1.2.0",
			"eslint": "^0.23.0",
			"expect.js": "0.3.1",
			"happen": "0.1.3",
			"leaflet-fullscreen": "0.0.4",
			"leaflet-hash": "0.2.1",
			"marked": "~0.3.0",
			"minifyify": "^6.1.0",
			"minimist": "0.0.5",
			"mocha": "2.4.5",
			"mocha-phantomjs-core": "2.0.1",
			"phantomjs-prebuilt": "2.1.12",
			"sinon": "1.10.2"
		},
		"optionalDependencies": {},
		"engines": {
			"node": "*"
		},
		"config": {
			"commitizen": {
				"path": "./node_modules/cz-conventional-changelog"
			}
		},
		"gitHead": "8a52b388a21e7de418c2a61448bf33107c5db766",
		"bugs": {
			"url": "https://github.com/mapbox/mapbox.js/issues"
		},
		"_id": "mapbox.js@3.1.1",
		"_shasum": "4ebe41bd89b533f507fb3455f4f490e417ea1e8f",
		"_from": "mapbox.js@>=3.1.1 <4.0.0",
		"_npmVersion": "4.1.2",
		"_nodeVersion": "7.7.1",
		"_npmUser": {
			"name": "tristen",
			"email": "tristen.brown@gmail.com"
		},
		"dist": {
			"shasum": "4ebe41bd89b533f507fb3455f4f490e417ea1e8f",
			"tarball": "https://registry.npmjs.org/mapbox.js/-/mapbox.js-3.1.1.tgz"
		},
		"maintainers": [
			{
				"email": "mollylloyd@gmail.com",
				"name": "mollymerp"
			},
			{
				"email": "aruna@mapbox.com",
				"name": "arunasank"
			},
			{
				"email": "amyleewalton@gmail.com",
				"name": "amyleew"
			},
			{
				"email": "accounts@mapbox.com",
				"name": "mapbox-admin"
			},
			{
				"email": "irwin@mapbox.com",
				"name": "mtirwin"
			},
			{
				"email": "mxn@1ec5.org",
				"name": "1ec5"
			},
			{
				"email": "andrew@mapbox.com",
				"name": "apendleton"
			},
			{
				"email": "ulsh@mapbox.com",
				"name": "alulsh"
			},
			{
				"email": "karen@mapbox.com",
				"name": "karenzshea"
			},
			{
				"email": "spam@freenerd.de",
				"name": "freenerd"
			},
			{
				"email": "flippmoke@gmail.com",
				"name": "flippmoke"
			},
			{
				"email": "wb@bergwerk-gis.at",
				"name": "bergwerkgis"
			},
			{
				"email": "patrick@mapbox.com",
				"name": "themarex"
			},
			{
				"email": "emily@mapbox.com",
				"name": "emilymcafee"
			},
			{
				"email": "jake@jakepruitt.com",
				"name": "jrpruit1"
			},
			{
				"email": "tlee@mapbox.com",
				"name": "sbma44"
			},
			{
				"email": "scothis@gmail.com",
				"name": "scothis"
			},
			{
				"email": "lyzi@mapbox.com",
				"name": "lyzidiamond"
			},
			{
				"email": "bryan@mapbox.com",
				"name": "bhousel"
			},
			{
				"email": "mcwhittemore@gmail.com",
				"name": "mcwhittemore"
			},
			{
				"email": "tristen.brown@gmail.com",
				"name": "tristen"
			},
			{
				"email": "ansis.brammanis@gmail.com",
				"name": "ansis"
			},
			{
				"email": "young@mapbox.com",
				"name": "yhahn"
			},
			{
				"email": "will@mapbox.com",
				"name": "willwhite"
			},
			{
				"email": "john.firebaugh@gmail.com",
				"name": "jfirebaugh"
			},
			{
				"email": "agafonkin@gmail.com",
				"name": "mourner"
			},
			{
				"email": "sean@mapbox.com",
				"name": "sgillies"
			},
			{
				"email": "lauren@mapbox.com",
				"name": "lbud"
			},
			{
				"email": "bobby@mapbox.com",
				"name": "bsudekum"
			},
			{
				"email": "damon@mapbox.com",
				"name": "dnomadb"
			},
			{
				"email": "ian.villeda@gmail.com",
				"name": "ian29"
			},
			{
				"email": "nicki@mapbox.com",
				"name": "nickidlugash"
			},
			{
				"email": "saman@mapbox.com",
				"name": "samanbb"
			},
			{
				"email": "aj@mapbox.com",
				"name": "ajashton"
			},
			{
				"email": "alex@mapbox.com",
				"name": "lxbarth"
			},
			{
				"email": "ian@mapbox.com",
				"name": "ianshward"
			},
			{
				"email": "nicholas.ingalls@gmail.com",
				"name": "ingalls"
			},
			{
				"email": "jeff@miccolis.net",
				"name": "miccolis"
			},
			{
				"email": "carol@mapbox.com",
				"name": "gretacb"
			},
			{
				"email": "morgan.herlocker@gmail.com",
				"name": "morganherlocker"
			},
			{
				"email": "ryan.clark.j@gmail.com",
				"name": "rclark"
			},
			{
				"email": "dane@mapbox.com",
				"name": "springmeyer"
			},
			{
				"email": "mail@kkaefer.com",
				"name": "kkaefer"
			}
		],
		"_npmOperationalInternal": {
			"host": "s3://npm-registry-packages",
			"tmp": "tmp/mapbox.js-3.1.1.tgz_1495570579259_0.4753663376905024"
		},
		"directories": {},
		"_resolved": "https://registry.npmjs.org/mapbox.js/-/mapbox.js-3.1.1.tgz"
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	var Feedback = L.Class.extend({
	    includes: L.Mixin.Events,
	    data: {},
	    record: function(data) {
	        L.extend(this.data, data);
	        this.fire('change');
	    }
	});

	module.exports = new Feedback();


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var corslite = __webpack_require__(14),
	    strict = __webpack_require__(8).strict,
	    config = __webpack_require__(10);

	var protocol = /^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;

	module.exports = function(url, callback) {
	    strict(url, 'string');
	    strict(callback, 'function');

	    url = url.replace(protocol, function(match, protocol) {
	        if (!('withCredentials' in new window.XMLHttpRequest())) {
	            // XDomainRequest in use; doesn't support cross-protocol requests
	            return document.location.protocol;
	        } else if (protocol === 'https:' || document.location.protocol === 'https:' || config.FORCE_HTTPS) {
	            return 'https:';
	        } else {
	            return 'http:';
	        }
	    });

	    function onload(err, resp) {
	        if (!err && resp) {
	            resp = JSON.parse(resp.responseText);
	        }
	        callback(err, resp);
	    }

	    return corslite(url, onload);
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	function corslite(url, callback, cors) {
	    var sent = false;

	    if (typeof window.XMLHttpRequest === 'undefined') {
	        return callback(Error('Browser not supported'));
	    }

	    if (typeof cors === 'undefined') {
	        var m = url.match(/^\s*https?:\/\/[^\/]*/);
	        cors = m && (m[0] !== location.protocol + '//' + location.domain +
	                (location.port ? ':' + location.port : ''));
	    }

	    var x = new window.XMLHttpRequest();

	    function isSuccessful(status) {
	        return status >= 200 && status < 300 || status === 304;
	    }

	    if (cors && !('withCredentials' in x)) {
	        // IE8-9
	        x = new window.XDomainRequest();

	        // Ensure callback is never called synchronously, i.e., before
	        // x.send() returns (this has been observed in the wild).
	        // See https://github.com/mapbox/mapbox.js/issues/472
	        var original = callback;
	        callback = function() {
	            if (sent) {
	                original.apply(this, arguments);
	            } else {
	                var that = this, args = arguments;
	                setTimeout(function() {
	                    original.apply(that, args);
	                }, 0);
	            }
	        }
	    }

	    function loaded() {
	        if (
	            // XDomainRequest
	            x.status === undefined ||
	            // modern browsers
	            isSuccessful(x.status)) callback.call(x, null, x);
	        else callback.call(x, x, null);
	    }

	    // Both `onreadystatechange` and `onload` can fire. `onreadystatechange`
	    // has [been supported for longer](http://stackoverflow.com/a/9181508/229001).
	    if ('onload' in x) {
	        x.onload = loaded;
	    } else {
	        x.onreadystatechange = function readystate() {
	            if (x.readyState === 4) {
	                loaded();
	            }
	        };
	    }

	    // Call the callback with the XMLHttpRequest object as an error and prevent
	    // it from ever being called again by reassigning it to `noop`
	    x.onerror = function error(evt) {
	        // XDomainRequest provides no evt parameter
	        callback.call(this, evt || true, null);
	        callback = function() { };
	    };

	    // IE9 must have onprogress be set to a unique function.
	    x.onprogress = function() { };

	    x.ontimeout = function(evt) {
	        callback.call(this, evt, null);
	        callback = function() { };
	    };

	    x.onabort = function(evt) {
	        callback.call(this, evt, null);
	        callback = function() { };
	    };

	    // GET is the only supported HTTP Verb by XDomainRequest and is the
	    // only one supported here.
	    x.open('GET', url, true);

	    // Send the request. Sending data is not supported.
	    x.send(null);
	    sent = true;

	    return x;
	}

	if (true) module.exports = corslite;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(8),
	    Mustache = __webpack_require__(16);

	var GridControl = L.Control.extend({

	    options: {
	        pinnable: true,
	        follow: false,
	        sanitizer: __webpack_require__(17),
	        touchTeaser: true,
	        location: true
	    },

	    _currentContent: '',

	    // pinned means that this control is on a feature and the user has likely
	    // clicked. pinned will not become false unless the user clicks off
	    // of the feature onto another or clicks x
	    _pinned: false,

	    initialize: function(_, options) {
	        L.Util.setOptions(this, options);
	        util.strict_instance(_, L.Class, 'L.mapbox.gridLayer');
	        this._layer = _;
	    },

	    setTemplate: function(template) {
	        util.strict(template, 'string');
	        this.options.template = template;
	        return this;
	    },

	    _template: function(format, data) {
	        if (!data) return;
	        var template = this.options.template || this._layer.getTileJSON().template;
	        if (template) {
	            var d = {};
	            d['__' + format + '__'] = true;
	            return this.options.sanitizer(
	                Mustache.to_html(template, L.extend(d, data)));
	        }
	    },

	    // change the content of the tooltip HTML if it has changed, otherwise
	    // noop
	    _show: function(content, o) {
	        if (content === this._currentContent) return;

	        this._currentContent = content;

	        if (this.options.follow) {
	            this._popup.setContent(content)
	                .setLatLng(o.latLng);
	            if (this._map._popup !== this._popup) this._popup.openOn(this._map);
	        } else {
	            this._container.style.display = 'block';
	            this._contentWrapper.innerHTML = content;
	        }
	    },

	    hide: function() {
	        this._pinned = false;
	        this._currentContent = '';

	        this._map.closePopup();
	        this._container.style.display = 'none';
	        this._contentWrapper.innerHTML = '';

	        L.DomUtil.removeClass(this._container, 'closable');

	        return this;
	    },

	    _mouseover: function(o) {
	        if (o.data) {
	            L.DomUtil.addClass(this._map._container, 'map-clickable');
	        } else {
	            L.DomUtil.removeClass(this._map._container, 'map-clickable');
	        }

	        if (this._pinned) return;

	        var content = this._template('teaser', o.data);
	        if (content) {
	            this._show(content, o);
	        } else {
	            this.hide();
	        }
	    },

	    _mousemove: function(o) {
	        if (this._pinned) return;
	        if (!this.options.follow) return;

	        this._popup.setLatLng(o.latLng);
	    },

	    _navigateTo: function(url) {
	        window.top.location.href = url;
	    },

	    _click: function(o) {

	        var location_formatted = this._template('location', o.data);
	        if (this.options.location && location_formatted &&
	            location_formatted.search(/^https?:/) === 0) {
	            return this._navigateTo(this._template('location', o.data));
	        }

	        if (!this.options.pinnable) return;

	        var content = this._template('full', o.data);

	        if (!content && this.options.touchTeaser && L.Browser.touch) {
	            content = this._template('teaser', o.data);
	        }

	        if (content) {
	            L.DomUtil.addClass(this._container, 'closable');
	            this._pinned = true;
	            this._show(content, o);
	        } else if (this._pinned) {
	            L.DomUtil.removeClass(this._container, 'closable');
	            this._pinned = false;
	            this.hide();
	        }
	    },

	    _onPopupClose: function() {
	        this._currentContent = null;
	        this._pinned = false;
	    },

	    _createClosebutton: function(container, fn) {
	        var link = L.DomUtil.create('a', 'close', container);

	        link.innerHTML = 'close';
	        link.href = '#';
	        link.title = 'close';

	        L.DomEvent
	            .on(link, 'click', L.DomEvent.stopPropagation)
	            .on(link, 'mousedown', L.DomEvent.stopPropagation)
	            .on(link, 'dblclick', L.DomEvent.stopPropagation)
	            .on(link, 'click', L.DomEvent.preventDefault)
	            .on(link, 'click', fn, this);

	        return link;
	    },

	    onAdd: function(map) {
	        this._map = map;

	        var className = 'leaflet-control-grid map-tooltip',
	            container = L.DomUtil.create('div', className),
	            contentWrapper = L.DomUtil.create('div', 'map-tooltip-content');

	        // hide the container element initially
	        container.style.display = 'none';
	        this._createClosebutton(container, this.hide);
	        container.appendChild(contentWrapper);

	        this._contentWrapper = contentWrapper;
	        this._popup = new L.Popup({ autoPan: false, closeOnClick: false });

	        map.on('popupclose', this._onPopupClose, this);

	        L.DomEvent
	            .disableClickPropagation(container)
	            // allow people to scroll tooltips with mousewheel
	            .addListener(container, 'mousewheel', L.DomEvent.stopPropagation);

	        this._layer
	            .on('mouseover', this._mouseover, this)
	            .on('mousemove', this._mousemove, this)
	            .on('click', this._click, this);

	        return container;
	    },

	    onRemove: function (map) {

	        map.off('popupclose', this._onPopupClose, this);

	        this._layer
	            .off('mouseover', this._mouseover, this)
	            .off('mousemove', this._mousemove, this)
	            .off('click', this._click, this);
	    }
	});

	module.exports.GridControl = GridControl;

	module.exports.gridControl = function(_, options) {
	    return new GridControl(_, options);
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false Mustache: true*/

	(function defineMustache (global, factory) {
	  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
	    factory(exports); // CommonJS
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	  } else {
	    global.Mustache = {};
	    factory(global.Mustache); // script, wsh, asp
	  }
	}(this, function mustacheFactory (mustache) {

	  var objectToString = Object.prototype.toString;
	  var isArray = Array.isArray || function isArrayPolyfill (object) {
	    return objectToString.call(object) === '[object Array]';
	  };

	  function isFunction (object) {
	    return typeof object === 'function';
	  }

	  /**
	   * More correct typeof string handling array
	   * which normally returns typeof 'object'
	   */
	  function typeStr (obj) {
	    return isArray(obj) ? 'array' : typeof obj;
	  }

	  function escapeRegExp (string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	  }

	  /**
	   * Null safe way of checking whether or not an object,
	   * including its prototype, has a given property
	   */
	  function hasProperty (obj, propName) {
	    return obj != null && typeof obj === 'object' && (propName in obj);
	  }

	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var regExpTest = RegExp.prototype.test;
	  function testRegExp (re, string) {
	    return regExpTest.call(re, string);
	  }

	  var nonSpaceRe = /\S/;
	  function isWhitespace (string) {
	    return !testRegExp(nonSpaceRe, string);
	  }

	  var entityMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '/': '&#x2F;',
	    '`': '&#x60;',
	    '=': '&#x3D;'
	  };

	  function escapeHtml (string) {
	    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
	      return entityMap[s];
	    });
	  }

	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var equalsRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;

	  /**
	   * Breaks up the given `template` string into a tree of tokens. If the `tags`
	   * argument is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	   * course, the default is to use mustaches (i.e. mustache.tags).
	   *
	   * A token is an array with at least 4 elements. The first element is the
	   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	   * all text that appears outside a symbol this element is "text".
	   *
	   * The second element of a token is its "value". For mustache tags this is
	   * whatever else was inside the tag besides the opening symbol. For text tokens
	   * this is the text itself.
	   *
	   * The third and fourth elements of the token are the start and end indices,
	   * respectively, of the token in the original template.
	   *
	   * Tokens that are the root node of a subtree contain two more elements: 1) an
	   * array of tokens in the subtree and 2) the index in the original template at
	   * which the closing tag for that section begins.
	   */
	  function parseTemplate (template, tags) {
	    if (!template)
	      return [];

	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?

	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace () {
	      if (hasTag && !nonSpace) {
	        while (spaces.length)
	          delete tokens[spaces.pop()];
	      } else {
	        spaces = [];
	      }

	      hasTag = false;
	      nonSpace = false;
	    }

	    var openingTagRe, closingTagRe, closingCurlyRe;
	    function compileTags (tagsToCompile) {
	      if (typeof tagsToCompile === 'string')
	        tagsToCompile = tagsToCompile.split(spaceRe, 2);

	      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
	        throw new Error('Invalid tags: ' + tagsToCompile);

	      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	    }

	    compileTags(tags || mustache.tags);

	    var scanner = new Scanner(template);

	    var start, type, value, chr, token, openSection;
	    while (!scanner.eos()) {
	      start = scanner.pos;

	      // Match any text between tags.
	      value = scanner.scanUntil(openingTagRe);

	      if (value) {
	        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	          chr = value.charAt(i);

	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	          } else {
	            nonSpace = true;
	          }

	          tokens.push([ 'text', chr, start, start + 1 ]);
	          start += 1;

	          // Check for whitespace on the current line.
	          if (chr === '\n')
	            stripSpace();
	        }
	      }

	      // Match the opening tag.
	      if (!scanner.scan(openingTagRe))
	        break;

	      hasTag = true;

	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);

	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(equalsRe);
	        scanner.scan(equalsRe);
	        scanner.scanUntil(closingTagRe);
	      } else if (type === '{') {
	        value = scanner.scanUntil(closingCurlyRe);
	        scanner.scan(curlyRe);
	        scanner.scanUntil(closingTagRe);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(closingTagRe);
	      }

	      // Match the closing tag.
	      if (!scanner.scan(closingTagRe))
	        throw new Error('Unclosed tag at ' + scanner.pos);

	      token = [ type, value, start, scanner.pos ];
	      tokens.push(token);

	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        openSection = sections.pop();

	        if (!openSection)
	          throw new Error('Unopened section "' + value + '" at ' + start);

	        if (openSection[1] !== value)
	          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        compileTags(value);
	      }
	    }

	    // Make sure there are no open sections when we're done.
	    openSection = sections.pop();

	    if (openSection)
	      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	    return nestTokens(squashTokens(tokens));
	  }

	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens (tokens) {
	    var squashedTokens = [];

	    var token, lastToken;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          squashedTokens.push(token);
	          lastToken = token;
	        }
	      }
	    }

	    return squashedTokens;
	  }

	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens (tokens) {
	    var nestedTokens = [];
	    var collector = nestedTokens;
	    var sections = [];

	    var token, section;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      switch (token[0]) {
	        case '#':
	        case '^':
	          collector.push(token);
	          sections.push(token);
	          collector = token[4] = [];
	          break;
	        case '/':
	          section = sections.pop();
	          section[5] = token[2];
	          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	          break;
	        default:
	          collector.push(token);
	      }
	    }

	    return nestedTokens;
	  }

	  /**
	   * A simple string scanner that is used by the template parser to find
	   * tokens in template strings.
	   */
	  function Scanner (string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }

	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function eos () {
	    return this.tail === '';
	  };

	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function scan (re) {
	    var match = this.tail.match(re);

	    if (!match || match.index !== 0)
	      return '';

	    var string = match[0];

	    this.tail = this.tail.substring(string.length);
	    this.pos += string.length;

	    return string;
	  };

	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function scanUntil (re) {
	    var index = this.tail.search(re), match;

	    switch (index) {
	      case -1:
	        match = this.tail;
	        this.tail = '';
	        break;
	      case 0:
	        match = '';
	        break;
	      default:
	        match = this.tail.substring(0, index);
	        this.tail = this.tail.substring(index);
	    }

	    this.pos += match.length;

	    return match;
	  };

	  /**
	   * Represents a rendering context by wrapping a view object and
	   * maintaining a reference to the parent context.
	   */
	  function Context (view, parentContext) {
	    this.view = view;
	    this.cache = { '.': this.view };
	    this.parent = parentContext;
	  }

	  /**
	   * Creates a new context using the given view with this context
	   * as the parent.
	   */
	  Context.prototype.push = function push (view) {
	    return new Context(view, this);
	  };

	  /**
	   * Returns the value of the given name in this context, traversing
	   * up the context hierarchy if the value is absent in this context's view.
	   */
	  Context.prototype.lookup = function lookup (name) {
	    var cache = this.cache;

	    var value;
	    if (cache.hasOwnProperty(name)) {
	      value = cache[name];
	    } else {
	      var context = this, names, index, lookupHit = false;

	      while (context) {
	        if (name.indexOf('.') > 0) {
	          value = context.view;
	          names = name.split('.');
	          index = 0;

	          /**
	           * Using the dot notion path in `name`, we descend through the
	           * nested objects.
	           *
	           * To be certain that the lookup has been successful, we have to
	           * check if the last object in the path actually has the property
	           * we are looking for. We store the result in `lookupHit`.
	           *
	           * This is specially necessary for when the value has been set to
	           * `undefined` and we want to avoid looking up parent contexts.
	           **/
	          while (value != null && index < names.length) {
	            if (index === names.length - 1)
	              lookupHit = hasProperty(value, names[index]);

	            value = value[names[index++]];
	          }
	        } else {
	          value = context.view[name];
	          lookupHit = hasProperty(context.view, name);
	        }

	        if (lookupHit)
	          break;

	        context = context.parent;
	      }

	      cache[name] = value;
	    }

	    if (isFunction(value))
	      value = value.call(this.view);

	    return value;
	  };

	  /**
	   * A Writer knows how to take a stream of tokens and render them to a
	   * string, given a context. It also maintains a cache of templates to
	   * avoid the need to parse the same template twice.
	   */
	  function Writer () {
	    this.cache = {};
	  }

	  /**
	   * Clears all cached templates in this writer.
	   */
	  Writer.prototype.clearCache = function clearCache () {
	    this.cache = {};
	  };

	  /**
	   * Parses and caches the given `template` and returns the array of tokens
	   * that is generated from the parse.
	   */
	  Writer.prototype.parse = function parse (template, tags) {
	    var cache = this.cache;
	    var tokens = cache[template];

	    if (tokens == null)
	      tokens = cache[template] = parseTemplate(template, tags);

	    return tokens;
	  };

	  /**
	   * High-level method that is used to render the given `template` with
	   * the given `view`.
	   *
	   * The optional `partials` argument may be an object that contains the
	   * names and templates of partials that are used in the template. It may
	   * also be a function that is used to load partial templates on the fly
	   * that takes a single argument: the name of the partial.
	   */
	  Writer.prototype.render = function render (template, view, partials) {
	    var tokens = this.parse(template);
	    var context = (view instanceof Context) ? view : new Context(view);
	    return this.renderTokens(tokens, context, partials, template);
	  };

	  /**
	   * Low-level method that renders the given array of `tokens` using
	   * the given `context` and `partials`.
	   *
	   * Note: The `originalTemplate` is only ever used to extract the portion
	   * of the original template that was contained in a higher-order section.
	   * If the template doesn't use higher-order sections, this argument may
	   * be omitted.
	   */
	  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
	    var buffer = '';

	    var token, symbol, value;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      value = undefined;
	      token = tokens[i];
	      symbol = token[0];

	      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
	      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
	      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
	      else if (symbol === '&') value = this.unescapedValue(token, context);
	      else if (symbol === 'name') value = this.escapedValue(token, context);
	      else if (symbol === 'text') value = this.rawValue(token);

	      if (value !== undefined)
	        buffer += value;
	    }

	    return buffer;
	  };

	  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
	    var self = this;
	    var buffer = '';
	    var value = context.lookup(token[1]);

	    // This function is used to render an arbitrary template
	    // in the current context by higher-order sections.
	    function subRender (template) {
	      return self.render(template, context, partials);
	    }

	    if (!value) return;

	    if (isArray(value)) {
	      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	      }
	    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
	      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	    } else if (isFunction(value)) {
	      if (typeof originalTemplate !== 'string')
	        throw new Error('Cannot use higher-order sections without the original template');

	      // Extract the portion of the original template that the section contains.
	      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	      if (value != null)
	        buffer += value;
	    } else {
	      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	    }
	    return buffer;
	  };

	  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
	    var value = context.lookup(token[1]);

	    // Use JavaScript's definition of falsy. Include empty arrays.
	    // See https://github.com/janl/mustache.js/issues/186
	    if (!value || (isArray(value) && value.length === 0))
	      return this.renderTokens(token[4], context, partials, originalTemplate);
	  };

	  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
	    if (!partials) return;

	    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	    if (value != null)
	      return this.renderTokens(this.parse(value), context, partials, value);
	  };

	  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return value;
	  };

	  Writer.prototype.escapedValue = function escapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return mustache.escape(value);
	  };

	  Writer.prototype.rawValue = function rawValue (token) {
	    return token[1];
	  };

	  mustache.name = 'mustache.js';
	  mustache.version = '2.2.1';
	  mustache.tags = [ '{{', '}}' ];

	  // All high-level mustache.* functions use this writer.
	  var defaultWriter = new Writer();

	  /**
	   * Clears all cached templates in the default writer.
	   */
	  mustache.clearCache = function clearCache () {
	    return defaultWriter.clearCache();
	  };

	  /**
	   * Parses and caches the given template in the default writer and returns the
	   * array of tokens it contains. Doing this ahead of time avoids the need to
	   * parse templates on the fly as they are rendered.
	   */
	  mustache.parse = function parse (template, tags) {
	    return defaultWriter.parse(template, tags);
	  };

	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer.
	   */
	  mustache.render = function render (template, view, partials) {
	    if (typeof template !== 'string') {
	      throw new TypeError('Invalid template! Template should be a "string" ' +
	                          'but "' + typeStr(template) + '" was given as the first ' +
	                          'argument for mustache#render(template, view, partials)');
	    }

	    return defaultWriter.render(template, view, partials);
	  };

	  // This is here for backwards compatibility with 0.4.x.,
	  /*eslint-disable */ // eslint wants camel cased function name
	  mustache.to_html = function to_html (template, view, partials, send) {
	    /*eslint-enable*/

	    var result = mustache.render(template, view, partials);

	    if (isFunction(send)) {
	      send(result);
	    } else {
	      return result;
	    }
	  };

	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;

	  // Export these mainly for testing, but also for advanced usage.
	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;

	}));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var html_sanitize = __webpack_require__(18);

	module.exports = function(_) {
	    if (!_) return '';
	    return html_sanitize(_, cleanUrl, cleanId);
	};

	// https://bugzilla.mozilla.org/show_bug.cgi?id=255107
	function cleanUrl(url) {
	    'use strict';
	    if (/^https?/.test(url.getScheme())) return url.toString();
	    if (/^mailto?/.test(url.getScheme())) return url.toString();
	    if ('data' == url.getScheme() && /^image/.test(url.getPath())) {
	        return url.toString();
	    }
	}

	function cleanId(id) { return id; }


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	
	// Copyright (C) 2010 Google Inc.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.

	/**
	 * @fileoverview
	 * Implements RFC 3986 for parsing/formatting URIs.
	 *
	 * @author mikesamuel@gmail.com
	 * \@provides URI
	 * \@overrides window
	 */

	var URI = (function () {

	/**
	 * creates a uri from the string form.  The parser is relaxed, so special
	 * characters that aren't escaped but don't cause ambiguities will not cause
	 * parse failures.
	 *
	 * @return {URI|null}
	 */
	function parse(uriStr) {
	  var m = ('' + uriStr).match(URI_RE_);
	  if (!m) { return null; }
	  return new URI(
	      nullIfAbsent(m[1]),
	      nullIfAbsent(m[2]),
	      nullIfAbsent(m[3]),
	      nullIfAbsent(m[4]),
	      nullIfAbsent(m[5]),
	      nullIfAbsent(m[6]),
	      nullIfAbsent(m[7]));
	}


	/**
	 * creates a uri from the given parts.
	 *
	 * @param scheme {string} an unencoded scheme such as "http" or null
	 * @param credentials {string} unencoded user credentials or null
	 * @param domain {string} an unencoded domain name or null
	 * @param port {number} a port number in [1, 32768].
	 *    -1 indicates no port, as does null.
	 * @param path {string} an unencoded path
	 * @param query {Array.<string>|string|null} a list of unencoded cgi
	 *   parameters where even values are keys and odds the corresponding values
	 *   or an unencoded query.
	 * @param fragment {string} an unencoded fragment without the "#" or null.
	 * @return {URI}
	 */
	function create(scheme, credentials, domain, port, path, query, fragment) {
	  var uri = new URI(
	      encodeIfExists2(scheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_),
	      encodeIfExists2(
	          credentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_),
	      encodeIfExists(domain),
	      port > 0 ? port.toString() : null,
	      encodeIfExists2(path, URI_DISALLOWED_IN_PATH_),
	      null,
	      encodeIfExists(fragment));
	  if (query) {
	    if ('string' === typeof query) {
	      uri.setRawQuery(query.replace(/[^?&=0-9A-Za-z_\-~.%]/g, encodeOne));
	    } else {
	      uri.setAllParameters(query);
	    }
	  }
	  return uri;
	}
	function encodeIfExists(unescapedPart) {
	  if ('string' == typeof unescapedPart) {
	    return encodeURIComponent(unescapedPart);
	  }
	  return null;
	};
	/**
	 * if unescapedPart is non null, then escapes any characters in it that aren't
	 * valid characters in a url and also escapes any special characters that
	 * appear in extra.
	 *
	 * @param unescapedPart {string}
	 * @param extra {RegExp} a character set of characters in [\01-\177].
	 * @return {string|null} null iff unescapedPart == null.
	 */
	function encodeIfExists2(unescapedPart, extra) {
	  if ('string' == typeof unescapedPart) {
	    return encodeURI(unescapedPart).replace(extra, encodeOne);
	  }
	  return null;
	};
	/** converts a character in [\01-\177] to its url encoded equivalent. */
	function encodeOne(ch) {
	  var n = ch.charCodeAt(0);
	  return '%' + '0123456789ABCDEF'.charAt((n >> 4) & 0xf) +
	      '0123456789ABCDEF'.charAt(n & 0xf);
	}

	/**
	 * {@updoc
	 *  $ normPath('foo/./bar')
	 *  # 'foo/bar'
	 *  $ normPath('./foo')
	 *  # 'foo'
	 *  $ normPath('foo/.')
	 *  # 'foo'
	 *  $ normPath('foo//bar')
	 *  # 'foo/bar'
	 * }
	 */
	function normPath(path) {
	  return path.replace(/(^|\/)\.(?:\/|$)/g, '$1').replace(/\/{2,}/g, '/');
	}

	var PARENT_DIRECTORY_HANDLER = new RegExp(
	    ''
	    // A path break
	    + '(/|^)'
	    // followed by a non .. path element
	    // (cannot be . because normPath is used prior to this RegExp)
	    + '(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)'
	    // followed by .. followed by a path break.
	    + '/\\.\\.(?:/|$)');

	var PARENT_DIRECTORY_HANDLER_RE = new RegExp(PARENT_DIRECTORY_HANDLER);

	var EXTRA_PARENT_PATHS_RE = /^(?:\.\.\/)*(?:\.\.$)?/;

	/**
	 * Normalizes its input path and collapses all . and .. sequences except for
	 * .. sequences that would take it above the root of the current parent
	 * directory.
	 * {@updoc
	 *  $ collapse_dots('foo/../bar')
	 *  # 'bar'
	 *  $ collapse_dots('foo/./bar')
	 *  # 'foo/bar'
	 *  $ collapse_dots('foo/../bar/./../../baz')
	 *  # 'baz'
	 *  $ collapse_dots('../foo')
	 *  # '../foo'
	 *  $ collapse_dots('../foo').replace(EXTRA_PARENT_PATHS_RE, '')
	 *  # 'foo'
	 * }
	 */
	function collapse_dots(path) {
	  if (path === null) { return null; }
	  var p = normPath(path);
	  // Only /../ left to flatten
	  var r = PARENT_DIRECTORY_HANDLER_RE;
	  // We replace with $1 which matches a / before the .. because this
	  // guarantees that:
	  // (1) we have at most 1 / between the adjacent place,
	  // (2) always have a slash if there is a preceding path section, and
	  // (3) we never turn a relative path into an absolute path.
	  for (var q; (q = p.replace(r, '$1')) != p; p = q) {};
	  return p;
	}

	/**
	 * resolves a relative url string to a base uri.
	 * @return {URI}
	 */
	function resolve(baseUri, relativeUri) {
	  // there are several kinds of relative urls:
	  // 1. //foo - replaces everything from the domain on.  foo is a domain name
	  // 2. foo - replaces the last part of the path, the whole query and fragment
	  // 3. /foo - replaces the the path, the query and fragment
	  // 4. ?foo - replace the query and fragment
	  // 5. #foo - replace the fragment only

	  var absoluteUri = baseUri.clone();
	  // we satisfy these conditions by looking for the first part of relativeUri
	  // that is not blank and applying defaults to the rest

	  var overridden = relativeUri.hasScheme();

	  if (overridden) {
	    absoluteUri.setRawScheme(relativeUri.getRawScheme());
	  } else {
	    overridden = relativeUri.hasCredentials();
	  }

	  if (overridden) {
	    absoluteUri.setRawCredentials(relativeUri.getRawCredentials());
	  } else {
	    overridden = relativeUri.hasDomain();
	  }

	  if (overridden) {
	    absoluteUri.setRawDomain(relativeUri.getRawDomain());
	  } else {
	    overridden = relativeUri.hasPort();
	  }

	  var rawPath = relativeUri.getRawPath();
	  var simplifiedPath = collapse_dots(rawPath);
	  if (overridden) {
	    absoluteUri.setPort(relativeUri.getPort());
	    simplifiedPath = simplifiedPath
	        && simplifiedPath.replace(EXTRA_PARENT_PATHS_RE, '');
	  } else {
	    overridden = !!rawPath;
	    if (overridden) {
	      // resolve path properly
	      if (simplifiedPath.charCodeAt(0) !== 0x2f /* / */) {  // path is relative
	        var absRawPath = collapse_dots(absoluteUri.getRawPath() || '')
	            .replace(EXTRA_PARENT_PATHS_RE, '');
	        var slash = absRawPath.lastIndexOf('/') + 1;
	        simplifiedPath = collapse_dots(
	            (slash ? absRawPath.substring(0, slash) : '')
	            + collapse_dots(rawPath))
	            .replace(EXTRA_PARENT_PATHS_RE, '');
	      }
	    } else {
	      simplifiedPath = simplifiedPath
	          && simplifiedPath.replace(EXTRA_PARENT_PATHS_RE, '');
	      if (simplifiedPath !== rawPath) {
	        absoluteUri.setRawPath(simplifiedPath);
	      }
	    }
	  }

	  if (overridden) {
	    absoluteUri.setRawPath(simplifiedPath);
	  } else {
	    overridden = relativeUri.hasQuery();
	  }

	  if (overridden) {
	    absoluteUri.setRawQuery(relativeUri.getRawQuery());
	  } else {
	    overridden = relativeUri.hasFragment();
	  }

	  if (overridden) {
	    absoluteUri.setRawFragment(relativeUri.getRawFragment());
	  }

	  return absoluteUri;
	}

	/**
	 * a mutable URI.
	 *
	 * This class contains setters and getters for the parts of the URI.
	 * The <tt>getXYZ</tt>/<tt>setXYZ</tt> methods return the decoded part -- so
	 * <code>uri.parse('/foo%20bar').getPath()</code> will return the decoded path,
	 * <tt>/foo bar</tt>.
	 *
	 * <p>The raw versions of fields are available too.
	 * <code>uri.parse('/foo%20bar').getRawPath()</code> will return the raw path,
	 * <tt>/foo%20bar</tt>.  Use the raw setters with care, since
	 * <code>URI::toString</code> is not guaranteed to return a valid url if a
	 * raw setter was used.
	 *
	 * <p>All setters return <tt>this</tt> and so may be chained, a la
	 * <code>uri.parse('/foo').setFragment('part').toString()</code>.
	 *
	 * <p>You should not use this constructor directly -- please prefer the factory
	 * functions {@link uri.parse}, {@link uri.create}, {@link uri.resolve}
	 * instead.</p>
	 *
	 * <p>The parameters are all raw (assumed to be properly escaped) parts, and
	 * any (but not all) may be null.  Undefined is not allowed.</p>
	 *
	 * @constructor
	 */
	function URI(
	    rawScheme,
	    rawCredentials, rawDomain, port,
	    rawPath, rawQuery, rawFragment) {
	  this.scheme_ = rawScheme;
	  this.credentials_ = rawCredentials;
	  this.domain_ = rawDomain;
	  this.port_ = port;
	  this.path_ = rawPath;
	  this.query_ = rawQuery;
	  this.fragment_ = rawFragment;
	  /**
	   * @type {Array|null}
	   */
	  this.paramCache_ = null;
	}

	/** returns the string form of the url. */
	URI.prototype.toString = function () {
	  var out = [];
	  if (null !== this.scheme_) { out.push(this.scheme_, ':'); }
	  if (null !== this.domain_) {
	    out.push('//');
	    if (null !== this.credentials_) { out.push(this.credentials_, '@'); }
	    out.push(this.domain_);
	    if (null !== this.port_) { out.push(':', this.port_.toString()); }
	  }
	  if (null !== this.path_) { out.push(this.path_); }
	  if (null !== this.query_) { out.push('?', this.query_); }
	  if (null !== this.fragment_) { out.push('#', this.fragment_); }
	  return out.join('');
	};

	URI.prototype.clone = function () {
	  return new URI(this.scheme_, this.credentials_, this.domain_, this.port_,
	                 this.path_, this.query_, this.fragment_);
	};

	URI.prototype.getScheme = function () {
	  // HTML5 spec does not require the scheme to be lowercased but
	  // all common browsers except Safari lowercase the scheme.
	  return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase();
	};
	URI.prototype.getRawScheme = function () {
	  return this.scheme_;
	};
	URI.prototype.setScheme = function (newScheme) {
	  this.scheme_ = encodeIfExists2(
	      newScheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);
	  return this;
	};
	URI.prototype.setRawScheme = function (newScheme) {
	  this.scheme_ = newScheme ? newScheme : null;
	  return this;
	};
	URI.prototype.hasScheme = function () {
	  return null !== this.scheme_;
	};


	URI.prototype.getCredentials = function () {
	  return this.credentials_ && decodeURIComponent(this.credentials_);
	};
	URI.prototype.getRawCredentials = function () {
	  return this.credentials_;
	};
	URI.prototype.setCredentials = function (newCredentials) {
	  this.credentials_ = encodeIfExists2(
	      newCredentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);

	  return this;
	};
	URI.prototype.setRawCredentials = function (newCredentials) {
	  this.credentials_ = newCredentials ? newCredentials : null;
	  return this;
	};
	URI.prototype.hasCredentials = function () {
	  return null !== this.credentials_;
	};


	URI.prototype.getDomain = function () {
	  return this.domain_ && decodeURIComponent(this.domain_);
	};
	URI.prototype.getRawDomain = function () {
	  return this.domain_;
	};
	URI.prototype.setDomain = function (newDomain) {
	  return this.setRawDomain(newDomain && encodeURIComponent(newDomain));
	};
	URI.prototype.setRawDomain = function (newDomain) {
	  this.domain_ = newDomain ? newDomain : null;
	  // Maintain the invariant that paths must start with a slash when the URI
	  // is not path-relative.
	  return this.setRawPath(this.path_);
	};
	URI.prototype.hasDomain = function () {
	  return null !== this.domain_;
	};


	URI.prototype.getPort = function () {
	  return this.port_ && decodeURIComponent(this.port_);
	};
	URI.prototype.setPort = function (newPort) {
	  if (newPort) {
	    newPort = Number(newPort);
	    if (newPort !== (newPort & 0xffff)) {
	      throw new Error('Bad port number ' + newPort);
	    }
	    this.port_ = '' + newPort;
	  } else {
	    this.port_ = null;
	  }
	  return this;
	};
	URI.prototype.hasPort = function () {
	  return null !== this.port_;
	};


	URI.prototype.getPath = function () {
	  return this.path_ && decodeURIComponent(this.path_);
	};
	URI.prototype.getRawPath = function () {
	  return this.path_;
	};
	URI.prototype.setPath = function (newPath) {
	  return this.setRawPath(encodeIfExists2(newPath, URI_DISALLOWED_IN_PATH_));
	};
	URI.prototype.setRawPath = function (newPath) {
	  if (newPath) {
	    newPath = String(newPath);
	    this.path_ = 
	      // Paths must start with '/' unless this is a path-relative URL.
	      (!this.domain_ || /^\//.test(newPath)) ? newPath : '/' + newPath;
	  } else {
	    this.path_ = null;
	  }
	  return this;
	};
	URI.prototype.hasPath = function () {
	  return null !== this.path_;
	};


	URI.prototype.getQuery = function () {
	  // From http://www.w3.org/Addressing/URL/4_URI_Recommentations.html
	  // Within the query string, the plus sign is reserved as shorthand notation
	  // for a space.
	  return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, ' ');
	};
	URI.prototype.getRawQuery = function () {
	  return this.query_;
	};
	URI.prototype.setQuery = function (newQuery) {
	  this.paramCache_ = null;
	  this.query_ = encodeIfExists(newQuery);
	  return this;
	};
	URI.prototype.setRawQuery = function (newQuery) {
	  this.paramCache_ = null;
	  this.query_ = newQuery ? newQuery : null;
	  return this;
	};
	URI.prototype.hasQuery = function () {
	  return null !== this.query_;
	};

	/**
	 * sets the query given a list of strings of the form
	 * [ key0, value0, key1, value1, ... ].
	 *
	 * <p><code>uri.setAllParameters(['a', 'b', 'c', 'd']).getQuery()</code>
	 * will yield <code>'a=b&c=d'</code>.
	 */
	URI.prototype.setAllParameters = function (params) {
	  if (typeof params === 'object') {
	    if (!(params instanceof Array)
	        && (params instanceof Object
	            || Object.prototype.toString.call(params) !== '[object Array]')) {
	      var newParams = [];
	      var i = -1;
	      for (var k in params) {
	        var v = params[k];
	        if ('string' === typeof v) {
	          newParams[++i] = k;
	          newParams[++i] = v;
	        }
	      }
	      params = newParams;
	    }
	  }
	  this.paramCache_ = null;
	  var queryBuf = [];
	  var separator = '';
	  for (var j = 0; j < params.length;) {
	    var k = params[j++];
	    var v = params[j++];
	    queryBuf.push(separator, encodeURIComponent(k.toString()));
	    separator = '&';
	    if (v) {
	      queryBuf.push('=', encodeURIComponent(v.toString()));
	    }
	  }
	  this.query_ = queryBuf.join('');
	  return this;
	};
	URI.prototype.checkParameterCache_ = function () {
	  if (!this.paramCache_) {
	    var q = this.query_;
	    if (!q) {
	      this.paramCache_ = [];
	    } else {
	      var cgiParams = q.split(/[&\?]/);
	      var out = [];
	      var k = -1;
	      for (var i = 0; i < cgiParams.length; ++i) {
	        var m = cgiParams[i].match(/^([^=]*)(?:=(.*))?$/);
	        // From http://www.w3.org/Addressing/URL/4_URI_Recommentations.html
	        // Within the query string, the plus sign is reserved as shorthand
	        // notation for a space.
	        out[++k] = decodeURIComponent(m[1]).replace(/\+/g, ' ');
	        out[++k] = decodeURIComponent(m[2] || '').replace(/\+/g, ' ');
	      }
	      this.paramCache_ = out;
	    }
	  }
	};
	/**
	 * sets the values of the named cgi parameters.
	 *
	 * <p>So, <code>uri.parse('foo?a=b&c=d&e=f').setParameterValues('c', ['new'])
	 * </code> yields <tt>foo?a=b&c=new&e=f</tt>.</p>
	 *
	 * @param key {string}
	 * @param values {Array.<string>} the new values.  If values is a single string
	 *   then it will be treated as the sole value.
	 */
	URI.prototype.setParameterValues = function (key, values) {
	  // be nice and avoid subtle bugs where [] operator on string performs charAt
	  // on some browsers and crashes on IE
	  if (typeof values === 'string') {
	    values = [ values ];
	  }

	  this.checkParameterCache_();
	  var newValueIndex = 0;
	  var pc = this.paramCache_;
	  var params = [];
	  for (var i = 0, k = 0; i < pc.length; i += 2) {
	    if (key === pc[i]) {
	      if (newValueIndex < values.length) {
	        params.push(key, values[newValueIndex++]);
	      }
	    } else {
	      params.push(pc[i], pc[i + 1]);
	    }
	  }
	  while (newValueIndex < values.length) {
	    params.push(key, values[newValueIndex++]);
	  }
	  this.setAllParameters(params);
	  return this;
	};
	URI.prototype.removeParameter = function (key) {
	  return this.setParameterValues(key, []);
	};
	/**
	 * returns the parameters specified in the query part of the uri as a list of
	 * keys and values like [ key0, value0, key1, value1, ... ].
	 *
	 * @return {Array.<string>}
	 */
	URI.prototype.getAllParameters = function () {
	  this.checkParameterCache_();
	  return this.paramCache_.slice(0, this.paramCache_.length);
	};
	/**
	 * returns the value<b>s</b> for a given cgi parameter as a list of decoded
	 * query parameter values.
	 * @return {Array.<string>}
	 */
	URI.prototype.getParameterValues = function (paramNameUnescaped) {
	  this.checkParameterCache_();
	  var values = [];
	  for (var i = 0; i < this.paramCache_.length; i += 2) {
	    if (paramNameUnescaped === this.paramCache_[i]) {
	      values.push(this.paramCache_[i + 1]);
	    }
	  }
	  return values;
	};
	/**
	 * returns a map of cgi parameter names to (non-empty) lists of values.
	 * @return {Object.<string,Array.<string>>}
	 */
	URI.prototype.getParameterMap = function (paramNameUnescaped) {
	  this.checkParameterCache_();
	  var paramMap = {};
	  for (var i = 0; i < this.paramCache_.length; i += 2) {
	    var key = this.paramCache_[i++],
	      value = this.paramCache_[i++];
	    if (!(key in paramMap)) {
	      paramMap[key] = [value];
	    } else {
	      paramMap[key].push(value);
	    }
	  }
	  return paramMap;
	};
	/**
	 * returns the first value for a given cgi parameter or null if the given
	 * parameter name does not appear in the query string.
	 * If the given parameter name does appear, but has no '<tt>=</tt>' following
	 * it, then the empty string will be returned.
	 * @return {string|null}
	 */
	URI.prototype.getParameterValue = function (paramNameUnescaped) {
	  this.checkParameterCache_();
	  for (var i = 0; i < this.paramCache_.length; i += 2) {
	    if (paramNameUnescaped === this.paramCache_[i]) {
	      return this.paramCache_[i + 1];
	    }
	  }
	  return null;
	};

	URI.prototype.getFragment = function () {
	  return this.fragment_ && decodeURIComponent(this.fragment_);
	};
	URI.prototype.getRawFragment = function () {
	  return this.fragment_;
	};
	URI.prototype.setFragment = function (newFragment) {
	  this.fragment_ = newFragment ? encodeURIComponent(newFragment) : null;
	  return this;
	};
	URI.prototype.setRawFragment = function (newFragment) {
	  this.fragment_ = newFragment ? newFragment : null;
	  return this;
	};
	URI.prototype.hasFragment = function () {
	  return null !== this.fragment_;
	};

	function nullIfAbsent(matchPart) {
	  return ('string' == typeof matchPart) && (matchPart.length > 0)
	         ? matchPart
	         : null;
	}




	/**
	 * a regular expression for breaking a URI into its component parts.
	 *
	 * <p>http://www.gbiv.com/protocols/uri/rfc/rfc3986.html#RFC2234 says
	 * As the "first-match-wins" algorithm is identical to the "greedy"
	 * disambiguation method used by POSIX regular expressions, it is natural and
	 * commonplace to use a regular expression for parsing the potential five
	 * components of a URI reference.
	 *
	 * <p>The following line is the regular expression for breaking-down a
	 * well-formed URI reference into its components.
	 *
	 * <pre>
	 * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
	 *  12            3  4          5       6  7        8 9
	 * </pre>
	 *
	 * <p>The numbers in the second line above are only to assist readability; they
	 * indicate the reference points for each subexpression (i.e., each paired
	 * parenthesis). We refer to the value matched for subexpression <n> as $<n>.
	 * For example, matching the above expression to
	 * <pre>
	 *     http://www.ics.uci.edu/pub/ietf/uri/#Related
	 * </pre>
	 * results in the following subexpression matches:
	 * <pre>
	 *    $1 = http:
	 *    $2 = http
	 *    $3 = //www.ics.uci.edu
	 *    $4 = www.ics.uci.edu
	 *    $5 = /pub/ietf/uri/
	 *    $6 = <undefined>
	 *    $7 = <undefined>
	 *    $8 = #Related
	 *    $9 = Related
	 * </pre>
	 * where <undefined> indicates that the component is not present, as is the
	 * case for the query component in the above example. Therefore, we can
	 * determine the value of the five components as
	 * <pre>
	 *    scheme    = $2
	 *    authority = $4
	 *    path      = $5
	 *    query     = $7
	 *    fragment  = $9
	 * </pre>
	 *
	 * <p>msamuel: I have modified the regular expression slightly to expose the
	 * credentials, domain, and port separately from the authority.
	 * The modified version yields
	 * <pre>
	 *    $1 = http              scheme
	 *    $2 = <undefined>       credentials -\
	 *    $3 = www.ics.uci.edu   domain       | authority
	 *    $4 = <undefined>       port        -/
	 *    $5 = /pub/ietf/uri/    path
	 *    $6 = <undefined>       query without ?
	 *    $7 = Related           fragment without #
	 * </pre>
	 */
	var URI_RE_ = new RegExp(
	      "^" +
	      "(?:" +
	        "([^:/?#]+)" +         // scheme
	      ":)?" +
	      "(?://" +
	        "(?:([^/?#]*)@)?" +    // credentials
	        "([^/?#:@]*)" +        // domain
	        "(?::([0-9]+))?" +     // port
	      ")?" +
	      "([^?#]+)?" +            // path
	      "(?:\\?([^#]*))?" +      // query
	      "(?:#(.*))?" +           // fragment
	      "$"
	      );

	var URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_ = /[#\/\?@]/g;
	var URI_DISALLOWED_IN_PATH_ = /[\#\?]/g;

	URI.parse = parse;
	URI.create = create;
	URI.resolve = resolve;
	URI.collapse_dots = collapse_dots;  // Visible for testing.

	// lightweight string-based api for loadModuleMaker
	URI.utils = {
	  mimeTypeOf: function (uri) {
	    var uriObj = parse(uri);
	    if (/\.html$/.test(uriObj.getPath())) {
	      return 'text/html';
	    } else {
	      return 'application/javascript';
	    }
	  },
	  resolve: function (base, uri) {
	    if (base) {
	      return resolve(parse(base), parse(uri)).toString();
	    } else {
	      return '' + uri;
	    }
	  }
	};


	return URI;
	})();

	// Copyright Google Inc.
	// Licensed under the Apache Licence Version 2.0
	// Autogenerated at Mon Feb 25 13:05:42 EST 2013
	// @overrides window
	// @provides html4
	var html4 = {};
	html4.atype = {
	  'NONE': 0,
	  'URI': 1,
	  'URI_FRAGMENT': 11,
	  'SCRIPT': 2,
	  'STYLE': 3,
	  'HTML': 12,
	  'ID': 4,
	  'IDREF': 5,
	  'IDREFS': 6,
	  'GLOBAL_NAME': 7,
	  'LOCAL_NAME': 8,
	  'CLASSES': 9,
	  'FRAME_TARGET': 10,
	  'MEDIA_QUERY': 13
	};
	html4[ 'atype' ] = html4.atype;
	html4.ATTRIBS = {
	  '*::class': 9,
	  '*::dir': 0,
	  '*::draggable': 0,
	  '*::hidden': 0,
	  '*::id': 4,
	  '*::inert': 0,
	  '*::itemprop': 0,
	  '*::itemref': 6,
	  '*::itemscope': 0,
	  '*::lang': 0,
	  '*::onblur': 2,
	  '*::onchange': 2,
	  '*::onclick': 2,
	  '*::ondblclick': 2,
	  '*::onfocus': 2,
	  '*::onkeydown': 2,
	  '*::onkeypress': 2,
	  '*::onkeyup': 2,
	  '*::onload': 2,
	  '*::onmousedown': 2,
	  '*::onmousemove': 2,
	  '*::onmouseout': 2,
	  '*::onmouseover': 2,
	  '*::onmouseup': 2,
	  '*::onreset': 2,
	  '*::onscroll': 2,
	  '*::onselect': 2,
	  '*::onsubmit': 2,
	  '*::onunload': 2,
	  '*::spellcheck': 0,
	  '*::style': 3,
	  '*::title': 0,
	  '*::translate': 0,
	  'a::accesskey': 0,
	  'a::coords': 0,
	  'a::href': 1,
	  'a::hreflang': 0,
	  'a::name': 7,
	  'a::onblur': 2,
	  'a::onfocus': 2,
	  'a::shape': 0,
	  'a::tabindex': 0,
	  'a::target': 10,
	  'a::type': 0,
	  'area::accesskey': 0,
	  'area::alt': 0,
	  'area::coords': 0,
	  'area::href': 1,
	  'area::nohref': 0,
	  'area::onblur': 2,
	  'area::onfocus': 2,
	  'area::shape': 0,
	  'area::tabindex': 0,
	  'area::target': 10,
	  'audio::controls': 0,
	  'audio::loop': 0,
	  'audio::mediagroup': 5,
	  'audio::muted': 0,
	  'audio::preload': 0,
	  'bdo::dir': 0,
	  'blockquote::cite': 1,
	  'br::clear': 0,
	  'button::accesskey': 0,
	  'button::disabled': 0,
	  'button::name': 8,
	  'button::onblur': 2,
	  'button::onfocus': 2,
	  'button::tabindex': 0,
	  'button::type': 0,
	  'button::value': 0,
	  'canvas::height': 0,
	  'canvas::width': 0,
	  'caption::align': 0,
	  'col::align': 0,
	  'col::char': 0,
	  'col::charoff': 0,
	  'col::span': 0,
	  'col::valign': 0,
	  'col::width': 0,
	  'colgroup::align': 0,
	  'colgroup::char': 0,
	  'colgroup::charoff': 0,
	  'colgroup::span': 0,
	  'colgroup::valign': 0,
	  'colgroup::width': 0,
	  'command::checked': 0,
	  'command::command': 5,
	  'command::disabled': 0,
	  'command::icon': 1,
	  'command::label': 0,
	  'command::radiogroup': 0,
	  'command::type': 0,
	  'data::value': 0,
	  'del::cite': 1,
	  'del::datetime': 0,
	  'details::open': 0,
	  'dir::compact': 0,
	  'div::align': 0,
	  'dl::compact': 0,
	  'fieldset::disabled': 0,
	  'font::color': 0,
	  'font::face': 0,
	  'font::size': 0,
	  'form::accept': 0,
	  'form::action': 1,
	  'form::autocomplete': 0,
	  'form::enctype': 0,
	  'form::method': 0,
	  'form::name': 7,
	  'form::novalidate': 0,
	  'form::onreset': 2,
	  'form::onsubmit': 2,
	  'form::target': 10,
	  'h1::align': 0,
	  'h2::align': 0,
	  'h3::align': 0,
	  'h4::align': 0,
	  'h5::align': 0,
	  'h6::align': 0,
	  'hr::align': 0,
	  'hr::noshade': 0,
	  'hr::size': 0,
	  'hr::width': 0,
	  'iframe::align': 0,
	  'iframe::frameborder': 0,
	  'iframe::height': 0,
	  'iframe::marginheight': 0,
	  'iframe::marginwidth': 0,
	  'iframe::width': 0,
	  'img::align': 0,
	  'img::alt': 0,
	  'img::border': 0,
	  'img::height': 0,
	  'img::hspace': 0,
	  'img::ismap': 0,
	  'img::name': 7,
	  'img::src': 1,
	  'img::usemap': 11,
	  'img::vspace': 0,
	  'img::width': 0,
	  'input::accept': 0,
	  'input::accesskey': 0,
	  'input::align': 0,
	  'input::alt': 0,
	  'input::autocomplete': 0,
	  'input::checked': 0,
	  'input::disabled': 0,
	  'input::inputmode': 0,
	  'input::ismap': 0,
	  'input::list': 5,
	  'input::max': 0,
	  'input::maxlength': 0,
	  'input::min': 0,
	  'input::multiple': 0,
	  'input::name': 8,
	  'input::onblur': 2,
	  'input::onchange': 2,
	  'input::onfocus': 2,
	  'input::onselect': 2,
	  'input::placeholder': 0,
	  'input::readonly': 0,
	  'input::required': 0,
	  'input::size': 0,
	  'input::src': 1,
	  'input::step': 0,
	  'input::tabindex': 0,
	  'input::type': 0,
	  'input::usemap': 11,
	  'input::value': 0,
	  'ins::cite': 1,
	  'ins::datetime': 0,
	  'label::accesskey': 0,
	  'label::for': 5,
	  'label::onblur': 2,
	  'label::onfocus': 2,
	  'legend::accesskey': 0,
	  'legend::align': 0,
	  'li::type': 0,
	  'li::value': 0,
	  'map::name': 7,
	  'menu::compact': 0,
	  'menu::label': 0,
	  'menu::type': 0,
	  'meter::high': 0,
	  'meter::low': 0,
	  'meter::max': 0,
	  'meter::min': 0,
	  'meter::value': 0,
	  'ol::compact': 0,
	  'ol::reversed': 0,
	  'ol::start': 0,
	  'ol::type': 0,
	  'optgroup::disabled': 0,
	  'optgroup::label': 0,
	  'option::disabled': 0,
	  'option::label': 0,
	  'option::selected': 0,
	  'option::value': 0,
	  'output::for': 6,
	  'output::name': 8,
	  'p::align': 0,
	  'pre::width': 0,
	  'progress::max': 0,
	  'progress::min': 0,
	  'progress::value': 0,
	  'q::cite': 1,
	  'select::autocomplete': 0,
	  'select::disabled': 0,
	  'select::multiple': 0,
	  'select::name': 8,
	  'select::onblur': 2,
	  'select::onchange': 2,
	  'select::onfocus': 2,
	  'select::required': 0,
	  'select::size': 0,
	  'select::tabindex': 0,
	  'source::type': 0,
	  'table::align': 0,
	  'table::bgcolor': 0,
	  'table::border': 0,
	  'table::cellpadding': 0,
	  'table::cellspacing': 0,
	  'table::frame': 0,
	  'table::rules': 0,
	  'table::summary': 0,
	  'table::width': 0,
	  'tbody::align': 0,
	  'tbody::char': 0,
	  'tbody::charoff': 0,
	  'tbody::valign': 0,
	  'td::abbr': 0,
	  'td::align': 0,
	  'td::axis': 0,
	  'td::bgcolor': 0,
	  'td::char': 0,
	  'td::charoff': 0,
	  'td::colspan': 0,
	  'td::headers': 6,
	  'td::height': 0,
	  'td::nowrap': 0,
	  'td::rowspan': 0,
	  'td::scope': 0,
	  'td::valign': 0,
	  'td::width': 0,
	  'textarea::accesskey': 0,
	  'textarea::autocomplete': 0,
	  'textarea::cols': 0,
	  'textarea::disabled': 0,
	  'textarea::inputmode': 0,
	  'textarea::name': 8,
	  'textarea::onblur': 2,
	  'textarea::onchange': 2,
	  'textarea::onfocus': 2,
	  'textarea::onselect': 2,
	  'textarea::placeholder': 0,
	  'textarea::readonly': 0,
	  'textarea::required': 0,
	  'textarea::rows': 0,
	  'textarea::tabindex': 0,
	  'textarea::wrap': 0,
	  'tfoot::align': 0,
	  'tfoot::char': 0,
	  'tfoot::charoff': 0,
	  'tfoot::valign': 0,
	  'th::abbr': 0,
	  'th::align': 0,
	  'th::axis': 0,
	  'th::bgcolor': 0,
	  'th::char': 0,
	  'th::charoff': 0,
	  'th::colspan': 0,
	  'th::headers': 6,
	  'th::height': 0,
	  'th::nowrap': 0,
	  'th::rowspan': 0,
	  'th::scope': 0,
	  'th::valign': 0,
	  'th::width': 0,
	  'thead::align': 0,
	  'thead::char': 0,
	  'thead::charoff': 0,
	  'thead::valign': 0,
	  'tr::align': 0,
	  'tr::bgcolor': 0,
	  'tr::char': 0,
	  'tr::charoff': 0,
	  'tr::valign': 0,
	  'track::default': 0,
	  'track::kind': 0,
	  'track::label': 0,
	  'track::srclang': 0,
	  'ul::compact': 0,
	  'ul::type': 0,
	  'video::controls': 0,
	  'video::height': 0,
	  'video::loop': 0,
	  'video::mediagroup': 5,
	  'video::muted': 0,
	  'video::poster': 1,
	  'video::preload': 0,
	  'video::width': 0
	};
	html4[ 'ATTRIBS' ] = html4.ATTRIBS;
	html4.eflags = {
	  'OPTIONAL_ENDTAG': 1,
	  'EMPTY': 2,
	  'CDATA': 4,
	  'RCDATA': 8,
	  'UNSAFE': 16,
	  'FOLDABLE': 32,
	  'SCRIPT': 64,
	  'STYLE': 128,
	  'VIRTUALIZED': 256
	};
	html4[ 'eflags' ] = html4.eflags;
	// these are bitmasks of the eflags above.
	html4.ELEMENTS = {
	  'a': 0,
	  'abbr': 0,
	  'acronym': 0,
	  'address': 0,
	  'applet': 272,
	  'area': 2,
	  'article': 0,
	  'aside': 0,
	  'audio': 0,
	  'b': 0,
	  'base': 274,
	  'basefont': 274,
	  'bdi': 0,
	  'bdo': 0,
	  'big': 0,
	  'blockquote': 0,
	  'body': 305,
	  'br': 2,
	  'button': 0,
	  'canvas': 0,
	  'caption': 0,
	  'center': 0,
	  'cite': 0,
	  'code': 0,
	  'col': 2,
	  'colgroup': 1,
	  'command': 2,
	  'data': 0,
	  'datalist': 0,
	  'dd': 1,
	  'del': 0,
	  'details': 0,
	  'dfn': 0,
	  'dialog': 272,
	  'dir': 0,
	  'div': 0,
	  'dl': 0,
	  'dt': 1,
	  'em': 0,
	  'fieldset': 0,
	  'figcaption': 0,
	  'figure': 0,
	  'font': 0,
	  'footer': 0,
	  'form': 0,
	  'frame': 274,
	  'frameset': 272,
	  'h1': 0,
	  'h2': 0,
	  'h3': 0,
	  'h4': 0,
	  'h5': 0,
	  'h6': 0,
	  'head': 305,
	  'header': 0,
	  'hgroup': 0,
	  'hr': 2,
	  'html': 305,
	  'i': 0,
	  'iframe': 16,
	  'img': 2,
	  'input': 2,
	  'ins': 0,
	  'isindex': 274,
	  'kbd': 0,
	  'keygen': 274,
	  'label': 0,
	  'legend': 0,
	  'li': 1,
	  'link': 274,
	  'map': 0,
	  'mark': 0,
	  'menu': 0,
	  'meta': 274,
	  'meter': 0,
	  'nav': 0,
	  'nobr': 0,
	  'noembed': 276,
	  'noframes': 276,
	  'noscript': 276,
	  'object': 272,
	  'ol': 0,
	  'optgroup': 0,
	  'option': 1,
	  'output': 0,
	  'p': 1,
	  'param': 274,
	  'pre': 0,
	  'progress': 0,
	  'q': 0,
	  's': 0,
	  'samp': 0,
	  'script': 84,
	  'section': 0,
	  'select': 0,
	  'small': 0,
	  'source': 2,
	  'span': 0,
	  'strike': 0,
	  'strong': 0,
	  'style': 148,
	  'sub': 0,
	  'summary': 0,
	  'sup': 0,
	  'table': 0,
	  'tbody': 1,
	  'td': 1,
	  'textarea': 8,
	  'tfoot': 1,
	  'th': 1,
	  'thead': 1,
	  'time': 0,
	  'title': 280,
	  'tr': 1,
	  'track': 2,
	  'tt': 0,
	  'u': 0,
	  'ul': 0,
	  'var': 0,
	  'video': 0,
	  'wbr': 2
	};
	html4[ 'ELEMENTS' ] = html4.ELEMENTS;
	html4.ELEMENT_DOM_INTERFACES = {
	  'a': 'HTMLAnchorElement',
	  'abbr': 'HTMLElement',
	  'acronym': 'HTMLElement',
	  'address': 'HTMLElement',
	  'applet': 'HTMLAppletElement',
	  'area': 'HTMLAreaElement',
	  'article': 'HTMLElement',
	  'aside': 'HTMLElement',
	  'audio': 'HTMLAudioElement',
	  'b': 'HTMLElement',
	  'base': 'HTMLBaseElement',
	  'basefont': 'HTMLBaseFontElement',
	  'bdi': 'HTMLElement',
	  'bdo': 'HTMLElement',
	  'big': 'HTMLElement',
	  'blockquote': 'HTMLQuoteElement',
	  'body': 'HTMLBodyElement',
	  'br': 'HTMLBRElement',
	  'button': 'HTMLButtonElement',
	  'canvas': 'HTMLCanvasElement',
	  'caption': 'HTMLTableCaptionElement',
	  'center': 'HTMLElement',
	  'cite': 'HTMLElement',
	  'code': 'HTMLElement',
	  'col': 'HTMLTableColElement',
	  'colgroup': 'HTMLTableColElement',
	  'command': 'HTMLCommandElement',
	  'data': 'HTMLElement',
	  'datalist': 'HTMLDataListElement',
	  'dd': 'HTMLElement',
	  'del': 'HTMLModElement',
	  'details': 'HTMLDetailsElement',
	  'dfn': 'HTMLElement',
	  'dialog': 'HTMLDialogElement',
	  'dir': 'HTMLDirectoryElement',
	  'div': 'HTMLDivElement',
	  'dl': 'HTMLDListElement',
	  'dt': 'HTMLElement',
	  'em': 'HTMLElement',
	  'fieldset': 'HTMLFieldSetElement',
	  'figcaption': 'HTMLElement',
	  'figure': 'HTMLElement',
	  'font': 'HTMLFontElement',
	  'footer': 'HTMLElement',
	  'form': 'HTMLFormElement',
	  'frame': 'HTMLFrameElement',
	  'frameset': 'HTMLFrameSetElement',
	  'h1': 'HTMLHeadingElement',
	  'h2': 'HTMLHeadingElement',
	  'h3': 'HTMLHeadingElement',
	  'h4': 'HTMLHeadingElement',
	  'h5': 'HTMLHeadingElement',
	  'h6': 'HTMLHeadingElement',
	  'head': 'HTMLHeadElement',
	  'header': 'HTMLElement',
	  'hgroup': 'HTMLElement',
	  'hr': 'HTMLHRElement',
	  'html': 'HTMLHtmlElement',
	  'i': 'HTMLElement',
	  'iframe': 'HTMLIFrameElement',
	  'img': 'HTMLImageElement',
	  'input': 'HTMLInputElement',
	  'ins': 'HTMLModElement',
	  'isindex': 'HTMLUnknownElement',
	  'kbd': 'HTMLElement',
	  'keygen': 'HTMLKeygenElement',
	  'label': 'HTMLLabelElement',
	  'legend': 'HTMLLegendElement',
	  'li': 'HTMLLIElement',
	  'link': 'HTMLLinkElement',
	  'map': 'HTMLMapElement',
	  'mark': 'HTMLElement',
	  'menu': 'HTMLMenuElement',
	  'meta': 'HTMLMetaElement',
	  'meter': 'HTMLMeterElement',
	  'nav': 'HTMLElement',
	  'nobr': 'HTMLElement',
	  'noembed': 'HTMLElement',
	  'noframes': 'HTMLElement',
	  'noscript': 'HTMLElement',
	  'object': 'HTMLObjectElement',
	  'ol': 'HTMLOListElement',
	  'optgroup': 'HTMLOptGroupElement',
	  'option': 'HTMLOptionElement',
	  'output': 'HTMLOutputElement',
	  'p': 'HTMLParagraphElement',
	  'param': 'HTMLParamElement',
	  'pre': 'HTMLPreElement',
	  'progress': 'HTMLProgressElement',
	  'q': 'HTMLQuoteElement',
	  's': 'HTMLElement',
	  'samp': 'HTMLElement',
	  'script': 'HTMLScriptElement',
	  'section': 'HTMLElement',
	  'select': 'HTMLSelectElement',
	  'small': 'HTMLElement',
	  'source': 'HTMLSourceElement',
	  'span': 'HTMLSpanElement',
	  'strike': 'HTMLElement',
	  'strong': 'HTMLElement',
	  'style': 'HTMLStyleElement',
	  'sub': 'HTMLElement',
	  'summary': 'HTMLElement',
	  'sup': 'HTMLElement',
	  'table': 'HTMLTableElement',
	  'tbody': 'HTMLTableSectionElement',
	  'td': 'HTMLTableDataCellElement',
	  'textarea': 'HTMLTextAreaElement',
	  'tfoot': 'HTMLTableSectionElement',
	  'th': 'HTMLTableHeaderCellElement',
	  'thead': 'HTMLTableSectionElement',
	  'time': 'HTMLTimeElement',
	  'title': 'HTMLTitleElement',
	  'tr': 'HTMLTableRowElement',
	  'track': 'HTMLTrackElement',
	  'tt': 'HTMLElement',
	  'u': 'HTMLElement',
	  'ul': 'HTMLUListElement',
	  'var': 'HTMLElement',
	  'video': 'HTMLVideoElement',
	  'wbr': 'HTMLElement'
	};
	html4[ 'ELEMENT_DOM_INTERFACES' ] = html4.ELEMENT_DOM_INTERFACES;
	html4.ueffects = {
	  'NOT_LOADED': 0,
	  'SAME_DOCUMENT': 1,
	  'NEW_DOCUMENT': 2
	};
	html4[ 'ueffects' ] = html4.ueffects;
	html4.URIEFFECTS = {
	  'a::href': 2,
	  'area::href': 2,
	  'blockquote::cite': 0,
	  'command::icon': 1,
	  'del::cite': 0,
	  'form::action': 2,
	  'img::src': 1,
	  'input::src': 1,
	  'ins::cite': 0,
	  'q::cite': 0,
	  'video::poster': 1
	};
	html4[ 'URIEFFECTS' ] = html4.URIEFFECTS;
	html4.ltypes = {
	  'UNSANDBOXED': 2,
	  'SANDBOXED': 1,
	  'DATA': 0
	};
	html4[ 'ltypes' ] = html4.ltypes;
	html4.LOADERTYPES = {
	  'a::href': 2,
	  'area::href': 2,
	  'blockquote::cite': 2,
	  'command::icon': 1,
	  'del::cite': 2,
	  'form::action': 2,
	  'img::src': 1,
	  'input::src': 1,
	  'ins::cite': 2,
	  'q::cite': 2,
	  'video::poster': 1
	};
	html4[ 'LOADERTYPES' ] = html4.LOADERTYPES;

	// Copyright (C) 2006 Google Inc.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.

	/**
	 * @fileoverview
	 * An HTML sanitizer that can satisfy a variety of security policies.
	 *
	 * <p>
	 * The HTML sanitizer is built around a SAX parser and HTML element and
	 * attributes schemas.
	 *
	 * If the cssparser is loaded, inline styles are sanitized using the
	 * css property and value schemas.  Else they are remove during
	 * sanitization.
	 *
	 * If it exists, uses parseCssDeclarations, sanitizeCssProperty,  cssSchema
	 *
	 * @author mikesamuel@gmail.com
	 * @author jasvir@gmail.com
	 * \@requires html4, URI
	 * \@overrides window
	 * \@provides html, html_sanitize
	 */

	// The Turkish i seems to be a non-issue, but abort in case it is.
	if ('I'.toLowerCase() !== 'i') { throw 'I/i problem'; }

	/**
	 * \@namespace
	 */
	var html = (function(html4) {

	  // For closure compiler
	  var parseCssDeclarations, sanitizeCssProperty, cssSchema;
	  if ('undefined' !== typeof window) {
	    parseCssDeclarations = window['parseCssDeclarations'];
	    sanitizeCssProperty = window['sanitizeCssProperty'];
	    cssSchema = window['cssSchema'];
	  }

	  // The keys of this object must be 'quoted' or JSCompiler will mangle them!
	  // This is a partial list -- lookupEntity() uses the host browser's parser
	  // (when available) to implement full entity lookup.
	  // Note that entities are in general case-sensitive; the uppercase ones are
	  // explicitly defined by HTML5 (presumably as compatibility).
	  var ENTITIES = {
	    'lt': '<',
	    'LT': '<',
	    'gt': '>',
	    'GT': '>',
	    'amp': '&',
	    'AMP': '&',
	    'quot': '"',
	    'apos': '\'',
	    'nbsp': '\u00A0'
	  };

	  // Patterns for types of entity/character reference names.
	  var decimalEscapeRe = /^#(\d+)$/;
	  var hexEscapeRe = /^#x([0-9A-Fa-f]+)$/;
	  // contains every entity per http://www.w3.org/TR/2011/WD-html5-20110113/named-character-references.html
	  var safeEntityNameRe = /^[A-Za-z][A-za-z0-9]+$/;
	  // Used as a hook to invoke the browser's entity parsing. <textarea> is used
	  // because its content is parsed for entities but not tags.
	  // TODO(kpreid): This retrieval is a kludge and leads to silent loss of
	  // functionality if the document isn't available.
	  var entityLookupElement =
	      ('undefined' !== typeof window && window['document'])
	          ? window['document'].createElement('textarea') : null;
	  /**
	   * Decodes an HTML entity.
	   *
	   * {\@updoc
	   * $ lookupEntity('lt')
	   * # '<'
	   * $ lookupEntity('GT')
	   * # '>'
	   * $ lookupEntity('amp')
	   * # '&'
	   * $ lookupEntity('nbsp')
	   * # '\xA0'
	   * $ lookupEntity('apos')
	   * # "'"
	   * $ lookupEntity('quot')
	   * # '"'
	   * $ lookupEntity('#xa')
	   * # '\n'
	   * $ lookupEntity('#10')
	   * # '\n'
	   * $ lookupEntity('#x0a')
	   * # '\n'
	   * $ lookupEntity('#010')
	   * # '\n'
	   * $ lookupEntity('#x00A')
	   * # '\n'
	   * $ lookupEntity('Pi')      // Known failure
	   * # '\u03A0'
	   * $ lookupEntity('pi')      // Known failure
	   * # '\u03C0'
	   * }
	   *
	   * @param {string} name the content between the '&' and the ';'.
	   * @return {string} a single unicode code-point as a string.
	   */
	  function lookupEntity(name) {
	    // TODO: entity lookup as specified by HTML5 actually depends on the
	    // presence of the ";".
	    if (ENTITIES.hasOwnProperty(name)) { return ENTITIES[name]; }
	    var m = name.match(decimalEscapeRe);
	    if (m) {
	      return String.fromCharCode(parseInt(m[1], 10));
	    } else if (!!(m = name.match(hexEscapeRe))) {
	      return String.fromCharCode(parseInt(m[1], 16));
	    } else if (entityLookupElement && safeEntityNameRe.test(name)) {
	      entityLookupElement.innerHTML = '&' + name + ';';
	      var text = entityLookupElement.textContent;
	      ENTITIES[name] = text;
	      return text;
	    } else {
	      return '&' + name + ';';
	    }
	  }

	  function decodeOneEntity(_, name) {
	    return lookupEntity(name);
	  }

	  var nulRe = /\0/g;
	  function stripNULs(s) {
	    return s.replace(nulRe, '');
	  }

	  var ENTITY_RE_1 = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g;
	  var ENTITY_RE_2 = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/;
	  /**
	   * The plain text of a chunk of HTML CDATA which possibly containing.
	   *
	   * {\@updoc
	   * $ unescapeEntities('')
	   * # ''
	   * $ unescapeEntities('hello World!')
	   * # 'hello World!'
	   * $ unescapeEntities('1 &lt; 2 &amp;&AMP; 4 &gt; 3&#10;')
	   * # '1 < 2 && 4 > 3\n'
	   * $ unescapeEntities('&lt;&lt <- unfinished entity&gt;')
	   * # '<&lt <- unfinished entity>'
	   * $ unescapeEntities('/foo?bar=baz&copy=true')  // & often unescaped in URLS
	   * # '/foo?bar=baz&copy=true'
	   * $ unescapeEntities('pi=&pi;&#x3c0;, Pi=&Pi;\u03A0') // FIXME: known failure
	   * # 'pi=\u03C0\u03c0, Pi=\u03A0\u03A0'
	   * }
	   *
	   * @param {string} s a chunk of HTML CDATA.  It must not start or end inside
	   *     an HTML entity.
	   */
	  function unescapeEntities(s) {
	    return s.replace(ENTITY_RE_1, decodeOneEntity);
	  }

	  var ampRe = /&/g;
	  var looseAmpRe = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi;
	  var ltRe = /[<]/g;
	  var gtRe = />/g;
	  var quotRe = /\"/g;

	  /**
	   * Escapes HTML special characters in attribute values.
	   *
	   * {\@updoc
	   * $ escapeAttrib('')
	   * # ''
	   * $ escapeAttrib('"<<&==&>>"')  // Do not just escape the first occurrence.
	   * # '&#34;&lt;&lt;&amp;&#61;&#61;&amp;&gt;&gt;&#34;'
	   * $ escapeAttrib('Hello <World>!')
	   * # 'Hello &lt;World&gt;!'
	   * }
	   */
	  function escapeAttrib(s) {
	    return ('' + s).replace(ampRe, '&amp;').replace(ltRe, '&lt;')
	        .replace(gtRe, '&gt;').replace(quotRe, '&#34;');
	  }

	  /**
	   * Escape entities in RCDATA that can be escaped without changing the meaning.
	   * {\@updoc
	   * $ normalizeRCData('1 < 2 &&amp; 3 > 4 &amp;& 5 &lt; 7&8')
	   * # '1 &lt; 2 &amp;&amp; 3 &gt; 4 &amp;&amp; 5 &lt; 7&amp;8'
	   * }
	   */
	  function normalizeRCData(rcdata) {
	    return rcdata
	        .replace(looseAmpRe, '&amp;$1')
	        .replace(ltRe, '&lt;')
	        .replace(gtRe, '&gt;');
	  }

	  // TODO(felix8a): validate sanitizer regexs against the HTML5 grammar at
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html

	  // We initially split input so that potentially meaningful characters
	  // like '<' and '>' are separate tokens, using a fast dumb process that
	  // ignores quoting.  Then we walk that token stream, and when we see a
	  // '<' that's the start of a tag, we use ATTR_RE to extract tag
	  // attributes from the next token.  That token will never have a '>'
	  // character.  However, it might have an unbalanced quote character, and
	  // when we see that, we combine additional tokens to balance the quote.

	  var ATTR_RE = new RegExp(
	    '^\\s*' +
	    '([-.:\\w]+)' +             // 1 = Attribute name
	    '(?:' + (
	      '\\s*(=)\\s*' +           // 2 = Is there a value?
	      '(' + (                   // 3 = Attribute value
	        // TODO(felix8a): maybe use backref to match quotes
	        '(\")[^\"]*(\"|$)' +    // 4, 5 = Double-quoted string
	        '|' +
	        '(\')[^\']*(\'|$)' +    // 6, 7 = Single-quoted string
	        '|' +
	        // Positive lookahead to prevent interpretation of
	        // <foo a= b=c> as <foo a='b=c'>
	        // TODO(felix8a): might be able to drop this case
	        '(?=[a-z][-\\w]*\\s*=)' +
	        '|' +
	        // Unquoted value that isn't an attribute name
	        // (since we didn't match the positive lookahead above)
	        '[^\"\'\\s]*' ) +
	      ')' ) +
	    ')?',
	    'i');

	  // false on IE<=8, true on most other browsers
	  var splitWillCapture = ('a,b'.split(/(,)/).length === 3);

	  // bitmask for tags with special parsing, like <script> and <textarea>
	  var EFLAGS_TEXT = html4.eflags['CDATA'] | html4.eflags['RCDATA'];

	  /**
	   * Given a SAX-like event handler, produce a function that feeds those
	   * events and a parameter to the event handler.
	   *
	   * The event handler has the form:{@code
	   * {
	   *   // Name is an upper-case HTML tag name.  Attribs is an array of
	   *   // alternating upper-case attribute names, and attribute values.  The
	   *   // attribs array is reused by the parser.  Param is the value passed to
	   *   // the saxParser.
	   *   startTag: function (name, attribs, param) { ... },
	   *   endTag:   function (name, param) { ... },
	   *   pcdata:   function (text, param) { ... },
	   *   rcdata:   function (text, param) { ... },
	   *   cdata:    function (text, param) { ... },
	   *   startDoc: function (param) { ... },
	   *   endDoc:   function (param) { ... }
	   * }}
	   *
	   * @param {Object} handler a record containing event handlers.
	   * @return {function(string, Object)} A function that takes a chunk of HTML
	   *     and a parameter.  The parameter is passed on to the handler methods.
	   */
	  function makeSaxParser(handler) {
	    // Accept quoted or unquoted keys (Closure compat)
	    var hcopy = {
	      cdata: handler.cdata || handler['cdata'],
	      comment: handler.comment || handler['comment'],
	      endDoc: handler.endDoc || handler['endDoc'],
	      endTag: handler.endTag || handler['endTag'],
	      pcdata: handler.pcdata || handler['pcdata'],
	      rcdata: handler.rcdata || handler['rcdata'],
	      startDoc: handler.startDoc || handler['startDoc'],
	      startTag: handler.startTag || handler['startTag']
	    };
	    return function(htmlText, param) {
	      return parse(htmlText, hcopy, param);
	    };
	  }

	  // Parsing strategy is to split input into parts that might be lexically
	  // meaningful (every ">" becomes a separate part), and then recombine
	  // parts if we discover they're in a different context.

	  // TODO(felix8a): Significant performance regressions from -legacy,
	  // tested on
	  //    Chrome 18.0
	  //    Firefox 11.0
	  //    IE 6, 7, 8, 9
	  //    Opera 11.61
	  //    Safari 5.1.3
	  // Many of these are unusual patterns that are linearly slower and still
	  // pretty fast (eg 1ms to 5ms), so not necessarily worth fixing.

	  // TODO(felix8a): "<script> && && && ... <\/script>" is slower on all
	  // browsers.  The hotspot is htmlSplit.

	  // TODO(felix8a): "<p title='>>>>...'><\/p>" is slower on all browsers.
	  // This is partly htmlSplit, but the hotspot is parseTagAndAttrs.

	  // TODO(felix8a): "<a><\/a><a><\/a>..." is slower on IE9.
	  // "<a>1<\/a><a>1<\/a>..." is faster, "<a><\/a>2<a><\/a>2..." is faster.

	  // TODO(felix8a): "<p<p<p..." is slower on IE[6-8]

	  var continuationMarker = {};
	  function parse(htmlText, handler, param) {
	    var m, p, tagName;
	    var parts = htmlSplit(htmlText);
	    var state = {
	      noMoreGT: false,
	      noMoreEndComments: false
	    };
	    parseCPS(handler, parts, 0, state, param);
	  }

	  function continuationMaker(h, parts, initial, state, param) {
	    return function () {
	      parseCPS(h, parts, initial, state, param);
	    };
	  }

	  function parseCPS(h, parts, initial, state, param) {
	    try {
	      if (h.startDoc && initial == 0) { h.startDoc(param); }
	      var m, p, tagName;
	      for (var pos = initial, end = parts.length; pos < end;) {
	        var current = parts[pos++];
	        var next = parts[pos];
	        switch (current) {
	        case '&':
	          if (ENTITY_RE_2.test(next)) {
	            if (h.pcdata) {
	              h.pcdata('&' + next, param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	            pos++;
	          } else {
	            if (h.pcdata) { h.pcdata("&amp;", param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<\/':
	          if (m = /^([-\w:]+)[^\'\"]*/.exec(next)) {
	            if (m[0].length === next.length && parts[pos + 1] === '>') {
	              // fast case, no attribute parsing needed
	              pos += 2;
	              tagName = m[1].toLowerCase();
	              if (h.endTag) {
	                h.endTag(tagName, param, continuationMarker,
	                  continuationMaker(h, parts, pos, state, param));
	              }
	            } else {
	              // slow case, need to parse attributes
	              // TODO(felix8a): do we really care about misparsing this?
	              pos = parseEndTag(
	                parts, pos, h, param, continuationMarker, state);
	            }
	          } else {
	            if (h.pcdata) {
	              h.pcdata('&lt;/', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<':
	          if (m = /^([-\w:]+)\s*\/?/.exec(next)) {
	            if (m[0].length === next.length && parts[pos + 1] === '>') {
	              // fast case, no attribute parsing needed
	              pos += 2;
	              tagName = m[1].toLowerCase();
	              if (h.startTag) {
	                h.startTag(tagName, [], param, continuationMarker,
	                  continuationMaker(h, parts, pos, state, param));
	              }
	              // tags like <script> and <textarea> have special parsing
	              var eflags = html4.ELEMENTS[tagName];
	              if (eflags & EFLAGS_TEXT) {
	                var tag = { name: tagName, next: pos, eflags: eflags };
	                pos = parseText(
	                  parts, tag, h, param, continuationMarker, state);
	              }
	            } else {
	              // slow case, need to parse attributes
	              pos = parseStartTag(
	                parts, pos, h, param, continuationMarker, state);
	            }
	          } else {
	            if (h.pcdata) {
	              h.pcdata('&lt;', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<\!--':
	          // The pathological case is n copies of '<\!--' without '-->', and
	          // repeated failure to find '-->' is quadratic.  We avoid that by
	          // remembering when search for '-->' fails.
	          if (!state.noMoreEndComments) {
	            // A comment <\!--x--> is split into three tokens:
	            //   '<\!--', 'x--', '>'
	            // We want to find the next '>' token that has a preceding '--'.
	            // pos is at the 'x--'.
	            for (p = pos + 1; p < end; p++) {
	              if (parts[p] === '>' && /--$/.test(parts[p - 1])) { break; }
	            }
	            if (p < end) {
	              if (h.comment) {
	                var comment = parts.slice(pos, p).join('');
	                h.comment(
	                  comment.substr(0, comment.length - 2), param,
	                  continuationMarker,
	                  continuationMaker(h, parts, p + 1, state, param));
	              }
	              pos = p + 1;
	            } else {
	              state.noMoreEndComments = true;
	            }
	          }
	          if (state.noMoreEndComments) {
	            if (h.pcdata) {
	              h.pcdata('&lt;!--', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<\!':
	          if (!/^\w/.test(next)) {
	            if (h.pcdata) {
	              h.pcdata('&lt;!', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          } else {
	            // similar to noMoreEndComment logic
	            if (!state.noMoreGT) {
	              for (p = pos + 1; p < end; p++) {
	                if (parts[p] === '>') { break; }
	              }
	              if (p < end) {
	                pos = p + 1;
	              } else {
	                state.noMoreGT = true;
	              }
	            }
	            if (state.noMoreGT) {
	              if (h.pcdata) {
	                h.pcdata('&lt;!', param, continuationMarker,
	                  continuationMaker(h, parts, pos, state, param));
	              }
	            }
	          }
	          break;
	        case '<?':
	          // similar to noMoreEndComment logic
	          if (!state.noMoreGT) {
	            for (p = pos + 1; p < end; p++) {
	              if (parts[p] === '>') { break; }
	            }
	            if (p < end) {
	              pos = p + 1;
	            } else {
	              state.noMoreGT = true;
	            }
	          }
	          if (state.noMoreGT) {
	            if (h.pcdata) {
	              h.pcdata('&lt;?', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '>':
	          if (h.pcdata) {
	            h.pcdata("&gt;", param, continuationMarker,
	              continuationMaker(h, parts, pos, state, param));
	          }
	          break;
	        case '':
	          break;
	        default:
	          if (h.pcdata) {
	            h.pcdata(current, param, continuationMarker,
	              continuationMaker(h, parts, pos, state, param));
	          }
	          break;
	        }
	      }
	      if (h.endDoc) { h.endDoc(param); }
	    } catch (e) {
	      if (e !== continuationMarker) { throw e; }
	    }
	  }

	  // Split str into parts for the html parser.
	  function htmlSplit(str) {
	    // can't hoist this out of the function because of the re.exec loop.
	    var re = /(<\/|<\!--|<[!?]|[&<>])/g;
	    str += '';
	    if (splitWillCapture) {
	      return str.split(re);
	    } else {
	      var parts = [];
	      var lastPos = 0;
	      var m;
	      while ((m = re.exec(str)) !== null) {
	        parts.push(str.substring(lastPos, m.index));
	        parts.push(m[0]);
	        lastPos = m.index + m[0].length;
	      }
	      parts.push(str.substring(lastPos));
	      return parts;
	    }
	  }

	  function parseEndTag(parts, pos, h, param, continuationMarker, state) {
	    var tag = parseTagAndAttrs(parts, pos);
	    // drop unclosed tags
	    if (!tag) { return parts.length; }
	    if (h.endTag) {
	      h.endTag(tag.name, param, continuationMarker,
	        continuationMaker(h, parts, pos, state, param));
	    }
	    return tag.next;
	  }

	  function parseStartTag(parts, pos, h, param, continuationMarker, state) {
	    var tag = parseTagAndAttrs(parts, pos);
	    // drop unclosed tags
	    if (!tag) { return parts.length; }
	    if (h.startTag) {
	      h.startTag(tag.name, tag.attrs, param, continuationMarker,
	        continuationMaker(h, parts, tag.next, state, param));
	    }
	    // tags like <script> and <textarea> have special parsing
	    if (tag.eflags & EFLAGS_TEXT) {
	      return parseText(parts, tag, h, param, continuationMarker, state);
	    } else {
	      return tag.next;
	    }
	  }

	  var endTagRe = {};

	  // Tags like <script> and <textarea> are flagged as CDATA or RCDATA,
	  // which means everything is text until we see the correct closing tag.
	  function parseText(parts, tag, h, param, continuationMarker, state) {
	    var end = parts.length;
	    if (!endTagRe.hasOwnProperty(tag.name)) {
	      endTagRe[tag.name] = new RegExp('^' + tag.name + '(?:[\\s\\/]|$)', 'i');
	    }
	    var re = endTagRe[tag.name];
	    var first = tag.next;
	    var p = tag.next + 1;
	    for (; p < end; p++) {
	      if (parts[p - 1] === '<\/' && re.test(parts[p])) { break; }
	    }
	    if (p < end) { p -= 1; }
	    var buf = parts.slice(first, p).join('');
	    if (tag.eflags & html4.eflags['CDATA']) {
	      if (h.cdata) {
	        h.cdata(buf, param, continuationMarker,
	          continuationMaker(h, parts, p, state, param));
	      }
	    } else if (tag.eflags & html4.eflags['RCDATA']) {
	      if (h.rcdata) {
	        h.rcdata(normalizeRCData(buf), param, continuationMarker,
	          continuationMaker(h, parts, p, state, param));
	      }
	    } else {
	      throw new Error('bug');
	    }
	    return p;
	  }

	  // at this point, parts[pos-1] is either "<" or "<\/".
	  function parseTagAndAttrs(parts, pos) {
	    var m = /^([-\w:]+)/.exec(parts[pos]);
	    var tag = {};
	    tag.name = m[1].toLowerCase();
	    tag.eflags = html4.ELEMENTS[tag.name];
	    var buf = parts[pos].substr(m[0].length);
	    // Find the next '>'.  We optimistically assume this '>' is not in a
	    // quoted context, and further down we fix things up if it turns out to
	    // be quoted.
	    var p = pos + 1;
	    var end = parts.length;
	    for (; p < end; p++) {
	      if (parts[p] === '>') { break; }
	      buf += parts[p];
	    }
	    if (end <= p) { return void 0; }
	    var attrs = [];
	    while (buf !== '') {
	      m = ATTR_RE.exec(buf);
	      if (!m) {
	        // No attribute found: skip garbage
	        buf = buf.replace(/^[\s\S][^a-z\s]*/, '');

	      } else if ((m[4] && !m[5]) || (m[6] && !m[7])) {
	        // Unterminated quote: slurp to the next unquoted '>'
	        var quote = m[4] || m[6];
	        var sawQuote = false;
	        var abuf = [buf, parts[p++]];
	        for (; p < end; p++) {
	          if (sawQuote) {
	            if (parts[p] === '>') { break; }
	          } else if (0 <= parts[p].indexOf(quote)) {
	            sawQuote = true;
	          }
	          abuf.push(parts[p]);
	        }
	        // Slurp failed: lose the garbage
	        if (end <= p) { break; }
	        // Otherwise retry attribute parsing
	        buf = abuf.join('');
	        continue;

	      } else {
	        // We have an attribute
	        var aName = m[1].toLowerCase();
	        var aValue = m[2] ? decodeValue(m[3]) : '';
	        attrs.push(aName, aValue);
	        buf = buf.substr(m[0].length);
	      }
	    }
	    tag.attrs = attrs;
	    tag.next = p + 1;
	    return tag;
	  }

	  function decodeValue(v) {
	    var q = v.charCodeAt(0);
	    if (q === 0x22 || q === 0x27) { // " or '
	      v = v.substr(1, v.length - 2);
	    }
	    return unescapeEntities(stripNULs(v));
	  }

	  /**
	   * Returns a function that strips unsafe tags and attributes from html.
	   * @param {function(string, Array.<string>): ?Array.<string>} tagPolicy
	   *     A function that takes (tagName, attribs[]), where tagName is a key in
	   *     html4.ELEMENTS and attribs is an array of alternating attribute names
	   *     and values.  It should return a record (as follows), or null to delete
	   *     the element.  It's okay for tagPolicy to modify the attribs array,
	   *     but the same array is reused, so it should not be held between calls.
	   *     Record keys:
	   *        attribs: (required) Sanitized attributes array.
	   *        tagName: Replacement tag name.
	   * @return {function(string, Array)} A function that sanitizes a string of
	   *     HTML and appends result strings to the second argument, an array.
	   */
	  function makeHtmlSanitizer(tagPolicy) {
	    var stack;
	    var ignoring;
	    var emit = function (text, out) {
	      if (!ignoring) { out.push(text); }
	    };
	    return makeSaxParser({
	      'startDoc': function(_) {
	        stack = [];
	        ignoring = false;
	      },
	      'startTag': function(tagNameOrig, attribs, out) {
	        if (ignoring) { return; }
	        if (!html4.ELEMENTS.hasOwnProperty(tagNameOrig)) { return; }
	        var eflagsOrig = html4.ELEMENTS[tagNameOrig];
	        if (eflagsOrig & html4.eflags['FOLDABLE']) {
	          return;
	        }

	        var decision = tagPolicy(tagNameOrig, attribs);
	        if (!decision) {
	          ignoring = !(eflagsOrig & html4.eflags['EMPTY']);
	          return;
	        } else if (typeof decision !== 'object') {
	          throw new Error('tagPolicy did not return object (old API?)');
	        }
	        if ('attribs' in decision) {
	          attribs = decision['attribs'];
	        } else {
	          throw new Error('tagPolicy gave no attribs');
	        }
	        var eflagsRep;
	        var tagNameRep;
	        if ('tagName' in decision) {
	          tagNameRep = decision['tagName'];
	          eflagsRep = html4.ELEMENTS[tagNameRep];
	        } else {
	          tagNameRep = tagNameOrig;
	          eflagsRep = eflagsOrig;
	        }
	        // TODO(mikesamuel): relying on tagPolicy not to insert unsafe
	        // attribute names.

	        // If this is an optional-end-tag element and either this element or its
	        // previous like sibling was rewritten, then insert a close tag to
	        // preserve structure.
	        if (eflagsOrig & html4.eflags['OPTIONAL_ENDTAG']) {
	          var onStack = stack[stack.length - 1];
	          if (onStack && onStack.orig === tagNameOrig &&
	              (onStack.rep !== tagNameRep || tagNameOrig !== tagNameRep)) {
	                out.push('<\/', onStack.rep, '>');
	          }
	        }

	        if (!(eflagsOrig & html4.eflags['EMPTY'])) {
	          stack.push({orig: tagNameOrig, rep: tagNameRep});
	        }

	        out.push('<', tagNameRep);
	        for (var i = 0, n = attribs.length; i < n; i += 2) {
	          var attribName = attribs[i],
	              value = attribs[i + 1];
	          if (value !== null && value !== void 0) {
	            out.push(' ', attribName, '="', escapeAttrib(value), '"');
	          }
	        }
	        out.push('>');

	        if ((eflagsOrig & html4.eflags['EMPTY'])
	            && !(eflagsRep & html4.eflags['EMPTY'])) {
	          // replacement is non-empty, synthesize end tag
	          out.push('<\/', tagNameRep, '>');
	        }
	      },
	      'endTag': function(tagName, out) {
	        if (ignoring) {
	          ignoring = false;
	          return;
	        }
	        if (!html4.ELEMENTS.hasOwnProperty(tagName)) { return; }
	        var eflags = html4.ELEMENTS[tagName];
	        if (!(eflags & (html4.eflags['EMPTY'] | html4.eflags['FOLDABLE']))) {
	          var index;
	          if (eflags & html4.eflags['OPTIONAL_ENDTAG']) {
	            for (index = stack.length; --index >= 0;) {
	              var stackElOrigTag = stack[index].orig;
	              if (stackElOrigTag === tagName) { break; }
	              if (!(html4.ELEMENTS[stackElOrigTag] &
	                    html4.eflags['OPTIONAL_ENDTAG'])) {
	                // Don't pop non optional end tags looking for a match.
	                return;
	              }
	            }
	          } else {
	            for (index = stack.length; --index >= 0;) {
	              if (stack[index].orig === tagName) { break; }
	            }
	          }
	          if (index < 0) { return; }  // Not opened.
	          for (var i = stack.length; --i > index;) {
	            var stackElRepTag = stack[i].rep;
	            if (!(html4.ELEMENTS[stackElRepTag] &
	                  html4.eflags['OPTIONAL_ENDTAG'])) {
	              out.push('<\/', stackElRepTag, '>');
	            }
	          }
	          if (index < stack.length) {
	            tagName = stack[index].rep;
	          }
	          stack.length = index;
	          out.push('<\/', tagName, '>');
	        }
	      },
	      'pcdata': emit,
	      'rcdata': emit,
	      'cdata': emit,
	      'endDoc': function(out) {
	        for (; stack.length; stack.length--) {
	          out.push('<\/', stack[stack.length - 1].rep, '>');
	        }
	      }
	    });
	  }

	  var ALLOWED_URI_SCHEMES = /^(?:https?|mailto|data)$/i;

	  function safeUri(uri, effect, ltype, hints, naiveUriRewriter) {
	    if (!naiveUriRewriter) { return null; }
	    try {
	      var parsed = URI.parse('' + uri);
	      if (parsed) {
	        if (!parsed.hasScheme() ||
	            ALLOWED_URI_SCHEMES.test(parsed.getScheme())) {
	          var safe = naiveUriRewriter(parsed, effect, ltype, hints);
	          return safe ? safe.toString() : null;
	        }
	      }
	    } catch (e) {
	      return null;
	    }
	    return null;
	  }

	  function log(logger, tagName, attribName, oldValue, newValue) {
	    if (!attribName) {
	      logger(tagName + " removed", {
	        change: "removed",
	        tagName: tagName
	      });
	    }
	    if (oldValue !== newValue) {
	      var changed = "changed";
	      if (oldValue && !newValue) {
	        changed = "removed";
	      } else if (!oldValue && newValue)  {
	        changed = "added";
	      }
	      logger(tagName + "." + attribName + " " + changed, {
	        change: changed,
	        tagName: tagName,
	        attribName: attribName,
	        oldValue: oldValue,
	        newValue: newValue
	      });
	    }
	  }

	  function lookupAttribute(map, tagName, attribName) {
	    var attribKey;
	    attribKey = tagName + '::' + attribName;
	    if (map.hasOwnProperty(attribKey)) {
	      return map[attribKey];
	    }
	    attribKey = '*::' + attribName;
	    if (map.hasOwnProperty(attribKey)) {
	      return map[attribKey];
	    }
	    return void 0;
	  }
	  function getAttributeType(tagName, attribName) {
	    return lookupAttribute(html4.ATTRIBS, tagName, attribName);
	  }
	  function getLoaderType(tagName, attribName) {
	    return lookupAttribute(html4.LOADERTYPES, tagName, attribName);
	  }
	  function getUriEffect(tagName, attribName) {
	    return lookupAttribute(html4.URIEFFECTS, tagName, attribName);
	  }

	  /**
	   * Sanitizes attributes on an HTML tag.
	   * @param {string} tagName An HTML tag name in lowercase.
	   * @param {Array.<?string>} attribs An array of alternating names and values.
	   * @param {?function(?string): ?string} opt_naiveUriRewriter A transform to
	   *     apply to URI attributes; it can return a new string value, or null to
	   *     delete the attribute.  If unspecified, URI attributes are deleted.
	   * @param {function(?string): ?string} opt_nmTokenPolicy A transform to apply
	   *     to attributes containing HTML names, element IDs, and space-separated
	   *     lists of classes; it can return a new string value, or null to delete
	   *     the attribute.  If unspecified, these attributes are kept unchanged.
	   * @return {Array.<?string>} The sanitized attributes as a list of alternating
	   *     names and values, where a null value means to omit the attribute.
	   */
	  function sanitizeAttribs(tagName, attribs,
	    opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
	    // TODO(felix8a): it's obnoxious that domado duplicates much of this
	    // TODO(felix8a): maybe consistently enforce constraints like target=
	    for (var i = 0; i < attribs.length; i += 2) {
	      var attribName = attribs[i];
	      var value = attribs[i + 1];
	      var oldValue = value;
	      var atype = null, attribKey;
	      if ((attribKey = tagName + '::' + attribName,
	           html4.ATTRIBS.hasOwnProperty(attribKey)) ||
	          (attribKey = '*::' + attribName,
	           html4.ATTRIBS.hasOwnProperty(attribKey))) {
	        atype = html4.ATTRIBS[attribKey];
	      }
	      if (atype !== null) {
	        switch (atype) {
	          case html4.atype['NONE']: break;
	          case html4.atype['SCRIPT']:
	            value = null;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['STYLE']:
	            if ('undefined' === typeof parseCssDeclarations) {
	              value = null;
	              if (opt_logger) {
	                log(opt_logger, tagName, attribName, oldValue, value);
		      }
	              break;
	            }
	            var sanitizedDeclarations = [];
	            parseCssDeclarations(
	                value,
	                {
	                  declaration: function (property, tokens) {
	                    var normProp = property.toLowerCase();
	                    var schema = cssSchema[normProp];
	                    if (!schema) {
	                      return;
	                    }
	                    sanitizeCssProperty(
	                        normProp, schema, tokens,
	                        opt_naiveUriRewriter
	                        ? function (url) {
	                            return safeUri(
	                                url, html4.ueffects.SAME_DOCUMENT,
	                                html4.ltypes.SANDBOXED,
	                                {
	                                  "TYPE": "CSS",
	                                  "CSS_PROP": normProp
	                                }, opt_naiveUriRewriter);
	                          }
	                        : null);
	                    sanitizedDeclarations.push(property + ': ' + tokens.join(' '));
	                  }
	                });
	            value = sanitizedDeclarations.length > 0 ?
	              sanitizedDeclarations.join(' ; ') : null;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['ID']:
	          case html4.atype['IDREF']:
	          case html4.atype['IDREFS']:
	          case html4.atype['GLOBAL_NAME']:
	          case html4.atype['LOCAL_NAME']:
	          case html4.atype['CLASSES']:
	            value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['URI']:
	            value = safeUri(value,
	              getUriEffect(tagName, attribName),
	              getLoaderType(tagName, attribName),
	              {
	                "TYPE": "MARKUP",
	                "XML_ATTR": attribName,
	                "XML_TAG": tagName
	              }, opt_naiveUriRewriter);
	              if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['URI_FRAGMENT']:
	            if (value && '#' === value.charAt(0)) {
	              value = value.substring(1);  // remove the leading '#'
	              value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
	              if (value !== null && value !== void 0) {
	                value = '#' + value;  // restore the leading '#'
	              }
	            } else {
	              value = null;
	            }
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          default:
	            value = null;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	        }
	      } else {
	        value = null;
	        if (opt_logger) {
	          log(opt_logger, tagName, attribName, oldValue, value);
	        }
	      }
	      attribs[i + 1] = value;
	    }
	    return attribs;
	  }

	  /**
	   * Creates a tag policy that omits all tags marked UNSAFE in html4-defs.js
	   * and applies the default attribute sanitizer with the supplied policy for
	   * URI attributes and NMTOKEN attributes.
	   * @param {?function(?string): ?string} opt_naiveUriRewriter A transform to
	   *     apply to URI attributes.  If not given, URI attributes are deleted.
	   * @param {function(?string): ?string} opt_nmTokenPolicy A transform to apply
	   *     to attributes containing HTML names, element IDs, and space-separated
	   *     lists of classes.  If not given, such attributes are left unchanged.
	   * @return {function(string, Array.<?string>)} A tagPolicy suitable for
	   *     passing to html.sanitize.
	   */
	  function makeTagPolicy(
	    opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
	    return function(tagName, attribs) {
	      if (!(html4.ELEMENTS[tagName] & html4.eflags['UNSAFE'])) {
	        return {
	          'attribs': sanitizeAttribs(tagName, attribs,
	            opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger)
	        };
	      } else {
	        if (opt_logger) {
	          log(opt_logger, tagName, undefined, undefined, undefined);
	        }
	      }
	    };
	  }

	  /**
	   * Sanitizes HTML tags and attributes according to a given policy.
	   * @param {string} inputHtml The HTML to sanitize.
	   * @param {function(string, Array.<?string>)} tagPolicy A function that
	   *     decides which tags to accept and sanitizes their attributes (see
	   *     makeHtmlSanitizer above for details).
	   * @return {string} The sanitized HTML.
	   */
	  function sanitizeWithPolicy(inputHtml, tagPolicy) {
	    var outputArray = [];
	    makeHtmlSanitizer(tagPolicy)(inputHtml, outputArray);
	    return outputArray.join('');
	  }

	  /**
	   * Strips unsafe tags and attributes from HTML.
	   * @param {string} inputHtml The HTML to sanitize.
	   * @param {?function(?string): ?string} opt_naiveUriRewriter A transform to
	   *     apply to URI attributes.  If not given, URI attributes are deleted.
	   * @param {function(?string): ?string} opt_nmTokenPolicy A transform to apply
	   *     to attributes containing HTML names, element IDs, and space-separated
	   *     lists of classes.  If not given, such attributes are left unchanged.
	   */
	  function sanitize(inputHtml,
	    opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
	    var tagPolicy = makeTagPolicy(
	      opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger);
	    return sanitizeWithPolicy(inputHtml, tagPolicy);
	  }

	  // Export both quoted and unquoted names for Closure linkage.
	  var html = {};
	  html.escapeAttrib = html['escapeAttrib'] = escapeAttrib;
	  html.makeHtmlSanitizer = html['makeHtmlSanitizer'] = makeHtmlSanitizer;
	  html.makeSaxParser = html['makeSaxParser'] = makeSaxParser;
	  html.makeTagPolicy = html['makeTagPolicy'] = makeTagPolicy;
	  html.normalizeRCData = html['normalizeRCData'] = normalizeRCData;
	  html.sanitize = html['sanitize'] = sanitize;
	  html.sanitizeAttribs = html['sanitizeAttribs'] = sanitizeAttribs;
	  html.sanitizeWithPolicy = html['sanitizeWithPolicy'] = sanitizeWithPolicy;
	  html.unescapeEntities = html['unescapeEntities'] = unescapeEntities;
	  return html;
	})(html4);

	var html_sanitize = html['sanitize'];

	// Loosen restrictions of Caja's
	// html-sanitizer to allow for styling
	html4.ATTRIBS['*::style'] = 0;
	html4.ELEMENTS['style'] = 0;
	html4.ATTRIBS['a::target'] = 0;
	html4.ELEMENTS['video'] = 0;
	html4.ATTRIBS['video::src'] = 0;
	html4.ATTRIBS['video::poster'] = 0;
	html4.ATTRIBS['video::controls'] = 0;
	html4.ELEMENTS['audio'] = 0;
	html4.ATTRIBS['audio::src'] = 0;
	html4.ATTRIBS['video::autoplay'] = 0;
	html4.ATTRIBS['video::controls'] = 0;

	if (true) {
	    module.exports = html_sanitize;
	}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(8),
	    format_url = __webpack_require__(9),
	    request = __webpack_require__(13),
	    marker = __webpack_require__(20),
	    simplestyle = __webpack_require__(21);

	// # featureLayer
	//
	// A layer of features, loaded from Mapbox or else. Adds the ability
	// to reset features, filter them, and load them from a GeoJSON URL.
	var FeatureLayer = L.FeatureGroup.extend({
	    options: {
	        filter: function() { return true; },
	        sanitizer: __webpack_require__(17),
	        style: simplestyle.style,
	        popupOptions: { closeButton: false }
	    },

	    initialize: function(_, options) {
	        L.setOptions(this, options);

	        this._layers = {};

	        if (typeof _ === 'string') {
	            util.idUrl(_, this);
	        // javascript object of TileJSON data
	        } else if (_ && typeof _ === 'object') {
	            this.setGeoJSON(_);
	        }
	    },

	    setGeoJSON: function(_) {
	        this._geojson = _;
	        this.clearLayers();
	        this._initialize(_);
	        return this;
	    },

	    getGeoJSON: function() {
	        return this._geojson;
	    },

	    loadURL: function(url) {
	        if (this._request && 'abort' in this._request) this._request.abort();
	        this._request = request(url, L.bind(function(err, json) {
	            this._request = null;
	            if (err && err.type !== 'abort') {
	                util.log('could not load features at ' + url);
	                this.fire('error', {error: err});
	            } else if (json) {
	                this.setGeoJSON(json);
	                this.fire('ready');
	            }
	        }, this));
	        return this;
	    },

	    loadID: function(id) {
	        return this.loadURL(format_url('/v4/' + id + '/features.json', this.options.accessToken));
	    },

	    setFilter: function(_) {
	        this.options.filter = _;
	        if (this._geojson) {
	            this.clearLayers();
	            this._initialize(this._geojson);
	        }
	        return this;
	    },

	    getFilter: function() {
	        return this.options.filter;
	    },

	    _initialize: function(json) {
	        var features = L.Util.isArray(json) ? json : json.features,
	            i, len;

	        if (features) {
	            for (i = 0, len = features.length; i < len; i++) {
	                // Only add this if geometry or geometries are set and not null
	                if (features[i].geometries || features[i].geometry || features[i].features) {
	                    this._initialize(features[i]);
	                }
	            }
	        } else if (this.options.filter(json)) {

	            var opts = {accessToken: this.options.accessToken},
	                pointToLayer = this.options.pointToLayer || function(feature, latlon) {
	                  return marker.style(feature, latlon, opts);
	                },
	                layer = L.GeoJSON.geometryToLayer(json, {
	                    pointToLayer: pointToLayer
	                }),
	                popupHtml = marker.createPopup(json, this.options.sanitizer),
	                style = this.options.style,
	                defaultStyle = style === simplestyle.style;

	            if (style && 'setStyle' in layer &&
	                // if the style method is the simplestyle default, then
	                // never style L.Circle or L.CircleMarker because
	                // simplestyle has no rules over them, only over geometry
	                // primitives directly from GeoJSON
	                (!(defaultStyle && (layer instanceof L.Circle ||
	                  layer instanceof L.CircleMarker)))) {
	                if (typeof style === 'function') {
	                    style = style(json);
	                }
	                layer.setStyle(style);
	            }

	            layer.feature = json;

	            if (popupHtml) {
	                layer.bindPopup(popupHtml, this.options.popupOptions);
	            }

	            this.addLayer(layer);
	        }
	    }
	});

	module.exports.FeatureLayer = FeatureLayer;

	module.exports.featureLayer = function(_, options) {
	    return new FeatureLayer(_, options);
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var format_url = __webpack_require__(9),
	    util = __webpack_require__(8),
	    sanitize = __webpack_require__(17);

	// mapbox-related markers functionality
	// provide an icon from mapbox's simple-style spec and hosted markers
	// service
	function icon(fp, options) {
	    fp = fp || {};

	    var sizes = {
	            small: [20, 50],
	            medium: [30, 70],
	            large: [35, 90]
	        },
	        size = fp['marker-size'] || 'medium',
	        symbol = ('marker-symbol' in fp && fp['marker-symbol'] !== '') ? '-' + fp['marker-symbol'] : '',
	        color = (fp['marker-color'] || '7e7e7e').replace('#', '');

	    return L.icon({
	        iconUrl: format_url('/v4/marker/' +
	            'pin-' + size.charAt(0) + symbol + '+' + color +
	            // detect and use retina markers, which are x2 resolution
	            (L.Browser.retina ? '@2x' : '') + '.png', options && options.accessToken),
	        iconSize: sizes[size],
	        iconAnchor: [sizes[size][0] / 2, sizes[size][1] / 2],
	        popupAnchor: [0, -sizes[size][1] / 2]
	    });
	}

	// a factory that provides markers for Leaflet from Mapbox's
	// [simple-style specification](https://github.com/mapbox/simplestyle-spec)
	// and [Markers API](http://mapbox.com/developers/api/#markers).
	function style(f, latlon, options) {
	    return L.marker(latlon, {
	        icon: icon(f.properties, options),
	        title: util.strip_tags(
	            sanitize((f.properties && f.properties.title) || ''))
	    });
	}

	// Sanitize and format properties of a GeoJSON Feature object in order
	// to form the HTML string used as the argument for `L.createPopup`
	function createPopup(f, sanitizer) {
	    if (!f || !f.properties) return '';
	    var popup = '';

	    if (f.properties.title) {
	        popup += '<div class="marker-title">' + f.properties.title + '</div>';
	    }

	    if (f.properties.description) {
	        popup += '<div class="marker-description">' + f.properties.description + '</div>';
	    }

	    return (sanitizer || sanitize)(popup);
	}

	module.exports = {
	    icon: icon,
	    style: style,
	    createPopup: createPopup
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	// an implementation of the simplestyle spec for polygon and linestring features
	// https://github.com/mapbox/simplestyle-spec
	var defaults = {
	    stroke: '#555555',
	    'stroke-width': 2,
	    'stroke-opacity': 1,
	    fill: '#555555',
	    'fill-opacity': 0.5
	};

	var mapping = [
	    ['stroke', 'color'],
	    ['stroke-width', 'weight'],
	    ['stroke-opacity', 'opacity'],
	    ['fill', 'fillColor'],
	    ['fill-opacity', 'fillOpacity']
	];

	function fallback(a, b) {
	    var c = {};
	    for (var k in b) {
	        if (a[k] === undefined) c[k] = b[k];
	        else c[k] = a[k];
	    }
	    return c;
	}

	function remap(a) {
	    var d = {};
	    for (var i = 0; i < mapping.length; i++) {
	        d[mapping[i][1]] = a[mapping[i][0]];
	    }
	    return d;
	}

	function style(feature) {
	    return remap(fallback(feature.properties || {}, defaults));
	}

	module.exports = {
	    style: style,
	    defaults: defaults
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LegendControl = L.Control.extend({

	    options: {
	        position: 'bottomright',
	        sanitizer: __webpack_require__(17)
	    },

	    initialize: function(options) {
	        L.setOptions(this, options);
	        this._legends = {};
	    },

	    onAdd: function() {
	        this._container = L.DomUtil.create('div', 'map-legends wax-legends');
	        L.DomEvent.disableClickPropagation(this._container);

	        this._update();

	        return this._container;
	    },

	    addLegend: function(text) {
	        if (!text) { return this; }

	        if (!this._legends[text]) {
	            this._legends[text] = 0;
	        }

	        this._legends[text]++;
	        return this._update();
	    },

	    removeLegend: function(text) {
	        if (!text) { return this; }
	        if (this._legends[text]) this._legends[text]--;
	        return this._update();
	    },

	    _update: function() {
	        if (!this._map) { return this; }

	        this._container.innerHTML = '';
	        var hide = 'none';

	        for (var i in this._legends) {
	            if (this._legends.hasOwnProperty(i) && this._legends[i]) {
	                var div = L.DomUtil.create('div', 'map-legend wax-legend', this._container);
	                div.innerHTML = this.options.sanitizer(i);
	                hide = 'block';
	            }
	        }

	        // hide the control entirely unless there is at least one legend;
	        // otherwise there will be a small grey blemish on the map.
	        this._container.style.display = hide;

	        return this;
	    }
	});

	module.exports.LegendControl = LegendControl;

	module.exports.legendControl = function(options) {
	    return new LegendControl(options);
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var format_url = __webpack_require__(9);

	var ShareControl = L.Control.extend({
	    includes: [__webpack_require__(24)],

	    options: {
	        position: 'topleft',
	        url: ''
	    },

	    initialize: function(_, options) {
	        L.setOptions(this, options);
	        this._loadTileJSON(_);
	    },

	    _setTileJSON: function(json) {
	        this._tilejson = json;
	    },

	    onAdd: function(map) {
	        this._map = map;

	        var container = L.DomUtil.create('div', 'leaflet-control-mapbox-share leaflet-bar');
	        var link = L.DomUtil.create('a', 'mapbox-share mapbox-icon mapbox-icon-share', container);
	        link.href = '#';

	        this._modal = L.DomUtil.create('div', 'mapbox-modal', this._map._container);
	        this._mask = L.DomUtil.create('div', 'mapbox-modal-mask', this._modal);
	        this._content = L.DomUtil.create('div', 'mapbox-modal-content', this._modal);

	        L.DomEvent.addListener(link, 'click', this._shareClick, this);
	        L.DomEvent.disableClickPropagation(container);

	        this._map.on('mousedown', this._clickOut, this);

	        return container;
	    },

	    _clickOut: function(e) {
	        if (this._sharing) {
	            L.DomEvent.preventDefault(e);
	            L.DomUtil.removeClass(this._modal, 'active');
	            this._content.innerHTML = '';
	            this._sharing = null;
	            return;
	        }
	    },

	    _shareClick: function(e) {
	        L.DomEvent.stop(e);
	        if (this._sharing) return this._clickOut(e);

	        var tilejson = this._tilejson || this._map._tilejson || {},
	            url = encodeURIComponent(this.options.url || tilejson.webpage || window.location),
	            name = encodeURIComponent(tilejson.name),
	            image = format_url('/v4/' + tilejson.id + '/' + this._map.getCenter().lng + ',' + this._map.getCenter().lat + ',' + this._map.getZoom() + '/600x600.png', this.options.accessToken),
	            embed = format_url('/v4/' + tilejson.id + '.html', this.options.accessToken),
	            twitterURL = '//twitter.com/intent/tweet?status=' + name + ' ' + url,
	            facebookURL = '//www.facebook.com/sharer.php?u=' + url + '&t=' + name,
	            pinterestURL = '//www.pinterest.com/pin/create/button/?url=' + url + '&media=' + image + '&description=' + name,
	            embedValue = '<iframe width="100%" height="500px" frameBorder="0" src="' + embed + '"></iframe>',
	            embedLabel = 'Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.';

	        function createShareButton(buttonClass, href, socialMediaName) {
	            var elem = document.createElement('a');
	            elem.setAttribute('class', buttonClass);
	            elem.setAttribute('href', href);
	            elem.setAttribute('target', '_blank');
	            socialMediaName = document.createTextNode(socialMediaName);
	            elem.appendChild(socialMediaName);

	            return elem;
	        }

	        L.DomUtil.addClass(this._modal, 'active');

	        this._sharing = L.DomUtil.create('div', 'mapbox-modal-body', this._content);

	        var twitterButton = createShareButton('mapbox-button mapbox-button-icon mapbox-icon-twitter', twitterURL, 'Twitter');
	        var facebookButton = createShareButton('mapbox-button mapbox-button-icon mapbox-icon-facebook', facebookURL, 'Facebook');
	        var pinterestButton = createShareButton('mapbox-button mapbox-button-icon mapbox-icon-pinterest', pinterestURL, 'Pinterest');

	        var shareHeader = document.createElement('h3');
	        var shareText = document.createTextNode('Share this map');
	        shareHeader.appendChild(shareText);

	        var shareButtons = document.createElement('div');
	        shareButtons.setAttribute('class', 'mapbox-share-buttons');
	        shareButtons.appendChild(facebookButton);
	        shareButtons.appendChild(twitterButton);
	        shareButtons.appendChild(pinterestButton);

	        this._sharing.appendChild(shareHeader);
	        this._sharing.appendChild(shareButtons);

	        var input = L.DomUtil.create('input', 'mapbox-embed', this._sharing);
	        input.type = 'text';
	        input.value = embedValue;

	        var label = L.DomUtil.create('label', 'mapbox-embed-description', this._sharing);
	        label.innerHTML = embedLabel;

	        var close = L.DomUtil.create('a', 'leaflet-popup-close-button', this._sharing);
	        close.href = '#';

	        L.DomEvent.disableClickPropagation(this._sharing);
	        L.DomEvent.addListener(close, 'click', this._clickOut, this);
	        L.DomEvent.addListener(input, 'click', function(e) {
	            e.target.focus();
	            e.target.select();
	        });
	    }
	});

	module.exports.ShareControl = ShareControl;

	module.exports.shareControl = function(_, options) {
	    return new ShareControl(_, options);
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var request = __webpack_require__(13),
	    format_url = __webpack_require__(9),
	    util = __webpack_require__(8);

	module.exports = {
	    _loadTileJSON: function(_) {
	        if (typeof _ === 'string') {
	            _ = format_url.tileJSON(_, this.options && this.options.accessToken);
	            request(_, L.bind(function(err, json) {
	                if (err) {
	                    util.log('could not load TileJSON at ' + _);
	                    this.fire('error', {error: err});
	                } else if (json) {
	                    this._setTileJSON(json);
	                    this.fire('ready');
	                }
	            }, this));
	        } else if (_ && typeof _ === 'object') {
	            this._setTileJSON(_);
	        }
	    }
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(8);
	var formatPattern = /\.((?:png|jpg)\d*)(?=$|\?)/;

	var TileLayer = L.TileLayer.extend({
	    includes: [__webpack_require__(24)],

	    options: {
	        sanitizer: __webpack_require__(17)
	    },

	    // http://mapbox.com/developers/api/#image_quality
	    formats: [
	        'png', 'jpg',
	        // PNG
	        'png32', 'png64', 'png128', 'png256',
	        // JPG
	        'jpg70', 'jpg80', 'jpg90'],

	    scalePrefix: '@2x.',

	    initialize: function(_, options) {
	        L.TileLayer.prototype.initialize.call(this, undefined, options);

	        this._tilejson = {};

	        if (options && options.format) {
	            util.strict_oneof(options.format, this.formats);
	        }

	        this._loadTileJSON(_);
	    },

	    setFormat: function(_) {
	        util.strict(_, 'string');
	        this.options.format = _;
	        this.redraw();
	        return this;
	    },

	    // disable the setUrl function, which is not available on mapbox tilelayers
	    setUrl: null,

	    _setTileJSON: function(json) {
	        util.strict(json, 'object');

	        if (!this.options.format) {
	          var match = json.tiles[0].match(formatPattern);
	          if (match) {
	              this.options.format = match[1];
	          }
	        }

	        L.extend(this.options, {
	            tiles: json.tiles,
	            attribution: this.options.sanitizer(json.attribution),
	            minZoom: json.minzoom || 0,
	            maxZoom: json.maxzoom || 18,
	            tms: json.scheme === 'tms',
	            bounds: json.bounds && util.lbounds(json.bounds)
	        });

	        this._tilejson = json;
	        this.redraw();
	        return this;
	    },

	    getTileJSON: function() {
	        return this._tilejson;
	    },

	    // this is an exception to mapbox.js naming rules because it's called
	    // by `L.map`
	    getTileUrl: function(tilePoint) {
	        var tiles = this.options.tiles,
	            index = Math.floor(Math.abs(tilePoint.x + tilePoint.y) % tiles.length),
	            url = tiles[index];

	        var templated = L.Util.template(url, tilePoint);
	        if (!templated || !this.options.format) {
	            return templated;
	        } else {
	            return templated.replace(formatPattern,
	                (L.Browser.retina ? this.scalePrefix : '.') + this.options.format);
	        }
	    },

	    // TileJSON.TileLayers are added to the map immediately, so that they get
	    // the desired z-index, but do not update until the TileJSON has been loaded.
	    _update: function() {
	        if (this.options.tiles) {
	            L.TileLayer.prototype._update.call(this);
	        }
	    }
	});

	module.exports.TileLayer = TileLayer;

	module.exports.tileLayer = function(_, options) {
	    return new TileLayer(_, options);
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var tileLayer = __webpack_require__(25).tileLayer,
	    featureLayer = __webpack_require__(19).featureLayer,
	    gridLayer = __webpack_require__(27).gridLayer,
	    gridControl = __webpack_require__(15).gridControl,
	    shareControl = __webpack_require__(23).shareControl,
	    legendControl = __webpack_require__(22).legendControl,
	    mapboxLogoControl = __webpack_require__(29).mapboxLogoControl,
	    feedback = __webpack_require__(12);

	function withAccessToken(options, accessToken) {
	    if (!accessToken || options.accessToken)
	        return options;
	    return L.extend({accessToken: accessToken}, options);
	}

	var LMap = L.Map.extend({
	    includes: [__webpack_require__(24)],

	    options: {
	        tileLayer: {},
	        featureLayer: {},
	        gridLayer: {},
	        legendControl: {},
	        gridControl: {},
	        shareControl: false,
	        sanitizer: __webpack_require__(17)
	    },

	    _tilejson: {},

	    initialize: function(element, _, options) {

	        L.Map.prototype.initialize.call(this, element,
	            L.extend({}, L.Map.prototype.options, options));

	        // Disable the default 'Leaflet' text
	        if (this.attributionControl) {
	            this.attributionControl.setPrefix('');

	            var compact = this.options.attributionControl.compact;
	            // Set a compact display if map container width is < 640 or
	            // compact is set to `true` in attributionControl options.
	            if (compact || (compact !== false && this._container.offsetWidth <= 640)) {
	                L.DomUtil.addClass(this.attributionControl._container, 'leaflet-compact-attribution');
	            }

	            if (compact === undefined) {
	                this.on('resize', function() {
	                    if (this._container.offsetWidth > 640) {
	                        L.DomUtil.removeClass(this.attributionControl._container, 'leaflet-compact-attribution');
	                    } else {
	                        L.DomUtil.addClass(this.attributionControl._container, 'leaflet-compact-attribution');
	                    }
	                });
	            }
	        }

	        if (this.options.tileLayer) {
	            this.tileLayer = tileLayer(undefined,
	                withAccessToken(this.options.tileLayer, this.options.accessToken));
	            this.addLayer(this.tileLayer);
	        }

	        if (this.options.featureLayer) {
	            this.featureLayer = featureLayer(undefined,
	                withAccessToken(this.options.featureLayer, this.options.accessToken));
	            this.addLayer(this.featureLayer);
	        }

	        if (this.options.gridLayer) {
	            this.gridLayer = gridLayer(undefined,
	                withAccessToken(this.options.gridLayer, this.options.accessToken));
	            this.addLayer(this.gridLayer);
	        }

	        if (this.options.gridLayer && this.options.gridControl) {
	            this.gridControl = gridControl(this.gridLayer, this.options.gridControl);
	            this.addControl(this.gridControl);
	        }

	        if (this.options.legendControl) {
	            this.legendControl = legendControl(this.options.legendControl);
	            this.addControl(this.legendControl);
	        }

	        if (this.options.shareControl) {
	            this.shareControl = shareControl(undefined,
	                withAccessToken(this.options.shareControl, this.options.accessToken));
	            this.addControl(this.shareControl);
	        }

	        this._mapboxLogoControl = mapboxLogoControl(this.options.mapboxLogoControl);
	        this.addControl(this._mapboxLogoControl);

	        this._loadTileJSON(_);

	        this.on('layeradd', this._onLayerAdd, this)
	            .on('layerremove', this._onLayerRemove, this)
	            .on('moveend', this._updateMapFeedbackLink, this);

	        this.whenReady(function () {
	            feedback.on('change', this._updateMapFeedbackLink, this);
	        });

	        this.on('unload', function () {
	            feedback.off('change', this._updateMapFeedbackLink, this);
	        });
	    },

	    // use a javascript object of tilejson data to configure this layer
	    _setTileJSON: function(_) {
	        this._tilejson = _;
	        this._initialize(_);
	        return this;
	    },

	    getTileJSON: function() {
	        return this._tilejson;
	    },

	    _initialize: function(json) {
	        if (this.tileLayer) {
	            this.tileLayer._setTileJSON(json);
	            this._updateLayer(this.tileLayer);
	        }

	        if (this.featureLayer && !this.featureLayer.getGeoJSON() && json.data && json.data[0]) {
	            this.featureLayer.loadURL(json.data[0]);
	        }

	        if (this.gridLayer) {
	            this.gridLayer._setTileJSON(json);
	            this._updateLayer(this.gridLayer);
	        }

	        if (this.legendControl && json.legend) {
	            this.legendControl.addLegend(json.legend);
	        }

	        if (this.shareControl) {
	            this.shareControl._setTileJSON(json);
	        }

	        this._mapboxLogoControl._setTileJSON(json);

	        if (!this._loaded && json.center) {
	            var zoom = this.getZoom() !== undefined ? this.getZoom() : json.center[2],
	                center = L.latLng(json.center[1], json.center[0]);

	            this.setView(center, zoom);
	        }
	    },

	    _updateMapFeedbackLink: function() {
	        if (!this._controlContainer.getElementsByClassName) return;
	        var link = this._controlContainer.getElementsByClassName('mapbox-improve-map');
	        if (link.length && this._loaded) {
	            var center = this.getCenter().wrap();
	            var tilejson = this._tilejson || {};
	            var id = tilejson.id || '';

	            var hash = '#' + id + '/' +
	                center.lng.toFixed(3) + '/' +
	                center.lat.toFixed(3) + '/' +
	                this.getZoom();

	            for (var key in feedback.data) {
	                hash += '/' + key + '=' + feedback.data[key];
	            }

	            for (var i = 0; i < link.length; i++) {
	                link[i].hash = hash;
	            }
	        }
	    },

	    _onLayerAdd: function(e) {
	        if ('on' in e.layer) {
	            e.layer.on('ready', this._onLayerReady, this);
	        }
	        window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0); // Update after attribution control resets the HTML.
	    },

	    _onLayerRemove: function(e) {
	        if ('on' in e.layer) {
	            e.layer.off('ready', this._onLayerReady, this);
	        }
	        window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0); // Update after attribution control resets the HTML.
	    },

	    _onLayerReady: function(e) {
	        this._updateLayer(e.target);
	    },

	    _updateLayer: function(layer) {
	        if (!layer.options) return;

	        if (this.attributionControl && this._loaded && layer.getAttribution) {
	            this.attributionControl.addAttribution(layer.getAttribution());
	        }

	        if (!(L.stamp(layer) in this._zoomBoundLayers) &&
	                (layer.options.maxZoom || layer.options.minZoom)) {
	            this._zoomBoundLayers[L.stamp(layer)] = layer;
	        }

	        this._updateMapFeedbackLink();
	        this._updateZoomLevels();
	    }
	});

	module.exports.Map = LMap;

	module.exports.map = function(element, _, options) {
	    return new LMap(element, _, options);
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(8),
	    request = __webpack_require__(13),
	    grid = __webpack_require__(28);

	// forked from danzel/L.UTFGrid
	var GridLayer = L.Layer.extend({
	    includes: [__webpack_require__(24)],

	    options: {
	        template: function() { return ''; }
	    },

	    _mouseOn: null,
	    _tilejson: {},
	    _cache: {},

	    initialize: function(_, options) {
	        L.Util.setOptions(this, options);
	        this._loadTileJSON(_);
	    },

	    _setTileJSON: function(json) {
	        util.strict(json, 'object');

	        L.extend(this.options, {
	            grids: json.grids,
	            minZoom: json.minzoom,
	            maxZoom: json.maxzoom,
	            bounds: json.bounds && util.lbounds(json.bounds)
	        });

	        this._tilejson = json;
	        this._cache = {};
	        this._update();

	        return this;
	    },

	    getTileJSON: function() {
	        return this._tilejson;
	    },

	    active: function() {
	        return !!(this._map && this.options.grids && this.options.grids.length);
	    },

	    onAdd: function(map) {
	        this._map = map;
	        this._update();

	        this._map
	            .on('click', this._click, this)
	            .on('mousemove', this._move, this)
	            .on('moveend', this._update, this);
	    },

	    onRemove: function() {
	        this._map
	            .off('click', this._click, this)
	            .off('mousemove', this._move, this)
	            .off('moveend', this._update, this);
	    },

	    getData: function(latlng, callback) {
	        if (!this.active()) return;

	        var map = this._map,
	            point = map.project(latlng.wrap()),
	            tileSize = 256,
	            resolution = 4,
	            x = Math.floor(point.x / tileSize),
	            y = Math.floor(point.y / tileSize),
	            max = map.options.crs.scale(map.getZoom()) / tileSize;

	        x = (x + max) % max;
	        y = (y + max) % max;

	        this._getTile(map.getZoom(), x, y, function(grid) {
	            var gridX = Math.floor((point.x - (x * tileSize)) / resolution),
	                gridY = Math.floor((point.y - (y * tileSize)) / resolution);

	            callback(grid(gridX, gridY));
	        });

	        return this;
	    },

	    _click: function(e) {
	        this.getData(e.latlng, L.bind(function(data) {
	            this.fire('click', {
	                latLng: e.latlng,
	                data: data
	            });
	        }, this));
	    },

	    _move: function(e) {
	        this.getData(e.latlng, L.bind(function(data) {
	            if (data !== this._mouseOn) {
	                if (this._mouseOn) {
	                    this.fire('mouseout', {
	                        latLng: e.latlng,
	                        data: this._mouseOn
	                    });
	                }

	                this.fire('mouseover', {
	                    latLng: e.latlng,
	                    data: data
	                });

	                this._mouseOn = data;
	            } else {
	                this.fire('mousemove', {
	                    latLng: e.latlng,
	                    data: data
	                });
	            }
	        }, this));
	    },

	    _getTileURL: function(tilePoint) {
	        var urls = this.options.grids,
	            index = (tilePoint.x + tilePoint.y) % urls.length,
	            url = urls[index];

	        return L.Util.template(url, tilePoint);
	    },

	    // Load up all required json grid files
	    _update: function() {
	        if (!this.active()) return;

	        var bounds = this._map.getPixelBounds(),
	            z = this._map.getZoom(),
	            tileSize = 256;

	        if (z > this.options.maxZoom || z < this.options.minZoom) return;

	        var tileBounds = L.bounds(
	                bounds.min.divideBy(tileSize)._floor(),
	                bounds.max.divideBy(tileSize)._floor()),
	            max = this._map.options.crs.scale(z) / tileSize;

	        for (var x = tileBounds.min.x; x <= tileBounds.max.x; x++) {
	            for (var y = tileBounds.min.y; y <= tileBounds.max.y; y++) {
	                // x wrapped
	                this._getTile(z, ((x % max) + max) % max, ((y % max) + max) % max);
	            }
	        }
	    },

	    _getTile: function(z, x, y, callback) {
	        var key = z + '_' + x + '_' + y,
	            tilePoint = L.point(x, y);

	        tilePoint.z = z;

	        if (!this._tileShouldBeLoaded(tilePoint)) {
	            return;
	        }

	        if (key in this._cache) {
	            if (!callback) return;

	            if (typeof this._cache[key] === 'function') {
	                callback(this._cache[key]); // Already loaded
	            } else {
	                this._cache[key].push(callback); // Pending
	            }

	            return;
	        }

	        this._cache[key] = [];

	        if (callback) {
	            this._cache[key].push(callback);
	        }

	        request(this._getTileURL(tilePoint), L.bind(function(err, json) {
	            var callbacks = this._cache[key];
	            this._cache[key] = grid(json);
	            for (var i = 0; i < callbacks.length; ++i) {
	                callbacks[i](this._cache[key]);
	            }
	        }, this));
	    },

	    _tileShouldBeLoaded: function(tilePoint) {
	        if (tilePoint.z > this.options.maxZoom || tilePoint.z < this.options.minZoom) {
	            return false;
	        }

	        if (this.options.bounds) {
	            var tileSize = 256,
	                nwPoint = tilePoint.multiplyBy(tileSize),
	                sePoint = nwPoint.add(new L.Point(tileSize, tileSize)),
	                nw = this._map.unproject(nwPoint),
	                se = this._map.unproject(sePoint),
	                bounds = new L.LatLngBounds([nw, se]);

	            if (!this.options.bounds.intersects(bounds)) {
	                return false;
	            }
	        }

	        return true;
	    }
	});

	module.exports.GridLayer = GridLayer;

	module.exports.gridLayer = function(_, options) {
	    return new GridLayer(_, options);
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	function utfDecode(c) {
	    if (c >= 93) c--;
	    if (c >= 35) c--;
	    return c - 32;
	}

	module.exports = function(data) {
	    return function(x, y) {
	        if (!data) return;
	        var idx = utfDecode(data.grid[y].charCodeAt(x)),
	            key = data.keys[idx];
	        return data.data[key];
	    };
	};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	var MapboxLogoControl = L.Control.extend({

	    options: {
	        position: 'bottomleft'
	    },

	    initialize: function(options) {
	        L.setOptions(this, options);
	    },

	    onAdd: function() {
	        this._container = L.DomUtil.create('div', 'mapbox-logo');
	        return this._container;
	    },

	    _setTileJSON: function(json) {
	        // Check if account referenced by the accessToken
	        // is asscociated with the Mapbox Logo
	        // as determined by mapbox-maps.
	        if (json.mapbox_logo) {
	            L.DomUtil.addClass(this._container, 'mapbox-logo-true');
	        }
	    }
	});

	module.exports.MapboxLogoControl = MapboxLogoControl;

	module.exports.mapboxLogoControl = function(options) {
	    return new MapboxLogoControl(options);
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(8);
	var format_url = __webpack_require__(9);
	var request = __webpack_require__(13);

	var StyleLayer = L.TileLayer.extend({

	    options: {
	        sanitizer: __webpack_require__(17)
	    },

	    initialize: function(_, options) {
	        L.TileLayer.prototype.initialize.call(this, undefined, L.extend({}, options, {
	            tileSize: 512,
	            zoomOffset: -1,
	            minNativeZoom: 0,
	            tms: false
	        }));
	        this._url = this._formatTileURL(_);
	        this._getAttribution(_);
	    },

	    _getAttribution: function(_) {
	        var styleURL = format_url.style(_, this.options && this.options.accessToken);
	        request(styleURL, L.bind(function(err, style) {
	            if (err) {
	                util.log('could not load Mapbox style at ' + styleURL);
	                this.fire('error', {error: err});
	            }
	            var sources = [];
	            for (var id in style.sources) {
	                var source = style.sources[id].url.split('mapbox://')[1];
	                sources.push(source);
	            }
	            request(format_url.tileJSON(sources.join(), this.options.accessToken), L.bind(function(err, json) {
	                if (err) {
	                    util.log('could not load TileJSON at ' + _);
	                    this.fire('error', {error: err});
	                } else if (json) {
	                    util.strict(json, 'object');

	                    this.options.attribution = this.options.sanitizer(json.attribution);

	                    this._tilejson = json;
	                    this.fire('ready');
	                }
	            }, this));
	        }, this));
	    },

	    // disable the setUrl function, which is not available on mapbox tilelayers
	    setUrl: null,

	    _formatTileURL: function(style) {
	        if (typeof style === 'string') {
	            if (style.indexOf('mapbox://styles/') === -1) {
	                util.log('Incorrectly formatted Mapbox style at ' + style);
	                this.fire('error');
	            }
	            var ownerIDStyle = style.split('mapbox://styles/')[1];
	            return format_url('/styles/v1/' + ownerIDStyle + '/tiles/{z}/{x}/{y}{r}', this.options.accessToken);
	        } else if (typeof style === 'object') {
	            return format_url('/styles/v1/' + style.owner + '/' + style.id + '/tiles/{z}/{x}/{y}{r}', this.options.accessToken);
	        }
	    }
	});

	module.exports.StyleLayer = StyleLayer;

	module.exports.styleLayer = function(_, options) {
	    return new StyleLayer(_, options);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(39)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!./style.css", function() {
				var newContent = require("!!../../css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)(undefined);
	// imports


	// module
	exports.push([module.id, "/* general typography */\n.leaflet-container {\n  background:#fff;\n  font:12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  color:#404040;\n  color:rgba(0,0,0,0.75);\n  outline:0;\n  overflow:hidden;\n  -ms-touch-action:none;\n  }\n\n.leaflet-container *,\n.leaflet-container *:after,\n.leaflet-container *:before {\n  -webkit-box-sizing:border-box;\n     -moz-box-sizing:border-box;\n          box-sizing:border-box;\n  }\n\n.leaflet-container h1,\n.leaflet-container h2,\n.leaflet-container h3,\n.leaflet-container h4,\n.leaflet-container h5,\n.leaflet-container h6,\n.leaflet-container p {\n  font-size:15px;\n  line-height:20px;\n  margin:0 0 10px;\n  }\n\n.leaflet-container .marker-description img {\n  margin-bottom:10px;\n  }\n\n.leaflet-container a {\n  color:#3887BE;\n  font-weight:normal;\n  text-decoration:none;\n  }\n  .leaflet-container a:hover      { color:#63b6e5; }\n  .leaflet-container.dark a       { color:#63b6e5; }\n  .leaflet-container.dark a:hover { color:#8fcaec; }\n\n.leaflet-container.dark .mapbox-button,\n.leaflet-container .mapbox-button {\n  background-color:#3887be;\n  display:inline-block;\n  height:40px;\n  line-height:40px;\n  text-decoration:none;\n  color:#fff;\n  font-size:12px;\n  white-space:nowrap;\n  text-overflow:ellipsis;\n  }\n  .leaflet-container.dark .mapbox-button:hover,\n  .leaflet-container .mapbox-button:hover {\n    color:#fff;\n    background-color:#3bb2d0;\n    }\n\n/* Required styles */\n.leaflet-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-container,\n.leaflet-map-pane svg,\n.leaflet-map-pane canvas,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\t}\n.leaflet-container {\n\toverflow: hidden;\n\t}\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\t-webkit-user-select:none;\n\t   -moz-user-select:none;\n\t        user-select:none;\n\t  -webkit-user-drag:none;\n\t}\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\n\timage-rendering:-webkit-optimize-contrast;\n\t}\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\n\twidth:1600px;\n\theight:1600px;\n\t-webkit-transform-origin:0 0;\n\t}\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n\tdisplay: block;\n\t}\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg,\n.leaflet-container .leaflet-marker-pane img,\n.leaflet-container .leaflet-tile-pane img,\n.leaflet-container img.leaflet-image-layer {\n\tmax-width: none !important;\n\t}\n\n.leaflet-container.leaflet-touch-zoom {\n\t-ms-touch-action: pan-x pan-y;\n\ttouch-action: pan-x pan-y;\n\t}\n.leaflet-container.leaflet-touch-drag {\n\t-ms-touch-action: pinch-zoom;\n\t}\n.leaflet-container.leaflet-touch-drag.leaflet-touch-drag {\n\t-ms-touch-action: none;\n\ttouch-action: none;\n}\n.leaflet-tile {\n\tfilter: inherit;\n\tvisibility: hidden;\n\t}\n.leaflet-tile-loaded {\n\tvisibility: inherit;\n\t}\n.leaflet-zoom-box {\n\twidth: 0;\n\theight: 0;\n\tz-index: 800;\n\t}\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\n\t-moz-user-select: none;\n\t}\n\n.leaflet-map-pane canvas { z-index: 1; }\n.leaflet-map-pane svg    { z-index: 2; }\n\n.leaflet-tile-pane    { z-index:2; }\n.leaflet-overlay-pane { z-index:4; }\n.leaflet-shadow-pane  { z-index:5; }\n.leaflet-marker-pane  { z-index:6; }\n.leaflet-tooltip-pane { z-index:7; }\n.leaflet-popup-pane   { z-index:8; }\n\n.leaflet-vml-shape {\n\twidth:1px;\n\theight:1px;\n\t}\n.lvml {\n\tbehavior:url(#default#VML);\n\tdisplay:inline-block;\n\tposition:absolute;\n\t}\n\n/* control positioning */\n.leaflet-control {\n\tposition: relative;\n\tz-index: 800;\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n\tpointer-events: auto;\n\t}\n.leaflet-top,\n.leaflet-bottom {\n\tposition: absolute;\n\tz-index: 1000;\n\tpointer-events: none;\n\t}\n.leaflet-top {\n\ttop: 0;\n\t}\n.leaflet-right {\n\tright: 0;\n\t}\n.leaflet-bottom {\n\tbottom: 0;\n\t}\n.leaflet-left {\n\tleft: 0;\n\t}\n.leaflet-control {\n\tfloat: left;\n\tclear: both;\n\t}\n.leaflet-right .leaflet-control {\n\tfloat: right;\n\t}\n.leaflet-top .leaflet-control {\n\tmargin-top: 10px;\n\t}\n.leaflet-bottom .leaflet-control {\n\tmargin-bottom: 10px;\n\t}\n.leaflet-left .leaflet-control {\n\tmargin-left: 10px;\n\t}\n.leaflet-right .leaflet-control {\n\tmargin-right: 10px;\n\t}\n\n\n/* zoom and fade animations */\n\n.leaflet-fade-anim .leaflet-tile {\n\twill-change: opacity;\n\t}\n.leaflet-fade-anim .leaflet-popup {\n\topacity: 0;\n\t-webkit-transition: opacity 0.2s linear;\n\t   -moz-transition: opacity 0.2s linear;\n\t     -o-transition: opacity 0.2s linear;\n\t        transition: opacity 0.2s linear;\n\t}\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n\topacity: 1;\n\t}\n.leaflet-zoom-animated {\n\t-webkit-transform-origin: 0 0;\n\t    -ms-transform-origin: 0 0;\n\t        transform-origin: 0 0;\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\twill-change: transform;\n\t}\n.leaflet-zoom-anim .leaflet-zoom-animated {\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t     -o-transition:      -o-transform 0.25s cubic-bezier(0,0,0.25,1);\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\n\t}\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile {\n\t-webkit-transition: none;\n\t   -moz-transition: none;\n\t     -o-transition: none;\n\t        transition: none;\n\t}\n\n.leaflet-zoom-anim .leaflet-zoom-hide {\n\tvisibility: hidden;\n\t}\n\n\n/* cursors */\n\n.leaflet-interactive {\n\tcursor: pointer;\n\t}\n.leaflet-grab {\n\tcursor: -webkit-grab;\n\tcursor:    -moz-grab;\n\t}\n.leaflet-crosshair,\n.leaflet-crosshair .leaflet-interactive {\n\tcursor: crosshair;\n\t}\n.leaflet-popup-pane,\n.leaflet-control {\n\tcursor: auto;\n\t}\n.leaflet-dragging .leaflet-grab,\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\n.leaflet-dragging .leaflet-marker-draggable {\n\tcursor: move;\n\tcursor: -webkit-grabbing;\n\tcursor:    -moz-grabbing;\n\t}\n\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-image-layer,\n.leaflet-pane > svg path,\n.leaflet-tile-container {\n\tpointer-events: none;\n\t}\n\n.leaflet-marker-icon.leaflet-interactive,\n.leaflet-image-layer.leaflet-interactive,\n.leaflet-pane > svg path.leaflet-interactive {\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\n\tpointer-events: auto;\n\t}\n\n/* visual tweaks */\n.leaflet-container {\n\toutline:0;\n\t}\n.leaflet-zoom-box {\n  background:#fff;\n  border:2px dotted #202020;\n  opacity:0.5;\n  }\n\n/* general toolbar styles */\n.leaflet-control-layers,\n.leaflet-bar {\n  background-color:#fff;\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  border-radius:3px;\n  box-shadow:none;\n  }\n.leaflet-bar a,\n.leaflet-bar a:hover {\n  color:#404040;\n  color:rgba(0,0,0,0.75);\n  border-bottom:1px solid #ddd;\n  border-bottom-color:rgba(0,0,0,0.10);\n  }\n  .leaflet-bar a:last-child {\n    border-bottom:none;\n    }\n  .leaflet-bar a:hover,\n  .leaflet-bar a:active {\n    background-color:#f8f8f8;\n    cursor:pointer;\n    }\n  .leaflet-bar a:hover:first-child {\n    border-radius:3px 3px 0 0;\n    }\n  .leaflet-bar a:hover:last-child {\n    border-radius:0 0 3px 3px;\n    }\n  .leaflet-bar a:hover:only-of-type {\n    border-radius:3px;\n    }\n\n.leaflet-bar .leaflet-disabled {\n  cursor:default;\n  opacity:0.75;\n  }\n\n/* zoom control */\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n  display:block;\n  content:'';\n  text-indent:-999em;\n\t}\n\n/* layers control */\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n  display:none;\n  }\n  .leaflet-control-layers-expanded .leaflet-control-layers-list {\n    display:block;\n    position:relative;\n    }\n\n.leaflet-control-layers-expanded {\n  background:#fff;\n  padding:6px 10px 6px 6px;\n  color:#404040;\n  color:rgba(0,0,0,0.75);\n  }\n.leaflet-control-layers-selector {\n  margin-top:2px;\n  position:relative;\n  top:1px;\n  }\n.leaflet-control-layers label {\n  display: block;\n  }\n.leaflet-control-layers-separator {\n  height:0;\n  border-top:1px solid #ddd;\n  border-top-color:rgba(0,0,0,0.10);\n  margin:5px -10px 5px -6px;\n  }\n\n/* Default icon URLs */\n.leaflet-default-icon-path {\n  background-image: url(" + __webpack_require__(34) + ");\n}\n\n/* Attribution and scale controls */\n.leaflet-container .leaflet-control-attribution {\n  background-color:rgba(255,255,255,0.5);\n  margin:0;\n  box-shadow:none;\n  }\n  .leaflet-container .leaflet-control-attribution a,\n  .leaflet-container .map-info-container a {\n    color:#404040;\n    }\n    .leaflet-control-attribution a:hover,\n    .map-info-container a:hover {\n      color:inherit;\n      text-decoration:underline;\n      }\n\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n  padding:0 5px;\n  }\n  .leaflet-left .leaflet-control-scale    { margin-left:5px; }\n  .leaflet-bottom .leaflet-control-scale  { margin-bottom:5px; }\n\n.leaflet-container .mapbox-improve-map { font-weight:bold; }\n\n/* Scale control */\n.leaflet-control-scale-line {\n  background-color:rgba(255,255,255,0.5);\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  border-top:none;\n  padding:2px 5px 1px;\n  white-space:nowrap;\n  overflow:hidden;\n  }\n  .leaflet-control-scale-line:last-child {\n    border-top:2px solid #ddd;\n    border-top-color:rgba(0,0,0,0.10);\n    border-bottom:none;\n    margin-top:-2px;\n    }\n\n/* Used for smaller map containers & triggered by container size */\n.leaflet-container .leaflet-control-attribution.leaflet-compact-attribution { margin:10px; }\n.leaflet-container .leaflet-control-attribution.leaflet-compact-attribution {\n  background:#fff;\n  border-radius:3px 13px 13px 3px;\n  padding:3px 31px 3px 3px;\n  visibility:hidden;\n  }\n  .leaflet-control-attribution.leaflet-compact-attribution:hover {\n    visibility:visible;\n    }\n\n.leaflet-control-attribution.leaflet-compact-attribution:after {\n  content:'';\n  background-color:#fff;\n  background-color:rgba(255,255,255,0.5);\n  background-position:0 -78px;\n  border-radius:50%;\n  position:absolute;\n  display:inline-block;\n  width:26px;\n  height:26px;\n  vertical-align:middle;\n  bottom:0;\n  z-index:1;\n  visibility:visible;\n  cursor:pointer;\n  }\n  .leaflet-control-attribution.leaflet-compact-attribution:hover:after { background-color:#fff; }\n\n.leaflet-right .leaflet-control-attribution.leaflet-compact-attribution:after { right:0; }\n.leaflet-left .leaflet-control-attribution.leaflet-compact-attribution:after { left:0; }\n\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n\tborder:2px solid rgba(0,0,0,0.2);\n\tbackground-clip:padding-box;\n\t}\n\n/* popup */\n.leaflet-popup {\n  position:absolute;\n  text-align:center;\n  pointer-events:none;\n  }\n.leaflet-popup-content-wrapper {\n  padding:1px;\n  text-align:left;\n  pointer-events:all;\n  }\n.leaflet-popup-content {\n  padding:10px 10px 15px;\n  margin:0;\n  line-height:inherit;\n  }\n  .leaflet-popup-close-button + .leaflet-popup-content-wrapper .leaflet-popup-content {\n    padding-top:15px;\n    }\n\n.leaflet-popup-tip-container {\n  width:20px;\n  height:20px;\n  margin:0 auto;\n  position:relative;\n  }\n.leaflet-popup-tip {\n  width:0;\n\theight:0;\n  margin:0;\n\tborder-left:10px solid transparent;\n\tborder-right:10px solid transparent;\n\tborder-top:10px solid #fff;\n  box-shadow:none;\n  }\n.leaflet-popup-close-button {\n  text-indent:-999em;\n  position:absolute;\n  top:0;right:0;\n  pointer-events:all;\n  }\n  .leaflet-popup-close-button:hover {\n    background-color:#f8f8f8;\n    }\n\n.leaflet-popup-scrolled {\n  overflow:auto;\n  border-bottom:1px solid #ddd;\n  border-top:1px solid #ddd;\n  }\n\n/* div icon */\n.leaflet-div-icon {\n  background:#fff;\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  }\n.leaflet-editing-icon {\n  border-radius:3px;\n  }\n\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\n\tposition:absolute;\n\tpadding:5px;\n\tbackground-color:#fff;\n\tborder:1px solid #fff;\n\tborder-radius:3px;\n\twhite-space: nowrap;\n\t-webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n\tpointer-events: none;\n\t}\n.leaflet-tooltip.leaflet-clickable {\n\tcursor:pointer;\n\tpointer-events:auto;\n\t}\n.leaflet-tooltip-top:before,\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\tcontent:'';\n\tposition:absolute;\n\tpointer-events:none;\n\tborder:5px solid transparent;\n\tbackground:transparent;\n\t}\n\n/* Directions */\n.leaflet-tooltip-bottom {\n\tmargin-top:5px;\n  }\n.leaflet-tooltip-top {\n\tmargin-top:-5px;\n  }\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-top:before {\n\tleft:50%;\n\tmargin-left:-5px;\n\t}\n.leaflet-tooltip-top:before {\n\tbottom:0;\n\tmargin-bottom:-10px;\n\tborder-top-color:#fff;\n\t}\n.leaflet-tooltip-bottom:before {\n\ttop:0;\n\tmargin-top:-15px;\n\tmargin-left:-5px;\n\tborder-bottom-color:#fff;\n\t}\n.leaflet-tooltip-left {\n\tmargin-left:-5px;\n  }\n.leaflet-tooltip-right {\n\tmargin-left:5px;\n  }\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n\ttop:50%;\n\tmargin-top:-5px;\n\t}\n.leaflet-tooltip-left:before {\n\tright:0;\n\tmargin-right:-10px;\n\tborder-left-color:#fff;\n\t}\n.leaflet-tooltip-right:before {\n\tleft:0;\n\tmargin-left:-10px;\n\tborder-right-color:#fff;\n\t}\n\n/* Leaflet + Mapbox\n------------------------------------------------------- */\n.leaflet-bar a,\n.mapbox-icon,\n.map-tooltip.closable .close,\n.leaflet-control-layers-toggle,\n.leaflet-popup-close-button,\n.mapbox-button-icon:before {\n  content:'';\n  display:inline-block;\n  width:26px;\n  height:26px;\n  vertical-align:middle;\n  background-repeat:no-repeat;\n  }\n.leaflet-bar a {\n  display:block;\n  }\n\n.leaflet-control-attribution:after,\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out,\n.leaflet-popup-close-button,\n.leaflet-control-layers-toggle,\n.leaflet-container.dark .map-tooltip .close,\n.map-tooltip .close,\n.mapbox-icon {\n  opacity: .75;\n  background-image:url(" + __webpack_require__(35) + ");\n  background-image:linear-gradient(transparent, transparent), url(" + __webpack_require__(36) + ");\n  background-repeat:no-repeat;\n  background-size:26px 260px;\n  }\n  .leaflet-container.dark .leaflet-control-attribution:after,\n  .mapbox-button-icon:before,\n  .leaflet-container.dark .leaflet-control-zoom-in,\n  .leaflet-container.dark .leaflet-control-zoom-out,\n  .leaflet-container.dark .leaflet-control-layers-toggle,\n  .leaflet-container.dark .mapbox-icon {\n    opacity: 1;\n    background-image:url(" + __webpack_require__(37) + ");\n    background-image:linear-gradient(transparent, transparent), url(" + __webpack_require__(38) + ");\n    background-size:26px 260px;\n    }\n  .leaflet-bar .leaflet-control-zoom-in                 { background-position:0 0; }\n  .leaflet-bar .leaflet-control-zoom-out                { background-position:0 -26px; }\n  .map-tooltip.closable .close,\n  .leaflet-popup-close-button {\n    background-position:-3px -55px;\n    width:20px;\n    height:20px;\n    border-radius:0 3px 0 0;\n    }\n  .mapbox-icon-info                                     { background-position:0 -78px; }\n  .leaflet-control-layers-toggle                        { background-position:0 -104px; }\n  .mapbox-icon.mapbox-icon-share:before, .mapbox-icon.mapbox-icon-share         { background-position:0 -130px; }\n  .mapbox-icon.mapbox-icon-geocoder:before, .mapbox-icon.mapbox-icon-geocoder   { background-position:0 -156px; }\n  .mapbox-icon-facebook:before, .mapbox-icon-facebook   { background-position:0 -182px; }\n  .mapbox-icon-twitter:before, .mapbox-icon-twitter     { background-position:0 -208px; }\n  .mapbox-icon-pinterest:before, .mapbox-icon-pinterest { background-position:0 -234px; }\n\n.leaflet-popup-content-wrapper,\n.map-legends,\n.map-tooltip {\n  background:#fff;\n  border-radius:3px;\n  box-shadow:0 1px 2px rgba(0,0,0,0.10);\n  }\n.map-legends,\n.map-tooltip {\n  max-width:300px;\n  }\n.map-legends .map-legend {\n  padding:10px;\n  }\n.map-tooltip {\n  z-index:999999;\n  padding:10px;\n  min-width:180px;\n  max-height:400px;\n  overflow:auto;\n  opacity:1;\n  -webkit-transition:opacity 150ms;\n     -moz-transition:opacity 150ms;\n       -o-transition:opacity 150ms;\n          transition:opacity 150ms;\n  }\n\n.map-tooltip .close {\n  text-indent:-999em;\n  overflow:hidden;\n  display:none;\n  }\n  .map-tooltip.closable .close {\n    position:absolute;\n    top:0;right:0;\n    border-radius:3px;\n    }\n    .map-tooltip.closable .close:active  {\n      background-color:#f8f8f8;\n      }\n\n.leaflet-control-interaction {\n  position:absolute;\n  top:10px;\n  right:10px;\n  width:300px;\n  }\n.leaflet-popup-content .marker-title {\n  font-weight:bold;\n  }\n.leaflet-control .mapbox-button {\n  background-color:#fff;\n  border:1px solid #ddd;\n  border-color:rgba(0,0,0,0.10);\n  padding:5px 10px;\n  border-radius:3px;\n  }\n\n/* Share modal\n------------------------------------------------------- */\n.mapbox-modal > div {\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  z-index:-1;\n  overflow-y:auto;\n  }\n  .mapbox-modal.active > div {\n    z-index:99999;\n    transition:all .2s, z-index 0 0;\n    }\n\n.mapbox-modal .mapbox-modal-mask {\n  background:rgba(0,0,0,0.5);\n  opacity:0;\n  }\n  .mapbox-modal.active .mapbox-modal-mask { opacity:1; }\n\n.mapbox-modal .mapbox-modal-content {\n  -webkit-transform:translateY(-100%);\n     -moz-transform:translateY(-100%);\n      -ms-transform:translateY(-100%);\n          transform:translateY(-100%);\n  }\n  .mapbox-modal.active .mapbox-modal-content {\n    -webkit-transform:translateY(0);\n       -moz-transform:translateY(0);\n        -ms-transform:translateY(0);\n            transform:translateY(0);\n    }\n\n.mapbox-modal-body {\n  position:relative;\n  background:#fff;\n  padding:20px;\n  z-index:1000;\n  width:50%;\n  margin:20px 0 20px 25%;\n  }\n.mapbox-share-buttons {\n  margin:0 0 20px;\n  }\n.mapbox-share-buttons a {\n  width:33.3333%;\n  border-left:1px solid #fff;\n  text-align:center;\n  border-radius:0;\n  }\n  .mapbox-share-buttons a:last-child  { border-radius:0 3px 3px 0; }\n  .mapbox-share-buttons a:first-child { border:none; border-radius:3px 0 0 3px; }\n\n.mapbox-modal input {\n  width:100%;\n  height:40px;\n  padding:10px;\n  border:1px solid #ddd;\n  border-color:rgba(0,0,0,0.10);\n  color:rgba(0,0,0,0.5);\n  }\n.mapbox-modal label {\n  display:block;\n  margin-top:5px;\n  }\n\n/* Geocoder\n------------------------------------------------------- */\n.leaflet-control-mapbox-geocoder {\n  position:relative;\n  }\n.leaflet-control-mapbox-geocoder.searching {\n  opacity:0.75;\n  }\n.leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-wrap {\n  background:#fff;\n  position:absolute;\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  overflow:hidden;\n  left:26px;\n  height:28px;\n  width:0;\n  top:-1px;\n  border-radius:0 3px 3px 0;\n  opacity:0;\n  -webkit-transition:opacity 100ms;\n     -moz-transition:opacity 100ms;\n       -o-transition:opacity 100ms;\n          transition:opacity 100ms;\n  }\n.leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-wrap {\n  width:180px;\n  opacity:1;\n  }\n.leaflet-bar .leaflet-control-mapbox-geocoder-toggle,\n.leaflet-bar .leaflet-control-mapbox-geocoder-toggle:hover {\n  border-bottom:none;\n  }\n.leaflet-control-mapbox-geocoder-toggle {\n  border-radius:3px;\n  }\n.leaflet-control-mapbox-geocoder.active,\n.leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-toggle {\n  border-top-right-radius:0;\n  border-bottom-right-radius:0;\n  }\n.leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-form input {\n  background:transparent;\n  border:0;\n  width:180px;\n  padding:0 0 0 10px;\n  height:26px;\n  outline:none;\n  }\n.leaflet-control-mapbox-geocoder-results {\n  width:180px;\n  position:absolute;\n  left:26px;\n  top:25px;\n  border-radius:0 0 3px 3px;\n  }\n  .leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-results {\n    background:#fff;\n    border:1px solid #999;\n    border-color:rgba(0,0,0,0.4);\n    }\n.leaflet-control-mapbox-geocoder-results a,\n.leaflet-control-mapbox-geocoder-results span {\n  padding:0 10px;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  display:block;\n  width:100%;\n  font-size:12px;\n  line-height:26px;\n  text-align:left;\n  overflow:hidden;\n  }\n  .leaflet-container.dark .leaflet-control .leaflet-control-mapbox-geocoder-results a:hover,\n  .leaflet-control-mapbox-geocoder-results a:hover {\n    background:#f8f8f8;\n    opacity:1;\n    }\n\n.leaflet-right .leaflet-control-mapbox-geocoder-wrap,\n.leaflet-right .leaflet-control-mapbox-geocoder-results {\n  left:auto;\n  right:26px;\n  }\n.leaflet-right .leaflet-control-mapbox-geocoder-wrap {\n  border-radius:3px 0 0 3px;\n  }\n.leaflet-right .leaflet-control-mapbox-geocoder.active,\n.leaflet-right .leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-toggle {\n  border-radius:0 3px 3px 0;\n  }\n\n.leaflet-bottom .leaflet-control-mapbox-geocoder-results {\n  top:auto;\n  bottom:25px;\n  border-radius:3px 3px 0 0;\n  }\n\n/* Mapbox Logo\n------------------------------------------------------- */\n.mapbox-logo.mapbox-logo-true {\n  margin: 0 0 5px 5px;\n}\n.mapbox-logo-true:before {\n  content:'';\n  display:inline-block;\n  width:85px;\n  height:21px;\n  vertical-align:middle;\n}\n.mapbox-logo.mapbox-logo-true {\n  background-repeat:no-repeat;\n  background-size:85px 21px;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgODAuNDcgMjAuMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwLjQ3IDIwLjAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe29wYWNpdHk6MC42O2ZpbGw6I0ZGRkZGRjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30uc3Qxe29wYWNpdHk6MC42O2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fTwvc3R5bGU+PGc+PHBhdGggY2xhc3M9InN0MCIgZD0iTTc5LjI5LDEzLjYxYzAsMC4xMS0wLjA5LDAuMi0wLjIsMC4yaC0xLjUzYy0wLjEyLDAtMC4yMy0wLjA2LTAuMjktMC4xNmwtMS4zNy0yLjI4bC0xLjM3LDIuMjhjLTAuMDYsMC4xLTAuMTcsMC4xNi0wLjI5LDAuMTZoLTEuNTNjLTAuMDQsMC0wLjA4LTAuMDEtMC4xMS0wLjAzYy0wLjA5LTAuMDYtMC4xMi0wLjE4LTAuMDYtMC4yN2MwLDAsMCwwLDAsMGwyLjMxLTMuNWwtMi4yOC0zLjQ3Yy0wLjAyLTAuMDMtMC4wMy0wLjA3LTAuMDMtMC4xMWMwLTAuMTEsMC4wOS0wLjIsMC4yLTAuMmgxLjUzYzAuMTIsMCwwLjIzLDAuMDYsMC4yOSwwLjE2bDEuMzQsMi4yNWwxLjMzLTIuMjRjMC4wNi0wLjEsMC4xNy0wLjE2LDAuMjktMC4xNmgxLjUzYzAuMDQsMCwwLjA4LDAuMDEsMC4xMSwwLjAzYzAuMDksMC4wNiwwLjEyLDAuMTgsMC4wNiwwLjI3YzAsMCwwLDAsMCwwTDc2Ljk2LDEwbDIuMzEsMy41Qzc5LjI4LDEzLjUzLDc5LjI5LDEzLjU3LDc5LjI5LDEzLjYxeiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02My4wOSw5LjE2Yy0wLjM3LTEuNzktMS44Ny0zLjEyLTMuNjYtMy4xMmMtMC45OCwwLTEuOTMsMC40LTIuNiwxLjEyVjMuMzdjMC0wLjEyLTAuMS0wLjIyLTAuMjItMC4yMmgtMS4zM2MtMC4xMiwwLTAuMjIsMC4xLTAuMjIsMC4yMnYxMC4yMWMwLDAuMTIsMC4xLDAuMjIsMC4yMiwwLjIyaDEuMzNjMC4xMiwwLDAuMjItMC4xLDAuMjItMC4yMnYtMC43YzAuNjgsMC43MSwxLjYyLDEuMTIsMi42LDEuMTJjMS43OSwwLDMuMjktMS4zNCwzLjY2LTMuMTNDNjMuMjEsMTAuMyw2My4yMSw5LjcyLDYzLjA5LDkuMTZMNjMuMDksOS4xNnogTTU5LjEyLDEyLjQxYy0xLjI2LDAtMi4yOC0xLjA2LTIuMy0yLjM2VjkuOTljMC4wMi0xLjMxLDEuMDQtMi4zNiwyLjMtMi4zNnMyLjMsMS4wNywyLjMsMi4zOVM2MC4zOSwxMi40MSw1OS4xMiwxMi40MXoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjguMjYsNi4wNGMtMS44OS0wLjAxLTMuNTQsMS4yOS0zLjk2LDMuMTNjLTAuMTIsMC41Ni0wLjEyLDEuMTMsMCwxLjY5YzAuNDIsMS44NSwyLjA3LDMuMTYsMy45NywzLjE0YzIuMjQsMCw0LjA2LTEuNzgsNC4wNi0zLjk5UzcwLjUxLDYuMDQsNjguMjYsNi4wNHogTTY4LjI0LDEyLjQyYy0xLjI3LDAtMi4zLTEuMDctMi4zLTIuMzlzMS4wMy0yLjQsMi4zLTIuNHMyLjMsMS4wNywyLjMsMi4zOVM2OS41MSwxMi40MSw2OC4yNCwxMi40Mkw2OC4yNCwxMi40MnoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTkuMTIsNy42M2MtMS4yNiwwLTIuMjgsMS4wNi0yLjMsMi4zNnYwLjA2YzAuMDIsMS4zMSwxLjA0LDIuMzYsMi4zLDIuMzZzMi4zLTEuMDcsMi4zLTIuMzlTNjAuMzksNy42Myw1OS4xMiw3LjYzeiBNNTkuMTIsMTEuMjNjLTAuNiwwLTEuMDktMC41My0xLjExLTEuMTlWMTBjMC4wMS0wLjY2LDAuNTEtMS4xOSwxLjExLTEuMTlzMS4xMSwwLjU0LDEuMTEsMS4yMVM1OS43NCwxMS4yMyw1OS4xMiwxMS4yM3oiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjguMjQsNy42M2MtMS4yNywwLTIuMywxLjA3LTIuMywyLjM5czEuMDMsMi4zOSwyLjMsMi4zOXMyLjMtMS4wNywyLjMtMi4zOVM2OS41MSw3LjYzLDY4LjI0LDcuNjN6IE02OC4yNCwxMS4yM2MtMC42MSwwLTEuMTEtMC41NC0xLjExLTEuMjFzMC41LTEuMiwxLjExLTEuMnMxLjExLDAuNTQsMS4xMSwxLjIxUzY4Ljg1LDExLjIzLDY4LjI0LDExLjIzeiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00My41Niw2LjI0aC0xLjMzYy0wLjEyLDAtMC4yMiwwLjEtMC4yMiwwLjIydjAuN2MtMC42OC0wLjcxLTEuNjItMS4xMi0yLjYtMS4xMmMtMi4wNywwLTMuNzUsMS43OC0zLjc1LDMuOTlzMS42OSwzLjk5LDMuNzUsMy45OWMwLjk5LDAsMS45My0wLjQxLDIuNi0xLjEzdjAuN2MwLDAuMTIsMC4xLDAuMjIsMC4yMiwwLjIyaDEuMzNjMC4xMiwwLDAuMjItMC4xLDAuMjItMC4yMlY2LjQ0YzAtMC4xMS0wLjA5LTAuMjEtMC4yMS0wLjIxQzQzLjU3LDYuMjQsNDMuNTcsNi4yNCw0My41Niw2LjI0eiBNNDIuMDIsMTAuMDVjLTAuMDEsMS4zMS0xLjA0LDIuMzYtMi4zLDIuMzZzLTIuMy0xLjA3LTIuMy0yLjM5czEuMDMtMi40LDIuMjktMi40YzEuMjcsMCwyLjI4LDEuMDYsMi4zLDIuMzZMNDIuMDIsMTAuMDV6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM5LjcyLDcuNjNjLTEuMjcsMC0yLjMsMS4wNy0yLjMsMi4zOXMxLjAzLDIuMzksMi4zLDIuMzlzMi4yOC0xLjA2LDIuMy0yLjM2VjkuOTlDNDIsOC42OCw0MC45OCw3LjYzLDM5LjcyLDcuNjN6IE0zOC42MiwxMC4wMmMwLTAuNjcsMC41LTEuMjEsMS4xMS0xLjIxYzAuNjEsMCwxLjA5LDAuNTMsMS4xMSwxLjE5djAuMDRjLTAuMDEsMC42NS0wLjUsMS4xOC0xLjExLDEuMThTMzguNjIsMTAuNjgsMzguNjIsMTAuMDJ6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTQ5LjkxLDYuMDRjLTAuOTgsMC0xLjkzLDAuNC0yLjYsMS4xMlY2LjQ1YzAtMC4xMi0wLjEtMC4yMi0wLjIyLTAuMjJoLTEuMzNjLTAuMTIsMC0wLjIyLDAuMS0wLjIyLDAuMjJ2MTAuMjFjMCwwLjEyLDAuMSwwLjIyLDAuMjIsMC4yMmgxLjMzYzAuMTIsMCwwLjIyLTAuMSwwLjIyLTAuMjJ2LTMuNzhjMC42OCwwLjcxLDEuNjIsMS4xMiwyLjYxLDEuMTJjMi4wNywwLDMuNzUtMS43OCwzLjc1LTMuOTlTNTEuOTgsNi4wNCw0OS45MSw2LjA0eiBNNDkuNiwxMi40MmMtMS4yNiwwLTIuMjgtMS4wNi0yLjMtMi4zNlY5Ljk5YzAuMDItMS4zMSwxLjA0LTIuMzcsMi4yOS0yLjM3YzEuMjYsMCwyLjMsMS4wNywyLjMsMi4zOVM1MC44NiwxMi40MSw0OS42LDEyLjQyTDQ5LjYsMTIuNDJ6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTQ5LjYsNy42M2MtMS4yNiwwLTIuMjgsMS4wNi0yLjMsMi4zNnYwLjA2YzAuMDIsMS4zMSwxLjA0LDIuMzYsMi4zLDIuMzZzMi4zLTEuMDcsMi4zLTIuMzlTNTAuODYsNy42Myw0OS42LDcuNjN6IE00OS42LDExLjIzYy0wLjYsMC0xLjA5LTAuNTMtMS4xMS0xLjE5VjEwQzQ4LjUsOS4zNCw0OSw4LjgxLDQ5LjYsOC44MWMwLjYsMCwxLjExLDAuNTUsMS4xMSwxLjIxUzUwLjIxLDExLjIzLDQ5LjYsMTEuMjN6Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTM0LjM2LDEzLjU5YzAsMC4xMi0wLjEsMC4yMi0wLjIyLDAuMjJoLTEuMzRjLTAuMTIsMC0wLjIyLTAuMS0wLjIyLTAuMjJWOS4yNGMwLTAuOTMtMC43LTEuNjMtMS41NC0xLjYzYy0wLjc2LDAtMS4zOSwwLjY3LTEuNTEsMS41NGwwLjAxLDQuNDRjMCwwLjEyLTAuMSwwLjIyLTAuMjIsMC4yMmgtMS4zNGMtMC4xMiwwLTAuMjItMC4xLTAuMjItMC4yMlY5LjI0YzAtMC45My0wLjctMS42My0xLjU0LTEuNjNjLTAuODEsMC0xLjQ3LDAuNzUtMS41MiwxLjcxdjQuMjdjMCwwLjEyLTAuMSwwLjIyLTAuMjIsMC4yMmgtMS4zM2MtMC4xMiwwLTAuMjItMC4xLTAuMjItMC4yMlY2LjQ0YzAuMDEtMC4xMiwwLjEtMC4yMSwwLjIyLTAuMjFoMS4zM2MwLjEyLDAsMC4yMSwwLjEsMC4yMiwwLjIxdjAuNjNjMC40OC0wLjY1LDEuMjQtMS4wNCwyLjA2LTEuMDVoMC4wM2MxLjA0LDAsMS45OSwwLjU3LDIuNDgsMS40OGMwLjQzLTAuOSwxLjMzLTEuNDgsMi4zMi0xLjQ5YzEuNTQsMCwyLjc5LDEuMTksMi43NiwyLjY1TDM0LjM2LDEzLjU5eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04MC4zMiwxMi45N2wtMC4wNy0wLjEyTDc4LjM4LDEwbDEuODUtMi44MWMwLjQyLTAuNjQsMC4yNS0xLjQ5LTAuMzktMS45MmMtMC4wMS0wLjAxLTAuMDItMC4wMS0wLjAzLTAuMDJjLTAuMjItMC4xNC0wLjQ4LTAuMjEtMC43NC0wLjIxaC0xLjUzYy0wLjUzLDAtMS4wMywwLjI4LTEuMywwLjc0bC0wLjMyLDAuNTNsLTAuMzItMC41M2MtMC4yOC0wLjQ2LTAuNzctMC43NC0xLjMxLTAuNzRoLTEuNTNjLTAuNTcsMC0xLjA4LDAuMzUtMS4yOSwwLjg4Yy0yLjA5LTEuNTgtNS4wMy0xLjQtNi45MSwwLjQzYy0wLjMzLDAuMzItMC42MiwwLjY5LTAuODUsMS4wOWMtMC44NS0xLjU1LTIuNDUtMi42LTQuMjgtMi42Yy0wLjQ4LDAtMC45NiwwLjA3LTEuNDEsMC4yMlYzLjM3YzAtMC43OC0wLjYzLTEuNDEtMS40LTEuNDFoLTEuMzNjLTAuNzcsMC0xLjQsMC42My0xLjQsMS40djMuNTdjLTAuOS0xLjMtMi4zOC0yLjA4LTMuOTctMi4wOWMtMC43LDAtMS4zOSwwLjE1LTIuMDIsMC40NWMtMC4yMy0wLjE2LTAuNTEtMC4yNS0wLjgtMC4yNWgtMS4zM2MtMC40MywwLTAuODMsMC4yLTEuMSwwLjUzYy0wLjAyLTAuMDMtMC4wNC0wLjA1LTAuMDctMC4wOGMtMC4yNy0wLjI5LTAuNjUtMC40NS0xLjA0LTAuNDVoLTEuMzJjLTAuMjksMC0wLjU3LDAuMDktMC44LDAuMjVDNDAuOCw1LDQwLjEyLDQuODUsMzkuNDIsNC44NWMtMS43NCwwLTMuMjcsMC45NS00LjE2LDIuMzhjLTAuMTktMC40NC0wLjQ2LTAuODUtMC43OS0xLjE5Yy0wLjc2LTAuNzctMS44LTEuMTktMi44OC0xLjE5aC0wLjAxYy0wLjg1LDAuMDEtMS42NywwLjMxLTIuMzQsMC44NGMtMC43LTAuNTQtMS41Ni0wLjg0LTIuNDUtMC44NGgtMC4wM2MtMC4yOCwwLTAuNTUsMC4wMy0wLjgyLDAuMWMtMC4yNywwLjA2LTAuNTMsMC4xNS0wLjc4LDAuMjdjLTAuMi0wLjExLTAuNDMtMC4xNy0wLjY3LTAuMTdoLTEuMzNjLTAuNzgsMC0xLjQsMC42My0xLjQsMS40djcuMTRjMCwwLjc4LDAuNjMsMS40LDEuNCwxLjRoMS4zM2MwLjc4LDAsMS40MS0wLjYzLDEuNDEtMS40MWMwLDAsMCwwLDAsMFY5LjM1YzAuMDMtMC4zNCwwLjIyLTAuNTYsMC4zNC0wLjU2YzAuMTcsMCwwLjM2LDAuMTcsMC4zNiwwLjQ1djQuMzVjMCwwLjc4LDAuNjMsMS40LDEuNCwxLjRoMS4zNGMwLjc4LDAsMS40LTAuNjMsMS40LTEuNGwtMC4wMS00LjM1YzAuMDYtMC4zLDAuMjQtMC40NSwwLjMzLTAuNDVjMC4xNywwLDAuMzYsMC4xNywwLjM2LDAuNDV2NC4zNWMwLDAuNzgsMC42MywxLjQsMS40LDEuNGgxLjM0YzAuNzgsMCwxLjQtMC42MywxLjQtMS40di0wLjM2YzAuOTEsMS4yMywyLjM0LDEuOTYsMy44NywxLjk2YzAuNywwLDEuMzktMC4xNSwyLjAyLTAuNDVjMC4yMywwLjE2LDAuNTEsMC4yNSwwLjgsMC4yNWgxLjMyYzAuMjksMCwwLjU3LTAuMDksMC44LTAuMjV2MS45MWMwLDAuNzgsMC42MywxLjQsMS40LDEuNGgxLjMzYzAuNzgsMCwxLjQtMC42MywxLjQtMS40di0xLjY5YzAuNDYsMC4xNCwwLjk0LDAuMjIsMS40MiwwLjIxYzEuNjIsMCwzLjA3LTAuODMsMy45Ny0yLjF2MC41YzAsMC43OCwwLjYzLDEuNCwxLjQsMS40aDEuMzNjMC4yOSwwLDAuNTctMC4wOSwwLjgtMC4yNWMwLjYzLDAuMywxLjMyLDAuNDUsMi4wMiwwLjQ1YzEuODMsMCwzLjQzLTEuMDUsNC4yOC0yLjZjMS40NywyLjUyLDQuNzEsMy4zNiw3LjIyLDEuODljMC4xNy0wLjEsMC4zNC0wLjIxLDAuNS0wLjM0YzAuMjEsMC41MiwwLjcyLDAuODcsMS4yOSwwLjg2aDEuNTNjMC41MywwLDEuMDMtMC4yOCwxLjMtMC43NGwwLjM1LTAuNThsMC4zNSwwLjU4YzAuMjgsMC40NiwwLjc3LDAuNzQsMS4zMSwwLjc0aDEuNTJjMC43NywwLDEuMzktMC42MywxLjM4LTEuMzlDODAuNDcsMTMuMzgsODAuNDIsMTMuMTcsODAuMzIsMTIuOTdMODAuMzIsMTIuOTd6IE0zNC4xNSwxMy44MWgtMS4zNGMtMC4xMiwwLTAuMjItMC4xLTAuMjItMC4yMlY5LjI0YzAtMC45My0wLjctMS42My0xLjU0LTEuNjNjLTAuNzYsMC0xLjM5LDAuNjctMS41MSwxLjU0bDAuMDEsNC40NGMwLDAuMTItMC4xLDAuMjItMC4yMiwwLjIyaC0xLjM0Yy0wLjEyLDAtMC4yMi0wLjEtMC4yMi0wLjIyVjkuMjRjMC0wLjkzLTAuNy0xLjYzLTEuNTQtMS42M2MtMC44MSwwLTEuNDcsMC43NS0xLjUyLDEuNzF2NC4yN2MwLDAuMTItMC4xLDAuMjItMC4yMiwwLjIyaC0xLjMzYy0wLjEyLDAtMC4yMi0wLjEtMC4yMi0wLjIyVjYuNDRjMC4wMS0wLjEyLDAuMS0wLjIxLDAuMjItMC4yMWgxLjMzYzAuMTIsMCwwLjIxLDAuMSwwLjIyLDAuMjF2MC42M2MwLjQ4LTAuNjUsMS4yNC0xLjA0LDIuMDYtMS4wNWgwLjAzYzEuMDQsMCwxLjk5LDAuNTcsMi40OCwxLjQ4YzAuNDMtMC45LDEuMzMtMS40OCwyLjMyLTEuNDljMS41NCwwLDIuNzksMS4xOSwyLjc2LDIuNjVsMC4wMSw0LjkxQzM0LjM3LDEzLjcsMzQuMjcsMTMuOCwzNC4xNSwxMy44MUMzNC4xNSwxMy44MSwzNC4xNSwxMy44MSwzNC4xNSwxMy44MXogTTQzLjc4LDEzLjU5YzAsMC4xMi0wLjEsMC4yMi0wLjIyLDAuMjJoLTEuMzNjLTAuMTIsMC0wLjIyLTAuMS0wLjIyLTAuMjJ2LTAuNzFDNDEuMzQsMTMuNiw0MC40LDE0LDM5LjQyLDE0Yy0yLjA3LDAtMy43NS0xLjc4LTMuNzUtMy45OXMxLjY5LTMuOTksMy43NS0zLjk5YzAuOTgsMCwxLjkyLDAuNDEsMi42LDEuMTJ2LTAuN2MwLTAuMTIsMC4xLTAuMjIsMC4yMi0wLjIyaDEuMzNjMC4xMS0wLjAxLDAuMjEsMC4wOCwwLjIyLDAuMmMwLDAuMDEsMCwwLjAxLDAsMC4wMlYxMy41OXogTTQ5LjkxLDE0Yy0wLjk4LDAtMS45Mi0wLjQxLTIuNi0xLjEydjMuNzhjMCwwLjEyLTAuMSwwLjIyLTAuMjIsMC4yMmgtMS4zM2MtMC4xMiwwLTAuMjItMC4xLTAuMjItMC4yMlY2LjQ1YzAtMC4xMiwwLjEtMC4yMSwwLjIyLTAuMjFoMS4zM2MwLjEyLDAsMC4yMiwwLjEsMC4yMiwwLjIydjAuN2MwLjY4LTAuNzIsMS42Mi0xLjEyLDIuNi0xLjEyYzIuMDcsMCwzLjc1LDEuNzcsMy43NSwzLjk4UzUxLjk4LDE0LDQ5LjkxLDE0eiBNNjMuMDksMTAuODdDNjIuNzIsMTIuNjUsNjEuMjIsMTQsNTkuNDMsMTRjLTAuOTgsMC0xLjkyLTAuNDEtMi42LTEuMTJ2MC43YzAsMC4xMi0wLjEsMC4yMi0wLjIyLDAuMjJoLTEuMzNjLTAuMTIsMC0wLjIyLTAuMS0wLjIyLTAuMjJWMy4zN2MwLTAuMTIsMC4xLTAuMjIsMC4yMi0wLjIyaDEuMzNjMC4xMiwwLDAuMjIsMC4xLDAuMjIsMC4yMnYzLjc4YzAuNjgtMC43MSwxLjYyLTEuMTIsMi42LTEuMTFjMS43OSwwLDMuMjksMS4zMywzLjY2LDMuMTJDNjMuMjEsOS43Myw2My4yMSwxMC4zMSw2My4wOSwxMC44N0w2My4wOSwxMC44N0w2My4wOSwxMC44N3ogTTY4LjI2LDE0LjAxYy0xLjksMC4wMS0zLjU1LTEuMjktMy45Ny0zLjE0Yy0wLjEyLTAuNTYtMC4xMi0xLjEzLDAtMS42OWMwLjQyLTEuODUsMi4wNy0zLjE1LDMuOTctMy4xNGMyLjI1LDAsNC4wNiwxLjc4LDQuMDYsMy45OVM3MC41LDE0LjAxLDY4LjI2LDE0LjAxTDY4LjI2LDE0LjAxeiBNNzkuMDksMTMuODFoLTEuNTNjLTAuMTIsMC0wLjIzLTAuMDYtMC4yOS0wLjE2bC0xLjM3LTIuMjhsLTEuMzcsMi4yOGMtMC4wNiwwLjEtMC4xNywwLjE2LTAuMjksMC4xNmgtMS41M2MtMC4wNCwwLTAuMDgtMC4wMS0wLjExLTAuMDNjLTAuMDktMC4wNi0wLjEyLTAuMTgtMC4wNi0wLjI3YzAsMCwwLDAsMCwwbDIuMzEtMy41bC0yLjI4LTMuNDdjLTAuMDItMC4wMy0wLjAzLTAuMDctMC4wMy0wLjExYzAtMC4xMSwwLjA5LTAuMiwwLjItMC4yaDEuNTNjMC4xMiwwLDAuMjMsMC4wNiwwLjI5LDAuMTZsMS4zNCwyLjI1bDEuMzQtMi4yNWMwLjA2LTAuMSwwLjE3LTAuMTYsMC4yOS0wLjE2aDEuNTNjMC4wNCwwLDAuMDgsMC4wMSwwLjExLDAuMDNjMC4wOSwwLjA2LDAuMTIsMC4xOCwwLjA2LDAuMjdjMCwwLDAsMCwwLDBMNzYuOTYsMTBsMi4zMSwzLjVjMC4wMiwwLjAzLDAuMDMsMC4wNywwLjAzLDAuMTFDNzkuMjksMTMuNzIsNzkuMiwxMy44MSw3OS4wOSwxMy44MUM3OS4wOSwxMy44MSw3OS4wOSwxMy44MSw3OS4wOSwxMy44MUw3OS4wOSwxMy44MXoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAsMS4yMWMtNC44NywwLTguODEsMy45NS04LjgxLDguODFzMy45NSw4LjgxLDguODEsOC44MXM4LjgxLTMuOTUsOC44MS04LjgxQzE4LjgxLDUuMTUsMTQuODcsMS4yMSwxMCwxLjIxeiBNMTQuMTgsMTIuMTljLTEuODQsMS44NC00LjU1LDIuMi02LjM4LDIuMmMtMC42NywwLTEuMzQtMC4wNS0yLTAuMTVjMCwwLTAuOTctNS4zNywyLjA0LTguMzljMC43OS0wLjc5LDEuODYtMS4yMiwyLjk4LTEuMjJjMS4yMSwwLDIuMzcsMC40OSwzLjIzLDEuMzVDMTUuOCw3LjczLDE1Ljg1LDEwLjUsMTQuMTgsMTIuMTl6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTEwLDAuMDJjLTUuNTIsMC0xMCw0LjQ4LTEwLDEwczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMEMxOS45OSw0LjUsMTUuNTIsMC4wMiwxMCwwLjAyeiBNMTAsMTguODNjLTQuODcsMC04LjgxLTMuOTUtOC44MS04LjgxUzUuMTMsMS4yLDEwLDEuMnM4LjgxLDMuOTUsOC44MSw4LjgxQzE4LjgxLDE0Ljg5LDE0Ljg3LDE4LjgzLDEwLDE4LjgzeiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNC4wNCw1Ljk4Yy0xLjc1LTEuNzUtNC41My0xLjgxLTYuMi0wLjE0QzQuODMsOC44Niw1LjgsMTQuMjMsNS44LDE0LjIzczUuMzcsMC45Nyw4LjM5LTIuMDRDMTUuODUsMTAuNSwxNS44LDcuNzMsMTQuMDQsNS45OHogTTExLjg4LDkuODdsLTAuODcsMS43OGwtMC44Ni0xLjc4TDguMzgsOS4wMWwxLjc3LTAuODZsMC44Ni0xLjc4bDAuODcsMS43OGwxLjc3LDAuODZMMTEuODgsOS44N3oiLz48cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjEzLjY1LDkuMDEgMTEuODgsOS44NyAxMS4wMSwxMS42NSAxMC4xNSw5Ljg3IDguMzgsOS4wMSAxMC4xNSw4LjE1IDExLjAxLDYuMzcgMTEuODgsOC4xNSAiLz48L2c+PC9zdmc+);\n}\n\n/* Dark Theme\n------------------------------------------------------- */\n.leaflet-container.dark .leaflet-bar {\n  background-color:#404040;\n  border-color:#202020;\n  border-color:rgba(0,0,0,0.75);\n  }\n  .leaflet-container.dark .leaflet-bar a {\n    color:#404040;\n    border-color:rgba(0,0,0,0.5);\n    }\n  .leaflet-container.dark .leaflet-bar a:active,\n  .leaflet-container.dark .leaflet-bar a:hover {\n    background-color:#505050;\n    }\n\n.leaflet-container.dark .leaflet-control-attribution:after,\n.leaflet-container.dark .mapbox-info-toggle,\n.leaflet-container.dark .map-info-container,\n.leaflet-container.dark .leaflet-control-attribution {\n  background-color:rgba(0,0,0,0.5);\n  color:#f8f8f8;\n  }\n  .leaflet-container.dark .leaflet-control-attribution a,\n  .leaflet-container.dark .leaflet-control-attribution a:hover,\n  .leaflet-container.dark .map-info-container a,\n  .leaflet-container.dark .map-info-container a:hover {\n    color:#fff;\n    }\n\n.leaflet-container.dark .leaflet-control-attribution:hover:after {\n  background-color:#000;\n  }\n.leaflet-container.dark .leaflet-control-layers-list span {\n  color:#f8f8f8;\n  }\n.leaflet-container.dark .leaflet-control-layers-separator {\n  border-top-color:rgba(255,255,255,0.10);\n  }\n.leaflet-container.dark .leaflet-bar a.leaflet-disabled,\n.leaflet-container.dark .leaflet-control .mapbox-button.disabled {\n  background-color:#252525;\n  color:#404040;\n  }\n.leaflet-container.dark .leaflet-control-mapbox-geocoder > div {\n  border-color:#202020;\n  border-color:rgba(0,0,0,0.75);\n  }\n  .leaflet-container.dark .leaflet-control .leaflet-control-mapbox-geocoder-results a {\n    border-color:#ddd #202020;\n    border-color:rgba(0,0,0,0.10) rgba(0,0,0,0.75);\n    }\n  .leaflet-container.dark .leaflet-control .leaflet-control-mapbox-geocoder-results span {\n    border-color:#202020;\n    border-color:rgba(0,0,0,0.75);\n    }\n\n/* Larger Screens\n------------------------------------------------------- */\n@media only screen and (max-width:800px) {\n.mapbox-modal-body {\n  width:83.3333%;\n  margin-left:8.3333%;\n  }\n}\n\n/* Smaller Screens\n------------------------------------------------------- */\n@media only screen and (max-width:640px) {\n.mapbox-modal-body {\n  width:100%;\n  height:100%;\n  margin:0;\n  }\n}\n\n/* Print\n------------------------------------------------------- */\n@media print { .mapbox-improve-map { display:none; } }\n\n/* Browser Fixes\n------------------------------------------------------- */\n/* VML support for IE8 */\n.leaflet-vml-shape { width:1px; height:1px; }\n.lvml { behavior:url(#default#VML); display:inline-block; position:absolute; }\n/* Map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container img.leaflet-tile { max-width:none !important; }\n/* Markers are broken in FF/IE if you have max-width: 100% on marker images */\n.leaflet-container img.leaflet-marker-icon { max-width:none; }\n/* Stupid Android 2 doesn't understand \"max-width: none\" properly */\n.leaflet-container img.leaflet-image-layer { max-width:15000px !important; }\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg { -moz-user-select:none; }\n/* Older IEs don't support the translateY property for display animation */\n.leaflet-oldie .mapbox-modal .mapbox-modal-content        { display:none; }\n.leaflet-oldie .mapbox-modal.active .mapbox-modal-content { display:block; }\n.map-tooltip { width:280px\\8; /* < IE9 */ }\n\n/* < IE8 */\n.leaflet-oldie .leaflet-control-zoom-in,\n.leaflet-oldie .leaflet-control-zoom-out,\n.leaflet-oldie .leaflet-popup-close-button,\n.leaflet-oldie .leaflet-control-layers-toggle,\n.leaflet-oldie .leaflet-container.dark .map-tooltip .close,\n.leaflet-oldie .map-tooltip .close,\n.leaflet-oldie .mapbox-icon {\n  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAEECAYAAAA24SSRAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAXnSURBVHic7ZxfiFVFGMB/33pRUQsKto002DY3McJ6yBYkESQxpYTypaB66KEXYRWLYOlhr9RTRGWRUkk9RyEU+Y9ClECJVTKlPybWBilqkYuWrqBOD/NdPV7PmTPn3NPtat/AcO6ZP9/vfN/Mmfl2Zs6Kc452hK62UAxkIANdEURkVERGC9crOjKIiANwzkmRep1lOjWXa2ijaU7jaGWgKsL110a1EnV+LQMqbLqyobO6t4EMZCADGchABrqmQUlPNSWOVgaqIpi7ZSADGchABjKQga49kIjURaQem14apGE4KVR/D0fXds5FRaAOOL1e+h1dP7ZgE6wQxDnXvs7QWaZLE1wUVmRNdY1zrp6wRF0kfqHYnHwDGchABjJQIETNRyIyFVgBzAPmavIIsAt4xzn3d66QiNl1PnCYy05JczwMzG9pKlfIhQCkES/kwUKQqRma9GpM02xqGXdrBdCXZm2NzaFP66SGUGeYl5E+WqJO0HRHSG+PXtJN54AjVbhbjQcbBSjiakH4hR0p+hChOiHQrhKg7Drt6t7//Qtb9RAU5XtXMaiak28gAxnIQO0Gicg0EXlMRDaIyFGNGzRtWhQpMA/1A6uAL4BzZM9H57TMKqC/8HyUPFhZJLiMI4sh0/UDK4FtwHig3LiWWal1UkPsDDsFWAgsBZZo8hZgM7DdOXcmV0igjQ4Ba4HFwORAuclaZi1wqNU2OgNsVw22aNoS1XAhMCXx4OkubOBJZwKDwFbgLNm97qyWGQRmtuoFWRsV0ujabCPzVA1kIAMZqBNAIjIgImPNRxUzK+SsmtRJn4Pqmj8AjCXzsmTlaTSck/8zcDRX/QiNMp8S6Ab2a5nvG5plyioDaoLs1/sBYKwyUBokkTdQJeiVZgi6UR+UVQI0QWHdoXKFvKDYz7RiynXctk7LPlmeRmsKyAqWNQfSQAYykIGuS5CI1ERkSET2ishpvQ6JSLE93ByfoQbsRHeNgfe4vOO8E6iF6hdxToZU6OqGUIWv1vShqkB7VYNaU3pN0/fGgvLa6C5gk3PufJO5zwObgDuraqM8jbZWpdEnwG3AYKOX6XVQ07+sSqNQr3P4QxS9LXeGBGxIzTiGXwR8QSHRsCj7ZjxAbxFYaVAKbMe/BkrAduRpZJ6qgQxkoP8DKDRY1sk/s5W6YFhoUG3nFnZeOIJfxLgXWB7zBFmmyzPT44my9zXSC098OZCTwCQttzOZVzVoX1a5LHmdtYyWDM29yjknItKF3xSelFWvKo1mhCClQLo1sC95T8T/ebr+xrqOABVZT82tY56qgQxkIAN1CkhEulsGiUi3iCzKyJsjIpuBYyLyo4isFpHXReTuTFLAr1sOnAeeT8nbzNW+3rfAM2UcyAcSQj4FngR68Ot0F1NA24CuMqBu4PMUgYdS0hzwYqlFJ+AeNV3s30aLSoEUtjEScoHE3nkZ0Ay1fR7o3ZCcGNAEYHcO5A/g5pZACpsMPEf6UexTwCN5MvI6w2zgaeBt4HQK5BsC57ubY+jPll/wHzn1Ayc07QD+u6MR4GPn3LlA/SuCOZAGMpCBDFRhiF50EpFl+PP49wOzgIPAHmCLc+6zXAERE18P+b7DRqAnJCfvfF0P/mTgLZr0l97vB27CL3HO0rwTwBzn3PHCGiU0uQisA6bhzT0T/T4ZeAr4s6FZmal8WcI0LwETgdfwHzY1XKz3teyjibLLioLWa8UDeG/oZbxD+QHwdULwg1r+K71fXxQ0ohXfAgS/Mvyh5i1MgNZp2qt6P5ImL/QezdbrSeAG4EbVJJkH8LteJ+p1FikhBPpNr3Odc6fUNHdo2oJEucbX8Y2zDQeLgr7T62IReRb4AX9mGGC6Xo8Bu0VkOvCQpu1JlRZoo6Vc/WL2ad4C4A28CWvAR5TtdU0dwqH/ewHvHi8HbgUexh+euDRCFH6PVOh0/FKzw3um4M8zpA1DxwkMQzFjXR9+d/9N1WI8BZI71kU56Aq8HXgC+Ak/5o3gX+rUNmmO5nsbqP2gfwCyvJzPNoKXiAAAAABJRU5ErkJggg==');\n}\n.leaflet-oldie .mapbox-button-icon:before,\n.leaflet-oldie .leaflet-container.dark .leaflet-control-zoom-in,\n.leaflet-oldie .leaflet-container.dark .leaflet-control-zoom-out,\n.leaflet-oldie .leaflet-container.dark .leaflet-control-layers-toggle,\n.leaflet-oldie .leaflet-container.dark .mapbox-icon {\n  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAEECAYAAAA24SSRAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAXYSURBVHic7ZxfiFVFHMc/a4uKWtDDtqJGZprYgwX5ByTdkkLbSgghCiKih14EBYtg6aEr9RRREKRUUs9hGEVtChKaYMkq2VqWmnUX2tKiNDNZY/Xbw/wue7x7zsw559626zY/GM6df7/P+c3MPfO7M3NumyTGQiaMCSWCIiiC6qVqoZC0lXgy1Cq0FanUck1XxVmSNL8WrzYT1LCMvz5qL1FnoAyoTNOVkpYb3hEUQREUQREUQRF0RYOqjHim9aHaTFDDEt2tCIqgCIqgCIqgCLoiQRULedNLgwCeq1NasbR8IilvqMhJpe5zrvpFQElYIYiksRsMLdd0aYoLwYqsqW5i9KjLLdHJj6AIiqAIiiCP5J2PpgLrgGXAYkvrA/YBrwF/BTXkmB2XSzqhbDlhZRqaypdLuuiB1ORiCOaDTM2wZLaFNMumZunzDYZ1wJy01ubyPfOazLE6qeIbDMsy0qsl6ngtWpyRfqOFInVKbWFXS9TxWtRXQl9mHR9oXwlQdp2xGt4t8YVt6iMor+/d8EM1OvkRFEERFEH/AWga8CCwFfjJwlZLm5ZHge/pPQ+4z8IKYGJGub+BT4GPLBwvCio7f6QeWfQ13TxgA7ATGPKUG7IyG6xOOj3nxDcFWAl0A/da2sdAL/AJcD6kwAc6bop6gT1kWzUZ6LKb6CbDqrx9dB535704S8BZ1o2zdEpSZ1HQ3MRddtmdp8kQzuKa9d8VBSUl9lEh0Pjro6ZKy00TERRBERRBLQZaCpxh9FHFUqBKiiJZ+n5gFfBHnrsKgUKb7t/j/PCwBNZwapKW1yGp3/KPSDrjKVsalIT0W3ypwZoGSoPU8pY2E/RCCqSiwJ55GdBVBusIlCu0Xpf3Na1guZbb1mnYJwtZtKmALm/Z6EBGUARFUASNV1A70AMcBP60aw9F93ADPkO7pD3mDwxKesOusvT2QP3czkmPKd2YUNpucVl+LlBo4jsITAduAIbrmnMAOAncnqflQn10M26JebgufdjSb8oDyQM6hlv3ru/4dkv/vFmgd4EZwPoErN3iM4BdeUGNjDpJqsrtmzc86mqwHkkH5X4t7JD0tEFyw3INzYwwuwisEVA9bPe/CarBdocsip5qBEVQBP3fQRWyX4jOCpUsZS2xhR2SQdwixq3A2lDhMkcTa7Ie2G6fwzfsmax8clrSJCu3py4vVV/ZphsALtjnFXkqtNwyWlLqR1Ub7obPA5OyKjXLolk+SFmQgEN18eD/PLXEI2j8gYqspwbrRE81giIogiKohUAdzQB1APdk5C3Ends6CXwLbAReBm7J1OZxINdKGpb0VEpeb4pT+aWkx8os0SxJKHlf0iOSOiXNkHQpBbRT0oQyoA5JH6YoPJ6SJknPeHR5+6gTWJ2SPjej/BceXV7QV8AHvsoJucTlvt5o8ZkraZa1fUheD+gJfo9+Bq4JlPkNt4Xgl9CdSJos6UlJF1IsOSvp/hw6vL8mFgCLgCXA44w+730IeIiM89314gP9ACzHHXD9xdIO49476gO2MfJjLCjRgYygCIqgCGqiFFl0WoM7j78ImA8cBQ7gzuaHp/wck1anpO2BqXy7lSu9I9YJ9APXWfycxfuBa4HbzDpwc9ZC4FQZi2qWXJK0WdI0ue3SuRp5P/lRSb8nLCvsQK5JNM2zkiZKeknSkKVdlPSmlX0gUXZNUdAWq3hY7tzj83K++FuS9icU32Hl91p8S1FQn1V8VVKb3Mrw25a3MgHabGkvWrwvTZ/ve7TArqeBq3H+3f66PIBf7VrzkuaTIj7Qj3ZdDJwF9jLy5wJdiXK1t+NrZxuOFgV9bddVwBPAN8ARS5tp15PAZxa/29IOpGrz9FG3Rsscy+uS9IqkBXLD/Z1GRl1yQEjuHANy7vFaSdMlrZa0K1Gm1PcISTMlDZiSbZa2I8VSSTolz2Mo9PQeBO7CvTE1iDtRc2dKuffwPX4CfVQfrpf0sKRjks5Zs27J6pP6EH3vCBp70D8db2VXFPfIagAAAABJRU5ErkJggg==');\n}\n\n.leaflet-oldie .mapbox-logo-true {\n  background-image:none;\n  }\n", ""]);

	// exports


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function(useSourceMap) {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if(item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}

		if (useSourceMap && typeof btoa === 'function') {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
			});

			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}

		return [content].join('\n');
	}

	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

		return '/*# ' + data + ' */';
	}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAIICAMAAAAWgT0mAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6T+iNAAAAIHRSTlMAt/+ANr7Y9FEgxEDr+0cCF12ufA2Z4yhyCEyMZ1Wgzz2snYUAAASxSURBVHgB7dyH0qLMFoXh5aIFRVoQAUUE7v8uj5R+dMmRZmuN9U/YT4WJL2EDPRGhlPqbrMgV3sWbfzxa0aF0hpz4ViQ/PL24gkdDKaWUUr81pb+H/d0ppZRSSgXB5OuShgwmXxdFDKZflVeukVeukVeyZlLJG1e55quRO7zvDkI+cvnFld9G37hhpY/G55RSSikTrMMoCteBgdQm5CjcQGIb80m8xaJdwolkt9hYcsouVNuELyRb+Ljz2QN7d17euXGEG458MwznohCzDPl8eI7BnICzAsxZc9Zackru8JZOKuLcIBj92iicj0LRIHAjGkQwiUQjN/OR+bW3kfyG/fzRkD+E8sf9CwuLbAmTL5ZfWJbllFJKpSnelB3yJMkPGcTMMbYc0MZHg2XFpqz4pCo3BTxO57XlC3Z9PmEOPX5ttD2vIr4Qrc5beNSX/x/EpYbjn8dkAsLJe2fthM2+xgv1vgl904tW1+1kOtdVJBh52Ozqxy52TSi/TlF+3W6veaTXSa/Tf3adfh9KKaWKmKOPKngEHAVPlaRx1XLEaYSDOHJNa2URHNfIItfYQyyNXNOiiKWRazBUwsg1QyWLXDMoRNHeNUEAxxsV8diQgSwaqnsD3kgjFHu8ETl/TTT1nSjgSwGE1aT5+ymllDLHvKryo4Fc0fGhKyBkKo4qA5FiaMpLll3KoSog0ZHVDhjsKrKDgCE5NPeKpMGyI1liVJJHLMvJC0YXMseyiswwysjqkyj55PD6TwZRfmvk04sbfnAbkcHbN6yr5I9G6CrZQ5j0pUHgKrk/pZJHrpI3rnpqlFJKBZwRyBtRRY9vR/1xs9uU70XnFDftW1EHvB3Z4oMoxM2hf28QOW5CiiN3SvyLIjioPohqfhCdPokuf8HINQrmI/ES6yJfo5RS6vdWmPaUYkFdPH2rsSSTA+pDV2PWJS7gmp53ccQr5jV0FRqOmrbFrDVZ7XFXW/6wdl379nTTZRgYOr4GFw7sapMCLZ0TPOqYd1Gfd3QyeLQm5As2hceKEV+o4HPkSzl8ioqvXOFlkheNzeC37SJOdVgQxAkn7AkLjOVUiUXttOprLDvlER1GJ4i0CUeJgUC6i+lUy/sxQddHdGxTSM6ntBxF3Qky2bXJ+ygJV+WlhlJKqd9Dapr7e6mNSSFTnxOOknMNgU3FJ9Xmo78qDrCg4wudaD+2L68mM9emF+xrwwF7gx/XaOlF6rrijT2mALJ9a2oA2zVvqhpzzhxchh3c86b4+a3ZGTPS5HHW2YoPYfF4tzpJfW+hVwWQk4zc4Drfe+jN4zhasjLYJxxkwIE3je/N+h3QkwcAJR/fPvnerQ9J2gJpRJv9XLMhT63nlfeIZAWcyHjcMfdA4fu8gOR+Dtl9s3XEwQkwvih+bLmiHSbNwfC1lp7D6x632YEsgOM48qNvEEfeJMPxhQDyn1NKK9/I9xz0pwvLIfrZ0ZW+i4ueA2uHOcP0tF16v4s9txEOfNhiYDIAxYreGxZp5f4Y0xQYbEMuPBrYWA5yoLDh2ZhzHgk+zeD8cyybd5aW5nGTlpKFxVWWPCGtJPtxTM8CB9li6aRnIBQvy05x7OLE/QKg1G/ifyZmTPT8xDL0AAAAAElFTkSuQmCC"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26 260\"><g id=\"sprite\" fill=\"#000000\"><path id=\"zoomIn\" d=\"m 12.5,8.99999 c -0.277,0 -0.5,0.223 -0.5,0.5 l 0,2.50002 -2.5,0 c -0.277,0 -0.5,0.223 -0.5,0.5 l 0,1 c 0,0.277 0.223,0.5 0.5,0.5 l 2.5,0 0,2.5 c 0,0.277 0.223,0.5 0.5,0.5 l 1,0 c 0.277,0 0.5,-0.223 0.5,-0.5 l 0,-2.5 2.5,0 c 0.277,0 0.5,-0.223 0.5,-0.5 l 0,-1 c 0,-0.277 -0.223,-0.5 -0.5,-0.5 l -2.5,0 0,-2.50002 c 0,-0.277 -0.223,-0.5 -0.5,-0.5 z\"></path><path id=\"zoomOut\" d=\"M 9.5,38 C 9.223,38 9,38.223 9,38.5 l 0,1 C 9,39.777 9.223,40 9.5,40 l 7,0 c 0.277,0 0.5,-0.223 0.5,-0.5 l 0,-1 C 17,38.223 16.777,38 16.5,38 Z\"></path><path id=\"close\" d=\"m 10,61 -1,1 3,3 -3,3 1,1 3,-3 3,3 1,-1 -3,-3 3,-3 -1,-1 -3,3 z\"></path><path id=\"info\" d=\"m 13,83.99999 c -3.866,0 -7,3.134 -7,7.00002 0,3.866 3.134,7 7,7 3.8659,0 7,-3.134 7,-7 0,-3.86602 -3.1341,-7.00002 -7,-7.00002 z m -0.5,3 1,0 c 0.277,0 0.5,0.223 0.5,0.5 l 0,1 c 0,0.27702 -0.223,0.50002 -0.5,0.50002 l -1,0 c -0.277,0 -0.5,-0.223 -0.5,-0.50002 l 0,-1 c 0,-0.277 0.223,-0.5 0.5,-0.5 z m 0,3.00002 1,0 c 0.277,0 0.5,0.223 0.5,0.5 l 0,4 c 0,0.277 -0.223,0.5 -0.5,0.5 l -1,0 c -0.277,0 -0.5,-0.223 -0.5,-0.5 l 0,-4 c 0,-0.277 0.223,-0.5 0.5,-0.5 z\"></path><path id=\"layers\" d=\"m 13,110.96875 c -0.1012,-5e-4 -0.19265,0.0145 -0.28125,0.0625 L 6,113 l 0,1 6.71875,1.9375 C 12.80675,115.9855 12.8995,116 13,116 c 0.1001,0 0.19325,-0.0145 0.28125,-0.0625 L 20,114 l 0,-1 -6.71875,-1.96875 c -0.088,-0.048 -0.18155,-0.0625 -0.28125,-0.0625 z M 6,118 l 6.71875,1.9375 C 12.80675,119.9855 12.8995,120 13,120 c 0.1001,0 0.19325,-0.0145 0.28125,-0.0625 L 20,118 l 0,-2 -6.71875,1.9375 C 13.19325,117.9855 13.1001,118 13,118 c -0.1005,0 -0.19325,-0.0145 -0.28125,-0.0625 L 6,116 Z m 0,4 6.71875,1.9375 C 12.80675,123.9855 12.8995,124 13,124 c 0.1001,0 0.19325,-0.0145 0.28125,-0.0625 L 20,122 l 0,-2 -6.71875,1.9375 C 13.19325,121.9855 13.1001,122 13,122 c -0.1005,0 -0.19325,-0.0145 -0.28125,-0.0625 L 6,120 Z\"></path><path id=\"share\" d=\"m 14.3438,136.99999 2.125,2.125 -4.25,4.25002 1.4062,1.4062 4.25,-4.25002 2.125,2.12502 0,-5.65622 z m -6.3438,1 -1,1 0,9.00002 1,1 10,0 1,-1 0,-4 -1,-1 -1,1 0,3 -8,0 0,-7.00002 4,0 1,-1 -1,-1 z\"></path><path id=\"search\" d=\"m 11.5,162.99999 c -2.4853,0 -4.5,2.0147 -4.5,4.50002 0,2.4853 2.0147,4.5 4.5,4.5 0.854,0 1.6635,-0.2431 2.3437,-0.6563 l 3.6563,3.6563 1.5,-1.5 -3.6563,-3.6563 c 0.4132,-0.6802 0.6563,-1.4897 0.6563,-2.3437 0,-2.48532 -2.0147,-4.50002 -4.5,-4.50002 z m 0,1.5 c 1.6568,0 3,1.3431 3,3.00002 0,1.6568 -1.3432,3 -3,3 -1.6569,0 -3,-1.3432 -3,-3 0,-1.65692 1.3431,-3.00002 3,-3.00002 z\"></path><path id=\"facebook\" d=\"m 7,186.99998 -1,1 0,12 1,1 6.81812,1e-5 0,-5.00001 -1.8245,0 0,-2 1.8245,0 0,-2.09264 c 0,-1.80824 1.10439,-2.79288 2.7175,-2.79288 0.77272,0 1.09654,0.0575 1.29005,0.0832 l 0,1.80232 -0.77851,5.2e-4 C 16.1699,191.0005 16,191.41736 16,192.0291 l 0,1.97088 2.09228,0 -0.2724,2 -1.81988,0 0,5.00001 3,-1e-5 1,-1 0,-12 -1,-1 z\"></path><path id=\"twitter\" d=\"m 19.99957,216.12602 c -0.51509,0.22492 -1.06868,0.37693 -1.64967,0.44524 0.59299,-0.34993 1.04838,-0.90408 1.26288,-1.56444 -0.55499,0.32413 -1.16968,0.55945 -1.82397,0.68616 C 17.26502,215.14343 16.51853,214.8 15.69245,214.8 c -1.58627,0 -2.87235,1.26611 -2.87235,2.82775 0,0.22164 0.025,0.43756 0.075,0.64448 -2.38705,-0.11791 -4.50341,-1.24373 -5.91999,-2.95458 -0.24719,0.41763 -0.38889,0.90338 -0.38889,1.42162 0,0.98111 0.50699,1.84658 1.27768,2.35373 -0.4708,-0.015 -0.91369,-0.14191 -1.30088,-0.35363 -3e-4,0.012 -3e-4,0.024 -3e-4,0.035 0,1.37002 0.99008,2.51291 2.30396,2.77274 -0.241,0.065 -0.49469,0.099 -0.75669,0.099 -0.1851,0 -0.36499,-0.018 -0.54029,-0.051 0.36539,1.1234 1.42607,1.94097 2.68295,1.96377 -0.98298,0.75847 -2.22136,1.21061 -3.56713,1.21061 -0.2318,0 -0.46039,-0.013 -0.68509,-0.04 C 7.27151,225.53176 8.78128,226 10.40325,226 c 5.2831,0 8.17205,-4.30888 8.17205,-8.0457 0,-0.12261 0,-0.24462 -0.01,-0.36585 0.56129,-0.39874 1.04818,-0.89668 1.43327,-1.46383\"></path><path id=\"pinterest\" d=\"M 13.50024,238.9996 C 9.35822,238.9996 6,242.35751 6,246.49969 c 0,3.07113 1.84674,5.70949 4.48939,6.86948 -0.0211,-0.5237 -0.004,-1.15239 0.13052,-1.7222 0.14421,-0.60892 0.96507,-4.08682 0.96507,-4.08682 0,0 -0.23961,-0.47889 -0.23961,-1.18669 0,-1.11141 0.64421,-1.94155 1.44648,-1.94155 0.68215,0 1.01169,0.51241 1.01169,1.12601 0,0.68581 -0.43735,1.71156 -0.66231,2.66165 -0.18789,0.79559 0.39892,1.44451 1.1838,1.44451 1.42105,0 2.37808,-1.82512 2.37808,-3.98753 0,-1.64383 -1.10715,-2.87415 -3.12081,-2.87415 -2.27506,0 -3.69243,1.69664 -3.69243,3.59178 0,0.6534 0.19268,1.11426 0.49445,1.47102 0.13874,0.1639 0.15803,0.22983 0.10778,0.418 -0.0359,0.13804 -0.11858,0.47026 -0.15277,0.60191 -0.05,0.18998 -0.20384,0.25786 -0.37553,0.18774 -1.04789,-0.4278 -1.53596,-1.5754 -1.53596,-2.86536 0,-2.13055 1.79685,-4.68521 5.36034,-4.68521 2.86349,0 4.74808,2.0721 4.74808,4.29635 0,2.94222 -1.63569,5.14028 -4.04684,5.14028 -0.8097,0 -1.57134,-0.43774 -1.83228,-0.9349 0,0 -0.43543,1.72808 -0.52766,2.06171 -0.15897,0.57829 -0.47026,1.1562 -0.75486,1.60673 0.67461,0.19909 1.3871,0.30755 2.12562,0.30755 4.1417,0 7.49977,-3.35795 7.49977,-7.50031 0,-4.14218 -3.35807,-7.50009 -7.49977,-7.50009\"></path></g></svg>"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAIICAMAAAAWgT0mAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAIHRSTlMAt/+ANr7Y9FEgxEDr+0cCF12ufA2Z4yhyCEyMZ1Wgzz2snYUAAASxSURBVHgB7dyH0qLMFoXh5aIFRVoQAUUE7v8uj5R+dMmRZmuN9U/YT4WJL2EDPRGhlPqbrMgV3sWbfzxa0aF0hpz4ViQ/PL24gkdDKaWUUr81pb+H/d0ppZRSSgXB5OuShgwmXxdFDKZflVeukVeukVeyZlLJG1e55quRO7zvDkI+cvnFld9G37hhpY/G55RSSikTrMMoCteBgdQm5CjcQGIb80m8xaJdwolkt9hYcsouVNuELyRb+Ljz2QN7d17euXGEG458MwznohCzDPl8eI7BnICzAsxZc9Zackru8JZOKuLcIBj92iicj0LRIHAjGkQwiUQjN/OR+bW3kfyG/fzRkD+E8sf9CwuLbAmTL5ZfWJbllFJKpSnelB3yJMkPGcTMMbYc0MZHg2XFpqz4pCo3BTxO57XlC3Z9PmEOPX5ttD2vIr4Qrc5beNSX/x/EpYbjn8dkAsLJe2fthM2+xgv1vgl904tW1+1kOtdVJBh52Ozqxy52TSi/TlF+3W6veaTXSa/Tf3adfh9KKaWKmKOPKngEHAVPlaRx1XLEaYSDOHJNa2URHNfIItfYQyyNXNOiiKWRazBUwsg1QyWLXDMoRNHeNUEAxxsV8diQgSwaqnsD3kgjFHu8ETl/TTT1nSjgSwGE1aT5+ymllDLHvKryo4Fc0fGhKyBkKo4qA5FiaMpLll3KoSog0ZHVDhjsKrKDgCE5NPeKpMGyI1liVJJHLMvJC0YXMseyiswwysjqkyj55PD6TwZRfmvk04sbfnAbkcHbN6yr5I9G6CrZQ5j0pUHgKrk/pZJHrpI3rnpqlFJKBZwRyBtRRY9vR/1xs9uU70XnFDftW1EHvB3Z4oMoxM2hf28QOW5CiiN3SvyLIjioPohqfhCdPokuf8HINQrmI/ES6yJfo5RS6vdWmPaUYkFdPH2rsSSTA+pDV2PWJS7gmp53ccQr5jV0FRqOmrbFrDVZ7XFXW/6wdl379nTTZRgYOr4GFw7sapMCLZ0TPOqYd1Gfd3QyeLQm5As2hceKEV+o4HPkSzl8ioqvXOFlkheNzeC37SJOdVgQxAkn7AkLjOVUiUXttOprLDvlER1GJ4i0CUeJgUC6i+lUy/sxQddHdGxTSM6ntBxF3Qky2bXJ+ygJV+WlhlJKqd9Dapr7e6mNSSFTnxOOknMNgU3FJ9Xmo78qDrCg4wudaD+2L68mM9emF+xrwwF7gx/XaOlF6rrijT2mALJ9a2oA2zVvqhpzzhxchh3c86b4+a3ZGTPS5HHW2YoPYfF4tzpJfW+hVwWQk4zc4Drfe+jN4zhasjLYJxxkwIE3je/N+h3QkwcAJR/fPvnerQ9J2gJpRJv9XLMhT63nlfeIZAWcyHjcMfdA4fu8gOR+Dtl9s3XEwQkwvih+bLmiHSbNwfC1lp7D6x632YEsgOM48qNvEEfeJMPxhQDyn1NKK9/I9xz0pwvLIfrZ0ZW+i4ueA2uHOcP0tF16v4s9txEOfNhiYDIAxYreGxZp5f4Y0xQYbEMuPBrYWA5yoLDh2ZhzHgk+zeD8cyybd5aW5nGTlpKFxVWWPCGtJPtxTM8CB9li6aRnIBQvy05x7OLE/QKg1G/ifyZmTPT8xDL0AAAAAElFTkSuQmCC"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26 260\"><g id=\"sprite\" fill=\"#ffffff\"><path id=\"zoomIn\" d=\"m 12.5,8.99999 c -0.277,0 -0.5,0.223 -0.5,0.5 l 0,2.50002 -2.5,0 c -0.277,0 -0.5,0.223 -0.5,0.5 l 0,1 c 0,0.277 0.223,0.5 0.5,0.5 l 2.5,0 0,2.5 c 0,0.277 0.223,0.5 0.5,0.5 l 1,0 c 0.277,0 0.5,-0.223 0.5,-0.5 l 0,-2.5 2.5,0 c 0.277,0 0.5,-0.223 0.5,-0.5 l 0,-1 c 0,-0.277 -0.223,-0.5 -0.5,-0.5 l -2.5,0 0,-2.50002 c 0,-0.277 -0.223,-0.5 -0.5,-0.5 z\"></path><path id=\"zoomOut\" d=\"M 9.5,38 C 9.223,38 9,38.223 9,38.5 l 0,1 C 9,39.777 9.223,40 9.5,40 l 7,0 c 0.277,0 0.5,-0.223 0.5,-0.5 l 0,-1 C 17,38.223 16.777,38 16.5,38 Z\"></path><path id=\"close\" d=\"m 10,61 -1,1 3,3 -3,3 1,1 3,-3 3,3 1,-1 -3,-3 3,-3 -1,-1 -3,3 z\"></path><path id=\"info\" d=\"m 13,83.99999 c -3.866,0 -7,3.134 -7,7.00002 0,3.866 3.134,7 7,7 3.8659,0 7,-3.134 7,-7 0,-3.86602 -3.1341,-7.00002 -7,-7.00002 z m -0.5,3 1,0 c 0.277,0 0.5,0.223 0.5,0.5 l 0,1 c 0,0.27702 -0.223,0.50002 -0.5,0.50002 l -1,0 c -0.277,0 -0.5,-0.223 -0.5,-0.50002 l 0,-1 c 0,-0.277 0.223,-0.5 0.5,-0.5 z m 0,3.00002 1,0 c 0.277,0 0.5,0.223 0.5,0.5 l 0,4 c 0,0.277 -0.223,0.5 -0.5,0.5 l -1,0 c -0.277,0 -0.5,-0.223 -0.5,-0.5 l 0,-4 c 0,-0.277 0.223,-0.5 0.5,-0.5 z\"></path><path id=\"layers\" d=\"m 13,110.96875 c -0.1012,-5e-4 -0.19265,0.0145 -0.28125,0.0625 L 6,113 l 0,1 6.71875,1.9375 C 12.80675,115.9855 12.8995,116 13,116 c 0.1001,0 0.19325,-0.0145 0.28125,-0.0625 L 20,114 l 0,-1 -6.71875,-1.96875 c -0.088,-0.048 -0.18155,-0.0625 -0.28125,-0.0625 z M 6,118 l 6.71875,1.9375 C 12.80675,119.9855 12.8995,120 13,120 c 0.1001,0 0.19325,-0.0145 0.28125,-0.0625 L 20,118 l 0,-2 -6.71875,1.9375 C 13.19325,117.9855 13.1001,118 13,118 c -0.1005,0 -0.19325,-0.0145 -0.28125,-0.0625 L 6,116 Z m 0,4 6.71875,1.9375 C 12.80675,123.9855 12.8995,124 13,124 c 0.1001,0 0.19325,-0.0145 0.28125,-0.0625 L 20,122 l 0,-2 -6.71875,1.9375 C 13.19325,121.9855 13.1001,122 13,122 c -0.1005,0 -0.19325,-0.0145 -0.28125,-0.0625 L 6,120 Z\"></path><path id=\"share\" d=\"m 14.3438,136.99999 2.125,2.125 -4.25,4.25002 1.4062,1.4062 4.25,-4.25002 2.125,2.12502 0,-5.65622 z m -6.3438,1 -1,1 0,9.00002 1,1 10,0 1,-1 0,-4 -1,-1 -1,1 0,3 -8,0 0,-7.00002 4,0 1,-1 -1,-1 z\"></path><path id=\"search\" d=\"m 11.5,162.99999 c -2.4853,0 -4.5,2.0147 -4.5,4.50002 0,2.4853 2.0147,4.5 4.5,4.5 0.854,0 1.6635,-0.2431 2.3437,-0.6563 l 3.6563,3.6563 1.5,-1.5 -3.6563,-3.6563 c 0.4132,-0.6802 0.6563,-1.4897 0.6563,-2.3437 0,-2.48532 -2.0147,-4.50002 -4.5,-4.50002 z m 0,1.5 c 1.6568,0 3,1.3431 3,3.00002 0,1.6568 -1.3432,3 -3,3 -1.6569,0 -3,-1.3432 -3,-3 0,-1.65692 1.3431,-3.00002 3,-3.00002 z\"></path><path id=\"facebook\" d=\"m 7,186.99998 -1,1 0,12 1,1 6.81812,1e-5 0,-5.00001 -1.8245,0 0,-2 1.8245,0 0,-2.09264 c 0,-1.80824 1.10439,-2.79288 2.7175,-2.79288 0.77272,0 1.09654,0.0575 1.29005,0.0832 l 0,1.80232 -0.77851,5.2e-4 C 16.1699,191.0005 16,191.41736 16,192.0291 l 0,1.97088 2.09228,0 -0.2724,2 -1.81988,0 0,5.00001 3,-1e-5 1,-1 0,-12 -1,-1 z\"></path><path id=\"twitter\" d=\"m 19.99957,216.12602 c -0.51509,0.22492 -1.06868,0.37693 -1.64967,0.44524 0.59299,-0.34993 1.04838,-0.90408 1.26288,-1.56444 -0.55499,0.32413 -1.16968,0.55945 -1.82397,0.68616 C 17.26502,215.14343 16.51853,214.8 15.69245,214.8 c -1.58627,0 -2.87235,1.26611 -2.87235,2.82775 0,0.22164 0.025,0.43756 0.075,0.64448 -2.38705,-0.11791 -4.50341,-1.24373 -5.91999,-2.95458 -0.24719,0.41763 -0.38889,0.90338 -0.38889,1.42162 0,0.98111 0.50699,1.84658 1.27768,2.35373 -0.4708,-0.015 -0.91369,-0.14191 -1.30088,-0.35363 -3e-4,0.012 -3e-4,0.024 -3e-4,0.035 0,1.37002 0.99008,2.51291 2.30396,2.77274 -0.241,0.065 -0.49469,0.099 -0.75669,0.099 -0.1851,0 -0.36499,-0.018 -0.54029,-0.051 0.36539,1.1234 1.42607,1.94097 2.68295,1.96377 -0.98298,0.75847 -2.22136,1.21061 -3.56713,1.21061 -0.2318,0 -0.46039,-0.013 -0.68509,-0.04 C 7.27151,225.53176 8.78128,226 10.40325,226 c 5.2831,0 8.17205,-4.30888 8.17205,-8.0457 0,-0.12261 0,-0.24462 -0.01,-0.36585 0.56129,-0.39874 1.04818,-0.89668 1.43327,-1.46383\"></path><path id=\"pinterest\" d=\"M 13.50024,238.9996 C 9.35822,238.9996 6,242.35751 6,246.49969 c 0,3.07113 1.84674,5.70949 4.48939,6.86948 -0.0211,-0.5237 -0.004,-1.15239 0.13052,-1.7222 0.14421,-0.60892 0.96507,-4.08682 0.96507,-4.08682 0,0 -0.23961,-0.47889 -0.23961,-1.18669 0,-1.11141 0.64421,-1.94155 1.44648,-1.94155 0.68215,0 1.01169,0.51241 1.01169,1.12601 0,0.68581 -0.43735,1.71156 -0.66231,2.66165 -0.18789,0.79559 0.39892,1.44451 1.1838,1.44451 1.42105,0 2.37808,-1.82512 2.37808,-3.98753 0,-1.64383 -1.10715,-2.87415 -3.12081,-2.87415 -2.27506,0 -3.69243,1.69664 -3.69243,3.59178 0,0.6534 0.19268,1.11426 0.49445,1.47102 0.13874,0.1639 0.15803,0.22983 0.10778,0.418 -0.0359,0.13804 -0.11858,0.47026 -0.15277,0.60191 -0.05,0.18998 -0.20384,0.25786 -0.37553,0.18774 -1.04789,-0.4278 -1.53596,-1.5754 -1.53596,-2.86536 0,-2.13055 1.79685,-4.68521 5.36034,-4.68521 2.86349,0 4.74808,2.0721 4.74808,4.29635 0,2.94222 -1.63569,5.14028 -4.04684,5.14028 -0.8097,0 -1.57134,-0.43774 -1.83228,-0.9349 0,0 -0.43543,1.72808 -0.52766,2.06171 -0.15897,0.57829 -0.47026,1.1562 -0.75486,1.60673 0.67461,0.19909 1.3871,0.30755 2.12562,0.30755 4.1417,0 7.49977,-3.35795 7.49977,-7.50031 0,-4.14218 -3.35807,-7.50009 -7.49977,-7.50009\"></path></g></svg>"

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/

	var stylesInDom = {};

	var	memoize = function (fn) {
		var memo;

		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	};

	var isOldIE = memoize(function () {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	});

	var getElement = (function (fn) {
		var memo = {};

		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}

			return memo[selector]
		};
	})(function (target) {
		return document.querySelector(target)
	});

	var singleton = null;
	var	singletonCounter = 0;
	var	stylesInsertedAtTop = [];

	var	fixUrls = __webpack_require__(40);

	module.exports = function(list, options) {
		if (false) {
			if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};

		options.attrs = typeof options.attrs === "object" ? options.attrs : {};

		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (!options.singleton) options.singleton = isOldIE();

		// By default, add <style> tags to the <head> element
		if (!options.insertInto) options.insertInto = "head";

		// By default, add <style> tags to the bottom of the target
		if (!options.insertAt) options.insertAt = "bottom";

		var styles = listToStyles(list, options);

		addStylesToDom(styles, options);

		return function update (newList) {
			var mayRemove = [];

			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];

				domStyle.refs--;
				mayRemove.push(domStyle);
			}

			if(newList) {
				var newStyles = listToStyles(newList, options);
				addStylesToDom(newStyles, options);
			}

			for (var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];

				if(domStyle.refs === 0) {
					for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

					delete stylesInDom[domStyle.id];
				}
			}
		};
	};

	function addStylesToDom (styles, options) {
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			if(domStyle) {
				domStyle.refs++;

				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}

				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];

				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}

				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles (list, options) {
		var styles = [];
		var newStyles = {};

		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = options.base ? item[0] + options.base : item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};

			if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
			else newStyles[id].parts.push(part);
		}

		return styles;
	}

	function insertStyleElement (options, style) {
		var target = getElement(options.insertInto)

		if (!target) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}

		var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

		if (options.insertAt === "top") {
			if (!lastStyleElementInsertedAtTop) {
				target.insertBefore(style, target.firstChild);
			} else if (lastStyleElementInsertedAtTop.nextSibling) {
				target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				target.appendChild(style);
			}
			stylesInsertedAtTop.push(style);
		} else if (options.insertAt === "bottom") {
			target.appendChild(style);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement (style) {
		if (style.parentNode === null) return false;
		style.parentNode.removeChild(style);

		var idx = stylesInsertedAtTop.indexOf(style);
		if(idx >= 0) {
			stylesInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement (options) {
		var style = document.createElement("style");

		options.attrs.type = "text/css";

		addAttrs(style, options.attrs);
		insertStyleElement(options, style);

		return style;
	}

	function createLinkElement (options) {
		var link = document.createElement("link");

		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";

		addAttrs(link, options.attrs);
		insertStyleElement(options, link);

		return link;
	}

	function addAttrs (el, attrs) {
		Object.keys(attrs).forEach(function (key) {
			el.setAttribute(key, attrs[key]);
		});
	}

	function addStyle (obj, options) {
		var style, update, remove, result;

		// If a transform function was defined, run it on the css
		if (options.transform && obj.css) {
		    result = options.transform(obj.css);

		    if (result) {
		    	// If transform returns a value, use that instead of the original css.
		    	// This allows running runtime transformations on the css.
		    	obj.css = result;
		    } else {
		    	// If the transform function returns a falsy value, don't add this css.
		    	// This allows conditional loading of css
		    	return function() {
		    		// noop
		    	};
		    }
		}

		if (options.singleton) {
			var styleIndex = singletonCounter++;

			style = singleton || (singleton = createStyleElement(options));

			update = applyToSingletonTag.bind(null, style, styleIndex, false);
			remove = applyToSingletonTag.bind(null, style, styleIndex, true);

		} else if (
			obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function"
		) {
			style = createLinkElement(options);
			update = updateLink.bind(null, style, options);
			remove = function () {
				removeStyleElement(style);

				if(style.href) URL.revokeObjectURL(style.href);
			};
		} else {
			style = createStyleElement(options);
			update = applyToTag.bind(null, style);
			remove = function () {
				removeStyleElement(style);
			};
		}

		update(obj);

		return function updateStyle (newObj) {
			if (newObj) {
				if (
					newObj.css === obj.css &&
					newObj.media === obj.media &&
					newObj.sourceMap === obj.sourceMap
				) {
					return;
				}

				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;

			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag (style, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (style.styleSheet) {
			style.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = style.childNodes;

			if (childNodes[index]) style.removeChild(childNodes[index]);

			if (childNodes.length) {
				style.insertBefore(cssNode, childNodes[index]);
			} else {
				style.appendChild(cssNode);
			}
		}
	}

	function applyToTag (style, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			style.setAttribute("media", media)
		}

		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			while(style.firstChild) {
				style.removeChild(style.firstChild);
			}

			style.appendChild(document.createTextNode(css));
		}
	}

	function updateLink (link, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		/*
			If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
			and there is no publicPath defined then lets turn convertToAbsoluteUrls
			on by default.  Otherwise default to the convertToAbsoluteUrls option
			directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

		if (options.convertToAbsoluteUrls || autoFixUrls) {
			css = fixUrls(css);
		}

		if (sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = link.href;

		link.href = URL.createObjectURL(blob);

		if(oldSrc) URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	
	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */

	module.exports = function (css) {
	  // get current location
	  var location = typeof window !== "undefined" && window.location;

	  if (!location) {
	    throw new Error("fixUrls requires window.location");
	  }

		// blank or null?
		if (!css || typeof css !== "string") {
		  return css;
	  }

	  var baseUrl = location.protocol + "//" + location.host;
	  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

		// convert each url(...)
		/*
		This regular expression is just a way to recursively match brackets within
		a string.

		 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
		   (  = Start a capturing group
		     (?:  = Start a non-capturing group
		         [^)(]  = Match anything that isn't a parentheses
		         |  = OR
		         \(  = Match a start parentheses
		             (?:  = Start another non-capturing groups
		                 [^)(]+  = Match anything that isn't a parentheses
		                 |  = OR
		                 \(  = Match a start parentheses
		                     [^)(]*  = Match anything that isn't a parentheses
		                 \)  = Match a end parentheses
		             )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
		 \)  = Match a close parens

		 /gi  = Get all matches, not the first.  Be case insensitive.
		 */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl
				.trim()
				.replace(/^"(.*)"$/, function(o, $1){ return $1; })
				.replace(/^'(.*)'$/, function(o, $1){ return $1; });

			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			  return fullMatch;
			}

			// convert the url to a full url
			var newUrl;

			if (unquotedOrigUrl.indexOf("//") === 0) {
			  	//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}

			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});

		// send back the fixed css
		return fixedCss;
	};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	// Based on https://github.com/shramov/leaflet-plugins
	// GridLayer like https://avinmathew.com/leaflet-and-google-maps/ , but using MutationObserver instead of jQuery


	// 🍂class GridLayer.GoogleMutant
	// 🍂extends GridLayer
	L.GridLayer.GoogleMutant = L.GridLayer.extend({
		includes: L.Mixin.Events,

		options: {
			minZoom: 0,
			maxZoom: 18,
			tileSize: 256,
			subdomains: 'abc',
			errorTileUrl: '',
			attribution: '',	// The mutant container will add its own attribution anyways.
			opacity: 1,
			continuousWorld: false,
			noWrap: false,
			// 🍂option type: String = 'roadmap'
			// Google's map type. Valid values are 'roadmap', 'satellite' or 'terrain'. 'hybrid' is not really supported.
			type: 'roadmap',
			maxNativeZoom: 21
		},

		initialize: function (options) {
			L.GridLayer.prototype.initialize.call(this, options);

			this._ready = !!window.google && !!window.google.maps && !!window.google.maps.Map;

			this._GAPIPromise = this._ready ? Promise.resolve(window.google) : new Promise(function (resolve, reject) {
				var checkCounter = 0;
				var intervalId = null;
				intervalId = setInterval(function () {
					if (checkCounter >= 10) {
						clearInterval(intervalId);
						return reject(new Error('window.google not found after 10 attempts'));
					}
					if (!!window.google && !!window.google.maps && !!window.google.maps.Map) {
						clearInterval(intervalId);
						return resolve(window.google);
					}
					checkCounter++;
				}, 500);
			});

			// Couple data structures indexed by tile key
			this._tileCallbacks = {};	// Callbacks for promises for tiles that are expected
			this._freshTiles = {};	// Tiles from the mutant which haven't been requested yet

			this._imagesPerTile = (this.options.type === 'hybrid') ? 2 : 1;
		},

		onAdd: function (map) {
			L.GridLayer.prototype.onAdd.call(this, map);
			this._initMutantContainer();

			this._GAPIPromise.then(function () {
				this._ready = true;
				this._map = map;

				this._initMutant();

				map.on('viewreset', this._reset, this);
				map.on('move', this._update, this);
				map.on('zoomend', this._handleZoomAnim, this);
				map.on('resize', this._resize, this);

				//handle layer being added to a map for which there are no Google tiles at the given zoom
				google.maps.event.addListenerOnce(this._mutant, 'idle', function () {
					this._checkZoomLevels();
					this._mutantIsReady = true;
				}.bind(this));

				//20px instead of 1em to avoid a slight overlap with google's attribution
				map._controlCorners.bottomright.style.marginBottom = '20px';
				map._controlCorners.bottomleft.style.marginBottom = '20px';

				this._reset();
				this._update();

				if (this._subLayers) {
					//restore previously added google layers
					for (var layerName in this._subLayers) {
						this._subLayers[layerName].setMap(this._mutant);
					}
				}
			}.bind(this));
		},

		onRemove: function (map) {
			L.GridLayer.prototype.onRemove.call(this, map);
			map._container.removeChild(this._mutantContainer);
			this._mutantContainer = undefined;

			map.off('viewreset', this._reset, this);
			map.off('move', this._update, this);
			map.off('zoomend', this._handleZoomAnim, this);
			map.off('resize', this._resize, this);

			map._controlCorners.bottomright.style.marginBottom = '0em';
			map._controlCorners.bottomleft.style.marginBottom = '0em';
		},

		getAttribution: function () {
			return this.options.attribution;
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			if (opacity < 1) {
				L.DomUtil.setOpacity(this._mutantContainer, opacity);
			}
		},

		setElementSize: function (e, size) {
			e.style.width = size.x + 'px';
			e.style.height = size.y + 'px';
		},


		addGoogleLayer: function (googleLayerName, options) {
			if (!this._subLayers) this._subLayers = {};
			return this._GAPIPromise.then(function () {
				var Constructor = google.maps[googleLayerName];
				var googleLayer = new Constructor(options);
				googleLayer.setMap(this._mutant);
				this._subLayers[googleLayerName] = googleLayer;
				return googleLayer;
			}.bind(this));
		},

		removeGoogleLayer: function (googleLayerName) {
			var googleLayer = this._subLayers && this._subLayers[googleLayerName];
			if (!googleLayer) return;

			googleLayer.setMap(null);
			delete this._subLayers[googleLayerName];
		},


		_initMutantContainer: function () {
			if (!this._mutantContainer) {
				this._mutantContainer = L.DomUtil.create('div', 'leaflet-google-mutant leaflet-top leaflet-left');
				this._mutantContainer.id = '_MutantContainer_' + L.Util.stamp(this._mutantContainer);
				this._mutantContainer.style.zIndex = '800'; //leaflet map pane at 400, controls at 1000
				this._mutantContainer.style.pointerEvents = 'none';

				this._map.getContainer().appendChild(this._mutantContainer);
			}

			this.setOpacity(this.options.opacity);
			this.setElementSize(this._mutantContainer, this._map.getSize());

			this._attachObserver(this._mutantContainer);
		},

		_initMutant: function () {
			if (!this._ready || !this._mutantContainer) return;
			this._mutantCenter = new google.maps.LatLng(0, 0);

			var map = new google.maps.Map(this._mutantContainer, {
				center: this._mutantCenter,
				zoom: 0,
				tilt: 0,
				mapTypeId: this.options.type,
				disableDefaultUI: true,
				keyboardShortcuts: false,
				draggable: false,
				disableDoubleClickZoom: true,
				scrollwheel: false,
				streetViewControl: false,
				styles: this.options.styles || {},
				backgroundColor: 'transparent'
			});

			this._mutant = map;

			google.maps.event.addListenerOnce(map, 'idle', function () {
				var nodes = this._mutantContainer.querySelectorAll('a');
				for (var i = 0; i < nodes.length; i++) {
					nodes[i].style.pointerEvents = 'auto';
				}
			}.bind(this));

			// 🍂event spawned
			// Fired when the mutant has been created.
			this.fire('spawned', {mapObject: map});
		},

		_attachObserver: function _attachObserver (node) {
	// 		console.log('Gonna observe', node);

			var observer = new MutationObserver(this._onMutations.bind(this));

			// pass in the target node, as well as the observer options
			observer.observe(node, { childList: true, subtree: true });
		},

		_onMutations: function _onMutations (mutations) {
			for (var i = 0; i < mutations.length; ++i) {
				var mutation = mutations[i];
				for (var j = 0; j < mutation.addedNodes.length; ++j) {
					var node = mutation.addedNodes[j];

					if (node instanceof HTMLImageElement) {
						this._onMutatedImage(node);
					} else if (node instanceof HTMLElement) {
						Array.prototype.forEach.call(node.querySelectorAll('img'), this._onMutatedImage.bind(this));
					}
				}
			}
		},

		// Only images which 'src' attrib match this will be considered for moving around.
		// Looks like some kind of string-based protobuf, maybe??
		// Only the roads (and terrain, and vector-based stuff) match this pattern
		_roadRegexp: /!1i(\d+)!2i(\d+)!3i(\d+)!/,

		// On the other hand, raster imagery matches this other pattern
		_satRegexp: /x=(\d+)&y=(\d+)&z=(\d+)/,

		// On small viewports, when zooming in/out, a static image is requested
		// This will not be moved around, just removed from the DOM.
		_staticRegExp: /StaticMapService\.GetMapImage/,

		_onMutatedImage: function _onMutatedImage (imgNode) {
	// 		if (imgNode.src) {
	// 			console.log('caught mutated image: ', imgNode.src);
	// 		}

			var coords;
			var match = imgNode.src.match(this._roadRegexp);
			var sublayer = 0;

			if (match) {
				coords = {
					z: match[1],
					x: match[2],
					y: match[3]
				};
				if (this._imagesPerTile > 1) { 
					imgNode.style.zIndex = 1;
					sublayer = 1;
				}
			} else {
				match = imgNode.src.match(this._satRegexp);
				if (match) {
					coords = {
						x: match[1],
						y: match[2],
						z: match[3]
					};
				}
	// 			imgNode.style.zIndex = 0;
				sublayer = 0;
			}

			if (coords) {
				var tileKey = this._tileCoordsToKey(coords);
				imgNode.style.position = 'absolute';
				imgNode.style.visibility = 'hidden';

				var key = tileKey + '/' + sublayer;
				// console.log('mutation for tile', key)
				//store img so it can also be used in subsequent tile requests
				this._freshTiles[key] = imgNode;

				if (key in this._tileCallbacks && this._tileCallbacks[key]) {
	// console.log('Fullfilling callback ', key);
					//fullfill most recent tileCallback because there maybe callbacks that will never get a 
					//corresponding mutation (because map moved to quickly...)
					this._tileCallbacks[key].pop()(imgNode); 
					if (!this._tileCallbacks[key].length) { delete this._tileCallbacks[key]; }
				} else {
					if (this._tiles[tileKey]) {
						//we already have a tile in this position (mutation is probably a google layer being added)
						//replace it
						var c = this._tiles[tileKey].el;
						var oldImg = (sublayer === 0) ? c.firstChild : c.firstChild.nextSibling;
						var cloneImgNode = this._clone(imgNode);
						c.replaceChild(cloneImgNode, oldImg);
					}
				}
			} else if (imgNode.src.match(this._staticRegExp)) {
				imgNode.style.visibility = 'hidden';
			}
		},


		createTile: function (coords, done) {
			var key = this._tileCoordsToKey(coords);

			var tileContainer = L.DomUtil.create('div');
			tileContainer.dataset.pending = this._imagesPerTile;
			done = done.bind(this, null, tileContainer);

			for (var i = 0; i < this._imagesPerTile; i++) {
				var key2 = key + '/' + i;
				if (key2 in this._freshTiles) {
					var imgNode = this._freshTiles[key2];
					tileContainer.appendChild(this._clone(imgNode));
					tileContainer.dataset.pending--;
	// 				console.log('Got ', key2, ' from _freshTiles');
				} else {
					this._tileCallbacks[key2] = this._tileCallbacks[key2] || [];
					this._tileCallbacks[key2].push( (function (c/*, k2*/) {
						return function (imgNode) {
							c.appendChild(this._clone(imgNode));
							c.dataset.pending--;
							if (!parseInt(c.dataset.pending)) { done(); }
	// 						console.log('Sent ', k2, ' to _tileCallbacks, still ', c.dataset.pending, ' images to go');
						}.bind(this);
					}.bind(this))(tileContainer/*, key2*/) );
				}
			}

			if (!parseInt(tileContainer.dataset.pending)) {
				L.Util.requestAnimFrame(done);
			}
			return tileContainer;
		},

		_clone: function (imgNode) {
			var clonedImgNode = imgNode.cloneNode(true);
			clonedImgNode.style.visibility = 'visible';
			return clonedImgNode;
		},

		_checkZoomLevels: function () {
			//setting the zoom level on the Google map may result in a different zoom level than the one requested
			//(it won't go beyond the level for which they have data).
			var zoomLevel = this._map.getZoom();
			var gMapZoomLevel = this._mutant.getZoom();
			if (!zoomLevel || !gMapZoomLevel) return;


			if ((gMapZoomLevel !== zoomLevel) || //zoom levels are out of sync, Google doesn't have data
				(gMapZoomLevel > this.options.maxNativeZoom)) { //at current location, Google does have data (contrary to maxNativeZoom)
				//Update maxNativeZoom
				this._setMaxNativeZoom(gMapZoomLevel);
			}
		},

		_setMaxNativeZoom: function (zoomLevel) {
			if (zoomLevel != this.options.maxNativeZoom) {
				this.options.maxNativeZoom = zoomLevel;
				this._resetView();
			}
		},

		_reset: function () {
			this._initContainer();
		},

		_update: function () {
			// zoom level check needs to happen before super's implementation (tile addition/creation)
			// otherwise tiles may be missed if maxNativeZoom is not yet correctly determined
			if (this._mutant) {
				var center = this._map.getCenter();
				var _center = new google.maps.LatLng(center.lat, center.lng);

				this._mutant.setCenter(_center);
				var zoom = this._map.getZoom();
				var fractionalLevel = zoom !== Math.round(zoom);
				var mutantZoom = this._mutant.getZoom();

				//ignore fractional zoom levels
				if (!fractionalLevel && (zoom != mutantZoom)) {
					this._mutant.setZoom(zoom);
								
					if (this._mutantIsReady) this._checkZoomLevels();
					//else zoom level check will be done later by 'idle' handler
				}
			}

			L.GridLayer.prototype._update.call(this);
		},

		_resize: function () {
			var size = this._map.getSize();
			if (this._mutantContainer.style.width === size.x &&
				this._mutantContainer.style.height === size.y)
				return;
			this.setElementSize(this._mutantContainer, size);
			if (!this._mutant) return;
			google.maps.event.trigger(this._mutant, 'resize');
		},

		_handleZoomAnim: function () {
			if (!this._mutant) return;
			var center = this._map.getCenter();
			var _center = new google.maps.LatLng(center.lat, center.lng);

			this._mutant.setCenter(_center);
			this._mutant.setZoom(Math.round(this._map.getZoom()));
		},

		// Agressively prune _freshtiles when a tile with the same key is removed,
		// this prevents a problem where Leaflet keeps a loaded tile longer than
		// GMaps, so that GMaps makes two requests but Leaflet only consumes one,
		// polluting _freshTiles with stale data.
		_removeTile: function (key) {
			if (!this._mutant) return;

			//give time for animations to finish before checking it tile should be pruned
			setTimeout(this._pruneTile.bind(this, key), 1000);


			return L.GridLayer.prototype._removeTile.call(this, key);
		},

		_pruneTile: function (key) {
			var gZoom = this._mutant.getZoom();
			var tileZoom = key.split(':')[2];
			var googleBounds = this._mutant.getBounds();
			var sw = googleBounds.getSouthWest();
			var ne = googleBounds.getNorthEast();
			var gMapBounds = L.latLngBounds([[sw.lat(), sw.lng()], [ne.lat(), ne.lng()]]);

			for (var i=0; i<this._imagesPerTile; i++) {
				var key2 = key + '/' + i;
				if (key2 in this._freshTiles) { 
					var tileBounds = this._map && this._keyToBounds(key);
					var stillVisible = this._map && tileBounds.overlaps(gMapBounds) && (tileZoom == gZoom);

					if (!stillVisible) delete this._freshTiles[key2]; 
	//				console.log('Prunning of ', key, (!stillVisible))
				}
			}
		}
	});


	// 🍂factory gridLayer.googleMutant(options)
	// Returns a new `GridLayer.GoogleMutant` given its options
	L.gridLayer.googleMutant = function (options) {
		return new L.GridLayer.GoogleMutant(options);
	};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = function (options) {

	    options.debug = options.debug || false;

	    var clog = function(s, o, e) {

	      if (options.debug) {
	        if (e) {
	          console.log('EON-MAP:', s, o, e);
	        } else {
	          console.log('EON-MAP:', s, o);
	        }
	      }
	    };

	    if(typeof(options.pubnub) == "undefined" && console) {
	      return console.error("PubNub not found. See http://www.pubnub.com/docs/javascript/javascript-sdk.html#_where_do_i_get_the_code");
	    }

	    if(typeof(L) == "undefined" && console) {
	      return console.error("You need to include the Mapbox or Google Javascript library.");
	    }

	    var self = this;

	    var geo = {
	      bearing : function (lat1,lng1,lat2,lng2) {
	        var dLon = this._toRad(lng2-lng1);
	        var y = Math.sin(dLon) * Math.cos(this._toRad(lat2));
	        var x = Math.cos(this._toRad(lat1))*Math.sin(this._toRad(lat2)) - Math.sin(this._toRad(lat1))*Math.cos(this._toRad(lat2))*Math.cos(dLon);
	        var brng = this._toDeg(Math.atan2(y, x));
	        return ((brng + 360) % 360);
	      },
	      _toRad : function(deg) {
	         return deg * Math.PI / 180;
	      },
	      _toDeg : function(rad) {
	        return rad * 180 / Math.PI;
	      }
	    };

	    self.pubnub = options.pubnub || PubNub || false;

	    if(!self.pubnub) {
	      error = "PubNub not found. See http://www.pubnub.com/docs/javascript/javascript-sdk.html#_where_do_i_get_the_code";
	    }

	    options.id = options.id || false;
	    options.channels = options.channels || false;
	    options.channelGroups = options.channelGroups || false;
	    options.transform = options.transform || function(m){return m};
	    options.history = options.history || false;
	    options.message = options.message || function(){};
	    options.connect = options.connect || function(){};
	    options.rotate = options.rotate || false;
	    options.marker = options.marker || L.marker;
	    options.options = options.options || {};

	    options.provider = options.provider || 'mapbox';

	    options.googleMutant = options.googleMutant || {
	      type: 'roadmap' // valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
	    };

	    clog('Options', options);

	    self.markers = {};

	    if(!options.id) {
	      return console.error('You need to set an ID for your Mapbox element.');
	    }

	    if(!options.channels && !options.channelGroups) {
	      return console.error('You need to supply channels or channelGroups to connect to.');
	    }

	    if(options.provider == 'mapbox') {

	      if(typeof(options.mbToken) == "undefined" && console) {
	        return console.error("Please supply a Mapbox Token: https://www.mapbox.com/help/create-api-access-token/");
	      }

	      if(typeof(options.mbId) == "undefined" && console) {
	        return console.error("Please supply a Mapbox Map ID: https://www.mapbox.com/help/define-map-id/");
	      }

	      L.mapbox.accessToken = options.mbToken;

	      self.map = L.mapbox.map(options.id, options.mbId, options.options);

	    }

	    if(options.provider == 'google') {

	      if(typeof(options.googleKey) == "undefined" && console) {
	        return console.error("Please supply a Google Maps API Key");
	      }

	      options.options - options.options || {};

	      options.options.center = options.options.center || new L.LatLng(30.2672, -97.7531);
	      options.options.zoom = options.options.zoom || 5;

	      GoogleMapsLoader.KEY = options.googleKey;

	      self.map = new L.Map('map', options.options);

	      GoogleMapsLoader.load(function(google) {

	        var roads = L.gridLayer.googleMutant(options.googleMutant).addTo(self.map);

	      });

	    }

	    self.refreshRate = options.refreshRate || 10;

	    self.lastUpdates = {};

	    self.update = function (seed, animate) {

	      clog('Markers:', 'Updating', seed);

	      for(var key in seed) {

	        if(seed.hasOwnProperty(key)) {

	          if(!self.markers[key]) {

	            var data = seed[key].data || {};

	            self.markers[key]= options.marker(seed[key].latlng, seed[key].data);
	            self.markers[key].addTo(self.map);

	          } else {

	            if(animate) {
	              clog('Markers:', 'Animating');
	              self.animate(key, seed[key].latlng);
	            } else {
	              clog('Markers:', 'Updating');
	              self.updateMarker(key, seed[key].latlng);
	            }

	          }

	        }

	        self.lastUpdates[key] = new Date().getTime();

	      }

	    };

	    var isNumber = function(n) {
	      return !isNaN(parseFloat(n)) && isFinite(n);
	    };

	    self.updateMarker = function (index, point) {

	      if(point && point.length > 1) {

	        if(isNumber(point[0]) && isNumber(point[1])) {
	          self.markers[index].setLatLng(point);
	        }

	      }

	    };

	    self.animations = {};

	    self.animate = function (index, destination) {

	      var startlatlng = self.markers[index].getLatLng();

	      var animation = {
	        start: startlatlng,
	        dest: destination,
	        time: new Date().getTime(),
	        length: new Date().getTime() - (self.lastUpdates[index] || new Date().getTime())
	      };

	      clog('Animation:', animation);

	      self.animations[index] = animation;

	      clog('Animations:', self.animations);

	    };

	    self.refresh = function() {

	      var s = {};

	      for(var index in self.markers) {

	        if(self.markers.hasOwnProperty(index) && typeof self.animations[index] !== 'undefined') {

	          s.position = self.animations[index].start;

	          // number of steps in this animation
	          s.maxSteps = Math.round(self.animations[index].length / self.refreshRate)

	          // time that has passed since that message
	          s.timeSince = new Date().getTime() - self.animations[index].time;
	          s.numSteps = Math.round(s.timeSince / self.refreshRate); // if this is 1 or 0 it fucks up steps

	          if(s.numSteps <= s.maxSteps) {

	            // probably has to do with this math
	            s.latDistance = self.animations[index].dest[0] - s.position.lat;
	            s.lngDistance = self.animations[index].dest[1] - s.position.lng;

	            s.lat = s.position.lat + ((s.latDistance / s.maxSteps) * s.numSteps);
	            s.lng = s.position.lng + ((s.lngDistance / s.maxSteps) * s.numSteps);

	            s.nextStep = [s.lat, s.lng];

	            self.updateMarker(index, s.nextStep);

	            if(options.rotate) {
	              self.markers[index].options.angle = geo.bearing(s.position.lat, s.position.lng, s.lat, s.lng);
	            }

	          }

	        }

	        index++;

	      }

	    };

	    self.pubnub.addListener({
	      status: function(statusEvent) {
	        if (statusEvent.category === "PNConnectedCategory") {
	          options.connect();
	        }
	      },
	      message: function(m) {

	        if(options.channels.indexOf(m.channel) > -1) {

	          clog('PubNub:', 'Got Message');

	          message = options.transform(m.message);

	          options.message(message, m.timetoken, m.channel);
	          self.update(message, true);
	        }

	      }
	    });

	    self.loadHistory = function() {

	      for(var i in options.channels) {

	        self.pubnub.history({
	          channel: options.channels[i],
	          includeTimetoken: true,
	          count: 10
	        }, function(status, payload) {

	          payload.messages = payload.messages.reverse();

	          for(var a in payload.messages) {
	            payload.messages[a].entry = options.transform(payload.messages[a].entry);
	            options.message(payload.messages[a].entry, payload.messages[a].timetoken, options.channels);
	            self.update(payload.messages[a].entry, true);
	          }

	        });

	      }

	    }

	    if(options.channelGroups) {

	      // assuming an intialized PubNub instance already exists
	      self.pubnub.channelGroups.listChannels({
	          channelGroup: options.channelGroups
	        }, function (status, response) {

	          if (status.error) {
	            clog("operation failed w/ error:", status);
	            return;
	          }

	          options.channels = response.channels;

	          if(options.history) {
	            self.loadHistory();
	          }

	          self.pubnub.subscribe({
	            channelGroups: options.channelGroups
	          });

	        }
	      );

	    } else {

	      if(options.history) {
	        self.loadHistory();
	      }

	      self.pubnub.subscribe({
	        channels: options.channels
	      });

	    }

	    self.refresh();
	    setInterval(self.refresh, self.refreshRate);

	    return self.map;

	};


/***/ })
/******/ ])
});
;