webpackHotUpdate("static/development/pages/books/[bookId]/[chapterId].js",{

/***/ "./prep-utils/json lazy recursive ^\\.\\/.*\\.json$":
/*!**************************************************************!*\
  !*** ./prep-utils/json lazy ^\.\/.*\.json$ namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./3881.json": [
		"./prep-utils/json/3881.json",
		3
	],
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
//# sourceMappingURL=[chapterId].js.7998995a86985267358e.hot-update.js.map