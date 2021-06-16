/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    console.log(scrollPos, currPos);

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/scripts/global.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/navigation */ "./src/scripts/resources/navigation.js");

document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_navigation__WEBPACK_IMPORTED_MODULE_0__.navigation)();
});
})();

/******/ })()
;