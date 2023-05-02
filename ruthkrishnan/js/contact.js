/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/slider-video.js":
/*!***********************************************!*\
  !*** ./src/scripts/resources/slider-video.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderVideo": () => (/* binding */ sliderVideo)
/* harmony export */ });
var sliderVideo = function sliderVideo() {
  // Play Video ------------------------------------------------------------------------
  var videoSlides = Array.from(document.querySelectorAll(".slider-video__slide")),
      slideThumbnails = Array.from(document.querySelectorAll(".slider-video__slide-image")),
      playButtons = Array.from(document.querySelectorAll(".slider-video__slide-play-btn")),
      prevBtn = document.querySelector(".slider-video__prev"),
      nextBtn = document.querySelector(".slider-video__next"),
      dots = Array.from(document.querySelectorAll(".slider-video__dot"));
  var currSlide = 0;

  var resetSlides = function resetSlides() {
    videoSlides.forEach(function (slide) {
      var video = slide.querySelector(".slider-video__video"),
          thumbnail = slide.querySelector(".slider-video__slide-image"),
          playBtn = slide.querySelector(".slider-video__slide-play-btn");

      if (video.src) {
        video.src = "";
      }

      thumbnail.classList.remove("slider-video__slide-image--hidden");
      playBtn.classList.remove("slider-video__slide-play-btn--hidden");
    });
  };

  var setSlideActive = function setSlideActive() {
    // add/remove classes from slides
    videoSlides.forEach(function (slide) {
      // "+" converts to a number type
      if (+slide.dataset.index === currSlide) {
        slide.classList.add("slider-video__slide--active");
        slide.classList.remove("slider-video__slide--hidden");
      } else {
        slide.classList.remove("slider-video__slide--active");
        slide.classList.add("slider-video__slide--hidden");
      }
    }); // add/remove classes from indicators

    dots.forEach(function (dot) {
      console.log("dot", dot.dataset.target);

      if (+dot.dataset.target === currSlide) {
        dot.classList.add("slider-video__dot--active");
        dot.classList.remove("slider-video__dot--hidden");
      } else {
        dot.classList.add("slider-video__dot--hidden");
        dot.classList.remove("slider-video__dot--active");
      }
    });
    resetSlides();
  };

  setSlideActive();

  var handleSlideChange = function handleSlideChange(target) {
    if (target === "prev") {
      currSlide !== 0 ? currSlide-- : currSlide = videoSlides.length - 1;
    } else if (target === "next") {
      currSlide !== videoSlides.length - 1 ? currSlide++ : currSlide = 0;
    } else if (typeof target === "number") {
      currSlide = target;
    }

    setSlideActive();
  };

  prevBtn.addEventListener("click", function () {
    handleSlideChange("prev");
  });
  nextBtn.addEventListener("click", function () {
    handleSlideChange("next");
  });
  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      handleSlideChange(+dot.dataset.target);
    });
  });
  slideThumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function (event) {
      var video = thumbnail.parentElement.querySelector(".slider-video__video"),
          playBtn = thumbnail.parentElement.querySelector(".slider-video__slide-play-btn");
      video.src = video.dataset.src;
      thumbnail.classList.add("slider-video__slide-image--hidden");
      playBtn.classList.add("slider-video__slide-play-btn--hidden");
    });
  });
  playButtons.forEach(function (btn) {
    console.log("btn", btn);
    btn.addEventListener("click", function (event) {
      var video = btn.parentElement.querySelector(".slider-video__video"),
          thumbnail = btn.parentElement.querySelector(".slider-video__slide-image");
      video.src = video.dataset.src;
      thumbnail.classList.add("slider-video__slide-image--hidden");
      btn.classList.add("slider-video__slide-play-btn--hidden");
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
/*!**************************************!*\
  !*** ./src/scripts/pages/contact.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_slider_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/slider-video */ "./src/scripts/resources/slider-video.js");

document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_slider_video__WEBPACK_IMPORTED_MODULE_0__.sliderVideo)();
});
})();

/******/ })()
;