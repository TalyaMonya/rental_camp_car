import{R as W,u as c,r as K,f as dt,h as ft,g as pt,j as o,s as w,a as ht,d as mt,i as vt,k as gt}from"./index-24962ecc.js";var We={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ee=W.createContext&&W.createContext(We),xt=["attr","size","title"];function yt(e,t){if(e==null)return{};var n=bt(e,t),a,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function bt(e,t){if(e==null)return{};var n={},a=Object.keys(e),i,l;for(l=0;l<a.length;l++)i=a[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function le(){return le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},le.apply(this,arguments)}function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Se(Object(n),!0).forEach(function(a){wt(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function wt(e,t,n){return t=Ot(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ot(e){var t=Ct(e,"string");return typeof t=="symbol"?t:String(t)}function Ct(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ie(e){return e&&e.map((t,n)=>W.createElement(t.tag,ce({key:n},t.attr),Ie(t.child)))}function Ue(e){return t=>W.createElement(_t,le({attr:ce({},e.attr)},t),Ie(e.child))}function _t(e){var t=n=>{var{attr:a,size:i,title:l}=e,g=yt(e,xt),s=i||n.size||"1em",x;return n.className&&(x=n.className),e.className&&(x=(x?x+" ":"")+e.className),W.createElement("svg",le({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,g,{className:x,style:ce(ce({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&W.createElement("title",null,l),e.children)};return Ee!==void 0?W.createElement(Ee.Consumer,null,n=>t(n)):t(We)}function qe(e){return Ue({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"},child:[]}]})(e)}const No=e=>e.catalog.items,jt=e=>e.catalog.favoriteList,Do=e=>e.catalog.isLoading,Et=c.div`
    width: 24px;
    height: 24px;
    fill: #ffffff;
    stroke: ${e=>e.theme.colors.black};
    cursor: pointer;

    transition: stroke, fill ${e=>e.theme.transition};

    &:hover,
    :focus {
        fill: ${e=>e.theme.colors.red};
        stroke: ${e=>e.theme.colors.red};
    }
`,St=c.svg`
    width: 20px;
    height: 20px;
    fill: ${e=>e.theme.colors.yellow};
`,Mt=c.svg`
    width: 20px;
    height: 20px;
`,kt=c.li`
    display: flex;
    width: 888px;
    height: 358px;
    padding: 24px;
    gap: 24px;

    border: 1px solid ${e=>e.theme.colors.lightgrey};

    &:not(:last-child) {
        margin-bottom: 32px;
    }
`,Pt=c.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
`,Rt=c.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`,Tt=c.h2`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
    max-width: 360px;
    color: ${e=>e.theme.colors.black};

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`,Nt=c.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Dt=c.p`
    font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
    color: ${e=>e.theme.colors.black};
`,Ft=c.p`
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.black};
    border-bottom: 2px solid ${e=>e.theme.colors.black};
`,Lt=c.div`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
`,At=c.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Ht=c.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,$t=c.p`
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.black};
`,Wt=c.p`
    width: 525px;
    font-size: 16px;
    line-height: 1.5;
    color: ${e=>e.theme.colors.grey};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 24px;
`,It=c.ul`
    display: flex;
    row-gap: 8px;
    column-gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 24px;
`,q=c.li`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 12px 18px;
    border-radius: 100px;

    color: ${e=>e.theme.colors.black};
    background-color: ${e=>e.theme.colors.lightgrey};
`,z=c.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
`,Ut=c.button`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    padding: 16px 40px;
    display: block;
    border: none;
    border-radius: 200px;
    color: #ffffff;
    background-color: ${e=>e.theme.colors.red};
    
    
    transition: background-color ${e=>e.theme.transition};

    &:hover,
    :focus {
        background-color: ${e=>e.theme.colors.hoverRed};
    }
`;var ge={exports:{}},U={},ze={exports:{}},qt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zt=qt,Bt=zt;function Be(){}function Ke(){}Ke.resetWarningCache=Be;var Kt=function(){function e(a,i,l,g,s,x){if(x!==Bt){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ke,resetWarningCache:Be};return n.PropTypes=n,n};ze.exports=Kt();var Ve=ze.exports,xe={exports:{}},N={},ye={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=y;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",i=/input|select|textarea|button|object|iframe/;function l(h,v){return v.getPropertyValue("overflow")!=="visible"||h.scrollWidth<=0&&h.scrollHeight<=0}function g(h){var v=h.offsetWidth<=0&&h.offsetHeight<=0;if(v&&!h.innerHTML)return!0;try{var b=window.getComputedStyle(h),C=b.getPropertyValue("display");return v?C!==a&&l(h,b):C===n}catch{return console.warn("Failed to inspect element style"),!1}}function s(h){for(var v=h,b=h.getRootNode&&h.getRootNode();v&&v!==document.body;){if(b&&v===b&&(v=b.host.parentNode),g(v))return!1;v=v.parentNode}return!0}function x(h,v){var b=h.nodeName.toLowerCase(),C=i.test(b)&&!h.disabled||b==="a"&&h.href||v;return C&&s(h)}function m(h){var v=h.getAttribute("tabindex");v===null&&(v=void 0);var b=isNaN(v);return(b||v>=0)&&x(h,!b)}function y(h){var v=[].slice.call(h.querySelectorAll("*"),0).reduce(function(b,C){return b.concat(C.shadowRoot?y(C.shadowRoot):[C])},[]);return v.filter(m)}e.exports=t.default})(ye,ye.exports);var Ge=ye.exports;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=Zt;N.log=Jt;N.handleBlur=X;N.handleFocus=ee;N.markForFocusLater=Qt;N.returnFocus=Xt;N.popWithoutFocus=en;N.setupScopedFocus=tn;N.teardownScopedFocus=nn;var Vt=Ge,Gt=Yt(Vt);function Yt(e){return e&&e.__esModule?e:{default:e}}var V=[],B=null,be=!1;function Zt(){V=[]}function Jt(){}function X(){be=!0}function ee(){if(be){if(be=!1,!B)return;setTimeout(function(){if(!B.contains(document.activeElement)){var e=(0,Gt.default)(B)[0]||B;e.focus()}},0)}}function Qt(){V.push(document.activeElement)}function Xt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{V.length!==0&&(t=V.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function en(){V.length>0&&V.pop()}function tn(e){B=e,window.addEventListener?(window.addEventListener("blur",X,!1),document.addEventListener("focus",ee,!0)):(window.attachEvent("onBlur",X),document.attachEvent("onFocus",ee))}function nn(){B=null,window.addEventListener?(window.removeEventListener("blur",X),document.removeEventListener("focus",ee)):(window.detachEvent("onBlur",X),document.detachEvent("onFocus",ee))}var we={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=g;var n=Ge,a=i(n);function i(s){return s&&s.__esModule?s:{default:s}}function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return s.activeElement.shadowRoot?l(s.activeElement.shadowRoot):s.activeElement}function g(s,x){var m=(0,a.default)(s);if(!m.length){x.preventDefault();return}var y=void 0,h=x.shiftKey,v=m[0],b=m[m.length-1],C=l();if(s===C){if(!h)return;y=b}if(b===C&&!h&&(y=v),v===C&&h&&(y=b),y){x.preventDefault(),y.focus();return}var M=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),F=M!=null&&M[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(F){var P=m.indexOf(C);if(P>-1&&(P+=h?-1:1),y=m[P],typeof y>"u"){x.preventDefault(),y=h?b:v,y.focus();return}x.preventDefault(),y.focus()}}e.exports=t.default})(we,we.exports);var on=we.exports,D={},rn=function(){},an=rn,T={},Ye={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(Ye);var sn=Ye.exports;Object.defineProperty(T,"__esModule",{value:!0});T.canUseDOM=T.SafeNodeList=T.SafeHTMLCollection=void 0;var ln=sn,cn=un(ln);function un(e){return e&&e.__esModule?e:{default:e}}var pe=cn.default,dn=pe.canUseDOM?window.HTMLElement:{};T.SafeHTMLCollection=pe.canUseDOM?window.HTMLCollection:{};T.SafeNodeList=pe.canUseDOM?window.NodeList:{};T.canUseDOM=pe.canUseDOM;T.default=dn;Object.defineProperty(D,"__esModule",{value:!0});D.resetState=vn;D.log=gn;D.assertNodeList=Ze;D.setElement=xn;D.validateElement=_e;D.hide=yn;D.show=bn;D.documentNotReadyOrSSRTesting=wn;var fn=an,pn=mn(fn),hn=T;function mn(e){return e&&e.__esModule?e:{default:e}}var k=null;function vn(){k&&(k.removeAttribute?k.removeAttribute("aria-hidden"):k.length!=null?k.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(k).forEach(function(e){return e.removeAttribute("aria-hidden")})),k=null}function gn(){}function Ze(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function xn(e){var t=e;if(typeof t=="string"&&hn.canUseDOM){var n=document.querySelectorAll(t);Ze(n,t),t=n}return k=t||k,k}function _e(e){var t=e||k;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,pn.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function yn(e){var t=!0,n=!1,a=void 0;try{for(var i=_e(e)[Symbol.iterator](),l;!(t=(l=i.next()).done);t=!0){var g=l.value;g.setAttribute("aria-hidden","true")}}catch(s){n=!0,a=s}finally{try{!t&&i.return&&i.return()}finally{if(n)throw a}}}function bn(e){var t=!0,n=!1,a=void 0;try{for(var i=_e(e)[Symbol.iterator](),l;!(t=(l=i.next()).done);t=!0){var g=l.value;g.removeAttribute("aria-hidden")}}catch(s){n=!0,a=s}finally{try{!t&&i.return&&i.return()}finally{if(n)throw a}}}function wn(){k=null}var G={};Object.defineProperty(G,"__esModule",{value:!0});G.resetState=On;G.log=Cn;var J={},Q={};function Me(e,t){e.classList.remove(t)}function On(){var e=document.getElementsByTagName("html")[0];for(var t in J)Me(e,J[t]);var n=document.body;for(var a in Q)Me(n,Q[a]);J={},Q={}}function Cn(){}var _n=function(t,n){return t[n]||(t[n]=0),t[n]+=1,n},jn=function(t,n){return t[n]&&(t[n]-=1),n},En=function(t,n,a){a.forEach(function(i){_n(n,i),t.add(i)})},Sn=function(t,n,a){a.forEach(function(i){jn(n,i),n[i]===0&&t.remove(i)})};G.add=function(t,n){return En(t.classList,t.nodeName.toLowerCase()=="html"?J:Q,n.split(" "))};G.remove=function(t,n){return Sn(t.classList,t.nodeName.toLowerCase()=="html"?J:Q,n.split(" "))};var Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.log=kn;Y.resetState=Pn;function Mn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Je=function e(){var t=this;Mn(this,e),this.register=function(n){t.openInstances.indexOf(n)===-1&&(t.openInstances.push(n),t.emit("register"))},this.deregister=function(n){var a=t.openInstances.indexOf(n);a!==-1&&(t.openInstances.splice(a,1),t.emit("deregister"))},this.subscribe=function(n){t.subscribers.push(n)},this.emit=function(n){t.subscribers.forEach(function(a){return a(n,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ue=new Je;function kn(){console.log("portalOpenInstances ----------"),console.log(ue.openInstances.length),ue.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Pn(){ue=new Je}Y.default=ue;var je={};Object.defineProperty(je,"__esModule",{value:!0});je.resetState=Dn;je.log=Fn;var Rn=Y,Tn=Nn(Rn);function Nn(e){return e&&e.__esModule?e:{default:e}}var E=void 0,R=void 0,I=[];function Dn(){for(var e=[E,R],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}E=R=null,I=[]}function Fn(){console.log("bodyTrap ----------"),console.log(I.length);for(var e=[E,R],t=0;t<e.length;t++){var n=e[t],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function ke(){I.length!==0&&I[I.length-1].focusContent()}function Ln(e,t){!E&&!R&&(E=document.createElement("div"),E.setAttribute("data-react-modal-body-trap",""),E.style.position="absolute",E.style.opacity="0",E.setAttribute("tabindex","0"),E.addEventListener("focus",ke),R=E.cloneNode(),R.addEventListener("focus",ke)),I=t,I.length>0?(document.body.firstChild!==E&&document.body.insertBefore(E,document.body.firstChild),document.body.lastChild!==R&&document.body.appendChild(R)):(E.parentElement&&E.parentElement.removeChild(E),R.parentElement&&R.parentElement.removeChild(R))}Tn.default.subscribe(Ln);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(p){for(var f=1;f<arguments.length;f++){var O=arguments[f];for(var r in O)Object.prototype.hasOwnProperty.call(O,r)&&(p[r]=O[r])}return p},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},i=function(){function p(f,O){for(var r=0;r<O.length;r++){var u=O[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(f,u.key,u)}}return function(f,O,r){return O&&p(f.prototype,O),r&&p(f,r),f}}(),l=K,g=Ve,s=re(g),x=N,m=Z(x),y=on,h=re(y),v=D,b=Z(v),C=G,M=Z(C),F=T,P=re(F),he=Y,oe=re(he);function Z(p){if(p&&p.__esModule)return p;var f={};if(p!=null)for(var O in p)Object.prototype.hasOwnProperty.call(p,O)&&(f[O]=p[O]);return f.default=p,f}function re(p){return p&&p.__esModule?p:{default:p}}function ot(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")}function rt(p,f){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f&&(typeof f=="object"||typeof f=="function")?f:p}function at(p,f){if(typeof f!="function"&&f!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof f);p.prototype=Object.create(f&&f.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),f&&(Object.setPrototypeOf?Object.setPrototypeOf(p,f):p.__proto__=f)}var me={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},it=function(f){return f.code==="Tab"||f.keyCode===9},st=function(f){return f.code==="Escape"||f.keyCode===27},ae=0,ve=function(p){at(f,p);function f(O){ot(this,f);var r=rt(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,O));return r.setOverlayRef=function(u){r.overlay=u,r.props.overlayRef&&r.props.overlayRef(u)},r.setContentRef=function(u){r.content=u,r.props.contentRef&&r.props.contentRef(u)},r.afterClose=function(){var u=r.props,j=u.appElement,S=u.ariaHideApp,_=u.htmlOpenClassName,A=u.bodyOpenClassName,H=u.parentSelector,ie=H&&H().ownerDocument||document;A&&M.remove(ie.body,A),_&&M.remove(ie.getElementsByTagName("html")[0],_),S&&ae>0&&(ae-=1,ae===0&&b.show(j)),r.props.shouldFocusAfterRender&&(r.props.shouldReturnFocusAfterClose?(m.returnFocus(r.props.preventScroll),m.teardownScopedFocus()):m.popWithoutFocus()),r.props.onAfterClose&&r.props.onAfterClose(),oe.default.deregister(r)},r.open=function(){r.beforeOpen(),r.state.afterOpen&&r.state.beforeClose?(clearTimeout(r.closeTimer),r.setState({beforeClose:!1})):(r.props.shouldFocusAfterRender&&(m.setupScopedFocus(r.node),m.markForFocusLater()),r.setState({isOpen:!0},function(){r.openAnimationFrame=requestAnimationFrame(function(){r.setState({afterOpen:!0}),r.props.isOpen&&r.props.onAfterOpen&&r.props.onAfterOpen({overlayEl:r.overlay,contentEl:r.content})})}))},r.close=function(){r.props.closeTimeoutMS>0?r.closeWithTimeout():r.closeWithoutTimeout()},r.focusContent=function(){return r.content&&!r.contentHasFocus()&&r.content.focus({preventScroll:!0})},r.closeWithTimeout=function(){var u=Date.now()+r.props.closeTimeoutMS;r.setState({beforeClose:!0,closesAt:u},function(){r.closeTimer=setTimeout(r.closeWithoutTimeout,r.state.closesAt-Date.now())})},r.closeWithoutTimeout=function(){r.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},r.afterClose)},r.handleKeyDown=function(u){it(u)&&(0,h.default)(r.content,u),r.props.shouldCloseOnEsc&&st(u)&&(u.stopPropagation(),r.requestClose(u))},r.handleOverlayOnClick=function(u){r.shouldClose===null&&(r.shouldClose=!0),r.shouldClose&&r.props.shouldCloseOnOverlayClick&&(r.ownerHandlesClose()?r.requestClose(u):r.focusContent()),r.shouldClose=null},r.handleContentOnMouseUp=function(){r.shouldClose=!1},r.handleOverlayOnMouseDown=function(u){!r.props.shouldCloseOnOverlayClick&&u.target==r.overlay&&u.preventDefault()},r.handleContentOnClick=function(){r.shouldClose=!1},r.handleContentOnMouseDown=function(){r.shouldClose=!1},r.requestClose=function(u){return r.ownerHandlesClose()&&r.props.onRequestClose(u)},r.ownerHandlesClose=function(){return r.props.onRequestClose},r.shouldBeClosed=function(){return!r.state.isOpen&&!r.state.beforeClose},r.contentHasFocus=function(){return document.activeElement===r.content||r.content.contains(document.activeElement)},r.buildClassName=function(u,j){var S=(typeof j>"u"?"undefined":a(j))==="object"?j:{base:me[u],afterOpen:me[u]+"--after-open",beforeClose:me[u]+"--before-close"},_=S.base;return r.state.afterOpen&&(_=_+" "+S.afterOpen),r.state.beforeClose&&(_=_+" "+S.beforeClose),typeof j=="string"&&j?_+" "+j:_},r.attributesFromObject=function(u,j){return Object.keys(j).reduce(function(S,_){return S[u+"-"+_]=j[_],S},{})},r.state={afterOpen:!1,beforeClose:!1},r.shouldClose=null,r.moveFromContentToOverlay=null,r}return i(f,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(r,u){this.props.isOpen&&!r.isOpen?this.open():!this.props.isOpen&&r.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!u.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var r=this.props,u=r.appElement,j=r.ariaHideApp,S=r.htmlOpenClassName,_=r.bodyOpenClassName,A=r.parentSelector,H=A&&A().ownerDocument||document;_&&M.add(H.body,_),S&&M.add(H.getElementsByTagName("html")[0],S),j&&(ae+=1,b.hide(u)),oe.default.register(this)}},{key:"render",value:function(){var r=this.props,u=r.id,j=r.className,S=r.overlayClassName,_=r.defaultStyles,A=r.children,H=j?{}:_.content,ie=S?{}:_.overlay;if(this.shouldBeClosed())return null;var lt={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:n({},ie,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},ct=n({id:u,ref:this.setContentRef,style:n({},H,this.props.style.content),className:this.buildClassName("content",j),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ut=this.props.contentElement(ct,A);return this.props.overlayElement(lt,ut)}}]),f}(l.Component);ve.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ve.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(P.default),s.default.instanceOf(F.SafeHTMLCollection),s.default.instanceOf(F.SafeNodeList),s.default.arrayOf(s.default.instanceOf(P.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=ve,e.exports=t.default})(xe,xe.exports);var An=xe.exports;function Qe(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Xe(e){function t(n){var a=this.constructor.getDerivedStateFromProps(e,n);return a??null}this.setState(t.bind(this))}function et(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}Qe.__suppressDeprecationWarning=!0;Xe.__suppressDeprecationWarning=!0;et.__suppressDeprecationWarning=!0;function Hn(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var n=null,a=null,i=null;if(typeof t.componentWillMount=="function"?n="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?i="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||a!==null||i!==null){var l=e.displayName||e.name,g=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+l+" uses "+g+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Qe,t.componentWillReceiveProps=Xe),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=et;var s=t.componentDidUpdate;t.componentDidUpdate=function(m,y,h){var v=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:h;s.call(this,m,y,v)}}return e}const $n=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Hn},Symbol.toStringTag,{value:"Module"})),Wn=dt($n);Object.defineProperty(U,"__esModule",{value:!0});U.bodyOpenClassName=U.portalClassName=void 0;var Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},In=function(){function e(t,n){for(var a=0;a<n.length;a++){var i=n[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),tt=K,de=te(tt),Un=ft,fe=te(Un),qn=Ve,d=te(qn),zn=An,Re=te(zn),Bn=D,Kn=Gn(Bn),L=T,Te=te(L),Vn=Wn;function Gn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function te(e){return e&&e.__esModule?e:{default:e}}function Yn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ne(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Zn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Jn=U.portalClassName="ReactModalPortal",Qn=U.bodyOpenClassName="ReactModal__Body--open",$=L.canUseDOM&&fe.default.createPortal!==void 0,De=function(t){return document.createElement(t)},Fe=function(){return $?fe.default.createPortal:fe.default.unstable_renderSubtreeIntoContainer};function se(e){return e()}var ne=function(e){Zn(t,e);function t(){var n,a,i,l;Yn(this,t);for(var g=arguments.length,s=Array(g),x=0;x<g;x++)s[x]=arguments[x];return l=(a=(i=Ne(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),i),i.removePortal=function(){!$&&fe.default.unmountComponentAtNode(i.node);var m=se(i.props.parentSelector);m&&m.contains(i.node)?m.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(m){i.portal=m},i.renderPortal=function(m){var y=Fe(),h=y(i,de.default.createElement(Re.default,Pe({defaultStyles:t.defaultStyles},m)),i.node);i.portalRef(h)},a),Ne(i,l)}return In(t,[{key:"componentDidMount",value:function(){if(L.canUseDOM){$||(this.node=De("div")),this.node.className=this.props.portalClassName;var a=se(this.props.parentSelector);a.appendChild(this.node),!$&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var i=se(a.parentSelector),l=se(this.props.parentSelector);return{prevParent:i,nextParent:l}}},{key:"componentDidUpdate",value:function(a,i,l){if(L.canUseDOM){var g=this.props,s=g.isOpen,x=g.portalClassName;a.portalClassName!==x&&(this.node.className=x);var m=l.prevParent,y=l.nextParent;y!==m&&(m.removeChild(this.node),y.appendChild(this.node)),!(!a.isOpen&&!s)&&!$&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!L.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,i=Date.now(),l=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||i+this.props.closeTimeoutMS);l?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,l-i)):this.removePortal()}}},{key:"render",value:function(){if(!L.canUseDOM||!$)return null;!this.node&&$&&(this.node=De("div"));var a=Fe();return a(de.default.createElement(Re.default,Pe({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){Kn.setElement(a)}}]),t}(tt.Component);ne.propTypes={isOpen:d.default.bool.isRequired,style:d.default.shape({content:d.default.object,overlay:d.default.object}),portalClassName:d.default.string,bodyOpenClassName:d.default.string,htmlOpenClassName:d.default.string,className:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),overlayClassName:d.default.oneOfType([d.default.string,d.default.shape({base:d.default.string.isRequired,afterOpen:d.default.string.isRequired,beforeClose:d.default.string.isRequired})]),appElement:d.default.oneOfType([d.default.instanceOf(Te.default),d.default.instanceOf(L.SafeHTMLCollection),d.default.instanceOf(L.SafeNodeList),d.default.arrayOf(d.default.instanceOf(Te.default))]),onAfterOpen:d.default.func,onRequestClose:d.default.func,closeTimeoutMS:d.default.number,ariaHideApp:d.default.bool,shouldFocusAfterRender:d.default.bool,shouldCloseOnOverlayClick:d.default.bool,shouldReturnFocusAfterClose:d.default.bool,preventScroll:d.default.bool,parentSelector:d.default.func,aria:d.default.object,data:d.default.object,role:d.default.string,contentLabel:d.default.string,shouldCloseOnEsc:d.default.bool,overlayRef:d.default.func,contentRef:d.default.func,id:d.default.string,overlayElement:d.default.func,contentElement:d.default.func};ne.defaultProps={isOpen:!1,portalClassName:Jn,bodyOpenClassName:Qn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,n){return de.default.createElement("div",t,n)},contentElement:function(t,n){return de.default.createElement("div",t,n)}};ne.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Vn.polyfill)(ne);U.default=ne;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=U,a=i(n);function i(l){return l&&l.__esModule?l:{default:l}}t.default=a.default,e.exports=t.default})(ge,ge.exports);var Xn=ge.exports;const nt=pt(Xn);function Oe(e){return Ue({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"},child:[]}]})(e)}const eo=c.button`
  position: absolute;
  right: 40px;
  top: 40px;
  background-color: transparent;
  border: transparent;
  outline: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`,to=c.svg`
  width: 32px;
  height: 32px;
`,no=c.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 10px;
  color: ${e=>e.theme.colors.black};
`,Le=c.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,oo=c.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,ro=c.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
  border-bottom: 2px solid ${e=>e.theme.colors.black};
`,ao=c.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.black};
`,io=c.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${e=>e.theme.colors.black};
  margin-bottom: 24px;
`,so=c.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 44px;
  color: ${e=>e.theme.colors.grey};
`,lo=c.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,co=c.li`
  width: 290px;
  height: 310px;
`,uo=c.img`
  border-radius: 10px;
  height: 100%;
`,Ce=c.span`
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.black};
  outline: none;
  border: none;
  background-color: transparent;
  margin-bottom: 24px;
`,fo=c.span`
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${e=>e.theme.colors.black};
  outline: none;
  border: none;
  background-color: transparent;
  margin-bottom: 24px;
`,Ae=c.div`
  position: relative;
`,po=c.div`
  display: flex;
  gap: 40px;
`,He=c.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;

  &:checked + label > ${Ce} {
    &::before {
      content: "";
      display: flex;
      background-color: ${e=>e.theme.colors.red};
      width: 85px;
      height: 5px;
      position: absolute;
      bottom: -28px;
    }
  }

  &:checked + label > ${fo} {
    &::before {
      content: "";
      display: flex;
      background-color: ${e=>e.theme.colors.red};
      width: 85px;
      height: 5px;
      position: absolute;
      bottom: -28px;
    }
  }
`,ho=c.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgba(16, 24, 40, 0.2);
  margin-bottom: 44px;
  margin-top: 24px;
`,mo=c.div`
  display: flex;
  gap: 24px;
`,vo=c.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 430px;
  row-gap: 8px;
  column-gap: 8px;
  margin-bottom: 44px;
`,go=c.li`
  display: flex;
  border-radius: 100px;
  padding: 12px 18px;
  background-color: ${e=>e.theme.colors.lightgrey};

  & > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
  }
`,xo=c.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`,yo=c.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;

  color: ${e=>e.theme.colors.black};

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    margin-bottom: 24px;
    margin-top: 24px;

    background-color: rgba(16, 24, 40, 0.1);
  }
`,bo=c.ul`
  display: block;
  width: 430px;
`,wo=c.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`,$e=c.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  text-transform: capitalize;
  color: ${e=>e.theme.colors.black};
`,Oo=({data:e})=>{const{details:t}=e,n=Object.entries(t).filter(([l,g])=>g!==0||g!==""),a={CD:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-CD"})}),TV:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-TV"})}),airConditioner:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-conditioner"})}),beds:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-bed"})}),freezer:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-freezer"})}),gas:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-gas"})}),toilet:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-toilet"})}),hob:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-hob"})}),kitchen:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-kitchen"})}),radio:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-radio"})}),shower:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-shower"})}),bathroom:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-shower"})}),microwave:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-microwave"})}),water:o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-water"})}),AC:o.jsx(qe,{style:{color:"#101828",width:"20px",height:"20px"}})},i=["form","length","width","height","consumption","tank"];return o.jsx(o.Fragment,{children:o.jsxs("div",{children:[o.jsx(vo,{children:n.map(([l,g],s)=>o.jsxs(go,{children:[o.jsx(xo,{children:a[l]}),g>1&&o.jsxs("p",{children:[g,"  "]}),o.jsx("p",{children:l})]},s))}),o.jsx(yo,{children:"Vehicle details"}),o.jsx(bo,{children:Object.entries(e).map(([l,g])=>i.includes(l)&&o.jsxs(wo,{children:[o.jsx($e,{children:l}),o.jsx($e,{children:g})]},l))})]})})},Co=c.ul`
    max-width: 430px;
`,_o=c.li`
    &:not(:last-child) {
        margin-bottom: 24px;
    }
`,jo=c.div`
    display: inline-flex;
    gap: 16px;
    margin-bottom: 16px;
    align-items: center;
`,Eo=c.span`
    display: inline-flex;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 60px;

    background-color: ${e=>e.theme.colors.lightgrey};

    & > p {
        font-size: 24px;
        font-weight: 600;
        line-height: 1.25;
        color: ${e=>e.theme.colors.red};
    }
`,So=c.div`
    display: inline-flex;
    gap: 4px;
`,Mo=c.h3`
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    margin-bottom: 4px;

    color: ${e=>e.theme.colors.black};
`,ko=c.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;

     color: ${e=>e.theme.colors.grey};
`,Po=({data:{reviews:e}})=>{const t=({reviewer_rating:n})=>{const a=[];for(let i=0;i<5;i++)i<n?a.push(o.jsx("span",{children:o.jsx(Oe,{style:{color:"#ffc531"}})},i)):a.push(o.jsx("span",{children:o.jsx(Oe,{style:{color:"#ffc531"}})},i));return o.jsx(So,{children:a})};return o.jsx(o.Fragment,{children:o.jsx(Co,{children:e.map(n=>o.jsxs(_o,{children:[o.jsxs(jo,{children:[o.jsx(Eo,{children:o.jsx("p",{children:n.reviewer_name[0]})}),o.jsxs("div",{children:[o.jsx(Mo,{children:n.reviewer_name}),o.jsx(t,{reviewer_rating:n.reviewer_rating})]})]}),o.jsx(ko,{children:n.comment})]},n.reviewer_name))})})};nt.setAppElement("#modal");const Ro=({isOpenModal:e,setCloseModal:t,data:n})=>{const[a,i]=K.useState(!1),[l,g]=K.useState(!1),s=()=>{i(!0),g(!1)},x=()=>{g(!0),i(!1)};console.log(n);const{name:m,price:y,rating:h,reviews:v,description:b,gallery:C,location:M}=n,F=y.toFixed(2).replace(".",",");return o.jsx(o.Fragment,{children:o.jsxs(nt,{overlayClassName:"Modal-overlay",className:"Modal-content",isOpen:e,onRequestClose:()=>{i(!1),g(!1)},contentLabel:"More info modal",children:[o.jsx(eo,{onClick:t,children:o.jsx(to,{children:o.jsx("use",{xlinkHref:w+"icon-cross"})})}),o.jsxs("div",{children:[o.jsx(no,{children:m}),o.jsxs(oo,{children:[o.jsxs(Le,{children:[o.jsx(Oe,{style:{color:"#ffc531"}}),o.jsxs(ro,{children:[h," (",v.length," Reviews)"]})]}),o.jsxs(Le,{children:[o.jsx("svg",{width:"16",height:"16",children:o.jsx("use",{xlinkHref:w+"icon-location"})}),o.jsx(ao,{children:M})]})]}),o.jsxs(io,{children:["€",F]}),o.jsx(lo,{children:C.map(P=>o.jsx(co,{children:o.jsx(uo,{src:P,alt:m})},P))}),o.jsx(so,{children:b})]}),o.jsxs(po,{children:[o.jsxs(Ae,{children:[o.jsx(He,{id:"features",name:"expand",type:"radio"}),o.jsx("label",{htmlFor:"features",children:o.jsx(Ce,{onClick:s,children:"Features"})})]}),o.jsxs(Ae,{children:[o.jsx(He,{id:"reviews",name:"expand",type:"radio"}),o.jsx("label",{htmlFor:"reviews",children:o.jsx(Ce,{onClick:x,children:"Reviews"})})]})]}),o.jsx(ho,{}),o.jsxs(mo,{children:[a&&o.jsx(o.Fragment,{children:o.jsx(Oo,{data:n})}),l&&o.jsx(o.Fragment,{children:o.jsx(Po,{})})]})]})})},Fo=({value:e})=>{const t=ht(),[n,a]=K.useState(!1),i=mt(jt),l=K.useMemo(()=>i.find(Z=>Z._id===e._id),[i,e._id]),g=()=>{a(!0),document.body.style.overflow="hidden"},s=()=>{a(!1),document.body.style.overflow="auto"},{adults:x,description:m,engine:y,location:h,name:v,price:b,rating:C,transmission:M,details:F,gallery:P,reviews:he}=e,oe=b.toFixed(2).replace(".",",");return o.jsxs(o.Fragment,{children:[o.jsxs(kt,{children:[o.jsx(Pt,{src:P[0],alt:v}),o.jsxs("div",{children:[o.jsxs(Rt,{children:[o.jsx(Tt,{children:v}),o.jsxs(Nt,{children:[o.jsxs(Dt,{children:["€",oe]}),o.jsx(Et,{children:l?o.jsx("svg",{width:"24",height:"24",onClick:()=>{t(vt(e))},children:o.jsx("use",{xlinkHref:w+"#icon-heart-red"})}):o.jsx("svg",{width:"24",height:"24",onClick:()=>{t(gt(e))},children:o.jsx("use",{xlinkHref:w+"#icon-heart"})})})]})]}),o.jsxs(Lt,{children:[o.jsxs(At,{children:[o.jsx(St,{children:o.jsx("use",{xlinkHref:w+"#icon-star"})}),o.jsxs(Ft,{children:[C," (",he.length," Reviews)"]})]}),o.jsxs(Ht,{children:[o.jsx(Mt,{children:o.jsx("use",{xlinkHref:w+"#icon-location"})}),o.jsx($t,{children:h})]})]}),o.jsx(Wt,{children:m}),o.jsxs(It,{children:[o.jsxs(q,{children:[o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-adults"})}),o.jsxs(z,{children:[x," adults"]})]}),o.jsxs(q,{children:[o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-trans"})}),o.jsx(z,{children:M})]}),o.jsxs(q,{children:[o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-petrol"})}),o.jsx(z,{children:y})]}),o.jsxs(q,{children:[o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-kitchen"})}),o.jsx(z,{children:"Kitchen"})]}),o.jsxs(q,{children:[o.jsx("svg",{width:"20",height:"20",children:o.jsx("use",{xlinkHref:w+"#icon-bed"})}),o.jsxs(z,{children:[F.beds," beds"]})]}),o.jsxs(q,{children:[o.jsx(qe,{style:{color:"#000000",width:"20px",height:"20px"}}),o.jsx(z,{children:"AC"})]})]}),o.jsx(Ut,{type:"button",onClick:g,children:"Show more"})]})]}),o.jsx(Ro,{isModalOpen:n,setModalClose:s,data:e})]})};export{Fo as C,qe as P,Do as a,jt as b,No as s};
