(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4Pnl":function(e,t,n){var r={"./59.json":["CTA4",12]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(r)},o.id="4Pnl",e.exports=o},A8pz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/[bookId]/[chapterId]",function(){return n("UKqy")}])},UKqy:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),s=n("MX0m"),a=n.n(s),c=n("q1tI"),u=n.n(c),i=n("nOHt"),l=n("XDws"),p=n.n(l),d=u.a.createElement,f=function(){var e,t=Object(i.useRouter)().query,r=t.chapterId,s=t.bookId,l=Object(c.useState)(),f=l[0],x=l[1],m=Object(c.useState)(0),b=m[0],j=m[1],w=Object(c.useState)(""),h=w[0],N=w[1],v=Object(c.useRef)();(e=s,o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n("4Pnl")("./".concat(e,".json")).then((function(e){return e.default})));case 1:case"end":return t.stop()}}),null,null,null,Promise)).then((function(e){console.log("data 59",e),console.log("chapterId",r),N(e.title);var t=e.chapters[parseInt(r)-1];x(t)})).catch((function(e){console.error("couldn 't find book id",s)}));return d(u.a.Fragment,null,d(a.a,{id:"559468140"},[".words.jsx-942533120{cursor:pointer;margin-bottom:17px;font-size:17px;line-height:27px;word-wrap:break-word;}",'.words.jsx-942533120:hover.jsx-942533120:before{content:"\u25b6";color:#008cba;position:absolute;margin-top:-12px;}',".past-words.jsx-942533120{color:black;}",".future-words.jsx-942533120{color:grey;}","audio.jsx-942533120{position:fixed;bottom:0;left:0px;width:100%;}",".duration.jsx-942533120{font-size:medium;}"]),d(a.a,{id:"2639107941"},[]),d("h2",{className:"jsx-942533120"},f&&f.title," - ",h&&h," ",d("span",{className:"jsx-942533120 duration"},f&&f.duration," ")),d("br",{className:"jsx-942533120"}),d("br",{className:"jsx-942533120"}),f&&d("audio",{ref:v,src:f.url,controls:!0,type:f.type,className:"jsx-942533120"}),d("article",{onClick:function(e){var t=parseInt(e.target.id);j(t);var n=f.text.split(" "),r=n.length-t;n.splice(t,r);var o=n.reduce((function(e,t){var n=p()(t);return e+=parseFloat(n)}),0);console.log("estimatedTimeOffset",o),v.current.currentTime=o,v.current.play()},className:"jsx-942533120"},f&&f.text.split(" ").map((function(e,t){return d("span",{id:t,className:"jsx-942533120 "+(["words",t<=b?"past-words":"future-words"].join(" ")||"")},e," ")}))),d("br",{className:"jsx-942533120"}),d("br",{className:"jsx-942533120"}),d("br",{className:"jsx-942533120"}),d("br",{className:"jsx-942533120"}))};t.default=f,f.getInitialProps=function(e){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),null,null,null,Promise)}},XDws:function(e,t){e.exports=function(e){return.08475+.05379*e.length}}},[["A8pz",0,2,1,3]]]);