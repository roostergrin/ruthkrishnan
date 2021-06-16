/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/global.js":
/*!*******************************!*\
  !*** ./src/scripts/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/navigation */ "./src/scripts/resources/navigation.js");

document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_navigation__WEBPACK_IMPORTED_MODULE_0__.navigation)();
});

/***/ }),

/***/ "./src/scripts/resources/navigation.js":
/*!*********************************************!*\
  !*** ./src/scripts/resources/navigation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigation": () => (/* binding */ navigation)
/* harmony export */ });
var navigation = function navigation() {
  var scrollPos = 0;
  var el = document.querySelector('.site-navigation'),
      hamburger = document.querySelector('.site-navigation__hamburger'),
      overlay = document.querySelector('.site-navigation__overlay'),
      drawer = document.querySelector('.site-navigation__drawer'); // close drawer when opening new page

  drawer.classList.remove('site-navigation__drawer--active');

  var handleScroll = function handleScroll() {
    var currPos = window.pageYOffset;

    if (scrollPos > window.innerHeight * 0.25) {
      el.classList.add('site-navigation--active');
    } else {
      el.classList.remove('site-navigation--active');
    }

    scrollPos = currPos;
  };

  var toggleMenu = function toggleMenu() {
    hamburger.classList.contains('site-navigation__hamburger--active') ? hamburger.classList.remove('site-navigation__hamburger--active') : hamburger.classList.add('site-navigation__hamburger--active');
    overlay.classList.contains('site-navigation__overlay--active') ? overlay.classList.remove('site-navigation__overlay--active') : overlay.classList.add('site-navigation__overlay--active');
    drawer.classList.contains('site-navigation__drawer--active') ? drawer.classList.remove('site-navigation__drawer--active') : drawer.classList.add('site-navigation__drawer--active');
  };

  handleScroll();
  window.addEventListener('scroll', function () {
    handleScroll();
  });
  hamburger.addEventListener('click', function () {
    toggleMenu();
  });
};

/***/ }),

/***/ "./src/sass/pages/blog.sass":
/*!**********************************!*\
  !*** ./src/sass/pages/blog.sass ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/single-blog.sass":
/*!*****************************************!*\
  !*** ./src/sass/pages/single-blog.sass ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/global.sass":
/*!******************************!*\
  !*** ./src/sass/global.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/homepage.sass":
/*!**************************************!*\
  !*** ./src/sass/pages/homepage.sass ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/newdevelopments.sass":
/*!*********************************************!*\
  !*** ./src/sass/pages/newdevelopments.sass ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/single-newdevelopments.sass":
/*!****************************************************!*\
  !*** ./src/sass/pages/single-newdevelopments.sass ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/neighborhoods.sass":
/*!*******************************************!*\
  !*** ./src/sass/pages/neighborhoods.sass ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/global": 0,
/******/ 			"styles/neighborhoods": 0,
/******/ 			"styles/single-newdevelopments": 0,
/******/ 			"styles/newdevelopments": 0,
/******/ 			"styles/homepage": 0,
/******/ 			"styles/global": 0,
/******/ 			"styles/single-blog": 0,
/******/ 			"styles/blog": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkruthkrishnan"] = self["webpackChunkruthkrishnan"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/scripts/global.js")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/global.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/homepage.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/newdevelopments.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/single-newdevelopments.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/neighborhoods.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/blog.sass")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/single-blog.sass")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;