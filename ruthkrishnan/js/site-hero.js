/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/scripts/resources/site-hero.js ***!
  \********************************************/
document.addEventListener('DOMContentLoaded', function () {
  var siteHero = function siteHero() {
    var el = document.querySelector('.hero-template__wrapper'),
        img = document.querySelector('.hero-template__background');
    img.style.objectPosition = el.dataset.positionX + ' ' + el.dataset.positionY;

    var onScroll = function onScroll() {
      var windowWidth = window.innerWidth,
          transformValue = window.pageYOffset / windowWidth * 500;

      if (windowWidth > 600) {
        el.style.transform = "translateY(".concat(transformValue, "px)");
      } else {
        el.style.transform = 'translateY(0)';
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
  };

  siteHero();
});
/******/ })()
;