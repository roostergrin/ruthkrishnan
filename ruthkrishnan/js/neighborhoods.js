/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/USDFormat.js":
/*!********************************************!*\
  !*** ./src/scripts/resources/USDFormat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USDFormatterDec": () => (/* binding */ USDFormatterDec),
/* harmony export */   "USDFormatterNoDec": () => (/* binding */ USDFormatterNoDec)
/* harmony export */ });
var USDFormatterNoDec = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0,
  // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)

});
var USDFormatterDec = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD" // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)

});

/***/ }),

/***/ "./src/scripts/resources/map-icon.js":
/*!*******************************************!*\
  !*** ./src/scripts/resources/map-icon.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapZoom": () => (/* binding */ mapZoom)
/* harmony export */ });
var mapZoom = function mapZoom() {
  var zoomInBtn = document.getElementById("map-neighborhoods__zoom-in"),
      zoomOutBtn = document.getElementById("map-neighborhoods__zoom-out"),
      wrapper = document.getElementById("map-neighborhoods__wrapper"),
      container = Array.from(document.getElementsByClassName("map-neighborhoods__icon"))[0],
      panScrollStartX = null,
      panScrollStartY = null,
      panActive = false,
      panStartX = null,
      panStartY = null;
  wrapper.addEventListener("mousedown", handlePanScrollMouseDown);
  window.addEventListener("mousemove", handlePanScrollMouseMove);
  window.addEventListener("mouseup", handlePanScrollMouseUp);
  zoomInBtn.addEventListener("click", function () {
    return handleZoom("increase");
  });
  zoomOutBtn.addEventListener("click", function () {
    return handleZoom("decrease");
  });

  function handlePanScrollMouseDown(event) {
    console.log('handlePanScrollMouseDown', event);
    container.style.cursor = "grabbing";
    panScrollStartX = wrapper.scrollLeft;
    panScrollStartY = wrapper.scrollTop;
    panStartX = event.clientX;
    panStartY = event.clientY;
    panActive = true;
  }

  ;

  function handlePanScrollMouseMove(event) {
    console.log('handlePanScrollMouseMove', panActive);
    event.preventDefault();

    if (panActive) {
      var currPosX = event.clientX;
      var currPosY = event.clientY;
      var top = panScrollStartY + (panStartY - currPosY);
      var left = panScrollStartX + (panStartX - currPosX);
      wrapper.scrollTop = top;
      wrapper.scrollLeft = left;
    }
  }

  ;

  function handlePanScrollMouseUp(event) {
    console.log('handlePanScrollMouseUp', event);
    container.style.cursor = "grab";
    panActive = false;
  }

  ;

  function handleZoom(control) {
    if (control === "increase") {
      var width = +container.clientWidth;
      if (width < 1500) container.style.width = "".concat(width + 150, "px");
    } else {
      // TODO: on mobile screens reset the width
      var _width = +container.clientWidth; // if ( width > 550) 


      container.style.width = "".concat(_width - 150, "px");
    }
  }

  ;
};

/***/ }),

/***/ "./src/scripts/resources/modal-video-link.js":
/*!***************************************************!*\
  !*** ./src/scripts/resources/modal-video-link.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalVideoLink": () => (/* binding */ modalVideoLink)
/* harmony export */ });
var modalVideoLink = function modalVideoLink() {
  var welcomeVideoArray = document.querySelectorAll('.modal-video-link__video'),
      videoModalArray = document.querySelectorAll('.modal-video-link__video-modal'),
      playBtnArray = document.querySelectorAll('.modal-video-link__video-tour'),
      closeBtnArray = document.querySelectorAll('.modal-video-link__close-btn'),
      overlayArray = document.querySelectorAll('.modal-video-link__modal-overlay');
  var debounceLastTimeout = null;

  var buildMap = function buildMap(keys, values) {
    var map = new Map();

    for (var i = 0; i < keys.length; i++) {
      map.set(keys[i].dataset.post, values[i]);
    }

    ;
    return map;
  };

  var videoBtnArray = buildMap(playBtnArray, welcomeVideoArray);
  var modalArray = buildMap(playBtnArray, videoModalArray);

  var openModal = function openModal(event) {
    modalArray.get(event.srcElement.dataset.post).classList.add('modal-video-link__video-modal--open');
    videoBtnArray.get(event.srcElement.dataset.post).src = videoBtnArray.get(event.srcElement.dataset.post).dataset.src;
  };

  var closeModal = function closeModal(event) {
    modalArray.get(event.srcElement.dataset.post).classList.remove('modal-video-link__video-modal--open');
    videoBtnArray.get(event.srcElement.dataset.post).src = '';
  };

  var resetVideoModal = function resetVideoModal(playBtn, closeBtn, overlay) {
    playBtn.removeEventListener('click', openModal);
    overlay.removeEventListener('click', closeModal);
    closeBtn.removeEventListener('click', closeModal);
  };

  var playVideo = function playVideo(playBtn, closeBtn, overlay) {
    resetVideoModal(playBtn, closeBtn, overlay);
    playBtn.addEventListener('click', openModal);
    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
  };

  for (var i = 0; i < playBtnArray.length; i++) {
    var playID = playBtnArray[i].id,
        closeID = closeBtnArray[i].id,
        overlayID = overlayArray[i].id;
    var playBtn = document.getElementById(playID),
        closeBtn = document.getElementById(closeID),
        overlay = document.getElementById(overlayID);
    ;
    playVideo(playBtn, closeBtn, overlay);
  } // debounce function


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
};

/***/ }),

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

/***/ "./src/scripts/resources/slider-neighborhoods.js":
/*!*******************************************************!*\
  !*** ./src/scripts/resources/slider-neighborhoods.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderNeighborhoods": () => (/* binding */ sliderNeighborhoods)
/* harmony export */ });
/* harmony import */ var _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./USDFormat.js */ "./src/scripts/resources/USDFormat.js");
/* harmony import */ var _resources_map_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/map-icon */ "./src/scripts/resources/map-icon.js");
/* harmony import */ var _resources_modal_video_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/modal-video-link */ "./src/scripts/resources/modal-video-link.js");



var sliderNeighborhoods = function sliderNeighborhoods() {
  (0,_resources_modal_video_link__WEBPACK_IMPORTED_MODULE_2__.modalVideoLink)();
  (0,_resources_map_icon__WEBPACK_IMPORTED_MODULE_1__.mapZoom)();
  var slides = Array.from(document.querySelectorAll(".slider-neighborhoods__slide")),
      // contents = Array.from( document.querySelectorAll(".slider-neighborhoods__content-wrapper"))
  slideWrapper = document.querySelector(".slider-neighborhoods__track"),
      contentWrapper = Array.from(document.querySelectorAll(".slider-neighborhoods__content-wrapper")),
      iconArr = document.querySelectorAll(".map-neighborhoods__icon-neighborhood"),
      tooltipContainer = document.querySelector(".map-neighborhoods__tooltip"),
      tooltipContent = document.getElementById("tooltip-content"),
      closeContainer = document.getElementById("tooltip-close"),
      nextArrow = document.getElementById("next"),
      prevArrow = document.getElementById("previous"),
      emptyState = document.getElementById("empty-state"),
      paginationIndicator = document.getElementById("pagination-indicator");
  var debounceLastTimeout = null,
      sectionActive = false; // * Build slide array of objects *

  var allSlides = contentWrapper.map(function (el, i) {
    return {
      name: el.dataset.name,
      neighborhood: el.dataset.neighborhood,
      elem: el,
      HJICondoMonthly: el.dataset.hjicondomonthly ? JSON.parse(el.dataset.hjicondomonthly) : false,
      HJISingleMonthly: el.dataset.hjisinglemonthly ? JSON.parse(el.dataset.hjisinglemonthly) : false,
      weather: el.dataset.weather,
      walkscore: el.dataset.walkscore,
      transitscore: el.dataset.transitscore,
      category: el.dataset.category
    };
  });
  allSlides.forEach(function (slide) {
    slide.elem.querySelector('[id^="transit-score-"]').innerHTML = slide.transitscore;
    slide.elem.querySelector('[id^="walk-score-"]').innerHTML = slide.walkscore; // slide.elem.querySelector('[id^="weather-score-"]').innerHTML = slide.weather

    if (slide.HJISingleMonthly) {
      if (!slide.HJISingleMonthly.result.measurements.salePrice.median || slide.HJISingleMonthly.result.measurements.salePrice.median == '0') {
        // console.log(slide.elem.querySelector('#house-display').innerHTML)
        slide.elem.querySelector('#house-display').innerHTML = "<b>no house data available for the last 6 months</b>"; // slide.elem.querySelector('#house-display').innerHTML = "no house data available for the last 6 months"
      } else {
        slide.elem.querySelector('[id^="single-median-price-display-"]').innerHTML = _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(slide.HJISingleMonthly.result.measurements.salePrice.median);
        slide.elem.querySelector('[id^="single-sq-ft-price-display-"]').innerHTML = _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterDec.format(slide.HJISingleMonthly.result.measurements.salePrice.median / slide.HJISingleMonthly.result.measurements.size.median);
      }
    }

    if (slide.HJICondoMonthly) {
      if (!slide.HJICondoMonthly.result.measurements.salePrice.median || slide.HJICondoMonthly.result.measurements.salePrice.median == '0') {
        // console.log(slide.elem.querySelector('#condo-display').innerHTML)
        slide.elem.querySelector('#condo-display').innerHTML = "<b>no condo data available for the last 6 months</b>";
      } else {
        slide.elem.querySelector('[id^="condo-median-price-display-"]').innerHTML = _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(slide.HJICondoMonthly.result.measurements.salePrice.median);
        slide.elem.querySelector('[id^="condo-sq-ft-price-display-"]').innerHTML = _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterDec.format(slide.HJICondoMonthly.result.measurements.salePrice.median / slide.HJICondoMonthly.result.measurements.size.median);
      }
    }
  }); // Update content on slide
  // run through all the slides,
  // swap the child's inner html
  // * filter and index slides *

  var slidesArr = allSlides.filter(function (slide) {
    return slide.category === "active" || slide.category === "coming-soon";
  });
  slidesArr.forEach(function (slide, i) {
    slide.position = i;
  }); // * sets slide to currently selected *

  var setSlide = function setSlide(el, pos) {
    // slideWrapper.style.transform = `translate3d(${
    //   el.clientWidth * -pos - 16
    // }px, 0, 0)`;
    slidesArr.forEach(function (slide) {
      if (slide.position === pos) {
        slide.elem.classList.add("slider-neighborhoods__slide--curr");
      } else {
        slide.elem.classList.remove("slider-neighborhoods__slide--curr");
      }
    });
    paginationIndicator.style.width = "".concat(pos / slidesArr.length * 100, "%");
    sectionActive ? closeToolTip() : null;
  }; // * set the active content slide by adding active class *


  var setContent = function setContent(i) {
    emptyState.style.opacity = 0;
    contentWrapper.forEach(function (el) {
      if (+el.dataset.index === i) {
        el.classList.add("slider-neighborhoods__content-wrapper--active"); // console.log(el)

        if (el.querySelector(".slider-neighborhoods__content-link")) {
          el.querySelector(".slider-neighborhoods__content-link").tabIndex = "0";
        }
      } else {
        el.classList.remove("slider-neighborhoods__content-wrapper--active");

        if (el.querySelector(".slider-neighborhoods__content-link")) {
          el.querySelector(".slider-neighborhoods__content-link").tabIndex = "-1";
        }
      }
    });
  }; // * set the highlight on the neighborhood map *


  var setHighlight = function setHighlight(el) {
    iconArr.forEach(function (icon) {
      if (icon.dataset.name !== el.neighborhood) {
        icon.classList.add("map-neighborhoods__icon-neighborhood--deactive");
        icon.classList.remove("map-neighborhoods__icon-neighborhood--active");
      } else {
        icon.classList.add("map-neighborhoods__icon-neighborhood--active");
        icon.classList.remove("map-neighborhoods__icon-neighborhood--deactive");
      }
    });
  }; // * set map, content, and slide when the neighborhood map icon is clicked *


  var setMapIcon = function setMapIcon(targetEl) {
    slidesArr.forEach(function (el) {
      if (el.neighborhood === targetEl.dataset.name) {
        setSlide(el.elem, el.position);
        setContent(el.position); // active map icon

        targetEl.classList.add("map-neighborhoods__icon-neighborhood--active");
      }
    });
  }; // * Add event listener to all slides *


  slidesArr.forEach(function (el, i) {
    el.elem.addEventListener("click", function () {
      setHighlight(el);
      setContent(el.position);
      setSlide(el.elem, el.position);
    });
  }); // * helper function for the neighborhood map

  var activateNeighborhoodOpacity = function activateNeighborhoodOpacity(el) {
    var activeEl = allSlides.find(function (elem) {
      return elem.neighborhood === el.dataset.name;
    });

    if (activeEl) {
      el.classList.add("map-neighborhoods__icon-neighborhood--matched");
    }
  }; // * add event listeners and activate neighborhood map opacity *


  iconArr.forEach(function (el) {
    activateNeighborhoodOpacity(el);
    el.addEventListener("click", function () {
      closeToolTip();
      setHighlight(el);
      setMapIcon(el);
    }); // el.addEventListener("mouseenter", (event) => {
    //   if (value === "single median sale price") {
    //     closeToolTip();
    //     openTooltip(event, el);
    //     tooltipContainer.style.pointerEvents = "none";
    //     closeContainer.style.display = "none";
    //   } else {
    //     tooltipContainer.style.pointerEvents = "auto";
    //     closeContainer.style.display = "block";
    //   }
    // });
  });

  var closeToolTip = function closeToolTip() {
    if (sectionActive) {
      tooltipContainer.style.opacity = 0;
      tooltipContainer.style.pointerEvents = "auto";
      sectionActive.classList.add("map-neighborhoods__icon-neighborhood--matched");
      sectionActive = false;
    }
  };

  var openTooltip = function openTooltip(event, el) {
    var targetEl = allSlides.find(function (elem) {
      return elem.neighborhood === el.dataset.name;
    });
    var mapContent = "";

    if (!sectionActive) {
      // add tooltip information
      mapContent += "<div class='map-neighborhoods__tooltip-title'>".concat(targetEl.name, "</div>"); // Create our number formatter.

      if (targetEl.HJICondoMonthly) {
        if (targetEl.HJICondoMonthly.result.measurements) {
          // console.log(targetEl.HJISingleMonthly.result);
          // console.log(targetEl.HJICondoMonthly.result);
          if (targetEl.HJISingleMonthly.result.measurements.salePrice.median != 0) {
            mapContent += "<div class='map-neighborhoods__tooltip-info'>House Median Price: ".concat(_USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(targetEl.HJISingleMonthly.result.measurements.salePrice.median), "<br> Median $/SqFt: ").concat(_USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterDec.format(targetEl.HJISingleMonthly.result.measurements.salePrice.median / targetEl.HJISingleMonthly.result.measurements.size.median), "/sf</div>");
          }

          if (targetEl.HJICondoMonthly.result.measurements.salePrice.median != 0) mapContent += "<div class='map-neighborhoods__tooltip-info'>2BR/2BA Condo Median Price: ".concat(_USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(targetEl.HJICondoMonthly.result.measurements.salePrice.median), "<br> Median $/SqFt: ").concat(_USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterDec.format(targetEl.HJICondoMonthly.result.measurements.salePrice.median / targetEl.HJICondoMonthly.result.measurements.size.median), "/sf</div>");
          mapContent += "<p style='font-size:0.75em;'>(click on neighborhood to learn more below)<p>";
        }
      } // append tooltip information


      tooltipContent.innerHTML = mapContent; // show tooltip info window

      tooltipContainer.style.opacity = 1;
      tooltipContainer.style.pointerEvents = "no"; // keep info window on screen (no overflow)

      if (event.clientY - 110 < tooltipContainer.clientHeight + 32) {
        tooltipContainer.style.top = "".concat(event.pageY, "px");
      } else {
        tooltipContainer.style.top = "".concat(event.pageY - tooltipContainer.clientHeight - 5, "px");
      }

      if (window.innerWidth < 601) {
        tooltipContainer.style.left = "50%";
        tooltipContainer.style.transform = "translateX(-50%)";
      } else if (event.clientX < tooltipContainer.clientWidth / 2 + 32) {
        tooltipContainer.style.left = "".concat(event.pageX + 16, "px");
      } else if (window.innerWidth - event.pageX < tooltipContainer.clientWidth / 2 + 32) {
        tooltipContainer.style.left = "".concat(event.pageX - tooltipContainer.clientWidth, "px");
      } else {
        tooltipContainer.style.left = "".concat(event.pageX - tooltipContainer.clientWidth / 2, "px");
      }

      iconArr.forEach(function (icon) {
        if (icon.dataset.name !== el.dataset.name) {
          icon.classList.add("map-neighborhoods__icon-neighborhood--deactive");
        } else {
          icon.classList.remove("map-neighborhoods__icon-neighborhood--deactive");
          icon.classList.remove("map-neighborhoods__icon-neighborhood--matched");
        }
      });
      sectionActive = el;
    }
  }; // go to the next slide
  //ADD LOGIC HERE TO ALSO CHANGE VIDEO TOUR BUTTON SRC???


  var toNextSlide = function toNextSlide() {
    var currElem = document.querySelector(".slider-neighborhoods__slide--curr"),
        currSlide = slidesArr.find(function (el) {
      return el.name === currElem.dataset.name;
    }),
        nextSlide = slidesArr.find(function (el) {
      return el.position === currSlide.position + 1;
    });

    if (nextSlide) {
      setHighlight(nextSlide);
      setSlide(nextSlide.elem, nextSlide.position);
      setContent(nextSlide.position);
    }
  }; // go to the previous slide


  var toPrevSlide = function toPrevSlide() {
    var currElem = document.querySelector(".slider-neighborhoods__slide--curr"),
        currSlide = slidesArr.find(function (el) {
      return el.name === currElem.dataset.name;
    }),
        prevSlide = slidesArr.find(function (el) {
      return el.position === currSlide.position - 1;
    });

    if (prevSlide) {
      setHighlight(prevSlide);
      setSlide(prevSlide.elem, prevSlide.position);
      setContent(prevSlide.position);
    }
  };

  nextArrow.addEventListener("click", function (e) {
    toNextSlide();
  });
  prevArrow.addEventListener("click", function (e) {
    toPrevSlide();
  }); // finds the min and max of condos and single
  // initializes min and max

  var minMedianSingle = allSlides[1].HJISingleMonthly.result.measurements.salePrice.median;
  var maxMedianSingle = allSlides[0].HJISingleMonthly.result.measurements.salePrice.median;
  var minMedianCondo = allSlides[0].HJICondoMonthly.result.measurements.salePrice.median;
  var maxMedianCondo = allSlides[0].HJICondoMonthly.result.measurements.salePrice.median;
  allSlides.forEach(function (slide) {
    if (slide.HJISingleMonthly.result) {
      if (slide.HJISingleMonthly.result.measurements.salePrice.median != 0) {
        if (slide.HJISingleMonthly.result.measurements.salePrice.median < minMedianSingle) minMedianSingle = slide.HJISingleMonthly.result.measurements.salePrice.median;
        if (slide.HJISingleMonthly.result.measurements.salePrice.median > maxMedianSingle) maxMedianSingle = slide.HJISingleMonthly.result.measurements.salePrice.median;
      }
    }

    if (slide.HJICondoMonthly.result) {
      if (slide.HJICondoMonthly.result.measurements.salePrice.median != 0) {
        if (slide.HJICondoMonthly.result.measurements.salePrice.median < minMedianCondo) minMedianCondo = slide.HJICondoMonthly.result.measurements.salePrice.median;
        if (slide.HJICondoMonthly.result.measurements.salePrice.median > maxMedianCondo) maxMedianCondo = slide.HJICondoMonthly.result.measurements.salePrice.median;
      }
    }
  }); // normalize data to 0-1 range

  function scaleRange(x, min, max) {
    // console.log((x - min) / (max - min))
    return (x - min) / (max - min);
  }

  var weatherPallette = ["#365060", "#196C55", "#447211", "#8954BE", "#8D3C8E", "#6C190D"];
  var weatherValues = [{
    temperature: "cold:",
    weatherGroup: [{
      fogWind: "foggy with heavy winds",
      color: "#365060"
    }, {
      fogWind: "with some fog and light winds",
      color: "#196C55"
    }]
  }, {
    temperature: "cool to moderate:",
    weatherGroup: [{
      fogWind: "some foggy and clear days, light winds",
      color: "#447211"
    }, {
      fogWind: "with some fog and light winds",
      color: "#8954BE"
    }]
  }, {
    temperature: "moderate to hot:",
    weatherGroup: [{
      fogWind: "clear skies and heavy winds",
      color: "#8D3C8E"
    }, {
      fogWind: "clear skies and light winds",
      color: "#6C190D"
    }]
  }];

  function colorWeather(weather, weatherPallette) {
    switch (weather) {
      case "cold & foggy with heavy winds":
        return weatherPallette[0];

      case "cold, with some fog and light winds":
        return weatherPallette[1];

      case "cool to moderate, a mixture of foggy and clear days, light winds":
        return weatherPallette[2];

      case "cool to moderate, with some fog and light winds":
        return weatherPallette[3];

      case "moderate to hot, clear skies and heavy winds":
        return weatherPallette[4];

      case "moderate to hot, clear skies and light winds":
        return weatherPallette[5];

      default:
        return "gray";
    }
  }

  function updateLegendGradientScale(legend, startColor, endColor, min, max) {
    legend.innerHTML = "<div class=\"slider-neighborhoods__legend-content\">\n    <div style=\"background:linear-gradient(90deg, ".concat(startColor, " 0%, ").concat(endColor, " 100%\" class=\"slider-neighborhoods__legend-box\">\n    </div>\n    <div class=\"slider-neighborhoods__legend-text-container\">\n    <p class=\"slider-neighborhoods__legend-text\">").concat(min, "</p>\n    <p class=\"slider-neighborhoods__legend-text\">").concat(max, "</p>\n    </div>\n    </div>");
  }

  function updateLegendPunctuatedScale(legend, palletteArr) {
    var legendTemplate = "<div id=\"weather-see-more\" class=\"listings-single__features-see-more\"><span id=\"see-more-text\" class=\"listings-single__features-see-more-btn\">show legend</span></div>\n    <div id=\"weather-content\" class=\"slider-neighborhoods__legend-content slider-neighborhoods__legend-content--punctuated\">";
    weatherValues.forEach(function (weather, i) {
      legendTemplate += "\n      <div style=\"display: flex; gap: 1rem; flex-direction: column;\" class=\"slider-neighborhoods__legend-box-container\">\n        <p>".concat(weather.temperature, "</p>\n      <div class=\"slider-neighborhoods__legend-boxes-container\">\n        <div style=\"background: ").concat(weather.weatherGroup[0].color, "; min-width: 2rem; min-height: 2rem;\" class=\"slider-neighborhoods__legend-box--filled\"></div>\n        <p style=\"padding-left: 0.5rem;\" class=\"slider-neighborhoods__legend-text\">").concat(weather.weatherGroup[0].fogWind, "</p>\n      </div>\n      <div class=\"slider-neighborhoods__legend-boxes-container\">\n          <div style=\"background: ").concat(weather.weatherGroup[1].color, "; min-width: 2rem; min-height: 2rem;\" class=\"slider-neighborhoods__legend-box--filled\"></div>\n          <p style=\"padding-left: 0.5rem;\"class=\"slider-neighborhoods__legend-text\">").concat(weather.weatherGroup[1].fogWind, "</p>\n      </div>\n    </div>");
    });
    legendTemplate += "</div>";
    legend.innerHTML = legendTemplate;
    var weatherContent = document.getElementById("weather-content");
    var seeMore = document.getElementById("weather-see-more");
    var seeMoreText = document.getElementById("see-more-text");
    var active = true;
    seeMore.addEventListener("click", function () {
      if (active) {
        seeMoreText.innerHTML = "hide legend";
        weatherContent.style.maxHeight = "500px";
        active = false;
      } else {
        seeMoreText.innerHTML = "show legend";
        weatherContent.style.maxHeight = "0px";
        active = true;
      }
    });
  }

  function colorIconArr(value) {
    var legend = document.getElementById("legend");
    var inactiveColor = "gray";
    var currentNeighborhood = "red";
    var inactiveNeighborhoods = ["presidio", "golden-gate-park", "lincoln-park", // "hunters-point",
    "tenderloin"];
    iconArr.forEach(function (icon) {
      allSlides.forEach(function (slide) {
        if (icon.dataset.name == slide.neighborhood) {
          // a matched neighborhood and slide
          var domain;
          var min;
          var max;
          var color;

          if (value == "single median sale price" && !inactiveNeighborhoods.includes(icon.dataset.name)) {
            min = minMedianSingle;
            max = maxMedianSingle;
            domain = slide.HJISingleMonthly.result.measurements.salePrice.median;
            color = "hsl(0, 41%, ".concat(Math.abs(scaleRange(domain, min, max) * 50 - 50), "%)");
            updateLegendGradientScale(legend, "hsl(0,41%,50%)", "hsl(0,41%,0%)", _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(min), _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(max)); // color = `hsl(${scaleRange(domain, min, max) * 255}, 41%, 50%)`
            // color = `hsl(0, 41%, ${Math.abs((scaleRange(domain, min, max) * 100)-100)}%)`
          } else if (value == "transit score" && !inactiveNeighborhoods.includes(icon.dataset.name)) {
            domain = slide.transitscore;
            min = 40;
            max = 100;
            color = "hsl(0, 41%, ".concat(Math.abs(scaleRange(domain, min, max) * 50 - 50), "%)");
            updateLegendGradientScale(legend, "hsl(0,41%,50%)", "hsl(0,41%,0%)", 50, 100);
          } else if (value == "walk score") {
            domain = slide.walkscore;
            min = 40;
            max = 100;
            color = "hsl(0, 41%, ".concat(Math.abs(scaleRange(domain, min, max) * 50 - 50), "%)");
            updateLegendGradientScale(legend, "hsl(0,41%,50%)", "hsl(0,41%,0%)", 40, 100); // color = `hsl(${scaleRange(domain, min, max) * 255}, 41%, 50%)`
          } else if (value == "weather") {
            domain = slide.walkscore;
            color = colorWeather(slide.weather, weatherPallette);
            updateLegendPunctuatedScale(legend, weatherPallette);
          }

          if (domain == 0) {
            // no data is available for the domain
            styleIcon(icon, inactiveColor, true);
          } else if (icon.dataset.name === currentNeighborhood) {
            // the current URL of the Neighborhood
            styleIcon(icon, currentNeighborhoodColor, true);
          } // Active neighborhoods with data
          else {
            styleIcon(icon, color);
          }
        }
      });

      if (inactiveNeighborhoods.includes(icon.dataset.name) && (value == "transit score" || value == "single median sale price")) {
        // an inactive neighborhood
        styleIcon(icon, inactiveColor, true);
      }
    });

    function styleIcon(icon, backgroundColor) {
      var disablePointerEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // gets the background and filters all text svgs
      var iconBackgrounds = Array.from(icon.children).filter(function (HTMLObjectElement) {
        return HTMLObjectElement.localName != "text";
      }); // loops through the background svgs

      iconBackgrounds.forEach(function (iconBackground) {
        // fills polygons
        iconBackground.style.fill = backgroundColor; // fills paths inside the g tag

        Array.from(iconBackground.children).forEach(function (path) {
          path.style.fill = backgroundColor;

          if (disablePointerEvents) {
            path.style.pointerEvents = "none";
          }
        });
      });
    }
  }

  colorIconArr("transit score");
  var filtersArr = Array.from(document.querySelectorAll(".slider-neighborhoods__filter"));
  var value = "transit score";
  filtersArr.forEach(function (el) {
    el.addEventListener("click", function () {
      if (!el.classList.contains("slider-neighborhoods__filter--active")) {
        document.querySelector(".slider-neighborhoods__filter--active").classList.remove("slider-neighborhoods__filter--active");
        el.classList.add("slider-neighborhoods__filter--active");
      }

      value = el.dataset.filter;
      closeToolTip();
      colorIconArr(value);
    });
  }); // console.log(value);
  // * set the correct slide active on first load *

  setSlide(slidesArr[0].elem, 0);
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
/* harmony import */ var _resources_resources_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/resources-links */ "./src/scripts/resources/resources-links.js");
/* harmony import */ var _resources_slider_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/slider-modal-video */ "./src/scripts/resources/slider-modal-video.js");



document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_slider_neighborhoods__WEBPACK_IMPORTED_MODULE_0__.sliderNeighborhoods)();
  (0,_resources_resources_links__WEBPACK_IMPORTED_MODULE_1__.resourcesLinks)();
});
(0,_resources_slider_modal_video__WEBPACK_IMPORTED_MODULE_2__.sliderModalVideo)();
})();

/******/ })()
;