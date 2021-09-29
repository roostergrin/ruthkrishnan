/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/scripts/pages/careers.js ***!
  \**************************************/
document.addEventListener('DOMContentLoaded', function () {
  var debounceLastTimeout = null; // Set Color Box height

  var setBgHeight = function setBgHeight() {
    var section = document.querySelector('.careers-who'),
        colorbox = document.querySelector('.careers-who__color-box'),
        title = document.querySelector('.careers-who__title'),
        image = document.querySelector('.careers-who__image-container');

    if (window.innerWidth > 880) {
      colorbox.style.height = "".concat(section.offsetHeight - title.offsetHeight, "px");
    } else {
      colorbox.style.height = "".concat(section.offsetHeight - image.offsetHeight * 0.75, "px");
    }
  };

  setBgHeight(); // debounce function

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
    debounce(setBgHeight, null, 300);
  }); // Play Video ------------------------------------------------------------------------

  var videoSlides = Array.from(document.querySelectorAll('.careers-video__video-slide')),
      prevBtn = document.querySelector('.careers-video__nav-prev'),
      nextBtn = document.querySelector('.careers-video__nav-next'),
      dots = Array.from(document.querySelectorAll('.careers-video__nav-dot'));
  var currSlide = 1;

  var setSlideActive = function setSlideActive() {
    // add/remove classes from slides
    videoSlides.forEach(function (slide) {
      if (+slide.dataset.slideindex === currSlide) {
        slide.classList.add('careers-video__video-slide--active');
      } else {
        slide.classList.remove('careers-video__video-slide--active');
      }
    }); // add/remove classes from indicators

    dots.forEach(function (dot) {
      if (+dot.dataset.target === currSlide) {
        dot.classList.add('careers-video__nav-dot--active');
      } else {
        dot.classList.remove('careers-video__nav-dot--active');
      }
    });
  };

  setSlideActive();

  var handleSlideChange = function handleSlideChange(target) {
    if (target === 'prev') {
      currSlide !== 1 ? currSlide-- : currSlide = videoSlides.length;
    } else if (target === 'next') {
      currSlide !== videoSlides.length ? currSlide++ : currSlide = 1;
    } else if (typeof target === 'number') {
      currSlide = target;
    }

    setSlideActive();
  };

  prevBtn.addEventListener('click', function () {
    handleSlideChange('prev');
  });
  nextBtn.addEventListener('click', function () {
    handleSlideChange('next');
  }); // const videoContainer = document.querySelector('.careers-video__video-container')
  //       thumbnail = document.querySelector('.careers-video__thumbnail'),
  //       video = document.querySelector('.careers-video__video'),
  //       playBtn = document.querySelector('.careers-video__play-btn');
  // const playVideo = () => {
  //   thumbnail.classList.add('careers-video__thumbnail--hidden');
  //   playBtn.classList.add('careers-video__play-btn--hidden');
  //   video.src = video.dataset.src;
  // }
  // thumbnail.addEventListener('click', playVideo)
  // playBtn.addEventListener('click', playVideo)
});
/******/ })()
;