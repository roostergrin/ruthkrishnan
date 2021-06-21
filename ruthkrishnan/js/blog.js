/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/scripts/pages/blog.js ***!
  \***********************************/
document.addEventListener('DOMContentLoaded', function () {
  var postRows = document.querySelectorAll('.page-blog-main__posts-row');
  postRows.forEach(function (el, i) {
    if (i % 2 !== 0) {
      el.classList.add('page-blog-main__posts-row--alt');
    }
  });
});
/******/ })()
;