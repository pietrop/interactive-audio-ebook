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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, "Books"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, _prep_utils_books_index_json__WEBPACK_IMPORTED_MODULE_6__.map(function (book) {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "".concat(basePath, "/books/[bookId]"),
      as: "".concat(basePath, "/books/").concat(book.librivoxBookId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        width: '18rem'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"].Img, {
      variant: "top",
      src: "https://via.placeholder.com/750",
      fluid: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"].Body, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"].Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }, " ", book.title), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__["default"].Text, {
      title: book.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }, book.description.substr(0, 100))))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Books);

/***/ })

})
//# sourceMappingURL=books.js.15615ce0ba1d36d7484e.hot-update.js.map