/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/slider-neighborhoods.js":
/*!*******************************************************!*\
  !*** ./src/scripts/resources/slider-neighborhoods.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderNeighborhoods": () => (/* binding */ sliderNeighborhoods)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sliderNeighborhoods = function sliderNeighborhoods() {
  var slides = Array.from(document.querySelectorAll('.slider-neighborhoods__slide')),
      contentWrapper = Array.from(document.querySelectorAll('.slider-neighborhoods__content-wrapper')),
      content = Array.from(document.querySelectorAll('.slider-neighborhoods__content')),
      maxHeight = Math.max.apply(Math, _toConsumableArray(content.map(function (el) {
    return el.clientHeight;
  })));
  var currContent = 0; // 0. Build new array of slide objects

  var slidesArr = slides.map(function (el, i) {
    return {
      position: i,
      active: false,
      elem: el
    };
  }); // 1. Set/Layout slides

  var setSlide = function setSlide() {
    slidesArr.forEach(function (el) {
      el.elem.style.transform = "translate3d(".concat(el.elem.clientWidth * el.position - el.elem.clientWidth - el.elem.clientWidth / 2, "px, 0, 0)");

      if (el.elem.clientWidth * el.position - el.elem.clientWidth / 2 < el.elem.clientWidth * 5 && el.elem.clientWidth * el.position - el.elem.clientWidth / 2 > el.elem.clientWidth * -1) {
        el.elem.classList.add('slider-neighborhoods__slide--active');
      } else {
        el.elem.classList.remove('slider-neighborhoods__slide--active');
      }

      if (el.elem.clientWidth * el.position - el.elem.clientWidth / 2 === el.elem.clientWidth * 1.5) {
        el.elem.classList.add('slider-neighborhoods__slide--curr');
      } else {
        el.elem.classList.remove('slider-neighborhoods__slide--curr');
      }
    });
  };

  setSlide(); // 2. function to move slides (one for move left, one for move right)

  var changeSlide = function changeSlide(i) {
    var mod = function mod(n, m) {
      return (n % m + m) % m;
    };

    console.log(i, 'index');
    slidesArr.forEach(function (el) {
      var newTranslate = mod(el.elem.clientWidth * (el.position + 1) - el.elem.clientWidth * (i - 1), el.elem.clientWidth * slidesArr.length);
      el.elem.style.transform = "translate3d(".concat(newTranslate - el.elem.clientWidth - el.elem.clientWidth / 2, "px, 0, 0)");

      if (newTranslate - el.elem.clientWidth - el.elem.clientWidth / 2 < el.elem.clientWidth * 5 - el.elem.clientWidth / 2 && newTranslate - el.elem.clientWidth - el.elem.clientWidth / 2 > el.elem.clientWidth * -1.5) {
        el.elem.classList.add('slider-neighborhoods__slide--active');
      } else {
        el.elem.classList.remove('slider-neighborhoods__slide--active');
      }

      if (newTranslate - el.elem.clientWidth - el.elem.clientWidth / 2 === el.elem.clientWidth / 2) {
        el.elem.classList.add('slider-neighborhoods__slide--curr');
      } else {
        el.elem.classList.remove('slider-neighborhoods__slide--curr');
      }
    });
  }; // 3. make sure we can transition the move
  // 4. z-index for non-visible slides
  // 5. set active class


  contentWrapper.map(function (el) {
    return el.style.height = "".concat(maxHeight / 16, "rem");
  });

  var changeContent = function changeContent(i) {
    currContent = i;
    contentWrapper.forEach(function (el) {
      +el.dataset.index === i ? el.classList.add('slider-neighborhoods__content-wrapper--active') : el.classList.remove('slider-neighborhoods__content-wrapper--active');
    });
  };

  changeContent(2); // 6. Add event listener to all slides

  document.querySelectorAll('.slider-neighborhoods__slide').forEach(function (el, i) {
    el.addEventListener('click', function () {
      changeSlide(i);
      changeContent(i);
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
/*!********************************************!*\
  !*** ./src/scripts/pages/neighborhoods.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_slider_neighborhoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/slider-neighborhoods */ "./src/scripts/resources/slider-neighborhoods.js");

document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_slider_neighborhoods__WEBPACK_IMPORTED_MODULE_0__.sliderNeighborhoods)();
});
})();

/******/ })()
;