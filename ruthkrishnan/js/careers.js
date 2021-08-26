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

  var videoContainer = document.querySelector('.careers-video__video-container');
  thumbnail = document.querySelector('.careers-video__thumbnail'), video = document.querySelector('.careers-video__video'), playBtn = document.querySelector('.careers-video__play-btn');

  var playVideo = function playVideo() {
    thumbnail.classList.add('careers-video__thumbnail--hidden');
    playBtn.classList.add('careers-video__play-btn--hidden');
    video.src = video.dataset.src;
  };

  thumbnail.addEventListener('click', playVideo);
  playBtn.addEventListener('click', playVideo);
});
/******/ })()
;