/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/scripts/pages/talks.js ***!
  \************************************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
  var playButton = document.querySelector('.talks-intro__play-btn'),
      thumbnail = document.querySelector('.talks-intro__thumbnail'),
      video = document.querySelector('.talks-intro__video');
  playButton.addEventListener('click', function () {
    video.src = video.dataset.src;
    playButton.classList.add('talks-intro__play-btn--hidden');
    thumbnail.classList.add('talks-intro__thumbnail--hidden');
    video.classList.add('talks-intro__video--active');
  }); // Talks Video Slider -----------------------------------------------

  var slidesData = Array.from(document.querySelectorAll('.talks-video-slider__slide')),
      slidesContainer = document.querySelector('.talks-video-slider__slides'),
      prevArrow = document.querySelector('.talks-video-slider__prev'),
      nextArrow = document.querySelector('.talks-video-slider__next'),
      indicatorsContainer = document.querySelector('.talks-video-slider__indicators'),
      indicators = Array.from(document.querySelectorAll('.talks-video-slider__dot')),
      playBtns = Array.from(document.querySelectorAll('.talks-video-slider__slide-play-btn'));
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
      indicatorsContainer.classList.add('talks-video-slider__indicators--hidden');
      prevArrow.classList.add('talks-video-slider__prev--hidden');
      nextArrow.classList.add('talks-video-slider__next--hidden');
    } else {
      indicatorsContainer.classList.remove('talks-video-slider__indicators--hidden');
      prevArrow.classList.remove('talks-video-slider__prev--hidden');
      nextArrow.classList.remove('talks-video-slider__next--hidden');
    }
  };

  showIndicators();

  var appendSlides = function appendSlides() {
    slidesArr.forEach(function (slide) {
      slide.el.classList.remove('talks-video-slider__slide--prev');
      slide.el.classList.remove('talks-video-slider__slide--curr');
      slide.el.classList.remove('talks-video-slider__slide--next');
      slide.el.dataset.index = slide.index;
      slidesContainer.append(slide.el);
    });
    slidesArr = Array.from(document.querySelectorAll('.talks-video-slider__slide'));
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
        slide.classList.remove('talks-video-slider__slide--curr');
        slide.classList.remove('talks-video-slider__slide--next');
        slide.classList.add('talks-video-slider__slide--prev');
        slide.style.opacity = 0;
        slide.style.transform = 'translateX(-150%)';
      } else if (currSlides.includes(+slide.dataset.index)) {
        slide.classList.remove('talks-video-slider__slide--prev');
        slide.classList.remove('talks-video-slider__slide--next');
        slide.classList.add('talks-video-slider__slide--curr');
        slide.style.opacity = 1;

        if (slidesArr.length === 2 && window.innerWidth > 768) {
          slide.style.transform = "translateX(".concat(100 * currSlides.indexOf(+slide.dataset.index) + 50, "%)");
        } else if (slidesArr.length === 1 && window.innerWidth > 768) {
          slide.style.transform = "translateX(".concat(100 * currSlides.indexOf(+slide.dataset.index) + 100, "%)");
        } else {
          slide.style.transform = "translateX(".concat(100 * currSlides.indexOf(+slide.dataset.index), "%)");
        }
      } else {
        slide.classList.remove('talks-video-slider__slide--prev');
        slide.classList.remove('talks-video-slider__slide--curr');
        slide.classList.add('talks-video-slider__slide--next');
        slide.style.opacity = 0;
        slide.style.transform = 'translateX(300%)';
      }
    });
  };

  setSlides(); // set slide/slide container Height

  var setHeight = function setHeight() {
    var slides = Array.from(document.querySelectorAll('.talks-video-slider__slide')),
        slideHeights = slides.map(function (slide) {
      return slide.scrollHeight;
    }),
        maxHeight = Math.max.apply(Math, _toConsumableArray(slideHeights));
    slidesContainer.style.height = maxHeight + 'px';
  };

  setHeight(); // set indicator active

  var setIndicator = function setIndicator() {
    indicators.forEach(function (dot) {
      return dot.classList.remove('talks-video-slider__dot--active');
    });
    indicators[indicatorActive].classList.add('talks-video-slider__dot--active');
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
  var slideContainers = Array.from(document.querySelectorAll('.talks-video-slider__slide-container')),
      videoModalContainer = document.querySelector('.talks-video-slider__video-modal'),
      videoModal = document.querySelector('.talks-video-slider__video'),
      modalOverlay = document.querySelector('.talks-video-slider__modal-overlay'),
      modalCloseBtn = document.querySelector('.talks-video-slider__close-btn');

  var closeModal = function closeModal() {
    videoModalContainer.classList.remove('talks-video-slider__video-modal--open');
    videoModal.src = '';
  };

  slideContainers.forEach(function (slide, i) {
    slide.addEventListener('click', function () {
      videoModalContainer.classList.add('talks-video-slider__video-modal--open');
      setTimeout(function () {
        videoModal.src = slidesArr[i].dataset.video + '?title=0&byline=0&portrait&autoplay=1';
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

  var sliderContainer = document.querySelector('.talks-video-slider__slides');
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
/******/ })()
;