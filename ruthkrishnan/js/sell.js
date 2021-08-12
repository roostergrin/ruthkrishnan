/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/resources-links.js":
/*!**************************************************!*\
  !*** ./src/scripts/resources/resources-links.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resourcesLinks": () => (/* binding */ resourcesLinks)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var resourcesLinks = function resourcesLinks() {
  var links = Array.from(document.querySelectorAll('.resources-links__link-container'));
  var debounceLastTimeout = null; // debounce function

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

  var setLinkHeights = function setLinkHeights() {
    var linkHeights = links.map(function (link) {
      return link.scrollHeight;
    }),
        maxHeight = Math.max.apply(Math, _toConsumableArray(linkHeights));

    if (window.innerWidth > 768) {
      links.forEach(function (link) {
        link.style.height = maxHeight + 'px';
      });
    }
  };

  setLinkHeights();
  window.addEventListener('resize', function () {
    debounce(setLinkHeights, null, 300);
  });
};

/***/ }),

/***/ "./src/scripts/resources/slider-before-after.js":
/*!******************************************************!*\
  !*** ./src/scripts/resources/slider-before-after.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "beforeAfter": () => (/* binding */ beforeAfter)
/* harmony export */ });
var beforeAfter = function beforeAfter() {
  var currSlide = 0;
  var slider = document.querySelector('.before-after__slider'),
      sliderLength = slider.dataset.sliderLength,
      slide = document.querySelectorAll('.before-after__slide'),
      dot = document.querySelectorAll('.before-after__dot'),
      prev = document.querySelector('.before-after__prev'),
      next = document.querySelector('.before-after__next'),
      img = document.querySelectorAll('.before-after__image');

  var setSlide = function setSlide() {
    slide.forEach(function (slide) {
      currSlide === +slide.dataset.index ? slide.classList.add('before-after__slide--active') : slide.classList.remove('before-after__slide--active');
    });
    dot.forEach(function (dot) {
      currSlide === +dot.dataset.index ? dot.classList.add('before-after__dot--active') : dot.classList.remove('before-after__dot--active');
    });
  };

  setSlide();

  var changeSlide = function changeSlide(str) {
    if (str === 'prev') {
      currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--;
      setSlide();
    }

    ;

    if (str === 'next') {
      currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++;
      setSlide();
    }

    ;
  };

  var goToSlide = function goToSlide(val) {
    currSlide = val;
    setSlide();
  };

  prev.addEventListener('click', function () {
    changeSlide('prev');
  });
  next.addEventListener('click', function () {
    changeSlide('next');
  });
  dot.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      goToSlide(i);
    });
  });
};

/***/ }),

/***/ "./src/scripts/resources/slider-case-studies.js":
/*!******************************************************!*\
  !*** ./src/scripts/resources/slider-case-studies.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "caseStudies": () => (/* binding */ caseStudies)
/* harmony export */ });
var caseStudies = function caseStudies() {
  var currSlide = 0;
  var slider = document.querySelector('.case-studies__slider'),
      sliderLength = slider.dataset.sliderLength,
      slide = document.querySelectorAll('.case-studies__slide'),
      dot = document.querySelectorAll('.case-studies__dot'),
      prev = document.querySelector('.case-studies__prev'),
      next = document.querySelector('.case-studies__next'),
      img = document.querySelectorAll('.case-studies__image');

  var setSlide = function setSlide() {
    slide.forEach(function (slide) {
      currSlide === +slide.dataset.index ? slide.classList.add('case-studies__slide--active') : slide.classList.remove('case-studies__slide--active');
    });
    dot.forEach(function (dot) {
      currSlide === +dot.dataset.index ? dot.classList.add('case-studies__dot--active') : dot.classList.remove('case-studies__dot--active');
    });
  };

  setSlide();

  var changeSlide = function changeSlide(str) {
    if (str === 'prev') {
      currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--;
      setSlide();
    }

    ;

    if (str === 'next') {
      currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++;
      setSlide();
    }

    ;
  };

  var goToSlide = function goToSlide(val) {
    currSlide = val;
    setSlide();
  };

  prev.addEventListener('click', function () {
    changeSlide('prev');
  });
  next.addEventListener('click', function () {
    changeSlide('next');
  });
  dot.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      goToSlide(i);
    });
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
/*!***********************************!*\
  !*** ./src/scripts/pages/sell.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_resources_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/resources-links */ "./src/scripts/resources/resources-links.js");
/* harmony import */ var _resources_slider_before_after__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/slider-before-after */ "./src/scripts/resources/slider-before-after.js");
/* harmony import */ var _resources_slider_case_studies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/slider-case-studies */ "./src/scripts/resources/slider-case-studies.js");



document.addEventListener('DOMContentLoaded', function () {
  var playButton = document.querySelector('.sell-video__play-btn'),
      videoContainer = document.querySelector('.sell-video__video-container'),
      thumbnail = document.querySelector('.sell-video__thumbnail'),
      video = document.querySelector('.sell-video__video'); // External Scripts

  (0,_resources_resources_links__WEBPACK_IMPORTED_MODULE_0__.resourcesLinks)();
  (0,_resources_slider_before_after__WEBPACK_IMPORTED_MODULE_1__.beforeAfter)();
  (0,_resources_slider_case_studies__WEBPACK_IMPORTED_MODULE_2__.caseStudies)();
  video.addEventListener('loadeddata', function () {});
  videoContainer.addEventListener('click', function () {
    video.src = video.dataset.src;
    playButton.classList.add('sell-video__play-btn--hidden');
    thumbnail.classList.add('sell-video__thumbnail--hidden');
    video.classList.add('sell-video__video--active');
  });
});
})();

/******/ })()
;