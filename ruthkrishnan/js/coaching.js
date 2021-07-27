/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/about-ruth-krishnan.js":
/*!******************************************************!*\
  !*** ./src/scripts/resources/about-ruth-krishnan.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutRuth": () => (/* binding */ aboutRuth)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var aboutRuth = function aboutRuth() {
  var navElems = Array.from(document.querySelectorAll('.about-ruth__nav-link')),
      slides = Array.from(document.querySelectorAll('.about-ruth__slide')),
      slidesContainer = document.querySelector('.about-ruth__slides');
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

  var setSliderHeight = function setSliderHeight() {
    // Set slide container height
    var slideHeights = slides.map(function (slide) {
      return slide.scrollHeight;
    });
    var maxHeight = Math.max.apply(Math, _toConsumableArray(slideHeights));
    slidesContainer.style.height = maxHeight + 'px';
  }; // Set Data Index for nav and slides. Sets first nav/slide as active


  var initSlider = function initSlider() {
    // Set dataset.index for nav items
    navElems.forEach(function (nav, i) {
      nav.dataset.index = i;
    }); // Set dataset.index for slide items

    slides.forEach(function (slide, i) {
      slide.dataset.index = i;
    });
    setSliderHeight();
  };

  initSlider(); // Set Color Box height

  var setBgHeight = function setBgHeight() {
    var section = document.querySelector('.about-ruth'),
        title = document.querySelector('.about-ruth__title'),
        image = document.querySelector('.about-ruth__image-container'),
        background = document.querySelector('.about-ruth__color-box');

    if (window.innerWidth > 880) {
      background.style.height = "".concat(section.offsetHeight - title.offsetHeight, "px");
    } else {
      background.style.height = "".concat(section.offsetHeight - image.offsetHeight * 0.75, "px");
    }
  };

  setBgHeight();

  var setActive = function setActive(index) {
    navElems.forEach(function (nav) {
      +nav.dataset.index === index ? nav.classList.add('about-ruth__nav-link--active') : nav.classList.remove('about-ruth__nav-link--active');
    });
    slides.forEach(function (slide) {
      +slide.dataset.index === index ? slide.classList.add('about-ruth__slide--active') : slide.classList.remove('about-ruth__slide--active');
    });
  };

  setActive(0);
  navElems.forEach(function (nav) {
    nav.addEventListener('click', function () {
      setActive(+nav.dataset.index);
    });
  });

  var resetHeights = function resetHeights() {
    setSliderHeight();
    setBgHeight();
  };

  window.addEventListener('resize', function () {
    debounce(resetHeights, null, 300);
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
/*!***************************************!*\
  !*** ./src/scripts/pages/coaching.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_about_ruth_krishnan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/about-ruth-krishnan */ "./src/scripts/resources/about-ruth-krishnan.js");

document.addEventListener('DOMContentLoaded', function () {
  // external scripts
  (0,_resources_about_ruth_krishnan__WEBPACK_IMPORTED_MODULE_0__.aboutRuth)();
});
})();

/******/ })()
;