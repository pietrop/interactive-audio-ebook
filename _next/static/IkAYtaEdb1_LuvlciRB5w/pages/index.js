(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},"3Z9Z":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),c=n.n(u),s=n("vUet"),l=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.noGutters,f=e.as,p=void 0===f?"div":f,d=Object(a.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(s.a)(n,"row"),h=v+"-cols",m=[];return l.forEach((function(e){var t,n=d[e];delete d[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&m.push(""+h+r+"-"+t)})),c.a.createElement(p,Object(r.a)({ref:t},d,{className:i.a.apply(void 0,[o,v,u&&"no-gutters"].concat(m))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],p=r[s]||new Set;p.has(l)?o=!1:(p.add(l),r[s]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var d=o.default();function v(e){var t=e.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}v.rewind=d.rewind,t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},JI6e:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),c=n.n(u),s=n("vUet"),l=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.as,f=void 0===u?"div":u,p=Object(a.a)(e,["bsPrefix","className","as"]),d=Object(s.a)(n,"col"),v=[],h=[];return l.forEach((function(e){var t,n,r,a=p[e];if(delete p[e],null!=a&&"object"===typeof a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";null!=t&&v.push(!0===t?""+d+i:""+d+i+"-"+t),null!=r&&h.push("order"+i+"-"+r),null!=n&&h.push("offset"+i+"-"+n)})),v.length||v.push(d),c.a.createElement(f,Object(r.a)({},p,{ref:t,className:i.a.apply(void 0,[o].concat(v,h))}))}));f.displayName="Col",t.a=f},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,o=n.defaultProps,i=n.allowFallback,u=void 0!==i&&i,c=n.displayName,s=void 0===c?e.name||e.displayName:c,l=function(t,n){return e(t,n)};return Object.assign(a.default.forwardRef||!u?a.default.forwardRef(l):function(e){return l(e,null)},{displayName:s,propTypes:r,defaultProps:o})};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r}},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||o()}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),a=n.n(r),o=n("q1tI"),i=n.n(o),u=n("8Kt/"),c=n.n(u),s=n("YFqc"),l=n.n(s),f=n("cWnB"),p=n("wx14"),d=n("zLVn"),v=n("TSYQ"),h=n.n(v),m=n("vUet"),y=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.fluid,o=e.rounded,u=e.roundedCircle,c=e.thumbnail,s=Object(d.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);n=Object(m.a)(n,"img");var l=h()(a&&n+"-fluid",o&&"rounded",u&&"rounded-circle",c&&n+"-thumbnail");return i.a.createElement("img",Object(p.a)({ref:t},s,{className:h()(r,l)}))}));y.displayName="Image",y.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var b=y,w=n("3Z9Z"),x=n("JI6e"),g=n("yLiY"),j=n.n(g),_=i.a.createElement,O=j()().publicRuntimeConfig.basePath;t.default=function(){return _("div",{className:"jsx-650010199 container"},_(c.a,null,_("link",{rel:"icon",href:"/favicon.ico",className:"jsx-650010199"})),_("main",{className:"jsx-650010199"},_("h1",{className:"jsx-650010199 text-center"},"Interactive audio ebooks"),_("p",{className:"jsx-650010199 lead text-center"},"Bla bla some description of the proejct"),_("br",{className:"jsx-650010199"}),_(w.a,null,_(x.a,null,_(b,{src:"https://via.placeholder.com/750x300",fluid:!0}))),_("br",{className:"jsx-650010199"}),_(l.a,{href:"".concat(O,"/books")},_(f.a,{variant:"primary",size:"lg",block:!0},"View the available books"))),_("footer",{className:"jsx-650010199"}),_(a.a,{id:"1607256993"},[]),_(a.a,{id:"1771141567"},[]))}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),s=n("RIqP");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(s){i(v,s);var f,d=(f=v,function(){var e,t=c(f);if(l()){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function v(e){var o;return r(this,v),o=d.call(this,e),p&&(t.add(a(o)),n(a(o))),o}return o(v,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(v,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),v}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),u=n("Nsbk");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var s=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),v=n("g/15"),h=s(n("nOHt"));function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,w={};function x(){return f||(b?f=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var g=function(e){o(l,e);var t,s=(t=l,function(){var e,n=u(t);if(c()){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function l(e){var t;return r(this,l),(t=s.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}((function(e,t){return{href:m(e),as:t?m(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),i=o.href,u=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),u=u?(0,d.resolve)(c,u):i,e.preventDefault();var s=t.props.scroll;null==s&&(s=u.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](i,u,{shallow:t.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return a(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,d.resolve)(e,n);return[a,r?(0,d.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=x();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),a=r.href,o=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),u={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||a);var c=n("P5f7").rewriteUrlForNextExport;return u.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=c(u.href)),p.default.cloneElement(i,u)}}]),l}(p.Component);t.default=g},cWnB:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),c=n.n(u),s=n("vUet"),l=n("dbZe"),f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,u=e.size,f=e.active,p=e.className,d=e.block,v=e.type,h=e.as,m=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(s.a)(n,"btn"),b=i()(p,y,f&&"active",y+"-"+o,d&&y+"-block",u&&y+"-"+u);if(m.href)return c.a.createElement(l.a,Object(r.a)({},m,{as:h,ref:t,className:i()(b,m.disabled&&"disabled")}));t&&(m.ref=t),h||(m.type=v);var w=h||"button";return c.a.createElement(w,Object(r.a)({},m,{className:b}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=f},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),u=n("Qg85");function c(e){return!e||"#"===e.trim()}var s=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,s=e.disabled,l=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),p=function(e){var t=f.href,n=f.onClick;(s||c(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return c(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),s&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(o,Object(r.a)({ref:t},f,{onClick:p,onKeyDown:Object(u.a)((function(e){" "===e.key&&(e.preventDefault(),p(e))}),l)}))}));s.displayName="SafeAnchor",t.a=s},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("wx14"),n("QA0p");var r=n("q1tI"),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yLiY:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r},t.setConfig=function(e){r=e}},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[["vlRD",0,2,1,3]]]);