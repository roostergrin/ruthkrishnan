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

/***/ }),

/***/ "./src/scripts/resources/slider-team.js":
/*!**********************************************!*\
  !*** ./src/scripts/resources/slider-team.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderTeam": () => (/* binding */ sliderTeam)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sliderTeam = function sliderTeam() {
  var memberInfoSlides = Array.from(document.querySelectorAll('.slider-team__member-slide')),
      imageSlides = Array.from(document.querySelectorAll('.slider-team__images-slide')),
      imagesArr = imageSlides.map(function (el) {
    return {
      position: +el.dataset.index - 1,
      elem: el
    };
  });
  var debounceLastTimeout = null; // resize background image height

  var resizeBackgroundHeight = function resizeBackgroundHeight() {
    var background = document.querySelector('.slider-team__background'),
        introSection = document.querySelector('.slider-team__intro'),
        imagesContainer = document.querySelector('.slider-team__images');
    background.style.height = "".concat(introSection.clientHeight + imagesContainer.clientHeight / 2, "px");
  };

  resizeBackgroundHeight(); // changes the active slide

  var changeImageSlide = function changeImageSlide(pos) {
    var slideWrapper = document.querySelector('.slider-team__images');
    slideWrapper.style.transform = "translate3d(".concat(imagesArr[pos].elem.clientWidth * -pos - 16, "px, 0, 0)");
    imagesArr.forEach(function (slide) {
      if (slide.position === pos) {
        slide.elem.classList.add('slider-team__images-slide--active');
      } else {
        slide.elem.classList.remove('slider-team__images-slide--active');
      }
    });
  };

  changeImageSlide(0); // changes the active info slide

  var changeInfoSlide = function changeInfoSlide(pos) {
    memberInfoSlides.forEach(function (slide) {
      if (+slide.dataset.index === pos + 1) {
        slide.classList.add('slider-team__member-slide--active');
      } else {
        slide.classList.remove('slider-team__member-slide--active');
      }
    });
  };

  changeInfoSlide(0); // set member info sections height to tallest element

  var setInfoHeight = function setInfoHeight() {
    var memberInfoContainer = document.querySelector('.slider-team__members-container');
    var memberHeights = memberInfoSlides.map(function (slide) {
      return slide.scrollHeight;
    });
    var maxHeight = Math.max.apply(Math, _toConsumableArray(memberHeights));
    memberInfoContainer.style.height = maxHeight + 'px';
  };

  setInfoHeight(); // debounce function

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
  }; // add click events to each image slide element


  imagesArr.forEach(function (slide) {
    slide.elem.addEventListener('click', function () {
      changeImageSlide(slide.position);
      changeInfoSlide(slide.position);
    });
  });

  var resetImageSlide = function resetImageSlide() {
    var currSlide = document.querySelector('.slider-team__images-slide--active');
    changeImageSlide(+currSlide.dataset.index - 1);
  };

  var resets = function resets() {
    resizeBackgroundHeight();
    setInfoHeight();
    resetImageSlide();
  }; // window resize event listener 


  window.addEventListener('resize', function () {
    debounce(resets, null, 300);
  }); // go to the next slide

  var toNextSlide = function toNextSlide() {
    var currSlide = document.querySelector('.slider-team__images-slide--active'),
        nextSlide = imagesArr.find(function (el) {
      return el.position === +currSlide.dataset.index;
    });
    console.log(currSlide);

    if (nextSlide) {
      changeImageSlide(nextSlide.position);
      changeInfoSlide(nextSlide.position);
    }
  }; // go to the previous slide


  var toPrevSlide = function toPrevSlide() {
    var currSlide = document.querySelector('.slider-team__images-slide--active'),
        prevSlide = imagesArr.find(function (el) {
      return el.position === currSlide.dataset.index - 2;
    });

    if (prevSlide) {
      changeImageSlide(prevSlide.position);
      changeInfoSlide(prevSlide.position);
    }
  }; // Swipe Functionality


  var swipedir,
      startX,
      distX,
      threshold = 1,
      elapsedTime,
      startTime;

  var handleSwipe = function handleSwipe(swipedir) {
    if (swipedir === 'left') {
      toNextSlide();
    }

    if (swipedir === 'right') {
      toPrevSlide();
    }
  };

  var sliderContainer = document.querySelector('.slider-team__images');
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
/*!************************************!*\
  !*** ./src/scripts/pages/about.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_slider_team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/slider-team */ "./src/scripts/resources/slider-team.js");
/* harmony import */ var _resources_about_ruth_krishnan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/about-ruth-krishnan */ "./src/scripts/resources/about-ruth-krishnan.js");


document.addEventListener('DOMContentLoaded', function () {
  var playButton = document.querySelector('.about-video__play-btn'),
      thumbnail = document.querySelector('.about-video__thumbnail'),
      video = document.querySelector('.about-video__video'); // external scripts

  (0,_resources_slider_team__WEBPACK_IMPORTED_MODULE_0__.sliderTeam)();
  (0,_resources_about_ruth_krishnan__WEBPACK_IMPORTED_MODULE_1__.aboutRuth)();
  video.addEventListener('loadeddata', function () {});
  playButton.addEventListener('click', function () {
    video.src = video.dataset.src;
    playButton.classList.add('about-video__play-btn--hidden');
    thumbnail.classList.add('about-video__thumbnail--hidden');
    video.classList.add('about-video__video--active');
  });
});
})();

/******/ })()
;