(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ");function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=u(n("q1tI")),l=n("8L3h"),c=n("jwwS"),f=[],d=[],p=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function g(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=h(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return s.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function m(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new b(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!p&&"function"===typeof n.webpack){var i=n.webpack();d.push((function(e){var t,n=a(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(u){n.e(u)}finally{n.f()}}))}var u=function(e,t){o();var a=s.default.useContext(c.LoadableContext),i=l.useSubscription(r);return s.default.useImperativeHandle(t,(function(){return{retry:r.retry}})),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),i.loading||i.error?s.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,e):null};return u.preload=function(){return o()},u.displayName="LoadableComponent",s.default.forwardRef(u)}var b=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return m(h,e)}function _(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return _(e,t)}))}y.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return m(g,e)},y.preloadAll=function(){return new Promise((function(e,t){_(f).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return p=!0,t()};_(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady,t.default=y},"4Pnl":function(e,t,n){var r={"./59.json":["CTA4",4]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(r)},o.id="4Pnl",e.exports=o},Pljw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/[bookId]",function(){return n("zjEj")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("2qu3")),i=!1;function u(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var n=t.loading;return function(){return o.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=u,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),u=n("Nsbk");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("TqRt"),c=n("284h");t.__esModule=!0,t.default=void 0;var f,d=c(n("q1tI")),p=n("QmWs"),h=n("g/15"),g=l(n("nOHt"));function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var m=new Map,b=window.IntersectionObserver,y={};function _(){return f||(b?f=new b((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){a(c,e);var t,l=(t=c,function(){var e,n=u(t);if(s()){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function c(e){var t;return r(this,c),(t=l.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:v(e),as:t?v(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),i=a.href,u=a.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,p.resolve)(s,i),u=u?(0,p.resolve)(s,u):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=u.indexOf("#")<0),g.default[t.props.replace?"replace":"push"](i,u,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(c,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=_();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();g.default.prefetch(t[0],t[1],e).catch((function(e){0})),y[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,a=r.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),u={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=a||o);var s=n("P5f7").rewriteUrlForNextExport;return u.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=s(u.href)),d.default.cloneElement(i,u)}}]),c}(d.Component);t.default=w},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.LoadableContext=o.createContext(null)},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},yLiY:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r},t.setConfig=function(e){r=e}},zjEj:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("q1tI"),i=n.n(a),u=n("nOHt"),s=n("YFqc"),l=n.n(s),c=n("yLiY"),f=n.n(c),d=n("vcXL"),p=n.n(d),h=(n("a6RD"),n("CTA4"),i.a.createElement),g=f()().publicRuntimeConfig.basePath,v=function(){var e,t=Object(u.useRouter)().query.bookId,r=Object(a.useState)(),s=r[0],c=r[1];return(e=t,o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n("4Pnl")("./".concat(e,".json")).then((function(e){return e.default})));case 1:case"end":return t.stop()}}),null,null,null,Promise)).then((function(e){console.log("data 59",Array.from(e)),c(e)})).catch((function(e){console.error("couldn't find book id",t)})),h(i.a.Fragment,null,s&&h(i.a.Fragment,null,h("h2",null,h("b",null,"Book:"),s.title),h("a",{href:s.link,target:"_blank",rel:"noopener noreferrer"},"LibriVox")," | ",h("a",{href:"https://www.gutenberg.org/files/".concat(s.gutembergId,"/").concat(s.gutembergId,"-h/").concat(s.gutembergId,"-h.htm"),target:"_blank",rel:"noopener noreferrer"},"Gutenberg"),h("br",null),h("img",{src:"https://www.gutenberg.org/files/".concat(s.gutembergId,"/").concat(s.gutembergId,"-h/images/bookcover.jpg"),style:{width:"200px",height:"auto"}}),h("img",{src:"https://www.gutenberg.org/files/".concat(s.gutembergId,"/").concat(s.gutembergId,"-h/images/frontispiece.jpg"),style:{width:"200px",height:"auto"}}),h("img",{src:"https://www.gutenberg.org/files/".concat(s.gutembergId,"/").concat(s.gutembergId,"-h/images/titlepage.jpg"),style:{width:"200px",height:"auto"}}),h("p",null,s.description)),h("ul",null,s&&s.chapters.map((function(e){return h("li",null,h(l.a,{href:"".concat(g,"/books/[bookId]/[chapterId]"),as:"".concat(g,"/books/").concat(t,"/").concat(e.chapter)},h("a",null,e.title," - ",e.duration," ")))}))))};t.default=v,v.getInitialProps=function(e){var t,n;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(p()("https://api.github.com/repos/zeit/next.js"));case 2:return t=e.sent,e.next=5,o.a.awrap(t.json());case 5:return n=e.sent,e.abrupt("return",{stars:n.stargazers_count});case 7:case"end":return e.stop()}}),null,null,null,Promise)}}},[["Pljw",0,2,1,4]]]);