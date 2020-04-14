webpackHotUpdate("static/development/pages/books/[bookId]/[chapterId].js",{

/***/ "./pages/books/[bookId]/[chapterId].js":
/*!*********************************************!*\
  !*** ./pages/books/[bookId]/[chapterId].js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var getData = function getData(id) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", __webpack_require__("./prep-utils/json lazy recursive ^\\.\\/.*\\.json$")("./".concat(id, ".json")).then(function (_ref) {
            var myData = _ref["default"];
            return myData;
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var Chapter = function Chapter() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var _router$query = router.query,
      chapterId = _router$query.chapterId,
      bookId = _router$query.bookId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      chapterData = _useState[0],
      setChapterData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      bookTitle = _useState2[0],
      setBookTitle = _useState2[1];

  getData(bookId).then(function (res) {
    console.log('data 59', res); // setBookData(res);

    console.log('chapterId', chapterId);
    setBookTitle(res.title); // adjusting chapter id with array index

    var currentChapter = res.chapters[parseInt(chapterId) - 1];
    setChapterData(currentChapter);
  })["catch"](function (err) {
    console.error("couldn 't find book id", bookId);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2747661057",
    __self: _this
  }, ".before.jsx-2121629388{color:black;}.after.jsx-2121629388{color:grey;}.transcriptBtn.jsx-2121629388{border:0.1rem solid lightgrey;border-radius:0.5em;padding:0.5em;font-family:Retina,Arial,Helvetica,sans-serif;color:#333;font-weight:200;}.transcriptBtn.jsx-2121629388:hover{background-color:lightgray;color:white;}.article_title.jsx-2121629388{font-family:Escrow Condensed,Georgia,serif;font-weight:700;font-size:30px;line-height:34px;color:#333;}h2.article_title.jsx-2121629388{margin-top:0.5em;margin-bottom:0.2em;}.description.jsx-2121629388{font-family:Retina,Arial,Helvetica,sans-serif;font-weight:400;font-size:16px;line-height:22px;color:#666;}ul.jsx-2121629388{list-style-type:none;}li.jsx-2121629388 a.jsx-2121629388{color:black;-webkit-text-decoration:none;text-decoration:none;}li.jsx-2121629388{padding-bottom:0.5em;}hr.jsx-2121629388{border-top:1px solid lightgrey;}.article_header.jsx-2121629388{margin-top:10vh;font-size:40px;line-height:1.2em;font-family:Escrow Condensed,Chronicle Display,serif;font-weight:700;}.words.jsx-2121629388{cursor:pointer;margin-bottom:17px;font-size:17px;line-height:27px;word-wrap:break-word;font-family:Exchange,Chronicle SSm,serif;font-weight:400;}.words.jsx-2121629388:hover.jsx-2121629388:before{content:\"\u25B6\";color:blue;opacity:0.6;position:absolute;margin-top:-12px;}.containerAudio.jsx-2121629388{position:fixed;background-color:white;height:3em;padding-bottom:1em;padding-top:0.5em;top:0px;}audio.jsx-2121629388{width:100%;}@media only screen and (max-width.jsx-2121629388:768px) .container{width:100%;}@media only screen and (max-width.jsx-2121629388:768px) .containerAudio{width:100%;}@media (min-width.jsx-2121629388:769px) and (max-width.jsx-2121629388:1024px) .container{width:70%;padding-left:15%;padding-right:15%;}@media (min-width.jsx-2121629388:769px) and (max-width.jsx-2121629388:1024px) .containerAudio{width:70%;padding-left:15%;padding-right:15%;}@media (min-width.jsx-2121629388:1025px) and (max-width.jsx-2121629388:1280px) .container{width:50%;padding-left:25%;padding-right:25%;}@media (min-width.jsx-2121629388:1025px) and (max-width.jsx-2121629388:1280px) .containerAudio{width:50%;padding-left:25%;padding-right:25%;}@media (min-width.jsx-2121629388:1281px) .container{width:50%;padding-left:25%;padding-right:25%;}@media (min-width.jsx-2121629388:1281px) .containerAudio{width:50%;padding-left:25%;padding-right:25%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmMsQUFHbUIsQUFJRCxBQU9tQixBQVNILEFBS2tCLEFBUTVCLEFBS2dDLEFBUTVCLEFBSVQsQUFLUyxBQUlVLEFBT2YsQUFTRCxBQVVILEFBUUcsQUFVSixBQVFJLEFBR0EsQUFTRCxBQUtBLEFBV0EsQUFLQSxBQVdBLEFBS0EsVUFwQ08sQUFLQSxBQVdBLEFBS0EsQUFXQSxBQUtBLENBNUp6QixBQW1HQSxBQVFJLEFBR0EsQ0FsSEosQUFrRHlCLEFBbUNWLEdBVlEsQUFrQkksQ0ExQlIsQ0FsQ0ssSUFheEIsQUFTQSxFQStCZ0IsSUFsRUEsQUF3R1UsQUFLQSxBQVdBLEFBS0EsQUFXQSxBQUtBLEdBdEpGLENBZ0R4QixBQVNzQixHQVFILENBV0csRUFyRHRCLENBNERlLENBekVmLElBSW9CLEVBb0doQixBQUtBLEFBV0EsQUFLQSxBQVdBLEFBS0EsQ0E1SGdCLEdBK0J1QyxBQVF0QyxBQWtCRSxDQW5GTCxHQTRFRyxNQTlERixHQWFBLEFBWW5CLEVBdENxRCxFQWlFNUIsRUFrQkgsRUFQdEIsSUE5RHFCLEdBYUEsU0F5RFQsQ0FsQm1DLElBbkRoQyxHQWFBLEFBeURmLFFBckVBLEFBeUNvQixHQTVCcEIsS0E1QmUsUUF5RGYsR0F4RG9CLE9BaUVBLFNBaEVwQixPQWlFQSIsImZpbGUiOiIvVXNlcnMvcGFzc2FyZWxsaXAvQ09ERS9QRVJTT05BTC9pbnRlcmFjdGl2ZS1hdWRpby1lYm9vay1uZXh0anMvcGFnZXMvYm9va3MvW2Jvb2tJZF0vW2NoYXB0ZXJJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAoaWQpPT57XG4gICAgcmV0dXJuIGltcG9ydCggYC4uLy4uLy4uL3ByZXAtdXRpbHMvanNvbi8ke2lkfS5qc29uYCkudGhlbigoe2RlZmF1bHQ6IG15RGF0YX0pID0+IG15RGF0YSk7XG4gICB9XG5cbmNvbnN0IENoYXB0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgY2hhcHRlcklkLCBib29rSWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBbY2hhcHRlckRhdGEsIHNldENoYXB0ZXJEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtib29rVGl0bGUsIHNldEJvb2tUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgZ2V0RGF0YShib29rSWQpLnRoZW4oKHJlcyk9PntcbiAgICBjb25zb2xlLmxvZygnZGF0YSA1OScsIHJlcyk7XG4gICAgLy8gc2V0Qm9va0RhdGEocmVzKTtcbiAgICBjb25zb2xlLmxvZygnY2hhcHRlcklkJyxjaGFwdGVySWQpXG4gICAgc2V0Qm9va1RpdGxlKHJlcy50aXRsZSk7XG4gICAgLy8gYWRqdXN0aW5nIGNoYXB0ZXIgaWQgd2l0aCBhcnJheSBpbmRleFxuICAgIGNvbnN0IGN1cnJlbnRDaGFwdGVyID0gcmVzLmNoYXB0ZXJzW3BhcnNlSW50KGNoYXB0ZXJJZCktMV07XG4gICAgc2V0Q2hhcHRlckRhdGEoY3VycmVudENoYXB0ZXIpXG4gICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICBjb25zb2xlLmVycm9yKFwiY291bGRuICd0IGZpbmQgYm9vayBpZFwiLCBib29rSWQpXG4gICB9KVxuXG5yZXR1cm4gKDw+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAgLmJlZm9yZSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5hZnRlciB7XG4gICAgICBjb2xvcjogZ3JleTtcbiAgfVxuICBcbiAgXG4gIC8qIGZvciBpbmRleCBwYWdlICovXG4gIFxuICAudHJhbnNjcmlwdEJ0biB7XG4gICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCBsaWdodGdyZXk7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgZm9udC1mYW1pbHk6IFJldGluYSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBcbiAgLnRyYW5zY3JpcHRCdG46aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuYXJ0aWNsZV90aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogRXNjcm93IENvbmRlbnNlZCwgR2VvcmdpYSwgc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgaDIuYXJ0aWNsZV90aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICB9XG4gIFxuICAuZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1mYW1pbHk6IFJldGluYSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICB9XG4gIFxuICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbiAgXG4gIGxpIGEge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICBsaSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIH1cbiAgXG4gIGhyIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIH1cbiAgXG4gIFxuICAvKiBmb3Igc2hvdyBwYWdlICovXG4gIFxuICAuYXJ0aWNsZV9oZWFkZXIge1xuICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgIC8qIG1hcmdpbi1ib3R0b206IDRweDsgKi9cbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBFc2Nyb3cgQ29uZGVuc2VkLCBDaHJvbmljbGUgRGlzcGxheSwgc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIFxuICAud29yZHMge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgZm9udC1mYW1pbHk6IEV4Y2hhbmdlLCBDaHJvbmljbGUgU1NtLCBzZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgXG4gIC53b3Jkczpob3ZlcjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLilrZcIjtcbiAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXJBdWRpbyB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogM2VtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgICAgIHRvcDogMHB4O1xuICB9XG4gIFxuICBhdWRpbyB7XG4gICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIFxuICAvKiBNb2JpbGUgcGhvbmVzICovXG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qIExhcHRvcHMsIERlc2t0b3BzICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gICAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBEZXNrdG9wcyAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgfVxuICB9XG4gIGB9PC9zdHlsZT5cbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgXG4gIGB9PC9zdHlsZT5cbiAgICA8aDI+e2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLnRpdGxlfSAtIHtib29rVGl0bGUmJmJvb2tUaXRsZX08L2gyPlxuICA8aDM+PC9oMz5cbiAge2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLmR1cmF0aW9ufSBcbiAge2NoYXB0ZXJEYXRhICYmICggPGF1ZGlvIHNyYz17Y2hhcHRlckRhdGEudXJsfSBjb250cm9scyB0eXBlPXtjaGFwdGVyRGF0YS50eXBlfSAvPiApfVxuIFxuICB7Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEudGV4dH1cbiAgXG4gIDwvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcHRlclxuXG5DaGFwdGVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzJylcbiAgICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7IH1cbn0iXX0= */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "524230756",
    __self: _this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpTXFCIiwiZmlsZSI6Ii9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChpZCk9PntcbiAgICByZXR1cm4gaW1wb3J0KCBgLi4vLi4vLi4vcHJlcC11dGlscy9qc29uLyR7aWR9Lmpzb25gKS50aGVuKCh7ZGVmYXVsdDogbXlEYXRhfSkgPT4gbXlEYXRhKTtcbiAgIH1cblxuY29uc3QgQ2hhcHRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBjaGFwdGVySWQsIGJvb2tJZCB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IFtjaGFwdGVyRGF0YSwgc2V0Q2hhcHRlckRhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Jvb2tUaXRsZSwgc2V0Qm9va1RpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBnZXREYXRhKGJvb2tJZCkudGhlbigocmVzKT0+e1xuICAgIGNvbnNvbGUubG9nKCdkYXRhIDU5JywgcmVzKTtcbiAgICAvLyBzZXRCb29rRGF0YShyZXMpO1xuICAgIGNvbnNvbGUubG9nKCdjaGFwdGVySWQnLGNoYXB0ZXJJZClcbiAgICBzZXRCb29rVGl0bGUocmVzLnRpdGxlKTtcbiAgICAvLyBhZGp1c3RpbmcgY2hhcHRlciBpZCB3aXRoIGFycmF5IGluZGV4XG4gICAgY29uc3QgY3VycmVudENoYXB0ZXIgPSByZXMuY2hhcHRlcnNbcGFyc2VJbnQoY2hhcHRlcklkKS0xXTtcbiAgICBzZXRDaGFwdGVyRGF0YShjdXJyZW50Q2hhcHRlcilcbiAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgIGNvbnNvbGUuZXJyb3IoXCJjb3VsZG4gJ3QgZmluZCBib29rIGlkXCIsIGJvb2tJZClcbiAgIH0pXG5cbnJldHVybiAoPD5cbiAgPHN0eWxlIGpzeD57YFxuICAgICAuYmVmb3JlIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmFmdGVyIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICB9XG4gIFxuICBcbiAgLyogZm9yIGluZGV4IHBhZ2UgKi9cbiAgXG4gIC50cmFuc2NyaXB0QnRuIHtcbiAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICBmb250LWZhbWlseTogUmV0aW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIFxuICAudHJhbnNjcmlwdEJ0bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5hcnRpY2xlX3RpdGxlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBFc2Nyb3cgQ29uZGVuc2VkLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICBoMi5hcnRpY2xlX3RpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gIH1cbiAgXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LWZhbWlseTogUmV0aW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgXG4gIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICBcbiAgbGkgYSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIGxpIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgfVxuICBcbiAgaHIge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgfVxuICBcbiAgXG4gIC8qIGZvciBzaG93IHBhZ2UgKi9cbiAgXG4gIC5hcnRpY2xlX2hlYWRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgICAgLyogbWFyZ2luLWJvdHRvbTogNHB4OyAqL1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgZm9udC1mYW1pbHk6IEVzY3JvdyBDb25kZW5zZWQsIENocm9uaWNsZSBEaXNwbGF5LCBzZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgXG4gIC53b3JkcyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICBmb250LWZhbWlseTogRXhjaGFuZ2UsIENocm9uaWNsZSBTU20sIHNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBcbiAgLndvcmRzOmhvdmVyOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIuKWtlwiO1xuICAgICAgY29sb3I6IGJsdWU7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgcGFkZGluZy10b3A6IDAuNWVtO1xuICAgICAgdG9wOiAwcHg7XG4gIH1cbiAgXG4gIGF1ZGlvIHtcbiAgICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIC8qIE1vYmlsZSBwaG9uZXMgKi9cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qIFRhYmxldHMsIElwYWRzIChwb3J0cmFpdCkgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLyogTGFwdG9wcywgRGVza3RvcHMgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qIERlc2t0b3BzICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gICAgICB9XG4gIH1cbiAgYH08L3N0eWxlPlxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuICBcbiAgYH08L3N0eWxlPlxuICAgIDxoMj57Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEudGl0bGV9IC0ge2Jvb2tUaXRsZSYmYm9va1RpdGxlfTwvaDI+XG4gIDxoMz48L2gzPlxuICB7Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEuZHVyYXRpb259IFxuICB7Y2hhcHRlckRhdGEgJiYgKCA8YXVkaW8gc3JjPXtjaGFwdGVyRGF0YS51cmx9IGNvbnRyb2xzIHR5cGU9e2NoYXB0ZXJEYXRhLnR5cGV9IC8+ICl9XG4gXG4gIHtjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS50ZXh0fVxuICBcbiAgPC8+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFwdGVyXG5cbkNoYXB0ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy96ZWl0L25leHQuanMnKVxuICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHsgfVxufSJdfQ== */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx("h2", {
    className: "jsx-2121629388",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 5
    }
  }, chapterData && chapterData.title, " - ", bookTitle && bookTitle), __jsx("h3", {
    className: "jsx-2121629388",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 3
    }
  }), chapterData && chapterData.duration, chapterData && __jsx("audio", {
    src: chapterData.url,
    controls: true,
    type: chapterData.type,
    className: "jsx-2121629388",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }), chapterData && chapterData.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Chapter);

Chapter.getInitialProps = function _callee(ctx) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", {});

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

/***/ })

})
//# sourceMappingURL=[chapterId].js.fb0219abcbb564b68325.hot-update.js.map