/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/scripts/pages/privacy.js ***!
  \**************************************/
document.addEventListener('DOMContentLoaded', function () {
  var page = document.querySelector('.page-privacy');
  navigation = document.querySelector('.site-navigation');
  page.style.marginTop = navigation.offsetHeight + 'px';
  navigation.classList.add('site-navigation--active');

  var handleScroll = function handleScroll() {
    navigation.classList.add('site-navigation--active');
  };

  handleScroll();
  window.addEventListener('scroll', function () {
    handleScroll();
  });
});
/******/ })()
;