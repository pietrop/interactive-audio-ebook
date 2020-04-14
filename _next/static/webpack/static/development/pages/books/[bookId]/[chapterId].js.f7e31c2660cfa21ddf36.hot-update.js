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
    id: "2747661057",
    __self: _this
  }, ".before.jsx-2121629388{color:black;}.after.jsx-2121629388{color:grey;}.transcriptBtn.jsx-2121629388{border:0.1rem solid lightgrey;border-radius:0.5em;padding:0.5em;font-family:Retina,Arial,Helvetica,sans-serif;color:#333;font-weight:200;}.transcriptBtn.jsx-2121629388:hover{background-color:lightgray;color:white;}.article_title.jsx-2121629388{font-family:Escrow Condensed,Georgia,serif;font-weight:700;font-size:30px;line-height:34px;color:#333;}h2.article_title.jsx-2121629388{margin-top:0.5em;margin-bottom:0.2em;}.description.jsx-2121629388{font-family:Retina,Arial,Helvetica,sans-serif;font-weight:400;font-size:16px;line-height:22px;color:#666;}ul.jsx-2121629388{list-style-type:none;}li.jsx-2121629388 a.jsx-2121629388{color:black;-webkit-text-decoration:none;text-decoration:none;}li.jsx-2121629388{padding-bottom:0.5em;}hr.jsx-2121629388{border-top:1px solid lightgrey;}.article_header.jsx-2121629388{margin-top:10vh;font-size:40px;line-height:1.2em;font-family:Escrow Condensed,Chronicle Display,serif;font-weight:700;}.words.jsx-2121629388{cursor:pointer;margin-bottom:17px;font-size:17px;line-height:27px;word-wrap:break-word;font-family:Exchange,Chronicle SSm,serif;font-weight:400;}.words.jsx-2121629388:hover.jsx-2121629388:before{content:\"\u25B6\";color:blue;opacity:0.6;position:absolute;margin-top:-12px;}.containerAudio.jsx-2121629388{position:fixed;background-color:white;height:3em;padding-bottom:1em;padding-top:0.5em;top:0px;}audio.jsx-2121629388{width:100%;}@media only screen and (max-width.jsx-2121629388:768px) .container{width:100%;}@media only screen and (max-width.jsx-2121629388:768px) .containerAudio{width:100%;}@media (min-width.jsx-2121629388:769px) and (max-width.jsx-2121629388:1024px) .container{width:70%;padding-left:15%;padding-right:15%;}@media (min-width.jsx-2121629388:769px) and (max-width.jsx-2121629388:1024px) .containerAudio{width:70%;padding-left:15%;padding-right:15%;}@media (min-width.jsx-2121629388:1025px) and (max-width.jsx-2121629388:1280px) .container{width:50%;padding-left:25%;padding-right:25%;}@media (min-width.jsx-2121629388:1025px) and (max-width.jsx-2121629388:1280px) .containerAudio{width:50%;padding-left:25%;padding-right:25%;}@media (min-width.jsx-2121629388:1281px) .container{width:50%;padding-left:25%;padding-right:25%;}@media (min-width.jsx-2121629388:1281px) .containerAudio{width:50%;padding-left:25%;padding-right:25%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2MsQUFHbUIsQUFJRCxBQU9tQixBQVNILEFBS2tCLEFBUTVCLEFBS2dDLEFBUTVCLEFBSVQsQUFLUyxBQUlVLEFBT2YsQUFTRCxBQVVILEFBUUcsQUFVSixBQVFJLEFBR0EsQUFTRCxBQUtBLEFBV0EsQUFLQSxBQVdBLEFBS0EsVUFwQ08sQUFLQSxBQVdBLEFBS0EsQUFXQSxBQUtBLENBNUp6QixBQW1HQSxBQVFJLEFBR0EsQ0FsSEosQUFrRHlCLEFBbUNWLEdBVlEsQUFrQkksQ0ExQlIsQ0FsQ0ssSUFheEIsQUFTQSxFQStCZ0IsSUFsRUEsQUF3R1UsQUFLQSxBQVdBLEFBS0EsQUFXQSxBQUtBLEdBdEpGLENBZ0R4QixBQVNzQixHQVFILENBV0csRUFyRHRCLENBNERlLENBekVmLElBSW9CLEVBb0doQixBQUtBLEFBV0EsQUFLQSxBQVdBLEFBS0EsQ0E1SGdCLEdBK0J1QyxBQVF0QyxBQWtCRSxDQW5GTCxHQTRFRyxNQTlERixHQWFBLEFBWW5CLEVBdENxRCxFQWlFNUIsRUFrQkgsRUFQdEIsSUE5RHFCLEdBYUEsU0F5RFQsQ0FsQm1DLElBbkRoQyxHQWFBLEFBeURmLFFBckVBLEFBeUNvQixHQTVCcEIsS0E1QmUsUUF5RGYsR0F4RG9CLE9BaUVBLFNBaEVwQixPQWlFQSIsImZpbGUiOiIvVXNlcnMvcGFzc2FyZWxsaXAvQ09ERS9QRVJTT05BTC9pbnRlcmFjdGl2ZS1hdWRpby1lYm9vay1uZXh0anMvcGFnZXMvYm9va3MvW2Jvb2tJZF0vW2NoYXB0ZXJJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjYWxjdWxhdGVXb3JkRHVyYXRpb24gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsY3VsYXRlLXdvcmQtZHVyYXRpb24nO1xuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChpZCk9PntcbiAgICByZXR1cm4gaW1wb3J0KCBgLi4vLi4vLi4vcHJlcC11dGlscy9qc29uLyR7aWR9Lmpzb25gKS50aGVuKCh7ZGVmYXVsdDogbXlEYXRhfSkgPT4gbXlEYXRhKTtcbiAgIH1cblxuY29uc3QgQ2hhcHRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBjaGFwdGVySWQsIGJvb2tJZCB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IFtjaGFwdGVyRGF0YSwgc2V0Q2hhcHRlckRhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Jvb2tUaXRsZSwgc2V0Qm9va1RpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZigpO1xuICBnZXREYXRhKGJvb2tJZCkudGhlbigocmVzKT0+e1xuICAgIGNvbnNvbGUubG9nKCdkYXRhIDU5JywgcmVzKTtcbiAgICAvLyBzZXRCb29rRGF0YShyZXMpO1xuICAgIGNvbnNvbGUubG9nKCdjaGFwdGVySWQnLGNoYXB0ZXJJZClcbiAgICBzZXRCb29rVGl0bGUocmVzLnRpdGxlKTtcbiAgICAvLyBhZGp1c3RpbmcgY2hhcHRlciBpZCB3aXRoIGFycmF5IGluZGV4XG4gICAgY29uc3QgY3VycmVudENoYXB0ZXIgPSByZXMuY2hhcHRlcnNbcGFyc2VJbnQoY2hhcHRlcklkKS0xXTtcbiAgICBzZXRDaGFwdGVyRGF0YShjdXJyZW50Q2hhcHRlcilcbiAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgIGNvbnNvbGUuZXJyb3IoXCJjb3VsZG4gJ3QgZmluZCBib29rIGlkXCIsIGJvb2tJZClcbiAgIH0pXG5cbiAgIGNvbnN0IGhhbmRsZVRleHRDbGljayA9IChlKT0+e1xuICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuaWQpO1xuICAgIC8vICAgIGNvbnNvbGUubG9nKClcbiAgICAgICBjb25zdCB3b3JkTGlzdCA9IGNoYXB0ZXJEYXRhLnRleHQuc3BsaXQoJyAnKTtcbiAgICAgICBjb25zdCByZW1vdmVDb3VudCA9IHdvcmRMaXN0Lmxlbmd0aCAtIGluZGV4O1xuICAgICAgIHdvcmRMaXN0LnNwbGljZSggaW5kZXgsIHJlbW92ZUNvdW50IClcbiAgICAgICBjb25zdCBlc3RpbWF0ZWRUaW1lT2Zmc2V0ID0gd29yZExpc3QucmVkdWNlKCh0b3RhbCwgd29yZCk9PntcbiAgICAgICAgICAgIGNvbnN0IHdvcmREdXJhdGlvbiA9IGNhbGN1bGF0ZVdvcmREdXJhdGlvbih3b3JkKTtcbiAgICAgICAgICAgIHRvdGFsICs9IHBhcnNlRmxvYXQod29yZER1cmF0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICB9LCAwKVxuXG4gICAgICAgY29uc29sZS5sb2coJ2VzdGltYXRlZFRpbWVPZmZzZXQnLGVzdGltYXRlZFRpbWVPZmZzZXQpXG4gICAgICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSAgPSBlc3RpbWF0ZWRUaW1lT2Zmc2V0O1xuICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpXG4gICB9XG5cblxucmV0dXJuICg8PlxuICA8c3R5bGUganN4PntgXG4gICAgIC5iZWZvcmUge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAuYWZ0ZXIge1xuICAgICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgXG4gIFxuICAvKiBmb3IgaW5kZXggcGFnZSAqL1xuICBcbiAgLnRyYW5zY3JpcHRCdG4ge1xuICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgbGlnaHRncmV5O1xuICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBSZXRpbmEsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgXG4gIC50cmFuc2NyaXB0QnRuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmFydGljbGVfdGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6IEVzY3JvdyBDb25kZW5zZWQsIEdlb3JnaWEsIHNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIGgyLmFydGljbGVfdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgfVxuICBcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBSZXRpbmEsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgfVxuICBcbiAgdWwge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIFxuICBsaSBhIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgbGkge1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICB9XG4gIFxuICBociB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xuICB9XG4gIFxuICBcbiAgLyogZm9yIHNob3cgcGFnZSAqL1xuICBcbiAgLmFydGljbGVfaGVhZGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgICAvKiBtYXJnaW4tYm90dG9tOiA0cHg7ICovXG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICBmb250LWZhbWlseTogRXNjcm93IENvbmRlbnNlZCwgQ2hyb25pY2xlIERpc3BsYXksIHNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLndvcmRzIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIGZvbnQtZmFtaWx5OiBFeGNoYW5nZSwgQ2hyb25pY2xlIFNTbSwgc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIFxuICAud29yZHM6aG92ZXI6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwi4pa2XCI7XG4gICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICBwYWRkaW5nLXRvcDogMC41ZW07XG4gICAgICB0b3A6IDBweDtcbiAgfVxuICBcbiAgYXVkaW8ge1xuICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBcbiAgLyogTW9iaWxlIHBob25lcyAqL1xuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLyogVGFibGV0cywgSXBhZHMgKHBvcnRyYWl0KSAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gICAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBMYXB0b3BzLCBEZXNrdG9wcyAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLyogRGVza3RvcHMgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgIH1cbiAgfVxuICBgfTwvc3R5bGU+XG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gIFxuICBgfTwvc3R5bGU+XG4gICAgPGgyPntjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS50aXRsZX0gLSB7Ym9va1RpdGxlJiZib29rVGl0bGV9PC9oMj5cbiAge2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLmR1cmF0aW9ufSBcbiAge2NoYXB0ZXJEYXRhICYmICggPGF1ZGlvICByZWY9e2F1ZGlvUmVmfSBzcmM9e2NoYXB0ZXJEYXRhLnVybH0gY29udHJvbHMgdHlwZT17Y2hhcHRlckRhdGEudHlwZX0gLz4gKX1cbiAgPGFydGljbGUgb25DbGljaz17aGFuZGxlVGV4dENsaWNrfT5cbiAgICB7Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEudGV4dC5zcGxpdCgnICcpLm1hcCgod29yZCwgaW5kZXgpPT57IHJldHVybiA8c3BhbiBpZD17aW5kZXh9Pnt3b3JkfSA8L3NwYW4+fSl9XG4gIDwvYXJ0aWNsZT5cblxuICBcbiAgPC8+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFwdGVyXG5cbkNoYXB0ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy96ZWl0L25leHQuanMnKVxuICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHsgfVxufSJdfQ== */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "524230756",
    __self: _this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTnFCIiwiZmlsZSI6Ii9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGNhbGN1bGF0ZVdvcmREdXJhdGlvbiBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhdGUtd29yZC1kdXJhdGlvbic7XG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGlkKT0+e1xuICAgIHJldHVybiBpbXBvcnQoIGAuLi8uLi8uLi9wcmVwLXV0aWxzL2pzb24vJHtpZH0uanNvbmApLnRoZW4oKHtkZWZhdWx0OiBteURhdGF9KSA9PiBteURhdGEpO1xuICAgfVxuXG5jb25zdCBDaGFwdGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGNoYXB0ZXJJZCwgYm9va0lkIH0gPSByb3V0ZXIucXVlcnlcbiAgY29uc3QgW2NoYXB0ZXJEYXRhLCBzZXRDaGFwdGVyRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYm9va1RpdGxlLCBzZXRCb29rVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKCk7XG4gIGdldERhdGEoYm9va0lkKS50aGVuKChyZXMpPT57XG4gICAgY29uc29sZS5sb2coJ2RhdGEgNTknLCByZXMpO1xuICAgIC8vIHNldEJvb2tEYXRhKHJlcyk7XG4gICAgY29uc29sZS5sb2coJ2NoYXB0ZXJJZCcsY2hhcHRlcklkKVxuICAgIHNldEJvb2tUaXRsZShyZXMudGl0bGUpO1xuICAgIC8vIGFkanVzdGluZyBjaGFwdGVyIGlkIHdpdGggYXJyYXkgaW5kZXhcbiAgICBjb25zdCBjdXJyZW50Q2hhcHRlciA9IHJlcy5jaGFwdGVyc1twYXJzZUludChjaGFwdGVySWQpLTFdO1xuICAgIHNldENoYXB0ZXJEYXRhKGN1cnJlbnRDaGFwdGVyKVxuICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgY29uc29sZS5lcnJvcihcImNvdWxkbiAndCBmaW5kIGJvb2sgaWRcIiwgYm9va0lkKVxuICAgfSlcblxuICAgY29uc3QgaGFuZGxlVGV4dENsaWNrID0gKGUpPT57XG4gICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5pZCk7XG4gICAgLy8gICAgY29uc29sZS5sb2coKVxuICAgICAgIGNvbnN0IHdvcmRMaXN0ID0gY2hhcHRlckRhdGEudGV4dC5zcGxpdCgnICcpO1xuICAgICAgIGNvbnN0IHJlbW92ZUNvdW50ID0gd29yZExpc3QubGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgd29yZExpc3Quc3BsaWNlKCBpbmRleCwgcmVtb3ZlQ291bnQgKVxuICAgICAgIGNvbnN0IGVzdGltYXRlZFRpbWVPZmZzZXQgPSB3b3JkTGlzdC5yZWR1Y2UoKHRvdGFsLCB3b3JkKT0+e1xuICAgICAgICAgICAgY29uc3Qgd29yZER1cmF0aW9uID0gY2FsY3VsYXRlV29yZER1cmF0aW9uKHdvcmQpO1xuICAgICAgICAgICAgdG90YWwgKz0gcGFyc2VGbG9hdCh3b3JkRHVyYXRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgIH0sIDApXG5cbiAgICAgICBjb25zb2xlLmxvZygnZXN0aW1hdGVkVGltZU9mZnNldCcsZXN0aW1hdGVkVGltZU9mZnNldClcbiAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lICA9IGVzdGltYXRlZFRpbWVPZmZzZXQ7XG4gICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KClcbiAgIH1cblxuXG5yZXR1cm4gKDw+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAgLmJlZm9yZSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5hZnRlciB7XG4gICAgICBjb2xvcjogZ3JleTtcbiAgfVxuICBcbiAgXG4gIC8qIGZvciBpbmRleCBwYWdlICovXG4gIFxuICAudHJhbnNjcmlwdEJ0biB7XG4gICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCBsaWdodGdyZXk7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgZm9udC1mYW1pbHk6IFJldGluYSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgfVxuICBcbiAgLnRyYW5zY3JpcHRCdG46aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuYXJ0aWNsZV90aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogRXNjcm93IENvbmRlbnNlZCwgR2VvcmdpYSwgc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgaDIuYXJ0aWNsZV90aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICB9XG4gIFxuICAuZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1mYW1pbHk6IFJldGluYSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICB9XG4gIFxuICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbiAgXG4gIGxpIGEge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICBsaSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIH1cbiAgXG4gIGhyIHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIH1cbiAgXG4gIFxuICAvKiBmb3Igc2hvdyBwYWdlICovXG4gIFxuICAuYXJ0aWNsZV9oZWFkZXIge1xuICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICAgIC8qIG1hcmdpbi1ib3R0b206IDRweDsgKi9cbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBFc2Nyb3cgQ29uZGVuc2VkLCBDaHJvbmljbGUgRGlzcGxheSwgc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIFxuICAud29yZHMge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgZm9udC1mYW1pbHk6IEV4Y2hhbmdlLCBDaHJvbmljbGUgU1NtLCBzZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgXG4gIC53b3Jkczpob3ZlcjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLilrZcIjtcbiAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXJBdWRpbyB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogM2VtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgICAgIHRvcDogMHB4O1xuICB9XG4gIFxuICBhdWRpbyB7XG4gICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIFxuICAvKiBNb2JpbGUgcGhvbmVzICovXG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qIExhcHRvcHMsIERlc2t0b3BzICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gICAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBEZXNrdG9wcyAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgfVxuICB9XG4gIGB9PC9zdHlsZT5cbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgXG4gIGB9PC9zdHlsZT5cbiAgICA8aDI+e2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLnRpdGxlfSAtIHtib29rVGl0bGUmJmJvb2tUaXRsZX08L2gyPlxuICB7Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEuZHVyYXRpb259IFxuICB7Y2hhcHRlckRhdGEgJiYgKCA8YXVkaW8gIHJlZj17YXVkaW9SZWZ9IHNyYz17Y2hhcHRlckRhdGEudXJsfSBjb250cm9scyB0eXBlPXtjaGFwdGVyRGF0YS50eXBlfSAvPiApfVxuICA8YXJ0aWNsZSBvbkNsaWNrPXtoYW5kbGVUZXh0Q2xpY2t9PlxuICAgIHtjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS50ZXh0LnNwbGl0KCcgJykubWFwKCh3b3JkLCBpbmRleCk9PnsgcmV0dXJuIDxzcGFuIGlkPXtpbmRleH0+e3dvcmR9IDwvc3Bhbj59KX1cbiAgPC9hcnRpY2xlPlxuXG4gIFxuICA8Lz4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXB0ZXJcblxuQ2hhcHRlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3plaXQvbmV4dC5qcycpXG4gICAgLy8gY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4geyB9XG59Il19 */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx("h2", {
    className: "jsx-2121629388",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, chapterData && chapterData.title, " - ", bookTitle && bookTitle), chapterData && chapterData.duration, chapterData && __jsx("audio", {
    ref: audioRef,
    src: chapterData.url,
    controls: true,
    type: chapterData.type,
    className: "jsx-2121629388",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  }), __jsx("article", {
    onClick: handleTextClick,
    className: "jsx-2121629388",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 3
    }
  }, chapterData && chapterData.text.split(' ').map(function (word, index) {
    return __jsx("span", {
      id: index,
      className: "jsx-2121629388",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 77
      }
    }, word, " ");
  })));
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
//# sourceMappingURL=[chapterId].js.f7e31c2660cfa21ddf36.hot-update.js.map