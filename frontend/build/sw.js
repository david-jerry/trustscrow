!function(){"use strict";var e={895:function(){try{self["workbox:cacheable-response:6.5.3"]&&_()}catch(e){}},913:function(){try{self["workbox:core:6.5.3"]&&_()}catch(e){}},550:function(){try{self["workbox:expiration:6.5.3"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}!function(){s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}s(80);const t=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,s,n="GET"){this.handler=t(s),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=t(e)}}class a extends n{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class r{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:a,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:s,request:e,event:t,params:a})}catch(e){c=Promise.reject(e)}const h=r&&r.catchHandler;return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(n=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw n}))),c}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const a=this._routes.get(s.method)||[];for(const r of a){let a;const i=r.match({url:e,sameOrigin:t,request:s,event:n});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:r,params:a}}return{}}setDefaultHandler(e,s="GET"){this._defaultHandlerMap.set(s,t(e))}setCatchHandler(e){this._catchHandler=t(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}let i;const o=()=>(i||(i=new r,i.addFetchListener(),i.addCacheListener()),i);function c(t,s,r){let i;if("string"==typeof t){const e=new URL(t,location.href);i=new n((({url:t})=>t.href===e.href),s,r)}else if(t instanceof RegExp)i=new a(t,s,r);else if("function"==typeof t)i=new n(t,s,r);else{if(!(t instanceof n))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});i=t}return o().registerRoute(i),i}const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=e=>[h.prefix,e,h.suffix].filter((e=>e&&e.length>0)).join("-"),u=e=>e||l(h.precache),d=e=>e||l(h.runtime);function f(e,t){const s=t();return e.waitUntil(s),s}function p(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:n}=t;if(!n)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(n,location.href),r=new URL(n,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:r.href}}s(977);class g{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class w{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let m;function y(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class _{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const b=new Set;function v(e){return new Promise((t=>setTimeout(t,e)))}function R(e){return"string"==typeof e?new Request(e):e}s(873);class x{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new _,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:s}=this;let n=R(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=R(e);let s;const{cacheName:n,matchOptions:a}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:n});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:a,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,s){const n=R(t);await v(0);const a=await this.getCacheKey(n,"write");if(!s)throw new e("cache-put-with-no-response",{url:(r=a.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const i=await this._ensureResponseSafeToCache(s);if(!i)return!1;const{cacheName:o,matchOptions:c}=this._strategy,h=await self.caches.open(o),l=this.hasCallback("cacheDidUpdate"),u=l?await async function(e,t,s,n){const a=y(t.url,s);if(t.url===a)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await e.keys(t,r);for(const t of i)if(a===y(t.url,s))return e.match(t,n)}(h,a.clone(),["__WB_REVISION__"],c):null;try{await h.put(a,l?i.clone():i)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of b)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:u,newResponse:i.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=R(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),n=n=>{const a=Object.assign(Object.assign({},n),{state:s});return t[e](a)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class C{constructor(e={}){this.cacheName=d(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,a=new x(this,{event:t,request:s,params:n}),r=this._getResponse(a,s,t);return[r,this._awaitComplete(r,a,s,t)]}async _getResponse(t,s,n){let a;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(a=await this._handle(s,t),!a||"error"===a.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(a=await r({error:e,event:n,request:s}),a)break;if(!a)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))a=await e({event:n,request:s,response:a});return a}async _awaitComplete(e,t,s,n){let a,r;try{a=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:a,error:r}),t.destroy(),r)throw r}}class E extends C{constructor(e={}){e.cacheName=u(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(E.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let n;const a=s.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=a.integrity,r=t.integrity,i=!r||r===e;n=await s.fetch(new Request(t,{integrity:"no-cors"!==t.mode?r||e:void 0})),e&&i&&"no-cors"!==t.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await s.cachePut(t,n.clone()))}return n}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const n=await s.fetch(t);if(!await s.cachePut(t,n.clone()))throw new e("bad-precaching-response",{url:t.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==E.copyRedirectedCacheableResponsesPlugin&&(n===E.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(E.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}E.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:e}){return!e||e.status>=400?null:e}},E.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:t}){return t.redirected?await async function(t,s){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new e("cross-origin-copy-response",{origin:n});const a=t.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(r):r,o=function(){if(void 0===m){const e=new Response("");if("body"in e)try{new Response(e.body),m=!0}catch(e){m=!1}m=!1}return m}()?a.body:await a.blob();return new Response(o,i)}(t):t}};class L{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new E({cacheName:u(e),plugins:[...t,new w({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const n of t){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:t,url:a}=p(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(a,t),this._urlsToCacheModes.set(a,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return f(e,(async()=>{const t=new g;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:n,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return f(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),n=[];for(const a of t)s.has(a.url)||(await e.delete(a),n.push(a.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}let k;const q=()=>(k||(k=new L),k);class U extends n{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(a);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}const D={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class N extends C{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(D)}async _handle(t,s){const n=s.fetchAndCachePut(t).catch((()=>{}));s.waitUntil(n);let a,r=await s.cacheMatch(t);if(r);else try{r=await n}catch(e){e instanceof Error&&(a=e)}if(!r)throw new e("no-response",{url:t.url,error:a});return r}}s(895);class T{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class I{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new T(e)}}function K(e){e.then((()=>{}))}let S,M;const P=new WeakMap,O=new WeakMap,A=new WeakMap,W=new WeakMap,B=new WeakMap;let j={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return O.get(e);if("objectStoreNames"===t)return e.objectStoreNames||A.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return F(e[t])},set(e,t,s){return e[t]=s,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function H(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(M||(M=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(V(this),e),F(P.get(this))}:function(...e){return F(t.apply(V(this),e))}:function(e,...s){const n=t.call(V(this),e,...s);return A.set(n,e.sort?e.sort():[e]),F(n)}:(e instanceof IDBTransaction&&function(e){if(O.has(e))return;const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));O.set(e,t)}(e),s=e,(S||(S=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>s instanceof e))?new Proxy(e,j):e);var t,s}function F(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(F(e.result)),n()},r=()=>{s(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&P.set(t,e)})).catch((()=>{})),B.set(t,e),t}(e);if(W.has(e))return W.get(e);const t=H(e);return t!==e&&(W.set(e,t),B.set(t,e)),t}const V=e=>B.get(e),$=["get","getKey","getAll","getAllKeys","count"],G=["put","add","delete","clear"],Q=new Map;function J(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Q.get(t))return Q.get(t);const s=t.replace(/FromIndex$/,""),n=t!==s,a=G.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!$.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,a?"readwrite":"readonly");let i=r.store;return n&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),a&&r.done]))[0]};return Q.set(t,r),r}var z;z=j,j={...z,get:(e,t,s)=>J(e,t)||z.get(e,t,s),has:(e,t)=>!!J(e,t)||z.has(e,t)},s(550);const X="cache-entries",Y=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class Z{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(X,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e))),F(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=Y(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},n=(await this.getDb()).transaction(X,"readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(X,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let n=await s.transaction(X).store.index("timestamp").openCursor(null,"prev");const a=[];let r=0;for(;n;){const s=n.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?a.push(n.value):r++),n=await n.continue()}const i=[];for(const e of a)await s.delete(X,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+Y(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(e,t),o=F(i);return n&&i.addEventListener("upgradeneeded",(e=>{n(F(i.result),e.oldVersion,e.newVersion,F(i.transaction),e)})),s&&i.addEventListener("blocked",(e=>s(e.oldVersion,e.newVersion,e))),o.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(e=>a(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class ee{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new Z(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,K(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class te{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const a=this._isResponseDateFresh(n),r=this._getCacheExpiration(s);K(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return a?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),b.add(t))}_getCacheExpiration(t){if(t===d())throw new e("expire-custom-caches-only");let s=this._cacheExpirations.get(t);return s||(s=new ee(t,this._config),this._cacheExpirations.set(t,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}const se=[{'revision':'9ed2000e9c8a2695d9e3a7c810da05cb','url':'/static/assets/android-chrome-144x144.png'},{'revision':'5edf2b568c22be48b725f06317e25635','url':'/static/assets/android-chrome-192x192.png'},{'revision':'fac47d8bacbba8a73f427a45ef4c840d','url':'/static/assets/android-chrome-256x256.png'},{'revision':'3a73c405befd67a6935beb6e042bdceb','url':'/static/assets/android-chrome-36x36.png'},{'revision':'22f2c0e64f3927d0c048e38f6cd86555','url':'/static/assets/android-chrome-384x384.png'},{'revision':'dedbab28633143069f13251552c91aa6','url':'/static/assets/android-chrome-48x48.png'},{'revision':'982d77107f4fe27151c27e0f5d8c8983','url':'/static/assets/android-chrome-512x512.png'},{'revision':'4d804add28bcc2f626129fe8c0859114','url':'/static/assets/android-chrome-72x72.png'},{'revision':'d7d520b486e2faf1d6de1644d234c64a','url':'/static/assets/android-chrome-96x96.png'},{'revision':'acc1544cbe1b89e456b49b075bbac502','url':'/static/assets/apple-touch-icon-1024x1024.png'},{'revision':'48a1323867f52b79f38fc162050a32b6','url':'/static/assets/apple-touch-icon-114x114.png'},{'revision':'837dfd71e9c47528d6135a1196e5a822','url':'/static/assets/apple-touch-icon-120x120.png'},{'revision':'db72c20e12fc097f724eaf35ed2a4931','url':'/static/assets/apple-touch-icon-144x144.png'},{'revision':'d0d28c488b7735d418d9f21b58b03d24','url':'/static/assets/apple-touch-icon-152x152.png'},{'revision':'7354b1566d35b57fb9466c132b14afab','url':'/static/assets/apple-touch-icon-167x167.png'},{'revision':'0074ebb272cb9dec05eb3c9e62039aa7','url':'/static/assets/apple-touch-icon-180x180.png'},{'revision':'b83272c81b133617d7f4f195b8a60774','url':'/static/assets/apple-touch-icon-57x57.png'},{'revision':'22eb6867c23d53b403eae36c58a64cff','url':'/static/assets/apple-touch-icon-60x60.png'},{'revision':'bae6d5aca41cef05cc6688e80ec50a29','url':'/static/assets/apple-touch-icon-72x72.png'},{'revision':'2039038038c0c15856869d8fb7ecce7b','url':'/static/assets/apple-touch-icon-76x76.png'},{'revision':'0074ebb272cb9dec05eb3c9e62039aa7','url':'/static/assets/apple-touch-icon-precomposed.png'},{'revision':'0074ebb272cb9dec05eb3c9e62039aa7','url':'/static/assets/apple-touch-icon.png'},{'revision':'6b9febff1eb49f1662476afc3e8c6d77','url':'/static/assets/browserconfig.xml'},{'revision':'47860539ec72417a341fa209a4cad61a','url':'/static/assets/favicon-16x16.png'},{'revision':'a4738531ca485d03f71d407a796c92d7','url':'/static/assets/favicon-32x32.png'},{'revision':'dedbab28633143069f13251552c91aa6','url':'/static/assets/favicon-48x48.png'},{'revision':'285fa590389f7eccf638e8aa1d89fbf7','url':'/static/assets/favicon.ico'},{'revision':'dd3c6a04ad2354b8cd22fc65624628cd','url':'/static/assets/firefox_app_128x128.png'},{'revision':'0a1a6b929cf9a63504653ed25183bb26','url':'/static/assets/firefox_app_512x512.png'},{'revision':'017596cb0f58cbdd2e625423995b3601','url':'/static/assets/firefox_app_60x60.png'},{'revision':'6a743f0913ea7c571f9f4ff430823fde','url':'/static/assets/manifest.json'},{'revision':'e9b790981b731c76680d70d92322889b','url':'/static/assets/manifest.webapp'},{'revision':'9ed2000e9c8a2695d9e3a7c810da05cb','url':'/static/assets/mstile-144x144.png'},{'revision':'d251f802090603b5b577e5573edeac48','url':'/static/assets/mstile-150x150.png'},{'revision':'5ad197940dd2e508f8d9c385e2facd4c','url':'/static/assets/mstile-310x150.png'},{'revision':'561406dd485a394a5d7afa6edc2f0687','url':'/static/assets/mstile-310x310.png'},{'revision':'0feb1dacb314271cc575ff1cf1b31912','url':'/static/assets/mstile-70x70.png'},{'revision':'7da0655ef2f4afca9bfb513e9adf283d','url':'/static/assets/yandex-browser-50x50.png'},{'revision':'497dada7c547230d3b4adc61230b9dae','url':'/static/assets/yandex-browser-manifest.json'},{'revision':null,'url':'/static/css/13.1e3be9d05835c4664ad7.css'},{'revision':null,'url':'/static/css/app.9059897587a84da3f2f7.css'},{'revision':'6d591c5c4dd693c3f84f819c5906c457','url':'/static/index.html'},{'revision':null,'url':'/static/js/13.ec0fe475.js'},{'revision':'3b2a443ed7458634e1dc0b5294009d7e','url':'/static/js/13.ec0fe475.js.LICENSE.txt'},{'revision':null,'url':'/static/js/app.750117c4.js'},{'revision':null,'url':'/static/js/app2.33d3986e.js'},{'revision':null,'url':'/static/js/runtime.8a8dc1e8.js'},{'revision':'d41d8cd98f00b204e9800998ecf8427e','url':'/static/vendors/.gitkeep'},{'revision':'d41d8cd98f00b204e9800998ecf8427e','url':'/static/vendors/images/.gitkeep'},{'revision':'a2d075fde0406330b631dae3590695e1','url':'/static/vendors/images/403.svg'},{'revision':'3313ae675ddf2c8bbdb4231d5bddb7da','url':'/static/vendors/images/404.svg'},{'revision':'047303c5336726beeaeabff60399cd57','url':'/static/vendors/images/500.svg'},{'revision':'4e505cd1fefa5a3170dffaba0b28a363','url':'/static/vendors/images/avatar.png'},{'revision':'9585362f586dec0a687fb15b5025d17d','url':'/static/vendors/images/bg.jpg'},{'revision':'a874f34cca623ddc02417c5efe539fef','url':'/static/vendors/images/favicon/favicon.png'},{'revision':'c2b62e5e65ed3e5b15fe8b3f70a684ad','url':'/static/vendors/images/favicon/fv.png'},{'revision':'96f016307b54d30d9e1ab84b95be5767','url':'/static/vendors/images/home/hero1.jpg'},{'revision':'3482286b77268b17d3b028159a1f908a','url':'/static/vendors/images/home/hero2.jpg'},{'revision':'bb9606322993b7e499d9a7da7c712923','url':'/static/vendors/images/icons/briefcase.png'},{'revision':'3d35f6e135b8b18d16581da4edc21fa2','url':'/static/vendors/images/icons/cc.png'},{'revision':'37a1732e556c45513a1a4e419a5cdc9f','url':'/static/vendors/images/icons/check-mark.png'},{'revision':'c50aae8efc2bef290ca4b7a651a619ce','url':'/static/vendors/images/icons/completed.png'},{'revision':'fffc3f24214aebb6aa5f3e1682ab009d','url':'/static/vendors/images/icons/fiverr.png'},{'revision':'bbe3a3e5c45e1c97d3653cdabcce8367','url':'/static/vendors/images/icons/google.jpg'},{'revision':'e9612850a6cb55eb547266043e1eef86','url':'/static/vendors/images/icons/google.png'},{'revision':'31b88db3673cdb45cb45a956ba95dd8c','url':'/static/vendors/images/icons/shopify.png'},{'revision':'4a387bda853bca3782d73234c786a150','url':'/static/vendors/images/icons/shopping-cart.png'},{'revision':'5a0ea90fbaf53871672ad006ed99a7d0','url':'/static/vendors/images/icons/trustpay.png'},{'revision':'d1d6dea5c49801220474d50bfc60dff4','url':'/static/vendors/images/icons/vendfy.png'},{'revision':'c2b62e5e65ed3e5b15fe8b3f70a684ad','url':'/static/vendors/images/logo.png'},{'revision':'4bda6edd6ea77edae60546c804d2efa6','url':'/static/vendors/images/patterns/Savings-bro.svg'},{'revision':'bf4f68bb895d0598bad4abfb886ec105','url':'/static/vendors/images/patterns/contracts.svg'},{'revision':'f2daebed0dd261c4c429a9e890333a4d','url':'/static/vendors/images/patterns/earning.svg'},{'revision':'3d533a7b1d06644f11f1def9a7b4eed1','url':'/static/vendors/images/patterns/floating-cogs.zip'},{'revision':'5ae9ddf0b2dcd880ecf1058e19afd6f3','url':'/static/vendors/images/patterns/usdt.svg'},{'revision':'aa15b2d0633b28aff54043bf8feacdd5','url':'/static/vendors/images/persons/person1.jpg'},{'revision':'e6c7a0813ea241f5307fc27eefda7f85','url':'/static/vendors/images/persons/person2.jpg'},{'revision':'5bdfdf2921bc1c85e9238ee3780bc4e7','url':'/static/vendors/images/persons/person3.jpg'},{'revision':'8b0963bd080443553a286161ec9145a2','url':'/static/vendors/images/persons/person4.jpg'},{'revision':'57c100abd742595533e82ce65529ec2a','url':'/static/vendors/images/products/pexels-elena-rubtsova-14769376.jpg'}];var ne;se&&(console.log("precaching: ",se),ne=se,q().precache(ne),function(e){const t=q();c(new U(t,undefined))}());const ae="/offline/",re="/static/assets/favicon-48x48.png";var ie;c((e=>{let{url:t}=e;return"https://fonts.googleapis.com"===t.origin||"https://fonts.gstatic.com"===t.origin}),new N({cacheName:"google-fonts",plugins:[new I({statuses:[0,200]}),new te({maxEntries:20})]})),c((e=>{let{url:t}=e;return"https://unpkg.com"===t.origin}),new N({cacheName:"unpkg",plugins:[new I({statuses:[0,200]}),new te({maxEntries:20})]})),c((e=>{let{url:t}=e;return"https://cdnjs.cloudflare.com"===t.origin}),new N({cacheName:"cdnjs",plugins:[new I({statuses:[0,200]}),new te({maxEntries:20})]})),c((e=>{let{url:t}=e;return"https://map.googleapis.com"===t.origin}),new N({cacheName:"google-map",plugins:[new I({statuses:[0,200]}),new te({maxEntries:20})]})),c((e=>{let{url:t}=e;return"https://api.tiles.mapbox.com"===t.origin}),new N({cacheName:"mapbox-map",plugins:[new I({statuses:[0,200]}),new te({maxEntries:20})]})),c((e=>{let{request:t}=e;return"image"===t.destination}),new N({cacheName:"image-cache",plugins:[new I({statuses:[0,200]}),new te({maxEntries:100,maxAgeSeconds:2592e3})]})),c((e=>{let{request:t}=e;return"audio"===t.destination}),new N({cacheName:"audio-cache",plugins:[new I({statuses:[0,200]}),new te({maxEntries:60,maxAgeSeconds:2592e3})]})),self.addEventListener("install",(e=>{e.waitUntil(caches.open("offline-html").then((e=>e.add(new Request(ae,{cache:"reload"}))))),self.skipWaiting()})),self.addEventListener("activate",(e=>{console.log("👷","activate",e),self.clients.claim()})),ie=new class extends C{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(t,s){let n,a;try{const e=[s.fetch(t)];if(this._networkTimeoutSeconds){const t=v(1e3*this._networkTimeoutSeconds);e.push(t)}if(a=await Promise.race(e),!a)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(n=e)}if(!a)throw new e("no-response",{url:t.url,error:n});return a}},o().setDefaultHandler(ie),o().setCatchHandler((e=>{let{event:t}=e;return"document"===t.request.destination?caches.match(ae):Response.error()})),self.addEventListener("push",(function(e){let t,s="Push Notification";try{const n=e.data.json();s=n.head.toUpperCase(),t=void 0!==n.url?{body:n.body,icon:re,data:{url:n.url?n.url:window.location.origin},actions:[{action:"open_url",title:"Open Link"}],vibrate:[200,100,200,100,200,100,200]}:{body:n.body,icon:re,vibrate:[200,100,200,100,200,100,200]}}catch(s){t={icon:re,body:e.data.text()}}e.waitUntil(self.registration.showNotification(s,t))})),self.addEventListener("notificationclick",(function(e){null!==e.notification.data&&e.waitUntil(e.preventDefault(),e.notification.close(),self.clients.openWindow(e.notification.data.url))}))}()}();
//# sourceMappingURL=sw.js.map