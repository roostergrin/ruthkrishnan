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
/*!**********************************!*\
  !*** ./src/scripts/pages/buy.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_resources_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/resources-links */ "./src/scripts/resources/resources-links.js");
/* harmony import */ var _resources_slider_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/slider-video */ "./src/scripts/resources/slider-video.js");


document.addEventListener('DOMContentLoaded', function () {
  var playButton = document.querySelector('.buy-welcome__play-btn'),
      thumbnail = document.querySelector('.buy-welcome__thumbnail'),
      video = document.querySelector('.buy-welcome__video'),
      videoContainer = document.querySelector('.buy-welcome__video-container'),
      testimonialPlayButton = document.querySelector('.buy-testimonial-video__play-btn'),
      testimonialThumbnail = document.querySelector('.buy-testimonial-video__thumbnail'),
      testimonialVideo = document.querySelector('.buy-testimonial-video__video'),
      testimonialVideoContainer = document.querySelector('.buy-testimonial-video__video-container');
  var debounceLastTimeout = null; // External Scripts

  (0,_resources_resources_links__WEBPACK_IMPORTED_MODULE_0__.resourcesLinks)();
  (0,_resources_slider_video__WEBPACK_IMPORTED_MODULE_1__.sliderVideo)();
  videoContainer.addEventListener('click', function () {
    video.src = video.dataset.src;
    playButton.classList.add('buy-welcome__play-btn--hidden');
    thumbnail.classList.add('buy-welcome__thumbnail--hidden');
    video.classList.add('buy-welcome__video--active');
  });
  testimonialVideoContainer.addEventListener('click', function () {
    testimonialVideo.src = testimonialVideo.dataset.src;
    testimonialPlayButton.classList.add('buy-testimonial-video__play-btn--hidden');
    testimonialThumbnail.classList.add('buy-testimonial-video__thumbnail--hidden');
    testimonialVideo.classList.add('buy-testimonial-video__video--active');
  }); // Map InfoWindow------------------------------------------------

  var postsData = Array.from(document.querySelectorAll('.buy-neighborhood__neighborhood-post')),
      slidesArr = postsData.map(function (el, i) {
    return {
      name: el.dataset.name,
      title: el.dataset.title,
      elem: el,
      mapinfo: JSON.parse(el.dataset.mapinfo),
      link: el.dataset.link,
      category: el.dataset.category
    };
  }),
      tooltipContainer = document.querySelector('.buy-neighborhood__tooltip'),
      tooltipContent = document.getElementById('tooltip-content'),
      closeContainer = document.getElementById('tooltip-close'),
      iconArr = document.querySelectorAll('.map-neighborhoods__icon-neighborhood');
  var sectionActive = false;

  var closeToolTip = function closeToolTip() {
    if (sectionActive) {
      tooltipContainer.style.opacity = 0;
      tooltipContainer.style.pointerEvents = 'none';
      iconArr.forEach(function (icon) {
        return icon.classList.remove('map-neighborhoods__icon-neighborhood--deactive');
      });
      sectionActive.classList.add('map-neighborhoods__icon-neighborhood--matched');
      sectionActive.classList.remove('map-neighborhoods__icon-neighborhood--active');
      sectionActive = false;
    }
  };

  var openTooltip = function openTooltip(event, el) {
    var targetEl = slidesArr.find(function (elem) {
      return elem.name === el.dataset.name;
    });
    var mapContent = '';

    if (!sectionActive) {
      if (targetEl) {
        // add tooltip information
        mapContent += "<div class='buy-neighborhood__tooltip-title'>".concat(targetEl.title, "</div>");

        if (targetEl.mapinfo) {
          if (targetEl.mapinfo.information) {
            targetEl.mapinfo.information.forEach(function (info) {
              mapContent += "<div class='buy-neighborhood__tooltip-info'>".concat(info.text, "</div>");
            });
          }
        }

        if (targetEl.category === 'active') {
          mapContent += "<a href='".concat(targetEl.link, "' class='buy-neighborhood__tooltip-link'>learn more</a>");
        } // append tooltip information


        tooltipContent.innerHTML = mapContent; // show tooltip info window

        tooltipContainer.style.opacity = 1;
        tooltipContainer.style.pointerEvents = 'auto'; // keep info window on screen (no overflow)

        if (event.clientY - 110 < tooltipContainer.clientHeight + 32) {
          tooltipContainer.style.top = "".concat(event.pageY, "px");
        } else {
          tooltipContainer.style.top = "".concat(event.pageY - tooltipContainer.clientHeight - 5, "px");
        }

        if (window.innerWidth < 601) {
          tooltipContainer.style.left = '50%';
          tooltipContainer.style.transform = "translateX(-50%)";
        } else if (event.clientX < tooltipContainer.clientWidth / 2 + 32) {
          tooltipContainer.style.left = "".concat(event.pageX + 16, "px");
        } else if (window.innerWidth - event.pageX < tooltipContainer.clientWidth / 2 + 32) {
          tooltipContainer.style.left = "".concat(event.pageX - tooltipContainer.clientWidth, "px");
        } else {
          tooltipContainer.style.left = "".concat(event.pageX - tooltipContainer.clientWidth / 2, "px");
        }
      }

      iconArr.forEach(function (icon) {
        if (icon.dataset.name !== el.dataset.name) {
          icon.classList.add('map-neighborhoods__icon-neighborhood--deactive');
        } else {
          icon.classList.remove('map-neighborhoods__icon-neighborhood--deactive');
          icon.classList.remove('map-neighborhoods__icon-neighborhood--matched');
        }
      });
      sectionActive = el;
      sectionActive.classList.add('map-neighborhoods__icon-neighborhood--active');
    }
  }; // * add event listener to all map neighborhoods *


  iconArr.forEach(function (el) {
    var activeEl = slidesArr.find(function (elem) {
      return elem.name === el.dataset.name;
    });

    if (activeEl) {
      el.classList.add('map-neighborhoods__icon-neighborhood--matched');
      el.addEventListener('click', function (event) {
        openTooltip(event, el);
      });
    }
  });
  closeContainer.addEventListener('click', closeToolTip); // debounce function

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
    debounce(closeToolTip, null, 200);
  });
});
})();

/******/ })()
;