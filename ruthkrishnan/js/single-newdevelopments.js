/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*****************************************************!*\
  !*** ./src/scripts/pages/single-newdevelopments.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_gmaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/gmaps */ "./src/scripts/resources/gmaps.js");
/* harmony import */ var _resources_photo_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/photo-gallery */ "./src/scripts/resources/photo-gallery.js");
/* harmony import */ var _resources_form_new_dev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/form-new-dev */ "./src/scripts/resources/form-new-dev.js");



document.addEventListener('DOMContentLoaded', function () {
  var playButton = Array.from(document.querySelectorAll('.new-developments-single-video__play-btn')),
      videoContainer = Array.from(document.querySelectorAll('.new-developments-single-video__video-container')),
      thumbnail = Array.from(document.querySelectorAll('.new-developments-single-video__thumbnail')),
      video = Array.from(document.querySelectorAll('.new-developments-single-video__video'));
  (0,_resources_gmaps__WEBPACK_IMPORTED_MODULE_0__.setMap)();
  (0,_resources_photo_gallery__WEBPACK_IMPORTED_MODULE_1__.photoGallery)();
  (0,_resources_form_new_dev__WEBPACK_IMPORTED_MODULE_2__.formNewDev)();
  video.forEach(function (vid) {
    vid.addEventListener('loadeddata', function () {});
  });
  videoContainer.forEach(function (vid, i) {
    vid.addEventListener('click', function () {
      video[i].src = video[i].dataset.src;
      playButton[i].classList.add('new-developments-single-video__play-btn--hidden');
      thumbnail[i].classList.add('new-developments-single-video__thumbnail--hidden');
      video[i].classList.add('new-developments-single-video__video--active');
    });
  }); // videoContainer.addEventListener('click', () => {
  //   video.src = video.dataset.src;
  //   playButton.classList.add('new-developments-single-video__play-btn--hidden');
  //   thumbnail.classList.add('new-developments-single-video__thumbnail--hidden');
  //   video.classList.add('new-developments-single-video__video--active');
  // })
});
})();

/******/ })()
;