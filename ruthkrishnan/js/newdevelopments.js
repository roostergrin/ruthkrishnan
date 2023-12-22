/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/gmap-development.js":
/*!***************************************************!*\
  !*** ./src/scripts/resources/gmap-development.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMap": () => (/* binding */ setMap)
/* harmony export */ });
/* harmony import */ var _mapStyles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapStyles.json */ "./src/scripts/resources/mapStyles.json");

var setMap = function setMap(category) {
  var geocoder = new google.maps.Geocoder();
  var developments = document.querySelectorAll(".page-new-developments__development-title-address--".concat(category));
  var openWindow = null;
  var map = new google.maps.Map(document.getElementById('gmapdev'), {
    center: {
      lat: 37.7766805,
      lng: -122.4508183
    },
    zoom: 13,
    fullscreenControl: false,
    styles: _mapStyles_json__WEBPACK_IMPORTED_MODULE_0__
  });
  developments.forEach(function (development, i) {
    if (development.dataset.address) {
      geocoder.geocode({
        address: development.dataset.address
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          var infoTitle = development.dataset.title;
          var infoAddress = results[0].formatted_address.slice(0, -5);
          var infoSlug = development.dataset.slug;
          var content = "\n          <h4 style=\"font-family: 'Avenir Next'; line-height: 1.3333; margin-bottom: 5px; letter-spacing: .5px; font-size: 18px; font-weight: 700\">".concat(infoTitle, "</h4>\n          <p style=\"font-family: 'Avenir Next'; margin-bottom: 1rem;\">").concat(infoAddress, "</p>\n          <a href='https://ruthkrishnan.com/new-developments/").concat(infoSlug, "' style=\"color: #AF5B5B; font-family: 'Avenir Next'; font-weight: 700\">View property</a>\n          ");
          var infoWindow = new google.maps.InfoWindow({
            content: content
          });
          var marker = new google.maps.Marker({
            position: {
              lat: lat,
              lng: lng
            },
            map: map
          });
          marker.addListener('click', function () {
            if (openWindow === infoWindow) {
              openWindow.close();
              openWindow = null;
            } else if (openWindow) {
              openWindow.close();
              infoWindow.open(map, marker);
              openWindow = infoWindow;
            } else {
              infoWindow.open(map, marker);
              openWindow = infoWindow;
            }
          });
        }
      });
    }
  });
};

/***/ }),

/***/ "./src/scripts/resources/slider-modal-video.js":
/*!*****************************************************!*\
  !*** ./src/scripts/resources/slider-modal-video.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderModalVideo": () => (/* binding */ sliderModalVideo)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sliderModalVideo = function sliderModalVideo() {
  document.addEventListener('DOMContentLoaded', function () {
    // const playButton = document.querySelector('.talks-intro__play-btn'),
    //       thumbnail = document.querySelector('.talks-intro__thumbnail'),
    //       video = document.querySelector('.talks-intro__video'),
    //       videoContainer = document.querySelector('.talks-intro__video-container');
    //       videoContainer.addEventListener('click', () => {
    //         video.src = video.dataset.src;
    //         playButton.classList.add('talks-intro__play-btn--hidden');
    //         thumbnail.classList.add('talks-intro__thumbnail--hidden');
    //         video.classList.add('talks-intro__video--active');
    //       })
    // Talks Video Slider -----------------------------------------------
    var slidesData = Array.from(document.querySelectorAll('.slider-modal-video__slide')),
        slidesContainer = document.querySelector('.slider-modal-video__slides'),
        prevArrow = document.querySelector('.slider-modal-video__prev'),
        nextArrow = document.querySelector('.slider-modal-video__next'),
        indicatorsContainer = document.querySelector('.slider-modal-video__indicators'),
        indicators = Array.from(document.querySelectorAll('.slider-modal-video__dot')),
        playBtns = Array.from(document.querySelectorAll('.slider-modal-video__slide-play-btn'));
    var slidesArr = [],
        prevSlides = [],
        currSlides = [],
        nextSlides = [],
        indicatorActive = 0,
        debounceLastTimeout = null; // clear Slides Data

    slidesContainer.innerHTML = '';

    var createSlides = function createSlides() {
      // create slides Array
      slidesArr = slidesData.map(function (slide, i) {
        return {
          index: i,
          el: slide,
          video: slide.dataset.video
        };
      }); // clone slides

      if (slidesArr.length === 4 && window.innerWidth > 768) {
        slidesArr.forEach(function (slide, i) {
          slidesArr.push({
            index: i + 4,
            el: slide.el.cloneNode(true),
            video: slide.video
          });
        });
      } else if (slidesArr.length === 2 && window.innerWidth < 769) {
        slidesArr.forEach(function (slide, i) {
          slidesArr.push({
            index: i + 2,
            el: slide.el.cloneNode(true),
            video: slide.video
          });
        });
      }
    };

    createSlides(); // remove indicators

    var showIndicators = function showIndicators() {
      if (slidesArr.length < 4 && window.innerWidth > 768 || slidesArr.length < 2 && window.innerWidth < 769) {
        indicatorsContainer.classList.add('slider-modal-video__indicators--hidden');
        prevArrow.classList.add('slider-modal-video__prev--hidden');
        nextArrow.classList.add('slider-modal-video__next--hidden');
      } else {
        indicatorsContainer.classList.remove('slider-modal-video__indicators--hidden');
        prevArrow.classList.remove('slider-modal-video__prev--hidden');
        nextArrow.classList.remove('slider-modal-video__next--hidden');
      }
    };

    showIndicators();

    var appendSlides = function appendSlides() {
      slidesArr.forEach(function (slide) {
        slide.el.classList.remove('slider-modal-video__slide--prev');
        slide.el.classList.remove('slider-modal-video__slide--curr');
        slide.el.classList.remove('slider-modal-video__slide--next');
        slide.el.dataset.index = slide.index;
        slidesContainer.append(slide.el);
      });
      slidesArr = Array.from(document.querySelectorAll('.slider-modal-video__slide'));
    };

    appendSlides(); // create slide position array

    var createSlideArrays = function createSlideArrays() {
      if (window.innerWidth > 768) {
        slidesArr.forEach(function (slide, i) {
          if (i < 3) {
            currSlides.push(i);
          } else if (i === slidesArr.length - 1) {
            prevSlides.push(i);
          } else {
            nextSlides.push(i);
          }
        });
      } else {
        slidesArr.forEach(function (slide, i) {
          if (i < 1) {
            currSlides.push(i);
          } else if (i === slidesArr.length - 1) {
            prevSlides.push(i);
          } else {
            nextSlides.push(i);
          }
        });
      }
    };

    createSlideArrays(); // set slide classes and stylkes

    var setSlides = function setSlides() {
      slidesArr.forEach(function (slide) {
        if (prevSlides.includes(+slide.dataset.index)) {
          slide.classList.remove('slider-modal-video__slide--curr');
          slide.classList.remove('slider-modal-video__slide--next');
          slide.classList.add('slider-modal-video__slide--prev');
          slide.style.opacity = 0;
          slide.style.transform = 'translateX(-150%)';
        } else if (currSlides.includes(+slide.dataset.index)) {
          slide.classList.remove('slider-modal-video__slide--prev');
          slide.classList.remove('slider-modal-video__slide--next');
          slide.classList.add('slider-modal-video__slide--curr');
          slide.style.opacity = 1;

          if (slidesArr.length === 2 && window.innerWidth > 768) {
            slide.style.transform = "translateX(".concat(100 * currSlides.indexOf(+slide.dataset.index) + 50, "%)");
          } else if (slidesArr.length === 1 && window.innerWidth > 768) {
            slide.style.transform = "translateX(".concat(100 * currSlides.indexOf(+slide.dataset.index) + 100, "%)");
          } else {
            slide.style.transform = "translateX(".concat(100 * currSlides.indexOf(+slide.dataset.index), "%)");
          }
        } else {
          slide.classList.remove('slider-modal-video__slide--prev');
          slide.classList.remove('slider-modal-video__slide--curr');
          slide.classList.add('slider-modal-video__slide--next');
          slide.style.opacity = 0;
          slide.style.transform = 'translateX(300%)';
        }
      });
    };

    setSlides(); // set slide/slide container Height

    var setHeight = function setHeight() {
      var slides = Array.from(document.querySelectorAll('.slider-modal-video__slide')),
          slideHeights = slides.map(function (slide) {
        return slide.scrollHeight;
      }),
          maxHeight = Math.max.apply(Math, _toConsumableArray(slideHeights));
      slidesContainer.style.height = maxHeight + 'px';
    };

    setHeight(); // set indicator active

    var setIndicator = function setIndicator() {
      indicators.forEach(function (dot) {
        return dot.classList.remove('slider-modal-video__dot--active');
      });
      indicators[indicatorActive].classList.add('slider-modal-video__dot--active');
    };

    setIndicator(); // next slide functionality

    var toNextSlide = function toNextSlide() {
      nextSlides.push(prevSlides.pop());
      prevSlides.unshift(currSlides.shift());
      currSlides.push(nextSlides.shift());
      setSlides();
      indicatorActive < indicators.length - 1 ? indicatorActive++ : indicatorActive = 0;
      setIndicator();
    };

    nextArrow.addEventListener('click', toNextSlide); // next slide functionality

    var toPrevSlide = function toPrevSlide() {
      nextSlides.unshift(currSlides.pop());
      currSlides.unshift(prevSlides.shift());
      prevSlides.push(nextSlides.pop());
      setSlides();
      indicatorActive > 0 ? indicatorActive-- : indicatorActive = indicators.length - 1;
      setIndicator();
    };

    prevArrow.addEventListener('click', toPrevSlide); // debounce function

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

    var reset = function reset() {
      slidesContainer.innerHTML = '';
      slidesArr = [];
      prevSlides = [];
      currSlides = [];
      nextSlides = [];
      indicatorActive = 0;
      createSlides();
      appendSlides();
      slidesArr.forEach(function (slide) {
        return slide.style = null;
      });
      createSlideArrays();
      setSlides();
      setHeight();
      showIndicators();
    };

    window.addEventListener('resize', function () {
      debounce(reset, null, 500);
    });
    var slideContainers = Array.from(document.querySelectorAll('.slider-modal-video__slide-container')),
        videoModalContainer = document.querySelector('.slider-modal-video__video-modal'),
        videoModal = document.querySelector('.slider-modal-video__video'),
        modalOverlay = document.querySelector('.slider-modal-video__modal-overlay'),
        modalCloseBtn = document.querySelector('.slider-modal-video__close-btn'),
        neighborhoodLink = document.getElementById("neighborhoods_button");

    var closeModal = function closeModal() {
      videoModalContainer.classList.remove('slider-modal-video__video-modal--open');
      videoModal.src = '';
    };

    slideContainers.forEach(function (slide, i) {
      slide.addEventListener('click', function () {
        videoModalContainer.classList.add('slider-modal-video__video-modal--open');
        setTimeout(function () {
          videoModal.src = slidesArr[i].dataset.video + '?title=0&byline=0&portrait&autoplay=1';
          neighborhoodLink.href = slidesArr[i].dataset.path;
          neighborhoodLink.ariaLabel = 'learn more about ' + slidesArr[i].dataset.title + ' neighborhood';
        }, 250);
      });
    });
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    var swipedir,
        startY,
        distY,
        startX,
        distX,
        threshold = 1,
        allowedTime = 300,
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

    var sliderContainer = document.querySelector('.slider-modal-video__slides');
    sliderContainer.addEventListener('touchstart', function (e) {
      var touchObj = e.changedTouches[0];
      swipedir = 'none';
      distY = 0;
      distX = 0;
      startY = touchObj.pageY;
      startX = touchObj.pageX;
      startTime = new Date().getTime();
    });
    sliderContainer.addEventListener('touchmove', function (e) {
      e.preventDefault();
    });
    sliderContainer.addEventListener('touchend', function (e) {
      var touchObj = e.changedTouches[0];
      distY = touchObj.pageY - startY;
      distX = touchObj.pageX - startX;
      elapsedTime = new Date().getTime() - startTime;

      if (elapsedTime <= allowedTime && Math.abs(distX) > threshold && Math.abs(distY) <= 100) {
        swipedir = distX < 0 ? 'left' : 'right';
      }

      handleSwipe(swipedir);
    });
  });
};

/***/ }),

/***/ "./src/scripts/resources/mapStyles.json":
/*!**********************************************!*\
  !*** ./src/scripts/resources/mapStyles.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"color":"#af5b5b"},{"lightness":45}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#b0b0b0"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]');

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
/*!**********************************************!*\
  !*** ./src/scripts/pages/newdevelopments.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_gmap_development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/gmap-development */ "./src/scripts/resources/gmap-development.js");
/* harmony import */ var _resources_slider_modal_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/slider-modal-video */ "./src/scripts/resources/slider-modal-video.js");


document.addEventListener('DOMContentLoaded', function () {
  var allDevelopments = document.querySelectorAll('.page-new-developments__development');
  var availableNowElems = document.querySelectorAll('.page-new-developments__development--available-now');
  var comingSoonElems = document.querySelectorAll('.page-new-developments__development--coming-soon');
  var soldOutElems = document.querySelectorAll('.page-new-developments__development--sold-out');
  var filtersArr = document.querySelectorAll('.page-new-developments__filter'); // const playButton = document.querySelector('.new-developments-single-video__play-btn'),
  //       videoContainer = document.querySelector('.new-developments-single-video__video-container'),
  //       thumbnail = document.querySelector('.new-developments-single-video__thumbnail'),
  //       video = document.querySelector('.new-developments-single-video__video');
  // videoContainer.addEventListener('click', () => {
  //   video.src = video.dataset.src;
  //   playButton.classList.add('new-developments-single-video__play-btn--hidden');
  //   thumbnail.classList.add('new-developments-single-video__thumbnail--hidden');
  //   video.classList.add('new-developments-single-video__video--active');
  // })

  (0,_resources_gmap_development__WEBPACK_IMPORTED_MODULE_0__.setMap)('available-now');
  availableNowElems.forEach(function (el) {
    el.classList.add('page-new-developments__development--active');
  });
  filtersArr.forEach(function (el, i) {
    el.addEventListener('click', function () {
      (0,_resources_gmap_development__WEBPACK_IMPORTED_MODULE_0__.setMap)(el.dataset.filter);
      allDevelopments.forEach(function (elem) {
        return elem.classList.remove('page-new-developments__development--active');
      });

      if (el.dataset.filter === 'available-now') {
        availableNowElems.forEach(function (availableElem) {
          availableElem.classList.add('page-new-developments__development--active');
        });
      } else if (el.dataset.filter === 'coming-soon') {
        comingSoonElems.forEach(function (elem) {
          elem.classList.add('page-new-developments__development--active');
        });
      } else if (el.dataset.filter === 'sold-out') {
        soldOutElems.forEach(function (elem) {
          elem.classList.add('page-new-developments__development--active');
        });
      }

      if (!el.classList.contains('page-new-developments__filter--active')) {
        document.querySelector('.page-new-developments__filter--active').classList.remove('page-new-developments__filter--active');
        el.classList.add('page-new-developments__filter--active');
      }
    });
    el.addEventListener('keyup', function () {
      (0,_resources_gmap_development__WEBPACK_IMPORTED_MODULE_0__.setMap)(el.dataset.filter);
      allDevelopments.forEach(function (elem) {
        return elem.classList.remove('page-new-developments__development--active');
      });

      if (el.dataset.filter === 'available-now') {
        availableNowElems.forEach(function (availableElem) {
          availableElem.classList.add('page-new-developments__development--active');
        });
      } else if (el.dataset.filter === 'coming-soon') {
        comingSoonElems.forEach(function (elem) {
          elem.classList.add('page-new-developments__development--active');
        });
      } else if (el.dataset.filter === 'sold-out') {
        soldOutElems.forEach(function (elem) {
          elem.classList.add('page-new-developments__development--active');
        });
      }

      if (!el.classList.contains('page-new-developments__filter--active')) {
        document.querySelector('.page-new-developments__filter--active').classList.remove('page-new-developments__filter--active');
        el.classList.add('page-new-developments__filter--active');
      }
    });
  });
});
(0,_resources_slider_modal_video__WEBPACK_IMPORTED_MODULE_1__.sliderModalVideo)();
})();

/******/ })()
;