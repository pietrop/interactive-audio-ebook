webpackHotUpdate("static/development/pages/books.js",{

/***/ "./pages/books/index.js":
/*!******************************!*\
  !*** ./pages/books/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _prep_utils_books_index_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../prep-utils/books-index.json */ "./prep-utils/books-index.json");
var _prep_utils_books_index_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../prep-utils/books-index.json */ "./prep-utils/books-index.json", 1);
var _jsxFileName = "/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var basePath = publicRuntimeConfig.basePath;


function Books() {
  var _this = this;

  // http://www.gutenberg.org/ebooks/search/?query=tom+sawyer
  var pids = ['59'];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, "Books"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, _prep_utils_books_index_json__WEBPACK_IMPORTED_MODULE_6__.map(function (book) {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "".concat(basePath, "/books/[bookId]"),
      as: "".concat(basePath, "/books/").concat(bookId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        width: '18rem'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"].Img, {
      variant: "top",
      src: "https://via.placeholder.com/750",
      fluid: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"].Body, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"].Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }, " ", book.librivoxBookId), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"].Text, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, "Description")))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Books);

/***/ }),

/***/ "./prep-utils/books-index.json":
/*!*************************************!*\
  !*** ./prep-utils/books-index.json ***!
  \*************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Adventures of Huckleberry Finn by TWAIN, Mark\",\"description\":\"Adventures of Huckleberry Finn (1884) by Mark Twain is one of the truly great American novels, beloved by children, adults, and literary critics alike.  The book tells the story of “Huck” Finn (first introduced as Tom Sawyer’s sidekick in The Adventures of Tom Sawyer), his friend Jim, and their journey down the Mississippi River on a raft.  Both are on the run, Huck from his drunk and abusive father, and Jim as a runaway slave.\\nAs Huck and Jim drift down the river, they meet many colorful characters and have many great adventures.  The true heart of the story, however, is the friendship between Huck and Jim.  A constant theme throughout the book is Huck’s internal struggle between what he has been taught, that helping a runaway slave is a sin, and what he truly believes, that Jim is a good man and it couldn’t possibly be wrong to help him.\\nAdventures of Huckleberry Finn was unique at the time of its publication (1884) because it is narrated by Huck himself and is written in the numerous dialects common in the area and time in which the book is set.  Although the book was originally intended as a sequel to the children’s book The Adventures of Tom Sawyer, as Twain wrote Adventures of Huckleberry Finn it progressed into a more serious work.  Twain’s views on slavery and other social issues of the time become clear through the words, thoughts, and actions of Huck Finn.  The book has always been the subject of great controversy, and according to The American Library Association it was fifth on the list of most frequently challenged books in the 1990s.(Summary by Annie Coleman)\",\"gutembergId\":76,\"librivoxBookId\":59}]");

/***/ })

})
//# sourceMappingURL=books.js.b95736189a4b5f84f82d.hot-update.js.map