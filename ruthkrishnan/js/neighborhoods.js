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
      slideWrapper = document.querySelector('.slider-neighborhoods__track'),
      contentWrapper = Array.from(document.querySelectorAll('.slider-neighborhoods__content-wrapper')),
      contentColumn = document.querySelector('.slider-neighborhoods__content-column'),
      content = Array.from(document.querySelectorAll('.slider-neighborhoods__content')),
      iconArr = document.querySelectorAll('.map-neighborhoods__icon-neighborhood'),
      maxHeight = Math.max.apply(Math, _toConsumableArray(content.map(function (el) {
    return el.clientHeight;
  })));
  var debounceLastTimeout = null; // * Build slide array of objects *

  var slidesArr = slides.map(function (el, i) {
    return {
      name: el.dataset.name,
      position: i,
      neighborhood: el.dataset.neighborhood,
      elem: el,
      mapinfo: JSON.parse(el.dataset.mapinfo)
    };
  }); // * move slides *

  var changeSlide = function changeSlide(el, pos) {
    slideWrapper.style.transform = "translate3d(".concat(el.clientWidth * -pos - 16, "px, 0, 0)");
    slidesArr.forEach(function (slide) {
      if (slide.position === pos) {
        slide.elem.classList.add('slider-neighborhoods__slide--curr');
      } else {
        slide.elem.classList.remove('slider-neighborhoods__slide--curr');
      }
    });
  }; // * set the correct slide active on first load *


  changeSlide(slidesArr[0].elem, 0); // * set height of column to be the height of largest content *

  contentColumn.style.height = "".concat(maxHeight / 16, "rem"); // * change the active content slide by adding active class *

  var changeContent = function changeContent(i) {
    contentWrapper.forEach(function (el) {
      +el.dataset.index === i ? el.classList.add('slider-neighborhoods__content-wrapper--active') : el.classList.remove('slider-neighborhoods__content-wrapper--active');
    });
  }; // * set the correct content active on first load *


  changeContent(0); // * Add event listener to all slides *

  slidesArr.forEach(function (el, i) {
    el.elem.addEventListener('click', function () {
      changeSlide(el.elem, el.position);
      changeContent(el.position);
    });
  }); // * change content and slide when neigborhood in map clicked *

  var mapSelectNeighborhood = function mapSelectNeighborhood(targetEl) {
    iconArr.forEach(function (icon) {
      return icon.classList.contains('map-neighborhoods__icon-neighborhood--active') ? icon.classList.remove('map-neighborhoods__icon-neighborhood--active') : null;
    });
    slidesArr.forEach(function (el) {
      if (el.neighborhood === targetEl.dataset.name) {
        changeSlide(el.elem, el.position);
        changeContent(el.position);
        targetEl.classList.add('map-neighborhoods__icon-neighborhood--active');
      }

      ;
    });
  };

  var openTooltip = function openTooltip(event, el) {
    var targetEl = slidesArr.find(function (elem) {
      return elem.neighborhood === el.dataset.name;
    }),
        tooltipContainer = document.querySelector('.map-neighborhoods__tooltip'),
        tooltipContent = document.getElementById('tooltip-content'),
        closeContainer = document.getElementById('tooltip-close');
    var mapContent = ''; // add tooltip information

    mapContent += "<div class='map-neighborhoods__tooltip-title'>".concat(targetEl.name, "</div>");

    if (targetEl.mapinfo) {
      if (targetEl.mapinfo.information) {
        targetEl.mapinfo.information.forEach(function (info) {
          mapContent += "<div class='map-neighborhoods__tooltip-info'>".concat(info.text, "</div>");
        });
      }
    } // append tooltip information


    tooltipContent.innerHTML = mapContent; // show tooltip info window

    tooltipContainer.style.opacity = 1; // keep info window on screen (no overflow)

    if (event.clientY < tooltipContainer.clientHeight + 32) {
      tooltipContainer.style.top = "".concat(event.pageY, "px");
    } else {
      tooltipContainer.style.top = "".concat(event.pageY - tooltipContainer.clientHeight - 5, "px");
    }

    if (event.clientX < tooltipContainer.clientWidth / 2 + 32) {
      tooltipContainer.style.left = "".concat(event.pageX + 16, "px");
    } else if (window.innerWidth - event.pageX < tooltipContainer.clientWidth / 2 + 32) {
      tooltipContainer.style.left = "".concat(event.pageX - tooltipContainer.clientWidth, "px");
    } else {
      tooltipContainer.style.left = "".concat(event.pageX - tooltipContainer.clientWidth / 2, "px");
    } // close tooltip


    closeContainer.addEventListener('click', function () {
      tooltipContainer.style.opacity = 0;
    });
  }; // * add event listener to all map neighborhoods *


  iconArr.forEach(function (el) {
    return el.addEventListener('click', function (event) {
      console.log('hello');
      mapSelectNeighborhood(el);
      openTooltip(event, el);
    });
  }); // debounce function

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
  }; // resets the slide transform


  var resetSlide = function resetSlide() {
    var currElem = document.querySelector('.slider-neighborhoods__slide--curr'),
        currSlide = slidesArr.find(function (el) {
      return el.name === currElem.dataset.name;
    });
    changeSlide(currSlide.elem, currSlide.position);
  }; // watch screen resize to reset slide transform


  window.addEventListener('resize', function () {
    debounce(resetSlide, null, 500);
  }); // go to the next slide

  var toNextSlide = function toNextSlide() {
    var currElem = document.querySelector('.slider-neighborhoods__slide--curr'),
        currSlide = slidesArr.find(function (el) {
      return el.name === currElem.dataset.name;
    }),
        nextSlide = slidesArr.find(function (el) {
      return el.position === currSlide.position + 1;
    });

    if (nextSlide) {
      changeSlide(nextSlide.elem, nextSlide.position);
      changeContent(nextSlide.position);
    }
  }; // go to the previous slide


  var toPrevSlide = function toPrevSlide() {
    var currElem = document.querySelector('.slider-neighborhoods__slide--curr'),
        currSlide = slidesArr.find(function (el) {
      return el.name === currElem.dataset.name;
    }),
        prevSlide = slidesArr.find(function (el) {
      return el.position === currSlide.position - 1;
    });

    if (prevSlide) {
      changeSlide(prevSlide.elem, prevSlide.position);
      changeContent(prevSlide.position);
    }
  };

  var swipedir,
      startX,
      distX,
      threshold = 1,
      elapsedTime,
      startTime;

  var handleSwipe = function handleSwipe(swipedir) {
    if (swipedir === 'left') {
      // debounce(toNextSlide, null, 500);
      toNextSlide();
    }

    if (swipedir === 'right') {
      // debounce(toPrevSlide, null, 500);
      toPrevSlide();
    }
  };

  var sliderContainer = document.getElementById('slider-container');
  sliderContainer.addEventListener('touchstart', function (e) {
    var touchObj = e.changedTouches[0];
    swipedir = 'none';
    startX = touchObj.pageX;
    startTime = new Date().getTime();
  });
  sliderContainer.addEventListener('touchend', function (e) {
    var touchObj = e.changedTouches[0];
    distX = touchObj.pageX - startX;
    elapsedTime = new Date().getTimeDF - startTime;

    if (Math.abs(distX) >= threshold) {
      swipedir = distX < 0 ? 'left' : 'right';
    }

    handleSwipe(swipedir);
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