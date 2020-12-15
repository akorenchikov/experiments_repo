import"./esm-chunk-d81494b9.js";import{changeDom as t,ensureElement as e,attachEventToElement as n,getParentByClassName as o,addClassNameToElement as i,elementIsInDOM as s,detachEventFromElement as r,RequestAnimationFrame as c}from"./esm-dom-utils-88a2c0cb.js";import{d as l,r as u}from"./esm-chunk-fc46b9cc.js";import{T as a}from"./esm-chunk-639f7231.js";import{K as d}from"./esm-chunk-54fd5426.js";import"./esm-chunk-13e2cf5f.js";import{scrollToFocusedItem as h}from"./esm-grid-3284ddda.js";import{show as f}from"./esm-popup-utils-20f67cc2.js";import{initFocusHidingEvents as m}from"./esm-focus-utils-eb2e3d52.js";import{E as p}from"./esm-chunk-5d9ef2cd.js";import{getClientRectWithMargins as g,getClientRect as v,PointBlz as w,geometry as b}from"./esm-dragAndDropUnit-ce1d0bbc.js";const y=document.body,E=new window.WeakMap,C=new Map,x={subtree:!0,childList:!0},S=new window.MutationObserver((function(t){t.forEach(P)}));function P(t){t.removedNodes.forEach(D)}function D(t){const e=C.get(t);C.delete(t)&&(0===C.size&&S.disconnect(),e())}class T{constructor(t,e){this.element=t,this.getClientRect=e}get leftTopCorner(){const t=this;return new M(this.element,(function(e){return t.getClientRect(e)}),(function(t){return{x:0,y:0}}))}get leftBottomCorner(){const t=this;return new M(this.element,(function(e){const n=t.getClientRect(e);return new w(n.x,n.bottom)}),(function(e){const n=t.getClientRect(e);return new w(0,-n.height)}))}get rightTopCorner(){const t=this;return new M(this.element,(function(e){const n=t.getClientRect(e);return new w(n.right,n.y)}),(function(e){const n=t.getClientRect(e);return new w(n.width,0)}))}get rightBottomCorner(){const t=this;return new M(this.element,(function(e){const n=t.getClientRect(e);return new w(n.right,n.bottom)}),(function(e){const n=t.getClientRect(e);return new w(n.width,-n.height)}))}get center(){const t=this;return new M(this.element,(function(e){return t.getClientRect(e).center}))}}class M{constructor(t,e,n){this.element=t,this.getLocation=e,this.getDelta=n}get location(){return this.getLocation(this.element)}get delta(){return this.getDelta(this.element)}anchorTo(t){return new L(this,t)}}class L{constructor(t,e){this.point=t,this.anchor=e,this.events=new p(this);const n=[];if(n.push([window,"resize"]),n.push([window,"scroll"]),this.containers=function(t,e){const n=[];for(;null!==t&&"BODY"!==t.tagName&&"#document"!==t.nodeName;)e(t)&&n.push(t),t=t.parentNode;return 0===n.length?null:n}(this.anchor.element.parentNode,this.isElementScrollable),this.containers&&this.containers.forEach((function(t){n.push([t,"scroll"])})),this.checkInCasesInt(n),"undefined"!=typeof ResizeObserver){const t=this;this.resizeObserver=new window.ResizeObserver((function(){t.update()})),this.resizeObserver.observe(this.anchor.element),this.resizeObserver.observe(this.point.element)}else this.resizeObserver=null;this.notStaticParent=this.point.element.offsetParent,this.notStaticParent=this.isStatic(this.notStaticParent)?document.documentElement:this.notStaticParent,this.notStaticParent=null!==this.notStaticParent?this.notStaticParent:{x:0,y:0,scrollTop:0,scrollLeft:0},this.update()}isElementScrollable(t){const e=window.getComputedStyle(t);return"static"===e.position&&("scroll"===e["overflow-x"]||"scroll"===e["overflow-y"]||"auto"===e["overflow-x"]||"auto"===e["overflow-y"])}isStatic(t){return"static"===window.getComputedStyle(t).position}update(){const e=b(this.anchor.location,"+",this.point.delta,"-",this.notStaticParent,"+",{x:this.notStaticParent.scrollLeft,y:this.notStaticParent.scrollTop}),n=this.point.element;t((function(){n.style.left=e.x+"px",n.style.top=e.y+"px"}))}checkInCasesInt(t){const e=this.events;t.forEach((function(t){e.attachEvent(t[0],t[1],(function(t){this.update()}))}))}checkInCases(){return this.containers?(this.checkInCasesInt(Array.from(arguments)),this.update(),this):this}dispose(){this.events&&(this.events.dispose(),this.events=null,this.dropDownStartPos=null,this.containers=null,this.resizeObserver&&this.resizeObserver.disconnect())}}function O(t){return new T(t,g)}function k(t){return new T(t,v)}const R={Popup:0,Modal:1},N=1,z=2,H=new WeakMap;let B;function I(t){let n=(t=e(t)).querySelector("div.dxbs-dm.dropdown-menu");return n||(n=t.querySelector("div.dxgvCSD.dxbs-grid-vsd")),n}function j(t,n,o,i){return new Promise((function(o,s){let r=I(t);return r=e(r),r?(0===i&&(r.style.minWidth=t.offsetWidth+"px"),2===i&&(r.style.width=t.offsetWidth+"px"),q(t,r,n),h(r),o()):o()}))}function q(e,n,o,i){H.has(e)&&(H.get(e).disconnect(),H.delete(e));const s=n.offsetParent;if(!s)return t((function(){n.style.visibility=""})),void 0;const r=s.getBoundingClientRect(),c=e.getBoundingClientRect(),l=c.top-r.top,u=r.bottom-c.bottom;let a;const d=window.getComputedStyle(n),h=n.offsetHeight+Math.max(parseFloat(d.marginTop),0)+Math.max(parseFloat(d.marginBottom),0)+8;switch(o){case z:a=!0,r.top+(l-h)<=0&&r.top+l+e.offsetHeight+h+window.pageYOffset<=Math.max(document.body.scrollHeight,window.innerHeight)&&(a=!1);break;case N:default:a=!1,r.bottom-(u-h)>=window.innerHeight&&r.top+l-h+window.pageYOffset>=0&&(a=!0)}t((function(){B&&B.dispose(),B=a?O(n).leftBottomCorner.anchorTo(k(e).leftTopCorner):O(n).leftTopCorner.anchorTo(k(e).leftBottomCorner),n.style.visibility=""}))}const W=[{value:0,text:""},{value:1,text:"above"},{value:2,text:"below"},{value:4,text:"top-sides"},{value:8,text:"bottom-sides"},{value:16,text:"outside-left"},{value:32,text:"outside-right"},{value:64,text:"left-sides"},{value:128,text:"right-sides"}];function A(t,e,n){let o=t.target;for(;o;){if(o===e)return!1;o=o.parentElement}n&&n()}function F(t){return"hidden"!==t.style.visibility||t.classList.contains("visually-hidden")}const Y="a[href], input:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex='-1'])";function _(t,e){if(o(t.srcElement,"modal-header"))return!0;const n=o(t.srcElement,"column-chooser-elements-container"),i=o(n,"modal-body");if(!n||!i)return!1;if(i.clientHeight>=n.clientHeight)return!0;const s=t.touches[0].pageY-e.touches[0].pageY,r=function(t){return t.getBoundingClientRect().top},c=n.querySelector(".column-chooser-element-container");if(c&&r(c)===r(i)&&s>=0&&t.cancelable)return!0;const l=function(t){return Math.round(t.getBoundingClientRect().bottom)},u=n.querySelector(".column-chooser-element-container:last-child");return!!(u&&l(u)===l(i)&&s<=0&&t.cancelable)||void 0}function G(t,e,n){if(n!==R.Modal)return;const i=t.getBoundingClientRect(),s=e.getBoundingClientRect(),r=o(t,"dxbs-gridview"),c=r&&r.querySelector("thead");if(!c)return;const l=c.getBoundingClientRect(),u=(l||i).bottom;return u>.5*e.clientHeight?u-i.top<.5*e.clientHeight?u-s.top-.5*e.clientHeight:i.top-s.top-2:void 0}const U={init:function(t,o,i,c){if(t=e(t),o=e(o),i=e(i),t){if(l(t),i){const e=function(e){return A(e,t,(function(){s(t)||l(t);const e=document.activeElement===o,n=i&&F(i);(e||n)&&c.invokeMethodAsync("OnDropDownLostFocus",o.value)}))};n(document,a.touchMouseDownEventName,e),u(t,(function(){r(document,a.touchMouseDownEventName,e)}))}return Promise.resolve("ok")}},dispose:function(t){return(t=e(t))&&l(t),B&&B.dispose(),Promise.resolve("ok")},showAdaptiveDropdown:function(n,s,r,l,u){n=e(n);const h=o(n,r);if(!h)return;const p=document.documentElement,g=document.documentElement.style.overflow,v=document.body.style.overflow,w=document.body.scroll,b=s.dialogType,P=s.alignment,D=b===R.Modal;b===R.Popup&&(0===P?q(h,n,s.dropDownDirection):f(n,h,function(t){let e="";return W.forEach(n=>{0!=(n.value&t)&&(e&&(e+=" "),e+=n.text)}),e}(P)));let T=!1;function M(t){(!n.contains(t.srcElement)||b===R.Modal&&n===t.srcElement)&&O()}function L(t){p.removeEventListener("focusin",L),null===t.relatedTarget&&t.target&&n&&n.contains(t.target)&&t.target.focus()}function O(){T||(T=!0,setTimeout((function(){n&&(k(),u.invokeMethodAsync("CloseDialog"))}),200))}function k(){p.removeEventListener(a.touchMouseDownEventName,M),window.removeEventListener("resize",z),H(b,!1)}function N(){const t=n.querySelector(Y);t&&t.focus()}function z(){if(!o(n,"modal-dialog-owner"))return;const t=n.firstElementChild.classList,e=G(h,p,b),i=p.clientHeight>p.clientWidth?"topVertical":"topHorizontal";c((function(){t.contains("topVertical")||t.contains("topHorizontal")?t.remove("transition"):t.add("transition"),e&&(p.scrollTop=e),t.remove("topVertical","topHorizontal"),t.add(i)}))}function H(t,e){if(t!==R.Modal)return;let n,o,i;e?(n="hidden",o="hidden",i="no"):(n=g,o=v,i=w),document.documentElement.style.overflow=n,document.body.style.overflow=o,document.body.scroll=i}return p.addEventListener(a.touchMouseDownEventName,M),n.addEventListener("keydown",(function(t){t.keyCode===d.Esc&&O()})),n.addEventListener("focusout",(function(t){T||(null===t.relatedTarget||n.contains(t.relatedTarget)?null===t.relatedTarget&&p.addEventListener("focusin",L):!function(t){const e=n.compareDocumentPosition(t);e&window.Node.DOCUMENT_POSITION_PRECEDING?!function(){const t=function(t){const e=t.querySelectorAll(Y);return e[e.length-1]}(n);t&&t.focus()}():e&window.Node.DOCUMENT_POSITION_FOLLOWING&&N()}(t.relatedTarget))})),function(t,e,n,o){t&&e.addEventListener("touchmove",t=>{t.srcElement===e&&t.preventDefault()});if(o===R.Modal){let t=null;n.addEventListener("touchstart",e=>{t=e}),n.addEventListener("touchmove",e=>{_(e,t)&&e.preventDefault(),t=e})}}(D,n,h,b),function(t){if(E.has(t))return E.get(t);const e=new Promise((function(e){0===C.size&&S.observe(y,x);C.set(t,()=>{t=null,e()})}));return E.set(t,e),e}(n).then(()=>{k(),n=null}),H(b,!0),b===R.Popup?t((function(){n&&(s.showFocus||(i(n,"dxbs-focus-hidden"),m(n)),N())})):(window.addEventListener("resize",z),z()),Promise.resolve()},updateGridDropDown:j};export default U;export{R as DialogType,I as getDropDownElement,F as isDropDownVisible,A as onOutsideClick,G as scrollDropDown,q as setPositionOfDropDown,_ as shouldPreventTouchMove,j as updateGridDropDown};
