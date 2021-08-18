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
var homeHero = function homeHero() {// const video = document.querySelector('.home-hero__video'),
  //       loader = document.querySelector('.page-home__loader');
  // setTimeout(() => {
  //   loader.classList.add('page-home__loader--loaded')
  // }, 500)
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
  var welcomeVideo = document.querySelector('.home-welcome__video'),
      tabletVideoContainer = document.querySelector('.home-welcome__no-modal-video-container'),
      tabletVideo = document.querySelector('.home-welcome__no-modal-video'),
      videoModal = document.querySelector('.home-welcome__video-modal'),
      playBtn = document.querySelector('.home-welcome__image-container'),
      videoThumbnail = document.querySelector('.home-welcome__thumbnail'),
      closeBtn = document.querySelector('.home-welcome__close-btn'),
      overlay = document.querySelector('.home-welcome__modal-overlay');
  var debounceLastTimeout = null,
      tabletVideoActive = false;
  (0,_resources_home_hero_js__WEBPACK_IMPORTED_MODULE_0__.homeHero)(); // Home Welcome

  var openModal = function openModal() {
    videoModal.classList.add('home-welcome__video-modal--open');
    setTimeout(function () {
      welcomeVideo.src = welcomeVideo.dataset.src;
    }, 250);
  };

  var closeModal = function closeModal() {
    videoModal.classList.remove('home-welcome__video-modal--open');
    welcomeVideo.src = '';
  };

  var resetVideoModal = function resetVideoModal() {
    closeModal();
    tabletCloseVideo();
    playBtn.removeEventListener('click', openModal);
    overlay.removeEventListener('click', closeModal);
    closeBtn.removeEventListener('click', closeModal);
  };

  var tabletPlayVideo = function tabletPlayVideo() {
    if (!tabletVideoActive) {
      tabletVideo.src = tabletVideo.dataset.src;
      document.querySelector('.home-welcome__play-btn').classList.add('home-welcome__play-btn--hidden');
      videoThumbnail.classList.add('home-welcome__thumbnail--hidden');
      tabletVideoContainer.classList.add('home-welcome__no-modal-video-container--active');
      tabletVideoActive = true;
    }
  };

  var tabletCloseVideo = function tabletCloseVideo() {
    tabletVideoActive = false;
    tabletVideo.src = '';
    playBtn.classList.remove('home-welcome__play-btn--hidden');
    videoThumbnail.classList.remove('home-welcome__thumbnail--hidden');
    tabletVideoContainer.classList.remove('home-welcome__no-modal-video-container--active');
  };

  var playVideo = function playVideo() {
    resetVideoModal();

    if (window.innerWidth > 880) {
      playBtn.addEventListener('click', openModal);
      overlay.addEventListener('click', closeModal);
      closeBtn.addEventListener('click', closeModal);
    } else {
      playBtn.addEventListener('click', tabletPlayVideo);
    }
  };

  playVideo(); // debounce function

  var debounce = function debounce(func, args, wait, immediate) {
    var later = function later() {
      debounceLastTimeout = null;

      if (!immediate) {
        func(args);
      }
    };

    var callNow = immediate && !debounceLastTimeout;
    clearTimeout(debounceLastTimeout);
    debounceLastTimeout = setTimeout(later, wait);

    if (callNow) {
      func(args);
    }
  };

  window.addEventListener('resize', function () {
    debounce(playVideo, null, 300);
  });
});
})();

/******/ })()
;