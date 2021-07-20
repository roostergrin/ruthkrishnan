/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./src/scripts/pages/thankyou.js ***!
  \***************************************/
document.addEventListener('DOMContentLoaded', function () {
  var debounceLastTimeout = null;

  var setPageHeight = function setPageHeight() {
    var header = document.querySelector('.site-navigation'),
        subscribe = document.querySelector('.form-subscribe'),
        footer = document.querySelector('.footer'),
        thankyou = document.querySelector('.page-thank-you__container');

    if (window.innerHeight - (subscribe.offsetHeight + footer.offsetHeight + header.offsetHeight / 2) > 280) {
      thankyou.style.height = "".concat(window.innerHeight - (subscribe.offsetHeight + footer.offsetHeight + header.offsetHeight / 2), "px");
      thankyou.style.marginTop = "".concat(header.offsetHeight / 2, "px");
    } else {
      thankyou.style.marginTop = "".concat(header.offsetHeight / 2, "px");
    }

    header.classList.add('site-navigation--active');
  };

  setPageHeight(); // debounce function

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
    debounce(setPageHeight, null, 300);
  });
});
/******/ })()
;