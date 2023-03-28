/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/form-exclusive-access.js":
/*!********************************************************!*\
  !*** ./src/scripts/resources/form-exclusive-access.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formExclusiveAccess": () => (/* binding */ formExclusiveAccess)
/* harmony export */ });
var formExclusiveAccess = function formExclusiveAccess() {
  var formElem = document.getElementById('exclusive-access-form');

  if (formElem) {
    var sendEmail = function sendEmail() {
      console.log(formElem.email.value);
      axios.post('https://ruthkrishnan.com/wp-json/rg-mail/v1/exclusive-access', {
        email: formElem.email.value
      }).then(function (res) {
        formElem.email.value = '';
        setTimeout(function () {
          window.location.href = '/thank-you';
        }, 150);
      })["catch"](function (err) {
        console.log(err);
      });
    };

    formElem.addEventListener('submit', function (event) {
      event.preventDefault();
      sendEmail();
    });
  }
};

/***/ }),

/***/ "./src/scripts/resources/form-new-dev.js":
/*!***********************************************!*\
  !*** ./src/scripts/resources/form-new-dev.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formNewDev": () => (/* binding */ formNewDev)
/* harmony export */ });
var formNewDev = function formNewDev() {
  var formElem = document.getElementById('new-dev-form');

  if (formElem) {
    var validateForm = function validateForm() {
      var errorMessages = Array.from(document.querySelectorAll('.form-new-dev__validation-message')),
          fullnameValidation = document.getElementById('fullname-validation'),
          emailValidation = document.getElementById('email-validation'),
          phoneValidation = document.getElementById('phone-validation'),
          propertyValidation = document.getElementById('property-validation'),
          addressValidation = document.getElementById('address-validation');
      var errorFields;
      errorMessages.forEach(function (message) {
        return message.style.opacity = 0;
      });
      errorFields = [];

      if (!/^(?![\s.]+$)[a-zA-Z\s.]*$/.test(formElem.fullname.value) || formElem.fullname.value === '') {
        errorFields.push('fullname');
      }

      if (formElem.email.value === '') {
        errorFields.push('email');
      }

      if (!/^[0-9-+\s()]*$/.test(formElem.phone.value) || formElem.phone.value === '' || formElem.phone.value.length < 7) {
        errorFields.push('phone');
      }

      if (formElem.property.value === '') {
        errorFields.push('property');
      }

      if (formElem.address.value === '') {
        errorFields.push('address');
      }

      if (errorFields.length > 0) {
        console.log(errorFields);
        errorFields.forEach(function (err) {
          switch (err) {
            case 'fullname':
              fullnameValidation.style.opacity = 1;
              break;

            case 'email':
              emailValidation.style.opacity = 1;
              break;

            case 'phone':
              phoneValidation.style.opacity = 1;
              break;

            case 'property':
              propertyValidation.style.opacity = 1;
              break;

            case 'address':
              addressValidation.style.opacity = 1;
              break;
          }
        });
      } else {
        sendEmail();
      }
    };

    var sendEmail = function sendEmail() {
      axios.post('https://ruthkrishnan.com/wp-json/rg-mail/v1/form-new-dev', {
        fullname: formElem.fullname.value,
        email: formElem.email.value,
        phone: formElem.phone.value,
        property: formElem.property.value,
        address: formElem.address.value,
        message: formElem.message.value
      }).then(function (res) {
        formElem.fullname.value = '';
        formElem.email.value = '';
        formElem.phone.value = '';
        formElem.property.value = '';
        formElem.property.value = '';
        formElem.message.value = '';
        setTimeout(function () {
          window.location.href = '/thank-you';
        }, 150);
      })["catch"](function (err) {
        console.log(err);
      });
    };

    formElem.addEventListener('submit', function (event) {
      event.preventDefault();
      validateForm();
    });
  }
};

/***/ }),

/***/ "./src/scripts/resources/gmaps.js":
/*!****************************************!*\
  !*** ./src/scripts/resources/gmaps.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMap": () => (/* binding */ setMap)
/* harmony export */ });
/* harmony import */ var _mapStyles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapStyles.json */ "./src/scripts/resources/mapStyles.json");

var setMap = function setMap() {
  if (document.querySelector('#gmapnd')) {
    var geocoder = new google.maps.Geocoder();
    var address = document.querySelector('#gmapnd').getAttribute('data-address');
    geocoder.geocode({
      address: address
    }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();

        if (google) {
          var map = new google.maps.Map(document.getElementById('gmapnd'), {
            center: {
              lat: lat,
              lng: lng
            },
            zoom: 17,
            fullscreenControl: false,
            styles: _mapStyles_json__WEBPACK_IMPORTED_MODULE_0__
          });
          new google.maps.Marker({
            position: map.getCenter(),
            map: map
          });
        }
      }
    });
  }
};

/***/ }),

/***/ "./src/scripts/resources/listings-hero.js":
/*!************************************************!*\
  !*** ./src/scripts/resources/listings-hero.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listingsHero": () => (/* binding */ listingsHero)
/* harmony export */ });
var listingsHero = function listingsHero() {
  var el = document.querySelector('.hero-listings__wrapper'),
      img = document.querySelector('.hero-listings__background');
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

/***/ }),

/***/ "./src/scripts/resources/listings-neighborhood-gallery.js":
/*!****************************************************************!*\
  !*** ./src/scripts/resources/listings-neighborhood-gallery.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listingsNeighborhhodGallery": () => (/* binding */ listingsNeighborhhodGallery)
/* harmony export */ });
var listingsNeighborhhodGallery = function listingsNeighborhhodGallery() {
  if (document.querySelector('.listings-neighborhood__photo-gallery')) {
    var currSlide = 0,
        paginationContent;
    var slider = document.querySelector('.listings-neighborhood__photo-gallery-slider'),
        sliderLength = slider.dataset.sliderLength,
        slide = document.querySelectorAll('.listings-neighborhood__photo-gallery-slide'),
        dot = document.querySelectorAll('.listings-neighborhood__photo-gallery-dot'),
        numpagination = document.querySelector('.listings-neighborhood__numpagination'),
        prev = document.querySelector('.listings-neighborhood__photo-gallery-icon--prev'),
        next = document.querySelector('.listings-neighborhood__photo-gallery-icon--next'),
        img = document.querySelectorAll('.listings-neighborhood__photo-gallery-image');

    var setSlide = function setSlide() {
      slide.forEach(function (slide) {
        currSlide === +slide.dataset.index ? slide.classList.add('listings-neighborhood__photo-gallery-slide--active') : slide.classList.remove('listings-neighborhood__photo-gallery-slide--active');
      });

      if (numpagination) {
        paginationContent = "".concat(currSlide + 1, " / ").concat(+numpagination.dataset.slides);
        numpagination.innerHTML = paginationContent;
      } else {
        dot.forEach(function (dot) {
          currSlide === +dot.dataset.index ? dot.classList.add('listings-neighborhood__photo-gallery-dot--active') : dot.classList.remove('listings-neighborhood__photo-gallery-dot--active');
        });
      }
    };

    setSlide();

    var changeSlide = function changeSlide(str) {
      if (str === 'prev') {
        currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--;
        setSlide();
      }

      ;

      if (str === 'next') {
        currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++;
        setSlide();
      }

      ;
    };

    var goToSlide = function goToSlide(val) {
      currSlide = val;
      setSlide();
    };

    prev.addEventListener('click', function () {
      changeSlide('prev');
    });
    next.addEventListener('click', function () {
      changeSlide('next');
    });
    dot.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goToSlide(i);
      });
    });
  }
};

/***/ }),

/***/ "./src/scripts/resources/photo-gallery--2.js":
/*!***************************************************!*\
  !*** ./src/scripts/resources/photo-gallery--2.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "photoGalleryTwo": () => (/* binding */ photoGalleryTwo)
/* harmony export */ });
var photoGalleryTwo = function photoGalleryTwo() {
  var currSlide = 0,
      paginationContent;
  var slider = document.querySelector('.photo-gallery__slider--2'),
      sliderLength = slider.dataset.sliderLength,
      slide = document.querySelectorAll('.photo-gallery__slide--2'),
      dot = document.querySelectorAll('.photo-gallery__dot--2'),
      numpagination = document.querySelector('.photo-gallery__numpagination--2'),
      prev = document.querySelector('.photo-gallery__prev--2'),
      next = document.querySelector('.photo-gallery__next--2'),
      img = document.querySelectorAll('.photo-gallery__image--2');

  var setSlide = function setSlide() {
    slide.forEach(function (slide) {
      currSlide === +slide.dataset.index ? slide.classList.add('photo-gallery__slide--active--2') : slide.classList.remove('photo-gallery__slide--active--2');
    });

    if (numpagination) {
      paginationContent = "".concat(currSlide + 1, " / ").concat(+numpagination.dataset.slides);
      numpagination.innerHTML = paginationContent;
    } else {
      dot.forEach(function (dot) {
        currSlide === +dot.dataset.index ? dot.classList.add('photo-gallery__dot--active--2') : dot.classList.remove('photo-gallery__dot--active--2');
      });
    }
  };

  setSlide();

  var changeSlide = function changeSlide(str) {
    if (str === 'prev') {
      currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--;
      setSlide();
    }

    ;

    if (str === 'next') {
      currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++;
      setSlide();
    }

    ;
  };

  var goToSlide = function goToSlide(val) {
    currSlide = val;
    setSlide();
  };

  prev.addEventListener('click', function () {
    changeSlide('prev');
  });
  next.addEventListener('click', function () {
    changeSlide('next');
  });
  dot.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      goToSlide(i);
    });
  });
};

/***/ }),

/***/ "./src/scripts/resources/photo-gallery.js":
/*!************************************************!*\
  !*** ./src/scripts/resources/photo-gallery.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "photoGallery": () => (/* binding */ photoGallery)
/* harmony export */ });
var photoGallery = function photoGallery() {
  if (document.querySelector(".photo-gallery__slider")) {
    var currSlide = 0,
        paginationContent;
    var slider = document.querySelector(".photo-gallery__slider"),
        sliderLength = slider.dataset.sliderLength,
        slide = document.querySelectorAll(".photo-gallery__slide"),
        dot = document.querySelectorAll(".photo-gallery__dot"),
        numpagination = document.querySelector(".photo-gallery__numpagination"),
        prev = document.querySelector(".photo-gallery__prev"),
        next = document.querySelector(".photo-gallery__next"),
        img = document.querySelectorAll(".photo-gallery__image");

    var setSlide = function setSlide() {
      slide.forEach(function (slide) {
        currSlide === +slide.dataset.index ? slide.classList.add("photo-gallery__slide--active") : slide.classList.remove("photo-gallery__slide--active");
      });

      if (numpagination) {
        paginationContent = "".concat(currSlide + 1, " / ").concat(+numpagination.dataset.slides);
        numpagination.innerHTML = paginationContent;
      } else {
        dot.forEach(function (dot) {
          currSlide === +dot.dataset.index ? dot.classList.add("photo-gallery__dot--active") : dot.classList.remove("photo-gallery__dot--active");
        });
      }
    };

    setSlide();

    var changeSlide = function changeSlide(str) {
      if (str === "prev") {
        currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--;
        setSlide();
      }

      if (str === "next") {
        currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++;
        setSlide();
      }
    };

    var goToSlide = function goToSlide(val) {
      currSlide = val;
      setSlide();
    };

    prev.addEventListener("click", function () {
      changeSlide("prev");
    });
    next.addEventListener("click", function () {
      changeSlide("next");
    });
    dot.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goToSlide(i);
      });
    });
  }
};

/***/ }),

/***/ "./src/scripts/resources/testimonials.js":
/*!***********************************************!*\
  !*** ./src/scripts/resources/testimonials.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testimonials": () => (/* binding */ testimonials)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var testimonials = function testimonials() {
  if (document.querySelector('.testimonials-section')) {
    var imageSlide = document.querySelectorAll('.testimonials-section__image-slide'),
        contentSlide = document.querySelectorAll('.testimonials-section__content-slide'),
        sliderLength = document.querySelector('.testimonials-section__images-slider').dataset.imageSliderLength,
        dot = document.querySelectorAll('.testimonials-section__dot'),
        content = Array.from(document.querySelectorAll('.testimonials-section__content')),
        contentWrapper = document.querySelector('.testimonials-section__content-wrapper'),
        prevArrow = document.querySelector('.testimonials-section__nav--prev'),
        nextArrow = document.querySelector('.testimonials-section__nav--next');

    if (!imageSlide || !contentSlide || !sliderLength || !dot || !content || !contentWrapper || !prevArrow || !nextArrow) {
      return;
    }

    var currSlide = 0,
        maxHeight = Math.max.apply(Math, _toConsumableArray(content.map(function (el) {
      return el.clientHeight;
    })));
    contentWrapper.style.height = maxHeight + 'px';
    window.addEventListener('resize', function () {
      maxHeight = Math.max.apply(Math, _toConsumableArray(content.map(function (el) {
        return el.clientHeight;
      })));
      contentWrapper.style.height = maxHeight + 'px';
    });

    var setSlide = function setSlide() {
      imageSlide.forEach(function (image) {
        currSlide === +image.dataset.imageIndex - 1 ? image.classList.add('testimonials-section__image-slide--active') : image.classList.remove('testimonials-section__image-slide--active');
      });
      contentSlide.forEach(function (content) {
        currSlide === +content.dataset.contentIndex - 1 ? content.classList.add('testimonials-section__content-slide--active') : content.classList.remove('testimonials-section__content-slide--active');
      });
      dot.forEach(function (dot) {
        currSlide === +dot.dataset.index ? dot.classList.add('photo-gallery__dot--active') : dot.classList.remove('photo-gallery__dot--active');
      });
    };

    var hideSlides = function hideSlides() {
      imageSlide.forEach(function (image) {
        // currSlide === +image.dataset.imageIndex - 1 ? image.setAttribute('aria-hidden', false) : image.setAttribute('aria-hidden', true)
        currSlide === +image.dataset.imageIndex - 1 ? image.setAttribute('tabindex', 0) : image.setAttribute('tabindex', -1);
      });
      contentSlide.forEach(function (content) {
        currSlide === +content.dataset.contentIndex - 1 ? content.setAttribute('aria-hidden', false) : content.setAttribute('aria-hidden', true);
        currSlide === +content.dataset.contentIndex - 1 ? content.setAttribute('tabindex', 0) : content.setAttribute('tabindex', -1);
      });
    };

    setSlide();
    hideSlides(); // const autoSlide = setInterval(() => {
    //   currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++
    //   setSlide();
    // }, 12000)

    var goToSlide = function goToSlide(val) {
      // clearInterval(autoSlide)
      currSlide = val;
      setSlide();
      hideSlides();
    };

    var toPrevSlide = function toPrevSlide() {
      // clearInterval(autoSlide);
      currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--;
      setSlide();
      hideSlides();
    };

    var toNextSlide = function toNextSlide() {
      // clearInterval(autoSlide);
      currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++;
      setSlide();
      hideSlides();
    };

    prevArrow.addEventListener('click', toPrevSlide);
    prevArrow.addEventListener('keyup', toPrevSlide);
    nextArrow.addEventListener('click', toNextSlide);
    nextArrow.addEventListener('keyup', toNextSlide);
    dot.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goToSlide(i);
      });
      dot.addEventListener('keyup', function () {
        goToSlide(i);
      });
    });
  }
};

/***/ }),

/***/ "./src/scripts/resources/mapStyles.json":
/*!**********************************************!*\
  !*** ./src/scripts/resources/mapStyles.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"color":"#af5b5b"},{"lightness":45}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#b0b0b0"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./src/scripts/pages/single-listings.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_listings_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/listings-hero */ "./src/scripts/resources/listings-hero.js");
/* harmony import */ var _resources_photo_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/photo-gallery */ "./src/scripts/resources/photo-gallery.js");
/* harmony import */ var _resources_photo_gallery_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/photo-gallery--2 */ "./src/scripts/resources/photo-gallery--2.js");
/* harmony import */ var _resources_listings_neighborhood_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/listings-neighborhood-gallery */ "./src/scripts/resources/listings-neighborhood-gallery.js");
/* harmony import */ var _resources_gmaps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/gmaps */ "./src/scripts/resources/gmaps.js");
/* harmony import */ var _resources_testimonials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/testimonials */ "./src/scripts/resources/testimonials.js");
/* harmony import */ var _resources_form_exclusive_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resources/form-exclusive-access */ "./src/scripts/resources/form-exclusive-access.js");
/* harmony import */ var _resources_form_new_dev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/form-new-dev */ "./src/scripts/resources/form-new-dev.js");








document.addEventListener('DOMContentLoaded', function () {
  var playBtn = document.querySelector('.listings-single__play-btn'),
      modalCloseBtn = document.querySelector('.listings-single__modal-close'),
      videoModal = document.querySelector('.listings-single__modal-tour'),
      modalOverlay = document.querySelector('.listings-single__modal-overlay'),
      iframeVideo = document.querySelector('.listings-single__modal-video'),
      featSeeMoreBtn = document.querySelector('.listings-single__features-see-more'),
      featList = document.querySelector('.listings-single__features-list'),
      featOverlay = document.querySelector('.listings-single__features-overlay'),
      photoGalleryElem = document.querySelector('.photo-gallery'),
      photoGalleryElem2 = document.querySelector('.photo-gallery--2');
  var featExpanded = false; // Imported Scripts ------------------------
  // Listings Hero Functionality

  (0,_resources_listings_hero__WEBPACK_IMPORTED_MODULE_0__.listingsHero)(); // Photo Gallery Functionality

  if (photoGalleryElem) {
    (0,_resources_photo_gallery__WEBPACK_IMPORTED_MODULE_1__.photoGallery)();
  }

  if (photoGalleryElem2) {
    // Sorry, they need it NOW
    (0,_resources_photo_gallery_2__WEBPACK_IMPORTED_MODULE_2__.photoGalleryTwo)();
  } // Listings Neighborhood Functionality


  (0,_resources_listings_neighborhood_gallery__WEBPACK_IMPORTED_MODULE_3__.listingsNeighborhhodGallery)(); // Google Map

  (0,_resources_gmaps__WEBPACK_IMPORTED_MODULE_4__.setMap)(); // Testimonials

  (0,_resources_testimonials__WEBPACK_IMPORTED_MODULE_5__.testimonials)(); // From Exclusive Access

  (0,_resources_form_exclusive_access__WEBPACK_IMPORTED_MODULE_6__.formExclusiveAccess)(); // Form New Dev

  (0,_resources_form_new_dev__WEBPACK_IMPORTED_MODULE_7__.formNewDev)(); // END Imported Scripts -------------------
  // Features See More

  var toggleFeatures = function toggleFeatures() {
    var featBtn = document.querySelector('.listings-single__features-see-more-btn');

    if (featExpanded) {
      featList.style.height = '425px';
      featOverlay.style.opacity = 1;
      featExpanded = false;
      setTimeout(function () {
        featBtn.innerHTML = 'see more';
      }, 150);
    } else {
      featList.style.height = featList.scrollHeight + 'px';
      featOverlay.style.opacity = 0;
      featExpanded = true;
      setTimeout(function () {
        featBtn.innerHTML = 'see less';
      }, 150);
    }
  };

  if (featList.scrollHeight < 457) {
    featList.style.height = 'auto';
    featSeeMoreBtn.style.display = 'none';
    featOverlay.style.display = 'none';
  } else {
    featSeeMoreBtn.addEventListener('click', toggleFeatures);
  }

  var featSeeMoreBtn2 = document.querySelector('.listings-single__features-see-more--2'),
      featList2 = document.querySelector('.listings-single__features-list--2'),
      featOverlay2 = document.querySelector('.listings-single__features-overlay--2');

  var toggleFeatures2 = function toggleFeatures2() {
    var featBtn2 = document.querySelector('.listings-single__features-see-more-btn--2');

    if (featExpanded) {
      featList2.style.height = '425px';
      featOverlay2.style.opacity = 1;
      featExpanded = false;
      setTimeout(function () {
        featBtn2.innerHTML = 'see more';
      }, 150);
    } else {
      featList2.style.height = featList2.scrollHeight + 'px';
      featOverlay2.style.opacity = 0;
      featExpanded = true;
      setTimeout(function () {
        featBtn2.innerHTML = 'see less';
      }, 150);
    }
  };

  if (featList2.scrollHeight < 457) {
    featList2.style.height = 'auto';
    featSeeMoreBtn2.style.display = 'none';
    featOverlay2.style.display = 'none';
  } else {
    featSeeMoreBtn2.addEventListener('click', toggleFeatures2);
  }
});
})();

/******/ })()
;