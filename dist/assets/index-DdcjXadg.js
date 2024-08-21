function sS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function x0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b0={exports:{}},hc={},D0={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),oS=Symbol.for("react.portal"),aS=Symbol.for("react.fragment"),lS=Symbol.for("react.strict_mode"),uS=Symbol.for("react.profiler"),cS=Symbol.for("react.provider"),hS=Symbol.for("react.context"),dS=Symbol.for("react.forward_ref"),fS=Symbol.for("react.suspense"),pS=Symbol.for("react.memo"),mS=Symbol.for("react.lazy"),yy=Symbol.iterator;function gS(t){return t===null||typeof t!="object"?null:(t=yy&&t[yy]||t["@@iterator"],typeof t=="function"?t:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L0=Object.assign,V0={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||O0}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M0(){}M0.prototype=Ws.prototype;function fp(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||O0}var pp=fp.prototype=new M0;pp.constructor=fp;L0(pp,Ws.prototype);pp.isPureReactComponent=!0;var vy=Array.isArray,F0=Object.prototype.hasOwnProperty,mp={current:null},U0={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F0.call(e,r)&&!U0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Oa,type:t,key:s,ref:o,props:i,_owner:mp.current}}function yS(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function vS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _y=/\/+/g;function xh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vS(""+t.key):e.toString(36)}function Gl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case oS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xh(o,0):r,vy(i)?(n="",t!=null&&(n=t.replace(_y,"$&/")+"/"),Gl(i,e,n,"",function(c){return c})):i!=null&&(gp(i)&&(i=yS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_y,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+xh(s,l);o+=Gl(s,e,n,u,i)}else if(u=gS(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+xh(s,l++),o+=Gl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function El(t,e,n){if(t==null)return t;var r=[],i=0;return Gl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _S(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},Kl={transition:null},ES={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:Kl,ReactCurrentOwner:mp};function B0(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:El,forEach:function(t,e,n){El(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return El(t,function(){e++}),e},toArray:function(t){return El(t,function(e){return e})||[]},only:function(t){if(!gp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ws;ne.Fragment=aS;ne.Profiler=uS;ne.PureComponent=fp;ne.StrictMode=lS;ne.Suspense=fS;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ES;ne.act=B0;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=L0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)F0.call(e,u)&&!U0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Oa,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:hS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cS,_context:t},t.Consumer=t};ne.createElement=j0;ne.createFactory=function(t){var e=j0.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:dS,render:t}};ne.isValidElement=gp;ne.lazy=function(t){return{$$typeof:mS,_payload:{_status:-1,_result:t},_init:_S}};ne.memo=function(t,e){return{$$typeof:pS,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Kl.transition;Kl.transition={};try{t()}finally{Kl.transition=e}};ne.unstable_act=B0;ne.useCallback=function(t,e){return Rt.current.useCallback(t,e)};ne.useContext=function(t){return Rt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Rt.current.useEffect(t,e)};ne.useId=function(){return Rt.current.useId()};ne.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Rt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};ne.useRef=function(t){return Rt.current.useRef(t)};ne.useState=function(t){return Rt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Rt.current.useTransition()};ne.version="18.3.1";D0.exports=ne;var V=D0.exports;const de=x0(V),wS=sS({__proto__:null,default:de},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TS=V,IS=Symbol.for("react.element"),AS=Symbol.for("react.fragment"),SS=Object.prototype.hasOwnProperty,RS=TS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CS={key:!0,ref:!0,__self:!0,__source:!0};function z0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)SS.call(e,r)&&!CS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:IS,type:t,key:s,ref:o,props:i,_owner:RS.current}}hc.Fragment=AS;hc.jsx=z0;hc.jsxs=z0;b0.exports=hc;var O=b0.exports,W0={exports:{}},Ht={},q0={exports:{}},H0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var Q=z.length;z.push(K);e:for(;0<Q;){var ce=Q-1>>>1,ee=z[ce];if(0<i(ee,K))z[ce]=K,z[Q]=ee,Q=ce;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Q=z.pop();if(Q!==K){z[0]=Q;e:for(var ce=0,ee=z.length,oe=ee>>>1;ce<oe;){var Oe=2*(ce+1)-1,Ve=z[Oe],Xe=Oe+1,_t=z[Xe];if(0>i(Ve,Q))Xe<ee&&0>i(_t,Ve)?(z[ce]=_t,z[Xe]=Q,ce=Xe):(z[ce]=Ve,z[Oe]=Q,ce=Oe);else if(Xe<ee&&0>i(_t,Q))z[ce]=_t,z[Xe]=Q,ce=Xe;else break e}}return K}function i(z,K){var Q=z.sortIndex-K.sortIndex;return Q!==0?Q:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,I=!1,S=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=z)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function N(z){if(k=!1,E(z),!S)if(n(u)!==null)S=!0,Kt(L);else{var K=n(c);K!==null&&Be(N,K.startTime-z)}}function L(z,K){S=!1,k&&(k=!1,v(g),g=-1),I=!0;var Q=m;try{for(E(K),p=n(u);p!==null&&(!(p.expirationTime>K)||z&&!P());){var ce=p.callback;if(typeof ce=="function"){p.callback=null,m=p.priorityLevel;var ee=ce(p.expirationTime<=K);K=t.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(u)&&r(u),E(K)}else r(u);p=n(u)}if(p!==null)var oe=!0;else{var Oe=n(c);Oe!==null&&Be(N,Oe.startTime-K),oe=!1}return oe}finally{p=null,m=Q,I=!1}}var M=!1,T=null,g=-1,w=5,A=-1;function P(){return!(t.unstable_now()-A<w)}function x(){if(T!==null){var z=t.unstable_now();A=z;var K=!0;try{K=T(!0,z)}finally{K?R():(M=!1,T=null)}}else M=!1}var R;if(typeof y=="function")R=function(){y(x)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Ye=pe.port2;pe.port1.onmessage=x,R=function(){Ye.postMessage(null)}}else R=function(){C(x,0)};function Kt(z){T=z,M||(M=!0,R())}function Be(z,K){g=C(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||I||(S=!0,Kt(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var Q=m;m=K;try{return z()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=m;m=z;try{return K()}finally{m=Q}},t.unstable_scheduleCallback=function(z,K,Q){var ce=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ce+Q:ce):Q=ce,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Q+ee,z={id:d++,callback:K,priorityLevel:z,startTime:Q,expirationTime:ee,sortIndex:-1},Q>ce?(z.sortIndex=Q,e(c,z),n(u)===null&&z===n(c)&&(k?(v(g),g=-1):k=!0,Be(N,Q-ce))):(z.sortIndex=ee,e(u,z),S||I||(S=!0,Kt(L))),z},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(z){var K=m;return function(){var Q=m;m=K;try{return z.apply(this,arguments)}finally{m=Q}}}})(H0);q0.exports=H0;var kS=q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PS=V,qt=kS;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $0=new Set,ta={};function Oi(t,e){Rs(t,e),Rs(t+"Capture",e)}function Rs(t,e){for(ta[t]=e,t=0;t<e.length;t++)$0.add(e[t])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rd=Object.prototype.hasOwnProperty,NS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ey={},wy={};function xS(t){return Rd.call(wy,t)?!0:Rd.call(Ey,t)?!1:NS.test(t)?wy[t]=!0:(Ey[t]=!0,!1)}function bS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DS(t,e,n,r){if(e===null||typeof e>"u"||bS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var yp=/[\-:]([a-z])/g;function vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yp,vp);st[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yp,vp);st[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yp,vp);st[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function _p(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DS(e,n,i,r)&&(n=null),r||i===null?xS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=PS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wl=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),Ep=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),K0=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),Pd=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),Q0=Symbol.for("react.offscreen"),Ty=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=Ty&&t[Ty]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,bh;function So(t){if(bh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bh=e&&e[1]||""}return`
`+bh+t}var Dh=!1;function Oh(t,e){if(!t||Dh)return"";Dh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Dh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?So(t):""}function OS(t){switch(t.tag){case 5:return So(t.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return t=Oh(t.type,!1),t;case 11:return t=Oh(t.type.render,!1),t;case 1:return t=Oh(t.type,!0),t;default:return""}}function Nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Cd:return"Profiler";case Ep:return"StrictMode";case kd:return"Suspense";case Pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K0:return(t.displayName||"Context")+".Consumer";case G0:return(t._context.displayName||"Context")+".Provider";case wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tp:return e=t.displayName||null,e!==null?e:Nd(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Nd(t(e))}catch{}}return null}function LS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nd(e);case 8:return e===Ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VS(t){var e=Y0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tl(t){t._valueTracker||(t._valueTracker=VS(t))}function X0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xd(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Iy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J0(t,e){e=e.checked,e!=null&&_p(t,"checked",e,!1)}function bd(t,e){J0(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dd(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ay(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dd(t,e,n){(e!=="number"||vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function ms(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Od(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ro(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function Z0(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ry(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ld(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Il,tE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Il=Il||document.createElement("div"),Il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MS=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){MS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function nE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function rE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FS=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vd(t,e){if(e){if(FS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Md(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=null;function Ip(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ud=null,gs=null,ys=null;function Cy(t){if(t=Ma(t)){if(typeof Ud!="function")throw Error(j(280));var e=t.stateNode;e&&(e=gc(e),Ud(t.stateNode,t.type,e))}}function iE(t){gs?ys?ys.push(t):ys=[t]:gs=t}function sE(){if(gs){var t=gs,e=ys;if(ys=gs=null,Cy(t),e)for(t=0;t<e.length;t++)Cy(e[t])}}function oE(t,e){return t(e)}function aE(){}var Lh=!1;function lE(t,e,n){if(Lh)return t(e,n);Lh=!0;try{return oE(t,e,n)}finally{Lh=!1,(gs!==null||ys!==null)&&(aE(),sE())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var r=gc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var jd=!1;if(Gn)try{var go={};Object.defineProperty(go,"passive",{get:function(){jd=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{jd=!1}function US(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Fo=!1,_u=null,Eu=!1,Bd=null,jS={onError:function(t){Fo=!0,_u=t}};function BS(t,e,n,r,i,s,o,l,u){Fo=!1,_u=null,US.apply(jS,arguments)}function zS(t,e,n,r,i,s,o,l,u){if(BS.apply(this,arguments),Fo){if(Fo){var c=_u;Fo=!1,_u=null}else throw Error(j(198));Eu||(Eu=!0,Bd=c)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ky(t){if(Li(t)!==t)throw Error(j(188))}function WS(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ky(i),t;if(s===r)return ky(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function cE(t){return t=WS(t),t!==null?hE(t):null}function hE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hE(t);if(e!==null)return e;t=t.sibling}return null}var dE=qt.unstable_scheduleCallback,Py=qt.unstable_cancelCallback,qS=qt.unstable_shouldYield,HS=qt.unstable_requestPaint,Le=qt.unstable_now,$S=qt.unstable_getCurrentPriorityLevel,Ap=qt.unstable_ImmediatePriority,fE=qt.unstable_UserBlockingPriority,wu=qt.unstable_NormalPriority,GS=qt.unstable_LowPriority,pE=qt.unstable_IdlePriority,dc=null,In=null;function KS(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(dc,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:XS,QS=Math.log,YS=Math.LN2;function XS(t){return t>>>=0,t===0?32:31-(QS(t)/YS|0)|0}var Al=64,Sl=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Co(l):(s&=o,s!==0&&(r=Co(s)))}else o=n&~i,o!==0?r=Co(o):s!==0&&(r=Co(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),i=1<<n,r|=t[n],e&=~i;return r}function JS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ln(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=JS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mE(){var t=Al;return Al<<=1,!(Al&4194240)&&(Al=64),t}function Vh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function La(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function eR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function gE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yE,Rp,vE,_E,EE,Wd=!1,Rl=[],Sr=null,Rr=null,Cr=null,ia=new Map,sa=new Map,dr=[],tR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ny(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ma(e),e!==null&&Rp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nR(t,e,n,r,i){switch(e){case"focusin":return Sr=yo(Sr,t,e,n,r,i),!0;case"dragenter":return Rr=yo(Rr,t,e,n,r,i),!0;case"mouseover":return Cr=yo(Cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ia.set(s,yo(ia.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,sa.set(s,yo(sa.get(s)||null,t,e,n,r,i)),!0}return!1}function wE(t){var e=si(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=uE(n),e!==null){t.blockedOn=e,EE(t.priority,function(){vE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fd=r,n.target.dispatchEvent(r),Fd=null}else return e=Ma(n),e!==null&&Rp(e),t.blockedOn=n,!1;e.shift()}return!0}function xy(t,e,n){Ql(t)&&n.delete(e)}function rR(){Wd=!1,Sr!==null&&Ql(Sr)&&(Sr=null),Rr!==null&&Ql(Rr)&&(Rr=null),Cr!==null&&Ql(Cr)&&(Cr=null),ia.forEach(xy),sa.forEach(xy)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,Wd||(Wd=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,rR)))}function oa(t){function e(i){return vo(i,t)}if(0<Rl.length){vo(Rl[0],t);for(var n=1;n<Rl.length;n++){var r=Rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sr!==null&&vo(Sr,t),Rr!==null&&vo(Rr,t),Cr!==null&&vo(Cr,t),ia.forEach(e),sa.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)wE(n),n.blockedOn===null&&dr.shift()}var vs=nr.ReactCurrentBatchConfig,Iu=!0;function iR(t,e,n,r){var i=fe,s=vs.transition;vs.transition=null;try{fe=1,Cp(t,e,n,r)}finally{fe=i,vs.transition=s}}function sR(t,e,n,r){var i=fe,s=vs.transition;vs.transition=null;try{fe=4,Cp(t,e,n,r)}finally{fe=i,vs.transition=s}}function Cp(t,e,n,r){if(Iu){var i=qd(t,e,n,r);if(i===null)$h(t,e,r,Au,n),Ny(t,r);else if(nR(i,t,e,n,r))r.stopPropagation();else if(Ny(t,r),e&4&&-1<tR.indexOf(t)){for(;i!==null;){var s=Ma(i);if(s!==null&&yE(s),s=qd(t,e,n,r),s===null&&$h(t,e,r,Au,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $h(t,e,r,null,n)}}var Au=null;function qd(t,e,n,r){if(Au=null,t=Ip(r),t=si(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Au=t,null}function TE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($S()){case Ap:return 1;case fE:return 4;case wu:case GS:return 16;case pE:return 536870912;default:return 16}default:return 16}}var _r=null,kp=null,Yl=null;function IE(){if(Yl)return Yl;var t,e=kp,n=e.length,r,i="value"in _r?_r.value:_r.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yl=i.slice(t,1<r?1-r:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cl(){return!0}function by(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cl:by,this.isPropagationStopped=by,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pp=$t(qs),Va=ke({},qs,{view:0,detail:0}),oR=$t(Va),Mh,Fh,_o,fc=ke({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(Mh=t.screenX-_o.screenX,Fh=t.screenY-_o.screenY):Fh=Mh=0,_o=t),Mh)},movementY:function(t){return"movementY"in t?t.movementY:Fh}}),Dy=$t(fc),aR=ke({},fc,{dataTransfer:0}),lR=$t(aR),uR=ke({},Va,{relatedTarget:0}),Uh=$t(uR),cR=ke({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),hR=$t(cR),dR=ke({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fR=$t(dR),pR=ke({},qs,{data:0}),Oy=$t(pR),mR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yR[t])?!!e[t]:!1}function Np(){return vR}var _R=ke({},Va,{key:function(t){if(t.key){var e=mR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Np,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ER=$t(_R),wR=ke({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ly=$t(wR),TR=ke({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Np}),IR=$t(TR),AR=ke({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),SR=$t(AR),RR=ke({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CR=$t(RR),kR=[9,13,27,32],xp=Gn&&"CompositionEvent"in window,Uo=null;Gn&&"documentMode"in document&&(Uo=document.documentMode);var PR=Gn&&"TextEvent"in window&&!Uo,AE=Gn&&(!xp||Uo&&8<Uo&&11>=Uo),Vy=" ",My=!1;function SE(t,e){switch(t){case"keyup":return kR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function RE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function NR(t,e){switch(t){case"compositionend":return RE(e);case"keypress":return e.which!==32?null:(My=!0,Vy);case"textInput":return t=e.data,t===Vy&&My?null:t;default:return null}}function xR(t,e){if(ns)return t==="compositionend"||!xp&&SE(t,e)?(t=IE(),Yl=kp=_r=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return AE&&e.locale!=="ko"?null:e.data;default:return null}}var bR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bR[t.type]:e==="textarea"}function CE(t,e,n,r){iE(r),e=Su(e,"onChange"),0<e.length&&(n=new Pp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,aa=null;function DR(t){FE(t,0)}function pc(t){var e=ss(t);if(X0(e))return t}function OR(t,e){if(t==="change")return e}var kE=!1;if(Gn){var jh;if(Gn){var Bh="oninput"in document;if(!Bh){var Uy=document.createElement("div");Uy.setAttribute("oninput","return;"),Bh=typeof Uy.oninput=="function"}jh=Bh}else jh=!1;kE=jh&&(!document.documentMode||9<document.documentMode)}function jy(){jo&&(jo.detachEvent("onpropertychange",PE),aa=jo=null)}function PE(t){if(t.propertyName==="value"&&pc(aa)){var e=[];CE(e,aa,t,Ip(t)),lE(DR,e)}}function LR(t,e,n){t==="focusin"?(jy(),jo=e,aa=n,jo.attachEvent("onpropertychange",PE)):t==="focusout"&&jy()}function VR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(aa)}function MR(t,e){if(t==="click")return pc(e)}function FR(t,e){if(t==="input"||t==="change")return pc(e)}function UR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:UR;function la(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rd.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function By(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zy(t,e){var n=By(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=By(n)}}function NE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?NE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xE(){for(var t=window,e=vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vu(t.document)}return e}function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jR(t){var e=xE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&NE(n.ownerDocument.documentElement,n)){if(r!==null&&bp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zy(n,s);var o=zy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BR=Gn&&"documentMode"in document&&11>=document.documentMode,rs=null,Hd=null,Bo=null,$d=!1;function Wy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$d||rs==null||rs!==vu(r)||(r=rs,"selectionStart"in r&&bp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&la(Bo,r)||(Bo=r,r=Su(Hd,"onSelect"),0<r.length&&(e=new Pp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rs)))}function kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},zh={},bE={};Gn&&(bE=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function mc(t){if(zh[t])return zh[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bE)return zh[t]=e[n];return t}var DE=mc("animationend"),OE=mc("animationiteration"),LE=mc("animationstart"),VE=mc("transitionend"),ME=new Map,qy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(t,e){ME.set(t,e),Oi(e,[t])}for(var Wh=0;Wh<qy.length;Wh++){var qh=qy[Wh],zR=qh.toLowerCase(),WR=qh[0].toUpperCase()+qh.slice(1);Hr(zR,"on"+WR)}Hr(DE,"onAnimationEnd");Hr(OE,"onAnimationIteration");Hr(LE,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(VE,"onTransitionEnd");Rs("onMouseEnter",["mouseout","mouseover"]);Rs("onMouseLeave",["mouseout","mouseover"]);Rs("onPointerEnter",["pointerout","pointerover"]);Rs("onPointerLeave",["pointerout","pointerover"]);Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qR=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Hy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zS(r,e,void 0,t),t.currentTarget=null}function FE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Hy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Hy(i,l,c),s=u}}}if(Eu)throw t=Bd,Eu=!1,Bd=null,t}function _e(t,e){var n=e[Xd];n===void 0&&(n=e[Xd]=new Set);var r=t+"__bubble";n.has(r)||(UE(e,t,2,!1),n.add(r))}function Hh(t,e,n){var r=0;e&&(r|=4),UE(n,t,r,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function ua(t){if(!t[Pl]){t[Pl]=!0,$0.forEach(function(n){n!=="selectionchange"&&(qR.has(n)||Hh(n,!1,t),Hh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,Hh("selectionchange",!1,e))}}function UE(t,e,n,r){switch(TE(e)){case 1:var i=iR;break;case 4:i=sR;break;default:i=Cp}n=i.bind(null,e,n,t),i=void 0,!jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $h(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=si(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lE(function(){var c=s,d=Ip(n),p=[];e:{var m=ME.get(t);if(m!==void 0){var I=Pp,S=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":I=ER;break;case"focusin":S="focus",I=Uh;break;case"focusout":S="blur",I=Uh;break;case"beforeblur":case"afterblur":I=Uh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Dy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=lR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=IR;break;case DE:case OE:case LE:I=hR;break;case VE:I=SR;break;case"scroll":I=oR;break;case"wheel":I=CR;break;case"copy":case"cut":case"paste":I=fR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ly}var k=(e&4)!==0,C=!k&&t==="scroll",v=k?m!==null?m+"Capture":null:m;k=[];for(var y=c,E;y!==null;){E=y;var N=E.stateNode;if(E.tag===5&&N!==null&&(E=N,v!==null&&(N=ra(y,v),N!=null&&k.push(ca(y,N,E)))),C)break;y=y.return}0<k.length&&(m=new I(m,S,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==Fd&&(S=n.relatedTarget||n.fromElement)&&(si(S)||S[Kn]))break e;if((I||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,I?(S=n.relatedTarget||n.toElement,I=c,S=S?si(S):null,S!==null&&(C=Li(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(I=null,S=c),I!==S)){if(k=Dy,N="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(k=Ly,N="onPointerLeave",v="onPointerEnter",y="pointer"),C=I==null?m:ss(I),E=S==null?m:ss(S),m=new k(N,y+"leave",I,n,d),m.target=C,m.relatedTarget=E,N=null,si(d)===c&&(k=new k(v,y+"enter",S,n,d),k.target=E,k.relatedTarget=C,N=k),C=N,I&&S)t:{for(k=I,v=S,y=0,E=k;E;E=Ki(E))y++;for(E=0,N=v;N;N=Ki(N))E++;for(;0<y-E;)k=Ki(k),y--;for(;0<E-y;)v=Ki(v),E--;for(;y--;){if(k===v||v!==null&&k===v.alternate)break t;k=Ki(k),v=Ki(v)}k=null}else k=null;I!==null&&$y(p,m,I,k,!1),S!==null&&C!==null&&$y(p,C,S,k,!0)}}e:{if(m=c?ss(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var L=OR;else if(Fy(m))if(kE)L=FR;else{L=VR;var M=LR}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=MR);if(L&&(L=L(t,c))){CE(p,L,n,d);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Dd(m,"number",m.value)}switch(M=c?ss(c):window,t){case"focusin":(Fy(M)||M.contentEditable==="true")&&(rs=M,Hd=c,Bo=null);break;case"focusout":Bo=Hd=rs=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,Wy(p,n,d);break;case"selectionchange":if(BR)break;case"keydown":case"keyup":Wy(p,n,d)}var T;if(xp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ns?SE(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(AE&&n.locale!=="ko"&&(ns||g!=="onCompositionStart"?g==="onCompositionEnd"&&ns&&(T=IE()):(_r=d,kp="value"in _r?_r.value:_r.textContent,ns=!0)),M=Su(c,g),0<M.length&&(g=new Oy(g,t,null,n,d),p.push({event:g,listeners:M}),T?g.data=T:(T=RE(n),T!==null&&(g.data=T)))),(T=PR?NR(t,n):xR(t,n))&&(c=Su(c,"onBeforeInput"),0<c.length&&(d=new Oy("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=T))}FE(p,e)})}function ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ra(t,n),s!=null&&r.unshift(ca(t,s,i)),s=ra(t,e),s!=null&&r.push(ca(t,s,i))),t=t.return}return r}function Ki(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $y(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ra(n,s),u!=null&&o.unshift(ca(n,u,l))):i||(u=ra(n,s),u!=null&&o.push(ca(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HR=/\r\n?/g,$R=/\u0000|\uFFFD/g;function Gy(t){return(typeof t=="string"?t:""+t).replace(HR,`
`).replace($R,"")}function Nl(t,e,n){if(e=Gy(e),Gy(t)!==e&&n)throw Error(j(425))}function Ru(){}var Gd=null,Kd=null;function Qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yd=typeof setTimeout=="function"?setTimeout:void 0,GR=typeof clearTimeout=="function"?clearTimeout:void 0,Ky=typeof Promise=="function"?Promise:void 0,KR=typeof queueMicrotask=="function"?queueMicrotask:typeof Ky<"u"?function(t){return Ky.resolve(null).then(t).catch(QR)}:Yd;function QR(t){setTimeout(function(){throw t})}function Gh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),oa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oa(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),gn="__reactFiber$"+Hs,ha="__reactProps$"+Hs,Kn="__reactContainer$"+Hs,Xd="__reactEvents$"+Hs,YR="__reactListeners$"+Hs,XR="__reactHandles$"+Hs;function si(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kn]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qy(t);t!==null;){if(n=t[gn])return n;t=Qy(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[gn]||t[Kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function gc(t){return t[ha]||null}var Jd=[],os=-1;function $r(t){return{current:t}}function we(t){0>os||(t.current=Jd[os],Jd[os]=null,os--)}function ye(t,e){os++,Jd[os]=t.current,t.current=e}var Mr={},vt=$r(Mr),bt=$r(!1),yi=Mr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function Cu(){we(bt),we(vt)}function Yy(t,e,n){if(vt.current!==Mr)throw Error(j(168));ye(vt,e),ye(bt,n)}function jE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,LS(t)||"Unknown",i));return ke({},n,r)}function ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,yi=vt.current,ye(vt,t),ye(bt,bt.current),!0}function Xy(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=jE(t,e,yi),r.__reactInternalMemoizedMergedChildContext=t,we(bt),we(vt),ye(vt,t)):we(bt),ye(bt,n)}var Mn=null,yc=!1,Kh=!1;function BE(t){Mn===null?Mn=[t]:Mn.push(t)}function JR(t){yc=!0,BE(t)}function Gr(){if(!Kh&&Mn!==null){Kh=!0;var t=0,e=fe;try{var n=Mn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mn=null,yc=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(t+1)),dE(Ap,Gr),i}finally{fe=e,Kh=!1}}return null}var as=[],ls=0,Pu=null,Nu=0,Qt=[],Yt=0,vi=null,Fn=1,Un="";function ti(t,e){as[ls++]=Nu,as[ls++]=Pu,Pu=t,Nu=e}function zE(t,e,n){Qt[Yt++]=Fn,Qt[Yt++]=Un,Qt[Yt++]=vi,vi=t;var r=Fn;t=Un;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-ln(e)+i|n<<i|r,Un=s+t}else Fn=1<<s|n<<i|r,Un=t}function Dp(t){t.return!==null&&(ti(t,1),zE(t,1,0))}function Op(t){for(;t===Pu;)Pu=as[--ls],as[ls]=null,Nu=as[--ls],as[ls]=null;for(;t===vi;)vi=Qt[--Yt],Qt[Yt]=null,Un=Qt[--Yt],Qt[Yt]=null,Fn=Qt[--Yt],Qt[Yt]=null}var Bt=null,Mt=null,Ae=!1,an=null;function WE(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,Mt=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vi!==null?{id:Fn,overflow:Un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,Mt=null,!0):!1;default:return!1}}function Zd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ef(t){if(Ae){var e=Mt;if(e){var n=e;if(!Jy(t,e)){if(Zd(t))throw Error(j(418));e=kr(n.nextSibling);var r=Bt;e&&Jy(t,e)?WE(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Bt=t)}}else{if(Zd(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ae=!1,Bt=t}}}function Zy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function xl(t){if(t!==Bt)return!1;if(!Ae)return Zy(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qd(t.type,t.memoizedProps)),e&&(e=Mt)){if(Zd(t))throw qE(),Error(j(418));for(;e;)WE(t,e),e=kr(e.nextSibling)}if(Zy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Bt?kr(t.stateNode.nextSibling):null;return!0}function qE(){for(var t=Mt;t;)t=kr(t.nextSibling)}function ks(){Mt=Bt=null,Ae=!1}function Lp(t){an===null?an=[t]:an.push(t)}var ZR=nr.ReactCurrentBatchConfig;function Eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ev(t){var e=t._init;return e(t._payload)}function HE(t){function e(v,y){if(t){var E=v.deletions;E===null?(v.deletions=[y],v.flags|=16):E.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function r(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function i(v,y){return v=br(v,y),v.index=0,v.sibling=null,v}function s(v,y,E){return v.index=E,t?(E=v.alternate,E!==null?(E=E.index,E<y?(v.flags|=2,y):E):(v.flags|=2,y)):(v.flags|=1048576,y)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,y,E,N){return y===null||y.tag!==6?(y=td(E,v.mode,N),y.return=v,y):(y=i(y,E),y.return=v,y)}function u(v,y,E,N){var L=E.type;return L===ts?d(v,y,E.props.children,N,E.key):y!==null&&(y.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===cr&&ev(L)===y.type)?(N=i(y,E.props),N.ref=Eo(v,y,E),N.return=v,N):(N=iu(E.type,E.key,E.props,null,v.mode,N),N.ref=Eo(v,y,E),N.return=v,N)}function c(v,y,E,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=nd(E,v.mode,N),y.return=v,y):(y=i(y,E.children||[]),y.return=v,y)}function d(v,y,E,N,L){return y===null||y.tag!==7?(y=ci(E,v.mode,N,L),y.return=v,y):(y=i(y,E),y.return=v,y)}function p(v,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=td(""+y,v.mode,E),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wl:return E=iu(y.type,y.key,y.props,null,v.mode,E),E.ref=Eo(v,null,y),E.return=v,E;case es:return y=nd(y,v.mode,E),y.return=v,y;case cr:var N=y._init;return p(v,N(y._payload),E)}if(Ro(y)||mo(y))return y=ci(y,v.mode,E,null),y.return=v,y;bl(v,y)}return null}function m(v,y,E,N){var L=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return L!==null?null:l(v,y,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case wl:return E.key===L?u(v,y,E,N):null;case es:return E.key===L?c(v,y,E,N):null;case cr:return L=E._init,m(v,y,L(E._payload),N)}if(Ro(E)||mo(E))return L!==null?null:d(v,y,E,N,null);bl(v,E)}return null}function I(v,y,E,N,L){if(typeof N=="string"&&N!==""||typeof N=="number")return v=v.get(E)||null,l(y,v,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case wl:return v=v.get(N.key===null?E:N.key)||null,u(y,v,N,L);case es:return v=v.get(N.key===null?E:N.key)||null,c(y,v,N,L);case cr:var M=N._init;return I(v,y,E,M(N._payload),L)}if(Ro(N)||mo(N))return v=v.get(E)||null,d(y,v,N,L,null);bl(y,N)}return null}function S(v,y,E,N){for(var L=null,M=null,T=y,g=y=0,w=null;T!==null&&g<E.length;g++){T.index>g?(w=T,T=null):w=T.sibling;var A=m(v,T,E[g],N);if(A===null){T===null&&(T=w);break}t&&T&&A.alternate===null&&e(v,T),y=s(A,y,g),M===null?L=A:M.sibling=A,M=A,T=w}if(g===E.length)return n(v,T),Ae&&ti(v,g),L;if(T===null){for(;g<E.length;g++)T=p(v,E[g],N),T!==null&&(y=s(T,y,g),M===null?L=T:M.sibling=T,M=T);return Ae&&ti(v,g),L}for(T=r(v,T);g<E.length;g++)w=I(T,v,g,E[g],N),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?g:w.key),y=s(w,y,g),M===null?L=w:M.sibling=w,M=w);return t&&T.forEach(function(P){return e(v,P)}),Ae&&ti(v,g),L}function k(v,y,E,N){var L=mo(E);if(typeof L!="function")throw Error(j(150));if(E=L.call(E),E==null)throw Error(j(151));for(var M=L=null,T=y,g=y=0,w=null,A=E.next();T!==null&&!A.done;g++,A=E.next()){T.index>g?(w=T,T=null):w=T.sibling;var P=m(v,T,A.value,N);if(P===null){T===null&&(T=w);break}t&&T&&P.alternate===null&&e(v,T),y=s(P,y,g),M===null?L=P:M.sibling=P,M=P,T=w}if(A.done)return n(v,T),Ae&&ti(v,g),L;if(T===null){for(;!A.done;g++,A=E.next())A=p(v,A.value,N),A!==null&&(y=s(A,y,g),M===null?L=A:M.sibling=A,M=A);return Ae&&ti(v,g),L}for(T=r(v,T);!A.done;g++,A=E.next())A=I(T,v,g,A.value,N),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?g:A.key),y=s(A,y,g),M===null?L=A:M.sibling=A,M=A);return t&&T.forEach(function(x){return e(v,x)}),Ae&&ti(v,g),L}function C(v,y,E,N){if(typeof E=="object"&&E!==null&&E.type===ts&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case wl:e:{for(var L=E.key,M=y;M!==null;){if(M.key===L){if(L=E.type,L===ts){if(M.tag===7){n(v,M.sibling),y=i(M,E.props.children),y.return=v,v=y;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===cr&&ev(L)===M.type){n(v,M.sibling),y=i(M,E.props),y.ref=Eo(v,M,E),y.return=v,v=y;break e}n(v,M);break}else e(v,M);M=M.sibling}E.type===ts?(y=ci(E.props.children,v.mode,N,E.key),y.return=v,v=y):(N=iu(E.type,E.key,E.props,null,v.mode,N),N.ref=Eo(v,y,E),N.return=v,v=N)}return o(v);case es:e:{for(M=E.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(v,y.sibling),y=i(y,E.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else e(v,y);y=y.sibling}y=nd(E,v.mode,N),y.return=v,v=y}return o(v);case cr:return M=E._init,C(v,y,M(E._payload),N)}if(Ro(E))return S(v,y,E,N);if(mo(E))return k(v,y,E,N);bl(v,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(v,y.sibling),y=i(y,E),y.return=v,v=y):(n(v,y),y=td(E,v.mode,N),y.return=v,v=y),o(v)):n(v,y)}return C}var Ps=HE(!0),$E=HE(!1),xu=$r(null),bu=null,us=null,Vp=null;function Mp(){Vp=us=bu=null}function Fp(t){var e=xu.current;we(xu),t._currentValue=e}function tf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){bu=t,Vp=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(Vp!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(bu===null)throw Error(j(308));us=t,bu.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var oi=null;function Up(t){oi===null?oi=[t]:oi.push(t)}function GE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Up(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qn(t,r)}function Qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function jp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function KE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qn(t,n)}return i=r.interleaved,i===null?(e.next=e,Up(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qn(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sp(t,n)}}function tv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Du(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,k=l;switch(m=e,I=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){p=S.call(I,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(I,p,m):S,m==null)break e;p=ke({},p,m);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=I,u=p):d=d.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ei|=o,t.lanes=o,t.memoizedState=p}}function nv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Fa={},An=$r(Fa),da=$r(Fa),fa=$r(Fa);function ai(t){if(t===Fa)throw Error(j(174));return t}function Bp(t,e){switch(ye(fa,e),ye(da,t),ye(An,Fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ld(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ld(e,t)}we(An),ye(An,e)}function Ns(){we(An),we(da),we(fa)}function QE(t){ai(fa.current);var e=ai(An.current),n=Ld(e,t.type);e!==n&&(ye(da,t),ye(An,n))}function zp(t){da.current===t&&(we(An),we(da))}var Re=$r(0);function Ou(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qh=[];function Wp(){for(var t=0;t<Qh.length;t++)Qh[t]._workInProgressVersionPrimary=null;Qh.length=0}var Zl=nr.ReactCurrentDispatcher,Yh=nr.ReactCurrentBatchConfig,_i=0,Ce=null,ze=null,Ge=null,Lu=!1,zo=!1,pa=0,eC=0;function ht(){throw Error(j(321))}function qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function Hp(t,e,n,r,i,s){if(_i=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?iC:sC,t=n(r,i),zo){s=0;do{if(zo=!1,pa=0,25<=s)throw Error(j(301));s+=1,Ge=ze=null,e.updateQueue=null,Zl.current=oC,t=n(r,i)}while(zo)}if(Zl.current=Vu,e=ze!==null&&ze.next!==null,_i=0,Ge=ze=Ce=null,Lu=!1,e)throw Error(j(300));return t}function $p(){var t=pa!==0;return pa=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ce.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function tn(){if(ze===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=Ge===null?Ce.memoizedState:Ge.next;if(e!==null)Ge=e,ze=t;else{if(t===null)throw Error(j(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ge===null?Ce.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function ma(t,e){return typeof e=="function"?e(t):e}function Xh(t){var e=tn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((_i&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ce.lanes|=d,Ei|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,cn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,Ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jh(t){var e=tn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function YE(){}function XE(t,e){var n=Ce,r=tn(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,Gp(ew.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,ga(9,ZE.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error(j(349));_i&30||JE(n,e,i)}return i}function JE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ZE(t,e,n,r){e.value=n,e.getSnapshot=r,tw(e)&&nw(t)}function ew(t,e,n){return n(function(){tw(e)&&nw(t)})}function tw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function nw(t){var e=Qn(t,1);e!==null&&un(e,t,1,-1)}function rv(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=rC.bind(null,Ce,t),[e.memoizedState,t]}function ga(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rw(){return tn().memoizedState}function eu(t,e,n,r){var i=pn();Ce.flags|=t,i.memoizedState=ga(1|e,n,void 0,r===void 0?null:r)}function vc(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(ze!==null){var o=ze.memoizedState;if(s=o.destroy,r!==null&&qp(r,o.deps)){i.memoizedState=ga(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=ga(1|e,n,s,r)}function iv(t,e){return eu(8390656,8,t,e)}function Gp(t,e){return vc(2048,8,t,e)}function iw(t,e){return vc(4,2,t,e)}function sw(t,e){return vc(4,4,t,e)}function ow(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aw(t,e,n){return n=n!=null?n.concat([t]):null,vc(4,4,ow.bind(null,e,t),n)}function Kp(){}function lw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cw(t,e,n){return _i&21?(cn(n,e)||(n=mE(),Ce.lanes|=n,Ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function tC(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Yh.transition;Yh.transition={};try{t(!1),e()}finally{fe=n,Yh.transition=r}}function hw(){return tn().memoizedState}function nC(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dw(t))fw(e,n);else if(n=GE(t,e,n,r),n!==null){var i=St();un(n,t,r,i),pw(n,e,r)}}function rC(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dw(t))fw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,cn(l,o)){var u=e.interleaved;u===null?(i.next=i,Up(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=GE(t,e,i,r),n!==null&&(i=St(),un(n,t,r,i),pw(n,e,r))}}function dw(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function fw(t,e){zo=Lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Sp(t,n)}}var Vu={readContext:en,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},iC={readContext:en,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:iv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,eu(4194308,4,ow.bind(null,e,t),n)},useLayoutEffect:function(t,e){return eu(4194308,4,t,e)},useInsertionEffect:function(t,e){return eu(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nC.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:rv,useDebugValue:Kp,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=rv(!1),e=t[0];return t=tC.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=pn();if(Ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Qe===null)throw Error(j(349));_i&30||JE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,iv(ew.bind(null,r,s,t),[t]),r.flags|=2048,ga(9,ZE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=Qe.identifierPrefix;if(Ae){var n=Un,r=Fn;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sC={readContext:en,useCallback:lw,useContext:en,useEffect:Gp,useImperativeHandle:aw,useInsertionEffect:iw,useLayoutEffect:sw,useMemo:uw,useReducer:Xh,useRef:rw,useState:function(){return Xh(ma)},useDebugValue:Kp,useDeferredValue:function(t){var e=tn();return cw(e,ze.memoizedState,t)},useTransition:function(){var t=Xh(ma)[0],e=tn().memoizedState;return[t,e]},useMutableSource:YE,useSyncExternalStore:XE,useId:hw,unstable_isNewReconciler:!1},oC={readContext:en,useCallback:lw,useContext:en,useEffect:Gp,useImperativeHandle:aw,useInsertionEffect:iw,useLayoutEffect:sw,useMemo:uw,useReducer:Jh,useRef:rw,useState:function(){return Jh(ma)},useDebugValue:Kp,useDeferredValue:function(t){var e=tn();return ze===null?e.memoizedState=t:cw(e,ze.memoizedState,t)},useTransition:function(){var t=Jh(ma)[0],e=tn().memoizedState;return[t,e]},useMutableSource:YE,useSyncExternalStore:XE,useId:hw,unstable_isNewReconciler:!1};function sn(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=xr(t),s=Wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,i),e!==null&&(un(e,t,i,r),Jl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=xr(t),s=Wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,i),e!==null&&(un(e,t,i,r),Jl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=xr(t),i=Wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Pr(t,i,r),e!==null&&(un(e,t,r,n),Jl(e,t,r))}};function sv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!la(n,r)||!la(i,s):!0}function mw(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=Dt(e)?yi:vt.current,r=e.contextTypes,s=(r=r!=null)?Cs(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ov(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function rf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},jp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=Dt(e)?yi:vt.current,i.context=Cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_c.enqueueReplaceState(i,i.state,null),Du(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",r=e;do n+=OS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aC=typeof WeakMap=="function"?WeakMap:Map;function gw(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fu||(Fu=!0,mf=r),sf(t,e)},n}function yw(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sf(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function av(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wC.bind(null,t,e,n),e.then(t,t))}function lv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var lC=nr.ReactCurrentOwner,xt=!1;function It(t,e,n,r){e.child=t===null?$E(e,null,n,r):Ps(e,t.child,n,r)}function cv(t,e,n,r,i){n=n.render;var s=e.ref;return _s(e,i),r=Hp(t,e,n,r,s,i),n=$p(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yn(t,e,i)):(Ae&&n&&Dp(e),e.flags|=1,It(t,e,r,i),e.child)}function hv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!nm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vw(t,e,s,r,i)):(t=iu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(o,r)&&t.ref===e.ref)return Yn(t,e,i)}return e.flags|=1,t=br(s,r),t.ref=e.ref,t.return=e,e.child=t}function vw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(la(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,Yn(t,e,i)}return of(t,e,n,r,i)}function _w(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(hs,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(hs,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(hs,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(hs,Vt),Vt|=r;return It(t,e,i,n),e.child}function Ew(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function of(t,e,n,r,i){var s=Dt(n)?yi:vt.current;return s=Cs(e,s),_s(e,i),n=Hp(t,e,n,r,s,i),r=$p(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Yn(t,e,i)):(Ae&&r&&Dp(e),e.flags|=1,It(t,e,n,i),e.child)}function dv(t,e,n,r,i){if(Dt(n)){var s=!0;ku(e)}else s=!1;if(_s(e,i),e.stateNode===null)tu(t,e),mw(e,n,r),rf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=en(c):(c=Dt(n)?yi:vt.current,c=Cs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ov(e,o,r,c),hr=!1;var m=e.memoizedState;o.state=m,Du(e,r,o,i),u=e.memoizedState,l!==r||m!==u||bt.current||hr?(typeof d=="function"&&(nf(e,n,d,r),u=e.memoizedState),(l=hr||sv(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,KE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:sn(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=Dt(n)?yi:vt.current,u=Cs(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&ov(e,o,r,u),hr=!1,m=e.memoizedState,o.state=m,Du(e,r,o,i);var S=e.memoizedState;l!==p||m!==S||bt.current||hr?(typeof I=="function"&&(nf(e,n,I,r),S=e.memoizedState),(c=hr||sv(e,n,c,r,m,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return af(t,e,n,r,s,i)}function af(t,e,n,r,i,s){Ew(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xy(e,n,!1),Yn(t,e,s);r=e.stateNode,lC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,l,s)):It(t,e,l,s),e.memoizedState=r.state,i&&Xy(e,n,!0),e.child}function ww(t){var e=t.stateNode;e.pendingContext?Yy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yy(t,e.context,!1),Bp(t,e.containerInfo)}function fv(t,e,n,r,i){return ks(),Lp(i),e.flags|=256,It(t,e,n,r),e.child}var lf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tw(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Re,i&1),t===null)return ef(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tc(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uf(n),e.memoizedState=lf,t):Qp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return uC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=br(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=br(l,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lf,r}return s=t.child,t=s.sibling,r=br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qp(t,e){return e=Tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Dl(t,e,n,r){return r!==null&&Lp(r),Ps(e,t.child,null,n),t=Qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zh(Error(j(422))),Dl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tc({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ps(e,t.child,null,o),e.child.memoizedState=uf(o),e.memoizedState=lf,s);if(!(e.mode&1))return Dl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Zh(s,r,void 0),Dl(t,e,o,r)}if(l=(o&t.childLanes)!==0,xt||l){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qn(t,i),un(r,t,i,-1))}return tm(),r=Zh(Error(j(421))),Dl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=TC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=kr(i.nextSibling),Bt=e,Ae=!0,an=null,t!==null&&(Qt[Yt++]=Fn,Qt[Yt++]=Un,Qt[Yt++]=vi,Fn=t.id,Un=t.overflow,vi=e),e=Qp(e,r.children),e.flags|=4096,e)}function pv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),tf(t.return,e,n)}function ed(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Iw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(It(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pv(t,n,e);else if(t.tag===19)pv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ou(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ed(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ou(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ed(e,!0,n,null,s);break;case"together":ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cC(t,e,n){switch(e.tag){case 3:ww(e),ks();break;case 5:QE(e);break;case 1:Dt(e.type)&&ku(e);break;case 4:Bp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?Tw(t,e,n):(ye(Re,Re.current&1),t=Yn(t,e,n),t!==null?t.sibling:null);ye(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Iw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,_w(t,e,n)}return Yn(t,e,n)}var Aw,cf,Sw,Rw;Aw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cf=function(){};Sw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(An.current);var s=null;switch(n){case"input":i=xd(t,i),r=xd(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Od(t,i),r=Od(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ru)}Vd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ta.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&_e("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Rw=function(t,e,n,r){n!==r&&(e.flags|=4)};function wo(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hC(t,e,n){var r=e.pendingProps;switch(Op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Dt(e.type)&&Cu(),dt(e),null;case 3:return r=e.stateNode,Ns(),we(bt),we(vt),Wp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(vf(an),an=null))),cf(t,e),dt(e),null;case 5:zp(e);var i=ai(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)Sw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return dt(e),null}if(t=ai(An.current),xl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[ha]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<ko.length;i++)_e(ko[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Iy(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Sy(r,s),_e("invalid",r)}Vd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Nl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Nl(r.textContent,l,t),i=["children",""+l]):ta.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Tl(r),Ay(r,s,!0);break;case"textarea":Tl(r),Ry(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ru)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[ha]=r,Aw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Md(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<ko.length;i++)_e(ko[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Iy(t,r),i=xd(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Sy(t,r),i=Od(t,r),_e("invalid",t);break;default:i=r}Vd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?rE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&na(t,u):typeof u=="number"&&na(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?u!=null&&s==="onScroll"&&_e("scroll",t):u!=null&&_p(t,s,u,o))}switch(n){case"input":Tl(t),Ay(t,r,!1);break;case"textarea":Tl(t),Ry(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ms(t,!!r.multiple,s,!1):r.defaultValue!=null&&ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ru)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)Rw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=ai(fa.current),ai(An.current),xl(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return dt(e),null;case 13:if(we(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Mt!==null&&e.mode&1&&!(e.flags&128))qE(),ks(),e.flags|=98560,s=!1;else if(s=xl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[gn]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),s=!1}else an!==null&&(vf(an),an=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?We===0&&(We=3):tm())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return Ns(),cf(t,e),t===null&&ua(e.stateNode.containerInfo),dt(e),null;case 10:return Fp(e.type._context),dt(e),null;case 17:return Dt(e.type)&&Cu(),dt(e),null;case 19:if(we(Re),s=e.memoizedState,s===null)return dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)wo(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ou(t),o!==null){for(e.flags|=128,wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>bs&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ou(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return dt(e),null}else 2*Le()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,r=!0,wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Re.current,ye(Re,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return em(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function dC(t,e){switch(Op(e),e.tag){case 1:return Dt(e.type)&&Cu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),we(bt),we(vt),Wp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zp(e),null;case 13:if(we(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Re),null;case 4:return Ns(),null;case 10:return Fp(e.type._context),null;case 22:case 23:return em(),null;case 24:return null;default:return null}}var Ol=!1,mt=!1,fC=typeof WeakSet=="function"?WeakSet:Set,W=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function hf(t,e,n){try{n()}catch(r){De(t,e,r)}}var mv=!1;function pC(t,e){if(Gd=Iu,t=xE(),bp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:t,selectionRange:n},Iu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,C=S.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?k:sn(e.type,k),C);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(N){De(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return S=mv,mv=!1,S}function Wo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hf(e,n,s)}i=i.next}while(i!==r)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cw(t){var e=t.alternate;e!==null&&(t.alternate=null,Cw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[ha],delete e[Xd],delete e[YR],delete e[XR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kw(t){return t.tag===5||t.tag===3||t.tag===4}function gv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ru));else if(r!==4&&(t=t.child,t!==null))for(ff(t,e,n),t=t.sibling;t!==null;)ff(t,e,n),t=t.sibling}function pf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}var Ze=null,on=!1;function ar(t,e,n){for(n=n.child;n!==null;)Pw(t,e,n),n=n.sibling}function Pw(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(dc,n)}catch{}switch(n.tag){case 5:mt||cs(n,e);case 6:var r=Ze,i=on;Ze=null,ar(t,e,n),Ze=r,on=i,Ze!==null&&(on?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(on?(t=Ze,n=n.stateNode,t.nodeType===8?Gh(t.parentNode,n):t.nodeType===1&&Gh(t,n),oa(t)):Gh(Ze,n.stateNode));break;case 4:r=Ze,i=on,Ze=n.stateNode.containerInfo,on=!0,ar(t,e,n),Ze=r,on=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hf(n,e,o),i=i.next}while(i!==r)}ar(t,e,n);break;case 1:if(!mt&&(cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,ar(t,e,n),mt=r):ar(t,e,n);break;default:ar(t,e,n)}}function yv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fC),e.forEach(function(r){var i=IC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,on=!1;break e;case 3:Ze=l.stateNode.containerInfo,on=!0;break e;case 4:Ze=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(Ze===null)throw Error(j(160));Pw(s,o,i),Ze=null,on=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nw(e,t),e=e.sibling}function Nw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rn(e,t),fn(t),r&4){try{Wo(3,t,t.return),Ec(3,t)}catch(k){De(t,t.return,k)}try{Wo(5,t,t.return)}catch(k){De(t,t.return,k)}}break;case 1:rn(e,t),fn(t),r&512&&n!==null&&cs(n,n.return);break;case 5:if(rn(e,t),fn(t),r&512&&n!==null&&cs(n,n.return),t.flags&32){var i=t.stateNode;try{na(i,"")}catch(k){De(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&J0(i,s),Md(l,o);var c=Md(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?rE(i,p):d==="dangerouslySetInnerHTML"?tE(i,p):d==="children"?na(i,p):_p(i,d,p,c)}switch(l){case"input":bd(i,s);break;case"textarea":Z0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?ms(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?ms(i,!!s.multiple,s.defaultValue,!0):ms(i,!!s.multiple,s.multiple?[]:"",!1))}i[ha]=s}catch(k){De(t,t.return,k)}}break;case 6:if(rn(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){De(t,t.return,k)}}break;case 3:if(rn(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(k){De(t,t.return,k)}break;case 4:rn(e,t),fn(t);break;case 13:rn(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jp=Le())),r&4&&yv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||d,rn(e,t),mt=c):rn(e,t),fn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,I=m.child,m.tag){case 0:case 11:case 14:case 15:Wo(4,m,m.return);break;case 1:cs(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(k){De(r,n,k)}}break;case 5:cs(m,m.return);break;case 22:if(m.memoizedState!==null){_v(p);continue}}I!==null?(I.return=m,W=I):_v(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=nE("display",o))}catch(k){De(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){De(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:rn(e,t),fn(t),r&4&&yv(t);break;case 21:break;default:rn(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kw(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(na(i,""),r.flags&=-33);var s=gv(t);pf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=gv(t);ff(t,l,o);break;default:throw Error(j(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mC(t,e,n){W=t,xw(t)}function xw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ol;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||mt;l=Ol;var c=mt;if(Ol=o,(mt=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Ev(i):u!==null?(u.return=o,W=u):Ev(i);for(;s!==null;)W=s,xw(s),s=s.sibling;W=i,Ol=l,mt=c}vv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):vv(t)}}function vv(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||Ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nv(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&oa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}mt||e.flags&512&&df(e)}catch(m){De(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function _v(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Ev(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{df(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{df(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var gC=Math.ceil,Mu=nr.ReactCurrentDispatcher,Yp=nr.ReactCurrentOwner,Jt=nr.ReactCurrentBatchConfig,le=0,Qe=null,Ue=null,rt=0,Vt=0,hs=$r(0),We=0,ya=null,Ei=0,wc=0,Xp=0,qo=null,Pt=null,Jp=0,bs=1/0,Vn=null,Fu=!1,mf=null,Nr=null,Ll=!1,Er=null,Uu=0,Ho=0,gf=null,nu=-1,ru=0;function St(){return le&6?Le():nu!==-1?nu:nu=Le()}function xr(t){return t.mode&1?le&2&&rt!==0?rt&-rt:ZR.transition!==null?(ru===0&&(ru=mE()),ru):(t=fe,t!==0||(t=window.event,t=t===void 0?16:TE(t.type)),t):1}function un(t,e,n,r){if(50<Ho)throw Ho=0,gf=null,Error(j(185));La(t,n,r),(!(le&2)||t!==Qe)&&(t===Qe&&(!(le&2)&&(wc|=n),We===4&&fr(t,rt)),Ot(t,r),n===1&&le===0&&!(e.mode&1)&&(bs=Le()+500,yc&&Gr()))}function Ot(t,e){var n=t.callbackNode;ZS(t,e);var r=Tu(t,t===Qe?rt:0);if(r===0)n!==null&&Py(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Py(n),e===1)t.tag===0?JR(wv.bind(null,t)):BE(wv.bind(null,t)),KR(function(){!(le&6)&&Gr()}),n=null;else{switch(gE(r)){case 1:n=Ap;break;case 4:n=fE;break;case 16:n=wu;break;case 536870912:n=pE;break;default:n=wu}n=Uw(n,bw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bw(t,e){if(nu=-1,ru=0,le&6)throw Error(j(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var r=Tu(t,t===Qe?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ju(t,r);else{e=r;var i=le;le|=2;var s=Ow();(Qe!==t||rt!==e)&&(Vn=null,bs=Le()+500,ui(t,e));do try{_C();break}catch(l){Dw(t,l)}while(!0);Mp(),Mu.current=s,le=i,Ue!==null?e=0:(Qe=null,rt=0,e=We)}if(e!==0){if(e===2&&(i=zd(t),i!==0&&(r=i,e=yf(t,i))),e===1)throw n=ya,ui(t,0),fr(t,r),Ot(t,Le()),n;if(e===6)fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!yC(i)&&(e=ju(t,r),e===2&&(s=zd(t),s!==0&&(r=s,e=yf(t,s))),e===1))throw n=ya,ui(t,0),fr(t,r),Ot(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:ni(t,Pt,Vn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=Jp+500-Le(),10<e)){if(Tu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yd(ni.bind(null,t,Pt,Vn),e);break}ni(t,Pt,Vn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ln(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gC(r/1960))-r,10<r){t.timeoutHandle=Yd(ni.bind(null,t,Pt,Vn),r);break}ni(t,Pt,Vn);break;case 5:ni(t,Pt,Vn);break;default:throw Error(j(329))}}}return Ot(t,Le()),t.callbackNode===n?bw.bind(null,t):null}function yf(t,e){var n=qo;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=ju(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&vf(e)),t}function vf(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function yC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~Xp,e&=~wc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function wv(t){if(le&6)throw Error(j(327));Es();var e=Tu(t,0);if(!(e&1))return Ot(t,Le()),null;var n=ju(t,e);if(t.tag!==0&&n===2){var r=zd(t);r!==0&&(e=r,n=yf(t,r))}if(n===1)throw n=ya,ui(t,0),fr(t,e),Ot(t,Le()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ni(t,Pt,Vn),Ot(t,Le()),null}function Zp(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(bs=Le()+500,yc&&Gr())}}function wi(t){Er!==null&&Er.tag===0&&!(le&6)&&Es();var e=le;le|=1;var n=Jt.transition,r=fe;try{if(Jt.transition=null,fe=1,t)return t()}finally{fe=r,Jt.transition=n,le=e,!(le&6)&&Gr()}}function em(){Vt=hs.current,we(hs)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GR(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Op(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cu();break;case 3:Ns(),we(bt),we(vt),Wp();break;case 5:zp(r);break;case 4:Ns();break;case 13:we(Re);break;case 19:we(Re);break;case 10:Fp(r.type._context);break;case 22:case 23:em()}n=n.return}if(Qe=t,Ue=t=br(t.current,null),rt=Vt=e,We=0,ya=null,Xp=wc=Ei=0,Pt=qo=null,oi!==null){for(e=0;e<oi.length;e++)if(n=oi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}oi=null}return t}function Dw(t,e){do{var n=Ue;try{if(Mp(),Zl.current=Vu,Lu){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Lu=!1}if(_i=0,Ge=ze=Ce=null,zo=!1,pa=0,Yp.current=null,n===null||n.return===null){We=1,ya=e,Ue=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=rt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=lv(o);if(I!==null){I.flags&=-257,uv(I,o,l,s,e),I.mode&1&&av(s,c,e),e=I,u=c;var S=e.updateQueue;if(S===null){var k=new Set;k.add(u),e.updateQueue=k}else S.add(u);break e}else{if(!(e&1)){av(s,c,e),tm();break e}u=Error(j(426))}}else if(Ae&&l.mode&1){var C=lv(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),uv(C,o,l,s,e),Lp(xs(u,l));break e}}s=u=xs(u,l),We!==4&&(We=2),qo===null?qo=[s]:qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=gw(s,u,e);tv(s,v);break e;case 1:l=u;var y=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Nr===null||!Nr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=yw(s,l,e);tv(s,N);break e}}s=s.return}while(s!==null)}Vw(n)}catch(L){e=L,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function Ow(){var t=Mu.current;return Mu.current=Vu,t===null?Vu:t}function tm(){(We===0||We===3||We===2)&&(We=4),Qe===null||!(Ei&268435455)&&!(wc&268435455)||fr(Qe,rt)}function ju(t,e){var n=le;le|=2;var r=Ow();(Qe!==t||rt!==e)&&(Vn=null,ui(t,e));do try{vC();break}catch(i){Dw(t,i)}while(!0);if(Mp(),le=n,Mu.current=r,Ue!==null)throw Error(j(261));return Qe=null,rt=0,We}function vC(){for(;Ue!==null;)Lw(Ue)}function _C(){for(;Ue!==null&&!qS();)Lw(Ue)}function Lw(t){var e=Fw(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?Vw(t):Ue=e,Yp.current=null}function Vw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dC(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Ue=null;return}}else if(n=hC(n,e,Vt),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);We===0&&(We=5)}function ni(t,e,n){var r=fe,i=Jt.transition;try{Jt.transition=null,fe=1,EC(t,e,n,r)}finally{Jt.transition=i,fe=r}return null}function EC(t,e,n,r){do Es();while(Er!==null);if(le&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eR(t,s),t===Qe&&(Ue=Qe=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ll||(Ll=!0,Uw(wu,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jt.transition,Jt.transition=null;var o=fe;fe=1;var l=le;le|=4,Yp.current=null,pC(t,n),Nw(n,t),jR(Kd),Iu=!!Gd,Kd=Gd=null,t.current=n,mC(n),HS(),le=l,fe=o,Jt.transition=s}else t.current=n;if(Ll&&(Ll=!1,Er=t,Uu=i),s=t.pendingLanes,s===0&&(Nr=null),KS(n.stateNode),Ot(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fu)throw Fu=!1,t=mf,mf=null,t;return Uu&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===gf?Ho++:(Ho=0,gf=t):Ho=0,Gr(),null}function Es(){if(Er!==null){var t=gE(Uu),e=Jt.transition,n=fe;try{if(Jt.transition=null,fe=16>t?16:t,Er===null)var r=!1;else{if(t=Er,Er=null,Uu=0,le&6)throw Error(j(331));var i=le;for(le|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Wo(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,I=d.return;if(Cw(d),d===c){W=null;break}if(m!==null){m.return=I,W=m;break}W=I}}}var S=s.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,W=v;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,W=E;else e:for(o=y;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ec(9,l)}}catch(L){De(l,l.return,L)}if(l===o){W=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,W=N;break e}W=l.return}}if(le=i,Gr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(dc,t)}catch{}r=!0}return r}finally{fe=n,Jt.transition=e}}return!1}function Tv(t,e,n){e=xs(n,e),e=gw(t,e,1),t=Pr(t,e,1),e=St(),t!==null&&(La(t,1,e),Ot(t,e))}function De(t,e,n){if(t.tag===3)Tv(t,t,n);else for(;e!==null;){if(e.tag===3){Tv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=xs(n,t),t=yw(e,t,1),e=Pr(e,t,1),t=St(),e!==null&&(La(e,1,t),Ot(e,t));break}}e=e.return}}function wC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(rt&n)===n&&(We===4||We===3&&(rt&130023424)===rt&&500>Le()-Jp?ui(t,0):Xp|=n),Ot(t,e)}function Mw(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=St();t=Qn(t,e),t!==null&&(La(t,e,n),Ot(t,n))}function TC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mw(t,n)}function IC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Mw(t,n)}var Fw;Fw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,cC(t,e,n);xt=!!(t.flags&131072)}else xt=!1,Ae&&e.flags&1048576&&zE(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tu(t,e),t=e.pendingProps;var i=Cs(e,vt.current);_s(e,n),i=Hp(null,e,r,t,i,n);var s=$p();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(s=!0,ku(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jp(e),i.updater=_c,e.stateNode=i,i._reactInternals=e,rf(e,r,t,n),e=af(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&Dp(e),It(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SC(r),t=sn(r,t),i){case 0:e=of(null,e,r,t,n);break e;case 1:e=dv(null,e,r,t,n);break e;case 11:e=cv(null,e,r,t,n);break e;case 14:e=hv(null,e,r,sn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),of(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),dv(t,e,r,i,n);case 3:e:{if(ww(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,KE(t,e),Du(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=xs(Error(j(423)),e),e=fv(t,e,r,n,i);break e}else if(r!==i){i=xs(Error(j(424)),e),e=fv(t,e,r,n,i);break e}else for(Mt=kr(e.stateNode.containerInfo.firstChild),Bt=e,Ae=!0,an=null,n=$E(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),r===i){e=Yn(t,e,n);break e}It(t,e,r,n)}e=e.child}return e;case 5:return QE(e),t===null&&ef(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qd(r,i)?o=null:s!==null&&Qd(r,s)&&(e.flags|=32),Ew(t,e),It(t,e,o,n),e.child;case 6:return t===null&&ef(e),null;case 13:return Tw(t,e,n);case 4:return Bp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ps(e,null,r,n):It(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),cv(t,e,r,i,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(xu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!bt.current){e=Yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Wn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),tf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),tf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}It(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_s(e,n),i=en(i),r=r(i),e.flags|=1,It(t,e,r,n),e.child;case 14:return r=e.type,i=sn(r,e.pendingProps),i=sn(r.type,i),hv(t,e,r,i,n);case 15:return vw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:sn(r,i),tu(t,e),e.tag=1,Dt(r)?(t=!0,ku(e)):t=!1,_s(e,n),mw(e,r,i),rf(e,r,i,n),af(null,e,r,!0,t,n);case 19:return Iw(t,e,n);case 22:return _w(t,e,n)}throw Error(j(156,e.tag))};function Uw(t,e){return dE(t,e)}function AC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new AC(t,e,n,r)}function nm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SC(t){if(typeof t=="function")return nm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wp)return 11;if(t===Tp)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function iu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")nm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return ci(n.children,i,s,e);case Ep:o=8,i|=8;break;case Cd:return t=Xt(12,n,e,i|2),t.elementType=Cd,t.lanes=s,t;case kd:return t=Xt(13,n,e,i),t.elementType=kd,t.lanes=s,t;case Pd:return t=Xt(19,n,e,i),t.elementType=Pd,t.lanes=s,t;case Q0:return Tc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G0:o=10;break e;case K0:o=9;break e;case wp:o=11;break e;case Tp:o=14;break e;case cr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function Tc(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=Q0,t.lanes=n,t.stateNode={isHidden:!1},t}function td(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function nd(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vh(0),this.expirationTimes=Vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rm(t,e,n,r,i,s,o,l,u){return t=new RC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jp(s),t}function CC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jw(t){if(!t)return Mr;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Dt(n))return jE(t,n,e)}return e}function Bw(t,e,n,r,i,s,o,l,u){return t=rm(n,r,!0,t,i,s,o,l,u),t.context=jw(null),n=t.current,r=St(),i=xr(n),s=Wn(r,i),s.callback=e??null,Pr(n,s,i),t.current.lanes=i,La(t,i,r),Ot(t,r),t}function Ic(t,e,n,r){var i=e.current,s=St(),o=xr(i);return n=jw(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pr(i,e,o),t!==null&&(un(t,i,o,s),Jl(t,i,o)),o}function Bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Iv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function im(t,e){Iv(t,e),(t=t.alternate)&&Iv(t,e)}function kC(){return null}var zw=typeof reportError=="function"?reportError:function(t){console.error(t)};function sm(t){this._internalRoot=t}Ac.prototype.render=sm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Ic(t,e,null,null)};Ac.prototype.unmount=sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){Ic(null,t,null,null)}),e[Kn]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=_E();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&wE(t)}};function om(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Av(){}function PC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Bu(o);s.call(c)}}var o=Bw(e,r,t,0,null,!1,!1,"",Av);return t._reactRootContainer=o,t[Kn]=o.current,ua(t.nodeType===8?t.parentNode:t),wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Bu(u);l.call(c)}}var u=rm(t,0,!1,null,null,!1,!1,"",Av);return t._reactRootContainer=u,t[Kn]=u.current,ua(t.nodeType===8?t.parentNode:t),wi(function(){Ic(e,u,n,r)}),u}function Rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Bu(o);l.call(u)}}Ic(e,o,t,i)}else o=PC(n,e,t,i,r);return Bu(o)}yE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(Sp(e,n|1),Ot(e,Le()),!(le&6)&&(bs=Le()+500,Gr()))}break;case 13:wi(function(){var r=Qn(t,1);if(r!==null){var i=St();un(r,t,1,i)}}),im(t,1)}};Rp=function(t){if(t.tag===13){var e=Qn(t,134217728);if(e!==null){var n=St();un(e,t,134217728,n)}im(t,134217728)}};vE=function(t){if(t.tag===13){var e=xr(t),n=Qn(t,e);if(n!==null){var r=St();un(n,t,e,r)}im(t,e)}};_E=function(){return fe};EE=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ud=function(t,e,n){switch(e){case"input":if(bd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gc(r);if(!i)throw Error(j(90));X0(r),bd(r,i)}}}break;case"textarea":Z0(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};oE=Zp;aE=wi;var NC={usingClientEntryPoint:!1,Events:[Ma,ss,gc,iE,sE,Zp]},To={findFiberByHostInstance:si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xC={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cE(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||kC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{dc=Vl.inject(xC),In=Vl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NC;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!om(e))throw Error(j(200));return CC(t,e,null,n)};Ht.createRoot=function(t,e){if(!om(t))throw Error(j(299));var n=!1,r="",i=zw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=rm(t,1,!1,null,null,n,!1,r,i),t[Kn]=e.current,ua(t.nodeType===8?t.parentNode:t),new sm(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=cE(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return wi(t)};Ht.hydrate=function(t,e,n){if(!Sc(e))throw Error(j(200));return Rc(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!om(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bw(e,null,t,1,n??null,i,!1,s,o),t[Kn]=e.current,ua(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ac(e)};Ht.render=function(t,e,n){if(!Sc(e))throw Error(j(200));return Rc(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(j(40));return t._reactRootContainer?(wi(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Kn]=null})}),!0):!1};Ht.unstable_batchedUpdates=Zp;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Sc(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Rc(t,e,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function Ww(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ww)}catch(t){console.error(t)}}Ww(),W0.exports=Ht;var bC=W0.exports,qw,Sv=bC;qw=Sv.createRoot,Sv.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const Rv="popstate";function DC(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=Vi(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),_f("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:Hw(s))}function r(i,s){am(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return LC(e,n,r,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function am(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OC(){return Math.random().toString(36).substr(2,8)}function Cv(t,e){return{usr:t.state,key:t.key,idx:e}}function _f(t,e,n,r){return n===void 0&&(n=null),va({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vi(e):e,{state:n,key:e&&e.key||r||OC()})}function Hw(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Vi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function LC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=wr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(va({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=wr.Pop;let C=d(),v=C==null?null:C-c;c=C,u&&u({action:l,location:k.location,delta:v})}function m(C,v){l=wr.Push;let y=_f(k.location,C,v);n&&n(y,C),c=d()+1;let E=Cv(y,c),N=k.createHref(y);try{o.pushState(E,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(N)}s&&u&&u({action:l,location:k.location,delta:1})}function I(C,v){l=wr.Replace;let y=_f(k.location,C,v);n&&n(y,C),c=d();let E=Cv(y,c),N=k.createHref(y);o.replaceState(E,"",N),s&&u&&u({action:l,location:k.location,delta:0})}function S(C){let v=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof C=="string"?C:Hw(C);return y=y.replace(/ $/,"%20"),qe(v,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,v)}let k={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Rv,p),u=C,()=>{i.removeEventListener(Rv,p),u=null}},createHref(C){return e(i,C)},createURL:S,encodeLocation(C){let v=S(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:I,go(C){return o.go(C)}};return k}var kv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(kv||(kv={}));function VC(t,e,n){return n===void 0&&(n="/"),MC(t,e,n,!1)}function MC(t,e,n,r){let i=typeof e=="string"?Vi(e):e,s=Kw(i.pathname||"/",n);if(s==null)return null;let o=$w(t);FC(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=QC(s);l=GC(o[u],c,r)}return l}function $w(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=hi([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$w(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:HC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Gw(s.path))i(s,o,u)}),e}function Gw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Gw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function FC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$C(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UC=/^:[\w-]+$/,jC=3,BC=2,zC=1,WC=10,qC=-2,Pv=t=>t==="*";function HC(t,e){let n=t.split("/"),r=n.length;return n.some(Pv)&&(r+=qC),e&&(r+=BC),n.filter(i=>!Pv(i)).reduce((i,s)=>i+(UC.test(s)?jC:s===""?zC:WC),r)}function $C(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function GC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Nv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Nv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:hi([s,p.pathname]),pathnameBase:tk(hi([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=hi([s,p.pathnameBase]))}return o}function Nv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=KC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:I}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const S=l[p];return I&&!S?c[m]=void 0:c[m]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function KC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),am(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function QC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return am(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Kw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function YC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Vi(t):t;return{pathname:n?n.startsWith("/")?n:XC(n,e):e,search:nk(r),hash:rk(i)}}function XC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function JC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ZC(t,e){let n=JC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ek(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Vi(t):(i=va({},t),qe(!i.pathname||!i.pathname.includes("?"),rd("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),rd("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),rd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=YC(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const hi=t=>t.join("/").replace(/\/\/+/g,"/"),tk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),nk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,rk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ik(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Qw=["post","put","patch","delete"];new Set(Qw);const sk=["get",...Qw];new Set(sk);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_a.apply(this,arguments)}const lm=V.createContext(null),ok=V.createContext(null),Cc=V.createContext(null),kc=V.createContext(null),$s=V.createContext({outlet:null,matches:[],isDataRoute:!1}),Yw=V.createContext(null);function Pc(){return V.useContext(kc)!=null}function Xw(){return Pc()||qe(!1),V.useContext(kc).location}function Jw(t){V.useContext(Cc).static||V.useLayoutEffect(t)}function Nc(){let{isDataRoute:t}=V.useContext($s);return t?_k():ak()}function ak(){Pc()||qe(!1);let t=V.useContext(lm),{basename:e,future:n,navigator:r}=V.useContext(Cc),{matches:i}=V.useContext($s),{pathname:s}=Xw(),o=JSON.stringify(ZC(i,n.v7_relativeSplatPath)),l=V.useRef(!1);return Jw(()=>{l.current=!0}),V.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=ek(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:hi([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function lk(t,e){return uk(t,e)}function uk(t,e,n,r){Pc()||qe(!1);let{navigator:i}=V.useContext(Cc),{matches:s}=V.useContext($s),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Xw(),d;if(e){var p;let C=typeof e=="string"?Vi(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||qe(!1),d=C}else d=c;let m=d.pathname||"/",I=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");I="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=VC(t,{pathname:I}),k=pk(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:hi([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:hi([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&k?V.createElement(kc.Provider,{value:{location:_a({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:wr.Pop}},k):k}function ck(){let t=vk(),e=ik(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const hk=V.createElement(ck,null);class dk extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement($s.Provider,{value:this.props.routeContext},V.createElement(Yw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fk(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(lm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement($s.Provider,{value:e},r)}function pk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||qe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:I}=n,S=p.route.loader&&m[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let I,S=!1,k=null,C=null;n&&(I=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||hk,u&&(c<0&&m===0?(S=!0,C=null):c===m&&(S=!0,C=p.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,m+1)),y=()=>{let E;return I?E=k:S?E=C:p.route.Component?E=V.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=d,V.createElement(fk,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?V.createElement(dk,{location:n.location,revalidation:n.revalidation,component:k,error:I,children:y(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):y()},null)}var Zw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Zw||{}),zu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zu||{});function mk(t){let e=V.useContext(lm);return e||qe(!1),e}function gk(t){let e=V.useContext(ok);return e||qe(!1),e}function yk(t){let e=V.useContext($s);return e||qe(!1),e}function e1(t){let e=yk(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function vk(){var t;let e=V.useContext(Yw),n=gk(zu.UseRouteError),r=e1(zu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function _k(){let{router:t}=mk(Zw.UseNavigateStable),e=e1(zu.UseNavigateStable),n=V.useRef(!1);return Jw(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,_a({fromRouteId:e},s)))},[t,e])}function su(t){qe(!1)}function Ek(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wr.Pop,navigator:s,static:o=!1,future:l}=t;Pc()&&qe(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:s,static:o,future:_a({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Vi(r));let{pathname:d="/",search:p="",hash:m="",state:I=null,key:S="default"}=r,k=V.useMemo(()=>{let C=Kw(d,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:I,key:S},navigationType:i}},[u,d,p,m,I,S,i]);return k==null?null:V.createElement(Cc.Provider,{value:c},V.createElement(kc.Provider,{children:n,value:k}))}function wk(t){let{children:e,location:n}=t;return lk(Ef(e),n)}new Promise(()=>{});function Ef(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,Ef(r.props.children,s));return}r.type!==su&&qe(!1),!r.props.index||!r.props.children||qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ef(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Tk="6";try{window.__reactRouterVersion=Tk}catch{}const Ik="startTransition",xv=wS[Ik];function Ak(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=DC({window:i,v5Compat:!0}));let o=s.current,[l,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=V.useCallback(p=>{c&&xv?xv(()=>u(p)):u(p)},[u,c]);return V.useLayoutEffect(()=>o.listen(d),[o,d]),V.createElement(Ek,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var bv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(bv||(bv={}));var Dv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dv||(Dv={}));const Sk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdTSURBVHgB7Z3dTtRaFMcXdaKi0YhRExMT6o0X3ihXiMak8wTqExzmCTznCZQ30CcQn0B9AiYhQOACOCEhgQRSEi5IIHwGGAgfrn/Ze1LKdPq1d3eZmV/SdGiGYfpnde2111rd7aKCMDExYZ+dnTn80rYsqxd7bOfn5w+6uroe+N/Lx7b52Da/dLE/PT39n/ezfNx99+7dLBWALjIEhGRBPt64ceMDC/I6KF5ahOiz/Nl/+LN/DwwMuGSAXIWdmZl5UKvVPvPLQbqwyDxwWeTveYuci7Cjo6NOqVT6wi8dMkuVLfr727dvf5NmtApbIEGDuOzPh9gfD5MmtAhbYEGDuCcnJ5X3799XSTFKhYUPPTw8/MGDx0e6XgzzNqTSBysTdnx8HGL+UDW6G0Cpe8gsLKz06OjoCw8K/1ILwOfxrbu7e6ivr2+bMpBJWMSivBuh/EKnvHB5K2dxDRalZGxs7DX/d2eo9UQFNm8jOEdKSSphJycn/2FfOnKN/WkcbJ5UjOBcKQWJXQH+EDv5YWojOHcx2N/f/zPJ7yQSth1FlSQVN7aw8DdtcPmHIrJo5bjZs1jCtvDonwiIywN2X5xoIXLwQpxKHVE9kBvm3YjQpCmRwiL4p46ofmyetn+JelNTV8B+dZCd9g/qcAW23k/N0o+hwnb8anPgb2/duvU8bOrbzBV0XEAT4G/ZTYZezQ0tlq3VoQtr7RAB53PLjfK5pZD3G/WrnCSnR48e0d27d+n+/fvEU0vvGOAToePjYwyqtLm5Sbu7u95rg98VV3Y1ePyKxZocsCBeb28v9fT01IWMw/r6Oq2urhoTuJHVXvn2LGpkKKEDWOaLFy8SCSp5/Pix9/srKyueFedNI6u9NHiJKoBNOfPw4UN6+fJlKlElPEJ7/xgIbAAHdT7/gUvCcgjxmXIGguDyV0Vaq8+KsNo6dWFF3OpQzjx79swTVxXSTxvA8U9168JyXJZ7ZRWCwj+qJungp4qDg4N63a8urAk3oMsfQlSImzc88NerDZ6wwg3YlDOIU3VhaBCzp6enPT/kCWvCDYA7d+6QLlT67STUarVP2HvCshv4QC0GZmsmkFpKi01d5s2CKavSCQvraWlNTU29NlXH0jkF5foUmQBZL/hZi+e5NhmiFYUFXGEoW6bcANjf3ydd7OzskEFsi538KzLE1tYW6ULnZ0eBm1MsUXk0AlwB8qmqwZVgMkdLsFgyXH5BHlU1a2trZBjbqMUCWKxKq4WlIvFtEkRZVhFahpaWlrySS1bwGfPz82QaGGvq/liVwMqWl5cpK/gMw761TiGEBSipLC4uphJGWqqJskwY+SctmwBhMKLbth077Qf/DFdSFEuVlMS9p4VpzYRACwsLXtpPFgmDOQVYKOJUDFI6wrWsoEumJO6iLlzPqz9aQOL65s2b3mtMVYtmnUFgrHAFLhW8lQgWqiJqyBEXcewKdVAKa7oDYV3qoBTWdFa6gkKBwQp+FfuwSoD0s9gXzediIYoSZ2KqZBAUFO/du1dvgEtbVeDSsycw0oV7e3taU5JRwAt4TXHj4+NbeYZcKCI+efLE6yjUVf+XmbO8m+UQZb1586anJH7ALTYOaQaCIvjPozQtm0Gw5dmNCP+KfUn88IfFdUgjaCXCZgIpMMTVkab0Ay2xl+VvbWuk4FJHJ6EpUf3gO2TtaoxCaukJK24Ic0kDBlsrGyL7cDXhypvr/NmtRDfhxgEWUiRRJfhOOq4grJAkX9eFrdVq30ghGDyKcPmHobp9FPhdal3YcrmMZEyVFFFkUSVPnz4lhVT999gGE91DpAidnYSqUNnq6XcD4JKwrHiVFFmtTPO1CW7w9s9GpRklVjs3N1fovCmmwEioK+KKZmF3JuKuRIcUIIPzokQHmOai70BhfQwh1vPgwbBIGf8BhxSA6SQ2jMAQF34N/jevFk6ZM0BSZmNjQ3nCHEv4NToeevc3J2Z+6VxKD7Mf5A4gsH8Dcu+/1TMIBJIdhdhzuFgv22CDkLg1VHPlYZittaGwoXM7/nIVPkFHV9YLJ1zEQmACXGoyHoX2FYi4tkIdwmi6yGTThg2EEMH4rMNFzMqiDjd7T5w1Yb5SAcs3BnG7u7u/Rr0pUljhEsqolVMHl7dynJU6Y/VuwZewsG0tLs797OzsU9wVOmM3xWGFNI4Q/qM2Beee5BkLiReN5FnZIBle2sQAlajBKkjiNk7xByrt4BbEOSYWFaRe8RiLSFqW9YtadAkpiIpxJe0jVjpLSTfGJVNLSQP8YZ6j97XSJALncvv27b6BjEv3Z15VXiIGtWu7uhwufU76VPr7+5W0Aih9wARcA3/BrxyapFrX2hT8nX/zbKqSdYl+P0qFlYgl/BCS2VRsqnSRTKmSYrQIKymwe6iSJkElWoWVYKE0sZiPQ2apkmZBJbkIKxE+WIpsUz64vP3kkf6bSh8aRa7C+vGJrOXRfqKDsj0e7dcM8TgAW4j8Sggd+TBKuniqEW5QcdGdbkrIIH8BDAGBkF/hM9YAAAAASUVORK5CYII=",Rk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASdSURBVHgB3ZvBa9RAFMZfrYqwFVuQ9qAiFVER9eBB9GBBBLGX3v0jPXuqFL1URBFaxHpQtBWxB1u0C7IFcX5Nxk7fziSZbHaTzQePbSazs/PlvXnvzct0QvyYNTJvZM5IR4aDrpE1I58lHieMLEgyT40dI7tGNo180zcn1DXk7gYGGgZ6Rp5KPFDG3QL9eKjL6ecBjjk3Z4wsyujIgn0ph5MF+6HAx0ambcOkc+ORJKYyKkD2nSTmF4vfRk4bOVOgLxwvGvnKb1qTXpL+tbotyRrbkfKaqAPW/1xS7fBZhv15I5fVzXUjq5LY/l8ZLzBn66zmnHYUug3h65KsX4tPRt7K+AONou0ptxGnNa06lgkTTcW6up6D8Ixq3Jb2QDvEzjFpN3q64bgMDkLZTCr8jUfHszfSUgYhDLlrRq6KP35DfEuS0NaVhqAsYbR5X7LzbB4C8RBP+ULKJRiVo8wahuxDKb6p6KT9p6UBiCXM5NGsNmHMl/i9ln5qEyb3XZDRpq5exJr0TenX7IYkRHX6eSPtb8H3rqV9a0Oshs+rawI7WZkv1+behmq7IjVrOYYwzsedrN3AZwHS7sPAtGekRsQQ1hP9kf+Vg8C/mTPOSBFDWJti0djazRlnpIghrNdp0bA0lTPOSBFDeEdd48CKaGs2Z5yRIoYwmZJ2QLdyvkNoci2BNV1rjg1hl0TWumSyH1QbYeampy+av+25tyU1g8TjjSQTQ2N5YeajJLUiV2tokZwZze2l9y6I38mtS82YkHjYXDrG22JF1IfrWL9P3IsymwcmfaS4nQNbDK/VWVlMSjn8kWQ9ouWpwDho9b0cVj/rwhE/UsakfSD06IrHsOrZ7nsv0JPD3Rp+RD/cIyZdRYlH0h8adriBKO+TdMLTce5Dlqpr0PlWRXjY0FvNEDpyGPtXfR2aTpglcs/IOYnDfPrZR7rJhG1pyJezs14xXUyY/IHykS5OzPsGrcppVQ00imZ9yQta8/mLrAf0H2XD0jDBGrwj/XPD669IuPppy8JsaoLvj6vQ8Gz6I+6Lq710YjZUFEHWeqVUVPQFX6amByFc9HhE37GDwFihSUJ0Q+Ln5h2vrEnbAYuUazAv3k7wcH3aRqMPjJxS7Tyg51JuhxU0byaBKbED6qWd8rKjQs4hgG76Gzvp98mWQidxXsrgKSm/seQ2EJYwS1t+PTgWkDOAj6x7PAKged+xA753VbIRs17z0PfAIOzWmrPWY4gse1ydym074iveh1BmvUahaOIRQ9YFyQGkCTWXMvrRB7JD30IWIVyWrAVm9UoSQqzZ6XQsfAahq4jfqAx5hAcl68J6zlrrWlkVjyrJNgYhwq0kC3yEW0sW+Ai3liwIadhFa8iCvDJtq8iCLMKtIwtChFtJFkBYJ9j2kEoboPcGuxDWRxdqPZJQMXT+/pMCwL66gZcObdbHCWxY9FZ0HcKYtD5Iba970qBzkgVAMeOsJHt8rV14vLY1LbS6KA04KTckYMXPjHQnnYbvkvz3RxNLt4PAvpv+xYVLjlegXySnrjtmwA+tSEoWhMq0kKaaaA9+jxNYq0QeW205gn8V7PTp/QnotgAAAABJRU5ErkJggg==",Ck="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcDSURBVHgB7VvNb9xEFH8z9kYVpMGoCQKltA6UzQohdXvrjc2ttKFduHFquPXW9AScsrnBqclf0OQfoAlqSuFS9wS3urd8VIqDElEgFW4TKWmy9vCe90Njx95sdu0la/hJ++HZsdfz/N6bN7/3hkHC0PWivp/ZK3CunBcgdCGEDgw0BkyX++FvFr7ZjDH6fOI4jikywny2+MCCBMEgAZw+N1pgCrvmglsMDvSowPMtV7gGc9ns+tN7BsSM2ASg6QWtt6f3Jl5xnA4hAXjCcJ1JR3GNuDSjbQF0YuAhsNFkZhzmTLcriLYE8E72k6LClDvQeOA2vkx8PRHMNYGDmXF7bGtxzpI76bmiXoayzlzQBIMCNp3HVwEa3nxFIzZW7s9Ai2hLAO8Of7pKji3kJxq0gVef3t7dNm3LsKEFkHad7OktuFwUmWDXo/qRIPbZ/kgr2tCWAE4Pj/4N/qdvVwc91eqgo/B27pKuAC+AYBMRjpXMYnJjaWEKjgAF2sDJgXN/4EeekRwZfLf9avuLP5/+/GDXtnYhZmxvPrW3NlfMrecr030DWUaah/8rC/8EHl/qO5WFl8+XHzV73USmwU6gohFKKcw0MNaY2Vhe+LKZ63StAGoYHL4yjk9+AgKOGIVgohAuHHZ+1wuA4GmDUB4eiC6b0IS2fMBxAfmH1wfen0cBFGW/gGF1/mT/Bxr6jZ+izk2FAAiRQgB2EYXwAoXwa9h5qTABGRHmYJdZ+UJYnMAhZfAGqYjPoBKM1aCpQr0T1v+ACVB4q/Xnfnmjf/iGdipnv3i+9AS6DFt/rTxDtX9FcYHUrIeZgs8ESH0yIvNQCm/t9aV7b0KXAiPVu/hRlJpsDNaG5CjVZwKqq16XY3v8Hms467u57OgEhdL0wrn8NiQAtPtbEDAFXLmOy33qAqCnj9PGmPwjHs9CAsBF1G3UvRJUghdih8ZRICWIGZ4/EDDta2RwkxZZtcO6AGihEXj61vrivRIkALz22IFGvDFIAOqeSoujSC2oC4ALZcJ3pismIQWwrDk7TAtqXz0BEIcXXNcT7QRJIXhDFSRiboQwLTidGy3QF08AQhW+FRXF0EmysevLnmlNV2+KOIRJnG3GISF4WkAEjQynMjuo9MaFZ//135DNnYeEUR1wYoM+ACRqcIj1KZFxdo3+n5P3D6r/zt6OASmDuqsSL1k3Axrz0NDnZ3nGVfOBvkbcdNZxQNUMTLltT90d4aj4fgG40HWh7xHgGxsDnlfx/bzciFy7AR3AmezV6y5zpzAIspHWKv22/ENis0ANRMszIQW/XOgcjUGXOylc6Yj6CyZK+KGRLZIgoBNw/CaA2n+W4434uLTMq55V6AACjrcjGSWMbXwPlwPXeJBHW139fg1SimBsQw8hdYTIUfG/AOA/Du5VZkig6AhSCop65WNKqnKcg32eEaOjrqXADoNaVnX5GNc8NkcxWIF+eUgpGPdPt0iIrpEPWPM38tQKoFp4ITeY3KvakMH9oXHK4A/7wTG5AweYn7xMGqYFul6kMRXkNsGFySk6CswEWu+J3tSZgdNTLsjHNGYauxcH4HTgZ4BEMgztvwmXi2u+BlGhyCqBEIO5QP9CmszAy3mIQM6DV3IengCQ/zfgkAxKN8MrrpJQzXkY9J1LrQ0zKN2MRjmPugAOy6B0KygHGeAebDnnURdAVAYlGD93E8LynYhZmRfwZ4dDtEAVaiKZW/BT1BYkAAWUiWC+EzPGU/4+8h3Zi7shhQW5RjU2rUIusuSMf/Nyc9mEGHFm+CpN5V/7Gl1x6/flHw25KbRGCHP2D8EfNdnCdUc2Vu7HepNJgVQfNfcxSFwjPf2NpYWhYN9QQgTVhGrrfKbAuXK3G/xBrcoFAjXMSPePhPUPFUA1PPalx8mW6MLHWQghJT4eaCxRyd7IOkGy+b7+LJEjF6VmDR1L8bWB9+apLg+OEaIGT5lnVP1vo847tE5wMHdlJliQ3E59fhIY/PBynjvK3QNPnonZjcWFsUbnNlUoicHEY+wZXCG2VJ8fN8jbI7VVgqSLpcM0ofpHMw53JjutDVVPTzFKMfhbM0++hqZrhbc2V+ZoowIESAUqSCa/0Hcqqx1lo0KroPVJ/1sffYVprRkI5y+nUStvQJM4cq1wVH1+5WLxb2uroYndaS2ZZEvF0lH1+TLINFzHnd9xdox2Nk31qshOKR5BU4DoJKpBsUvHN00N5i6PNdjEJMPAPma5XH6kMMVGft7CxZcld6husaUB5qvbbEm96dVwS167jrjtcvmqMyK1JAfZKf4gtt1pse0XaGJbWxyIfVteMpunc17hJZoHfNyuMGgR45G2yFvWaKw4kfiOES9EddW8V4xF9UgCdKpKCds+7+UpK6m6NUrYZKDHCG6xjRv/AF0bOBSDHmXQAAAAAElFTkSuQmCC",kk="/React-Firebase-Chat-Application/assets/logo_icon-Bug9MN-U.png",Pk="/React-Firebase-Chat-Application/assets/logo_big-Cp0kVrXR.png",Nk="/React-Firebase-Chat-Application/assets/logo-9xkPj2hX.png",xk="/React-Firebase-Chat-Application/assets/pic1-Cav6XP8G.png",bk="/React-Firebase-Chat-Application/assets/pic3-LJNB-Dr0.png",Dk="/React-Firebase-Chat-Application/assets/pic4-BREKihcV.png",Ok="/React-Firebase-Chat-Application/assets/profile_richard-Bfd_-P-Z.png",Lk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJjSURBVHgB1ZiBcdswDEUhT6BOUG7QbBBt0G4QbVBvYI+QDdxO0Gwge4K2E1Ab2BsgQMRcFAikSEnkJe8OpxNNgl8gRMGsYAGI2NDljuzeXWtnzI2sd3Yhe6qqqodSkLia7EB2xXT+krWQk5UCJTaLYHJ655xvTUdmYAvI0c/ARBzdE0fHPUw9Gscr0JDtnSAflsfCGnBYap/A41hYhC9D9ivgb5nYQCQfUwR6BHebiHXONEctbIRbEYlNCgLqL866PIoX+yd28EEZvIdMuFSSNHODtCV/hMzgNGe7uQF7nOaMgfxCm6So4jQ3WygE52ZUVJWn4rd88Ta0QGjU/DuyRrRdqNq5QSForjMMldYrLHKy07DQb6LtCcpzEfeqUCPa/kF55JwyeKrQHsrTi3sjO7DQd4lbMj9HzM65g08CC333NLQ1fIXyzG6HLLQXbV+gPEbc/5cddkpjA+W5F/e97MBC5dbwHcrTiPvpFumpnEp+Qlsxt9X67dzhwFm0Z6tDFR7E/dnbUynzroXKvFZZTRMaUOP0gKGDjLiUs2LOU8xA7ekOkAmc1qHhaIrBXQmxOBxeSI4pDrTl2EysS7FO8W+XOOMjGu1AzOKKFwyHSt6in4clTn1imRPO/a2dCuwwDq/YKjCBoQu/+cbTpYdhz+NP8PhLUrsxXPz+AH/BwWO0w42W9vbfkAKGD7jWcHT+W0yM7JxgdmhxPR2KI6LNxTqnnG+pEeZc5+ObBsKBCIqtYCFuYjYutM3op5uzl9x1f4dj/LV00b5M6TmbG8yRBrnwiL3CRwQja9QPAb7tNC8n3s9GsmlLVaiiEgAAAABJRU5ErkJggg==",Vk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAduSURBVHgB7Z0/bBtVHMe/73wJKajFI1vciU60naALShYkBmgyMCC1ohmKVImqZUMopU6JEBIDiYrE0KFBGRgYmtKNpRFLCwuBBTYuGxsuiNRpknu87ztfcrbPvj/23T3/+Sx2nXNP99Hvfu/3/tyzgCFMVWXl4AAzQqACgWkB9SpRkUBZvS8Hj1Wf1dRnNXWcAxc1KfCret2SLpy9z8QWDECgIBoi5yzgvBJzplVeWrR0gS3Xxf3SHjbqnwsHBZCr2PJ1Wd45gWvqpJfAiMwHx5VYzVtyLmLtRTlTEripzjaDIhHYlAdYfbYsNpAxmYo1Rmg7jOKlvU/FGjIiE7EGC23FOXCxsL8sNtFn+ipW59DjuKsajzkMEFJizdrDUj9zcN/ETi7KOVhKap9a9wLoa3roWSyj9OmL6raXuI4hQMldeeFfLNVWRA090JPYqY9kRU7iIfIrnfLCEc8w20tqsJCSiY/lGXcSv2D4pBIdMLxGpCSV2KlP5HvCxsMBzqdxqFjqGnmtSEHiVMATqW7jGkYI9hTrt8Q3Cb8Tn1GU6pNUbmyxzDcjcPt3o+buYzbu6FkssUPc+ielpqqFs3GqhcjGi3XqWOoh2gWdRB0YKVYX/2OpQSr/HddOutI1FUzckJcsgbsY04aarZjvNvzYUew4r0ZSO/YPTnbq+nZMBe7EOAVEUH56vPPdHBqxU2o8VVo6WsdEoMZzZ8PGc0MjVkkd59WYlErhDVmbWDZYGKeA+EjMcMak9eM2sZaILiXGNBMWtU1i9SzAOFqTExK1TWJFCdcwhLx1Cni9gkxpjdpDsaxbaR5DQnkK+OA14OcrwLaqNH90gIuph61joNwFu7r24ecTgzWz2gkt9Jwnlbyh6pvf/gIWZ5Xgv5EpOyf0vF+V7w/Fqop2oNNAUCjfM0rf+fZIKqP15S+RKapTwNmGauP9Yff1TwwgrUIJpTJS+UqpizPev5kOskZMolJfFNs6YgcxDYQJJWFSKTQPqUTuYl69rHipwMJ5rn8cBDoJJUGpX7wJXG3k2eU8O+d06YuVUq9PNZrpsifqwtl2oSQo9c78UQXw4I/8olWjXPJFvKDmsvZtvT7ASCiUt/PFs52PYQNFqbV6s1TCBmu7pzUtyWGetfcsVEyMVhb0zJFRhX03qetb+UslB7uYtVVOyLJsTkxcoeR7dZu/f897z47AKy81/z3X3BqAz1HYQuI0DAjZJELJukpelze8fPvDQrvUoqJVIzDNiC0XWREkFUqipJKiopXwiR+bj/ygANIIJRS2vOk1at+9Gy610GglyqndeI4qN9IKJUGpjNTpcufjCqZs57VkiK01hU6nPFtcqYVHq0fZRoYwB15QQq+eSy+UxJXqH2sCmYlldIZ1O5OSRKoh0apJvaI7CrbcD35HT1y+F18qMSVaicVnT5EBjByWRJSTJor4PUZgEqmmRKuiZomMxPpQDvvrcaOJXVN2Ufk9llI/XYmWSqHrsVat5kbN0o+m5wBvaQpe7zLc40vlaBSlMlLj5Gj+nwZFK3sIjqWGDLeRE93Sgy+VgypJpBoYrewgPGHj5SBnWtMD5bz6tSf17VPxpZLbjwyLVug9E7ZsFbGOKGgQhunBjzbK4Zjrnbn43+d3vnoM83CV2FIJm9JFYfjRxkhNIpWYVF4FkbbKsfWqcGTGlUEcmGOTYGRu9ajtVcWW7iBwDxUUTNKZVFOjFQ2XXs/LxX0YQFxZBkfroUsvYkvYgAEwYtdjTGsaG604cqnFMs+igLIrDFYK3fKt0dGqHDZcHg3CqIor9nOiWaJLqEed/25ytKoCdtV/eyi2bmEFhnD7cXjUGh6tTSn1aNiwKril3SYM4Ek9PGqNjlblzk8DpHlF9wGWYAiM2mBX1fRo5UZpwX83ia3zeSWDojYYoZfvwWSc1sc/22YQTIpaRqjfcch1YVtChGx3Fjr88txN+dCU5xH8aXKDxTq7t8TJ1g9DJxMZtdIyQ6zJkUq4hV/Y56GTicy1UpjRGzMZ5Wit076IHWdpnwksmDDqZTCOmjDs2B51nv5mXdshzMd4DVawbm2l67qCRgmxijHNuFitR2wuGblgY9fSzy05GOPjHLO9Z7m6Eb0SRqUEYWF2nG81Dl3UqtE7dcZaYqSnb0ZcLq/dtTDfLa8Gib12S8/jSHyIEYXXTgdxj0++aeQNeUmO2JZRqgJYqCfcCTnxakOegCcahbSgf6wihVSSeqnGRFWesVxwzKmCIYRS2a4kuf2D9LaVdFVWpDukW0krqXEbqjB6WnjME6s6lw9jDk8nQhX/x9Q19SKV9G3VVqNRu4kBjV7e+rbqwu/06edS+rZUXjdqXq1rxGxvEjiS97yFkzt9/A2aTNYZNrbwY0lWgclIbOrBFNN/EqUVY9NDhkJ9clkZy43S9J5eRU/35CDUJ9clx7o8O8BcY8ekCvLB4SqfKQsrcQZP+kVBa7kDki2cb2ydUkYfaPSWWNTf58qUXsumtBQmthX25MS+imJuTCFwWouO8WOUkmPFEttc8s/V6UWJbOV/J4waAuvSu7cAAAAASUVORK5CYII=",Mk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJElEQVR4nO2aS0sVYRjHRwzTtmGBlzblLi/RouJ4apFF9QUCo2UoXhd+h26ifhItEEzzCxgGrhKsNqbVNrMg8cAvHnxfeHw7ozPvvEenOn+Yzcw8t/M+9zlRVEUVVRw5gBNAG3AduGOuInBBnkV5BVADdAPjwFtgh3jIs2XgOVAQ2jwYcAoYAT7ijw/AMNBwXCfwEPh6gIK7wDqwaq51cy8OX4AHR2nEGWChjCIlYA4YBC4CdWVo64B2YAiYNzQu5oDGShtx2fxyGtvG35s8+DWZuBIeGptAV6WMuAF8dwROA80BeLcAMw7vLcl0YbTffxLaiF/Ao6BC9uT0ORlvK9jJAGcddxI3uBmEeXl5PY6rbWaOGZOdFpyTqJgRFsAt52TmoiwwKVYjuDsdILvfkd2bpdjpOjEdXNvDdXih5H8G6n2YjDhxkTk7eejQCvxQegz6xIZuO555KjJmei+5xjx5TCg93qfqzUwDaLHrU+wMnynFZypDjSkpPtfSEEu1tXjlo0AoQwRO5nwSJYVxBT+/rIwhw4rPmzRDkc7h7TkwpNOpZbVJiNqc+KjLgSEnnTg5n4RIRlKLjYSCRoGnZS6ZBC2WY94ZTShjU/HqTkJwTxG8SyhkBX+sJJSxqmju/leGFP8C1yqkDfZSToK93ifY/430K3BcYig6fkNGFJ+lNISyTLCYz4Ehi4rP4zSEBSdOmnPUNF5J28bLBtBi/Bjb+Emlx1rWRk0Gq5boiAGcA34qPQZ8mDQ425OZimh7sA4vlfwNr1HXMOplP/qCaxsve8CRfT8Lsxqzi7WQ+tITVOPycm87tWw2BNNGpz3YrqQx7O209ILuE3A6FPMus77UJ9MfhPmf7rSj5HwDOkILKTrGYPZOrYGykw5sa8Thc4enwEuOm2H2ThM+RdMUu0knxVp3CnsSMTGjE4CFVN/Xpi/qkPE0ZmTtNO8sxnzomQ0WEylSs6wx41Ayud9+etuIUdxCnvun2IzG1JvPaLIB9MWaCXK/YhcasgGU5ZnsnQ75PC3zxJJ0scDVKM8AamWKM6tX+4eBgrmXbCiqoooqopD4DZWgAQzdjA4yAAAAAElFTkSuQmCC",Fk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8ElEQVR4nO3dzWoUQRRA4ZFAtiZZJVka9QV8AX/ACApZ5R1EyS4afAPXYdC3EMW1P4+j7nUVOVJM1hm7u5p7uTkf9K4aqjj0DF0zdC8WkiRJkiRJkroDbgCPgFfA2ZrjFHjYzjHFDIAd4DvDfQO2jdI/yGfG+2iQvjHuMt1to/QLctQhyJFB+gU57hDk2CAGqQmvkFwwSC4YJBcMkgsGyQWD5AIcdrgPeRy9jjKALeDPhBi/gZvR6yiF1Zb6WKfR8y8JeAH8GBCijX0ePe/SgA3gFnBvzdHGbETPV5IkSZIkSdcXsA88u/zR6qqjjdmPnm9ZwCbwDvg7YLf3Ali2c6PnXw7wnvGW0fOv+DF1MSFIO3cveh1lsPo+mOpp9DrKwH+d5IJBcsEguWCQXDBILhgkFwySCwbJBW8MS26d7EavoxRWu7ZjnUfPv+r2+3LgldLGnrv9Pm+YvQE/UPkxJUmSJEmSpOgHBxz8x4MD2hgfHDBzjBPg14Dd3p/Ay1kndV0BbxjvdfT8SwG2Jz6eqZ27Fb2OMoAnTHcYvY4y8F8nuWCQXDBILhgkFwySCwbJBYPkgkFywVce5QLc6XCnfhC9jlKATxNifIief9UNxq8jYnzxxZLzvnr1QdtOB96uOdqY+756VZIkSZIkSVrM4h8rzbcQzwZwVgAAAABJRU5ErkJggg==",Uk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABCCAYAAAACPxW5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAAH7SURBVGhD7dq/SsNQFMfxJnYQHBxKUereIV2d3ARxc+sTCILgQ/QpdBKfIEgnH8HZoQ0FZ0cn8c9QuN5fORERmya5f865cL9LuJcM+ZBwh0M6sVgsFoutb4uuIppMJulgMOjNZrMP2jIupauEkvl8fr1cLh/H4/EB7RmX0JW7RKNukiS5pPWzUuo4z/MXWrdOAvAvrswKkhu4DldmjOQEbsKVGSFZTlGclv1+/1bjLmirqp6+7yzLsvuiKN5or3Ycp+jqtNQPfU7rjek3+K5P1y9aNsr3J1r3s/xJ45407mQ6nb7SVqN8Ar3jkC8gCw75ALLhkGsgKw65BLLjkCugCBxyARSDQ7aBonDIJlAcDtkCisQhG0CxOGQKFI1DJkDxONQWGAQOtQEGg0NNgUHhUBNgcDgkafDrpEZDp6IoHrIs29Nv8ZC2KtP37adpejocDvPFYvFJ215rPFULDdlqbBgSsvVcNBSk0eA3BKQREElHGgORZKQVIJKKtAZEEpFWgUga0joQSUI6ASIpSGdAJAHpFIi4kc6BiBPpBYi4kN6AiAPpFYh8IzlGFmo0Gl0ppe5ovTGN3Ol2u9u0bJTJ4Ne0ukOs8H4EKqvxuRr/ysUKRBVIKz/jsQPRP0grOCQCiH4hd23hkKTB7+p01aflkS1cLBaLxWKVdTrf5kX+OXj25HwAAAAASUVORK5CYII=",jk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArElEQVR4nO2STQrCMBBG3wnsmUy68AAiLmq9j1RP1kUn7jyCrVeoMgVFJJBJwV0ffBCyeMwfLPyVsqXwHbULXDT61r9ZMtexd8LDB57fccJQBnbZMi+Mv7JPhNEsLVuKWGWR9Jsbq6TQC0eDbMr6yiHdrnC2Cr3QWCpsrEIXOKWFHXWGsLIuZTDI7qalKHoSqbNxwpYcJmmgj51LtuyNtqRz0s1PCVTmNheYywsBbeNMCHkbYwAAAABJRU5ErkJggg==",Bk="/React-Firebase-Chat-Application/assets/ChimeIn%20(3)-vVYJjvXE.png",zk="/React-Firebase-Chat-Application/assets/logoapp-vvRMceWT.png",Wk="/React-Firebase-Chat-Application/assets/ChimeIn%20(5)-BiPTH-k0.png",yn={avatar_icon:Sk,gallery_icon:Rk,help_icon:Ck,logo_big:Pk,logo_icon:kk,logo:Nk,pic1:xk,pic3:bk,pic4:Dk,profile_img:Ok,search_icon:Lk,send_button:Vk,add_icon:Mk,menu_icon:Fk,arrow_icon:Uk,green_dot:jk,ChimeIn1:Bk,logoapp:zk,applogo:Wk};var Ov={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},n1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[d],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(t1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new Hk;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $k=function(t){const e=t1(t);return n1.encodeByteArray(e,!0)},Wu=function(t){return $k(t).replace(/\./g,"")},r1=function(t){try{return n1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=()=>Gk().__FIREBASE_DEFAULTS__,Qk=()=>{if(typeof process>"u"||typeof Ov>"u")return;const t=Ov.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&r1(t[1]);return e&&JSON.parse(e)},xc=()=>{try{return Kk()||Qk()||Yk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},i1=t=>{var e,n;return(n=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},s1=t=>{const e=i1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},o1=()=>{var t;return(t=xc())===null||t===void 0?void 0:t.config},a1=t=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wu(JSON.stringify(n)),Wu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function Zk(){var t;const e=(t=xc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nP(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rP(){return!Zk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iP(){try{return typeof indexedDB=="object"}catch{return!1}}function sP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oP,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ua.prototype.create)}}class Ua{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?aP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,l,r)}}function aP(t,e){return t.replace(lP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lP=/\{\$([^}]+)}/g;function uP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ea(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lv(s)&&Lv(o)){if(!Ea(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Po(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function No(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cP(t,e){const n=new hP(t,e);return n.subscribe.bind(n)}class hP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=id),i.error===void 0&&(i.error=id),i.complete===void 0&&(i.complete=id);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function id(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mP(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pP(t){return t===ri?void 0:t}function mP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const yP={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},vP=se.INFO,_P={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},EP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_P[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class um{constructor(e){this.name=e,this._logLevel=vP,this._logHandler=EP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const wP=(t,e)=>e.some(n=>t instanceof n);let Vv,Mv;function TP(){return Vv||(Vv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IP(){return Mv||(Mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u1=new WeakMap,wf=new WeakMap,c1=new WeakMap,sd=new WeakMap,cm=new WeakMap;function AP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&u1.set(n,t)}).catch(()=>{}),cm.set(e,t),e}function SP(t){if(wf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wf.set(t,e)}let Tf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||c1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RP(t){Tf=t(Tf)}function CP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(od(this),e,...n);return c1.set(r,e.sort?e.sort():[e]),Dr(r)}:IP().includes(t)?function(...e){return t.apply(od(this),e),Dr(u1.get(this))}:function(...e){return Dr(t.apply(od(this),e))}}function kP(t){return typeof t=="function"?CP(t):(t instanceof IDBTransaction&&SP(t),wP(t,TP())?new Proxy(t,Tf):t)}function Dr(t){if(t instanceof IDBRequest)return AP(t);if(sd.has(t))return sd.get(t);const e=kP(t);return e!==t&&(sd.set(t,e),cm.set(e,t)),e}const od=t=>cm.get(t);function PP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dr(o.result),u.oldVersion,u.newVersion,Dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const NP=["get","getKey","getAll","getAllKeys","count"],xP=["put","add","delete","clear"],ad=new Map;function Fv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ad.get(e))return ad.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ad.set(e,s),s}RP(t=>({...t,get:(e,n,r)=>Fv(e,n)||t.get(e,n,r),has:(e,n)=>!!Fv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function DP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const If="@firebase/app",Uv="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new um("@firebase/app"),OP="@firebase/app-compat",LP="@firebase/analytics-compat",VP="@firebase/analytics",MP="@firebase/app-check-compat",FP="@firebase/app-check",UP="@firebase/auth",jP="@firebase/auth-compat",BP="@firebase/database",zP="@firebase/database-compat",WP="@firebase/functions",qP="@firebase/functions-compat",HP="@firebase/installations",$P="@firebase/installations-compat",GP="@firebase/messaging",KP="@firebase/messaging-compat",QP="@firebase/performance",YP="@firebase/performance-compat",XP="@firebase/remote-config",JP="@firebase/remote-config-compat",ZP="@firebase/storage",eN="@firebase/storage-compat",tN="@firebase/firestore",nN="@firebase/vertexai-preview",rN="@firebase/firestore-compat",iN="firebase",sN="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="[DEFAULT]",oN={[If]:"fire-core",[OP]:"fire-core-compat",[VP]:"fire-analytics",[LP]:"fire-analytics-compat",[FP]:"fire-app-check",[MP]:"fire-app-check-compat",[UP]:"fire-auth",[jP]:"fire-auth-compat",[BP]:"fire-rtdb",[zP]:"fire-rtdb-compat",[WP]:"fire-fn",[qP]:"fire-fn-compat",[HP]:"fire-iid",[$P]:"fire-iid-compat",[GP]:"fire-fcm",[KP]:"fire-fcm-compat",[QP]:"fire-perf",[YP]:"fire-perf-compat",[XP]:"fire-rc",[JP]:"fire-rc-compat",[ZP]:"fire-gcs",[eN]:"fire-gcs-compat",[tN]:"fire-fst",[rN]:"fire-fst-compat",[nN]:"fire-vertex","fire-js":"fire-js",[iN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map,aN=new Map,Sf=new Map;function jv(t,e){try{t.container.addComponent(e)}catch(n){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ii(t){const e=t.name;if(Sf.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;Sf.set(e,t);for(const n of qu.values())jv(n,t);for(const n of aN.values())jv(n,t);return!0}function bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new Ua("app","Firebase",lN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=sN;function h1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Af,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Or.create("bad-app-name",{appName:String(i)});if(n||(n=o1()),!n)throw Or.create("no-options");const s=qu.get(i);if(s){if(Ea(n,s.options)&&Ea(r,s.config))return s;throw Or.create("duplicate-app",{appName:i})}const o=new gP(i);for(const u of Sf.values())o.addComponent(u);const l=new uN(n,r,o);return qu.set(i,l),l}function hm(t=Af){const e=qu.get(t);if(!e&&t===Af&&o1())return h1();if(!e)throw Or.create("no-app",{appName:t});return e}function Sn(t,e,n){var r;let i=(r=oN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(l.join(" "));return}Ii(new Fr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="firebase-heartbeat-database",hN=1,wa="firebase-heartbeat-store";let ld=null;function d1(){return ld||(ld=PP(cN,hN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),ld}async function dN(t){try{const n=(await d1()).transaction(wa),r=await n.objectStore(wa).get(f1(t));return await n.done,r}catch(e){if(e instanceof Dn)Ti.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ti.warn(n.message)}}}async function Bv(t,e){try{const r=(await d1()).transaction(wa,"readwrite");await r.objectStore(wa).put(e,f1(t)),await r.done}catch(n){if(n instanceof Dn)Ti.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ti.warn(r.message)}}}function f1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=1024,pN=30*24*60*60*1e3;class mN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=pN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zv(),{heartbeatsToSend:r,unsentEntries:i}=gN(this._heartbeatsCache.heartbeats),s=Wu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zv(){return new Date().toISOString().substring(0,10)}function gN(t,e=fN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iP()?sP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wv(t){return Wu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){Ii(new Fr("platform-logger",e=>new bP(e),"PRIVATE")),Ii(new Fr("heartbeat",e=>new mN(e),"PRIVATE")),Sn(If,Uv,t),Sn(If,Uv,"esm2017"),Sn("fire-js","")}vN("");var _N="firebase",EN="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(_N,EN,"app");function dm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function p1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wN=p1,m1=new Ua("auth","Firebase",p1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=new um("@firebase/auth");function TN(t,...e){Hu.logLevel<=se.WARN&&Hu.warn(`Auth (${Mi}): ${t}`,...e)}function ou(t,...e){Hu.logLevel<=se.ERROR&&Hu.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw fm(t,...e)}function Rn(t,...e){return fm(t,...e)}function g1(t,e,n){const r=Object.assign(Object.assign({},wN()),{[e]:n});return new Ua("auth","Firebase",r).create(e,{appName:t.name})}function qn(t){return g1(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return m1.create(t,...e)}function Y(t,e,...n){if(!t)throw fm(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ou(e),new Error(e)}function Xn(t,e){t||jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IN(){return qv()==="http:"||qv()==="https:"}function qv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IN()||eP()||"connection"in navigator)?navigator.onLine:!0}function SN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=Jk()||tP()}get(){return AN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=new Ba(3e4,6e4);function Kr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qr(t,e,n,r,i={}){return v1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ja(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),y1.fetch()(_1(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function v1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RN),e);try{const i=new PN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ml(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ml(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ml(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw g1(t,d,c);hn(t,d)}}catch(i){if(i instanceof Dn)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function za(t,e,n,r,i={}){const s=await Qr(t,e,n,r,i);return"mfaPendingCredential"in s&&hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?pm(t.config,i):`${t.config.apiScheme}://${i}`}function kN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),CN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}function Hv(t){return t!==void 0&&t.enterprise!==void 0}class NN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function xN(t,e){return Qr(t,"GET","/v2/recaptchaConfig",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e){return Qr(t,"POST","/v1/accounts:delete",e)}async function E1(t,e){return Qr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DN(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=mm(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$o(ud(i.auth_time)),issuedAtTime:$o(ud(i.iat)),expirationTime:$o(ud(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ud(t){return Number(t)*1e3}function mm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ou("JWT malformed, contained fewer than 3 sections"),null;try{const i=r1(n);return i?JSON.parse(i):(ou("Failed to decode base64 JWT payload"),null)}catch(i){return ou("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $v(t){const e=mm(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&ON(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ON({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$o(this.lastLoginAt),this.creationTime=$o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ta(t,E1(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?w1(s.providerUserInfo):[],l=MN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Cf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function VN(t){const e=Pe(t);await $u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function w1(t){return t.map(e=>{var{providerId:n}=e,r=dm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,e){const n=await v1(t,{},async()=>{const r=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_1(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",y1.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UN(t,e){return Qr(t,"POST","/v2/accounts:revokeToken",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$v(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=$v(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await FN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ws;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ta(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DN(this,e)}reload(){return VN(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await Ta(this,bN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:N,isAnonymous:L,providerData:M,stsTokenManager:T}=n;Y(E&&T,e,"internal-error");const g=ws.fromJSON(this.name,T);Y(typeof E=="string",e,"internal-error"),lr(p,e.name),lr(m,e.name),Y(typeof N=="boolean",e,"internal-error"),Y(typeof L=="boolean",e,"internal-error"),lr(I,e.name),lr(S,e.name),lr(k,e.name),lr(C,e.name),lr(v,e.name),lr(y,e.name);const w=new Bn({uid:E,auth:e,email:m,emailVerified:N,displayName:p,isAnonymous:L,photoURL:S,phoneNumber:I,tenantId:k,stsTokenManager:g,createdAt:v,lastLoginAt:y});return M&&Array.isArray(M)&&(w.providerData=M.map(A=>Object.assign({},A))),C&&(w._redirectEventId=C),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ws;i.updateFromServerResponse(n);const s=new Bn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $u(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?w1(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ws;l.updateFromIdToken(r);const u=new Bn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Cf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=new Map;function zn(t){Xn(t instanceof Function,"Expected a class definition");let e=Gv.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}T1.type="NONE";const Kv=T1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=au(this.userKey,i.apiKey,s),this.fullPersistenceKey=au("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(zn(Kv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||zn(Kv);const o=au(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Bn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ts(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ts(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(I1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C1(e))return"Blackberry";if(k1(e))return"Webos";if(gm(e))return"Safari";if((e.includes("chrome/")||A1(e))&&!e.includes("edge/"))return"Chrome";if(R1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function I1(t=ot()){return/firefox\//i.test(t)}function gm(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A1(t=ot()){return/crios\//i.test(t)}function S1(t=ot()){return/iemobile/i.test(t)}function R1(t=ot()){return/android/i.test(t)}function C1(t=ot()){return/blackberry/i.test(t)}function k1(t=ot()){return/webos/i.test(t)}function Dc(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jN(t=ot()){var e;return Dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BN(){return nP()&&document.documentMode===10}function P1(t=ot()){return Dc(t)||R1(t)||k1(t)||C1(t)||/windows phone/i.test(t)||S1(t)}function zN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t,e=[]){let n;switch(t){case"Browser":n=Qv(ot());break;case"Worker":n=`${Qv(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN(t,e={}){return Qr(t,"GET","/v2/passwordPolicy",Kr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=6;class $N{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yv(this),this.idTokenSubscription=new Yv(this),this.beforeStateQueue=new WN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await E1(this,{idToken:e}),r=await Bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(qn(this));const n=e?Pe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qN(this),n=new $N(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ua("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=N1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fi(t){return Pe(t)}class Yv{constructor(e){this.auth=e,this.observer=null,this.addObserver=cP(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KN(t){Oc=t}function x1(t){return Oc.loadJS(t)}function QN(){return Oc.recaptchaEnterpriseScript}function YN(){return Oc.gapiScript}function XN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const JN="recaptcha-enterprise",ZN="NO_RECAPTCHA";class e2{constructor(e){this.type=JN,this.auth=Fi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{xN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new NN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Hv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ZN)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Hv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=QN();u.length!==0&&(u+=l),x1(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Xv(t,e,n,r=!1){const i=new e2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function kf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Xv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t,e){const n=bc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ea(s,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function n2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function r2(t,e,n){const r=Fi(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=b1(e),{host:o,port:l}=i2(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),s2()}function b1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function i2(t){const e=b1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Jv(o)}}}function Jv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function s2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function o2(t,e){return Qr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(t,e){return za(t,"POST","/v1/accounts:signInWithPassword",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}async function u2(t,e){return za(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends ym{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ia(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ia(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kf(e,n,"signInWithPassword",a2);case"emailLink":return l2(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kf(e,r,"signUpPassword",o2);case"emailLink":return u2(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e){return za(t,"POST","/v1/accounts:signInWithIdp",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2="http://localhost";class Ai extends ym{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:c2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ja(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d2(t){const e=Po(No(t)).link,n=e?Po(No(e)).deep_link_id:null,r=Po(No(t)).deep_link_id;return(r?Po(No(r)).link:null)||r||n||e||t}class vm{constructor(e){var n,r,i,s,o,l;const u=Po(No(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=h2((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=d2(e);try{return new vm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.providerId=Gs.PROVIDER_ID}static credential(e,n){return Ia._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vm.parseLink(n);return Y(r,"argument-error"),Ia._fromEmailAndCode(e,r.code,r.tenantId)}}Gs.PROVIDER_ID="password";Gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends D1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Wa{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ai._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Wa{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Wa{constructor(){super("twitter.com")}static credential(e,n){return Ai._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(t,e){return za(t,"POST","/v1/accounts:signUp",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bn._fromIdTokenResponse(e,r,i),o=Zv(r);return new Si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zv(r);return new Si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends Dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gu(e,n,r,i)}}function O1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gu._fromErrorAndOperation(t,s,e,r):s})}async function p2(t,e,n=!1){const r=await Ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Si._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m2(t,e,n=!1){const{auth:r}=t;if(vn(r.app))return Promise.reject(qn(r));const i="reauthenticate";try{const s=await Ta(t,O1(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=mm(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Si._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(t,e,n=!1){if(vn(t.app))return Promise.reject(qn(t));const r="signIn",i=await O1(t,r,e),s=await Si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function g2(t,e){return L1(Fi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(t){const e=Fi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function y2(t,e,n){if(vn(t.app))return Promise.reject(qn(t));const r=Fi(t),o=await kf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",f2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&V1(t),u}),l=await Si._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function v2(t,e,n){return vn(t.app)?Promise.reject(qn(t)):g2(Pe(t),Gs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&V1(t),r})}function _2(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function E2(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function M1(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function w2(t){return Pe(t).signOut()}const Ku="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ku,"1"),this.storage.removeItem(Ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(){const t=ot();return gm(t)||Dc(t)}const I2=1e3,A2=10;class U1 extends F1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=T2()&&zN(),this.fallbackToPolling=P1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);BN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,A2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},I2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}U1.type="LOCAL";const S2=U1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1 extends F1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}j1.type="SESSION";const B1=j1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await R2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=_m("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function k2(t){Cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function P2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x2(){return z1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="firebaseLocalStorageDb",b2=1,Qu="firebaseLocalStorage",q1="fbase_key";class qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vc(t,e){return t.transaction([Qu],e?"readwrite":"readonly").objectStore(Qu)}function D2(){const t=indexedDB.deleteDatabase(W1);return new qa(t).toPromise()}function Pf(){const t=indexedDB.open(W1,b2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qu,{keyPath:q1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qu)?e(r):(r.close(),await D2(),e(await Pf()))})})}async function e_(t,e,n){const r=Vc(t,!0).put({[q1]:e,value:n});return new qa(r).toPromise()}async function O2(t,e){const n=Vc(t,!1).get(e),r=await new qa(n).toPromise();return r===void 0?null:r.value}function t_(t,e){const n=Vc(t,!0).delete(e);return new qa(n).toPromise()}const L2=800,V2=3;class H1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>V2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return z1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lc._getInstance(x2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await P2(),!this.activeServiceWorker)return;this.sender=new C2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pf();return await e_(e,Ku,"1"),await t_(e,Ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>e_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>O2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>t_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vc(i,!1).getAll();return new qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),L2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H1.type="LOCAL";const M2=H1;new Ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t,e){return e?zn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em extends ym{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function U2(t){return L1(t.auth,new Em(t),t.bypassAuthState)}function j2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),m2(n,new Em(t),t.bypassAuthState)}async function B2(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),p2(n,new Em(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return U2;case"linkViaPopup":case"linkViaRedirect":return B2;case"reauthViaPopup":case"reauthViaRedirect":return j2;default:hn(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=new Ba(2e3,1e4);class ds extends $1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=_m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,z2.get())};e()}}ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2="pendingRedirect",lu=new Map;class q2 extends $1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=lu.get(this.auth._key());if(!e){try{const r=await H2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}lu.set(this.auth._key(),e)}return this.bypassAuthState||lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H2(t,e){const n=K2(e),r=G2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $2(t,e){lu.set(t._key(),e)}function G2(t){return zn(t._redirectPersistence)}function K2(t){return au(W2,t.config.apiKey,t.name)}async function Q2(t,e,n=!1){if(vn(t.app))return Promise.reject(qn(t));const r=Fi(t),i=F2(r,e),o=await new q2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=10*60*1e3;class X2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!J2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!G1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Y2&&this.cachedEventUids.clear(),this.cachedEventUids.has(n_(e))}saveEventToCache(e){this.cachedEventUids.add(n_(e)),this.lastProcessedEventTime=Date.now()}}function n_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function G1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function J2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return G1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(t,e={}){return Qr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tx=/^https?/;async function nx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Z2(t);for(const n of e)try{if(rx(n))return}catch{}hn(t,"unauthorized-domain")}function rx(t){const e=Rf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tx.test(n))return!1;if(ex.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=new Ba(3e4,6e4);function r_(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sx(t){return new Promise((e,n)=>{var r,i,s;function o(){r_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{r_(),n(Rn(t,"network-request-failed"))},timeout:ix.get()})}if(!((i=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Cn().gapi)===null||s===void 0)&&s.load)o();else{const l=XN("iframefcb");return Cn()[l]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},x1(`${YN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw uu=null,e})}let uu=null;function ox(t){return uu=uu||sx(t),uu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=new Ba(5e3,15e3),lx="__/auth/iframe",ux="emulator/auth/iframe",cx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dx(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pm(e,ux):`https://${t.config.authDomain}/${lx}`,r={apiKey:e.apiKey,appName:t.name,v:Mi},i=hx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ja(r).slice(1)}`}async function fx(t){const e=await ox(t),n=Cn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:dx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),l=Cn().setTimeout(()=>{s(o)},ax.get());function u(){Cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mx=500,gx=600,yx="_blank",vx="http://localhost";class i_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _x(t,e,n,r=mx,i=gx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},px),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ot().toLowerCase();n&&(l=A1(c)?yx:n),I1(c)&&(e=e||vx,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[I,S])=>`${m}${I}=${S},`,"");if(jN(c)&&l!=="_self")return Ex(e||"",l),new i_(null);const p=window.open(e||"",l,d);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new i_(p)}function Ex(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx="__/auth/handler",Tx="emulator/auth/handler",Ix=encodeURIComponent("fac");async function s_(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mi,eventId:i};if(e instanceof D1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Wa){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Ix}=${encodeURIComponent(u)}`:"";return`${Ax(t)}?${ja(l).slice(1)}${c}`}function Ax({config:t}){return t.emulator?pm(t,Tx):`https://${t.authDomain}/${wx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="webStorageSupport";class Sx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=B1,this._completeRedirectFn=Q2,this._overrideRedirectResult=$2}async _openPopup(e,n,r,i){var s;Xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await s_(e,n,r,Rf(),i);return _x(e,o,_m())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await s_(e,n,r,Rf(),i);return k2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fx(e),r=new X2(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cd,{type:cd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[cd];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return P1()||gm()||Dc()}}const Rx=Sx;var o_="@firebase/auth",a_="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Px(t){Ii(new Fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:N1(t)},c=new GN(r,i,s,u);return n2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ii(new Fr("auth-internal",e=>{const n=Fi(e.getProvider("auth").getImmediate());return(r=>new Cx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(o_,a_,kx(t)),Sn(o_,a_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=5*60,xx=a1("authIdTokenMaxAge")||Nx;let l_=null;const bx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xx)return;const i=n==null?void 0:n.token;l_!==i&&(l_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dx(t=hm()){const e=bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=t2(t,{popupRedirectResolver:Rx,persistence:[M2,S2,B1]}),r=a1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=bx(s.toString());E2(n,o,()=>o(n.currentUser)),_2(n,l=>o(l))}}const i=i1("auth");return i&&r2(n,`http://${i}`),n}function Ox(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ox().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Px("Browser");var u_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,K1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function w(){}w.prototype=g.prototype,T.D=g.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(A,P,x){for(var R=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)R[pe-2]=arguments[pe];return g.prototype[P].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,g,w){w||(w=0);var A=Array(16);if(typeof g=="string")for(var P=0;16>P;++P)A[P]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(P=0;16>P;++P)A[P]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=T.g[0],w=T.g[1],P=T.g[2];var x=T.g[3],R=g+(x^w&(P^x))+A[0]+3614090360&4294967295;g=w+(R<<7&4294967295|R>>>25),R=x+(P^g&(w^P))+A[1]+3905402710&4294967295,x=g+(R<<12&4294967295|R>>>20),R=P+(w^x&(g^w))+A[2]+606105819&4294967295,P=x+(R<<17&4294967295|R>>>15),R=w+(g^P&(x^g))+A[3]+3250441966&4294967295,w=P+(R<<22&4294967295|R>>>10),R=g+(x^w&(P^x))+A[4]+4118548399&4294967295,g=w+(R<<7&4294967295|R>>>25),R=x+(P^g&(w^P))+A[5]+1200080426&4294967295,x=g+(R<<12&4294967295|R>>>20),R=P+(w^x&(g^w))+A[6]+2821735955&4294967295,P=x+(R<<17&4294967295|R>>>15),R=w+(g^P&(x^g))+A[7]+4249261313&4294967295,w=P+(R<<22&4294967295|R>>>10),R=g+(x^w&(P^x))+A[8]+1770035416&4294967295,g=w+(R<<7&4294967295|R>>>25),R=x+(P^g&(w^P))+A[9]+2336552879&4294967295,x=g+(R<<12&4294967295|R>>>20),R=P+(w^x&(g^w))+A[10]+4294925233&4294967295,P=x+(R<<17&4294967295|R>>>15),R=w+(g^P&(x^g))+A[11]+2304563134&4294967295,w=P+(R<<22&4294967295|R>>>10),R=g+(x^w&(P^x))+A[12]+1804603682&4294967295,g=w+(R<<7&4294967295|R>>>25),R=x+(P^g&(w^P))+A[13]+4254626195&4294967295,x=g+(R<<12&4294967295|R>>>20),R=P+(w^x&(g^w))+A[14]+2792965006&4294967295,P=x+(R<<17&4294967295|R>>>15),R=w+(g^P&(x^g))+A[15]+1236535329&4294967295,w=P+(R<<22&4294967295|R>>>10),R=g+(P^x&(w^P))+A[1]+4129170786&4294967295,g=w+(R<<5&4294967295|R>>>27),R=x+(w^P&(g^w))+A[6]+3225465664&4294967295,x=g+(R<<9&4294967295|R>>>23),R=P+(g^w&(x^g))+A[11]+643717713&4294967295,P=x+(R<<14&4294967295|R>>>18),R=w+(x^g&(P^x))+A[0]+3921069994&4294967295,w=P+(R<<20&4294967295|R>>>12),R=g+(P^x&(w^P))+A[5]+3593408605&4294967295,g=w+(R<<5&4294967295|R>>>27),R=x+(w^P&(g^w))+A[10]+38016083&4294967295,x=g+(R<<9&4294967295|R>>>23),R=P+(g^w&(x^g))+A[15]+3634488961&4294967295,P=x+(R<<14&4294967295|R>>>18),R=w+(x^g&(P^x))+A[4]+3889429448&4294967295,w=P+(R<<20&4294967295|R>>>12),R=g+(P^x&(w^P))+A[9]+568446438&4294967295,g=w+(R<<5&4294967295|R>>>27),R=x+(w^P&(g^w))+A[14]+3275163606&4294967295,x=g+(R<<9&4294967295|R>>>23),R=P+(g^w&(x^g))+A[3]+4107603335&4294967295,P=x+(R<<14&4294967295|R>>>18),R=w+(x^g&(P^x))+A[8]+1163531501&4294967295,w=P+(R<<20&4294967295|R>>>12),R=g+(P^x&(w^P))+A[13]+2850285829&4294967295,g=w+(R<<5&4294967295|R>>>27),R=x+(w^P&(g^w))+A[2]+4243563512&4294967295,x=g+(R<<9&4294967295|R>>>23),R=P+(g^w&(x^g))+A[7]+1735328473&4294967295,P=x+(R<<14&4294967295|R>>>18),R=w+(x^g&(P^x))+A[12]+2368359562&4294967295,w=P+(R<<20&4294967295|R>>>12),R=g+(w^P^x)+A[5]+4294588738&4294967295,g=w+(R<<4&4294967295|R>>>28),R=x+(g^w^P)+A[8]+2272392833&4294967295,x=g+(R<<11&4294967295|R>>>21),R=P+(x^g^w)+A[11]+1839030562&4294967295,P=x+(R<<16&4294967295|R>>>16),R=w+(P^x^g)+A[14]+4259657740&4294967295,w=P+(R<<23&4294967295|R>>>9),R=g+(w^P^x)+A[1]+2763975236&4294967295,g=w+(R<<4&4294967295|R>>>28),R=x+(g^w^P)+A[4]+1272893353&4294967295,x=g+(R<<11&4294967295|R>>>21),R=P+(x^g^w)+A[7]+4139469664&4294967295,P=x+(R<<16&4294967295|R>>>16),R=w+(P^x^g)+A[10]+3200236656&4294967295,w=P+(R<<23&4294967295|R>>>9),R=g+(w^P^x)+A[13]+681279174&4294967295,g=w+(R<<4&4294967295|R>>>28),R=x+(g^w^P)+A[0]+3936430074&4294967295,x=g+(R<<11&4294967295|R>>>21),R=P+(x^g^w)+A[3]+3572445317&4294967295,P=x+(R<<16&4294967295|R>>>16),R=w+(P^x^g)+A[6]+76029189&4294967295,w=P+(R<<23&4294967295|R>>>9),R=g+(w^P^x)+A[9]+3654602809&4294967295,g=w+(R<<4&4294967295|R>>>28),R=x+(g^w^P)+A[12]+3873151461&4294967295,x=g+(R<<11&4294967295|R>>>21),R=P+(x^g^w)+A[15]+530742520&4294967295,P=x+(R<<16&4294967295|R>>>16),R=w+(P^x^g)+A[2]+3299628645&4294967295,w=P+(R<<23&4294967295|R>>>9),R=g+(P^(w|~x))+A[0]+4096336452&4294967295,g=w+(R<<6&4294967295|R>>>26),R=x+(w^(g|~P))+A[7]+1126891415&4294967295,x=g+(R<<10&4294967295|R>>>22),R=P+(g^(x|~w))+A[14]+2878612391&4294967295,P=x+(R<<15&4294967295|R>>>17),R=w+(x^(P|~g))+A[5]+4237533241&4294967295,w=P+(R<<21&4294967295|R>>>11),R=g+(P^(w|~x))+A[12]+1700485571&4294967295,g=w+(R<<6&4294967295|R>>>26),R=x+(w^(g|~P))+A[3]+2399980690&4294967295,x=g+(R<<10&4294967295|R>>>22),R=P+(g^(x|~w))+A[10]+4293915773&4294967295,P=x+(R<<15&4294967295|R>>>17),R=w+(x^(P|~g))+A[1]+2240044497&4294967295,w=P+(R<<21&4294967295|R>>>11),R=g+(P^(w|~x))+A[8]+1873313359&4294967295,g=w+(R<<6&4294967295|R>>>26),R=x+(w^(g|~P))+A[15]+4264355552&4294967295,x=g+(R<<10&4294967295|R>>>22),R=P+(g^(x|~w))+A[6]+2734768916&4294967295,P=x+(R<<15&4294967295|R>>>17),R=w+(x^(P|~g))+A[13]+1309151649&4294967295,w=P+(R<<21&4294967295|R>>>11),R=g+(P^(w|~x))+A[4]+4149444226&4294967295,g=w+(R<<6&4294967295|R>>>26),R=x+(w^(g|~P))+A[11]+3174756917&4294967295,x=g+(R<<10&4294967295|R>>>22),R=P+(g^(x|~w))+A[2]+718787259&4294967295,P=x+(R<<15&4294967295|R>>>17),R=w+(x^(P|~g))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+x&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var w=g-this.blockSize,A=this.B,P=this.h,x=0;x<g;){if(P==0)for(;x<=w;)i(this,T,x),x+=this.blockSize;if(typeof T=="string"){for(;x<g;)if(A[P++]=T.charCodeAt(x++),P==this.blockSize){i(this,A),P=0;break}}else for(;x<g;)if(A[P++]=T[x++],P==this.blockSize){i(this,A),P=0;break}}this.h=P,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var w=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=w&255,w/=256;for(this.u(T),T=Array(16),g=w=0;4>g;++g)for(var A=0;32>A;A+=8)T[w++]=this.g[g]>>>A&255;return T};function s(T,g){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=g(T)}function o(T,g){this.h=g;for(var w=[],A=!0,P=T.length-1;0<=P;P--){var x=T[P]|0;A&&x==g||(w[P]=x,A=!1)}this.g=w}var l={};function u(T){return-128<=T&&128>T?s(T,function(g){return new o([g|0],0>g?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return C(c(-T));for(var g=[],w=1,A=0;T>=w;A++)g[A]=T/w|0,w*=4294967296;return new o(g,0)}function d(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return C(d(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(g,8)),A=p,P=0;P<T.length;P+=8){var x=Math.min(8,T.length-P),R=parseInt(T.substring(P,P+x),g);8>x?(x=c(Math.pow(g,x)),A=A.j(x).add(c(R))):(A=A.j(w),A=A.add(c(R)))}return A}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-C(this).m();for(var T=0,g=1,w=0;w<this.g.length;w++){var A=this.i(w);T+=(0<=A?A:4294967296+A)*g,g*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(k(this))return"-"+C(this).toString(T);for(var g=c(Math.pow(T,6)),w=this,A="";;){var P=N(w,g).g;w=v(w,P.j(g));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=P,S(w))return x+A;for(;6>x.length;)x="0"+x;A=x+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=v(this,T),k(T)?-1:S(T)?0:1};function C(T){for(var g=T.g.length,w=[],A=0;A<g;A++)w[A]=~T.g[A];return new o(w,~T.h).add(m)}t.abs=function(){return k(this)?C(this):this},t.add=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],A=0,P=0;P<=g;P++){var x=A+(this.i(P)&65535)+(T.i(P)&65535),R=(x>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);A=R>>>16,x&=65535,R&=65535,w[P]=R<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function v(T,g){return T.add(C(g))}t.j=function(T){if(S(this)||S(T))return p;if(k(this))return k(T)?C(this).j(C(T)):C(C(this).j(T));if(k(T))return C(this.j(C(T)));if(0>this.l(I)&&0>T.l(I))return c(this.m()*T.m());for(var g=this.g.length+T.g.length,w=[],A=0;A<2*g;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var P=0;P<T.g.length;P++){var x=this.i(A)>>>16,R=this.i(A)&65535,pe=T.i(P)>>>16,Ye=T.i(P)&65535;w[2*A+2*P]+=R*Ye,y(w,2*A+2*P),w[2*A+2*P+1]+=x*Ye,y(w,2*A+2*P+1),w[2*A+2*P+1]+=R*pe,y(w,2*A+2*P+1),w[2*A+2*P+2]+=x*pe,y(w,2*A+2*P+2)}for(A=0;A<g;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=g;A<2*g;A++)w[A]=0;return new o(w,0)};function y(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function E(T,g){this.g=T,this.h=g}function N(T,g){if(S(g))throw Error("division by zero");if(S(T))return new E(p,p);if(k(T))return g=N(C(T),g),new E(C(g.g),C(g.h));if(k(g))return g=N(T,C(g)),new E(C(g.g),g.h);if(30<T.g.length){if(k(T)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var w=m,A=g;0>=A.l(T);)w=L(w),A=L(A);var P=M(w,1),x=M(A,1);for(A=M(A,2),w=M(w,2);!S(A);){var R=x.add(A);0>=R.l(T)&&(P=P.add(w),x=R),A=M(A,1),w=M(w,1)}return g=v(T,P.j(g)),new E(P,g)}for(P=p;0<=T.l(g);){for(w=Math.max(1,Math.floor(T.m()/g.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),x=c(w),R=x.j(g);k(R)||0<R.l(T);)w-=A,x=c(w),R=x.j(g);S(x)&&(x=m),P=P.add(x),T=v(T,R)}return new E(P,T)}t.A=function(T){return N(this,T).h},t.and=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)&T.i(A);return new o(w,this.h&T.h)},t.or=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)|T.i(A);return new o(w,this.h|T.h)},t.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],A=0;A<g;A++)w[A]=this.i(A)^T.i(A);return new o(w,this.h^T.h)};function L(T){for(var g=T.g.length+1,w=[],A=0;A<g;A++)w[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(w,T.h)}function M(T,g){var w=g>>5;g%=32;for(var A=T.g.length-w,P=[],x=0;x<A;x++)P[x]=0<g?T.i(x+w)>>>g|T.i(x+w+1)<<32-g:T.i(x+w);return new o(P,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,K1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,di=o}).apply(typeof u_<"u"?u_:typeof self<"u"?self:typeof window<"u"?window:{});var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Q1,Y1,xo,X1,cu,Nf,J1,Z1,eT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fl=="object"&&Fl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var b=a[_];if(!(b in f))break e;f=f[b]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,_=!1,b={next:function(){if(!_&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,_),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function I(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,b,D){for(var B=Array(arguments.length-2),me=2;me<arguments.length;me++)B[me-2]=arguments[me];return h.prototype[b].apply(_,B)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(u(_)){const b=a.length||0,D=_.length||0;a.length=b+D;for(let B=0;B<D;B++)a[b+B]=_[B]}else a.push(_)}}class v{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var L=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function T(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function g(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(f in _)a[f]=_[f];for(let D=0;D<w.length;D++)f=w[D],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function x(a){l.setTimeout(()=>{throw a},0)}function R(){var a=K;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class pe{constructor(){this.h=this.g=null}add(h,f){const _=Ye.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var Ye=new v(()=>new Kt,a=>a.reset());class Kt{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,z=!1,K=new pe,Q=()=>{const a=l.Promise.resolve(void 0);Be=()=>{a.then(ce)}};var ce=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(f){x(f)}var h=Ye;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var Oe=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Ve(a,h){if(oe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{N(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Xe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ve.aa.h.call(this)}}S(Ve,oe);var Xe={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),ah=0;function PA(a,h,f,_,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=b,this.key=++ah,this.da=this.fa=!1}function rl(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function il(a){this.src=a,this.g={},this.h=0}il.prototype.add=function(a,h,f,_,b){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=uh(a,h,_,b);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new PA(h,this.src,D,!!_,b),h.fa=f,a.push(h)),h};function lh(a,h){var f=h.type;if(f in a.g){var _=a.g[f],b=Array.prototype.indexOf.call(_,h,void 0),D;(D=0<=b)&&Array.prototype.splice.call(_,b,1),D&&(rl(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function uh(a,h,f,_){for(var b=0;b<a.length;++b){var D=a[b];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==_)return b}return-1}var ch="closure_lm_"+(1e6*Math.random()|0),hh={};function vg(a,h,f,_,b){if(Array.isArray(h)){for(var D=0;D<h.length;D++)vg(a,h[D],f,_,b);return null}return f=wg(f),a&&a[_t]?a.K(h,f,c(_)?!!_.capture:!!_,b):NA(a,h,f,!1,_,b)}function NA(a,h,f,_,b,D){if(!h)throw Error("Invalid event type");var B=c(b)?!!b.capture:!!b,me=fh(a);if(me||(a[ch]=me=new il(a)),f=me.add(h,f,_,B,D),f.proxy)return f;if(_=xA(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Oe||(b=B),b===void 0&&(b=!1),a.addEventListener(h.toString(),_,b);else if(a.attachEvent)a.attachEvent(Eg(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function xA(){function a(f){return h.call(a.src,a.listener,f)}const h=bA;return a}function _g(a,h,f,_,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)_g(a,h[D],f,_,b);else _=c(_)?!!_.capture:!!_,f=wg(f),a&&a[_t]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=uh(D,f,_,b),-1<f&&(rl(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=fh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=uh(h,f,_,b)),(f=-1<a?h[a]:null)&&dh(f))}function dh(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[_t])lh(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(Eg(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=fh(h))?(lh(f,a),f.h==0&&(f.src=null,h[ch]=null)):rl(a)}}}function Eg(a){return a in hh?hh[a]:hh[a]="on"+a}function bA(a,h){if(a.da)a=!0;else{h=new Ve(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&dh(a),a=f.call(_,h)}return a}function fh(a){return a=a[ch],a instanceof il?a:null}var ph="__closure_events_fn_"+(1e9*Math.random()>>>0);function wg(a){return typeof a=="function"?a:(a[ph]||(a[ph]=function(h){return a.handleEvent(h)}),a[ph])}function lt(){ee.call(this),this.i=new il(this),this.M=this,this.F=null}S(lt,ee),lt.prototype[_t]=!0,lt.prototype.removeEventListener=function(a,h,f,_){_g(this,a,h,f,_)};function Et(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new oe(h,a);else if(h instanceof oe)h.target=h.target||a;else{var b=h;h=new oe(_,a),A(h,b)}if(b=!0,f)for(var D=f.length-1;0<=D;D--){var B=h.g=f[D];b=sl(B,_,!0,h)&&b}if(B=h.g=a,b=sl(B,_,!0,h)&&b,b=sl(B,_,!1,h)&&b,f)for(D=0;D<f.length;D++)B=h.g=f[D],b=sl(B,_,!1,h)&&b}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)rl(f[_]);delete a.g[h],a.h--}}this.F=null},lt.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},lt.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function sl(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,D=0;D<h.length;++D){var B=h[D];if(B&&!B.da&&B.capture==f){var me=B.listener,Je=B.ha||B.src;B.fa&&lh(a.i,B),b=me.call(Je,_)!==!1&&b}}return b&&!_.defaultPrevented}function Tg(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ig(a){a.g=Tg(()=>{a.g=null,a.i&&(a.i=!1,Ig(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class DA extends ee{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ig(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eo(a){ee.call(this),this.h=a,this.g={}}S(eo,ee);var Ag=[];function Sg(a){M(a.g,function(h,f){this.g.hasOwnProperty(f)&&dh(h)},a),a.g={}}eo.prototype.N=function(){eo.aa.N.call(this),Sg(this)},eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mh=l.JSON.stringify,OA=l.JSON.parse,LA=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function gh(){}gh.prototype.h=null;function Rg(a){return a.h||(a.h=a.i())}function Cg(){}var to={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yh(){oe.call(this,"d")}S(yh,oe);function vh(){oe.call(this,"c")}S(vh,oe);var Xr={},kg=null;function ol(){return kg=kg||new lt}Xr.La="serverreachability";function Pg(a){oe.call(this,Xr.La,a)}S(Pg,oe);function no(a){const h=ol();Et(h,new Pg(h))}Xr.STAT_EVENT="statevent";function Ng(a,h){oe.call(this,Xr.STAT_EVENT,a),this.stat=h}S(Ng,oe);function wt(a){const h=ol();Et(h,new Ng(h,a))}Xr.Ma="timingevent";function xg(a,h){oe.call(this,Xr.Ma,a),this.size=h}S(xg,oe);function ro(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function io(){this.g=!0}io.prototype.xa=function(){this.g=!1};function VA(a,h,f,_,b,D){a.info(function(){if(a.g)if(D)for(var B="",me=D.split("&"),Je=0;Je<me.length;Je++){var ue=me[Je].split("=");if(1<ue.length){var ut=ue[0];ue=ue[1];var ct=ut.split("_");B=2<=ct.length&&ct[1]=="type"?B+(ut+"="+ue+"&"):B+(ut+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+f+`
`+B})}function MA(a,h,f,_,b,D,B){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+f+`
`+D+" "+B})}function qi(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+UA(a,f)+(_?" "+_:"")})}function FA(a,h){a.info(function(){return"TIMEOUT: "+h})}io.prototype.info=function(){};function UA(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var b=_[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<b.length;B++)b[B]=""}}}}return mh(f)}catch{return h}}var al={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_h;function ll(){}S(ll,gh),ll.prototype.g=function(){return new XMLHttpRequest},ll.prototype.i=function(){return{}},_h=new ll;function ir(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new eo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dg}function Dg(){this.i=null,this.g="",this.h=!1}var Og={},Eh={};function wh(a,h,f){a.L=1,a.v=dl(On(h)),a.m=f,a.P=!0,Lg(a,null)}function Lg(a,h){a.F=Date.now(),ul(a),a.A=On(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Qg(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Dg,a.g=fy(a.j,f?h:null,!a.m),0<a.O&&(a.M=new DA(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ag[0]=b.toString()),b=Ag);for(var D=0;D<b.length;D++){var B=vg(f,b[D],_||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),no(),VA(a.i,a.u,a.A,a.l,a.R,a.m)}ir.prototype.ca=function(a){a=a.target;const h=this.M;h&&Ln(a)==3?h.j():this.Y(a)},ir.prototype.Y=function(a){try{if(a==this.g)e:{const ct=Ln(this.g);var h=this.g.Ba();const Gi=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||ny(this.g)))){this.J||ct!=4||h==7||(h==8||0>=Gi?no(3):no(2)),Th(this);var f=this.g.Z();this.X=f;t:if(Vg(this)){var _=ny(this.g);a="";var b=_.length,D=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),so(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(D&&h==b-1)});_.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,MA(this.i,this.u,this.A,this.l,this.R,ct,f),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Je=this.g;if((me=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(me)){var ue=me;break t}}ue=null}if(f=ue)qi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ih(this,f);else{this.o=!1,this.s=3,wt(12),Jr(this),so(this);break e}}if(this.P){f=!0;let nn;for(;!this.J&&this.C<B.length;)if(nn=jA(this,B),nn==Eh){ct==4&&(this.s=4,wt(14),f=!1),qi(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Og){this.s=4,wt(15),qi(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else qi(this.i,this.l,nn,null),Ih(this,nn);if(Vg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||B.length!=0||this.h.h||(this.s=1,wt(16),f=!1),this.o=this.o&&f,!f)qi(this.i,this.l,B,"[Invalid Chunked Response]"),Jr(this),so(this);else if(0<B.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ph(ut),ut.M=!0,wt(11))}}else qi(this.i,this.l,B,null),Ih(this,B);ct==4&&Jr(this),this.o&&!this.J&&(ct==4?uy(this.j,this):(this.o=!1,ul(this)))}else rS(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),Jr(this),so(this)}}}catch{}finally{}};function Vg(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function jA(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?Eh:(f=Number(h.substring(f,_)),isNaN(f)?Og:(_+=1,_+f>h.length?Eh:(h=h.slice(_,_+f),a.C=_+f,h)))}ir.prototype.cancel=function(){this.J=!0,Jr(this)};function ul(a){a.S=Date.now()+a.I,Mg(a,a.I)}function Mg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ro(m(a.ba,a),h)}function Th(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ir.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(FA(this.i,this.A),this.L!=2&&(no(),wt(17)),Jr(this),this.s=2,so(this)):Mg(this,this.S-a)};function so(a){a.j.G==0||a.J||uy(a.j,a)}function Jr(a){Th(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Sg(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ih(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ah(f.h,a))){if(!a.K&&Ah(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)yl(f),ml(f);else break e;kh(f),wt(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=ro(m(f.Za,f),6e3));if(1>=jg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ei(f,11)}else if((a.K||f.g==a)&&yl(f),!y(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let ue=b[h];if(f.T=ue[0],ue=ue[1],f.G==2)if(ue[0]=="c"){f.K=ue[1],f.ia=ue[2];const ut=ue[3];ut!=null&&(f.la=ut,f.j.info("VER="+f.la));const ct=ue[4];ct!=null&&(f.Aa=ct,f.j.info("SVER="+f.Aa));const Gi=ue[5];Gi!=null&&typeof Gi=="number"&&0<Gi&&(_=1.5*Gi,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const nn=a.g;if(nn){const _l=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_l){var D=_.h;D.g||_l.indexOf("spdy")==-1&&_l.indexOf("quic")==-1&&_l.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Sh(D,D.h),D.h=null))}if(_.D){const Nh=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Nh&&(_.ya=Nh,ve(_.I,_.D,Nh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var B=a;if(_.qa=dy(_,_.J?_.ia:null,_.W),B.K){Bg(_.h,B);var me=B,Je=_.L;Je&&(me.I=Je),me.B&&(Th(me),ul(me)),_.g=B}else ay(_);0<f.i.length&&gl(f)}else ue[0]!="stop"&&ue[0]!="close"||ei(f,7);else f.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?ei(f,7):Ch(f):ue[0]!="noop"&&f.l&&f.l.ta(ue),f.v=0)}}no(4)}catch{}}var BA=class{constructor(a,h){this.g=a,this.map=h}};function Fg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ug(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jg(a){return a.h?1:a.g?a.g.size:0}function Ah(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Sh(a,h){a.g?a.g.add(h):a.h=h}function Bg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Fg.prototype.cancel=function(){if(this.i=zg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function zA(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function WA(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function Wg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=WA(a),_=zA(a),b=_.length,D=0;D<b;D++)h.call(void 0,_[D],f&&f[D],a)}var qg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qA(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),b=null;if(0<=_){var D=a[f].substring(0,_);b=a[f].substring(_+1)}else D=a[f];h(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Zr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Zr){this.h=a.h,cl(this,a.j),this.o=a.o,this.g=a.g,hl(this,a.s),this.l=a.l;var h=a.i,f=new lo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Hg(this,f),this.m=a.m}else a&&(h=String(a).match(qg))?(this.h=!1,cl(this,h[1]||"",!0),this.o=oo(h[2]||""),this.g=oo(h[3]||"",!0),hl(this,h[4]),this.l=oo(h[5]||"",!0),Hg(this,h[6]||"",!0),this.m=oo(h[7]||"")):(this.h=!1,this.i=new lo(null,this.h))}Zr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ao(h,$g,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ao(h,$g,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ao(f,f.charAt(0)=="/"?GA:$A,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ao(f,QA)),a.join("")};function On(a){return new Zr(a)}function cl(a,h,f){a.j=f?oo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function hl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Hg(a,h,f){h instanceof lo?(a.i=h,YA(a.i,a.h)):(f||(h=ao(h,KA)),a.i=new lo(h,a.h))}function ve(a,h,f){a.i.set(h,f)}function dl(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ao(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,HA),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function HA(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $g=/[#\/\?@]/g,$A=/[#\?:]/g,GA=/[#\?]/g,KA=/[#\?@]/g,QA=/#/g;function lo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function sr(a){a.g||(a.g=new Map,a.h=0,a.i&&qA(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=lo.prototype,t.add=function(a,h){sr(this),this.i=null,a=Hi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Gg(a,h){sr(a),h=Hi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Kg(a,h){return sr(a),h=Hi(a,h),a.g.has(h)}t.forEach=function(a,h){sr(this),this.g.forEach(function(f,_){f.forEach(function(b){a.call(h,b,_,this)},this)},this)},t.na=function(){sr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const b=a[_];for(let D=0;D<b.length;D++)f.push(h[_])}return f},t.V=function(a){sr(this);let h=[];if(typeof a=="string")Kg(this,a)&&(h=h.concat(this.g.get(Hi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return sr(this),this.i=null,a=Hi(this,a),Kg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Qg(a,h,f){Gg(a,h),0<f.length&&(a.i=null,a.g.set(Hi(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const D=encodeURIComponent(String(_)),B=this.V(_);for(_=0;_<B.length;_++){var b=D;B[_]!==""&&(b+="="+encodeURIComponent(String(B[_]))),a.push(b)}}return this.i=a.join("&")};function Hi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function YA(a,h){h&&!a.j&&(sr(a),a.i=null,a.g.forEach(function(f,_){var b=_.toLowerCase();_!=b&&(Gg(this,_),Qg(this,b,f))},a)),a.j=h}function XA(a,h){const f=new io;if(l.Image){const _=new Image;_.onload=I(or,f,"TestLoadImage: loaded",!0,h,_),_.onerror=I(or,f,"TestLoadImage: error",!1,h,_),_.onabort=I(or,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=I(or,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function JA(a,h){const f=new io,_=new AbortController,b=setTimeout(()=>{_.abort(),or(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(b),D.ok?or(f,"TestPingServer: ok",!0,h):or(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),or(f,"TestPingServer: error",!1,h)})}function or(a,h,f,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(f)}catch{}}function ZA(){this.g=new LA}function eS(a,h,f){const _=f||"";try{Wg(a,function(b,D){let B=b;c(b)&&(B=mh(b)),h.push(_+D+"="+encodeURIComponent(B))})}catch(b){throw h.push(_+"type="+encodeURIComponent("_badmap")),b}}function uo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(uo,gh),uo.prototype.g=function(){return new fl(this.l,this.j)},uo.prototype.i=function(a){return function(){return a}}({});function fl(a,h){lt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(fl,lt),t=fl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ho(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,co(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ho(this)),this.g&&(this.readyState=3,ho(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?co(this):ho(this),this.readyState==3&&Yg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,co(this))},t.Qa=function(a){this.g&&(this.response=a,co(this))},t.ga=function(){this.g&&co(this)};function co(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ho(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ho(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xg(a){let h="";return M(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Rh(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Xg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ve(a,h,f))}function be(a){lt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(be,lt);var tS=/^https?$/i,nS=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_h.g(),this.v=this.o?Rg(this.o):Rg(_h),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Jg(this,D);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)f.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())f.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(nS,h,void 0))||_||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of f)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ty(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Jg(this,D)}};function Jg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Zg(a),pl(a)}function Zg(a){a.A||(a.A=!0,Et(a,"complete"),Et(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Et(this,"complete"),Et(this,"abort"),pl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pl(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ey(this):this.bb())},t.bb=function(){ey(this)};function ey(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ln(a)!=4||a.Z()!=2)){if(a.u&&Ln(a)==4)Tg(a.Ea,0,a);else if(Et(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=B===0){var b=String(a.D).match(qg)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),_=!tS.test(b?b.toLowerCase():"")}f=_}if(f)Et(a,"complete"),Et(a,"success");else{a.m=6;try{var D=2<Ln(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Zg(a)}}finally{pl(a)}}}}function pl(a,h){if(a.g){ty(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Et(a,"ready");try{f.onreadystatechange=_}catch{}}}function ty(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),OA(h)}};function ny(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function rS(a){const h={};a=(a.g&&2<=Ln(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(y(a[_]))continue;var f=P(a[_]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[b]||[];h[b]=D,D.push(f)}T(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function ry(a){this.Aa=0,this.i=[],this.j=new io,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fo("baseRetryDelayMs",5e3,a),this.cb=fo("retryDelaySeedMs",1e4,a),this.Wa=fo("forwardChannelMaxRetries",2,a),this.wa=fo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Fg(a&&a.concurrentRequestLimit),this.Da=new ZA,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ry.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){wt(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=dy(this,null,this.W),gl(this)};function Ch(a){if(iy(a),a.G==3){var h=a.U++,f=On(a.I);if(ve(f,"SID",a.K),ve(f,"RID",h),ve(f,"TYPE","terminate"),po(a,f),h=new ir(a,a.j,h),h.L=2,h.v=dl(On(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=fy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ul(h)}hy(a)}function ml(a){a.g&&(Ph(a),a.g.cancel(),a.g=null)}function iy(a){ml(a),a.u&&(l.clearTimeout(a.u),a.u=null),yl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function gl(a){if(!Ug(a.h)&&!a.s){a.s=!0;var h=a.Ga;Be||Q(),z||(Be(),z=!0),K.add(h,a),a.B=0}}function iS(a,h){return jg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ro(m(a.Ga,a,h),cy(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new ir(this,this.j,a);let D=this.o;if(this.S&&(D?(D=g(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=oy(this,b,h),f=On(this.I),ve(f,"RID",a),ve(f,"CVER",22),this.D&&ve(f,"X-HTTP-Session-Id",this.D),po(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Xg(D)))+"&"+h:this.m&&Rh(f,this.m,D)),Sh(this.h,b),this.Ua&&ve(f,"TYPE","init"),this.P?(ve(f,"$req",h),ve(f,"SID","null"),b.T=!0,wh(b,f,null)):wh(b,f,h),this.G=2}}else this.G==3&&(a?sy(this,a):this.i.length==0||Ug(this.h)||sy(this))};function sy(a,h){var f;h?f=h.l:f=a.U++;const _=On(a.I);ve(_,"SID",a.K),ve(_,"RID",f),ve(_,"AID",a.T),po(a,_),a.m&&a.o&&Rh(_,a.m,a.o),f=new ir(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=oy(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Sh(a.h,f),wh(f,_,h)}function po(a,h){a.H&&M(a.H,function(f,_){ve(h,_,f)}),a.l&&Wg({},function(f,_){ve(h,_,f)})}function oy(a,h,f){f=Math.min(a.i.length,f);var _=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let D=-1;for(;;){const B=["count="+f];D==-1?0<f?(D=b[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let me=!0;for(let Je=0;Je<f;Je++){let ue=b[Je].g;const ut=b[Je].map;if(ue-=D,0>ue)D=Math.max(0,b[Je].g-100),me=!1;else try{eS(ut,B,"req"+ue+"_")}catch{_&&_(ut)}}if(me){_=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function ay(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Be||Q(),z||(Be(),z=!0),K.add(h,a),a.v=0}}function kh(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ro(m(a.Fa,a),cy(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ly(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ro(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),ml(this),ly(this))};function Ph(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ly(a){a.g=new ir(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=On(a.qa);ve(h,"RID","rpc"),ve(h,"SID",a.K),ve(h,"AID",a.T),ve(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(h,"TO",a.ja),ve(h,"TYPE","xmlhttp"),po(a,h),a.m&&a.o&&Rh(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=dl(On(h)),f.m=null,f.P=!0,Lg(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ml(this),kh(this),wt(19))};function yl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function uy(a,h){var f=null;if(a.g==h){yl(a),Ph(a),a.g=null;var _=2}else if(Ah(a.h,h))f=h.D,Bg(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;_=ol(),Et(_,new xg(_,f)),gl(a)}else ay(a);else if(b=h.s,b==3||b==0&&0<h.X||!(_==1&&iS(a,h)||_==2&&kh(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),b){case 1:ei(a,5);break;case 4:ei(a,10);break;case 3:ei(a,6);break;default:ei(a,2)}}}function cy(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function ei(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),_=a.Xa;const b=!_;_=new Zr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||cl(_,"https"),dl(_),b?XA(_.toString(),f):JA(_.toString(),f)}else wt(2);a.G=0,a.l&&a.l.sa(h),hy(a),iy(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function hy(a){if(a.G=0,a.ka=[],a.l){const h=zg(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function dy(a,h,f){var _=f instanceof Zr?On(f):new Zr(f);if(_.g!="")h&&(_.g=h+"."+_.g),hl(_,_.s);else{var b=l.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var D=new Zr(null);_&&cl(D,_),h&&(D.g=h),b&&hl(D,b),f&&(D.l=f),_=D}return f=a.D,h=a.ya,f&&h&&ve(_,f,h),ve(_,"VER",a.la),po(a,_),_}function fy(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new be(new uo({eb:f})):new be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function py(){}t=py.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function vl(){}vl.prototype.g=function(a,h){return new Lt(a,h)};function Lt(a,h){lt.call(this),this.g=new ry(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!y(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new $i(this)}S(Lt,lt),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Ch(this.g)},Lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=mh(a),a=f);h.i.push(new BA(h.Ya++,a)),h.G==3&&gl(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Ch(this.g),delete this.g,Lt.aa.N.call(this)};function my(a){yh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(my,yh);function gy(){vh.call(this),this.status=1}S(gy,vh);function $i(a){this.g=a}S($i,py),$i.prototype.ua=function(){Et(this.g,"a")},$i.prototype.ta=function(a){Et(this.g,new my(a))},$i.prototype.sa=function(a){Et(this.g,new gy)},$i.prototype.ra=function(){Et(this.g,"b")},vl.prototype.createWebChannel=vl.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,eT=function(){return new vl},Z1=function(){return ol()},J1=Xr,Nf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},al.NO_ERROR=0,al.TIMEOUT=8,al.HTTP_ERROR=6,cu=al,bg.COMPLETE="complete",X1=bg,Cg.EventType=to,to.OPEN="a",to.CLOSE="b",to.ERROR="c",to.MESSAGE="d",lt.prototype.listen=lt.prototype.K,xo=Cg,Y1=uo,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,Q1=be}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});const c_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new um("@firebase/firestore");function Io(){return Ri.logLevel}function H(t,...e){if(Ri.logLevel<=se.DEBUG){const n=e.map(wm);Ri.debug(`Firestore (${Ks}): ${t}`,...n)}}function Jn(t,...e){if(Ri.logLevel<=se.ERROR){const n=e.map(wm);Ri.error(`Firestore (${Ks}): ${t}`,...n)}}function Ds(t,...e){if(Ri.logLevel<=se.WARN){const n=e.map(wm);Ri.warn(`Firestore (${Ks}): ${t}`,...n)}}function wm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: `+t;throw Jn(e),new Error(e)}function ge(t,e){t||X()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class Vx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mx{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new tT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new pt(e)}}class Fx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ux{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Fx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new jx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=zx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Os(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new He(0,0))}static max(){return new J(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Aa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Aa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Aa{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const Wx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Aa{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return Wx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ee.fromString(e))}static fromName(e){return new G(Ee.fromString(e).popFirst(5))}static empty(){return new G(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ee(e.slice()))}}function qx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Ur(i,G.empty(),e)}function Hx(t){return new Ur(t.readTime,t.key,-1)}class Ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ur(J.min(),G.empty(),-1)}static max(){return new Ur(J.max(),G.empty(),-1)}}function $x(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Gx)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Qx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $a(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Tm.oe=-1;function Mc(t){return t==null}function Yu(t){return t===0&&1/t==-1/0}function Yx(t){return typeof t=="number"&&Number.isInteger(t)&&!Yu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ul(this.root,e,this.comparator,!0)}}class Ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??et.EMPTY,this.right=s??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new d_(this.data.getIterator())}getIteratorFrom(e){return new d_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class d_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new it(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new iT("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Xx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(ge(!!t),typeof t=="string"){let e=0;const n=Xx.exec(t);if(ge(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Am(t){const e=t.mapValue.fields.__previous_value__;return Im(e)?Am(e):e}function Sa(t){const e=jr(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ki(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Im(t)?4:Zx(t)?9007199254740991:10:X()}function xn(t,e){if(t===e)return!0;const n=ki(t);if(n!==ki(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sa(t).isEqual(Sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jr(i.timestampValue),l=jr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ci(i.bytesValue).isEqual(Ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),l=Fe(s.doubleValue);return o===l?Yu(o)===Yu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(h_(o)!==h_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!xn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Ca(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Ls(t,e){if(t===e)return 0;const n=ki(t),r=ki(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Fe(s.integerValue||s.doubleValue),u=Fe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return f_(t.timestampValue,e.timestampValue);case 4:return f_(Sa(t),Sa(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ci(s),u=Ci(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=he(l[c],u[c]);if(d!==0)return d}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(Fe(s.latitude),Fe(o.latitude));return l!==0?l:he(Fe(s.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const d=Ls(l[c],u[c]);if(d)return d}return he(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===jl.mapValue&&o===jl.mapValue)return 0;if(s===jl.mapValue)return 1;if(o===jl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=he(u[p],d[p]);if(m!==0)return m;const I=Ls(l[u[p]],c[d[p]]);if(I!==0)return I}return he(u.length,d.length)}(t.mapValue,e.mapValue);default:throw X()}}function f_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=jr(t),r=jr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Vs(t){return xf(t)}function xf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=xf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${xf(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function p_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bf(t){return!!t&&"integerValue"in t}function Sm(t){return!!t&&"arrayValue"in t}function m_(t){return!!t&&"nullValue"in t}function g_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hu(t){return!!t&&"mapValue"in t}function Go(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Go(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Zx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Go(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Go(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(Go(this.value))}}function sT(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new tt([n]);if(hu(r)){const s=sT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,J.min(),J.min(),J.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,J.min(),J.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,J.min(),J.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){this.position=e,this.inclusive=n}}function y_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function v_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n="asc"){this.field=e,this.dir=n}}function eb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{}class je extends oT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nb(e,n,r):n==="array-contains"?new sb(e,r):n==="in"?new ob(e,r):n==="not-in"?new ab(e,r):n==="array-contains-any"?new lb(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rb(e,r):new ib(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ls(n,this.value)):n!==null&&ki(this.value)===ki(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends oT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dn(e,n)}matches(e){return aT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function aT(t){return t.op==="and"}function lT(t){return tb(t)&&aT(t)}function tb(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Df(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(lT(t))return t.filters.map(e=>Df(e)).join(",");{const e=t.filters.map(n=>Df(n)).join(",");return`${t.op}(${e})`}}function uT(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&xn(r.value,i.value)}(t,e):t instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&uT(o,i.filters[l]),!0):!1}(t,e):void X()}function cT(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(cT).join(" ,")+"}"}(t):"Filter"}class nb extends je{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class rb extends je{constructor(e,n){super(e,"in",n),this.keys=hT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ib extends je{constructor(e,n){super(e,"not-in",n),this.keys=hT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class sb extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sm(n)&&Ca(n.arrayValue,this.value)}}class ob extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ca(this.value.arrayValue,n)}}class ab extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ca(this.value.arrayValue,n)}}class lb extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ca(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function __(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ub(t,e,n,r,i,s,o)}function Rm(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Df(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vs(r)).join(",")),e.ue=n}return e.ue}function Cm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!v_(t.startAt,e.startAt)&&v_(t.endAt,e.endAt)}function Of(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cb(t,e,n,r,i,s,o,l){return new Ga(t,e,n,r,i,s,o,l)}function Fc(t){return new Ga(t)}function E_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dT(t){return t.collectionGroup!==null}function Ko(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new it(tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ju(s,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new Ju(tt.keyField(),r))}return e.ce}function kn(t){const e=Z(t);return e.le||(e.le=hb(e,Ko(t))),e.le}function hb(t,e){if(t.limitType==="F")return __(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ju(i.field,s)});const n=t.endAt?new Xu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xu(t.startAt.position,t.startAt.inclusive):null;return __(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Lf(t,e){const n=t.filters.concat([e]);return new Ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vf(t,e,n){return new Ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uc(t,e){return Cm(kn(t),kn(e))&&t.limitType===e.limitType}function fT(t){return`${Rm(kn(t))}|lt:${t.limitType}`}function Yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>cT(i)).join(", ")}]`),Mc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vs(i)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function jc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ko(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=y_(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ko(r),i)||r.endAt&&!function(o,l,u){const c=y_(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ko(r),i))}(t,e)}function db(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pT(t){return(e,n)=>{let r=!1;for(const i of Ko(t)){const s=fb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fb(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ls(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new Ne(G.comparator);function Zn(){return pb}const mT=new Ne(G.comparator);function bo(...t){let e=mT;for(const n of t)e=e.insert(n.key,n);return e}function gT(t){let e=mT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function li(){return Qo()}function yT(){return Qo()}function Qo(){return new Qs(t=>t.toString(),(t,e)=>t.isEqual(e))}const mb=new Ne(G.comparator),gb=new it(G.comparator);function ie(...t){let e=gb;for(const n of t)e=e.add(n);return e}const yb=new it(he);function vb(){return yb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yu(e)?"-0":e}}function _T(t){return{integerValue:""+t}}function _b(t,e){return Yx(e)?_T(e):vT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this._=void 0}}function Eb(t,e,n){return t instanceof ka?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Im(s)&&(s=Am(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ms?wT(t,e):t instanceof Pa?TT(t,e):function(i,s){const o=ET(i,s),l=w_(o)+w_(i.Pe);return bf(o)&&bf(i.Pe)?_T(l):vT(i.serializer,l)}(t,e)}function wb(t,e,n){return t instanceof Ms?wT(t,e):t instanceof Pa?TT(t,e):n}function ET(t,e){return t instanceof Zu?function(r){return bf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ka extends Bc{}class Ms extends Bc{constructor(e){super(),this.elements=e}}function wT(t,e){const n=IT(e);for(const r of t.elements)n.some(i=>xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Pa extends Bc{constructor(e){super(),this.elements=e}}function TT(t,e){let n=IT(e);for(const r of t.elements)n=n.filter(i=>!xn(i,r));return{arrayValue:{values:n}}}class Zu extends Bc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function w_(t){return Fe(t.integerValue||t.doubleValue)}function IT(t){return Sm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e,n){this.field=e,this.transform=n}}function Tb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ms&&i instanceof Ms||r instanceof Pa&&i instanceof Pa?Os(r.elements,i.elements,xn):r instanceof Zu&&i instanceof Zu?xn(r.Pe,i.Pe):r instanceof ka&&i instanceof ka}(t.transform,e.transform)}class Ib{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function du(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zc{}function ST(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new CT(t.key,Pn.none()):new Ka(t.key,t.data,Pn.none());{const n=t.data,r=Nt.empty();let i=new it(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yr(t.key,r,new Ft(i.toArray()),Pn.none())}}function Ab(t,e,n){t instanceof Ka?function(i,s,o){const l=i.value.clone(),u=I_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Yr?function(i,s,o){if(!du(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=I_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(RT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yo(t,e,n,r){return t instanceof Ka?function(s,o,l,u){if(!du(s.precondition,o))return l;const c=s.value.clone(),d=A_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yr?function(s,o,l,u){if(!du(s.precondition,o))return l;const c=A_(s.fieldTransforms,u,o),d=o.data;return d.setAll(RT(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return du(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Sb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ET(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function T_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Os(r,i,(s,o)=>Tb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ka extends zc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yr extends zc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function I_(t,e,n){const r=new Map;ge(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,wb(o,l,n[i]))}return r}function A_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Eb(s,o,e))}return r}class CT extends zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rb extends zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ab(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=ST(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,r)=>T_(n,r))&&Os(this.baseMutations,e.baseMutations,(n,r)=>T_(n,r))}}class km{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ge(e.mutations.length===r.length);let i=function(){return mb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new km(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,ae;function Nb(t){switch(t){default:return X();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function kT(t){if(t===void 0)return Jn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Me.OK:return F.OK;case Me.CANCELLED:return F.CANCELLED;case Me.UNKNOWN:return F.UNKNOWN;case Me.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Me.INTERNAL:return F.INTERNAL;case Me.UNAVAILABLE:return F.UNAVAILABLE;case Me.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Me.NOT_FOUND:return F.NOT_FOUND;case Me.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Me.ABORTED:return F.ABORTED;case Me.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Me.DATA_LOSS:return F.DATA_LOSS;default:return X()}}(ae=Me||(Me={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new di([4294967295,4294967295],0);function S_(t){const e=xb().encode(t),n=new K1;return n.update(e),new Uint8Array(n.digest())}function R_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new di([n,r],0),new di([i,s],0)]}class Pm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(r<0)throw new Do(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=di.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(di.fromNumber(r)));return i.compare(bb)===1&&(i=new di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=S_(e),[r,i]=R_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Pm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=S_(e),[r,i]=R_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wc(J.min(),i,new Ne(he),Zn(),ie())}}class Qa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qa(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class PT{constructor(e,n){this.targetId=e,this.me=n}}class NT{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class C_{constructor(){this.fe=0,this.ge=P_(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Qa(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=P_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Db{constructor(e){this.Le=e,this.Be=new Map,this.ke=Zn(),this.qe=k_(),this.Qe=new Ne(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Of(s))if(r===0){const o=new G(s.path);this.Ue(n,o,gt.newNoDocument(o,J.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ci(r).toUint8Array()}catch(u){if(u instanceof iT)return Ds("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Pm(o,i,s)}catch(u){return Ds(u instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Of(l.target)){const u=new G(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,gt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ie();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Wc(e,n,this.Qe,this.ke,r);return this.ke=Zn(),this.qe=k_(),this.Qe=new Ne(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new C_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new C_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function k_(){return new Ne(G.comparator)}function P_(){return new Ne(G.comparator)}const Ob={asc:"ASCENDING",desc:"DESCENDING"},Lb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vb={and:"AND",or:"OR"};class Mb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mf(t,e){return t.useProto3Json||Mc(e)?e:{value:e}}function ec(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Fb(t,e){return ec(t,e.toTimestamp())}function Nn(t){return ge(!!t),J.fromTimestamp(function(n){const r=jr(n);return new He(r.seconds,r.nanos)}(t))}function Nm(t,e){return Ff(t,e).canonicalString()}function Ff(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function bT(t){const e=Ee.fromString(t);return ge(MT(e)),e}function Uf(t,e){return Nm(t.databaseId,e.path)}function hd(t,e){const n=bT(e);if(n.get(1)!==t.databaseId.projectId)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(OT(n))}function DT(t,e){return Nm(t.databaseId,e)}function Ub(t){const e=bT(t);return e.length===4?Ee.emptyPath():OT(e)}function jf(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function OT(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function N_(t,e,n){return{name:Uf(t,e),fields:n.value.mapValue.fields}}function jb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ge(d===void 0||typeof d=="string"),at.fromBase64String(d||"")):(ge(d===void 0||d instanceof Buffer||d instanceof Uint8Array),at.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?F.UNKNOWN:kT(c.code);return new q(d,c.message||"")}(o);n=new NT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hd(t,r.document.name),s=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):J.min(),l=new Nt({mapValue:{fields:r.document.fields}}),u=gt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new fu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hd(t,r.document),s=r.readTime?Nn(r.readTime):J.min(),o=gt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new fu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hd(t,r.document),s=r.removedTargetIds||[];n=new fu([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Pb(i,s),l=r.targetId;n=new PT(l,o)}}return n}function Bb(t,e){let n;if(e instanceof Ka)n={update:N_(t,e.key,e.value)};else if(e instanceof CT)n={delete:Uf(t,e.key)};else if(e instanceof Yr)n={update:N_(t,e.key,e.data),updateMask:Yb(e.fieldMask)};else{if(!(e instanceof Rb))return X();n={verify:Uf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ka)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ms)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Fb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function zb(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Nn(i.updateTime):Nn(s);return o.isEqual(J.min())&&(o=Nn(s)),new Ib(o,i.transformResults||[])}(n,e))):[]}function Wb(t,e){return{documents:[DT(t,e.path)]}}function qb(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=DT(t,i);const s=function(c){if(c.length!==0)return VT(dn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Xi(m.field),direction:Gb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Hb(t){let e=Ub(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ge(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=LT(p);return m instanceof dn&&lT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new Ju(Ji(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Mc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new Xu(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new Xu(I,m)}(n.endAt)),cb(e,i,o,s,l,"F",u,c)}function $b(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function LT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ji(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ji(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ji(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ji(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return je.create(Ji(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>LT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function Gb(t){return Ob[t]}function Kb(t){return Lb[t]}function Qb(t){return Vb[t]}function Xi(t){return{fieldPath:t.canonicalString()}}function Ji(t){return tt.fromServerFormat(t.fieldPath)}function VT(t){return t instanceof je?function(n){if(n.op==="=="){if(g_(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NAN"}};if(m_(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(g_(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NAN"}};if(m_(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xi(n.field),op:Kb(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(i=>VT(i));return r.length===1?r[0]:{compositeFilter:{op:Qb(n.op),filters:r}}}(t):X()}function Yb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function MT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.ct=e}}function Jb(t){const e=Hb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this.an=new eD}addToCollectionParentIndex(e,n){return this.an.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Ur.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Ur.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class eD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new it(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new it(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Fs(0)}static Bn(){return new Fs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(){this.changes=new Qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Yo(r.mutation,i,Ft.empty(),He.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=li();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=bo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=li();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Zn();const o=Qo(),l=function(){return Qo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Yr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Yo(d.mutation,c,d.mutation.getFieldMask(),He.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new nD(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Qo();let i=new Ne((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Ft.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=yT();d.forEach(m=>{if(!s.has(m)){const I=ST(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(li());let l=-1,u=s;return o.next(c=>U.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ie())).next(d=>({batchId:l,changes:gT(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=bo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=bo();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(p,m){return new Ga(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let l=bo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Yo(d.mutation,c,Ft.empty(),He.now()),jc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return U.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Nn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:Jb(i.bundledQuery),readTime:Nn(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(){this.overlays=new Ne(G.comparator),this.Pr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=li();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=li(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ne((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=li(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=li(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new kb(n,r));let s=this.Pr.get(n);s===void 0&&(s=ie(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.Ir=new it($e.Tr),this.Er=new it($e.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new $e(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new G(new Ee([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const n=new G(new Ee([])),r=new $e(n,e),i=new $e(n,e+1);let s=ie();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.yr=n}static Tr(e,n){return G.comparator(e.key,n.key)||he(e.yr,n.yr)}static dr(e,n){return he(e.yr,n.yr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new it($e.Tr)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Sr=this.Sr.add(new $e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const l=this.br(o.yr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(he);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],l=>{r=r.add(l.yr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new $e(new G(s),0);let l=new it(he);return this.Sr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.yr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ge(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return U.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new $e(n,0),i=this.Sr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.Fr=e,this.docs=function(){return new Ne(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Zn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Zn();const o=n.path,l=new G(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||$x(Hx(d),r)<=0||(i.has(d.key)||jc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Mr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uD(this)}getSize(e){return U.resolve(this.size)}}class uD extends tD{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.persistence=e,this.Or=new Qs(n=>Rm(n),Cm),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new xm,this.targetCount=0,this.Br=Fs.Ln()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),U.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Qn(n),U.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Lr.mr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Lr.Ar(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Lr.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Lr.mr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Lr.pr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Lr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n){this.kr={},this.overlays={},this.qr=new Tm(0),this.Qr=!1,this.Qr=!0,this.Kr=new oD,this.referenceDelegate=e(this),this.$r=new cD(this),this.indexManager=new Zb,this.remoteDocumentCache=function(i){return new lD(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Xb(n),this.Wr=new iD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new aD(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new dD(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,n){return U.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class dD extends Kx{constructor(e){super(),this.currentSequenceNumber=e}}class bm{constructor(e){this.persistence=e,this.Hr=new xm,this.Jr=null}static Yr(e){return new bm(e)}get Zr(){if(this.Jr)return this.Jr;throw X()}addReference(e,n,r){return this.Hr.addReference(r,n),this.Zr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Hr.removeReference(r,n),this.Zr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Zr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Hr.mr(n.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Gr(){this.Jr=new Set}zr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Zr,r=>{const i=G.fromPath(r);return this.Xr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Xr(e,n).next(r=>{r?this.Zr.delete(n.toString()):this.Zr.add(n.toString())})}Ur(e){return 0}Xr(e,n){return U.or([()=>U.resolve(this.Hr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.jr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ki=r,this.$i=i}static Ui(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return rP()?8:Qx(ot())>0?6:4}()}initialize(e,n){this.Hi=e,this.indexManager=n,this.Wi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new fD;return this.Zi(e,n,o).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,n,o,l.size)})}).next(()=>s.result)}Xi(e,n,r,i){return r.documentReadCount<this.zi?(Io()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),U.resolve()):(Io()<=se.DEBUG&&H("QueryEngine","Query:",Yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Io()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):U.resolve())}Ji(e,n){if(E_(n))return U.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vf(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Hi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.es(n,l);return this.ts(n,c,o,u.readTime)?this.Ji(e,Vf(n,null,"F")):this.ns(e,c,n,u)}))})))}Yi(e,n,r,i){return E_(n)||i.isEqual(J.min())?U.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(n,s);return this.ts(n,o,r,i)?U.resolve(null):(Io()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yi(n)),this.ns(e,o,n,qx(i,-1)).next(l=>l))})}es(e,n){let r=new it(pT(e));return n.forEach((i,s)=>{jc(e,s)&&(r=r.add(s))}),r}ts(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,n,r){return Io()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Yi(n)),this.Hi.getDocumentsMatchingQuery(e,n,Ur.min(),r)}ns(e,n,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n,r,i){this.persistence=e,this.rs=n,this.serializer=i,this.ss=new Ne(he),this.os=new Qs(s=>Rm(s),Cm),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rD(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ss))}}function gD(t,e,n,r){return new mD(t,e,n,r)}async function FT(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.cs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function yD(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.us.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let I=U.resolve();return m.forEach(S=>{I=I.next(()=>d.getEntry(u,S)).next(k=>{const C=c.docVersions.get(S);ge(C!==null),k.version.compareTo(C)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UT(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.$r.getLastRemoteSnapshotVersion(n))}function vD(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.us.newChangeBuffer({trackRemovals:!0});i=n.ss;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.$r.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.$r.addMatchingKeys(s,d.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(at.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(p,I),function(k,C,v){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,I,d)&&l.push(n.$r.updateTargetData(s,I))});let u=Zn(),c=ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(_D(s,o,e.documentUpdates).next(d=>{u=d.hs,c=d.Ps})),!r.isEqual(J.min())){const d=n.$r.getLastRemoteSnapshotVersion(s).next(p=>n.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ss=i,s))}function _D(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Zn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{hs:o,Ps:i}})}function ED(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wD(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.$r.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.$r.allocateTargetId(r).next(o=>(i=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ss=n.ss.insert(r.targetId,r),n.os.set(e,r.targetId)),r})}async function Bf(t,e,n){const r=Z(t),i=r.ss.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$a(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function x_(t,e,n){const r=Z(t);let i=J.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=Z(u),m=p.os.get(d);return m!==void 0?U.resolve(p.ss.get(m)):p.$r.getTargetData(c,d)}(r,o,kn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ie())).next(l=>(TD(r,db(e),l),{documents:l,Is:s})))}function TD(t,e,n){let r=t._s.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t._s.set(e,r)}class b_{constructor(){this.activeTargetIds=vb()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ID{constructor(){this.io=new b_,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,n,r){this.so[e]=n}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new b_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl=null;function dd(){return Bl===null?Bl=function(){return 268435456+Math.round(2147483648*Math.random())}():Bl++,"0x"+Bl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class CD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+n.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(n,r,i,s,o){const l=dd(),u=this.Mo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Ds("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}No(n,r,i,s,o,l){return this.Fo(n,r,i,s,o)}xo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Mo(n,r){const i=SD[n];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,n,r,i){const s=dd();return new Promise((o,l)=>{const u=new Q1;u.setWithCredentials(!0),u.listenOnce(X1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case cu.NO_ERROR:const d=u.getResponseJson();H(ft,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case cu.TIMEOUT:H(ft,`RPC '${e}' ${s} timed out`),l(new q(F.DEADLINE_EXCEEDED,"Request time out"));break;case cu.HTTP_ERROR:const p=u.getStatus();if(H(ft,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const S=function(C){const v=C.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(v)>=0?v:F.UNKNOWN}(I.status);l(new q(S,I.message))}else l(new q(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(F.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{H(ft,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(ft,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Lo(e,n,r){const i=dd(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eT(),l=Z1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new Y1({})),this.xo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(ft,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,I=!1;const S=new RD({Po:C=>{I?H(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(H(ft,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(ft,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},Io:()=>p.close()}),k=(C,v,y)=>{C.listen(v,E=>{try{y(E)}catch(N){setTimeout(()=>{throw N},0)}})};return k(p,xo.EventType.OPEN,()=>{I||(H(ft,`RPC '${e}' stream ${i} transport opened.`),S.po())}),k(p,xo.EventType.CLOSE,()=>{I||(I=!0,H(ft,`RPC '${e}' stream ${i} transport closed`),S.wo())}),k(p,xo.EventType.ERROR,C=>{I||(I=!0,Ds(ft,`RPC '${e}' stream ${i} transport errored:`,C),S.wo(new q(F.UNAVAILABLE,"The operation could not be completed")))}),k(p,xo.EventType.MESSAGE,C=>{var v;if(!I){const y=C.data[0];ge(!!y);const E=y,N=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(N){H(ft,`RPC '${e}' stream ${i} received error:`,N);const L=N.status;let M=function(w){const A=Me[w];if(A!==void 0)return kT(A)}(L),T=N.message;M===void 0&&(M=F.INTERNAL,T="Unknown error status: "+L+" with message "+N.message),I=!0,S.wo(new q(M,T)),p.close()}else H(ft,`RPC '${e}' stream ${i} received:`,y),S.So(y)}}),k(l,J1.STAT_EVENT,C=>{C.stat===Nf.PROXY?H(ft,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Nf.NOPROXY&&H(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.yo()},0),S}}function fd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){return new Mb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=n,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const n=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n,r,i,s,o,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new jT(e,n)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,n){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Jn(n.toString()),Jn("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(n)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),n=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===n&&this.h_(r,i)},r=>{e(()=>{const i=new q(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,n){const r=this.l_(this.Jo);this.stream=this.I_(e,n),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return n=>{this.ai.enqueueAndForget(()=>this.Jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kD extends BT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}I_(e,n){return this.connection.Lo("Listen",e,n)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const n=jb(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Nn(o.readTime):J.min()}(e);return this.listener.E_(n,r)}d_(e){const n={};n.database=jf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Of(u)?{documents:Wb(s,u)}:{query:qb(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=xT(s,o.resumeToken);const c=Mf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=ec(s,o.snapshotVersion.toTimestamp());const c=Mf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=$b(this.serializer,e);r&&(n.labels=r),this.__(n)}A_(e){const n={};n.database=jf(this.serializer),n.removeTarget=e,this.__(n)}}class PD extends BT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,n){return this.connection.Lo("Write",e,n)}T_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const n=zb(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.f_(r,n)}g_(){const e={};e.database=jf(this.serializer),this.__(e)}V_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Bb(this.serializer,r))};this.__(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,n,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,Ff(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(F.UNKNOWN,s.toString())})}No(e,n,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.No(e,Ff(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(F.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class xD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Jn(n),this.b_=!1):H("OnlineStateTracker",n)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{ji(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.N_.add(4),await Ya(c),c.k_.set("Unknown"),c.N_.delete(4),await Hc(c)}(this))})}),this.k_=new xD(r,i)}}async function Hc(t){if(ji(t))for(const e of t.L_)await e(!0)}async function Ya(t){for(const e of t.L_)await e(!1)}function zT(t,e){const n=Z(t);n.O_.has(e.targetId)||(n.O_.set(e.targetId,e),Mm(n)?Vm(n):Ys(n).n_()&&Lm(n,e))}function Om(t,e){const n=Z(t),r=Ys(n);n.O_.delete(e),r.n_()&&WT(n,e),n.O_.size===0&&(r.n_()?r.s_():ji(n)&&n.k_.set("Unknown"))}function Lm(t,e){if(t.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ys(t).d_(e)}function WT(t,e){t.q_.xe(e),Ys(t).A_(e)}function Vm(t){t.q_=new Db({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.O_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ys(t).start(),t.k_.D_()}function Mm(t){return ji(t)&&!Ys(t).t_()&&t.O_.size>0}function ji(t){return Z(t).N_.size===0}function qT(t){t.q_=void 0}async function DD(t){t.k_.set("Online")}async function OD(t){t.O_.forEach((e,n)=>{Lm(t,e)})}async function LD(t,e){qT(t),Mm(t)?(t.k_.F_(e),Vm(t)):t.k_.set("Unknown")}async function VD(t,e,n){if(t.k_.set("Online"),e instanceof NT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.O_.delete(l),i.q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tc(t,r)}else if(e instanceof fu?t.q_.Ke(e):e instanceof PT?t.q_.He(e):t.q_.We(e),!n.isEqual(J.min()))try{const r=await UT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.O_.get(c);d&&s.O_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.O_.get(u);if(!d)return;s.O_.set(u,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),WT(s,u);const p=new Tr(d.target,u,c,d.sequenceNumber);Lm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await tc(t,r)}}async function tc(t,e,n){if(!$a(e))throw e;t.N_.add(1),await Ya(t),t.k_.set("Offline"),n||(n=()=>UT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.N_.delete(1),await Hc(t)})}function HT(t,e){return e().catch(n=>tc(t,n,e))}async function $c(t){const e=Z(t),n=Br(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;MD(e);)try{const i=await ED(e.localStore,r);if(i===null){e.x_.length===0&&n.s_();break}r=i.batchId,FD(e,i)}catch(i){await tc(e,i)}$T(e)&&GT(e)}function MD(t){return ji(t)&&t.x_.length<10}function FD(t,e){t.x_.push(e);const n=Br(t);n.n_()&&n.R_&&n.V_(e.mutations)}function $T(t){return ji(t)&&!Br(t).t_()&&t.x_.length>0}function GT(t){Br(t).start()}async function UD(t){Br(t).g_()}async function jD(t){const e=Br(t);for(const n of t.x_)e.V_(n.mutations)}async function BD(t,e,n){const r=t.x_.shift(),i=km.from(r,e,n);await HT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $c(t)}async function zD(t,e){e&&Br(t).R_&&await async function(r,i){if(function(o){return Nb(o)&&o!==F.ABORTED}(i.code)){const s=r.x_.shift();Br(r).i_(),await HT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $c(r)}}(t,e),$T(t)&&GT(t)}async function O_(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ji(n);n.N_.add(3),await Ya(n),r&&n.k_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.N_.delete(3),await Hc(n)}async function WD(t,e){const n=Z(t);e?(n.N_.delete(2),await Hc(n)):e||(n.N_.add(2),await Ya(n),n.k_.set("Unknown"))}function Ys(t){return t.Q_||(t.Q_=function(n,r,i){const s=Z(n);return s.y_(),new kD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:DD.bind(null,t),Ao:OD.bind(null,t),Vo:LD.bind(null,t),E_:VD.bind(null,t)}),t.L_.push(async e=>{e?(t.Q_.i_(),Mm(t)?Vm(t):t.k_.set("Unknown")):(await t.Q_.stop(),qT(t))})),t.Q_}function Br(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.y_(),new PD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{To:()=>Promise.resolve(),Ao:UD.bind(null,t),Vo:zD.bind(null,t),m_:jD.bind(null,t),f_:BD.bind(null,t)}),t.L_.push(async e=>{e?(t.K_.i_(),await $c(t)):(await t.K_.stop(),t.x_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.x_.length} pending writes`),t.x_=[]))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Fm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Um(t,e){if(Jn("AsyncQueue",`${e}: ${t}`),$a(t))return new q(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=bo(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new As(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof As)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new As;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.U_=new Ne(G.comparator)}track(e){const n=e.doc.key,r=this.U_.get(n);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(n,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(n):e.type===1&&r.type===2?this.U_=this.U_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(n,{type:2,doc:e.doc}):X():this.U_=this.U_.insert(n,e)}W_(){const e=[];return this.U_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Us{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Us(e,n,As.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class HD{constructor(){this.queries=V_(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=V_(),s.forEach((o,l)=>{for(const u of l.z_)u.onError(r)})})(this,new q(F.ABORTED,"Firestore shutting down"))}}function V_(){return new Qs(t=>fT(t),Uc)}async function jm(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new qD,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await n.onListen(i,!0);break;case 1:s.G_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Um(o,`Initialization of query '${Yi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.z_.push(e),e.Y_(n.onlineState),s.G_&&e.Z_(s.G_)&&zm(n)}async function Bm(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $D(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.z_)l.Z_(i)&&(r=!0);o.G_=i}}r&&zm(n)}function GD(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(n);r.queries.delete(e)}function zm(t){t.J_.forEach(e=>{e.next()})}var zf,M_;(M_=zf||(zf={})).X_="default",M_.Cache="cache";class Wm{constructor(e,n,r){this.query=e,this.ea=n,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ta?this.ra(e)&&(this.ea.next(e),n=!0):this.ia(e,this.onlineState)&&(this.sa(e),n=!0),this.na=e,n}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let n=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),n=!0),n}ia(e,n){if(!e.fromCache||!this.H_())return!0;const r=n!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const n=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}sa(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==zf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.key=e}}class QT{constructor(e){this.key=e}}class KD{constructor(e,n){this.query=e,this.Ia=n,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=ie(),this.mutatedKeys=ie(),this.da=pT(e),this.Aa=new As(this.da)}get Ra(){return this.Ia}Va(e,n){const r=n?n.ma:new L_,i=n?n.Aa:this.Aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),I=jc(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let C=!1;m&&I?m.data.isEqual(I.data)?S!==k&&(r.track({type:3,doc:I}),C=!0):this.fa(m,I)||(r.track({type:2,doc:I}),C=!0,(u&&this.da(I,u)>0||c&&this.da(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),C=!0):m&&!I&&(r.track({type:1,doc:m}),C=!0,(u||c)&&(l=!0)),C&&(I?(o=o.add(I),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Aa:o,ma:r,ts:l,mutatedKeys:s}}fa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((d,p)=>function(I,S){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return k(I)-k(S)}(d.type,p.type)||this.da(d.doc,p.doc)),this.ga(r),i=i!=null&&i;const l=n&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,c=u!==this.Ta;return this.Ta=u,o.length!==0||c?{snapshot:new Us(this.query,e.Aa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new L_,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(n=>this.Ia=this.Ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ia=this.Ia.delete(n)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=ie(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const n=[];return e.forEach(r=>{this.Ea.has(r)||n.push(new QT(r))}),this.Ea.forEach(r=>{e.has(r)||n.push(new KT(r))}),n}Sa(e){this.Ia=e.Is,this.Ea=ie();const n=this.Va(e.documents);return this.applyChanges(n,!0)}ba(){return Us.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class QD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YD{constructor(e){this.key=e,this.Da=!1}}class XD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new Qs(l=>fT(l),Uc),this.Fa=new Map,this.Ma=new Set,this.xa=new Ne(G.comparator),this.Oa=new Map,this.Na=new xm,this.La={},this.Ba=new Map,this.ka=Fs.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function JD(t,e,n=!0){const r=tI(t);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await YT(r,e,n,!0),i}async function ZD(t,e){const n=tI(t);await YT(n,e,!0,!1)}async function YT(t,e,n,r){const i=await wD(t.localStore,kn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await eO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&zT(t.remoteStore,i),l}async function eO(t,e,n,r,i){t.Qa=(p,m,I)=>async function(k,C,v,y){let E=C.view.Va(v);E.ts&&(E=await x_(k.localStore,C.query,!1).then(({documents:T})=>C.view.Va(T,E)));const N=y&&y.targetChanges.get(C.targetId),L=y&&y.targetMismatches.get(C.targetId)!=null,M=C.view.applyChanges(E,k.isPrimaryClient,N,L);return U_(k,C.targetId,M.ya),M.snapshot}(t,p,m,I);const s=await x_(t.localStore,e,!0),o=new KD(e,s.Is),l=o.Va(s.documents),u=Qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);U_(t,n,c.ya);const d=new QD(e,n,o);return t.va.set(e,d),t.Fa.has(n)?t.Fa.get(n).push(e):t.Fa.set(n,[e]),c.snapshot}async function tO(t,e,n){const r=Z(t),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!Uc(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Om(r.remoteStore,i.targetId),Wf(r,i.targetId)}).catch(Ha)):(Wf(r,i.targetId),await Bf(r.localStore,i.targetId,!0))}async function nO(t,e){const n=Z(t),r=n.va.get(e),i=n.Fa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Om(n.remoteStore,r.targetId))}async function rO(t,e,n){const r=cO(t);try{const i=await function(o,l){const u=Z(o),c=He.now(),d=l.reduce((I,S)=>I.add(S.key),ie());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let S=Zn(),k=ie();return u.us.getEntries(I,d).next(C=>{S=C,S.forEach((v,y)=>{y.isValidDocument()||(k=k.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,S)).next(C=>{p=C;const v=[];for(const y of l){const E=Sb(y,p.get(y.key).overlayedDocument);E!=null&&v.push(new Yr(y.key,E,sT(E.value.mapValue),Pn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,v,l)}).next(C=>{m=C;const v=C.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(I,C.batchId,v)})}).then(()=>({batchId:m.batchId,changes:gT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.La[o.currentUser.toKey()];c||(c=new Ne(he)),c=c.insert(l,u),o.La[o.currentUser.toKey()]=c}(r,i.batchId,n),await Xa(r,i.changes),await $c(r.remoteStore)}catch(i){const s=Um(i,"Failed to persist write");n.reject(s)}}async function XT(t,e){const n=Z(t);try{const r=await vD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oa.get(s);o&&(ge(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?ge(o.Da):i.removedDocuments.size>0&&(ge(o.Da),o.Da=!1))}),await Xa(n,r,e)}catch(r){await Ha(r)}}function F_(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.va.forEach((s,o)=>{const l=o.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.z_)m.Y_(l)&&(c=!0)}),c&&zm(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iO(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new Ne(G.comparator);o=o.insert(s,gt.newNoDocument(s,J.min()));const l=ie().add(s),u=new Wc(J.min(),new Map,new Ne(he),o,l);await XT(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),qm(r)}else await Bf(r.localStore,e,!1).then(()=>Wf(r,e,n)).catch(Ha)}async function sO(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await yD(n.localStore,e);ZT(n,r,null),JT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xa(n,i)}catch(i){await Ha(i)}}async function oO(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ge(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);ZT(r,e,n),JT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xa(r,i)}catch(i){await Ha(i)}}function JT(t,e){(t.Ba.get(e)||[]).forEach(n=>{n.resolve()}),t.Ba.delete(e)}function ZT(t,e,n){const r=Z(t);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function Wf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fa.get(e))t.va.delete(r),n&&t.Ca.Ka(r,n);t.Fa.delete(e),t.isPrimaryClient&&t.Na.mr(e).forEach(r=>{t.Na.containsKey(r)||eI(t,r)})}function eI(t,e){t.Ma.delete(e.path.canonicalString());const n=t.xa.get(e);n!==null&&(Om(t.remoteStore,n),t.xa=t.xa.remove(e),t.Oa.delete(n),qm(t))}function U_(t,e,n){for(const r of n)r instanceof KT?(t.Na.addReference(r.key,e),aO(t,r)):r instanceof QT?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Na.removeReference(r.key,e),t.Na.containsKey(r.key)||eI(t,r.key)):X()}function aO(t,e){const n=e.key,r=n.path.canonicalString();t.xa.get(n)||t.Ma.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ma.add(r),qm(t))}function qm(t){for(;t.Ma.size>0&&t.xa.size<t.maxConcurrentLimboResolutions;){const e=t.Ma.values().next().value;t.Ma.delete(e);const n=new G(Ee.fromString(e)),r=t.ka.next();t.Oa.set(r,new YD(n)),t.xa=t.xa.insert(n,r),zT(t.remoteStore,new Tr(kn(Fc(n.path)),r,"TargetPurposeLimboResolution",Tm.oe))}}async function Xa(t,e,n){const r=Z(t),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{o.push(r.Qa(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Dm.Ui(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(u,c){const d=Z(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(c,m=>U.forEach(m.Ki,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>U.forEach(m.$i,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!$a(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=d.ss.get(m),S=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(S);d.ss=d.ss.insert(m,k)}}}(r.localStore,s))}async function lO(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await FT(n.localStore,e);n.currentUser=e,function(s,o){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new q(F.CANCELLED,o))})}),s.Ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xa(n,r.ls)}}function uO(t,e){const n=Z(t),r=n.Oa.get(e);if(r&&r.Da)return ie().add(r.key);{let i=ie();const s=n.Fa.get(e);if(!s)return i;for(const o of s){const l=n.va.get(o);i=i.unionWith(l.view.Ra)}return i}}function tI(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iO.bind(null,e),e.Ca.E_=$D.bind(null,e.eventManager),e.Ca.Ka=GD.bind(null,e.eventManager),e}function cO(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oO.bind(null,e),e}class j_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return gD(this.persistence,new pD,e.initialUser,this.serializer)}createPersistence(e){return new hD(bm.Yr,this.serializer)}createSharedClientState(e){return new ID}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>F_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lO.bind(null,this.syncEngine),await WD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HD}()}createDatastore(e){const n=qc(e.databaseInfo.databaseId),r=function(s){return new CD(s)}(e.databaseInfo);return function(s,o,l,u){return new ND(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new bD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>F_(this.syncEngine,n,0),function(){return D_.D()?new D_:new AD}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new XD(i,s,o,l,u,c);return d&&(p.qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);H("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Ya(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):Jn("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=nT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Um(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pd(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await FT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await pO(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>O_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>O_(e.remoteStore,i)),t._onlineComponents=e}function fO(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function pO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await pd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!fO(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await pd(t,new j_)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await pd(t,new j_);return t._offlineComponents}async function nI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await B_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await B_(t,new hO))),t._onlineComponents}function mO(t){return nI(t).then(e=>e.syncEngine)}async function nc(t){const e=await nI(t),n=e.eventManager;return n.onListen=JD.bind(null,e.syncEngine),n.onUnlisten=tO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ZD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nO.bind(null,e.syncEngine),n}function gO(t,e,n={}){const r=new Hn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Hm({next:m=>{o.enqueueAndForget(()=>Bm(s,p));const I=m.docs.has(l);!I&&m.fromCache?c.reject(new q(F.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new q(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Wm(Fc(l.path),d,{includeMetadataChanges:!0,oa:!0});return jm(s,p)}(await nc(t),t.asyncQueue,e,n,r)),r.promise}function yO(t,e,n={}){const r=new Hn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Hm({next:m=>{o.enqueueAndForget(()=>Bm(s,p)),m.fromCache&&u.source==="server"?c.reject(new q(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Wm(l,d,{includeMetadataChanges:!0,oa:!0});return jm(s,p)}(await nc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t,e,n){if(!n)throw new q(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vO(t,e,n,r){if(e===!0&&r===!0)throw new q(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function W_(t){if(!G.isDocumentKey(t))throw new q(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function q_(t){if(G.isDocumentKey(t))throw new q(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new q(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new H_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new H_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lx;switch(r.type){case"firstParty":return new Ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=z_.get(n);r&&(H("ComponentProvider","Removing Datastore"),z_.delete(n),r.terminate())}(this),Promise.resolve()}}function _O(t,e,n,r={}){var i;const s=(t=Zt(t,Kc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=pt.MOCK_USER;else{l=l1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new pt(c)}t._authCredentials=new Vx(new tT(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bi(this.firestore,e,this._query)}}class yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Lr extends Bi{constructor(e,n,r){super(e,n,Fc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new G(e))}withConverter(e){return new Lr(this.firestore,e,this._path)}}function md(t,e,...n){if(t=Pe(t),iI("collection","path",e),t instanceof Kc){const r=Ee.fromString(e,...n);return q_(r),new Lr(t,null,r)}{if(!(t instanceof yt||t instanceof Lr))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return q_(r),new Lr(t.firestore,null,r)}}function nt(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=nT.newId()),iI("doc","path",e),t instanceof Kc){const r=Ee.fromString(e,...n);return W_(r),new yt(t,null,new G(r))}{if(!(t instanceof yt||t instanceof Lr))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return W_(r),new yt(t.firestore,t instanceof Lr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new jT(this,"async_queue_retry"),this.Tu=()=>{const n=fd();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.e_.zo()};const e=fd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const n=fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const n=new Hn;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!$a(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const n=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Jn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=n,n}enqueueAfterDelay(e,n,r){this.Eu(),this.Iu.indexOf(e)>-1&&(n=0);const i=Fm.createAndSchedule(this,e,n,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&X()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const n of this.cu)if(n.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.cu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const n=this.cu.indexOf(e);this.cu.splice(n,1)}}function $_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Pi extends Kc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new EO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sI(this),this._firestoreClient.terminate()}}function wO(t,e){const n=typeof t=="object"?t:hm(),r=typeof t=="string"?t:"(default)",i=bc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=s1("firestore");s&&_O(i,...s)}return i}function Qc(t){return t._firestoreClient||sI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new Jx(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,rI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new dO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(at.fromBase64String(e))}catch(n){throw new q(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=/^__.*__$/;class IO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ka(e,this.data,n,this.fieldTransforms)}}class oI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Xc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new Xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return rc(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(aI(this.yu)&&TO.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class AO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qc(e)}Ou(e,n,r,i=!1){return new Xc({yu:e,methodName:n,xu:r,path:tt.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gm(t){const e=t._freezeSettings(),n=qc(t._databaseId);return new AO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function SO(t,e,n,r,i,s={}){const o=t.Ou(s.merge||s.mergeFields?2:0,e,n,i);Ym("Data must be an object, but it was:",o,r);const l=lI(r,o);let u,c;if(s.merge)u=new Ft(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=qf(e,p,n);if(!o.contains(m))throw new q(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);cI(d,m)||d.push(m)}u=new Ft(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new IO(new Nt(l),u,c)}class Jc extends Ja{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jc}}function RO(t,e,n){return new Xc({yu:3,xu:e.settings.xu,methodName:t._methodName,bu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Km extends Ja{_toFieldTransform(e){return new AT(e.path,new ka)}isEqual(e){return e instanceof Km}}class Qm extends Ja{constructor(e,n){super(e),this.Nu=n}_toFieldTransform(e){const n=RO(this,e,!0),r=this.Nu.map(s=>Xs(s,n)),i=new Ms(r);return new AT(e.path,i)}isEqual(e){return e instanceof Qm&&Ea(this.Nu,e.Nu)}}function CO(t,e,n,r){const i=t.Ou(1,e,n);Ym("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();Ui(r,(u,c)=>{const d=Xm(e,u,n);c=Pe(c);const p=i.Cu(d);if(c instanceof Jc)s.push(d);else{const m=Xs(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Ft(s);return new oI(o,l,i.fieldTransforms)}function kO(t,e,n,r,i,s){const o=t.Ou(1,e,n),l=[qf(e,r,n)],u=[i];if(s.length%2!=0)throw new q(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(qf(e,s[m])),u.push(s[m+1]);const c=[],d=Nt.empty();for(let m=l.length-1;m>=0;--m)if(!cI(c,l[m])){const I=l[m];let S=u[m];S=Pe(S);const k=o.Cu(I);if(S instanceof Jc)c.push(I);else{const C=Xs(S,k);C!=null&&(c.push(I),d.set(I,C))}}const p=new Ft(c);return new oI(d,p,o.fieldTransforms)}function PO(t,e,n,r=!1){return Xs(n,t.Ou(r?4:3,e))}function Xs(t,e){if(uI(t=Pe(t)))return Ym("Unsupported field value:",e,t),lI(t,e);if(t instanceof Ja)return function(r,i){if(!aI(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Xs(l,i.vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _b(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=He.fromDate(r);return{timestampValue:ec(i.serializer,s)}}if(r instanceof He){const s=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ec(i.serializer,s)}}if(r instanceof $m)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:xT(i.serializer,r._byteString)};if(r instanceof yt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Nm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${Gc(r)}`)}(t,e)}function lI(t,e){const n={};return rT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=Xs(i,e.Su(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function uI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof $m||t instanceof js||t instanceof yt||t instanceof Ja)}function Ym(t,e,n){if(!uI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Gc(n);throw r==="an object"?e.Fu(t+" a custom object"):e.Fu(t+" "+r)}}function qf(t,e,n){if((e=Pe(e))instanceof Yc)return e._internalPath;if(typeof e=="string")return Xm(t,e);throw rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const NO=new RegExp("[~\\*/\\[\\]]");function Xm(t,e,n){if(e.search(NO)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yc(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(F.INVALID_ARGUMENT,l+t+u)}function cI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xO extends hI{data(){return super.data()}}function Jm(t,e){return typeof e=="string"?Xm(t,e):e instanceof Yc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zm{}class bO extends Zm{}function DO(t,e,...n){let r=[];e instanceof Zm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof eg).length,l=s.filter(u=>u instanceof Zc).length;if(o>1||o>0&&l>0)throw new q(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zc extends bO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zc(e,n,r)}_apply(e){const n=this._parse(e);return fI(e._query,n),new Bi(e.firestore,e.converter,Lf(e._query,n))}_parse(e){const n=Gm(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Q_(p,d);const I=[];for(const S of p)I.push(K_(u,s,S));m={arrayValue:{values:I}}}else m=K_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Q_(p,d),m=PO(l,o,p,d==="in"||d==="not-in");return je.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function G_(t,e,n){const r=e,i=Jm("where",t);return Zc._create(i,r,n)}class eg extends Zm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new eg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)fI(o,u),o=Lf(o,u)}(e._query,n),new Bi(e.firestore,e.converter,Lf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function K_(t,e,n){if(typeof(n=Pe(n))=="string"){if(n==="")throw new q(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dT(e)&&n.indexOf("/")!==-1)throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!G.isDocumentKey(r))throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return p_(t,new G(r))}if(n instanceof yt)return p_(t,n._key);throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gc(n)}.`)}function Q_(t,e){if(!Array.isArray(t)||t.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fI(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class OO{convertValue(e,n="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new $m(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Am(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sa(e));default:return null}}convertTimestamp(e){const n=jr(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);ge(MT(r));const i=new Ra(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Jn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pI extends hI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pu extends pI{data(e={}){return super.data(e)}}class mI{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Oo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pu(this._firestore,this._userDataWriter,r.key,r,new Oo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new pu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Oo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new pu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Oo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:VO(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){t=Zt(t,yt);const e=Zt(t.firestore,Pi);return gO(Qc(e),t._key).then(n=>vI(e,t,n))}class tg extends OO{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function MO(t){t=Zt(t,Bi);const e=Zt(t.firestore,Pi),n=Qc(e),r=new tg(e);return dI(t._query),yO(n,t._query).then(i=>new mI(e,r,t,i))}function Hf(t,e,n){t=Zt(t,yt);const r=Zt(t.firestore,Pi),i=LO(t.converter,e);return yI(r,[SO(Gm(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Pn.none())])}function _n(t,e,n,...r){t=Zt(t,yt);const i=Zt(t.firestore,Pi),s=Gm(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof Yc?kO(s,"updateDoc",t._key,e,n,r):CO(s,"updateDoc",t._key,e),yI(i,[o.toMutation(t._key,Pn.exists(!0))])}function gI(t,...e){var n,r,i;t=Pe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||$_(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if($_(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof yt)c=Zt(t.firestore,Pi),d=Fc(t._key.path),u={next:p=>{e[o]&&e[o](vI(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Zt(t,Bi);c=Zt(p.firestore,Pi),d=p._query;const m=new tg(c);u={next:I=>{e[o]&&e[o](new mI(c,m,p,I))},error:e[o+1],complete:e[o+2]},dI(t._query)}return function(m,I,S,k){const C=new Hm(k),v=new Wm(I,C,S);return m.asyncQueue.enqueueAndForget(async()=>jm(await nc(m),v)),()=>{C.Ga(),m.asyncQueue.enqueueAndForget(async()=>Bm(await nc(m),v))}}(Qc(c),d,l,u)}function yI(t,e){return function(r,i){const s=new Hn;return r.asyncQueue.enqueueAndForget(async()=>rO(await mO(r),i,s)),s.promise}(Qc(t),e)}function vI(t,e,n){const r=n.docs.get(e._key),i=new tg(t);return new pI(t,i,e._key,r,new Oo(n.hasPendingWrites,n.fromCache),e.converter)}function FO(){return new Km("serverTimestamp")}function ic(...t){return new Qm("arrayUnion",t)}(function(e,n=!0){(function(i){Ks=i})(Mi),Ii(new Fr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Pi(new Mx(r.getProvider("auth-internal")),new Bx(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Sn(c_,"4.6.5",e),Sn(c_,"4.6.5","esm2017")})();function _I(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=_I(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Ir(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=_I(t))&&(r&&(r+=" "),r+=e);return r}const Na=t=>typeof t=="number"&&!isNaN(t),fi=t=>typeof t=="string",Ut=t=>typeof t=="function",mu=t=>fi(t)||Ut(t)?t:null,$f=t=>V.isValidElement(t)||fi(t)||Ut(t)||Na(t);function UO(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function eh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:l,position:u,preventExitTransition:c,done:d,nodeRef:p,isIn:m,playToast:I}=o;const S=r?`${e}--${u}`:e,k=r?`${n}--${u}`:n,C=V.useRef(0);return V.useLayoutEffect(()=>{const v=p.current,y=S.split(" "),E=N=>{N.target===p.current&&(I(),v.removeEventListener("animationend",E),v.removeEventListener("animationcancel",E),C.current===0&&N.type!=="animationcancel"&&v.classList.remove(...y))};v.classList.add(...y),v.addEventListener("animationend",E),v.addEventListener("animationcancel",E)},[]),V.useEffect(()=>{const v=p.current,y=()=>{v.removeEventListener("animationend",y),i?UO(v,d,s):d()};m||(c?y():(C.current=1,v.className+=` ${k}`,v.addEventListener("animationend",y)))},[m]),de.createElement(de.Fragment,null,l)}}function Y_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const At=new Map;let xa=[];const Gf=new Set,jO=t=>Gf.forEach(e=>e(t)),EI=()=>At.size>0;function wI(t,e){var n;if(e)return!((n=At.get(e))==null||!n.isToastActive(t));let r=!1;return At.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function TI(t,e){$f(t)&&(EI()||xa.push({content:t,options:e}),At.forEach(n=>{n.buildToast(t,e)}))}function X_(t,e){At.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function BO(t){const{subscribe:e,getSnapshot:n,setProps:r}=V.useRef(function(s){const o=s.containerId||1;return{subscribe(l){const u=function(d,p,m){let I=1,S=0,k=[],C=[],v=[],y=p;const E=new Map,N=new Set,L=()=>{v=Array.from(E.values()),N.forEach(g=>g())},M=g=>{C=g==null?[]:C.filter(w=>w!==g),L()},T=g=>{const{toastId:w,onOpen:A,updateId:P,children:x}=g.props,R=P==null;g.staleId&&E.delete(g.staleId),E.set(w,g),C=[...C,g.props.toastId].filter(pe=>pe!==g.staleId),L(),m(Y_(g,R?"added":"updated")),R&&Ut(A)&&A(V.isValidElement(x)&&x.props)};return{id:d,props:y,observe:g=>(N.add(g),()=>N.delete(g)),toggle:(g,w)=>{E.forEach(A=>{w!=null&&w!==A.props.toastId||Ut(A.toggle)&&A.toggle(g)})},removeToast:M,toasts:E,clearQueue:()=>{S-=k.length,k=[]},buildToast:(g,w)=>{if((ee=>{let{containerId:oe,toastId:Oe,updateId:Ve}=ee;const Xe=oe?oe!==d:d!==1,_t=E.has(Oe)&&Ve==null;return Xe||_t})(w))return;const{toastId:A,updateId:P,data:x,staleId:R,delay:pe}=w,Ye=()=>{M(A)},Kt=P==null;Kt&&S++;const Be={...y,style:y.toastStyle,key:I++,...Object.fromEntries(Object.entries(w).filter(ee=>{let[oe,Oe]=ee;return Oe!=null})),toastId:A,updateId:P,data:x,closeToast:Ye,isIn:!1,className:mu(w.className||y.toastClassName),bodyClassName:mu(w.bodyClassName||y.bodyClassName),progressClassName:mu(w.progressClassName||y.progressClassName),autoClose:!w.isLoading&&(z=w.autoClose,K=y.autoClose,z===!1||Na(z)&&z>0?z:K),deleteToast(){const ee=E.get(A),{onClose:oe,children:Oe}=ee.props;Ut(oe)&&oe(V.isValidElement(Oe)&&Oe.props),m(Y_(ee,"removed")),E.delete(A),S--,S<0&&(S=0),k.length>0?T(k.shift()):L()}};var z,K;Be.closeButton=y.closeButton,w.closeButton===!1||$f(w.closeButton)?Be.closeButton=w.closeButton:w.closeButton===!0&&(Be.closeButton=!$f(y.closeButton)||y.closeButton);let Q=g;V.isValidElement(g)&&!fi(g.type)?Q=V.cloneElement(g,{closeToast:Ye,toastProps:Be,data:x}):Ut(g)&&(Q=g({closeToast:Ye,toastProps:Be,data:x}));const ce={content:Q,props:Be,staleId:R};y.limit&&y.limit>0&&S>y.limit&&Kt?k.push(ce):Na(pe)?setTimeout(()=>{T(ce)},pe):T(ce)},setProps(g){y=g},setToggle:(g,w)=>{E.get(g).toggle=w},isToastActive:g=>C.some(w=>w===g),getSnapshot:()=>y.newestOnTop?v.reverse():v}}(o,s,jO);At.set(o,u);const c=u.observe(l);return xa.forEach(d=>TI(d.content,d.options)),xa=[],()=>{c(),At.delete(o)}},setProps(l){var u;(u=At.get(o))==null||u.setProps(l)},getSnapshot(){var l;return(l=At.get(o))==null?void 0:l.getSnapshot()}}}(t)).current;r(t);const i=V.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(l=>{const{position:u}=l.props;o.has(u)||o.set(u,[]),o.get(u).push(l)}),Array.from(o,l=>s(l[0],l[1]))},isToastActive:wI,count:i==null?void 0:i.length}}function zO(t){const[e,n]=V.useState(!1),[r,i]=V.useState(!1),s=V.useRef(null),o=V.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:p}=t;var m,I;function S(){n(!0)}function k(){n(!1)}function C(E){const N=s.current;o.canDrag&&N&&(o.didMove=!0,e&&k(),o.delta=t.draggableDirection==="x"?E.clientX-o.start:E.clientY-o.start,o.start!==E.clientX&&(o.canCloseOnClick=!1),N.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,N.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function v(){document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",v);const E=s.current;if(o.canDrag&&o.didMove&&E){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();E.style.transition="transform 0.2s, opacity 0.2s",E.style.removeProperty("transform"),E.style.removeProperty("opacity")}}(I=At.get((m={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||I.setToggle(m.id,m.fn),V.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||k(),window.addEventListener("focus",S),window.addEventListener("blur",k),()=>{window.removeEventListener("focus",S),window.removeEventListener("blur",k)}},[t.pauseOnFocusLoss]);const y={onPointerDown:function(E){if(t.draggable===!0||t.draggable===E.pointerType){o.didMove=!1,document.addEventListener("pointermove",C),document.addEventListener("pointerup",v);const N=s.current;o.canCloseOnClick=!0,o.canDrag=!0,N.style.transition="none",t.draggableDirection==="x"?(o.start=E.clientX,o.removalDistance=N.offsetWidth*(t.draggablePercent/100)):(o.start=E.clientY,o.removalDistance=N.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(E){const{top:N,bottom:L,left:M,right:T}=s.current.getBoundingClientRect();E.nativeEvent.type!=="touchend"&&t.pauseOnHover&&E.clientX>=M&&E.clientX<=T&&E.clientY>=N&&E.clientY<=L?k():S()}};return l&&u&&(y.onMouseEnter=k,t.stacked||(y.onMouseLeave=S)),p&&(y.onClick=E=>{d&&d(E),o.canCloseOnClick&&c()}),{playToast:S,pauseToast:k,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:y}}function WO(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:l,controlledProgress:u,progress:c,rtl:d,isIn:p,theme:m}=t;const I=s||u&&c===0,S={...l,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(S.transform=`scaleX(${c})`);const k=Ir("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":d}),C=Ut(o)?o({rtl:d,type:i,defaultClassName:k}):Ir(k,o),v={[u&&c>=1?"onTransitionEnd":"onAnimationEnd"]:u&&c<1?null:()=>{p&&r()}};return de.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":I},de.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${i}`}),de.createElement("div",{role:"progressbar","aria-hidden":I?"true":"false","aria-label":"notification timer",className:C,style:S,...v}))}let qO=1;const II=()=>""+qO++;function HO(t){return t&&(fi(t.toastId)||Na(t.toastId))?t.toastId:II()}function Xo(t,e){return TI(t,e),e.toastId}function sc(t,e){return{...e,type:e&&e.type||t,toastId:HO(e)}}function zl(t){return(e,n)=>Xo(e,sc(t,n))}function re(t,e){return Xo(t,sc("default",e))}re.loading=(t,e)=>Xo(t,sc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),re.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=fi(i)?re.loading(i,n):re.loading(i.render,{...n,...i}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(d,p,m)=>{if(p==null)return void re.dismiss(r);const I={type:d,...l,...n,data:m},S=fi(p)?{render:p}:p;return r?re.update(r,{...I,...S}):re(S.render,{...I,...S}),m},c=Ut(t)?t():t;return c.then(d=>u("success",o,d)).catch(d=>u("error",s,d)),c},re.success=zl("success"),re.info=zl("info"),re.error=zl("error"),re.warning=zl("warning"),re.warn=re.warning,re.dark=(t,e)=>Xo(t,sc("default",{theme:"dark",...e})),re.dismiss=function(t){(function(e){var n;if(EI()){if(e==null||fi(n=e)||Na(n))At.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=At.get(e.containerId);r?r.removeToast(e.id):At.forEach(i=>{i.removeToast(e.id)})}}else xa=xa.filter(r=>e!=null&&r.options.toastId!==e)})(t)},re.clearWaitingQueue=function(t){t===void 0&&(t={}),At.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},re.isActive=wI,re.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=At.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:II()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Xo(o,s)}},re.done=t=>{re.update(t,{progress:1})},re.onChange=function(t){return Gf.add(t),()=>{Gf.delete(t)}},re.play=t=>X_(!0,t),re.pause=t=>X_(!1,t);const $O=typeof window<"u"?V.useLayoutEffect:V.useEffect,Wl=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return de.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},gd={info:function(t){return de.createElement(Wl,{...t},de.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return de.createElement(Wl,{...t},de.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return de.createElement(Wl,{...t},de.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return de.createElement(Wl,{...t},de.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return de.createElement("div",{className:"Toastify__spinner"})}},GO=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=zO(t),{closeButton:o,children:l,autoClose:u,onClick:c,type:d,hideProgressBar:p,closeToast:m,transition:I,position:S,className:k,style:C,bodyClassName:v,bodyStyle:y,progressClassName:E,progressStyle:N,updateId:L,role:M,progress:T,rtl:g,toastId:w,deleteToast:A,isIn:P,isLoading:x,closeOnClick:R,theme:pe}=t,Ye=Ir("Toastify__toast",`Toastify__toast-theme--${pe}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":g},{"Toastify__toast--close-on-click":R}),Kt=Ut(k)?k({rtl:g,position:S,type:d,defaultClassName:Ye}):Ir(Ye,k),Be=function(ce){let{theme:ee,type:oe,isLoading:Oe,icon:Ve}=ce,Xe=null;const _t={theme:ee,type:oe};return Ve===!1||(Ut(Ve)?Xe=Ve({..._t,isLoading:Oe}):V.isValidElement(Ve)?Xe=V.cloneElement(Ve,_t):Oe?Xe=gd.spinner():(ah=>ah in gd)(oe)&&(Xe=gd[oe](_t))),Xe}(t),z=!!T||!u,K={closeToast:m,type:d,theme:pe};let Q=null;return o===!1||(Q=Ut(o)?o(K):V.isValidElement(o)?V.cloneElement(o,K):function(ce){let{closeToast:ee,theme:oe,ariaLabel:Oe="close"}=ce;return de.createElement("button",{className:`Toastify__close-button Toastify__close-button--${oe}`,type:"button",onClick:Ve=>{Ve.stopPropagation(),ee(Ve)},"aria-label":Oe},de.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},de.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(K)),de.createElement(I,{isIn:P,done:A,position:S,preventExitTransition:n,nodeRef:r,playToast:s},de.createElement("div",{id:w,onClick:c,"data-in":P,className:Kt,...i,style:C,ref:r},de.createElement("div",{...P&&{role:M},className:Ut(v)?v({type:d}):Ir("Toastify__toast-body",v),style:y},Be!=null&&de.createElement("div",{className:Ir("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!x})},Be),de.createElement("div",null,l)),Q,de.createElement(WO,{...L&&!z?{key:`pb-${L}`}:{},rtl:g,theme:pe,delay:u,isRunning:e,isIn:P,closeToast:m,hide:p,type:d,style:N,className:E,controlledProgress:z,progress:T||0})))},th=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},KO=eh(th("bounce",!0));eh(th("slide",!0));eh(th("zoom"));eh(th("flip"));const QO={position:"top-right",transition:KO,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function YO(t){let e={...QO,...t};const n=t.stacked,[r,i]=V.useState(!0),s=V.useRef(null),{getToastToRender:o,isToastActive:l,count:u}=BO(e),{className:c,style:d,rtl:p,containerId:m}=e;function I(k){const C=Ir("Toastify__toast-container",`Toastify__toast-container--${k}`,{"Toastify__toast-container--rtl":p});return Ut(c)?c({position:k,rtl:p,defaultClassName:C}):Ir(C,mu(c))}function S(){n&&(i(!0),re.play())}return $O(()=>{if(n){var k;const C=s.current.querySelectorAll('[data-in="true"]'),v=12,y=(k=e.position)==null?void 0:k.includes("top");let E=0,N=0;Array.from(C).reverse().forEach((L,M)=>{const T=L;T.classList.add("Toastify__toast--stacked"),M>0&&(T.dataset.collapsed=`${r}`),T.dataset.pos||(T.dataset.pos=y?"top":"bot");const g=E*(r?.2:1)+(r?0:v*M);T.style.setProperty("--y",`${y?g:-1*g}px`),T.style.setProperty("--g",`${v}`),T.style.setProperty("--s",""+(1-(r?N:0))),E+=T.offsetHeight,N+=.025})}},[r,u,n]),de.createElement("div",{ref:s,className:"Toastify",id:m,onMouseEnter:()=>{n&&(i(!1),re.pause())},onMouseLeave:S},o((k,C)=>{const v=C.length?{...d}:{...d,pointerEvents:"none"};return de.createElement("div",{className:I(k),style:v,key:`container-${k}`},C.map(y=>{let{content:E,props:N}=y;return de.createElement(GO,{...N,stacked:n,collapseAll:S,isIn:l(N.toastId,N.containerId),style:N.style,key:`toast-${N.key}`},E)}))}))}const XO={apiKey:"AIzaSyARbt423q886JWW0mFtf8npqhW-XkztnN0",authDomain:"chat-application-react-2c746.firebaseapp.com",projectId:"chat-application-react-2c746",storageBucket:"chat-application-react-2c746.appspot.com",messagingSenderId:"128551585008",appId:"1:128551585008:web:645ea8cc54607675f0ee35"},AI=h1(XO),zi=Dx(AI),Ke=wO(AI),JO=async(t,e,n)=>{try{const i=(await y2(zi,e,n)).user;await Hf(nt(Ke,"users",i.uid),{id:i.uid,username:t.toLowerCase(),email:e,name:"",avatar:"",bio:"",lastSeen:Date.now()}),await Hf(nt(Ke,"chats",i.uid),{chatsData:[]})}catch(r){console.error(r),re.error(r.code.split("/")[1].split("-").join(" "))}},ZO=async(t,e)=>{try{await v2(zi,t,e)}catch(n){console.error(n),re.error(n.code.split("/")[1].split("-").join(" "))}},Kf=async()=>{try{await w2(zi)}catch(t){console.error(t),re.error(t.code.split("/")[1].split("-").join(" "))}},eL=async t=>{if(!t)return re.error("Enter your email"),null;try{const e=collection(Ke,"users"),n=query(e,where("email","==",t));(await getDocs(n)).empty?re.error("Email doesn't exists"):(await sendPasswordResetEmail(zi,t),re.success("Reset Email Sent"))}catch(e){console.error(e),re.error(e.message)}},tL=()=>{const[t,e]=V.useState("Sign up"),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,l]=V.useState(""),u=c=>{c.preventDefault(),t==="Sign up"?JO(n,i,o):ZO(i,o)};return O.jsx("div",{className:"login-container",children:O.jsxs("div",{className:"login-card",children:[O.jsxs("div",{className:"logo-container",children:[O.jsx("img",{className:"logo",src:yn.applogo,alt:"Logo"}),O.jsx("span",{className:"logo-text",children:"Chime In"})]}),O.jsx("h2",{className:"login-title",children:t}),O.jsxs("form",{onSubmit:u,className:"login-form",children:[t==="Sign up"&&O.jsxs("div",{className:"form-group",children:[O.jsx("label",{htmlFor:"username",children:"Username"}),O.jsx("input",{id:"username",onChange:c=>r(c.target.value),value:n,className:"form-input",type:"text",placeholder:"Enter your username",required:!0})]}),O.jsxs("div",{className:"form-group",children:[O.jsx("label",{htmlFor:"email",children:"Email Address"}),O.jsx("input",{id:"email",onChange:c=>s(c.target.value),value:i,className:"form-input",type:"email",placeholder:"Enter your email",required:!0})]}),O.jsxs("div",{className:"form-group",children:[O.jsx("label",{htmlFor:"password",children:"Password"}),O.jsx("input",{id:"password",onChange:c=>l(c.target.value),value:o,className:"form-input",type:"password",placeholder:"Enter your password",required:!0})]}),O.jsx("button",{type:"submit",className:"submit-btn",children:t==="Sign up"?"Create Account":"Login"})]}),O.jsxs("div",{className:"login-options",children:[O.jsxs("div",{className:"login-term",children:[O.jsx("input",{type:"checkbox",id:"terms"}),O.jsx("label",{htmlFor:"terms",children:"I agree to the terms of use & privacy policy"})]}),O.jsx("div",{className:"login-toggle",children:t==="Sign up"?O.jsxs("p",{children:["Already have an account?"," ",O.jsx("span",{onClick:()=>e("Login"),children:"Login here"})]}):O.jsxs("p",{children:["Don't have an account?"," ",O.jsx("span",{onClick:()=>e("Sign up"),children:"Sign up here"})]})}),t==="Login"&&O.jsx("div",{className:"forgot-password",children:O.jsxs("p",{children:["Forgot Password?"," ",O.jsx("span",{onClick:()=>eL(i),children:"Reset here"})]})})]})]})})},Wi=V.createContext(),nL=t=>{const[e,n]=V.useState(null),[r,i]=V.useState(null),[s,o]=V.useState(null),[l,u]=V.useState([]),[c,d]=V.useState(null),[p,m]=V.useState(!1),[I,S]=V.useState({}),k=Nc(),C=async E=>{try{const N=nt(Ke,"users",E),M=(await Ni(N)).data();n(M),M.avatar&&M.name?k("/chat"):k("/profile"),await _n(N,{lastSeen:Date.now()}),setInterval(async()=>{zi.currentUser&&await _n(N,{lastSeen:Date.now()})},6e4)}catch(N){re.error(N.message)}};V.useEffect(()=>{if(e){const E=nt(Ke,"chats",e.id),N=gI(E,async L=>{const M=L.data().chatsData,T=[];for(const g of M){const w=nt(Ke,"users",g.rId),P=(await Ni(w)).data();T.push({...g,userData:P}),S(x=>({...x,[g.rId]:P.lastSeen}))}i(T.sort((g,w)=>w.updatedAt-g.updatedAt))});return()=>{N()}}},[e]);const y={userData:e,setUserData:n,loadUserData:C,chatData:r,messagesId:s,setMessagesId:o,chatUser:c,setChatUser:d,chatVisible:p,setChatVisible:m,messages:l,setMessages:u,activeUsers:I,updateActiveUsers:(E,N)=>{S(L=>({...L,[E]:N}))}};return O.jsx(Wi.Provider,{value:y,children:t.children})},rL=()=>{const{chatData:t,userData:e,chatUser:n,setChatUser:r,setMessagesId:i,messagesId:s,chatVisible:o,setChatVisible:l}=V.useContext(Wi),[u,c]=V.useState([]),[d,p]=V.useState(!1),m=Nc(),I=async v=>{try{const y=v.target.value.toLowerCase();if(y){p(!0);const E=md(Ke,"users"),N=DO(E,G_("name",">=",y),G_("name","<=",y+"")),M=(await MO(N)).docs.map(T=>T.data()).filter(T=>T.id!==e.id&&!t.some(g=>g.rId===T.id));c(M)}else p(!1),c([])}catch(y){re.error(y.message)}},S=async v=>{const y=md(Ke,"messages"),E=md(Ke,"chats");try{if(v.id===e.id)return 0;const N=nt(y);await Hf(N,{createAt:FO(),messages:[]}),await _n(nt(E,v.id),{chatsData:ic({messageId:N.id,lastMessage:"",rId:e.id,updatedAt:Date.now(),messageSeen:!0,initiatedByCurrentUser:!1})}),await _n(nt(E,e.id),{chatsData:ic({messageId:N.id,lastMessage:"",rId:v.id,updatedAt:Date.now(),messageSeen:!0,initiatedByCurrentUser:!0})}),k({messageId:N.id,lastMessage:"",rId:v.id,updatedAt:Date.now(),messageSeen:!0,userData:v,initiatedByCurrentUser:!0}),p(!1),l(!0)}catch(N){re.error(N.message)}},k=async v=>{i(v.messageId),r(v);const y=nt(Ke,"chats",e.id),N=(await Ni(y)).data(),L=N.chatsData.findIndex(M=>M.messageId===v.messageId);N.chatsData[L].messageSeen=!0,await _n(y,{chatsData:N.chatsData}),l(!0)};V.useEffect(()=>{(async()=>{if(n){const y=nt(Ke,"users",n.userData.id),N=(await Ni(y)).data();r(L=>({...L,userData:N}))}})()},[t]);const C=v=>{if(!v)return"";const y=new Date(v);let E=y.getHours();const N=y.getMinutes().toString().padStart(2,"0"),L=E>=12?"PM":"AM";return E=E%12,E=E||12,`${E}:${N} ${L}`};return O.jsxs("div",{className:`ls ${o?"hidden":""}`,children:[O.jsxs("div",{className:"ls-top",children:[O.jsxs("div",{className:"ls-nav",children:[O.jsx("img",{className:"logo",src:yn.logo,alt:""}),O.jsxs("div",{className:"menu",children:[O.jsx("img",{src:yn.menu_icon,alt:""}),O.jsxs("div",{className:"sub-menu",children:[O.jsx("p",{onClick:()=>m("/profile"),children:"Edit Profile"}),O.jsx("hr",{}),O.jsx("p",{onClick:()=>Kf(),children:"Logout"})]})]})]}),O.jsxs("div",{className:"ls-search",children:[O.jsx("img",{src:yn.search_icon,alt:""}),O.jsx("input",{onChange:I,type:"text",placeholder:"Search here.."})]})]}),O.jsx("div",{className:"ls-list",children:d?u.length>0?u.map((v,y)=>O.jsxs("div",{onClick:()=>S(v),className:"friends add-user",children:[O.jsx("img",{src:v.avatar,alt:""}),O.jsx("p",{children:v.name})]},y)):O.jsx("div",{className:"no-results",children:"No users found"}):t.map((v,y)=>O.jsxs("div",{onClick:()=>k(v),className:`friends ${v.messageSeen||v.messageId===s?"":"border"}`,children:[O.jsx("img",{src:v.userData.avatar,alt:""}),Date.now()-v.userData.lastSeen<=7e4&&v.initiatedByCurrentUser&&O.jsx("div",{className:"active-dot"}),O.jsxs("div",{children:[O.jsx("p",{children:v.userData.name}),O.jsx("span",{children:v.lastMessage.slice(0,30)}),O.jsx("small",{children:C(v.updatedAt)})]})]},y))})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="firebasestorage.googleapis.com",RI="storageBucket",iL=2*60*1e3,sL=10*60*1e3,oL=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Dn{constructor(e,n,r=0){super(yd(e),`Firebase Storage: ${n} (${yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function yd(t){return"storage/"+t}function ng(){const t="An unknown error occurred, please check the error payload for server response.";return new xe(Ie.UNKNOWN,t)}function aL(t){return new xe(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function lL(t){return new xe(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function uL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Ie.UNAUTHENTICATED,t)}function cL(){return new xe(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hL(t){return new xe(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function CI(){return new xe(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kI(){return new xe(Ie.CANCELED,"User canceled the upload/download.")}function dL(t){return new xe(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function fL(t){return new xe(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function pL(){return new xe(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+RI+"' property when initializing the app?")}function PI(){return new xe(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mL(){return new xe(Ie.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function gL(){return new xe(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yL(t){return new xe(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qf(t){return new xe(Ie.INVALID_ARGUMENT,t)}function NI(){return new xe(Ie.APP_DELETED,"The Firebase app was deleted.")}function vL(t){return new xe(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Jo(t,e){return new xe(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ao(t){throw new xe(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw fL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},k=n===SI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",v=new RegExp(`^https?://${k}/${i}/${C}`,"i"),E=[{regex:l,indices:u,postModify:s},{regex:I,indices:S,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<E.length;N++){const L=E[N],M=L.regex.exec(e);if(M){const T=M[L.indices.bucket];let g=M[L.indices.path];g||(g=""),r=new jt(T,g),L.postModify(r);break}}if(r==null)throw dL(e);return r}}class _L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...C){c||(c=!0,e.apply(null,C))}function p(C){i=setTimeout(()=>{i=null,t(I,u())},C)}function m(){s&&clearTimeout(s)}function I(C,...v){if(c){m();return}if(C){m(),d.call(null,C,...v);return}if(u()||o){m(),d.call(null,C,...v);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,p(E)}let S=!1;function k(C){S||(S=!0,m(),!c&&(i!==null?(C||(l=2),clearTimeout(i),p(0)):C||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function wL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){return t!==void 0}function IL(t){return typeof t=="function"}function AL(t){return typeof t=="object"&&!Array.isArray(t)}function nh(t){return typeof t=="string"||t instanceof String}function J_(t){return rg()&&t instanceof Blob}function rg(){return typeof Blob<"u"}function Z_(t,e,n,r){if(r<e)throw Qf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function xI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pi||(pi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,S)=>{this.resolve_=I,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ql(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===pi.NO_ERROR,u=s.getStatus();if(!l||bI(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===pi.ABORT;r(!1,new ql(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ql(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());TL(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=ng();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?NI():kI();o(u)}else{const u=CI();o(u)}};this.canceled_?n(!1,new ql(!1,null,!0)):this.backoffId_=EL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ql{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function RL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function PL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function NL(t,e,n,r,i,s,o=!0){const l=xI(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return kL(c,e),RL(c,n),CL(c,s),PL(c,r),new SL(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bL(...t){const e=xL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(rg())return new Blob(t);throw new xe(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function DL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(t){if(typeof atob>"u")throw yL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class vd{constructor(e,n){this.data=e,this.contentType=n||null}}function LL(t,e){switch(t){case En.RAW:return new vd(DI(e));case En.BASE64:case En.BASE64URL:return new vd(OI(t,e));case En.DATA_URL:return new vd(ML(e),FL(e))}throw ng()}function DI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function VL(t){let e;try{e=decodeURIComponent(t)}catch{throw Jo(En.DATA_URL,"Malformed data URL.")}return DI(e)}function OI(t,e){switch(t){case En.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Jo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case En.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Jo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=OL(e)}catch(i){throw i.message.includes("polyfill")?i:Jo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class LI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Jo(En.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=UL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ML(t){const e=new LI(t);return e.base64?OI(En.BASE64,e.rest):VL(e.rest)}function FL(t){return new LI(t).contentType}function UL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n){let r=0,i="";J_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(J_(this.data_)){const r=this.data_,i=DL(r,e,n);return i===null?null:new vr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new vr(r,!0)}}static getBlob(...e){if(rg()){const n=e.map(r=>r instanceof vr?r.data_:r);return new vr(bL.apply(null,n))}else{const n=e.map(o=>nh(o)?LL(En.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new vr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t){let e;try{e=JSON.parse(t)}catch{return null}return AL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function MI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zL(t,e){return e}class Tt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||zL}}let Hl=null;function WL(t){return!nh(t)||t.length<2?t:MI(t)}function FI(){if(Hl)return Hl;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(s,o){return WL(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Tt("size");return i.xform=r,t.push(i),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),Hl=t,Hl}function qL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new jt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function HL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return qL(r,t),r}function UI(t,e,n){const r=VI(e);return r===null?null:HL(t,r,n)}function $L(t,e,n,r){const i=VI(e);if(i===null||!nh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),I=Za(m,n,r),S=xI({alt:"media",token:c});return I+S})[0]}function jI(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Js{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){if(!t)throw ng()}function ig(t,e){function n(r,i){const s=UI(t,i,e);return $n(s!==null),s}return n}function GL(t,e){function n(r,i){const s=UI(t,i,e);return $n(s!==null),$L(s,i,t.host,t._protocol)}return n}function el(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=cL():i=uL():n.getStatus()===402?i=lL(t.bucket):n.getStatus()===403?i=hL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function BI(t){const e=el(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=aL(t.path)),s.serverResponse=i.serverResponse,s}return n}function KL(t,e,n){const r=e.fullServerUrl(),i=Za(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Js(i,s,ig(t,n),o);return l.errorHandler=BI(e),l}function QL(t,e,n){const r=e.fullServerUrl(),i=Za(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Js(i,s,GL(t,n),o);return l.errorHandler=BI(e),l}function YL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function zI(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=YL(null,e)),r}function XL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let N=0;N<2;N++)E=E+Math.random().toString().slice(2);return E}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=zI(e,r,i),d=jI(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",I=vr.getBlob(p,r,m);if(I===null)throw PI();const S={name:c.fullPath},k=Za(s,t.host,t._protocol),C="POST",v=t.maxUploadRetryTime,y=new Js(k,C,ig(t,n),v);return y.urlParams=S,y.headers=o,y.body=I.uploadData(),y.errorHandler=el(e),y}class oc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function sg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{$n(!1)}return $n(!!n&&(e||["active"]).indexOf(n)!==-1),n}function JL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=zI(e,r,i),l={name:o.fullPath},u=Za(s,t.host,t._protocol),c="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=jI(o,n),m=t.maxUploadRetryTime;function I(k){sg(k);let C;try{C=k.getResponseHeader("X-Goog-Upload-URL")}catch{$n(!1)}return $n(nh(C)),C}const S=new Js(u,c,I,m);return S.urlParams=l,S.headers=d,S.body=p,S.errorHandler=el(e),S}function ZL(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const d=sg(c,["active","final"]);let p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{$n(!1)}p||$n(!1);const m=Number(p);return $n(!isNaN(m)),new oc(m,r.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,u=new Js(n,o,s,l);return u.headers=i,u.errorHandler=el(e),u}const e0=256*1024;function eV(t,e,n,r,i,s,o,l){const u=new oc(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw mL();const c=u.total-u.current;let d=c;i>0&&(d=Math.min(d,i));const p=u.current,m=p+d;let I="";d===0?I="finalize":c===d?I="upload, finalize":I="upload";const S={"X-Goog-Upload-Command":I,"X-Goog-Upload-Offset":`${u.current}`},k=r.slice(p,m);if(k===null)throw PI();function C(N,L){const M=sg(N,["active","final"]),T=u.current+d,g=r.size();let w;return M==="final"?w=ig(e,s)(N,L):w=null,new oc(T,g,M==="final",w)}const v="POST",y=e.maxUploadRetryTime,E=new Js(n,v,C,y);return E.headers=S,E.body=k.uploadData(),E.progressCallback=l||null,E.errorHandler=el(t),E}const kt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function _d(t){switch(t){case"running":case"pausing":case"canceling":return kt.RUNNING;case"paused":return kt.PAUSED;case"success":return kt.SUCCESS;case"canceled":return kt.CANCELED;case"error":return kt.ERROR;default:return kt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,n,r){if(IL(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class nV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ao("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ao("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ao("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ao("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ao("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class rV extends nV{initXhr(){this.xhr_.responseType="text"}}function Zi(){return new rV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=FI(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ie.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(bI(i.status,[]))if(s)i=CI();else{this.sleepTime=Math.max(this.sleepTime*2,oL),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ie.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=JL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Zi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=ZL(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Zi,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=e0*this._chunkMultiplier,n=new oc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=eV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Zi,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){e0*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=KL(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Zi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=XL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Zi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=kI(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=_d(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new tV(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(_d(this._state)){case kt.SUCCESS:Qi(this._resolve.bind(null,this.snapshot))();break;case kt.CANCELED:case kt.ERROR:const n=this._reject;Qi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(_d(this._state)){case kt.RUNNING:case kt.PAUSED:e.next&&Qi(e.next.bind(e,this.snapshot))();break;case kt.SUCCESS:e.complete&&Qi(e.complete.bind(e))();break;case kt.CANCELED:case kt.ERROR:e.error&&Qi(e.error.bind(e,this._error))();break;default:e.error&&Qi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xi(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MI(this._location.path)}get storage(){return this._service}get parent(){const e=jL(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new xi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vL(e)}}function sV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new iV(t,new vr(e),n)}function oV(t){t._throwIfRoot("getDownloadURL");const e=QL(t.storage,t._location,FI());return t.storage.makeRequestWithTokens(e,Zi).then(n=>{if(n===null)throw gL();return n})}function aV(t,e){const n=BL(t._location.path,e),r=new jt(t._location.bucket,n);return new xi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t){return/^[A-Za-z]+:\/\//.test(t)}function uV(t,e){return new xi(t,e)}function WI(t,e){if(t instanceof og){const n=t;if(n._bucket==null)throw pL();const r=new xi(n,n._bucket);return e!=null?WI(r,e):r}else return e!==void 0?aV(t,e):t}function cV(t,e){if(e&&lV(e)){if(t instanceof og)return uV(t,e);throw Qf("To use ref(service, url), the first argument must be a Storage instance.")}else return WI(t,e)}function t0(t,e){const n=e==null?void 0:e[RI];return n==null?null:jt.makeFromBucketSpec(n,t)}function hV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:l1(i,t.app.options.projectId))}class og{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=SI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iL,this._maxUploadRetryTime=sL,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=t0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=t0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Z_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Z_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new _L(NI());{const o=NL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const n0="@firebase/storage",r0="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="storage";function dV(t,e,n){return t=Pe(t),sV(t,e,n)}function fV(t){return t=Pe(t),oV(t)}function pV(t,e){return t=Pe(t),cV(t,e)}function mV(t=hm(),e){t=Pe(t);const r=bc(t,qI).getImmediate({identifier:e}),i=s1("storage");return i&&gV(r,...i),r}function gV(t,e,n,r={}){hV(t,e,n,r)}function yV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new og(n,r,i,e,Mi)}function vV(){Ii(new Fr(qI,yV,"PUBLIC").setMultipleInstances(!0)),Sn(n0,r0,""),Sn(n0,r0,"esm2017")}vV();const HI=t=>new Promise((e,n)=>{const r=mV(),i=pV(r,`images/${Date.now()}_${t.name}`),s=dV(i,t);s.on("state_changed",o=>{const l=o.bytesTransferred/o.totalBytes*100;console.log("Upload is "+l+"% done")},o=>{n(o)},()=>{fV(s.snapshot.ref).then(o=>{e(o)}).catch(n)})}),i0=()=>{};let ag={},$I={},GI=null,KI={mark:i0,measure:i0};try{typeof window<"u"&&(ag=window),typeof document<"u"&&($I=document),typeof MutationObserver<"u"&&(GI=MutationObserver),typeof performance<"u"&&(KI=performance)}catch{}const{userAgent:s0=""}=ag.navigator||{},zr=ag,Te=$I,o0=GI,$l=KI;zr.document;const rr=!!Te.documentElement&&!!Te.head&&typeof Te.addEventListener=="function"&&typeof Te.createElement=="function",QI=~s0.indexOf("MSIE")||~s0.indexOf("Trident/");var Se="classic",YI="duotone",zt="sharp",Wt="sharp-duotone",_V=[Se,YI,zt,Wt],EV={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},a0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},wV=["kit"],TV=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,IV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,AV={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},SV={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},RV={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},CV={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},kV={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},PV={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},XI={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},NV=["solid","regular","light","thin","duotone","brands"],JI=[1,2,3,4,5,6,7,8,9,10],xV=JI.concat([11,12,13,14,15,16,17,18,19,20]),Lo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bV=[...Object.keys(CV),...NV,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Lo.GROUP,Lo.SWAP_OPACITY,Lo.PRIMARY,Lo.SECONDARY].concat(JI.map(t=>"".concat(t,"x"))).concat(xV.map(t=>"w-".concat(t))),DV={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},OV={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},LV={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},l0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const er="___FONT_AWESOME___",Yf=16,ZI="fa",eA="svg-inline--fa",bi="data-fa-i2svg",Xf="data-fa-pseudo-element",VV="data-fa-pseudo-element-pending",lg="data-prefix",ug="data-icon",u0="fontawesome-i2svg",MV="async",FV=["HTML","HEAD","STYLE","SCRIPT"],tA=(()=>{try{return!0}catch{return!1}})(),nA=[Se,zt,Wt];function tl(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Se]}})}const rA={...XI};rA[Se]={...XI[Se],...a0.kit,...a0["kit-duotone"]};const mi=tl(rA),Jf={...PV};Jf[Se]={...Jf[Se],...l0.kit,...l0["kit-duotone"]};const ba=tl(Jf),Zf={...kV};Zf[Se]={...Zf[Se],...LV.kit};const gi=tl(Zf),ep={...RV};ep[Se]={...ep[Se],...OV.kit};const UV=tl(ep),jV=TV,iA="fa-layers-text",BV=IV,zV={...EV};tl(zV);const WV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ed=Lo,Bs=new Set;Object.keys(ba[Se]).map(Bs.add.bind(Bs));Object.keys(ba[zt]).map(Bs.add.bind(Bs));Object.keys(ba[Wt]).map(Bs.add.bind(Bs));const qV=[...wV,...bV],Zo=zr.FontAwesomeConfig||{};function HV(t){var e=Te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function $V(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Te&&typeof Te.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=$V(HV(n));i!=null&&(Zo[r]=i)});const sA={styleDefault:"solid",familyDefault:"classic",cssPrefix:ZI,replacementClass:eA,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zo.familyPrefix&&(Zo.cssPrefix=Zo.familyPrefix);const zs={...sA,...Zo};zs.autoReplaceSvg||(zs.observeMutations=!1);const $={};Object.keys(sA).forEach(t=>{Object.defineProperty($,t,{enumerable:!0,set:function(e){zs[t]=e,ea.forEach(n=>n($))},get:function(){return zs[t]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(t){zs.cssPrefix=t,ea.forEach(e=>e($))},get:function(){return zs.cssPrefix}});zr.FontAwesomeConfig=$;const ea=[];function GV(t){return ea.push(t),()=>{ea.splice(ea.indexOf(t),1)}}const ur=Yf,wn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function KV(t){if(!t||!rr)return;const e=Te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Te.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Te.head.insertBefore(e,r),t}const QV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Da(){let t=12,e="";for(;t-- >0;)e+=QV[Math.random()*62|0];return e}function Zs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function cg(t){return t.classList?Zs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function oA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function YV(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(oA(t[n]),'" '),"").trim()}function rh(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function hg(t){return t.size!==wn.size||t.x!==wn.x||t.y!==wn.y||t.rotate!==wn.rotate||t.flipX||t.flipY}function XV(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function JV(t){let{transform:e,width:n=Yf,height:r=Yf,startCentered:i=!1}=t,s="";return i&&QI?s+="translate(".concat(e.x/ur-n/2,"em, ").concat(e.y/ur-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/ur,"em), calc(-50% + ").concat(e.y/ur,"em)) "):s+="translate(".concat(e.x/ur,"em, ").concat(e.y/ur,"em) "),s+="scale(".concat(e.size/ur*(e.flipX?-1:1),", ").concat(e.size/ur*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var ZV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function aA(){const t=ZI,e=eA,n=$.cssPrefix,r=$.replacementClass;let i=ZV;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let c0=!1;function wd(){$.autoAddCss&&!c0&&(KV(aA()),c0=!0)}var eM={mixout(){return{dom:{css:aA,insertCss:wd}}},hooks(){return{beforeDOMElementCreation(){wd()},beforeI2svg(){wd()}}}};const tr=zr||{};tr[er]||(tr[er]={});tr[er].styles||(tr[er].styles={});tr[er].hooks||(tr[er].hooks={});tr[er].shims||(tr[er].shims=[]);var Tn=tr[er];const lA=[],uA=function(){Te.removeEventListener("DOMContentLoaded",uA),ac=1,lA.map(t=>t())};let ac=!1;rr&&(ac=(Te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Te.readyState),ac||Te.addEventListener("DOMContentLoaded",uA));function tM(t){rr&&(ac?setTimeout(t,0):lA.push(t))}function nl(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?oA(t):"<".concat(e," ").concat(YV(n),">").concat(r.map(nl).join(""),"</").concat(e,">")}function h0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Td=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=l(d,e[c],c,e);return d};function nM(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function tp(t){const e=nM(t);return e.length===1?e[0].toString(16):null}function rM(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function d0(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function np(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=d0(e);typeof Tn.hooks.addPack=="function"&&!r?Tn.hooks.addPack(t,d0(e)):Tn.styles[t]={...Tn.styles[t]||{},...i},t==="fas"&&np("fa",e)}const{styles:ii,shims:iM}=Tn,sM={[Se]:Object.values(gi[Se]),[zt]:Object.values(gi[zt]),[Wt]:Object.values(gi[Wt])};let dg=null,cA={},hA={},dA={},fA={},pA={};const oM={[Se]:Object.keys(mi[Se]),[zt]:Object.keys(mi[zt]),[Wt]:Object.keys(mi[Wt])};function aM(t){return~qV.indexOf(t)}function lM(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!aM(i)?i:null}const mA=()=>{const t=r=>Td(ii,(i,s,o)=>(i[o]=Td(s,r,{}),i),{});cA=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),hA=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),pA=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const e="far"in ii||$.autoFetchSvg,n=Td(iM,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});dA=n.names,fA=n.unicodes,dg=ih($.styleDefault,{family:$.familyDefault})};GV(t=>{dg=ih(t.styleDefault,{family:$.familyDefault})});mA();function fg(t,e){return(cA[t]||{})[e]}function uM(t,e){return(hA[t]||{})[e]}function Ar(t,e){return(pA[t]||{})[e]}function gA(t){return dA[t]||{prefix:null,iconName:null}}function cM(t){const e=fA[t],n=fg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wr(){return dg}const pg=()=>({prefix:null,iconName:null,rest:[]});function ih(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Se}=e,r=mi[n][t],i=ba[n][t]||ba[n][r],s=t in Tn.styles?t:null;return i||s||null}const hM={[Se]:Object.keys(gi[Se]),[zt]:Object.keys(gi[zt]),[Wt]:Object.keys(gi[Wt])};function sh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Se]:"".concat($.cssPrefix,"-").concat(Se),[zt]:"".concat($.cssPrefix,"-").concat(zt),[Wt]:"".concat($.cssPrefix,"-").concat(Wt)};let i=null,s=Se;const o=_V.filter(u=>u!==YI);o.forEach(u=>{(t.includes(r[u])||t.some(c=>hM[u].includes(c)))&&(s=u)});const l=t.reduce((u,c)=>{const d=lM($.cssPrefix,c);if(ii[c]?(c=sM[s].includes(c)?UV[s][c]:c,i=c,u.prefix=c):oM[s].indexOf(c)>-1?(i=c,u.prefix=ih(c,{family:s})):d?u.iconName=d:c!==$.replacementClass&&!o.some(p=>c===r[p])&&u.rest.push(c),!n&&u.prefix&&u.iconName){const p=i==="fa"?gA(u.iconName):{},m=Ar(u.prefix,u.iconName);p.prefix&&(i=null),u.iconName=p.iconName||m||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!ii.far&&ii.fas&&!$.autoFetchSvg&&(u.prefix="fas")}return u},pg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===zt&&(ii.fass||$.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ar(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===Wt&&(ii.fasds||$.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Ar(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Wr()||"fas"),l}class dM{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},np(s,i[s]);const o=gi[Se][s];o&&np(o,i[s]),mA()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],u=l[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=l)}),e[s][o]=l}),e}}let f0=[],fs={};const Ss={},fM=Object.keys(Ss);function pM(t,e){let{mixoutsTo:n}=e;return f0=t,fs={},Object.keys(Ss).forEach(r=>{fM.indexOf(r)===-1&&delete Ss[r]}),f0.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{fs[o]||(fs[o]=[]),fs[o].push(s[o])})}r.provides&&r.provides(Ss)}),n}function rp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(fs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function Di(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(fs[t]||[]).forEach(s=>{s.apply(null,n)})}function qr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ss[t]?Ss[t].apply(null,e):void 0}function ip(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Wr();if(e)return e=Ar(n,e)||e,h0(yA.definitions,n,e)||h0(Tn.styles,n,e)}const yA=new dM,mM=()=>{$.autoReplaceSvg=!1,$.observeMutations=!1,Di("noAuto")},gM={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rr?(Di("beforeI2svg",t),qr("pseudoElements2svg",t),qr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,tM(()=>{vM({autoReplaceSvgRoot:e}),Di("watch",t)})}},yM={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ar(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ih(t[0]);return{prefix:n,iconName:Ar(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat($.cssPrefix,"-"))>-1||t.match(jV))){const e=sh(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Wr(),iconName:Ar(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Wr();return{prefix:e,iconName:Ar(e,t)||t}}}},Gt={noAuto:mM,config:$,dom:gM,parse:yM,library:yA,findIconDefinition:ip,toHtml:nl},vM=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Te}=t;(Object.keys(Tn.styles).length>0||$.autoFetchSvg)&&rr&&$.autoReplaceSvg&&Gt.dom.i2svg({node:e})};function oh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>nl(n))}}),Object.defineProperty(t,"node",{get:function(){if(!rr)return;const n=Te.createElement("div");return n.innerHTML=t.html,n.children}}),t}function _M(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(hg(o)&&n.found&&!r.found){const{width:l,height:u}=n,c={x:l/u/2,y:.5};i.style=rh({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function EM(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function mg(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:u,titleId:c,extra:d,watchable:p=!1}=t,{width:m,height:I}=n.found?n:e,S=r==="fak",k=[$.replacementClass,i?"".concat($.cssPrefix,"-").concat(i):""].filter(L=>d.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(d.classes).join(" ");let C={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(I)}};const v=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/I*16*.0625,"em")}:{};p&&(C.attributes[bi]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Da())},children:[l]}),delete C.attributes.title);const y={...C,prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:{...v,...d.styles}},{children:E,attributes:N}=n.found&&e.found?qr("generateAbstractMask",y)||{children:[],attributes:{}}:qr("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=E,y.attributes=N,o?EM(y):_M(y)}function p0(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=t,u={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(u[bi]="");const c={...o.styles};hg(i)&&(c.transform=JV({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=rh(c);d.length>0&&(u.style=d);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function wM(t){const{content:e,title:n,extra:r}=t,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=rh(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Id}=Tn;function sp(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(Ed.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Ed.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(Ed.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const TM={found:!1,width:512,height:512};function IM(t,e){!tA&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function op(t,e){let n=e;return e==="fa"&&$.styleDefault!==null&&(e=Wr()),new Promise((r,i)=>{if(n==="fa"){const s=gA(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Id[e]&&Id[e][t]){const s=Id[e][t];return r(sp(s))}IM(t,e),r({...TM,icon:$.showMissingIcons&&t?qr("missingIconAbstract")||{}:{}})})}const m0=()=>{},ap=$.measurePerformance&&$l&&$l.mark&&$l.measure?$l:{mark:m0,measure:m0},Vo='FA "6.6.0"',AM=t=>(ap.mark("".concat(Vo," ").concat(t," begins")),()=>vA(t)),vA=t=>{ap.mark("".concat(Vo," ").concat(t," ends")),ap.measure("".concat(Vo," ").concat(t),"".concat(Vo," ").concat(t," begins"),"".concat(Vo," ").concat(t," ends"))};var gg={begin:AM,end:vA};const gu=()=>{};function g0(t){return typeof(t.getAttribute?t.getAttribute(bi):null)=="string"}function SM(t){const e=t.getAttribute?t.getAttribute(lg):null,n=t.getAttribute?t.getAttribute(ug):null;return e&&n}function RM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function CM(){return $.autoReplaceSvg===!0?yu.replace:yu[$.autoReplaceSvg]||yu.replace}function kM(t){return Te.createElementNS("http://www.w3.org/2000/svg",t)}function PM(t){return Te.createElement(t)}function _A(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?kM:PM}=e;if(typeof t=="string")return Te.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(_A(s,{ceFn:n}))}),r}function NM(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const yu={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(_A(n),e)}),e.getAttribute(bi)===null&&$.keepOriginalSource){let n=Te.createComment(NM(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~cg(e).indexOf($.replacementClass))return yu.replace(t);const r=new RegExp("".concat($.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===$.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>nl(s)).join(`
`);e.setAttribute(bi,""),e.innerHTML=i}};function y0(t){t()}function EA(t,e){const n=typeof e=="function"?e:gu;if(t.length===0)n();else{let r=y0;$.mutateApproach===MV&&(r=zr.requestAnimationFrame||y0),r(()=>{const i=CM(),s=gg.begin("mutate");t.map(i),s(),n()})}}let yg=!1;function wA(){yg=!0}function lp(){yg=!1}let lc=null;function v0(t){if(!o0||!$.observeMutations)return;const{treeCallback:e=gu,nodeCallback:n=gu,pseudoElementsCallback:r=gu,observeMutationsRoot:i=Te}=t;lc=new o0(s=>{if(yg)return;const o=Wr();Zs(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!g0(l.addedNodes[0])&&($.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&$.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&g0(l.target)&&~WV.indexOf(l.attributeName))if(l.attributeName==="class"&&SM(l.target)){const{prefix:u,iconName:c}=sh(cg(l.target));l.target.setAttribute(lg,u||o),c&&l.target.setAttribute(ug,c)}else RM(l.target)&&n(l.target)})}),rr&&lc.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function xM(){lc&&lc.disconnect()}function bM(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function DM(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=sh(cg(t));return i.prefix||(i.prefix=Wr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=uM(i.prefix,t.innerText)||fg(i.prefix,tp(t.innerText))),!i.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function OM(t){const e=Zs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||Da()):(e["aria-hidden"]="true",e.focusable="false")),e}function LM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=DM(t),s=OM(t),o=rp("parseNodeAttributes",{},t);let l=e.styleParser?bM(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:wn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:VM}=Tn;function TA(t){const e=$.autoReplaceSvg==="nest"?_0(t,{styleParser:!1}):_0(t);return~e.extra.classes.indexOf(iA)?qr("generateLayersText",t,e):qr("generateSvgReplacementMutation",t,e)}let bn=new Set;nA.map(t=>{bn.add("fa-".concat(t))});Object.keys(mi[Se]).map(bn.add.bind(bn));Object.keys(mi[zt]).map(bn.add.bind(bn));Object.keys(mi[Wt]).map(bn.add.bind(bn));bn=[...bn];function E0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rr)return Promise.resolve();const n=Te.documentElement.classList,r=d=>n.add("".concat(u0,"-").concat(d)),i=d=>n.remove("".concat(u0,"-").concat(d)),s=$.autoFetchSvg?bn:nA.map(d=>"fa-".concat(d)).concat(Object.keys(VM));s.includes("fa")||s.push("fa");const o=[".".concat(iA,":not([").concat(bi,"])")].concat(s.map(d=>".".concat(d,":not([").concat(bi,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Zs(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const u=gg.begin("onTree"),c=l.reduce((d,p)=>{try{const m=TA(p);m&&d.push(m)}catch(m){tA||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(c).then(m=>{EA(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),p(m)})})}function MM(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;TA(t).then(n=>{n&&EA([n],e)})}function FM(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:ip(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:ip(i||{})),t(r,{...n,mask:i})}}const UM=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=wn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:I}=t;return oh({type:"icon",...t},()=>(Di("beforeDOMElementCreation",{iconDefinition:t,params:e}),$.autoA11y&&(o?c["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(l||Da()):(c["aria-hidden"]="true",c.focusable="false")),mg({icons:{main:sp(I),mask:i?sp(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...wn,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:c,styles:d,classes:u}})))};var jM={mixout(){return{icon:FM(UM)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=E0,t.nodeCallback=MM,t}}},provides(t){t.i2svg=function(e){const{node:n=Te,callback:r=()=>{}}=e;return E0(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:u,mask:c,maskId:d,extra:p}=n;return new Promise((m,I)=>{Promise.all([op(r,o),c.iconName?op(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[k,C]=S;m([e,mg({icons:{main:k,mask:C},prefix:o,iconName:r,transform:l,symbol:u,maskId:d,title:i,titleId:s,extra:p,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const l=rh(o);l.length>0&&(r.style=l);let u;return hg(s)&&(u=qr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},BM={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return oh({type:"layer"},()=>{Di("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},zM={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return oh({type:"counter",content:t},()=>(Di("beforeDOMElementCreation",{content:t,params:e}),wM({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat($.cssPrefix,"-layers-counter"),...r]}})))}}}},WM={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=wn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return oh({type:"text",content:t},()=>(Di("beforeDOMElementCreation",{content:t,params:e}),p0({content:t,transform:{...wn,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat($.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(QI){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,l=c.height/u}return $.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,p0({content:e.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const qM=new RegExp('"',"ug"),w0=[1105920,1112319],T0={FontAwesome:{normal:"fas",400:"fas"},...SV,...AV,...DV},up=Object.keys(T0).reduce((t,e)=>(t[e.toLowerCase()]=T0[e],t),{}),HM=Object.keys(up).reduce((t,e)=>{const n=up[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function $M(t){const e=t.replace(qM,""),n=rM(e,0),r=n>=w0[0]&&n<=w0[1],i=e.length===2?e[0]===e[1]:!1;return{value:tp(i?e[0]:e),isSecondary:r||i}}function GM(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(up[n]||{})[i]||HM[n]}function I0(t,e){const n="".concat(VV).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Zs(t.children).filter(m=>m.getAttribute(Xf)===e)[0],l=zr.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),c=u.match(BV),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let I=GM(u,d);const{value:S,isSecondary:k}=$M(m),C=c[0].startsWith("FontAwesome");let v=fg(I,S),y=v;if(C){const E=cM(S);E.iconName&&E.prefix&&(v=E.iconName,I=E.prefix)}if(v&&!k&&(!o||o.getAttribute(lg)!==I||o.getAttribute(ug)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const E=LM(),{extra:N}=E;N.attributes[Xf]=e,op(v,I).then(L=>{const M=mg({...E,icons:{main:L,mask:pg()},prefix:I,iconName:y,extra:N,watchable:!0}),T=Te.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=M.map(g=>nl(g)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function KM(t){return Promise.all([I0(t,"::before"),I0(t,"::after")])}function QM(t){return t.parentNode!==document.head&&!~FV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Xf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function A0(t){if(rr)return new Promise((e,n)=>{const r=Zs(t.querySelectorAll("*")).filter(QM).map(KM),i=gg.begin("searchPseudoElements");wA(),Promise.all(r).then(()=>{i(),lp(),e()}).catch(()=>{i(),lp(),n()})})}var YM={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=A0,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Te}=e;$.searchPseudoElements&&A0(n)}}};let S0=!1;var XM={mixout(){return{dom:{unwatch(){wA(),S0=!0}}}},hooks(){return{bootstrap(){v0(rp("mutationObserverCallbacks",{}))},noAuto(){xM()},watch(t){const{observeMutationsRoot:e}=t;S0?lp():v0(rp("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const R0=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var JM={mixout(){return{parse:{transform:t=>R0(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=R0(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const Ad={x:0,y:0,width:"100%",height:"100%"};function C0(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ZM(t){return t.tag==="g"?t.children:[t]}var e4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?sh(n.split(" ").map(i=>i.trim())):pg();return r.prefix||(r.prefix=Wr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=e;const{width:u,icon:c}=i,{width:d,icon:p}=s,m=XV({transform:l,containerWidth:d,iconWidth:u}),I={tag:"rect",attributes:{...Ad,fill:"white"}},S=c.children?{children:c.children.map(C0)}:{},k={tag:"g",attributes:{...m.inner},children:[C0({tag:c.tag,attributes:{...c.attributes,...m.path},...S})]},C={tag:"g",attributes:{...m.outer},children:[k]},v="mask-".concat(o||Da()),y="clip-".concat(o||Da()),E={tag:"mask",attributes:{...Ad,id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[I,C]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:ZM(p)},E]};return n.push(N,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")"),...Ad}}),{children:n,attributes:r}}}},t4={provides(t){let e=!1;zr.matchMedia&&(e=zr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},n4={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},r4=[eM,jM,BM,zM,WM,YM,XM,JM,e4,t4,n4];pM(r4,{mixoutsTo:Gt});Gt.noAuto;Gt.config;Gt.library;Gt.dom;const cp=Gt.parse;Gt.findIconDefinition;Gt.toHtml;const i4=Gt.icon;Gt.layer;Gt.text;Gt.counter;var IA={exports:{}},s4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",o4=s4,a4=o4;function AA(){}function SA(){}SA.resetWarningCache=AA;var l4=function(){function t(r,i,s,o,l,u){if(u!==a4){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:SA,resetWarningCache:AA};return n.PropTypes=n,n};IA.exports=l4();var u4=IA.exports;const te=x0(u4);function k0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function mn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k0(Object(n),!0).forEach(function(r){ps(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uc(t){"@babel/helpers - typeof";return uc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uc(t)}function ps(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function h4(t,e){if(t==null)return{};var n=c4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function hp(t){return d4(t)||f4(t)||p4(t)||m4()}function d4(t){if(Array.isArray(t))return dp(t)}function f4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function p4(t,e){if(t){if(typeof t=="string")return dp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dp(t,e)}}function dp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g4(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,l=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,p=t.pulse,m=t.fixedWidth,I=t.inverse,S=t.border,k=t.listItem,C=t.flip,v=t.size,y=t.rotation,E=t.pull,N=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":I,"fa-border":S,"fa-li":k,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},ps(e,"fa-".concat(v),typeof v<"u"&&v!==null),ps(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),ps(e,"fa-pull-".concat(E),typeof E<"u"&&E!==null),ps(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(L){return N[L]?L:null}).filter(function(L){return L})}function y4(t){return t=t-0,t===t}function RA(t){return y4(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var v4=["style"];function _4(t){return t.charAt(0).toUpperCase()+t.slice(1)}function E4(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=RA(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[_4(i)]=s:e[i]=s,e},{})}function CA(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return CA(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=E4(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[RA(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=h4(n,v4);return i.attrs.style=mn(mn({},i.attrs.style),o),t.apply(void 0,[e.tag,mn(mn({},i.attrs),l)].concat(hp(r)))}var kA=!1;try{kA=!0}catch{}function w4(){if(!kA&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function P0(t){if(t&&uc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(cp.icon)return cp.icon(t);if(t===null)return null;if(t&&uc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Sd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ps({},t,e):{}}var N0={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},cc=de.forwardRef(function(t,e){var n=mn(mn({},N0),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,u=n.titleId,c=n.maskId,d=P0(r),p=Sd("classes",[].concat(hp(g4(n)),hp((o||"").split(" ")))),m=Sd("transform",typeof n.transform=="string"?cp.transform(n.transform):n.transform),I=Sd("mask",P0(i)),S=i4(d,mn(mn(mn(mn({},p),m),I),{},{symbol:s,title:l,titleId:u,maskId:c}));if(!S)return w4("Could not find icon",d),null;var k=S.abstract,C={ref:e};return Object.keys(n).forEach(function(v){N0.hasOwnProperty(v)||(C[v]=n[v])}),T4(k[0],C)});cc.displayName="FontAwesomeIcon";cc.propTypes={beat:te.bool,border:te.bool,beatFade:te.bool,bounce:te.bool,className:te.string,fade:te.bool,flash:te.bool,mask:te.oneOfType([te.object,te.array,te.string]),maskId:te.string,fixedWidth:te.bool,inverse:te.bool,flip:te.oneOf([!0,!1,"horizontal","vertical","both"]),icon:te.oneOfType([te.object,te.array,te.string]),listItem:te.bool,pull:te.oneOf(["right","left"]),pulse:te.bool,rotation:te.oneOf([0,90,180,270]),shake:te.bool,size:te.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:te.bool,spinPulse:te.bool,spinReverse:te.bool,symbol:te.oneOfType([te.bool,te.string]),title:te.string,titleId:te.string,transform:te.oneOfType([te.string,te.object]),swapOpacity:te.bool};var T4=CA.bind(null,de.createElement);const I4={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},A4=I4,S4={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},R4=()=>{const{userData:t,messagesId:e,chatUser:n,messages:r,setMessages:i,chatVisible:s,setChatVisible:o,activeUsers:l,updateActiveUsers:u}=V.useContext(Wi),[c,d]=V.useState(""),[p,m]=V.useState(!1),I=V.useRef(),S=V.useRef(null),k=V.useRef(null),C=["😀","😂","😍","🥳","😎","🤔","👍","❤️","😊","🙌","🎉","🔥","💯","🤩","😇","🤗","🤓","😜","😘","🤪"],v=async()=>{try{c.trim()&&e&&(await _n(nt(Ke,"messages",e),{messages:ic({sId:t.id,text:c,createdAt:new Date})}),[n.rId,t.id].forEach(async w=>{const A=nt(Ke,"chats",w),P=await Ni(A);if(P.exists()){const x=P.data(),R=x.chatsData.findIndex(pe=>pe.messageId===e);x.chatsData[R].lastMessage=c,x.chatsData[R].updatedAt=Date.now(),x.chatsData[R].rId==t.id&&(x.chatsData[R].messageSeen=!1),await _n(A,{chatsData:x.chatsData})}}))}catch(g){re.error(g.message)}d(""),m(!1)},y=g=>{let w=g.toDate();const A=w.getHours(),P=w.getMinutes();return A>12?w=A-12+":"+P+" PM":w=A+":"+P+" AM",w},E=async g=>{const w=await HI(g.target.files[0]);w&&e&&(await _n(nt(Ke,"messages",e),{messages:ic({sId:t.id,image:w,createdAt:new Date})}),[n.rId,t.id].forEach(async P=>{const x=nt(Ke,"chats",P),R=await Ni(x);if(R.exists()){const pe=R.data(),Ye=pe.chatsData.findIndex(Kt=>Kt.messageId===e);pe.chatsData[Ye].lastMessage="Image",pe.chatsData[Ye].updatedAt=Date.now(),await _n(x,{chatsData:pe.chatsData})}}))};V.useEffect(()=>{var g;(g=I.current)==null||g.scrollIntoView({behavior:"smooth"})},[r]),V.useEffect(()=>{if(e){const g=gI(nt(Ke,"messages",e),w=>{i(w.data().messages.reverse())});return()=>{g()}}},[e]),V.useEffect(()=>{if(n){const g=setInterval(()=>{u(n.userData.id,Date.now())},6e4);return()=>clearInterval(g)}},[n]),V.useEffect(()=>{const g=w=>{S.current&&!S.current.contains(w.target)&&!w.target.classList.contains("emoji-button")&&m(!1)};return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[]);const N=g=>Date.now()-l[g]<=7e4,L=g=>{const w=Date.now()-g;return w<6e4?"Just now":w<36e5?`${Math.floor(w/6e4)} minutes ago`:w<864e5?`${Math.floor(w/36e5)} hours ago`:`${Math.floor(w/864e5)} days ago`},M=g=>{const w=k.current.selectionStart,A=c.slice(0,w),P=c.slice(w);d(A+g+P),setTimeout(()=>{k.current.selectionStart=w+g.length,k.current.selectionEnd=w+g.length,k.current.focus()},0)},T=()=>{m(!p),p||setTimeout(()=>k.current.focus(),0)};return n?O.jsxs("div",{className:`chat-box ${s?"":"hidden"}`,children:[O.jsxs("div",{className:"chat-user",children:[O.jsx("img",{src:n.userData.avatar,alt:""}),O.jsxs("p",{children:[n.userData.name," ",N(n.userData.id)?O.jsx("span",{className:"active-status",children:"Active now"}):O.jsxs("span",{className:"last-seen",children:["Last seen ",L(l[n.userData.id])]})]}),O.jsx("img",{onClick:()=>o(!1),className:"arrow",src:yn.arrow_icon,alt:""}),O.jsx("img",{className:"help",src:yn.help_icon,alt:"",style:{filter:"brightness(0) invert(1)",cursor:"pointer"}})]}),O.jsxs("div",{className:"chat-msg",children:[O.jsx("div",{ref:I}),r.map((g,w)=>O.jsxs("div",{className:g.sId===t.id?"s-msg":"r-msg",children:[g.image?O.jsx("img",{className:"msg-img",src:g.image,alt:""}):O.jsx("p",{className:"msg",children:g.text}),O.jsxs("div",{children:[O.jsx("img",{src:g.sId===t.id?t.avatar:n.userData.avatar,alt:""}),O.jsx("p",{children:y(g.createdAt)})]})]},w))]}),O.jsxs("div",{className:"chat-input",children:[O.jsx("input",{ref:k,onKeyDown:g=>g.key==="Enter"?v():null,onChange:g=>d(g.target.value),value:c,type:"text",placeholder:"Send a message"}),O.jsx("input",{onChange:E,type:"file",id:"image",accept:"image/png, image/jpeg",hidden:!0}),O.jsx("label",{htmlFor:"image",className:"image-upload-label",children:O.jsx("img",{src:yn.gallery_icon,alt:"",style:{filter:"brightness(0) invert(1)"}})}),O.jsx(cc,{icon:A4,onClick:T,className:"emoji-button"}),O.jsx(cc,{icon:S4,onClick:v,className:"send-button"})]}),p&&O.jsx("div",{className:"emoji-picker",ref:S,children:C.map((g,w)=>O.jsx("span",{onClick:()=>M(g),children:g},w))})]}):O.jsxs("div",{className:`chat-welcome ${s?"":"hidden"}`,children:[O.jsx("img",{src:yn.applogo,alt:""}),O.jsx("p",{children:"Chat anytime, anywhere"})]})},C4=()=>{const{chatUser:t,messages:e}=V.useContext(Wi),[n,r]=V.useState([]);return V.useEffect(()=>{let i=[];e.map(s=>{s.image&&i.push(s.image)}),r(i)},[e]),t?O.jsxs("div",{className:"rs",children:[O.jsxs("div",{className:"rs-profile",children:[O.jsx("img",{src:t.userData.avatar,alt:""}),O.jsxs("h3",{children:[Date.now()-t.userData.lastSeen<=7e4?O.jsx("img",{className:"dot",src:yn.green_dot,alt:""}):null,t.userData.name]}),O.jsx("p",{children:t.userData.bio})]}),O.jsx("hr",{}),O.jsxs("div",{className:"rs-media",children:[O.jsx("p",{children:"Media"}),O.jsx("div",{children:n.map((i,s)=>O.jsx("img",{onClick:()=>window.open(i),src:i,alt:""},s))})]}),O.jsx("button",{onClick:()=>Kf(),children:"Logout"})]}):O.jsx("div",{className:"rs",children:O.jsx("button",{onClick:()=>Kf(),children:"Logout"})})},k4=()=>{const{chatData:t,userData:e}=V.useContext(Wi),[n,r]=V.useState(!0);return V.useEffect(()=>{t&&e&&r(!1)},[t,e]),O.jsx("div",{className:"chat",children:n?O.jsx("p",{className:"loading",children:"Loading..."}):O.jsxs("div",{className:"chat-container",children:[O.jsx(rL,{}),O.jsx(R4,{}),O.jsx(C4,{})]})})},P4=()=>{const t=Nc(),e=V.useRef(null),{userData:n,setUserData:r}=V.useContext(Wi),[i,s]=V.useState(""),[o,l]=V.useState(""),[u,c]=V.useState(""),[d,p]=V.useState("");V.useEffect(()=>{const k=M1(zi,async C=>{if(C){p(C.uid);const v=nt(Ke,"users",C.uid),y=await Ni(v);if(y.exists()){const E=y.data();r(E),s(E.name||""),l(E.bio||""),c(E.avatar||"")}else t("/")}});return()=>k()},[t,r]);const m=async k=>{k.preventDefault();try{const C=nt(Ke,"users",d),v={name:i,bio:o,avatar:u};await _n(C,v),r(y=>({...y,...v})),console.log("Profile updated successfully!"),t("/chat")}catch(C){console.error("Error updating profile:",C)}},I=async k=>{const C=k.target.files[0];if(C){c(URL.createObjectURL(C));try{const v=await HI(C);c(v)}catch(v){console.error("Error uploading image:",v)}}},S=()=>{e.current.click()};return O.jsx("div",{className:"profile",children:O.jsx("div",{className:"profile-container",children:O.jsxs("form",{onSubmit:m,className:"profile-form",children:[O.jsx("h2",{className:"form-heading",children:"Profile Details"}),O.jsxs("div",{className:"form-group",children:[O.jsx("img",{src:u||yn.avatar_icon,alt:"Profile",className:"profile-image",onClick:S,style:{cursor:"pointer"}}),O.jsx("input",{type:"file",accept:"image/*",onChange:I,ref:e,style:{display:"none"}})]}),O.jsx("div",{className:"form-group",children:O.jsx("input",{onChange:k=>s(k.target.value),value:i,type:"text",placeholder:"Full Name",className:"form-input"})}),O.jsx("div",{className:"form-group",children:O.jsx("textarea",{onChange:k=>l(k.target.value),value:o,placeholder:"Write your bio",className:"form-textarea"})}),O.jsx("button",{type:"submit",className:"form-button",children:"Save"})]})})})},N4=()=>{const t=Nc(),{loadUserData:e}=V.useContext(Wi);return V.useEffect(()=>{M1(zi,async n=>{n?(t("/chat"),await e(n.uid)):t("/")})},[]),O.jsxs(O.Fragment,{children:[O.jsx(YO,{}),O.jsxs(wk,{children:[O.jsx(su,{path:"/",element:O.jsx(tL,{})}),O.jsx(su,{path:"/chat",element:O.jsx(k4,{})}),O.jsx(su,{path:"/profile",element:O.jsx(P4,{})})]})]})};qw(document.getElementById("root")).render(O.jsx(Ak,{children:O.jsx(nL,{children:O.jsx(N4,{})})}));
