/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/neighborhood-charts.js":
/*!******************************************************!*\
  !*** ./src/scripts/resources/neighborhood-charts.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neighborhoodCharts": () => (/* binding */ neighborhoodCharts)
/* harmony export */ });
var neighborhoodCharts = function neighborhoodCharts() {
  var data = Array.from(document.querySelectorAll('.single-neighborhoods-content__data')); // const condos = JSON.parse()

  var condo = JSON.parse(data[0].dataset.neighborhoodhjicondo);
  var single = JSON.parse(data[0].dataset.neighborhoodhjisingle);
  console.log('single:');
  console.log(single);
  console.log('condo:');
  console.log(condo);
  var ctx = document.getElementById("myChart");
  var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "2015",
        data: [10, 8, 6, 5, 12, 8, 16, 17, 6, 7, 6, 10]
      }]
    }
  });
};

/***/ }),

/***/ "./src/scripts/resources/photo-gallery.js":
/*!************************************************!*\
  !*** ./src/scripts/resources/photo-gallery.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "photoGallery": () => (/* binding */ photoGallery)
/* harmony export */ });
var photoGallery = function photoGallery() {
  var currSlide = 0,
      paginationContent;
  var slider = document.querySelector('.photo-gallery__slider'),
      sliderLength = slider.dataset.sliderLength,
      slide = document.querySelectorAll('.photo-gallery__slide'),
      dot = document.querySelectorAll('.photo-gallery__dot'),
      numpagination = document.querySelector('.photo-gallery__numpagination'),
      prev = document.querySelector('.photo-gallery__prev'),
      next = document.querySelector('.photo-gallery__next'),
      img = document.querySelectorAll('.photo-gallery__image');

  var setSlide = function setSlide() {
    slide.forEach(function (slide) {
      currSlide === +slide.dataset.index ? slide.classList.add('photo-gallery__slide--active') : slide.classList.remove('photo-gallery__slide--active');
    });

    if (numpagination) {
      paginationContent = "".concat(currSlide + 1, " / ").concat(+numpagination.dataset.slides);
      numpagination.innerHTML = paginationContent;
    } else {
      dot.forEach(function (dot) {
        currSlide === +dot.dataset.index ? dot.classList.add('photo-gallery__dot--active') : dot.classList.remove('photo-gallery__dot--active');
      });
    }
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
/*!***************************************************!*\
  !*** ./src/scripts/pages/single-neighborhoods.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_photo_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/photo-gallery */ "./src/scripts/resources/photo-gallery.js");
/* harmony import */ var _resources_neighborhood_charts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/neighborhood-charts.js */ "./src/scripts/resources/neighborhood-charts.js");


document.addEventListener('DOMContentLoaded', function () {
  // Imported Scripts ------------------------
  // Photo Gallery Functionality
  (0,_resources_photo_gallery__WEBPACK_IMPORTED_MODULE_0__.photoGallery)();
  (0,_resources_neighborhood_charts_js__WEBPACK_IMPORTED_MODULE_1__.neighborhoodCharts)(); // END Imported Scripts -------------------

  var playButton = document.querySelector('.single-neighborhoods-video__play-btn'),
      thumbnail = document.querySelector('.single-neighborhoods-video__thumbnail'),
      video = document.querySelector('.single-neighborhoods-video__video'),
      videoContainer = document.querySelector('.single-neighborhoods-video__video-container');
  videoContainer.addEventListener('click', function () {
    video.src = video.dataset.src;
    playButton.classList.add('single-neighborhoods-video__play-btn--hidden');
    thumbnail.classList.add('single-neighborhoods-video__thumbnail--hidden');
    video.classList.add('single-neighborhoods-video__video--active');
  });
});
})();

/******/ })()
;