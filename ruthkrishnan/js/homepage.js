/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/home-hero.js":
/*!********************************************!*\
  !*** ./src/scripts/resources/home-hero.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeHero": () => (/* binding */ homeHero)
/* harmony export */ });
var homeHero = function homeHero() {
  var video = document.querySelector('.home-hero__video');
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
/*!***************************************!*\
  !*** ./src/scripts/pages/homepage.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_home_hero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/home-hero.js */ "./src/scripts/resources/home-hero.js");

document.addEventListener('DOMContentLoaded', function () {
  var loader = document.querySelector('.page-home__loader'),
      video = document.querySelector('.home-hero__video'),
      welcomeVideo = document.querySelector('.home-welcome__video'),
      videoModal = document.querySelector('.home-welcome__video-modal'),
      playBtn = document.querySelector('.home-welcome__play-btn'),
      closeBtn = document.querySelector('.home-welcome__close-btn'),
      overlay = document.querySelector('.home-welcome__modal-overlay'); // Hero Video

  video.addEventListener('loadeddata', function () {
    loader.classList.add('page-home__loader--loaded');
  });
  (0,_resources_home_hero_js__WEBPACK_IMPORTED_MODULE_0__.homeHero)(); // Home Welcome

  var openModal = function openModal() {
    videoModal.classList.add('home-welcome__video-modal--open');
    setTimeout(function () {
      welcomeVideo.play();
    }, 250);
  };

  var closeModal = function closeModal() {
    videoModal.classList.remove('home-welcome__video-modal--open');
    welcomeVideo.pause();
  };

  playBtn.addEventListener('click', function () {
    openModal();
  });
  overlay.addEventListener('click', function () {
    closeModal();
  });
  closeBtn.addEventListener('click', function () {
    closeModal();
  });
});
})();

/******/ })()
;