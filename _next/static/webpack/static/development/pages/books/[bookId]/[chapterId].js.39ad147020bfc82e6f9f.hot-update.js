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
    id: "559468140",
    __self: _this
  }, ".words.jsx-942533120{cursor:pointer;margin-bottom:17px;font-size:17px;line-height:27px;word-wrap:break-word;}.words.jsx-942533120:hover.jsx-942533120:before{content:\"\u25B6\";color:#008cba;position:absolute;margin-top:-12px;}.past-words.jsx-942533120{color:black;}.future-words.jsx-942533120{color:grey;}audio.jsx-942533120{position:fixed;bottom:0;left:0px;width:100%;}.duration.jsx-942533120{font-size:medium;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2MsQUFJc0IsQUFRSCxBQVFqQixBQUlBLEFBR2tCLEFBUUUsV0FYbkIsQ0FYa0IsQUFPbEIsR0FmdUIsQUF1QlosRUFRYixPQVBhLEVBZFcsT0FlVCxDQXhCTSxVQVVFLEFBZXZCLEtBeEJ1QixZQVVyQixLQVR5QixxQkFDekIiLCJmaWxlIjoiL1VzZXJzL3Bhc3NhcmVsbGlwL0NPREUvUEVSU09OQUwvaW50ZXJhY3RpdmUtYXVkaW8tZWJvb2stbmV4dGpzL3BhZ2VzL2Jvb2tzL1tib29rSWRdL1tjaGFwdGVySWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2FsY3VsYXRlV29yZER1cmF0aW9uIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGN1bGF0ZS13b3JkLWR1cmF0aW9uJztcbmNvbnN0IGdldERhdGEgPSBhc3luYyAoaWQpPT57XG4gICAgcmV0dXJuIGltcG9ydCggYC4uLy4uLy4uL3ByZXAtdXRpbHMvanNvbi8ke2lkfS5qc29uYCkudGhlbigoe2RlZmF1bHQ6IG15RGF0YX0pID0+IG15RGF0YSk7XG4gICB9XG5cbmNvbnN0IENoYXB0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgY2hhcHRlcklkLCBib29rSWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBbY2hhcHRlckRhdGEsIHNldENoYXB0ZXJEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtib29rVGl0bGUsIHNldEJvb2tUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYoKTtcbiAgZ2V0RGF0YShib29rSWQpLnRoZW4oKHJlcyk9PntcbiAgICBjb25zb2xlLmxvZygnZGF0YSA1OScsIHJlcyk7XG4gICAgLy8gc2V0Qm9va0RhdGEocmVzKTtcbiAgICBjb25zb2xlLmxvZygnY2hhcHRlcklkJyxjaGFwdGVySWQpXG4gICAgc2V0Qm9va1RpdGxlKHJlcy50aXRsZSk7XG4gICAgLy8gYWRqdXN0aW5nIGNoYXB0ZXIgaWQgd2l0aCBhcnJheSBpbmRleFxuICAgIGNvbnN0IGN1cnJlbnRDaGFwdGVyID0gcmVzLmNoYXB0ZXJzW3BhcnNlSW50KGNoYXB0ZXJJZCktMV07XG4gICAgc2V0Q2hhcHRlckRhdGEoY3VycmVudENoYXB0ZXIpXG4gICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICBjb25zb2xlLmVycm9yKFwiY291bGRuICd0IGZpbmQgYm9vayBpZFwiLCBib29rSWQpXG4gICB9KVxuXG4gICBjb25zdCBoYW5kbGVUZXh0Q2xpY2sgPSAoZSk9PntcbiAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkKTtcbiAgICAvLyAgICBjb25zb2xlLmxvZygpXG4gICAgICAgY29uc3Qgd29yZExpc3QgPSBjaGFwdGVyRGF0YS50ZXh0LnNwbGl0KCcgJyk7XG4gICAgICAgY29uc3QgcmVtb3ZlQ291bnQgPSB3b3JkTGlzdC5sZW5ndGggLSBpbmRleDtcbiAgICAgICB3b3JkTGlzdC5zcGxpY2UoIGluZGV4LCByZW1vdmVDb3VudCApXG4gICAgICAgY29uc3QgZXN0aW1hdGVkVGltZU9mZnNldCA9IHdvcmRMaXN0LnJlZHVjZSgodG90YWwsIHdvcmQpPT57XG4gICAgICAgICAgICBjb25zdCB3b3JkRHVyYXRpb24gPSBjYWxjdWxhdGVXb3JkRHVyYXRpb24od29yZCk7XG4gICAgICAgICAgICB0b3RhbCArPSBwYXJzZUZsb2F0KHdvcmREdXJhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgfSwgMClcblxuICAgICAgIGNvbnNvbGUubG9nKCdlc3RpbWF0ZWRUaW1lT2Zmc2V0Jyxlc3RpbWF0ZWRUaW1lT2Zmc2V0KVxuICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgID0gZXN0aW1hdGVkVGltZU9mZnNldDtcbiAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKVxuICAgfVxuXG5cbnJldHVybiAoPD5cbiAgPHN0eWxlIGpzeD57YFxuICBcbiAgLndvcmRzIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxuICBcbiAgLndvcmRzOmhvdmVyOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIuKWtlwiO1xuICAgICAgY29sb3I6ICMwMDhjYmE7XG4gICAgLy8gICBvcGFjaXR5OiAwLjY7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgfVxuICAucGFzdC13b3Jkc3tcbiAgICBjb2xvcjogYmxhY2tcbiAgfVxuXG4gIC5mdXR1cmUtd29yZHN7XG4gICAgY29sb3I6IGdyZXlcbiAgfVxuXG4gIGF1ZGlve1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbiAgLmR1cmF0aW9ue1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuICBgfTwvc3R5bGU+XG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gXG4gIFxuICBgfTwvc3R5bGU+XG4gICAgPGgyPntjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS50aXRsZX0gLSB7Ym9va1RpdGxlJiZib29rVGl0bGV9IDxzcGFuIGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+e2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLmR1cmF0aW9ufSA8L3NwYW4+PC9oMj5cbiAgXG4gIDxici8+XG4gIDxici8+XG4gIHtjaGFwdGVyRGF0YSAmJiAoIDxhdWRpbyAgcmVmPXthdWRpb1JlZn0gc3JjPXtjaGFwdGVyRGF0YS51cmx9IGNvbnRyb2xzIHR5cGU9e2NoYXB0ZXJEYXRhLnR5cGV9IC8+ICl9XG4gIDxhcnRpY2xlIG9uQ2xpY2s9e2hhbmRsZVRleHRDbGlja30+XG4gICAge2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLnRleHQuc3BsaXQoJyAnKS5tYXAoKHdvcmQsIGluZGV4KT0+eyByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtbXCJ3b3Jkc1wiLCBpbmRleCA8PSBjdXJyZW50SW5kZXg/ICBcInBhc3Qtd29yZHNcIjpcImZ1dHVyZS13b3Jkc1wiXS5qb2luKCcgJyl9IGlkPXtpbmRleH0+e3dvcmR9IDwvc3Bhbj59KX1cbiAgPC9hcnRpY2xlPlxuICA8YnIvPlxuICA8YnIvPlxuICA8YnIvPlxuICA8YnIvPlxuXG4gIFxuICA8Lz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXB0ZXJcblxuQ2hhcHRlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3plaXQvbmV4dC5qcycpXG4gICAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4geyB9XG59Il19 */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2639107941",
    __self: _this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRnFCIiwiZmlsZSI6Ii9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNhbGN1bGF0ZVdvcmREdXJhdGlvbiBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhdGUtd29yZC1kdXJhdGlvbic7XG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGlkKT0+e1xuICAgIHJldHVybiBpbXBvcnQoIGAuLi8uLi8uLi9wcmVwLXV0aWxzL2pzb24vJHtpZH0uanNvbmApLnRoZW4oKHtkZWZhdWx0OiBteURhdGF9KSA9PiBteURhdGEpO1xuICAgfVxuXG5jb25zdCBDaGFwdGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGNoYXB0ZXJJZCwgYm9va0lkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgW2NoYXB0ZXJEYXRhLCBzZXRDaGFwdGVyRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYm9va1RpdGxlLCBzZXRCb29rVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKCk7XG4gIGdldERhdGEoYm9va0lkKS50aGVuKChyZXMpPT57XG4gICAgY29uc29sZS5sb2coJ2RhdGEgNTknLCByZXMpO1xuICAgIC8vIHNldEJvb2tEYXRhKHJlcyk7XG4gICAgY29uc29sZS5sb2coJ2NoYXB0ZXJJZCcsY2hhcHRlcklkKVxuICAgIHNldEJvb2tUaXRsZShyZXMudGl0bGUpO1xuICAgIC8vIGFkanVzdGluZyBjaGFwdGVyIGlkIHdpdGggYXJyYXkgaW5kZXhcbiAgICBjb25zdCBjdXJyZW50Q2hhcHRlciA9IHJlcy5jaGFwdGVyc1twYXJzZUludChjaGFwdGVySWQpLTFdO1xuICAgIHNldENoYXB0ZXJEYXRhKGN1cnJlbnRDaGFwdGVyKVxuICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgY29uc29sZS5lcnJvcihcImNvdWxkbiAndCBmaW5kIGJvb2sgaWRcIiwgYm9va0lkKVxuICAgfSlcblxuICAgY29uc3QgaGFuZGxlVGV4dENsaWNrID0gKGUpPT57XG4gICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5pZCk7XG4gICAgLy8gICAgY29uc29sZS5sb2coKVxuICAgICAgIGNvbnN0IHdvcmRMaXN0ID0gY2hhcHRlckRhdGEudGV4dC5zcGxpdCgnICcpO1xuICAgICAgIGNvbnN0IHJlbW92ZUNvdW50ID0gd29yZExpc3QubGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgd29yZExpc3Quc3BsaWNlKCBpbmRleCwgcmVtb3ZlQ291bnQgKVxuICAgICAgIGNvbnN0IGVzdGltYXRlZFRpbWVPZmZzZXQgPSB3b3JkTGlzdC5yZWR1Y2UoKHRvdGFsLCB3b3JkKT0+e1xuICAgICAgICAgICAgY29uc3Qgd29yZER1cmF0aW9uID0gY2FsY3VsYXRlV29yZER1cmF0aW9uKHdvcmQpO1xuICAgICAgICAgICAgdG90YWwgKz0gcGFyc2VGbG9hdCh3b3JkRHVyYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgIH0sIDApXG5cbiAgICAgICBjb25zb2xlLmxvZygnZXN0aW1hdGVkVGltZU9mZnNldCcsZXN0aW1hdGVkVGltZU9mZnNldClcbiAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lICA9IGVzdGltYXRlZFRpbWVPZmZzZXQ7XG4gICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KClcbiAgIH1cblxuXG5yZXR1cm4gKDw+XG4gIDxzdHlsZSBqc3g+e2BcbiAgXG4gIC53b3JkcyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgXG4gIC53b3Jkczpob3ZlcjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLilrZcIjtcbiAgICAgIGNvbG9yOiAjMDA4Y2JhO1xuICAgIC8vICAgb3BhY2l0eTogMC42O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gIH1cbiAgLnBhc3Qtd29yZHN7XG4gICAgY29sb3I6IGJsYWNrXG4gIH1cblxuICAuZnV0dXJlLXdvcmRze1xuICAgIGNvbG9yOiBncmV5XG4gIH1cblxuICBhdWRpb3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4gIC5kdXJhdGlvbntcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cbiAgYH08L3N0eWxlPlxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuIFxuICBcbiAgYH08L3N0eWxlPlxuICAgIDxoMj57Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEudGl0bGV9IC0ge2Jvb2tUaXRsZSYmYm9va1RpdGxlfSA8c3BhbiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPntjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS5kdXJhdGlvbn0gPC9zcGFuPjwvaDI+XG4gIFxuICA8YnIvPlxuICA8YnIvPlxuICB7Y2hhcHRlckRhdGEgJiYgKCA8YXVkaW8gIHJlZj17YXVkaW9SZWZ9IHNyYz17Y2hhcHRlckRhdGEudXJsfSBjb250cm9scyB0eXBlPXtjaGFwdGVyRGF0YS50eXBlfSAvPiApfVxuICA8YXJ0aWNsZSBvbkNsaWNrPXtoYW5kbGVUZXh0Q2xpY2t9PlxuICAgIHtjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS50ZXh0LnNwbGl0KCcgJykubWFwKCh3b3JkLCBpbmRleCk9PnsgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17W1wid29yZHNcIiwgaW5kZXggPD0gY3VycmVudEluZGV4PyAgXCJwYXN0LXdvcmRzXCI6XCJmdXR1cmUtd29yZHNcIl0uam9pbignICcpfSBpZD17aW5kZXh9Pnt3b3JkfSA8L3NwYW4+fSl9XG4gIDwvYXJ0aWNsZT5cbiAgPGJyLz5cbiAgPGJyLz5cbiAgPGJyLz5cbiAgPGJyLz5cblxuICBcbiAgPC8+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFwdGVyXG5cbkNoYXB0ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy96ZWl0L25leHQuanMnKVxuICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHsgfVxufSJdfQ== */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx("h2", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, chapterData && chapterData.title, " - ", bookTitle && bookTitle, " ", __jsx("span", {
    className: "jsx-942533120" + " " + "duration",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 69
    }
  }, chapterData && chapterData.duration, " ")), __jsx("br", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 3
    }
  }), chapterData && __jsx("audio", {
    ref: audioRef,
    src: chapterData.url,
    controls: true,
    type: chapterData.type,
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }), __jsx("article", {
    onClick: handleTextClick,
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 3
    }
  }, chapterData && chapterData.text.split(' ').map(function (word, index) {
    return __jsx("span", {
      id: index,
      className: "jsx-942533120" + " " + (["words", index <= currentIndex ? "past-words" : "future-words"].join(' ') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 77
      }
    }, word, " ");
  })), __jsx("br", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
//# sourceMappingURL=[chapterId].js.39ad147020bfc82e6f9f.hot-update.js.map