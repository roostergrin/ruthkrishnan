/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/scripts/pages/single-blog.js ***!
  \******************************************/
document.addEventListener('DOMContentLoaded', function () {
  var shareElem = document.getElementById('blog-share');
  var sharePopup = document.getElementById('share-popup');
  var shareMailIcon = document.querySelector('.heateorSssEmailBackground');
  var shareFacebookIcon = document.querySelector('.heateorSssFacebookBackground');
  var shareLinkedInIcon = document.querySelector('.heateorSssLinkedinBackground');
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
  // Map InfoWindow------------------------------------------------

  if (document.querySelector('.single-posts-neighborhood')) {
    var postsData = Array.from(document.querySelectorAll('.single-posts-neighborhood__neighborhood-post')),
        slidesArr = postsData.map(function (el, i) {
      return {
        name: el.dataset.name,
        title: el.dataset.title,
        elem: el,
        mapinfo: JSON.parse(el.dataset.mapinfo),
        link: el.dataset.link,
        category: el.dataset.category
      };
    }),
        tooltipContainer = document.querySelector('.single-posts-neighborhood__tooltip'),
        tooltipContent = document.getElementById('tooltip-content'),
        closeContainer = document.getElementById('tooltip-close'),
        iconArr = document.querySelectorAll('.map-neighborhoods__icon-neighborhood'),
        heroHeight = document.querySelector('.hero-template').clientHeight;
    var sectionActive = false;
    console.log(slidesArr);

    var closeToolTip = function closeToolTip() {
      if (sectionActive) {
        tooltipContainer.style.opacity = 0;
        tooltipContainer.style.pointerEvents = 'none';
        iconArr.forEach(function (icon) {
          return icon.classList.remove('map-neighborhoods__icon-neighborhood--deactive');
        });
        sectionActive.classList.add('map-neighborhoods__icon-neighborhood--matched');
        sectionActive = false;
      }
    };

    var openTooltip = function openTooltip(event, el) {
      var targetEl = slidesArr.find(function (elem) {
        return elem.name === el.dataset.name;
      });
      var mapContent = '';

      if (!sectionActive) {
        if (targetEl) {
          // add tooltip information
          mapContent += "<div class='single-posts-neighborhood__tooltip-title'>".concat(targetEl.title, "</div>");

          if (targetEl.mapinfo) {
            if (targetEl.mapinfo.information) {
              targetEl.mapinfo.information.forEach(function (info) {
                mapContent += "<div class='single-posts-neighborhood__tooltip-info'>".concat(info.text, "</div>");
              });
            }
          }

          if (targetEl.category === 'active') {
            mapContent += "<a href='".concat(targetEl.link, "' class='single-posts-neighborhood__tooltip-link'>learn more</a>");
          } // append tooltip information


          tooltipContent.innerHTML = mapContent; // show tooltip info window

          tooltipContainer.style.opacity = 1;
          tooltipContainer.style.pointerEvents = 'auto'; // keep info window on screen (no overflow)

          if (event.clientY - 110 < tooltipContainer.clientHeight + 32) {
            tooltipContainer.style.top = "".concat(event.pageY - heroHeight, "px");
          } else {
            tooltipContainer.style.top = "".concat(event.pageY - tooltipContainer.clientHeight - 5 - heroHeight, "px");
          }

          if (window.innerWidth < 601) {
            tooltipContainer.style.left = '50%';
            tooltipContainer.style.transform = "translateX(-50%)";
          } else if (event.clientX < tooltipContainer.clientWidth / 2 + 32) {
            tooltipContainer.style.left = "".concat(event.pageX + 16, "px");
          } else if (window.innerWidth - event.pageX < tooltipContainer.clientWidth / 2 + 32) {
            tooltipContainer.style.left = "".concat(event.pageX - tooltipContainer.clientWidth, "px");
          } else {
            tooltipContainer.style.left = "".concat(event.pageX - tooltipContainer.clientWidth / 2, "px");
          }
        }

        iconArr.forEach(function (icon) {
          if (icon.dataset.name !== el.dataset.name) {
            icon.classList.add('map-neighborhoods__icon-neighborhood--deactive');
          } else {
            icon.classList.remove('map-neighborhoods__icon-neighborhood--deactive');
            icon.classList.remove('map-neighborhoods__icon-neighborhood--matched');
          }
        });
        sectionActive = el;
      }
    }; // * add event listener to all map neighborhoods *


    iconArr.forEach(function (el) {
      var activeEl = slidesArr.find(function (elem) {
        return elem.name === el.dataset.name;
      });

      if (activeEl) {
        el.classList.add('map-neighborhoods__icon-neighborhood--matched');
        el.addEventListener('click', function (event) {
          openTooltip(event, el);
        });
        el.addEventListener('keyup', function (event) {
          openTooltip(event, el);
        });
      }
    });
    closeContainer.addEventListener('click', closeToolTip);
    closeContainer.addEventListener('keyup', closeToolTip); // debounce function

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
      debounce(closeToolTip, null, 200);
    });
  }

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