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
/* harmony import */ var _utils_calculate_word_duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/calculate-word-duration */ "./utils/calculate-word-duration/index.js");
/* harmony import */ var _utils_calculate_word_duration__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_calculate_word_duration__WEBPACK_IMPORTED_MODULE_4__);


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

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  getData(bookId).then(function (res) {
    console.log('data 59', res); // setBookData(res);

    console.log('chapterId', chapterId);
    setBookTitle(res.title); // adjusting chapter id with array index

    var currentChapter = res.chapters[parseInt(chapterId) - 1];
    setChapterData(currentChapter);
  })["catch"](function (err) {
    console.error("couldn 't find book id", bookId);
  });

  var handleTextClick = function handleTextClick(e) {
    var index = parseInt(e.target.id); //    console.log()

    var wordList = chapterData.text.split(' ');
    var removeCount = wordList.length - index;
    wordList.splice(index, removeCount);
    var estimatedTimeOffset = wordList.reduce(function (total, word) {
      var wordDuration = _utils_calculate_word_duration__WEBPACK_IMPORTED_MODULE_4___default()(word);
      total += parseFloat(wordDuration);
      return total;
    }, 0);
    console.log('estimatedTimeOffset', estimatedTimeOffset);
    audioRef.current.currentTime = estimatedTimeOffset;
    audioRef.current.play();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1129344428",
    __self: _this
  }, ".before.jsx-2862428608{color:black;}.after.jsx-2862428608{color:grey;}.transcriptBtn.jsx-2862428608{border:0.1rem solid lightgrey;border-radius:0.5em;padding:0.5em;font-family:Retina,Arial,Helvetica,sans-serif;color:#333;font-weight:200;}.transcriptBtn.jsx-2862428608:hover{background-color:lightgray;color:white;}.article_title.jsx-2862428608{font-family:Escrow Condensed,Georgia,serif;font-weight:700;font-size:30px;line-height:34px;color:#333;}h2.article_title.jsx-2862428608{margin-top:0.5em;margin-bottom:0.2em;}.description.jsx-2862428608{font-family:Retina,Arial,Helvetica,sans-serif;font-weight:400;font-size:16px;line-height:22px;color:#666;}ul.jsx-2862428608{list-style-type:none;}li.jsx-2862428608 a.jsx-2862428608{color:black;-webkit-text-decoration:none;text-decoration:none;}li.jsx-2862428608{padding-bottom:0.5em;}hr.jsx-2862428608{border-top:1px solid lightgrey;}.article_header.jsx-2862428608{margin-top:10vh;font-size:40px;line-height:1.2em;font-family:Escrow Condensed,Chronicle Display,serif;font-weight:700;}.words.jsx-2862428608{cursor:pointer;margin-bottom:17px;font-size:17px;line-height:27px;word-wrap:break-word;}.words.jsx-2862428608:hover.jsx-2862428608:before{content:\"\u25B6\";color:blue;opacity:0.6;position:absolute;margin-top:-12px;}.containerAudio.jsx-2862428608{position:fixed;background-color:white;height:3em;padding-bottom:1em;padding-top:0.5em;top:0px;}audio.jsx-2862428608{width:100%;}@media only screen and (max-width.jsx-2862428608:768px) .container{width:100%;}@media only screen and (max-width.jsx-2862428608:768px) .containerAudio{width:100%;}@media (min-width.jsx-2862428608:769px) and (max-width.jsx-2862428608:1024px) .container{width:70%;padding-left:15%;padding-right:15%;}@media (min-width.jsx-2862428608:769px) and (max-width.jsx-2862428608:1024px) .containerAudio{width:70%;padding-left:15%;padding-right:15%;}@media (min-width.jsx-2862428608:1025px) and (max-width.jsx-2862428608:1280px) .container{width:50%;padding-left:25%;padding-right:25%;}@media (min-width.jsx-2862428608:1025px) and (max-width.jsx-2862428608:1280px) .containerAudio{width:50%;padding-left:25%;padding-right:25%;}audio.jsx-2862428608{position:fixed;bottom:0;left:0px;width:100%;}.duration.jsx-2862428608{font-size:medium;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2MsQUFHbUIsQUFJRCxBQU9tQixBQVNILEFBS2tCLEFBUTVCLEFBS2dDLEFBUTVCLEFBSVQsQUFLUyxBQUlVLEFBT2YsQUFTRCxBQVFILEFBUUcsQUFVSixBQVFJLEFBR0EsQUFTRCxBQUtBLEFBV0EsQUFLQSxBQWFELEFBUUUsVUF6Q00sQUFLQSxBQVdBLEFBS0EsQ0ExSXpCLEFBaUdBLEFBUUksQUFHQSxDQWhISixBQWtEeUIsQUFpQ1YsR0FSUSxBQWdCSSxBQWdFaEIsQ0F4RlEsQ0FsQ0ssQUFrSTFCLElBckhFLEFBU0EsRUE2QmdCLENBd0VMLEdBeElLLEFBc0dVLEFBS0EsQUFXQSxBQUtBLEdBcElGLENBZ0R4QixBQVNzQixFQXlGVCxDQWpGTSxDQVNHLEVBbkR0QixDQTBEZSxDQXZFZixJQUlvQixDQXFJdEIsQ0FuQ00sQUFLQSxBQVdBLEFBS0EsQ0ExR2dCLEdBK0J1QyxBQVF0QyxBQWdCRSxDQWpGTCxHQTBFRyxNQTVERixHQWFBLEFBWW5CLEVBdENxRCxFQWlFNUIsRUFnQkgsRUFQdEIsSUE1RHFCLEdBYUEsU0F1RFQsQ0FoQlosSUFuRGUsR0FhQSxBQXVEZixRQW5FQSxBQXlDb0IsR0E1QnBCLEtBNUJlLFFBeURmLEdBeERvQixnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3Bhc3NhcmVsbGlwL0NPREUvUEVSU09OQUwvaW50ZXJhY3RpdmUtYXVkaW8tZWJvb2stbmV4dGpzL3BhZ2VzL2Jvb2tzL1tib29rSWRdL1tjaGFwdGVySWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2FsY3VsYXRlV29yZER1cmF0aW9uIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGN1bGF0ZS13b3JkLWR1cmF0aW9uJztcbmNvbnN0IGdldERhdGEgPSBhc3luYyAoaWQpPT57XG4gICAgcmV0dXJuIGltcG9ydCggYC4uLy4uLy4uL3ByZXAtdXRpbHMvanNvbi8ke2lkfS5qc29uYCkudGhlbigoe2RlZmF1bHQ6IG15RGF0YX0pID0+IG15RGF0YSk7XG4gICB9XG5cbmNvbnN0IENoYXB0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgY2hhcHRlcklkLCBib29rSWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBbY2hhcHRlckRhdGEsIHNldENoYXB0ZXJEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtib29rVGl0bGUsIHNldEJvb2tUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYoKTtcbiAgZ2V0RGF0YShib29rSWQpLnRoZW4oKHJlcyk9PntcbiAgICBjb25zb2xlLmxvZygnZGF0YSA1OScsIHJlcyk7XG4gICAgLy8gc2V0Qm9va0RhdGEocmVzKTtcbiAgICBjb25zb2xlLmxvZygnY2hhcHRlcklkJyxjaGFwdGVySWQpXG4gICAgc2V0Qm9va1RpdGxlKHJlcy50aXRsZSk7XG4gICAgLy8gYWRqdXN0aW5nIGNoYXB0ZXIgaWQgd2l0aCBhcnJheSBpbmRleFxuICAgIGNvbnN0IGN1cnJlbnRDaGFwdGVyID0gcmVzLmNoYXB0ZXJzW3BhcnNlSW50KGNoYXB0ZXJJZCktMV07XG4gICAgc2V0Q2hhcHRlckRhdGEoY3VycmVudENoYXB0ZXIpXG4gICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICBjb25zb2xlLmVycm9yKFwiY291bGRuICd0IGZpbmQgYm9vayBpZFwiLCBib29rSWQpXG4gICB9KVxuXG4gICBjb25zdCBoYW5kbGVUZXh0Q2xpY2sgPSAoZSk9PntcbiAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkKTtcbiAgICAvLyAgICBjb25zb2xlLmxvZygpXG4gICAgICAgY29uc3Qgd29yZExpc3QgPSBjaGFwdGVyRGF0YS50ZXh0LnNwbGl0KCcgJyk7XG4gICAgICAgY29uc3QgcmVtb3ZlQ291bnQgPSB3b3JkTGlzdC5sZW5ndGggLSBpbmRleDtcbiAgICAgICB3b3JkTGlzdC5zcGxpY2UoIGluZGV4LCByZW1vdmVDb3VudCApXG4gICAgICAgY29uc3QgZXN0aW1hdGVkVGltZU9mZnNldCA9IHdvcmRMaXN0LnJlZHVjZSgodG90YWwsIHdvcmQpPT57XG4gICAgICAgICAgICBjb25zdCB3b3JkRHVyYXRpb24gPSBjYWxjdWxhdGVXb3JkRHVyYXRpb24od29yZCk7XG4gICAgICAgICAgICB0b3RhbCArPSBwYXJzZUZsb2F0KHdvcmREdXJhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgfSwgMClcblxuICAgICAgIGNvbnNvbGUubG9nKCdlc3RpbWF0ZWRUaW1lT2Zmc2V0Jyxlc3RpbWF0ZWRUaW1lT2Zmc2V0KVxuICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgID0gZXN0aW1hdGVkVGltZU9mZnNldDtcbiAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKVxuICAgfVxuXG5cbnJldHVybiAoPD5cbiAgPHN0eWxlIGpzeD57YFxuICAgICAuYmVmb3JlIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmFmdGVyIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICB9XG4gIFxuICBcbiAgLyogZm9yIGluZGV4IHBhZ2UgKi9cbiAgXG4gIC50cmFuc2NyaXB0QnRuIHtcbiAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICBmb250LWZhbWlseTogUmV0aW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIFxuICAudHJhbnNjcmlwdEJ0bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5hcnRpY2xlX3RpdGxlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBFc2Nyb3cgQ29uZGVuc2VkLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICBoMi5hcnRpY2xlX3RpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gIH1cbiAgXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LWZhbWlseTogUmV0aW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgXG4gIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICBcbiAgbGkgYSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIGxpIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgfVxuICBcbiAgaHIge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgfVxuICBcbiAgXG4gIC8qIGZvciBzaG93IHBhZ2UgKi9cbiAgXG4gIC5hcnRpY2xlX2hlYWRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgICAgLyogbWFyZ2luLWJvdHRvbTogNHB4OyAqL1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgZm9udC1mYW1pbHk6IEVzY3JvdyBDb25kZW5zZWQsIENocm9uaWNsZSBEaXNwbGF5LCBzZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgXG4gIC53b3JkcyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgXG4gIC53b3Jkczpob3ZlcjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLilrZcIjtcbiAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXJBdWRpbyB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogM2VtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgICAgIHRvcDogMHB4O1xuICB9XG4gIFxuICBhdWRpbyB7XG4gICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIFxuICAvKiBNb2JpbGUgcGhvbmVzICovXG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qIExhcHRvcHMsIERlc2t0b3BzICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gICAgICB9XG4gIH1cbiAgXG4gIFxuXG5cblxuXG5cbiAgYXVkaW97XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuICAuZHVyYXRpb257XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59XG4gIGB9PC9zdHlsZT5cbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiBcbiAgXG4gIGB9PC9zdHlsZT5cbiAgICA8aDI+e2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLnRpdGxlfSAtIHtib29rVGl0bGUmJmJvb2tUaXRsZX0gPHNwYW4gY2xhc3NOYW1lPVwiZHVyYXRpb25cIj57Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEuZHVyYXRpb259IDwvc3Bhbj48L2gyPlxuICBcbiAgPGJyLz5cbiAgPGJyLz5cbiAge2NoYXB0ZXJEYXRhICYmICggPGF1ZGlvICByZWY9e2F1ZGlvUmVmfSBzcmM9e2NoYXB0ZXJEYXRhLnVybH0gY29udHJvbHMgdHlwZT17Y2hhcHRlckRhdGEudHlwZX0gLz4gKX1cbiAgPGFydGljbGUgb25DbGljaz17aGFuZGxlVGV4dENsaWNrfT5cbiAgICB7Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEudGV4dC5zcGxpdCgnICcpLm1hcCgod29yZCwgaW5kZXgpPT57IHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJ3b3Jkc1wiIGlkPXtpbmRleH0+e3dvcmR9IDwvc3Bhbj59KX1cbiAgPC9hcnRpY2xlPlxuICA8YnIvPlxuICA8YnIvPlxuICA8YnIvPlxuICA8YnIvPlxuXG4gIFxuICA8Lz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXB0ZXJcblxuQ2hhcHRlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3plaXQvbmV4dC5qcycpXG4gICAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4geyB9XG59Il19 */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2639107941",
    __self: _this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTnFCIiwiZmlsZSI6Ii9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNhbGN1bGF0ZVdvcmREdXJhdGlvbiBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhdGUtd29yZC1kdXJhdGlvbic7XG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGlkKT0+e1xuICAgIHJldHVybiBpbXBvcnQoIGAuLi8uLi8uLi9wcmVwLXV0aWxzL2pzb24vJHtpZH0uanNvbmApLnRoZW4oKHtkZWZhdWx0OiBteURhdGF9KSA9PiBteURhdGEpO1xuICAgfVxuXG5jb25zdCBDaGFwdGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGNoYXB0ZXJJZCwgYm9va0lkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgW2NoYXB0ZXJEYXRhLCBzZXRDaGFwdGVyRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYm9va1RpdGxlLCBzZXRCb29rVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKCk7XG4gIGdldERhdGEoYm9va0lkKS50aGVuKChyZXMpPT57XG4gICAgY29uc29sZS5sb2coJ2RhdGEgNTknLCByZXMpO1xuICAgIC8vIHNldEJvb2tEYXRhKHJlcyk7XG4gICAgY29uc29sZS5sb2coJ2NoYXB0ZXJJZCcsY2hhcHRlcklkKVxuICAgIHNldEJvb2tUaXRsZShyZXMudGl0bGUpO1xuICAgIC8vIGFkanVzdGluZyBjaGFwdGVyIGlkIHdpdGggYXJyYXkgaW5kZXhcbiAgICBjb25zdCBjdXJyZW50Q2hhcHRlciA9IHJlcy5jaGFwdGVyc1twYXJzZUludChjaGFwdGVySWQpLTFdO1xuICAgIHNldENoYXB0ZXJEYXRhKGN1cnJlbnRDaGFwdGVyKVxuICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgY29uc29sZS5lcnJvcihcImNvdWxkbiAndCBmaW5kIGJvb2sgaWRcIiwgYm9va0lkKVxuICAgfSlcblxuICAgY29uc3QgaGFuZGxlVGV4dENsaWNrID0gKGUpPT57XG4gICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5pZCk7XG4gICAgLy8gICAgY29uc29sZS5sb2coKVxuICAgICAgIGNvbnN0IHdvcmRMaXN0ID0gY2hhcHRlckRhdGEudGV4dC5zcGxpdCgnICcpO1xuICAgICAgIGNvbnN0IHJlbW92ZUNvdW50ID0gd29yZExpc3QubGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgd29yZExpc3Quc3BsaWNlKCBpbmRleCwgcmVtb3ZlQ291bnQgKVxuICAgICAgIGNvbnN0IGVzdGltYXRlZFRpbWVPZmZzZXQgPSB3b3JkTGlzdC5yZWR1Y2UoKHRvdGFsLCB3b3JkKT0+e1xuICAgICAgICAgICAgY29uc3Qgd29yZER1cmF0aW9uID0gY2FsY3VsYXRlV29yZER1cmF0aW9uKHdvcmQpO1xuICAgICAgICAgICAgdG90YWwgKz0gcGFyc2VGbG9hdCh3b3JkRHVyYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgIH0sIDApXG5cbiAgICAgICBjb25zb2xlLmxvZygnZXN0aW1hdGVkVGltZU9mZnNldCcsZXN0aW1hdGVkVGltZU9mZnNldClcbiAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lICA9IGVzdGltYXRlZFRpbWVPZmZzZXQ7XG4gICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KClcbiAgIH1cblxuXG5yZXR1cm4gKDw+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAgLmJlZm9yZSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5hZnRlciB7XG4gICAgICBjb2xvcjogZ3JleTtcbiAgfVxuICBcbiAgXG4gIC8qIGZvciBpbmRleCBwYWdlICovXG4gIFxuICAudHJhbnNjcmlwdEJ0biB7XG4gICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCBsaWdodGdyZXk7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgZm9udC1mYW1pbHk6IFJldGluYSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBcbiAgLnRyYW5zY3JpcHRCdG46aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuYXJ0aWNsZV90aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogRXNjcm93IENvbmRlbnNlZCwgR2VvcmdpYSwgc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgaDIuYXJ0aWNsZV90aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICB9XG4gIFxuICAuZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1mYW1pbHk6IFJldGluYSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICB9XG4gIFxuICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbiAgXG4gIGxpIGEge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICBsaSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIH1cbiAgXG4gIGhyIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIH1cbiAgXG4gIFxuICAvKiBmb3Igc2hvdyBwYWdlICovXG4gIFxuICAuYXJ0aWNsZV9oZWFkZXIge1xuICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgIC8qIG1hcmdpbi1ib3R0b206IDRweDsgKi9cbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBFc2Nyb3cgQ29uZGVuc2VkLCBDaHJvbmljbGUgRGlzcGxheSwgc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIFxuICAud29yZHMge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG4gIFxuICAud29yZHM6aG92ZXI6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwi4pa2XCI7XG4gICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICBwYWRkaW5nLXRvcDogMC41ZW07XG4gICAgICB0b3A6IDBweDtcbiAgfVxuICBcbiAgYXVkaW8ge1xuICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBcbiAgLyogTW9iaWxlIHBob25lcyAqL1xuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLyogVGFibGV0cywgSXBhZHMgKHBvcnRyYWl0KSAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gICAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBMYXB0b3BzLCBEZXNrdG9wcyAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgfVxuICB9XG4gIFxuICBcblxuXG5cblxuXG4gIGF1ZGlve1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbiAgLmR1cmF0aW9ue1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuICBgfTwvc3R5bGU+XG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gXG4gIFxuICBgfTwvc3R5bGU+XG4gICAgPGgyPntjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS50aXRsZX0gLSB7Ym9va1RpdGxlJiZib29rVGl0bGV9IDxzcGFuIGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+e2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLmR1cmF0aW9ufSA8L3NwYW4+PC9oMj5cbiAgXG4gIDxici8+XG4gIDxici8+XG4gIHtjaGFwdGVyRGF0YSAmJiAoIDxhdWRpbyAgcmVmPXthdWRpb1JlZn0gc3JjPXtjaGFwdGVyRGF0YS51cmx9IGNvbnRyb2xzIHR5cGU9e2NoYXB0ZXJEYXRhLnR5cGV9IC8+ICl9XG4gIDxhcnRpY2xlIG9uQ2xpY2s9e2hhbmRsZVRleHRDbGlja30+XG4gICAge2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLnRleHQuc3BsaXQoJyAnKS5tYXAoKHdvcmQsIGluZGV4KT0+eyByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwid29yZHNcIiBpZD17aW5kZXh9Pnt3b3JkfSA8L3NwYW4+fSl9XG4gIDwvYXJ0aWNsZT5cbiAgPGJyLz5cbiAgPGJyLz5cbiAgPGJyLz5cbiAgPGJyLz5cblxuICBcbiAgPC8+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFwdGVyXG5cbkNoYXB0ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy96ZWl0L25leHQuanMnKVxuICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHsgfVxufSJdfQ== */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx("h2", {
    className: "jsx-2862428608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, chapterData && chapterData.title, " - ", bookTitle && bookTitle, " ", __jsx("span", {
    className: "jsx-2862428608" + " " + "duration",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 69
    }
  }, chapterData && chapterData.duration, " ")), __jsx("br", {
    className: "jsx-2862428608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2862428608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 3
    }
  }), chapterData && __jsx("audio", {
    ref: audioRef,
    src: chapterData.url,
    controls: true,
    type: chapterData.type,
    className: "jsx-2862428608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 21
    }
  }), __jsx("article", {
    onClick: handleTextClick,
    className: "jsx-2862428608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 3
    }
  }, chapterData && chapterData.text.split(' ').map(function (word, index) {
    return __jsx("span", {
      id: index,
      className: "jsx-2862428608" + " " + "words",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 77
      }
    }, word, " ");
  })), __jsx("br", {
    className: "jsx-2862428608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2862428608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2862428608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2862428608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 3
    }
  }));
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
//# sourceMappingURL=[chapterId].js.b127fecf599b8da19994.hot-update.js.map