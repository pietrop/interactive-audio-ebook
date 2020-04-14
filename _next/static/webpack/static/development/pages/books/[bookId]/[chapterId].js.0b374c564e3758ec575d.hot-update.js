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
    id: "2936604679",
    __self: _this
  }, ".words.jsx-2063531819{cursor:pointer;margin-bottom:17px;font-size:17px;line-height:27px;word-wrap:break-word;}.words.jsx-2063531819:hover.jsx-2063531819:before{content:\"\u25B6\";color:#008cba;position:absolute;margin-top:-12px;}audio.jsx-2063531819{position:fixed;bottom:0;left:0px;width:100%;}.duration.jsx-2063531819{font-size:medium;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2MsQUFJc0IsQUFRSCxBQVFDLEFBUUUsWUFmRCxHQVJLLEFBZ0JaLEVBUWIsT0FQYSxFQVBXLE9BUVQsQ0FqQk0sVUFVRSxBQVF2QixLQWpCdUIsWUFVckIsS0FUeUIscUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNhbGN1bGF0ZVdvcmREdXJhdGlvbiBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhdGUtd29yZC1kdXJhdGlvbic7XG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGlkKT0+e1xuICAgIHJldHVybiBpbXBvcnQoIGAuLi8uLi8uLi9wcmVwLXV0aWxzL2pzb24vJHtpZH0uanNvbmApLnRoZW4oKHtkZWZhdWx0OiBteURhdGF9KSA9PiBteURhdGEpO1xuICAgfVxuXG5jb25zdCBDaGFwdGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGNoYXB0ZXJJZCwgYm9va0lkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgW2NoYXB0ZXJEYXRhLCBzZXRDaGFwdGVyRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYm9va1RpdGxlLCBzZXRCb29rVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKCk7XG4gIGdldERhdGEoYm9va0lkKS50aGVuKChyZXMpPT57XG4gICAgY29uc29sZS5sb2coJ2RhdGEgNTknLCByZXMpO1xuICAgIC8vIHNldEJvb2tEYXRhKHJlcyk7XG4gICAgY29uc29sZS5sb2coJ2NoYXB0ZXJJZCcsY2hhcHRlcklkKVxuICAgIHNldEJvb2tUaXRsZShyZXMudGl0bGUpO1xuICAgIC8vIGFkanVzdGluZyBjaGFwdGVyIGlkIHdpdGggYXJyYXkgaW5kZXhcbiAgICBjb25zdCBjdXJyZW50Q2hhcHRlciA9IHJlcy5jaGFwdGVyc1twYXJzZUludChjaGFwdGVySWQpLTFdO1xuICAgIHNldENoYXB0ZXJEYXRhKGN1cnJlbnRDaGFwdGVyKVxuICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgY29uc29sZS5lcnJvcihcImNvdWxkbiAndCBmaW5kIGJvb2sgaWRcIiwgYm9va0lkKVxuICAgfSlcblxuICAgY29uc3QgaGFuZGxlVGV4dENsaWNrID0gKGUpPT57XG4gICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5pZCk7XG4gICAgLy8gICAgY29uc29sZS5sb2coKVxuICAgICAgIGNvbnN0IHdvcmRMaXN0ID0gY2hhcHRlckRhdGEudGV4dC5zcGxpdCgnICcpO1xuICAgICAgIGNvbnN0IHJlbW92ZUNvdW50ID0gd29yZExpc3QubGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgd29yZExpc3Quc3BsaWNlKCBpbmRleCwgcmVtb3ZlQ291bnQgKVxuICAgICAgIGNvbnN0IGVzdGltYXRlZFRpbWVPZmZzZXQgPSB3b3JkTGlzdC5yZWR1Y2UoKHRvdGFsLCB3b3JkKT0+e1xuICAgICAgICAgICAgY29uc3Qgd29yZER1cmF0aW9uID0gY2FsY3VsYXRlV29yZER1cmF0aW9uKHdvcmQpO1xuICAgICAgICAgICAgdG90YWwgKz0gcGFyc2VGbG9hdCh3b3JkRHVyYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgIH0sIDApXG5cbiAgICAgICBjb25zb2xlLmxvZygnZXN0aW1hdGVkVGltZU9mZnNldCcsZXN0aW1hdGVkVGltZU9mZnNldClcbiAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lICA9IGVzdGltYXRlZFRpbWVPZmZzZXQ7XG4gICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KClcbiAgIH1cblxuXG5yZXR1cm4gKDw+XG4gIDxzdHlsZSBqc3g+e2BcbiAgXG4gIC53b3JkcyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgXG4gIC53b3Jkczpob3ZlcjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLilrZcIjtcbiAgICAgIGNvbG9yOiAjMDA4Y2JhO1xuICAgIC8vICAgb3BhY2l0eTogMC42O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gIH1cblxuICBhdWRpb3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4gIC5kdXJhdGlvbntcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cbiAgYH08L3N0eWxlPlxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuIFxuICBcbiAgYH08L3N0eWxlPlxuICAgIDxoMj57Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEudGl0bGV9IC0ge2Jvb2tUaXRsZSYmYm9va1RpdGxlfSA8c3BhbiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPntjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS5kdXJhdGlvbn0gPC9zcGFuPjwvaDI+XG4gIFxuICA8YnIvPlxuICA8YnIvPlxuICB7Y2hhcHRlckRhdGEgJiYgKCA8YXVkaW8gIHJlZj17YXVkaW9SZWZ9IHNyYz17Y2hhcHRlckRhdGEudXJsfSBjb250cm9scyB0eXBlPXtjaGFwdGVyRGF0YS50eXBlfSAvPiApfVxuICA8YXJ0aWNsZSBvbkNsaWNrPXtoYW5kbGVUZXh0Q2xpY2t9PlxuICAgIHtjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS50ZXh0LnNwbGl0KCcgJykubWFwKCh3b3JkLCBpbmRleCk9PnsgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIndvcmRzXCIgaWQ9e2luZGV4fT57d29yZH0gPC9zcGFuPn0pfVxuICA8L2FydGljbGU+XG4gIDxici8+XG4gIDxici8+XG4gIDxici8+XG4gIDxici8+XG5cbiAgXG4gIDwvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcHRlclxuXG5DaGFwdGVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzJylcbiAgICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7IH1cbn0iXX0= */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2639107941",
    __self: _this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRXFCIiwiZmlsZSI6Ii9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNhbGN1bGF0ZVdvcmREdXJhdGlvbiBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhdGUtd29yZC1kdXJhdGlvbic7XG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGlkKT0+e1xuICAgIHJldHVybiBpbXBvcnQoIGAuLi8uLi8uLi9wcmVwLXV0aWxzL2pzb24vJHtpZH0uanNvbmApLnRoZW4oKHtkZWZhdWx0OiBteURhdGF9KSA9PiBteURhdGEpO1xuICAgfVxuXG5jb25zdCBDaGFwdGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGNoYXB0ZXJJZCwgYm9va0lkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgW2NoYXB0ZXJEYXRhLCBzZXRDaGFwdGVyRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYm9va1RpdGxlLCBzZXRCb29rVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKCk7XG4gIGdldERhdGEoYm9va0lkKS50aGVuKChyZXMpPT57XG4gICAgY29uc29sZS5sb2coJ2RhdGEgNTknLCByZXMpO1xuICAgIC8vIHNldEJvb2tEYXRhKHJlcyk7XG4gICAgY29uc29sZS5sb2coJ2NoYXB0ZXJJZCcsY2hhcHRlcklkKVxuICAgIHNldEJvb2tUaXRsZShyZXMudGl0bGUpO1xuICAgIC8vIGFkanVzdGluZyBjaGFwdGVyIGlkIHdpdGggYXJyYXkgaW5kZXhcbiAgICBjb25zdCBjdXJyZW50Q2hhcHRlciA9IHJlcy5jaGFwdGVyc1twYXJzZUludChjaGFwdGVySWQpLTFdO1xuICAgIHNldENoYXB0ZXJEYXRhKGN1cnJlbnRDaGFwdGVyKVxuICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgY29uc29sZS5lcnJvcihcImNvdWxkbiAndCBmaW5kIGJvb2sgaWRcIiwgYm9va0lkKVxuICAgfSlcblxuICAgY29uc3QgaGFuZGxlVGV4dENsaWNrID0gKGUpPT57XG4gICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5pZCk7XG4gICAgLy8gICAgY29uc29sZS5sb2coKVxuICAgICAgIGNvbnN0IHdvcmRMaXN0ID0gY2hhcHRlckRhdGEudGV4dC5zcGxpdCgnICcpO1xuICAgICAgIGNvbnN0IHJlbW92ZUNvdW50ID0gd29yZExpc3QubGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgd29yZExpc3Quc3BsaWNlKCBpbmRleCwgcmVtb3ZlQ291bnQgKVxuICAgICAgIGNvbnN0IGVzdGltYXRlZFRpbWVPZmZzZXQgPSB3b3JkTGlzdC5yZWR1Y2UoKHRvdGFsLCB3b3JkKT0+e1xuICAgICAgICAgICAgY29uc3Qgd29yZER1cmF0aW9uID0gY2FsY3VsYXRlV29yZER1cmF0aW9uKHdvcmQpO1xuICAgICAgICAgICAgdG90YWwgKz0gcGFyc2VGbG9hdCh3b3JkRHVyYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgIH0sIDApXG5cbiAgICAgICBjb25zb2xlLmxvZygnZXN0aW1hdGVkVGltZU9mZnNldCcsZXN0aW1hdGVkVGltZU9mZnNldClcbiAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lICA9IGVzdGltYXRlZFRpbWVPZmZzZXQ7XG4gICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KClcbiAgIH1cblxuXG5yZXR1cm4gKDw+XG4gIDxzdHlsZSBqc3g+e2BcbiAgXG4gIC53b3JkcyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgXG4gIC53b3Jkczpob3ZlcjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLilrZcIjtcbiAgICAgIGNvbG9yOiAjMDA4Y2JhO1xuICAgIC8vICAgb3BhY2l0eTogMC42O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gIH1cblxuICBhdWRpb3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4gIC5kdXJhdGlvbntcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cbiAgYH08L3N0eWxlPlxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuIFxuICBcbiAgYH08L3N0eWxlPlxuICAgIDxoMj57Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEudGl0bGV9IC0ge2Jvb2tUaXRsZSYmYm9va1RpdGxlfSA8c3BhbiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPntjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS5kdXJhdGlvbn0gPC9zcGFuPjwvaDI+XG4gIFxuICA8YnIvPlxuICA8YnIvPlxuICB7Y2hhcHRlckRhdGEgJiYgKCA8YXVkaW8gIHJlZj17YXVkaW9SZWZ9IHNyYz17Y2hhcHRlckRhdGEudXJsfSBjb250cm9scyB0eXBlPXtjaGFwdGVyRGF0YS50eXBlfSAvPiApfVxuICA8YXJ0aWNsZSBvbkNsaWNrPXtoYW5kbGVUZXh0Q2xpY2t9PlxuICAgIHtjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS50ZXh0LnNwbGl0KCcgJykubWFwKCh3b3JkLCBpbmRleCk9PnsgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIndvcmRzXCIgaWQ9e2luZGV4fT57d29yZH0gPC9zcGFuPn0pfVxuICA8L2FydGljbGU+XG4gIDxici8+XG4gIDxici8+XG4gIDxici8+XG4gIDxici8+XG5cbiAgXG4gIDwvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcHRlclxuXG5DaGFwdGVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzJylcbiAgICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7IH1cbn0iXX0= */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx("h2", {
    className: "jsx-2063531819",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, chapterData && chapterData.title, " - ", bookTitle && bookTitle, " ", __jsx("span", {
    className: "jsx-2063531819" + " " + "duration",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 69
    }
  }, chapterData && chapterData.duration, " ")), __jsx("br", {
    className: "jsx-2063531819",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2063531819",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 3
    }
  }), chapterData && __jsx("audio", {
    ref: audioRef,
    src: chapterData.url,
    controls: true,
    type: chapterData.type,
    className: "jsx-2063531819",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }), __jsx("article", {
    onClick: handleTextClick,
    className: "jsx-2063531819",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 3
    }
  }, chapterData && chapterData.text.split(' ').map(function (word, index) {
    return __jsx("span", {
      id: index,
      className: "jsx-2063531819" + " " + "words",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 77
      }
    }, word, " ");
  })), __jsx("br", {
    className: "jsx-2063531819",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2063531819",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2063531819",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2063531819",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
//# sourceMappingURL=[chapterId].js.0b374c564e3758ec575d.hot-update.js.map