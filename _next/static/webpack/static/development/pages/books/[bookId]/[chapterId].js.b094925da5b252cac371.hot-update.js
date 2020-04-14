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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      currentWordIndex = _useState2[0],
      setCurrentWordIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      bookTitle = _useState3[0],
      setBookTitle = _useState3[1];

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
    var index = parseInt(e.target.id);
    setCurrentWordIndex(index); //    console.log()

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
  }, ".words.jsx-942533120{cursor:pointer;margin-bottom:17px;font-size:17px;line-height:27px;word-wrap:break-word;}.words.jsx-942533120:hover.jsx-942533120:before{content:\"\u25B6\";color:#008cba;position:absolute;margin-top:-12px;}.past-words.jsx-942533120{color:black;}.future-words.jsx-942533120{color:grey;}audio.jsx-942533120{position:fixed;bottom:0;left:0px;width:100%;}.duration.jsx-942533120{font-size:medium;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q2MsQUFJc0IsQUFRSCxBQVFqQixBQUlBLEFBR2tCLEFBUUUsV0FYbkIsQ0FYa0IsQUFPbEIsR0FmdUIsQUF1QlosRUFRYixPQVBhLEVBZFcsT0FlVCxDQXhCTSxVQVVFLEFBZXZCLEtBeEJ1QixZQVVyQixLQVR5QixxQkFDekIiLCJmaWxlIjoiL1VzZXJzL3Bhc3NhcmVsbGlwL0NPREUvUEVSU09OQUwvaW50ZXJhY3RpdmUtYXVkaW8tZWJvb2stbmV4dGpzL3BhZ2VzL2Jvb2tzL1tib29rSWRdL1tjaGFwdGVySWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2FsY3VsYXRlV29yZER1cmF0aW9uIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGN1bGF0ZS13b3JkLWR1cmF0aW9uJztcbmNvbnN0IGdldERhdGEgPSBhc3luYyAoaWQpPT57XG4gICAgcmV0dXJuIGltcG9ydCggYC4uLy4uLy4uL3ByZXAtdXRpbHMvanNvbi8ke2lkfS5qc29uYCkudGhlbigoe2RlZmF1bHQ6IG15RGF0YX0pID0+IG15RGF0YSk7XG4gICB9XG5cbmNvbnN0IENoYXB0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgY2hhcHRlcklkLCBib29rSWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBbY2hhcHRlckRhdGEsIHNldENoYXB0ZXJEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjdXJyZW50V29yZEluZGV4LCBzZXRDdXJyZW50V29yZEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYm9va1RpdGxlLCBzZXRCb29rVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKCk7XG4gIGdldERhdGEoYm9va0lkKS50aGVuKChyZXMpPT57XG4gICAgY29uc29sZS5sb2coJ2RhdGEgNTknLCByZXMpO1xuICAgIC8vIHNldEJvb2tEYXRhKHJlcyk7XG4gICAgY29uc29sZS5sb2coJ2NoYXB0ZXJJZCcsY2hhcHRlcklkKVxuICAgIHNldEJvb2tUaXRsZShyZXMudGl0bGUpO1xuICAgIC8vIGFkanVzdGluZyBjaGFwdGVyIGlkIHdpdGggYXJyYXkgaW5kZXhcbiAgICBjb25zdCBjdXJyZW50Q2hhcHRlciA9IHJlcy5jaGFwdGVyc1twYXJzZUludChjaGFwdGVySWQpLTFdO1xuICAgIHNldENoYXB0ZXJEYXRhKGN1cnJlbnRDaGFwdGVyKVxuICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgY29uc29sZS5lcnJvcihcImNvdWxkbiAndCBmaW5kIGJvb2sgaWRcIiwgYm9va0lkKVxuICAgfSlcblxuICAgY29uc3QgaGFuZGxlVGV4dENsaWNrID0gKGUpPT57XG4gICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5pZCk7XG4gICAgICAgc2V0Q3VycmVudFdvcmRJbmRleChpbmRleCk7XG4gICAgLy8gICAgY29uc29sZS5sb2coKVxuICAgICAgIGNvbnN0IHdvcmRMaXN0ID0gY2hhcHRlckRhdGEudGV4dC5zcGxpdCgnICcpO1xuICAgICAgIGNvbnN0IHJlbW92ZUNvdW50ID0gd29yZExpc3QubGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgd29yZExpc3Quc3BsaWNlKCBpbmRleCwgcmVtb3ZlQ291bnQgKVxuICAgICAgIGNvbnN0IGVzdGltYXRlZFRpbWVPZmZzZXQgPSB3b3JkTGlzdC5yZWR1Y2UoKHRvdGFsLCB3b3JkKT0+e1xuICAgICAgICAgICAgY29uc3Qgd29yZER1cmF0aW9uID0gY2FsY3VsYXRlV29yZER1cmF0aW9uKHdvcmQpO1xuICAgICAgICAgICAgdG90YWwgKz0gcGFyc2VGbG9hdCh3b3JkRHVyYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgIH0sIDApXG5cbiAgICAgICBjb25zb2xlLmxvZygnZXN0aW1hdGVkVGltZU9mZnNldCcsZXN0aW1hdGVkVGltZU9mZnNldClcbiAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lICA9IGVzdGltYXRlZFRpbWVPZmZzZXQ7XG4gICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KClcbiAgIH1cblxuXG5yZXR1cm4gKDw+XG4gIDxzdHlsZSBqc3g+e2BcbiAgXG4gIC53b3JkcyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgXG4gIC53b3Jkczpob3ZlcjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLilrZcIjtcbiAgICAgIGNvbG9yOiAjMDA4Y2JhO1xuICAgIC8vICAgb3BhY2l0eTogMC42O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gIH1cbiAgLnBhc3Qtd29yZHN7XG4gICAgY29sb3I6IGJsYWNrXG4gIH1cblxuICAuZnV0dXJlLXdvcmRze1xuICAgIGNvbG9yOiBncmV5XG4gIH1cblxuICBhdWRpb3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4gIC5kdXJhdGlvbntcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cbiAgYH08L3N0eWxlPlxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuIFxuICBcbiAgYH08L3N0eWxlPlxuICAgIDxoMj57Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEudGl0bGV9IC0ge2Jvb2tUaXRsZSYmYm9va1RpdGxlfSA8c3BhbiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPntjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS5kdXJhdGlvbn0gPC9zcGFuPjwvaDI+XG4gIFxuICA8YnIvPlxuICA8YnIvPlxuICB7Y2hhcHRlckRhdGEgJiYgKCA8YXVkaW8gIHJlZj17YXVkaW9SZWZ9IHNyYz17Y2hhcHRlckRhdGEudXJsfSBjb250cm9scyB0eXBlPXtjaGFwdGVyRGF0YS50eXBlfSAvPiApfVxuICA8YXJ0aWNsZSBvbkNsaWNrPXtoYW5kbGVUZXh0Q2xpY2t9PlxuICAgIHtjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS50ZXh0LnNwbGl0KCcgJykubWFwKCh3b3JkLCBpbmRleCk9PnsgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17W1wid29yZHNcIiwgaW5kZXggPD0gY3VycmVudFdvcmRJbmRleD8gIFwicGFzdC13b3Jkc1wiOlwiZnV0dXJlLXdvcmRzXCJdLmpvaW4oJyAnKX0gaWQ9e2luZGV4fT57d29yZH0gPC9zcGFuPn0pfVxuICA8L2FydGljbGU+XG4gIDxici8+XG4gIDxici8+XG4gIDxici8+XG4gIDxici8+XG5cbiAgXG4gIDwvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcHRlclxuXG5DaGFwdGVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzJylcbiAgICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7IH1cbn0iXX0= */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2639107941",
    __self: _this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRnFCIiwiZmlsZSI6Ii9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNhbGN1bGF0ZVdvcmREdXJhdGlvbiBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhdGUtd29yZC1kdXJhdGlvbic7XG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGlkKT0+e1xuICAgIHJldHVybiBpbXBvcnQoIGAuLi8uLi8uLi9wcmVwLXV0aWxzL2pzb24vJHtpZH0uanNvbmApLnRoZW4oKHtkZWZhdWx0OiBteURhdGF9KSA9PiBteURhdGEpO1xuICAgfVxuXG5jb25zdCBDaGFwdGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGNoYXB0ZXJJZCwgYm9va0lkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgW2NoYXB0ZXJEYXRhLCBzZXRDaGFwdGVyRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY3VycmVudFdvcmRJbmRleCwgc2V0Q3VycmVudFdvcmRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2Jvb2tUaXRsZSwgc2V0Qm9va1RpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZigpO1xuICBnZXREYXRhKGJvb2tJZCkudGhlbigocmVzKT0+e1xuICAgIGNvbnNvbGUubG9nKCdkYXRhIDU5JywgcmVzKTtcbiAgICAvLyBzZXRCb29rRGF0YShyZXMpO1xuICAgIGNvbnNvbGUubG9nKCdjaGFwdGVySWQnLGNoYXB0ZXJJZClcbiAgICBzZXRCb29rVGl0bGUocmVzLnRpdGxlKTtcbiAgICAvLyBhZGp1c3RpbmcgY2hhcHRlciBpZCB3aXRoIGFycmF5IGluZGV4XG4gICAgY29uc3QgY3VycmVudENoYXB0ZXIgPSByZXMuY2hhcHRlcnNbcGFyc2VJbnQoY2hhcHRlcklkKS0xXTtcbiAgICBzZXRDaGFwdGVyRGF0YShjdXJyZW50Q2hhcHRlcilcbiAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgIGNvbnNvbGUuZXJyb3IoXCJjb3VsZG4gJ3QgZmluZCBib29rIGlkXCIsIGJvb2tJZClcbiAgIH0pXG5cbiAgIGNvbnN0IGhhbmRsZVRleHRDbGljayA9IChlKT0+e1xuICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuaWQpO1xuICAgICAgIHNldEN1cnJlbnRXb3JkSW5kZXgoaW5kZXgpO1xuICAgIC8vICAgIGNvbnNvbGUubG9nKClcbiAgICAgICBjb25zdCB3b3JkTGlzdCA9IGNoYXB0ZXJEYXRhLnRleHQuc3BsaXQoJyAnKTtcbiAgICAgICBjb25zdCByZW1vdmVDb3VudCA9IHdvcmRMaXN0Lmxlbmd0aCAtIGluZGV4O1xuICAgICAgIHdvcmRMaXN0LnNwbGljZSggaW5kZXgsIHJlbW92ZUNvdW50IClcbiAgICAgICBjb25zdCBlc3RpbWF0ZWRUaW1lT2Zmc2V0ID0gd29yZExpc3QucmVkdWNlKCh0b3RhbCwgd29yZCk9PntcbiAgICAgICAgICAgIGNvbnN0IHdvcmREdXJhdGlvbiA9IGNhbGN1bGF0ZVdvcmREdXJhdGlvbih3b3JkKTtcbiAgICAgICAgICAgIHRvdGFsICs9IHBhcnNlRmxvYXQod29yZER1cmF0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICB9LCAwKVxuXG4gICAgICAgY29uc29sZS5sb2coJ2VzdGltYXRlZFRpbWVPZmZzZXQnLGVzdGltYXRlZFRpbWVPZmZzZXQpXG4gICAgICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSAgPSBlc3RpbWF0ZWRUaW1lT2Zmc2V0O1xuICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpXG4gICB9XG5cblxucmV0dXJuICg8PlxuICA8c3R5bGUganN4PntgXG4gIFxuICAud29yZHMge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG4gIFxuICAud29yZHM6aG92ZXI6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwi4pa2XCI7XG4gICAgICBjb2xvcjogIzAwOGNiYTtcbiAgICAvLyAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICB9XG4gIC5wYXN0LXdvcmRze1xuICAgIGNvbG9yOiBibGFja1xuICB9XG5cbiAgLmZ1dHVyZS13b3Jkc3tcbiAgICBjb2xvcjogZ3JleVxuICB9XG5cbiAgYXVkaW97XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuICAuZHVyYXRpb257XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59XG4gIGB9PC9zdHlsZT5cbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiBcbiAgXG4gIGB9PC9zdHlsZT5cbiAgICA8aDI+e2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLnRpdGxlfSAtIHtib29rVGl0bGUmJmJvb2tUaXRsZX0gPHNwYW4gY2xhc3NOYW1lPVwiZHVyYXRpb25cIj57Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEuZHVyYXRpb259IDwvc3Bhbj48L2gyPlxuICBcbiAgPGJyLz5cbiAgPGJyLz5cbiAge2NoYXB0ZXJEYXRhICYmICggPGF1ZGlvICByZWY9e2F1ZGlvUmVmfSBzcmM9e2NoYXB0ZXJEYXRhLnVybH0gY29udHJvbHMgdHlwZT17Y2hhcHRlckRhdGEudHlwZX0gLz4gKX1cbiAgPGFydGljbGUgb25DbGljaz17aGFuZGxlVGV4dENsaWNrfT5cbiAgICB7Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEudGV4dC5zcGxpdCgnICcpLm1hcCgod29yZCwgaW5kZXgpPT57IHJldHVybiA8c3BhbiBjbGFzc05hbWU9e1tcIndvcmRzXCIsIGluZGV4IDw9IGN1cnJlbnRXb3JkSW5kZXg/ICBcInBhc3Qtd29yZHNcIjpcImZ1dHVyZS13b3Jkc1wiXS5qb2luKCcgJyl9IGlkPXtpbmRleH0+e3dvcmR9IDwvc3Bhbj59KX1cbiAgPC9hcnRpY2xlPlxuICA8YnIvPlxuICA8YnIvPlxuICA8YnIvPlxuICA8YnIvPlxuXG4gIFxuICA8Lz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXB0ZXJcblxuQ2hhcHRlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3plaXQvbmV4dC5qcycpXG4gICAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4geyB9XG59Il19 */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx("h2", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, chapterData && chapterData.title, " - ", bookTitle && bookTitle, " ", __jsx("span", {
    className: "jsx-942533120" + " " + "duration",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 69
    }
  }, chapterData && chapterData.duration, " ")), __jsx("br", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 21
    }
  }), __jsx("article", {
    onClick: handleTextClick,
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 3
    }
  }, chapterData && chapterData.text.split(' ').map(function (word, index) {
    return __jsx("span", {
      id: index,
      className: "jsx-942533120" + " " + (["words", index <= currentWordIndex ? "past-words" : "future-words"].join(' ') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 77
      }
    }, word, " ");
  })), __jsx("br", {
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
  }), __jsx("br", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-942533120",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
//# sourceMappingURL=[chapterId].js.b094925da5b252cac371.hot-update.js.map