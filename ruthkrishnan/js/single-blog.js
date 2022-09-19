/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/scripts/pages/single-blog.js ***!
  \******************************************/
document.addEventListener('DOMContentLoaded', function () {
  var shareElem = document.getElementById('blog-share');
  var sharePopup = document.getElementById('share-popup');
  var shareMailIcon = document.querySelector('.heateor_sss_email');
  var shareFacebookIcon = document.querySelector('.heateor_sss_facebook');
  var shareLinkedInIcon = document.querySelector('.heateor_sss_button_linkedin');
  var copyButton = document.getElementById('share-copy-button');
  var blogShareActive = false;

  var openShare = function openShare() {
    if (blogShareActive) {
      blogShareActive = false;
      sharePopup.classList.remove('post-blog__infobar-share-popup--active');
    } else {
      blogShareActive = true;
      sharePopup.classList.add('post-blog__infobar-share-popup--active');
      shareMailIcon.setAttribute('tabindex', '0');
      shareFacebookIcon.setAttribute('tabindex', '0');
      shareLinkedInIcon.setAttribute('tabindex', '0');
    }
  };

  shareElem.addEventListener('click', openShare);
  shareElem.addEventListener('keyup', openShare);
  shareMailIcon.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      shareMailIcon.onclick();
    }
  });
  shareFacebookIcon.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      shareFacebookIcon.onclick();
    }
  });
  shareLinkedInIcon.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      shareLinkedInIcon.onclick();
    }
  });

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

  copyButton.addEventListener('click', copyText); // copyButton.addEventListener('keyup', copyText);

  function formatNumber(num) {
    return "<strong>$" + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "</strong>";
  }

  var taxInput = document.getElementById("consideration-paid");
  var consideration;
  var rate;
  var rateMultiplier;
  var transferTax;
  var resultDisplay = document.getElementById("estimated-tax");
  var taxRateDisplay = document.getElementById("tax-rate");

  if (taxInput) {
    taxInput.addEventListener("keyup", function () {
      consideration = this.value;

      if (consideration <= 250000) {
        rate = 2.5;
      } else if (consideration > 250000 && consideration < 1000000) {
        rate = 3.4;
      } else if (consideration >= 1000000 && consideration < 5000000) {
        rate = 3.75;
      } else if (consideration >= 5000000 && consideration < 10000000) {
        rate = 11.25;
      } else if (consideration >= 5000000 && consideration < 10000000) {
        rate = 11.25;
      } else if (consideration >= 10000000 && consideration < 25000000) {
        rate = 13.75;
      } else if (consideration >= 25000000) {
        rate = 15;
      }

      rateMultiplier = Math.ceil(consideration / 500);
      transferTax = rate * rateMultiplier;
      taxRateDisplay.innerHTML = "<strong>$".concat(rate, "</strong>");
      resultDisplay.innerHTML = formatNumber(Math.round(transferTax * 100) / 100);
    });
  }
});
/******/ })()
;