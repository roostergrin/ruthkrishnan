/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/gmap-development.js":
/*!***************************************************!*\
  !*** ./src/scripts/resources/gmap-development.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMap": () => (/* binding */ setMap)
/* harmony export */ });
/* harmony import */ var _mapStyles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapStyles.json */ "./src/scripts/resources/mapStyles.json");

var setMap = function setMap(category) {
  var geocoder = new google.maps.Geocoder();
  var developments = document.querySelectorAll(".page-new-developments__development-title-address--".concat(category));
  var openWindow = null;
  var map = new google.maps.Map(document.getElementById('gmapdev'), {
    center: {
      lat: 37.7766805,
      lng: -122.4508183
    },
    zoom: 13,
    fullscreenControl: false,
    styles: _mapStyles_json__WEBPACK_IMPORTED_MODULE_0__
  });
  developments.forEach(function (development, i) {
    if (development.dataset.address) {
      geocoder.geocode({
        address: development.dataset.address
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          var infoTitle = development.dataset.title;
          var infoAddress = results[0].formatted_address.slice(0, -5);
          var infoSlug = development.dataset.slug;
          var content = "\n          <h4 style=\"font-family: 'Avenir Next'; line-height: 1.3333; margin-bottom: 5px; letter-spacing: .5px; font-size: 18px; font-weight: 700\">".concat(infoTitle, "</h4>\n          <p style=\"font-family: 'Avenir Next'; margin-bottom: 1rem;\">").concat(infoAddress, "</p>\n          <a href='https://ruthkrishnan.com/new-developments/").concat(infoSlug, "' style=\"color: #AF5B5B; font-family: 'Avenir Next'; font-weight: 700\">View property</a>\n          ");
          var infoWindow = new google.maps.InfoWindow({
            content: content
          });
          var marker = new google.maps.Marker({
            position: {
              lat: lat,
              lng: lng
            },
            map: map
          });
          marker.addListener('click', function () {
            if (openWindow === infoWindow) {
              openWindow.close();
              openWindow = null;
            } else if (openWindow) {
              openWindow.close();
              infoWindow.open(map, marker);
              openWindow = infoWindow;
            } else {
              infoWindow.open(map, marker);
              openWindow = infoWindow;
            }
          });
        }
      });
    }
  });
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
  !*** ./src/scripts/pages/newdevelopments.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_gmap_development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/gmap-development */ "./src/scripts/resources/gmap-development.js");

document.addEventListener('DOMContentLoaded', function () {
  var allDevelopments = document.querySelectorAll('.page-new-developments__development');
  var availableNowElems = document.querySelectorAll('.page-new-developments__development--available-now');
  var comingSoonElems = document.querySelectorAll('.page-new-developments__development--coming-soon');
  var soldOutElems = document.querySelectorAll('.page-new-developments__development--sold-out');
  var filtersArr = document.querySelectorAll('.page-new-developments__filter');
  var playButton = document.querySelector('.new-developments-single-video__play-btn'),
      videoContainer = document.querySelector('.new-developments-single-video__video-container'),
      thumbnail = document.querySelector('.new-developments-single-video__thumbnail'),
      video = document.querySelector('.new-developments-single-video__video');
  videoContainer.addEventListener('click', function () {
    video.src = video.dataset.src;
    playButton.classList.add('new-developments-single-video__play-btn--hidden');
    thumbnail.classList.add('new-developments-single-video__thumbnail--hidden');
    video.classList.add('new-developments-single-video__video--active');
  });
  (0,_resources_gmap_development__WEBPACK_IMPORTED_MODULE_0__.setMap)('available-now');
  availableNowElems.forEach(function (el) {
    el.classList.add('page-new-developments__development--active');
  });
  filtersArr.forEach(function (el, i) {
    el.addEventListener('click', function () {
      (0,_resources_gmap_development__WEBPACK_IMPORTED_MODULE_0__.setMap)(el.dataset.filter);
      allDevelopments.forEach(function (elem) {
        return elem.classList.remove('page-new-developments__development--active');
      });

      if (el.dataset.filter === 'available-now') {
        availableNowElems.forEach(function (availableElem) {
          availableElem.classList.add('page-new-developments__development--active');
        });
      } else if (el.dataset.filter === 'coming-soon') {
        comingSoonElems.forEach(function (elem) {
          elem.classList.add('page-new-developments__development--active');
        });
      } else if (el.dataset.filter === 'sold-out') {
        soldOutElems.forEach(function (elem) {
          elem.classList.add('page-new-developments__development--active');
        });
      }

      if (!el.classList.contains('page-new-developments__filter--active')) {
        document.querySelector('.page-new-developments__filter--active').classList.remove('page-new-developments__filter--active');
        el.classList.add('page-new-developments__filter--active');
      }
    });
    el.addEventListener('keyup', function () {
      (0,_resources_gmap_development__WEBPACK_IMPORTED_MODULE_0__.setMap)(el.dataset.filter);
      allDevelopments.forEach(function (elem) {
        return elem.classList.remove('page-new-developments__development--active');
      });

      if (el.dataset.filter === 'available-now') {
        availableNowElems.forEach(function (availableElem) {
          availableElem.classList.add('page-new-developments__development--active');
        });
      } else if (el.dataset.filter === 'coming-soon') {
        comingSoonElems.forEach(function (elem) {
          elem.classList.add('page-new-developments__development--active');
        });
      } else if (el.dataset.filter === 'sold-out') {
        soldOutElems.forEach(function (elem) {
          elem.classList.add('page-new-developments__development--active');
        });
      }

      if (!el.classList.contains('page-new-developments__filter--active')) {
        document.querySelector('.page-new-developments__filter--active').classList.remove('page-new-developments__filter--active');
        el.classList.add('page-new-developments__filter--active');
      }
    });
  });
});
})();

/******/ })()
;