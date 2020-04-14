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
    id: "75423286",
    __self: _this
  }, ".before.jsx-2211947700{color:black;}.after.jsx-2211947700{color:grey;}.transcriptBtn.jsx-2211947700{border:0.1rem solid lightgrey;border-radius:0.5em;padding:0.5em;font-family:Retina,Arial,Helvetica,sans-serif;color:#333;font-weight:200;}.transcriptBtn.jsx-2211947700:hover{background-color:lightgray;color:white;}.article_title.jsx-2211947700{font-family:Escrow Condensed,Georgia,serif;font-weight:700;font-size:30px;line-height:34px;color:#333;}h2.article_title.jsx-2211947700{margin-top:0.5em;margin-bottom:0.2em;}.description.jsx-2211947700{font-family:Retina,Arial,Helvetica,sans-serif;font-weight:400;font-size:16px;line-height:22px;color:#666;}ul.jsx-2211947700{list-style-type:none;}li.jsx-2211947700 a.jsx-2211947700{color:black;-webkit-text-decoration:none;text-decoration:none;}li.jsx-2211947700{padding-bottom:0.5em;}hr.jsx-2211947700{border-top:1px solid lightgrey;}.article_header.jsx-2211947700{margin-top:10vh;font-size:40px;line-height:1.2em;font-family:Escrow Condensed,Chronicle Display,serif;font-weight:700;}.words.jsx-2211947700{cursor:pointer;margin-bottom:17px;font-size:17px;line-height:27px;word-wrap:break-word;font-family:Exchange,Chronicle SSm,serif;font-weight:400;}.words.jsx-2211947700:hover.jsx-2211947700:before{content:\"\u25B6\";color:blue;opacity:0.6;position:absolute;margin-top:-12px;}.containerAudio.jsx-2211947700{position:fixed;background-color:white;height:3em;padding-bottom:1em;padding-top:0.5em;top:0px;}audio.jsx-2211947700{width:100%;}@media only screen and (max-width.jsx-2211947700:768px) .container{width:100%;}@media only screen and (max-width.jsx-2211947700:768px) .containerAudio{width:100%;}@media (min-width.jsx-2211947700:769px) and (max-width.jsx-2211947700:1024px) .container{width:70%;padding-left:15%;padding-right:15%;}@media (min-width.jsx-2211947700:769px) and (max-width.jsx-2211947700:1024px) .containerAudio{width:70%;padding-left:15%;padding-right:15%;}@media (min-width.jsx-2211947700:1025px) and (max-width.jsx-2211947700:1280px) .container{width:50%;padding-left:25%;padding-right:25%;}@media (min-width.jsx-2211947700:1025px) and (max-width.jsx-2211947700:1280px) .containerAudio{width:50%;padding-left:25%;padding-right:25%;}@media (min-width.jsx-2211947700:1281px) .container{width:50%;padding-left:25%;padding-right:25%;}@media (min-width.jsx-2211947700:1281px) .containerAudio{width:50%;padding-left:25%;padding-right:25%;}.duration.jsx-2211947700{font-size:medium;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2MsQUFHbUIsQUFJRCxBQU9tQixBQVNILEFBS2tCLEFBUTVCLEFBS2dDLEFBUTVCLEFBSVQsQUFLUyxBQUlVLEFBT2YsQUFTRCxBQVVILEFBUUcsQUFVSixBQVFJLEFBR0EsQUFTRCxBQUtBLEFBV0EsQUFLQSxBQVdBLEFBS0EsQUFPQyxVQTNDTSxBQUtBLEFBV0EsQUFLQSxBQVdBLEFBS0EsQ0E1SnpCLEFBbUdBLEFBUUksQUFHQSxDQWxISixBQWtEeUIsQUFtQ1YsR0FWUSxBQWtCSSxDQTFCUixDQWxDSyxBQXNJMUIsSUF6SEUsQUFTQSxFQStCZ0IsSUFsRUEsQUF3R1UsQUFLQSxBQVdBLEFBS0EsQUFXQSxBQUtBLEdBdEpGLENBZ0R4QixBQVNzQixHQVFILENBV0csRUFyRHRCLENBNERlLENBekVmLElBSW9CLEVBb0doQixBQUtBLEFBV0EsQUFLQSxBQVdBLEFBS0EsQ0E1SGdCLEdBK0J1QyxBQVF0QyxBQWtCRSxDQW5GTCxHQTRFRyxNQTlERixHQWFBLEFBWW5CLEVBdENxRCxFQWlFNUIsRUFrQkgsRUFQdEIsSUE5RHFCLEdBYUEsU0F5RFQsQ0FsQm1DLElBbkRoQyxHQWFBLEFBeURmLFFBckVBLEFBeUNvQixHQTVCcEIsS0E1QmUsUUF5RGYsR0F4RG9CLE9BaUVBLFNBaEVwQixPQWlFQSIsImZpbGUiOiIvVXNlcnMvcGFzc2FyZWxsaXAvQ09ERS9QRVJTT05BTC9pbnRlcmFjdGl2ZS1hdWRpby1lYm9vay1uZXh0anMvcGFnZXMvYm9va3MvW2Jvb2tJZF0vW2NoYXB0ZXJJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjYWxjdWxhdGVXb3JkRHVyYXRpb24gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsY3VsYXRlLXdvcmQtZHVyYXRpb24nO1xuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChpZCk9PntcbiAgICByZXR1cm4gaW1wb3J0KCBgLi4vLi4vLi4vcHJlcC11dGlscy9qc29uLyR7aWR9Lmpzb25gKS50aGVuKCh7ZGVmYXVsdDogbXlEYXRhfSkgPT4gbXlEYXRhKTtcbiAgIH1cblxuY29uc3QgQ2hhcHRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBjaGFwdGVySWQsIGJvb2tJZCB9ID0gcm91dGVyLnF1ZXJ5XG4gIGNvbnN0IFtjaGFwdGVyRGF0YSwgc2V0Q2hhcHRlckRhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Jvb2tUaXRsZSwgc2V0Qm9va1RpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZigpO1xuICBnZXREYXRhKGJvb2tJZCkudGhlbigocmVzKT0+e1xuICAgIGNvbnNvbGUubG9nKCdkYXRhIDU5JywgcmVzKTtcbiAgICAvLyBzZXRCb29rRGF0YShyZXMpO1xuICAgIGNvbnNvbGUubG9nKCdjaGFwdGVySWQnLGNoYXB0ZXJJZClcbiAgICBzZXRCb29rVGl0bGUocmVzLnRpdGxlKTtcbiAgICAvLyBhZGp1c3RpbmcgY2hhcHRlciBpZCB3aXRoIGFycmF5IGluZGV4XG4gICAgY29uc3QgY3VycmVudENoYXB0ZXIgPSByZXMuY2hhcHRlcnNbcGFyc2VJbnQoY2hhcHRlcklkKS0xXTtcbiAgICBzZXRDaGFwdGVyRGF0YShjdXJyZW50Q2hhcHRlcilcbiAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgIGNvbnNvbGUuZXJyb3IoXCJjb3VsZG4gJ3QgZmluZCBib29rIGlkXCIsIGJvb2tJZClcbiAgIH0pXG5cbiAgIGNvbnN0IGhhbmRsZVRleHRDbGljayA9IChlKT0+e1xuICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuaWQpO1xuICAgIC8vICAgIGNvbnNvbGUubG9nKClcbiAgICAgICBjb25zdCB3b3JkTGlzdCA9IGNoYXB0ZXJEYXRhLnRleHQuc3BsaXQoJyAnKTtcbiAgICAgICBjb25zdCByZW1vdmVDb3VudCA9IHdvcmRMaXN0Lmxlbmd0aCAtIGluZGV4O1xuICAgICAgIHdvcmRMaXN0LnNwbGljZSggaW5kZXgsIHJlbW92ZUNvdW50IClcbiAgICAgICBjb25zdCBlc3RpbWF0ZWRUaW1lT2Zmc2V0ID0gd29yZExpc3QucmVkdWNlKCh0b3RhbCwgd29yZCk9PntcbiAgICAgICAgICAgIGNvbnN0IHdvcmREdXJhdGlvbiA9IGNhbGN1bGF0ZVdvcmREdXJhdGlvbih3b3JkKTtcbiAgICAgICAgICAgIHRvdGFsICs9IHBhcnNlRmxvYXQod29yZER1cmF0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICB9LCAwKVxuXG4gICAgICAgY29uc29sZS5sb2coJ2VzdGltYXRlZFRpbWVPZmZzZXQnLGVzdGltYXRlZFRpbWVPZmZzZXQpXG4gICAgICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSAgPSBlc3RpbWF0ZWRUaW1lT2Zmc2V0O1xuICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpXG4gICB9XG5cblxucmV0dXJuICg8PlxuICA8c3R5bGUganN4PntgXG4gICAgIC5iZWZvcmUge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAuYWZ0ZXIge1xuICAgICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgXG4gIFxuICAvKiBmb3IgaW5kZXggcGFnZSAqL1xuICBcbiAgLnRyYW5zY3JpcHRCdG4ge1xuICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgbGlnaHRncmV5O1xuICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBSZXRpbmEsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbiAgXG4gIC50cmFuc2NyaXB0QnRuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmFydGljbGVfdGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6IEVzY3JvdyBDb25kZW5zZWQsIEdlb3JnaWEsIHNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIGgyLmFydGljbGVfdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgfVxuICBcbiAgLmRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBSZXRpbmEsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgfVxuICBcbiAgdWwge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIFxuICBsaSBhIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgbGkge1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICB9XG4gIFxuICBociB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xuICB9XG4gIFxuICBcbiAgLyogZm9yIHNob3cgcGFnZSAqL1xuICBcbiAgLmFydGljbGVfaGVhZGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gICAgICAvKiBtYXJnaW4tYm90dG9tOiA0cHg7ICovXG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICBmb250LWZhbWlseTogRXNjcm93IENvbmRlbnNlZCwgQ2hyb25pY2xlIERpc3BsYXksIHNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgLndvcmRzIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIGZvbnQtZmFtaWx5OiBFeGNoYW5nZSwgQ2hyb25pY2xlIFNTbSwgc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIFxuICAud29yZHM6aG92ZXI6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwi4pa2XCI7XG4gICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICBwYWRkaW5nLXRvcDogMC41ZW07XG4gICAgICB0b3A6IDBweDtcbiAgfVxuICBcbiAgYXVkaW8ge1xuICAgICAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBcbiAgLyogTW9iaWxlIHBob25lcyAqL1xuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLyogVGFibGV0cywgSXBhZHMgKHBvcnRyYWl0KSAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gICAgICB9XG4gIH1cbiAgXG4gIFxuICAvKiBMYXB0b3BzLCBEZXNrdG9wcyAqL1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLyogRGVza3RvcHMgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgIH1cbiAgfVxuXG4gIC5kdXJhdGlvbntcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cbiAgYH08L3N0eWxlPlxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuICBhdWRpb3tcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgXG4gIGB9PC9zdHlsZT5cbiAgICA8aDI+e2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLnRpdGxlfSAtIHtib29rVGl0bGUmJmJvb2tUaXRsZX0gPHNwYW4gY2xhc3NOYW1lPVwiZHVyYXRpb25cIj57Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEuZHVyYXRpb259IDwvc3Bhbj48L2gyPlxuICBcbiAgPGJyLz5cbiAgPGJyLz5cbiAge2NoYXB0ZXJEYXRhICYmICggPGF1ZGlvICByZWY9e2F1ZGlvUmVmfSBzcmM9e2NoYXB0ZXJEYXRhLnVybH0gY29udHJvbHMgdHlwZT17Y2hhcHRlckRhdGEudHlwZX0gLz4gKX1cbiAgPGFydGljbGUgb25DbGljaz17aGFuZGxlVGV4dENsaWNrfT5cbiAgICB7Y2hhcHRlckRhdGEgJiYgY2hhcHRlckRhdGEudGV4dC5zcGxpdCgnICcpLm1hcCgod29yZCwgaW5kZXgpPT57IHJldHVybiA8c3BhbiBpZD17aW5kZXh9Pnt3b3JkfSA8L3NwYW4+fSl9XG4gIDwvYXJ0aWNsZT5cbiAgPGJyLz5cbiAgPGJyLz5cbiAgPGJyLz5cbiAgPGJyLz5cblxuICBcbiAgPC8+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFwdGVyXG5cbkNoYXB0ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy96ZWl0L25leHQuanMnKVxuICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHsgfVxufSJdfQ== */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1171280395",
    __self: _this
  }, "audio{position:fixed;bottom:0;left:0px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML2ludGVyYWN0aXZlLWF1ZGlvLWVib29rLW5leHRqcy9wYWdlcy9ib29rcy9bYm9va0lkXS9bY2hhcHRlcklkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3TnFCLEFBR3NCLGVBQ04sU0FDQSxTQUNFLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL3Bhc3NhcmVsbGlwL0NPREUvUEVSU09OQUwvaW50ZXJhY3RpdmUtYXVkaW8tZWJvb2stbmV4dGpzL3BhZ2VzL2Jvb2tzL1tib29rSWRdL1tjaGFwdGVySWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgY2FsY3VsYXRlV29yZER1cmF0aW9uIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGN1bGF0ZS13b3JkLWR1cmF0aW9uJztcbmNvbnN0IGdldERhdGEgPSBhc3luYyAoaWQpPT57XG4gICAgcmV0dXJuIGltcG9ydCggYC4uLy4uLy4uL3ByZXAtdXRpbHMvanNvbi8ke2lkfS5qc29uYCkudGhlbigoe2RlZmF1bHQ6IG15RGF0YX0pID0+IG15RGF0YSk7XG4gICB9XG5cbmNvbnN0IENoYXB0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgY2hhcHRlcklkLCBib29rSWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCBbY2hhcHRlckRhdGEsIHNldENoYXB0ZXJEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtib29rVGl0bGUsIHNldEJvb2tUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYoKTtcbiAgZ2V0RGF0YShib29rSWQpLnRoZW4oKHJlcyk9PntcbiAgICBjb25zb2xlLmxvZygnZGF0YSA1OScsIHJlcyk7XG4gICAgLy8gc2V0Qm9va0RhdGEocmVzKTtcbiAgICBjb25zb2xlLmxvZygnY2hhcHRlcklkJyxjaGFwdGVySWQpXG4gICAgc2V0Qm9va1RpdGxlKHJlcy50aXRsZSk7XG4gICAgLy8gYWRqdXN0aW5nIGNoYXB0ZXIgaWQgd2l0aCBhcnJheSBpbmRleFxuICAgIGNvbnN0IGN1cnJlbnRDaGFwdGVyID0gcmVzLmNoYXB0ZXJzW3BhcnNlSW50KGNoYXB0ZXJJZCktMV07XG4gICAgc2V0Q2hhcHRlckRhdGEoY3VycmVudENoYXB0ZXIpXG4gICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICBjb25zb2xlLmVycm9yKFwiY291bGRuICd0IGZpbmQgYm9vayBpZFwiLCBib29rSWQpXG4gICB9KVxuXG4gICBjb25zdCBoYW5kbGVUZXh0Q2xpY2sgPSAoZSk9PntcbiAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkKTtcbiAgICAvLyAgICBjb25zb2xlLmxvZygpXG4gICAgICAgY29uc3Qgd29yZExpc3QgPSBjaGFwdGVyRGF0YS50ZXh0LnNwbGl0KCcgJyk7XG4gICAgICAgY29uc3QgcmVtb3ZlQ291bnQgPSB3b3JkTGlzdC5sZW5ndGggLSBpbmRleDtcbiAgICAgICB3b3JkTGlzdC5zcGxpY2UoIGluZGV4LCByZW1vdmVDb3VudCApXG4gICAgICAgY29uc3QgZXN0aW1hdGVkVGltZU9mZnNldCA9IHdvcmRMaXN0LnJlZHVjZSgodG90YWwsIHdvcmQpPT57XG4gICAgICAgICAgICBjb25zdCB3b3JkRHVyYXRpb24gPSBjYWxjdWxhdGVXb3JkRHVyYXRpb24od29yZCk7XG4gICAgICAgICAgICB0b3RhbCArPSBwYXJzZUZsb2F0KHdvcmREdXJhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgfSwgMClcblxuICAgICAgIGNvbnNvbGUubG9nKCdlc3RpbWF0ZWRUaW1lT2Zmc2V0Jyxlc3RpbWF0ZWRUaW1lT2Zmc2V0KVxuICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgID0gZXN0aW1hdGVkVGltZU9mZnNldDtcbiAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKVxuICAgfVxuXG5cbnJldHVybiAoPD5cbiAgPHN0eWxlIGpzeD57YFxuICAgICAuYmVmb3JlIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmFmdGVyIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICB9XG4gIFxuICBcbiAgLyogZm9yIGluZGV4IHBhZ2UgKi9cbiAgXG4gIC50cmFuc2NyaXB0QnRuIHtcbiAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICBmb250LWZhbWlseTogUmV0aW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG4gIFxuICAudHJhbnNjcmlwdEJ0bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5hcnRpY2xlX3RpdGxlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBFc2Nyb3cgQ29uZGVuc2VkLCBHZW9yZ2lhLCBzZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICBoMi5hcnRpY2xlX3RpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gIH1cbiAgXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LWZhbWlseTogUmV0aW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgXG4gIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICBcbiAgbGkgYSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIGxpIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgfVxuICBcbiAgaHIge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgfVxuICBcbiAgXG4gIC8qIGZvciBzaG93IHBhZ2UgKi9cbiAgXG4gIC5hcnRpY2xlX2hlYWRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgICAgLyogbWFyZ2luLWJvdHRvbTogNHB4OyAqL1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgZm9udC1mYW1pbHk6IEVzY3JvdyBDb25kZW5zZWQsIENocm9uaWNsZSBEaXNwbGF5LCBzZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgXG4gIC53b3JkcyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICBmb250LWZhbWlseTogRXhjaGFuZ2UsIENocm9uaWNsZSBTU20sIHNlcmlmO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBcbiAgLndvcmRzOmhvdmVyOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIuKWtlwiO1xuICAgICAgY29sb3I6IGJsdWU7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgcGFkZGluZy10b3A6IDAuNWVtO1xuICAgICAgdG9wOiAwcHg7XG4gIH1cbiAgXG4gIGF1ZGlvIHtcbiAgICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIC8qIE1vYmlsZSBwaG9uZXMgKi9cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qIFRhYmxldHMsIElwYWRzIChwb3J0cmFpdCkgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyQXVkaW8ge1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgICAgfVxuICB9XG4gIFxuICBcbiAgLyogTGFwdG9wcywgRGVza3RvcHMgKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNSU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjUlO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lckF1ZGlvIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qIERlc2t0b3BzICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjUlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1JTtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXJBdWRpbyB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gICAgICB9XG4gIH1cblxuICAuZHVyYXRpb257XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59XG4gIGB9PC9zdHlsZT5cbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgYXVkaW97XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIFxuICBgfTwvc3R5bGU+XG4gICAgPGgyPntjaGFwdGVyRGF0YSAmJiBjaGFwdGVyRGF0YS50aXRsZX0gLSB7Ym9va1RpdGxlJiZib29rVGl0bGV9IDxzcGFuIGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+e2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLmR1cmF0aW9ufSA8L3NwYW4+PC9oMj5cbiAgXG4gIDxici8+XG4gIDxici8+XG4gIHtjaGFwdGVyRGF0YSAmJiAoIDxhdWRpbyAgcmVmPXthdWRpb1JlZn0gc3JjPXtjaGFwdGVyRGF0YS51cmx9IGNvbnRyb2xzIHR5cGU9e2NoYXB0ZXJEYXRhLnR5cGV9IC8+ICl9XG4gIDxhcnRpY2xlIG9uQ2xpY2s9e2hhbmRsZVRleHRDbGlja30+XG4gICAge2NoYXB0ZXJEYXRhICYmIGNoYXB0ZXJEYXRhLnRleHQuc3BsaXQoJyAnKS5tYXAoKHdvcmQsIGluZGV4KT0+eyByZXR1cm4gPHNwYW4gaWQ9e2luZGV4fT57d29yZH0gPC9zcGFuPn0pfVxuICA8L2FydGljbGU+XG4gIDxici8+XG4gIDxici8+XG4gIDxici8+XG4gIDxici8+XG5cbiAgXG4gIDwvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcHRlclxuXG5DaGFwdGVyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvemVpdC9uZXh0LmpzJylcbiAgICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7IH1cbn0iXX0= */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId]/[chapterId].js */"), __jsx("h2", {
    className: "jsx-2211947700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 5
    }
  }, chapterData && chapterData.title, " - ", bookTitle && bookTitle, " ", __jsx("span", {
    className: "jsx-2211947700" + " " + "duration",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 69
    }
  }, chapterData && chapterData.duration, " ")), __jsx("br", {
    className: "jsx-2211947700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2211947700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 3
    }
  }), chapterData && __jsx("audio", {
    ref: audioRef,
    src: chapterData.url,
    controls: true,
    type: chapterData.type,
    className: "jsx-2211947700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }), __jsx("article", {
    onClick: handleTextClick,
    className: "jsx-2211947700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 3
    }
  }, chapterData && chapterData.text.split(' ').map(function (word, index) {
    return __jsx("span", {
      id: index,
      className: "jsx-2211947700",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 77
      }
    }, word, " ");
  })), __jsx("br", {
    className: "jsx-2211947700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2211947700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2211947700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 3
    }
  }), __jsx("br", {
    className: "jsx-2211947700",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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
//# sourceMappingURL=[chapterId].js.267d1a67c82a7b04b43a.hot-update.js.map