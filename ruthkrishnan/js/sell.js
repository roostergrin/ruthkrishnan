/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/scripts/pages/sell.js ***!
  \***********************************/
document.addEventListener('DOMContentLoaded', function () {
  var playButton = document.querySelector('.sell-video__play-btn'),
      thumbnail = document.querySelector('.sell-video__thumbnail'),
      video = document.querySelector('.sell-video__video');
  video.addEventListener('loadeddata', function () {});
  playButton.addEventListener('click', function () {
    video.src = video.dataset.src;
    playButton.classList.add('sell-video__play-btn--hidden');
    thumbnail.classList.add('sell-video__thumbnail--hidden');
    video.classList.add('sell-video__video--active');
  });
});
/******/ })()
;