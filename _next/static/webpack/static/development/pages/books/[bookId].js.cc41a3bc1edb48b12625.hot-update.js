webpackHotUpdate("static/development/pages/books/[bookId].js",{

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
false,

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
false,

/***/ "./node_modules/use-subscription/index.js":
false,

/***/ "./pages/books/[bookId].js":
/*!*********************************!*\
  !*** ./pages/books/[bookId].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "/Users/passarellip/CODE/PERSONAL/interactive-audio-ebook-nextjs/pages/books/[bookId].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_7___default()(),
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

var Book = function Book() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var bookId = router.query.bookId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      bookData = _useState[0],
      setBookData = _useState[1];

  getData(bookId).then(function (res) {
    console.log('data 59', Array.from(res)); // setBookData(res);

    setBookData(res);
  })["catch"](function (err) {
    console.error('couldn\'t find book id', bookId);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, bookData && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, bookData.title), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: {
      span: 12,
      order: 2
    },
    sm: {
      span: 6,
      order: 1
    },
    md: {
      span: 6,
      order: 1
    },
    lg: {
      span: 6,
      order: 1
    },
    xl: {
      span: 6,
      order: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Chapters"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, bookData.chapters.map(function (chapter) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "".concat(basePath, "/books/[bookId]/[chapterId]"),
      as: "".concat(basePath, "/books/").concat(bookId, "/").concat(chapter.chapter),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, chapter.title, " - ", chapter.duration, " ")));
  }))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: {
      span: 12,
      order: 1
    },
    sm: {
      span: 6,
      order: 2
    },
    md: {
      span: 6,
      order: 2
    },
    lg: {
      span: 6,
      order: 2
    },
    xl: {
      span: 6,
      order: 2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "https://www.gutenberg.org/files/".concat(bookData.gutembergId, "/").concat(bookData.gutembergId, "-h/images/bookcover.jpg"),
    style: {
      width: '30%',
      height: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "https://www.gutenberg.org/files/".concat(bookData.gutembergId, "/").concat(bookData.gutembergId, "-h/images/frontispiece.jpg"),
    style: {
      width: '30%',
      height: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "https://www.gutenberg.org/files/".concat(bookData.gutembergId, "/").concat(bookData.gutembergId, "-h/images/titlepage.jpg"),
    style: {
      width: '30%',
      height: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Summary"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, bookData.description), __jsx("a", {
    href: bookData.link,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "LibriVox"), " | ", __jsx("a", {
    href: "https://www.gutenberg.org/files/".concat(bookData.gutembergId, "/").concat(bookData.gutembergId, "-h/").concat(bookData.gutembergId, "-h.htm"),
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 92
    }
  }, "Gutenberg"))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Book);

Book.getInitialProps = function _callee(ctx) {
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

/***/ }),

/***/ "./prep-utils/json/59.json":
false

})
//# sourceMappingURL=[bookId].js.cc41a3bc1edb48b12625.hot-update.js.map