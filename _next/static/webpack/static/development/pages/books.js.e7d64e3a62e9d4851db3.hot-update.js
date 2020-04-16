webpackHotUpdate("static/development/pages/books.js",{

/***/ "./pages/books/index.js":
/*!******************************!*\
  !*** ./pages/books/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");

var _jsxFileName = "/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var basePath = publicRuntimeConfig.basePath;

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

function Books() {
  var _this = this;

  // http://www.gutenberg.org/ebooks/search/?query=tom+sawyer
  var pids = ['59'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      booksData = _useState[0],
      setBooksData = _useState[1];

  pids.forEach(function (pid) {
    getData(pid).then(function (res) {
      booksData.push(res);
      setBooksData(booksData);
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "Books"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, pids.map(function (bookId) {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "".concat(basePath, "/books/[bookId]"),
      as: "".concat(basePath, "/books/").concat(bookId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        width: '18rem'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Img, {
      variant: "top",
      src: "https://via.placeholder.com/750",
      fluid: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Title, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, " bookId ", bookId), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Text, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, "Description")))), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Books);

/***/ })

})
//# sourceMappingURL=books.js.e7d64e3a62e9d4851db3.hot-update.js.map