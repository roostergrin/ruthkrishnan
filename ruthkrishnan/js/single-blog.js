/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/scripts/pages/single-blog.js ***!
  \******************************************/
document.addEventListener('DOMContentLoaded', function () {
  var shareElem = document.getElementById('blog-share');
  var sharePopup = document.getElementById('share-popup');
  var copyButton = document.getElementById('share-copy-button');
  var blogShareActive = false;

  var openShare = function openShare() {
    if (blogShareActive) {
      blogShareActive = false;
      sharePopup.classList.remove('post-blog__infobar-share-popup--active');
    } else {
      blogShareActive = true;
      sharePopup.classList.add('post-blog__infobar-share-popup--active');
    }
  };

  shareElem.addEventListener('click', openShare);

  var copyText = function copyText() {
    var inputElem = document.getElementById('share-copy-link');
    inputElem.setAttribute('readonly', '');
    inputElem.select();
    document.execCommand('copy');
    copyButton.style.background = '#2fd64c';
    setTimeout(function () {
      copyButton.style.background = '#e1e1e1';
    }, 1250);
  };

  copyButton.addEventListener('click', copyText);
});
/******/ })()
;