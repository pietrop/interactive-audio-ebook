webpackHotUpdate("static/development/pages/books/[bookId].js",{

/***/ "./prep-utils/json lazy recursive ^\\.\\/.*\\.json$":
/*!**************************************************************!*\
  !*** ./prep-utils/json lazy ^\.\/.*\.json$ namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./59.json": [
		"./prep-utils/json/59.json",
		1
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./prep-utils/json lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ })

})
//# sourceMappingURL=[bookId].js.2e781eb575bd8569dedc.hot-update.js.map