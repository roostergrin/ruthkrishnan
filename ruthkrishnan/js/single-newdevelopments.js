/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  console.log('photo gallery script');
};

/***/ }),

/***/ "./src/scripts/resources/site-hero.js":
/*!********************************************!*\
  !*** ./src/scripts/resources/site-hero.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "siteHero": () => (/* binding */ siteHero)
/* harmony export */ });
var siteHero = function siteHero() {
  var el = document.querySelector('.hero-template__wrapper');

  var onScroll = function onScroll() {
    var windowWidth = window.innerWidth,
        transformValue = window.pageYOffset / windowWidth * 500;

    if (windowWidth > 600) {
      el.style.transform = "translateY(".concat(transformValue, "px)");
    } else {
      el.style.transform = 'translateY(0)';
    }
  };

  window.addEventListener('scroll', onScroll);
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
/* harmony import */ var _resources_site_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/site-hero */ "./src/scripts/resources/site-hero.js");
/* harmony import */ var _resources_gmaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/gmaps */ "./src/scripts/resources/gmaps.js");
/* harmony import */ var _resources_photo_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/photo-gallery */ "./src/scripts/resources/photo-gallery.js");



document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_site_hero__WEBPACK_IMPORTED_MODULE_0__.siteHero)();
  (0,_resources_gmaps__WEBPACK_IMPORTED_MODULE_1__.setMap)();
  (0,_resources_photo_gallery__WEBPACK_IMPORTED_MODULE_2__.photoGallery)();
});
})();

/******/ })()
;