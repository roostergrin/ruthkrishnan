/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/scripts/pages/single-careers.js ***!
  \*********************************************/
document.addEventListener('DOMContentLoaded', function () {
  var playButton = document.querySelector('.single-careers-video__play-btn'),
      videoContainer = document.querySelector('.single-careers-video__video-container'),
      thumbnail = document.querySelector('.single-careers-video__thumbnail'),
      video = document.querySelector('.single-careers-video__video'); //  page = document.querySelector('.single-careers')
  //       navigation = document.querySelector('.site-navigation');
  // page.style.marginTop = navigation.offsetHeight + 'px'

  video.addEventListener('loadeddata', function () {});
  videoContainer.addEventListener('click', function () {
    video.src = video.dataset.src;
    playButton.classList.add('single-careers-video__play-btn--hidden');
    thumbnail.classList.add('single-careers-video__thumbnail--hidden');
    video.classList.add('single-careers-video__video--active');
  });
});
/******/ })()
;